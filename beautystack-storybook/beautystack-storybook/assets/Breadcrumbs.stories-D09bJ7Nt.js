import{j as t}from"./iframe-6dx3hp_4.js";import{B as r}from"./Breadcrumbs-B8-Wnyv0.js";import{a as l}from"./annotationPage-eYx--AWZ.js";import{D as h,a as d}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Link-yk_PIpvX.js";import"./Icon-BihOhSWB.js";import"./newTabMark-TI50-QeA.js";import"./IconButton-Btgg2ITq.js";import"./MenuItem-bBgP9Lwo.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";const s=[{label:"Home",href:"#"},{label:"Hair Care",href:"#"},{label:"Anti-Frizz Shampoo"}],c=[{label:"Home",href:"#"},{label:"Hair Care",href:"#"},{label:"Shampoo & Conditioner",href:"#"},{label:"Anti-Frizz Care",href:"#"},{label:"Smoothing Anti-Frizz Shampoo"}],m={trail:{...d("Minimum depth (3 levels)"),name:"Trail depth",...h({labels:{minimum:"Minimum depth (3 levels)",deep:"Deep trail (5 levels)"},options:["minimum","deep"]}),description:'How many levels the trail shows. Both draw the same pattern. Narrow the viewport (or use the Viewport toolbar) to see the middle levels collapse behind a single "…" crumb.'},items:{control:!1,table:{disable:!0}},variant:{control:!1,table:{disable:!0}}},u={trail:"minimum"};function p({trail:a}){return t.jsx(r,{items:a==="deep"?c:s})}function b(){return t.jsx("div",{style:{textAlign:"start"},children:t.jsx(r,{items:s})})}const E={title:"Molecules/Breadcrumbs",component:r,tags:["autodocs"],parameters:{docs:{page:l("Breadcrumbs"),toc:{headingSelector:"h2"},description:{component:"The link trail that shows a shopper where a page sits inside the site, and lets them jump back to any level above it in one click. The last crumb is the page they are on, and it never links anywhere."}},componentDoc:{usage:`
## When to use

- ✅ **A page three or more levels deep**, so a shopper can climb back out one level at a time.
- ✅ **The same position on every page that has one.** A trail is only readable if it is always
  in the same place.

- ❌ **The home page.** A trail never appears there.
- ❌ **A history of where the shopper has been.** A trail shows the site's hierarchy, not a
  back button.
- ❌ **Jumping between sections of one page.** That is **Anchor links**.
- ❌ **Site-level wayfinding**, like the header's menus. That is **Navigation**.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Trail container**, a named navigation region | required whenever the trail renders | What a screen reader uses to find the trail and tell it from other navigation |
| **Crumb list** | required | One item per level, in site-hierarchy order |
| **Crumb link** | required for every level before the current page | A real link, so every level above stays reachable in one click |
| **Current-page crumb** | required, always the last item | The one crumb that never links anywhere |
| **Separator**, a chevron | required between every pair of crumbs, never before the first | Decorative. Hidden from screen readers, and never clickable |
| **Ellipsis crumb** | shown under the mobile breakpoint, and only once there is a middle level to hide | A ghost icon button. Opens a menu of the hidden middle levels; choosing one navigates there |

- **Tokens own the look.** Shape, spacing, type and colour, including the current-page colour
  and the body-style treatment (16px, no forced case). Both ship as tokens, not as hard-coded
  values, so the same trail re-themes across every brand.
- **The caller owns the labels and the destinations**, taken from the site's own information
  architecture.
- **A crumb's tap target is held at 40px.** The shared link atom would otherwise default to a
  smaller one. Forty is the library's own pointer-target floor rather than a WCAG number. It
  dropped library-wide from 44px, and that is a deliberate trade rather than an
  accessibility gain: still clear of WCAG 2.5.8's 24px AA floor, below the 44px WCAG 2.5.5 AAA
  number this crumb used to hold.

### Variants

**One ratified pattern:** the forward trail, Home through to the current page.

- **The three sizes Figma draws are not variants.** They are pixel-identical for this
  component. Only the surrounding page gutter changes, and that is layout the page owns.
- **A code-only "Back to X" pattern renders a different anatomy entirely.** One link with an
  arrow icon: no list, no separator, no current-page crumb. It has no requirement behind it and one
  consumer. It is shown further down this page for completeness, and whether it should become
  ratified or be retired is in Open items.
