import { loadCSS } from '../../scripts/aem.js';
import { extractConfig } from '../../scripts/query-index.js';

/**
 * Turns one authored row into a resource card element.
 *
 * Authored content model (per row / per resource):
 *   A single cell holding a title (heading), one or more description
 *   paragraphs, and a link (e.g. "Open") to the resource. The link becomes an
 *   "Open" pill button; it opens in a new tab.
 *
 * @param {Element} row The authored row.
 * @returns {HTMLElement} The card article.
 */
function buildCard(row) {
  const cell = row.firstElementChild || row;
  const card = document.createElement('article');
  card.className = 'session-resources-card';

  const link = cell.querySelector('a[href]');
  const heading = cell.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) {
    heading.classList.add('session-resources-title');
    card.append(heading);
  }

  // description paragraphs (everything that isn't the link's own paragraph)
  [...cell.querySelectorAll('p')]
    .filter((p) => !p.contains(link))
    .forEach((p) => {
      p.classList.add('session-resources-desc');
      card.append(p);
    });

  if (link) {
    link.classList.add('button', 'session-resources-open');
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    card.append(link);
  }

  return card;
}

/**
 * Decorates the session-resources block.
 *  - base variant: responsive grid / row of resource cards.
 *  - `carousel` variant: cards inside the reusable carousel utility (mirrors
 *    the profile block's carousel variation). Use the carousel when there are
 *    enough resources to scroll; author it by adding the `carousel` class.
 * @param {Element} block The session-resources block element.
 */
export default async function decorate(block) {
  const isCarousel = block.classList.contains('carousel');
  // Optional intro (eyebrow + heading) authored as the first text-only row.
  const { intro, viewAll } = extractConfig(block);

  const rows = [...block.children].filter((row) => row.textContent.trim());
  const cards = rows.map((row) => buildCard(row));

  if (isCarousel) {
    await loadCSS(`${window.hlx.codeBasePath}/styles/carousel.css`);
    const { default: createCarousel } = await import('../../scripts/carousel.js');
    const carousel = createCarousel(cards, {
      heading: intro || undefined,
      viewAll,
      step: 1,
      align: 'left',
      label: 'Session resources',
    });
    block.replaceChildren(carousel);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'session-resources-grid';
  cards.forEach((card) => grid.append(card));

  block.replaceChildren();
  if (intro) {
    const introEl = document.createElement('div');
    introEl.className = 'session-resources-intro';
    introEl.append(intro);
    block.append(introEl);
  }
  block.append(grid);
}
