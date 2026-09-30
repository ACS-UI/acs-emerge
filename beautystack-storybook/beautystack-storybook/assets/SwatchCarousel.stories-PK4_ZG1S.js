import{j as s}from"./iframe-6dx3hp_4.js";import{S as d}from"./SwatchCarousel-BPc8GOsx.js";import{a as b}from"./annotationPage-eYx--AWZ.js";import{D as i,a as r}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./popoverPlacement-CK5qQ-ie.js";import"./shadeGroup-Blqfx0Bo.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";const o=[{name:"Really Red",color:"#C8001C"},{name:"Moonlit",src:"/revlon-swatch/colorstay-day-to-night-eyeshadow-quad-moonlit.jpg"},{name:"Certainly Red",color:"#A81030"},{name:"Cherries in the Snow",color:"#C51E56"},{name:"Toast of New York",color:"#7B3F3F"},{name:"Decadent",src:"/revlon-swatch/colorstay-day-to-night-eyeshadow-quad-decadent.jpg"},{name:"Blushing Nude",color:"#C98F7E"},{name:"Primrose",color:"#D98BA0"},{name:"Wine with Everything",color:"#6B2233"},{name:"Black Cherry",color:"#3E1621"}],u=o.slice(0,3),m=Array.from({length:20},(a,e)=>{const t=o[e%o.length];return e<o.length?t:{...t,name:`${t.name} ${Math.floor(e/o.length)+1}`}}),h={card:304,tight:160};function g({width:a,children:e,inverse:t=!1}){return s.jsx("div",{style:{width:a,maxWidth:"100%",background:t?"var(--color-bg-inverse)":void 0},children:e})}const y={inverse:{name:"Inverse",control:"boolean",description:"Light navigation arrows for a dark ground. Shade colours stay unchanged."},rowLength:{...r("Many (20)"),name:"How many shades",...i({labels:{few:"Few (3)",some:"Some (10)",many:"Many (20)"},options:["few","some","many"]}),description:"How many shades the row is handed. One of the two things that decide whether this is a carousel at all: it becomes one when the chips stop fitting, so more shades in the same box eventually tips it over."},size:{...r("32"),name:"Chip size",...i({options:[32,40]}),description:"The diameter of each shade chip, in pixels. It belongs to the chip, not to this row: the product card draws 32 and the product page draws 40. The card drew 28 until the chip and the space between chips moved together, to 32 and 8, so that two neighbouring tap areas meet without crossing."},align:{...r("Left"),name:"Where the chips sit",...i({labels:{start:"Left",center:"Center",end:"Right"},options:["start","center","end"]}),description:"Where the chips sit in the box the row was given, **when the row is not a carousel**. A card that centers everything asks for `Center` so the shades follow the rest of it. Once the row overflows and becomes a carousel this has no effect, on purpose: the two arrows sit on the container's two edges, and an alignment on top of that would pull them out of place. Try **Few (3)** to see it work and **Many (20)** to see it stand aside."},selectedName:{name:"Selected shade",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Really Red"}},description:"Which shade reads as chosen. It is always the screen's, and this component never remembers a selection of its own."},shades:{control:!1,table:{disable:!0}},onSelect:{control:!1,table:{disable:!0}},label:{control:!1,table:{disable:!0}},prevLabel:{control:!1,table:{disable:!0}},nextLabel:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}}},v={inverse:!1,rowLength:"many",size:32,selectedName:"Really Red",align:"start"},T={few:u,some:o,many:m};function k({rowLength:a,size:e,selectedName:t,align:f,inverse:c}){return s.jsx(g,{width:h.card,inverse:c,children:s.jsx(d,{shades:T[a],inverse:c,size:e,align:f,selectedName:t,label:"Shades",prevLabel:"Previous shades",nextLabel:"Next shades",onSelect:()=>{}})})}const _={title:"Molecules/Swatch carousel",component:d,tags:["autodocs"],parameters:{docs:{page:b("SwatchCarousel"),toc:{headingSelector:"h2"},description:{component:"A row of shade chips that stays a plain static row for as long as the shades fit the width it is given, and becomes a carousel only when they stop fitting. It is the shade rail from a product card, on its own."}},componentDoc:{usage:`
## When to use

