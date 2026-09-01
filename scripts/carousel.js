/*
 * Reusable carousel utility.
 *
 * Wraps a set of child elements in a horizontally-scrolling, snap-aligned
 * track with an optional intro (title/description) and top-right previous/next
 * navigation, plus an optional "view all" action below the track. On mobile,
 * dot indicators (see styles/carousel.css) replace the prev/next nav.
 *
 * The number of visible items and the gap are controlled entirely from CSS
 * (see styles/carousel.css) via the `--carousel-visible` / `--carousel-gap`
 * custom properties, so responsiveness (e.g. 3 items on desktop, 1 on mobile)
 * is a styling concern, not a JS one.
 */

/**
 * @typedef {Object} ViewAllConfig
 * @property {string} text  Button label (e.g. "View All").
 * @property {string} href  Destination URL.
 */

/**
 * @typedef {Object} CarouselOptions
 * @property {Node} [heading]  Optional element rendered as the intro (title +
 *   description) at the top-left/centre of the carousel.
 * @property {ViewAllConfig|false} [viewAll=false]  Optional "view all" button.
 * @property {number} [step=1]  Number of items advanced per navigation click.
 * @property {'left'|'center'|'right'} [align='left']  Text alignment for the
 *   intro (title & description) at the top.
 * @property {string} [label='carousel']  Accessible label for the region.
 * @property {'top'|'bottom'} [navPosition='top']  Where the prev/next nav is
 *   rendered: in the top bar (default) or below the track (bottom-left).
 * @property {'top'|'bottom'} [viewAllPosition='bottom']  Where the "view all"
 *   button is rendered: under the top bar (above the track) or in a footer
 *   below the track (default).
 */

let carouselSeq = 0;

/**
 * Reads the effective width of a single slide including the track gap.
 * @param {HTMLElement} track The scrolling track element.
 * @returns {number} Distance in pixels to advance for one item.
 */
function slideDelta(track) {
  const first = track.firstElementChild;
  if (!first) return track.clientWidth;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  return first.getBoundingClientRect().width + gap;
}

/**
 * Enables/disables nav buttons and hides the whole nav when nothing overflows.
 * Also updates the mobile dot indicators' active state and visibility.
 * @param {HTMLElement} track The scrolling track element.
 * @param {HTMLButtonElement} prev Previous button.
 * @param {HTMLButtonElement} next Next button.
 * @param {HTMLElement} nav The nav container.
 * @param {HTMLElement} dots The dot indicators container.
 * @param {HTMLButtonElement[]} dotButtons One button per slide.
 */
function updateNav(track, prev, next, nav, dots, dotButtons) {
  const maxScroll = track.scrollWidth - track.clientWidth;
  const overflows = maxScroll > 1;
  nav.hidden = !overflows;
  dots.hidden = !overflows;
  const atStart = track.scrollLeft <= 1;
  const atEnd = track.scrollLeft >= maxScroll - 1;
  prev.disabled = atStart;
  next.disabled = atEnd;

  const delta = slideDelta(track);
  const activeIndex = delta ? Math.round(track.scrollLeft / delta) : 0;
  dotButtons.forEach((dot, i) => dot.setAttribute('aria-selected', String(i === activeIndex)));
}

/**
 * Builds the mobile-only dot indicators, one per slide.
 * @param {number} count Number of slides.
 * @returns {{ dots: HTMLElement, dotButtons: HTMLButtonElement[] }}
 */
function createDots(count) {
  const dots = document.createElement('div');
  dots.className = 'carousel-dots';
  dots.setAttribute('role', 'tablist');
  dots.setAttribute('aria-label', 'Slides');

  const dotButtons = Array.from({ length: count }, (_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.setAttribute('aria-selected', 'false');
    dots.append(dot);
    return dot;
  });

  return { dots, dotButtons };
}

/**
 * Builds a navigation arrow button.
 * @param {'prev'|'next'} dir Direction.
 * @returns {HTMLButtonElement}
 */
function createArrow(dir) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `carousel-nav-button carousel-nav-${dir}`;
  button.setAttribute('aria-label', dir === 'prev' ? 'Previous' : 'Next');
  button.innerHTML = '<span class="carousel-nav-icon" aria-hidden="true"></span>';
  return button;
}

