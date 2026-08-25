import {
  loadHeader,
  loadFooter,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForFirstImage,
  loadSection,
  loadSections,
  loadCSS,
  buildBlock,
} from './aem.js';

if (window.trustedTypes && window.trustedTypes.createPolicy) {
  const innerTT = window.trustedTypes.createPolicy('tt-inner', {
    createHTML: (s) => s, // avoid stack overflow
  });

  window.trustedTypes.createPolicy('default', {
    createHTML: (input, type, sink) => {
      let processedInput = input;
      if (/srcdoc\s*=/i.test(processedInput)) {
        const doc = new DOMParser().parseFromString(innerTT.createHTML(processedInput), 'text/html');
        doc.querySelectorAll('iframe[srcdoc]').forEach((el) => el.removeAttribute('srcdoc'));
        processedInput = doc.body.innerHTML;
      }
      if (sink.includes('createContextualFragment') || sink.includes('Document write')) {
        const doc = new DOMParser().parseFromString(innerTT.createHTML(processedInput), 'text/html');
        doc.querySelectorAll('script').forEach((el) => el.remove());
        processedInput = doc.body.innerHTML;
      }
      return processedInput;
    },
    createScriptURL: (input) => input,
    createScript: (input) => input,
  });
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

/**
 * Turns `/widgets/...` links into widget blocks.
 * @param {Element} main The container element
 */
function buildWidgetAutoBlocks(main) {
  const widgetLinks = [...main.querySelectorAll('a[href*="/widgets/"]')];
  widgetLinks.forEach((link) => {
    if (link.closest('.widget')) return;
    const newLink = link.cloneNode(true);
    const widgetBlock = buildBlock('widget', { elems: [newLink] });
    const p = link.closest('p');
    if (
      p
      && p.querySelectorAll('a').length === 1
      && p.querySelector('a') === link
      && p.textContent.trim() === link.textContent.trim()
    ) {
      p.replaceWith(widgetBlock);
    } else {
      link.replaceWith(widgetBlock);
    }
  });
}

/**
 * Prepends a "Back" button on detail pages (leaders, success stories, events).
 * The button uses browser history so it returns the user to wherever they
 * came from. It is skipped on listing/folder pages and hidden when there is
 * no in-site history to go back to (e.g. a direct landing from search).
 * Called only after lazy-styles.css (which styles it) has loaded — see
 * loadLazy — so it never flashes on screen unstyled.
 * @param {Element} main The container element
 */
function buildBackButton(main) {
  // skip detached fragment mains (header/footer/fragments); only the page main
  if (main !== document.querySelector('main')) return;
  // only individual detail pages: `/leaders/<slug>`, `/success-stories/<slug>`,
  // and `/events/<slug>`
  const isDetailPage = /^\/(leaders|success-stories|events)\/[^/]+/.test(window.location.pathname);
  if (!isDetailPage) return;
  if (window.history.length <= 1) return;

  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'back-button';
  back.setAttribute('aria-label', 'Go back');
  back.textContent = 'Back';
  back.addEventListener('click', () => window.history.back());
  main.prepend(back);
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    // auto load `*/fragments/*` references
    const fragments = [...main.querySelectorAll('a[href*="/fragments/"]')].filter((f) => !f.closest('.fragment'));
    if (fragments.length > 0) {
      // eslint-disable-next-line import/no-cycle
      import('../blocks/fragment/fragment.js').then(({ loadFragment }) => {
        fragments.forEach(async (fragment) => {
          try {
            const { pathname } = new URL(fragment.href);
            const frag = await loadFragment(pathname);
            fragment.parentElement.replaceWith(...frag.children);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Fragment loading failed', error);
          }
        });
      });
    }
    buildWidgetAutoBlocks(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates formatted links to style them as buttons.
 * @param {HTMLElement} main The main container element
 */
function decorateButtons(main) {
  main.querySelectorAll('p a[href]').forEach((a) => {
    a.title = a.title || a.textContent;
    const p = a.closest('p');
    const text = a.textContent.trim();

    // quick structural checks
    if (a.querySelector('img') || p.textContent.trim() !== text) return;

    // skip URL display links
    try {
      if (new URL(a.href).href === new URL(text, window.location).href) return;
    } catch { /* continue */ }

    // require authored formatting for buttonization
    const strong = a.closest('strong');
    const em = a.closest('em');
    if (!strong && !em) return;

    p.className = 'button-wrapper';
    a.className = 'button';
    if (strong && em) { // high-impact call-to-action
      a.classList.add('accent');
      const outer = strong.contains(em) ? strong : em;
      outer.replaceWith(a);
    } else if (strong) {
      a.classList.add('primary');
      strong.replaceWith(a);
    } else {
      a.classList.add('secondary');
      em.replaceWith(a);
    }
  });
}

/**
 * Section Metadata's `Background Image` key is handled natively by the HTML
 * pipeline into a `data-background-image` attribute on the section (see
 * https://www.aem.live/developer/block-collection/section-metadata) — but
 * that only ever gives a plain URL string, and CSS `attr()` can't feed the
 * `background-image` property with it, only `content`. This sets it
 * directly; background-size/position/repeat still live in styles.css.
 * @param {Element} main The container element
 */
function decorateSectionBackgroundImages(main) {
  main.querySelectorAll(':scope > .section[data-background-image]').forEach((section) => {
    section.style.backgroundImage = `url(${section.dataset.backgroundImage})`;
  });
}

/**
 * Fades each section's content in the first time the section scrolls into
 * view (see `.section-fade`/`.section-visible` in lazy-styles.css). The
 * section element itself (its box/background) is never touched — only its
 * direct content wrappers (the divs added by decorateSections) animate — so
 * e.g. a coloured section background is never hidden behind the fade. The
 * first section is already on screen at load, so it's skipped to avoid
 * delaying LCP/adding layout shift; every section after that reveals once,
 * the first time it intersects, and is never re-hidden on scroll-out.
 * @param {Element} main The container element
 */
function observeSectionReveal(main) {
  const sections = [...main.querySelectorAll(':scope > .section')].slice(1);
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      [...entry.target.children].forEach((content) => content.classList.add('section-visible'));
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  sections.forEach((section) => {
    [...section.children].forEach((content) => content.classList.add('section-fade'));
    observer.observe(section);
  });
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateSectionBackgroundImages(main);

  decorateBlocks(main);
  decorateButtons(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await loadSection(main.querySelector('.section'), waitForFirstImage);
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  loadHeader(doc.querySelector('body > header'));

  const main = doc.querySelector('main');
  await loadSections(main);
  observeSectionReveal(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadFooter(doc.querySelector('body > footer'));

  // Inserted only once its styling has loaded, so it can't flash on screen
  // unstyled (see buildBackButton).
  await loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  buildBackButton(main);
  loadFonts();
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  import('./consent-check.js');
  // load anything that can be postponed to the latest here
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

loadPage();
