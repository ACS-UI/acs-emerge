import{j as t,S as Q,g as $}from"./iframe-6dx3hp_4.js";import{C as a,a as y,b,c as f,d as v}from"./ContentCard-Cy_xF-W9.js";import{a as J}from"./annotationPage-eYx--AWZ.js";import{p as g,c as Z}from"./campaign-colorsilk-Dk82vMQn.js";import{c as ee}from"./campaign-liquid-liner-D7xVykH6.js";import{D as n,a as i}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";/* empty css               */const L="/content-card-fixtures/this-photo-was-removed.jpg",u=e=>({control:"boolean",table:{category:"Content",type:{summary:"On / off"},defaultValue:{summary:e}}}),P={variant:{...i("Editorial"),name:"Layout",...n({labels:Object.fromEntries(v.map(e=>[e.value,e.label])),options:v.map(e=>e.value)}),description:`Which layout to draw. **Editorial** is a compact tile, photograph on top and the copy under it. **Image promo** is a full-bleed panel with the copy sitting on the picture. Both take the optional CTA. Two different shapes, not two skins of one, and the two the requirements sheet ratifies.

It is the first of the choices a caller declares about a card it is placing: pick the layout, then the arrangement, then the backdrop.`},align:{...i("Left aligned"),name:"Alignment",...n({labels:Object.fromEntries(f.map(e=>[e.value,e.label])),options:f.map(e=>e.value)}),description:"How the copy is arranged. Left aligned is the default and is what the card draws when a caller says nothing; centred is the second arrangement. It moves the eyebrow, the headline and the subtitle together on both layouts, and it moves the CTA with them, so the pill sits under the middle of the copy rather than hugging the left edge."},ground:{...i("Paper"),name:"Ground",...n({labels:{paper:"Paper",inverse:"Dark"},options:["paper","inverse"]}),description:"Which ground the card was placed on. On Dark the card resolves its heading, subtitle and eyebrow to the inverse ink roles; this is the one dark mount in the library today, CarouselSection's Featured Categories band. The Image promo layout is unaffected: its copy already reads inverse ink unconditionally, because it always sits on its own dark media, never the page ground."},backdrop:{...i("Overlay"),name:"Backdrop",...n({labels:Object.fromEntries(b.map(e=>[e.value,e.label])),options:b.map(e=>e.value)}),if:{arg:"variant",eq:"image"},description:"What the promo copy sits on. **Overlay** is a gradient veil over the photograph and is the default; **Solid block** replaces it with a solid brand-colour block behind the copy. Only on the Image promo, and it is exactly two treatments: the copy never sits on a bare photograph. Both are tokens, so both re-theme per brand, and the block is the same treatment the Hero draws for its colour block."},plateTone:{...i("Dark ground"),name:"Content tone",...n({labels:Object.fromEntries(y.map(e=>[e.value,e.label])),options:y.map(e=>e.value)}),if:{arg:"variant",eq:"image"},description:`What kind of ground the promo copy reads against, mirroring Hero's own Content tone axis. **Dark ground** is the default: the inverse plane every promo has always drawn. **Paper** and **Alt** set the eyebrow, headline and body on the normal plane, dark ink, and repaint wherever this promo paints a ground: the solid backdrop block, and the panel a promo with no photograph sits on. Over a photograph under **Overlay**, the two light tones swap the veil for a light wash, the same way Hero's own scrim flips.

Only on the Image promo; the Editorial layout has its own ground axis for a different question (**Ground**, above) and this control is inert there.

