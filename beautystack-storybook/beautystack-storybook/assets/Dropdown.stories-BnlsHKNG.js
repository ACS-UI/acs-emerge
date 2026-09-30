import{j as e,S as b}from"./iframe-6dx3hp_4.js";import{D as o}from"./BrandWordmark-CszUK9Mj.js";import{a as f}from"./annotationPage-eYx--AWZ.js";import{c as h}from"./designerArgTypes-CVo4ohMZ.js";import{G as y}from"./Homepage-BCdkFher.js";import"./preload-helper-C1FmrZbK.js";import"./SearchBar-DwGR_hzY.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./SearchSuggestions-CAczFYXo.js";import"./Placeholder-Ed4iQRc7.js";import"./MenuItem-bBgP9Lwo.js";import"./Button-CiZyClsp.js";import"./Loading-DyIAIYoE.js";/* empty css               */import"./Drawer-CypulVuT.js";import"./useScrollLock-B-psvS0l.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";import"./MediaFrame-CgpnOU1q.js";import"./NavItem-Dq6-KykK.js";import"./Footer-BfocwZBN.js";import"./Hero-BHurgzVJ.js";import"./ContentCard-Cy_xF-W9.js";import"./ProductCard-1ftwzkvg.js";import"./Badge-gItHl2ZN.js";import"./Select-DBrm7KPu.js";import"./FieldRequirement-Dn5H0DsY.js";import"./Price-xMe2P_eJ.js";import"./StarRating-BT40pja7.js";import"./SwatchCarousel-BPc8GOsx.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./shadeGroup-Blqfx0Bo.js";import"./NewsletterSection-3il-1Xyd.js";import"./Checkbox-C5uneDTR.js";import"./ControlIndicator-DEJX7FyE.js";import"./Input-3DsPWvNA.js";import"./Link-yk_PIpvX.js";const v=`
  .sb-dd-host { display: flex; align-items: center; gap: var(--size-400);
    padding: var(--size-300) var(--size-400); background: var(--color-bg-page); }
      /* The COVER's stage: the single subject sits mid-canvas so both values of Preferred side
         have room to be honoured and read differently. */
      .sb-dd-host--center { justify-content: center; }
  /* The wrap rule, which is seating. */
  .sb-dd-option { white-space: nowrap; }

  /* DOCS CHROME, HELD OFF THE OPEN MENU. Found by looking, on the States grid of this page's
     own Spec view: the rows drew bullets and Storybook's blue link ink.
     WHY IT REACHES THEM. A docs page styles its prose with '.sbdocs-content ul' (0,1,1) and
     '.sbdocs a' (0,1,1), and excludes anything inside a story canvas. A state-matrix cell is
     NOT inside a story canvas, it is rendered straight into the docs content, so a menu of
     real <a> rows opened in a cell is read as prose. The component's own
     '.ds-dropdown__list' (0,1,0) and '.ds-menu-item' (0,1,0) lose that fight by one element.
     WHY IT IS HERE. Popover's grid escapes the same rules with an inline style on its own
     <ul>, which is this page's precedent one component over. This is the same escape written
     as a scoped rule instead, so it stays readable and stays on this page. The general fix,
     holding docs prose off every state-matrix cell rather than off this one component, belongs
     in the docs chrome and is noted for it. Nothing here reaches the product: both selectors
     are anchored on '.sbdocs-content', which exists only on a docs page. */
  .sbdocs-content .ds-dropdown__list { list-style: none; padding: 0; margin: 0; }
  .sbdocs-content .ds-dropdown .ds-menu-item { color: var(--color-text-primary); }
  /* The row gap needs one more class than the rest: the docs rule for a list item is
     (0,3,1) where the rule for a list is (0,1,1), so a two-class answer ties it and the
     winner would be whichever stylesheet the bundler injected last. Four classes decides it
     outright, and the number it restores is 0, which is what a menu draws in the product. */
  .sbdocs-content .bs-spec-view .ds-dropdown .ds-dropdown__list li { margin: 0; }
`;function i(){return e.jsx("style",{children:v})}const m=[{value:"en",label:"English",href:"#en",current:!0},{value:"fr",label:"Francais",href:"#fr"},{value:"es",label:"Espanol",href:"#es"}],s=[{value:"USD",label:"United States (USD $)",href:"#USD",current:!0,media:e.jsx("img",{src:"/flags/us.svg",alt:"",width:"24",height:"24",loading:"lazy"})},{value:"CAD",label:"Canada (CAD $)",href:"#CAD",media:e.jsx("img",{src:"/flags/ca.svg",alt:"",width:"24",height:"24",loading:"lazy"})},{value:"GBP",label:"United Kingdom (GBP £)",href:"#GBP",media:e.jsx("img",{src:"/flags/gb.svg",alt:"",width:"24",height:"24",loading:"lazy"})},{value:"AUD",label:"Australia (AUD $)",href:"#AUD",media:e.jsx("img",{src:"/flags/au.svg",alt:"",width:"24",height:"24",loading:"lazy"})}],T=[{value:"print",label:"Print this page"},{value:"share",label:"Copy link"},{value:"compare",label:"Add to compare"}],k={inverse:{...h("Off"),name:"Inverse",description:"Turn this on when the trigger lands on a dark band. The ghost ink switches to the inverse trio and the preview drops onto the inverse ground while it is on, so the trigger is read on the plane it is actually drawn for."},label:{name:"Trigger words",control:"text",table:{category:"Content",type:{summary:"Short text"},defaultValue:{summary:"EN"}},description:"What the trigger says. Either the current value, like EN or USD, or the name of the menu, like Global Sites. Both are in use and neither is more correct."},triggerLabel:{name:"Spoken name",control:"text",table:{category:"Content",type:{summary:"A sentence, or nothing"},defaultValue:{summary:"Language selector, EN"}},description:"What a screen reader announces for the trigger. Needed when the visible words do not say what they are the value of. EN does not say Language."},showThumb:{...h("On"),name:"Thumbnail",description:"The circular picture before the words, on the trigger and on every row of its menu. Off shows the same selector with the pictures withheld, which is what a host without artwork ships."},thumb:{control:!1,table:{disable:!0}},icon:{control:!1,table:{disable:!0}},trailing:{control:!1,table:{disable:!0}},options:{control:!1,table:{disable:!0}},open:{control:!1,table:{disable:!0}},defaultOpen:{control:!1,table:{disable:!0}},onOpenChange:{control:!1,table:{disable:!0}},onSelect:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}},triggerClassName:{control:!1,table:{disable:!0}},trailingClassName:{control:!1,table:{disable:!0}},panelClassName:{control:!1,table:{disable:!0}},listClassName:{control:!1,table:{disable:!0}},optionClassName:{control:!1,table:{disable:!0}},selectionIndicator:{control:!1,table:{disable:!0}}},me={title:"Molecules/Dropdown",component:o,tags:["autodocs"],parameters:{docs:{page:f("Dropdown"),toc:{headingSelector:"h2, h3"},description:{component:"The site selector: a small menu hung off its own trigger, for language, region, currency and the like. Every row takes the visitor somewhere or does something, so it is never a field and never belongs in a form."}},componentDoc:{usage:`
## When to use

- ✅ **The language, region or currency control** in a header or a footer. This is the control
  those are made of.
- ✅ **A short menu of places to go.** Global sites, a brand switcher, a list of regional stores.
- ✅ **A short menu of things to do.** Print, copy the link, add to compare. A row with nothing
  to go to runs an action instead.
- ✅ **A trigger that has to show the current choice**, so the visitor can read it without
  opening anything.

- ❌ **Anything inside a form.** A value the visitor is choosing **for** something is **Select field**,
  which is a labelled field, announces itself as one, and carries a value. This one announces a
  menu and carries nothing. It is the single most important line on this page.
- ❌ **One action.** A control that does one thing is a **Button**. A menu is for a choice.
- ❌ **A long list to search or filter.** Choosing from hundreds is a field with a filter, which
  is **Select field**, or a whole panel, which is **Filters and sort**.
- ❌ **The header dropdown under a top-level link.** A megamenu is **Navigation**'s own panel:
  it opens on hover, spans the page and holds columns and images.
- ❌ **A panel of prose or controls.** A floating surface that is not a list of rows is
  **Popover**.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Trigger** | **always required** | A button showing where you are or what the menu is. It never submits and it holds no value |
| **Thumbnail** | optional | A picture before the words, cropped to a circle. The flag on a currency trigger |
| **Leading glyph** | optional | A small mark before the words. Never together with a thumbnail |
| **Trailing mark** | **always required** | The mark after the words. It is the caret unless the site supplies its own |
| **Menu** | **always required** | The floating panel, at the menu density, sitting flush under the trigger and named by it rather than by a title of its own |
| **Row** | **always required** | One per destination or action. A destination makes it a link, none makes it a button |
| **Current mark** | optional | The row you are on, shown as a shaded ground and announced as the current one |

### The trigger's slots, named

The trigger has three seats and they are not a style axis: each one is filled by handing the
component something, or left empty by handing it nothing. **A picture and a glyph are refused
together**, because a picture is already the leading mark. Asking for both is an error the
component reports rather than a look it draws, which is the same answer **Menu item** gives for
the same pair.

| Trigger | Thumbnail | Leading glyph | Words | Trailing | Where it ships |
|---|---|---|---|---|---|
| **Words only** | no | no | **yes** | caret | The language selector, EN. Every selector shipped before this |
| **With thumbnail** | **yes** | no | **yes** | caret | The currency selector: flag, code, caret |
| **With leading glyph** | no | **yes** | **yes** | caret | A menu named by a mark as well as by its words |
| **With a supplied trailing mark** | either | either | **yes** | **the site's own** | A trigger whose trailing mark is not a caret |
| **Picture and glyph together** | **yes** | **yes** | **yes** | any | **Refused.** The component reports the error instead of drawing it |

- **The trailing seat is independent of the other two.** It sits on the far side of the words, so
  it never competes with the leading mark and it is filled either way.
- **The caret is the trailing seat's default occupant, not a fixed part.** Left alone it is the
  caret, and the caret is the only thing that turns while the menu is open. A mark the site
  supplies takes the trigger's ink and stays still, because turning is the caret's meaning and
  not the seat's.
- **Both leading seats sit at the pitch Menu item already uses**: a glyph close to the words, a
  picture further off. The trigger and the menu it opens are spaced the same way on purpose.

- **It is built from three components.** The panel is **Popover**, the rows are **Menu item**,
  the caret is **Icon**. None of the three is restyled here, which is what keeps a menu in the
  header and a menu in the footer identical.
- **The site owns the words**, the destinations and the order of the rows.
- **The trigger draws its own look**, a ghost select: the select field's own type, no border
  and no background, its own hover, pressed and focus, and the gap between the words and the
  caret. The caret takes the trigger's own ink too, so all that still comes from the place it
  sits is the ink the ghost itself rests on, plain or the inverse plane a dark band opts into.
- **The panel and the row are surfaces this file never paints.** The panel's ground, hairline,
  shadow and corner belong to Popover; the row's ground, corner and hover wash belong to Menu
  item.

### Not a variant: what the row is made of

There is no style axis here. The one thing that changes between rows is whether a row has
somewhere to go, and that is data rather than a setting: give a row a destination and it becomes
a real link, leave it out and it becomes a button that runs an action.
`,guidance:`
## Behaviors

### States

- **Closed.** The trigger alone, with the caret pointing down. The menu is not merely hidden, it
  is unreachable: nothing inside a closed menu can be tabbed to.
- **Open.** The panel sits flush under the trigger, on the floating surface's own paper with the
  tall corner, and the caret has turned. Flush means the gap between a panel and the control
  that opened it is zero, so the two read as one surface.
- **Flipped.** When there is no room below, the panel opens above the trigger instead. A footer
  control lives at the bottom of the page, which is the case this exists for.
- **The current row** carries a shaded ground for as long as it is not the row under the pointer.
- **The trigger's own hover, pressed and focus** are the atom's, the same ghost
  ground Icon button draws for the same states. Point at a trigger, click it or tab to it to see
  them, they read on the control itself rather than in a frozen grid.
- **The caret's ink is the trigger's own**, currentColor. It steps with
  whatever ink the trigger states in every one of those states, muted no longer.

### Interactions

- **Click the trigger to open**, click it again to close.
- **Choosing a row closes the menu first**, then does what the row does. A menu left open over
  the page it just loaded is the thing this prevents.
- **A row with a destination navigates** like any link: middle-click, open in a new tab and copy
  link all behave the way a browser makes them behave.
- **Enter or Space on the trigger opens it**, and opening puts the keyboard on a row: the row the
  visitor is on when there is one, the first row when there is not. Nobody has to hunt for the
  list they just opened.
- **The arrow keys walk the rows.** Down and up move one row and wrap around the ends, Home jumps
  to the first row and End to the last. Enter follows the row the keyboard is on.
- **The open menu is one stop in the tab order.** Tab leaves it and lands on whatever comes after
  the trigger, Shift+Tab leaves it and lands on whatever comes before, and the menu closes behind
  you either way. There is no trap and no scroll lock, because the page behind is still live, and
  focus is not pulled back to the trigger: you keep the place you tabbed to.
- **Escape closes it** and puts focus back on the trigger.
- **A click anywhere outside** the trigger and the menu closes it.
- **Opening a menu of links and opening a field look alike now, and mean different things.** This
  panel points the keyboard at the row you are on because that is where walking should start;
  **Select field** is a field carrying a value, so it opens with the current choice ringed and the
  cursor on it, and it announces that choice as the value it holds. This one never does.
- **Motion is suppressed** for anyone who has asked their system to reduce it.

## Rules

- ❌ **Don't** put this in a form. That is the one rule this component exists under. A value
  chosen for a field is **Select field**.
- ❌ **Don't** ask it to announce itself as a list of options. A link that says "selected" is a
  lie to anybody using a screen reader.
- ✅ **Do** give every row either a destination or an action. One or the other, always.
- ✅ **Do** mark the row the visitor is on, so the trigger and the menu say the same thing.
- ❌ **Don't** restate the panel's ground, corner, shadow or inset where you use it. They belong
  to the floating surface, and a second declaration would race the first.
- ❌ **Don't** put a border, a background or a text-transform on the trigger. The ghost look and
  the hand-typed case are both settled: EN and USD render exactly as the data writes them.
- ✅ **Do** let the trigger draw its own look. Its type, its padding, its corner, its hover,
  pressed and focus and its caret's ink are all the atom's own. Only the ink
  the ghost itself rests on still comes from the place it sits.
- ❌ **Don't** paint the caret. The trailing seat takes the trigger's own ink, currentColor, and
  so does anything else put in it.
- ❌ **Don't** put a picture and a glyph on one trigger. A picture already leads, so a glyph
  beside it is a second leading mark. The component reports this rather than drawing it.
- ✅ **Do** leave the trailing mark alone unless there is a reason. The caret is what tells a
  visitor the words open something, and a mark that replaces it takes that job on.
- ❌ **Don't** build the trigger out of **Button**. It is this component's own control: it rests
  flush, it inherits its ink from the band it sits on, and it is the thing the menu measures
  itself against.
- ❌ **Don't** put a search box, a field or a form row inside the menu. A menu is rows.
- ❌ **Don't** use it when there is only one thing to choose. One choice is a link or a button.

### Content rules

- ✅ **Do** keep a row's words to the name of the place or the action. A row is not a sentence.
- ℹ️ **The currency rows on this page are a demonstration.** The reference site publishes no
  currency selector, so there is nothing to harvest and these four are here to show the anatomy.
  The language and Global Sites rows are the shipped ones.
- ❌ **Don't** abbreviate a language, region or currency name **on a row** to save width. The
  panel grows to its widest row on purpose, up to the reading measure or the width of the screen,
  whichever is smaller.
- ✅ **Do** abbreviate **on the trigger**. It shows the short code, the row shows the name:
  **CAD** on the trigger, *Canada (CAD $)* on the row it stands for. The trigger sits in a
  cluster where width is shared; a row has the menu to itself.
- ✅ **Do** give the trigger a spoken name when its visible words are a code. EN does not say
  Language.
- ✅ **Do** write a code label, EN or USD, in the capitals it is spoken in, typed by hand. The
  trigger applies no case transform, so whatever the label's text says is what renders.

## Open items

| Question | Owner |
|---|---|
| **Should the trigger show the current value, or the name of the menu?** The header shows EN and USD, the footer shows Global Sites. Both are on the reference site, so both are supported, and nothing says which one a new consumer should pick | Design / Client |
| **Should an action row look different from a destination row?** Nothing ships an action row yet. The difference matters the first time a menu mixes the two, because one takes you away and the other does not | Design |
`,spec:{elements:[{name:"Trigger",requirement:"required",condition:"A button that never submits. It has no name and no value."},{name:"Thumbnail",requirement:"conditional",condition:"When the trigger is handed a picture. Cropped to a circle. Never with a glyph."},{name:"Leading glyph",requirement:"conditional",condition:"When the trigger is handed a mark. Never with a picture: the pair throws."},{name:"Trailing mark",requirement:"required",condition:"A 20px chevron by default, turning 180 degrees while open. A supplied mark does not turn."},{name:"Menu",requirement:"required",condition:"Floating panel at menu density, flush under the trigger, inert while closed."},{name:"Row",requirement:"required",condition:"A destination makes it a link. No destination makes it a button."},{name:"Current mark",requirement:"conditional",condition:"When a row is the one you are on. Shaded, and announced as current."}],authorability:[{name:"Row label",rule:"The author writes it: the name of a place or an action, never a sentence."},{name:"Row target",rule:"Every row needs a destination or an action. One or the other, always."},{name:"Row order",rule:"The author sets how many rows there are and the order they sit in."},{name:"Trigger label",rule:"The author writes it: either the current value, or the name of the menu."},{name:"Trigger length",rule:"Short. The trigger takes the code, the row it stands for takes the name."},{name:"Currency rows here",rule:"A demonstration. The reference site publishes no currency selector."},{name:"Letter case",rule:"Type a code label in the caps it is spoken in. Nothing transforms the case."},{name:"Trigger picture",rule:"The author supplies it, or none. Cropped to a circle. Never with a glyph."},{name:"Trigger glyph",rule:"The author supplies it, or none. Never with a picture: the pair is refused."},{name:"Trailing mark",rule:"The author may supply one. Left alone it is the caret, and only a caret turns."},{name:"Trigger look",rule:"Fixed: the type, border, background, padding, corner and every state."},{name:"Caret ink",rule:"Fixed. The trailing seat takes the trigger ink, so it is never painted here."},{name:"Panel surface",rule:"Fixed by the floating panel: its ground, corner, shadow and inset."}],variants:[{label:"Destinations",props:{kind:"links"}},{label:"Actions",props:{kind:"actions"}}],states:[{key:"closed",name:"Closed"},{key:"open",name:"Open",props:{open:!0}}],render:D,interactions:["Clicking the trigger opens the menu, and clicking it again closes it.","Enter or Space on the trigger opens the menu, however it was reached.","Opening puts the keyboard on the current row, or on the first row when none is current.","The down and up arrows walk the rows and wrap around the ends.","Home jumps to the first row and End to the last.","Choosing a row closes the menu first, then runs whatever the row does.","A row with a destination navigates. A row without one runs an action.","Escape closes the menu and focus goes back to the trigger.","Clicking anywhere outside the trigger and the menu closes it.","Hovering, pressing or focusing the trigger grounds it, the same ghost states Icon button draws.","The open menu is one stop in the tab order: Tab leaves it and lands after the trigger.","Shift+Tab leaves it the same way and lands before the trigger.","The menu closes as focus leaves it, and the caret keeps the place it tabbed to. There is no focus trap.","The menu opens above the trigger when there is no room below it.","A closed menu is inert, so none of its rows can be reached by keyboard.","A field or a search box never goes in the menu. A menu is rows."],accessibility:[{label:"Not a form control",text:"It renders a button and links only, never a field, and it can never be given a listbox role."},{label:"Trigger wiring",text:"The trigger states its expanded state, the kind of popup it opens and the id of the panel it opens."},{label:"Accessible name",text:"The trigger words are its accessible name, and the menu is named by its trigger."},{label:"Spoken name",text:"A trigger whose visible words are a code, EN or USD, carries a spoken name that says what it selects."},{label:"Unique ids",text:"Every instance derives its own ids, so two selectors on one page never cross wires."},{label:"Keyboard",text:"Enter or Space opens the menu, the arrows walk the rows, Home and End jump to its ends, and every row activates the way the browser makes it."},{label:"Focus",text:"Opening moves focus to the current row, or to the first row when none is current, and Escape closes the menu and puts focus back on the trigger."},{label:"One tab stop",text:"The open menu holds one place in the tab order: Tab leaves it for the control after the trigger, Shift+Tab for the one before it, and it closes behind you."},{label:"Closed menu",text:"A closed menu is inert, so none of its rows can be reached by keyboard or read out."},{label:"Current row",text:"The row the visitor is on is announced as the current one, not shaded and nothing else."},{label:"Motion",text:"The caret turn is suppressed for anyone who has asked their system to reduce motion."}],openItems:[{question:"Does the trigger show the current value, or the name of the menu? Both shapes are in use.",owner:"Design / Product"},{question:"Should an action row look different from a destination row? Nothing ships an action row yet, so the difference is untested.",owner:"Design"}]}}}},n={name:"Default",args:{label:"USD",triggerLabel:"Currency selector, USD",showThumb:!0,inverse:!1},argTypes:k,render:t=>e.jsxs("div",{className:"sb-dd-host sb-dd-host--center",style:t.inverse?{background:"var(--color-bg-inverse)",color:"var(--color-text-inverse)"}:void 0,children:[e.jsx(i,{}),e.jsx(o,{...t,thumb:t.showThumb?e.jsx("img",{src:"/flags/us.svg",alt:"",width:"24",height:"24"}):void 0,options:t.showThumb?s:s.map(({media:a,...w})=>w),optionClassName:"sb-dd-option"})]}),parameters:{docs:{description:{story:`One selector under the controls. This is the currency composition: a circular flag, the short code and the caret, and every row of its menu leads with the same circle at the same size out of the same seat, cropped rather than letterboxed. Switch **Thumbnail** off and it is the same selector with the pictures withheld, which is what a host without artwork ships. The flags are decorative, so a screen reader hears the words and not the picture.

Open it: the current row carries a shaded ground, and it is announced as the current one as well as drawn. The two label shapes in use, the current value and the menu's own name, sit side by side on the **Variations** story.

**Worth trying.**

- **Choose a row.** The menu closes before anything else happens.
- **Open it from the keyboard.** Tab to the trigger, press Enter or Space, and the keyboard lands on the row you are on. The arrows walk the rows and wrap, Home and End jump to the ends, and one Tab takes you out of the menu and on to the next control with the menu closing behind you.
- **Click outside it, or press Escape.** Both close it, and Escape puts focus back on the trigger.
- **Hover a trigger, or tab to one.** The ground and the ink step, and the caret ink steps with them.
- **Squeeze the window.** The side the menu hangs from is not a choice: it aligns left, and when an edge would cut the panel it slides inside on its own, flipping above the trigger when there is no room below.

Switch **Inverse** on to stand the trigger on a dark band; the stage drops onto the inverse ground while it is on, and the caret ink follows the same trio.

Switch the **Brand** toolbar to see it re-theme and stay the same control.`}}}},S=[{label:"Trigger"}],A=[{key:"language",label:"Language",props:{kind:"language"},dimension:"composition"},{key:"currency",label:"Currency",props:{kind:"currency"},dimension:"composition"},{key:"global-sites",label:"Global Sites",props:{kind:"global-sites"},dimension:"composition"}];function x({kind:t}){return t==="currency"?e.jsx(o,{label:"USD",thumb:e.jsx("img",{src:"/flags/us.svg",alt:"",width:"24",height:"24"}),triggerLabel:"Currency selector, USD",options:s,optionClassName:"sb-dd-option"}):t==="global-sites"?e.jsx(o,{label:"Global Sites",options:y,optionClassName:"sb-dd-option"}):e.jsx(o,{label:"EN",triggerLabel:"Language selector, EN",options:m,optionClassName:"sb-dd-option"})}const r={name:"Variations",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsx(b,{rows:S,columns:A,render:x})]}),parameters:{docs:{description:{story:`The three compositions in use, side by side in one matrix: the language selector and the currency selector show the current value, and Global Sites names the menu instead, because a list of global sites has no current row until a site says which one it is on.

Global Sites carries the shipped list, thirteen regions from the live footer, longest row included. When space is limited a long label wraps onto a second line rather than truncating; with room, the menu simply grows to fit it.`}}}},E={width:220,display:"flex",alignItems:"flex-start"},C=180;function D({kind:t="links",open:a}){return e.jsxs("div",{style:{...E,height:a?C:void 0},children:[e.jsx(i,{}),e.jsx(o,{label:t==="actions"?"More":"EN",triggerLabel:t==="actions"?"More actions":"Language selector, EN",options:t==="actions"?T:m,defaultOpen:!!a,optionClassName:"sb-dd-option"})]})}var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    label: 'USD',
    triggerLabel: 'Currency selector, USD',
    showThumb: true,
    inverse: false
  },
  argTypes: DROPDOWN_ARG_TYPES,
  render: args => <div className="sb-dd-host sb-dd-host--center" style={args.inverse ? {
    background: 'var(--color-bg-inverse)',
    color: 'var(--color-text-inverse)'
  } : undefined}>
      <HostStyles />
      <Dropdown {...args} thumb={args.showThumb ? <img src="/flags/us.svg" alt="" width="24" height="24" /> : undefined} options={args.showThumb ? CURRENCIES : CURRENCIES.map(({
      media,
      ...row
    }) => row)} optionClassName="sb-dd-option" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'One selector under the controls. This is the currency composition: a circular flag, ' + 'the short code and the caret, and every row of its menu leads with the same circle ' + 'at the same size out of the same seat, cropped rather than letterboxed. Switch ' + '**Thumbnail** off and it is the same selector with the pictures withheld, which is ' + 'what a host without artwork ships. The flags are decorative, so a screen reader ' + 'hears the words and not the picture.\\n\\n' + 'Open it: the current row carries a shaded ground, and it is announced as the ' + 'current one as well as drawn. The two label shapes in use, the current value and ' + 'the menu\\'s own name, sit side by side on the **Variations** story.\\n\\n' + '**Worth trying.**\\n\\n' + '- **Choose a row.** The menu closes before anything else happens.\\n' + '- **Open it from the keyboard.** Tab to the trigger, press Enter or Space, and the ' + 'keyboard lands on the row you are on. The arrows walk the rows and wrap, Home and ' + 'End jump to the ends, and one Tab takes you out of the menu and on to the next ' + 'control with the menu closing behind you.\\n' + '- **Click outside it, or press Escape.** Both close it, and Escape puts focus back ' + 'on the trigger.\\n' + '- **Hover a trigger, or tab to one.** The ground and the ink step, and the caret ink ' + 'steps with them.\\n' + '- **Squeeze the window.** The side the menu hangs from is not a choice: it aligns ' + 'left, and when an edge would cut the panel it slides inside on its own, flipping ' + 'above the trigger when there is no room below.\\n\\n' + 'Switch **Inverse** on to stand the trigger on a dark band; the stage drops onto the ' + 'inverse ground while it is on, and the caret ink follows the same trio.\\n\\n' + 'Switch the **Brand** toolbar to see it re-theme and stay the same control.'
      }
    }
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,g,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Variations',
  render: () => <>
      <HostStyles />
      <StateMatrixGrid rows={VARIATIONS_MATRIX_ROWS} columns={VARIATIONS_MATRIX_COLUMNS} render={renderVariationsCell} />
    </>,
  parameters: {
    docs: {
      description: {
        story: 'The three compositions in use, side by side in one matrix: the language selector and ' + 'the currency selector show the current value, and Global Sites names the menu ' + 'instead, because a list of global sites has no current row until a site says which ' + 'one it is on.\\n\\n' + 'Global Sites carries the shipped list, thirteen regions from the live footer, ' + 'longest row included. When space is limited a long label wraps onto a second line ' + 'rather than truncating; with room, the menu simply ' + 'grows to fit it.'
      }
    }
  }
}`,...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const we=["Flagship","Variations"];export{n as Flagship,r as Variations,we as __namedExportsOrder,me as default};
