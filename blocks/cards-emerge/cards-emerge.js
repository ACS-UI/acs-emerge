/**
 * loads and decorates the cards-emerge block (row 1 = intro, row 2+ = letter/title/desc items)
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  // --- Intro (first row): eyebrow + heading ---
  const introRow = rows.shift();
  const intro = document.createElement('div');
  intro.className = 'cards-emerge-intro';
  // Move the authored intro content (paragraphs/headings) into the intro wrapper.
  const introCell = introRow.querySelector(':scope > div') || introRow;
  [...introCell.children].forEach((el) => intro.append(el));

  // First paragraph acts as the eyebrow label.
  const eyebrow = intro.querySelector('p');
  if (eyebrow) eyebrow.classList.add('cards-emerge-eyebrow');

  // --- Items (remaining rows) ---
  const ul = document.createElement('ul');
  ul.className = 'cards-emerge-list';

  rows.forEach((row) => {
    const cells = [...row.children];
    const li = document.createElement('li');
    li.className = 'cards-emerge-item';

    const letterCell = document.createElement('div');
    letterCell.className = 'cards-emerge-letter';
    letterCell.setAttribute('aria-hidden', 'true');
    if (cells[0]) letterCell.textContent = cells[0].textContent.trim();

    const body = document.createElement('div');
    body.className = 'cards-emerge-body';
    if (cells[1]) {
      while (cells[1].firstElementChild) body.append(cells[1].firstElementChild);
      // Fallback: if the cell had bare text nodes, keep them.
      if (!body.childElementCount && cells[1].textContent.trim()) {
        body.textContent = cells[1].textContent.trim();
      }
    }

    li.append(letterCell, body);
    ul.append(li);
  });

  // Decorative butterfly; wrapped beside the <ul> since <img> can't be a direct child of it.
  const listWrapper = document.createElement('div');
  listWrapper.className = 'cards-emerge-list-wrapper';

  const butterfly = document.createElement('img');
  butterfly.className = 'cards-emerge-butterfly';
  butterfly.src = `${window.hlx.codeBasePath}/icons/butterfly.png`;
  butterfly.alt = '';
  butterfly.setAttribute('aria-hidden', 'true');
  butterfly.loading = 'lazy';

  listWrapper.append(ul, butterfly);

  block.textContent = '';
  block.append(intro, listWrapper);
}
