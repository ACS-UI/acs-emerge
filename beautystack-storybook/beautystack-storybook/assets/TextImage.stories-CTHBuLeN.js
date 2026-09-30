import{j as e}from"./iframe-6dx3hp_4.js";import{T as f}from"./TextImage-CBj_-ok_.js";import{L as N}from"./Link-yk_PIpvX.js";import{a as G}from"./annotationPage-eYx--AWZ.js";import{c as p,D as d,a as l}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./MediaFrame-CgpnOU1q.js";import"./Placeholder-Ed4iQRc7.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./useScrollLock-B-psvS0l.js";import"./Button-CiZyClsp.js";import"./Loading-DyIAIYoE.js";/* empty css               */const r=t=>`/revlon-home/${t}`,n={moisturizer:{image:r("fc-tinted-moist.png"),alt:"A twist-up moisturizer stick wound up to show its tinted formula, standing beside its clear cap."},skinTint:{image:r("fc-skin-tint.png"),alt:"A soft plastic bottle of liquid skin tint with the beige formula showing through it, its cap set alongside."},wornFace:{image:r("cat-face.jpg"),alt:"A close portrait of a model with her hair pulled back, wearing a soft warm eye and a glossy lip."},treatmentPot:{image:r("fc-super-balm.png"),alt:"An open pot of balm with a swirl pressed into the bronze cream, its printed lid propped behind it."},applying:{image:r("cat-lips.jpg"),alt:"A model laughing as she puts on a coral lipstick, photographed against a plain ground."},shadeRange:{image:r("cat-nails.jpg"),alt:"Three hands with different skin tones crossed over one another, each holding a bottle of polish in a different nude."}},i={eyebrow:"Skincare",heading:"Formulated for every skin type",body:"A lightweight, oil-free moisturizer that hydrates for 24 hours without clogging pores, dermatologist tested.",linkLabel:"Shop moisturizers",linkHref:"#shop"},B={provider:"youtube",id:"3t_eg_PaWUI",title:"All New Roller Refills In One Cute and Convenient Case! | Revlon"},U="/revlon-home/hero.mp4",W="/revlon-home/hero-poster.jpg",v={mediaSide:{...l("Image left, text right"),name:"Media side",...d({labels:{left:"Image left, text right",right:"Image right, text left"},options:["left","right"]}),description:"Which side the picture sits on. Changes what a reader sees only. The order a keyboard or a screen reader travels never changes, and the copy stays left aligned on both sides."},showEyebrow:{...p("On"),name:"Eyebrow",description:"Show the small label above the headline."},showBody:{...p("On"),name:"Short description",description:"Show the body copy under the headline."},showCta:{...p("On"),name:"CTA",description:"Show the call to action under the copy."},ctaEmphasis:{...l("Secondary"),name:"CTA emphasis",...d({labels:{secondary:"Secondary",primary:"Primary"},options:["secondary","primary"]}),description:"How loud the call to action is. Secondary is the default, because a band sits in the middle of a page that already has a primary action somewhere above it."},media:{...l("Still image"),name:"Media",...d({labels:{image:"Still image",video:"Video embed",videoFile:"Looping video file",none:"None yet (no image)"},options:["image","video","videoFile","none"]}),description:"What fills the first pair's media slot. **Video embed** is a YouTube video: at rest the frame shows the video's still, cropped to the frame, with one play control in the middle, and pressing play opens YouTube's own player over the page, with sound and YouTube's controls. **Looping video file** is a muted, looping, decorative visual this library mounts itself: it carries no information, it stops for a reduced-motion preference, and it has a pause. **None yet** authors no picture at all, so the frame keeps its place in the layout and the media component draws its own placeholder. It governs the FIRST pair only: the pairs below it keep their own photographs, so a five-pair band is never five copies of one asset."},pairCount:{...l("One"),name:"How many pairs",...d({labels:{1:"One",2:"Two",3:"Three",4:"Four",5:"Five"},options:[1,2,3,4,5]}),description:"How many picture-and-copy pairs the section is handed. Five is the ratified ceiling and the component drops a sixth, so this control cannot ask for one. Every pair carries its own photograph, its own text alternative and its own copy."},arrangement:{...l("Alternating"),name:"Arrangement",...d({labels:{zigzag:"Alternating",same:"Same side"},options:["zigzag","same"]}),if:{arg:"pairCount",neq:1},description:"Whether the picture alternates down the section or stays on one side. Alternating is the default and *Media side* names the first pair; same side paints every pair on the side *Media side* names. It appears past one pair, because one pair draws the same section either way."},showInlineLink:{...p("Off"),name:"Link inside the copy",description:"Add a sentence carrying a hyperlink to the first pair's copy. It is the **Link** atom in its default tone, so it stays underlined at rest and is never told apart from the words around it by colour alone. Two different jobs end up on screen: the link inside the sentence is a reference you may follow while reading, and the CTA underneath is the action the band is asking for."},eyebrow:{control:!1,table:{disable:!0}},heading:{control:!1,table:{disable:!0}},body:{control:!1,table:{disable:!0}},linkLabel:{control:!1,table:{disable:!0}},linkHref:{control:!1,table:{disable:!0}},image:{control:!1,table:{disable:!0}},alt:{control:!1,table:{disable:!0}},video:{control:!1,table:{disable:!0}},ctaVariant:{control:!1,table:{disable:!0}},items:{control:!1,table:{disable:!0}},copy:{control:!1,table:{disable:!0}}},T={pairCount:1,arrangement:"zigzag",copy:"paragraph",mediaSide:"left",showEyebrow:!0,showBody:!0,showInlineLink:!1,showCta:!0,ctaEmphasis:"secondary",media:"image"},w=e.jsxs("p",{children:["If you are between two shades, read the"," ",e.jsx(N,{href:"#shade-guide",children:"shade matching guide"})," before choosing."]}),x={paragraph:{eyebrow:i.eyebrow,heading:i.heading,linkLabel:i.linkLabel,linkHref:i.linkHref,...n.moisturizer,body:t=>t?e.jsxs(e.Fragment,{children:[e.jsx("p",{children:i.body}),w]}):i.body},bulleted:{eyebrow:"Skincare",heading:"What the formula is doing",linkLabel:"Shop moisturizers",linkHref:"#shop",...n.moisturizer,body:t=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Three things this moisturizer is built to do, in the order you notice them:"}),e.jsxs("ul",{role:"list",children:[e.jsx("li",{children:"Hydrates for 24 hours without leaving a film"}),e.jsx("li",{children:"Stays oil free, so it sits under makeup rather than on it"}),e.jsx("li",{children:"Dermatologist tested across the full shade range"})]}),t?w:null]})},numbered:{eyebrow:"How to use",heading:"The evening routine, in order",linkLabel:"Shop the routine",linkHref:"#shop",...n.wornFace,body:t=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Four steps, and the order is the point:"}),e.jsxs("ol",{role:"list",children:[e.jsx("li",{children:"Cleanse with a gel to milk formula and rinse warm."}),e.jsx("li",{children:"Tone while skin is still damp."}),e.jsx("li",{children:"Treat one concern at a time, and give it four weeks."}),e.jsx("li",{children:"Hydrate last, so nothing underneath is sealed out."})]}),t?w:null]})}},V=[{eyebrow:"Skincare",heading:"Tested for every skin tone",body:"A lightweight, oil-free moisturizer that hydrates for 24 hours without clogging pores, trialled across the full shade range.",linkLabel:"Read the testing notes",linkHref:"#shop",...n.skinTint},{eyebrow:"Shade finder",heading:"How the shade range was built",body:"Forty shades were mapped against undertone as well as depth, so the middle of the range is as considered as the ends.",linkLabel:"Find your shade",linkHref:"#shop",...n.shadeRange},{eyebrow:"Skincare",heading:"Treat the concern first",body:"One serum at a time, chosen for the concern that bothers you most, given four weeks before anything else joins it.",linkLabel:"Shop serums",linkHref:"#shop",...n.treatmentPot},{eyebrow:"Skincare",heading:"Protect what you just did",body:"A broad-spectrum SPF 50 finish that sits under makeup, reapplied every two hours in direct sun.",linkLabel:"Shop sun care",linkHref:"#shop",...n.applying}];function k({copy:t,pairCount:g,arrangement:a,mediaSide:b,showEyebrow:z,showBody:H,showInlineLink:M,showCta:O,ctaEmphasis:P,media:h}){const A=x[t]??x.paragraph,y=[A,...V].slice(0,g).map((o,s)=>({eyebrow:z?o.eyebrow:void 0,heading:o.heading,body:H?s===0?A.body(M):o.body:void 0,linkLabel:O?o.linkLabel:void 0,linkHref:o.linkHref,image:s>0||h==="image"?o.image:void 0,alt:s>0||h==="image"?o.alt:void 0,video:s===0&&h==="video"?B:void 0,videoFile:s===0&&h==="videoFile"?U:void 0,poster:s===0&&h==="videoFile"?W:void 0})),q=y.length===1?y[0]:{items:y,arrangement:a};return e.jsx(f,{...q,ctaVariant:P,mediaSide:b})}const de={title:"Organisms/Text + Image",component:f,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{page:G("Text and image"),toc:{headingSelector:"h2"},description:{component:"A full page section that pairs a block of text with a matching image or looping video, side by side on desktop and stacked on smaller viewports. One section carries one to five pairs, all with the picture on the same side or alternating."}},componentDoc:{usage:`
## When to use

