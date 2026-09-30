import {
  el, icon, loadBeautystack, readConfig, dsPicture,
} from '../../scripts/beautystack.js';

/*
 * Search Suggestions (Beautystack Molecules/SearchSuggestions)
 *
 * Group rows (label | list). A group is drawn only when authored, max 3 items:
 *   Suggestions | list of terms (text or links)
 *   Collections | list of collections (text or links)
 *   Products    | list of products, each an image + name (optionally linked)
 * No group authored = the no-results state.
 *
 * Config rows, authored first, before the groups:
 *   Query        what the shopper typed; used in the see-all / no-results action
 *   Search Page  where the see-all action goes (default /search), gets ?q=<query>
 */

const CONFIG = {
  query: ['query', 'search-query'],
  searchPage: ['search-page', 'search-url', 'results-page'],
};
const MAX_ITEMS = 3;

function groupKind(label) {
  const l = label.toLowerCase();
  if (l.startsWith('product')) return 'products';
  if (l.startsWith('collection')) return 'collections';
  if (l.startsWith('suggest')) return 'suggestions';
  return null;
}

/** list items from a cell: <li>s, or paragraphs, or bare links */
function items(cell) {
  const lis = [...cell.querySelectorAll('li')];
  if (lis.length) return lis;
  const ps = [...cell.querySelectorAll(':scope > p')].filter((p) => p.textContent.trim() || p.querySelector('img'));
  if (ps.length) return ps;
  return [cell];
}

function searchHref(page, term) {
  const url = new URL(page || '/search', window.location.href);
  url.searchParams.set('q', term);
  return url.pathname + url.search;
}

function menuItem(className, href, content) {
  const tag = href ? 'a' : 'button';
  const node = el(tag, {
    class: `ds-menu-item ${className}`,
    href,
    type: href ? undefined : 'button',
    dataset: { variant: 'simple', cursor: 'pointer', selectionIndicator: 'true' },
  });
  node.append(el('span', { class: 'ds-menu-item__text' }, el('span', { class: 'ds-menu-item__label' }, content)));
  return node;
}

let uid = 0;
function group(label, list, extraListClass) {
  uid += 1;
  const id = `ds-search-suggestions-${uid}`;
  return el(
    'section',
    { class: 'ds-search-suggestions__group', 'aria-labelledby': id },
    el('p', { id, class: 'ds-search-suggestions__group-header', text: label }),
    el('ul', { class: `ds-search-suggestions__list${extraListClass ? ` ${extraListClass}` : ''}` }, list),
  );
}

export default async function decorate(block) {
  const loading = loadBeautystack();
  const cfg = readConfig(block, CONFIG);
  const query = cfg.query || '';
  const groups = {};

  [...block.children].forEach((row) => {
    const [head, body] = row.children;
    if (!head || !body) return;
    const label = head.textContent.trim();
    const kind = groupKind(label);
    if (!kind) return;
    const entries = items(body).slice(0, MAX_ITEMS).map((node) => {
      const a = node.querySelector('a') || (node.tagName === 'A' ? node : null);
      const img = node.querySelector('img');
      const name = (a ? a.textContent : node.textContent).trim();
      return {
        name, href: a?.getAttribute('href'), image: img?.src,
      };
    }).filter((e) => e.name);
    if (entries.length) groups[kind] = { label, entries };
  });

  const { searchPage } = cfg;
  const anyGroup = Object.keys(groups).length > 0;
  let root;

  if (!anyGroup) {
    uid += 1;
    const id = `ds-search-suggestions-empty-${uid}`;
    root = el(
      'div',
      { class: 'ds-search-suggestions ds-search-suggestions--empty', role: 'region', 'aria-labelledby': id },
      el(
        'a',
        { class: 'ds-search-suggestions__empty-action', href: searchHref(searchPage, query) },
        el('span', { id, text: `Search for “${query}”` }),
        icon('arrow-right', { className: 'ds-search-suggestions__empty-action-icon' }),
      ),
    );
  } else {
    const columns = el('div', { class: 'ds-search-suggestions__columns' });
    const textGroups = ['suggestions', 'collections'].filter((k) => groups[k]);
    if (textGroups.length) {
      const col = el('div', { class: 'ds-search-suggestions__column' });
      textGroups.forEach((k) => {
        const { label, entries } = groups[k];
        col.append(group(label, entries.map((e) => el('li', {}, menuItem(
          'ds-search-suggestions__item',
          e.href || searchHref(searchPage, e.name),
          e.name,
        )))));
      });
      columns.append(col);
    }
    if (groups.products) {
      const { label, entries } = groups.products;
      const list = entries.map((e) => {
        const thumb = e.image
          ? dsPicture(e.image, '', 'ds-search-suggestions__thumb', false, [{ width: '160' }])
          : el('span', { class: 'ds-search-suggestions__thumb ds-search-suggestions__thumb--empty', 'aria-hidden': 'true' });
        const body = el(
          'span',
          { class: 'ds-search-suggestions__product-body' },
          el('span', { class: 'ds-search-suggestions__thumb-wrap' }, thumb),
          el('span', { class: 'ds-search-suggestions__product-name', text: e.name }),
        );
        return el('li', {}, menuItem('ds-search-suggestions__product', e.href || searchHref(searchPage, e.name), body));
      });
      columns.append(el(
        'div',
        { class: 'ds-search-suggestions__column ds-search-suggestions__column--products' },
        group(label, list, 'ds-search-suggestions__products-list'),
      ));
    }
    root = el(
      'div',
      { class: 'ds-search-suggestions', role: 'region', 'aria-label': 'Search suggestions' },
      columns,
      el(
        'a',
        { class: 'ds-search-suggestions__cta', href: searchHref(searchPage, query) },
        el('span', { text: `Show all results for “${query}”` }),
        icon('arrow-right', { className: 'ds-search-suggestions__cta-icon' }),
      ),
    );
  }

  await loading;
  block.replaceChildren(root);
}