/**
 * Creates a carousel from a list of child elements.
 *
 * @param {Node[]|NodeList|HTMLCollection} children The items to place in the track.
 * @param {CarouselOptions} [options={}] Behaviour & presentation options.
 * @returns {HTMLElement} The carousel root element.
 */
export default function createCarousel(children, options = {}) {
  const {
    heading,
    viewAll = false,
    step = 1,
    align = 'left',
    label = 'carousel',
    navPosition = 'top',
    viewAllPosition = 'bottom',
  } = options;

  carouselSeq += 1;
  const items = [...children];

  const carousel = document.createElement('div');
  carousel.className = 'carousel';
  carousel.dataset.navPosition = navPosition;
  carousel.setAttribute('role', 'region');
  carousel.setAttribute('aria-roledescription', 'carousel');
  carousel.setAttribute('aria-label', label);

  // Navigation (prev/next). Placed in the top bar by default, or below the
  // track when navPosition is 'bottom'.
  const nav = document.createElement('div');
  nav.className = 'carousel-nav';
  const prev = createArrow('prev');
  const next = createArrow('next');
  nav.append(prev, next);

  // --- optional "view all" link (built once, placed per viewAllPosition) -
  let viewAllLink;
  if (viewAll && viewAll.href) {
    viewAllLink = document.createElement('a');
    viewAllLink.className = 'button carousel-view-all';
    viewAllLink.href = viewAll.href;
    viewAllLink.textContent = viewAll.text || 'View All';
  }
  const viewAllOnTop = viewAllLink && viewAllPosition === 'top';

  // --- top: intro (title/desc) + (optionally) navigation ----------------
  // Skip the top bar entirely when there is nothing to put in it (no heading,
  // no top-positioned "view all", and the nav lives at the bottom).
  if (heading || navPosition === 'top' || viewAllOnTop) {
    const top = document.createElement('div');
    top.className = 'carousel-top';
    // `align` drives the top-bar layout: a centered intro floats the nav to
    // the far right (absolute), while left/right keep intro and nav on a row.
    top.dataset.align = align;

    const intro = document.createElement('div');
    intro.className = 'carousel-intro';
    intro.dataset.align = align;
    if (heading) intro.append(heading);
    if (viewAllOnTop) intro.append(viewAllLink);
    top.append(intro);

    if (navPosition === 'top') top.append(nav);

    carousel.append(top);
  }

  // --- viewport + track --------------------------------------------------
  const viewport = document.createElement('div');
  viewport.className = 'carousel-viewport';

  const track = document.createElement('ul');
  track.className = 'carousel-track';
  track.id = `carousel-track-${carouselSeq}`;
  items.forEach((child) => {
    const li = document.createElement('li');
    li.className = 'carousel-slide';
    li.append(child);
    track.append(li);
  });
  viewport.append(track);
  carousel.append(viewport);

  prev.setAttribute('aria-controls', track.id);
  next.setAttribute('aria-controls', track.id);

  // --- mobile-only dot indicators (replace the prev/next nav on mobile) --
  const { dots, dotButtons } = createDots(items.length);
  dotButtons.forEach((dot, i) => {
    dot.setAttribute('aria-controls', track.id);
    dot.addEventListener('click', () => {
      track.scrollTo({ left: slideDelta(track) * i, behavior: 'smooth' });
    });
  });
  carousel.append(dots);

  // --- bottom navigation (below the track) ------------------------------
  if (navPosition === 'bottom') {
    carousel.append(nav);
  }

  // --- "view all" footer (only when not already placed in the top bar) --
  if (viewAllLink && !viewAllOnTop) {
    const footer = document.createElement('div');
    footer.className = 'carousel-footer';
    footer.append(viewAllLink);
    carousel.append(footer);
  }

  // --- behaviour ---------------------------------------------------------
  const scrollByItems = (direction) => {
    track.scrollBy({ left: slideDelta(track) * step * direction, behavior: 'smooth' });
  };
  prev.addEventListener('click', () => scrollByItems(-1));
  next.addEventListener('click', () => scrollByItems(1));

  const refresh = () => updateNav(track, prev, next, nav, dots, dotButtons);
  track.addEventListener('scroll', refresh, { passive: true });
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(refresh).observe(track);
  } else {
    window.addEventListener('resize', refresh);
  }
  // Initial state (rAF so layout has settled and widths are measurable).
  requestAnimationFrame(refresh);

  return carousel;
}