- ✅ **One block of copy beside one image or one looping video**, as a section of a page.
- ✅ **Up to five pairs in one section**, alternating the media side, to walk through a full set
  of product information. That is the ratified way to use it.
- ✅ **Inside an accordion panel.** That nesting is ratified.
- ✅ **Copy an author has to structure**, like a short bulleted list of what a formula does, or a
  numbered set of steps, with links inside the sentences. That is what the body slot is for.

- ❌ **The top of a page.** This section has no scrim and no overlay, so a page-opening statement
  is **Hero**'s job.
- ❌ **More than five pairs.** A sixth is not drawn. When there is more to say, it is a second
  section.
- ❌ **Two ideas in one pair.** Each pair is one idea beside one picture. A second idea is a
  second pair.
- ❌ **A tabbed version of the same content.** This band has no tabbed variant.
- ❌ **A pair with no headline.** The headline is required, and the first one names the section.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Section band**, the full-width wrapper | always | A named region, so the section is reachable and tells itself apart from its neighbours. Deep air above and below, and the content centred inside it |
| **Content column** | always | The measured column the pairs sit in, 1200px at most, centred whatever the viewport does |
| **Pair**, one picture beside one block of copy | **1 to 5** | The repeating unit. A sixth pair is not drawn |
| **Eyebrow**, the small label above the headline | optional | Per pair |
| **Headline** | **always required** | Per pair. A real heading element, always rendered, never text sized to look like one |
| **Rich text block**, the body copy | optional | Per pair. Paragraphs, a bulleted or a numbered list, and links inside the sentences. It is the **Rich text** layer, so the markers and the rhythm are not this band's |
| **Media**, a still image or a looping video | **always required** | Per pair. The slot always renders. Authoring a picture fills it with a real photograph. A hosted video file fills it with a muted loop. A provider video fills it with the video's still and one play control, and pressing play opens the player over the page, with sound. With none of them, the frame keeps its place and the media component draws its own placeholder |
| **CTA**, a button | optional | Per pair. It is the **Button** atom, secondary by default and able to be primary. It carries an address, so it is drawn as a real link that looks like a button |

