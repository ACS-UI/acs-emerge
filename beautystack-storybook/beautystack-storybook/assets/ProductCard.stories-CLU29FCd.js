import{j as t}from"./iframe-6dx3hp_4.js";import{P as d,C as m}from"./ProductCard-1ftwzkvg.js";import{a as O}from"./annotationPage-eYx--AWZ.js";import{D as o,a as g,f as l,c as a}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Badge-gItHl2ZN.js";import"./Select-DBrm7KPu.js";import"./FieldRequirement-Dn5H0DsY.js";import"./Icon-BihOhSWB.js";import"./MenuItem-bBgP9Lwo.js";import"./newTabMark-TI50-QeA.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";import"./Price-xMe2P_eJ.js";import"./StarRating-BT40pja7.js";import"./SwatchCarousel-BPc8GOsx.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./shadeGroup-Blqfx0Bo.js";import"./IconButton-Btgg2ITq.js";import"./Placeholder-Ed4iQRc7.js";const R=e=>`/revlon-home/${e}`,c=[{name:"Ivory",color:"#F0D5B8"},{name:"Buff",color:"#E3B98F"},{name:"Natural Tan",color:"#C68F5F"},{name:"Cappuccino",color:"#8B5A3B"},{name:"Espresso",color:"#5C3A26"}],i=[...c,{name:"Warm Almond",color:"#B87A4E"},{name:"Golden Beige",color:"#D9A96F"},{name:"Cool Sand",color:"#E8CBA8"},{name:"Deep Cocoa",color:"#4A2C1B"}],_=Array.from({length:20},(e,n)=>{const r=i[n%i.length];return n<i.length?r:{...r,name:`${r.name} ${Math.floor(n/i.length)+1}`}}),F={title:"Longwear Full Cover Foundation",image:R("fc-skin-tint.png"),seal:t.jsx(G,{}),price:13.99,rating:4.2,reviewCount:1460,description:"Buildable full coverage with a soft matte finish that lasts through the day.",shades:c,shadeCount:12,sizes:["1 oz","1.7 oz"],href:"#"},H=[{kind:"new"},{kind:"award"}];function L(e){return H.slice(0,e)}const B=e=>`/ea-collections/${e}`;function G(){return t.jsx("img",{src:B("award-beautyinc-greatest-2026.png"),alt:"BeautyInc, The Greatest Products, 2026",loading:"lazy"})}const U={none:0,few:3,some:7,many:20};function M(e){return _.slice(0,U[e]??0)}const f={title:"Longwear Full Cover Foundation",price:13.99,rating:4.2,reviewCount:1460,description:"Buildable full coverage with a soft matte finish.",shades:c,shadeCount:5,badges:[{kind:"new"}],href:"#"},C={title:"PhotoReady Rose Glow™ Hydrating & Illuminating Primer",price:16.99,rating:4.1,reviewCount:1625,shades:c,shadeCount:5,badges:[{kind:"new"}],href:"#"},j={showDescription:{...a("On"),name:"Short description",description:"Show the optional one-line summary under the title."},tagCount:{...l("Two (the cap)"),name:"Tags",...o({labels:{0:"None",1:"One",2:"Two (the cap)"},options:[0,1,2]}),description:'How many badges to author. Two is the hard cap the card enforces, and the "Two tags" story below proves it by authoring a third anyway.'},showSeal:{...a("On"),name:"Seal",description:"Show the award or certification mark in the top right corner of the picture. It is authored art carrying its own text alternative, so the card takes no view on what it says. One per card, and the tags own the opposite corner."},showPrice:{...a("On"),name:"Price",description:"Show the amount. No ratified requirement lists price, and the card renders without one: an absent amount is a state of the data rather than a mistake. Note that the price also hides itself on the professional channel, which is the Price atom's own behaviour rather than this control."},showRating:{...a("On"),name:"Rating & reviews",description:"Show the star rating and its review count."},showShadeCount:{...a("On"),name:"Shade count",description:`Show the **"N Shades"** line directly under the product name, above the price. It is a fact about the product's range, not a description of the chips: turn **Swatches** off and this line stays, because a card can state how many shades a product comes in without handing over any colours. That is what every page in this library composes today.

The number itself is never authored. This page states the length of the list it handed the card, and the product's own stated count when it handed over none.`},showSwatches:{...a("On"),name:"Swatches",description:`Whether this product has a colour list at all. It owns the chips at the foot of the card: turn it off and the whole row goes, arrows included, and the length control under it goes with it, because a list that does not exist has no length. Turn it back on and the length you had chosen is still the one in force.

It does NOT reach the count line above the price. The two are separate parts of the card and separate switches here: **Shade count** says how many shades the product comes in, and this says which colours the card was handed. A card can draw either, both or neither.`},swatchCount:{...l("Some (7)"),name:"How many shades",if:{arg:"showSwatches"},...o({labels:{none:"None",few:"Few (3)",some:"Some (7)",many:"Many (20)"},options:["none","few","some","many"]}),description:`How long the shade list is, and it appears only while **Swatches** says there is one. **None** empties the row from this end, arrows included, which is the same card **Swatches** off draws. Few and Some are plain static lines; Many is a carousel, because that is where the chips stop fitting the width of this card.

