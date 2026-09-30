import{j as t,S as A,g as d,r as P}from"./iframe-6dx3hp_4.js";import{B as S}from"./Button-CiZyClsp.js";import{P as i}from"./Pagination-BryqecgJ.js";import{a as N}from"./annotationPage-eYx--AWZ.js";import{D as q,a as I}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";import"./Loading-DyIAIYoE.js";import"./newTabMark-TI50-QeA.js";/* empty css               */import"./IconButton-Btgg2ITq.js";const y=e=>console.log("Pagination → onChange",e),a={midSequence:{pages:10,current:5},firstPage:{pages:10,current:1},truncatedOneSide:{pages:10,current:4},truncatedOtherSide:{pages:10,current:7},lastPage:{pages:10,current:10},sevenNoTruncation:{pages:7,current:4}},C={scenario:{...I("Mid-sequence"),name:"Page position",...q({labels:{midSequence:"Mid-sequence (truncated both sides)",firstPage:"First page",truncatedOneSide:"Truncated at the end only",truncatedOtherSide:"Truncated at the start only",lastPage:"Last page",sevenNoTruncation:"Seven pages (no truncation)"},options:["firstPage","truncatedOneSide","midSequence","truncatedOtherSide","lastPage","sevenNoTruncation"]}),description:"Which boundary state to draw. It sets both the total number of pages and which one is current."},pages:{control:!1,table:{disable:!0}},current:{control:!1,table:{disable:!0}},variant:{control:!1,table:{disable:!0}},onChange:{control:!1,table:{disable:!0}},label:{control:!1,table:{disable:!0}}},D={scenario:"firstPage"};function E({scenario:e}){const{pages:n,current:h}=a[e]??a.midSequence;return t.jsx(i,{pages:n,current:h,onChange:y})}const O=[{key:"firstPage",label:"Page 1 of 10, first page",props:{...a.firstPage,positionName:"first page"},dimension:"page position"},{key:"truncatedOneSide",label:"Page 4 of 10, truncated at the end",props:{...a.truncatedOneSide,positionName:"truncated at the end"},dimension:"page position"},{key:"midSequence",label:"Page 5 of 10, truncated both sides",props:{...a.midSequence,positionName:"truncated on both sides"},dimension:"page position"},{key:"truncatedOtherSide",label:"Page 7 of 10, truncated at the start",props:{...a.truncatedOtherSide,positionName:"truncated at the start"},dimension:"page position"},{key:"lastPage",label:"Page 10 of 10, last page",props:{...a.lastPage,positionName:"last page"},dimension:"page position"},{key:"sevenPages",label:"Page 4 of 7, no truncation",props:{...a.sevenNoTruncation,positionName:"seven pages"},dimension:"page position"}],l=[{key:"default",label:"Default",props:{stateName:"at rest"},dimension:"state"},{key:"hover",label:"Hover",pseudo:"hover",props:{stateName:"hovered"},dimension:"state"},{key:"focus",label:"Focus",pseudo:"focusVisible",props:{stateName:"focused"},dimension:"state"}],R={...d(l.filter(e=>e.pseudo==="hover"),{pseudoTarget:".ds-pagination__btn, .ds-pagination__arrow"}),...d(l.filter(e=>e.pseudo==="focusVisible"),{pseudoTarget:'[aria-label="Page 1"]'})},Q={title:"Molecules/Pagination",component:i,tags:["autodocs"],parameters:{docs:{page:N("Pagination"),toc:{headingSelector:"h2"},description:{component:"A navigation control that splits a long list across pages: numbered links, a current page that cannot be clicked, and arrows that appear only when there is somewhere left to go."}},componentDoc:{usage:`
## When to use

- ✅ **A long list broken into pages**, like search results or a product grid.
- ✅ **When somebody needs to jump to a page**, not only to the next one.

- ❌ **Moving through images or cards in place**, without leaving the page. That is **Carousel**.
- ❌ **Jumping between sections of one page.** That is **Anchor links**.
- ❌ **Switching between parallel views of the same content.** Pagination moves through one
  sequence, never between views.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Row container**, the navigation landmark | required | The whole control is one named landmark, not a bare row of buttons |