- **A deep section band.** 80px of air above and below and 112px each side, dropping to 64px and
  16px on a phone. It is the same depth the carousel section draws, from the same shared value,
  so two sections down a page breathe alike.
- **Two columns on desktop, one column on smaller viewports.** Same component, same content.
- **A whole empty column between the two columns.** On desktop the picture takes six of the
  twelve page columns and the copy takes five, so the twelfth column is left empty between them:
  102px of channel at 1440, the empty column plus the two gutters on either side of it. The gutter
  on its own read as no separation at all with the page grid drawn over the band. The picture is
  the same width it always was, 588px; the copy is the side that gives the column up, because the
  band's crop belongs to the brand and its measure belongs to this band. Below 960px the two
  blocks take half the grid each again, and below the tablet breakpoint they stack.
- **128px between stacked pairs**, 64px on a phone. That is the exact distance two separate bands
  already drew when a page stacked them by hand, so pages that did that did not re-space when the
  stack moved inside the section.
- **Tokens own the look.** Shape, spacing, type and the headline's uppercase treatment. The same
  band re-themes across every brand without a value being restated.
- **The caller owns the words and the picture.** Eyebrow, headline, body copy, media and CTA copy
  are all product or editorial content.

The heading element always renders. Whether an author may leave its *text* empty is unresolved:
the component does not stop them, and whether it should is a client or CMS decision rather than a
design one.

### Variants

**Arrangement is the section's axis.** *Zigzag* alternates the picture side pair by pair and is
the default; *same side* paints every pair on the side the media side names. A section of one pair
draws the same thing either way, which is why the *Arrangement* control on the cover appears only
once *How many pairs* is past one.

