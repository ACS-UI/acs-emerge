import{j as e}from"./iframe-6dx3hp_4.js";import{M as o}from"./MediaFrame-CgpnOU1q.js";import{a as x}from"./annotationPage-eYx--AWZ.js";import{D as i,a as d}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Placeholder-Ed4iQRc7.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./useScrollLock-B-psvS0l.js";const p=["1 / 1","4 / 3","3 / 4","3 / 2","2 / 3","16 / 9","9 / 16","21 / 9"],c={"1 / 1":"Square (1:1)","4 / 3":"Classic (4:3)","3 / 4":"Portrait (3:4)","3 / 2":"Landscape (3:2)","2 / 3":"Tall portrait (2:3)","16 / 9":"Widescreen (16:9)","9 / 16":"Vertical (9:16)","21 / 9":"Ultra-wide (21:9)"},k={placeholder:"Placeholder, image",placeholderVideo:"Placeholder, video",image:"Real image",youtube:"YouTube embed",vimeo:"Vimeo embed",file:"Looping video file"},A=["placeholder","placeholderVideo","image","youtube","vimeo","file"],D={media:{...d("Placeholder, image"),name:"Media",...i({labels:k,options:A}),description:"Which source fills the frame. The two video routes are both here: a provider embed, which shows the video's still with a play control and opens the provider's player over the page, and a video file the site hosts itself, which loops and carries the design system's own pause and mute pair."},ratio:{...d("Portrait (3:4)"),name:"Aspect ratio",...i({labels:c,options:p}),description:"The frame's shape. Applies to every media type, the placeholder included."},ratioMobile:{name:"Mobile aspect ratio",...i({labels:{"":"Same as desktop",...c},options:["",...p]}),description:"A distinct crop under 767px. Only takes effect once a real image is paired with its own second asset, never a CSS recrop of the same file. The Real image option supplies both authored files, so picking a shape here is what the second one is for.",table:{category:"Options",type:{summary:"Choice"},defaultValue:{summary:"Same as desktop"}},if:{arg:"media",eq:"image"}},controlsSide:{...d("Right"),name:"Controls side",...i({labels:{right:"Right",left:"Left"},options:["left","right"]}),description:"Which bottom corner the pause and mute pair is worn in. Right is the default and the corner every frame drew before this axis existed. Move it when the asset puts its subject under the controls, or when something beside the frame needs that corner: the **Hero** sets copy on one side of its band, and its own version of this control is what keeps the pair off the words. Both sides sit the same distance up from the bottom edge, so the cluster moves across and never up or down.",if:{arg:"media",eq:"file"}},caption:{name:"Caption",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"None"}},description:"Optional small text below the frame. Nothing asks for it on the still-image path."},src:{control:!1,table:{disable:!0}},srcMobile:{control:!1,table:{disable:!0}},alt:{control:!1,table:{disable:!0}},video:{control:!1,table:{disable:!0}},videoFile:{control:!1,table:{disable:!0}},poster:{control:!1,table:{disable:!0}},kind:{control:!1,table:{disable:!0}},tone:{control:!1,table:{disable:!0}},fit:{control:!1,table:{disable:!0}},radius:{control:!1,table:{disable:!0}},decorative:{control:!1,table:{disable:!0}}},P={media:"placeholder",ratio:"3 / 4",ratioMobile:"",controlsSide:"right",caption:""},h={src:"/revlon-home/cat-best-sellers.jpg",srcMobile:"/revlon-home/bs-super-lustrous.jpg",alt:"Lookalike catalog banner, fixture asset for documentation, not client photography"},a={youtube:{provider:"youtube",id:"3t_eg_PaWUI",title:"All New Roller Refills In One Cute and Convenient Case! | Revlon"},vimeo:{provider:"vimeo",id:"1084537",title:"Big Buck Bunny (Vimeo, illustrative embed)"}},E="/revlon-home/hero.mp4",S="/revlon-home/hero-poster.jpg",g={placeholder:{},placeholderVideo:{kind:"video"},image:{src:h.src,srcMobile:h.srcMobile,alt:h.alt},youtube:{video:a.youtube},vimeo:{video:a.vimeo},file:{videoFile:E,poster:S}};function I({media:t,ratio:n,ratioMobile:l,controlsSide:w,caption:T}){return e.jsx("div",{style:{maxWidth:360},children:e.jsx(o,{ratio:n,ratioMobile:t==="image"&&l||void 0,caption:T||void 0,controlsSide:w,...g[t]})})}const Y={title:"Atoms/MediaFrame",component:o,tags:["autodocs"],parameters:{docs:{page:x("Media frame"),toc:{headingSelector:"h2"},description:{component:"One frame for a photograph or a video, and video reaches it two sanctioned ways: an embed from a video provider, or a video file the site hosts itself. It owns the box, the aspect ratio and the corner radius, plus a small set of overlay controls on the video path. It never owns the page's layout, its own pixel width, or the provider's player skin."}},componentDoc:{usage:`
## When to use

