import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Splits the attribution paragraphs (everything after the blockquote) into
 * name + role. A single paragraph keeps the original one-line treatment
 * (unchanged, base-variant behaviour); two or more paragraphs are treated
 * as name (first) + role (rest), each styled individually — used by the
 * `card` variant's two-line attribution.
 * @param {Element[]} nodes Paragraphs/headings after the blockquote.
 */
function decorateAttribution(nodes) {
  if (nodes.length === 1) {
    nodes[0].classList.add('quote-attribution');
  } else if (nodes.length > 1) {
    const [name, ...rest] = nodes;
    name.classList.add('quote-name');
    rest.forEach((node) => node.classList.add('quote-role'));
  }
}

/**
 * loads and decorates the quote block
 *  - base variant: portrait (left) + quote (right), two-column.
 *  - `card` variant: a single bordered card — quote on top, a small round
 *    avatar + name/role attribution row below (see quote.css).
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const isCard = block.classList.contains('card');
  const row = block.firstElementChild;
  if (!row) return;
  row.className = 'quote-row';

  const cells = [...row.children];
  // Identify the image cell vs the text cell.
  const imageCell = cells.find((cell) => cell.querySelector('picture'));
  const bodyCell = cells.find((cell) => cell !== imageCell);

  if (!bodyCell) return;
  bodyCell.className = 'quote-body';

  // Ensure the quotation is wrapped in a <blockquote>. Authoring order
  // differs by variant: the base variant leads with the quote, then the
  // attribution; the `card` variant leads with name/role, then the quote
  // last — so the quote paragraph is the first one for the base variant,
  // the last one for `card`.
  let blockquote = bodyCell.querySelector('blockquote');
  if (!blockquote) {
    const paragraphs = [...bodyCell.querySelectorAll(':scope > p')];
    const quotePara = isCard ? paragraphs[paragraphs.length - 1] : paragraphs[0];
    if (quotePara) {
      blockquote = document.createElement('blockquote');
      quotePara.replaceWith(blockquote);
      blockquote.append(quotePara);
    }
  }

  // Everything after the blockquote is the attribution.
  const attributionNodes = [...bodyCell.children].filter((node) => node !== blockquote);
  decorateAttribution(attributionNodes);

  if (isCard) {
    // Card variant: the portrait becomes a small avatar inside an
    // attribution row (avatar + name/role), not a separate top-level column.
    const attributionRow = document.createElement('div');
    attributionRow.className = 'quote-attribution-row';

    if (imageCell) {
      const img = imageCell.querySelector('picture > img');
      if (img) {
        imageCell.className = 'quote-avatar';
        imageCell.replaceChildren(createOptimizedPicture(img.src, img.alt, false, [{ width: '150' }]));
        attributionRow.append(imageCell);
      }
    }
    if (attributionNodes.length) {
      const attributionText = document.createElement('div');
      attributionText.className = 'quote-attribution-text';
      attributionNodes.forEach((node) => attributionText.append(node));
      attributionRow.append(attributionText);
    }
    bodyCell.append(attributionRow);
    return;
  }

  // Base variant: portrait renders as its own top-level column.
  if (imageCell) {
    imageCell.className = 'quote-image';
    const img = imageCell.querySelector('picture > img');
    if (img) {
      img.closest('picture').replaceWith(
        createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]),
      );
    }
  }
}