**Media side is the pair axis**, not a second component. The band draws the picture on the left by
default and the copy beside it; switching the side swaps which column is painted first. Under
*zigzag* it names the side of the **first** pair and the rest follow from it. The swap changes only
what a reader **sees**: the order a keyboard or a screen reader travels is the same on both sides,
and the copy stays left aligned on both, because the reading direction is not part of the swap.

**The side stops existing when a pair stacks.** Below the tablet breakpoint the two columns become
one, so there is no left and no right, and both sides stack the copy first with the picture
underneath, so the same content never reads in two different orders depending on a choice about a
wider viewport.
A zigzag section therefore reads as one repeated shape on a phone, not as an alternating one.

**There is no three-column variant.** This band draws one block of copy beside one picture and
nothing else: no three-column setting, no card row and no story for it. A three-card row is
**Card Grid**, which is its own ratified component with its own criteria.

**The CTA's emphasis is an axis, not a variant.** Secondary is the default, and primary is there
for the rare band that carries the page's main action. It is set once for the whole section, the
same way arrangement and media side are, so five pairs draw five CTAs at one emphasis.

**Two things are not variants, on purpose.** The three breakpoints Figma draws are one responsive
component, not three. And still image or looping video is a content decision inside the one
required media slot, so it is a control rather than a second component. What the author writes
into the body is not a variant either: a paragraph, a bulleted list and a numbered list are three
things one Rich text slot carries, which is why they are three stories and not three components,
and a link inside a sentence is a fourth thing that slot carries inside any of the three, which is
why it is a control rather than a fourth story.

**A section of one pair is not a variant either.** It is the same component with one pair in it,
and it draws exactly what a single band drew before the pairs axis existed, which is what let
every page composing one band keep composing it unchanged.
`,guidance:`
## Behaviors

### States

- **Media, still image.** A product or editorial photograph, square, filling the frame. This is
  the default shape of the slot.
- **Media, unauthored.** The frame still holds its place in the layout and the media component
  draws its own placeholder in it. Set *Media* to *None yet* on any story to see it. It is the
  state three template pages draw today.
- **Media, video.** Authoring a hosted file swaps the still image for a muted loop. Authoring an
  embed swaps it for the video's still with a play control, which opens the player over the page.
  Either one loops.
- **Optional slots, present or absent.** The eyebrow, the body copy and the CTA switch off
  independently. Turn all three off, with *Media* on *None yet*, for the least a band can be
  authored with: one headline beside an empty frame.
- **Body copy, plain or structured.** The same slot takes one paragraph, a bulleted list or a
  numbered list, each of which is a story below, and a link written inside any of them, which is
  the *Link inside the copy* control.
- **Pairs, one to five.** Every pair draws the same parts. A sixth pair passed to the section is
  dropped rather than drawn, so a section can never grow past the ratified ceiling.
- **Arrangement, zigzag or same side.** Zigzag alternates the picture side down the section; same
  side keeps every pair on one side.
- **CTA, resting.** A real button, secondary by default and primary when the band asks for it.
- **CTA, hover.** The fill steps, which is Button's own hover and not something this band draws.
- **CTA, hover on touch.** There is nothing to show. Button's hover is fenced behind a pointer
  check, so a tap on a phone or a tablet leaves nothing hovered behind it.
- **Links inside the copy, resting and hover.** A link written into the body keeps its underline
  at rest, so it is never told apart from the sentence by colour alone.

**The two video routes behave differently, and that is on purpose.** A **hosted video file**
autoplays, plays muted, loops, shows an authored poster before it starts, and stops for a visitor
who has asked for reduced motion. A **provider embed** never starts on its own, so it is not
muted and has no motion to stop for reduced motion. At rest it shows the authored poster, or else
the provider's own thumbnail, with one play control in the middle. Pressing play opens the
provider's player over the page, with sound, and the video loops once it plays. The band offers
both, because they are for different kinds of video: short, silent, self-starting and looping goes
to the file, and anything a reader starts or that carries voice goes to the embed.

### Interactions

- **Clicking or tapping the CTA** takes the shopper to its authored destination.
- **Hovering the CTA** steps its fill on a pointer device.
- **Clicking a link inside the copy** takes the shopper to that link's own destination. The band
  does not treat it differently from the CTA underneath, and the two are not the same thing: the
  link is a reference, the CTA is the action.