| **Page-number control** | required, clickable | Goes straight to that page. A numeral inside a chip: white ground, a hairline outline, and the brand's own action corner, which on Revlon is a circle |
| **Current-page control** | required, always visibly distinct | Marked programmatically as well as visually, never by styling alone |
| **Ellipsis**, the truncation marker | shown only when it stands in for more than one page | Not a control: nothing happens if it is clicked |
| **Previous arrow** | present except on the first page | The shared **Icon button** at rest, a bare chevron with no container, drawing the library's left chevron. Suppressed entirely on the first page, never greyed out |
| **Next arrow** | present except on the last page | The shared **Icon button** at rest, a bare chevron with no container, drawing the library's right chevron. Suppressed entirely on the last page, never greyed out |

- **The arrows are Icon button's.** Their box, ink, corner, hover and focus ring all belong to
  that component, and the same pair of controls appears on the carousels and the shade rail. This
  component supplies what a page list knows and an icon button cannot: which direction each one
  moves, what it is called out loud, and when it stops existing.
- **The whole row is round.** Every control in it reads the brand's action corner: the numbers and
  the current page through this component, the arrows through Icon button's own hook, which
  resolves the same role. On Revlon that draws every one of them as a circle, and on a
  square-cornered brand it draws every one of them square, together.
- **Tokens own the look.** Shape, spacing, colour and type. The same control re-themes across
  brands without a value being restated here.
- **The caller owns the two facts that change**: how many pages exist, and which one is current.
- **The component decides one thing only**: when to collapse the middle of the sequence into an
  ellipsis.

### Variants

**One ratified pattern**: numbered pages, with previous and next arrows and ellipsis truncation.

**The L, M and S sizes are not variants.** The arrow keeps one fixed box at every breakpoint, so
there is no desktop/mobile split to describe. The numerals and the gaps between items are one
value at every size.

**The arrow and the page chip read the same box and the same corner.** Both read a fixed 40px box,
the arrow on the Icon button's sm rung and the chip on the same floor, so the whole row reads as
one size, and both resolve the brand's action corner, so it reads as one shape too. They arrive
there by two different hooks, the chip through this component and the arrow through Icon button's,
which is what lets a brand move its action corner once and see the whole row follow. The row's other two numbers follow: the gap between items is 16px, and the
numerals are set in **body**, which is 16px on Revlon. A page number is the
control a shopper reads to find themselves in a list, so it is set in the reading size rather than
in small print. Nothing but the size moved: the face, the weight and the tracking are identical in
the two styles on every one of the 21 brands.
`,guidance:`
## Behaviors

### States

- **Default.** A page number at rest is a numeral inside its own chip: a white ground under a
  hairline outline, at the brand's action corner. The arrows at rest draw no container at all,
  just the chevron.
- **Hover.** The control swaps to a filled highlight. No hover state is drawn anywhere in Figma
  for this component, so that highlight is a design-system convention, not a client requirement.
- **Focus.** A visible ring appears the moment a control is reached by keyboard, and nothing
  removes that ring without putting one back.
- **Current page.** Non-interactive: no click fires, and the cursor never suggests otherwise. It is
  drawn as a solid inverse chip, a dark fill with light text, rather than a lighter or muted
  treatment.
- **First and last page.** The arrow at that edge stays in place and goes disabled. It is never
  removed, so the row keeps its width and no number moves when a reader reaches an end.

**The solid current-page chip is a deliberate departure**, from the drawing and from the site,
which both mark the current page by muting it grey. The solid chip is the agreed treatment and the
muted one is rejected, because a muted, lighter current page reads to most people as disabled
rather than selected. Whether that is reflected on the design side is still open.

**The edge arrow is a deliberate departure from the requirements sheet**, which asks for the arrow
to disappear at the first and last page. It is drawn disabled instead, because an arrow that leaves
the page takes its width out of the row and shifts every number sideways on the two page changes a
reader makes most often.

### Interactions

- **Clicking a page number goes straight to that page.**
- **Clicking an arrow moves exactly one page**, in the direction of the arrow.
- **Clicking the current page does nothing.**
- **Past the point where every number fits**, the middle of the sequence collapses into an
  ellipsis. The first and last page numbers always stay visible.
