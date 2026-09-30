import { loadCSS, createOptimizedPicture, toClassName } from '../../scripts/aem.js';
import { el, readConfig, pick } from '../../scripts/beautystack.js';

/*
 * Hero Slider (revlon.com homepage slideshow)
 *
 * Config rows, authored first, before the slides:
 *   Autoplay       on | off                 (default on)
 *   Speed          seconds per slide        (default 5)
 *   Navigation     bars | dots | none       (default bars: progress bars that fill
 *                                            over the autoplay interval)
 *   Transition     fade | slide             (default fade)
 *   Height         px | full                desktop height (default 550)
 *   Mobile Height  natural | px             (default natural: the tallest mobile image)
 *   Animation      on | off                 text rise-in and image slide-in (default on)
 *
 * One row per slide:
 *   desktop image | mobile image (optional) | text | slide settings (optional)
 *   text:     heading (h1/h2 = large display, h3-h6 = letter-spaced), description,
 *             CTA (a paragraph holding one link; bold link = solid button,
 *             italic link = outlined button). The whole slide links to the CTA.
 *   settings: one per line, all optional (things authoring cannot express):
 *             Position: bottom right          Mobile Position: bottom center
 *             Text Width: 86% 410             (width and/or max width)
 *             Title Size: 18pt / 15pt         Subtitle Size: 15pt / 12pt  (desktop / mobile)
 *             Text Color: light | dark
 *   An .mp4 link in the media cell plays as a muted looping background.
 */

