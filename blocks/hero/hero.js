import {
  el, icon, loadBeautystack, readConfig, pick, isLinkOnly, dsButton, dsPicture,
} from '../../scripts/beautystack.js';

/*
 * Hero (Beautystack Organisms/Hero)
 *
 * Layout = block variant (it swaps the whole structure):
 *   hero                 Hero Primary (default)
 *   hero (campaign)      Primary Campaign, two panels; alias: split
 *   hero (secondary)     Secondary, 50/50 copy + media
 *   hero (tertiary)      Tertiary, page header, media optional
 *   hero (image)         Image (legacy)
 *   hero (inverse)       Inverse (legacy)
 *
 * Config rows (things authoring cannot express):
 *   Backdrop         solid | overlay            (not on secondary)
 *   Content Tone     dark | paper | alt
 *   Block Placement  left | center | right      (not on secondary: there the
 *                                               authored cell order decides)
 *   Text Alignment   left | center
 *   Controls Side    left | right               (video pause/mute corner)
 *
 * Authoring decides everything that is show/hide: eyebrow (text before the
 * heading), short description, CTA (a paragraph holding one link), and media
 * (an image, or a link to an .mp4 with an optional poster image). No media =
 * the colour-block state. On campaign the copy sits over whichever panel
 * (row) it is authored in.
 */

const CONFIG = {
  backdrop: ['backdrop'],
  tone: ['content-tone', 'tone', 'plate-tone'],
  placement: ['block-placement', 'placement', 'position', 'overlay-position'],
  textAlign: ['text-alignment', 'text-align', 'alignment', 'align'],
  controls: ['controls-side', 'controls', 'video-controls'],
};

