import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * loads and decorates the event-hero block
 *
 * Authored content model (one row per cell of content, single column each):
 *   Row 1: the event title (a heading) and the date (a paragraph).
 *   Row 2: the "About the event" card — a label (e.g. "About the Event") and
 *          one or more body paragraphs.
 *   Row 3: the details card — a definition-style list of label/value pairs
 *          (Timing, Duration, Community, ...). Authored as a table/list where
 *          each line is "Label : Value", or as paragraphs.
 *   Row 4: a call-to-action link (e.g. "Register Now").
 *   Row 5: the event image.
 *
 * Fields may be omitted; the block lays out whatever is present. The left
 * column holds the text/cards, the right column holds the image.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const rows = [...block.children];

  // Locate the image row (the only one with a picture).
  const mediaRow = rows.find((row) => row.querySelector('picture, img'));

  const media = document.createElement('div');
  media.className = 'event-hero-media';
  if (mediaRow) {
    const img = mediaRow.querySelector('img');
    if (img) {
      media.append(
        createOptimizedPicture(img.src, img.alt, true, [{ width: '900' }]),
      );
    }
  }

  const content = document.createElement('div');
  content.className = 'event-hero-content';

  rows.forEach((row) => {
    if (row === mediaRow) return;
    const cell = row.firstElementChild || row;
    const heading = cell.querySelector('h1, h2, h3, h4, h5, h6');
    const link = cell.querySelector('a[href]');
    const hasColon = /:/.test(cell.textContent) && cell.querySelectorAll('p, li').length > 1;

    if (heading && !cell.querySelector('p:not(:empty)')) {
      // title row (heading, maybe followed by a date paragraph)
      const head = document.createElement('div');
      head.className = 'event-hero-head';
      while (cell.firstElementChild) head.append(cell.firstElementChild);
      content.append(head);
    } else if (heading) {
      // title + date live together in one cell
      const head = document.createElement('div');
      head.className = 'event-hero-head';
      while (cell.firstElementChild) head.append(cell.firstElementChild);
      const date = head.querySelector('p');
      if (date) date.classList.add('event-hero-date');
      content.append(head);
    } else if (link && cell.children.length <= 1) {
      // CTA row
      const cta = document.createElement('div');
      cta.className = 'event-hero-cta';
      link.classList.add('button');
      cta.append(link);
      content.append(cta);
    } else if (hasColon) {
      // details card (label : value pairs)
      const card = document.createElement('dl');
      card.className = 'event-hero-details';
      const lines = [...cell.querySelectorAll('p, li')];
      lines.forEach((line) => {
        const text = line.textContent.trim();
        const idx = text.indexOf(':');
        if (idx === -1) return;
        const dt = document.createElement('dt');
        dt.textContent = text.slice(0, idx).trim();
        const dd = document.createElement('dd');
        dd.textContent = text.slice(idx + 1).trim();
        card.append(dt, dd);
      });
      content.append(card);
    } else if (cell.textContent.trim()) {
      // about card (label + body paragraphs)
      const card = document.createElement('div');
      card.className = 'event-hero-about';
      while (cell.firstElementChild) card.append(cell.firstElementChild);
      // first paragraph is the label/eyebrow
      const label = card.querySelector('p, h1, h2, h3, h4, h5, h6');
      if (label) label.classList.add('event-hero-about-label');
      content.append(card);
    }
  });

  block.replaceChildren(content, media);
}
