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

  block.querySelectorAll('.gallery-carousel-dot').forEach((dot, i) => {
    dot.setAttribute('aria-current', i === clamped ? 'true' : 'false');
  });
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
  block.replaceChildren(track);
  if (slideCount <= 1) return; // no controls needed for a single image

  block.dataset.activeSlide = 0;

  // Prev / next arrow buttons.
  const nav = document.createElement('div');
  nav.className = 'gallery-carousel-nav';
  ['prev', 'next'].forEach((dir) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `gallery-carousel-arrow gallery-carousel-${dir}`;
    btn.setAttribute('aria-label', dir === 'prev' ? 'Previous slide' : 'Next slide');
    btn.addEventListener('click', () => {
      const active = Number(block.dataset.activeSlide) || currentIndex(track);
      goToSlide(block, active + (dir === 'next' ? 1 : -1));
    });
    nav.append(btn);
  });
  block.append(nav);

  // Dot indicators.
  const dots = document.createElement('div');
  dots.className = 'gallery-carousel-dots';
  [...track.children].forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'gallery-carousel-dot';
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
    dot.addEventListener('click', () => goToSlide(block, i));
    dots.append(dot);
  });
  block.append(dots);

  // Keep dot state in sync when the user scrolls/swipes directly.
  let scrollTimer;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const idx = currentIndex(track);
      if (idx >= 0) {
        block.dataset.activeSlide = idx;
        block.querySelectorAll('.gallery-carousel-dot').forEach((dot, i) => {
          dot.setAttribute('aria-current', i === idx ? 'true' : 'false');
        });
      }
    }, 100);
  });
}
