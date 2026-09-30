import{j as s}from"./iframe-6dx3hp_4.js";import{L as r}from"./Loading-DyIAIYoE.js";import{a as u}from"./annotationPage-eYx--AWZ.js";import{c as l,D as h,a as d}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";const m={size:{...d("Base"),name:"Size",...h({labels:{small:"Small, inside a line of text",base:"Base, beside a control",large:"Large, alone in a block"},options:["small","base","large"]}),description:"How big the ring is. Each of the three is the size of something else in the library, not a number picked for this component."},placement:{...d("Inline"),name:"Placement",...h({labels:{inline:"Inline, in the text flow",block:"Block, centred in its area"},options:["inline","block"]}),description:"Whether the spinner sits in a line of text or centres itself in the area it is holding open. This is a separate question from size: a small block spinner and a large inline one are both legitimate."},showLabel:{...l("On"),name:"Visible label",description:"Show the label on screen. Turned off, the same words are still spoken by a screen reader. They are never dropped, only hidden."},decorative:{...l("Off"),name:"Silent",description:"Hide the spinner from screen readers entirely. Only for a spinner inside something that already announces its own busy state. A second announcement there is noise."},label:{name:"Label text",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"None, the caller always supplies it"}},description:"What the indicator says. There is no default: under reduced motion the ring does not move, so this is the only thing left saying something is happening."},inline:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}}},b={size:"base",placement:"inline",showLabel:!0,decorative:!1,label:"Loading your bag"};function w({size:e,placement:n,showLabel:o,decorative:t,label:a}){return s.jsx(r,{size:e,inline:n==="inline",showLabel:o,decorative:t,label:a})}const A={title:"Atoms/Loading",component:r,tags:["autodocs"],parameters:{docs:{page:u("Loading"),toc:{headingSelector:"h2, h3"},description:{component:"The busy indicator: a ring that turns while a part of the screen waits for something, with a label saying what is being waited for. It draws in the ink around it and holds no state of its own."}},componentDoc:{usage:`
## When to use

- ✅ **A region that is waiting for its own content.** A results panel, a drawer body, an embedded
  retailer widget. The large ring holds the area open while what belongs there arrives.
- ✅ **A list that is being re-filtered.** The base ring beside the result count, for the brief wait
  between picking a filter and the list catching up.
- ✅ **Suggestions that have not arrived yet.** The small ring inside the suggestions panel, so an
  empty panel and a panel still fetching do not look the same.
- ✅ **A wait inside a sentence.** The small ring sits in the text flow without pushing the line
  open.
- ✅ **A busy call to action.** The base ring, in the icon's own slot, is what a button draws
  while it is busy. Held back for a short beat first, so a click that resolves quickly never
  shows one at all.

- ❌ **One per card in a grid.** A card's image box already reserves its shape, so a ring on each of
  twelve cards is noise. What that case wants is a placeholder in the shape of the thing arriving,
  and this library does not have one.
- ❌ **Holding a whole page open.** Nothing in this library waits at page level: every wait belongs
  to a region, and the region is what should say so.
- ❌ **A video that is buffering.** The player is the provider's, and so is its busy chrome.
- ❌ **A message about something that just happened.** A spinner reports a wait, never an
  outcome.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Ring** | required | **One** side drawn, three sides open. The asymmetry is what makes the rotation visible at all: a ring that looks the same on all four sides spinning looks exactly like a ring standing still |
| **Label** | required **unless the spinner is marked silent** | Either shown on screen or spoken only. It is never dropped: under reduced motion it is the only thing left saying something is happening |

- **Tokens own the geometry.** The three diameters, the stroke, and the pitch between ring and
  label.
- **Nothing owns the colour.** The ring draws in the ink of whatever it sits in, the same way every
  icon in this library does. Put it in dark text and it is dark; put it on an inverse band and it
  turns with the text around it. There is no colour to set and no brand variant to pick.
- **The caller owns the words.** There is no default label, deliberately.

### Variants

**Three sizes**, and each one is the size of something else in the library rather than a number
chosen here:

- **Small, 16px.** Sits inside a line of body text without pushing the line open.
- **Base, 24px.** The same size as a button's glyph, so a spinner standing in for an icon is the
  size of the icon it replaced.
- **Large, 40px.** The block-level ring: big enough to be the subject of the area it is holding
  open. That number coincides with the library's own pointer-target floor, which dropped from
  44px to 40px library-wide, so size alone no longer keeps a large spinner and the
  smallest real control apart. What still does is everything else: a spinner is not a control at
  all, with no hover, no focus, no pressed and no hit-slop, so there is nothing about it a pointer
  could ever press.

