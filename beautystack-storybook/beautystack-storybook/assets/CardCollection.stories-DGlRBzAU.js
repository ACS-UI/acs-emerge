import{j as a}from"./iframe-6dx3hp_4.js";import{C as T,b as D,c as x,d as S,e as E}from"./CardCollection-Bq5DTwa9.js";import{C as X}from"./ContentCard-Cy_xF-W9.js";import{P as K}from"./ProductCard-1ftwzkvg.js";import{A as $}from"./ArticleCard-C8RmiUi7.js";import{a as J}from"./annotationPage-eYx--AWZ.js";import{B as V}from"./Homepage-BCdkFher.js";import{A as Q}from"./BlogLanding-Cbjy-jut.js";import{c as j}from"./campaign-liquid-liner-D7xVykH6.js";import{p as Z,c as ee}from"./campaign-colorsilk-Dk82vMQn.js";import{D as l,a as s,c as p}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Link-yk_PIpvX.js";import"./Icon-BihOhSWB.js";import"./newTabMark-TI50-QeA.js";import"./Pagination-BryqecgJ.js";import"./IconButton-Btgg2ITq.js";/* empty css               */import"./Badge-gItHl2ZN.js";import"./Select-DBrm7KPu.js";import"./FieldRequirement-Dn5H0DsY.js";import"./MenuItem-bBgP9Lwo.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";import"./Price-xMe2P_eJ.js";import"./StarRating-BT40pja7.js";import"./SwatchCarousel-BPc8GOsx.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./shadeGroup-Blqfx0Bo.js";import"./Placeholder-Ed4iQRc7.js";import"./BrandWordmark-CszUK9Mj.js";import"./SearchBar-DwGR_hzY.js";import"./SearchSuggestions-CAczFYXo.js";import"./Button-CiZyClsp.js";import"./Loading-DyIAIYoE.js";import"./Drawer-CypulVuT.js";import"./useScrollLock-B-psvS0l.js";import"./MediaFrame-CgpnOU1q.js";import"./NavItem-Dq6-KykK.js";import"./Footer-BfocwZBN.js";import"./Hero-BHurgzVJ.js";import"./NewsletterSection-3il-1Xyd.js";import"./Checkbox-C5uneDTR.js";import"./ControlIndicator-DEJX7FyE.js";import"./Input-3DsPWvNA.js";const H=""+new URL("texture-beach-banner-DC5NhiHK.jpg",import.meta.url).href,te=""+new URL("texture-nail-polish-BBiDv6aN.jpg",import.meta.url).href,ae=[{eyebrow:"Tutorial",title:"How to Get a Full-Coverage Look with ColorStay Longwear",description:"A step-by-step routine for all-day, full-coverage wear that never looks cakey.",date:"June 12, 2025",tone:"a"},{eyebrow:"Beauty Tips",title:"5 Ways to Make Your Lip Color Last All Day",description:"Prep, line, blot, set, and touch up: the five habits our artists swear by.",date:"May 28, 2025",tone:"b"},{eyebrow:"New Arrivals",title:"Introducing the Ultra HD Matte Lip Color Collection",date:"July 1, 2025",tone:"a"},{eyebrow:"Guides",title:"Choosing a Foundation Shade Without Stepping Foot in a Store",description:"A quick primer on undertones, coverage levels, and how to read a swatch.",date:"June 3, 2025",tone:"b"},{eyebrow:"Trending",title:"The Skin-Prep Routine Our Artists Swear By",date:"April 22, 2025",tone:"a"}],v="Latest from the Blog",C="Tutorials, tips and the stories behind the shades.",k="View all articles",oe=[{eyebrow:"New Arrivals",title:"Sharp Line Liquid Liner",subtitle:"Blackest black, drawn in one pass.",cta:"Shop the Collection",image:j},{eyebrow:"Summer",title:"Sand, Salt and Everything After",subtitle:"The shades that survive a day outdoors.",cta:"Shop the Edit",image:H}],I=[Z,ee,te,j,H],ne=Q.map((e,t)=>({title:e.title,href:e.href,date:e.date,dateTime:e.dateTime,image:I[t%I.length]})),P=[{value:"product",label:"Product card"},{value:"article",label:"Article card (blog)"},{value:"editorial",label:"Content card: Editorial"},{value:"image",label:"Content card: Image promo"}],O={product:V,article:ne,editorial:ae,image:oe},L={product:{headline:"Best Sellers",subtitle:"They're cult classics for a reason",cta:"Shop All Best Sellers"},article:{headline:v,subtitle:C,cta:k},editorial:{headline:v,subtitle:C,cta:k},image:{headline:"New Arrivals",subtitle:"The shades that survive a day outdoors.",cta:"Shop the Edit"}},F=8;function M(e,t="editorial",i=!1,w=!1){const b=Math.min(F,Math.max(0,Math.round(Number(e)||0))),n=O[t]??O.editorial,g=t==="image"?"image":void 0;return Array.from({length:b},(A,d)=>{const o=n[d%n.length],c=Math.floor(d/n.length),r=c===0?o:{...o,title:`${o.title} (set ${c+1})`},h=`${r.title}-${d}`;if(t==="product")return a.jsx(K,{product:r,inverse:i,headingLevel:3},h);if(t==="article")return a.jsx($,{...r},h);const f=w?{cta:"Read the story"}:null;return a.jsx(X,{href:"/collections/lips",variant:g,inverse:i,...r,...f},h)})}const W={showHeadline:{...p("On"),name:"Headline",description:"Show the optional band headline above the grid."},showSubtitle:{...p("On"),name:"Subtitle",description:"Show the optional band subtitle under the headline. It reads the same body recipe the Carousel section subtitle reads, so the two bands draw the same header."},showCta:{...p("On"),name:"Band CTA",description:"Show the band-level call to action below the grid. It is a separate link from any card's own, and clicking it never touches a card."},showCardCta:{...p("Off"),name:"Card CTA",description:"Give every **Content card: Editorial** cell its own call to action. Off by default. Turn it on to see the row rule: the cards in a row are drawn at the row height, the copy stays at the top of each one and the pills sit on one base line across the row, however many lines each title takes. The Image promo cells carry a call to action already, and the Product and Article cards have no such slot, so this switch reaches the editorial card only."},align:{...s("Left aligned"),name:"Alignment",...l({labels:Object.fromEntries(E.map(e=>[e.value,e.label])),options:E.map(e=>e.value)}),description:"How the headline and the subtitle are arranged. Left aligned is the default and is what the band draws when a caller says nothing; centred is the second arrangement. It moves the headline and the subtitle together. The band CTA sits below the grid, not inside the header, so this axis does not move it."},ground:{...s("Paper"),name:"Ground",...l({labels:Object.fromEntries(S.map(e=>[e.value,e.label])),options:S.map(e=>e.value)}),description:`Which plane the band is set on, the same three the Carousel section offers. **Paper** is the default and paints nothing: the band sits on whatever ground the page already has. **Paper, alternate** is a light neutral, so the whole paper ink set stays and only the ground moves. **Dark** repaints the headline and the subtitle and hands the band CTA the link atom's own inverse treatment.