- ✅ **A row of shade chips**, on a product card or a product page. It stays a plain row while the
  shades fit and turns into a carousel when they stop fitting.
- ✅ **When the screen decides what a shade click means.** Hand it a handler and it forms no
  opinion of its own.
- ✅ **When the screen already knows which shade is chosen.** It reads that, it never remembers it.

- ❌ **Anything about one chip**: its colour, its selection ring, its out-of-stock mark, its
  tooltip. All of that belongs to **Swatch**.
- ❌ **A carousel of cards, images or products.** That is **Carousel**, which is built for panels
  rather than chips.
- ❌ **A choice that is not a shade**, like a size or a finish. Those are the option components,
  which show every choice at once.
- ❌ **A row that has to remember the selection.** This one never does.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Row** | required | A group with a spoken name, so a screen reader says what the chips are for |
| **Chips** | required | Each one is the shared **Swatch** component. Everything about a shade belongs to it, not here |
| **Arrows** | optional, and automatic | Each one is the shared **Icon button**. They appear only when the shades stop fitting the row's own width, sit on the row's two outer edges, and each switches off at its own end |
| **Window** | only on a carousel | The box the chips are seen through. Its own edge fills everything between the two arrows, and the chips inside it sit at least the row's own pitch in from each end, the same small gap that separates any two of them: never flush with an arrow, never a variable hole after the last one, and never close enough to an end for the fade to reach them. It is what makes a step a slide rather than a swap |
| **Edge fade** | only on a carousel | A soft dissolve at each end of the window, so a shade at an end appears to pass behind the arrow instead of being cut off. It lands on the gap and on whatever is passing through it, never on a shade you can click. An end with no shades behind it does not fade |

- **Tokens own the look.** This component owns exactly one of them now: the pitch. The arrow's
  size, corner, ink and ground belong to **Icon button**.
- **The screen owns the shades.** Their colours, their names and whether they are in stock are all
  content. A shade colour is never a brand token: it is product data.

### What this owns, and what it does not

**It owns the window and the two arrows. That is the whole of it.**

- **The chip is Swatch's.** The colour, the ring that shows a shade is chosen, the two-line
  strikeout that marks one out of stock so it reads on a dark shade and a pale one, the name
  tooltip and its own tap target. A row that redrew the chip would be a second Swatch with its own
  separate list of bugs.
- **The arrow is Icon button's.** Its box, its corner, its ink, its hover, its
  press and its focus ring all come from that component, in its quiet **ghost** style at the
  **extra small** size, the same style and behaviour every other arrow in this library already
  uses. The chevron's own size comes from there too: this row names no size for
  it at all, so the button's size decides, which is what draws a 16px chevron inside a 32px box.
  This row supplies only what a shade rail knows and an icon button cannot: the spoken names, when
  each arrow is switched off, and the rule that a click inside a card link must not follow it.
- **Extra small exists because of this row**, and it is the only place that uses it. This pair is
  its single reason: forty pixels reads far too big beside a shade chip. The arrow's box is 32px
  and the chip matches it, so the two are the same box. Nothing about that is a
  target-size fix, because the invisible tap area holds at every size, and nothing about it makes a
  smaller arrow something a screen can ask for.
- **What a click means is the screen's.** On a product card, clicking a shade opens the product
  page, which is a ratified line. On a product page, clicking a shade changes the shade being
  shown. Same gesture, two meanings, so this component takes a handler and forms no opinion.
- **Which shade is selected is the screen's too, always.** This component holds exactly one piece
  of state, which slice of the row is visible, and it will never hold more.

The product card's own brief records that clicking a shade used to change the product image and
that the client had it removed. A row that started remembering its own selection is the first step
back towards that.

### Variants

**Inverse** gives the arrows light ink on a dark ground. Shade colours stay unchanged.
Whether the row needs arrows is measured from the available space.
`,guidance:`
## Behaviors

### States

- **The row has none.** It is a container.
- **The chips have their own**, and they belong to **Swatch**: resting, chosen, out of stock,
  hovered, focused. This component neither adds to them nor overrides them.
- **Arrow, resting.** A quiet chevron on no ground at all. It is the shared **Icon button** in its
  ghost style, so it looks like every other arrow in the library rather than like this row's own
  invention.
