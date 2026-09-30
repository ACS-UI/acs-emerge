import {
  el, icon, loadBeautystack, readConfig, pick, dsButton,
} from '../../scripts/beautystack.js';

/*
 * Filters + Sort Panel (Beautystack Organisms/Filters + Sort Panel)
 *
 * Presentation = block variant (it swaps the whole structure):
 *   filters-sort-panel            filters "On the page": a sidebar column
 *   filters-sort-panel (overlay)  filters "Behind a button": Filter trigger + drawer
 *
 * Rows:
 *   <Group title> | list of facets   one row per filter group (colour groups:
 *                                    add a hex, e.g. "Red #C8102E (26)")
 *                                    facet text: "Label (count)"; bold = pre-applied
 *   Sort          | list of options  bold = selected (default: first)
 *
 * Config rows, authored first, before the groups:
 *   Results   number of products after filtering  (default 0)
 *   Total     unfiltered total; reads "31 of 108 products" when set
 *   Sticky    true | false  keep the sidebar in view while scrolling (default false)
 *   Loading   true | false  hold the re-querying state (default false)
 *
 * UI only: the results area is an empty region where the product grid goes;
 * applying a filter shows the brief loading treatment the host would show.
 */

const CONFIG = {
  results: ['results', 'results-count', 'result-count', 'count'],
  total: ['total', 'total-count', 'total-products'],
  sticky: ['sticky', 'sticky-sidebar'],
  loading: ['loading', 'loading-state'],
};
const HEX_RE = /#(?:[0-9a-f]{6}|[0-9a-f]{3})\b/i;
const LOADING_MS = 600;
const FOCUSABLE = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

let uid = 0;
const slug = (s) => String(s ?? '').trim().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
  .toLowerCase();

function parseFacet(node) {
  const strong = node.querySelector('strong, b');
  const text = node.textContent.replace(/\s+/g, ' ').trim();
  const selected = !!strong && strong.textContent.trim() === text;
  const color = text.match(HEX_RE)?.[0];
  let rest = text.replace(HEX_RE, '');
  let count;
  const paren = rest.match(/\((\d+)\)/);
  if (paren) {
    count = Number(paren[1]);
    rest = rest.replace(paren[0], '');
  } else {
    const parts = rest.split('|').map((p) => p.trim()).filter(Boolean);
    if (parts.length > 1 && /^\d+$/.test(parts[parts.length - 1])) {
      count = Number(parts.pop());
      rest = parts.join(' ');
    }
  }
  const label = rest.replace(/[|]/g, ' ').replace(/\s+/g, ' ').trim();
  return {
    label, value: slug(label), count, color, selected,
  };
}

function listNodes(cell) {
  const lis = [...cell.querySelectorAll('li')];
  if (lis.length) return lis;
  const ps = [...cell.querySelectorAll(':scope > p')];
  return ps.length ? ps : [cell];
}

function spinner() {
  return el(
    'span',
    { class: 'ds-loading ds-loading--small ds-loading--inline ds-filters-panel__count-spinner', 'aria-hidden': 'true' },
    el('span', { class: 'ds-loading__ring', 'aria-hidden': 'true' }),
    el('span', { class: 'ds-loading__label', text: 'Loading' }),
  );
}

