import{j as n}from"./iframe-6dx3hp_4.js";import{C as S,a as g,B as w,b as R,A as o}from"./Homepage-BCdkFher.js";import{a as H}from"./annotationPage-eYx--AWZ.js";import{C as b}from"./ContentCard-Cy_xF-W9.js";import{P as F}from"./ProductCard-1ftwzkvg.js";import{c as r,D as l,a as h}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./BrandWordmark-CszUK9Mj.js";import"./SearchBar-DwGR_hzY.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./SearchSuggestions-CAczFYXo.js";import"./Placeholder-Ed4iQRc7.js";import"./MenuItem-bBgP9Lwo.js";import"./Button-CiZyClsp.js";import"./Loading-DyIAIYoE.js";/* empty css               */import"./Drawer-CypulVuT.js";import"./useScrollLock-B-psvS0l.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";import"./MediaFrame-CgpnOU1q.js";import"./NavItem-Dq6-KykK.js";import"./Footer-BfocwZBN.js";import"./Hero-BHurgzVJ.js";import"./NewsletterSection-3il-1Xyd.js";import"./Checkbox-C5uneDTR.js";import"./ControlIndicator-DEJX7FyE.js";import"./FieldRequirement-Dn5H0DsY.js";import"./Input-3DsPWvNA.js";import"./Link-yk_PIpvX.js";import"./Badge-gItHl2ZN.js";import"./Select-DBrm7KPu.js";import"./Price-xMe2P_eJ.js";import"./StarRating-BT40pja7.js";import"./SwatchCarousel-BPc8GOsx.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./shadeGroup-Blqfx0Bo.js";const L=[{name:"Super Lustrous™ Collection",href:"/collections/super-lustrous",image:o("bs-super-lustrous.jpg"),alt:"Super Lustrous lipstick bullets in a row"},{name:"ColorStay™ Collection",href:"/collections/colorstay",image:o("bs-lip-liner.jpg"),alt:"ColorStay longwear lip liner pencils"},{name:"Illuminance™ Collection",href:"/collections/illuminance",image:o("bs-illuminance.jpg"),alt:"Illuminance skin-caring foundation bottles"},{name:"Glimmer Collection",href:"/collections/glimmer",image:o("bs-glimmer-gloss.jpg"),alt:"Super Lustrous Glimmer Gloss tubes"},{name:"ColorSilk™ Collection",href:"/collections/colorsilk",image:o("cat-hair.jpg"),alt:"Hair colour category image"},{name:"So Fierce!™ Collection",href:"/collections/so-fierce",image:o("cat-eyes.jpg"),alt:"Eye makeup category image"}],G={products:{heading:"Best Sellers",subtitle:"They are cult classics for a reason.",cta:{label:"Shop All Best Sellers",href:"#"}},collections:{heading:"Collections",subtitle:"Every shade, every finish, one collection at a time.",cta:{label:"Shop All Collections",href:"#"}},categories:{heading:"Featured Categories",subtitle:"Start where you already know you belong.",cta:{label:"Shop All Categories",href:"#"}}};function P(e,a,u){return e==="products"?(u?w.slice(0,5):w).map(i=>n.jsx(F,{product:i,inverse:a},i.title)):e==="categories"?R.map(t=>n.jsx(b,{href:t.href,title:t.title,image:t.image,headingLevel:4,inverse:a},t.title)):L.map(t=>n.jsx(b,{href:t.href,title:t.name,image:t.image,headingLevel:4,inverse:a},t.name))}const q={content:{...h("Products"),name:"Slides",...l({labels:{products:"Product cards",collections:"Collections",categories:"Categories"},options:["products","collections","categories"]}),description:"Which slides to fill the rail with. The section takes whatever it is handed, so this is a choice this page makes, not an axis of the component."},ground:{...h("Paper"),name:"Ground",...l({labels:{paper:"Paper","paper-alt":"Paper, alternate",inverse:"Dark"},options:["paper","paper-alt","inverse"]}),description:"Which plane the section is set on, and the axis that replaced three stories: the ground is a control, not a separate entry in the sidebar. **Paper, alternate** is a light neutral, so it keeps the whole paper ink set and only the ground moves. One thing does change on it: the counter's dim half is not dim there, because the muted ink misses the contrast floor on that ground across most of the portfolio, so it takes the full ink instead. **Dark** selects every inverse treatment at once, and nothing is repainted from the section: the names take the Link atom's inverse tone, the arrows take IconButton's inverse axis, and the hairline takes the only border role that lands light."},showHeading:{...r("On"),name:"Heading",description:"Show the text block at all. With it off, the rail takes the whole section."},headingAlign:{...h("Left aligned"),name:"Alignment",...l({labels:Object.fromEntries(g.map(e=>[e.value,e.label])),options:g.map(e=>e.value)}),description:"A text column beside the rail, or a centred heading stacked above it. Centred also makes the band symmetric, so the rail stops bleeding off the right edge."},headingScale:{...h("Display"),name:"Heading scale",...l({labels:{display:"Display",compact:"Compact"},options:["display","compact"]}),description:"A big title with room for a subtitle, or a small caps heading alone. Compact also moves the heading above the rail, and it never draws a subtitle.",if:{arg:"showHeading"}},showSubtitle:{...r("On"),name:"Subtitle",description:"Draw the subtitle. The compact scale never draws one, whatever this says.",if:{arg:"headingScale",eq:"display"}},showCta:{...r("Off"),name:"Section CTA",description:"Draw the section call to action. It sits last in the text column, so it is offered only when there is a text column.",if:{arg:"showHeading"}},dense:{...r("Off"),name:"Dense",description:"A narrower slide, 224px against the standard 376px, so up to five sit side by side before the controls are needed. Reuses the retired Card Collection five-column arithmetic (five across the page canvas with the 20px content gap); nothing else about the rail changes, including when the controls appear."},heading:{control:"text",name:"Heading text",table:{category:"Content"},description:"Overrides the heading words for this content type.",if:{arg:"showHeading"}},subtitle:{control:"text",name:"Subtitle text",table:{category:"Content"},description:"Overrides the subtitle words. Different from Subtitle, which turns it on.",if:{arg:"headingScale",eq:"display"}},headingLevel:{control:!1,table:{disable:!0}},prevLabel:{control:!1,table:{disable:!0}},nextLabel:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},cta:{control:!1,table:{disable:!0}},label:{control:!1,table:{disable:!0}}},p={content:"products",ground:"paper",showHeading:!0,headingAlign:"left",headingScale:"display",showSubtitle:!0,showCta:!1,dense:!1};function x({content:e,ground:a,showHeading:u,headingAlign:t,headingScale:i,showSubtitle:A,showCta:D,heading:E,subtitle:O,dense:m}){const s=G[e],I=a==="inverse";return n.jsx(S,{ground:a,headingAlign:t,headingScale:i,heading:u?E??s.heading:void 0,subtitle:A?O??s.subtitle:void 0,cta:D?s.cta:void 0,label:s.heading,dense:m,children:P(e,I,m)})}function j(e){return n.jsx(x,{...p,showCta:!0,...e})}const xe={title:"Organisms/Carousel section",component:S,tags:["autodocs"],parameters:{layout:"fullscreen",themeShellPadding:!1,docs:{page:H("CarouselSection"),toc:{headingSelector:"h2"},description:{component:"A site section built around one rail: an optional heading block beside or above the slides, and a track that steps by exactly one slot. It measures how many slides fit, so the counter reads positions to travel rather than slides in the rail, and the whole control cluster withdraws when everything already fits."}},componentDoc:{usage:`
## When to use

