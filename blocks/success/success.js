import { createOptimizedPicture, loadCSS } from '../../scripts/aem.js';

/**
 * Extracts an optional heading/description "intro" from the first authored row
 * when it has no image. Shared by all variants (carousel centres it, base &
 * parallax left-align it). A trailing link becomes a "view all" action.
 * @param {Element} block The success block.
 * @returns {{ intro: Element|null, viewAll: {text:string, href:string}|false }}
 */
function extractConfig(block) {
  let intro = null;
  let viewAll = false;

  const firstRow = block.firstElementChild;
  if (firstRow && !firstRow.querySelector('picture, img')) {
    const cells = [...firstRow.children];
    if (cells.length === 1) {
      intro = document.createElement('div');
      while (cells[0].firstChild) intro.append(cells[0].firstChild);
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
 * Turns one authored row into a success-story card.
 *
 * Authored content model (per row / per story):
 *   Cell 1: the story image (cover photo).
 *   Cell 2: a heading (client / story title), one or more paragraphs of
 *           description, and an optional trailing list/paragraph of tags
 *           (comma-separated) rendered as pills.
 *
 * @param {Element} row The authored row.
 * @returns {HTMLElement} The card article.
 */
function buildCard(row) {
  const cells = [...row.children];
  const card = document.createElement('article');
  card.className = 'success-card';

  const imageCell = cells.find((c) => c.querySelector('picture, img'));
  const bodyCell = cells.find((c) => c !== imageCell && c.textContent.trim());

  // --- media ---
  const media = document.createElement('div');
  media.className = 'success-card-image';
  const img = imageCell?.querySelector('img');
  if (img) {
    media.append(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
  }
  card.append(media);

  // --- body (title + description + tags) ---
  const body = document.createElement('div');
  body.className = 'success-card-body';

  if (bodyCell) {
    const nodes = [...bodyCell.children];
    const heading = nodes.find((n) => /^H[1-6]$/.test(n.tagName));
    if (heading) {
      heading.classList.add('success-card-title');
      body.append(heading);
    }

    // A trailing UL is treated as the tag list.
    const tagList = nodes.find((n) => n.tagName === 'UL');

    nodes
      .filter((n) => n !== heading && n !== tagList && n.textContent.trim())
      .forEach((p) => {
        p.classList.add('success-card-desc');
        body.append(p);
      });

    if (tagList) {
      const tags = document.createElement('ul');
      tags.className = 'success-card-tags';
      [...tagList.children].forEach((li) => {
        const tag = document.createElement('li');
        tag.className = 'success-card-tag';
        tag.textContent = li.textContent.trim();
        tags.append(tag);
      });
      body.append(tags);
    }
  }

  card.append(body);
  return card;
}

/**
 * Distributes cards into `columns` staggered columns for the parallax layout.
 * @param {HTMLElement[]} cards The story cards.
 * @param {number} columns Number of columns.
 * @returns {HTMLElement} The parallax container.
 */
function buildParallax(cards, columns = 2) {
  const wrap = document.createElement('div');
  wrap.className = 'success-parallax';
  wrap.style.setProperty('--success-parallax-columns', columns);

  const cols = Array.from({ length: columns }, (_, i) => {
    const col = document.createElement('div');
    col.className = 'success-parallax-column';
    // alternate columns start with a vertical offset for the staggered look
    col.dataset.parallaxSpeed = i % 2 === 0 ? '0.9' : '1.15';
    return col;
  });
  cards.forEach((card, i) => cols[i % columns].append(card));
  cols.forEach((col) => wrap.append(col));

  // Parallax on scroll: translate each column by a fraction of the scroll
  // delta relative to the section entering the viewport. Respects reduced
  // motion and only runs while the section is near the viewport.
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      // progress: -1 (below) .. 0 (centered) .. 1 (above)
      const progress = (vh / 2 - (rect.top + rect.height / 2)) / vh;
      cols.forEach((col) => {
        const speed = parseFloat(col.dataset.parallaxSpeed) - 1; // -0.1 / +0.15
        col.style.transform = `translate3d(0, ${(progress * speed * 160).toFixed(1)}px, 0)`;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    requestAnimationFrame(update);
  }

  return wrap;
}

/**
 * Decorates the success block.
 *  - base variant: responsive grid of success-story cards.
 *  - `carousel` variant: cards inside the shared carousel utility.
 *  - `parallax` variant: staggered columns that drift on scroll.
 * @param {Element} block The success block element.
 */
export default async function decorate(block) {
  const isCarousel = block.classList.contains('carousel');
  const isParallax = block.classList.contains('parallax');
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
      align: 'left',
      label: 'Success stories',
    });
    block.replaceChildren(carousel);
    return;
  }

  block.replaceChildren();

  if (intro) {
    const introEl = document.createElement('div');
    introEl.className = 'success-intro';
    introEl.append(intro);
    if (viewAll && viewAll.href) {
      const link = document.createElement('a');
      link.className = 'button success-view-all';
      link.href = viewAll.href;
      link.textContent = viewAll.text || 'View All';
      introEl.append(link);
    }
    block.append(introEl);
  }

  if (isParallax) {
    block.append(buildParallax(cards, 2));
  } else {
    const grid = document.createElement('div');
    grid.className = 'success-grid';
    cards.forEach((card) => grid.append(card));
    block.append(grid);
  }
}
