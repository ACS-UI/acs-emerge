/**
 * Shared helpers for content-grid blocks (profile, success, client-cards,
 * profile-details, ...) that can be authored either as rows or as a single
 * link to a query-index.json sheet.
 */

const indexCache = new Map();

/**
 * Fetches and caches a query-index sheet's rows.
 * @param {string} url The query-index.json URL.
 * @returns {Promise<object[]>} Rows (empty array on failure).
 */
export function fetchIndexRows(url) {
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
 * If the block is authored as *only* a link to a query-index sheet (no
 * images), returns that URL so cards are pulled from the index instead of
 * authored rows.
 * @param {Element} block The block element.
 * @returns {string|null} The query-index URL, or null for authored content.
 */
export function getIndexLink(block) {
  if (block.querySelector('picture, img')) return null;
  const links = [...block.querySelectorAll('a[href]')];
  const indexLink = links.find((a) => /query-index\.json(\?|$)/.test(a.getAttribute('href') || a.href));
  return indexLink ? indexLink.href : null;
}

/**
 * Extracts an optional heading/description "intro" from the first authored
 * row when it has no image (carousel variants centre it, grid variants
 * left-align it). A trailing link becomes a "view all" action.
 * @param {Element} block The block element.
 * @returns {{ intro: Element|null, viewAll: {text:string, href:string}|false }}
 */
export function extractConfig(block) {
  let intro = null;
  let viewAll = false;

  const firstRow = block.firstElementChild;
  if (firstRow && !firstRow.querySelector('picture, img')) {
    const cells = [...firstRow.children];
    // A single-cell row of text/headings is treated as the intro.
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
 * Listing/folder pages (e.g. /leaders, /clients) that a query-index still
 * returns until it's rebuilt with the folder-page exclude live.
 */
const LISTING_PATHS = ['/leaders', '/clients', '/success-stories'];

/**
 * Drops listing/folder-page rows from a query-index result set. Temporary:
 * belt-and-braces alongside the helix-query fix.
 * @param {object[]} rows Index rows.
 * @returns {object[]} Rows with listing pages removed.
 */
export function excludeListingPages(rows) {
  return rows.filter((row) => !LISTING_PATHS.includes((row.path || '').replace(/\/$/, '')));
}