- **Arrow, hover.** The shared hover ground appears behind it and the chevron darkens. One change,
  on the same ramp, no colour flip.
- **Arrow, focus.** The standard ring.
- **Arrow, switched off.** At each end of the row, dimmed with the system's shared disabled value.
- **Arrow, the target you cannot see.** Drawn at 32px, tapped at 40px: 4px of invisible reach on
  every side. The extra area moves nothing and paints nothing, and the icon button guarantees it at
  every one of its sizes.
- **Three numbers keep the targets apart, and they only work together.**
  The invisible reach is **4px on every side**. The shade is **32px**, the same box as
  the arrow beside it, so both wear that same reach. And the space between them is **8px**, which
  is 4 plus 4, exactly enough for two neighbouring targets to meet without ever crossing. Measured
  in the 304px card: **zero overlap** between one shade and the next, and zero
  between the last shade and the arrow after it.
- **The last crossed edge is now clear.** The leading arrow used to sit flush against the first
  shade, so those two reaches crossed by **8px** and the shade won because it is drawn later.
  The window keeps a small gap inside each of its two ends now, and the smallest that gap is ever
  allowed to be is **8px**, which is 4 plus 4: the arrow's reach and the first shade's reach meet
  there without crossing, exactly as two neighbouring shades do. The price is the one that was
  quoted when this was still open, and it is paid: the card windows a shade fewer.
- **The price of the smaller reach, said plainly.** The guaranteed target is 40px, here and everywhere
  else in the library, because that reach is set for the whole system rather than for
  this row. 40px is comfortably above the 24px minimum the accessibility standard sets, and
  it is below the 44px the same standard names as its higher **AAA** bar. So this is not an
  accessibility improvement and it is not written up as one: it is a
  smaller guaranteed target, bought with targets that stop stealing each other's taps. A control
  you can reach but that another control answers for was never a 44px target either.

**Where the numbers stand.** The arrow and the shade are the same box, 32px, with 8px between any
two neighbours and 4px of invisible reach around each, and 8px of clear space kept inside each end
of the window. A product card windows **five** shades of twenty and fills 272px of its 304 doing
it. None of those numbers is chosen: they fall out of one measurement, and **when** a row becomes a
carousel does not move with them.

### Interactions

- **An arrow steps the row by one shade, and the chips slide.** Not by a page, and never past either
  end. The window and both arrows stay exactly where they are while it happens: what moves is the
  chips behind the window, one shade's worth, on the system's standard fast timing and its standard
  ease-out. Nothing bounces.
- **A shade arrives and leaves through a fade.** At each end of the window the chips dissolve over a
  short distance, so a shade coming into view is revealed rather than switched on, and one leaving
  passes behind the arrow rather than being cut in half at a hard line.
- **If you have asked your device for less motion, the step is instant.** The same shades, already
  there, with no slide at all.
- **The arrows only exist when the shades do not fit.** A row with room for all of them has no
  arrows at all, not two switched-off ones, and no window either: every chip is simply drawn.
- **Fitting is measured, not counted.** The row compares the width it was given against the width
  its chips want, so the same twenty shades are a carousel on a product card and the same five are
  a plain row. It re-measures when the window resizes and when its own box changes, which means a
  card grid dropping from four columns to two re-decides on its own.
- **Clicking a chip is passed straight through** to the screen, which decides what it means.
- **A click inside a card link stays inside it.** These rows are drawn inside a whole-card link, so
  the arrows stop the click reaching that link. Otherwise stepping through shades would navigate
  away from the card.
- **The row is one Tab stop, and the arrow keys move inside it.** Tab enters the shades, the
  arrow keys walk them, Home and End reach the two ends, and walking past either end steps the
  window so a shade behind an arrow is still reachable. Enter or Space chooses. Both arrows are
  their own Tab stops, as any button is.
- **The arrows move the window, never the selection.** Stepping the row changes nothing about which
  shade is chosen.

## Rules

- ✅ **Do** hand it a list of shades and a handler, and let it own the window.
- ❌ **Don't** ask it to remember which shade is chosen. That belongs to the screen.
- ❌ **Don't** restyle the chips from outside. That is a fork of the Swatch component, not an
  adoption of it.