const CONFIG = {
  autoplay: ['autoplay', 'auto-play'],
  speed: ['speed', 'interval', 'duration'],
  navigation: ['navigation', 'nav', 'pagination', 'indicators'],
  transition: ['transition', 'effect'],
  height: ['height', 'desktop-height'],
  mobileHeight: ['mobile-height'],
  animation: ['animation', 'animations'],
};
const SETTINGS = {
  position: ['position', 'desktop-position', 'text-position'],
  mobilePosition: ['mobile-position'],
  textWidth: ['text-width', 'width', 'max-width'],
  textColor: ['text-color', 'color', 'ink'],
  titleSize: ['title-size', 'heading-size'],
  subtitleSize: ['subtitle-size', 'description-size', 'text-size'],
};
const REDUCED = '(prefers-reduced-motion: reduce)';
const VIDEO_RE = /\.(mp4|webm|mov|m4v)(\?|#|$)/i;
const onOff = (v, dflt) => {
  const p = pick(v, ['on', 'off'], {
    true: 'on', yes: 'on', false: 'off', no: 'off',
  });
  return p ? p === 'on' : dflt;
};

function parsePosition(value) {
  const tokens = toClassName(value || '').split('-').filter(Boolean);
  let v = tokens.find((t) => ['top', 'middle', 'bottom'].includes(t));
  let h = tokens.find((t) => ['left', 'right'].includes(t));
  if (tokens.includes('center')) {
    // "center" fills whichever axis is not named explicitly
    if (!h) h = 'center';
    if (!v && (tokens.filter((t) => t === 'center').length > 1 || tokens.length === 1 || h !== 'center')) v = 'middle';
  }
  return { v, h };
}

/** "50pt / 40pt" or "66 / 53" -> ['66.67px', '53.33px'] (desktop / mobile) */
function parseSizes(value) {
  if (!value) return [];
  return value.split(/[/,]/).map((v) => {
    const m = v.trim().match(/^([\d.]+)\s*(px|pt|rem|em)?$/i);
    if (!m) return undefined;
    const n = Number.parseFloat(m[1]);
    const unit = (m[2] || 'px').toLowerCase();
    if (unit === 'pt') return `${Math.round(n * (4 / 3) * 100) / 100}px`;
    return `${n}${unit}`;
  });
}

/** "86% 410" / "410" / "86%" -> { width: '86%', max: '410px' } */
function parseWidth(value) {
  const out = {};
  (value || '').split(/[\s/,]+/).forEach((t) => {
    const m = t.match(/^([\d.]+)(%|px)?$/);
    if (!m) return;
    if (m[2] === '%') out.width = `${m[1]}%`;
    else out.max = `${m[1]}px`;
  });
  return out;
}

function readSettings(cell) {
  const out = {};
  const lookup = {};
  Object.entries(SETTINGS).forEach(([k, aliases]) => {
    [k, ...aliases].forEach((a) => { lookup[toClassName(a)] = k; });
  });
  const lines = [...cell.querySelectorAll('p, li')].map((p) => p.textContent.trim()).filter(Boolean);
  if (!lines.length && cell.textContent.trim()) lines.push(...cell.textContent.split('\n').map((l) => l.trim()).filter(Boolean));
  lines.forEach((line) => {
    const m = line.match(/^([^:]+):\s*(.+)$/);
    const key = m && lookup[toClassName(m[1])];
    if (key) out[key] = m[2].trim();
  });
  return out;
}

function isSettingsCell(cell) {
  const lines = [...cell.querySelectorAll('p, li')].map((p) => p.textContent.trim()).filter(Boolean);
  return lines.length > 0 && lines.every((l) => /^[^:]{2,30}:\s*\S/.test(l)) && Object.keys(readSettings(cell)).length > 0;
}

function mediaOf(cell) {
  const img = cell.querySelector('img');
  const video = [...cell.querySelectorAll('a')].find((a) => VIDEO_RE.test(a.href));
  if (!img && !video) return null;
  if (cell.querySelector('h1, h2, h3, h4, h5, h6')) return null;
  const textWithoutLinks = [...cell.querySelectorAll('p')].filter((p) => !p.querySelector('picture, img') && !(video && p.contains(video)));
  if (textWithoutLinks.some((p) => p.textContent.trim())) return null;
  return {
    src: img?.src,
    alt: img?.alt || '',
    ratio: img && img.getAttribute('width') && img.getAttribute('height')
      ? Number(img.getAttribute('height')) / Number(img.getAttribute('width')) : null,
    video: video?.href,
  };
}

/** <picture> with the desktop image above 768px and the mobile image below it. */
function slidePicture(desktop, mobile, eager) {
  const pic = createOptimizedPicture(mobile ? mobile.src : desktop.src, desktop.alt, eager, [{ width: '750' }]);
  const big = createOptimizedPicture(desktop.src, desktop.alt, eager, [{ media: '(min-width: 769px)', width: '2000' }, { width: '750' }]);
  [...big.querySelectorAll('source[media]')].reverse().forEach((s) => pic.prepend(s));
  const img = pic.querySelector('img');
  img.className = 'hero-slider-image';
  img.draggable = false;
  if (eager) img.setAttribute('fetchpriority', 'high');
  return pic;
}

function textBlock(cell) {
  const heading = cell.querySelector('h1, h2, h3, h4, h5, h6');
  const out = { heading, body: [], cta: [] };
  [...cell.children].forEach((node) => {
    if (node === heading || node.contains(heading)) return;
    const links = [...node.querySelectorAll('a')];
    const onlyLink = links.length === 1 && node.textContent.trim() === links[0].textContent.trim();
    if (onlyLink) {
      const a = links[0];
      // bold / italic links (or the site's button decoration of them: .primary / .secondary)
      let style = 'text';
      if (node.querySelector('strong a, a strong') || a.classList.contains('primary')) style = 'solid';
      else if (node.querySelector('em a, a em') || a.classList.contains('secondary')) style = 'outline';
      out.cta.push({ href: a.getAttribute('href'), label: a.textContent.trim(), style });
      return;
    }
    if (node.textContent.trim()) out.body.push(node);
  });
  return out;
}

function cropped(child) {
  return el('span', { class: 'hero-slider-crop' }, el('span', { class: 'hero-slider-rise' }, child));
}

export default async function decorate(block) {
  const fontCss = loadCSS('https://use.typekit.net/dnl7slg.css').catch(() => {});
  const cfg = readConfig(block, CONFIG);
  const reduced = window.matchMedia?.(REDUCED).matches;
  const autoplay = onOff(cfg.autoplay, true) && !reduced;
  const speed = Math.max(1, Number.parseFloat(cfg.speed) || 5) * 1000;
  const nav = pick(cfg.navigation, ['bars', 'dots', 'none'], { progress: 'bars', off: 'none', hidden: 'none' }) || 'bars';
  const transition = pick(cfg.transition, ['fade', 'slide'], { swipe: 'slide', carousel: 'slide' }) || 'fade';
  const animate = onOff(cfg.animation, true) && !reduced;
  const heightCfg = (cfg.height || '').toLowerCase();
  const mobileHeightCfg = (cfg.mobileHeight || '').toLowerCase();

  // ---- slides ----
  const eagerBlock = !block.closest('.section')?.previousElementSibling;
  const slides = [...block.children].map((row) => {
    const cells = [...row.children];
    const media = [];
    let text;
    let settings = {};
    cells.forEach((cell) => {
      const m = mediaOf(cell);
      if (m) {
        media.push(m);
        return;
      }
      if (isSettingsCell(cell)) {
        settings = readSettings(cell);
        return;
      }
      if (!text && cell.textContent.trim()) text = textBlock(cell);
    });
    return {
      desktop: media[0], mobile: media[1], text, settings,
    };
  }).filter((s) => s.desktop || s.text);
  if (!slides.length) return;

  const track = el('div', { class: 'hero-slider-track' });
  const slideEls = slides.map((s, i) => {
    const eager = eagerBlock && i === 0;
    const pos = parsePosition(s.settings.position);
    const mpos = parsePosition(s.settings.mobilePosition);
    const v = pos.v || 'bottom';
    const h = pos.h || 'center';
    const ink = pick(s.settings.textColor, ['light', 'dark'], {
      white: 'light', black: 'dark', inverse: 'light',
    }) || 'light';
    const slide = el('div', {
      class: `hero-slider-slide text-${ink}`,
      role: 'group',
      'aria-roledescription': 'slide',
      'aria-label': `${i + 1} of ${slides.length}`,
    });

    const mediaEl = el('div', { class: 'hero-slider-media' });
    if (s.desktop?.video) {
      const video = el('video', {
        class: 'hero-slider-image', src: s.desktop.video, muted: true, loop: true, playsinline: true, autoplay: !reduced, 'aria-hidden': 'true',
      });
      video.muted = true;
      mediaEl.append(video);
    } else if (s.desktop) {
      mediaEl.append(slidePicture(s.desktop, s.mobile, eager));
    }
    slide.append(mediaEl);

    const cta = s.text?.cta?.[0];
    if (cta) {
      slide.append(el('a', {
        class: 'hero-slider-link', href: cta.href, tabindex: '-1', 'aria-hidden': 'true', draggable: 'false',
      }));
    }

    if (s.text) {
      const content = el('div', { class: 'hero-slider-content' });
      const width = parseWidth(s.settings.textWidth);
      if (width.width) content.style.width = width.width;
      if (width.max) content.style.maxWidth = width.max;
      const [titleD, titleM] = parseSizes(s.settings.titleSize);
      const [subD, subM] = parseSizes(s.settings.subtitleSize);
      if (titleD) content.style.setProperty('--hero-slider-title-size', titleD);
      if (titleM || titleD) content.style.setProperty('--hero-slider-title-size-mobile', titleM || titleD);
      if (subD) content.style.setProperty('--hero-slider-subtitle-size', subD);
      if (subM || subD) content.style.setProperty('--hero-slider-subtitle-size-mobile', subM || subD);
      if (s.text.heading) {
        const hd = document.createElement(s.text.heading.tagName);
        hd.innerHTML = s.text.heading.innerHTML;
        const size = /^H[12]$/.test(hd.tagName) ? 'large' : 'spaced';
        content.append(el('div', { class: `hero-slider-title hero-slider-title-${size}` }, cropped(hd)));
      }
      if (s.text.body.length) {
        const sub = el('div', { class: 'hero-slider-subtitle' });
        s.text.body.forEach((b) => {
          const p = el('p');
          p.innerHTML = b.innerHTML;
          sub.append(p);
        });
        content.append(cropped(sub));
      }
      if (s.text.cta.length) {
        content.append(el('div', { class: 'hero-slider-cta' }, s.text.cta.map((c) => el('a', {
          class: `hero-slider-button hero-slider-button-${c.style}`, href: c.href, text: c.label,
        }))));
      }
      slide.append(el(
        'div',
        { class: `hero-slider-text v-${v} h-${h} mv-${mpos.v || v} mh-${mpos.h || h}` },
        el('div', { class: 'hero-slider-cell' }, content),
      ));
    }
    track.append(slide);
    return slide;
  });

  // mobile natural height = the tallest mobile (or desktop) image
  const ratios = slides.map((s) => (s.mobile || s.desktop)?.ratio).filter(Boolean);
  if (ratios.length) block.style.setProperty('--hero-slider-mobile-ratio', `${1 / Math.max(...ratios)}`);
  if (heightCfg === 'full' || heightCfg === '100vh') block.style.setProperty('--hero-slider-height', '100vh');
  else if (Number.parseInt(heightCfg, 10)) block.style.setProperty('--hero-slider-height', `${Number.parseInt(heightCfg, 10)}px`);
  if (Number.parseInt(mobileHeightCfg, 10)) block.style.setProperty('--hero-slider-mobile-height', `${Number.parseInt(mobileHeightCfg, 10)}px`);
  else block.classList.add('mobile-natural');
  block.style.setProperty('--hero-slider-speed', `${speed}ms`);

  block.classList.add(`transition-${transition}`, `nav-${nav}`);
  if (animate) block.classList.add('animated');

  const viewport = el('div', {
    class: 'hero-slider-viewport', role: 'region', 'aria-roledescription': 'carousel', 'aria-label': 'Featured', tabindex: '0',
  }, track);

  // ---- navigation ----
  const navItems = [];
  let navEl = null;
  if (nav !== 'none' && slides.length > 1) {
    navEl = el('ol', { class: 'hero-slider-nav' });
    slideEls.forEach((_, i) => {
      const b = el('button', { type: 'button', class: 'hero-slider-nav-item', 'aria-label': `Go to slide ${i + 1}` });
      // eslint-disable-next-line no-use-before-define
      b.addEventListener('click', () => goTo(i));
      navItems.push(b);
      navEl.append(el('li', {}, b));
    });
  }

  const pauseBtn = el('button', { type: 'button', class: 'hero-slider-pause', 'aria-live': 'polite' }, 'Pause slideshow');
  let paused = false; // user pressed pause
  let held = false; // hover / focus inside
  let current = -1;
  let timer;

  function schedule() {
    clearTimeout(timer);
    block.classList.toggle('is-playing', autoplay && !paused && !held && slides.length > 1);
    if (!autoplay || paused || held || slides.length < 2) return;
    // eslint-disable-next-line no-use-before-define
    timer = setTimeout(() => goTo(current + 1), speed);
  }

  function goTo(index) {
    const next = (index + slides.length) % slides.length;
    if (next === current) return;
    const prev = current;
    current = next;
    slideEls.forEach((s, i) => {
      const on = i === next;
      s.classList.toggle('is-selected', on);
      s.setAttribute('aria-hidden', String(!on));
      s.inert = !on;
      s.classList.toggle('animate-out', i === prev && prev !== -1);
    });
    if (prev !== -1) setTimeout(() => slideEls[prev]?.classList.remove('animate-out'), 450);
    // first paint: never animate the LCP image in
    block.classList.toggle('first-slide', prev === -1);
    if (transition === 'slide') track.style.transform = `translateX(${-100 * next}%)`;
    navItems.forEach((b, i) => {
      b.classList.toggle('is-selected', i === next);
      if (i === next) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
      // restart the progress bar
      if (i === next) {
        b.classList.remove('is-selected');
        b.getBoundingClientRect();
        b.classList.add('is-selected');
      }
    });
    slideEls[next].querySelectorAll('video').forEach((v) => v.play?.().catch(() => {}));
    schedule();
  }

  pauseBtn.addEventListener('click', () => {
    paused = !paused;
    block.classList.toggle('is-paused', paused);
    pauseBtn.textContent = paused ? 'Play slideshow' : 'Pause slideshow';
    schedule();
  });

  // pause while pointer or focus is inside (resume when it leaves)
  const hold = (on) => { held = on; schedule(); };
  viewport.addEventListener('mouseenter', () => hold(true));
  viewport.addEventListener('mouseleave', () => hold(false));
  block.addEventListener('focusin', () => hold(true));
  block.addEventListener('focusout', (e) => { if (!block.contains(e.relatedTarget)) hold(false); });

  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); }
  });

  // swipe / drag
  let drag = null;
  viewport.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    drag = {
      x: e.clientX, y: e.clientY, dx: 0, dy: 0, id: e.pointerId,
    };
  });
  viewport.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    drag.dx = e.clientX - drag.x;
    drag.dy = e.clientY - drag.y;
  });
  const endDrag = () => {
    if (!drag) return;
    const { dx, dy } = drag;
    drag = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      goTo(current + (dx < 0 ? 1 : -1));
      // swallow the click that follows a drag so the slide link doesn't fire
      viewport.addEventListener('click', (c) => { c.preventDefault(); c.stopPropagation(); }, { capture: true, once: true });
    }
  };
  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);
  viewport.addEventListener('pointerleave', endDrag);
  viewport.addEventListener('dragstart', (e) => e.preventDefault());

  block.replaceChildren(pauseBtn, viewport, navEl || '');
  goTo(0);
  await fontCss;
}
