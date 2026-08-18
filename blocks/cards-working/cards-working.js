import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * loads and decorates the cards-working block
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'cards-working-card';
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-working-card-image';
      else div.className = 'cards-working-card-body';
    });

    // Backdrop: base tint + two masked blur-only layers approximating
    // Figma's progressive (top-to-bottom) background-blur — see
    // cards-working.css for how each layer's mask staggers the ramp-up.
    // Order matters here: base first (bottom of the stack), strong last
    // (top), so later layers correctly paint over earlier ones.
    const body = li.querySelector('.cards-working-card-body');
    if (body) {
      const backdrops = document.createDocumentFragment();
      ['base', 'mid', 'strong'].forEach((variant) => {
        const backdrop = document.createElement('div');
        backdrop.className = `cards-working-card-backdrop cards-working-card-backdrop-${variant}`;
        backdrops.append(backdrop);
      });
      body.prepend(backdrops);
    }

    ul.append(li);
  });

  ul.querySelectorAll('picture > img').forEach((img) => img
    .closest('picture')
    .replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));

  block.replaceChildren(ul);

  // One-time entrance: adds .cards-working-tilted the first time the block
  // scrolls into view, triggering the CSS transition from a lesser starting
  // tilt to the outer cards' final rotation (see cards-working.css). The
  // observer disconnects immediately after, so this never plays again.
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      block.classList.add('cards-working-tilted');
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  observer.observe(block);
}
