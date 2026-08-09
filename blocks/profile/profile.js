import { createOptimizedPicture, loadCSS } from '../../scripts/aem.js';

/**
 * If the block is authored as *only* a link to a query-index sheet (no images),
 * returns that URL so the cards can be pulled from the index instead of from
 * authored rows.
 * @param {Element} block The profile block.
 * @returns {string|null} The query-index URL, or null for authored content.
 */
function getIndexLink(block) {
  if (block.querySelector('picture, img')) return null;
  const links = [...block.querySelectorAll('a[href]')];
  const indexLink = links.find((a) => /query-index\.json(\?|$)/.test(a.getAttribute('href') || a.href));
  return indexLink ? indexLink.href : null;
}

/**
 * Fetches a query-index sheet's rows.
 * @param {string} url The query-index.json URL.
 * @returns {Promise<object[]>} Rows (empty array on failure).
 */
async function fetchIndexRows(url) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) return [];
    const json = await resp.json();
    return json.data || [];
  } catch (e) {
    return [];
  }
}

/**
 * Orders index rows top-down by org hierarchy, breadth-first:
 * top-level leaders (nobody's reportee) first, then all their direct
 * reportees, then the next level, etc. Rows are matched to each other by
 * `path`; a row's `reportees` is a comma-separated list of leader paths.
 * Any rows not reachable from a root (or with no hierarchy data) are appended
 * in their original order so nothing is silently dropped.
 * @param {object[]} rows The index rows.
 * @returns {object[]} Rows in breadth-first hierarchy order.
 */
function orderByHierarchy(rows) {
  const byPath = new Map(rows.map((r) => [r.path, r]));
  const childPaths = (row) => (row.reportees || '')
    .split(',')
    .map((p) => p.trim())
    .filter(Boolean);

  // A row is a "root" if no other row lists it as a reportee.
  const reportedTo = new Set();
  rows.forEach((r) => childPaths(r).forEach((p) => reportedTo.add(p)));
  const roots = rows.filter((r) => !reportedTo.has(r.path));

  const ordered = [];
  const seen = new Set();
  // Seed the queue with roots (fall back to all rows if there are no roots,
  // e.g. a cycle or missing hierarchy data).
  const queue = [...(roots.length ? roots : rows)];
  while (queue.length) {
    const row = queue.shift();
    if (!row || seen.has(row.path)) continue; // eslint-disable-line no-continue
    seen.add(row.path);
    ordered.push(row);
    childPaths(row).forEach((p) => {
      const child = byPath.get(p);
      if (child && !seen.has(child.path)) queue.push(child);
    });
  }
  // Append anything not reached (defensive: no data / disconnected).
  rows.forEach((r) => { if (!seen.has(r.path)) ordered.push(r); });
  return ordered;
}

/**
 * Builds a profile card from an index row, mirroring buildCard's DOM so both
 * authored and index-driven cards style identically. Uses the full-size
 * `image` column (not the small `thumbnail`).
 * @param {object} row An index row (title, role, image, description).
 * @returns {HTMLElement} The card article.
 */
function buildCardFromData(row, overlap = false) {
  const card = document.createElement('article');
  card.className = 'profile-card';
  card.tabIndex = 0;

  const media = document.createElement('div');
  media.className = 'profile-card-image';
  if (row.image) {
    media.append(createOptimizedPicture(row.image, row.title || '', false, [{ width: '750' }]));
  }
  const overlay = document.createElement('div');
  overlay.className = 'profile-card-overlay';
  media.append(overlay);

  const name = document.createElement('h3');
  name.className = 'profile-card-name';
  name.textContent = row.title || '';
  const role = document.createElement('p');
  role.className = 'profile-card-role';
  role.textContent = row.role || '';
  const bio = document.createElement('p');
  bio.textContent = row.description || '';

  if (overlap) {
    if (row.description) overlay.append(bio);
    if (row.title || row.role) {
      const divider = document.createElement('span');
      divider.className = 'profile-card-divider';
      overlay.append(divider);
    }
    if (row.title) overlay.append(name);
    if (row.role) overlay.append(role);
    card.append(media);
  } else {
    if (row.description) overlay.append(bio);
    const body = document.createElement('div');
    body.className = 'profile-card-body';
    if (row.title) body.append(name);
    if (row.role) body.append(role);
    card.append(media, body);
  }

  // wrap the whole card in a link to its detail page (the index row path)
  if (row.path) {
    const link = document.createElement('a');
    link.className = 'profile-card-link';
    link.href = row.path;
    link.append(card);
    return link;
  }
  return card;
}

/**
 * Extracts an optional heading/description "intro" from the first authored row
 * when it has no image (used by the carousel variant for the top-left text).
 * @param {Element} block The profile block.
 * @returns {{ intro: Element|null, viewAll: {text:string, href:string}|false }}
 */
function extractConfig(block) {
  let intro = null;
  let viewAll = false;

  const firstRow = block.firstElementChild;
  if (firstRow && !firstRow.querySelector('picture, img')) {
    const cells = [...firstRow.children];
    // A single-cell row of text/headings is treated as the carousel intro.
    if (cells.length === 1) {
      intro = document.createElement('div');
      while (cells[0].firstChild) intro.append(cells[0].firstChild);
      // A trailing link in the intro becomes the "view all" action.
      const link = intro.querySelector('a[href]');
      if (link) {
        viewAll = { text: link.textContent.trim(), href: link.href };
        (link.closest('p') || link).remove();
      }
      firstRow.remove();
    }
  }
  return { intro, viewAll };
}