A painted ground takes an inset, and the band grows its own outer width by exactly that inset, so wherever the band has room for it the cards keep the same track they have on paper. In a window too narrow to give it that room the inset comes out of the track instead, and the count drops the same fluid way it already drops as a window narrows.

**The cards are yours on every ground.** The band lays them out and never reaches into them, so a dark band needs each card told it is on a dark ground. Two of the four card types can be told: the Product card and the Content card. A product card that draws a rating, a shade rail or a size field is one to keep off this plane, because those three parts have no inverse treatment to be handed and stay pinned to their paper inks, and the Article card is the other, because it publishes no plane at all and keeps every ink it has.`},cardCount:{...s("5 cards","A number from 0 to 8"),name:"Number of cards",control:{type:"range",min:0,max:F,step:1},description:"How many demonstration cards fill the track. Cards are data-driven and the grid does not author their content. Fewer cards than Columns allows just leaves the row short, never a stretch to fill it. This stress-tests the wrap and the mobile grid at any count."},cardType:{...s("Content card: Editorial","Choice"),name:"Card type",...l({labels:Object.fromEntries(P.map(e=>[e.value,e.label])),options:P.map(e=>e.value)}),description:`Which card fills the cells. All four are cards the library ships, and the band draws whichever one it is handed: the **Product card**, the **Article card** the blog feed is built from, and the **Content card** in both of its layouts, the editorial tile (picture beside the copy) and the full-bleed image promo (copy over the photograph). The band itself does not change at all.

The track follows the card, so the count can change with the type: Content cards are the roomier card and an uncapped band draws three of them across where it draws four Product or Article cards. Image promo cards take two to a line at most, so with that type the Columns control offers 2 only. The band itself paints the plane for every ground; the Product card and the Content card also re-tint their own ink to read against it (the Content card repaints its own no-photo panel too), while the Article card publishes no plane at all and keeps its paper inks on every ground. Alignment moves the band header and never reaches a card at all.`},columns:{...s("4","Choice"),name:"Columns",if:{arg:"cardType",neq:"image"},...l({labels:Object.fromEntries(x.map(e=>[e,String(e)])),options:x}),description:`The most columns the band draws at full width. The band still shrinks the count as the room narrows, the same way it always has: fewer tracks rather than smaller cards past a point. Resize the canvas to watch it happen. Number of cards sets what fills each row; fewer cards than Columns allows just leaves the row short, never a stretch to fill it.

