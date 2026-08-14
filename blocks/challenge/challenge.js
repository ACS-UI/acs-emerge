/**
 * loads and decorates the challenge block
 *
 * Authored structure: one row per item; the first cell holds the item number
 * (e.g. "01") and the second cell holds a label followed by a description.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'challenge-item';

    const cells = [...row.children];
    const [numberCell, bodyCell] = cells;

    if (numberCell) {
      numberCell.className = 'challenge-number';
      numberCell.setAttribute('aria-hidden', 'true');
    }

    if (bodyCell) {
      bodyCell.className = 'challenge-body';
      // First paragraph is the label, the rest form the description.
      const label = bodyCell.querySelector(':scope > p');
      if (label) label.classList.add('challenge-label');
    }

    cells.forEach((cell) => li.append(cell));
    ul.append(li);
  });

  block.replaceChildren(ul);
}