Nothing here is counting to a threshold. Leave it on **Some (7)**, the widest static row this card holds, and narrow the browser instead: the same seven shades tip into a carousel without the length changing.

The "N Shades" line above the price is a different part with its own switch, **Shade count**, and it is unaffected by anything here.`},sizeCount:{...l("Two (a real choice)"),name:"Sizes",...o({labels:{0:"None",1:"One (fixed text)",2:"Two (a real choice)"},options:[0,1,2]}),description:`How many sizes this product comes in, which decides both whether the slot draws and what shape it takes. **None** draws nothing. **One** draws the size as plain text, "Size: 1 oz", because there is nothing to choose and a picker offering one option is a control that cannot be used. **Two** draws the labelled dropdown.

The slot draws on every channel: it is authored per product, not gated by the selling channel. In practice it is Elizabeth Arden's field rather than this brand's (her own annotation says as much), which is brand guidance for whoever populates \`sizes\`, not a rule this control enforces.

Size and **Swatches** are alternatives on the reference: makeup draws its shades, creams and similar draw a size, so a product carries one or the other and the two are not shown together.`},align:{...g("Centred"),name:"Alignment",...o({labels:Object.fromEntries(m.map(e=>[e.value,e.label])),options:m.map(e=>e.value)}),description:"How the column under the photograph is arranged. Centred is the default and is what the card draws when a caller says nothing; left aligned is the second arrangement. It moves the title, the short description, the price, the rating and the shade row together."},ground:{...g("Paper"),name:"Ground",...o({labels:{paper:"Paper",inverse:"Dark"},options:["paper","inverse"]}),description:"Which ground the card was placed on. The host paints the plane; on Dark the card repaints only its own title, meta ink and media rule, and passes the axis down to the price, the star rating, the size picker and the shade rail."},product:{control:!1,table:{disable:!0}},inverse:{control:!1,table:{disable:!0}}},W={product:F,showDescription:!0,tagCount:2,showSeal:!0,showPrice:!0,showRating:!0,showShadeCount:!0,showSwatches:!0,swatchCount:"some",sizeCount:2,align:"center",ground:"paper"},D=e=>({background:e==="inverse"?"var(--color-bg-inverse)":"transparent"});function $({product:e,showDescription:n,tagCount:r,showSeal:x,showPrice:A,showRating:u,showShadeCount:P,showSwatches:z,swatchCount:E,sizeCount:N,align:q,ground:w}){const p=z?M(E):[],I={...e,description:n?e.description:void 0,badges:L(r),seal:x?e.seal:void 0,price:A?e.price:void 0,rating:u?e.rating:void 0,reviewCount:u?e.reviewCount:void 0,shadeCount:P?p.length||e.shadeCount:void 0,shades:p,sizes:e.sizes.slice(0,N)};return t.jsx("div",{style:{width:304,maxWidth:"100%",...D(w)},children:t.jsx(d,{product:I,align:q,inverse:w==="inverse"})})}const me={title:"Molecules/Product Card",component:d,tags:["autodocs"],argTypes:{headingLevel:{control:!1,table:{disable:!0}}},parameters:{docs:{page:O("ProductCard"),toc:{headingSelector:"h2"},description:{component:"A modular container that groups everything about one product, image, name, price, rating and shade swatches, into a single clickable block. The whole card is one link target: every control inside it, including the swatch row, sits inside that one destination."}},componentDoc:{usage:`
## When to use

- ✅ **One product in a list, a grid or a rail.**
- ✅ **When the whole block should be one destination**, so a shopper can click anywhere in it.
- ✅ **When a product sells in shades.** The shade row lives here, and it turns into a carousel by
  itself when the chips stop fitting.

- ❌ **The product page itself.** That is **PDP Hero**, the buy box.
- ❌ **An article, a promo or any editorial block.** That is **Content card**.
- ❌ **Arranging many cards on a page.** That is **Card grid**. The card is the unit that carries
  the functionality; the grid is the arrangement.
`,anatomy:`
## Anatomy

Order below is what the shipped card renders.

| Part | Required? | Note |
|---|---|---|
| **Root**, the whole card as one clickable block | required behaviour | The **product name** carries the link, and a hit area stretched over the card makes every click inside it land on that one destination. So the link announces the product and nothing else, and a control with its own action, the shade row and the cart, sits above the hit area rather than inside the link |
| **Media**, the product image or a placeholder | **required** | Never omitted: a card with no image source still renders a placeholder box rather than collapsing. The box is square, and a photograph is cropped to it from the centre. The **Spec** view draws the card with no source yet, on both grounds |
| **Media rule**, the hairline under the image | brand anatomy, **not decoration** | It is the element that carries the hover state, and whether it draws at all is the brand's: its width is a brand value, and a brand that sets zero has no line |
| **Seal**, top right on the media | optional | An award or certification mark, 48px, at the same inset the tags use on the opposite corner. The author passes **art**, which carries its own ground and its own name. One draws |
| **Tags**, overlaid on the media | optional, **capped at two** | Content comes from product metadata, colour and shape come from tokens. The taxonomy is still owed, and "New" is the only tag drawn today |
| **Title** | **always required** | Drawn at the heading rung, at every width. Its heading LEVEL is a separate decision the page makes |
| **"N Shades" count line** | optional | Directly under the product name, above the price. Derived from \`product.shadeCount\`, never authored and never counted off the chip list: the two disagree on 2 of the 22 live tiles that draw both, so a card deriving one from the other would print a false number on those |
| **Short description** | optional | |
| **Price** | ships unconditionally **in code**, and is **not** in the ratified required list | Hides itself on the professional channel, which is Price's own channel behaviour rather than a rule of this card |
| **Rating and reviews** | optional | |
| **Size** | optional | Fixed text at one size, a labelled picker at two or more (see the size control note below). Draws on every channel |
| **Shade chips**, the swatch carousel | optional | The shared **Swatch carousel**, which becomes a scrollable carousel only once the chips stop fitting the card, a measurement rather than a count. Always the LAST part of the card's own stack, after the size picker and after the cart, in every combination of optional fields. Independent of the count line above: a product can carry either, neither or both |

- **Tokens own the look.** Badge colour and radius, the swatch ring, size and gap, the media rule
  and every type role.
- **The product owns the content.** Shade colours, product names, copy, imagery, and each tag's
  *kind*. A tag's look comes from tokens and its content arrives from product metadata: authors
  choose the kind of a tag, never its colour.

**Once the root is a link, every control inside it is nested inside that link**, so the swatch
needs deliberate handling: the card cancels the link's own activation on that click rather than
letting it bubble and fire twice, and then **a swatch click navigates to the PDP**, which is a
ratified requirement. **Nothing is nested inside the card link at all**, and three things were not long ago: the size
picker, the call to action and the shade row. The link is the product name and a stretched pseudo
element carries the hit area, so every control on the card is a sibling of it and is raised above
that hit area. **A control on the card therefore cannot navigate by accident**, which is what makes
the restored size picker safe to place there: it has no ancestor anchor to cancel.

**The card is deliberately its own component, not a limited Card grid.** The overlap between the
two was raised and settled: a single product carries enough required functionality, the swatches
and the nested-link handling, that it needed its own container.

### Variants

**There is one composition.** A second one, \`minimal\` (tags overlaid on the media, the image
bottom-aligned on the media rule, the shade count and the price, no rating), is retired. A caller
that wants that reading mounts this same card and does not author \`rating\` or \`description\`, the
mechanism every other optional field on this card already uses.

**Alignment is an axis, and centred is the default.** The title, the short description, the
price, the rating and the colour row move together. A caller that says nothing gets the centred
arrangement; **Alignment** in Controls switches it to left aligned and back. It is declared once
on the card root and every part that follows it reads that one declaration.

**No ratified requirement defines a variant at all.** No criteria line ever named \`default\` or
\`minimal\`; both were design-system and channel decisions, which is why retiring one needed no
client sign-off. The drawn field order is **closed**: image, rule, title, "N Shades", short
description, price, rating, size, swatches, and the card draws whichever of those a product
carries, in that order. Its centring, its order, its media rule and the count line are settled.

**The swatch carousel is always last.** Whatever combination of optional fields a caller authors,
the swatch row renders after the size picker, never before it.

**A second axis: which ground the card was placed on.** Say whether the card lands on a dark
ground. Two grounds are both drawn in the Spec view's states block.

- **The host declares the plane, the card resolves the ink.** The card paints no ground of its
  own: the plane under it is whatever the host already paints there. Turning **Ground** to Dark
  does not hand the card a colour to fill with; it re-binds the three values the card pins for
  itself, its title ink, its quiet meta ink and its media rule, and it passes the same axis down
  to **Price**, which owns its own ink.
- **No new colour entered the system for it.** Every value on the dark ground is a role the
  library already published.
- **Three parts do not follow, and that is a gap rather than a decision.** The star rating, the
  shade rail and the size field publish no inverse axis of their own, so wherever a card draws them
  they stay paper-pinned on a dark ground. Measured on the dark ground: the rating's review count and
  the size field's label both read **1.36:1**, and the size field's value is unaffected because the
  control paints its own white ground under it. The cards the carousel section composes today are
  handed no rating, no shade list and no sizes, so they draw none of the three by omission; a
  caller that hands this same card a rating on a dark ground hits the gap directly. Repainting the
  three from this card would be exactly the override the axis exists to delete.
- **The hover treatment is the same on both grounds.** The title and the media rule step to the
  bright accent, which was measured against the page ground and has never been measured against
  the dark one. It is carried as an unchecked accessibility row rather than quietly changed.

**Neither a struck-through sale price nor the merchandising tag vocabulary is drawn here.** No
ratified requirement names either one.
`,guidance:`
## Behaviors

### The annotation, word for word

The UX review annotated this component.
Everything in this subsection and in *Content and authoring* below is the reviewer's own prose,
transcribed rather than rewritten, because a reviewer's notes are the source and the library's job
is to answer them and not to improve them. Her note covers two components in one comment; only the
Product Card half is here.

**Purpose**

> The Product Card groups key product information—such as imagery, name, price, ratings, shade
> options, and available shade count—into a scannable, interactive card. It allows users to review
> product details and navigate to the Product Detail Page. The card is used within Carousels or Card
> Grids on Collection and Product Category Pages mostly. Product Card content is dynamically
> populated from product data by default, admins can enable or disable the visualization of this
> data, for example reviews. A manually authored version may be supported when required.

**Behavior**

> - Selecting the card navigates to the Product Detail Page.
> - Selecting a swatch also navigates to the Product Detail Page, with the swatch applied on the Hero.
> - If swatches use a carousel, selecting the navigation arrows moves through the available swatches.
> - The entire card is clickable or tappable when a destination is provided.
> - On pointer devices, hovering over the Card triggers a visual state change.
> - The card adapts to the grid layout of its parent component.
> - Interactive elements within the card must not conflict with the card-level link behavior.

### States

- **Resting.** The only state described for the card body.
- **Hover, on desktop only.** The title brightens to the accent colour and the media rule brightens
  with it. Every hover rule sits behind a pointer check, because no hover
  on mobile is a requirement rather than a preference. No hover state is drawn anywhere, so this
  treatment has no reference to check against.
- **Focus-visible.** On every interactive part, including the ones nested inside the card's own
  link.
- **Swatch, selected.** A stronger ring around the first shade in the list. Every drawn swatch
  wears the same ring, so no selected-against-unselected pair exists to check it against. Clicking
  a swatch goes to the PDP rather than changing which shade shows as selected, because the card
  keeps no selection of its own.
- **Partial star fill.** A rating like 4.2 out of 5 is a real state the card must support. The
  drawn sample shows 0 stars and 0 reviews, so the mechanic is never demonstrated there.
- **On a dark ground.** The host paints the dark plane; the card repaints only its own title,
  quiet meta ink and media rule to read against it, and passes the ground to Price, StarRating,
  the size field and shade navigation. Each keeps its text and controls legible on that ground.
- **Quiet.** Every optional field can be absent at once. Turn *Short description*, *Tags*,
  *Rating & reviews* and *Swatches* all off in **Controls** and the card is down to its required
  parts, the picture, the title and the link. Only
  the full field set is ever drawn, so those combinations have no visual reference.

**The swatch row has two shapes, and a measurement decides which.** One requirement said the row
may become a carousel depending on the number of swatches; the drawings show it becoming one only
at the narrowest frame, on the same shade count. Both are true at once: **the row becomes a
carousel when the chips it was handed no longer fit the width the card gives it.** Twenty shades
overflow a card. The same four shades overflow a narrow card and not a wide one. Seven shades in a
full-width card do not overflow at all, which is why they draw as a plain line. Nothing is authored
and no threshold constant exists: move **How many shades**, or narrow the browser without
touching it, and both change the same sum.

**At the row's ends the arrows disable themselves**, and when the shades fit there are no arrows at
all rather than two permanently disabled ones, because a control that can never do anything
promises more than the row has. That treatment is an implementation choice, and no ratified
requirement describes it. The row is the shared **Swatch carousel**, so the arrow's hover moves
the ground behind it rather than flipping its ink to the accent, and a switched-off arrow dims
with the system's shared value rather than a hand-written one.

### Interactions

- **Click anywhere on the card**, the media, the title, the price, the rating or the whitespace,
  and it goes to the destination.
- **Click a swatch** and it opens the PDP too. The ratified line names the card *or* the swatch.
- **Click a carousel arrow** and the row advances by one shade, never past either end. The arrows
  exist only while the shades do not fit.
- **A swatch click does not change the product image.** It was asked for and then withdrawn. The
  gate asserts the change stays *absent*, so a future contributor cannot put it back after reading
  only the earlier request.

## Rules

- ✅ **Do** keep the whole card clickable, and let the product name be the thing that carries the
  link. A control with its own action goes beside the link and above the card's clickable area,
  never inside it.
- ✅ **Do** drive badges from their kind, so brand tokens style them.
- ❌ **Don't** make a swatch click change the product image. It was **explicitly withdrawn**.
- ❌ **Don't** put content behind hover. Mobile has none.

- ❌ **Don't** show more than two tags, and don't invent badge vocabulary before the taxonomy
  lands. Sale, Best Seller and Trending were invented here, not ratified, and a reader would
  reasonably take them as agreed.
- ❌ **Don't** author a sale price here. No requirement names one.
- ❌ **Don't** assume price is required. It is not in the ratified state list.
- ❌ **Don't** reach for a second card presentation to hide a field. There is one Product Card;
  a rail that does not want the rating or the description does not author them, the same rule
  \`seal\`, \`badges\`, \`sizes\` and \`shades\` already follow.
- ✅ **Do** expect the card to fill the height a host gives it. In a row of cards drawn at one
  height the picture and the product name stay at the top and the price and rating row drops to
  the row's base line, taking the size field and the shade rail with it, so the prices
  line up across the row however many lines each name takes. Nothing stretches a card standing
  alone or in a carousel, so nothing moves there.

- ✅ **Do** tell the card which ground it was placed on, and let it resolve every ink itself.
- ❌ **Don't** repaint the card's parts from the page or the section around it. That is what the
  ground axis replaced, and a section that repaints one part is a section that will miss the next.
- ✅ **Do** use inverse on a dark ground: the rating and review count follow the card.
- ❌ **Don't** assume the shade rail or size label is ready for a dark ground; those remain open.

- ✅ **Do** give the image the product name as its alt text, never "product image".
- ✅ **Do** let the card's link be named by what it **contains**, not by a label put over the top of
  it: a label can drift from what the link really holds, and that is how two layouts of this card
  came to announce two different things. That content is the product name plus, when the price is
  drawn, a visually-hidden note carrying it: a screen reader hears "Longwear Full
  Cover Foundation $13.99" rather than the name alone, which two cards differing only in price used
  to make indistinguishable before the PDP loaded.
- ❌ **Don't** put a control inside the card's link. An interactive element inside a link is
  unparseable: served as HTML the parser closes the link early and ejects the rest of the card
  out of it.
- ✅ **Do** keep the rating's text equivalent, "4.2 out of 5 stars, 1460 reviews", rather than five
  bare glyphs.
- ✅ **Do** name every swatch by its shade. Colour alone never conveys which shade it is.

### Content and authoring, word for word

The reviewer's own list, transcribed. It is the source for the character counts below, which this
library did not carry until she published them.

> - **Product name:** Required. If authored character recommendation: 48.
> - **Image:** Required.
> - **Price:** Displayed when available or required for the market.
> - **Short description:** Optional. If authored character recommendation: 76.
> - **Rating and reviews:** Optional.
> - **Badges:** Optional, with a maximum of two.
> - **Icon:** Optional, such as an awards icon.
> - **Size selector:** Optional. (This applies to Elizabeth Arden, not used in Revlon.com)
> - **Swatches:** Optional. Depending on the number of swatches, they may be displayed as a carousel.
> - **Number of shades:** Optional.

### Content rules

- ✅ **Do** write the title as the product name, in sentence case. It shows at most two lines; a
  longer name is cut with an ellipsis, and the full name is still read by assistive tech.
- ✅ **Do** keep an authored title within **48 characters** and an authored short description within
  **76**. Both are recommendations from the annotation above, not enforced limits on length: the
  short description still never truncates, and the title's two-line ceiling is a visual clamp, not
  a character count.
- ✅ **Do** let "N Shades" be derived from data. It is never authored.

## Open items

**From the annotation, and what each note met.** The three design notes are transcribed here and
answered under each one. Two are settled; the third stays open and is the row this component is
waiting on.

> - **Short description, Icon, and Size Selector:** These appear to be requirements for Elizabeth
>   Arden rather than Revlon. Please confirm whether they should remain in the shared Product Card
>   component.

**Answered, and each of the three separately.** The Icon line was mis-scoped and badly written in
the sheet, and the **Seal** on this card is its implementation, so it stays and it is built. The
**cart action** was direct-to-consumer behaviour, and it left the library with the other
direct-to-consumer controls: the only buying route the criteria sheet names anywhere is its
retailer-locator row, so a card that hands the shopper to a retailer has no cart to add to. **The size selector is different.** The UX review raised it again: "I see it
in the configuration options, but it's not rendering!" It is brand-specific in PRACTICE, an
Elizabeth Arden field this brand rarely populates, which is exactly what her own note says; it is
not a channel restriction, and a channel gate in code is what made it invisible while it was
authored correctly on this page's own \`retailer\` default. The picker now draws wherever \`sizes\`
is authored, on every channel, in the two shapes the Elizabeth
Arden collection draws: fixed text reading "Size: 1 oz" when there is one size, because a picker
offering one option is a control that cannot be used, and the labelled dropdown when there are two
or more. The **short description** stays, and her own list keeps it as an optional field with a
recommended 76 characters. So two of the three she questioned are built, the size selector
wherever it is authored and the description unconditionally, and the cart is gone by scope.

> - **Icon:** If retained, its usage and visual treatment require a design definition. Discuss with
>   the team to confirm its source and intended purpose.

**Answered.** It is retained and it has a definition: 48px, top right on the media, at
the same inset the tags use on the opposite corner, authored art carrying its own text alternative,
one per card. It is measured against the Elizabeth Arden skin care collection rather than invented,
and the cover mounts that reference's own award mark. Since the same day it wears a hairline so its
white disc reads against a white photograph.

> - **Swatch Carousel:** The current interaction may not meet accessibility requirements.

**Still open, and it is the one to settle before this component is called done.** It is the first row
of the table below.

**Three of her lines were already met when she wrote them**, recorded here so nobody re-opens them:
badges are capped at two in code and a third is dropped; no review link is drawn inside a card, the
rating is text and stars only; and a partial star fill lands where the score says, which is the
mechanic the cover's 4.2 demonstrates.

| Question | Owner |
|---|---|
| **The swatch carousel's interaction may not meet accessibility requirements.** From the annotation: review it with accessibility before the behaviour is final. Nothing here is settled until that review happens | Design / Accessibility |
| How should two badges stack: direction, gap, overlap with the image? A second badge is never drawn | Design |
| The drawing puts an "N Shades" count line between the title and the price. **Decided:** the card draws the count **and** the chips, they are turned on and off independently, and each has one seat. The count sits directly under the product name and above the price; the chips sit at the foot of the card. The Elizabeth Arden brand shows both and the live reference shows both: on revlon.com/collections/face, of 30 tiles, 22 draw a count line under the name and 24 draw a swatch row at the foot, and 20 tiles draw both | Design |
| Is the selected-against-unselected swatch treatment right? **Decided:** nothing is selected on a card, so nothing on a card is drawn or announced as selected. The card used to hand the shade row the product's first shade, which put a ring on the first chip of every card and announced that chip as pressed, and nobody had chosen it. A chip here opens the product page. The treatment is untouched where a shade genuinely is chosen | Design |
| **Removed by scope.** The card's ecommerce action, Add to cart and its quantity stepper, left the library with the other direct-to-consumer controls. No buying action is drawn on any channel | Product / DS team |
| Is an award icon a badge with a glyph, or the Badge component with an \`award\` kind? **Answered:** the badge with the glyph, which is the **Seal**. The sheet's Icon line was mis-scoped and badly written and the seal is what implements it. **And the smaller question that was left is answered too: both marks stay.** The text-only \`award\` Badge kind keeps its place in the tag stack beside the seal. Neither of the two stood in for the other, and a card may carry both | Client |
| What is the full badge taxonomy: how many badges exist, and which may appear together? "Up to two" is the only hard number today | Client |
| Is price required after all? **Decided:** it is not, and the card renders without one. No ratified requirement lists price, and the retailer channel already treats it as optional, so an absent amount is a state of the data rather than a mistake. The amount draws nothing when there is none, which is what the price already does on trade surfaces | Client / DS team |
`,spec:{annotation:"ProductCard",elements:[{name:"Root, one clickable block",requirement:"required",condition:"The product name carries the link, a hit area covers the card"},{name:"Media",requirement:"required",condition:"A placeholder box when no source arrives"},{name:"Media rule",requirement:"conditional",condition:"Its width is a brand value, and a brand that sets zero draws none"},{name:"Tags",requirement:"optional",condition:"The first two render, the rest are dropped"},{name:"Seal",requirement:"optional",condition:"Top right on the media, 48px, edged with a hairline so a white mark reads on a photograph"},{name:"Title",requirement:"required",condition:"The heading rung, at every width"},{name:"Short description",requirement:"optional"},{name:"Price",requirement:"optional",condition:"Also absent on the professional channel, which is the Price atom's own behaviour"},{name:"Rating and reviews",requirement:"optional"},{name:"Shade count line",requirement:"optional",condition:"Directly under the product name, above the price"},{name:"Size",requirement:"optional",condition:"Fixed text at one size, a labelled picker at two or more. Draws on every channel."},{name:"Shade chips",requirement:"optional",condition:"The last part of the card: after the size picker, whatever combination of optional fields is authored"}],authorability:[{name:"Title and short description",rule:"Authored. The review recommends 48 characters for the name and 76 for the description."},{name:"Title size",rule:"Not authored. The heading rung, at every width. The page states its heading level."},{name:"Tags",rule:"Up to two, each a kind from product data. An author picks the kind, never the colour or wording."},{name:"Seal",rule:"Authored art in a fixed box. It carries its own ground and its own name, and one draws."},{name:"Shade chips",rule:"Authored as a list of colours. The row grows arrows by itself when the chips stop fitting the card."},{name:"Shade count line",rule:"A separate field, derived from product data and never typed. The card never counts the chips for it."},{name:"Price",rule:"Optional. A product without one draws no amount, and nothing else on the card moves."},{name:"Rating and reviews",rule:"Optional, and authored together. The card draws a partial star between two whole ones."},{name:"Alignment",rule:"Pick centred or left aligned. Centred is the default."},{name:"Ground",rule:"The host says paper or dark. The card never detects its plane and never repaints a part."},{name:"Destination",rule:"One per card, carried by the product name. A control with its own action sits beside the link."},{name:"Size",rule:"Authored as a list of sizes, any channel. One draws text, two+ draw the picker, none nothing."},{name:"Hover",rule:"Nothing may live only in a hover state. There is no hover on touch."},{name:"Look",rule:"Fixed by tokens: badge colour and radius, the swatch ring, the media rule and every type role."},{name:"Media rule",rule:"Not authored. Its width is the brand's, and a brand that sets zero draws no line."}],variants:[{label:"Product card",props:{product:f}},{label:"Product card, dark ground",props:{product:f,inverse:!0}},{label:"Product card, long name",props:{product:C}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"}],render:Q,interactions:["Clicking anywhere on the card goes to the destination, the whitespace between its parts included.","Clicking a swatch goes to the product page too. The card keeps no shade selection of its own.","Clicking a carousel arrow advances the row by one shade, and never past either end.","Hover moves the title and the media rule together, on pointer devices only.","The shade row becomes a carousel when its chips stop fitting, and drops the arrows when they fit.","The count line and the chips are two parts in two places, each optional on its own: either, both or neither.","The host declares the ground. Price, reviews, the size field and shade arrows receive the same inverse setting.","A swatch click never changes the product image, and that is enforced in code.","Using the size picker never navigates: it is a sibling of the card link, not inside it, so there is nothing to cancel."],accessibility:[{label:"Card link name",text:"Named by the product, plus a hidden price note when Price draws one. No label overrides it."},{label:"Badge list",text:'The tag stack is a real `<ul>`/`<li>` list, so a reader hears "list of two items", not one run-on string.'},{label:"Image alternative",text:"The picture is silent by default. The title is beside it, so a description would say the product name twice."},{label:"Seal name",text:"The seal speaks, unlike the picture. It says something no other words on the card do, so its art carries a name."},{label:"Rating text equivalent",text:"The stars carry a written name: the score out of five plus the review count, never five bare glyphs."},{label:"Swatch names",text:"Every swatch is named by its shade. Colour alone never says which shade a chip is."},{label:"Nothing nested in the link",text:"No control sits inside the card link. An interactive element inside a link is closed early by the HTML parser."},{label:"Keyboard",text:"Tab order runs card link, then the shade rail, which is the order on screen. The rail never navigates."},{label:"Reading order",text:"A screen reader reads the title, the description, the price, the rating and then the shades, which is the order on screen."},{label:"Focus",text:"Every interactive part draws a visible focus ring, the ones nested inside the card link included."},{label:"Two-tag cap",text:"A third authored tag never renders, so no badge is pushed off screen or over the image."},{label:"Hover on touch",text:"Every hover rule sits behind a pointer query, so no hover treatment reaches a touch device."},{label:"Contrast per brand",text:"The title, the description and the meta row hold their contrast against the page ground on every brand."},{label:"Contrast on a dark ground",text:"Hover steps the title and the media rule to the bright accent, and that pair has to clear its floor on dark too."},{label:"Composed parts on dark",text:"Review text, the Size label and shade arrows use inverse ink. The size field keeps its light surface."},{label:"Target size",text:"Every swatch, arrow and button stays at or above the 40px pointer floor."}],openItems:[{question:"The review asks that the swatch carousel's interaction be checked with accessibility before it is final.",owner:"Design / Accessibility"},{question:"How should two badges stack: direction, gap, and overlap with the image? No drawing shows a second one.",owner:"Design"},{question:"Decided, reversing the day before: the card draws the count and the chips, each optional on its own. The axis is deleted.",owner:"Design"},{question:"Decided: nothing is selected on a card, so no chip is drawn or announced as selected. A chip opens the product page. The treatment stays where one is chosen.",owner:"Design"},{question:"The ecommerce action left the library by scope, with the other direct-to-consumer controls. No buying action is drawn on any channel.",owner:"Product / DS team"},{question:"Decided: both award marks stay. The Seal answers the sheet Icon line and the text-only award Badge kind keeps its place beside it. Neither replaced the other.",owner:"Product"},{question:"What is the full badge taxonomy: how many exist, and which may appear together? Up to two is the only number today.",owner:"Product"},{question:"Decided: a card renders without a price. The amount is optional and draws nothing when there is none, the way it already draws nothing on trade surfaces.",owner:"Product / DS team"}]}}}};function Q(e){return t.jsx("div",{style:{width:304,...D(e.inverse?"inverse":"paper")},children:t.jsx(d,{...e})})}const s={name:"Full field set",args:W,argTypes:j,render:e=>t.jsx($,{...e}),parameters:{controls:{sort:"none"},docs:{description:{story:`Every optional slot the card supports, filled at once, on the Default layout: the media with its rule, two tags (the cap), the title, the "N Shades" count line, a short description, the price, a partial 4.2-star rating (the mechanic no drawing demonstrates) and seven shade chips. That is the reading order as well as the visual one: the count sits directly under the product name and the chips sit at the foot of the card, which is where the live reference puts each of them. Everything under the photograph is centred, which is the card rather than this layout.

Every optional part in the Anatomy table above is a toggle in **Controls**, so each "optional" claim can be proved by switching it off rather than taken on trust. **How many shades** offers four counts: None empties the row, Few and Some are plain static lines, and Many turns the row into a carousel on its own, because that is where the chips stop fitting this card. Leave it on **Some (7)**, the widest static row this card holds, and narrow the browser instead: the same seven shades tip over without the count changing. Turning **Swatches** off takes the row away and takes both controls under it with it, because a list that does not exist has neither a length nor a way of being drawn.

The shades are **three controls in a row under *Elements***: **Shade count** draws the "N Shades" line under the product name, **Swatches** says whether the card was handed a colour list, and **How many shades** says how long that list is. The first is independent of the other two, because a count is a fact about the product and the chips are the colours this card was given.

Switch **Brand** to restyle it with tokens alone. Switch **Channel** and the price disappears on the professional channel, which is Price's own channel behaviour rather than something this card's criteria asks for. The channel used to relabel a call to action here too, until that slot came out.

Switch **Ground** to Dark to see the second axis. The card paints no plane of its own, so this page paints the dark one behind it the way a real dark host would; the card itself only repaints its title, meta ink and media rule. Price, reviews, the Size label and shade arrows receive the same inverse setting; the size field keeps its light surface.`}}}},h={name:"Truncated title",render:()=>t.jsx("div",{style:{width:272},children:t.jsx(d,{product:C})}),parameters:{docs:{description:{story:"The longest product name in this library's fixtures, at the card's own narrowest width (272px, the floor the fluid grid can hand it). Unclamped, this name grows the title a third line and pushes the shade count, price and rating row down with it; clamped, the title stops at two lines with an ellipsis and everything below it holds its place. The full name still reaches the accessible name: a screen reader reads it whole regardless of how many lines render, because the clamp is a paint-time truncation, not a text change. At the card's wider, 304px width this same name fits two lines without truncating, which is why this story renders at the floor instead."}}}};var b,v,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Full field set',
  args: PRODUCT_CARD_DEFAULT_ARGS,
  argTypes: PRODUCT_CARD_ARG_TYPES,
  render: args => <ConfigurableProductCard {...args} />,
  parameters: {
    controls: {
      sort: 'none'
    },
    docs: {
      description: {
        story: 'Every optional slot the card supports, filled at once, on the Default ' + 'layout: the media with its rule, two tags (the cap), ' + 'the title, the "N Shades" count line, a short description, the price, a partial ' + '4.2-star rating (the mechanic no drawing demonstrates) and seven shade chips. ' + 'That is the reading order as well as the visual one: the count sits directly under ' + 'the product name and the chips sit at the foot of the card, which is where the live ' + 'reference puts each of them. Everything under ' + 'the photograph is centred, which is the card rather than this layout.\\n\\n' + 'Every optional part in the Anatomy table above is a toggle in **Controls**, so each ' + '"optional" claim can be proved by switching it off rather than taken on trust. ' + '**How many shades** offers four counts: None empties the row, Few and Some are plain ' + 'static lines, and Many turns the row into a carousel on its own, because that is ' + 'where the chips stop fitting this card. Leave it on **Some (7)**, the widest static ' + 'row this card holds, and narrow the browser instead: the same seven shades tip over ' + 'without the count changing. Turning **Swatches** off takes the row away and takes ' + 'both controls under it with it, because a list that does not exist has neither a ' + 'length nor a way of being drawn.\\n\\n' + 'The shades are **three controls in a row under *Elements***: **Shade count** draws ' + 'the "N Shades" line under the product name, **Swatches** says whether the card was ' + 'handed a colour list, and **How many shades** says how long that list is. The first ' + 'is independent of the other two, because a count is a fact about the product and the ' + 'chips are the colours this card was given.\\n\\n' + 'Switch **Brand** to restyle it with tokens alone. Switch **Channel** and the price ' + 'disappears on the professional channel, which is Price\\'s own channel behaviour ' + 'rather than something this card\\'s criteria asks for. The channel used to relabel a ' + 'call to action here too, until that slot came out.\\n\\n' + 'Switch **Ground** to Dark to see the second axis. The card paints no plane of its ' + 'own, so this page paints the dark one behind it the way a real dark host would; the ' + 'card itself only repaints its title, meta ink and media rule. Price, reviews, the ' + 'Size label and shade arrows receive the same inverse setting; the size field keeps ' + 'its light surface.'
      }
    }
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var k,T,S;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Truncated title',
  render: () => <div style={{
    width: 272
  }}>
      <ProductCard product={SPEC_LONG_NAME_PRODUCT} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The longest product name in this library\\'s fixtures, at the card\\'s own narrowest ' + 'width (272px, the floor the fluid grid can hand it). Unclamped, this name grows the ' + 'title a third line and pushes the shade count, price and rating row down with it; ' + 'clamped, the title stops at two lines with an ellipsis and everything below it holds ' + 'its place. The full name still reaches the accessible name: a screen reader reads it ' + 'whole regardless of how many lines render, because the clamp is a paint-time ' + 'truncation, not a text change. At the card\\'s wider, 304px width this same name fits ' + 'two lines without truncating, which is why this story renders at the floor instead.'
      }
    }
  }
}`,...(S=(T=h.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const ge=["FullFieldSet","TruncatedTitle"];export{s as FullFieldSet,h as TruncatedTitle,ge as __namedExportsOrder,me as default};
