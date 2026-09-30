import{j as n}from"./iframe-6dx3hp_4.js";import{H as D,C as v}from"./Hero-BHurgzVJ.js";import{a as ne}from"./annotationPage-eYx--AWZ.js";import{c as m,D as t,a}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Button-CiZyClsp.js";import"./Icon-BihOhSWB.js";import"./Loading-DyIAIYoE.js";import"./newTabMark-TI50-QeA.js";/* empty css               */import"./Placeholder-Ed4iQRc7.js";import"./MediaFrame-CgpnOU1q.js";import"./IconButton-Btgg2ITq.js";import"./useScrollLock-B-psvS0l.js";const re={video:{eyebrow:"Collection",heading:"Got roots? Swipe to erase.",body:"A full-coverage root touch-up that blends in three shades, no mixing required.",cta:"Shop now"}},o=re.video,ie={video:"/revlon-home/hero.mp4"},se={image:"/revlon-home/bg-beach-sand.png"},he={},le={image:"/ea-home/banner-prevage.jpg"},k={prevage:le,lips:{image:"/revlon-home/banner-lips.jpg"},face:{image:"/revlon-home/banner-face.jpg"},eyeshadow:{image:"/revlon-home/banner-eyeshadow.jpg"},mascara:{image:"/revlon-home/banner-mascara.jpg"},foundation:{image:"/revlon-home/banner-foundation.jpg"}};function T(e){if(e==="video")return ie;if(e==="photo")return se;if(e!=="colourBlock")return k[e]?k[e]:he}const s=e=>({control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:e}}}),p={variant:{...a("Hero Primary"),name:"Layout",...t({labels:{primary:"Hero Primary",split:"Primary Campaign",secondary:"Secondary",tertiary:"Tertiary",image:"Image (legacy)",inverse:"Inverse (legacy)"},options:["primary","split","secondary","tertiary","image","inverse"]}),description:"Which layout to draw. The first four are the criteria layouts. Image and Inverse are the two ratified legacy layouts: a full-bleed band whose media fills the box and whose height is driven by the copy. Changing it swaps the whole structure, not one slot."},primaryBackground:{...a("Looping video"),name:"Background media",if:{arg:"variant",eq:"primary"},...t({labels:{video:"Looping video",lips:"Campaign photo (lips)",prevage:"Pale asset (EA PREVAGE)",placeholder:"Image (placeholder)",photo:"Photograph (stress test)"},options:["video","lips","prevage","placeholder","photo"]}),description:"Media is required on this layout. Looping video is the real asset the live homepage plays; Image draws the component's own placeholder; Photograph is the bright stress asset, the one background that shows what the legibility scrim is for."},splitMediaBackground:{...a("Campaign photo (faces)"),name:"Media block",if:{arg:"variant",eq:"split"},...t({labels:{face:"Campaign photo (faces)",eyeshadow:"Campaign photo (shadow)",video:"Looping video",placeholder:"Image (placeholder)"},options:["face","eyeshadow","video","placeholder"]}),description:"The media-only side. It never carries text, whatever the other controls hold."},splitContentBackground:{...a("Campaign photo (mascara)"),name:"Media+Content block background",if:{arg:"variant",eq:"split"},...t({labels:{mascara:"Campaign photo (mascara)",foundation:"Campaign photo (foundation)",video:"Looping video",placeholder:"Image (placeholder)"},options:["mascara","foundation","video","placeholder"]}),description:"The media behind the block's Headline, Eyebrow, Short description and CTA label."},splitTextOn:{...a("Image 2"),name:"Text box over",if:{arg:"variant",eq:"split"},...t({labels:{1:"Image 1",2:"Image 2"},options:[1,2]}),description:"Which of the two images the text box sits over. The images keep their positions; only the copy moves. It was hard-pinned to image 2 before this control existed."},secondaryGround:{...a("Campaign photo (lips)"),name:"Background",if:{arg:"variant",eq:"secondary"},...t({labels:{lips:"Campaign photo (lips)",foundation:"Campaign photo (foundation)",video:"Looping video",colourBlock:"Colour block (no image)",placeholder:"Image (placeholder)"},options:["lips","foundation","video","colourBlock","placeholder"]}),description:`Media is required, but a colour block is a first-class alternative to it, not a fallback. **Colour block is this layout's media-off state**, which is where "the media should be independently configurable" is answered on Secondary: no picture is drawn and the band's own flat ground stands in, with the copy still set left in its own half. It stays a choice rather than a switch because media has five states here and not two.

Looping video is the state the live homepage ships on this layout, and it draws the pause and mute pair: a Hero plays a hosted file, never a provider embed, so the controls are the ones the library owns.`},tertiaryGround:{...a("Campaign photo (foundation)"),name:"Background",if:{arg:"variant",eq:"tertiary"},...t({labels:{foundation:"Campaign photo (foundation)",eyeshadow:"Campaign photo (shadow)",video:"Looping video",colourBlock:"Colour block (no image)",placeholder:"Image (placeholder)"},options:["foundation","eyeshadow","video","colourBlock","placeholder"]}),description:`The only layout whose own requirement list marks the background optional. Colour block is that state, and it is where "all other elements should be independently configurable" is answered for media on Tertiary. It stays a choice rather than a switch because media has five states here and not two.

