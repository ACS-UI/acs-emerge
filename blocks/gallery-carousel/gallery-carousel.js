import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Scrolls the track to a given slide index and syncs control state.
 * @param {Element} block The block element
 * @param {number} index Target slide index
 */
function goToSlide(block, index) {
  const track = block.querySelector('.gallery-carousel-track');
  const slides = [...track.children];
  const clamped = Math.max(0, Math.min(index, slides.length - 1));
  const target = slides[clamped];
  track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  block.dataset.activeSlide = clamped;
}

/**
 * Returns the slide index closest to the current scroll position.
 * @param {Element} track The scrollable track
 * @returns {number}
 */
function currentIndex(track) {
  const slides = [...track.children];
  const mid = track.scrollLeft + track.clientWidth / 2;
  return slides.findIndex((s) => s.offsetLeft - track.offsetLeft + s.clientWidth >= mid);
}

/**
 * loads and decorates the gallery-carousel block
 * @param {Element} block The block element
 */
export default function decorate(block) {
  // Build the scrollable track from the authored rows (one image per slide).
  const track = document.createElement('ul');
  track.className = 'gallery-carousel-track';

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'gallery-carousel-slide';
    const img = row.querySelector('img');
    if (img) {
      li.append(createOptimizedPicture(img.src, img.alt, false, [{ width: '1600' }]));
    }
    track.append(li);
  });

  const slideCount = track.children.length;
  if (slideCount <= 1) {
    block.replaceChildren(track);
    return; // no controls needed for a single image
  }

  block.dataset.activeSlide = 0;

  // Prev / next arrows, right-aligned above the track.
  const controls = document.createElement('div');
  controls.className = 'gallery-carousel-arrows';
  ['prev', 'next'].forEach((dir) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `gallery-carousel-arrow gallery-carousel-${dir}`;
    btn.setAttribute('aria-label', dir === 'prev' ? 'Previous slide' : 'Next slide');
    btn.addEventListener('click', () => {
      const active = Number(block.dataset.activeSlide) || currentIndex(track);
      goToSlide(block, active + (dir === 'next' ? 1 : -1));
    });
    controls.append(btn);
  });

  block.replaceChildren(controls, track);

  // Track the active slide as the user scrolls/swipes directly.
  let scrollTimer;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const idx = currentIndex(track);
      if (idx >= 0) block.dataset.activeSlide = idx;
    }, 100);
  });
}
