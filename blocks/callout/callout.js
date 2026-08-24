/**
 * loads and decorates the callout block
 *
 * A centered prompt panel. Authored structure: a single cell containing an
 * eyebrow paragraph, a heading, a body paragraph, a button (a link, which the
 * core decoration turns into a .button), and a small note paragraph after it.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const cell = block.querySelector(':scope > div > div') || block.firstElementChild;
  if (!cell) return;

  cell.classList.add('callout-content');

  // Eyebrow: a leading paragraph above the heading (document order).
  const [firstText] = cell.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
  if (firstText && firstText.tagName === 'P') {
    firstText.classList.add('callout-eyebrow');
  }

  // Any paragraph after the button/CTA is the small note.
  const buttonWrapper = cell.querySelector('.button-container, p.button-wrapper');
  if (buttonWrapper) {
    let next = buttonWrapper.nextElementSibling;
    while (next) {
      if (next.tagName === 'P') next.classList.add('callout-note');
      next = next.nextElementSibling;
    }
  }
}