const VIDEO_RE = /\.(mp4|webm|mov|m4v)(\?|#|$)/i;
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

/** Splits one authored area (row or cell list) into media + copy. */
function parseArea(cells) {
  const media = {};
  const copy = { body: [] };
  const nodes = [];
  cells.forEach((cell) => {
    // a cell can hold bare text or block-level elements
    const kids = [...cell.children];
    if (!kids.length && cell.textContent.trim()) nodes.push(el('p', { text: cell.textContent.trim() }));
    else nodes.push(...kids);
  });

  nodes.forEach((node) => {
    const videoLink = [...node.querySelectorAll('a'), ...(node.tagName === 'A' ? [node] : [])]
      .find((a) => VIDEO_RE.test(a.href));
    if (videoLink && !media.video) {
      media.video = videoLink.href;
      return;
    }
    const img = node.tagName === 'PICTURE' ? node.querySelector('img') : node.querySelector('picture img, img');
    if (img && !node.textContent.trim()) {
      if (!media.image && !media.poster) {
        media.image = img.currentSrc || img.src;
        media.alt = img.alt;
      }
      return;
    }
    if (/^H[1-6]$/.test(node.tagName)) {
      if (!copy.heading) copy.heading = node;
      return;
    }
    if (!node.textContent.trim()) return;
    if (!copy.heading) {
      if (!copy.eyebrow) copy.eyebrow = node.textContent.trim();
      return;
    }
    if (isLinkOnly(node) && !copy.cta) {
      const a = node.tagName === 'A' ? node : node.querySelector('a');
      copy.cta = { label: a.textContent.trim(), href: a.getAttribute('href') };
      return;
    }
    copy.body.push(node);
  });
  // an image authored next to a video link is its poster
  if (media.video && media.image) {
    media.poster = media.image;
    delete media.image;
  }
  return { media: media.video || media.image ? media : null, copy };
}

function hasMedia(media) {
  return !!(media && (media.video || media.image));
}

function transport(video, side, startsPlaying) {
  const btn = (label, glyph) => el(
    'button',
    {
      type: 'button',
      class: 'ds-icon-button ds-icon-button--primary ds-icon-button--inverse ds-icon-button--xs ds-media-frame__transport-btn',
      'aria-label': label,
    },
    icon(glyph),
  );
  let playing = startsPlaying;
  let muted = true;
  const play = btn(playing ? 'Pause background video' : 'Play background video', playing ? 'pause' : 'play');
  const mute = btn('Unmute background video', 'volume-x');
  play.addEventListener('click', () => {
    playing = !playing;
    if (playing) video.play().catch(() => {}); else video.pause();
    play.replaceChildren(icon(playing ? 'pause' : 'play'));
    play.setAttribute('aria-label', playing ? 'Pause background video' : 'Play background video');
  });
  mute.addEventListener('click', () => {
    muted = !muted;
    video.muted = muted;
    mute.replaceChildren(icon(muted ? 'volume-x' : 'volume-2'));
    mute.setAttribute('aria-label', muted ? 'Unmute background video' : 'Mute background video');
  });
  return el(
    'div',
    { class: `ds-media-frame__transport ds-media-frame__transport--${side} ds-hero__video-controls` },
    play,
    mute,
  );
}

/** Renders media for a slot: returns an array of nodes (media + optional controls). */
function renderMedia(media, className, side, eager) {
  if (!hasMedia(media)) return [];
  if (media.video) {
    const reduced = window.matchMedia?.(REDUCED_MOTION).matches;
    const video = el('video', {
      class: className,
      src: media.video,
      poster: media.poster,
      loop: true,
      playsinline: true,
      muted: true,
      autoplay: !reduced,
      'aria-hidden': 'true',
      preload: eager ? 'auto' : 'metadata',
    });
    video.muted = true;
    if (!reduced) video.play?.().catch(() => {});
    return [video, transport(video, side, !reduced)];
  }
  return [dsPicture(media.image, '', className, eager)];
}

function scrim(media, on) {
  return on && hasMedia(media) ? el('div', { class: 'ds-hero__scrim', 'aria-hidden': 'true' }) : null;
}

function copyNodes(copy, {
  eyebrowClass, headingClass, bodyClass, ctaInverse,
}) {
  const out = [];
  if (copy.eyebrow) out.push(el('p', { class: eyebrowClass, text: copy.eyebrow }));
  if (copy.heading) {
    const h = document.createElement(copy.heading.tagName);
    h.className = headingClass;
    h.innerHTML = copy.heading.innerHTML;
    out.push(h);
  }
  copy.body.forEach((b) => {
    const p = el('p', { class: bodyClass });
    p.innerHTML = b.innerHTML;
    out.push(p);
  });
  if (copy.cta) {
    out.push(dsButton({
      label: copy.cta.label, href: copy.cta.href, variant: 'primary', inverse: ctaInverse,
    }));
  }
  return out;
}

function lockup(mode, media, textAlign, children) {
  const plate = mode === 'solid' && hasMedia(media) ? ' ds-hero__plate' : '';
  return el('div', { class: `ds-hero__lockup ds-hero__lockup--text-${textAlign}${plate}` }, ...children);
}

export default async function decorate(block) {
  const loading = loadBeautystack();
  const raw = readConfig(block, CONFIG);
  const layouts = ['campaign', 'secondary', 'tertiary', 'image', 'inverse'];
  let variant = layouts.find((v) => block.classList.contains(v)) || 'primary';
  if (block.classList.contains('split')) variant = 'campaign';

  const mode = pick(raw.backdrop, ['solid', 'overlay'], { scrim: 'overlay', block: 'solid' }) || 'solid';
  const tone = pick(raw.tone, ['dark', 'paper', 'alt'], { 'dark-ground': 'dark', light: 'paper', inverse: 'dark' }) || 'dark';
  const placementCfg = pick(raw.placement, ['left', 'center', 'right'], { centre: 'center', middle: 'center' });
  const alignCfg = pick(raw.textAlign, ['left', 'center'], { centre: 'center' });
  const controlsCfg = pick(raw.controls, ['left', 'right']);

  const rows = [...block.children].filter((r) => r.textContent.trim() || r.querySelector('picture, img, a'));
  const eager = !block.closest('.section')?.previousElementSibling;
  const lightTone = tone !== 'dark';
  const overlay = mode === 'overlay';
  const toneCls = ` ds-hero--tone-${tone}`;
  const backdropCls = ` ds-hero--backdrop-${mode}`;
  const textAlignDefault = ['secondary', 'campaign', 'image', 'inverse'].includes(variant) ? 'left' : 'center';
  const textAlign = alignCfg || textAlignDefault;

  let placement = placementCfg || (variant === 'tertiary' ? 'center' : 'left');
  let section;

  if (variant === 'campaign') {
    // two panels: one per row, or one per cell when both are authored in a single row
    let areas = rows.map((r) => parseArea([...r.children]));
    if (areas.length === 1 && rows[0].children.length > 1) {
      areas = [...rows[0].children].map((c) => parseArea([c]));
    }
    areas = areas.slice(0, 2);
    const textIndex = Math.max(0, areas.findIndex((a) => a.copy.heading));
    const textOnFirst = textIndex === 0;
    const x = controlsCfg || (placement === 'right' ? 'left' : 'right');
    section = el('section', {
      class: `ds-hero ds-hero--split ds-hero--place-${placement}${toneCls}${backdropCls}`,
      'aria-label': 'Featured campaigns',
    });
    areas.forEach((area, i) => {
      const isText = i === textIndex && area.copy.heading;
      let side;
      if (i === 0) side = textOnFirst ? x : (controlsCfg || 'left');
      else side = textOnFirst ? (controlsCfg || 'right') : x;
      const panel = el('div', { class: `ds-hero__panel${isText ? ' ds-hero__panel--inverse' : ''}` });
      panel.append(...renderMedia(area.media, 'ds-hero__panel-media', side, eager && i === 0));
      if (!hasMedia(area.media)) panel.append(el('div', { class: 'ds-hero__panel-media ds-hero__panel-media--ground', 'aria-hidden': 'true' }));
      if (isText) {
        panel.append(scrim(area.media, overlay) || '');
        panel.append(el('div', { class: 'ds-hero__content' }, lockup(mode, area.media, textAlign, copyNodes(area.copy, {
          eyebrowClass: 'ds-hero__eyebrow',
          headingClass: 'ds-hero__heading',
          bodyClass: 'ds-hero__body',
          ctaInverse: !lightTone,
        }))));
      }
      section.append(panel);
    });
  } else if (variant === 'secondary') {
    // cell order decides which half the copy occupies
    const cells = rows.flatMap((r) => [...r.children]);
    const mediaCellIndex = cells.findIndex((c) => {
      const a = parseArea([c]);
      return hasMedia(a.media) && !a.copy.heading;
    });
    const copyCells = cells.filter((_, i) => i !== mediaCellIndex);
    const { copy } = parseArea(copyCells);
    const media = mediaCellIndex >= 0 ? parseArea([cells[mediaCellIndex]]).media : null;
    const copyIndex = cells.findIndex((c, i) => i !== mediaCellIndex && c.textContent.trim());
    placement = media && mediaCellIndex < copyIndex ? 'right' : 'left';
    const x = controlsCfg || (placement === 'right' ? 'left' : 'right');
    section = el('section', {
      class: `ds-hero ds-hero--secondary ds-hero--place-${placement}${toneCls}`,
      'aria-label': 'Campaign band',
    });
    section.append(el('div', { class: `ds-hero__secondary-content ds-hero__lockup--text-${textAlign}` }, ...copyNodes(copy, {
      eyebrowClass: 'ds-hero__eyebrow ds-hero__eyebrow--inverse',
      headingClass: 'ds-hero__display ds-hero__display--secondary',
      bodyClass: 'ds-hero__body ds-hero__body--inverse',
      ctaInverse: !lightTone,
    })));
    if (media) {
      section.append(el('div', { class: 'ds-hero__secondary-media' }, ...renderMedia(media, 'ds-hero__panel-media', x, eager)));
    }
  } else {
    const { media, copy } = parseArea(rows.flatMap((r) => [...r.children]));
    const x = controlsCfg || (placement === 'right' ? 'left' : 'right');
    if (variant === 'primary') {
      section = el('section', {
        class: `ds-hero ds-hero--primary ds-hero--place-${placement}${toneCls}${backdropCls}`,
        'aria-label': 'Featured campaign',
      });
      section.append(...renderMedia(media, 'ds-hero__bg', x, eager));
      section.append(scrim(media, overlay) || '');
      section.append(el('div', { class: 'ds-hero__primary-content' }, lockup(mode, media, textAlign, copyNodes(copy, {
        eyebrowClass: 'ds-hero__eyebrow ds-hero__eyebrow--inverse',
        headingClass: 'ds-hero__display',
        bodyClass: 'ds-hero__body ds-hero__body--inverse',
        ctaInverse: !lightTone,
      }))));
    } else if (variant === 'tertiary') {
      const withMedia = hasMedia(media);
      section = el('section', {
        class: `ds-hero ds-hero--tertiary ds-hero--place-${placement}${toneCls}${backdropCls}`,
        'aria-label': 'Page header',
      });
      section.append(...renderMedia(media, 'ds-hero__bg', x, eager));
      section.append(scrim(media, overlay) || '');
      section.append(el('div', { class: 'ds-hero__tertiary-content' }, lockup(mode, media, textAlign, copyNodes(copy, {
        eyebrowClass: withMedia ? 'ds-hero__eyebrow ds-hero__eyebrow--inverse' : 'ds-hero__eyebrow',
        headingClass: withMedia ? 'ds-hero__display ds-hero__display--tertiary ds-hero__display--inverse' : 'ds-hero__display ds-hero__display--tertiary',
        bodyClass: withMedia ? 'ds-hero__body ds-hero__body--inverse' : 'ds-hero__body',
        ctaInverse: withMedia && !lightTone,
      }))));
    } else {
      // legacy image / inverse bands
      section = el('section', {
        class: `ds-hero ds-hero--${variant}`,
        'aria-label': 'Featured campaign',
      });
      if (hasMedia(media)) section.append(...renderMedia(media, 'ds-hero__bg', x, eager));
      section.append(el('div', { class: 'ds-hero__content' }, ...copyNodes(copy, {
        eyebrowClass: 'ds-hero__eyebrow',
        headingClass: 'ds-hero__heading',
        bodyClass: 'ds-hero__body',
        ctaInverse: variant === 'inverse',
      })));
    }
  }

  await loading;
  block.replaceChildren(section);
}
