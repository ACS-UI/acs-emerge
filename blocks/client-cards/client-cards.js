import { createOptimizedPicture, loadCSS } from '../../scripts/aem.js';
import {
  extractConfig, getIndexLink, fetchIndexRows, excludeListingPages,
} from '../../scripts/query-index.js';

/**
 * Wraps a card in a link to its detail page when a destination is available.
 * @param {HTMLElement} card The card article.
 * @param {string} href The detail-page URL (falsy = no wrap).
 * @returns {HTMLElement} The card, or an anchor wrapping it.
 */
function linkWrap(card, href) {
  if (!href) return card;
  const link = document.createElement('a');
  link.className = 'client-cards-card-link';
  link.href = href;
  link.append(card);
  return link;
}

/**
 * Builds the inner card DOM (logo + title + description + optional CTA).
 * @param {object} parts { img, title, descs[], cta }
 * @returns {HTMLElement} The card article.
 */
function renderCard({
  picture, title, descs, cta,
}) {
  const card = document.createElement('article');
  card.className = 'client-cards-card';

  const logo = document.createElement('div');
  logo.className = 'client-cards-logo';
  if (picture) logo.append(picture);
  card.append(logo);

  const body = document.createElement('div');
  body.className = 'client-cards-body';
  if (title) {
    const h = document.createElement('h3');
    h.className = 'client-cards-title';
    h.textContent = title;
    body.append(h);
  }
  (descs || []).forEach((text) => {
    const p = document.createElement('p');
    p.className = 'client-cards-desc';
    p.textContent = text;
    body.append(p);
  });
  if (cta) {
    const actions = document.createElement('div');
    actions.className = 'client-cards-actions';
    cta.classList.add('button', 'secondary', 'client-cards-cta');
    actions.append(cta);
    body.append(actions);
  }
  card.append(body);
  return card;
}

/**
 * Turns one authored row (logo cell + title/description/CTA cell) into a client card.
 * @param {Element} row The authored row.
 * @returns {HTMLElement} The card (possibly link-wrapped).
 */
function buildCard(row) {
  const cells = [...row.children];
  const imageCell = cells.find((c) => c.querySelector('picture, img'));
  const bodyCell = cells.find((c) => c !== imageCell && c.textContent.trim());

  const img = imageCell?.querySelector('img');
  const picture = img
    ? createOptimizedPicture(img.src, img.alt, false, [{ width: '400' }])
    : null;

  let title;
  const descs = [];
  let cta = null;
  let href = '';
  if (bodyCell) {
    const nodes = [...bodyCell.children];
    const heading = nodes.find((n) => /^H[1-6]$/.test(n.tagName));
    title = heading ? heading.textContent.trim() : '';
    cta = bodyCell.querySelector('a[href]');
    href = cta ? cta.getAttribute('href') : '';
    nodes
      .filter((n) => n !== heading && !n.contains(cta) && n.textContent.trim())
      .forEach((p) => descs.push(p.textContent.trim()));
  }

  const card = renderCard({
    picture, title, descs, cta,
  });
  return linkWrap(card, href);
}

/**
 * Builds a client card from an index row, wrapped in a link to the row path.
 * @param {object} row Index row (path, title, logo, image, description).
 * @returns {HTMLElement} The link-wrapped card.
 */
function buildCardFromData(row) {
  const src = row.logo || row.image;
  const picture = src
    ? createOptimizedPicture(src, row.title || '', false, [{ width: '400' }])
    : null;
  const card = renderCard({
    picture,
    title: row.title,
    descs: row.description ? [row.description] : [],
    cta: null,
  });
  return linkWrap(card, row.path);
}

/**
 * Decorates the client-cards block: a grid, or `carousel` variant, from an index sheet or rows.
 * @param {Element} block The client-cards block element.
 */
export default async function decorate(block) {
  const isCarousel = block.classList.contains('carousel');
  const { intro, viewAll } = extractConfig(block);

  const indexUrl = getIndexLink(block);
  let cards;
  if (indexUrl) {
    let dataRows = await fetchIndexRows(indexUrl);
    dataRows = excludeListingPages(dataRows);
    cards = dataRows.map((row) => buildCardFromData(row));
  } else {
    const rows = [...block.children];
    cards = rows
      .filter((row) => row.querySelector('picture, img') || row.textContent.trim())
      .map((row) => buildCard(row));
  }

  if (isCarousel) {
    await loadCSS(`${window.hlx.codeBasePath}/styles/carousel.css`);
    const { default: createCarousel } = await import('../../scripts/carousel.js');
    const carousel = createCarousel(cards, {
      heading: intro || undefined,
      viewAll,
      step: 1,
      align: 'left',
      label: 'New clients',
    });
    block.replaceChildren(carousel);
  } else {
    const grid = document.createElement('div');
    grid.className = 'client-cards-grid';
    cards.forEach((card) => grid.append(card));

    block.replaceChildren();
    if (intro) {
      const introEl = document.createElement('div');
      introEl.className = 'client-cards-intro';
      introEl.append(intro);
      if (viewAll && viewAll.href) {
        const link = document.createElement('a');
        link.className = 'button client-cards-view-all';
        link.href = viewAll.href;
        link.textContent = viewAll.text || 'View All';
        introEl.append(link);
      }
      block.append(introEl);
    }
    block.append(grid);
  }
}