**Hover on touch, where the requirements are silent.** The cards component's criteria say
hover should be suppressed on mobile; this band's never mention it. The build answers it
the strict way regardless: the shared link fences every hover behind a pointer
check, so this band has no hover on touch either way.

## Rules

- ✅ **Do** pair one media slot with one block of copy.
- ❌ **Don't** pack a second idea into one pair. Reach for a second pair.
- ✅ **Do** let the section alternate the media side when it carries more than one pair.
- ❌ **Don't** stack two of these sections to get more pairs. Up to five live in one section.
- ❌ **Don't** re-space one band by hand to make its picture and copy sit closer or further apart.
  The channel is one value for the whole library.
- ❌ **Don't** use this band as a hero. It has no scrim and no overlay.

- ❌ **Don't** author a pair with no headline. It is required, and it is a real heading in the
  page's outline rather than large text.
- ✅ **Do** pick the video route by the video. A short, silent loop goes in as a hosted file; a
  video a reader starts, or one that carries voice, goes in as an embed with its play control.
- ❌ **Don't** re-pad a band per instance. Padding is fixed to the page grid, and a genuinely
  different padding need is a new variant rather than a setting.
- ❌ **Don't** build a tabbed version. This band has no tabbed variant.

- ✅ **Do** decide, per picture, whether it is decorative or informative, and write the text
  alternative that follows from it. A band pairs a picture with prose rather than with a label, so
  the picture usually carries something the paragraph does not and the alternative describes what
  it shows. A picture that genuinely adds nothing says so with an empty alternative.
- ❌ **Don't** put the headline in the alternative. A reader then hears the same words twice, once
  as a heading and once as a picture, which is the defect this library has already fixed on the
  category card and on the product card.
- ✅ **Do** hand the slot a square asset. The frame is 1:1 and crops to fill, so a banner loses
  most of itself and reads as a mistake rather than as a picture.
- ❌ **Don't** let hover be the only sign the CTA is interactive.

- ✅ **Do** write real lists in the body. A real bulleted or numbered list, never bullet
  characters typed into a paragraph, which a screen reader reads out as text and announces as no
  list at all.
- ✅ **Do** keep a link inside a sentence underlined. That is the default link, and it is what
  stops the link being told apart from the copy by colour alone.
- ❌ **Don't** set a size or a colour on anything inside the body. The Rich text layer owns all
  of it, in every brand.
- ❌ **Don't** put a second button inside the body copy. The band already has one CTA per pair,
  and a second action in the same pair is the second idea this component refuses.

### Content rules

- ✅ **Do** give every pair its own headline. The section is named after the first one, so two
  sections on one page may not open with the same words.
- ✅ **Do** supply the headline and the media. Everything else is optional.
- ✅ **Do** keep a looping video under two minutes. That is a limit on the asset, not something
  the component enforces.
- ✅ **Do** treat the recommended lengths as GUIDELINES, not limits: eyebrow around 32 characters,
  headline around 70, and the Rich text body around 320. They are recommendations the CMS and the
  content migration honour so copy reads well across every brand. The component does not enforce
  them and never truncates: the content is populated dynamically in most cases, which is exactly
  why the numbers guide rather than cap.
- ✅ **Do** keep list items parallel: same grammar, same sentence case. Number them only when the
  order matters.

## Open items