/**
 * Turns one authored row into a profile card element.
 *
 * Authored content model (per row / per profile):
 *   Cell 1: the profile image.
 *   Cell 2: name (a heading), role (a paragraph), and optionally one or more
 *           further paragraphs of bio text that are revealed over the image on
 *           hover/focus.
 *
 * @param {Element} row The authored row.
 * @returns {HTMLElement} The card article.
 */
function buildCard(row, overlap = false) {
  const cells = [...row.children];
  const card = document.createElement('article');
  card.className = 'profile-card';
  card.tabIndex = 0;

  const imageCell = cells.find((c) => c.querySelector('picture, img'));
  const bodyCell = cells.find((c) => c !== imageCell && c.textContent.trim());

  // --- media (image + overlay) ---
  const media = document.createElement('div');
  media.className = 'profile-card-image';
  const img = imageCell?.querySelector('img');
  if (img) {
    media.append(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
  }
  const overlay = document.createElement('div');
  overlay.className = 'profile-card-overlay';
  media.append(overlay);

  // --- body (name + role, always visible below the image) ---
  const body = document.createElement('div');
  body.className = 'profile-card-body';

  let name;
  let role;
  let bio = [];
  if (bodyCell) {
    const nodes = [...bodyCell.children];
    const heading = nodes.find((n) => /^H[1-6]$/.test(n.tagName));
    const paragraphs = nodes.filter((n) => n !== heading && n.textContent.trim());
    if (heading) {
      heading.classList.add('profile-card-name');
      name = heading;
    }
    if (paragraphs.length) {
      [role, ...bio] = paragraphs;
      role.classList.add('profile-card-role');
    }
  }

  if (overlap) {
    // Everything sits in the always-visible glass overlay: bio (quote), then a
    // thin divider, then name + designation.
    bio.forEach((p) => overlay.append(p));
    if (name || role) {
      const divider = document.createElement('span');
      divider.className = 'profile-card-divider';
      overlay.append(divider);
    }
    if (name) overlay.append(name);
    if (role) overlay.append(role);
    card.append(media);
  } else {
    // Default: name/role below the image; bio revealed over the image on hover.
    if (name) body.append(name);
    if (role) body.append(role);
    bio.forEach((p) => overlay.append(p));
    card.append(media, body);
  }

  return card;
}

/**
 * Decorates the profile block.
 *  - base variant: responsive grid of profile cards.
 *  - `carousel` variant: cards inside the reusable carousel utility with
 *    top-left intro, top-right nav, and optional "view all".
 * @param {Element} block The profile block element.
 */
export default async function decorate(block) {
  const isCarousel = block.classList.contains('carousel');
  // `overlap` variant: name/role/bio sit in an always-visible glass overlay on
  // the image (can be combined with `carousel`).
  const isOverlap = block.classList.contains('overlap');
  // Both variants may author an intro (eyebrow + heading + subheading) as the
  // first text-only row; the carousel centres it, the base grid left-aligns it.
  const { intro, viewAll } = extractConfig(block);

  // Data source: pull cards from a query-index sheet when the block is authored
  // as only a link to one; otherwise build them from the authored rows.
  const indexUrl = getIndexLink(block);
  let cards;
  if (indexUrl) {
    let dataRows = await fetchIndexRows(indexUrl);
    // Temporary: drop the listing/folder pages (e.g. /leaders, /clients) that
    // the query-index still returns until the index is rebuilt with the
    // folder-page exclude live. Belt-and-braces alongside the helix-query fix.
    const listingPaths = ['/leaders', '/clients', '/success-stories'];
    dataRows = dataRows.filter((row) => !listingPaths.includes((row.path || '').replace(/\/$/, '')));
    // Exclude the current page's own leader (don't show the card for the
    // detail page you are viewing). Match tolerantly: index paths are
    // site-root (e.g. /leaders/x) while the served path may carry a prefix
    // (e.g. /content/leaders/x locally).
    const currentPath = window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '');
    dataRows = dataRows.filter((row) => {
      const p = (row.path || '').replace(/\/$/, '');
      if (!p) return true;
      return p !== currentPath && !currentPath.endsWith(p);
    });
    // Order top-down by org hierarchy (breadth-first).
    dataRows = orderByHierarchy(dataRows);
    cards = dataRows.map((row) => buildCardFromData(row, isOverlap));
  } else {
    const rows = [...block.children];
    cards = rows
      .filter((row) => row.querySelector('picture, img') || row.textContent.trim())
      .map((row) => buildCard(row, isOverlap));
  }

  if (isCarousel) {
    await loadCSS(`${window.hlx.codeBasePath}/styles/carousel.css`);
    const { default: createCarousel } = await import('../../scripts/carousel.js');
    const carousel = createCarousel(cards, {
      heading: intro || undefined,
      viewAll,
      step: 1,
      align: 'left',
      label: 'Leadership profiles',
    });
    block.replaceChildren(carousel);
  } else {
    const grid = document.createElement('div');
    grid.className = 'profile-grid';
    cards.forEach((card) => grid.append(card));

    block.replaceChildren();
    if (intro) {
      const introEl = document.createElement('div');
      introEl.className = 'profile-intro';
      introEl.append(intro);
      // a trailing "view all" link becomes a button below the intro
      if (viewAll && viewAll.href) {
        const link = document.createElement('a');
        link.className = 'button profile-view-all';
        link.href = viewAll.href;
        link.textContent = viewAll.text || 'View All';
        introEl.append(link);
      }
      block.append(introEl);
    }
    block.append(grid);
  }
}
