import { createOptimizedPicture, getMetadata } from '../../scripts/aem.js';

/**
 * Fetches and caches a query-index sheet.
 * @param {string} url The query-index.json URL.
 * @returns {Promise<object[]>} The index rows (empty array on failure).
 */
const indexCache = new Map();
async function fetchIndex(url) {
  if (indexCache.has(url)) return indexCache.get(url);
  const promise = (async () => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) return [];
      const json = await resp.json();
      return json.data || [];
    } catch (e) {
      return [];
    }
  })();
  indexCache.set(url, promise);
  return promise;
}

/**
 * Builds a single reportee card from an index row.
 * @param {object} row A leaders query-index row (path, title, role, thumbnail).
 * @returns {HTMLElement} The reportee card (anchor).
 */
function buildReporteeCard(row) {
  const card = document.createElement('a');
  card.className = 'profile-details-reportee';
  card.href = row.path;

  const media = document.createElement('div');
  media.className = 'profile-details-reportee-image';
  // Prefer the small thumbnail; fall back to the full image if none.
  const src = row.thumbnail || row.image;
  if (src) {
    media.append(createOptimizedPicture(src, row.title || '', false, [{ width: '120' }]));
  }

  const body = document.createElement('div');
  body.className = 'profile-details-reportee-body';
  const name = document.createElement('span');
  name.className = 'profile-details-reportee-name';
  name.textContent = row.title || '';
  const role = document.createElement('span');
  role.className = 'profile-details-reportee-role';
  role.textContent = row.role || '';
  body.append(name, role);

  card.append(media, body);
  return card;
}

/**
 * Resolves the reportees for this page: reads the comma-separated `reportees`
 * page metadata (a list of leader page paths), looks each up in the leaders
 * query-index, and renders a card per match (preserving authored order).
 * @returns {Promise<HTMLElement|null>} The reportees section, or null if none.
 */
async function buildReportees() {
  const raw = getMetadata('reportees');
  if (!raw) return null;

  const paths = raw.split(',').map((p) => p.trim()).filter(Boolean);
  if (!paths.length) return null;

  // Index location is configurable via metadata; defaults to the leaders index.
  const indexUrl = getMetadata('reportees-index') || '/leaders/query-index.json';
  const rows = await fetchIndex(indexUrl);
  const byPath = new Map(rows.map((r) => [r.path, r]));

  const matched = paths
    .map((p) => byPath.get(p))
    .filter(Boolean);
  if (!matched.length) return null;

  const section = document.createElement('div');
  section.className = 'profile-details-reportees';
  const heading = document.createElement('h3');
  heading.className = 'profile-details-reportees-heading';
  heading.textContent = 'Reportees';
  section.append(heading);

  const grid = document.createElement('div');
  grid.className = 'profile-details-reportees-grid';
  matched.forEach((row) => grid.append(buildReporteeCard(row)));
  section.append(grid);

  return section;
}

/**
 * Decorates the profile-details block.
 *
 * Authored content model:
 *   Row 1: cell 1 = portrait image; cell 2 = name (heading) + role (paragraph).
 *   Row 2+: the "Background" heading and bio paragraphs (authored freely).
 *
 * The Reportees section is NOT authored here — it is resolved from this page's
 * `reportees` metadata (leader page paths) against the leaders query-index,
 * pulling each reportee's name (title), role, and thumbnail photo.
 *
 * @param {Element} block The profile-details block element.
 */
export default async function decorate(block) {
  const rows = [...block.children];

  // --- media (portrait) + identity (name + role) come from the first row ---
  const firstRow = rows[0];
  const firstCells = firstRow ? [...firstRow.children] : [];
  const imageCell = firstCells.find((c) => c.querySelector('picture, img'));
  const identityCell = firstCells.find((c) => c !== imageCell && c.textContent.trim());

  const layout = document.createElement('div');
  layout.className = 'profile-details-layout';

  const media = document.createElement('div');
  media.className = 'profile-details-image';
  const img = imageCell?.querySelector('img');
  if (img) {
    media.append(createOptimizedPicture(img.src, img.alt, true, [{ width: '750' }]));
  }

  const content = document.createElement('div');
  content.className = 'profile-details-content';

  if (identityCell) {
    const nodes = [...identityCell.children];
    const heading = nodes.find((n) => /^H[1-6]$/.test(n.tagName));
    if (heading) {
      heading.classList.add('profile-details-name');
      content.append(heading);
    }
    nodes
      .filter((n) => n !== heading && n.textContent.trim())
      .forEach((p) => {
        p.classList.add('profile-details-role');
        content.append(p);
      });
  }

  // --- remaining rows = background / bio (authored) ---
  rows.slice(1).forEach((row) => {
    const cell = [...row.children].find((c) => c.textContent.trim()) || row;
    [...cell.children].forEach((node) => {
      if (/^H[1-6]$/.test(node.tagName)) node.classList.add('profile-details-section-heading');
      else node.classList.add('profile-details-text');
      content.append(node);
    });
  });

  // --- reportees (from index) ---
  const reportees = await buildReportees();
  if (reportees) content.append(reportees);

  layout.append(media, content);
  block.replaceChildren(layout);
}