- ✅ **Do** give the row and both arrows a spoken name.
- ❌ **Don't** ship it without them. An arrow with no name announces as "button" and nothing else.

- ✅ **Do** re-test the "inside a card link" case after any change. Arrow keys inside a card link
  move between shades and never follow the link.

- ❌ **Don't** restyle the arrows from outside either. They are the shared **Icon button**, and a
  row that repainted them would be a fork of it, exactly as a row that repainted its chips would be
  a fork of **Swatch**.
- ❌ **Don't** ask for a smaller arrow. An icon button size is not something a
  screen can ask for. Three of the four sizes were earned by measuring what the whole library
  already draws, and the fourth was decided for this row. Wanting one is a
  conversation, not a prop.
- ❌ **Don't** give the chevron a size of its own. The button's size decides it, which is the only
  reason a 12px chevron can be drawn at all: no icon size in this library is that small, so
  naming one would draw the wrong glyph and look deliberate.

- ✅ **Do** give the row a real width to live in. The box is half of what decides its shape.
- ❌ **Don't** ask for a fixed number of visible chips. There is no such setting, on purpose: a
  typed window is what drew arrows on a five-chip row inside a card with room for nine.

- ✅ **Do** let the arrows sit on the row's edges, against the chips. That is where the real
  Revlon site puts its own.
- ❌ **Don't** put anything between an arrow and the edge of the row it lives in. The arrow's
  invisible tap area already reaches 2px past that edge, which is deliberate and is why the row
  never clips itself.
- ❌ **Don't** put anything between an arrow and the window either, and don't ask for a gap back.
  The window fills that space on purpose, and the shade it half shows there is the point: it is
  what tells you there is more without spending a whole chip's width saying so. The small clear
  space you can see at each end is inside the window, not between it and the arrow, and it is the
  ground the fade needs so a shade you can click never dissolves.
- ❌ **Don't** replace the edge fade with a fade of the whole row. It is a mask on the window's two
  ends, not transparency on the chips, and a shade that is half faded everywhere is a shade whose
  colour you can no longer trust.

### Content rules

- ✅ **Do** supply every shade from the screen: name, colour, availability. The component invents
  none of them.
- ❌ **Don't** treat a shade colour as a brand token. It is product data, and it stays product data
  on all 21 brands.
- ❌ **Don't** expect default names for the row or the arrows. There are none. The product card
  hard-codes "Previous shades" and "Next shades" today, and this component refuses to inherit that
  as a default, because none of that copy exists in any locale yet.

## Open items