**Alt is not measured clean on every brand.** Dark ink over the Alt ground reads below AA 4.5:1 on one of the 21 (ea-corporate, 4.40:1), the same untested pairing Hero's own Alt tone already carries.`},title:{name:"Headline",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"How to Get a Full-Coverage Look with ColorStay Longwear"}},description:"The card's only always-on text, and the link's accessible name."},showEyebrow:{...u("On"),name:"Eyebrow",description:"Whether the card carries the small category line above the headline. Turn it on and the field for its words appears underneath."},eyebrow:{name:"Eyebrow text",control:"text",if:{arg:"showEyebrow",truthy:!0},table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Tutorial"}},description:"The words in the eyebrow. Reachable while the Eyebrow switch above is on."},showSubtitle:{...u("On"),name:"Subtitle",description:"Whether the card carries the short supporting line under the headline. Turn it on and the field for its words appears underneath. It is the same line the Card Collection band and the Carousel section call a subtitle."},subtitle:{name:"Subtitle text",control:"text",if:{arg:"showSubtitle",truthy:!0},table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"A step-by-step routine for all-day, full-coverage wear that never looks cakey."}},description:"The words in the subtitle. Reachable while the Subtitle switch above is on."},showCta:{...u("On"),name:"CTA",description:"Whether the card carries a call to action. On both layouts. Authoring one moves the link off the card and onto the pill, so the card stops being clickable and the pill starts."},cta:{name:"CTA label",control:"text",if:{arg:"showCta",truthy:!0},table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Shop the Collection"}},description:"The words on the pill. Reachable while the CTA switch above is on."},image:{name:"Image URL",control:"text",table:{category:"Content",type:{summary:"URL text"},defaultValue:{summary:"None (the card falls back)"}},description:"Swap in a real photo. Empty it on the Editorial card to see the empty state, or on the Image promo to see the solid panel its copy sits on. Type a URL that does not resolve to see the empty state on both: a photograph that was promised and did not arrive is a fault the promo reports too, and no photograph at all is not."},href:{control:!1,table:{disable:!0}},tone:{control:!1,table:{disable:!0}},inverse:{control:!1,table:{disable:!0}}},H={variant:"default",align:"left",ground:"paper",backdrop:"overlay",plateTone:"dark",showEyebrow:!0,eyebrow:"Tutorial",title:"The Full-Coverage ColorStay Look",showSubtitle:!0,subtitle:"A step-by-step routine for full-coverage wear that never looks cakey.",showCta:!0,cta:"Shop the Collection",image:g},te=e=>({background:e==="inverse"?"var(--color-bg-inverse)":"transparent"});function q({variant:e,align:o,ground:r,backdrop:p,plateTone:M,showEyebrow:j,eyebrow:B,title:W,showSubtitle:F,subtitle:z,showCta:U,cta:X,image:V}){const K=r==="inverse",Y=t.jsx(a,{href:"/collections/lips",variant:e,align:o,inverse:K,backdrop:p,plateTone:M,eyebrow:j&&B||void 0,title:W,subtitle:F&&z||void 0,cta:U&&X||void 0,image:V||void 0,tone:"a"});return t.jsx("div",{style:te(r),children:Y})}const we={title:"Molecules/Content Card",component:a,tags:["autodocs"],argTypes:{headingLevel:{control:!1,table:{disable:!0}}},parameters:{docs:{page:J("Content card"),toc:{headingSelector:"h2"},description:{component:"A container that groups a photograph, a headline and a short description into one block. Give it a destination and the whole card is the link. Add a call to action and the link moves onto the pill, so the card around it stops being clickable. Leave the destination out and the same card is a static block that composes layout."}},componentDoc:{usage:`
## When to use

- ✅ **A row of editorial tiles**, like an article list, a tutorial round-up or a category band.
- ✅ **A promo panel with the copy sitting on the photograph.** Switch **Layout** to Image promo.
- ✅ **A tile that goes to exactly one place.** Give it a destination and the whole tile is that
  one link, edge to edge.
- ✅ **A tile whose action reads as a button.** Add a call to action and the pill becomes the one
  link, with the card around it inert.
- ✅ **A block that only composes a layout.** Leave the destination out and the same card draws
  the same way with nothing to click: no cursor, no tab stop, no hover.
- ✅ **A tile whose photograph has not arrived yet.** The media box always has a ground, so the
  card is never a collapsed hole.

- ❌ **A product with a price, shades and an add to bag.** That is **Product card**.
- ❌ **Two destinations in one tile.** A card has one target, either itself or its pill, never
  both and never two. A tile that wants to point at two places is two cards.
- ❌ **A static block with a button on it.** The call to action is a link, so it needs somewhere to
  go: a CTA with no destination is refused. Put the action beside the card, not on it.
- ❌ **Laying a row or a grid of cards out.** **Card grid** owns the columns and the mobile stack.
- ❌ **A row of Image promos in a carousel.** The **Carousel section** refuses to hold one, and
  the refusal is the point: a carousel is a scannable collection of peers, and a promo is a
  spotlight. Give the promo a band of its own and hand the rail the Editorial card.
