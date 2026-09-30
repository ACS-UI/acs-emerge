import {
  el, icon, loadBeautystack, readConfig, pick, isLinkOnly, dsPicture,
} from '../../scripts/beautystack.js';

/*
 * Article Cards (Beautystack Molecules/Article Card in an Organisms/Card Collection band)
 *
 * Rows (after the config rows):
 *   [optional] one cell with a heading (+ subtitle paragraph)  -> band header
 *   card rows: image | headline, short description, date, link  -> one card each
 *   [optional] one cell holding only a link to a .json index   -> cards from the index
 *   [optional] one cell holding only a link, last               -> band CTA
 * Everything show/hide (headline, subtitle, CTA, description, date, image) is authoring.
 *
 * Config rows, authored first, before the content:
 *   Columns    2 | 3 | 4           most columns at full width (default 4)
 *   Alignment  left | center       header alignment (default left)
 *   Ground     paper | paper-alt | inverse (dark)   band background (default paper)
 */

const CONFIG = {
  columns: ['columns', 'cols'],
  align: ['alignment', 'align', 'text-alignment', 'header-alignment'],
  ground: ['ground', 'background', 'tone', 'theme'],
};
const PAGE_SIZE = 12;
const MONTHS = 'jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec';
const DATE_RE = new RegExp(`^((\\d{1,2}(st|nd|rd|th)?\\s+)?(${MONTHS})[a-z]*\\.?\\s*(\\d{1,2}(st|nd|rd|th)?,?\\s*)?\\d{4}|\\d{4}-\\d{2}(-\\d{2})?|\\d{1,2}[/.]\\d{1,2}[/.]\\d{2,4})$`, 'i');

function isoDate(text) {
  const d = new Date(text);
  if (Number.isNaN(d.getTime())) return undefined;
  return /^\d{4}-\d{2}(-\d{2})?$/.test(text) ? text : d.toISOString().slice(0, 10);
}

function formatIndexDate(value) {
  if (!value) return {};
  const num = Number(value);
  let d;
  if (!Number.isNaN(num) && num > 0) {
    // query-index dates are seconds (lastModified) or Excel serial days
    d = num > 100000 ? new Date(num * 1000) : new Date(Math.round((num - 25569) * 86400 * 1000));
  } else d = new Date(value);
  if (Number.isNaN(d.getTime())) return { date: String(value) };
  return {
    date: d.toLocaleDateString(document.documentElement.lang || 'en', { month: 'long', year: 'numeric' }),
    dateTime: d.toISOString().slice(0, 10),
  };
}

function parseCard(row) {
  const card = {};
  const img = row.querySelector('img');
  if (img) card.image = img.currentSrc || img.src;
  const heading = row.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) card.title = heading.textContent.trim();
  const links = [...row.querySelectorAll('a')];
  card.href = (heading?.querySelector('a') || links[links.length - 1])?.getAttribute('href');
  const paras = [...row.querySelectorAll('p')].filter((p) => p.textContent.trim() && !p.querySelector('picture'));
  paras.forEach((p) => {
    const text = p.textContent.trim();
    if (isLinkOnly(p)) {
      if (!card.title) card.title = text;
      return;
    }
    const time = p.querySelector('time');
    if (!card.date && (time || DATE_RE.test(text))) {
      card.date = text;
      card.dateTime = time?.getAttribute('datetime') || isoDate(text);
      return;
    }
    if (!card.title) {
      card.title = text;
      return;
    }
    if (!card.description) card.description = text;
  });
  return card;
}

function articleCard(card, headingLevel) {
  const media = el('div', { class: 'ds-article-card__media' });
  const empty = () => el('span', { class: 'ds-article-card__empty', 'aria-hidden': 'true' }, icon('image-off', { size: 'lg' }));
  if (card.image) {
    const pic = dsPicture(card.image, '', 'ds-article-card__img', false, [{ media: '(min-width: 600px)', width: '750' }, { width: '600' }]);
    pic.querySelector('img').addEventListener('error', () => media.replaceChildren(empty()), { once: true });
    media.append(pic);
  } else media.append(empty());

  const h = document.createElement(`h${headingLevel}`);
  h.className = 'ds-article-card__title';
  h.textContent = card.title;
  const text = el('div', { class: 'ds-article-card__text' }, h);
  if (card.description) text.append(el('p', { class: 'ds-article-card__description', text: card.description }));
  if (card.date) text.append(el('time', { class: 'ds-article-card__date', datetime: card.dateTime, text: card.date }));
  text.append(el('span', { class: 'ds-article-card__read-more' }, 'Read more', icon('arrow-right', { size: 'sm' })));
  const link = el('a', { class: 'ds-article-card', href: card.href || '#' }, media, text);
  return link;
}

function pageList(pages, current) {
  if (pages <= 7) return Array.from({ length: pages }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '…', pages];
  if (current >= pages - 3) return [1, '…', pages - 4, pages - 3, pages - 2, pages - 1, pages];
  return [1, '…', current - 1, current, current + 1, '…', pages];
}