`,guidance:`
## Behaviors

### States

- **Default.** The resting crumb link is muted ink, quieter than the page's own body text. A
  trail is wayfinding chrome sitting under the page it labels, not editorial content competing
  with it.
- **Hover.** One step up the same ink ramp, to the page's full ink. Never a shift to a
  different hue.
- **Focus.** A visible ring on every crumb link, and nothing removes it without putting one
  back.
- **Current page.** The last crumb is plain text in the page's full ink, never a link, and it
  is marked in the markup too, so the state is never carried by colour alone. There is nowhere
  to click to on the page you are already on, so the current crumb reads primary rather than
  muted or accent: muted is what the resting links already use, and the full ink is the one
  treatment in the trail that is not a link's.
- **Mobile, collapsed.** Once there is at least one level between Home and the current page,
  the middle levels collapse behind a single ellipsis crumb under the mobile breakpoint. Home
  and the current page always stay visible, and no individual label is ever truncated.
- **Mobile, menu open.** The ellipsis is a ghost icon button, not decoration: activating it
  opens a small menu anchored to the control, listing every hidden level as its own real link,
  in the trail's own order. Its open/closed state is published to assistive tech (aria-expanded,
  aria-haspopup) the same way any menu button's is, not only shown visually.

**Hover is not a client requirement.** The criteria asks nothing about it. Treat it as this
design system's own convention.

**The mobile collapse was built after the criteria was last checked against the component**, so
nothing in Figma confirms the shape it should take. Whether "Home, ellipsis, current" is the
right pattern, and at what width it should engage, is still a design call. The MENU it opens to
(reveal-in-place versus a popover of destinations) has since been settled, see Rules.

### Interactions

- **Click a crumb link and it navigates.** Every level except the current one.
- **The current crumb does nothing.** It is not a link, so clicking it has no effect.
- **The separator is never clickable**, and never announced.
- **Activate the ellipsis and a menu opens**, reachable by keyboard (Enter, like any button) or
  pointer, listing the hidden levels. Choosing one navigates there and closes the menu. Escape
  closes it and returns focus to the ellipsis button; clicking outside it closes it too.

**One line in the criteria has no counterpart anywhere in this component.** Its Interactions
cell mentions a social-media-icon click that appears in no state, nothing in Figma and nothing
in code. It is carried in Open items rather than invented onto the page.

## Rules

- ✅ **Do** keep the trail in the same position on every page that has one.
- ✅ **Do** reflect the site's hierarchy, and start at Home, which is level 0.
- ✅ **Do** set where the trail starts and ends per page or template. That is configurable.

- ❌ **Don't** show breadcrumbs on the home page.
- ❌ **Don't** link the current page.
- ❌ **Don't** build the trail from the shopper's own click path. It is the site's hierarchy,
  not a history.
- ❌ **Don't** truncate individual crumb labels at their edges. Collapse the middle of the
  trail instead.
- ❌ **Don't** shrink a crumb's tap target below 40px, including the ellipsis button.
- ❌ **Don't** hide the collapsed levels behind a mark nobody can operate. The ellipsis must
  open its menu for both keyboard and pointer, with a clear accessible name, and every hidden
  level must be its own reachable link inside it.
- ❌ **Don't** treat the code-only "Back to X" pattern as ratified. It has no requirement
  behind it today.

### Content rules

- ✅ **Do** label a crumb with the site's own name for that level, never the page's title.
- ❌ **Don't** invent a character limit. The criteria says only "to be defined by design", and
  the Figma file does not resolve it either.

## Open items

