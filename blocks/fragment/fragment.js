// Fragment Block: includes content from another page as a fragment.

// eslint-disable-next-line import/no-cycle
import {
  decorateMain,
} from '../../scripts/scripts.js';

import {
  loadSections,
} from '../../scripts/aem.js';

/**
 * Loads a fragment.
 * @param {string} path The path to the fragment
 * @param {string} [variation] Optional class added to the first block before
 *   its own decorate() runs, so the block's JS (not just its CSS) can react.
 * @returns {HTMLElement} The root element of the fragment
 */
export async function loadFragment(path, variation) {
  if (path && path.startsWith('/') && !path.startsWith('//')) {
    const resp = await fetch(`${path}.plain.html`);
    if (resp.ok) {
      const main = document.createElement('main');
      main.innerHTML = await resp.text();

      // reset base path for media to fragment base
      const resetAttributeBase = (tag, attr) => {
        main.querySelectorAll(`${tag}[${attr}^="./media_"]`).forEach((elem) => {
          elem[attr] = new URL(elem.getAttribute(attr), new URL(path, window.location)).href;
        });
      };
      resetAttributeBase('img', 'src');
      resetAttributeBase('source', 'srcset');

      decorateMain(main);
      if (variation) main.querySelector('.block')?.classList.add(variation);
      await loadSections(main);
      return main;
    }
  }
  return null;
}

export default async function decorate(block) {
  const link = block.querySelector('a');
  const href = link ? link.getAttribute('href') : block.textContent.trim();
  const [path, query] = href.split('?');
  // `?variation=x` on the fragment link becomes a class on the first block.
  const variation = query && new URLSearchParams(query).get('variation');
  const fragment = await loadFragment(path, variation);
  if (!fragment) return;

  const wrapper = block.closest('.fragment-wrapper');
  const section = wrapper.closest('.section');

  if (section && section.children.length === 1) {
    // fragment is the ONLY child of its section; replace the whole section
    section.replaceWith(...fragment.childNodes);
  } else {
    // fragment shares section with other children; flatten children into it
    fragment.querySelectorAll(':scope > .section').forEach((fragSection) => {
      [...fragSection.childNodes].forEach((child) => wrapper.before(child));
    });
    wrapper.remove();
  }
}