function pagination(pages, current, onPage) {
  const nav = el('nav', { class: 'ds-pagination', 'aria-label': 'Pagination' });
  const arrow = (label, glyph, target, disabled) => {
    const b = el('button', {
      type: 'button', class: 'ds-icon-button ds-icon-button--sm ds-pagination__arrow', 'aria-label': label, disabled,
    }, icon(glyph));
    b.addEventListener('click', () => onPage(target));
    return b;
  };
  nav.append(arrow('Previous page', 'chevron-left', current - 1, current <= 1));
  pageList(pages, current).forEach((p) => {
    if (p === '…') nav.append(el('span', { class: 'ds-pagination__ellipsis', 'aria-hidden': 'true', text: '…' }));
    else if (p === current) {
      nav.append(el('span', { class: 'ds-pagination__btn', 'aria-current': 'page', tabindex: '-1' }, el('span', { class: 'ds-sr-only', text: 'Page ' }), String(p)));
    } else {
      const b = el('button', {
        type: 'button', class: 'ds-pagination__btn', 'aria-label': `Page ${p}`, text: String(p),
      });
      b.addEventListener('click', () => onPage(p));
      nav.append(b);
    }
  });
  nav.append(arrow('Next page', 'chevron-right', current + 1, current >= pages));
  return nav;
}

async function fetchIndex(href) {
  try {
    const resp = await fetch(href);
    if (!resp.ok) return [];
    const json = await resp.json();
    return (json.data || []).map((r) => ({
      title: r.title || r.name,
      description: r.description,
      image: r.image,
      href: r.path || r.url,
      ...formatIndexDate(r.date || r.publishDate || r.publishdate || r.published || r.lastModified),
    })).filter((c) => c.title && !/\/(nav|footer)$/.test(c.href || ''));
  } catch (e) {
    return [];
  }
}

export default async function decorate(block) {
  const loading = loadBeautystack();
  const cfg = readConfig(block, CONFIG);
  const columns = [2, 3, 4].includes(Number(cfg.columns)) ? Number(cfg.columns) : 4;
  const align = pick(cfg.align, ['left', 'center'], { centre: 'center', centred: 'center', centered: 'center' }) || 'left';
  const ground = pick(cfg.ground, ['paper', 'paper-alt', 'inverse'], {
    dark: 'inverse', alt: 'paper-alt', 'paper-alternate': 'paper-alt', light: 'paper',
  }) || 'paper';

  const rows = [...block.children];
  let header;
  let cta;
  let indexHref;
  const cards = [];

  rows.forEach((row, i) => {
    const cells = [...row.children].filter((c) => c.textContent.trim() || c.querySelector('img'));
    const single = row.children.length === 1 || cells.length === 1;
    const only = cells[0];
    if (single && only && !only.querySelector('img')) {
      const a = only.querySelector('a');
      if (a && isLinkOnly(only.querySelector('p') || only) && /\.json(\?|$)/.test(a.getAttribute('href'))) {
        indexHref = a.getAttribute('href');
        return;
      }
      if (i === 0 && row.children.length === 1 && only.querySelector('h1, h2, h3, h4, h5, h6')) {
        header = {
          headline: only.querySelector('h1, h2, h3, h4, h5, h6').textContent.trim(),
          subtitle: [...only.querySelectorAll('p')].map((p) => p.textContent.trim()).find(Boolean),
        };
        return;
      }
      if (a && row.children.length === 1 && isLinkOnly(only.querySelector('p') || only) && i === rows.length - 1 && cards.length) {
        cta = { label: a.textContent.trim(), href: a.getAttribute('href') };
        return;
      }
    }
    const card = parseCard(row);
    if (card.title) cards.push(card);
  });

  const headingLevel = header?.headline ? 3 : 2;
  const groundCls = { inverse: ' ds-card-collection__band--inverse', 'paper-alt': ' ds-card-collection__band--paper-alt' }[ground] || '';
  const band = el('div', { class: `ds-card-collection__band${groundCls}${align === 'center' ? ' ds-card-collection__band--center' : ''}` });
  if (header?.headline || header?.subtitle) {
    band.append(el(
      'div',
      { class: 'ds-card-collection__header' },
      header.headline ? el('h2', { class: 'ds-card-collection__headline', text: header.headline }) : null,
      header.subtitle ? el('p', { class: 'ds-card-collection__subtitle', text: header.subtitle }) : null,
    ));
  }
  const grid = el('div', { class: `ds-card-collection ds-grid ds-card-collection--columns-${columns}` });
  band.append(grid);
  const pagerSlot = el('div', { class: 'article-cards-pager' });
  band.append(pagerSlot);
  if (cta) {
    band.append(el('a', {
      class: `ds-link ds-card-collection__cta${ground === 'inverse' ? ' ds-link--inverse' : ''}`, href: cta.href, text: cta.label,
    }));
  }

  let all = cards;
  if (indexHref) all = [...cards, ...(await fetchIndex(indexHref))];

  const render = (page) => {
    const pages = Math.ceil(all.length / PAGE_SIZE);
    // an authored band holds one page; an index feed pages itself
    const start = indexHref ? (page - 1) * PAGE_SIZE : 0;
    const slice = all.slice(start, start + PAGE_SIZE);
    grid.replaceChildren(...slice.map((c) => articleCard(c, headingLevel)));
    pagerSlot.replaceChildren();
    if (indexHref && pages > 1) {
      pagerSlot.append(pagination(pages, page, (p) => {
        render(p);
        band.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }));
    }
  };
  render(1);

  await loading;
  block.replaceChildren(el('div', { class: 'ds-rail' }, band));
}
