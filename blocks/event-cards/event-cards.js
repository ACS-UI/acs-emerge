import { createOptimizedPicture, loadCSS } from '../../scripts/aem.js';
import {
  extractConfig, getIndexLink, fetchIndexRows, excludeListingPages,
} from '../../scripts/query-index.js';

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

/**
 * Parses an authored date (e.g. "2026-08-11") into a month/day/weekday badge.
 * Falls back gracefully if the string isn't a parseable ISO-ish date.
 * @param {string} value The authored date string.
 * @returns {{month:string, day:string, weekday:string}|null}
 */
function parseDateBadge(value) {
  if (!value) return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(value.trim());
  if (!match) return null;
  const [, y, m, d] = match.map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  if (Number.isNaN(date.getTime())) return null;
  return {
    month: MONTHS[m - 1] || '',
    day: String(d).padStart(2, '0'),
    weekday: WEEKDAYS[date.getUTCDay()] || '',
  };
}

/**
 * Builds the date badge element (month / day / weekday) overlaid on the card
 * image, mirroring the Figma card.
 * @param {string} dateValue The authored date string.
 * @returns {HTMLElement|null}
 */
function buildDateBadge(dateValue) {
  const badge = parseDateBadge(dateValue);
  if (!badge) return null;
  const el = document.createElement('div');
  el.className = 'event-cards-badge';
  el.innerHTML = `<span class="event-cards-badge-month">${badge.month}</span>`
    + `<span class="event-cards-badge-day">${badge.day}</span>`
    + `<span class="event-cards-badge-weekday">${badge.weekday}</span>`;
  return el;
}

/**
 * Builds the meta line ("9 AM IST · 2 hours · 500 attending") from the
 * available fields, joining only those that are present.
 * @param {object} parts {time, duration, attendees}
 * @returns {HTMLElement|null}
 */
function buildMeta({ time, duration, attendees }) {
  const bits = [];
  if (time) bits.push(time);
  if (duration) bits.push(duration);
  if (attendees) bits.push(`${attendees} attending`);
  if (!bits.length) return null;
  const p = document.createElement('p');
  p.className = 'event-cards-meta';
  bits.forEach((text, i) => {
    if (i) {
      const sep = document.createElement('span');
      sep.className = 'event-cards-meta-sep';
      sep.setAttribute('aria-hidden', 'true');
      sep.textContent = '·';
      p.append(sep);
    }
    const span = document.createElement('span');
    span.textContent = text;
    p.append(span);
  });
  return p;
}

/**
 * Assembles one event card element from normalised fields, wrapped in a link
 * to its detail page when a path is available.
 * @param {object} fields {title, image, alt, date, time, duration, attendees, path}
 * @returns {HTMLElement} The card (or link-wrapped card).
 */
function buildCardElement(fields) {
  const card = document.createElement('article');
  card.className = 'event-cards-card';

  const media = document.createElement('div');
  media.className = 'event-cards-image';
  if (fields.image) {
    media.append(createOptimizedPicture(fields.image, fields.alt || fields.title || '', false, [{ width: '750' }]));
  }
  const badge = buildDateBadge(fields.date);
  if (badge) media.append(badge);
  card.append(media);

  const body = document.createElement('div');
  body.className = 'event-cards-body';
  if (fields.title) {
    const h = document.createElement('h3');
    h.className = 'event-cards-title';
    h.textContent = fields.title;
    body.append(h);
  }
  const meta = buildMeta(fields);
  if (meta) body.append(meta);
  card.append(body);

  if (fields.path) {
    const link = document.createElement('a');
    link.className = 'event-cards-link';
    link.href = fields.path;
    link.append(card);
    return link;
  }
  return card;
}

/**
 * Builds a card from a query-index row.
 * Index columns: path, title, description, image, date, time, attendees, duration.
 * @param {object} row An index row.
 * @returns {HTMLElement}
 */
function buildCardFromData(row) {
  return buildCardElement({
    title: row.title,
    image: row.image,
    alt: row.title,
    date: row.date,
    time: row.time,
    duration: row.duration,
    attendees: row.attendees,
    path: row.path,
  });
}

/**
 * Builds a card from an authored row.
 * Authored content model (per row / per event):
 *   Cell 1: the event image.
 *   Cell 2: a heading (event title), then paragraphs for date, time,
 *           duration, attendees (in that order), and an optional link whose
 *           target becomes the card's detail-page link.
 * @param {Element} row The authored row.
 * @returns {HTMLElement}
 */
function buildCard(row) {
  const cells = [...row.children];
  const imageCell = cells.find((c) => c.querySelector('picture, img'));
  const bodyCell = cells.find((c) => c !== imageCell && c.textContent.trim());

  const img = imageCell?.querySelector('img');
  const fields = { image: img?.src, alt: img?.alt };

  if (bodyCell) {
    const nodes = [...bodyCell.children];
    const heading = nodes.find((n) => /^H[1-6]$/.test(n.tagName));
    if (heading) fields.title = heading.textContent.trim();
    const cta = bodyCell.querySelector('a[href]');
    if (cta) fields.path = cta.getAttribute('href');
    const paragraphs = nodes
      .filter((n) => n !== heading && n.tagName === 'P' && !n.contains(cta) && n.textContent.trim())
      .map((p) => p.textContent.trim());
    [fields.date, fields.time, fields.duration, fields.attendees] = paragraphs;
  }
  return buildCardElement(fields);
}

/**
 * Decorates the event-cards block.
 *  - base variant: responsive grid of event cards.
 *  - `carousel` variant: cards inside the shared carousel utility (used on
 *    event detail pages as "Explore other events").
 * Cards come from a query-index sheet when the block is authored as only a
 * link to one; otherwise they're built from authored rows.
 * @param {Element} block The event-cards block element.
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
      viewAllPosition: 'top',
      step: 1,
      align: 'left',
      label: 'Events',
    });
    block.replaceChildren(carousel);
    return;
  }

  block.replaceChildren();
  if (intro) {
    const introEl = document.createElement('div');
    introEl.className = 'event-cards-intro';
    introEl.append(intro);
    if (viewAll && viewAll.href) {
      const link = document.createElement('a');
      link.className = 'button event-cards-view-all';
      link.href = viewAll.href;
      link.textContent = viewAll.text || 'View All';
      introEl.append(link);
    }
    block.append(introEl);
  }

  const grid = document.createElement('div');
  grid.className = 'event-cards-grid';
  cards.forEach((card) => grid.append(card));
  block.append(grid);
}
