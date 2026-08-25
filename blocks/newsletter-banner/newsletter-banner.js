/**
 * loads and decorates the newsletter-banner block
 *
 * Authored structure (two rows):
 *   Row 1 — a single background image (picture).
 *   Row 2 — the overlay text: an eyebrow paragraph followed by a heading.
 *           The heading may span two lines (author uses a soft line break);
 *           the final line is rendered in the accent colour.
 *
 * Any field may be omitted — a banner can be image-only, text-only, or both.
 * @param {Element} block The block element
 */
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

    // Eyebrow: a leading paragraph above the heading. querySelectorAll returns
    // document order, so if the first text node is a paragraph it's the eyebrow.
    const heading = contentCell.querySelector('h1, h2, h3, h4, h5, h6');
    const [firstText] = contentCell.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    if (firstText && firstText.tagName === 'P') {
      firstText.classList.add('newsletter-banner-eyebrow');
    }

    // Accent the final line of the heading (author splits lines with a soft
    // break). Wrap each line in a span so the last one can be coloured.
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
