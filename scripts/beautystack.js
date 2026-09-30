/*
 * Shared helpers for the Beautystack design-system blocks
 * (hero, search-suggestions, article-cards, filters-sort-panel).
 */
import { loadCSS, toClassName, createOptimizedPicture } from './aem.js';

// Lucide glyphs used by the design system (see Storybook Atoms/Icon).
const ICONS = {
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'image-off': '<line x1="2" x2="22" y1="2" y2="22"/><path d="M10.41 10.41a2 2 0 1 1-2.83-2.83"/><line x1="13.5" x2="6" y1="13.5" y2="21"/><line x1="18" x2="21" y1="12" y2="15"/><path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"/><path d="M21 15V5a2 2 0 0 0-2-2H9"/>',
  pause: '<rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/>',
  play: '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',
  'sliders-horizontal': '<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',
  'volume-2': '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>',
  'volume-x': '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
};
const ICON_SIZES = {
  sm: 16, md: 20, lg: 24, xl: 28,
};

/**
 * Builds a design-system icon.
 * @param {string} name glyph name
 * @param {object} [opts] size ('sm'|'md'|'lg'|'xl', omit to let CSS size it) and className
 * @returns {SVGElement}
 */
export function icon(name, { size, className } = {}) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  if (className) svg.setAttribute('class', className);
  const px = ICON_SIZES[size];
  svg.style.strokeWidth = 'calc(var(--icon-stroke-width, 1.5px) * var(--icon-stroke-scale, 1))';
  if (px) {
    svg.style.width = `${px}px`;
    svg.style.height = `${px}px`;
    svg.style.setProperty('--icon-stroke-scale', `calc(24 / ${px})`);
  }
  svg.innerHTML = ICONS[name] || '';
  return svg;
}

/**
 * Tiny element factory.
 * @param {string} tag
 * @param {object} [attrs] attributes; `class` string, `dataset` object, `text` for textContent
 * @param {...(Node|string)} children
 */
export function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (v === undefined || v === null || v === false) return;
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k === 'dataset') Object.entries(v).forEach(([dk, dv]) => { node.dataset[dk] = dv; });
    else node.setAttribute(k, v === true ? '' : v);
  });
  children.flat().forEach((c) => {
    if (c === undefined || c === null || c === false) return;
    node.append(c);
  });
  return node;
}

let tokensPromise;
/** Loads the Beautystack (Revlon) tokens and brand font once per page. */
export function loadBeautystack() {
  if (!tokensPromise) {
    tokensPromise = Promise.all([
      loadCSS(`${window.hlx.codeBasePath}/styles/beautystack-tokens.css`),
      // brand font (acumin-pro); falls back to the token stack if the kit is unavailable
      loadCSS('https://use.typekit.net/dnl7slg.css').catch(() => {}),
    ]);
  }
  return tokensPromise;
}

/**
 * Pulls authored config rows (`key | value`) out of a block.
 * Only rows whose first cell matches one of `keys` (after toClassName) are treated
 * as config; they are removed from the block. Aliases map several authored
 * spellings to one config name.
 * @param {Element} block
 * @param {Object<string, string[]>} spec config name -> accepted key spellings
 * @returns {Object<string, string>} config name -> lower-cased value
 */
export function readConfig(block, spec) {
  const lookup = {};
  Object.entries(spec).forEach(([name, aliases]) => {
    [name, ...aliases].forEach((a) => { lookup[toClassName(a)] = name; });
  });
  const config = {};
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (cells.length !== 2) return;
    const key = lookup[toClassName(cells[0].textContent.trim())];
    if (!key) return;
    config[key] = cells[1].textContent.trim();
    row.remove();
  });
  return config;
}

/**
 * Normalises a config value against an allowed list.
 * @param {string} value authored value
 * @param {string[]} allowed allowed normalised values
 * @param {Object<string,string>} [aliases] authored spelling -> allowed value
 * @returns {string|undefined}
 */
export function pick(value, allowed, aliases = {}) {
  if (!value) return undefined;
  const v = toClassName(value);
  if (allowed.includes(v)) return v;
  return aliases[v];
}

/** true when the element is a paragraph (or bare wrapper) holding only one link */
export function isLinkOnly(node) {
  if (!node || node.tagName === 'A') return node?.tagName === 'A';
  const links = node.querySelectorAll('a');
  return links.length === 1 && node.textContent.trim() === links[0].textContent.trim()
    && !node.querySelector('picture, img');
}

/**
 * Builds a design-system button (anchor when href is given).
 * @param {object} o
 */
export function dsButton({
  label, href, variant = 'primary', inverse = false, leadingIcon, className = '', type = 'button',
}) {
  const classes = ['ds-button', `ds-button--${variant}`, inverse && 'ds-button--inverse', className]
    .filter(Boolean).join(' ');
  const node = href ? el('a', { class: classes, href }) : el('button', { class: classes, type });
  if (leadingIcon) node.append(el('span', { class: 'ds-button__icon', 'aria-hidden': 'true' }, icon(leadingIcon)));
  node.append(el('span', { class: 'ds-button__label', text: label }));
  return node;
}

/**
 * Optimised <picture> whose <img> carries the design-system class; the picture
 * itself is `display: contents` in the block CSS so the img lays out as the
 * component expects.
 */
export function dsPicture(src, alt, className, eager = false, widths = [{ media: '(min-width: 600px)', width: '2000' }, { width: '750' }]) {
  const pic = createOptimizedPicture(src, alt || '', eager, widths);
  const img = pic.querySelector('img');
  img.className = className;
  if (!alt) img.setAttribute('aria-hidden', 'true');
  if (eager) img.setAttribute('fetchpriority', 'high');
  return pic;
}