- ✅ **A still photograph anywhere on a page**: a gallery, a card, a megamenu panel, a campaign
  block.
- ✅ **A video from a provider, YouTube or Vimeo.** Both providers are required. At rest the frame
  shows the video's still, cropped to the frame's shape, with one play control in the middle;
  pressing it opens the provider's own player over the page, on the same surface as the PDP
  gallery. The design system adds no controls to the player itself. This is the route for a video
  a reader starts, a video carrying voice, and a longer video.
- ✅ **A video file the site hosts itself.** This is the route for a short video, under about two
  minutes, a video that plays on its own, a video with no sound or speech, and a looping video. It
  gets four controls and only four: pause, play, mute and unmute.
- ✅ **A slot with no asset yet.** With neither a photograph nor a video wired, the frame draws its
  own decorative placeholder.

- ❌ **Text over media.** That is **Hero**, which is built to carry a headline over a band.
- ❌ **An image beside a block of copy.** That is **Text + Image**, never a frame
  hand-assembled next to something else.
- ❌ **A clickable image.** The still-image path carries no handler and is not a link.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Media plate**, the frame itself | always | Fluid width and a corner radius from a token. It fills whatever column it is given, never a pixel width of its own |
| **One of:** a real image, a video embed, a hosted video file, or the decorative placeholder | exactly one per call site | Two ratified authoring paths for a still image, and two sanctioned routes for video. Never more than one source at once |
| **Caption** | optional | Ships in the code, but the still-image criteria names no caption anywhere, so it is **unratified for that path** |
| **Transport shell**: play, pause, mute, unmute | the hosted-file route, always, and no other route ever | Drawn by the design system on the one route where it owns the video element. An embed never gets it: its player is the provider's, with the provider's own controls, and a second pair would be two sets of controls on one picture. Four controls is the whole set the hosted route is allowed, so nothing may be added to it. It is **worn on the picture at rest**, never revealed by a pointer, and it sits in a bottom corner, **left or right by choice**, as close to the frame edge as the spacing scale allows |
| **Play control** | the provider-embed route, always | One button centred on the embed's still. It opens the provider's player over the page, and the still under it is decoration |
| **Player overlay** | the provider-embed route, once play is pressed | The PDP gallery's own surface: a plane in the page colour, the provider player at the video's own shape, and one close control below it |
| **Provider chrome**: the scrubber, captions button, settings, fullscreen | owned by YouTube or Vimeo, inside the player overlay | Never rebuilt here, and never built for the hosted route either |
| **Poster still** | optional, both video routes | The frame a hosted video shows before it plays, and the still an embed shows at rest. Without one, an embed shows the provider's own thumbnail |

- **Tokens own the box.** Shape, radius and the frame's own layout.
- **The caller owns the media and the words.** The photograph, the video source, the caption and
  the alt description. Nothing about the frame is CMS-editable styling.

**One piece of code answers to two separately ratified sets of requirements**, one for showing
still images and one for playing videos.