These three are the spinner's own scale, not the icon scale. Two of them happen to land on an icon
size because they are borrowing that meaning; the third sits above the whole icon scale, which is
the clearest sign that a ring holding an area open is not a glyph.

**Placement is a separate question from size.** Inline puts the ring in the text flow. Block centres
it in its own area and stacks the label underneath. A small block spinner and a large inline one
are both legitimate, which is why these are two controls and not one list.

The reference this was studied against (Kiwi.com's Orbit *Loading*) ships **five** named types:
page, box, inline, button and search. Those five braid the same two questions together. Splitting
them covers all five with two things a designer can reason about.
`,guidance:`
## Behaviors

### States

- **A spinner is not a control**, so there is no hover, no focus, no pressed and no disabled. It has
  exactly two conditions, and the second one is the important one.
- **Spinning.** The resting state, and the only one most people will ever see. The ring turns once
  per second, the slowest step on the motion scale, the one named for something that continues in
  the background rather than responding to an action.
- **Reduced motion: the ring stops.** Anyone who has asked their operating system to reduce motion
  gets **no rotation at all**. That is not this component's decision: the design system stops every
  animation in the library for those users, and a spinner is not allowed to be the exception.

The ring closes into a complete circle rather than freezing mid-turn, because a stalled arc reads as
a broken graphic and a closed ring reads as a deliberate mark. Only the shape changes: the ink is
the same before and after, so stopping never looks like a different component. The **label** then
becomes the thing that says something is happening, which is why it has no default and why leaving
it out is a real omission rather than a style choice.

### Interactions

- **There are none.** Nothing here responds to a click, a hover or a key.
- **The screen decides when it appears and when it goes away.** The spinner holds no state of its
  own.
- **It announces politely.** The indicator speaks when it appears and never interrupts what someone
  is in the middle of reading. A message about an outcome announces assertively instead, and a
  spinner is not that.
- **Silent is for one case only.** Mark a spinner silent when the thing around it is already
  announcing the same wait, which in this library means a live result count that updates as a
  filter is applied. Two voices reading the same fact is worse than one.

## Rules

- ✅ **Do** give every spinner a label, visible or spoken.
- ❌ **Don't** ship a bare ring and assume the motion carries the meaning. For a reduced-motion
  user, it does not.
- ❌ **Don't** mark a spinner silent just to avoid writing a label. Silent means *something else is
  already announcing this*, and that is the only case for it.

- ✅ **Do** let the ring take the ink of whatever it sits in.
- ❌ **Don't** give it a colour of its own. A fixed brand colour is a promise about a background it
  cannot see, and on two of the twenty one brands that promise was already false.

- ✅ **Do** let the screen decide when the spinner mounts and unmounts.
- ✅ **Do** let **Button** be the one host that composes this atom directly. It passes the base
  ring and marks it silent, because the button's own busy announcement already covers it.
- ❌ **Don't** reach for the large ring to hold a whole page open. Every wait in this library belongs
  to a region, and the region is what should carry the indicator.
- ❌ **Don't** use a ring where a placeholder is what the screen actually needs. A grid of cards, a
  gallery, a table: those want the shape of what is arriving, and that is a different component
  nobody has asked for yet.

### Content rules

- ✅ **Do** say what is loading, not that something is loading. "Loading your bag" beats "Loading".
- ❌ **Don't** invent a character limit. Nothing supplies one.
- ❌ **Don't** treat "Loading" as settled copy. It is translated copy with no agreed line yet.

## Open items

| Question | Owner |
|---|---|
| Grids, galleries and tables want a placeholder in the shape of what is arriving, not a ring. Is a placeholder component in scope, or do those surfaces stay as they are? | Design |
| The word "Loading" in every supported locale | Content |

**Nothing here is ratified.** No client brief describes a busy indicator as a component. The two
briefs that come closest both say a list "may show a brief loading state while the filter is
applied", which is a wait, not a drawing. Everything above is assembled from rules that already
exist elsewhere in the system, and it stays a proposal until it is approved.

**The Button adoption is the one exception.** Whether a busy call to action draws this ring at all
is settled, in Button's own page, and this page's Rules section reflects it.
`,spec:{elements:[{name:"Root, a status region",requirement:"required",condition:"Announces politely. Silent swaps that for aria-hidden."},{name:"Ring",requirement:"required",condition:"One side drawn, three open, which is what makes the turn visible."},{name:"Label",requirement:"conditional",condition:"Unless the spinner is silent. Shown or spoken, never dropped."}],authorability:[{name:"Label",rule:"Authored. Every spinner needs one, shown or spoken, and there is no default."},{name:"Wording",rule:'Say what is loading, not that something is: "Loading your bag" beats "Loading".'},{name:"Label length",rule:"No character limit is set."},{name:"Silent",rule:"Turn it on only where another region already announces the same wait."},{name:"Size and placement",rule:"Authored per host: a rung, and inline or block. They are two questions."},{name:"Colour",rule:"Fixed. The ring takes the ink around it and never asserts a colour of its own."},{name:"Motion",rule:"Fixed by the system. The turn and the reduced motion stop are not authorable."},{name:"Mounting",rule:"The screen decides when the spinner appears and goes. It holds no state."}],variants:[{label:"Small (16px)",props:{size:"small",placement:"inline"}},{label:"Base (24px)",props:{size:"base",placement:"inline"}},{label:"Large (40px)",props:{size:"large",placement:"inline"}}],states:[{key:"bare",name:"Ring only",props:{placement:"inline",showLabel:!1}},{key:"inline-labelled",name:"Inline + label",props:{placement:"inline",showLabel:!0}},{key:"block-labelled",name:"Block + label",props:{placement:"block",showLabel:!0}},{key:"silent",name:"Silent",props:{placement:"inline",showLabel:!1,decorative:!0}}],render:y,interactions:["Nothing here answers a click, a hover or a key. A spinner is not a control.","The screen decides when it mounts and when it goes. The spinner holds no state of its own.","It announces politely when it appears, so it never cuts across what somebody is reading.","Under reduced motion the ring closes into a full circle and stops. The label carries the fact.","Silent hides it from assistive technology, for a region that already announces the same wait.","The ring draws in the ink around it, so it re-colours with the text it sits in.","A busy button draws this ring in its own icon seat after a short delay, and its label stays put.","A ring is not a placeholder. A grid, a gallery or a table needs the shape of what is arriving."],accessibility:[{label:"Reduced motion",text:"For a reader who has asked to reduce motion the ring closes into a full circle and stops turning."},{label:"Accessible name",text:"Every spinner carries a label, shown or spoken. There is no default, so an unnamed spinner is a defect."},{label:"Announcement",text:"The indicator is a polite status region, never assertive, so it never cuts across what somebody is reading."},{label:"No double voice",text:"A silent spinner is hidden from assistive technology, and only where another region announces the same wait."},{label:"Not a control",text:"The spinner takes no tab stop and no focus, because nothing about it responds to a pointer or a key."},{label:"Contrast",text:"The ring takes the ink around it, so its surface has to hold 3:1 for that ink. The label draws full text ink and holds 4.5:1 on every brand."},{label:"Mount and unmount",text:"The region reads correctly as the spinner appears and as it goes, without leaving a stale announcement behind."}],openItems:[{question:"Is a placeholder component in scope for grids, galleries and tables, which want a shape rather than a ring?",owner:"Design"},{question:'What is the word "Loading" in every supported locale? No copy is agreed today.',owner:"Content"}]}}}},i={name:"Default",args:b,argTypes:m,render:e=>s.jsx(w,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"The indicator with every option a designer can change. **Size** and **Placement** are two separate questions on purpose, so try a small block spinner and a large inline one. Turn **Visible label** off and the words are still spoken, just not drawn. Turn **Silent** on and the whole thing disappears from assistive technology, which is only right when something else is already announcing the wait. The **Brand** toolbar moves the label, not the ring: the ring is the ink around it on every brand."}}}};function y({size:e,placement:n,showLabel:o,decorative:t}){const a=s.jsx(r,{size:e,inline:n==="inline",showLabel:o,decorative:t,label:t?void 0:"Loading"});return n==="block"?s.jsx("div",{style:{width:160},children:a}):a}var c,p,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Default',
  args: LOADING_DEFAULT_ARGS,
  argTypes: LOADING_ARG_TYPES,
  render: args => <ConfigurableLoading {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The indicator with every option a designer can change. **Size** and **Placement** are ' + 'two separate questions on purpose, so try a small block spinner and a large inline ' + 'one. Turn **Visible label** off and the words are still spoken, just not drawn. Turn ' + '**Silent** on and the whole thing disappears from assistive technology, which is only ' + 'right when something else is already announcing the wait. The **Brand** toolbar moves ' + 'the label, not the ring: the ring is the ink around it on every brand.'
      }
    }
  }
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const L=["Playground"];export{i as Playground,L as __namedExportsOrder,A as default};