| Question | Owner |
|---|---|
| **A switched-off arrow is quite faint**: a quiet chevron on no ground, dimmed and small. Other carousels in this library hide their dead arrows entirely instead of dimming them; whether a shade rail should do the same is open | Design |
| **A shade name shown as a tooltip is clipped on a carousel row**, and only there. The window has to cut the chips off at its two edges to show a window at all, and a tooltip sits above the chip rather than beside it. Nothing in the library passes a tooltip into a row long enough to be a carousel today, so this is a hole rather than a defect, but a screen that starts doing it will see it | DS team |
| **A half shown shade at the end of the window cannot be clicked.** The chips sit at least the row's own pitch in from each end, and a neighbour peeks into whatever is left over beyond that, dissolving as it goes. The peek is out of the window, so a pointer cannot reach it, which is what the real Revlon rail does with its own off-window shades. A keyboard can: an arrow key at the end of the window steps the window onto it. Whether the fade makes the pointer's limit obvious enough is open, and it is more visible on a product card than it was, because the clear space each end now keeps gives the neighbour more room to show itself in | Design |
| **The row's spoken name, and both arrows'**, in every supported locale. Nothing supplies them today | Content |
| **The chosen shade does not travel to the product page.** The reviewer's own behaviour line says that selecting a swatch links to the product page with that swatch applied. The link happens; the shade does not go with it. The card's handler is given the shade and discards it, so the destination is the product page and not the product page showing that shade | Design |
| **Two stories, one configurable axis.** The reviewer's design note asks for a single configurable example rather than a set. The cover is that example and produces both the arrowed row and the arrowless one from its own controls; the surviving second story crosses a chip size the cover's own control already offers. Whether the page should be the cover alone is a shape question | Design |
`,spec:{elements:[{name:"Row",requirement:"required",condition:"A named group. An empty list renders nothing, never an empty group."},{name:"Chips",requirement:"required",condition:"Each one is the shared Swatch component."},{name:"Arrows",requirement:"conditional",condition:"Only when the chips stop fitting. Two shared Icon buttons on the outer edges."},{name:"Window",requirement:"conditional",condition:"Only on a carousel. A clipping box filling everything between the arrows, keeping a small clear space inside each end."},{name:"Edge fade",requirement:"conditional",condition:"Only at an end with more shades behind it. A mask over the clear space, not transparency on a chip."},{name:"Track",requirement:"conditional",condition:"Only on a carousel. One line of chips, moved by a transform."}],authorability:[{name:"Shades",rule:"The author supplies every shade: its name, its colour or image, and whether it is available."},{name:"Shade colour",rule:"It is product data, never a brand token. A shade that is not one flat colour sends an image."},{name:"Chosen shade",rule:"The screen remembers which shade is chosen. The row never holds that itself."},{name:"Spoken names",rule:"The author names the row and both arrows. The component ships no defaults."},{name:"Row width",rule:"The author gives the row a real width. The box is half of what decides its shape."},{name:"Visible chip count",rule:"Fixed. There is no setting for it, because fitting is measured and not counted."},{name:"Chip look",rule:"Fixed by the shared swatch. Restyling a chip here forks that component."},{name:"Arrow look",rule:"Fixed by the shared icon button, its size included. The chevron takes no size."},{name:"Row spacing",rule:"Fixed. Nothing goes between an arrow and the window, or an arrow and the edge."},{name:"Edge fade",rule:"Fixed to the two ends of the window. The whole row is never faded instead."}],variants:[{label:"More than fit",props:{shades:m,size:32,width:h.card}},{label:"Fewer than fit",props:{shades:u,size:32,width:h.card}},{label:"Same shades, tighter box",props:{shades:o,size:32,width:h.tight}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Arrow hover",pseudo:"hover"},{key:"focus",name:"Arrow focus",pseudo:"focus-visible"}],render:x,interactions:["Fitting is measured, never counted: the width it was given against the width its chips want.","It remeasures on resize and when its own box changes, so a card grid dropping columns re-decides.","An arrow steps the row by one shade and the chips slide. Both arrows and the window stay put.","A shade arrives and leaves through a fade at the end of the window, never through a hard cut.","An end with no shades behind it does not fade, so the first and last shade are never dimmed.","The fade steps out of the way while a chip is focused, so a focus ring is whole at either end.","The step is instant when the device asks for less motion. The same chips, with no slide.","A row with room for every chip draws no arrows and no window, not two switched-off arrows.","A click on a chip passes straight through to the screen, which decides what choosing means.","The arrows stop a click reaching an enclosing card link, so stepping never navigates away.","The row is one Tab stop. The arrow keys walk the shades and step the window at either end.","Stepping moves the window and never the selection, which the screen owns."],accessibility:[{label:"Keyboard",text:"The row is one tab stop: the arrow keys move between shades and step the window at either end. Enter or Space chooses."},{label:"Inside a card link",text:"The arrows stop a click reaching an enclosing card link, so stepping the row never navigates away."},{label:"Off-window chips",text:"A chip outside the window is inert, so it is in neither the tab order nor the tree until an arrow key steps the window to it."},{label:"Accessible name",text:"The row is a named group and each arrow carries the name the screen gives it. Neither name has a default."},{label:"Focus",text:"The edge fade steps out of the way while a chip is focused, so the ring at either end is drawn whole."},{label:"Arrow target",text:"Each arrow presents a 40px pointer target under its 32px box, which the shared icon button guarantees."},{label:"Chip target",text:"A chip presents a 40px target, and the window is deep enough to hold it without clipping."},{label:"Contrast",text:"A ghost arrow has no edge, so its chevron ink alone has to clear 3:1 against the ground behind it."},{label:"Motion",text:"The slide is dropped under a reduced motion preference, so a step lands with the chips already in place."},{label:"Writing direction",text:"A right to left locale steps the row the other way, so the transform has to follow the writing direction."}],openItems:[{question:"Should a switched-off arrow be hidden instead of dimmed? Other carousels in this library hide theirs.",owner:"Design"},{question:"What should a shade name tooltip do on a carousel row? The window has to clip it at its two edges.",owner:"DS team"},{question:"Should the half shown shade at the end of the window be clickable? An arrow key already steps the window onto it.",owner:"Design"},{question:"What are the spoken names for the row and both arrows in every supported locale? Nothing supplies them.",owner:"Content"},{question:"Selecting a shade links to the product page but the shade does not travel: the host's handler is given it and drops it. Should the destination carry it?",owner:"Design"},{question:"The design note asks for one configurable example. The cover is that, and the second story adds a size its control offers. Should the page be the cover alone?",owner:"Design"}]}}}},n={name:"Default",args:v,argTypes:y,render:a=>s.jsx(k,{...a}),parameters:{controls:{sort:"alpha"},docs:{description:{story:`The row with everything a designer can change. The two arrows are the shared **Icon button**, and they sit on the row's two outer edges with the window right up against them and no space in between: hover one and you get that component's own hover, not a local imitation of it. Inside the window a small clear space is kept at each end, so the dissolve at that end lands on the space and never on the edge of a shade you can click. Watch the shade BEYOND each end of the window, which dissolves rather than being cut, so a shade reads as passing behind the arrow. It opens on twenty shades in a product-card-width box, which is a carousel: step it with the arrows and watch the chips SLIDE by exactly one shade while both arrows and the window stay exactly where they are, and while the selection stays put too, because the window and the selection are two different things and this component only owns one of them. Switch **How many shades** to *Few (3)* and the arrows disappear entirely, since a pair of dead arrows says "there is more" when there is not. The row's own width is fixed here, to the product card; the same shades in a tighter 160px box, plain row and carousel side by side, are the Spec tab's "Same shades, tighter box" variant. Change the **Brand** toolbar and the arrows re-theme across all 21 brands. The shades do not, because a shade colour is product content, never a brand token.`}}}};function x({shades:a,size:e,width:t}){return s.jsx("div",{style:{textAlign:"start"},children:s.jsx(g,{width:t,children:s.jsx(d,{shades:a,size:e,label:"Shades",prevLabel:"Previous shades",nextLabel:"Next shades",selectedName:"Really Red",onSelect:()=>{}})})})}var l,w,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Default',
  args: SWATCH_CAROUSEL_DEFAULT_ARGS,
  argTypes: SWATCH_CAROUSEL_ARG_TYPES,
  render: args => <ConfigurableSwatchCarousel {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The row with everything a designer can change. The two arrows are the shared **Icon ' + 'button**, and they sit on the row\\'s two outer edges with the window right up ' + 'against them and no space in between: hover one and you get that ' + 'component\\'s own hover, not a local imitation of it. Inside the window a small clear ' + 'space is kept at each end, so the dissolve at that end lands on the space and never ' + 'on the edge of a shade you can click. Watch the shade BEYOND each end of ' + 'the window, which dissolves rather than being cut, so a shade reads as passing behind ' + 'the arrow. It opens on twenty shades in a ' + 'product-card-width box, which is a carousel: step it with the arrows and watch the ' + 'chips SLIDE by exactly one shade while both arrows and the window stay exactly where ' + 'they are, and while the selection stays put too, because the window and the ' + 'selection are two different things and this component only owns one of them. ' + 'Switch **How many shades** to *Few (3)* and the ' + 'arrows disappear entirely, since a pair of dead arrows says "there is more" when ' + 'there is not. The row\\'s own width is fixed here, to the product card; the same ' + 'shades in a tighter 160px box, plain row and carousel side by side, are the Spec ' + 'tab\\'s "Same shades, tighter box" variant. Change the **Brand** toolbar and the arrows re-theme across all 21 ' + 'brands. The shades do not, because a shade colour is product content, never a brand ' + 'token.'
      }
    }
  }
}`,...(p=(w=n.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};const L=["Playground"];export{n as Playground,L as __namedExportsOrder,_ as default};