/** Design-system Select (label hidden, custom listbox). */
function sortSelect(options, initial, onChange) {
  uid += 1;
  const id = `ds-sort-${uid}`;
  const listId = `${id}-listbox`;
  let value = initial;
  let active = -1;
  const valueEl = el('span', { class: 'ds-select__value' });
  const control = el(
    'button',
    {
      id, type: 'button', role: 'combobox', class: 'ds-select__control', 'aria-expanded': 'false', 'aria-haspopup': 'listbox', 'aria-controls': listId,
    },
    valueEl,
    el('span', { class: 'ds-select__chevron', 'aria-hidden': 'true' }, icon('chevron-down', { size: 'md' })),
  );
  const wrap = el('div', { class: 'ds-select__wrap', dataset: { open: 'false' } }, control);
  const listbox = el('div', {
    id: listId, role: 'listbox', class: 'ds-popover__panel ds-select__listbox', dataset: { density: 'menu' }, 'aria-labelledby': id,
  });
  const frame = el('div', {
    class: 'ds-popover__frame ds-popover__frame--bottom-start', dataset: { placement: 'bottom-start', frame: 'contained' }, hidden: true, inert: true,
  }, listbox);
  const hidden = el('input', { type: 'hidden', value });

  const optionEls = options.map((o, i) => {
    const opt = el('div', {
      id: `${id}-opt-${i}`,
      class: 'ds-menu-item ds-select__option',
      role: 'option',
      dataset: { variant: 'simple', cursor: 'managed', selectionIndicator: 'true' },
    }, el('span', { class: 'ds-menu-item__text' }, el('span', { class: 'ds-menu-item__label', text: o.label })));
    opt.addEventListener('mousedown', (e) => e.preventDefault());
    // eslint-disable-next-line no-use-before-define
    opt.addEventListener('click', () => { choose(i); close(); });
    // eslint-disable-next-line no-use-before-define
    opt.addEventListener('mousemove', () => setActive(i, false));
    return opt;
  });
  listbox.append(...optionEls);

  function paint() {
    const idx = options.findIndex((o) => o.value === value);
    valueEl.textContent = options[idx]?.label || '';
    hidden.value = value;
    optionEls.forEach((opt, i) => {
      const sel = i === idx;
      opt.setAttribute('aria-selected', String(sel));
      if (sel) opt.dataset.selected = 'true'; else delete opt.dataset.selected;
      opt.querySelector('.ds-menu-item__selection')?.remove();
      if (sel) opt.append(el('span', { class: 'ds-menu-item__selection', 'aria-hidden': 'true' }, icon('check', { size: 'sm' })));
    });
  }
  function setActive(i, keyboard = true) {
    active = Math.max(0, Math.min(options.length - 1, i));
    optionEls.forEach((opt, n) => {
      if (n === active) {
        opt.dataset.active = 'true';
        if (keyboard) opt.dataset.focusVisible = 'true'; else delete opt.dataset.focusVisible;
      } else {
        delete opt.dataset.active;
        delete opt.dataset.focusVisible;
      }
    });
    control.setAttribute('aria-activedescendant', optionEls[active].id);
    if (keyboard) optionEls[active].scrollIntoView({ block: 'nearest' });
  }
  const isOpen = () => wrap.dataset.open === 'true';
  function open() {
    wrap.dataset.open = 'true';
    control.setAttribute('aria-expanded', 'true');
    frame.hidden = false;
    frame.inert = false;
    setActive(Math.max(0, options.findIndex((o) => o.value === value)));
  }
  function close() {
    wrap.dataset.open = 'false';
    control.setAttribute('aria-expanded', 'false');
    control.removeAttribute('aria-activedescendant');
    frame.hidden = true;
    frame.inert = true;
  }
  function choose(i) {
    const next = options[i]?.value;
    if (next === undefined || next === value) return;
    value = next;
    paint();
    onChange(value);
  }

  control.addEventListener('click', () => (isOpen() ? close() : open()));
  control.addEventListener('keydown', (e) => {
    const { key } = e;
    if (!isOpen()) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(key)) { e.preventDefault(); open(); }
      return;
    }
    if (key === 'Tab') {
      close();
      return;
    }
    const moves = {
      ArrowDown: active + 1, ArrowUp: active - 1, Home: 0, End: options.length - 1,
    };
    if (key in moves) {
      e.preventDefault();
      setActive(moves[key]);
    } else if (key === 'Enter' || key === ' ') {
      e.preventDefault();
      choose(active);
      close();
    } else if (key === 'Escape') {
      e.preventDefault();
      close();
    }
  });
  document.addEventListener('pointerdown', (e) => {
    if (isOpen() && !wrap.parentElement.contains(e.target)) close();
  });

  paint();
  return el(
    'div',
    { class: 'ds-select ds-select--filled ds-select--label-hidden' },
    el(
      'div',
      { class: 'ds-popover ds-select__popover' },
      el('label', { class: 'ds-select__label', for: id, text: 'Sort by:' }),
      wrap,
      frame,
    ),
    hidden,
  );
}