**Content card: Image promo** takes two columns at most, so with that card type this control offers 2 only.`},imagePromoColumns:{...s("2","Choice"),name:"Columns",if:{arg:"cardType",eq:"image"},...l({labels:Object.fromEntries(D.map(e=>[e,String(e)])),options:D}),description:"The most columns a band of **Content card: Image promo** cells draws: two at most, so the photograph is not cropped too hard. The band holds that ceiling on its own, whatever Columns was set to before the card type changed. It still drops to one column at the narrowest phone widths."},headline:{control:!1,table:{disable:!0}},subtitle:{control:!1,table:{disable:!0}},cta:{control:!1,table:{disable:!0}},ctaHref:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}}},z={showHeadline:!0,showSubtitle:!0,showCta:!0,showCardCta:!1,align:"left",ground:"paper",cardCount:5,cardType:"editorial",columns:4,imagePromoColumns:2,ctaHref:"#"};function U({showHeadline:e,showSubtitle:t,showCta:i,showCardCta:w,align:b,ground:n,columns:g,imagePromoColumns:A,cardCount:d,cardType:o,headline:c,subtitle:r,cta:h,ctaHref:f}){const y=L[o]??L.editorial,Y=o==="image"?A:g;return a.jsx(T,{headline:e?c??y.headline:void 0,subtitle:t?r??y.subtitle:void 0,cta:i?h??y.cta:void 0,ctaHref:i?f:void 0,align:b,ground:n,columns:Y,children:M(d,o,n==="inverse",w)})}const re=660;function se({boxed:e}){return a.jsx("div",{style:{width:e?re:"100%",textAlign:"start"},children:a.jsx(T,{headline:v,subtitle:C,cta:k,ctaHref:"#",children:M(5)})})}const Ze={title:"Organisms/Card Collection",component:T,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{page:J("Card collection"),toc:{headingSelector:"h2"},description:{component:"A band that lays cards out in a grid, and reflows the same cards into a 2-column grid below the tablet breakpoint. It is a layout wrapper: every card keeps its own content and its own click-through."}},componentDoc:{usage:`
## When to use

- ✅ **A set of cards that should wrap onto more rows** as the space narrows.
- ✅ **A band that carries its own headline, or its own call to action**, above and below the
  cards.
- ✅ **A page with many products on display**, where the same cards become a 2-column grid on a
  phone.

- ❌ **Content that should run off the edge of the page** rather than wrap. That is
  **Carousel**.
- ❌ **A whole page section built around a rail** that runs off the edge of the page, with its
  band header sitting beside the cards. That is **Carousel section**. This band shares the
  Carousel's header, headline, subtitle and call to action, and differs in laying the cards out
  as a wrapping grid rather than a rail.
- ❌ **The card's own look, link or hover.** Those live on the card's page, **Product card** or
  **Content card**, not here.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Card track** | required | Lays out whatever card components it is handed, most often product cards |
| **Card slot**, repeated | required, but **owned by the card, not the band** | Its click-through, hover and content model live on the card's own page |
| **Headline** | optional | Renders as a section heading above the track |
| **Subtitle** | optional | A line under the headline, on the same body recipe the Carousel section subtitle reads, so the two bands draw the same header |
| **Band CTA** | optional | A separate link from any card's own, and it needs a destination once written |

- **The band owns the layout only.** The track, the column count and the gaps. The count is
  fluid by default, following the card's own minimum width, and an author may optionally cap it
  at 2, 3 or 4; either way the room available, not a fixed number, still decides how many actually
  fit.
- **The headline and the subtitle are one block.** They sit together in the band header, close to
  each other, and the header, the card track and the CTA are the three blocks the band spaces.
- **The header takes an alignment axis.** Left aligned (the default) or centred, the same two
  values ProductCard and ContentCard publish. It moves the headline and the subtitle together;
  the band CTA is not part of the header and keeps its own position either way.
- **The band takes a ground, and a ground is paint.** Paper (the default), the alternate paper, or
  dark, the same three planes the Carousel section offers. Paper paints nothing and leaves the band
  on whatever ground the page already has; the other two paint a plate. Nothing else changes:
  the band keeps the same width, the same insets and the same card track on all three, which is
  exactly what the Carousel section's own grounds do.
