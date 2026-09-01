/** Decorates the callout block: a left-aligned panel with eyebrow, heading, body, button, note. */
export default function decorate(block) {
  const cell = block.querySelector(':scope > div > div') || block.firstElementChild;
  if (!cell) return;

  cell.classList.add('callout-content');

  // Eyebrow: a leading paragraph above the heading (document order).
  const [firstText] = cell.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
  if (firstText && firstText.tagName === 'P') {
    firstText.classList.add('callout-eyebrow');
  }

  // The CTA is always rendered as a button, even for a plain unformatted link.
  let buttonWrapper = cell.querySelector('.button-container, p.button-wrapper');
  if (!buttonWrapper) {
    const link = cell.querySelector('a[href]');
    if (link) {
      const wrapper = link.closest('p') || link;
      wrapper.classList.add('button-container');
      link.classList.add('button');
      buttonWrapper = wrapper;
    }
  }

  // Any paragraph after the button/CTA is the small note.
  if (buttonWrapper) {
    let next = buttonWrapper.nextElementSibling;
    while (next) {
      if (next.tagName === 'P') next.classList.add('callout-note');
      next = next.nextElementSibling;
    }
  }
}