| Question | Owner |
|---|---|
| The provider embed rests as a still with a play control and opens its player over the page, while the hosted file autoplays muted, loops and answers reduced motion. Confirm which route each authored band should take | Design + engineering |
| Whether an omitted headline should be a validation error at the authoring layer, now that the component always renders the heading element | Client / CMS team |
| The headline's heading level in every context it is used. One nested inside an accordion panel may need to sit lower in the outline | Design / QA |
| The CTA's two props are still called *link label* and *link href* now that the CTA is a button. Rename, or leave them | Design / Engineering |
`,spec:{elements:[{name:"Band, the section",requirement:"required"},{name:"Content column",requirement:"required"},{name:"Pair, picture and copy",requirement:"required"},{name:"Headline",requirement:"required"},{name:"Media, image or video",requirement:"required"},{name:"Eyebrow",requirement:"optional"},{name:"Rich text block",requirement:"optional"},{name:"CTA",requirement:"optional"}],authorability:[{name:"Pairs",rule:"One to five per section. A sixth is dropped by the component."},{name:"Arrangement",rule:"Zigzag or same side, zigzag by default. It is set once for the section."},{name:"Headline",rule:"Required on every pair. The first one names the section, so it is unique on the page."},{name:"Media slot",rule:"One still image or one looping video. A video always loops, whatever is passed."},{name:"Media side",rule:"Left or right, left by default. Under zigzag it sets the first pair only."},{name:"Video length",rule:"Under two minutes. The limit is on the asset, not on the component."},{name:"Eyebrow",rule:"Optional caps label above the headline, drawn only when one is passed."},{name:"Rich text block",rule:"Optional. Paragraphs, bulleted or numbered lists, and links in the sentences. No count is set."},{name:"Lists",rule:"Real list markup, never typed bullet characters. Numbered only when the order matters."},{name:"Links in the copy",rule:"Authors write them into the sentences. Fixed: they stay underlined, never colour alone."},{name:"CTA",rule:"Optional. The shared Button, carrying an address, so it draws as a real link."},{name:"CTA emphasis",rule:"Secondary or primary, secondary by default. It is set once for the section, never per pair."},{name:"One idea per pair",rule:"Fixed. A second idea is a second pair, never more content inside one pair."},{name:"Spacing",rule:"Fixed. The band depth, the channel and the pitch between pairs are one value each."},{name:"Band role",rule:"Fixed. No scrim, no overlay and no tabbed version of the same content."},{name:"Layout",rule:"Fixed. One picture beside one block of copy. No three-column variant."}],variants:[{label:"Image left",props:{mediaSide:"left"}},{label:"Image right",props:{mediaSide:"right"}}],states:[{key:"default",name:"Default",props:{frame:720}},{key:"hover",name:"CTA hover",pseudo:"hover",props:{frame:720}}],render:X,interactions:["Clicking a CTA goes to its authored destination. A link written into the copy goes to its own.","Hovering the CTA steps its fill. That is the Button atom's own hover, not a state this band draws.","The CTA hover is fenced behind a pointer query, so a tap on a touch screen leaves nothing hovered.","A link inside the copy stays underlined at rest, so it is never separated from the sentence by colour alone.","Swapping the media side repaints the two columns. The document order is identical on both.","Zigzag alternates the side pair by pair. Same side paints every pair on the one side.","A sixth pair is not drawn. The section stops at five whatever it is handed.","Below the tablet breakpoint every pair stacks to one column, copy first, on both sides.","A video in the media slot is always forced to loop, whatever the caller passes.","An embed does not autoplay: it rests as its still with a play control, and play opens the player over the page."],accessibility:[{label:"Heading element",text:"The headline is a real h2 element, not large text styled to look like one."},{label:"Region name",text:"The section is named after its first headline, so two sections on one page may not open with the same words."},{label:"Heading order",text:"Every pair heads at the same level, so a five-pair section adds five siblings to the outline and skips none."},{label:"Reading order",text:"The copy holds the same position in the document on both media sides: one order declaration flips the columns, nothing moves in the markup."},{label:"Keyboard",text:"The CTA carries an address, so it is a real link that draws as a button: Enter activates it and nothing in the band re-implements a key."},{label:"CTA affordance",text:"The CTA has its own fill and shape at rest, so hover is never the only sign that it can be used."},{label:"Links in the copy",text:"A link inside a sentence keeps its underline, so it is told apart from the copy by more than colour."},{label:"List semantics",text:`The prose layer draws its own markers and hides the browser's, so a real list carries role="list" to keep announcing itself as one.`},{label:"Hover on touch",text:"The CTA hover sits behind a pointer query, so a tap on a touch screen leaves nothing hovered."},{label:"Image alternative",text:"Every pair carries its own picture, so each one is given a text alternative or marked decorative on its own."},{label:"Motion",text:"The looping video answers a reduced-motion preference, and shows a poster frame before it plays."},{label:"Contrast",text:"The body and eyebrow inks meet contrast against the page ground in every brand theme."}],openItems:[{question:"Which route should each authored band take? A hosted file autoplays muted and loops; an embed rests as a still and opens its player on play.",owner:"Design / Engineering"},{question:"Should an omitted headline be a validation error at the authoring layer, now that the heading element always renders?",owner:"Product / Content"},{question:"What heading level does the headline take inside an accordion panel, where the outline may want it lower?",owner:"Design / QA"},{question:"The CTA is a button, and its two props are still called link label and link href. Rename them, or leave them?",owner:"Design / Engineering"}]}}}},S=[{mediaSide:"left",eyebrow:"Skincare",heading:"Formulated for every skin type",body:i.body,linkLabel:"Shop moisturizers",...n.moisturizer},{mediaSide:"right",eyebrow:"Skincare",heading:"Tested for every skin tone",body:"A lightweight, oil-free moisturizer that hydrates for 24 hours without clogging pores, trialled across the full shade range.",linkLabel:"Read the testing notes",...n.skinTint}];function X({mediaSide:t,frame:g}){const a=S.find(b=>b.mediaSide===t)||S[0];return e.jsx("div",{style:{width:g||"100%",maxWidth:"100%",textAlign:"start"},children:e.jsx(f,{eyebrow:a.eyebrow,heading:a.heading,body:a.body,image:a.image,alt:a.alt,linkLabel:a.linkLabel,linkHref:"#shop",mediaSide:a.mediaSide})})}const c={args:T,argTypes:v,render:t=>e.jsx(k,{...t}),parameters:{controls:{sort:"alpha"},docs:{description:{story:`The maximum band, opening on one pair: eyebrow, headline, body copy and CTA beside a still image, picture on the left. Every axis below is a control rather than a separate story, so switch one and the band redraws. The **Brand** toolbar re-themes the same band across all 21 brands, tokens only.

