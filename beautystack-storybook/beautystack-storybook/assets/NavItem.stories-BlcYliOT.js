import{j as e,S as N,g as R,r as O}from"./iframe-6dx3hp_4.js";import{N as t}from"./NavItem-Dq6-KykK.js";import{D as j,a as D}from"./designerArgTypes-CVo4ohMZ.js";import{a as P}from"./annotationPage-eYx--AWZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";import"./newTabMark-TI50-QeA.js";const x={fontFamily:"var(--typography-label-strong-font-family)",fontWeight:"var(--typography-label-strong-font-weight)",fontSize:"var(--typography-label-strong-font-size)",lineHeight:"var(--typography-label-strong-line-height)",letterSpacing:"var(--typography-label-strong-letter-spacing)",textTransform:"var(--typography-label-strong-text-case)"},A={fontFamily:"var(--typography-body-font-family)",fontWeight:"var(--typography-body-font-weight)",fontSize:"var(--typography-body-font-size)",lineHeight:"var(--typography-body-line-height)"},S={display:"flex",alignItems:"center",gap:"var(--size-400)",padding:"var(--size-300) var(--size-400)",background:"var(--color-bg-page)"},h={children:{name:"Label",control:"text",table:{category:"Content",type:{summary:"Short text"},defaultValue:{summary:"Best Sellers"}},description:"What the row says. Always the site's, never the component's."},href:{name:"Destination",control:"text",table:{category:"Content",type:{summary:"A path, or nothing"},defaultValue:{summary:"/best-sellers"}},description:"Where the row goes. Its presence decides the element: give it one and the row is a real link, clear it and the row becomes a button that only opens a panel."},emphasis:{...D("Default"),name:"Emphasis",...j({labels:{default:"Default",accent:"Accent"},options:["default","accent"]}),description:"Which ink the row rests on. Accent is the authored highlight link a site puts on one item, not a mark for the page you are on."},disclosure:{control:"boolean",name:"Opens a panel",table:{category:"Options",type:{summary:"On or off"},defaultValue:{summary:"Off"}},description:"Say it when a menu, a popover or a section hangs off this row. The row draws a chevron after its label, and the chevron turns over while the panel is open. A row that only goes somewhere draws nothing: there is nothing to open."},collapsible:{control:"boolean",name:"Collapsible",table:{category:"Options",type:{summary:"On or off"},defaultValue:{summary:"Off"}},description:"Draw the row as a section you can open and close: full width, a thumb-sized row, and a chevron at the far right that turns over when the section is open. Turning it on says the row HAS a chevron; whether the section is open is said by the menu around it."},icon:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}}},V={title:"Atoms/Nav item",component:t,tags:["autodocs"],parameters:{docs:{page:P("Nav item"),toc:{headingSelector:"h2, h3"},description:{component:"One row of site navigation: a destination, drawn on the page's own ink and reaching for the brand accent under the pointer. Give it a destination and it renders a real link; leave the destination out and it renders a button that only opens a panel."}},componentDoc:{usage:`
## When to use

- ✅ **Any row of the site header**: the primary link row, a link inside a megamenu column, and
  a link in the mobile panel. All three are the same row.
- ✅ **A link that opens a panel instead of going somewhere.** Leave the destination out and the
  row becomes a button, which is what a control that only opens something has to be.
- ✅ **A row that needs a mark before its label.** The mark sits in a fixed box, so an emoji, an
  uploaded drawing and a library glyph all leave the label on the same line.
- ✅ **A section header that opens and closes**, which is what the whole of a navigation panel on
  a phone is made of. Turn *Collapsible* on and the row fills its width, grows to a size a thumb
  can land on, and takes a chevron at its far right that turns over when the section opens.

- ❌ **A row inside a floating menu.** That is **Menu item**, and it is a different drawing: its
  hover is a shaded ground with a rounded corner, drawn inside a panel. This one has no ground
  at all.
- ❌ **A link in body copy, a footer or a breadcrumb.** That is **Link**, which rests quiet and
  walks up to full ink. This row rests at full ink and walks across to the accent.
- ❌ **An action.** A row that adds, saves or opens a dialog is **Button**, whatever it looks like.
- ❌ **The header itself.** The bar, the megamenu layout, the utility cluster and the mobile
  panel are **Navigation**'s.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Label** | **always required** | The row is the words. There is no wordless nav item |
| **Mark before the label** | optional | A fixed box, so swapping an emoji for a drawing never moves the label |
| **Chevron after the label** | only on a row that opens a panel | The open-and-close affordance, on every row with a menu, a popover or a section behind it. It is a drawing inside the row, never a second button: the whole row is one thing to tap and one stop for the keyboard |
| **Destination** | optional, and it decides the element | With one the row is a real link. Without one it is a button, which is what a panel trigger must be |

- **Tokens own the look.** The resting ink, the accent, the pressed step and the mark's box.
  The same row re-themes across every brand without a value being restated.
- **The site owns the words** and the destination.
- **The row inherits its type from where it sits**, and that is deliberate rather than missing.
  The three places it is used set three different faces, sizes and cases: the header bar is the
  heading face, uppercase and tracked; a megamenu column and the mobile panel are the body face.
  A face chosen inside the component would be wrong in two of the three.
- **It sets no padding either**, with one exception. The row's breathing space belongs to the
  row it sits in. A **collapsible** row is the exception, and it is a deliberate one: a section
  header is something a thumb lands on, so it carries its own top and bottom space and grows to
  the 40px every tappable thing in this library reaches. Its left and right space still belong
  to where it sits.

### Variants

**Emphasis: default or accent.** Default rests on the page's ink. Accent rests on the brand's
accent, which is the authored highlight a site puts on a single item, for example a lab or an
editorial section. It changes the resting ink and nothing else: an accent row keeps the same
box, the same type and the same pressed step.

**Accent is not the page you are on.** It is authored on one item and stays there on every page.

**Opens a panel: on or off.** On draws a chevron after the label and turns it over while the panel is open. Say it on every row with a menu, a popover or a section behind it, in the header bar and in a panel alike, so a row that opens something never looks like a row that goes somewhere.

**Collapsible: on or off.** Off is the plain row. On is a section you open and close: the row
fills its width, grows to a size a thumb can land on, and takes a chevron at its far right that
turns over when the section opens. It is the same row underneath, with the same ink, the same
type and the same states, so a panel can mix rows that open with rows that go somewhere and the
column still reads as one list.

**The chevron is a drawing, not a second button.** A button inside a button is not something a
browser or a screen reader can make sense of, and it would give one section two things to tab
to. So the whole row is the control, and the chevron is what it looks like.
`,guidance:`
## Behaviors

### States

- **Default.** The page's own ink, no underline, no ground.
- **Hover.** The ink moves to the brand accent. It is a colour change, never a fade and never a
  ground appearing underneath. In the header bar the row also takes an accent rule under its whole
  box, and that rule is the bar's, not this row's.
- **Pressed.** One step darker than the accent, while the row is held. It is the only feedback
  an accent row has, because that row is already sitting at the accent.
- **The page you are on.** When the header marks the row as current, it rests at the accent ink.
  The ink is the whole mark: no rule is drawn under a current row, because an accent rule under a
  row in the header bar means hover or an open panel.
- **Focus.** The library's one focus ring, shared with every other control. Pointer clicks do
  not leave it behind.
- **There is no disabled state.** A destination you cannot go to is a destination that should
  not be in the header.

### Interactions

- **Given a destination, it navigates**, as a real link. Middle-click, open in a new tab, copy
  link and the Enter key all behave the way a browser makes them behave.
- **Given none, it is a button**, always reachable by keyboard and able to say whether the panel
  it controls is open. A link with nowhere to go cannot do either.
- **It never announces anything about itself.** Whether the row opens a panel, or is the page
  you are on, is known only by the header around it, so the header says it.
- **A collapsible row turns its chevron when the header says the section is open**, and only
  then. The drawing follows what is announced, so a chevron pointing up always means something a
  screen reader has already been told.
- **A collapsible row is one tap target and one tab stop.** Anywhere on the row opens it.
- **Motion is suppressed** for anyone who has asked their system to reduce it.

## Rules

- ✅ **Do** give every row either a destination or a panel to open. One or the other, always.
- ✅ **Do** say whether the section is open wherever you use a collapsible row. The row draws the
  chevron; only you know what it opens and whether it is open.
- ❌ **Don't** put a button inside a collapsible row to carry the chevron. One section, one thing
  to tap, one stop for the keyboard.
- ❌ **Don't** use accent to mark the page the visitor is on. Accent is authored, it does not
  move, and a visitor who sees it move would read it as a highlight that changed.
- ✅ **Do** use exactly one accent row in a header, at most.
- ❌ **Don't** add a second highlight beside it. Two highlights in one row of links is no
  highlight.
- ✅ **Do** let the row take its type from the row it sits in.
- ❌ **Don't** restate its colour, its underline or its transition where you use it. Both
  declarations would carry the same weight, and which one wins would depend on the order the
  stylesheets happened to load.

### Content rules

- ❌ **Don't** invent a character limit for a label. Limits are owed by design.
- ❌ **Don't** pick a source for the mark before the label yet. Three are sanctioned, a custom
  upload, a prefixed library glyph and an emoji, and none has been chosen.

## Open items

| Question | Owner |
|---|---|
| Which source wins for the mark before a label: a custom upload, a prefixed library glyph, or an emoji? An emoji in a nav label carries real assistive-technology and cross-platform consequences | Client |
`,spec:{elements:[{name:"Root, a link or a button",requirement:"required",condition:"A link when a destination is set, a button when it is not."},{name:"Label",requirement:"required"},{name:"Mark before the label",requirement:"optional",condition:"Decorative, in a fixed box."},{name:"Chevron after the label",requirement:"conditional",condition:"Rows that open a panel. A drawing inside the row, never a second control."},{name:"Destination",requirement:"conditional",condition:"Absent on a panel trigger."}],authorability:[{name:"Label",rule:"Authored by the site. Every row needs one; there is no wordless nav item."},{name:"Destination",rule:"Authored. With one the row is a link, without one a button that opens a panel."},{name:"Emphasis",rule:"Authored on at most one row per header. It is a highlight, not the current page."},{name:"Mark",rule:"Optional and authored. Its fixed box means swapping the source never moves the label."},{name:"Label length",rule:"No character limit is set. Keep a label short enough for the row it sits in."},{name:"Opens a panel",rule:"Authored. It says the row has a chevron; whether the panel is open is said by the menu around it."},{name:"Collapsible",rule:"Authored. It adds the tappable full-width box, and it carries the chevron too."},{name:"Type and inline padding",rule:"Fixed by the row it sits in. The component sets no face, size or case."},{name:"Row height",rule:"Fixed by tokens on a collapsible row: its own top and bottom space, and the 40px pointer floor."},{name:"Ink",rule:"Fixed by tokens. The resting ink, the accent and the pressed step are not authorable."}],variants:[{label:"Default",props:{emphasis:"default"}},{label:"Accent",props:{emphasis:"accent"}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"},{key:"active",name:"Pressed",pseudo:"active"}],render:E,interactions:["With a destination it renders a link and navigates. Without one it renders a button and opens a panel.","A link activates on Enter. A button activates on Enter and Space.","Hover moves the ink to the brand accent. It is a colour change, never a ground appearing.","An accent row rests at the accent, so hover is a no-op on it and pressed is its only change.","There is no disabled state. A destination nobody can reach does not belong in the header.","Props and ARIA pass straight through to the rendered element, last, so the header always wins.","The colour transition is dropped for a reader who has asked for reduced motion.","The row never announces its own state. The header writes aria-expanded and aria-current.","A row the header marks as the current page rests at the accent ink, and draws no rule under itself.","A collapsible row fills its width, reaches the 40px pointer floor, and pins its chevron at the trailing edge.","The chevron turns over when the header reports the section open, so the drawing follows what is announced.","A collapsible row is one control and one tab stop. The chevron is a drawing inside it, never a nested button.","The row draws no ground and no rounded corner. That drawing belongs to Menu item."],accessibility:[{label:"Element choice",text:"The row renders a real link with a destination and a button without one, so a panel trigger stays reachable."},{label:"Keyboard",text:"Native elements do the work: a link activates on Enter, a button on Enter and Space. No key handler is re-implemented."},{label:"Focus",text:"The row draws the shared library focus ring and never removes or replaces it."},{label:"Accessible name",text:"The label is the accessible name. The mark before it is aria-hidden, because the label already says the same thing."},{label:"Host owns the state",text:"aria-expanded, aria-controls and aria-current are written by the header around the row, never by the row itself."},{label:"One control per section",text:"A collapsible row holds no nested button. The chevron is an aria-hidden drawing, so one section is one tab stop."},{label:"Pointer target",text:"A collapsible row reaches the library 40px floor by growing its own box, so adjacent rows never overlap targets."},{label:"Contrast",text:"The resting ink, the accent it hovers to and the pressed step each hold 4.5:1 against the page ground, on every brand."},{label:"Pressed feedback",text:"An accent row shows a perceptible change when pressed, because hover leaves it where it already rests."},{label:"Touch",text:"No hover ink stays behind on the row after a tap on a touch screen."},{label:"Reduced motion",text:"The colour transition is dropped for a reader who has asked their system to reduce motion."}],openItems:[{question:"Which source wins for the mark before a label: an upload, a library glyph, or an emoji?",owner:"Design / Content"}]}}}},o={name:"Default",args:{children:"Best Sellers",href:"/best-sellers",emphasis:"default"},argTypes:h,render:n=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .sb-navitem-bar-row {
          box-sizing: border-box;
          min-height: var(--nav-link-height);
          border-block-end: var(--nav-link-underline-thickness) solid transparent;
          transition: border-block-end-color var(--motion-duration-fast) var(--motion-easing-out-quad);
        }
        .sb-navitem-bar-row:hover,
        .sb-navitem-bar-row:focus-visible,
        .sb-navitem-bar-row[aria-expanded='true'] {
          border-block-end-color: var(--color-accent);
        }
      `}),e.jsxs("div",{style:{...S,...x},children:[e.jsx(t,{className:"sb-navitem-bar-row",href:"/new",children:"New"}),e.jsx(t,{className:"sb-navitem-bar-row",href:"/face",disclosure:!0,children:"Face"}),e.jsx(t,{className:"sb-navitem-bar-row",...n}),e.jsx(t,{className:"sb-navitem-bar-row",emphasis:"accent",href:"/lab",children:"Beauty Lab"})]})]}),parameters:{docs:{description:{story:`Four rows in the type and the box a header bar sets: the brand's strong face, uppercase, at the label size, each row 44px tall. The third row is the one the controls below drive, and the fourth is an accent row beside it so the two rest side by side.

Hover any of them to see the ink move to the accent AND an accent line arrive under the whole item, which is the bar's mark for the row you are on or the panel you have open. The line belongs to the bar rather than to the row: the same component in a drawer panel draws no line, which is why it is set here by the cover rather than by the component. Hold a row to see the pressed step. The accent row is the one to hold: it already rests at the accent, so the press is the only change it has.

**Presets worth looking at.**

- **A panel trigger.** Clear *Destination*. The row becomes a button, which is what a control that only opens a panel has to be. Nothing changes on screen, which is the point: the difference is in what a keyboard and a screen reader can do with it.
- **A row with a menu behind it.** Turn on *Opens a panel*. The chevron appears after the label, the way the second row already draws it, which is how a row with a megamenu tells a reader it opens rather than goes.
- **The authored highlight.** Set *Emphasis* to *Accent* to see the same row rest on the brand colour.

Switch the **Brand** toolbar to see the accent change and the row stay the same row.`}}}},r={name:"In a column",argTypes:h,render:()=>e.jsx("div",{style:{...S,...A,display:"block",maxWidth:280},children:e.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0},children:[e.jsx("li",{children:e.jsx(t,{column:!0,href:"/foundation",children:"All Foundation"})}),e.jsx("li",{children:e.jsx(t,{column:!0,href:"/concealer",icon:"✏️",children:"Concealer"})}),e.jsx("li",{children:e.jsx(t,{column:!0,href:"/powder",children:"Setting Powder"})}),e.jsx("li",{children:e.jsx(t,{column:!0,href:"https://www.revlonprofessional.com",external:!0,children:"Revlon Professional"})})]})}),parameters:{docs:{description:{story:`The same component, in the type and rhythm a menu column sets instead: the body recipe, no case change, a tighter row. The row carries \`column\`, so with no bar to draw the accent underline it draws its own: a hairline the width of the label that grows from the leading edge on hover and on focus, in the same ink as the label.

The middle row carries a mark after its label. The mark sits in a fixed box, so swapping it for a drawing or a library glyph leaves the three labels on the same left edge. The mark is decorative: it is never announced, because the label beside it already says the same thing.

The last row leaves for another tab: \`external\` opens it in a new tab with the right security attributes, draws the library's new-tab arrow after the label, and adds "opens in a new tab" to what a screen reader announces. The rule is the same one Link reads.`}}}},C={width:320,padding:"var(--space-inset-tight)",background:"var(--color-bg-page)"},_=[{label:"Eyes",links:["All Eyes","Eyeliner","Mascara"]},{label:"Lips",links:["All Lips","Lipstick","Lip Liner"]}];function M(){const[n,I]=O.useState("Eyes");return e.jsx("div",{style:C,children:e.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0},children:[_.map(a=>e.jsxs("li",{style:{borderBottom:"var(--border-10) solid var(--color-border-subtle)"},children:[e.jsx(t,{collapsible:!0,className:"sb-navitem-panel-row","aria-expanded":n===a.label,"aria-controls":`sb-navitem-${a.label}`,onClick:()=>I(n===a.label?null:a.label),children:a.label}),e.jsx("ul",{id:`sb-navitem-${a.label}`,hidden:n!==a.label,style:{listStyle:"none",margin:0,padding:"0 0 var(--space-inset-xtight) var(--space-inset-tight)",...A},children:a.links.map(l=>e.jsx("li",{children:e.jsx(t,{column:!0,href:"#",children:l})},l))})]},a.label)),e.jsx("li",{style:{borderBottom:"var(--border-10) solid var(--color-border-subtle)"},children:e.jsx(t,{href:"#",className:"sb-navitem-panel-row",children:"Gifts"})})]})})}const s={name:"Collapsible",argTypes:h,render:()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .sb-navitem-panel-row {
          font-family: var(--typography-label-font-family);
          font-weight: var(--typography-label-font-weight);
          font-size: var(--typography-label-font-size);
          line-height: var(--typography-label-line-height);
          letter-spacing: var(--typography-label-letter-spacing);
          text-transform: var(--typography-label-text-case);
          display: flex;
          width: 100%;
          align-items: center;
          padding-block: var(--space-inset-xtight);
          min-height: var(--target-min);
        }
      `}),e.jsx(M,{})]}),parameters:{docs:{description:{story:`The same row, drawn as sections that open and close. **Eyes** starts open; tap either header to swap.

Three things to look at:

- **The chevron sits at the far right of the row**, not beside the words, so it stays in the same place however long a label gets.
- **It turns over when the section opens**, and only because the panel said the section is open. The drawing follows what a screen reader has already been told.
- **The whole row is one thing to tap**, and it is at least 40px tall, which is the size every tappable thing in this library reaches. The chevron is part of the picture, not a second button beside it.

The last row, **Gifts**, goes somewhere instead of opening, and it is the same component with the same height. That is what lets a panel mix the two without the column reading as two lists.

The rows are set in the **same all-caps treatment the header bar uses**, because that is the panel around them talking, not the component: a section header on a phone and a primary link on a desktop are the same level of the same menu, so they read the same way. The row itself still takes its type from wherever it sits.`}}}},L=[{key:"default",label:"Default",props:{emphasis:"default"},dimension:"emphasis"},{key:"accent",label:"Accent",props:{emphasis:"accent"},dimension:"emphasis"}],d=[{key:"default",label:"Default"},{key:"hover",label:"Hover",pseudo:"hover"},{key:"focus",label:"Focus",pseudo:"focusVisible"},{key:"active",label:"Pressed",pseudo:"active"}],i={name:"State matrix",parameters:{themeShellPadding:!1,pseudo:R(d,{pseudoTarget:".ds-nav-item"}),docs:{description:{story:`Both emphases against everything a pointer and a keyboard can do to the row.

Read down the **Hover** column: both rows land on the accent, which is why the accent row appears not to react. Read across the **Accent** row: its only visible change is **Pressed**, and that is the reason the pressed step exists rather than a gap in the grid.

Read the **Focus** column: one ring, the same one every control in this library draws, and it is not this component's to restyle.

This is a QA tool, not themed product UI: the grid chrome around the cells never re-themes, so the row's real colours stay readable on every brand.`}}},render:()=>e.jsx(N,{rows:L,columns:d,render:E})};function E(n){return e.jsx("span",{style:x,children:e.jsx(t,{href:"/best-sellers",...n,children:"Best Sellers"})})}var c,p,w;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    children: 'Best Sellers',
    href: '/best-sellers',
    emphasis: 'default'
  },
  argTypes: NAV_ITEM_ARG_TYPES,
  render: args => <>
      {/* THE BAR'S OWN BOX AND ITS RULE, because this cover is playing the BAR. The row's ink,
          its hover and its pressed step are the atom's and are already drawn; what a header bar
          adds on top of the atom is a 44px box, an 8px inset and an accent line UNDER THE WHOLE
          ITEM on hover, on focus and while its panel is open. That line is \`.ds-nav__link\`'s in
          Navigation.css and not the atom's, deliberately (the drawer row is the same atom in a
          panel and must not wear it), so a cover that set the bar's TYPE and skipped the bar's
          RULE was showing half a bar: on Revlon Corporate the reviewer saw a nav item with no
          line under it at all.
           EVERY VALUE BELOW IS THE ONE \`.ds-nav__link\` READS, by name: the same \`nav.link.*\`
          hooks, the same accent role, the same motion rungs. Nothing is re-derived here, so the
          cover cannot drift from the header it documents.
           RESERVED TRANSPARENT AT REST, which is why the box never jumps when the line arrives.
           IT STOPS AT THIS COVER, and the state matrix below is left alone on purpose. That grid
          is the ATOM's state model, ink and nothing else, and the line is the bar's: putting it
          in the cells would make the grid a bar's matrix under an atom's title. */}
      <style>{\`
        .sb-navitem-bar-row {
          box-sizing: border-box;
          min-height: var(--nav-link-height);
          border-block-end: var(--nav-link-underline-thickness) solid transparent;
          transition: border-block-end-color var(--motion-duration-fast) var(--motion-easing-out-quad);
        }
        .sb-navitem-bar-row:hover,
        .sb-navitem-bar-row:focus-visible,
        .sb-navitem-bar-row[aria-expanded='true'] {
          border-block-end-color: var(--color-accent);
        }
      \`}</style>
      <div style={{
      ...STAGE,
      ...BAR_TYPE
    }}>
        <NavItem className="sb-navitem-bar-row" href="/new">New</NavItem>
        {/* The bar's megamenu trigger, which is what the second row is on the reference header: it
            keeps its destination AND opens a panel, so it draws the chevron every disclosure row
            draws. Without it this cover would show a header bar in a shape the library no longer
            ships. */}
        <NavItem className="sb-navitem-bar-row" href="/face" disclosure>Face</NavItem>
        <NavItem className="sb-navitem-bar-row" {...args} />
        <NavItem className="sb-navitem-bar-row" emphasis="accent" href="/lab">Beauty Lab</NavItem>
      </div>
    </>,
  parameters: {
    docs: {
      description: {
        story: 'Four rows in the type and the box a header bar sets: the brand\\'s strong face, ' + 'uppercase, at the label size, each row 44px tall. The third row is the one the ' + 'controls below drive, and the fourth is an accent row beside it so the two rest ' + 'side by side.\\n\\n' + 'Hover any of them to see the ink move to the accent AND an accent line arrive under ' + 'the whole item, which is the bar\\'s mark for the row you are on or the panel you ' + 'have open. The line belongs to the bar rather than to the row: the same component ' + 'in a drawer panel draws no line, which is why it is set here by the cover rather ' + 'than by the component. Hold a row to see the pressed step. The accent row is the ' + 'one to hold: it already rests at the accent, so the press is the only change it ' + 'has.\\n\\n' + '**Presets worth looking at.**\\n\\n' + '- **A panel trigger.** Clear *Destination*. The row becomes a button, which is what ' + 'a control that only opens a panel has to be. Nothing changes on screen, which is the ' + 'point: the difference is in what a keyboard and a screen reader can do with it.\\n' + '- **A row with a menu behind it.** Turn on *Opens a panel*. The chevron appears after ' + 'the label, the way the second row already draws it, which is how a row with a megamenu ' + 'tells a reader it opens rather than goes.\\n' + '- **The authored highlight.** Set *Emphasis* to *Accent* to see the same row rest on ' + 'the brand colour.\\n\\n' + 'Switch the **Brand** toolbar to see the accent change and the row stay the same row.'
      }
    }
  }
}`,...(w=(p=o.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var m,b,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'In a column',
  argTypes: NAV_ITEM_ARG_TYPES,
  render: () => <div style={{
    ...STAGE,
    ...COLUMN_TYPE,
    display: 'block',
    maxWidth: 280
  }}>
      <ul style={{
      listStyle: 'none',
      margin: 0,
      padding: 0
    }}>
        <li><NavItem column href="/foundation">All Foundation</NavItem></li>
        <li><NavItem column href="/concealer" icon="✏️">Concealer</NavItem></li>
        <li><NavItem column href="/powder">Setting Powder</NavItem></li>
        <li><NavItem column href="https://www.revlonprofessional.com" external>Revlon Professional</NavItem></li>
      </ul>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The same component, in the type and rhythm a menu column sets instead: the body ' + 'recipe, no case change, a tighter row. The row carries \`column\`, so with no bar to ' + 'draw the accent underline it draws its own: a hairline the width of the label that grows ' + 'from the leading edge on hover and on focus, in the same ink as the label.\\n\\n' + 'The middle row carries a mark after its label. The mark sits in a fixed box, so ' + 'swapping it for a drawing or a library glyph leaves the three labels on the same ' + 'left edge. The mark is decorative: it is never announced, because the label beside ' + 'it already says the same thing.\\n\\n' + 'The last row leaves for another tab: \`external\` opens it in a new tab with the right ' + 'security attributes, draws the library\\'s new-tab arrow after the label, and adds "opens ' + 'in a new tab" to what a screen reader announces. The rule is the same one Link reads.'
      }
    }
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var g,y,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Collapsible',
  argTypes: NAV_ITEM_ARG_TYPES,
  render: () => <>
      {/* The panel's own type and inline space, exactly as a real navigation panel sets them.
          The row inherits the first and the panel owns the second; what the row brings is its
          height, its width and the chevron. */}
      <style>{\`
        .sb-navitem-panel-row {
          font-family: var(--typography-label-font-family);
          font-weight: var(--typography-label-font-weight);
          font-size: var(--typography-label-font-size);
          line-height: var(--typography-label-line-height);
          letter-spacing: var(--typography-label-letter-spacing);
          text-transform: var(--typography-label-text-case);
          display: flex;
          width: 100%;
          align-items: center;
          padding-block: var(--space-inset-xtight);
          min-height: var(--target-min);
        }
      \`}</style>
      <CollapsiblePanel />
    </>,
  parameters: {
    docs: {
      description: {
        story: 'The same row, drawn as sections that open and close. **Eyes** starts open; tap either ' + 'header to swap.\\n\\n' + 'Three things to look at:\\n\\n' + '- **The chevron sits at the far right of the row**, not beside the words, so it stays ' + 'in the same place however long a label gets.\\n' + '- **It turns over when the section opens**, and only because the panel said the ' + 'section is open. The drawing follows what a screen reader has already been told.\\n' + '- **The whole row is one thing to tap**, and it is at least 40px tall, which is the ' + 'size every tappable thing in this library reaches. The chevron is part of the ' + 'picture, not a second button beside it.\\n\\n' + 'The last row, **Gifts**, goes somewhere instead of opening, and it is the same ' + 'component with the same height. That is what lets a panel mix the two without the ' + 'column reading as two lists.\\n\\n' + 'The rows are set in the **same all-caps treatment the header bar uses**, because that ' + 'is the panel around them talking, not the component: a section header on a phone and a ' + 'primary link on a desktop are the same level of the same menu, so they read the same ' + 'way. The row itself still takes its type from wherever it sits.'
      }
    }
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,k,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'State matrix',
  parameters: {
    themeShellPadding: false,
    pseudo: getStateMatrixPseudoParameters(STATE_MATRIX_COLUMNS, {
      pseudoTarget: '.ds-nav-item'
    }),
    docs: {
      description: {
        story: 'Both emphases against everything a pointer and a keyboard can do to the row.\\n\\n' + 'Read down the **Hover** column: both rows land on the accent, which is why the ' + 'accent row appears not to react. Read across the **Accent** row: its only visible ' + 'change is **Pressed**, and that is the reason the pressed step exists rather than a ' + 'gap in the grid.\\n\\n' + 'Read the **Focus** column: one ring, the same one every control in this library ' + 'draws, and it is not this component\\'s to restyle.\\n\\n' + 'This is a QA tool, not themed product UI: the grid chrome around the cells never ' + 're-themes, so the row\\'s real colours stay readable on every brand.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={STATE_MATRIX_ROWS} columns={STATE_MATRIX_COLUMNS} render={renderStateMatrixCell} />
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const U=["Flagship","InAColumn","Collapsible","StateMatrix"];export{s as Collapsible,o as Flagship,r as InAColumn,i as StateMatrix,U as __namedExportsOrder,V as default};