- **The band opens the page, on the same air every section band gets.** There is deep space above
  and below it, the same depth the Carousel section and the Newsletter section draw, and it halves
  once the viewport drops below a wide desktop. It is there on every ground, painted or not, so a
  band does not only start breathing once somebody gives it a colour. Nothing about it is
  authorable: one curve decides how deep every section on the site opens at every width, and that
  is the point of it.
- **The band lays its cards out on the page canvas**, so a band handed the whole viewport centres
  its content instead of stretching the track past the width a card is sized for.
- **The caller owns the cards and the words**, the headline and the CTA label.
- **On mobile the same content becomes a 2-column grid.** The cards reflow into two columns,
  dropping to one at the narrowest phone widths. There is one mobile rendering, a responsive grid,
  not a carousel.

**The card is a different component, and this is not where its rules live.** The band never
decides what a card looks like, whether it links, or how it hovers. Read that off **Product
card** or **Content card**. Rebuilding it here is the mistake this split exists to prevent.

### Variants

**By default the band is fluid.** With no columns set, the track sizes itself from a card minimum
width, so the count follows the room: four across the page canvas, fewer as it narrows, two on a
phone.

**A band of Content cards is the roomier default, three to a line.** The Content card is a wider
card than the Product or Article card and it is capped at half the page canvas, so an unset band
that holds them takes a wider track minimum and draws three across instead of four. A band of two
Content cards spreads them to that cap rather than leaving a gap where a third would have gone, and
a band of four wraps the fourth onto its own line.

**An author can also cap the count, at 2, 3 or 4.** Setting Columns asks for at most that many
tracks at full width; the band still shrinks the count as the room narrows, exactly the way the
fluid default already does, it just never grows past the cap. A capped Content Card band reads the
same card-floor width every other card type does, not its own roomier default, because the cap is a
request for track count rather than a request to keep that extra breathing room.

**A band of Image promo cards draws two columns at most.** The image promo layout crops its
photograph to fill the card, and a narrower card crops it harder, so the band holds two to a line
whatever Columns asks for, and an unset band of them draws two as well. Only 2 can be authored for
it. On a phone it still drops to one column at the narrowest widths.

> **The five-column variant is retired.** It was a ratified requirement, described as a more
> streamlined view of the product cards, and it is the reason this band once took a column count at
> all. Five tracks inside the 1200 page canvas with the 20px content gap is 224px a card, and that
> is below the minimum width a card is now sized for, so the variant asked for a card the library
> does not draw. The requirement keeps its text as provenance in the criteria, marked superseded.
> What "streamlined" meant for the CARD, a different content model or only a narrower column, was
> never resolved and is closed with it. Capping the count at 2, 3 or 4 is a different, narrower
> control: it never asks for five, and it never asks for a different card.

- **Column count is fluid by default, not a breakpoint jump.** Figma shows five columns at 1920px
  and two at both 768px and 393px, with no evidence for where in between the switch should happen,
  so the fluid track stands whenever no cap is set, and a set cap degrades the same fluid way below
  its own ceiling.

**The band draws every card the library ships, and Card type reaches all four.** Three components
and, inside one of them, two layouts: the **Product card**, the **Article card** the blog feed is
built from, and the **Content card** as the editorial tile or as the full-bleed image promo. None of
them is a variant of this band. The band lays out the children it is handed and never reaches inside
one, so switching the type changes what stands in the track and changes nothing about the track's
own rules.

- **The track minimum follows the card.** Product and Article cards read the base card floor, so an
  uncapped band draws four of them across the page canvas. The Content card is the wider card and is
  capped at half the canvas, so an uncapped band of them draws three. Cap the count with Columns and
  every type reads the same card floor, because a cap is a request for tracks rather than for
  breathing room.
- **A card honours the ground only if it publishes one.** The Product card and the Content card both
  take the plane and repaint their own inks on the dark band. The Article card publishes no plane at
  all: it keeps its paper inks wherever it is put, so a dark band is not where it belongs until it
  has one.
- **Alignment is the band header's axis, not a card's.** It moves the headline and the subtitle
  together and reaches no card of any type.

**The ground is a choice, and there are three of them.** Paper is the default and is the plane the
band has always drawn: it paints nothing at all, so it sits on whatever ground the page around it
has. The alternate paper is a light neutral, so the headline, the subtitle and the CTA keep exactly
the inks they have on paper and only the plane moves. Dark repaints the band's own two inks and
hands the CTA the link atom's inverse treatment.