export default async function decorate(block) {
  const loadingCss = loadBeautystack();
  const cfg = readConfig(block, CONFIG);
  const overlay = block.classList.contains('overlay');
  const resultCount = Number.parseInt(cfg.results, 10) || 0;
  const totalCount = cfg.total ? Number.parseInt(cfg.total, 10) : undefined;
  const sticky = pick(cfg.sticky, ['true', 'false'], {
    yes: 'true', no: 'false', on: 'true', off: 'false',
  }) === 'true';
  const holdLoading = pick(cfg.loading, ['true', 'false'], {
    yes: 'true', no: 'false', on: 'true', off: 'false',
  }) === 'true';

  // ---- authored content ----
  const groups = [];
  let sortOptions = [];
  let sortValue;
  [...block.children].forEach((row) => {
    const [head, body] = row.children;
    if (!head || !body) return;
    const title = head.textContent.trim();
    if (!title) return;
    if (/^sort/i.test(title)) {
      const nodes = listNodes(body);
      sortOptions = nodes
        .map((n) => ({ label: n.textContent.trim(), value: slug(n.textContent) }))
        .filter((o) => o.label);
      const bold = nodes.find((n) => n.querySelector('strong, b'));
      sortValue = bold ? slug(bold.textContent) : sortOptions[0]?.value;
      return;
    }
    const facets = listNodes(body).map(parseFacet).filter((f) => f.label);
    if (!facets.length) return;
    groups.push({ title, facets, kind: facets.some((f) => f.color) ? 'colour' : 'checkbox' });
  });

  // ---- state ----
  const selected = new Map(groups.map((g) => [
    g.title,
    new Set(g.facets.filter((f) => f.selected).map((f) => f.value)),
  ]));
  let isBusy = holdLoading;
  let busyTimer;
  const hasFilters = groups.length > 0;
  const appliedList = () => groups.flatMap((g) => g.facets
    .filter((f) => selected.get(g.title).has(f.value))
    .map((f) => ({ group: g.title, value: f.value, label: f.label })));

  // ---- pieces that re-render ----
  const bandStatus = el('span', { class: 'ds-sr-only', role: 'status', 'aria-live': 'polite' });
  const drawerStatus = el('span', { class: 'ds-sr-only', role: 'status', 'aria-live': 'polite' });
  const countText = el('span', { class: 'ds-filters-panel__count-text' });
  const count = el('span', {
    class: 'ds-filters-panel__count', role: 'status', tabindex: '-1',
  }, countText);
  const placeholder = el('div', { class: 'filters-sort-panel-results-placeholder', 'aria-hidden': 'true' });
  const resultsContent = el('div', { class: 'ds-filters-panel__results-content' }, placeholder);
  const resultsBody = el('div', { class: 'ds-filters-panel__results-body', role: 'region', 'aria-label': 'Results' }, resultsContent);
  const triggerBtn = dsButton({ label: 'Filter', variant: 'secondary', leadingIcon: 'sliders-horizontal' });
  triggerBtn.setAttribute('aria-haspopup', 'dialog');
  triggerBtn.setAttribute('aria-expanded', 'false');
  const trigger = hasFilters ? el('div', { class: 'ds-filters-panel__trigger', dataset: overlay ? { mode: 'overlay' } : {} }, triggerBtn) : null;
  let bandPills = null;
  let drawerPills = null;
  const checkboxes = []; // { group, value, input }

  function filterGroup(g, container) {
    uid += 1;
    const gid = `${slug(g.title)}-${container}-${uid}`;
    const panelId = `ds-filter-panel-${gid}`;
    const triggerId = `ds-filter-trigger-${gid}`;
    const colour = g.kind === 'colour';
    const btn = el(
      'button',
      {
        id: triggerId, type: 'button', class: 'ds-filter-group__trigger', 'aria-expanded': 'false', 'aria-controls': panelId,
      },
      el('span', { class: 'ds-filter-group__label' }, el('span', { text: g.title })),
      el('span', { class: 'ds-filter-group__chevron', 'aria-hidden': 'true' }, icon('chevron-down')),
    );
    const list = el('ul', { class: 'ds-filter-group__list' });
    g.facets.forEach((f) => {
      const id = `ds-facet-${gid}-${f.value}`;
      const input = el('input', {
        id, class: 'ds-checkbox__input', type: 'checkbox', value: f.value,
      });
      input.checked = selected.get(g.title).has(f.value);
      // eslint-disable-next-line no-use-before-define
      input.addEventListener('change', () => toggle(g.title, f.value, input.checked, container));
      checkboxes.push({ group: g.title, value: f.value, input });
      const label = el(
        'label',
        { class: 'ds-checkbox ds-checkbox--touch', for: id },
        input,
        el('span', { class: 'ds-control-indicator ds-control-indicator--checkbox ds-checkbox__control', 'aria-hidden': 'true' }, icon('check', { className: 'ds-control-indicator__mark ds-checkbox__mark' })),
        el('span', { class: 'ds-checkbox__label-text', text: f.count != null ? `${f.label} (${f.count})` : f.label }),
      );
      if (colour && f.color) {
        const sw = el('span', { class: 'ds-swatch ds-swatch--decorative', 'aria-hidden': 'true' });
        sw.style.setProperty('--swatch-color', f.color);
        sw.style.setProperty('--swatch-size', '32px');
        label.append(sw);
      }
      list.append(el('li', { class: `ds-filter-group__item${colour ? ' ds-filter-group__item--colour' : ''}` }, label));
    });
    const fieldset = el(
      'fieldset',
      {
        id: panelId, class: 'ds-checkbox-group ds-checkbox-group--legend-hidden ds-filter-group__panel', 'aria-labelledby': triggerId, 'aria-hidden': 'true', inert: true, dataset: { open: 'false' },
      },
      el('legend', { class: 'ds-checkbox-group__legend', text: g.title }),
      el('div', { class: 'ds-checkbox-group__options' }, list),
    );
    const collapse = el('div', { class: 'ds-filter-group__collapse', dataset: { open: 'false' } }, fieldset);
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      collapse.dataset.open = String(open);
      fieldset.dataset.open = String(open);
      fieldset.setAttribute('aria-hidden', String(!open));
      fieldset.inert = !open;
    });
    return el('div', { class: 'ds-filter-group' }, btn, collapse);
  }

  const groupsFrame = (container) => el(
    'div',
    { class: 'ds-filters-panel__groups-frame' },
    el('div', { class: 'ds-filters-panel__groups' }, groups.map((g) => filterGroup(g, container))),
  );

  function renderPills(inDrawer) {
    const applied = appliedList();
    if (!applied.length) return null;
    const wrap = el('div', {
      class: `ds-filters-panel__pills${inDrawer ? ' ds-filters-panel__pills--drawer' : ''}`,
      role: 'group',
      'aria-label': 'Applied filters',
      dataset: overlay ? { mode: 'overlay' } : {},
    });
    applied.forEach((a, index) => {
      const pill = el(
        'button',
        {
          type: 'button', class: 'ds-tag ds-tag--dismissible ds-filters-panel__pill', 'aria-label': `Remove filter: ${a.label}`, dataset: { pillKey: `${a.group}:${a.value}` },
        },
        el('span', { class: 'ds-tag__label', text: a.label }),
        el('span', { class: 'ds-tag__dismiss', 'aria-hidden': 'true' }, icon('x')),
      );
      pill.addEventListener('click', () => {
        // eslint-disable-next-line no-use-before-define
        toggle(a.group, a.value, false, inDrawer ? 'drawer' : 'band', `Removed filter: ${a.label}.`, index);
      });
      wrap.append(pill);
    });
    if (!inDrawer) {
      const clear = dsButton({ label: 'Clear All', variant: 'ghost', className: 'ds-filters-panel__clear-all' });
      clear.dataset.pillKey = 'clear-all';
      // eslint-disable-next-line no-use-before-define
      clear.addEventListener('click', () => clearAll(false));
      wrap.append(clear);
    }
    return wrap;
  }

  // ---- drawer ----
  let drawer;
  let drawerPanel;
  let drawerBody;
  let drawerFooter;
  let lastFocus;
  const onKey = (e) => {
    if (e.key === 'Escape') {
      // eslint-disable-next-line no-use-before-define
      closeDrawer();
      return;
    }
    if (e.key !== 'Tab') return;
    const items = [...drawerPanel.querySelectorAll(FOCUSABLE)].filter((n) => !n.closest('[inert]'));
    if (!items.length) { e.preventDefault(); drawerPanel.focus(); return; }
    const first = items[0];
    const last = items[items.length - 1];
    const current = document.activeElement;
    let target;
    if (!items.includes(current)) target = e.shiftKey ? last : first;
    else if (e.shiftKey && current === first) target = last;
    else if (!e.shiftKey && current === last) target = first;
    if (target) {
      e.preventDefault();
      target.focus();
    }
  };
  function openDrawer() {
    lastFocus = document.activeElement;
    drawer.classList.add('ds-drawer__scrim--open');
    drawerPanel.classList.add('ds-drawer__panel--open');
    drawer.setAttribute('aria-hidden', 'false');
    drawerPanel.setAttribute('aria-hidden', 'false');
    drawer.inert = false;
    triggerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    drawerStatus.textContent = '';
    requestAnimationFrame(() => drawerPanel.focus());
  }
  function closeDrawer() {
    drawer.classList.remove('ds-drawer__scrim--open');
    drawerPanel.classList.remove('ds-drawer__panel--open');
    drawer.setAttribute('aria-hidden', 'true');
    drawerPanel.setAttribute('aria-hidden', 'true');
    drawer.inert = true;
    triggerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey);
    lastFocus?.focus?.();
  }
  if (hasFilters) {
    uid += 1;
    const titleId = `ds-drawer-title-${uid}`;
    const closeBtn = el('button', { type: 'button', class: 'ds-icon-button ds-drawer__close', 'aria-label': 'Close' }, icon('x'));
    closeBtn.addEventListener('click', closeDrawer);
    drawerBody = el('div', { class: 'ds-drawer__body' }, drawerStatus, groupsFrame('drawer'));
    drawerFooter = el('div', { class: 'ds-filters-panel__drawer-footer' });
    drawerPanel = el(
      'div',
      {
        role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': titleId, 'aria-hidden': 'true', tabindex: '-1', class: 'ds-drawer__panel ds-drawer__panel--left',
      },
      el('div', { class: 'ds-drawer__header' }, el('span', { id: titleId, class: 'ds-drawer__title', text: 'Filters' }), closeBtn),
      drawerBody,
      el('div', { class: 'ds-drawer__footer' }, drawerFooter),
    );
    drawerPanel.addEventListener('click', (e) => e.stopPropagation());
    drawer = el('div', { class: 'ds-drawer__scrim', 'aria-hidden': 'true', inert: true }, drawerPanel);
    drawer.addEventListener('click', closeDrawer);
    triggerBtn.addEventListener('click', openDrawer);
  }

  // ---- header ----
  const controls = el(
    'div',
    { class: 'ds-filters-panel__controls' },
    count,
    el('div', { class: 'ds-filters-panel__sort' }, sortOptions.length ? sortSelect(sortOptions, sortValue, () => {
      // eslint-disable-next-line no-use-before-define
      busy();
    }) : null),
  );
  const header = el('div', { class: 'ds-filters-panel__header' }, trigger, bandStatus, controls);

  function paintCount() {
    countText.textContent = totalCount == null
      ? `${resultCount} result${resultCount !== 1 ? 's' : ''}`
      : `${resultCount} of ${totalCount} products`;
    count.querySelector('.ds-filters-panel__count-spinner')?.remove();
    if (isBusy) {
      count.dataset.loading = 'true';
      count.setAttribute('aria-busy', 'true');
      count.append(spinner());
      resultsBody.setAttribute('aria-busy', 'true');
      resultsContent.dataset.loading = 'true';
      resultsContent.setAttribute('aria-hidden', 'true');
      resultsContent.inert = true;
    } else {
      delete count.dataset.loading;
      count.removeAttribute('aria-busy');
      resultsBody.removeAttribute('aria-busy');
      delete resultsContent.dataset.loading;
      resultsContent.removeAttribute('aria-hidden');
      resultsContent.inert = false;
    }
  }

  function busy() {
    if (holdLoading) return;
    isBusy = true;
    paintCount();
    clearTimeout(busyTimer);
    busyTimer = setTimeout(() => { isBusy = false; paintCount(); }, LOADING_MS);
  }

  function paintSelection(focus) {
    const n = appliedList().length;
    triggerBtn.querySelector('.ds-button__label').textContent = `Filter${n > 0 ? ` (${n})` : ''}`;
    checkboxes.forEach(({ group, value, input }) => {
      input.checked = selected.get(group).has(value);
    });
    // band pills (inline mode only): after the band status, before the controls
    if (!overlay) {
      const next = renderPills(false);
      if (bandPills) bandPills.remove();
      bandPills = next;
      if (next) controls.before(next);
    }
    if (drawerBody) {
      const next = renderPills(true);
      if (drawerPills) drawerPills.remove();
      drawerPills = next;
      if (next) drawerBody.prepend(next);
      drawerFooter.replaceChildren();
      if (n > 0) {
        const clear = dsButton({ label: 'Clear All', variant: 'ghost', className: 'ds-filters-panel__drawer-clear' });
        // eslint-disable-next-line no-use-before-define
        clear.addEventListener('click', () => clearAll(true));
        drawerFooter.append(clear);
      }
      const show = dsButton({ label: 'Show Results', variant: 'primary', className: 'ds-filters-panel__drawer-show' });
      show.addEventListener('click', closeDrawer);
      drawerFooter.append(show);
    }
    if (focus) {
      const { inDrawer, index } = focus;
      const scope = inDrawer ? drawerPills : bandPills;
      const buttons = scope ? [...scope.querySelectorAll('button')] : [];
      const target = buttons[Math.min(index, buttons.length - 1)]
        || (inDrawer ? drawerFooter.querySelector('.ds-filters-panel__drawer-show') : count);
      target?.focus();
    }
  }

  function toggle(group, value, on, container, message, pillIndex) {
    const set = selected.get(group);
    if (on) set.add(value); else set.delete(value);
    const inDrawer = container === 'drawer';
    (inDrawer ? drawerStatus : bandStatus).textContent = message || '';
    paintSelection(pillIndex != null ? { inDrawer, index: pillIndex } : null);
    busy();
  }

  function clearAll(inDrawer) {
    selected.forEach((s) => s.clear());
    (inDrawer ? drawerStatus : bandStatus).textContent = 'Cleared all filters.';
    paintSelection({ inDrawer, index: 0 });
    busy();
  }

  // ---- layout ----
  const layoutData = {};
  if (overlay) layoutData.mode = 'overlay';
  if (!hasFilters) layoutData.filters = 'off';
  const aside = !overlay && hasFilters
    ? el('aside', { class: 'ds-filters-panel', 'aria-label': 'Filter products', dataset: sticky ? { sticky: 'true' } : {} }, groupsFrame('aside'))
    : null;
  const layout = el(
    'div',
    { class: 'ds-filters-panel__layout ds-grid', dataset: layoutData },
    aside,
    el('div', { class: 'ds-filters-panel__results' }, header, resultsBody),
  );

  paintCount();
  paintSelection();
  await loadingCss;
  block.replaceChildren(el('div', { class: 'ds-rail' }, drawer || null, layout));
}
