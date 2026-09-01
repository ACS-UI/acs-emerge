import { createOptimizedPicture } from '../../scripts/aem.js';

/** Splits attribution paragraphs after the blockquote into name + role. */
function decorateAttribution(nodes) {
  if (nodes.length === 1) {
    nodes[0].classList.add('quote-attribution');
  } else if (nodes.length > 1) {
    const [name, ...rest] = nodes;
    name.classList.add('quote-name');
    rest.forEach((node) => node.classList.add('quote-role'));
  }
}

/** Loads and decorates the quote block: base two-column variant, or `card` variant. */
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

  // Ensure the quotation is wrapped in a <blockquote> (first paragraph for base, last for `card`).
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
    // Card variant: the portrait becomes a small avatar inside the attribution row.
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