- **A painted ground brings its own inset, and the band widens to pay for it.** The band grows its
  outer width by exactly the inset it adds, so wherever it has that room the card track measures
  the same as it does on paper. Where the room is not there the inset comes out of the track, and
  the count drops the same fluid way it already drops as the window narrows.
- **The cards are yours on every ground.** The band lays them out and never reaches inside them, so
  a dark band needs each card told it is on a dark ground. Keep a product card that draws a rating,
  a shade rail or a size field off the dark plane: those three parts have no inverse treatment to
  be handed and stay pinned to their paper inks.
`,guidance:`
## Behaviors

### States

- **Desktop: a real grid**, fluid by default, or capped at 2, 3 or 4 tracks if an author sets
  Columns. A cap still shrinks below its own ceiling as the room narrows; it is never a fixed
  track count that stretches or clips. A band of Image promo cards draws two at most.
- **Mobile: a responsive 2-column grid.** Below the tablet breakpoint the same cards reflow into
  two columns, and drop to one column at the narrowest phone widths. This is the band's one mobile
  rendering, and it replaced an earlier peekaboo carousel. Narrow the
  canvas to see it take over.
- **Band CTA, resting and hover.** The hover is pointer-gated, so it can never stick after a
  tap. It renders through the shared link atom, so the treatment has one owner across the whole
  design system. On the dark ground it takes that same atom's inverse treatment, handed down
  rather than repainted here.
- **Three grounds, one geometry.** Paper, the alternate paper and dark draw the same header
  rhythm, the same fluid rule and the same mobile grid; only the plane and the band's own two inks
  move. On a phone the painted plate keeps a shallower inset so the 2-up grid is not crowded, and
  the 2-up count itself is the same on all three.
- **Card states belong to the card.** Resting, hover, focus-visible and the whole-card click
  are all verified on the card's own page.
- **Cards in a row share the row's height.** The row is as tall as the tallest card in it and
  every other card in that row is drawn to the same height, at every card type and every column
  count. It is the band's default and there is no prop to turn it off. Each card then anchors its
  own foot: the Content card's call to action, the Article card's read cue and the Product card's
  price and rating row all sit on one base line across the row, however many lines each title
  takes, while the copy above them stays at the top of its own card. Turn the Card CTA switch on
  in the Playground to watch it. A single card has no sibling height to match. It occupies at most half
  the grid outside mobile, preserving the two-column minimum; a carousel keeps its own seat.

**The mobile rendering is settled.** It used to be an open question with two sanctioned answers, a
carousel and a 2-column grid, and no agreed way to choose between them. The grid is now the one
rendering for every card grid and the carousel is dropped, so there is no page-by-page choice left
to make.

**Figma draws no hover and no focus state for either variant.** Every state on this page is
code-owned, not traced from a drawing.

### Interactions

- **Click anywhere on a card and it navigates.** Owned by the card. What this band verifies is
  narrower: that its own gap between cards is not a dead zone nobody can click.
- **Click the band's CTA and it navigates.** It is a separate link from any card's own.
- **Hovering the band's CTA changes it**, on pointer devices only.

## Rules

- ✅ **Do** put the whole-card link on the card, never on the band.
- ✅ **Do** keep the headline and the CTA optional. A band with neither filled is the common
  case, not an edge case.
- ✅ **Do** let the mobile grid stay two columns, dropping to one only at the narrowest phone
  widths. That is the band's one mobile rendering, and a Columns cap does not reach it.
- ✅ **Do** leave Columns unset for a band that should simply fit as many cards as the room
  allows. Set it only when the design calls for a ceiling.
- ✅ **Do** tell the band which ground it sits on, and let it resolve its own inks from there.
- ✅ **Do** tell the cards too. The band never reaches into them, so a dark band with paper-inked
  cards in it is a band nobody told.
- ✅ **Do** expect a row of cards to be drawn at one height, with each card's foot on the row's
  base line. That is the band's default and it is why a row of cards with titles of different
  lengths still reads as a row.

- ❌ **Don't** let the band intercept, relabel or hide a card's own semantics. It is a layout
  wrapper, and the card is the control.
- ❌ **Don't** rebuild a card's click-through, hover or content model inside the band.
- ❌ **Don't** rely on hover to reveal anything. Mobile has no hover, by requirement.
- ❌ **Don't** hard-code a breakpoint to change the column count. Capped or not, the track stays
  fluid below its ceiling; a breakpoint jump is not how this band degrades.
- ❌ **Don't** paint a ground around the band by hand. Pick one on the band and every ink inside
  it that has an answer resolves itself; a wrapper painting a colour is a plane nothing was told
  about.