Looping video draws the pause and mute pair, the same as every other layout: a Hero plays a hosted file, never a provider embed.`},backdrop:{...a("Solid block"),name:"Backdrop",if:{arg:"variant",neq:"secondary"},...t({labels:{solid:"Solid block",overlay:"Overlay"},options:["solid","overlay"]}),description:`What the component puts between the media and the copy. **Solid block** is the default: it takes the copy off the photograph entirely and puts it on a filled block sized to the lockup, the pattern the live ColorStay band draws. **Overlay** is the scrim, one flat fill over the whole media plate. Either way a colour block layout stays clean, because neither value draws without authored media.

**There is no third value, and there is no way to draw nothing.** Every Hero reads its copy against a ground the library supplied.

**It does nothing on Hero Primary below 768.** Both values render identically there, to the pixel, and that is structural rather than a gap: the layout stops overlaying at the seam and the copy moves into a band of its own. Use **Content tone** at that width.`},headingLevel:{control:!1,table:{disable:!0}},plateTone:{...a("Dark ground"),name:"Content tone",...t({labels:Object.fromEntries(v.map(e=>[e.value,e.label])),options:v.map(e=>e.value)}),description:`What kind of ground the copy reads against, which is a separate question from whether the component supplies that ground. **Dark ground** is the default and sets the copy and the CTA on the inverse plane, which is what every layout shipped with. **Paper** and **Alt** set them on the normal plane, dark type and a dark CTA.

**Below 768 it is the only one of the two axes that still does anything on Hero Primary**, because that layout moves its copy into a band this control paints. The other three layouts keep both axes at every width.

It applies under both backdrops, not only under Solid block. On a pale asset, Paper with **Backdrop** on Solid block is the treatment to reach for: the copy sits dark on the library's own paper and the photograph keeps every pixel around it. Paper with Overlay is the other reading and it costs the picture, because the light veil is 92% white.

**Elizabeth Arden's PREVAGE band is the composition this cannot draw exactly.** A near-white photograph carrying black copy with nothing at all over it needs a backdrop this axis does not have. The tone is the same; something is always painted behind the words.

