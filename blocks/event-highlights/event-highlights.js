/** Decorates the event-highlights block: intro row + rows of icon + stat value + label items. */
export default function decorate(block) {
  const rows = [...block.children];

  // Intro: a leading text-only, single-cell row.
  const introRow = rows.find(
    (row) => !row.querySelector('picture, img, .icon')
      && row.children.length === 1
      && row.querySelector('h1, h2, h3, h4, h5, h6'),
  );

  const intro = document.createElement('div');
  intro.className = 'event-highlights-intro';
  if (introRow) {
    const cell = introRow.firstElementChild;
    while (cell.firstElementChild) intro.append(cell.firstElementChild);
    const eyebrow = intro.querySelector('p');
    if (eyebrow) eyebrow.classList.add('event-highlights-eyebrow');
  }

  const list = document.createElement('ul');
  list.className = 'event-highlights-list';

  rows.forEach((row) => {
    if (row === introRow) return;
    if (!row.textContent.trim() && !row.querySelector('picture, img, .icon')) return;

    const item = document.createElement('li');
    item.className = 'event-highlights-item';

    const cells = [...row.children];
    // Icon cell: a cell with a graphic, or the first cell when there are 2+ cells.
    const graphicCell = cells.find((c) => c.querySelector('picture, img, .icon, svg'));
    const iconCell = graphicCell || (cells.length > 1 ? cells[0] : null);
    const textCell = cells.find((c) => c !== iconCell && c.textContent.trim())
      || cells[cells.length - 1];

    if (iconCell) {
      const icon = document.createElement('div');
      icon.className = 'event-highlights-icon';
      const graphic = iconCell.querySelector('picture, img, .icon, svg');
      if (graphic) {
        icon.append(graphic);
      } else if (iconCell.textContent.trim()) {
        // a short glyph/emoji authored as plain text
        icon.textContent = iconCell.textContent.trim();
      }
      item.append(icon);
    }

    if (textCell) {
      const paras = [...textCell.querySelectorAll('p')];
      const [valueEl, labelEl] = paras.length ? paras : [textCell];
      if (valueEl) {
        const value = document.createElement('span');
        value.className = 'event-highlights-value';
        value.textContent = valueEl.textContent.trim();
        item.append(value);
      }
      if (labelEl && labelEl !== valueEl) {
        const label = document.createElement('span');
        label.className = 'event-highlights-label';
        label.textContent = labelEl.textContent.trim();
        item.append(label);
      }
    }

    list.append(item);
  });

  block.replaceChildren();
  if (intro.childElementCount) block.append(intro);
  block.append(list);
}