- ✅ **A row of products, collections or categories that should run past the page's last column**
  and be stepped through, one slot at a time. On a desktop the strip dissolves where it crosses
  that line rather than running on to the edge of the screen; on a narrower screen it runs to the
  edge and dissolves there.
- ✅ **A section that carries its own heading, subtitle and call to action** beside or above
  those slides.
- ✅ **The same section on a light or a dark plane.** The ground is one control, and every
  treatment inside follows it.
- ✅ **A block where the number of slides is not known in advance.** How far it can travel is
  measured, never declared.

- ❌ **A set of cards that should wrap onto more rows** as the space narrows. That is
  **Card Grid**.
- ❌ **A plain scrolling strip with no section around it.** That is **Carousel**, which owns the
  native-scroll rail.
- ❌ **A row of full-bleed promo panels.** The **Content card**'s image promo is a spotlight
  band, not a row item, and this section refuses to hold one. A carousel is a scannable
  collection of peers; a promo is one thing asking for all the attention. Put the promo on the
  page as its own band.
- ❌ **The slide's own look, link or hover.** Those live on the slide's page, **Product card**
  most often, never here.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Rail** | required | Clips at the section edges and steps by one slot. The only part that moves |
| **Slide**, repeated | required, but **owned by the slide, not the section** | Its click-through, hover and content model live on its own page |
| **Heading** | optional | Absent means no text block at all, subtitle and call to action included |
| **Subtitle** | optional | Display scale only. The compact heading never draws one |
| **Section CTA** | optional | Sits last in the text column, under the subtitle |
| **Hairline** | drawn with the display heading | Closes the text column under the call to action. The compact and the centred arrangements draw none |
| **Controls** | drawn only when the rail can move | The travel counter and the arrow pair, at the section's bottom right |