Paper and Alt set the same ink as each other, because both name a light ground. They differ only in what gets painted, and only when the backdrop is Solid block: \`--color-bg-page\` against \`--color-bg-surface-alt\`.

**A light tone is still a promise the page makes about its asset**, wherever the copy reaches past the block it is set on. The component cannot check that a photograph is bright enough for dark type, the way it can guarantee the scrim and the block.`},placement:{...a("The layout's own"),name:"Block placement",if:{arg:"variant",neq:"secondary"},...t({labels:{left:"Left",center:"Center",right:"Right"},options:["left","center","right"]}),description:`Where the text block sits in the band. Each layout starts on the placement it already shipped with: Hero Primary and Primary Campaign on the left, Tertiary centred, so passing nothing moves zero pixels.

It is the cross-axis position of the copy block and is independent of how the copy is set inside it, so a block on the left can still hold centred text and the other way round.

**The backdrop travels with the block.** Walk this control over the bright Photograph background and the copy stays on the library's own ground in every position; there is no placement that leaves it on the raw picture.

**Secondary has its own Block placement row below, Left and Right only.** That layout is a 50/50 split with no centre half to place a block in, so it is not offered here.`},secondaryPlacement:{...a("Left"),name:"Block placement",if:{arg:"variant",eq:"secondary"},...t({labels:{left:"Left",right:"Right"},options:["left","right"]}),description:`Which HALF the copy occupies, because Secondary is a 50/50 split rather than a block inside a full-width column. Left is text left and picture right. Right swaps the two columns, picture and copy together, and the copy stays left-set in whichever half it lands in. Below the mobile seam the band is one column, media above copy, whichever half was chosen above it.

**There is no Center here, on purpose.** There is no centre half of a two-column split, so this row only offers the two values the layout can draw.`},controlsSide:{...a("The layout's own"),name:"Controls side",...t({labels:{right:"Right",left:"Left"},options:["left","right"]}),description:`Which bottom corner the pause and mute pair is worn in. Leave it alone and each layout picks the corner OPPOSITE its own copy, which is the whole point of the axis: **Hero Primary**, **Secondary** and **Tertiary** take the edge away from the placed text block, and **Primary Campaign** resolves per panel, the copy panel away from its own words and the media-only panel away from the panel that holds them.

**So walking Block placement moves these too.** Push the copy to the right and the controls go left on their own; this control is for the asset that puts its subject in the corner the default picked.

The pair is worn at rest on every layout and every pointer type. It is not revealed by hovering the band and it cannot be sent away, because on a Hero the video is a background behind the copy and a tap lands on the headline: there was never a gesture that could ask for it.`},textAlign:{...a("The layout's own"),name:"Text alignment",...t({labels:{left:"Left",center:"Center"},options:["left","center"]}),description:`How the copy is set inside the block, and the CTA follows it. Two values only: the library sets no right-aligned paragraphs. Defaults are the shipped drawing again, centred on Hero Primary and Tertiary, left-set on Secondary and the Primary Campaign panels.

**On Secondary, left is the recommended stance rather than the only one.** Its own requirement line pushes for left-aligned copy even when there is no image, and sends centred copy to **Tertiary**, so left is what this layout opens on and what to ship unless there is a reason. The control is here and it works.

**This axis governs the widths above the mobile seam.** On a phone every layout stacks and centres its content, in all four, so a band authored left-set still reads centred there.`},eyebrow:{...s('"Collection"'),name:"Eyebrow",description:"The words in the small tracked line above the headline. Whether the line is DRAWN is the **Eyebrow** switch under Elements; this is what it says."},heading:{...s('"Got roots? Swipe to erase."'),name:"Headline",description:"The only copy required in every layout, and the one part with no on/off switch beside it. On Primary Campaign this is the Media+Content block's heading. The Media block never carries text."},body:{...s("The full campaign sentence"),name:"Short description",description:"The words in the supporting line under the headline. Whether the line is DRAWN is the **Short description** switch under Elements; this is what it says."},ctaLabel:{...s('"Shop now"'),name:"CTA label",description:"The call to action's text. Whether the button is DRAWN is the **CTA** switch under Elements; this is what it reads, and it has no effect while that switch is off."},showEyebrow:{...m("On"),name:"Eyebrow",description:"Draw the small tracked line above the headline. Optional on every layout. Turn it off and the part goes entirely, not just its words; the copy in **Eyebrow** under Content is kept and comes back with it."},showDescription:{...m("On"),name:"Short description",description:"Draw the supporting line under the headline. Optional on every layout. On Secondary this is the block that may carry hyperlinks. Turn it off and the part goes; the copy in **Short description** under Content is kept and comes back with it."},showCta:{...m("On"),name:"CTA",description:`Draw the call to action. Optional on every layout, Tertiary included.

On Tertiary the button sits directly under the short description, inside the same block, so a page whose whole job is to send the reader somewhere keeps its one action beside the sentence that asks for it.

The label in **CTA label** under Content is kept while this is off and comes back with the button.`},cta:{control:!1,table:{disable:!0}},ctaHref:{control:!1,table:{disable:!0}},media:{control:!1,table:{disable:!0}},secondary:{control:!1,table:{disable:!0}}},y={variant:"primary",eyebrow:o.eyebrow,heading:o.heading,body:o.body,ctaLabel:o.cta,showEyebrow:!0,showDescription:!0,showCta:!0,primaryBackground:"video",splitMediaBackground:"face",splitContentBackground:"mascara",splitTextOn:2,secondaryGround:"lips",tertiaryGround:"foundation",backdrop:"solid",plateTone:"dark",placement:void 0,secondaryPlacement:void 0,controlsSide:void 0,textAlign:void 0};function i({variant:e,heading:r,eyebrow:R,body:F,ctaLabel:g,showEyebrow:M=!0,showDescription:_=!0,showCta:G=!0,primaryBackground:N,splitMediaBackground:j,splitContentBackground:W,splitTextOn:V,secondaryGround:Y,tertiaryGround:U,backdrop:z="solid",plateTone:K="dark",placement:X,secondaryPlacement:J,textAlign:Q,controlsSide:Z,ariaLabel:$}){const ee=e==="image"||e==="inverse",w=M?R:"",b=_?F:"",u=G&&e!=="tertiary"&&g?g:void 0,f=u?"#shop":void 0,te=e==="primary"?N:e==="secondary"?Y:e==="tertiary"?U:j,ae=e==="secondary"?J:X,oe=e==="split"?{media:T(W),eyebrow:w||void 0,heading:r,body:b||void 0,cta:u,ctaHref:f}:void 0;return n.jsx(D,{variant:e,eyebrow:w||void 0,heading:r,body:b||void 0,cta:u??null,ctaHref:f,media:ee?void 0:T(te),secondary:oe,splitTextOn:V,backdrop:z,plateTone:K,placement:ae,textAlign:Q,controlsSide:Z,ariaLabel:$})}const xe={title:"Organisms/Hero",component:D,tags:["autodocs"],parameters:{layout:"fullscreen",themeShellPadding:!1,docs:{page:ne("Hero"),description:{component:"A full-width campaign band that sits at the top of a page, directly below the navigation. Four ratified layouts draw it, from the home page opening image down to a slim page-header band."}},componentDoc:{usage:`
## When to use

- ✅ **The opening image of the home page.** That is **Hero Primary**, the only full-bleed,
  single-block layout. Its media is required.
- ✅ **A two-block campaign tout**, media on one side and media with copy on the other. That is
  **Primary Campaign**, and the split video-and-image tout the client asked for belongs here.
- ✅ **A short reinforcement band** further down a category or campaign page. That is
  **Secondary**.
- ✅ **A page header** for a blog, a content page or the store locator. That is **Tertiary**, the
  only layout that can ship with no media at all.

- ❌ **An image sitting beside a block of copy.** That is **Text + Image**, which exists to
  pair the two.
- ❌ **A frame that only holds a photograph or a video.** That is **MediaFrame**. Hero adds the
  headline, the band and the full-bleed ground around it.
- ❌ **A run of linked cards or categories.** Those are **Card Grid** and **Carousel**.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Full-bleed media**, an image or a looping video | **required** on Hero Primary, Primary Campaign and Secondary. **Optional** on Tertiary, the only layout that may ship with none | Secondary and Tertiary take a flat colour block in its place |
| **Eyebrow**, the small tracked line above the headline | optional, every layout | Its own on/off switch, independent of the other parts |
| **Headline** | **always required, every layout** | An \`h1\` on Hero Primary and Tertiary, an \`h2\` on Secondary and inside Primary Campaign's panels. It is the one part with no switch: there is no Hero without a headline |
| **Short description** | optional, every layout | Its own on/off switch. On Secondary it is the block that may carry hyperlinks |
| **CTA** | optional on Hero Primary, Primary Campaign and Secondary. **Not drawn on Tertiary at all** | Its own on/off switch on the three layouts that have one. Tertiary's requirement list names four parts and no CTA, so the layout has no CTA row and no switch for one |
| **Video transport cluster**, pause and mute | whenever the media is a looping video, on **every layout** | A Hero plays a hosted video file, never a provider embed, so the player has no controls of its own and these two are the whole control set: pause and play, mute and unmute. They are drawn on the Figma symbol and they are what makes an autoplaying loop stoppable. Nothing else joins them, no scrubber, no fullscreen. They are **worn on the picture at rest**, never revealed by hovering the band, and they sit in the bottom corner **opposite the copy** by default, which **Controls side** can override |
| **Backdrop**, what sits between the media and the copy | **required as a choice**, defaults to Solid block wherever the media is an authored image or video | Two values, and neither of them is nothing. **Solid block** takes the copy off the photograph and onto a filled block sized to the lockup, in one of three grounds. **Overlay** is the scrim: one flat fill over the whole media plate, the layer Figma already draws under that name. Either way a colour block never draws one, because its flat ground already clears AA. **Below 768 the whole axis is inert on Hero Primary**, measured at 0.00% pixel difference between the two values. That layout stops overlaying at the seam and moves its copy into a band that already paints the tone's ground, so there is nothing left for a backdrop to supply, and it collapses into Content tone. The other three still set their copy on the asset at 390 and keep both values |
| **Content tone**, what kind of ground the copy reads against | defaults to Dark ground, which is the inverse ink every layout shipped with | Separate from the backdrop, and it applies under both values. **Dark ground** keeps the inverse plane. **Paper** and **Alt** set the copy and the CTA on the normal plane, which is how a pale asset carries dark type. The two light values set the same ink and differ only in what gets painted, and only under Solid block |
| **Block placement**, where the copy sits in the band | left, centre or right | Each layout starts on the placement it shipped with: Hero Primary and Primary Campaign left, Secondary and Tertiary centred |
| **Text alignment**, how the copy is set inside the block | left or centre | Two values only. The library sets no right-aligned paragraphs. The CTA follows the text, not the block |

**Primary Campaign has two blocks, and they are not interchangeable.** The **Media block** carries
media and never text. The **Media+Content block** carries media, with the eyebrow, headline, short
description and CTA overlaid on it.

- **Tokens own the look.** Shape, spacing, type and every colour. The same Hero re-themes across
  all 21 brands without a value being restated.
- **The caller owns the words and the asset.** Eyebrow, headline, short description, CTA label and
  the media itself.

**Primary Campaign is the two-block layout, and its content treatment is the Backdrop axis.** It is
the layout with two side-by-side blocks, media on one side and media with copy on the other, and the
copy on the Media+Content side reads against either a separate content block or an overlay. Those
two treatments are the two values of **Backdrop**, so this is one layout with one axis rather than
two layouts that look alike. The coded name for it is \`variant="split"\`, a name the criteria
never uses, and that is a naming difference rather than an open question.

### Variants

| Layout | Media | Eyebrow | Headline | Short description | CTA |
|---|---|---|---|---|---|
| **Hero Primary** | image or looping video, required | optional | **required** | optional | optional |
| **Primary Campaign** | two blocks. Media side: video or image. Media+Content side: media required | optional | **required** | optional | optional |
| **Secondary** | image or colour block, required | optional | **required** | optional | optional |
| **Tertiary** | image or colour block, **optional** | optional | **required** | optional | none |

**Primary Campaign chooses which image the text box overlays.** The two images keep their positions
and the copy moves between them with the **Text box over** control. Exactly one block stays media-only
and one is media+content, whichever side is chosen. It was hard-pinned to image 2 before this control
existed.

**Each optional part is its own switch, and the headline has none.** Eyebrow, Short description and
CTA turn on and off independently, on every layout that draws them, and the copy each one holds is a
separate field: switching a part off keeps its words and switching it back on returns them. The
headline is the one part with no switch anywhere, because every layout always draws it.

**Media is a choice rather than a switch, and where it may be absent differs by layout.** Hero
Primary and both blocks of Primary Campaign require it, so those two are offered no way to remove
it. Secondary and Tertiary can ship without a picture, and that state is the **Colour block** value
of their own Background control.

**The colour block is a first-class alternative to media**, not a fallback, on Secondary and
Tertiary. The criteria requires it and Figma draws it nowhere, so this page is the only place it is
specified: pass no media and the layout's own flat ground stands in, \`--color-bg-inverse\` on
Secondary and \`--color-bg-page\` on Tertiary.

**Secondary is a 50/50 split.** The copy sits in the left column, left-aligned on the band's own
colour ground, and the media fills the right column. Left-aligned is the stance to author, even
with no image, and **Tertiary** is where centred copy belongs. **Text alignment** is still offered
here and it works: left is the default this layout opens on, not the only value it can take.
Because the copy reads against its own ground rather than the photograph, Secondary draws no scrim
or solid plate, so the **Backdrop** axis does nothing on it and is not offered; **Content tone**
still picks which ground (dark, paper, alt) the copy column paints, and **Block placement** swaps
which half that column occupies.

**Image Placeholder means the asset has not landed yet, and it draws no text block.** It is a state
of the MEDIA slot: the slot is authored, no file is in it, so the component fills the box with its
own grey stand-in. It is not the colour block, which means no media at all and belongs to Secondary
and Tertiary; and it does not put the copy inside a container of its own. What does that is
**Backdrop** on Solid block, a separate axis that applies to every ground including a real
photograph. Reach it with **Media block**, **Media+Content block background** or either
**Background** control on Image (placeholder).

**It is not a variant of its own, and the variant it reads like is Primary Campaign.** The design
review asked whether the placeholder should be documented as a separate variant, because the copy
looked as though it sat inside a text block of its own. That container is the Backdrop axis, and the
layout that draws it beside a second block of media is Primary Campaign. So the answer is one
layout, one content-treatment axis, and a media state that says the file has not arrived.

**Image and Inverse are ratified legacy layouts.** \`variant="image"\` and \`variant="inverse"\`
sit beyond the sheet's four layouts and are kept as ratified variants. Each is a full-bleed band
whose media FILLS the box (object-fit: cover, so a real image covers and the placeholder fills too)
and whose HEIGHT IS DRIVEN BY THE COPY. They share Primary's full-bleed fill: before this the media
was a fixed 21/9 placeholder that collapsed the band and did not fill, which is the bug this closes
("a imagem deve preencher"). Image draws the copy in ink on a light ground; Inverse on a dark one.
Both are reached from the **Layout** control; neither has a story of its own.

**The copy block sits left, centre or right, and that is a separate axis from how the copy is set
inside it.** A block on the right can still hold left-set copy. Each layout opens on the
placement it already shipped with, Hero Primary, Primary Campaign and Secondary left, Tertiary
centred, so passing nothing moves zero pixels. Use **Block placement** to see all three on Hero
Primary, Primary Campaign and Tertiary, and **Text alignment** for the other axis. Text alignment
reaches all four layouts; Block placement is fenced off Secondary, which draws its own Block
placement row further down the panel, Left and Right only, because there is no centre half of a
50/50 split for it to offer. On Secondary placement means which HALF the copy occupies rather than
where it sits inside a column. Whichever placement a band takes, the backdrop travels with the
block, so the copy never lands on the raw photograph in any position.

**The criteria says the four layouts have no functional differences.** What differs is what each one
draws, which is the table above.
`,guidance:`
## Behaviors

### States

- **Resting.** The ratified parts in place, media filling its band, nothing pressed or focused.
- **CTA hover.** A ratified requirement on Primary Campaign and Secondary. Hero Primary's
  own line specifies **click only**. The underlying Button carries a hover rule regardless, so do
  not read that as Hero Primary ratifying one. Tertiary's own CTA lines are superseded: that layout
  draws no CTA, so it has no hover to specify.
- **Hover on touch.** There isn't one. Hover needs a pointer that can hover.
- **Transport at rest and revealed.** Every layout that is handed a looping video. The two controls
  are hidden at rest and fade in when a pointer enters the band or the keyboard reaches them. On a
  touch screen there is no hover to enter and the video sits behind the copy, so a tap has nothing
  to ask with: the pair is simply always there.
- **Video playing, paused, muted, unmuted.** Every layout that is handed a looping video. The
  background video autoplays muted and loops on arrival, and the pause button's name follows the
  element rather than the last click, so it reports what is actually happening.
- **Reduced motion.** A reader who has asked for reduced motion gets a still first frame: the video
  never starts, and the control offers Play. Turn the preference on while a loop is running and it
  stops.
- **Mobile.** On a phone every layout stacks and centres its content. Hero Primary restacks to
  media above content, Primary Campaign's two panels go one per row, and Secondary's 50/50 becomes
  a media band above its copy; Tertiary is one column at every width, so it has nothing to unstack.
  In all four the eyebrow, headline, short description and CTA are centred, whatever alignment the
  band is authored with above the seam.
- **No loading, empty or error state.** None is named anywhere in the criteria, for any layout.
  Said plainly rather than invented.

### Interactions

- **Click or tap a CTA and it goes to its destination.** Every layout that has one.
- **Play/pause and mute/unmute toggle independently**, and each button's name flips with its state,
  "Pause background video" to "Play background video". Every layout with a looping video.
- **Secondary hides its CTA until a real destination is authored.** The component's own default
  destination reads as "no destination yet" and suppresses the button.

## Rules

- ✅ **Do** give Hero Primary a media asset. It is required, and there is no headline-only Hero
  Primary.
- ✅ **Do** reach for Tertiary when there is no media to show. It is the only layout whose media is
  optional.
- ❌ **Don't** put text on the Media side of Primary Campaign. That side is media only.
- ❌ **Don't** author a CTA on Tertiary. That layout has none, and the controls do not offer one.
- ❌ **Don't** ship a Hero without a headline, in any layout.

- ✅ **Do** let every layout stack and centre its content on a phone. Left-set copy is a desktop
  stance, including Secondary's; below the seam the band is one column and the copy is centred in
  it. The **Text alignment** control still governs every width above the seam.
- ❌ **Don't** assume the coded \`image\` and \`inverse\` variants are ratified. They are not in the
  criteria at all.

- ❌ **Don't** autoplay a looping background video without a reachable pause control. Every layout
  draws the transport when it is handed a video, each control carries its own ground so it holds its
  contrast over any frame, and on a touch screen the pair never hides at all.
- ❌ **Don't** reach for a YouTube or Vimeo embed in a Hero. A Hero sets copy and a backdrop on top
  of its media, so a provider's own controls would end up under a headline, a block or a veil. Hand
  the Hero a hosted video file, and put a provider embed in **Media frame** instead.
- ❌ **Don't** let the background media carry the message. It is decorative in every layout, hidden
  from screen readers, so the headline has to say the thing on its own.

### Content rules

- ✅ **Do** write the headline for every layout. It is the only copy required everywhere.
- ✅ **Do** author the split tout, video on one side and image on the other, as Primary Campaign. A
  client question asked for exactly this, and the answer was yes.
- ❌ **Don't** invent a character limit. All four layouts say the same thing: limits are owed by
  design.
- ❌ **Don't** judge headline contrast against the grey placeholder, the dark colour block or the
  looping video. All three are grounds the library already measured; none of them can show what a
  bright photograph does. Set **Background** to Photograph (the bright stress asset) on the card
  above and walk **Backdrop** and **Content tone** over it. The numbers each value holds are in the
  two controls' own descriptions.
- ✅ **Do** let the backdrop do this job, because it is no longer possible not to. Every authored
  image or video gets one of the two values: the solid block by default, or the scrim, a single
  flat plate at \`--overlay-media-scrim\`, 56% black, the lowest alpha that keeps every brand's
  inverse ink at 4.5:1 over a pure-white image. A colour block gets neither, because its flat
  ground already passes.
- ⚠️ **Do own the asset if you set a light Content tone**, wherever the copy reaches past the
  block it is set on. The scrim and the solid block supply their own ground, but dark copy on a
  photograph is a promise about the photograph. Measured inside the copy column, the EA PREVAGE
  band reads 7.52:1 at its worst pixel and all five Revlon campaign banners read 1.35 to 1.36,
  because each of those puts something black where the headline sits. Bright on average is not the
  test; the worst pixel under the type is.
- ❌ **Don't** look for the way to draw a Hero with nothing over the asset. There is none. A
  photograph art-directed to carry dark type on its own takes the solid block, which keeps the
  picture and moves the words onto paper.
- ❌ **Don't** reach for a gradient here. Figma draws this as one flat fill and a stop list in a
  stylesheet is a shape the design system never gave the component. If a falloff is wanted, it is a
  change to the \`Scrim\` layer in the file first.
- ❌ **Don't** look for a kicker or an accent-coloured headline. Neither is part of this component.
  The line under the headline is the **Short description**, and every headline reads on the ink its
  **Content tone** sets.
`,spec:{elements:[{name:"Full-bleed media",requirement:"conditional",condition:"Optional on Tertiary only. An image or a looping video everywhere else."},{name:"Headline",requirement:"required",condition:"The only copy required in every layout."},{name:"Eyebrow",requirement:"optional"},{name:"Short description",requirement:"optional"},{name:"CTA",requirement:"conditional",condition:"Every layout except Tertiary, which draws none, and optional where it exists."},{name:"Colour block",requirement:"conditional",condition:"Secondary and Tertiary, when no media is supplied."},{name:"Video transport cluster",requirement:"conditional",condition:"Any layout handed video media. Pause and mute, worn on the picture at rest, in the bottom corner opposite the copy."}],authorability:[{name:"Headline",rule:"Required on every layout, the one part with no on/off switch."},{name:"Eyebrow",rule:"Free text above the headline, with its own on/off switch. No recommended floor."},{name:"Short description",rule:"Free text under the headline, with its own on/off switch."},{name:"Character limits",rule:"Guidance and not a cut: the Hero wraps. Only Hero Primary has a band that can cut copy."},{name:"Hero Primary limits",rule:"Eyebrow up to 19, headline 8 to 30, short description 20 to 86."},{name:"Primary Campaign limits",rule:"Eyebrow up to 24, headline 8 to 22, short description 20 to 90."},{name:"Secondary limits",rule:"Eyebrow up to 24, headline 8 to 40, short description 20 to 200."},{name:"Tertiary limits",rule:"Eyebrow up to 16, headline 8 to 24, short description 20 to 105."},{name:"CTA",rule:"Free label and destination, with its own on/off switch on the three layouts that draw one."},{name:"Media",rule:"The author supplies the image or video. It is decorative, so it never carries the message."},{name:"Media side",rule:"On Primary Campaign the media side takes media only. No copy is drawn there."},{name:"Layout",rule:"One of four, chosen when the page is built. Each layout fixes which parts exist."},{name:"Colour block",rule:"Fixed by the system: Secondary and Tertiary use it when no media is supplied."},{name:"Transport cluster",rule:"Fixed by the system wherever a layout is handed a looping video. Its labels are interface copy."}],variants:[{label:"Hero Primary",props:{variant:"primary"}},{label:"Primary Campaign",props:{variant:"split"}},{label:"Secondary",props:{variant:"secondary"}},{label:"Tertiary",props:{variant:"tertiary"}}],states:[{key:"default",name:"Default"},{key:"hover",name:"CTA hover",pseudo:"hover"},{key:"focus",name:"CTA focus",pseudo:"focus-visible"},{key:"no-media",name:"No media",props:{ground:"colourBlock"}}],render:de,interactions:["Click or tap a CTA and it goes to its destination, in every layout that has one.","Play and mute toggle independently, and each button name flips with its state.","The transport is on the picture at rest, on every layout and every pointer type. Hovering the band changes nothing.","It is worn in the bottom corner opposite the copy, so moving the text block moves the controls to the other side.","Secondary hides its CTA until a real destination is authored.","Below the tablet breakpoint every layout stacks to one column and centres its content.","Background media is decorative and hidden from screen readers, in every layout.","The background video autoplays muted and loops on arrival, on every layout that is handed one."],accessibility:[{label:"Keyboard",text:"The CTA and both transport buttons are reachable and operable from the keyboard at every width."},{label:"Screen reader",text:"Background image and video are decorative and hidden, so the headline carries the message on its own."},{label:"Transport names",text:"The pause and mute buttons are named, and each name flips with the state it reports."},{label:"Stopping the motion",text:"The looping background can always be paused and muted. Both controls are on the picture at rest, on every layout and every pointer type."},{label:"Focus",text:"Every control keeps a visible focus ring, and the ring reads over dark media on every brand."},{label:"Video controls",text:"Pause and mute ship on every layout handed a looping video, and they are the whole control set: a Hero plays a hosted file, not a provider embed."},{label:"Motion",text:"The background video does not autoplay when the reader has asked for reduced motion, and a loop already running stops if the preference is turned on."},{label:"Target size",text:"Both transport buttons are 40px in each direction, which clears 2.5.8 at AA and sits one rung under the shared ladder's 44px default."},{label:"Contrast",text:"Headline, eyebrow and description hold 4.5:1 on every brand, because the backdrop always supplies the ground. The axis has no value that leaves the asset raw."},{label:"Controls on media",text:"Each transport control carries its own ground, not the bare picture, and reads 5.49:1 at worst across the 21 brands against the 3:1 a control needs."},{label:"Backdrop",text:"Two values, the solid block by default and the scrim. The scrim follows its ink: 56% black under light copy, 80% white under dark. Neither draws below 768."}],openItems:[]}}}};function de({variant:e="primary",ground:r="placeholder"}){return n.jsx("div",{style:{width:520},children:n.jsx(i,{variant:e,heading:o.heading,eyebrow:o.eyebrow,body:o.body,ctaLabel:o.cta,primaryBackground:r==="colourBlock"?"colourBlock":"placeholder",splitMediaBackground:"placeholder",splitContentBackground:"placeholder",secondaryGround:r,tertiaryGround:r})})}const h={name:"Primary",args:{...y,variant:"primary"},argTypes:p,render:e=>n.jsx(i,{...e}),parameters:{controls:{sort:"none"},docs:{description:{story:`The full-bleed opening band, on the looping video the live homepage plays. Its media is the only one of the four that is required with no colour-block alternative.

It is also where the whole component is driven. Every part Hero can draw is a control below, and **Layout** switches between the four ratified layouts and swaps which of the other controls apply.

**The optional parts are switches.** Eyebrow, Short description and CTA each have an on/off control under **Elements**, and each one is independent of the other two. The text fields under **Content** hold what those parts SAY, so switching a part off keeps its copy and switching it back on gives the copy back. **The headline has no switch**, because it is the one part every layout always draws.

**Every layout opens on a real asset.** Hero Primary starts on the looping video the live homepage plays; the other three start on campaign photography pulled from the live site's own collection banners, a different one each so the page reads as four compositions rather than one picture repeated. The grey stand-in and the colour block are states you switch TO, not where the component opens.

**Presets worth looking at.**

- **Colour block.** Set Layout to Secondary or Tertiary and Background to Colour block. No media renders and the layout's own flat ground stands in, which is the state the criteria requires and Figma draws nowhere. It is a state, not the resting appearance of either layout.
- **Block placement and Text alignment.** Two independent axes: where the copy block sits in the band, and how the copy is set inside it. Each layout opens on the alignment it already shipped with.
- **Headline only.** Switch Eyebrow, Short description and CTA off with Layout on Tertiary, the one layout whose media is optional too. That is the anatomy table's "optional" column, proved rather than taken on trust, and the headline stays behind because nothing can take it away.

The **Brand** toolbar restyles the same composition across all 21 themes, tokens only. The **Channel** toolbar never applies here, because Hero carries no channel-branching behaviour.`}}}},l={name:"Primary campaign",args:{...y,variant:"split",heading:"Spring / Lip Fling",eyebrow:"Collection",body:"A limited seasonal edit of four wearable reds.",ctaLabel:"Shop the edit"},argTypes:p,render:e=>n.jsx(i,{...e}),parameters:{docs:{description:{story:`The ratified Primary Campaign: two side-by-side blocks, a Media-only block carrying no text at all beside a Media+Content block with the required headline plus an optional short description and CTA. Its content treatment is the **Backdrop** axis, a separate content block or an overlay, which is the axis rather than a second layout. The copy is Figma's own: "Spring / Lip Fling" is the symbol's literal text.`}}}},d={name:"Secondary",args:{...y,variant:"secondary",heading:"ColorStay Overtime Lip Color",eyebrow:"New",body:"Up to 24 hours of color that stays put.",ctaLabel:"Shop now"},argTypes:p,render:e=>n.jsx(i,{...e}),parameters:{docs:{description:{story:"Secondary is a 50/50 split: the copy sits left, left-aligned on the band's colour ground, and the image fills the right column. Left is the stance to author, with no image too, and Tertiary is where centred copy belongs, but Text alignment is offered here and it applies. The other states the criteria asks to be provable are reached from the controls: Background on Colour block for the same 50/50 with no image, and the Eyebrow, Short description and CTA switches off for the headline-only band."}}}},c={name:"Tertiary",args:{...y,variant:"tertiary",heading:"Find your shade",eyebrow:"Foundation",body:"ColorStay Full Cover comes in 40 shades, all buildable to full coverage.",ctaLabel:""},argTypes:p,render:e=>n.jsx(i,{...e}),parameters:{docs:{description:{story:"Tertiary with an image band: the page-header pattern for a blog or store-locator page. It draws no CTA, which is settled rather than inferred: its own requirement list names four parts and no call to action, and that is the reading that was ratified. The CTA row and its switch are not offered on this layout."}}}};var C,S,x;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  // The standard: a story name never repeats the component. The title above already says Hero,
  // so the layout is 'Primary'. Display name only; the export is the id and does not move.
  name: 'Primary',
  args: {
    ...HERO_DEFAULT_ARGS,
    variant: 'primary'
  },
  argTypes: HERO_ARG_TYPES,
  render: args => <ConfigurableHero {...args} />,
  parameters: {
    controls: {
      sort: 'none'
    },
    docs: {
      description: {
        story: 'The full-bleed opening band, on the looping video the live homepage plays. Its media ' + 'is the only one of the four that is required with no colour-block alternative.\\n\\n' + 'It is also where the whole component is driven. Every part Hero can draw is a control ' + 'below, and **Layout** switches between the four ratified layouts and swaps which of the ' + 'other controls apply.\\n\\n' + '**The optional parts are switches.** Eyebrow, Short description and CTA each have an ' + 'on/off control under **Elements**, and each one is independent of the other two. The ' + 'text fields under **Content** hold what those parts SAY, so switching a part off keeps ' + 'its copy and switching it back on gives the copy back. **The headline has no switch**, ' + 'because it is the one part every layout always draws.\\n\\n' + '**Every layout opens on a real asset.** Hero Primary starts on the looping video the ' + 'live homepage plays; the other three start on campaign photography pulled from the ' + "live site's own collection banners, a different one each so the page reads as four " + 'compositions rather than one picture repeated. The grey stand-in and the colour block ' + 'are states you switch TO, not where the component opens.\\n\\n' + '**Presets worth looking at.**\\n\\n' + '- **Colour block.** Set Layout to Secondary or Tertiary and Background to Colour ' + "block. No media renders and the layout's own flat ground stands in, which is the " + 'state the criteria requires and Figma draws nowhere. It is a state, not the resting ' + 'appearance of either layout.\\n' + '- **Block placement and Text alignment.** Two independent axes: where the copy block ' + 'sits in the band, and how the copy is set inside it. Each layout opens on the ' + 'alignment it already shipped with.\\n' + '- **Headline only.** Switch Eyebrow, Short description and CTA off with Layout on ' + 'Tertiary, the one layout whose media is optional too. That is the anatomy table\\'s ' + '"optional" column, proved rather than taken on trust, and the headline stays behind ' + 'because nothing can take it away.\\n\\n' + 'The **Brand** toolbar restyles the same composition across all 21 themes, tokens ' + 'only. The **Channel** toolbar never applies here, because Hero carries no ' + 'channel-branching behaviour.'
      }
    }
  }
}`,...(x=(S=h.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var A,E,P;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Primary campaign',
  args: {
    ...HERO_DEFAULT_ARGS,
    variant: 'split',
    heading: 'Spring / Lip Fling',
    eyebrow: 'Collection',
    body: 'A limited seasonal edit of four wearable reds.',
    ctaLabel: 'Shop the edit'
  },
  argTypes: HERO_ARG_TYPES,
  render: args => <ConfigurableHero {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'The ratified Primary Campaign: two side-by-side blocks, a Media-only block carrying no ' + 'text at all beside a Media+Content block with the required headline plus an optional ' + 'short description and CTA. Its content treatment is the **Backdrop** axis, a separate ' + 'content block or an overlay, which is the axis rather than a second layout. The copy is ' + "Figma's own: \\"Spring / Lip Fling\\" is the symbol's literal text."
      }
    }
  }
}`,...(P=(E=l.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var H,I,B;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Secondary',
  args: {
    ...HERO_DEFAULT_ARGS,
    variant: 'secondary',
    heading: 'ColorStay Overtime Lip Color',
    eyebrow: 'New',
    body: 'Up to 24 hours of color that stays put.',
    ctaLabel: 'Shop now'
  },
  argTypes: HERO_ARG_TYPES,
  render: args => <ConfigurableHero {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Secondary is a 50/50 split: the copy sits left, left-aligned on the band\\'s ' + 'colour ground, and the image fills the right column. Left is the stance to author, with ' + 'no image too, and Tertiary is where centred copy belongs, but Text alignment is offered ' + 'here and it applies. The other states the ' + 'criteria asks to be provable are reached from the controls: Background on Colour block ' + 'for the same 50/50 with no image, and the Eyebrow, Short description and CTA switches ' + 'off for the headline-only band.'
      }
    }
  }
}`,...(B=(I=d.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var O,L,q;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Tertiary',
  args: {
    ...HERO_DEFAULT_ARGS,
    variant: 'tertiary',
    heading: 'Find your shade',
    eyebrow: 'Foundation',
    body: 'ColorStay Full Cover comes in 40 shades, all buildable to full coverage.',
    ctaLabel: ''
  },
  argTypes: HERO_ARG_TYPES,
  render: args => <ConfigurableHero {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Tertiary with an image band: the page-header pattern for a blog or store-locator ' + 'page. It draws no CTA, which is settled rather than inferred: its own requirement list ' + 'names four parts and no call to action, and that is the reading that was ratified. The ' + 'CTA row and its switch are not offered on this layout.'
      }
    }
  }
}`,...(q=(L=c.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const Ae=["HeroPrimary","PrimaryCampaign","Secondary","Tertiary"];export{h as HeroPrimary,l as PrimaryCampaign,d as Secondary,c as Tertiary,Ae as __namedExportsOrder,xe as default};