| Question | Owner |
|---|---|
| Is the three-level minimum a hard gate on rendering the component, or guidance on where breadcrumbs belong in the site's architecture? | Client |
| The mobile middle-crumb collapse is built in code, but nothing in Figma confirms the pattern it should take, or the width it should engage at | Design |
| Should the code-only "Back to X" pattern be written into the criteria as a ratified variant, or retired? | Design |
`,spec:{elements:[{name:"Trail container",requirement:"required"},{name:"Crumb list",requirement:"required",condition:"One item per level, in site hierarchy order."},{name:"Crumb link",requirement:"required",condition:"Every level before the current page."},{name:"Current-page crumb",requirement:"required",condition:"Always the last item, and never a link."},{name:"Separator",requirement:"required",condition:"Between every pair of crumbs, never before the first."},{name:"Ellipsis crumb",requirement:"conditional",condition:"Under the mobile breakpoint, once the trail has a middle level to hide."}],authorability:[{name:"Crumb labels",rule:"Authored. Use the site's own name for a level, never the page title."},{name:"Destinations",rule:"Authored per level. Every level above the current page links; the last crumb never does."},{name:"Where it starts",rule:"A page or template sets where the trail begins and ends."},{name:"Label length",rule:"No character limit. Long trails collapse in the middle, labels are never cut short."},{name:"Separator",rule:"Fixed by the system. The chevron is not authorable and carries no label."},{name:"Collapse",rule:"Fixed by the system. Small screens hide the middle levels; nobody picks which."},{name:"Type and colour",rule:"Fixed by tokens. The trail reads the body style, 16px, no forced case."}],variants:[{label:"Trail",props:{variant:"default"}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"}],render:b,interactions:["Clicking a crumb navigates to that level. The current crumb is not a link and does nothing.","Hover steps a crumb from muted ink to the page's full ink. It never changes hue.","Under the mobile breakpoint every middle level collapses behind one ellipsis crumb.","Activating the ellipsis opens a menu of the collapsed levels as real links, and choosing one navigates.","Home and the current page stay visible at every width, and no label is ever truncated.","The trail is content-driven, so a template can begin or end it at any level.","The back link rests on full ink and takes the first item as its destination.","The separator is never clickable and is never announced."],accessibility:[{label:"Landmark",text:"The trail is a navigation region with an accessible name, so it is told apart from the header navigation."},{label:"Current page",text:"The last crumb carries aria-current and is not a link, so the current page is never signalled by colour alone."},{label:"List semantics",text:"The crumbs are an ordered list, so a screen reader announces how many levels there are and which one it is on."},{label:"Separator",text:"The chevron is hidden from assistive technology, so the trail reads as levels rather than as punctuation."},{label:"Keyboard",text:"Every crumb link is reachable with Tab, in trail order, and Enter follows it. No crumb traps focus."},{label:"Focus",text:"Every crumb link keeps a visible focus ring, and nothing removes it without putting another one back."},{label:"Tap target",text:"A crumb holds a 40px pointer target, clear of the 24px WCAG 2.5.8 floor and under the 44px AAA number. The ellipsis button holds the same floor."},{label:"Collapsed levels",text:"The ellipsis opens a menu, states its own open state to assistive tech, and every hidden level is a real, reachable link inside it."},{label:"Contrast",text:"The muted crumb ink and the current-page ink hold 4.5:1 against the surface, on every brand."},{label:"Forced colours",text:"The trail and its focus ring stay visible in a high contrast mode, where the token colours are overridden."},{label:"Uppercase",text:"Labels render exactly as authored, in the body style, with no CSS case transform."}],openItems:[{question:"Is the three-level minimum a hard gate on rendering, or guidance on where breadcrumbs belong?",owner:"Product"},{question:"Is Home, ellipsis, current page the right collapse, and at what width should it engage?",owner:"Design"},{question:"Should the back link become a supported variant, or be retired?",owner:"Design"}]}}}},e={name:"Default",args:u,argTypes:m,render:a=>t.jsx(p,{...a}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"The forward trail at its minimum depth: Home, one middle level, current page. Even here there is already one middle level to collapse. Switch **Trail depth** to the deep trail to prove the collapse gathers **every** middle level behind that single mark and not just the first, then narrow the viewport (or use the **Viewport** toolbar) to watch it happen. Change the **Brand** toolbar and the same trail re-themes across all 21 brands without a value being restated."}}}};var n,i,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Default',
  args: BREADCRUMBS_DEFAULT_ARGS,
  argTypes: BREADCRUMBS_ARG_TYPES,
  render: args => <ConfigurableBreadcrumbs {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The forward trail at its minimum depth: Home, one middle level, current page. Even ' + 'here there is already one middle level to collapse. Switch **Trail ' + 'depth** to the deep trail to prove the collapse gathers **every** middle level ' + 'behind that single mark and not just the first, then narrow the viewport (or use ' + 'the **Viewport** toolbar) to watch it happen. Change the **Brand** toolbar and the ' + 'same trail re-themes across all 21 brands without a value being restated.'
      }
    }
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const q=["Playground"];export{e as Playground,q as __namedExportsOrder,E as default};