- **An ellipsis never stands in for a single page.** Where only one number would be hidden, that
  number is drawn instead: the marker is the same width as a numeral, so hiding one page behind it
  costs a reader a page and saves no room.

## Rules

- ✅ **Do** keep both arrows in place at every page, disabled at the edge they cannot move past.
- ❌ **Don't** remove an edge arrow. The row would change width and every number would move.
- ❌ **Don't** draw a new arrow. Both are the **Icon button** component holding the library's own
  chevron, one named drawing per direction, never one drawing flipped to face the other way.

- ✅ **Do** make the current page unmistakably different from its neighbours.
- ❌ **Don't** make the current page clickable.
- ❌ **Don't** mark the current page by styling alone. It is announced as current as well as drawn
  as current.

- ❌ **Don't** move by more than one page on an arrow click.
- ❌ **Don't** change what a control can *do* between breakpoints. Only its size changes.

### Content rules

- ✅ **Do** use numerals for page numbers.
- ❌ **Don't** treat the ellipsis as a control. It is a truncation marker, and clicking it does
  nothing.
- ❌ **Don't** collapse one page behind an ellipsis. A marker earns its seat only when it hides two
  pages or more.
- ❌ **Don't** truncate the first or the last page number. Truncation only ever touches the middle.
- ❌ **Don't** invent a character limit. The requirements say only that limits are to be defined
  by design.
- ✅ **Do** decide in the template where pagination sits and after how much content. The component
  does not decide that for itself.

## Open items

