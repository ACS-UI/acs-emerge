import { createOptimizedPicture } from '../../scripts/aem.js';

/** Decorates the event-hero block: title/date, about card, details, CTA, and image. */
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