What *How many pairs* shows at each setting. Every pair carries its own photograph, its own text alternative and its own copy, so nothing is repeated down the section:

- **One.** A moisturizer beside the paragraph about it. The band is handed the flat props every template composes, which is the shape this cover exists to prove.
- **Two.** The shade-tested moisturizer joins it, and the *Arrangement* control appears: under *Alternating* the second picture crosses to the other side, under *Same side* it stays.
- **Three.** A shade-range portrait is added, so the section now reads as a topic walked through rather than as one statement.
- **Four.** A treatment pot joins, which is where the pitch between pairs is worth judging: 128px on desktop, 64px on a phone.
- **Five.** A sun-care pair closes it. This is the ceiling and the longest section the component draws; a sixth pair handed to it is not drawn.

Presets worth trying:

- **Picture on the right.** Set *Media side* to *Image right, text left*. At two or more pairs, leave *Arrangement* on *Alternating* to see both sides in one section.
- **Video.** Set *Media* to *Video embed* to see the video's still with its play control; play opens the player over the page, and the video loops once it plays. Set it to *Looping video file* for the muted loop with its pause and mute pair.
- **A link inside the prose.** Turn *Link inside the copy* on. The link is a reference you may follow while reading; the CTA underneath is the action the band is asking for, and it is a button.
- **Quiet band.** Turn *Eyebrow*, *Short description* and *CTA* all off and set *Media* to *None yet*. That is the least a band can be authored with, and it is what three template pages draw today.`}}}},m={name:"Bulleted list",args:{...T,copy:"bulleted"},argTypes:v,render:t=>e.jsx(k,{...t}),parameters:{controls:{sort:"alpha"},docs:{description:{story:`A bulleted list in the body, one of the shapes the body slot is built to take. The marker, the spacing and the type all come from **Rich text**, so a list here reads exactly like a list anywhere else in the library, and the band adds nothing of its own.

Keep the items parallel: same grammar, same sentence case. Use bullets when the items are a set and the order does not matter.

The list belongs to the FIRST pair. Turn *How many pairs* up and the pairs below it carry their own paragraphs, which is what a real section does: one pair earns a list, the rest do not. Turn *Link inside the copy* on to put a hyperlink in the same block, under the bullets.`}}}},u={name:"Numbered list",args:{...T,copy:"numbered",mediaSide:"right"},argTypes:v,render:t=>e.jsx(k,{...t}),parameters:{controls:{sort:"alpha"},docs:{description:{story:`A numbered list in the same slot. Reach for numbers only when the order genuinely matters, which is the difference between this story and the one above it. The counter is drawn by **Rich text**, not by the browser, so it re-themes with everything else.

The picture opens on the right here to make one thing plain: the authored copy and the media side are independent choices, and a list reads the same on either side. Move *Media side* back to the left and nothing about the list changes.

