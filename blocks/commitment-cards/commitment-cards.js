/**
 * loads and decorates the commitment-cards block
 *
 * Text-only cards. Authored structure: one row per card, each with a single
 * cell holding an eyebrow paragraph (e.g. "Commitment 01"), a heading, and a
 * body paragraph. Renders as elevated white cards in a responsive grid.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'commitment-cards-card';

    // Move the authored content (flatten the single cell wrapper).
    const cell = row.firstElementChild || row;
    while (cell.firstElementChild) li.append(cell.firstElementChild);

    // The first text node (before the heading) is the eyebrow label.
    const [firstText] = li.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    if (firstText && firstText.tagName === 'P') {
      firstText.classList.add('commitment-cards-eyebrow');
    }

    ul.append(li);
  });

  block.replaceChildren(ul);
}
