/**
 * loads and decorates the agenda block
 *
 * Authored content model:
 *   Row 1 (optional intro): a single text cell with an eyebrow paragraph and a
 *          heading (e.g. "AGENDA" / "Schedule at a glance").
 *   Rows 2..n (one per agenda item), three cells:
 *          Cell 1: the start time (e.g. "9:00 AM").
 *          Cell 2: the session title (heading or bold text) and the
 *                  speaker/detail (a paragraph).
 *          Cell 3: the session duration (e.g. "15 min").
 *
 * Renders the intro above a list of elevated schedule rows.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const rows = [...block.children];

  const introRow = rows.find(
    (row) => row.children.length === 1 && row.querySelector('h1, h2, h3, h4, h5, h6'),
  );

  const intro = document.createElement('div');
  intro.className = 'agenda-intro';
  if (introRow) {
    const cell = introRow.firstElementChild;
    while (cell.firstElementChild) intro.append(cell.firstElementChild);
    const eyebrow = intro.querySelector('p');
    if (eyebrow) eyebrow.classList.add('agenda-eyebrow');
  }

  const list = document.createElement('ul');
  list.className = 'agenda-list';

  rows.forEach((row) => {
    if (row === introRow || !row.textContent.trim()) return;

    const cells = [...row.children];
    const item = document.createElement('li');
    item.className = 'agenda-item';

    // time (first cell)
    const time = document.createElement('div');
    time.className = 'agenda-time';
    if (cells[0]) time.textContent = cells[0].textContent.trim();
    item.append(time);

    // body (middle cell): title + speaker
    const body = document.createElement('div');
    body.className = 'agenda-body';
    const bodyCell = cells[1];
    if (bodyCell) {
      const heading = bodyCell.querySelector('h1, h2, h3, h4, h5, h6, strong');
      const title = document.createElement('p');
      title.className = 'agenda-title';
      title.textContent = (heading ? heading.textContent : bodyCell.querySelector('p')?.textContent || '').trim();
      body.append(title);
      // speaker/detail = any remaining paragraph text distinct from the title
      const detailText = [...bodyCell.querySelectorAll('p')]
        .map((p) => p.textContent.trim())
        .filter((t) => t && t !== title.textContent);
      if (detailText.length) {
        const detail = document.createElement('p');
        detail.className = 'agenda-speaker';
        detail.textContent = detailText.join(' · ');
        body.append(detail);
      }
    }
    item.append(body);

    // duration (last cell, if distinct from the time cell)
    if (cells.length > 2 && cells[2]) {
      const duration = document.createElement('div');
      duration.className = 'agenda-duration';
      duration.textContent = cells[2].textContent.trim();
      item.append(duration);
    }

    list.append(item);
  });

  block.replaceChildren();
  if (intro.childElementCount) block.append(intro);
  block.append(list);
}
