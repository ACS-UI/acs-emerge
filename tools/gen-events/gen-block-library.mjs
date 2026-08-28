/*
 * Block Library generator (DA path).
 *   1. Creates blocks/<name>/metadata.json (block-variant-manager shape) for
 *      blocks missing it, inferred from js/css + content usage.
 *   2. Generates content/library/blocks/<name>.html div-grid samples: reuses
 *      the real div-grid from a reference content/*.plain.html page when the
 *      block is used there (preference 1), else synthesizes from JS/CSS.
 *   3. Writes content/library/blocks.json (index).
 *
 * Run: node tools/gen-events/gen-block-library.mjs
 */
import {
  readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync,
} from 'fs';
import { join } from 'path';

const ROOT = '/backups/ACS-UI/acs-emerge/repo';
const ORG = 'acs-ui';
const REPO = 'acs-emerge';
// pass a fixed timestamp (Date.now is unavailable in some sandboxes; here it's fine)
const NOW = new Date().toISOString();

// infra blocks that are never authorable library entries
const SKIP = new Set(['header', 'footer', 'fragment', 'widget']);

// known variant tokens per block (from classList.contains in each block's JS)
const VARIANTS = {
  'client-cards': ['carousel'],
  'event-cards': ['carousel'],
  'photo-gallery': ['feature'],
  profile: ['carousel', 'overlap'],
  quote: ['card'],
  success: ['carousel', 'parallax'],
};

// blocks that should use the wide (16:9) placeholder
const WIDE = /hero|banner|carousel|gallery|feature|parallax/;

const blocksDir = join(ROOT, 'blocks');
const contentDir = join(ROOT, 'content');
const libDir = join(ROOT, 'content', 'library', 'blocks');
mkdirSync(libDir, { recursive: true });

// ---- helpers ---------------------------------------------------------------

const titleCase = (s) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

// list all content plain.html pages (recursive), return { pageName, html }
function loadPages() {
  const out = [];
  const walk = (dir, prefix) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) walk(join(dir, e.name), `${prefix}${e.name}/`);
      else if (e.name.endsWith('.plain.html')) {
        out.push({
          name: prefix + e.name.replace('.plain.html', ''),
          html: readFileSync(join(dir, e.name), 'utf8'),
        });
      }
    }
  };
  walk(contentDir, '');
  return out;
}

// does a class attribute's token list contain the exact token?
const hasToken = (classAttr, token) => classAttr.split(/\s+/).includes(token);

// find the first top-level <div class="...token..."> and return its full outerHTML
// via balanced <div> matching. Returns null if not found.
function extractBlock(html, token) {
  const re = /<div\b([^>]*)>/gi;
  let m;
  while ((m = re.exec(html))) {
    const attrs = m[1];
    const cls = (/class="([^"]*)"/i.exec(attrs) || [])[1] || '';
    if (!hasToken(cls, token)) continue;
    // balance from this opening div
    const start = m.index;
    let depth = 0;
    const tag = /<\/?div\b[^>]*>/gi;
    tag.lastIndex = start;
    let t;
    while ((t = tag.exec(html))) {
      if (t[0].startsWith('</')) depth -= 1;
      else depth += 1;
      if (depth === 0) {
        return html.slice(start, tag.lastIndex);
      }
    }
  }
  return null;
}

// clean an extracted div-grid: strip <source>, rebuild <img> with placeholder,
// drop data-aue-*/loading attrs. `wide` selects the placeholder.
function clean(fragment, wide) {
  const ph = wide ? './images/placeholder-16x9.png' : './images/placeholder-4x3.png';
  let out = fragment;
  // remove optimized <source> children of <picture>
  out = out.replace(/<source\b[^>]*>/gi, '');
  // rebuild each <img ...> as a plain placeholder img (keep alt if present)
  out = out.replace(/<img\b([^>]*)>/gi, (full, a) => {
    const alt = (/alt="([^"]*)"/i.exec(a) || [])[1] || 'Sample image';
    return `<img src="${ph}" alt="${alt}">`;
  });
  // strip instrumentation attrs
  out = out.replace(/\s+data-(aue|richtext)-[a-z-]+="[^"]*"/gi, '');
  return out;
}

