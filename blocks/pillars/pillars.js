/**
 * Loads and decorates the pillars block: row 1 is the eyebrow + heading intro, rest are pillars.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const rows = [...block.children];

  // First row that contains a heading is the intro.
  const introRow = rows.find((row) => row.querySelector('h1, h2, h3, h4, h5, h6'));
  const pillarRows = rows.filter((row) => row !== introRow && row.textContent.trim());

  if (introRow) {
    introRow.className = 'pillars-intro';
    const cell = introRow.firstElementChild;
    if (cell) {
      // Unwrap the single cell so eyebrow/heading sit directly in the intro.
      while (cell.firstElementChild) introRow.append(cell.firstElementChild);
      cell.remove();
    }
    const eyebrow = introRow.querySelector('p');
    if (eyebrow) eyebrow.classList.add('pillars-eyebrow');
  }

  const list = document.createElement('ul');
  list.className = 'pillars-list';

  pillarRows.forEach((row) => {
    const li = document.createElement('li');
    li.className = 'pillars-item';
    const cell = row.firstElementChild || row;
    while (cell.firstElementChild) li.append(cell.firstElementChild);

    // First paragraph is the label, the rest form the description.
    const label = li.querySelector(':scope > p');
    if (label) label.classList.add('pillars-label');
    list.append(li);
    row.remove();
  });

  block.append(list);
}
