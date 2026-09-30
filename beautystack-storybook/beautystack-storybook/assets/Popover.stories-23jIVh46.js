import{j as t,r as p}from"./iframe-6dx3hp_4.js";import{B as T}from"./Button-CiZyClsp.js";import{M as x}from"./MenuItem-bBgP9Lwo.js";import{P as m}from"./Popover-BGxFbLtI.js";import{a as A}from"./annotationPage-eYx--AWZ.js";import{d as D,a as b,D as S}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";import"./Loading-DyIAIYoE.js";import"./newTabMark-TI50-QeA.js";/* empty css               */import"./popoverPlacement-CK5qQ-ie.js";const O={placement:{...b("Below, aligned left"),name:"Placement",...S({labels:{"bottom-start":"Below, aligned left","bottom-end":"Below, aligned right","top-start":"Above, aligned left","top-end":"Above, aligned right"},options:["top-start","top-end","bottom-start","bottom-end"]}),description:"Where the panel sits relative to its trigger **when there is room**. It is a preference, not a decree: the panel measures the space in your viewport and moves to the other side when this one will not fit, so it never covers the control that opened it. Alignment (leading or trailing) is always yours and is never changed."},density:{...b("Comfortable"),name:"Density",...D({labels:{comfortable:"Comfortable",menu:"Menu"},options:["comfortable","menu"]}),description:"How the panel spaces the things inside it. **Comfortable** is the default and is right for anything you read: a note, a short set of actions. **Menu** is for a panel whose content is a list of **Menu item** rows. The two share one inset, 8px, so what this control still moves is the panel's vertical rhythm: 12px between the content and an action row at comfortable, and zero at menu, because rows are adjacent by definition and a gap between them breaks one list into separate cards. A panel with a title hands that 12px back to the title, so a menu's name is never read as its first row. Every menu in the library ships on **Menu**, so this control is here to *show* the difference rather than to invite a choice: a list of rows takes **Menu**, everything else takes **Comfortable**."},label:{name:"Panel title",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"none, the trigger names the panel"}},description:"An OPTIONAL visible title. Leave it empty and the panel is named by the button that opened it. Set it when the trigger has no words of its own, like an icon-only button. Then it is on screen and it is also what a screen reader calls the panel."},triggerLabel:{name:"Trigger label",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Sort"}},description:"The button that opens it. The button is yours; the wiring is the component's."},open:{control:!1,table:{disable:!0}},defaultOpen:{control:!1,table:{disable:!0}},onOpenChange:{control:!1,table:{disable:!0}},renderTrigger:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}},popupRole:{control:!1,table:{disable:!0}},flip:{control:!1,table:{disable:!0}},frame:{control:!1,table:{disable:!0}},handover:{control:!1,table:{disable:!0}}},P={placement:"bottom-start",density:"comfortable",triggerLabel:"Sort"},E={display:"grid",gridTemplateColumns:"minmax(0, 1fr)",gap:0,margin:0,padding:0,listStyle:"none"},d=["Most recent","Highest rated","Most helpful"];function k({open:n,chosen:o=d[0],onChoose:r=()=>{}}){const i=p.useRef(null),[l,h]=p.useState(()=>Math.max(d.indexOf(o),0));p.useEffect(()=>{if(!n)return;const e=Math.max(d.indexOf(o),0);h(e);const a=requestAnimationFrame(()=>{var s,c;(c=(s=i.current)==null?void 0:s.querySelectorAll('[role="radio"]')[e])==null||c.focus()});return()=>cancelAnimationFrame(a)},[n]);const u=e=>{var c,f;const a=d.length-1;let s;if(e.key==="Home")s=0;else if(e.key==="End")s=a;else if(e.key==="ArrowDown")s=Math.min(l+1,a);else if(e.key==="ArrowUp")s=Math.max(l-1,0);else return;e.preventDefault(),h(s),(f=(c=i.current)==null?void 0:c.querySelectorAll('[role="radio"]')[s])==null||f.focus()};return t.jsx("ul",{style:E,role:"radiogroup","aria-label":"Sort by",ref:i,onKeyDown:u,children:d.map((e,a)=>t.jsx("li",{role:"presentation",children:t.jsx(x,{as:"button",type:"button",role:"radio","aria-checked":o===e,tabIndex:a===l?0:-1,selected:o===e,onFocus:()=>h(a),onClick:()=>r(e),children:e})},e))})}function I({placement:n,density:o,label:r,triggerLabel:i}){const[l,h]=p.useState(!1),[u,e]=p.useState(d[0]);return t.jsx(m,{placement:n,density:o,label:r,open:l,onOpenChange:h,renderTrigger:a=>t.jsx(T,{variant:"secondary",...a,children:`${i}: ${u}`}),children:t.jsx(k,{open:l,chosen:u,onChoose:a=>{e(a),h(!1)}})})}const C={padding:"var(--size-1000) 0",display:"flex",justifyContent:"center",alignItems:"flex-start"},Y={title:"Atoms/Popover",component:m,tags:["autodocs"],parameters:{docs:{page:A("Popover"),toc:{headingSelector:"h2"},description:{component:"A small floating panel anchored to the control that opens it, built for a sort menu and future product-selection use cases. Unlike a modal or a drawer, the page behind it stays live."}},componentDoc:{usage:`
## When to use

- ✅ **A short set of choices or actions**, anchored to the control that opens them, like a sort
  menu.
- ✅ **A "what's this?" note** that a shopper opens on purpose.
- ✅ **The list of a drop-down.** That is one of the two other panel kinds ratified so far, and it
  is what **Select field** is built on.
- ✅ **A site header's disclosure panel.** That is the third kind, a plain group, and it is what
  **Navigation**'s megamenu is built on.

- ❌ **Something that appears on hover.** That is **Tooltip**, a different contract, and conflating
  the two is how a panel ends up unreachable on touch.
- ❌ **Anything read rather than glanced at**, like a long form. That is **Drawer**.
- ❌ **Anything that must stop the page.** A popover deliberately leaves the page live, so a task
  that has to be finished first belongs in a modal surface.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Trigger** | required | Yours to design: a button, an icon button, a link. The component hands it everything that makes it a trigger, so no screen has to remember them |
| **Panel** | required | The floating surface. It declares one of three ratified kinds, a dialog unless an adopter says otherwise, and pointedly **not** a modal one |
| **Title** | optional | A visible line at the top. Leave it out and the trigger names the panel; set it when the trigger has no words, like an icon-only button |
| **Content** | required | Whatever the panel is for |
| **Action row** | optional | A row of buttons at the bottom. No styling of its own: it is your content, spaced by the panel's own rhythm |

- **Tokens own the look.** Inset, rhythm, distance from the trigger, border, radius, shadow and
  type.
- **The caller owns the words.** The trigger's label, the panel's title and its content.
- **The panel opens flush against its trigger.** The distance between the two is zero by default,
  so a menu and the control that produced it read as one surface. It is
  still a step from the system, the bottom one, rather than a hand-picked nudge.
- **There is no scrim, and that is the design.** A scrim is how a modal shows the page behind it is
  unavailable. Here it is available, so drawing one would be a lie.

### Variants

**Four placements.** Below or above, aligned to the trigger's leading or trailing edge. They mirror
automatically for right-to-left reading, because the positioning is written in logical terms rather
than as left and right.

**The placement you pick is a preference, and the panel keeps it whenever it fits.** When it does
not, the panel moves to the other side on its own. It measures the trigger, itself and your
viewport when it opens, and measures again while you scroll, so **a panel never covers the control
that opened it**.

Each limit on that rescue is deliberate, not an oversight:

- **Up and down only.** A panel running off the leading or trailing edge is a different problem,
  and it is still open.
- **Alignment is never touched**, so a panel never slides sideways for a reason you cannot see.
- **A panel that fits on neither side stays where you put it**, rather than flapping between two
  sides that are equally impossible.
- **The panel publishes the side it resolved to**, so what is on screen can be read rather than
  guessed at.

**Three panel kinds.** By default a popover is a small **dialog**, for a note or a set of actions.
An adopter that needs a different kind may declare one of the two others: a **listbox**, which is
what makes the drop-down possible, and a plain **group**, which is what a site header's disclosure
panel is. The trigger's announcement follows the panel automatically, so the two can never
disagree, and where a kind has no announcement a trigger is allowed to make, the trigger makes
none rather than an invalid one.

**Two densities.** **Comfortable** is the default, for anything you read. **Menu** is for a panel
whose content is a list of **Menu item** rows. It exists to stop a panel's inset
and a row's inset stacking, which would put the first word of a menu 33px from the edge of a panel
holding a two-word choice.

**Both densities take the same 8px inset**, so the density is not about
how tight the panel is. What it still forks is the panel's own vertical rhythm: 12px between the
content and an action row at comfortable, and zero at menu, because rows are adjacent by definition
and a gap between them breaks one list into separate cards. A titled panel hands that 12px back to
the title, so a menu's name never reads as its first row. **A list of rows takes menu density;
everything else takes comfortable.** The panel never guesses this from its content: a panel whose
geometry changed because a list wrapper appeared inside it would re-space itself on a change nobody
made to it.

**Two frames.** **Contained** is the default and is the popover you already know: a panel with
edges, hung off its trigger, carrying its own hairline, its rounded corner and the floating
elevation. **Full bleed** is a panel that spans its container instead, with no border and no corner,
sitting on the closer, tighter elevation a surface that drops from a bar wants rather than the one a
surface floating over a page wants.

**A frame decides four things together, which is why it is one word and not four.** The span, the
corner, the border and the elevation all follow from whether the panel is a shape on a page or a
band across it. A full-bleed panel also drops its own inset, because its content sets its own
track: what a site header's menu puts inside is a page-width column layout, not a list that wants a
panel's padding. **A site header's disclosure panel takes full bleed; everything else takes
contained.**

**Full bleed spans the box the panel is anchored in, and choosing that box is the screen's job, not
the component's.** By default a popover anchors to its own trigger, so a full-bleed panel there
would be exactly as wide as the button. A screen that wants a panel across the whole header anchors
it to the header. That split is deliberate: a component that reached past its anchor to the viewport
would be unusable inside anything.

**A full-bleed panel arrives by sliding down from behind the edge it hangs off**, a full panel
height, in one short move. It does not fade, it does not grow and it does not scale, and the box it
lands in never changes size, so nothing below it jumps. A contained popover has no entrance and is
unchanged.

**Moving straight from one panel to the next skips the entrance**, so a row of menus reads as one
surface changing its contents rather than as a panel closing and another opening. Under reduced
motion there is no entrance at all and the panel simply appears.

### How it differs from a Drawer and a Modal

This is the third dialog-shaped surface in the library and the only non-modal one. The difference
is a single declaration, and everything else follows from it:

| | Drawer / Modal | Popover |
|---|---|---|
| Claims the background is unavailable | yes | **no** |
| Scrim | yes | no |
| Traps focus inside | yes | no, Tab walks out into the page |
| Freezes the page's scrolling | yes | no |
| Escape closes it | yes | yes |
| Focus returns to the trigger | yes | yes |
| Closes when you click away | via the scrim | via the page |

Every "no" in that column is deliberate, and each has its own reason.
`,guidance:`
## Behaviors

### States

- **Closed.** Not merely invisible, **gone**. The panel is removed from the layout and from the tab
  order, so nothing inside a closed popover can be reached by keyboard or announced by a screen
  reader.
- **Open.** The panel is anchored to its trigger and sits flush against it, the trigger reports
  that it is expanded, and the page behind it carries on working.
- **Open, flipped.** The same panel on the other side of its trigger, because the preferred side
  had no room. Nobody chooses this state and nothing changes except the side. It is re-decided
  while the panel is open, so scrolling a trigger towards the edge of the screen moves the panel
  rather than letting it hang off.
- **Hover, focus and pressed belong to the trigger**, which is usually a **Button** and documents
  its own states. This component adds none.

### Interactions

- **Clicking the trigger opens it, and clicking it again closes it.** It stays closed: "outside" is
  measured against the trigger and the panel together, or the trigger click would close and
  immediately reopen.
- **Escape closes it**, and focus goes back to the trigger. Anything you can open you must be able
  to get out of.
- **Clicking anywhere else closes it.** A modal has a scrim to click. This has the page.
- **Selecting text that runs outside the panel does not close it.** Dismissal listens for where a
  gesture starts, not where it ends, so dragging a selection past the panel's edge does not pull
  the panel out from under you.
- **Tab walks out, and the panel closes behind you.** Keep pressing Tab and focus leaves the
  panel and carries on into the page, which is what makes this not a trap. The panel dismisses
  itself as the caret crosses out of it, so nothing is left hanging over the page and the trigger
  stops saying it is open. Focus is not pulled back: you keep the place you tabbed to.
- **The page scrolls**, deliberately. Freezing a page the user can still click would be the same
  lie as the scrim.
- **A panel that scrolls draws its own scrollbar**, narrow, with the thumb in the neutral this
  library already spends on the edge of a control and no track at all, so the panel's own paper
  runs behind it and nothing square is drawn where the panel draws a curve. **A list scrolled by
  the keyboard stops short of the edge**, so the row's focus ring is never cut by the scrollport.

## Rules

- ✅ **Do** use it for something read at a glance beside its trigger.
- ❌ **Don't** put a long form in it. That is a drawer or a modal.
- ❌ **Don't** open it on hover. That is a tooltip, and conflating the two is how a panel ends up
  unreachable on touch.

- ❌ **Don't** add a scrim, a focus trap or a scroll lock "for consistency" with the modal surfaces.
  Each one contradicts what this surface tells assistive technology.

- ✅ **Do** let the panel own the scrollbar of anything that scrolls inside it.
- ❌ **Don't** restyle it from the component you put in the panel. The two properties involved are
  inherited, so a second declaration adds nothing and can only drift from the first one.

> **Trapping focus here would be worse than either extreme.** The page would be unreachable by
> keyboard while it stayed clickable by mouse.

- ❌ **Don't** hide a closed panel visually instead of letting it be removed. A hidden panel leaves
  its buttons focusable behind nothing.
- ✅ **Do** let the trigger name the panel. Add a title only when the trigger has no words of its
  own: an icon-only button, an avatar.
- ❌ **Don't** nest one popover inside another. No consumer exists, so the dismissal order is
  undefined.

- ✅ **Do** pick the placement that reads best where you are putting it, and expect the panel to
  rescue itself above and below.
- ❌ **Don't** count on that rescue near the leading or trailing edge. That half is still open.
- ❌ **Don't** remove the panel's hairline border. A floating panel can land on anything, including
  a surface the same colour as its own, and on some brands the shadow alone is then invisible. That
  hairline is the **surface policy's**, not this component's: the overlay level
  carries it for every floating host in the library, and this panel's own token points at it.

### Content rules

- ✅ **Do** write every word at the call site. The component supplies none.
- ✅ **Do** keep a popover short. It is read at a glance beside its trigger, which is why its inset
  is three steps tighter than a modal's: 8px against 32px.
- ✅ **Do** let a long line wrap at the same measure as the rest of the page, rather than running to
  the edge of the screen.
- ✅ **Do** build a list of choices out of the **Menu item** atom. It is what gives a row its hover
  and its chosen state. The atom draws the row, and the panel still decides what the rows mean.
- ❌ **Don't** invent a character limit. Nothing supplies one.

## Open items

| Question | Owner |
|---|---|
| **The leading and trailing edges.** The panel now rescues itself above and below, but a panel running off the side still does. Fixing that means computing an offset, a coordinate, which is a different kind of change from choosing between two rules that already exist | Design / DS team |
| Should a popover have an arrow pointing at its trigger? It interacts directly with the flip: an arrow has to move when the panel does, and the panel now moves on its own | Design |
| On a 375px screen an edge-anchored panel can exceed the viewport. Whether a popover should become a sheet below a breakpoint is unanswered | Design |
| **Which other popup kinds should be ratified?** Three exist today: a dialog, a plain group for a site-header disclosure, and a list. A menu is the obvious fourth, and it is not free: each kind brings its own keyboard contract, and a kind announced without one is worse than none | Design |
`,spec:{elements:[{name:"Trigger",requirement:"required",condition:"Yours to draw. It is handed the expanded state, the popup kind and the panel id."},{name:"Panel",requirement:"required",condition:"The floating surface. It declares one of three popup roles, and never modal."},{name:"Panel title",requirement:"optional",condition:"Only when the trigger has no words of its own."},{name:"Content",requirement:"required",condition:"Whatever the panel is for. The component styles none of it."},{name:"Action row",requirement:"optional",condition:"Buttons at the bottom, spaced by the panel rhythm."}],authorability:[{name:"Panel content",rule:"The author writes every word and passes the content in. The panel supplies none."},{name:"Length",rule:"Keep it short. A popover is read at a glance beside its trigger, never scrolled."},{name:"Panel title",rule:"Add one only when the trigger has no words. Otherwise the trigger names the panel."},{name:"Placement",rule:"The author picks the preferred side. The panel flips itself up or down as needed."},{name:"List of choices",rule:"Build a list of rows out of the Menu item atom and set the panel to menu density."},{name:"Panel hairline",rule:"Fixed by the floating surface. Removing it hides the panel on some brands."},{name:"Panel chrome",rule:"Fixed: the ground, the corner, the shadow and the inset all belong to the surface."},{name:"Popup kind",rule:"Fixed to the three that exist. Each new kind brings a keyboard contract with it."}],variants:[{label:"Below, leading",props:{placement:"bottom-start"}},{label:"Below, trailing",props:{placement:"bottom-end"}}],states:[{key:"open",name:"Open"},{key:"closed",name:"Closed",props:{closed:!0}}],render:_,interactions:["Clicking the trigger opens the panel, and clicking it again closes it and leaves it closed.","Escape closes it, and focus goes back to whatever opened it.","Clicking anywhere outside the trigger and the panel closes it.","A selection that starts inside the panel and ends outside it does not close it.","Tab walks out of the panel into the page. There is no focus trap and no scroll lock.","The panel closes as focus leaves it, and the caret stays where it went.","The panel flips to the other side when the preferred side has no room, and re-decides on scroll.","Alignment is never changed, and a panel with room on neither side stays where it was put.","It opens on click, never on hover. A hover panel is unreachable on touch.","One popover never nests inside another. The dismissal order would be undefined."],accessibility:[{label:"Not modal",text:"The panel declares one of the three popup roles and never declares itself modal, because the page behind it stays live."},{label:"Keyboard",text:"Tab is not handled at all, so focus walks out into the page. No trap. The panel closes as the caret crosses out of it, never left open behind the reader."},{label:"Focus return",text:"Escape closes the panel and puts focus back on whatever opened it. Closing because focus LEFT does not: the caret is already where the reader put it."},{label:"Closed panel",text:"A closed panel is removed from layout and made inert, so nothing inside it is focusable or read out."},{label:"Trigger wiring",text:"The component writes the expanded state, the panel id and the popup kind, so no host can forget one."},{label:"Accessible name",text:"The trigger names the panel. A panel opened by an icon or an avatar carries a visible title instead."},{label:"Unique ids",text:"Ids are generated per instance, so two popovers on one page never collide."},{label:"Scroll",text:"The page keeps scrolling while the panel is open, because nothing about this surface blocks it."},{label:"Writing direction",text:"Placement is written in logical terms, so a right to left locale mirrors it without a second rule."}],openItems:[{question:"A panel running off the leading or trailing edge is still not rescued. Fixing it means computing a coordinate.",owner:"Design / DS team"},{question:"Should a popover have an arrow pointing at its trigger? An arrow has to move when the panel flips.",owner:"Design"},{question:"On a 375px screen an edge-anchored panel can exceed the viewport. Should a popover become a sheet below a breakpoint?",owner:"Design"},{question:"Which other popup kinds should exist? A menu is the obvious fourth, and it brings its own keyboard contract.",owner:"Design"}]}}}},g={name:"Default",args:P,argTypes:O,render:n=>t.jsx("div",{style:C,children:t.jsx(I,{...n})}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"Open it and then try the things that make it non-modal: **scroll this page** (it scrolls), **press Tab repeatedly** (focus walks out of the panel and on into the page, because it is not a trap, and the panel closes behind you as the caret leaves it), and **press Escape** (it closes and focus goes back to the button). Switch **Placement** to move the panel around its trigger. Change the **Brand** toolbar and the panel re-themes across all 21 brands."}}}},M={short:t.jsx(k,{}),long:t.jsx("p",{style:{margin:0,maxWidth:"22ch"},children:"Estimates use your postcode and the warehouse holding this shade."})},q={short:165,long:160},R=300;function _({placement:n,shape:o="short",closed:r}){return t.jsx("div",{style:{width:R,height:r?void 0:q[o],display:"flex",alignItems:"flex-start",justifyContent:n==="bottom-end"?"flex-end":"flex-start"},children:t.jsx(m,{defaultOpen:!r,placement:n,renderTrigger:i=>t.jsx(T,{variant:"secondary",...i,children:"Sort"}),children:M[o]})})}var w,y,v;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Default',
  args: POPOVER_DEFAULT_ARGS,
  argTypes: POPOVER_ARG_TYPES,
  render: args => <div style={STAGE}><ConfigurablePopover {...args} /></div>,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'Open it and then try the things that make it non-modal: **scroll this page** (it ' + 'scrolls), **press Tab repeatedly** (focus walks out of the panel and on into the ' + 'page, because it is not a trap, and the panel closes behind you as the caret leaves it), ' + 'and **press Escape** (it closes and focus goes back to the ' + 'button). Switch **Placement** to move the panel around its trigger. Change the ' + '**Brand** toolbar and the panel re-themes across all 21 brands.'
      }
    }
  }
}`,...(v=(y=g.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const X=["Playground"];export{g as Playground,X as __namedExportsOrder,Y as default};