| Question | Owner |
|---|---|
| What are the SEO requirements for paginated pages: \`rel="next"/"prev"\`, a canonical strategy, and whether page-number links need a crawlable \`href\`? Page numbers are buttons today, which are not crawlable, so the answer could change the component's markup | Adobe |
| The 40px page chip clears WCAG 2.2 AA (24px) but not AAA (44px). Flag it if the client's accessibility bar is stricter than the standard | Design |
| The Component tokens table below publishes four hooks nothing draws with: the control size, its mobile pair, the icon size and a square control corner this round row does not read. Retiring a hook orphans a Figma variable, so all four wait for a token pass rather than being dropped alongside a component change | Design system |
`,spec:{elements:[{name:"Navigation landmark",requirement:"required"},{name:"Page-number control",requirement:"required",condition:"One button per visible page."},{name:"Current-page control",requirement:"required",condition:"The page the shopper is on, and never a click target."},{name:"Ellipsis",requirement:"conditional",condition:"Above seven pages, in the middle of the sequence."},{name:"Previous arrow",requirement:"required",condition:"Disabled on the first page, never removed."},{name:"Next arrow",requirement:"required",condition:"Disabled on the last page, never removed."}],authorability:[{name:"Pages",rule:"Set by the data: how many pages there are, and which one is current."},{name:"Labels",rule:"Numerals only. A page control never carries a word, and no character limit is set."},{name:"Ellipsis",rule:"Fixed by the system. Above seven pages, never at an end, never for one page."},{name:"Arrows",rule:"Fixed by the system. Both hold the shared chevron: no new drawing, no flipped copy."},{name:"Current page",rule:"Fixed by tokens. The solid inverse chip is not authorable."},{name:"Corner",rule:"Fixed by tokens. Every control reads the brand action corner, a circle on Revlon."},{name:"Placement",rule:"A template decides where the row sits, and after how much content."}],variants:[{label:"Page 1 of 10, first page",props:{pages:10,current:1,positionName:"first page"}},{label:"Page 4 of 10, truncated at the end",props:{pages:10,current:4,positionName:"truncated at the end"}},{label:"Page 5 of 10, truncated both sides",props:{pages:10,current:5,positionName:"truncated on both sides"}},{label:"Page 7 of 10, truncated at the start",props:{pages:10,current:7,positionName:"truncated at the start"}},{label:"Page 10 of 10, last page",props:{pages:10,current:10,positionName:"last page"}},{label:"Page 4 of 7, no truncation",props:{pages:7,current:4,positionName:"seven pages"}}],states:[{key:"default",name:"Default",props:{stateName:"at rest"}},{key:"hover",name:"Hover",pseudo:"hover",props:{stateName:"hovered"}},{key:"focus",name:"Focus",pseudo:"focus-visible",props:{stateName:"focused"}}],render:k,interactions:["Clicking a page number goes straight to that page.","Clicking an arrow moves exactly one page, in the direction the arrow points.","Clicking the current page does nothing, and the cursor never suggests otherwise.","Above seven pages the row is always seven seats wide, whichever page is current.","The middle collapses into an ellipsis. First and last always stay visible.","An ellipsis only opens where it hides more than one page. Where one would be hidden, that page is drawn.","At each end the arrow on that side is not rendered at all, rather than rendered and disabled.","Each arrow is an Icon button holding its own named chevron, never one drawing flipped over.","The ellipsis fires nothing. It is a truncation marker and never a control.","What a control can do never changes between breakpoints. Only its size does."],accessibility:[{label:"Landmark",text:"The row is a navigation landmark with an accessible name. Two rows on one page each carry a name of their own."},{label:"Control names",text:"Every page control announces as Page N, and each arrow carries its own name."},{label:"Current page",text:"The current page is announced as current as well as drawn differently, so the state never rests on colour alone."},{label:"Ellipsis",text:"The truncation marker is hidden from assistive technology, so it is never read out as a page."},{label:"Keyboard",text:"Every control is reachable with Tab in reading order, and Enter and Space activate it."},{label:"Focus",text:"Numbers and arrows keep a visible focus ring, and nothing removes it without putting another one back."},{label:"Focus after a page change",text:"After a page change, focus lands somewhere predictable and the new page is announced rather than changing in silence."},{label:"Edge arrows",text:"An arrow at the edge is removed from the row instead of disabled, so no unreachable control takes a tab stop."},{label:"Target size",text:"The page chip and the arrow both read a fixed 40px box, clear of the 24px WCAG 2.5.8 floor and under the 44px AAA one."},{label:"Contrast",text:"The inverse chip holds 4.5:1 between its ink and its own fill, and the numbers hold it on the page, on every brand."}],openItems:[{question:"What are the SEO requirements: next and previous relations, a canonical strategy, and a crawlable destination per page number?",owner:"Engineering"},{question:"Is WCAG AA the target-size bar, or is a stricter one required? The 40px chip clears AA and not AAA.",owner:"Design"}]}}}};function k({pages:e,current:n,positionName:h,stateName:T}){const x=`Pagination, ${h}, ${T}`;return t.jsx(i,{pages:e,current:n,onChange:y,label:x})}const o={name:"Default",args:D,argTypes:C,render:e=>t.jsx(E,{...e}),parameters:{docs:{description:{story:"The control with every option a designer can change. Switch **Page position** to step through the four boundary states: mid-sequence with truncation on both sides, the first page, the last page, and exactly seven pages, the threshold where no ellipsis appears at all."}}}},r={name:"All states",parameters:{themeShellPadding:!1,pseudo:R,docs:{description:{story:"Every boundary state against every pointer state, in one labelled grid: pages **1**, **4**, **5**, **7** and **10** of ten, plus **page 4 of seven** for the threshold, down the side, and **Default**, **Hover** and **Focus** across the top. Read down the first column and the whole set of boundaries is one comparison: every ten-page row is the same seven seats wide, so no control moves between them; both arrows are present in every row and go disabled at the end they cannot pass; truncation opens only once more than one page would be hidden; and seven pages is the exact threshold where every number still renders. Read across a row and the resting numeral, the hover ground and the focus ring are the same control three times. **Hover** freezes on every control in the cell, which is what a pointer really does to an element and its ancestors; **Focus** freezes on page 1 alone, because focus is singular and a row of rings is a state no interaction can produce. Both are held open with storybook-addon-pseudo-states, so the colours are the component's real CSS sitting still for a review or a screenshot. Each cell carries its own landmark name, composed from its row and its column, since fifteen of them share one page. A real page shows one boundary state at a time. This is a QA surface, not themed product UI, which is why its own chrome stays neutral across brands."}}},render:()=>t.jsx(A,{rows:O,columns:l,render:k})};function _(){const[e,n]=P.useState(1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--size-300)"},children:[t.jsx(i,{pages:10,current:e,onChange:n}),t.jsxs("div",{style:{display:"flex",gap:"var(--size-200)",alignItems:"center"},children:[t.jsx(S,{variant:"secondary",type:"button",onClick:()=>n(10),children:"Jump to last page (external update)"}),t.jsxs("code",{style:{fontSize:"var(--font-size-small)"},children:["current: ",e]})]})]})}const s={name:"Live",render:()=>t.jsx(_,{}),parameters:{docs:{description:{story:"The only story on this page where `current` really changes: clicking a page number moves the control to it, unlike every other story here, which logs the click and holds still. Tab onto a page number and press Enter and focus lands on the new current page's inert span, then Tab again moves to the next real control, never back onto a page number that already unmounted. The button underneath moves `current` the way an external update would (an outside data load, a Storybook arg), with no click inside the control at all: focus must stay on that button rather than jumping onto whichever page becomes current, which is the confirmed defect this story exists to demonstrate is fixed."}}}};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Default',
  args: PAGINATION_DEFAULT_ARGS,
  argTypes: PAGINATION_ARG_TYPES,
  render: args => <ConfigurablePagination {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'The control with every option a designer can change. ' + 'Switch **Page position** to step through the four boundary states: mid-sequence with truncation ' + 'on both sides, the first page, the last page, and exactly seven pages, the threshold ' + 'where no ellipsis appears at all.'
      }
    }
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,m,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'All states',
  parameters: {
    // Flush canvas so the grid gets the full width for its columns, the same flag every other
    // matrix story sets. See .storybook/preview.jsx.
    themeShellPadding: false,
    pseudo: MATRIX_PSEUDO,
    docs: {
      description: {
        story: 'Every boundary state against every pointer state, in one labelled grid: pages **1**, ' + '**4**, **5**, **7** and **10** of ten, plus **page 4 of seven** for the threshold, ' + 'down the side, and **Default**, **Hover** and **Focus** across the ' + 'top. Read down the first column and the whole set of boundaries is one comparison: ' + 'every ten-page row is the same seven seats wide, so no control moves between them; ' + 'both arrows are present in every row and go disabled at the end they cannot pass; ' + 'truncation opens only once more than one page would be hidden; and seven pages is the ' + 'exact threshold where every ' + 'number still renders. Read across a row and the resting numeral, the hover ground and ' + 'the focus ring are the same control three times. **Hover** freezes on every control ' + 'in the cell, which is what a pointer really does to an element and its ancestors; ' + '**Focus** freezes on page 1 alone, because focus is singular and a row of rings is a ' + 'state no interaction can produce. Both are held open with ' + 'storybook-addon-pseudo-states, so the colours are the component\\'s real CSS sitting ' + 'still for a review or a screenshot. Each cell carries its own landmark name, composed ' + 'from its row and its column, since fifteen of them share one page. A real page shows ' + 'one boundary state at a time. This is a QA surface, not themed product UI, which is ' + 'why its own chrome stays neutral across brands.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={MATRIX_ROWS} columns={MATRIX_COLUMNS} render={renderSpecPagination} />
}`,...(w=(m=r.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var b,f,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Live',
  render: () => <LivePaginationDemo />,
  parameters: {
    docs: {
      description: {
        story: 'The only story on this page where \`current\` really changes: clicking a page number ' + 'moves the control to it, unlike every other story here, which logs the click and ' + 'holds still. Tab onto a page number and press Enter and focus lands on the new ' + 'current page\\'s inert span, then Tab again moves to the next real control, never back ' + 'onto a page number that already unmounted. The button underneath moves \`current\` the ' + 'way an external update would (an outside data load, a Storybook arg), with no click ' + 'inside the control at all: focus must stay on that button rather than jumping onto ' + 'whichever page becomes current, which is the confirmed defect this story exists to ' + 'demonstrate is fixed.'
      }
    }
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const V=["Playground","AllStates","Live"];export{r as AllStates,s as Live,o as Playground,V as __namedExportsOrder,Q as default};