- ❌ **Don't** pad a short card by hand to make it match its neighbours. The row already draws
  them at one height, and a card padded from the outside is a local override of a finished
  component.
- ❌ **Don't** add space above or below the band in the page around it. The band already opens
  with the section depth every band on the site opens with, and a wrapper adding more is a second
  rhythm nobody can see in one place.
- ❌ **Don't** put a card that draws a rating, a shade rail or a size field on the dark ground.
  Those three parts have no inverse treatment, so they stay pinned to their paper inks there.
- ❌ **Don't** put Article cards on the dark ground either. That card publishes no plane to be
  told about, so the whole card stays on its paper inks and the band cannot repaint it from
  outside. Use a Product card or a Content card there until the Article card carries the axis.

### Content rules

- ✅ **Do** let the cards be data-driven. The band lays out what it is handed and authors none
  of it.
- ❌ **Don't** invent a character limit for the headline or the CTA. Both are owed by design.

## Open items

| Question | Owner |
|---|---|
| Mobile 2-up grid: verify the two columns and the drop to one at the narrowest widths across brands, once built | Design |
| Row gap reads 30px at one size and 20px at the next. The row axis takes the nearest rung to the 30, the column keeps the 20. Deliberate, or auto-layout noise? | Design |
| **Closed with the five-column variant.** What "streamlined" meant for the card, whether that variant's optional CTA kept its own hover, and whether its click line duplicated the base band's, were three questions about a layout that no longer exists: five across the page canvas is narrower than a card is sized for. Kept as record rather than deleted | Closed |
| A band of FOUR Content cards draws three on the first line and one on the second, because the band draws three to a line. Should four read as two and two instead? That is a decision about counts, which a track minimum cannot express | Design |
| On the alternate paper ground the band's ink measures 4.40:1 on Elizabeth Arden Corporate, just under the 4.5 floor, and clears it on the other twenty brands. That brand's alternate surface sits one step too close to its own primary ink, so the fix is the surface step moving rather than this band choosing a different ink. The same pairing is already drawn by the Carousel section | Design |
| **Closed the same day it was asked.** Whether the tablet step belonged to every band or only to the Carousel section is answered: the whole responsive curve is the standard, so every band draws the deep air only on a wide desktop and half of it from there down. Kept as record | Closed |
| **Parked for a future templates pass.** Pages that mount this band inside a section wrapper stack the wrapper's own air on top of the band's. Product listing, Search results, Campaign details and Blog landing all read that way. Left as is until that pass takes it on, not decided here | Parked |
| Character limits for the headline and the CTA | Design |
| The Article card publishes no ground axis, so a band of them on the dark plane draws paper ink on a dark plate. Should that card take the plane the Product card and the Content card already take, or is the blog feed a paper-only surface? | Design |
`,spec:{elements:[{name:"Card track",requirement:"required"},{name:"Card slot, repeated",requirement:"required",condition:"The card owns its own link, hover and content model."},{name:"Headline",requirement:"optional",condition:"Drawn only when the band is given headline text."},{name:"Subtitle",requirement:"optional",condition:"Drawn under the headline when given subtitle text. Same body recipe as the Carousel section subtitle."},{name:"Band CTA",requirement:"optional",condition:"Drawn only when it is given both a label and a destination."}],authorability:[{name:"Headline",rule:"Free text, and it can be left out. The band draws it as the heading above the track."},{name:"Subtitle",rule:"Free text under the headline, left out or kept. Same body recipe as the Carousel subtitle."},{name:"Alignment",rule:"Left aligned (default) or centred, moving headline and subtitle together."},{name:"Ground",rule:"Paper (unpainted default), the alternate paper, or dark. Paint only: no geometry moves."},{name:"Band CTA",rule:"Free label and free destination, and it can be left out. Write both or neither."},{name:"Cards",rule:"Any of the four cards the library ships, and the author supplies everything inside them."},{name:"Card count",rule:"Any number. The track wraps to fit, so the system fixes no count."},{name:"Card order",rule:"The order the cards are handed in is the order they are drawn."},{name:"Layout",rule:"Fluid by default. An optional cap sets the most columns at full width, shrinking below that."},{name:"Columns",rule:"Unset (fluid) or 2, 3 or 4. A ceiling, not a fixed count: fewer cards or room draw fewer tracks."},{name:"Image promo columns",rule:"Two at most. A band holding an Image promo card draws two to a line whatever Columns says."},{name:"Mobile rendering",rule:"A 2-column grid on a phone, one at the narrowest widths. Fixed by the system; no cap reaches it."},{name:"Band rhythm",rule:"Fixed by the system. The depth every band opens with, halved below a wide desktop."},{name:"Card behaviour",rule:"Fixed by the card. The band never intercepts, relabels or hides what a card does."}],variants:[{label:"Fluid track",props:{}}],states:[{key:"default",name:"Default",props:{boxed:!0}},{key:"hover",name:"Hover",pseudo:"hover",props:{boxed:!0}},{key:"focus",name:"Focus",pseudo:"focus-visible",props:{boxed:!0}}],render:se,interactions:["Clicking anywhere on a card navigates. That link belongs to the card, never to the band.","Clicking the band CTA navigates. It is a separate link from any card's own.","Hovering the band CTA changes it on pointer devices only. Nothing happens on touch.","Below the tablet breakpoint the same cards reflow into a 2-column grid, dropping to one column at the narrowest widths.","The column count is fluid at every width. An optional cap sets the most tracks drawn, degrading below it.","No content is revealed by hover alone, so a touch device loses nothing."],accessibility:[{label:"Keyboard",text:"Every card and the band CTA are reachable with Tab in reading order, at every width including the mobile grid."},{label:"Screen reader",text:"The band wraps its cards without hiding, relabelling or reordering the heading and link each card carries."},{label:"Focus",text:"The focus ring on a card or on the band CTA stays fully visible and is never clipped by the track."},{label:"Motion",text:"Nothing scrolls or advances on its own at any width. The mobile grid reflows in place, with no autoplay."},{label:"Target size",text:"The band CTA and every card link keep a target of at least 44px in both directions at every width."},{label:"Contrast",text:"Card ink, the headline and the focus ring hold 4.5:1 on all three grounds, on every brand. One measured exception sits in Open items."}],openItems:[{question:"Row gap reads 30px at one size and 20px at the next. The row axis takes the nearest rung to the 30, the column keeps the 20. Deliberate, or auto-layout noise?",owner:"Design"},{question:"Does the five-column variant change the card content model, the column count, or both?",owner:"Design"},{question:"Does the five-column variant's optional CTA keep its own hover state and its own destination?",owner:"Design"},{question:"Character limits for the headline and for the band CTA.",owner:"Design"},{question:"The Article card publishes no ground axis, so a band of them on the dark plane keeps paper ink. Should it take the plane, or is the blog feed paper only?",owner:"Design"},{question:"On the alternate paper ground the band ink measures 4.40:1 on Elizabeth Arden Corporate, under the 4.5 floor. It clears on the other twenty brands.",owner:"Design"},{question:"Closed. The tablet step belongs to every band: the whole responsive curve is the standard, not the widest rung of it.",owner:"Closed"},{question:"Parked for a future templates pass. Section-wrapper pages stack their own air on top of the band's. Left as is until that pass, not decided here.",owner:"Parked"}]}}}},u={name:"Default",args:z,argTypes:W,render:e=>a.jsx(U,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:`The base band, with its headline and CTA both on, laid out as the desktop grid over five content cards. Below the tablet breakpoint the same cards reflow into a 2-column grid, dropping to one column at the narrowest phone widths. That is the band's one mobile rendering, and it replaced an earlier peekaboo carousel. Narrow the canvas to see it take over.

