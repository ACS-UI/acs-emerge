/**
 * loads and decorates the recording block
 *
 * Authored content model (single row, one text cell):
 *   - an optional eyebrow paragraph (e.g. "RECORDING"),
 *   - a title (heading) for the recording,
 *   - a meta paragraph (e.g. "Duration: 1 hr 58 min · Uploaded August 12"),
 *   - a link to the recording. Its text becomes the button label
 *     (e.g. "Watch Recording"); its href is the video URL.
 *
 * The recording opens in a new tab — there is no in-page player. If an
 * eyebrow is present it renders as a section label above the card.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const cell = block.querySelector(':scope > div > div') || block.firstElementChild;
  if (!cell) return;

  const link = cell.querySelector('a[href]');
  const heading = cell.querySelector('h1, h2, h3, h4, h5, h6');
  const paras = [...cell.querySelectorAll('p')].filter((p) => !p.contains(link));

  // An eyebrow is a leading paragraph that sits before the heading.
  let eyebrow = null;
  if (paras.length && heading && heading.previousElementSibling === paras[0]) {
    [eyebrow] = paras;
  } else if (paras.length && heading
    && [...cell.children].indexOf(paras[0]) < [...cell.children].indexOf(heading)) {
    [eyebrow] = paras;
  }
  const meta = paras.find((p) => p !== eyebrow) || null;

  const card = document.createElement('div');
  card.className = 'recording-card';

  // decorative play glyph
  const play = document.createElement('span');
  play.className = 'recording-play';
  play.setAttribute('aria-hidden', 'true');
  card.append(play);

  const body = document.createElement('div');
  body.className = 'recording-body';
  if (heading) {
    heading.classList.add('recording-title');
    body.append(heading);
  }
  if (meta) {
    meta.classList.add('recording-meta');
    body.append(meta);
  }
  card.append(body);

  if (link) {
    link.classList.add('button', 'recording-cta');
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    // move any label wrapper's stray text; keep just the anchor
    (link.closest('p') || link).replaceWith(link);
    card.append(link);
  }

  block.replaceChildren();
  if (eyebrow) {
    eyebrow.classList.add('recording-eyebrow');
    block.append(eyebrow);
  }
  block.append(card);
}