**The placeholder is a fallback, not a leftover.** Two template pages, the blog article hero and
the campaign film slot, never wire a source at all, so they always show it. Three other call sites
reach for it only when their own data has nothing yet. It draws exactly one muted icon,
centered: the image mark, or the play mark when the frame's intent is video, and nothing
else. None of the optional chrome below renders over a placeholder, only over real media.

### Variants

**Image: by width only.** Full, half, third or quarter of the column it sits in. Width is a
**parent-layout responsibility, not a prop**: the frame fills whatever column it is given. There is
no other axis, and the Figma set behind this path has exactly one property, which is the three
breakpoints rather than a set of variants.

**Video: by route, by provider, and by size.** There are **two sanctioned routes**, and which one a
video takes is decided by the video rather than by taste:

| The video is | Route | Controls |
|---|---|---|
| Started by the reader, carries voice, or runs long | A provider embed, YouTube or Vimeo | A play control on the still, then the provider's own player, and only that, over the page. Vimeo's can be styled through Vimeo; YouTube's is left unbranded |
| Short (under about two minutes), plays on its own, has no sound or speech, or loops | A video file the site hosts itself | Pause and play, mute and unmute. Nothing else |

YouTube and Vimeo are **both required** on the first route. Size is full width, half width, one
column or two columns on either route, expressed by the container rather than by a variant.

**Either route can sit inline wherever media is supported.** The hosted route can also run as a
background behind a band, and that application belongs to **Hero**, which draws its own full-bleed
element with the same four controls.

**An embed's still is cropped to the frame, and its player never is.** At rest the still fills the
frame's shape like any picture in it, so a square frame and a widescreen video sit together
without a letterboxed player. The player always opens at the video's own shape. On the image side,
a genuinely different mobile crop is a **second real asset**, never a recrop of the first one.
`,guidance:`
## Behaviors

### States

- **The still image has no states at all.** "No interactive functionality" is the criteria's own
  wording. This is the shortest state list in the library, and it is worth saying plainly: a
  reader scanning for a hover row will otherwise assume one was missed.
- **The video plate has six**: not yet playing (the poster), playing, paused, muted, unmuted and
  looping.
- **An embed rests as its still and a play control.** It is the state a provider video block is
  in most of the time, because most visitors never press play. The still is the authored poster,
  or the provider's own thumbnail when none is authored. Figma does not draw this state yet.
- **A hosted file starts playing, muted, and stops for reduced motion.** It does not autoplay at
  all for a reader who has asked for reduced motion, and it pauses if that preference is turned on
  while it is already running.
- **Sound starts off on the hosted file.** Its autoplay is muted on purpose. The criteria records it
  as best practice, never as an oversight. An embed plays with sound, because it only ever plays
  once somebody has pressed play.
- **Focus.** Every control the design system owns keeps a visible focus ring. Whether that ring
  reads against arbitrary video content, on every brand, is still a check somebody has to make
  by eye.

### Interactions

- **Clicking the transport toggles play/pause and mute/unmute**, and both clicks reach the real
  video element. **Who owns the controls is settled per route, and so is who draws them**: on an
  embed the design system draws one play control on the still and the player's controls are the
  provider's, and on a hosted file they are these four and only these four. There is no way to
  ask for the design system's pair over an embed, which is what keeps a frame from ever showing
  two sets of controls.
- **Pressing play on an embed opens the player over the page**, on the PDP gallery's own surface.
  Focus moves to the close control and stays inside; Escape or the close control ends it, the
  video stops, and focus returns to the play control. With reduced motion the surface appears and
  leaves without a fade.
- **The transport is worn at rest, in a bottom corner.** It is always on the picture, on every
  pointer type, with nothing to hover and nothing to dismiss, because stopping a looping video is
  required rather than optional. It sits the smallest inset of the spacing scale in from the
  bottom edge and from the chosen side, right by default or left, the same at every ratio and in
  every consumer.
- **Looping plays end to end with no visible flash at the wrap point.**
- **YouTube and Vimeo render their own native controls** inside the player overlay, for the
  scrubber, captions, settings and fullscreen. Fullscreen is delegated, never rebuilt: the frame grants the permission and lets the
  provider take it from there.