**Every part the band can draw is a control below.** Headline, Subtitle and Band CTA can each be switched off, and a band with none filled is the common case. The subtitle sits under the headline on the same body recipe the Carousel section subtitle reads, so the two bands draw the same header. Alignment moves the headline and the subtitle together, left aligned by default or centred; the band CTA sits below the grid and keeps its own position either way. Card type fills the cells with any of the four cards the library ships, the Product card, the Article card the blog feed is built from, and the Content card in both of its layouts, and the band words follow the cards so the header reads as a real band rather than one page's copy over everything. Write your own over any of them: the words are always the caller's. Number of cards stress-tests the wrap from zero up to eight.

**Ground picks the plane the band is set on, and it moves the paint only.** Paper is the default and paints nothing, so the band takes whatever ground the page already has; the alternate paper is a light neutral that keeps every ink where it is; dark repaints the headline and the subtitle and hands the CTA the link atom's inverse treatment. Nothing about the layout moves: the band sits at the same width and the cards keep the same track on all three grounds, at every width, which is how the Carousel section has always drawn its own three planes. The cards themselves are never repainted from here: a dark band needs each card told it is on a dark ground.

**Columns sets the most tracks the band draws at full width.** Widen the canvas past 1200px and it holds there regardless, the band's own page-canvas cap; narrow it and the count drops on its own, the same fluid rule this band always used, just capped from above now. Leave Columns unset for the plain fluid default: as many cards fit as the room allows, with no ceiling at all. **Image promo cards take two columns at most:** with that card type the control offers 2 only, and the band never draws more than two of them to a line.`}}}},m={name:"Image cards",args:{...z,cardType:"image",cardCount:2,showSubtitle:!1,showCta:!1},argTypes:W,render:e=>a.jsx(U,{...e}),parameters:{docs:{description:{story:`The alternative card: the same band, filled with the full-bleed image promo layout instead of the editorial tile. Both real campaign photographs, the same two the Content Card page's own Photography example carries. Card type is a control over four cards the library already ships, not a variant of this band: switch it on the Playground above to fill the same band with Product cards, with the blog feed's Article cards, or with the Content card's editorial tile instead.