Past one pair, *Arrangement* decides whether the pictures under this one cross sides or stay on the right with it.`}}}};var E,C,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: TEXT_IMAGE_DEFAULT_ARGS,
  argTypes: TEXT_IMAGE_ARG_TYPES,
  render: args => <ConfigurableTextImage {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The maximum band, opening on one pair: eyebrow, headline, body copy and CTA beside a ' + 'still image, picture on the left. Every axis below is a control rather than a ' + 'separate story, so switch one and the band redraws. The **Brand** toolbar re-themes ' + 'the same band across all 21 brands, tokens only.\\n\\n' + 'What *How many pairs* shows at each setting. Every pair carries its own photograph, ' + 'its own text alternative and its own copy, so nothing is repeated down the ' + 'section:\\n\\n' + '- **One.** A moisturizer beside the paragraph about it. The band is handed the flat ' + 'props every template composes, which is the shape this cover exists to prove.\\n' + '- **Two.** The shade-tested moisturizer joins it, and the *Arrangement* control ' + 'appears: under *Alternating* the second picture crosses to the other side, under ' + '*Same side* it stays.\\n' + '- **Three.** A shade-range portrait is added, so the section now reads as a topic ' + 'walked through rather than as one statement.\\n' + '- **Four.** A treatment pot joins, which is where the pitch between pairs is worth ' + 'judging: 128px on desktop, 64px on a phone.\\n' + '- **Five.** A sun-care pair closes it. This is the ceiling and the longest section ' + 'the component draws; a sixth pair handed to it is not drawn.\\n\\n' + 'Presets worth trying:\\n\\n' + '- **Picture on the right.** Set *Media side* to *Image right, text left*. At two or ' + 'more pairs, leave *Arrangement* on *Alternating* to see both sides in one section.\\n' + '- **Video.** Set *Media* to *Video embed* to see the video\\'s still with its play ' + 'control; play opens the player over the page, and the video loops once it plays. ' + 'Set it to *Looping video file* for the muted loop with its pause and mute pair.\\n' + '- **A link inside the prose.** Turn *Link inside the copy* on. The link is a ' + 'reference you may follow while reading; the CTA underneath is the action the band ' + 'is asking for, and it is a button.\\n' + '- **Quiet band.** Turn *Eyebrow*, *Short description* and *CTA* all off and set ' + '*Media* to *None yet*. That is the least a band can be authored with, and it is ' + 'what three template pages draw today.'
      }
    }
  }
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var R,D,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Bulleted list',
  // The cover's args with ONE thing changed, which is what the story is named for. Everything
  // else on the panel is live here: the count, the arrangement, the side, the three slot
  // toggles, the CTA emphasis, the media and the inline link.
  args: {
    ...TEXT_IMAGE_DEFAULT_ARGS,
    copy: 'bulleted'
  },
  argTypes: TEXT_IMAGE_ARG_TYPES,
  render: args => <ConfigurableTextImage {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'A bulleted list in the body, one of the shapes the body slot is built to take. The ' + 'marker, the spacing and the type all come from **Rich text**, so a list here reads ' + 'exactly like a list anywhere else in the library, and the band adds nothing of its ' + 'own.\\n\\n' + 'Keep the items parallel: same grammar, same sentence case. Use bullets when the ' + 'items are a set and the order does not matter.\\n\\n' + 'The list belongs to the FIRST pair. Turn *How many pairs* up and the pairs below it ' + 'carry their own paragraphs, which is what a real section does: one pair earns a ' + 'list, the rest do not. Turn *Link inside the copy* on to put a hyperlink in the ' + 'same block, under the bullets.'
      }
    }
  }
}`,...(L=(D=m.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var F,_,j;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Numbered list',
  // The picture is on the right here, which is an ARG rather than a fixture: the control is live
  // and a reader can put it back on the left without leaving the story.
  args: {
    ...TEXT_IMAGE_DEFAULT_ARGS,
    copy: 'numbered',
    mediaSide: 'right'
  },
  argTypes: TEXT_IMAGE_ARG_TYPES,
  render: args => <ConfigurableTextImage {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'A numbered list in the same slot. Reach for numbers only when the order genuinely ' + 'matters, which is the difference between this story and the one above it. The ' + 'counter is drawn by **Rich text**, not by the browser, so it re-themes with ' + 'everything else.\\n\\n' + 'The picture opens on the right here to make one thing plain: the authored copy and ' + 'the media side are independent choices, and a list reads the same on either side. ' + 'Move *Media side* back to the left and nothing about the list changes.\\n\\n' + 'Past one pair, *Arrangement* decides whether the pictures under this one cross ' + 'sides or stay on the right with it.'
      }
    }
  }
}`,...(j=(_=u.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const le=["Default","BulletedList","NumberedList"];export{m as BulletedList,c as Default,u as NumberedList,le as __namedExportsOrder,de as default};
