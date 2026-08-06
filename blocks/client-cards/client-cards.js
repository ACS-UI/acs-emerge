import { createOptimizedPicture, loadCSS } from '../../scripts/aem.js';

/**
 * Extracts an optional heading/description "intro" from the first authored row
 * when it has no image (used by the carousel variant for the centered text and
 * an optional "view all" action).
 * @param {Element} block The client-cards block.
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
 * Turns one authored row into a client card element.
 *
 * Authored content model (per row / per client):
 *   Cell 1: the client logo image.
 *   Cell 2: a heading (client/engagement title), one or more paragraphs of
 *           description, and optionally a trailing link rendered as the
 *           "Know More" call to action.
 *
 * @param {Element} row The authored row.
 * @returns {HTMLElement} The card article.
 */
function buildCard(row) {
  const cells = [...row.children];
  const card = document.createElement('article');
  card.className = 'client-cards-card';

  const imageCell = cells.find((c) => c.querySelector('picture, img'));
  const bodyCell = cells.find((c) => c !== imageCell && c.textContent.trim());

  // --- logo ---
  const logo = document.createElement('div');
  logo.className = 'client-cards-logo';
  const img = imageCell?.querySelector('img');
  if (img) {
    logo.append(createOptimizedPicture(img.src, img.alt, false, [{ width: '400' }]));
  }
  card.append(logo);

  // --- body (title + description + CTA) ---
  const body = document.createElement('div');
  body.className = 'client-cards-body';

  if (bodyCell) {
    const nodes = [...bodyCell.children];
    const heading = nodes.find((n) => /^H[1-6]$/.test(n.tagName));
    if (heading) {
      heading.classList.add('client-cards-title');
      body.append(heading);
    }

    // The trailing link (if any) becomes the "Know More" CTA button.
    const cta = bodyCell.querySelector('a[href]');

    nodes
      .filter((n) => n !== heading && !n.contains(cta) && n.textContent.trim())
      .forEach((p) => {
        p.classList.add('client-cards-desc');
        body.append(p);
      });

    if (cta) {
      cta.classList.add('button', 'secondary', 'client-cards-cta');
      const actions = document.createElement('div');
      actions.className = 'client-cards-actions';
      actions.append(cta);
      body.append(actions);
    }
  }

  card.append(body);
  return card;
}

/**
 * Decorates the client-cards block.
 *  - base variant: responsive grid of client cards.
 *  - `carousel` variant: cards inside the reusable carousel utility with a
 *    centered intro, top-right nav, and optional "view all".
 * @param {Element} block The client-cards block element.
 */
export default async function decorate(block) {
  const isCarousel = block.classList.contains('carousel');
  const { intro, viewAll } = isCarousel ? extractConfig(block) : { intro: null, viewAll: false };

  const rows = [...block.children];
  const cards = rows
    .filter((row) => row.querySelector('picture, img') || row.textContent.trim())
    .map((row) => buildCard(row));

  if (isCarousel) {
    await loadCSS(`${window.hlx.codeBasePath}/styles/carousel.css`);
    const { default: createCarousel } = await import('../../scripts/carousel.js');
    const carousel = createCarousel(cards, {
      heading: intro || undefined,
      viewAll,
      step: 1,
      align: 'center',
      label: 'New clients',
    });
    block.replaceChildren(carousel);
  } else {
    const grid = document.createElement('div');
    grid.className = 'client-cards-grid';
    cards.forEach((card) => grid.append(card));
    block.replaceChildren(grid);
  }
}