**Two columns at most.** A band of Image promo cards never draws more than two to a line, whatever Columns asks for, so the photograph is not cropped too hard.`}}}};var R,_,N;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Default',
  args: CARD_COLLECTION_DEFAULT_ARGS,
  argTypes: CARD_COLLECTION_ARG_TYPES,
  render: args => <ConfigurableCardCollection {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The base band, with its headline and CTA both on, laid out as the desktop grid over ' + 'five content cards. Below the tablet breakpoint the same cards reflow into a ' + '2-column grid, dropping to one column at the narrowest phone widths. That is the ' + 'band\\'s one mobile rendering, and it replaced an earlier peekaboo carousel. Narrow ' + 'the canvas to see it take over.\\n\\n' + '**Every part the band can draw is a control below.** Headline, Subtitle and Band CTA ' + 'can each be switched off, and a band with none filled is the common case. The ' + 'subtitle sits under the headline on the same body recipe the Carousel section ' + 'subtitle reads, so the two bands draw the same header. Alignment moves the headline ' + 'and the subtitle together, left aligned by default or centred; the band CTA sits ' + 'below the grid and keeps its own position either way. Card type fills the cells with ' + 'any of the four cards the library ships, the Product card, the Article card the blog ' + 'feed is built from, and the Content card in both of its layouts, and the band words ' + 'follow the cards so the header reads as a real band rather than one page\\'s copy over ' + 'everything. Write your own over any of them: the words are always the caller\\'s. ' + 'Number of cards stress-tests the wrap from zero up to eight.\\n\\n' + '**Ground picks the plane the band is set on, and it moves the paint only.** Paper is ' + 'the default and paints nothing, so the band takes whatever ground the page already ' + 'has; the alternate paper is a light neutral that keeps every ink where it is; dark ' + 'repaints the headline and the subtitle and hands the CTA the link atom\\'s inverse ' + 'treatment. Nothing about the layout moves: the band sits at the same width and the ' + 'cards keep the same track on all three grounds, at every width, which is how the ' + 'Carousel section has always drawn its own three planes. The cards themselves are ' + 'never repainted from here: a dark band needs each card told it is on a dark ' + 'ground.\\n\\n' + '**Columns sets the most tracks the band draws at full width.** Widen the canvas past ' + '1200px and it holds there regardless, the band\\'s own page-canvas cap; narrow it and ' + 'the count drops on its own, the same fluid rule this band always used, just capped ' + 'from above now. Leave Columns unset for the plain fluid default: as many cards fit as ' + 'the room allows, with no ceiling at all. **Image promo cards take two columns at ' + 'most:** with that card type the control offers 2 only, and the band never draws more ' + 'than two of them to a line.'
      }
    }
  }
}`,...(N=(_=u.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var B,q,G;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Image cards',
  args: {
    ...CARD_COLLECTION_DEFAULT_ARGS,
    cardType: 'image',
    cardCount: 2,
    showSubtitle: false,
    showCta: false
  },
  argTypes: CARD_COLLECTION_ARG_TYPES,
  render: args => <ConfigurableCardCollection {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'The alternative card: the same band, filled with the full-bleed image promo layout ' + 'instead of the editorial tile. Both real campaign photographs, the same two the ' + 'Content Card page\\'s own Photography example carries. Card type is a control over four ' + 'cards the library already ships, not a variant of this band: switch it on the ' + 'Playground above to fill the same band with Product cards, with the blog feed\\'s ' + 'Article cards, or with the Content card\\'s editorial tile instead.\\n\\n' + '**Two columns at most.** A band of Image promo cards never draws more than two to a ' + 'line, whatever Columns asks for, so the photograph is not cropped too hard.'
      }
    }
  }
}`,...(G=(q=m.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const et=["BaseGrid","ImageCards"];export{u as BaseGrid,m as ImageCards,et as __namedExportsOrder,Ze as default};
