import{j as e,S as I,g as A}from"./iframe-6dx3hp_4.js";import{I as t,a as E,b as N}from"./IconButton-Btgg2ITq.js";import{a as D}from"./annotationPage-eYx--AWZ.js";import{I as a}from"./Icon-BihOhSWB.js";import{D as p,a as u,e as O}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./newTabMark-TI50-QeA.js";const P={display:"flex",gap:"var(--size-300)",flexWrap:"wrap",alignItems:"center"},S={background:"#1a1a1a",padding:"var(--size-300)",borderRadius:"var(--radius-card, 4px)"},_=["x","search","user","shopping-cart","map-pin"],G={x:"Close (Navigation search dismiss)",search:"Search (Navigation open search)",user:"Account (Navigation utility)","shopping-cart":"Cart (Navigation utility)","map-pin":"Pin (Navigation locator, honest-exception glyph)"},C={variant:{...u("Ghost"),name:"Emphasis",...p({labels:{primary:"Primary",secondary:"Secondary",ghost:"Ghost"},options:N}),description:"How much emphasis the control carries. The same three steps the button has, drawing the same grounds and the same inks. Ghost is the default here rather than Primary, because an icon-only control is usually chrome: a close, a next, a mute."},inverse:{...O("Off"),name:"Inverse",description:"Turn this on when the control lands on a dark or photographic ground. Every style has an inverse, so this crosses the whole set rather than replacing a style. The preview drops onto a dark panel while it is on, because drawing an inverse control on the page colour would document it as broken."},size:{...u("Medium, 44px"),name:"Size",...p({labels:{xs:"Extra small, 32px",sm:"Small, 40px",md:"Medium, 44px",lg:"Large, 48px"},options:E}),description:"Moves the box and the glyph inside it, and nothing else. Ink, ground and radius never change with it. The glyph steps with the box at every rung: 16px on extra small, 20px on small, 24px on medium, 28px on large, the same four sizes the icon scale publishes, one per rung. Hand-refined in Figma and brought into the code from there."},glyph:{...u("Close (Navigation search dismiss)"),name:"Glyph",...p({labels:G,options:_}),description:"What fills the icon slot. IconButton owns the box and the glyph's own box too, but never the SHAPE inside it. This swaps what a real caller would pass as children: a drawing from the registry, always, never a typed character. Every option here is handed over without a size, so switching Size resizes whichever one is showing."},label:{control:!1,table:{disable:!0}},href:{control:!1,table:{disable:!0}},type:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}}},M={variant:"ghost",inverse:!1,size:"md",glyph:"x",label:"Close"};function B({variant:n,inverse:s,size:d,glyph:c,label:o}){return e.jsx("div",{style:s?{display:"inline-flex",...S}:{display:"inline-flex"},children:e.jsx(t,{variant:n,inverse:s,size:d,"aria-label":o,onClick:()=>{},children:e.jsx(a,{name:c,size:null,"aria-hidden":"true"})})})}const X={title:"Atoms/IconButton",component:t,tags:["autodocs"],parameters:{docs:{page:D("IconButton"),toc:{headingSelector:"h2"},description:{component:"The library's one icon-only control: a square box holding a glyph at a pointer target that never drops below 40 by 40 pixels. It carries the same three styles and the same inverse ground the button does, so a wordless action can be as loud or as quiet as the action beside it. Give it a destination and it renders a real link; leave the destination out and it renders a button."}},componentDoc:{usage:`
## When to use

- ✅ **A control whose glyph is the whole label.** Close, open the menu, next slide, play, mute.
- ✅ **A wordless control that goes somewhere**, like the store locator or the cart in a header. Give it a
  destination and it becomes a real link.
- ✅ **Anywhere a control has to stay small and still be tappable.** The pointer target never drops below 40 by
  40, whatever the visible box is.
- ✅ **A wordless action that needs the same weight as the button beside it.** It carries the button's own
  three styles and its inverse ground, so a filled icon button and a filled button are the same decision
  drawn on two shapes.

- ❌ **An action with words.** That is **Button**, which always shows its label.
- ❌ **The glyph itself.** **Icon** draws the shape. This atom owns the box, the target and the name around it.
- ❌ **A choice between options**, like a size or a shade. Those are the option and swatch components, which
  show every choice at once.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Root**, the link or the button | required | Which one renders is decided by the presence of a destination, nothing else. The same rule Button already ratifies |
