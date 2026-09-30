import{j as o,S as k,g as T}from"./iframe-6dx3hp_4.js";import{O as r}from"./OptionChip-BlxUvyIz.js";import{a as S}from"./annotationPage-eYx--AWZ.js";import{D as i,a as l}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";const x={control:{...l("One of a group"),name:"How it is chosen",...i({labels:{radio:"One of a group",checkbox:"Several at once",button:"On its own"},options:["radio","checkbox","button"]}),description:"Whether picking this one un-picks the others, whether several can be on at once, or whether it stands alone as a toggle. It changes what a screen reader announces and how the keyboard moves between them."},state:{...l("Default"),name:"State",...i({labels:{default:"Default",selected:"Chosen",soldOut:"Sold out",unavailable:"Unavailable here"},options:["default","selected","soldOut","unavailable"]}),description:"Which state to draw. **Sold out** and **Unavailable here** are two different facts and stay two, see Behaviors below. Hover and focus are pointer states, so hover or Tab to the preview to see them."},label:{name:"Label",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Duo pack"}},description:"The option's name, exactly as the commerce system reports it."},layout:{control:!1,table:{disable:!0}},selected:{control:!1,table:{disable:!0}},soldOut:{control:!1,table:{disable:!0}},unavailable:{control:!1,table:{disable:!0}},note:{control:!1,table:{disable:!0}},description:{control:!1,table:{disable:!0}},price:{control:!1,table:{disable:!0}},badge:{control:!1,table:{disable:!0}},media:{control:!1,table:{disable:!0}},name:{control:!1,table:{disable:!0}},value:{control:!1,table:{disable:!0}},id:{control:!1,table:{disable:!0}},ariaLabel:{control:!1,table:{disable:!0}},ariaDescribedBy:{control:!1,table:{disable:!0}},onSelect:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}}},D={control:"radio",state:"default",label:"Duo pack"};function A({control:a,state:e,label:t}){return o.jsx("div",{children:o.jsx(r,{control:a,layout:"text",name:"playground-option",value:t,label:t,selected:e==="selected",soldOut:e==="soldOut",unavailable:e==="unavailable",onSelect:()=>{},ariaLabel:e==="soldOut"?`${t} (Sold out)`:e==="unavailable"?`${t} (Unavailable)`:void 0})})}const P={title:"Atoms/Option chip",component:r,tags:["autodocs"],parameters:{docs:{page:S("Option chip"),toc:{headingSelector:"h2"},description:{component:"One choice a shopper can pick, whatever the choice is about: a shade to filter by, a size, a pack, a format, a delivery frequency. It draws the choice and the state it is in, and the screen around it owns what picking one does, so filtering is one job it can be given rather than what it is."}},componentDoc:{usage:`
## When to use

- ✅ **A choice made of words**: a pack size, a format, a delivery frequency.
- ✅ **Inside a group**, where picking one un-picks the others, or where several can be on at once.
- ✅ **On its own**, as a standalone toggle on a screen with no group to belong to.

- ❌ **A shade.** A shade is a colour, read off the chip itself, so that is **Swatch**'s job.
  Modelling a shade as an option is how "30-Piece" ends up drawn as a coloured circle, and the
  build blocks it.
- ❌ **A whole set of options**, with its heading, its layout and its selected value. That is
  **Option selector**, which places these.
- ❌ **An action**, like *Add to bag*. An option is a choice, not a call to action, so that is
  **Button**.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Root**, the pill | required | A real form control underneath: a radio, a tick box, or a toggle button |
| **Label** | required | The option's name, exactly as the commerce system reports it. The only content the pill carries |

- **Tokens own the look.** Inset, height, edge, radius, ring and type: the pill reads the
  **small** text style, whole.
- **The caller owns the word.** The label, and nothing else.
- **The screen owns the meaning.** Whether "Duo pack" costs more, whether it is in stock in your
  country, whether picking it changes the photograph: none of that is decided here.

### Variants

**Three ways to be chosen.** The difference is behaviour, not looks:

- **One of a group.** Picking this one un-picks the others.
- **Several at once.** Each is independent, and several can be on.
- **On its own.** A standalone toggle, for a screen with no group to belong to.

**One shape.** The option chip is the pill with the label inside, nothing else.

**The pill sets its word in the small text style**, as a step on the
brand's own scale rather than a fixed number of pixels: 14px on Revlon. The step was decided on
the shade filter above the product page's swatches and applied at the atom, so every pill moved
with it: that filter, and the option selector's size chips.

**The pill is one line, always.** The label sits on one line and the pill gets wider rather than
taller. A blocked pill is no exception.

**A long name makes a wide pill.** No ellipsis, deliberately: a truncated name reads as a decision
somebody made, while an over-wide pill reads as content that does not fit, which is what it is. A
group of pills wraps as whole pills, so the line breaks between them, never inside one.

**The ring is the only mark of selection.** The pill does not draw a tick box or a dot of its own,
so the choice is read off the ring around the option and nothing else competes with it.
`,guidance:`
## Behaviors

### States

- **Default.** The resting option, waiting to be picked.
- **Chosen.** Drawn as a **ring**, not a fill, so the option's own text stays on the same ground
  and its contrast never moves when it is picked.
- **Sold out.** A real option, temporarily out of stock. It could be back tomorrow. Drawn as a
  **strikeout** through the label.
- **Unavailable here.** An option that cannot be chosen in this context at all: your country, this
  channel, this bundle's rules. Drawn as a **dimming** of the whole card.
- **Hover.** The edge changes.
- **Focus.** The standard ring.

**Sold out and unavailable are two facts and stay two.** They read differently to a shopper and
they are answered differently, "wait" against "this is not for you". Both stop the option being
picked, both are greyed, and both stay reachable by keyboard, marked unavailable rather than
removed, so a screen reader still meets every option in the group.

**Neither of them prints a word.** A blocked option carries no state word beside its label. The
treatment carries the state alone, so the strikeout and the dimming
are not the non-colour half of a pair, they are the whole thing. With no word on the
screen to read out, the group puts the state into the option's announced **name**: "Duo pack, Sold
out". That is how somebody who cannot see the strikeout is told, and it is the same call the tab
strip makes for a disabled tab.

**An unavailable option dims once.** The whole card carries the dimming, so nothing inside it is
dimmed a second time and the state never lands on a value no token declares.

### Interactions

- **Picking is reported, never performed.** The component tells the screen which option was chosen.
  What that does to the price, the photograph or the button is the screen's business.
- **A blocked option does nothing when clicked**, and says why when it takes focus.
- **The keyboard behaves as the platform does.** These are real form controls, so a group of them
  gets arrow-key movement and "3 of 3" announcements for free, none of it re-implemented.

## Rules

- ✅ **Do** let the screen own what a choice means. This pill draws a choice and never
  interprets one.
- ❌ **Don't** collapse sold out and unavailable into one state. Half the time it tells a shopper
  the wrong thing.
- ❌ **Don't** drop the strikeout or the dimming for a cleaner look. Each is now the only cue its
  state has.
- ❌ **Don't** remove a blocked option from the group. Marked unavailable keeps its place in the
  keyboard order and keeps its reason spoken.
- ✅ **Do** carry the state in the announced name of a blocked option, "Duo pack, Sold out". With
  the word gone from the screen, that announcement is the only channel left.
- ❌ **Don't** put a checkbox or a radio inside the pill to mark the choice. The pill is already the
  control, so that is two controls for one choice: two tab stops and two announcements.

### Content rules

- ✅ **Do** write the label at the call site, exactly as the commerce system reports it.
- ✅ **Do** translate the spoken "Sold out" and "Unavailable". They are the group's defaults and
  they still exist, but only to be announced.
- ❌ **Don't** blank them. Since the word left the screen, blanking silences the state instead of
  hiding it.
- ❌ **Don't** print the state as a word beside the label.

## Open items

| Question | Owner |
|---|---|
| **Nothing is ratified.** This family has no client-approved brief at all: the criteria describe exactly one option axis on the product page and draw it as swatches | Client |
| The two state words ("Sold out", "Unavailable") are the component's defaults rather than agreed copy. They are only ever spoken, never printed, so this is a question about what a screen reader says rather than what a shopper reads | Content |
| **Can the treatment alone be told apart, on every brand?** With the word gone, sold out is a strikeout and unavailable is a dimming, and nothing else. Spot-checked on five brands: on **Christina Aguilera** the muted ink and the normal ink are the same colour, and on **EA Corporate** they are one step apart, so on those two the strikeout carries sold out entirely on its own. Nothing is broken, but whether it is enough is a design call, and the other sixteen brands are unmeasured | Design |
| **A pill whose label outgrows the screen.** One line means the pill grows, and no ellipsis was added. Measured on Revlon, a 43-character name fits inside a 360px phone. The question survives for a longer name than any in the library, and the answer (shorten the copy, let the group scroll, or ration the width) is still a decision, not a default | Design |
| **One disabled state, or two blocked facts?** The UX note lists a single disabled state. The chip carries two, sold out and unavailable here, because they read differently to a shopper and are answered differently. Both refuse selection and both stay reachable by keyboard. Whether the two answer the note, or the note should be answered with one, is a design call | Design |
| **Where a regional override of a label lives.** The note asks that regional administrators be able to override or translate a label. The chip takes whatever the call site hands it and owns no copy at all, so nothing here blocks it and nothing here provides it: the mechanism belongs to the content system around the library | Design |
`,spec:{elements:[{name:"Root, a real form control",requirement:"required",condition:"A radio, a tick box or a toggle button under the drawing."},{name:"Label",requirement:"required",condition:"The only content the pill carries."}],authorability:[{name:"Label",rule:"The author writes it: the option name exactly as the commerce system reports it."},{name:"State words",rule:"Sold out and Unavailable are spoken, never printed beside the label."},{name:"Blocked options",rule:"Mark them and keep them in the group. Removing one hides it from the keyboard."},{name:"Selection mark",rule:"Fixed: the ring is the mark. Never put a checkbox or a radio inside the pill."},{name:"Everything else",rule:"Fixed: the shape, the type step and the state cues all come from tokens."},{name:"Height",rule:"Fixed at one line. A long name makes a wide pill, never a tall one."}],variants:[{label:"Default",props:{}},{label:"Chosen",props:{selected:!0}},{label:"Sold out",props:{soldOut:!0,ariaLabel:"Duo pack (Sold out)"}},{label:"Unavailable here",props:{unavailable:!0,ariaLabel:"Duo pack (Unavailable)"}}],states:[{key:"rest",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"}],render:g,interactions:["Picking is reported, never performed. What the choice changes is the screen business.","One choice, whatever it is about. A filter, a size or a pack are host readings of the same chip, not three components.","A blocked option does nothing when clicked, and says why when it takes focus.","The keyboard behaves as the platform does: real controls, so a group gets arrow keys free.","Hover changes the edge. Focus draws the ring the whole library shares.","A blocked card dims once, on the card itself, so nothing inside it dims a second time.","A shade is never modelled as an option. A shade is a colour and belongs to the swatch."],accessibility:[{label:"Real controls",text:'Each option is a native form control, so a group gets arrow-key movement and its "3 of 3" count for free.'},{label:"Blocked states",text:"Sold out and unavailable stay two separate facts, neither leaves the accessibility tree, and neither rests on colour alone."},{label:"Blocked name",text:'A blocked option carries its state in the announced name, such as "Duo pack, Sold out", since no word is printed.'},{label:"Focus",text:"The native control stays focusable, and its focus ring survives the chosen ring, which is drawn inset so nothing reflows."},{label:"Pointer target",text:"An option holds at least 44px of height, which clears the library floor and the 24px WCAG 2.5.8 one."},{label:"Contrast, blocked treatment",text:"The strikeout and the dim stay tellable apart from a normal option, on every brand, with no word on screen."},{label:"Reduced motion",text:"The card transition is dropped for a reader who has asked their system to reduce motion."},{label:"Touch",text:"No hover-only affordance in this family is the sole way to reach anything on a touch screen."}],openItems:[{question:"Nothing here is agreed. This family has no approved brief of its own.",owner:"Product"},{question:"The two state words are the component defaults rather than agreed copy, and now only spoken.",owner:"Content"},{question:"Can the blocked treatments be told apart on every brand, with no word left on screen?",owner:"Design"},{question:"A pill whose label outgrows the screen: shorten the copy, let the group scroll, or ration the width?",owner:"Design"},{question:"The note lists one disabled state and the chip carries two blocked facts, sold out and unavailable here. Do the two answer it, or should they be named to it?",owner:"Design"},{question:"Regional administrators overriding or translating a label: the chip takes whatever the call site hands it, so where does that override live?",owner:"Design"}]}}}},n={name:"Default",args:D,argTypes:x,render:a=>o.jsx(A,{...a}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"One option, with everything a designer can change. Switch **State** between **Sold out** and **Unavailable here**. They look similar and they are not the same fact, which is the single most important thing on this page. Change the **Brand** toolbar and the same pill re-themes across all 21 brands."}}}},O=[{key:"default",label:"Default",props:{}},{key:"selected",label:"Chosen",props:{selected:!0},dimension:"condition"},{key:"soldOut",label:"Sold out",props:{soldOut:!0,ariaLabel:"Duo pack (Sold out)"},dimension:"condition"},{key:"unavailable",label:"Unavailable here",props:{unavailable:!0,ariaLabel:"Duo pack (Unavailable)"},dimension:"condition"}],h=[{key:"rest",label:"Default"},{key:"hover",label:"Hover",pseudo:"hover"},{key:"focus",label:"Focus",pseudo:"focusVisible"}];let d=0;function g({selected:a,soldOut:e,unavailable:t,note:y,ariaLabel:f,control:v="radio"}){return d+=1,o.jsx(r,{control:v,name:`matrix-${d}`,value:"duo",label:"Duo pack",selected:!!a,soldOut:!!e,unavailable:!!t,note:y,ariaLabel:f,onSelect:()=>{}})}const s={name:"State matrix",parameters:{themeShellPadding:!1,pseudo:T(h,{pseudoTarget:"input, button"}),docs:{description:{story:`Every state against every way of being chosen. **Hover** and **Focus** are frozen with storybook-addon-pseudo-states so both sit still for a design review. Read the **Sold out** and **Unavailable here** rows next to each other: they are two facts, and this is where you decide whether a shopper could actually tell them apart. Each cell gets its own group name, so no two radios in the grid fight over one selection. This is a QA tool, not themed product UI, which is why its own chrome stays neutral regardless of brand.

**Those two rows carry no word**, so what the grid shows is the treatment on its own: a struck-through label, and a card at reduced opacity. Switch the **Brand** toolbar and read the two rows against **Default**. On a brand whose muted ink is close to its normal ink, the strikeout is doing all the work by itself, and that is worth seeing rather than assuming. This grid is the place to judge whether the treatment alone is enough on your brand.

**The reason did not disappear with the word, it moved into the name.** Tab onto a pill in the **Sold out** row with a screen reader and it says "Duo pack, Sold out"; the **Unavailable here** row says "Duo pack, Unavailable". That announcement is the only way to learn why without seeing it, so it has to be right in both rows.

Every pill in this grid is **one line tall**. The grid is wider than the page, so scroll it sideways rather than reading it squeezed: the grid never compresses a cell to fit, and neither does the component inside it.`}}},render:()=>o.jsx(k,{rows:O,columns:h,render:g})};var c,u,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Default',
  args: OPTION_CARD_DEFAULT_ARGS,
  argTypes: OPTION_CARD_ARG_TYPES,
  render: args => <ConfigurableOptionChip {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'One option, with everything a designer can change. Switch **State** between **Sold ' + 'out** and **Unavailable here**. They look similar and they are not the same fact, ' + 'which is the single most important thing on this page. Change the **Brand** toolbar ' + 'and the same pill re-themes across all 21 brands.'
      }
    }
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,m,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'State matrix',
  parameters: {
    themeShellPadding: false,
    pseudo: getStateMatrixPseudoParameters(STATE_MATRIX_COLUMNS, {
      pseudoTarget: 'input, button'
    }),
    docs: {
      description: {
        story: 'Every state against every way of being chosen. **Hover** and **Focus** are frozen with ' + 'storybook-addon-pseudo-states so both sit still for a design review. Read the **Sold ' + 'out** and **Unavailable here** rows next to each other: they are two facts, and this ' + 'is where you decide whether a shopper could actually tell them apart. Each cell gets ' + 'its own group name, so no two radios in the grid fight over one selection. This is a ' + 'QA tool, not themed product UI, which is why its own chrome stays neutral regardless ' + 'of brand.\\n\\n' + '**Those two rows carry no word**, so what the grid shows is the treatment on its ' + 'own: a struck-through label, and a card at reduced opacity. Switch the **Brand** toolbar ' + 'and read the two rows against **Default**. On a brand whose muted ink is close to ' + 'its normal ink, the strikeout is doing all the work by itself, and that is worth ' + 'seeing rather than assuming. This grid is the place to judge whether the treatment ' + 'alone is enough on your brand.\\n\\n' + '**The reason did not disappear with the word, it moved into the name.** Tab onto a ' + 'pill in the **Sold out** row with a screen reader and it says "Duo pack, Sold out"; ' + 'the **Unavailable here** row says "Duo pack, Unavailable". That announcement is the ' + 'only way to learn why without seeing it, so it has to be right in both rows.\\n\\n' + 'Every pill in this grid is **one line tall**. The grid is wider than the page, so ' + 'scroll it sideways rather than reading it squeezed: the grid never compresses a cell ' + 'to fit, and neither does the component inside it.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={STATE_MATRIX_ROWS} columns={STATE_MATRIX_COLUMNS} render={renderStateMatrixCell} />
}`,...(w=(m=s.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};const I=["Playground","StateMatrix"];export{n as Playground,s as StateMatrix,I as __namedExportsOrder,P as default};