- ❌ **A page-width banner.** That is **Hero**. The Image variant looks like a small one, and
  stops there.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **The card root**, one element around everything | always | With a destination and no CTA it is one \`<a>\`, the whole tile. With a CTA, or with no destination, it is a plain block |
| **Media**, the photograph or its stand-in | **required** | The box always draws. What fills it when no photograph resolves depends on the variant |
| **Eyebrow**, the small category line | optional | Switch it on in Controls and its text field appears |
| **Headline** | **required**, though the written requirements disagree, see Rules | On a clickable card it names the link and underlines under the pointer. It is never a link of its own |
| **Subtitle**, the short supporting line | optional | The same line the Card Collection band and the Carousel section call a subtitle |
| **CTA** | optional | A pill that links to the card's destination, and the only link on a card that has one. A CTA with no destination is refused, because a link needs somewhere to go |
| **Copy backdrop**, on the promo | **always one of two**, overlay by default | Image promo only. **Overlay** is a gradient veil over the photograph; **Solid block** replaces it with a solid brand-colour block. Both are tokens, neither is campaign art, and the copy never sits on a bare photograph |
| **Empty state**, the stand-in for a missing photograph | fixed | One decorative glyph, a crossed-out picture, and no words, whenever no photograph resolves. Nothing about it is authored |

### Destination

**One target per card, and the call to action is what decides which.**

**With a destination and no CTA the whole card is the link.** The tile is the target edge to edge,
the pointer shows a hand, Tab reaches it, Enter follows it, and the browser's own middle-click and
open-in-new-tab work. Hovering anywhere on it, the photograph included, fades a soft underline in
under the headline.

**With a CTA the pill is the link and the card is not.** The card takes no hand cursor, no tab stop
and no focus ring, and the headline draws no underline, because none of those would be true. A
reader has one thing to press and it looks like a button.

**With no destination the card composes layout.** The same photograph, the same type, the same
spacing, and nothing to click. A CTA in that case is refused outright, because a link with nowhere
to go cannot be drawn.

**Nothing is a placeholder.** A card with no destination is authored with none rather than pointed
at a stand-in, so a block that only composes a layout never looks reachable to a keyboard or a
screen reader.

- **Tokens own the look.** Shape, radius, type, the hover treatment and both media grounds. The
  same card re-themes across every brand without a value being restated here.
- **The caller owns the words and the photograph.** Eyebrow, headline, subtitle, CTA label and
  image, plus the two axes it declares, **Layout** and **Alignment**. There is no third category:
  nothing about a card is CMS-editable styling.
- **The media box always has a ground.** A card with no photograph is still a card, never a hole.
- **The copy is one block, and the CTA is not its fourth line.** On both layouts. Eyebrow,
  headline and subtitle sit together at the card's own pitch, 12px; the CTA sits at a second,
  wider pitch, 32px, below that block. One stack could not say it, because one gap cannot be two
  numbers.

### Layouts

**Two, and both are ratified.**

- **Editorial**, the tile: photograph on top, then the eyebrow, headline and subtitle stacked
  under it, and an optional CTA below that block.
- **Image promo**, the panel: full-bleed photograph, inverse type sitting on the picture, its own
  CTA, and a copy backdrop that is **always one of two**, a gradient overlay by default or a
  **solid colour block** in its place. **Not a skin of the Editorial card.** Different
  anatomy, closer to a small Hero than to the tile beside it.

### Alignment

**Left is the default, centred is the second arrangement**, and it is the same axis under the same
name the **Product card** carries, so the two cards on one page are declared in one language. It
moves the eyebrow, the headline and the subtitle together, and it takes the CTA with them on both
layouts: a centred card has no left-hugging pill under centred copy.

Neither is a version of the other. Each carries its own full parts list, which is why they read
as two components rather than one with a switch.

**One shape at every width, and the picture is always on top.** The Editorial card is a stacked
tile: the image, then the eyebrow, the headline and the subtitle under it. It has no second
arrangement and no size of its own to set. A band decides how wide the card gets, never what shape
it is, so a card in a narrow column is a narrower tile and never a sideways one. The reason is the
picture: turned sideways in a two-up phone grid, a card has about 161px to share, and the image
would be a sliver beside its own copy rather than something a reader can see.

**A category tile is not a third layout.** The square image and large label the homepage's
Featured Categories band uses is the Editorial card with no eyebrow, no subtitle and left
alignment, which is three omissions a caller already makes. So a category tile is authored by
leaving slots empty rather than by asking for a layout of its own. What that band gives up against
the shape it once had is the square crop and the display-size mark, and neither was a card
decision.
`,guidance:`
## Behaviors

Long or enlarged text wraps and makes the promo card taller. The title and CTA stay fully visible, and the overlay protects the whole copy block.

### States

- **With a photograph.** The picture box is a square, and the picture fills it and is cropped to
  do it, so a wide source loses its sides rather than letterboxing. The square is the crop the
  live site uses and it is the same one the **Product card** draws.
- **The promo copy backdrop, on the Image promo.** Two treatments and never a third: **Overlay**
  is a gradient veil over the photograph and is what a caller gets by saying nothing, and **Solid
  block** replaces it with a solid brand-colour block. Both are tokens, so both re-theme per brand,
  and neither is campaign art. The copy is never set on a bare photograph.
- **No photograph, on the Image promo.** The media box is simply the solid ground the copy sits
  on, from a token. No glyph and no message, because nothing is missing: a promo panel with type
  on colour is a finished card.
- **No photograph, on the Editorial card.** An empty state: one glyph, a crossed-out picture, and no
  words. That box is only ever a picture, so an empty one shows that the picture is missing.
- **A photograph that did not arrive.** The empty state, on both layouts, the promo included.
  The card promised a picture and lost it, which is a fault and should read as one. The solid
  ground stays underneath, so the promo copy is still legible while the empty state shows what
  happened.
- **Recovering.** The card remembers which source failed rather than a yes-or-no flag, so giving
  it a working photograph clears the empty state on its own.
- **Hover, on a clickable card.** The headline underlines, a line that fades in rather than
  snapping. Hovering anywhere on the card does it, the photograph included, because the whole card
  is the link and the headline is where the signal reads. The photograph does not dim.
- **Hover, on a card whose link is its CTA.** The card answers nothing: no underline, no hand. The
  pill has its own hover, which is **Button**'s.
- **Hover, on a card with no destination.** There isn't one either, and that asymmetry is the
  point. A card with nothing to click never underlines and never shows a hand.
- **Hover on touch.** There isn't one either. The rules sit behind a pointer check, so nothing
  sticks after a tap.
- **The CTA, on either layout.** Optional, and it draws only when words are authored for it. It
  links to the card's destination and takes the link off the card, wearing the plane's own
  **Button** pill: the ordinary primary one on paper, the inverse one when the host says the card
  was placed on a dark ground. It sits 32px under the copy block, left with left-aligned copy and
  centred with centred copy.
- **CTA hover.** The pill changes too, on both layouts. It borrows Button's own styling rather
  than owning a rule, so the pointer gating that keeps it off touch lives in Button's stylesheet,
  not in this component's.
- **Focus.** The standard ring, on whichever element is the link: the card itself when there is no
  CTA, the pill when there is. One tab stop either way. A card with no destination is not in the tab
  order at all, so it has no focus state to draw.

### Interactions

- **On a card with no CTA, click or tap anywhere and it goes to the destination.** The whole tile
  is the target, not just the headline.
- **On a card with a CTA, only the pill goes anywhere.** Clicking the photograph, the headline or
  the space around them does nothing. Authoring a call to action is what moves the link, and there
  is never more than one target on a card.
- **A card authored without a destination has nothing to click at all.**
- **A CTA on a card with no destination is refused.** A link needs somewhere to go, so the
  combination fails while it is being built rather than shipping a pill nobody can press.
- **The card holds together at its minimum.** Media and headline alone is a valid card, and so is
  every optional slot filled at once. Switch **Eyebrow** and **Subtitle** off on the card above to
  see the minimum, which is also the card a category tile draws.

## Rules

- ✅ **Do** give every card a headline. It is what gives the card context, and on a clickable card
  its words are the name the link is announced by.

> **Whether the headline is strictly required is unsettled.** One written requirement lists it as
> required. Another says a card should be able to ship without one, while still recommending it
> for context. The shipped card always draws it, which settles one reading and not the other.

- ✅ **Do** add a CTA when the action deserves to look like a button, and expect the card to stop
  being clickable when you do. That is the trade, and the card draws either side honestly.
- ✅ **Do** leave the destination out when the card is only composing a layout. That is how the
  card says there is nothing to click, and everything else about it stays the same.
- ✅ **Do** keep a row of cards on one alignment. The axis is the caller's, so a grid can draw
  four cards four ways, and that is a page mistake the component cannot catch.
- ✅ **Do** expect the card to fill the height a host gives it. In a row of cards drawn at one
  height the Editorial tile keeps its eyebrow, headline and subtitle together at the top and drops
  its call to action to the row's base line, so the pills line up across the row; the Image promo
  is already a full box and simply grows. Nothing stretches a card standing alone or in a
  carousel, so nothing moves there.

- ❌ **Don't** put a second control on the card. There is one target, either the card or its pill,
  and a control inside a whole-card link is unreachable for some people and ambiguous for
  everyone.
- ❌ **Don't** put the Image promo in a carousel. It is a layout band, not a row item, and the
  **Carousel section** refuses it while the page is being built. The Editorial card is what a
  rail of these is for.
- ❌ **Don't** build a card that plays a video on click. That is settled: the card navigates, it
  does not play.
- ❌ **Don't** point a card at a placeholder destination to make it look finished. A card with a
  stand-in destination is a real link that goes nowhere, which is worse than a block that never
  claimed to be one.
- ❌ **Don't** let hover carry meaning on its own. It does not exist on touch, and it does not
  exist on a card that is not itself the link.
- ❌ **Don't** treat this as a blog component. It is a plain container, and what it holds varies
  with where it is placed.
- ❌ **Don't** lay a row of cards out by hand. Card grid owns the columns and the mobile stack.

### Content rules

- ✅ **Do** give the card its real destination, or none at all.
- ✅ **Do** fill the **Editorial** card from: photograph, optional eyebrow, headline, optional
  subtitle, optional CTA.
- ✅ **Do** fill the **Image promo** from: photograph, optional eyebrow, headline, optional
  subtitle, optional CTA.
- ✅ **Do** draw a category tile as the Editorial card with the eyebrow and the subtitle switched
  off. That is the whole of the shape.
- ❌ **Don't** invent a character limit. None is defined yet, and the headline has no line clamp
  today, so a long one goes ragged inside a grid row.

## Open items

| Question | Owner |
|---|---|
| Should a card's CTA ever carry its own destination, separate from the card link? Today it is a decorative span, on both layouts | Design |
| Should a card with no destination ever carry an action of its own? Today the two together are refused | Design |
| Character limits for the headline and the description are undefined, and the shipped headline has no line clamp | Design |
`,spec:{elements:[{name:"Card root, one element",requirement:"required",condition:"One anchor with a destination, a plain block without one"},{name:"Media box",requirement:"required",condition:"Always drawn, always on a ground"},{name:"Headline",requirement:"required"},{name:"Eyebrow",requirement:"optional"},{name:"Subtitle",requirement:"optional"},{name:"CTA",requirement:"optional",condition:"Drawn when words are authored for it, and it becomes the card's only link"},{name:"Empty state",requirement:"conditional",condition:"When no photograph resolves"}],authorability:[{name:"Headline",rule:"Authored on every card. On a clickable card it is the name the link is announced by."},{name:"Eyebrow and subtitle",rule:"Authored, and both can be left out. No character limit is set for either."},{name:"Photograph",rule:"Authored. Leave it out and the editorial card shows an empty state, the promo a solid panel."},{name:"Promo backdrop",rule:"Pick the overlay or the solid block. Over a photograph the copy always sits on one of the two."},{name:"Empty state",rule:"Fixed by the system: one glyph and no words. Nothing about it is authored."},{name:"CTA label",rule:"Authored, optional, both layouts. Adding one moves the link onto the pill."},{name:"Layout",rule:"Pick editorial or promo. Two shapes, not skins of one."},{name:"Alignment",rule:"Pick left aligned or centred. Left is the default and it moves the copy and the CTA together."},{name:"Ground",rule:"Which plane the host placed the card on, paper (default) or dark."},{name:"Destination",rule:"Authored. One per card, carried by the card itself or by its CTA."},{name:"Second controls",rule:"None. A card has exactly one target and never two."},{name:"Look and behaviour",rule:"Fixed by the system: colour, radius, type, the square crop, the hover treatment and the empty state."}],variants:[{label:"Editorial",props:{variant:"default"}},{label:"Promo",props:{variant:"image"}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"},{key:"no-photo",name:"No photograph",props:{image:null}},{key:"failed",name:"Photograph failed",props:{image:L}}],render:G,interactions:["A card with a destination and no CTA is one link. Click or tap anywhere on it and it goes there.","Authoring a CTA moves the link onto the pill: the card stops being clickable and the pill starts.","One target per card, never two. The headline is never a link of its own.","A card with no destination is not clickable, not focusable and shows no pointer cursor.","A CTA on a card with no destination is refused: a link needs somewhere to go.","Hover fades an underline in under the headline of a clickable card, on pointer devices only.","Nothing hovers on touch, and nothing hovers on a card that is not itself the link.","Focus draws one ring, on whichever element is the link: the card, or its pill.","A photograph that fails to load swaps the media box for the empty state, on both layouts.","The failure is tracked by source, so a working photograph clears the empty state on its own.","The CTA wears Button classes, so a change to Button styling repaints it here too."],accessibility:[{label:"Link name",text:"The headline is the accessible name of a clickable card. Give the photograph an empty alt so it is never read twice."},{label:"One control",text:"Expose one control per card, the card itself or its pill. Nothing sits inside a whole-card link."},{label:"Keyboard",text:"One tab stop: the card when it is the link, the pill when it is. A card with no destination is not in the tab order at all."},{label:"Focus ring",text:"Draw the standard focus ring on whichever element is the link, and keep it visible on every brand ground, the dark promo included."},{label:"Nothing false to click",text:"A card that only composes a layout takes no destination. A stand-in destination announces as a link and goes nowhere."},{label:"Empty state",text:"Keep the empty-state box hidden from assistive technology, glyph and all. It carries no words, and the headline already names the card."},{label:"Hover on touch",text:"Keep the headline underline behind a pointer query, so no hover treatment sticks after a tap."},{label:"Target size",text:"A clickable card is a large target already. Keep the CTA pill at or above the 40px pointer floor, on both layouts."},{label:"Copy over photography",text:"A promo over a photograph carries an overlay or a solid block, never the bare picture. Both hold the copy above 4.5:1 on every brand."},{label:"Headline length",text:"A long headline has to stay readable. No line clamp ships, so the layout takes two lines or more."}],openItems:[{question:"Should a card ever carry a CTA and stay clickable itself? Today authoring a CTA moves the link onto the pill",owner:"Design"},{question:"Should a card with no destination ever carry an action of its own? Today the combination is refused while it is being built",owner:"Design"}]}}}},oe={default:g,image:Z},s={eyebrow:"Tutorial",title:"How to Get a Full-Coverage Look",subtitle:"A step-by-step routine for all-day wear.",cta:"Shop the Collection"};function G({variant:e="default",image:o,backdrop:r}){const p=o===null?void 0:o??oe[e];return t.jsx("div",{style:{width:280},children:t.jsx(a,{href:"/collections/lips",variant:e,backdrop:r,eyebrow:s.eyebrow,title:s.title,subtitle:s.subtitle,cta:s.cta,image:p})})}const ae=[{key:"editorial",label:"Editorial",props:{variant:"default"},dimension:"variant"},{key:"promo-overlay",label:"Image promo (overlay)",props:{variant:"image",backdrop:"overlay"},dimension:"variant"},{key:"promo-solid",label:"Image promo (solid block)",props:{variant:"image",backdrop:"solid"},dimension:"variant"}],k=[{key:"default",label:"Default"},{key:"hover",label:"Hover",pseudo:"hover"},{key:"focus",label:"Focus",pseudo:"focusVisible"},{key:"no-photo",label:"No photograph",props:{image:null},dimension:"media"},{key:"failed",label:"Photograph failed",props:{image:L},dimension:"media"}],h={args:H,argTypes:P,render:e=>t.jsx(q,{...e}),parameters:{controls:{sort:"none"},docs:{description:{story:"The editorial card with its text slots switched on: eyebrow, headline and subtitle. Turn **CTA** on to add the pill under them, 32px below the copy block; it is a visual call to action inside the card link, not a second destination. Switch **Layout** to Image promo to watch the same controls drive the full-bleed panel instead, **Alignment** to Centred to move the copy and the CTA together, and **Ground** to Dark to see the card on the one inverse mount in the library, CarouselSection's Featured Categories band."}}}},ne={...H,variant:"image",eyebrow:"New Arrivals",title:"Sharp Line Liquid Liner",subtitle:"Blackest black, drawn in one pass.",cta:"Shop the Collection",image:ee},l={name:"Image promo",args:ne,argTypes:P,render:e=>t.jsx(q,{...e}),parameters:{controls:{sort:"none"},docs:{description:{story:"The same card in its other layout, open in its own look: a full-bleed panel with the copy set on the photograph, its own CTA, and a backdrop holding the type legible. **Backdrop** is the choice this layout adds and it has exactly two values, the gradient **Overlay** it draws by default and the **Solid block** that replaces it. There is no third: a promo never sets its copy on a bare photograph. Switch **Layout** back to Editorial and this is the tile above, which is the point of the pair, two shapes rather than two skins of one."}}}},d={name:"All states",parameters:{themeShellPadding:!1,pseudo:$(k,{pseudoTarget:".ds-content-card__cta"}),docs:{description:{story:"The two ratified layouts against the card's states, in one labelled grid: **Editorial**, **Image promo (overlay)** and **Image promo (solid block)** down the side, **Default**, **Hover**, **Focus**, **No photograph** and **Photograph failed** across the top. The promo's two rows freeze its own Backdrop control at both values, so the overlay and the solid block sit side by side here instead of asking a reader to flip the control on the Image promo story. The two media columns are the distinction the card turns on: **No photograph** is a card authored without one, so the editorial card draws the empty state and both promo rows draw their solid panel, both finished; **Photograph failed** is a source that was authored and did not load, so all three rows show the empty state, because a lost photograph is a fault and reads as one. **Hover** and **Focus** are frozen with storybook-addon-pseudo-states on the CTA, so both sit still for a design review or a screenshot. Every cell here is a card with a destination AND a call to action, which is what makes those two columns mean anything and which element they land on: authoring a CTA moves the link onto the pill, so the pill is what hovers and what takes the ring. The other link form, where the card itself is the target and the headline underlines on hover of anywhere, is drawn beside the other two in **Destination** below. This is a QA surface, not themed product UI, so its own chrome stays neutral across brands."}}},render:()=>t.jsx(Q,{rows:ae,columns:k,render:G})},m={eyebrow:"Tutorial",title:"How to Get a Full-Coverage Look",subtitle:"A step-by-step routine for all-day wear.",image:g},c={name:"Destination",parameters:{pseudo:{hover:[".ds-content-card"]},docs:{description:{story:`One card, three authorings, with hover held on all three roots so the difference sits still. **A destination and no CTA** makes the whole card the link: the headline underlines under the pointer, the cursor is a hand, Tab reaches the card and Enter follows it. **A destination and a CTA** moves the link onto the pill: the card stops being a target, so it takes no hand, no tab stop and no underline, and the one thing to press looks like a button. **No destination** is the same card composing layout: the same photograph, the same type, the same spacing, and nothing to click.

There is one target per card and never two. Authoring a call to action is what decides which element it is.

Hover is frozen on all three here. Only the first answers, and that is the component rather than the story: the hover rules are written for the card that is a link, and the other two roots have no way to reach them.

There is no switch for this. The destination and the CTA are the switch, which is the same contract **Button**, **Icon button** and **Nav item** already carry. A card that only composes a layout is authored with no destination rather than pointed at a placeholder, so it never announces as a link that goes nowhere.`}}},render:()=>t.jsxs(ie,{columns:3,children:[t.jsx(w,{label:"A destination, no CTA (the card is the link)",children:t.jsx(a,{href:"/collections/lips",...m})}),t.jsx(w,{label:"A destination and a CTA (only the button)",children:t.jsx(a,{href:"/collections/lips",cta:"Shop the Collection",...m})}),t.jsx(w,{label:"No destination (composes layout)",children:t.jsx(a,{...m})})]})};function ie({children:e,columns:o=2}){return t.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, minmax(0, 1fr))`,gap:"var(--size-400)",alignItems:"start"},children:e})}function w({label:e,children:o}){return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--size-200)"},children:[t.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:"var(--font-size-small)",letterSpacing:"var(--font-tracking-eyebrow)",textTransform:"uppercase",color:"var(--color-text-muted)"},children:e}),o]})}var T,A,C;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: EDITORIAL_ARGS,
  argTypes: CONTENT_CARD_ARG_TYPES,
  render: args => <ConfigurableContentCard {...args} />,
  parameters: {
    controls: {
      sort: 'none'
    },
    docs: {
      description: {
        story: 'The editorial card with its text slots switched on: eyebrow, headline and subtitle. ' + 'Turn **CTA** on to add the pill under them, 32px below the copy block; it is a ' + 'visual call to action inside the card link, not a second destination. Switch ' + '**Layout** to Image promo to watch the same controls drive the full-bleed panel ' + 'instead, **Alignment** to Centred to move the copy and the CTA together, and ' + "**Ground** to Dark to see the card on the one inverse mount in the library, " + "CarouselSection's Featured Categories band."
      }
    }
  }
}`,...(C=(A=h.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var S,x,E;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Image promo',
  args: IMAGE_PROMO_ARGS,
  argTypes: CONTENT_CARD_ARG_TYPES,
  render: args => <ConfigurableContentCard {...args} />,
  parameters: {
    controls: {
      sort: 'none'
    },
    docs: {
      description: {
        story: 'The same card in its other layout, open in its own look: a full-bleed panel with the ' + 'copy set on the photograph, its own CTA, and a backdrop holding the type legible. ' + '**Backdrop** is the choice this layout adds and it has exactly two values, the ' + 'gradient **Overlay** it draws by default and the **Solid block** that replaces it. ' + 'There is no third: a promo never sets its copy on a bare photograph. Switch ' + '**Layout** back to Editorial and this is the tile above, which is the point of the ' + 'pair, two shapes rather than two skins of one.'
      }
    }
  }
}`,...(E=(x=l.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var O,I,N;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'All states',
  parameters: {
    // Flush canvas so the grid gets the full width for its columns, the same flag every other
    // matrix story sets. See .storybook/preview.jsx.
    themeShellPadding: false,
    pseudo: getStateMatrixPseudoParameters(CONTENT_CARD_MATRIX_COLUMNS, {
      pseudoTarget: '.ds-content-card__cta'
    }),
    docs: {
      description: {
        story: 'The two ratified layouts against the card\\'s states, in one labelled grid: ' + '**Editorial**, **Image promo (overlay)** and **Image promo (solid block)** down the ' + 'side, **Default**, **Hover**, **Focus**, **No photograph** and **Photograph failed** ' + 'across the top. The promo\\'s two rows freeze its own Backdrop control at both values, ' + 'so the overlay and the solid block sit side by side here instead of asking a reader to ' + 'flip the control on the Image promo story. The two media columns are the distinction ' + 'the card turns on: **No photograph** is a card authored without one, so the editorial ' + 'card draws the empty state and both promo rows draw their solid panel, both finished; ' + '**Photograph failed** is a source that was authored and did not load, so all three ' + 'rows show the empty state, because a lost photograph is a fault and reads as one. ' + '**Hover** and **Focus** are frozen with storybook-addon-pseudo-states on the CTA, so ' + 'both sit still for a design review or a screenshot. Every cell here is a card with a ' + 'destination AND a call to action, which is what makes those two columns mean anything ' + 'and which element they land on: authoring a CTA moves the link onto the pill, so the ' + 'pill is what hovers and what takes the ring. The other link form, where the card ' + 'itself is the target and the headline underlines on hover of anywhere, is drawn beside ' + 'the other two in **Destination** below. This is a QA surface, not themed product UI, ' + 'so its own chrome stays neutral across brands.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={CONTENT_CARD_MATRIX_ROWS} columns={CONTENT_CARD_MATRIX_COLUMNS} render={renderContentCardSpecCell} />
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var D,_,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Destination',
  parameters: {
    pseudo: {
      hover: ['.ds-content-card']
    },
    docs: {
      description: {
        story: 'One card, three authorings, with hover held on all three roots so the difference sits ' + 'still. **A destination and no CTA** makes the whole card the link: the headline ' + 'underlines under the pointer, the cursor is a hand, Tab reaches the card and Enter ' + 'follows it. **A destination and a CTA** moves the link onto the pill: the card stops ' + 'being a target, so it takes no hand, no tab stop and no underline, and the one thing ' + 'to press looks like a button. **No destination** is the same card composing layout: ' + 'the same photograph, the same type, the same spacing, and nothing to click.\\n\\nThere ' + 'is one target per card and never two. Authoring a call to action is what decides which ' + 'element it is.\\n\\nHover is frozen on all three here. Only the first answers, and that ' + 'is the component rather than the story: the hover rules are written for the card that ' + 'is a link, and the other two roots have no way to reach them.\\n\\nThere is no switch ' + 'for this. The destination and the CTA are the switch, which is the same contract ' + '**Button**, **Icon button** and **Nav item** already carry. A card that only composes ' + 'a layout is authored with no destination rather than pointed at a placeholder, so it ' + 'never announces as a link that goes nowhere.'
      }
    }
  },
  render: () => <SpecimenRow columns={3}>
      <Specimen label="A destination, no CTA (the card is the link)">
        <ContentCard href="/collections/lips" {...DESTINATION_EXAMPLE} />
      </Specimen>
      <Specimen label="A destination and a CTA (only the button)">
        <ContentCard href="/collections/lips" cta="Shop the Collection" {...DESTINATION_EXAMPLE} />
      </Specimen>
      <Specimen label="No destination (composes layout)">
        <ContentCard {...DESTINATION_EXAMPLE} />
      </Specimen>
    </SpecimenRow>
}`,...(R=(_=c.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const ge=["Editorial","ImagePromo","AllStates","LinkOrComposition"];export{d as AllStates,h as Editorial,l as ImagePromo,c as LinkOrComposition,ge as __namedExportsOrder,we as default};
