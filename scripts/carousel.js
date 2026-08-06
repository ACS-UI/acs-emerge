/*
 * Reusable carousel utility.
 *
 * Wraps a set of child elements in a horizontally-scrolling, snap-aligned
 * track with an optional intro (title/description) and top-right previous/next
 * navigation, plus an optional "view all" action below the track.
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
 * @property {ViewAllConfig|false} [viewAll=false]  Optional "view all" button
 *   rendered below the track.
 * @property {number} [step=1]  Number of items advanced per navigation click.
 * @property {'left'|'center'|'right'} [align='left']  Text alignment for the
 *   intro (title & description) at the top.
 * @property {string} [label='carousel']  Accessible label for the region.
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
 * @param {HTMLElement} track The scrolling track element.
 * @param {HTMLButtonElement} prev Previous button.
 * @param {HTMLButtonElement} next Next button.
 * @param {HTMLElement} nav The nav container.
 */
function updateNav(track, prev, next, nav) {
  const maxScroll = track.scrollWidth - track.clientWidth;
  const overflows = maxScroll > 1;
  nav.hidden = !overflows;
  const atStart = track.scrollLeft <= 1;
  const atEnd = track.scrollLeft >= maxScroll - 1;
  prev.disabled = atStart;
  next.disabled = atEnd;
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
  } = options;

  carouselSeq += 1;
  const items = [...children];

  const carousel = document.createElement('div');
  carousel.className = 'carousel';
  carousel.setAttribute('role', 'region');
  carousel.setAttribute('aria-roledescription', 'carousel');
  carousel.setAttribute('aria-label', label);

  // --- top: intro (title/desc) + navigation -----------------------------
  const top = document.createElement('div');
  top.className = 'carousel-top';

  const intro = document.createElement('div');
  intro.className = 'carousel-intro';
  intro.dataset.align = align;
  if (heading) intro.append(heading);
  top.append(intro);

  const nav = document.createElement('div');
  nav.className = 'carousel-nav';
  const prev = createArrow('prev');
  const next = createArrow('next');
  nav.append(prev, next);
  top.append(nav);

  carousel.append(top);

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

  // --- optional "view all" ----------------------------------------------
  if (viewAll && viewAll.href) {
    const footer = document.createElement('div');
    footer.className = 'carousel-footer';
    const link = document.createElement('a');
    link.className = 'button carousel-view-all';
    link.href = viewAll.href;
    link.textContent = viewAll.text || 'View All';
    footer.append(link);
    carousel.append(footer);
  }

  // --- behaviour ---------------------------------------------------------
  const scrollByItems = (direction) => {
    track.scrollBy({ left: slideDelta(track) * step * direction, behavior: 'smooth' });
  };
  prev.addEventListener('click', () => scrollByItems(-1));
  next.addEventListener('click', () => scrollByItems(1));

  const refresh = () => updateNav(track, prev, next, nav);
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