- **The still image has no interactions at all.** It is not clickable and carries no handler.

## Rules

- ✅ **Do** author two real assets when the desktop and mobile crops genuinely differ.
- ❌ **Don't** re-crop one file in CSS and call it the mobile asset. The ratified path is two real
  source files, not one file cropped twice.
- ✅ **Do** let the frame crop an embed's still to its own shape. The player opens at the video's.
- ❌ **Don't** crop the player itself to reach a second shape.

- ✅ **Do** let the container decide the width, for both the image and the video.
- ❌ **Don't** fix a pixel width on the frame.

- ❌ **Don't** rebuild the provider's player skin. The scrubber, captions, settings and fullscreen
  stay YouTube's or Vimeo's, and so do pause and sound: the one design system control on an embed
  is the play control on its still.
- ✅ **Do** send a video down the route its own content picks: a provider embed when a reader
  starts it, when it carries voice, or when it runs long; a hosted file when it is short, starts
  itself, is silent, or loops.
- ❌ **Don't** grow the hosted route past four controls. Pause, play, mute and unmute is the whole
  sanctioned set, so a scrubber or a fullscreen button there is out of bounds even though no
  provider owns that plate.
- ❌ **Don't** put a talking head, a tutorial or anything a viewer would need captions for on the
  hosted route. That route is scoped to video with no sound or speech, and it offers no captions
  track to put them on.
- ✅ **Do** autoplay the hosted file muted, never with sound.
- ✅ **Do** confirm an autoplaying loop can be paused, and that a reduced-motion preference is
  honoured. Moving content that cannot be stopped is the one thing this path can get badly wrong.

- ❌ **Don't** make the still image clickable. That is a different component.
- ❌ **Don't** overlay text on video or on imagery. Reach for **Hero** instead.
- ✅ **Do** place an image next to text with **Text + Image**, never a frame hand-assembled
  beside something else.

- ❌ **Don't** ship an image without deciding its alt. A decorative photograph needs a deliberate
  empty alt; a meaningful one needs a real description. The component no longer guesses.
- ✅ **Do** author the video's captions on the provider's side. That is the biggest accessibility
  obligation this path carries and the one the component cannot enforce for you.

### Content rules

- ✅ **Do** link the external image specification, which is where dimensions, format and file
  weight are documented. The criteria pushes those numbers out of this page on purpose.
- ❌ **Don't** invent a caption character limit. Neither set of requirements defines one.

## Open items