| **Glyph**, the icon slot | required | The atom owns the box, and that includes the glyph's own box: 16px on extra small, 20px on small, 24px on medium, 28px on large. Each rung hands the glyph its line weight with the box, so the drawn line stays 2px on all four. The SHAPE inside it stays entirely the caller's choice: an **Icon**, an inline \`currentColor\` SVG, or a text character |
| **Accessible name** | **always required, no default** | An icon-only control with no name announces as "button" and nothing else. The atom ships no default on purpose, so every call site is forced to state one |
| **Corner radius** | not authored, inherited | Follows the brand's own button corner. One hook, one semantic role, no shape prop |
| **Style and ground**, the two axes | optional, defaults to the one with no ground | Which of the three styles it draws, and whether it lands on the page or on a dark ground. Both read the button's own roles, so neither is a colour this component chose |

- **Tokens own the box.** Shape, ink, ground and radius. None of it is per-instance styling.
- **The caller owns three things:** the glyph, the accessible name, and the destination when there is one.
- **The pointer target never drops below 40 by 40**, the library's floor, dropped from 44 by 44.
  That is a deliberate trade, a smaller guaranteed target so neighbouring controls stop
  overlapping, not an accessibility gain. Extra small's visible box is
  32px, and an invisible hit-slop expands its target to 40px without moving a pixel. Small's own box
  already sits exactly on that floor, so the identical hit-slop rule resolves to zero growth there and
  is kept in place as a guard rather than deleted. Medium and large clear the floor outright, with no
  hit-slop at all. This holds at any box size, which is why the smallest rung's number is a
  question of how it looks and never a question of whether it can be tapped.

### Variants

**Three axes: style, ground, size.** An icon button carries primary, secondary and inverse, the same set the
button carries. The style and the ground are the button's own two, with the button's own names and the
button's own colours:

- **Primary.** The filled action. Brand ground, brand ink, the loudest step.
- **Secondary.** A quiet ground with an outline. The outline is what keeps it legible on the brands where the
  surface and the page are nearly the same colour.
- **Ghost, the default.** No ground and no edge at rest, on the page's full ink, with a ground arriving behind
  the glyph on hover. This is the pattern the atom shipped with, renamed rather than replaced.
- **Inverse**, crossing all three, for a dark or photographic ground.

**Not one new colour exists in that set.** Every ground, ink, edge, hover, pressed and focus ring reads the
same role the button already paints for the same style in the same state, and the match is enforced in code
across all 21 brands. An icon button and a button in the same row can never drift
apart per brand: they are one action system drawn on two shapes.

**There is no divergence left, in any cell.** The ghost used to rest on a muted ink here where the button
rested on the full one, on the reasoning that an icon-only control is usually chrome and should stay quiet
until a pointer arrives. That is no longer how the glyph sits: it rests dark, on the same ink the button's
ghost has always rested on, so the two components now paint the same role for every style in every state with
no exemption at all. The trade is worth stating plainly, because it is what the change costs: hover no longer
darkens the glyph, so a hover reads entirely through the ground that appears behind it.

**The ink is the darker of the two the page ladder offers.** There is no rung between them, so "darker" has
exactly one answer here rather than a range to tune. Measured against the page and the field grounds across
all 21 brands, the resting glyph runs from 5.49:1 at worst to 21:1 at best, comfortably clear of the 3:1 a
non-text control is held to, and better on every brand than the ink it replaces.

**Size is four rungs, and it moves the box and the glyph inside it.** One pattern, with variables for size
and never for shape. Three of the four were earned by a cluster of real call sites that already agreed on the
same box before this atom existed. The fourth was decided:

- **Extra small, 32px box, 16px glyph.** The honest version is worth stating: this rung was not earned by
  a cluster. The shade rail's prev and next arrows are the control that needed it, because 40px reads far too
  big beside the swatch chips they sit between. Other controls wear it too: the search field's well control,
  the password field's eye, the breadcrumb's hidden-levels button, and the video controls' pause and mute
  pair, on MediaFrame and on Hero. Every other rung here is a measurement; this one is a decision. It was
  first set at 24px and re-drawn at 32px by hand in Figma.
- **Small, 40px box, 20px glyph.** Five hosts agree: the nav's utility buttons and hamburger, PDP Hero's
  gallery arrows, Pagination's arrows, the footer's social links and the table's scroll arrows.
- **Medium, 44px box, 24px glyph, the default.** Two hosts agree: the Drawer's close control and the close
  control on the full-screen media view.
- **Large, 48px box, 28px glyph.** Two call sites agree: MediaFrame's embed play control and the
  carousel's rail arrows.

**Extra small is not a tap-target fix, in either direction.** The 40 by 40 target (44 by 44 before the floor
changed) holds at every box size, so a smaller box would have been just as tappable and this one
is no more so. The number is about how the row reads.

**The glyph follows the box.** When the glyph was the caller's decision and the box was the atom's, the
library ended up drawing a big icon in the small button and a small icon in the large one: one page carried a
24px glyph inside a 40px box and a 16px glyph inside a 48px one. One step now belongs to each rung, so the
pair is decided once instead of twelve times.

**The ladder is a uniform step, and that came out of Figma rather than out of code.** The first version of
this rule read 16 / 24 / 24: it asked in words for a step at every size and gave two, and the page carried
the mismatch as an open question. It was answered by refining the ruler **by hand in the Figma
library** and bringing Storybook up to it, which is the one time on this page that the
design file leads and the code follows. The result is 16 / 20 / 24 / 28: one step per rung, no plateau, and
exactly the four sizes the **Icon** scale publishes, small, medium, large and extra large, one per button
rung. That last part is the useful bit for a caller: whatever rung the button is on, the glyph it hands over
is a size the icon scale already had a name for.

**The rung hands over the line weight as well as the box.** A glyph is drawn
on a 24 grid, so the same declared stroke paints thinner the smaller the box gets. Each rung states the
correction next to the box it sets, so the line a shopper sees is 2px on all four rungs: a 16px glyph and a 28px
glyph are the same weight, and a page of controls reads as one hand. The correction is arithmetic, not a
brand decision, so there is nothing to pick here. The weight itself is still one token for the whole library.

**One number in that ladder is still a question.** The Figma file disagrees with itself about the **small**
glyph: the hand-written size ruler captions it 20px, and most of the small variants in the set still draw
16px. 20 is documented here because the caption is the specification and because it is the only value that
makes the ladder uniform, but it is a choice between two rungs, and it is listed under Open items.

**Adopting it is one line per call site.** A glyph that states its own size still wins, because an inline
size beats a stylesheet everywhere on the web. Hand the size decision back (an **Icon** with no size, and no
size rule in the host's own stylesheet) and the button decides it. Every rung's step is now a size the icon
scale can also name, so this is a convention rather than a necessity. It was a necessity on extra small
while that rung handed over 12px, which no icon rung could name.

**One place has adopted it so far**, the shade rail. It went first for two
reasons worth knowing before you pick the next one: it is the only place with no size rule of its own to
delete, and it landed on extra small, where a call site could not have named the size anyway. Eleven still
size their glyph themselves, and each is its own small pass.

**Every rung is a square, always**, at a fixed 1:1 proportion. No adopter's own CSS flattens the box it is
handed.

**There is still no shape axis.** No circular or pill prop, no elevation, no second radius, and a size rung
may not repaint while a style may not touch the box. Real call sites wear a circle, a shadow and a
hand-painted fill, and every one of them **converges when it adopts the atom** rather than buying itself a
variant. A fill and a dark ground are reachable through the shared styles above, so a host that needs one
asks for the system's answer instead of drawing its own.

**The corner is the one thing brand geometry still decides**, and it is not a shape prop. It reads the same
semantic role Button's own corner reads, so it draws a true circle on a pill-button brand and a
barely-rounded square on a flat-corner brand. Brand-authored data through one token, with nothing here
choosing it.

### Link or action

**One component, two different HTML elements, decided by one thing: whether a destination was supplied.**
Given one it is a real link; given none it is the button this atom has always been. The link keeps every
native affordance a click handler cannot reproduce: middle-click, open in a new tab, right-click to copy the
link.

Three Navigation utilities (Store locator, My account and Cart) once could not compose this atom for exactly
that reason and stayed hand-painted anchors instead, the library's one honest, documented
exception. It is retired, not patched around: all three now pass a destination straight through, and the CSS
that hand-copied the pattern is deleted.
`,guidance:`
## Behaviors

### States

- **Default.** Whatever the chosen style rests on. Ghost has no fill of its own and draws the page's full ink
  on the ground it is placed on; primary carries the brand fill; secondary carries a quiet ground and an
  outline.
- **Hover.** One step along the same ladder the button walks for that style, and for every style it is the
  ground that moves. Ghost lays a hover ground behind a glyph that stays exactly as dark as it was; primary
  and secondary step their ground one rung. No hue change in any of them, and no ink change either: hover
  intensifies what is already there.
- **Hover on touch.** Hover needs a pointer that can hover, so a tap shows nothing on the way in. Every hover
  here sits behind a pointer query, the same fence the button carries, so a tap on a touch screen never leaves
  the hover ground showing.
- **Pressed.** Two things happen at once and they answer different halves of the question. The control scales
  down very slightly while it is held, the same press the button and the shade chip draw, from the one value
  the whole library shares. And every style presses one rung further along the direction its hover took, which
  is the rung the button presses onto for the same style. The size change is the half that needs no surface to
  work on: ghost has no ground of its own, so on a photograph or inside a dialog the colour step can be the
  quietest thing on screen while the movement still reads. The glyph does not change colour on the way down,
  and it no longer needs to. It used to, and the reason is worth keeping: pressing without hovering is a real
  path, through the keyboard and through a tap, and the old quiet ink on the pressed ground measured 2.73 to 1
  on one brand, under the 3 to 1 floor a non-text control has to clear. The control rests on the dark ink now,
  so that pairing cannot happen from any route. Measured across the 21 brands on the ground it presses onto,
  the glyph runs from 4.61 to 1 at worst to 17.06 to 1 at best.
- **Focus.** Ghost and secondary sit on the page, so they take the one ring every component in the library
  shares. Primary and the three inverse combinations name their own ground's ring, exactly as the button
  partitions it. Every rung focuses identically, because size never touches the ring.
- **Disabled.** Five real call sites pass it: the carousel's rail arrows, the shade rail's arrows, the
  pagination arrows and the product gallery's arrows, each at the start or end of its range, and the
  password field's eye, which dims when its field is disabled. The control
  dims on the shared disabled token and takes the not-allowed cursor, which is what the button has always
  drawn, and it keeps its resting paint under a pointer rather than lighting up.

### Interactions

- **Given a destination, it navigates.** The control becomes a real link, and clicking it goes to the page.
- **Given no destination, it acts.** It becomes a button, and whatever the screen wires through it goes
  through untouched.
- **The keyboard differs between the two.** A button answers Enter and Space; a link answers Enter only. The
  browser's own activation model is the whole story here: the atom adds no keyboard handling of its own.
- **The caller supplies the behaviour.** A click handler, a disabled flag, an expanded state, a target: every
  native attribute rides straight onto whichever element renders. The atom never knows what its glyph means or
  where its destination goes.
- **One control submits rather than acts.** SearchBar's submit is the single call site that overrides the
  button's type. That override is meaningless on the link branch and never lands there.

## Rules

- ✅ **Do** pick the style that matches the action beside it. A filled icon button next to a filled button, a
  ghost next to a ghost.
- ❌ **Don't** hand-paint a fill, a circle, a shadow or a dark-ground treatment onto an icon button from a
  host stylesheet. The three styles and the inverse ground cover it. Size is a variable here; shape is not.

- ✅ **Do** turn on Inverse when the control lands on a dark panel or a photograph.
- ❌ **Don't** put a ghost on a photograph without a scrim or a flat band behind it. A transparent control
  cannot prove its contrast against an image, which is the same condition the button's ghost carries.

- ✅ **Do** pick a size from the four published rungs.
- ❌ **Don't** invent a fifth for a control that does not fit one. Three of the four are backed by several
  real call sites that already agreed on the same box, and the fourth is a decision. One adopter has never
  been enough to mint a rung.

- ✅ **Do** let the button size the glyph. Pass the shape and let the rung decide how big it draws.
- ❌ **Don't** size the glyph at the call site, or in the host's stylesheet. A hand-picked size wins over the
  rung and puts the control back where it was before this rule: a big icon in a small button. It also drops the
  line correction the rung sets, so the glyph draws at the wrong weight as well as the wrong size.

- ✅ **Do** give it a destination for anything that navigates, and let the atom render the link.
- ❌ **Don't** hand-roll a second anchor beside this atom to keep native link behaviour. That was the honest
  exception, and Navigation's own migration off it is the reference case for retiring it elsewhere too.

- ✅ **Do** name every instance, in the caller's own words for what the control does or where it goes: "Close",
  "Open menu", "Store locator".
- ❌ **Don't** rely on the glyph to carry the name. It is decorative by default, so an unnamed control
  announces as "button" and nothing else.
- ❌ **Don't** expect disabled to be visible. Nothing paints it today, so a disabled control reads as an
  ordinary one until it fails to respond.

### Content rules

- ✅ **Do** write the accessible name at the call site. The atom ships no default, on purpose: a default would
  let a caller ship an unnamed control while the panel still looked labelled.
- ❌ **Don't** write a generic name. "Button", "Icon" and "Click here" tell a screen-reader user nothing.

## Open items

| Question | Owner |
|---|---|
| The Figma library disagrees with itself about the **small** glyph. Its hand-written size ruler captions the rung "40px box, 20px glyph"; of the thirty small variants in the set, twenty-five still draw 16px, four draw 24px, and exactly one draws 20px. 20px is what shipped, since the caption is the specification and it is the only value that makes the ladder uniform, but both numbers are legal rungs of the ruler and the choice is still open for confirmation | Design |
| The Figma library still spells the smallest rung **XSM** where the code publishes **xs**, and the component set's description and the extra-small rung frame's name both still recite the pre-refinement numbers. Cosmetic, and Figma-side | DS team |
| Shrinking the shade rail's arrows to extra small left the prev arrow sharing 14px of invisible tap area with the first shade, and a shade inside its window with a 36px tall tap area instead of the earlier 44px floor. Both numbers predate the floor change, which moved the library's floor to 40px and moved the shade rail's own gap and chip size with it (4px to 8px, 28px to 32px), for exactly this reason: neighbouring targets touching instead of overlapping. Whether the two measurements above still describe the shade rail is that component's own page to re-verify; this atom's geometry did not change, only the shared floor did | Design / DS team |
| Should small's 40px box and medium's 44px default ever converge into one value? That is a tier-level decision, not something this atom decides on its own | Design |
| The press eases in over a fixed timing that is not on the shared motion scale, so the depth of the press can be retuned from the tokens and the speed of it cannot. The scale has no step that fast, and adding one reorders the steps every other animation in the library is already pointing at | DS team |
`,spec:{elements:[{name:"Root, a link or a button",requirement:"required",condition:"A destination decides which one renders. There is no as prop."},{name:"Glyph",requirement:"required",condition:"The caller picks the shape, the rung picks the size."},{name:"Accessible name",requirement:"required",condition:"Always from the caller. No default ships."},{name:"Hit-slop",requirement:"conditional",condition:"On the two rungs at or under the 40px floor, xs and sm. It paints nothing."}],authorability:[{name:"Glyph",rule:"Authored. Pick a registered shape, and the rung decides how big it draws."},{name:"Accessible name",rule:"Authored at the call site, in the caller's own words. No default ships."},{name:"Naming",rule:'Name the action or the destination. "Button", "Icon" and "Click here" say nothing.'},{name:"Emphasis",rule:"Pick primary, secondary or ghost. Match the control standing beside it."},{name:"Inverse",rule:"Authored. Turn it on when the control lands on a dark panel or a photograph."},{name:"Size",rule:"Pick one of the four published rungs. Minting a fifth is a system decision."},{name:"Destination",rule:"Authored. With one it renders a link, without one it renders a button."},{name:"Shape",rule:"Fixed. No hand-painted fill, circle, shadow or dark ground from a host stylesheet."},{name:"Glyph size",rule:"Fixed by the rung. Never sized at the call site or in a host stylesheet."}],variants:[{label:"Primary",props:{variant:"primary"}},{label:"Secondary",props:{variant:"secondary"}},{label:"Ghost",props:{variant:"ghost"}},{label:"Primary + inverse",props:{variant:"primary",inverse:!0}},{label:"Secondary + inverse",props:{variant:"secondary",inverse:!0}},{label:"Ghost + inverse",props:{variant:"ghost",inverse:!0}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"},{key:"active",name:"Active",pseudo:"active"},{key:"disabled",name:"Disabled",props:{disabled:!0}}],render:z,interactions:["With a destination it renders a link and navigates. Without one it renders a button and acts.","A button activates on Enter and Space. A link activates on Enter only.","Each rung sizes the glyph and corrects its line, so the drawn stroke is 2px at 16, 20, 24 and 28.","Hover steps the ground and leaves the ink where it is. A pointer query fences it, so a tap cannot hold it.","Pressing steps one rung further along the hover direction, and the ink stays put through both.","Disabled comes from the screen that placed it, stops the control responding, and paints nothing.","One call site overrides the button type to submit. That override never reaches the link branch.","Props and ARIA pass straight through to the rendered element, untouched.","A destination is all a link needs. No second anchor goes beside the atom.","Nothing paints the disabled state today, so it cannot be used to tell a shopper anything."],accessibility:[{label:"Accessible name",text:"Every instance carries a name written at the call site. The glyph is decorative and cannot carry it."},{label:"Keyboard",text:"Native elements do the work: a button activates on Enter and Space, a link on Enter."},{label:"Focus",text:"Every combination draws a visible focus ring, and the four on a dark ground name their own instead of inheriting."},{label:"Pointer target",text:"Every rung clears a 40 by 40 target, with the two smallest growing an invisible hit area to reach it."},{label:"Contrast",text:"The glyph holds at least 3:1 against its own ground in every state, including the pressed step, on every brand."},{label:"Ghost on an image",text:"A ghost control over a photograph needs a scrim or a flat band behind it, so its contrast can be proven."},{label:"Disabled",text:"A disabled control is announced as disabled and shows it, so nobody discovers the state by clicking."},{label:"Forced colours",text:"All six style and ground combinations stay visible and distinguishable in a forced colours mode."}],openItems:[{question:"Small's 20px is the open one: Figma captions 20, most variants draw 16.",owner:"Design"},{question:"The shade rail shrank to extra small and two invisible targets shrank with it. That predates the floor change, and its own page owns re-checking it.",owner:"DS team"},{question:"Should the 40px small box and the 44px default ever converge into one value?",owner:"Design"},{question:"The press eases in over a fixed timing that is not on the shared motion scale, so its depth can be retuned from the tokens and its speed cannot.",owner:"DS team"}]}}}},r={name:"Default",args:M,argTypes:C,render:n=>e.jsx(B,{...n}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"Switch **Style** to move through the three steps of emphasis, and turn **Inverse** on to read them against a dark ground: a dark swatch appears behind the control, because an inverse control drawn on the page colour documents itself as broken. Switch **Size** to move through the four rungs, and watch the glyph step with the box: 16px on extra small, 20px on small, 24px on medium, 28px on large. Switch **Glyph** to see the box hold a different drawing from the registry; the close mark is one drawing everywhere, never a typed character."}}}},i={display:"flex",flexDirection:"column",alignItems:"center",gap:8,"--icon-button-seat-margin":"0"},h={name:"Sizes",parameters:{docs:{description:{story:"The four rungs side by side, which the one-at-a-time control above cannot show. Three of them are backed by several real call sites that already agreed on the same box before this atom existed. The fourth, **extra small**, exists for the shade rail's prev and next arrows, because 40px is too big beside a 28px swatch chip. The visible box grows and the glyph grows with it, 16px on extra small, 20px on small, 24px on medium and 28px on large; the pattern underneath never changes. Read them as a ladder: every rung is one step above the one before it, with no plateau, and the four glyph sizes are exactly the four the icon scale publishes. None of the four glyphs here states a size, on purpose: the rung is the only thing deciding, which is the only way this page can demonstrate the rule instead of describing it. They are drawn in the **secondary** style, also on purpose: the ground and the outline are what make the box measurable, and the default ghost draws neither at rest. Size is documented here rather than in the state matrix, because a matrix carries two axes at most and that one already carries tone and state."}}},render:()=>e.jsxs("div",{style:{...P,alignItems:"flex-end"},children:[e.jsxs("div",{style:i,children:[e.jsx(t,{variant:"secondary",size:"xs","aria-label":"Previous shades",children:e.jsx(a,{name:"chevron-left",size:null,"aria-hidden":"true"})}),e.jsx("code",{style:{fontSize:"var(--font-size-small)"},children:"xs: 32px box, 16px glyph"})]}),e.jsxs("div",{style:i,children:[e.jsx(t,{variant:"secondary",size:"sm","aria-label":"Open search",children:e.jsx(a,{name:"search",size:null,"aria-hidden":"true"})}),e.jsx("code",{style:{fontSize:"var(--font-size-small)"},children:"sm: 40px box, 20px glyph"})]}),e.jsxs("div",{style:i,children:[e.jsx(t,{variant:"secondary",size:"md","aria-label":"Close",children:e.jsx(a,{name:"x",size:null,"aria-hidden":"true"})}),e.jsx("code",{style:{fontSize:"var(--font-size-small)"},children:"md: 44px box, 24px glyph (default)"})]}),e.jsxs("div",{style:i,children:[e.jsx(t,{variant:"secondary",size:"lg","aria-label":"Next slides",children:e.jsx(a,{name:"chevron-right",size:null,"aria-hidden":"true"})}),e.jsx("code",{style:{fontSize:"var(--font-size-small)"},children:"lg: 48px box, 28px glyph"})]})]})},R=[{key:"primary",label:"Primary",props:{variant:"primary"},dimension:"emphasis"},{key:"secondary",label:"Secondary",props:{variant:"secondary"},dimension:"emphasis"},{key:"ghost",label:"Ghost (default)",props:{variant:"ghost"},dimension:"emphasis"},{key:"primary-inverse",label:"Primary + inverse",props:{variant:"primary",inverse:!0},dimension:"emphasis"},{key:"secondary-inverse",label:"Secondary + inverse",props:{variant:"secondary",inverse:!0},dimension:"emphasis"},{key:"ghost-inverse",label:"Ghost + inverse",props:{variant:"ghost",inverse:!0},dimension:"emphasis"}],g=[{key:"default",label:"Default"},{key:"hover",label:"Hover",pseudo:"hover"},{key:"focus",label:"Focus",pseudo:"focusVisible"},{key:"active",label:"Active",pseudo:"active"},{key:"disabled",label:"Disabled",props:{disabled:!0},dimension:"state"}];function z({variant:n,inverse:s,size:d,...c}){const o=e.jsx(t,{variant:n,inverse:s,size:d,"aria-label":"Example action",...c,children:e.jsx(a,{name:"x",size:null,"aria-hidden":"true"})});return s?e.jsx("div",{style:S,children:o}):o}const l={name:"State matrix",parameters:{themeShellPadding:!1,pseudo:A(g),docs:{description:{story:"Every style on every ground against every state, in one grid: two axes and no more, tone down the side and state across the top. Reading a column straight down is the fastest way to see that a state behaves consistently across the whole set, which is what having the button's axes is for. Size is not here on purpose, because a third axis makes a grid unreadable: it has its own story, *Sizes*, above. **Hover**, **Focus** and **Active** are frozen instead of needing a live pointer, so all three sit still for a design review or a screenshot. The colours shown are the atom's real CSS, just held open rather than triggered. **Disabled** is a real prop, and its cell is the dimmed control the shared disabled token draws."}}},render:()=>e.jsx(I,{rows:R,columns:g,render:z})};var m,b,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Default',
  args: ICON_BUTTON_DEFAULT_ARGS,
  argTypes: ICON_BUTTON_ARG_TYPES,
  render: args => <ConfigurableIconButton {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'Switch **Style** to move through the three steps of emphasis, and turn **Inverse** on to read them ' + 'against a dark ground: a dark swatch appears behind the control, because an inverse control ' + 'drawn on the page colour documents itself as broken. Switch **Size** to move through the four ' + 'rungs, and watch the glyph step with the box: 16px on extra small, 20px on small, 24px on ' + 'medium, 28px on large. Switch **Glyph** to see the box hold a different drawing from the ' + 'registry; the close mark is one drawing everywhere, never a typed character.'
      }
    }
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,v,f;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: 'The four rungs side by side, which the one-at-a-time control above cannot show. Three of them are ' + 'backed by several real call sites that already agreed on the same box before this atom existed. ' + 'The fourth, **extra small**, exists for the shade rail\\'s prev and next arrows, because 40px is ' + 'too big beside a 28px swatch chip. ' + 'The visible box grows and the glyph grows with it, 16px on extra small, 20px on small, 24px on ' + 'medium and 28px on large; the pattern underneath never changes. Read them as a ladder: every ' + 'rung is one step above the one before it, with no plateau, and the four glyph sizes are exactly ' + 'the four the icon scale publishes. ' + 'None of the four glyphs here states a size, on purpose: the rung is the only thing deciding, ' + 'which is the only way this page can demonstrate the rule instead of describing it. ' + 'They are drawn in the **secondary** ' + 'style, also on purpose: the ground and the outline are what make the box measurable, and the ' + 'default ghost draws neither at rest. Size is documented here rather than in the state matrix, ' + 'because a matrix carries two axes at most and that one already carries tone and state.'
      }
    }
  },
  render: () =>
  // \`flex-end\` rather than ROW's own \`center\`: the four rungs are different heights, and this
  // story is a measurement, so they share a baseline and their captions sit on one line.
  <div style={{
    ...ROW,
    alignItems: 'flex-end'
  }}>
      <div style={SIZE_SAMPLE}>
        <IconButton variant="secondary" size="xs" aria-label="Previous shades">
          <Icon name="chevron-left" size={null} aria-hidden="true" />
        </IconButton>
        <code style={{
        fontSize: 'var(--font-size-small)'
      }}>xs: 32px box, 16px glyph</code>
      </div>
      <div style={SIZE_SAMPLE}>
        <IconButton variant="secondary" size="sm" aria-label="Open search">
          <Icon name="search" size={null} aria-hidden="true" />
        </IconButton>
        <code style={{
        fontSize: 'var(--font-size-small)'
      }}>sm: 40px box, 20px glyph</code>
      </div>
      <div style={SIZE_SAMPLE}>
        <IconButton variant="secondary" size="md" aria-label="Close">
          <Icon name="x" size={null} aria-hidden="true" />
        </IconButton>
        <code style={{
        fontSize: 'var(--font-size-small)'
      }}>md: 44px box, 24px glyph (default)</code>
      </div>
      <div style={SIZE_SAMPLE}>
        <IconButton variant="secondary" size="lg" aria-label="Next slides">
          <Icon name="chevron-right" size={null} aria-hidden="true" />
        </IconButton>
        <code style={{
        fontSize: 'var(--font-size-small)'
      }}>lg: 48px box, 28px glyph</code>
      </div>
    </div>
}`,...(f=(v=h.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,k,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'State matrix',
  parameters: {
    // Flush canvas, same flag Button's own State matrix story sets, see .storybook/preview.jsx.
    themeShellPadding: false,
    pseudo: getStateMatrixPseudoParameters(STATE_MATRIX_COLUMNS),
    docs: {
      description: {
        story: 'Every style on every ground against every state, in one grid: two axes and no more, tone down the ' + 'side and state across the top. Reading a column straight down is ' + 'the fastest way to see that a state behaves consistently across the whole set, which is what ' + 'having the button\\'s axes is for. Size is not here on purpose, because a third axis makes a grid ' + 'unreadable: it has its own story, *Sizes*, above. **Hover**, **Focus** and **Active** are frozen instead of ' + 'needing a live pointer, so all three sit still for a design review or a screenshot. The colours ' + 'shown are the atom\\'s real CSS, just held open rather than triggered. **Disabled** is a real prop, ' + 'and its cell is the dimmed control the shared disabled token draws.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={STATE_MATRIX_ROWS} columns={STATE_MATRIX_COLUMNS} render={renderStateMatrixCell} />
}`,...(T=(k=l.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const Z=["Playground","Sizes","StateMatrix"];export{r as Playground,h as Sizes,l as StateMatrix,Z as __namedExportsOrder,X as default};
