import { loadCSS } from '../../scripts/aem.js';
import { extractConfig } from '../../scripts/query-index.js';

/** Turns one authored row (title, description paragraphs, link) into a resource card element. */
function buildCard(row) {
  const cell = row.firstElementChild || row;
  const card = document.createElement('article');
  card.className = 'session-resources-carousel-card';

  const link = cell.querySelector('a[href]');
  const heading = cell.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) {
    heading.classList.add('session-resources-carousel-title');
    card.append(heading);
  }

  // description paragraphs (everything that isn't the link's own paragraph)
  [...cell.querySelectorAll('p')]
    .filter((p) => !p.contains(link))
    .forEach((p) => {
      p.classList.add('session-resources-carousel-desc');
      card.append(p);
    });

  if (link) {
    link.classList.add('button', 'session-resources-carousel-open');
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    card.append(link);
  }

  return card;
}

/** Decorates the session-resources-carousel block: cards inside the reusable carousel utility. */
export default async function decorate(block) {
  // Optional intro (eyebrow + heading) authored as the first text-only row.
  // extractConfig returns a bare wrapper div — class it here (createCarousel
  // only wraps it in .carousel-intro, it doesn't know about this block's own
  // eyebrow/heading styling).
  const { intro, viewAll } = extractConfig(block);
  if (intro) {
    intro.classList.add('session-resources-carousel-intro');
    const eyebrow = intro.querySelector('p');
    if (eyebrow) eyebrow.classList.add('session-resources-carousel-eyebrow');
  }

  const rows = [...block.children].filter((row) => row.textContent.trim());
  const cards = rows.map((row) => buildCard(row));

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
}
