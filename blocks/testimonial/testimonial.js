import { createOptimizedPicture, loadCSS } from '../../scripts/aem.js';

/**
 * Turns one authored row into a testimonial slide.
 *
 * Authored content model (per row / per testimonial):
 *   Cell 1: the quote — one or more paragraphs of testimonial text (bold runs
 *           are authored inline and preserved).
 *   Cell 2: the portrait image.
 *   Cell 3: the attribution — a name (heading or first line) and a title/role
 *           (following paragraph), shown over the photo.
 *
 * @param {Element} row The authored row.
 * @returns {HTMLElement} The testimonial figure.
 */
function buildSlide(row) {
  const cells = [...row.children];
  const figure = document.createElement('figure');
  figure.className = 'testimonial-item';

  const imageCell = cells.find((c) => c.querySelector('picture, img'));
  const textCells = cells.filter((c) => c !== imageCell && c.textContent.trim());
  // Quote is the first non-image cell; attribution is the last (if separate).
  const quoteCell = textCells[0];
  const attrCell = textCells.length > 1 ? textCells[textCells.length - 1] : null;

  // --- quote (left) ---
  const quote = document.createElement('blockquote');
  quote.className = 'testimonial-quote';
  if (quoteCell) {
    while (quoteCell.firstChild) quote.append(quoteCell.firstChild);
  }
  figure.append(quote);

  // --- media (right): photo + name/title overlay ---
  const media = document.createElement('div');
  media.className = 'testimonial-media';
  const img = imageCell?.querySelector('img');
  if (img) {
    media.append(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
  }

  if (attrCell) {
    const caption = document.createElement('figcaption');
    caption.className = 'testimonial-attribution';
    const nodes = [...attrCell.children];
    const heading = nodes.find((n) => /^H[1-6]$/.test(n.tagName));
    const name = heading || nodes[0];
    if (name) {
      name.classList.add('testimonial-name');
      caption.append(name);
    }
    nodes
      .filter((n) => n !== name && n.textContent.trim())
      .forEach((n) => {
        n.classList.add('testimonial-role');
        caption.append(n);
      });
    media.append(caption);
  }

  figure.append(media);
  return figure;
}

/**
 * Decorates the testimonial block: a single-item carousel of quotes with a
 * portrait, using the shared carousel utility with bottom-left navigation.
 * @param {Element} block The testimonial block element.
 */
export default async function decorate(block) {
  const rows = [...block.children];
  const slides = rows
    .filter((row) => row.querySelector('picture, img') || row.textContent.trim())
    .map((row) => buildSlide(row));

  await loadCSS(`${window.hlx.codeBasePath}/styles/carousel.css`);
  const { default: createCarousel } = await import('../../scripts/carousel.js');
  const carousel = createCarousel(slides, {
    step: 1,
    navPosition: 'bottom',
    label: 'Testimonials',
  });
  block.replaceChildren(carousel);
}
