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
 * If the block is authored as *only* a link to a query-index sheet (no images),
 * returns that URL so cards are pulled from the index instead of authored rows.
 * @param {Element} block The success block.
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
 * Builds a success-story card from an index row, wrapped in a link to the
 * story's detail page (the row path).
 *
 * Index columns: path, title, image, description, tags (comma-separated).
 * @param {object} row An index row.
 * @param {boolean} parallax When true, wraps the image in a clipped frame
 *   with an oversized picture so it can pan on scroll (parallax variant).
 * @returns {HTMLElement} The link-wrapped card.
 */
function buildCardFromData(row, parallax = false) {
  const card = document.createElement('article');
  card.className = 'success-card';

  const media = document.createElement('div');
  media.className = 'success-card-image';
  if (row.image) {
    const picture = createOptimizedPicture(row.image, row.title || '', false, [{ width: '750' }]);
    if (parallax) {
      const inner = document.createElement('div');
      inner.className = 'success-card-image-inner';
      inner.append(picture);
      media.append(inner);
    } else {
      media.append(picture);
    }
  }
  card.append(media);

  const body = document.createElement('div');
  body.className = 'success-card-body';
  if (row.title) {
    const h = document.createElement('h3');
    h.className = 'success-card-title';
    h.textContent = row.title;
    body.append(h);
  }
  if (row.description) {
    const p = document.createElement('p');
    p.className = 'success-card-desc';
    p.textContent = row.description;
    body.append(p);
  }
  // tags come from the index `tags` column (sourced from the `services`
  // metadata, since `tags` is a reserved metadata key).
  const tagValues = (row.tags || row.services || '').split(',').map((t) => t.trim()).filter(Boolean);
  if (tagValues.length) {
    const tags = document.createElement('ul');
    tags.className = 'success-card-tags';
    tagValues.forEach((t) => {
      const tag = document.createElement('li');
      tag.className = 'success-card-tag';
      tag.textContent = t;
      tags.append(tag);
    });
    body.append(tags);
  }
  card.append(body);

  if (row.path) {
    const link = document.createElement('a');
    link.className = 'success-card-link';
    link.href = row.path;
    link.append(card);
    return link;
  }
  return card;
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
 * @param {boolean} parallax When true, wraps the image in a clipped frame
 *   with an oversized picture so it can pan on scroll (parallax variant).
 * @returns {HTMLElement} The card article.
 */
function buildCard(row, parallax = false) {
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
    const picture = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    if (parallax) {
      const inner = document.createElement('div');
      inner.className = 'success-card-image-inner';
      inner.append(picture);
      media.append(inner);
    } else {
      media.append(picture);
    }
  }
  card.append(media);

  // --- body (title + description + tags) ---
  const body = document.createElement('div');
  body.className = 'success-card-body';

  // An authored link (in the body cell) is the card's detail-page target; its
  // text is not rendered separately — the whole card becomes the link.
  let href = '';
  if (bodyCell) {
    const nodes = [...bodyCell.children];
    const heading = nodes.find((n) => /^H[1-6]$/.test(n.tagName));
    if (heading) {
      heading.classList.add('success-card-title');
      body.append(heading);
    }

    // A trailing UL is treated as the tag list.
    const tagList = nodes.find((n) => n.tagName === 'UL');
    const cta = bodyCell.querySelector('a[href]');
    href = cta ? cta.getAttribute('href') : '';

    nodes
      .filter((n) => n !== heading && n !== tagList && !n.contains(cta) && n.textContent.trim())
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

  // wrap in the detail-page link when authored
  if (href) {
    const link = document.createElement('a');
    link.className = 'success-card-link';
    link.href = href;
    link.append(card);
    return link;
  }
  return card;
}

const PARALLAX_DESKTOP_QUERY = '(width >= 1024px)';

const IMAGE_ASPECT_RATIO = 5 / 4; // height/width — matches success.css .success-card-image
const IMAGE_TO_BODY_GAP = 16; // matches .success-card's own flex gap

/**
 * Positions cards into a zigzag staircase: each card starts exactly where
 * the previous card's text begins, alternating which screen edge it hugs.
 * The image-height step is computed from the card's measured width and the
 * fixed aspect ratio, rather than measured directly off `.success-card-image`
 * — that element's rendered height depends on a flex/aspect-ratio/absolute-
 * positioning chain that doesn't resolve reliably at measurement time.
 * Cards fall back to plain stacked flow below the desktop breakpoint (see
 * success.css).
 * @param {HTMLElement[]} cards The story cards, in authored order.
 */
function layoutZigzag(cards) {
  if (!window.matchMedia(PARALLAX_DESKTOP_QUERY).matches) {
    cards.forEach((card) => {
      card.style.position = '';
      card.style.top = '';
      card.style.left = '';
      card.style.right = '';
    });
    if (cards[0]?.parentElement) cards[0].parentElement.style.height = '';
    return;
  }

  const cardWidth = cards[0]?.getBoundingClientRect().width || 0;
  const imageHeight = cardWidth * IMAGE_ASPECT_RATIO;
  const step = imageHeight + IMAGE_TO_BODY_GAP;

  let maxBottom = 0;
  cards.forEach((card, i) => {
    const top = i * step;
    card.style.position = 'absolute';
    card.style.top = `${top}px`;
    const inset = Math.floor(i / 2) % 2 === 0 ? 50 : 100;
    if (i % 2 === 0) {
      card.style.right = `${inset}px`;
      card.style.left = '';
    } else {
      card.style.left = `${inset}px`;
      card.style.right = '';
    }

    // Measure the card's actual rendered height (image + gap + body) now
    // that it's positioned — reliable because .success-card no longer
    // inherits height:100% from the grid/carousel variants (see success.css),
    // so this reads its real content height instead of a stale/zero value.
    const cardHeight = card.getBoundingClientRect().height;
    maxBottom = Math.max(maxBottom, top + cardHeight);
  });

  const wrap = cards[0]?.parentElement;
  if (wrap) wrap.style.height = `${maxBottom}px`;
}

/**
 * Builds the parallax layout: cards are laid out in a zigzag staircase (see
 * layoutZigzag) and each card's image pans within its clipped frame on
 * scroll.
 * @param {HTMLElement[]} cards The story cards.
 * @returns {HTMLElement} The parallax container.
 */
function buildParallax(cards) {
  const wrap = document.createElement('div');
  wrap.className = 'success-parallax';
  cards.forEach((card) => wrap.append(card));

  // Deferred: `wrap` isn't attached to the document yet at this point (the
  // caller appends it after buildParallax returns), and getBoundingClientRect
  // on a detached subtree reads all zeros.
  requestAnimationFrame(() => layoutZigzag(cards));
  let resizeTicking = false;
  window.addEventListener(
    'resize',
    () => {
      if (!resizeTicking) {
        resizeTicking = true;
        requestAnimationFrame(() => {
          resizeTicking = false;
          layoutZigzag(cards);
        });
      }
    },
    { passive: true },
  );

  // Parallax on scroll: each card's image is oversized (130% height) inside
  // a clipped frame and pans within it by a fraction of the frame's own
  // scroll progress through the viewport — the image moves, not the card.
  // Respects reduced motion and only runs while a frame is near the viewport.
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    const frames = [...wrap.querySelectorAll('.success-card-image-inner')];
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      frames.forEach((frame) => {
        const picture = frame.firstElementChild;
        if (!picture) return;
        const rect = frame.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > vh + 100) return;
        // progress: -0.5 (below viewport) .. 0 (centered) .. 0.5 (above).
        // The 1.6 speed factor reaches max travel sooner in the scroll —
        // still clamped to the same physical ±15% frame overhang below.
        const raw = ((vh / 2 - (rect.top + rect.height / 2)) / vh) * 1.6;
        const progress = Math.max(-0.5, Math.min(0.5, raw));
        // image has 15% overhang on each side, so ±15% of height is the
        // maximum travel before revealing an edge. Sign is inverted so that
        // scrolling up reads as the image drifting down within its frame.
        picture.style.transform = `translate3d(0, ${(-progress * rect.height * 0.3).toFixed(1)}px, 0)`;
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
 *  - `parallax` variant: a zigzag staircase of cards that drift on scroll.
 * @param {Element} block The success block element.
 */
export default async function decorate(block) {
  const isCarousel = block.classList.contains('carousel');
  const isParallax = block.classList.contains('parallax');
  const { intro, viewAll } = extractConfig(block);

  // Data source: pull cards from a query-index sheet when the block is authored
  // as only a link to one; otherwise build them from the authored rows. Either
  // way each card links to its detail page.
  const indexUrl = getIndexLink(block);
  let cards;
  if (indexUrl) {
    let dataRows = await fetchIndexRows(indexUrl);
    // Temporary: drop the listing/folder pages the index still returns until
    // it is rebuilt with the folder-page exclude live.
    const listingPaths = ['/leaders', '/clients', '/success-stories'];
    dataRows = dataRows.filter((row) => !listingPaths.includes((row.path || '').replace(/\/$/, '')));
    cards = dataRows.map((row) => buildCardFromData(row, isParallax));
  } else {
    const rows = [...block.children];
    cards = rows
      .filter((row) => row.querySelector('picture, img') || row.textContent.trim())
      .map((row) => buildCard(row, isParallax));
  }

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
    block.append(buildParallax(cards));
  } else {
    const grid = document.createElement('div');
    grid.className = 'success-grid';
    cards.forEach((card) => grid.append(card));
    block.append(grid);
  }
}
