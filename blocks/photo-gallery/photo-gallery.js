import { createOptimizedPicture } from '../../scripts/aem.js';

/** Decorates the photo-gallery block: rows become masonry items; a textless row is the caption. */
export default function decorate(block) {
  // `feature` is the variant's old name — alias it so already-authored pages keep working.
  if (block.classList.contains('feature')) block.classList.add('spotlight');

  const caption = document.createElement('figcaption');
  caption.className = 'photo-gallery-caption';

  const grid = document.createElement('div');
  grid.className = 'photo-gallery-grid';

  [...block.children].forEach((row) => {
    const picture = row.querySelector('picture');
    if (picture) {
      const figure = document.createElement('div');
      figure.className = 'photo-gallery-item';
      const img = picture.querySelector('img');
      if (img) {
        picture.replaceWith(
          createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]),
        );
      }
      figure.append(row.querySelector('picture'));
      grid.append(figure);
    } else if (row.textContent.trim()) {
      // No image — this row is the caption text.
      while (row.firstElementChild) caption.append(row.firstElementChild);
      if (!caption.childElementCount && row.textContent.trim()) {
        const p = document.createElement('p');
        p.textContent = row.textContent.trim();
        caption.append(p);
      }
    }
  });

  const figure = document.createElement('figure');
  figure.className = 'photo-gallery-figure';
  figure.append(grid);
  if (caption.textContent.trim()) figure.append(caption);

  block.replaceChildren(figure);
}
