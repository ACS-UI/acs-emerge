import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Builds the "Tags" group: a sub-heading plus one pill per comma-separated
 * value (e.g. "Adobe EDS, Sitecore Migration, Auto Manufacturing").
 * @param {string} label The row's label text (used as the sub-heading).
 * @param {Element} value The row's value cell (comma-separated tag text).
 * @returns {HTMLElement} The tags group wrapper.
 */
function buildTagsGroup(label, value) {
  const group = document.createElement('div');
  group.className = 'client-detail-tags-group';

  const heading = document.createElement('p');
  heading.className = 'client-detail-info-heading client-detail-tags-heading';
  heading.textContent = label;
  group.append(heading);

  const tags = document.createElement('ul');
  tags.className = 'client-detail-tags';
  value.textContent.split(',').map((t) => t.trim()).filter(Boolean).forEach((text) => {
    const tag = document.createElement('li');
    tag.className = 'client-detail-tag';
    tag.textContent = text;
    tags.append(tag);
  });
  group.append(tags);

  return group;
}

/**
 * Rebuilds the "Details" cell (a flat list of label/value paragraphs such as
 * "Client" / "CASIO" / "Industry" / "Manufacturing") into a definition list.
 * The first paragraph is treated as the section heading. A "Tags" row is
 * special-cased into its own sub-heading + pill list instead of a dt/dd row
 * (see buildTagsGroup).
 * @param {Element} cell The details cell
 */
function decorateDetails(cell) {
  cell.classList.add('client-detail-info');
  const paragraphs = [...cell.querySelectorAll(':scope > p')];
  if (!paragraphs.length) return;

  // First paragraph is the "DETAILS" heading.
  const [heading, ...rest] = paragraphs;
  heading.classList.add('client-detail-info-heading');

  const dl = document.createElement('dl');
  const groups = [];
  for (let i = 0; i < rest.length; i += 2) {
    const label = rest[i];
    const value = rest[i + 1];
    if (!label) break;
    const labelText = label.textContent.trim();
    if (labelText.toLowerCase() === 'tags' && value) {
      groups.push(buildTagsGroup(labelText, value));
    } else {
      const dt = document.createElement('dt');
      dt.innerHTML = label.innerHTML;
      dl.append(dt);
      if (value) {
        const dd = document.createElement('dd');
        dd.innerHTML = value.innerHTML;
        dl.append(dd);
      }
    }
  }
  rest.forEach((p) => p.remove());
  heading.after(dl);
  groups.forEach((group) => cell.append(group));
}

/**
 * loads and decorates the client-detail block
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const rows = [...block.children];

  // Row order (per authored structure): logo, hero image, details+about.
  const [logoRow, imageRow, contentRow] = rows;

  if (logoRow) {
    logoRow.classList.add('client-detail-logo');
  }
  if (imageRow) {
    imageRow.classList.add('client-detail-hero');
  }
  if (contentRow) {
    contentRow.classList.add('client-detail-content');
    const cells = [...contentRow.children];
    // First cell = details table, second cell = about text.
    if (cells[0]) decorateDetails(cells[0]);
    if (cells[1]) {
      cells[1].classList.add('client-detail-about');
      const aboutHeading = cells[1].querySelector(':scope > p');
      if (aboutHeading) aboutHeading.classList.add('client-detail-about-heading');
    }
  }

  // Optimise all authored images.
  block.querySelectorAll('picture > img').forEach((img) => {
    img.closest('picture').replaceWith(
      createOptimizedPicture(img.src, img.alt, false, [{ width: '1600' }]),
    );
  });
}
