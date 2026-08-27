/** Decorates the newsletter-banner block: background image row + eyebrow/heading overlay row. */
export default function decorate(block) {
  const rows = [...block.children];

  // First cell that contains a picture is the background media.
  const mediaCell = rows.find((row) => row.querySelector('picture'));
  // The remaining cell (with text) is the overlay content.
  const contentCell = rows.find((row) => row !== mediaCell && row.textContent.trim());

  if (mediaCell) {
    const picture = mediaCell.querySelector('picture');
    const media = document.createElement('div');
    media.className = 'newsletter-banner-media';
    media.append(picture);
    block.prepend(media);
    mediaCell.remove();
  }

  if (contentCell) {
    contentCell.className = 'newsletter-banner-content';

    // Eyebrow: if the first text node (in document order) is a paragraph, it's the eyebrow.
    const heading = contentCell.querySelector('h1, h2, h3, h4, h5, h6');
    const [firstText] = contentCell.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    if (firstText && firstText.tagName === 'P') {
      firstText.classList.add('newsletter-banner-eyebrow');
    }

    // Accent the final line of the heading (soft-break separated) by wrapping each line in a span.
    if (heading && heading.innerHTML.includes('<br')) {
      const lines = heading.innerHTML.split(/<br\s*\/?>/i);
      heading.innerHTML = lines
        .map((line, i) => {
          const cls = i === lines.length - 1 ? ' class="newsletter-banner-accent"' : '';
          return `<span${cls}>${line.trim()}</span>`;
        })
        .join('');
    }

    block.append(contentCell);
  }
}