- **The section owns the arrangement and the travel.** The columns, the ground, the step and the
  counter.
- **The air above and below this section is the site's, not this section's.** It is the depth
  every section band on the site opens with, measured off the live block and shared by name, so
  the Card Collection band and the Newsletter band draw the same one. It is a curve rather than a
  number: full depth on a wide desktop, half of it from there down, at every narrower size. This
  section's own narrowing used to be the only copy of that curve and it is the whole family's now.
  Nothing about it is authorable.
- **The caller owns the slides and the words.** The heading, the subtitle, the call to action
  and every slide.
- **The slide is a different component, and this is not where its rules live.** Read a product
  card's hover, link and content model off **Product card**.

### Variants

**The section is one component with five axes, and every axis is a control** rather than a
separate thing: which slides, which ground, whether there is a heading, which scale it takes,
and which side it sits on. Two stories draw two points in that space. The rest of the space is
reached from the panel, not from the sidebar.

- **Best sellers is not a second component.** It is product slides plus a display heading.
- **Featured categories is not a third one.** It is category slides, a compact heading and the
  dark ground.
- **The centred band is not a fourth.** It is this section with the heading alignment set to
  centred, which is also what buys back the right inset and stops the rail bleeding.
- **A section with no text block is not a fifth.** It is this section with the heading off.
- **Dense is a sixth axis, not a fourth ground or a seventh scale.** A narrower slide (224px
  against the standard 376px) so up to five sit side by side before the controls are needed, the
  shape the recurring "4 or 5 curated items" block (recently viewed, trending, latest, featured)
  takes across the library. Reuses the retired Card Collection five-column arithmetic rather than
  inventing a new number. Nothing else about the rail changes: the same measurement decides when
  the controls arrive, at five slides or at any count, so there is no second cap alongside it.
`,guidance:`
## Behaviors

### States

- **The rail starts at the first position** with the previous arrow disabled, and ends with the
  last slide flush against the right edge and the next arrow disabled.
- **A slide that steps past the heading fades out** as it leaves.
- **The rail dissolves at the far end, and only while something is still cut there.** On a
  desktop the strip stops one gutter past the page's last column instead of running on to the
  edge of a wide screen, and that overhang fades out. A rail whose slides all fit dissolves
  nothing. The near end never dissolves: the step lands on a slot, so the card at that edge is
  always whole.
- **The centred band stops on the column line on a desktop and bleeds below it.** It is the one
  arrangement that is symmetric, so on a desktop it ends where the page's columns end and has
  nothing past them to dissolve. On a tablet or a phone there are no twelve columns to stop on,
  so its strip runs to the edge of the screen and dissolves there like every other arrangement,
  rather than slicing a card dead at the gutter.
- **Everything fits, so nothing is drawn.** On a screen wide enough to show every slide there is
  one position, and the counter and both arrows are withheld rather than shown dead.
- **Reduced motion keeps every state and drops the tweening.** The step becomes an instant jump
  and the counter stops rolling.
- **Slide states belong to the slide.** Resting, hover, focus and the whole-card click are
  verified on its own page.

### Interactions

