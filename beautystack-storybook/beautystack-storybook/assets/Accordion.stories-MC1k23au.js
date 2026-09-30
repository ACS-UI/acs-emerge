import{j as e}from"./iframe-6dx3hp_4.js";import{A as d}from"./Accordion-ZGzQ5byR.js";import{a as u}from"./annotationPage-eYx--AWZ.js";import{P as l}from"./Placeholder-Ed4iQRc7.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";const c={items:{control:!1,table:{disable:!0}}},m=[{title:"Description",content:"ColorStay Full Cover Foundation delivers 24-hour full-coverage wear that stays true to colour all day. The lightweight, buildable formula blends seamlessly into skin for a flawless, natural finish that resists transfer and humidity."},{title:"How to Use",content:"Apply directly to skin or with a foundation brush or sponge. Start at the centre of the face and blend outward. Build coverage as desired. For best results, set with ColorStay Setting Spray."},{title:"Ingredients",content:"Cyclopentasiloxane, Water, Dimethicone, Isododecane, Titanium Dioxide, Butylene Glycol, Disteardimonium Hectorite, Isopropyl Myristate, Propylene Carbonate, Methicone, Triethoxycaprylylsilane, Dimethicone Crosspolymer."}],g=[{title:"Shade Match Guide",content:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{maxWidth:240,marginBlockEnd:"var(--size-200)"},children:e.jsx(l,{ratio:"1 / 1"})}),e.jsx("p",{style:{margin:0},children:"Hold the shade strip against your jawline in natural light. If you fall between two shades, the lighter one blends more forgivingly as it oxidises over the day."})]})},{title:"Patch Testing",content:"Apply a small amount to the inside of your wrist and wait 24 hours before applying to your face, especially if you have sensitive skin."}],w=320,y=[{title:"Description",content:"Buildable, full-coverage wear that stays true to colour all day."},{title:"How to Use",content:"Blend outward from the centre of the face, then set."}],f=[{title:"Shade Match Guide",content:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{maxWidth:120,marginBlockEnd:"var(--size-200)"},children:e.jsx(l,{ratio:"1 / 1"})}),e.jsx("p",{style:{margin:0},children:"Hold the strip against your jawline in natural light."})]})},{title:"Patch Testing",content:"Test on the inside of your wrist 24 hours ahead."}];function b({withImage:p}){return e.jsx("div",{style:{width:w,textAlign:"start"},children:e.jsx(d,{items:p?f:y})})}const A={title:"Molecules/Accordion",component:d,tags:["autodocs"],argTypes:{headingLevel:{control:!1,table:{disable:!0}}},parameters:{docs:{toc:{headingSelector:"h2"},description:{component:"A stacked list of rows a shopper opens and closes, each one holding a block of content until it is asked for. Every row is a single button carrying both the headline and the expand or collapse icon."}},componentDoc:{playground:!1,usage:`
## When to use

- ✅ **Long content a shopper reads by choice**, like a product page's Description, How to use
  and Ingredients.
- ✅ **An FAQ page**, one question per row.
- ✅ **A page that would otherwise feel long** because everything is open at once.

- ❌ **Anything a shopper needs to finish a task.** If it is part of the decision, leave it on
  the page.
- ❌ **Switching between views of the same thing.** An accordion lets every row be open at
  once, and it is not a way to show one panel at a time.
- ❌ **A second design-system component inside a panel**, like a product card. Rich text and
  images only while in MVP.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Row headline** | required | The visible label, or the question |
| **Expand or collapse icon** | required | Rotates to show the row is open |
| **Panel content** | required | Text, images, or both, revealed only once the row is open |

- **The headline and the icon are one control, not two.** A single button wraps both, so there
  is one tab stop per row and either half opens or closes it.
- **Tokens own the row chrome.** Borders, padding, gap, label colour and type. The same
  accordion re-themes across every brand without a value being restated.
- **The caller owns the words.** The headline text and the panel content.

### Variants

**One accordion, and no variants axis.** The ratified criteria opens no variants section, so
there is nothing to pick between.

Figma draws two sub-variants under one component name, and they disagree. The "FAQ" one never
shows a closed row and shrinks its type across breakpoints; the legacy "Default" one matches
the shipped code, identical at every size. Which of them the design system should ship, or
whether both should, is undecided. It is carried in Open items rather than drawn here as a
second story, because a story would present an open question as a settled one.
`,guidance:`
## Behaviors

### States

- **Closed.** The resting row. The headline and the icon are all that shows.
- **Open.** The panel is revealed and the chevron has rotated 180°. The rotation is what a
  sighted shopper reads; the state itself is carried in the markup, so it is never the glyph
  alone.
- **First row open on load.** The first row in the list opens on its own, before anyone clicks
  anything. The component supplies this, not the page author, row by row.
- **Hover.** The headline shifts to the accent colour. The chevron does not: it holds the primary
  text colour through every state, which is the open question below rather than a decision.
- **Hover on touch.** There is one, and that is not a design. The rule is not fenced behind a
  pointer check, so a tap can leave a row wearing its hover colour on a phone or a tablet until
  something else is touched.
- **Pressed.** The headline steps one further along the same accent ladder, so a real press reads
  as darker than a hover rather than identical to it.
- **Focus.** A visible focus ring, kept through keyboard navigation.

### Interactions

- **Click the headline or the icon.** Either half opens the row. Clicking the open row again
  closes it.
- **Opening a row leaves every other row alone.** Any number can be open at once, so a shopper
  can read all three sections side by side.
- **The panel reveals with the shared fast motion.** It animates a layout track rather than
  guessing a pixel height, and drops the transition entirely for anyone who asked for reduced
  motion.

**Multi-open is a decision, and the client's own requirement still says the opposite.** That
requirement reads "the original accordion closes when the new one opens". It is superseded for
this component, and the disagreement is carried in Open items for client alignment, not quietly
resolved.

**The reveal motion is shipped, and no requirement asks for it either way.** It is carried in
Open items as a confirmation owed, not presented as agreed spec.

## Rules

- ✅ **Do** keep the whole clickable area, headline and icon together, inside the one button.
- ❌ **Don't** hide content someone needs in order to finish a task. If it is part of the
  decision, it stays on the page.
- ❌ **Don't** build a two-column panel. It was asked about directly and turned down: it adds
  complexity and is harder to manage.
- ❌ **Don't** nest other design-system components inside a panel while in MVP. A plain image
  is fine, a product card is not. The panel accepts any content technically, and that is not
  the same as it being sanctioned.
- ❌ **Don't** fork the component by breakpoint. The requirement is "no functionality
  differences", and the only media query in the component is the reduced-motion preference,
  which changes the animation and not the function.
- ❌ **Don't** let the chevron be the only thing saying a row is open.

### Content rules

- ✅ **Do** write the headline as a short label or as a full question. Both shapes are drawn.
- ✅ **Do** write every word at the call site. The component supplies none of them.
- ❌ **Don't** invent a character limit. Limits for the headline and for the panel body are
  both owed by design.

## Open items

| Question | Owner |
|---|---|
| Figma's two sub-variants (FAQ vs legacy Default) are visually different components under one name, and the criteria ratifies neither. Ship one accordion, or two? | Design |
| The headline's typographic role: shipped code applies the uppercase, tracked label treatment; Figma's FAQ rows are sentence-case question text. One has to win | Design |
| Chevron colour: shipped as the primary text colour to match Figma, changed from a muted grey. Needs a design confirm, not a further code change | Design |
| Character limits for the headline and the panel body | Design |
| Is the shipped fast panel reveal the intended motion, or should the panel have no animation at all? Reduced motion is handled either way | Design / DS team |
`,spec:{elements:[{name:"Row",requirement:"required",condition:"One per item in the list."},{name:"Trigger",requirement:"required",condition:"Headline and chevron in one button, so a row has one tab stop."},{name:"Headline",requirement:"required"},{name:"Chevron",requirement:"required",condition:"Decorative and aria-hidden. It rotates when the row opens."},{name:"Panel",requirement:"required",condition:"Named by its trigger. Inert and hidden while closed."},{name:"Panel content",requirement:"required",condition:"Rich text and images, in a single column."}],authorability:[{name:"Rows",rule:"The author sets how many rows there are and the order they sit in."},{name:"Headline",rule:"The author writes it, as a short label or as a full question."},{name:"Panel content",rule:"Rich text and images only. No other library component goes in a panel."},{name:"Panel layout",rule:"Fixed to one column. A two column panel is not available."},{name:"Row chrome",rule:"Fixed: the borders, spacing, label colour, type scale and the chevron."},{name:"First row open",rule:"Fixed. The author cannot choose which row is open on load."}],variants:[{label:"Text panel",props:{withImage:!1}},{label:"Image and text",props:{withImage:!0}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"active",name:"Active",pseudo:"active"},{key:"focus",name:"Focus",pseudo:"focus-visible"}],render:b,interactions:["Clicking the headline or the chevron toggles the row. A second click closes it.","Opening a row never closes another. Any number of rows can be open at once.","Row one is open on load. The component seeds that, not the page author.","Enter and Space toggle the focused row, and focus stays on the trigger.","The panel animates a layout track, and drops the transition under reduced motion.","Each instance namespaces its own ids, so three accordions on one page never collide.","The component draws the same at every breakpoint. Only reduced motion changes it."],accessibility:[{label:"Keyboard",text:"Each trigger is a native button, so Enter and Space toggle the row and focus stays on the trigger."},{label:"Screen reader",text:"The trigger carries aria-expanded and aria-controls, and the panel is a region named by that trigger."},{label:"Closed panel",text:"A closed panel is inert, aria-hidden and visibility hidden, so nothing inside it is focusable or read out."},{label:"Focus",text:"The trigger shows the shared focus ring whenever it is reached by keyboard, and the ring is never suppressed."},{label:"Icon",text:"The chevron is aria-hidden, so the open state is never carried by the drawing alone."},{label:"Motion",text:"The reveal drops its transition under prefers-reduced-motion, and the row still opens and closes."},{label:"Unique ids",text:"Trigger and panel ids are unique per instance, so several accordions on one page never collide."},{label:"Target size",text:"Every trigger is at least 48px tall and spans the full row width."}],openItems:[{question:"The design source draws two accordions under one name. Ship one, or ship both?",owner:"Design"},{question:"The headline ships uppercase and tracked, the design source draws sentence case. One has to win.",owner:"Design"},{question:"The chevron ships in the primary text ink. Design owes a confirmation, not a code change.",owner:"Design"},{question:"Character limits for the headline and for the panel body.",owner:"Design"},{question:"Is the fast panel reveal the intended motion, or should the panel open with no animation?",owner:"Design / DS team"}]}}}},t={argTypes:c,args:{items:m},parameters:{docs:{page:u("Accordion"),description:{story:"Three rows of real product page content, with the first row open on load. Open the second or third row and the first stays open: every row toggles on its own."}}}},n={name:"With image",argTypes:c,args:{items:g},parameters:{docs:{description:{story:"Panel content mixing an image with rich text, stacked in a single column. Images are allowed and a two column layout is not. This is content variety inside the one accordion, not a second variant."}}}};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  argTypes: ACCORDION_ARG_TYPES,
  args: {
    items: PDP_ITEMS
  },
  parameters: {
    docs: {
      page: annotationPage('Accordion'),
      description: {
        story: 'Three rows of real product page content, with the first row open on load. Open the ' + 'second or third row and the first stays open: every row toggles on its own.'
      }
    }
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var r,s,h;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'With image',
  argTypes: ACCORDION_ARG_TYPES,
  args: {
    items: WITH_IMAGE_ITEMS
  },
  parameters: {
    docs: {
      description: {
        story: 'Panel content mixing an image with rich text, stacked in a single column. Images are ' + 'allowed and a two column layout is not. This is content variety inside the one ' + 'accordion, not a second variant.'
      }
    }
  }
}`,...(h=(s=n.parameters)==null?void 0:s.docs)==null?void 0:h.source}}};const q=["Default","WithImage"];export{t as Default,n as WithImage,q as __namedExportsOrder,A as default};
