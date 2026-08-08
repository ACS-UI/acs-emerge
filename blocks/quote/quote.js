import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * loads and decorates the quote block
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;
  row.className = 'quote-row';

  const cells = [...row.children];
  // Identify the image cell vs the text cell.
  const imageCell = cells.find((cell) => cell.querySelector('picture'));
  const bodyCell = cells.find((cell) => cell !== imageCell);

  if (imageCell) {
    imageCell.className = 'quote-image';
    const img = imageCell.querySelector('picture > img');
    if (img) {
      img.closest('picture').replaceWith(
        createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]),
      );
    }
  }

  if (bodyCell) {
    bodyCell.className = 'quote-body';

    // Ensure the quotation is wrapped in a <blockquote>.
    let blockquote = bodyCell.querySelector('blockquote');
    if (!blockquote) {
      const quotePara = bodyCell.querySelector('p');
      if (quotePara) {
        blockquote = document.createElement('blockquote');
        quotePara.replaceWith(blockquote);
        blockquote.append(quotePara);
      }
    }

    // Any paragraph after the blockquote is the attribution.
    const attribution = blockquote?.nextElementSibling;
    if (attribution && attribution.tagName === 'P') {
      attribution.className = 'quote-attribution';
    }
  }

  // Decorative oversized background watermark, sitting behind the photo and
  // quote. Real text (not an image), hidden from assistive tech and inert to
  // pointer input so it never interferes with foreground content.
  const watermark = document.createElement('div');
  watermark.className = 'quote-watermark';
  watermark.setAttribute('aria-hidden', 'true');
  ['Reflections', 'BY MANOJ'].forEach((line) => {
    const span = document.createElement('span');
    span.textContent = line;
    watermark.append(span);
  });
  block.prepend(watermark);
}
