/**
 * loads and decorates the event-highlights block
 *
 * Authored content model:
 *   Row 1 (optional intro): a single text cell with an eyebrow paragraph and a
 *          heading (e.g. "KEY HIGHLIGHTS" / "What made this event special").
 *   Rows 2..n (one per highlight): an icon cell (an image / AEM icon) and a
 *          text cell holding the stat value (e.g. "500+") and a label
 *          (e.g. "Attendees"). The icon cell may be omitted.
 *
 * Renders the intro above a responsive row of icon + big stat + label items.
 * @param {Element} block The block element
 */
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
    // Icon cell: a cell with a graphic, or — since the pipeline wraps a loose
    // icon glyph in its own <p> too — the first cell when there are 2+ cells.
    // Text cell (value + label) is whatever cell is left.
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