// pretty-ish indent: put each tag on its own line (keeps output readable/diffable)
function pretty(html) {
  return html
    .replace(/></g, '>\n<')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .join('\n');
}

const libMeta = (name, desc) => pretty(
  `<div class="library-metadata"><div><div>name</div><div>${name}</div></div>`
  + `<div><div>description</div><div>${desc}</div></div></div>`,
);

// set/replace the class attribute of the outermost div of a fragment
function setRootClass(fragment, cls) {
  return fragment.replace(/^(\s*<div\b[^>]*\bclass=")[^"]*(")/i, `$1${cls}$2`);
}

// ---- synthesized samples for blocks with no reference page -----------------
const SYNTH = {
  hero: (wide) => `<div class="hero">
<div><div><picture><img src="${wide}" alt="Hero image"></picture><h1>Hero Heading</h1><p>Subheading or description text below the heading.</p><p><a href="/sample">Primary CTA</a></p></div></div>
</div>`,
  cards: (wide) => `<div class="cards">
<div><div><picture><img src="${wide}" alt="Card image"></picture></div><div><h3>Card Title One</h3><p>First card description text.</p><p><a href="/sample">Read More</a></p></div></div>
<div><div><picture><img src="${wide}" alt="Card image 2"></picture></div><div><h3>Card Title Two</h3><p>Second card description text.</p><p><a href="/sample">Learn More</a></p></div></div>
</div>`,
  'event-cards': (wide) => `<div class="event-cards">
<div><div><picture><img src="${wide}" alt="Event image"></picture></div>
<div><h3>Event Title</h3><p>2026-09-03</p><p>A short description of the event.</p><p><a href="/events/sample">View event</a></p></div></div>
<div><div><picture><img src="${wide}" alt="Event image 2"></picture></div>
<div><h3>Second Event</h3><p>2026-10-07</p><p>Another event description.</p><p><a href="/events/sample-2">View event</a></p></div></div>
</div>`,
  'session-resources-carousel': () => `<div class="session-resources-carousel">
<div><div><h3>Resource Title One</h3><p>Short description of this presentation resource.</p><p><a href="/sample">Open</a></p></div></div>
<div><div><h3>Resource Title Two</h3><p>Short description of this presentation resource.</p><p><a href="/sample">Open</a></p></div></div>
<div><div><h3>Resource Title Three</h3><p>Short description of this presentation resource.</p><p><a href="/sample">Open</a></p></div></div>
</div>`,
  team: (wide) => `<div class="team">
<div><div><picture><img src="${wide}" alt="Team member"></picture></div><div><p>Jane Doe | Principal Architect</p></div></div>
<div><div><picture><img src="${wide}" alt="Team member 2"></picture></div><div><p>John Smith | Engineering Lead</p></div></div>
</div>`,
};

// ---- main ------------------------------------------------------------------

const pages = loadPages();
const blockNames = readdirSync(blocksDir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && !SKIP.has(e.name))
  .map((e) => e.name)
  .sort();

const generated = [];
const skipped = [];
let metaCreated = 0;

for (const name of blockNames) {
  const dir = join(blocksDir, name);
  const jsPath = join(dir, `${name}.js`);
  const cssPath = join(dir, `${name}.css`);
  const wide = WIDE.test(name);
  const phWide = './images/placeholder-16x9.png';

  // usage.pagesUsing: pages whose html has a div with the block-name token
  const pagesUsing = pages
    .filter((p) => {
      const re = /<div\b[^>]*class="([^"]*)"/gi;
      let m;
      while ((m = re.exec(p.html))) if (hasToken(m[1], name)) return true;
      return false;
    })
    .map((p) => p.name);

  // ---- metadata.json (create if missing) ----
  const metaPath = join(dir, 'metadata.json');
  if (!existsSync(metaPath)) {
    const js = existsSync(jsPath) ? readFileSync(jsPath, 'utf8') : '';
    const css = existsSync(cssPath) ? readFileSync(cssPath, 'utf8') : '';
    const repeats = /block\.children|\[\.\.\.block\.children\]/.test(js);
    const imageCount = /createOptimizedPicture|querySelector\(['"]?picture|img/.test(js) ? 1 : 0;
    const buttonCount = /\.button|a\[href\]|href/.test(js) ? 1 : 0;
    const meta = {
      variantName: name,
      baseBlock: name,
      version: '1.0.0',
      created: NOW,
      visualCharacteristics: {
        colorScheme: /background:\s*(#|var\(--color-(gray-1000|black))/.test(css) ? 'dark' : 'light',
        purpose: name.replace(/-/g, ' '),
        imagePattern: imageCount ? 'withimg' : 'noimg',
      },
      contentPattern: {
        structure: repeats ? 'repeating-items' : 'single-item',
        buttonCount,
        imageCount,
      },
      usage: {
        pagesUsing,
        reuseCount: pagesUsing.length,
        lastUsed: NOW,
      },
    };
    writeFileSync(metaPath, `${JSON.stringify(meta, null, 2)}\n`);
    metaCreated += 1;
  }

  // ---- build default sample content ----
  let defaultGrid = null;
  for (const p of pages) {
    const frag = extractBlock(p.html, name);
    if (frag) { defaultGrid = clean(frag, wide); break; }
  }
  if (!defaultGrid && SYNTH[name]) {
    defaultGrid = SYNTH[name](wide ? phWide : './images/placeholder-4x3.png');
  }
  if (!defaultGrid) {
    // eslint-disable-next-line no-console
    console.warn(`⚠️ Skipped ${name}: no usable reference page, no synth`);
    skipped.push(name);
    continue;
  }
  // normalize default root class to just the block name
  defaultGrid = setRootClass(defaultGrid, name);

  // ---- assemble sections: default + one per variant ----
  const sections = [];
  const displayName = titleCase(name);
  const desc = `${displayName} block.`;
  sections.push(`<div>\n${pretty(defaultGrid)}\n${libMeta(displayName, desc)}\n</div>`);

  for (const v of VARIANTS[name] || []) {
    const variantGrid = setRootClass(defaultGrid, `${name} ${v}`);
    sections.push(
      `<div>\n${pretty(variantGrid)}\n${libMeta(`${displayName} (${titleCase(v)})`, `${titleCase(v)} variant of ${displayName}.`)}\n</div>`,
    );
  }

  writeFileSync(join(libDir, `${name}.html`), `${sections.join('\n')}\n`);
  generated.push({ name: displayName, slug: name, variants: (VARIANTS[name] || []).length });
  // eslint-disable-next-line no-console
  console.log(`Generated library/blocks/${name}.html (${1 + (VARIANTS[name] || []).length} variants)`);
}

// ---- blocks.json ----
const data = generated
  .map((b) => ({ name: b.name, path: `https://content.da.live/${ORG}/${REPO}/library/blocks/${b.slug}` }))
  .sort((a, b) => a.name.localeCompare(b.name));
const blocksJson = {
  total: data.length, offset: 0, limit: data.length, data, ':type': 'sheet',
};
writeFileSync(join(ROOT, 'content', 'library', 'blocks.json'), `${JSON.stringify(blocksJson, null, 2)}\n`);

// eslint-disable-next-line no-console
console.log(`\nmetadata.json created: ${metaCreated}`);
// eslint-disable-next-line no-console
console.log(`blocks generated: ${generated.length}; skipped: ${skipped.length} ${skipped.join(',')}`);
// eslint-disable-next-line no-console
console.log(`blocks.json data entries: ${data.length}`);