| Question | Owner |
|---|---|
| Does the crop still read at quarter-column width? No Figma reference exists for any fractional width, because every drawn variant is full width | Design |
| The embed's resting state, its still with a play control, is not drawn in Figma yet, and neither is the player overlay it opens | Design |
| Only a Vimeo-styled skin was ever drawn. A YouTube-styled one is missing, though both providers are required | Design |
| Full-bleed or contained at mobile? Figma declares 16px padding and the image renders edge to edge | Design |
| Vertical whitespace around a standalone image. Figma reads three different values across its three breakpoints | Design |
| Where does the external image-specification document live? Link it | Design / Content |
`,spec:{elements:[{name:"Media plate",requirement:"required",condition:"Fills the column it is given. Radius and ratio come from tokens."},{name:"Source: image, video embed, hosted video file, or placeholder",requirement:"required",condition:"Exactly one per call site. Video has two sanctioned routes and this slot answers both. With none wired, the frame draws its placeholder."},{name:"Caption",requirement:"optional",condition:"A figcaption under the plate."},{name:"Transport, play and mute",requirement:"conditional",condition:"The hosted-file route only, where it drives the real element, and the set is closed at four: pause, play, mute, unmute. A provider embed draws none of them, because its player brings its own."},{name:"Play control",requirement:"conditional",condition:"Provider embed only. Centred on the still, and it opens the player over the page."},{name:"Poster still",requirement:"optional",condition:"Both video routes. Without one, an embed shows the provider's own thumbnail at rest."},{name:"Provider chrome",requirement:"conditional",condition:"Inside the player overlay of a video embed, and owned by the provider."}],authorability:[{name:"Image",rule:"Authored. Two real files when the desktop and mobile crops differ, never one re-cropped."},{name:"Video",rule:"An embed's still is cropped to the frame; its player keeps the video's own shape."},{name:"Video route",rule:"Authored. Embed for voice or length, hosted file for short, silent, looping video."},{name:"Alt text",rule:"Authored on every image. An empty alt is a decision, and there is no default."},{name:"Caption",rule:"Optional and authored. No character limit is set."},{name:"Video captions",rule:"Authored on the provider side. The frame can neither add nor enforce them."},{name:"Width",rule:"Fixed by the container. The frame never takes a pixel width of its own."},{name:"Player skin",rule:"Fixed by the provider on an embed. A hosted file gets four controls and nothing more."},{name:"Text over media",rule:"Not available here. Text over an image or a video is the Hero component."}],variants:[{label:"Image",props:{media:"image"}},{label:"Video embed",props:{media:"youtube"}},{label:"Hosted video file",props:{media:"file"}},{label:"Placeholder",props:{media:"placeholder"}}],states:[{key:"plain",name:"Plain"},{key:"caption",name:"Caption",props:{caption:!0}},{key:"transportRight",name:"Controls right",props:{controlsSide:"right"}},{key:"transportLeft",name:"Controls left",props:{controlsSide:"left"}}],render:V,interactions:["The still image answers nothing. It carries no handler, and it is not a link.","The transport toggles play and pause, and mute and unmute, on the hosted video file it is mounted beside.","An embed rests as its still and one play control; play opens the provider player over the page.","The player overlay keeps focus inside. Escape or close stops the video and returns focus to play.","The transport is worn at rest, on every pointer type. It is not revealed by hovering and it cannot be sent away.","It sits in a bottom corner of the plate, the same distance from the edge at every ratio and in every consumer.","Which corner is a choice, left or right. Both sides sit the same distance up, so the cluster only ever moves across.","The controls are the smallest button on the ladder, sized so the two enlarged click areas meet without overlapping.","The provider owns the scrubber, captions, settings and fullscreen inside the player overlay.","A mobile source, when one is authored, is swapped by the frame itself below 767px.","Autoplay starts muted, and a loop plays end to end with no flash at the wrap point.","The still image is never a link. A clickable picture is a different component."],accessibility:[{label:"Alt text",text:"Every image carries an alt written at the call site. There is no default, so a missing description shows up as one."},{label:"Embed title",text:"Every embed carries a title, so the frame is never announced as an untitled region."},{label:"Control names",text:"The transport controls are real buttons with names: play, pause, mute and unmute."},{label:"Play control",text:"An embed's play control is a named button, Play video plus the video's title. The still under it is decorative."},{label:"Player overlay",text:"The player opens in a dialog named by the video's title. Focus moves in, stays in, and returns to play on close."},{label:"Keyboard",text:"Every control over the plate is reachable with Tab and activates on Enter and Space. Nothing has to be revealed first."},{label:"Stopping the motion",text:"A looping video can always be paused and muted. Both controls are on the picture at rest, on every pointer type, with nothing to reveal first."},{label:"Click area",text:"Both controls carry the library's 40px pointer target, whatever their visible box measures, and the two targets never overlap."},{label:"Focus over media",text:"The focus ring stays visible over arbitrary photography and video, on every brand. The transport takes the ring for the ground it is painted on."},{label:"Video captions",text:"Every published video carries captions on the provider side, since the frame cannot supply them."},{label:"Autoplay",text:"An autoplaying loop starts muted and can be stopped, and it does not play for a reader who has asked to reduce motion."}],openItems:[{question:"Does the crop still read at quarter-column width? Every drawn variant is full width.",owner:"Design"},{question:"The embed's resting still, its play control and the player overlay are not drawn in Figma yet.",owner:"Design"},{question:"Only a Vimeo-styled skin was ever drawn, and both providers are required.",owner:"Design"},{question:"Full-bleed or contained at mobile? The drawing declares 16px padding and the image runs edge to edge.",owner:"Design"},{question:"How much vertical whitespace surrounds a standalone image? Three breakpoints read three values.",owner:"Design"},{question:"Where are the image dimension, format and file weight requirements documented?",owner:"Design / Content"}]}}}};function V({media:t,caption:n,controlsSide:l}){return e.jsx("div",{style:{width:200},children:e.jsx(o,{ratio:"16 / 9",caption:n?"Caption, one line.":void 0,controlsSide:l,...g[t]})})}const r={name:"Default",args:P,argTypes:D,render:t=>e.jsx(I,{...t}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"The frame in its default shape: the decorative placeholder two template pages always show, and the fallback three others reach for before their own data supplies a real image or video: one muted icon, centered, and nothing else. **Media** reaches every route this component ships. A real photograph, which carries both authored crops, so a **Mobile aspect ratio** swaps to the second file below 767px. A YouTube or a Vimeo embed, which rests as the video's still with one play control and opens the provider's own player over the page. A hosted video file, which loops and draws the pause and mute pair itself. And the placeholder in either of its two marks, the picture or the film."}}}};function M(){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24,alignItems:"flex-start"},children:[e.jsx("div",{style:{width:"100%",maxWidth:280},children:e.jsx(o,{ratio:"1 / 1",video:a.youtube,caption:"Square frame (1:1), YouTube"})}),e.jsx("div",{style:{width:"100%",maxWidth:480},children:e.jsx(o,{ratio:"16 / 9",video:a.youtube,caption:"Widescreen frame (16:9), YouTube"})}),e.jsx("div",{style:{width:"100%",maxWidth:240},children:e.jsx(o,{ratio:"3 / 4",video:a.vimeo,caption:"Portrait frame (3:4), Vimeo"})})]})}const s={name:"Embedded video",render:()=>e.jsx(M,{}),parameters:{controls:{disable:!0},docs:{description:{story:"A provider embed at rest is the video's still, cropped to the frame's own shape like any picture in it, with one play control in the middle and no provider controls. The still is the authored poster when there is one, and otherwise the provider's own thumbnail. **Play** opens the provider's player over the page, on the same surface the PDP gallery opens on: the video plays at its own shape with sound and the provider's controls, the close control sits below it, Escape closes it too, and closing stops the video and puts focus back on Play."}}}};var m,u,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Default',
  args: DEFAULT_ARGS,
  argTypes: ARG_TYPES,
  render: args => <ConfigurableMediaFrame {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The frame in its default shape: the decorative placeholder two template pages always ' + 'show, and the fallback three others reach for before their own data supplies a real ' + 'image or video: one muted icon, centered, and nothing else. **Media** reaches every ' + 'route this component ships. A real photograph, which carries both authored crops, so ' + 'a **Mobile aspect ratio** swaps to the second file below 767px. A YouTube or a Vimeo ' + 'embed, which rests as the video\\'s still with one play control and opens the ' + 'provider\\'s own player over the page. A hosted video file, which loops and draws the pause and mute pair ' + 'itself. And the placeholder in either of its two marks, the picture or the film.'
      }
    }
  }
}`,...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,f,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Embedded video',
  render: () => <EmbedShapes />,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'A provider embed at rest is the video\\'s still, cropped to the frame\\'s own shape like ' + 'any picture in it, with one play control in the middle and no provider controls. The ' + 'still is the authored poster when there is one, and otherwise the provider\\'s own ' + 'thumbnail. **Play** opens the provider\\'s player over the page, on the same surface ' + 'the PDP gallery opens on: the video plays at its own shape with sound and the ' + 'provider\\'s controls, the close control sits below it, Escape closes it too, and ' + 'closing stops the video and puts focus back on Play.'
      }
    }
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const B=["Playground","EmbeddedVideo"];export{s as EmbeddedVideo,r as Playground,B as __namedExportsOrder,Y as default};
