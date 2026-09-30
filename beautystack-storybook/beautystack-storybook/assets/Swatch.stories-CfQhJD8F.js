import{j as t,S as H,g as q}from"./iframe-6dx3hp_4.js";import{S as o}from"./Swatch-H9rl2Pji.js";import{a as W}from"./annotationPage-eYx--AWZ.js";import{D as m,a as w,c as i}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Tooltip-DIsL9-Da.js";import"./popoverPlacement-CK5qQ-ie.js";const U={pdpHero:40,productCard:32},L={size:{...w("PDP Hero (40px)"),name:"Size",...m({labels:{pdpHero:"PDP Hero (40px)",productCard:"Product Card (32px)"},options:["pdpHero","productCard"]}),description:"Which of the two agreed sizes to preview. Not a free scale: these are the only two sizes the briefs that govern this atom ask it to draw."},selected:{...i("Off"),name:"Selected",description:"Draw the selected ring, for the shade the shopper currently has active."},outOfStock:{...i("Off"),name:"Out of stock",description:"Draw the strikeout and make the chip inert. The shade stays reachable by keyboard, because nothing is removed from the tab order."},isNew:{...i("Off"),name:"New",description:"Draw the New mark, for a shade that has just arrived. On or off is all there is: the word cannot be changed or replaced, because no other word fits a shade chip."},showTooltip:{...i("On"),name:"Tooltip",description:"Show the shade-name tooltip on hover and focus. PDP Hero always turns this on, and Product Card never does. It is the one thing the two briefs disagree on."},name:{name:"Shade name",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Uncut Ruby (810)"}},description:"The shade's own name. Product content, never authored inside the component. It is also the control's only accessible name."},color:{name:"Shade colour",control:"color",table:{category:"Content",type:{summary:"Colour"},defaultValue:{summary:"#be0f28"}},description:"The chip fill for a shade that is one flat colour. Product content, never a design token. Under a swatch image it is the ground the photo sits on."},fill:{...w("Shade colour"),name:"Fill",...m({labels:{color:"Shade colour",image:"Swatch image"},options:["color","image"]}),description:"What paints the circle. A shade that is one flat colour paints its colour. A shade that is not (an eyeshadow quad, a glitter, a duochrome) paints the swatch image set on its variant in Shopify, cropped to the same circle. The image here is the ColorStay Day to Night quad in Moonlit; every state draws the same over it."},src:{control:!1,table:{disable:!0}},decorative:{control:!1,table:{disable:!0}},onClick:{control:!1,table:{disable:!0}},labels:{control:!1,table:{disable:!0}}},M={size:"pdpHero",selected:!1,outOfStock:!1,isNew:!1,showTooltip:!0,name:"Uncut Ruby (810)",color:"#be0f28",fill:"color"};function j({size:e,selected:a,outOfStock:s,isNew:p,showTooltip:u,name:n,color:E,fill:R}){const _=u?s?`${n} (Unavailable)`:n:void 0;return t.jsx(o,{color:E,src:R==="image"?r[0].src:void 0,name:n,size:U[e],selected:a,outOfStock:s,isNew:p,tooltip:_,onClick:()=>{}})}const K={title:"Atoms/Swatch",component:o,tags:["autodocs"],parameters:{docs:{page:W("Swatch"),toc:{headingSelector:"h2"},description:{component:"The shade chip: a small round button filled with a real shade colour. It wears a ring when it is the active shade, and a strikeout when that shade is out of stock."}},componentDoc:{usage:`
## When to use

- ✅ **Choosing a shade**, inside a component that shows a product's shade line.
- ✅ **Showing which shade is active**, and which shades cannot be bought right now.
- ✅ **At one of the two agreed sizes.** 40px on a product detail page, 32px on a card.

- ❌ **Choosing a size, a format or a plan.** Colour is the only thing a swatch says. Those are
  **Option selector** and **Option chip**.
- ❌ **On its own, as a page-level control.** A parent owns the shade line and places these.
- ❌ **A decorative colour sample.** Every swatch is a button carrying a shade name.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Root**, a single button | always | One element is the whole hit target. When a tooltip is supplied, the **Tooltip** atom wraps the chip and moves nothing |
| **Fill**, the shade colour or a photo of the shade | always | **Product content, never a token.** A shade that is not one flat colour (an eyeshadow quad, a glitter, a duochrome) supplies a product image instead, through the same \`src\` the rest of the library takes for a picture. It fills the circle and is cropped to it, centred, at both sizes |
| **Selection ring** | selected | A 2px outer ink rim and 4px inner paper band, drawn only for the chosen shade. Hover adds a shadow and 10% growth but keeps the band at its own resting or selected width, so the colored center grows instead of the ring |
| **Out-of-stock strikeout** | drawn only when the shade is unavailable | Two overlaid diagonals, a wide paper line under a thin ink line, so the mark reads on a dark shade and a pale one alike |
| **New mark** | drawn only when the shade is new | A band near the top of the chip carrying one word, cut to the chip's own circle. On or off, nothing else: no other word and no other length |
| **Tooltip** | only when a tooltip string is supplied | The shared **Tooltip** atom. This component draws no bubble of its own |

- **Tokens own the shape.** The radius, the ring width and the strikeout's two line weights.
  The same circle re-themes across all 21 brands without a value being restated. The bubble's
  own tokens moved out with the bubble and live on the **Tooltip** page.
- **The product owns the fill and the name.** The colour, the optional shade image and the name
  are the only content, and none of them is ever authored as a token.

**A chip can carry a product image instead of a colour.** One prop, \`src\`, the same word
**Media frame** and **Product card** already use for a picture, so nobody learns a second name for
the same thing. It exists because a shade is not always one flat colour: an eyeshadow quad is one
option carrying four colours in a single pan, and glitter, duochrome and textured shades are not
one hex either. The live Revlon product page paints those chips with a photo of the pan, and this
is that fact reaching the atom instead of a screen drawing a private chip beside it. **The colour
is still required when there is no image**, so a chip is never empty, and a shade that has both
keeps both. **The image adds no second name**: the chip is a control already named by its shade
name, so the photo is painted as a background rather than embedded, and there is no \`alt\` to
repeat the name or contradict it.

**The New mark belongs to Swatch.** A product detail page used to draw it itself, as its own
markup laid over the chip. It is the chip's now, so the mark moves, scales and clips with the
chip it belongs to, and a screen that wants it turns it on rather than drawing it.

**It is not the Badge component, and it never was.** A badge is a pill that labels a product and
carries a word from a set. This is a fixed mark on a control, limited to a single built-in word,
because a shade chip is 40px or 32px across and no other word or language fits. There is no text
to author, no second label, no size and no tone. The word itself is translated the same way every
other built-in word in this library is.

**It reads the same New colour the badge does.** Both point at the one accent role the system
uses for New, so the two can never drift into two different reds.

**It is drawn smaller than a badge, on purpose.** The word is set at the size the approved design
sheet draws this tag at, which is the size that fits inside a circle this small. At the badge's
own size the word is wider than a 40px chip and its first and last letters are cut off by the
circle.

**It sits near the top of the chip**, four pixels down, so the shade colour still reads underneath
it. On a 40px chip the word is whole with room to spare. On a 32px chip it reaches the rim: the
outer corners of the first and last letters graze the edge of the circle, which is on the page as
an open question rather than hidden, and nothing in the library turns the mark on at that size
today.

### Variants

**There is no variant axis.** Size is the only thing that differs, and it is not a free scale:
the two call sites that govern this atom agree on exactly two values, 40px on a product detail
page and 32px on a card. 40 is Swatch's own default, the flat non-responsive value Figma draws
at every breakpoint. 32 is passed explicitly by the card, and it is a deliberate choice
rather than a harvest measurement: the shade rail's chips and its arrows would otherwise overlap
each other's pointer targets, and three numbers settle it as one decision. A 32px chip, a 4px
overhang per side (the floor at \`--target-min\` is 40) and an 8px pitch between neighbours. 32
is the term that makes the chip the same box as the arrow beside it, so both wear the same
overhang and neither can steal the other's taps. Figma draws a 28x28 circle on the card, and 32
supersedes it here. The only other
thing that differs by call site is whether a tooltip is supplied at all.
`,guidance:`
## Behaviors

### States

- **Resting.** A colour circle with a 2px paper inset and the same outer boundary tone as the secondary button.
- **Selected.** A 2px outer ink rim with a 4px paper inset, announced as pressed
  so the state is never colour-only.
- **Out of stock.** The strikeout appears, the chip stops answering clicks, and the state is
  announced rather than left to the line. The control stays in the tab order on purpose, so a
  keyboard or screen-reader shopper still meets every shade instead of having some silently
  skipped.
- **Hover.** The chip scales to 110%, with a 1px or 2px ink rim (resting or selected) and a soft
  shadow, using a 250ms ease transition. The paper inset keeps its own apparent width on screen,
  2px resting or 4px selected, so the colored center grows with the chip instead of the
  white band widening. The
  shade colour stays unchanged. This follows the
  [Lowbank reference](https://www.lowbank.com.br/products/meias-lowbank-essentials-off-white-com-logotipo-verde-pack-com-2-pares-copia)
  treatment. Selection remains its own distinct state: pointer hover never selects a shade.
- **Keyboard focus.** The shared focus ring remains visible over every state. Tooltip timing,
  positioning and Escape dismissal stay with the Tooltip atom. Under reduced motion all
  Swatch transitions are removed and feedback appears immediately.
- **New.** A band near the top of the chip carrying one word, four pixels down from the edge. It
  is product data, not a design choice. It stays fixed within the chip while the whole chip scales on hover.
- **New and out of stock together.** Both are drawn. They answer different questions about the same
  shade, one about the product and one about whether it can be bought, and the strikeout passes
  over the mark as one unbroken diagonal rather than being cut where the two meet.
- **Pressed.** The chip scales down very slightly while it is held, by the one amount every
  pressable control in the library shares, so a chip, a button and an icon button all give way
  the same distance under a finger. Under reduced motion it still scales, it just stops easing
  into it.

**Selection and hover follow the Lowbank reference.** The earlier
Figma files did not distinguish resting and selected states. The unavailable strikeout remains
an open design item because those files do not draw it.

**The bubble is the shared Tooltip atom.** Two things follow from that, and
both were asked for: there is no little arrow, and the bubble can sit on any side, so a
swatch in the top row of a grid gets a bubble below it instead of one clipped off the top of the
screen.

### Interactions

- **Clicking a swatch selects it, and for one parent that click also moves the page.** On a
  product detail page, choosing a shade re-focuses the gallery on that shade's image and
  updates the visible shade name. On a product card, clicking a swatch goes to the product
  detail page instead, and the card keeps no selection of its own.
- **An out-of-stock swatch does not answer a click at all.** Its handler is removed, not merely
  styled to look unavailable.
- **A swatch click never changes which product image a card is showing.** That behaviour was
  asked for once and then withdrawn, and the withdrawal is asserted so it cannot quietly come
  back.

## Rules

- ✅ **Do** let the shade colour and name always arrive as product data.
- ❌ **Don't** hard-code a shade, at a call site or inside Swatch.

- ✅ **Do** give every swatch its shade name. It is the chip's only name, and colour alone
  never says which shade it is.
- ✅ **Do** keep the strikeout and the announced unavailable state together. A line on its own
  is a shape-only signal.
- ✅ **Do** let the New mark arrive as product data, the same way the colour and the name do.
- ❌ **Don't** ask the New mark for a different word, a longer one, or a second one. It is on or
  off, and the space is the reason.
- ❌ **Don't** take an out-of-stock swatch out of the reach of a keyboard. A shade nobody can
  reach is a shade nobody knows exists, and inside a group that means the arrow keys must still
  land on it.

- ✅ **Do** treat size as a per-call-site decision, not a free number. 40 and 32 are the only
  two values anything asks for today.
- ❌ **Don't** add a third call site, or a free numeric size, without checking both parents
  first. This is the one atom governed by two briefs instead of one.

- ✅ **Do** keep the approved selection and hover treatment in Swatch so its parents inherit it.

### Content rules

- ✅ **Do** compose the tooltip at the call site. A product detail page writes the shade name,
  and the name plus "(Unavailable)" when it is out of stock. Swatch only ever receives a
  finished string.
- ❌ **Don't** expect a tooltip by default. A product card supplies none, deliberately.
- ❌ **Don't** invent a character limit for the shade name. Neither brief that places Swatch
  describes one.
- ✅ **Do** translate the New mark's word through the same labels a screen already passes for its
  other built-in words.
- ❌ **Don't** treat that as an authoring surface. Translating the one word is all it does.

## Open items

| Question | Owner |
|---|---|
| Is the out-of-stock strikeout the treatment Revlon wants: two overlaid diagonals, announced as unavailable, inert rather than removed? Figma draws no out-of-stock swatch at all | Design |
| Should size become a scoped component token instead of a per-call-site number, now that both agreed sizes are known and fixed? | DS team |
| At 40px in a dense grid of roughly 45 shades, are the gaps between swatches, measured at roughly 11.5px to 15px in Figma, wide enough to keep neighbouring hit targets comfortably apart? | Design |
| The New mark sits four pixels below the top of the chip. At 40px the word is whole. At 32px it reaches the rim and the outer corners of the first and last letters graze the circle. Three ways out: smaller type on the small chip only, a shorter mark, or the top on 40 and the centre on 32 | Design |
`,spec:{elements:[{name:"Root, one button",requirement:"required"},{name:"Fill",requirement:"required"},{name:"Selection ring",requirement:"conditional",condition:"While the shade is chosen"},{name:"Strikeout",requirement:"conditional",condition:"While the shade is unavailable"},{name:"New mark",requirement:"conditional",condition:"While the shade is new"},{name:"Tooltip",requirement:"optional"}],authorability:[{name:"Shade colour",rule:"Always product data, never hard-coded. Required unless the shade carries an image."},{name:"Shade image",rule:"Optional product data, for a shade that is not one flat colour. No token carries it, and no alt."},{name:"Shade name",rule:"Always product data, and the only name the chip has. Colour never says which shade."},{name:"Tooltip",rule:"Composed at the call site as a finished string. There is no tooltip by default."},{name:"Size",rule:"Two agreed values, 40 and 32. No third size and no free number ships today."},{name:"Selection",rule:"The screen owns which chip is chosen. The chip only reports it."},{name:"Unavailable",rule:"The screen marks it. The chip draws the strikeout and announces the state together."},{name:"New",rule:"On or off, from product data. The word is fixed and only its translation can change."},{name:"Length",rule:"No character limit is set on a shade name."}],variants:[{label:"40px, tooltip on",props:{size:40,showTooltip:!0,name:"Uncut Ruby (810)",color:"#be0f28"}},{label:"40px, no tooltip",props:{size:40,showTooltip:!1,name:"Rum Raisin (535)",color:"#b14e3e"}},{label:"32px, tooltip on",props:{size:32,showTooltip:!0,name:"Wild Saffron (809)",color:"#d71920"}},{label:"32px, no tooltip",props:{size:32,showTooltip:!1,name:"Bare It All (755)",color:"#da7e9c"}}],states:[{key:"default",name:"Default"},{key:"selected",name:"Selected",props:{selected:!0}},{key:"out-of-stock",name:"Out of stock",props:{outOfStock:!0}},{key:"new",name:"New",props:{isNew:!0}},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"},{key:"active",name:"Pressed",pseudo:"active"}],render:I,interactions:["A click is handed to the screen. What choosing a shade means is the screen decision, never this one.","An unavailable chip answers no click. Its handler is removed rather than styled away.","An unavailable chip is reached like every other chip, so no shade is silently skipped.","A row of shades is one Tab stop. The arrow keys walk it and Tab leaves for the next control.","Hover grows the chip by 10% and reveals the paper inset, ink rim and shadow in 250ms. The fill stays unchanged.","The New mark stays fixed inside the chip and scales with it. Hover alone never selects a shade.","A shade that is new and unavailable draws both. The strikeout crosses the mark unbroken.","On a pointer the tooltip waits a beat. On keyboard focus it appears at once.","Pressing scales the chip down. Under reduced motion it still scales, without easing into it."],accessibility:[{label:"Accessible name",text:"The shade name is the chip name. A supplied tooltip describes the chip and never names it."},{label:"Shade image",text:"A shade photo is painted, not embedded, so it adds no second node, no alt and no second name to a control the shade name already names."},{label:"Selected state",text:"The chosen chip is announced as pressed, so the selection is never carried by the ring alone."},{label:"New",text:"A new shade says so in its name, after the shade name, so the mark is never carried by the drawing alone."},{label:"Unavailable state",text:"An unavailable chip is announced as disabled and stays focusable, so no shade is silently skipped."},{label:"Non-colour cue",text:"Unavailable carries the strikeout and the announcement together. A line on its own is a shape-only signal."},{label:"Focus ring",text:"The focus ring is drawn over the resting and the selected ring, so a chip that already carries one does not lose it."},{label:"Keyboard",text:"A group of shades is one Tab stop. The arrow keys move, Home and End reach the ends, Enter or Space chooses. Arrowing never chooses."},{label:"Reduced motion",text:"Under reduced motion hover and press feedback appear immediately, and the tooltip drops its fade."},{label:"Contrast",text:"The resting boundary shares the secondary button tone. Selection and hover add an ink rim and paper inset. Check contrast against the surrounding ground."},{label:"Touch target",text:"Neighbouring chips keep enough space between them that a 32px chip in a dense grid is still its own target."}],openItems:[{question:"Is the two-diagonal strikeout the intended treatment? No design source draws an unavailable swatch.",owner:"Design"},{question:"Should size become a scoped component token now that both agreed values are known and fixed?",owner:"DS team"},{question:"At 40px in a grid of about 45 shades, are the gaps wide enough to keep hit targets apart?",owner:"Design"},{question:"On a 32px chip the New mark reaches the rim and its outer letters graze the circle. Smaller type there only, a shorter mark, or top on 40 and centre on 32?",owner:"Design"}]}}}},h={name:"Default",args:M,argTypes:L,render:e=>t.jsx(j,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"The shade chip with every option a designer can change. Switch **Size** to compare the two agreed sizes. Turn on **Selected** or **Out of stock** to see either state. Turn **Tooltip** off to see the product card call site, which never supplies one. Switch **Fill** to **Swatch image** to see the chip painted by a shade photo instead of a colour. **Shade name** and **Shade colour** are product content. Hover or focus the chip to see the tooltip, when one is on."}}}},g=[{name:"Uncut Ruby (810)",color:"#be0f28"},{name:"Bare It All (755)",color:"#da7e9c"},{name:"Black Cherry (477)",color:"#600825"},{name:"Wild Saffron (809)",color:"#d71920"},{name:"Pink Promise (778)",color:"#f74dff"},{name:"Choco-Liscious (665)",color:"#5e2f1f"},{name:"Secret Club (766)",color:"#ff57b5"},{name:"Rum Raisin (535)",color:"#b14e3e"}],b={display:"flex",gap:"var(--space-inline-tight)",flexWrap:"wrap",alignItems:"center"},f={margin:"0 0 var(--size-100)",fontSize:"var(--typography-small-font-size, 0.8125rem)",color:"var(--color-text-muted, #666)"},d={name:"Sized by the parent",render:()=>t.jsxs("div",{style:{display:"grid",gap:"var(--size-400)"},children:[t.jsxs("div",{children:[t.jsx("p",{style:f,children:"PDP Hero, 40px, tooltip always on, the shopper's actual selection"}),t.jsx("div",{style:b,children:g.slice(0,5).map((e,a)=>t.jsx(o,{color:e.color,name:e.name,size:40,selected:a===2,outOfStock:a===4,tooltip:a===4?`${e.name} (Unavailable)`:e.name},e.name))})]}),t.jsxs("div",{children:[t.jsx("p",{style:f,children:"Product Card, 32px, no tooltip, the first VISIBLE shade always shows selected"}),t.jsx("div",{style:b,children:g.slice(0,5).map((e,a)=>t.jsx(o,{color:e.color,name:e.name,size:32,selected:a===0},e.name))})]})]}),parameters:{docs:{description:{story:"The same atom at its two governed call sites, side by side, rather than described in prose. PDP Hero's row tracks the shopper's actual choice, here the third shade, and always supplies a tooltip. Product Card's row never supplies one, and it always marks whichever shade is first in the currently visible window rather than a shade the shopper chose, because the card keeps no selection of its own. That is exactly the open design call noted above."}}}},l={name:"Minimum",render:()=>t.jsx(o,{color:"#be0f28",name:"Uncut Ruby (810)"}),parameters:{docs:{description:{story:"Only the two things Swatch actually requires, a colour and a name. It proves the selected state, the out-of-stock state, the tooltip and the size are genuinely optional rather than quietly assumed."}}}},r=[{name:"Moonlit",src:"/revlon-swatch/colorstay-day-to-night-eyeshadow-quad-moonlit.jpg"},{name:"Decadent",src:"/revlon-swatch/colorstay-day-to-night-eyeshadow-quad-decadent.jpg"}],F=[{key:"40-tooltip",label:"40px · Tooltip on",props:{size:40,showTooltip:!0,name:"Uncut Ruby (810)",color:"#be0f28"},dimension:"sample"},{key:"40-no-tooltip",label:"40px · No tooltip",props:{size:40,showTooltip:!1,name:"Rum Raisin (535)",color:"#b14e3e"},dimension:"sample"},{key:"40-image",label:"40px · Image",props:{size:40,showTooltip:!0,name:r[0].name,src:r[0].src},dimension:"sample"},{key:"32-tooltip",label:"32px · Tooltip on",props:{size:32,showTooltip:!0,name:"Wild Saffron (809)",color:"#d71920"},dimension:"sample"},{key:"32-no-tooltip",label:"32px · No tooltip",props:{size:32,showTooltip:!1,name:"Bare It All (755)",color:"#da7e9c"},dimension:"sample"},{key:"32-image",label:"32px · Image",props:{size:32,showTooltip:!1,name:r[1].name,src:r[1].src},dimension:"sample"}],y=[{key:"default",label:"Default"},{key:"selected",label:"Selected",props:{selected:!0},dimension:"state"},{key:"outOfStock",label:"Out of stock",props:{outOfStock:!0},dimension:"state"},{key:"new",label:"New",props:{isNew:!0},dimension:"state"},{key:"hover",label:"Hover",pseudo:"hover"},{key:"focus",label:"Focus",pseudo:"focusVisible"},{key:"active",label:"Pressed",pseudo:"active"}];function I({size:e,showTooltip:a,name:s,color:p,...u}){const n=a?s:void 0;return t.jsx(o,{color:p,name:s,size:e,tooltip:n,...u})}const c={name:"State matrix",parameters:{themeShellPadding:!1,pseudo:q(y),docs:{description:{story:"Rows cross the two agreed sizes with the two tooltip states, the exact two axes the two governing briefs disagree on, plus one **Image** row per size so the same ColorStay Day to Night Eyeshadow Quad photo fill used to live in its own story now answers every column beside its colour neighbours instead. Columns are Default, Selected, Out of stock, New, Hover, Focus and Pressed, the same seven the Spec view lists. **The New mark is a column, not a row**, so the word is checked against the space it has at both sizes and in every state rather than only at rest. **Hover**, **Focus** and **Pressed** are frozen with storybook-addon-pseudo-states so both sit still for a screenshot. **The bubble itself does not appear in the frozen columns**, and that is correct rather than missing: the tooltip is the shared **Tooltip** atom, which reveals through component state instead of a CSS `:hover` rule, because it also has to survive Escape and stay hoverable, and no addon can freeze state it does not own. What the tooltip toggle still changes here is real and worth seeing: the wrapper, and the chip's spoken description. The bubble's own positions and content shapes have their own grid on the **Tooltip** page."}}},render:()=>t.jsx(H,{rows:F,columns:y,render:I})};var v,k,S;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Default',
  args: SWATCH_DEFAULT_ARGS,
  argTypes: SWATCH_ARG_TYPES,
  render: args => <ConfigurableSwatch {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The shade chip with every option a designer can change. Switch **Size** to compare ' + 'the two agreed sizes. Turn on **Selected** or **Out of stock** to see either state. ' + 'Turn **Tooltip** off to see the product card call site, which never supplies one. ' + 'Switch **Fill** to **Swatch image** to see the chip painted by a shade photo instead ' + 'of a colour. **Shade name** and **Shade colour** are product content. Hover or focus ' + 'the chip to see the tooltip, when one is on.'
      }
    }
  }
}`,...(S=(k=h.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var T,x,A;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Sized by the parent',
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--size-400)'
  }}>
      <div>
        <p style={GOVERNING_PARENT_CAPTION_STYLE}>
          PDP Hero, 40px, tooltip always on, the shopper's actual selection
        </p>
        <div style={SWATCH_ROW_STYLE}>
          {REAL_SHADES.slice(0, 5).map((shade, index) => <Swatch key={shade.name} color={shade.color} name={shade.name} size={40} selected={index === 2} outOfStock={index === 4} tooltip={index === 4 ? \`\${shade.name} (Unavailable)\` : shade.name} />)}
        </div>
      </div>
      <div>
        <p style={GOVERNING_PARENT_CAPTION_STYLE}>
          Product Card, 32px, no tooltip, the first VISIBLE shade always shows selected
        </p>
        <div style={SWATCH_ROW_STYLE}>
          {REAL_SHADES.slice(0, 5).map((shade, index) => <Swatch key={shade.name} color={shade.color} name={shade.name} size={32} selected={index === 0} />)}
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The same atom at its two governed call sites, side by side, rather than described in ' + "prose. PDP Hero's row tracks the shopper's actual choice, here the third shade, and " + "always supplies a tooltip. Product Card's row never supplies one, and it always " + 'marks whichever shade is first in the currently visible window rather than a shade ' + 'the shopper chose, because the card keeps no selection of its own. That is exactly ' + 'the open design call noted above.'
      }
    }
  }
}`,...(A=(x=d.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var z,N,O;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Minimum',
  render: () => <Swatch color="#be0f28" name="Uncut Ruby (810)" />,
  parameters: {
    docs: {
      description: {
        story: 'Only the two things Swatch actually requires, a colour and a name. It proves the ' + 'selected state, the out-of-stock state, the tooltip and the size are genuinely ' + 'optional rather than quietly assumed.'
      }
    }
  }
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var D,P,C;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'State matrix',
  parameters: {
    // Flush canvas, same as Button's own matrix, the grid gets the full width instead of
    // fighting the story canvas's own margin. See .storybook/preview.jsx.
    themeShellPadding: false,
    pseudo: getStateMatrixPseudoParameters(STATE_MATRIX_COLUMNS),
    docs: {
      description: {
        story: 'Rows cross the two agreed sizes with the two tooltip states, the exact two axes the ' + 'two governing briefs disagree on, plus one **Image** row per size so the same ' + 'ColorStay Day to Night Eyeshadow Quad photo fill used to live in its own story now ' + 'answers every column beside its colour neighbours instead. Columns are Default, Selected, ' + 'Out of stock, New, Hover, Focus and Pressed, the same seven the Spec view lists. ' + '**The New mark is a column, not a row**, so the word is checked against the space it has ' + 'at both sizes and in every state rather than only at rest. **Hover**, **Focus** and ' + '**Pressed** are frozen with ' + 'storybook-addon-pseudo-states so both sit still for a screenshot. **The bubble ' + 'itself does not appear in the frozen columns**, and that is correct rather than ' + 'missing: the tooltip is the shared **Tooltip** atom, which reveals ' + 'through component state instead of a CSS \`:hover\` rule, because it also has to ' + 'survive Escape and stay hoverable, and no addon can freeze state it does not own. ' + 'What the tooltip toggle still changes here is real and worth seeing: the wrapper, ' + "and the chip's spoken description. The bubble's own positions and content shapes " + 'have their own grid on the **Tooltip** page.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={STATE_MATRIX_ROWS} columns={STATE_MATRIX_COLUMNS} render={renderSwatchMatrixCell} />
}`,...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const Z=["Playground","GoverningParents","Bare","StateMatrix"];export{l as Bare,d as GoverningParents,h as Playground,c as StateMatrix,Z as __namedExportsOrder,K as default};
