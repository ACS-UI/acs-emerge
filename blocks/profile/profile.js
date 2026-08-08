import { createOptimizedPicture, loadCSS } from '../../scripts/aem.js';

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
function buildCard(row) {
  const cells = [...row.children];
  const card = document.createElement('article');
  card.className = 'profile-card';
  card.tabIndex = 0;

  const imageCell = cells.find((c) => c.querySelector('picture, img'));
  const bodyCell = cells.find((c) => c !== imageCell && c.textContent.trim());

  // --- media (image + hover overlay) ---
  const media = document.createElement('div');
  media.className = 'profile-card-image';
  const img = imageCell?.querySelector('img');
  if (img) {
    media.append(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
  }
  const overlay = document.createElement('div');
  overlay.className = 'profile-card-overlay';
  media.append(overlay);

  // --- body (name + role, always visible) ---
  const body = document.createElement('div');
  body.className = 'profile-card-body';

  if (bodyCell) {
    const nodes = [...bodyCell.children];
    const heading = nodes.find((n) => /^H[1-6]$/.test(n.tagName));
    const paragraphs = nodes.filter((n) => n !== heading && n.textContent.trim());

    if (heading) {
      heading.classList.add('profile-card-name');
      body.append(heading);
    }
    // First paragraph is the role (stays visible); the rest is hover bio.
    if (paragraphs.length) {
      const [role, ...bio] = paragraphs;
      role.classList.add('profile-card-role');
      body.append(role);
      bio.forEach((p) => overlay.append(p));
    }
  }

  card.append(media, body);
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
  // Both variants may author an intro (eyebrow + heading + subheading) as the
  // first text-only row; the carousel centres it, the base grid left-aligns it.
  const { intro, viewAll } = extractConfig(block);

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