- **Click an arrow and the rail moves exactly one slot**, over four tenths of a second.
- **The counter reads the visible item range of the total.** Four items with three on screen
  reads \`01 - 03  |  OF 04\`, and stepping right once reads \`02 - 04  |  OF 04\`. The range and
  the total are the real item count, and the fit is measured, so the range tracks what each screen
  actually shows.
- **Every slide you can see, you can reach**, by tab and by tap, including the one the rail cuts
  at the right edge. A slide with no pixels on screen stays out of the tab order and takes no
  clicks, so nothing off the edge steals one.
- **Tabbing to a slide the rail cuts moves the rail one slot**, so the card is whole before the
  focus ring lands on it. A pointer moves nothing: it can already reach what it can see.
- **Click a slide and it navigates.** That link belongs to the slide.
- **Narrow the canvas and the rail stays a rail.** The slot gets smaller and the text block folds
  above it; the mechanic does not change.

## Rules

- ✅ **Do** hand the section finished slides. It lays them out and authors none of them.
- ✅ **Do** give the section a name when there is no heading, so it is still announced.
- ✅ **Do** tell each slide which ground it landed on, so nothing is repainted from outside.
- ✅ **Do** let the counter follow the measurement. It is not the number of slides.

- ❌ **Don't** put a **Content card** image promo in this rail. It is refused while the page is
  being built. Hand the rail the editorial card, which is what a category tile is, and give the
  promo a band of its own.
- ❌ **Don't** repaint a slide's ink from this section. Use the slide's own inverse axis.
- ❌ **Don't** ask for a subtitle beside a compact heading. It is not drawn.
- ❌ **Don't** hard-code how many slides fit. That is measured, at every width.
- ❌ **Don't** rely on hover to reveal anything. There is no hover on touch.

### Content rules

- ✅ **Do** keep slide names short enough to read in one or two lines at the narrow slot.
- ❌ **Don't** invent a character limit for the heading or the call to action. Both are owed by
  design.

## Open items

| Question | Owner |
|---|---|
| The step's curve is the measured browser keyword, and the library's own easing token is a different curve. Retime it, or keep the measurement? | Design |
| A dark ground has no border role of its own, so the hairline reads the subtle one. Mint the role, or keep the note? | Design |
| Character limits for the heading, the subtitle and the call to action | Design |
| The reference site loops forever. Is an infinite ring in scope, or do the arrows stop at both ends? | Client |
`,spec:{elements:[{name:"Rail",requirement:"required"},{name:"Slide, repeated",requirement:"required",condition:"One slide per child, in the order given. The slide owns its own content."},{name:"Heading",requirement:"optional",condition:"Without it there is no text block at all, subtitle and CTA included."},{name:"Subtitle",requirement:"conditional",condition:"Display scale only. The compact scale refuses one."},{name:"Section CTA",requirement:"optional",condition:"Last in the text column, under the subtitle."},{name:"Hairline",requirement:"conditional",condition:"Display scale, left aligned. The compact and centred arrangements draw none."},{name:"Controls",requirement:"conditional",condition:"Only when the rail can move. Withheld when every slide already fits."}],authorability:[{name:"Heading",rule:"Free text, and it can be left out. Leaving it out removes the whole text block."},{name:"Subtitle",rule:"Free text on the display scale only. The compact scale never draws one."},{name:"Section CTA",rule:"Free label and free destination, and it can be left out."},{name:"Slides",rule:"The author supplies the slides, how many and in what order. The section writes none."},{name:"Heading scale",rule:"Display or compact, chosen when the page is built, not by the author."},{name:"Alignment",rule:"Left or centred. The centred arrangement draws no hairline."},{name:"Ground",rule:"Light or dark. Every part follows the ground, and nothing is repainted by hand."},{name:"Counter and arrows",rule:"Fixed by the system. They measure the fit and appear only when the rail can move."},{name:"Step distance",rule:"Fixed by the system: one arrow press moves the rail exactly one slot."},{name:"Band rhythm",rule:"Fixed by the system. The section depth every band opens with, halved below a wide desktop."}],variants:[{label:"Heading beside the rail",props:{headingScale:"display"}},{label:"Heading above the rail",props:{headingScale:"compact",showSubtitle:!1}}],statesMode:"linked",states:[{key:"start",name:"Start of the rail",story:"Default",annotation:"The counter reads the first position and the previous arrow is disabled."},{key:"travelling",name:"One step along",story:"Default",annotation:"Press next: the departing slide fades out and the counter rolls upward."},{key:"end",name:"End of the rail",story:"Default",annotation:"The last slide lands flush with the right edge and the next arrow disables."},{key:"fits",name:"Everything already fits",story:"Default",annotation:"Turn Heading off, then widen until every slide shows: the whole control cluster goes."},{key:"inverse",name:"On the dark ground",story:"Featured categories",annotation:"Already dark: ink, arrows, hairline and card names all follow the ground, none repainted."},{key:"reduced-motion",name:"Reduced motion",story:"Default",annotation:"Turn reduced motion on in the operating system: states hold, tweening goes."}],render:j,interactions:["Clicking an arrow moves the rail exactly one slot, over four tenths of a second.","The counter reads positions to travel, not slides in the rail.","Both arrows disable at their end, so the rail never travels past its last slide.","A slide that is not wholly on screen cannot be tabbed to, tapped or read aloud.","Clicking a slide navigates. That link belongs to the slide, never to the section.","Resizing re-measures the fit and slides the rail back into place if travel shrank.","Below the tablet width the slot narrows and the text block folds above the rail.","No content is revealed by hover alone, so a touch device loses nothing."],accessibility:[{label:"Keyboard",text:"Tabbing lands once per slide, in visual order. A slide the rail cuts is in it too, and taking focus steps the rail, so no ring lands on a clipped card."},{label:"Screen reader",text:"The section is a named region announced as a carousel, and each arrow carries its own spoken name."},{label:"Heading order",text:"The section heading sits one level above a slide title, so no heading level is ever skipped."},{label:"Focus",text:"A focused slide shows a visible ring, and focus never lands on a slide sitting off the edge."},{label:"Motion",text:"The step, the exit fade and the counter roll all stop tweening when reduced motion is asked for."},{label:"Target size",text:"Both arrows keep a target of at least 44px in each direction, at every width."},{label:"Contrast",text:"Slide ink, arrows, hairline and focus rings hold 4.5:1 on the light and the dark ground, on every brand."}],openItems:[{question:"The step keeps the measured browser curve. Retime it to the library easing, or keep the measurement?",owner:"Design"},{question:"A dark ground has no border role of its own. Mint one, or keep the subtle role with its note?",owner:"Design"},{question:"Character limits for the heading, the subtitle and the call to action.",owner:"Design"},{question:"Is an infinite loop in scope, or do the arrows stop at both ends as they do today?",owner:"Product"}]}}},argTypes:q,render:e=>n.jsx(x,{...e})},d={name:"Default",args:{...p,showCta:!0},parameters:{docs:{description:{story:`The live homepage block: product cards on the paper ground, a display heading with its subtitle beside the rail, and the optional call to action switched on so the slot is visible somewhere.

**Every axis is a control below, and the controls are where the arrangements live.** Slides, ground, heading, alignment, scale, subtitle, call to action and Dense. Collection slides, the centred band and the section with no text block are each one knob away from here rather than an entry in the sidebar. Widen and narrow the canvas while you do it: the counter's denominator is measured, so it changes with the space, and on a wide enough screen the controls withdraw entirely. **Dense** narrows the slide so five product cards sit side by side before that happens; switch Slides to Collections or Categories with it on to see six or eight real items overflow the five-up slot and bring the controls straight back.`}}}},c={name:"Featured categories",args:{...p,content:"categories",ground:"inverse",headingScale:"compact",heading:"FEATURED CATEGORIES",dense:!0},parameters:{docs:{description:{story:"The compact scale: a small caps heading with no subtitle, sitting above a rail that runs the full width. The tiles are the library's editorial content card, image and heading only, at the same slot width and crop as every other content card, because one component draws one rail and one card draws every editorial tile in it."}}}};var f,v,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    ...BASE_ARGS,
    showCta: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The live homepage block: product cards on the paper ground, a display heading with ' + 'its subtitle beside the rail, and the optional call to action switched on so the ' + 'slot is visible somewhere.\\n\\n' + '**Every axis is a control below, and the controls are where the arrangements ' + 'live.** Slides, ground, heading, alignment, scale, subtitle, call to action and ' + 'Dense. ' + 'Collection slides, the centred band and the section with no text block are each one ' + 'knob away from here rather than an entry in the sidebar. Widen and narrow the canvas ' + 'while you do it: the counter\\'s denominator is measured, so it changes with the ' + 'space, and on a wide enough screen the controls withdraw entirely. **Dense** narrows ' + 'the slide so five product cards sit side by side before that happens; switch Slides ' + 'to Collections or Categories with it on to see six or eight real items overflow the ' + 'five-up slot and bring the controls straight back.'
      }
    }
  }
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var k,T,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Featured categories',
  args: {
    ...BASE_ARGS,
    content: 'categories',
    ground: 'inverse',
    headingScale: 'compact',
    heading: 'FEATURED CATEGORIES',
    // The narrower slide is what this band draws on the live site, so the entry ships set that
    // way rather than leaving the reader to find the control. Nothing about the component
    // changes: \`dense\` is one of its six published axes and it is still a control on the cover
    // story.
    dense: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The compact scale: a small caps heading with no subtitle, sitting above a rail that ' + 'runs the full width. The tiles are the library\\'s editorial content card, image and ' + 'heading only, at the same slot width and crop as every other content card, because ' + 'one component draws one rail and one card draws every editorial tile in it.'
      }
    }
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const Ae=["Default","FeaturedCategories"];export{d as Default,c as FeaturedCategories,Ae as __namedExportsOrder,xe as default};
