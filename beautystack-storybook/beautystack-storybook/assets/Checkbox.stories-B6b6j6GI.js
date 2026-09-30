import{j as e,S as g,g as y}from"./iframe-6dx3hp_4.js";import{C as a}from"./Checkbox-C5uneDTR.js";import{C as w}from"./CheckboxGroup-Hr1vSafZ.js";import{L as i}from"./Link-yk_PIpvX.js";import{a as P}from"./annotationPage-eYx--AWZ.js";import{c as R,a as f,D as M}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./ControlIndicator-DEJX7FyE.js";import"./Icon-BihOhSWB.js";import"./FieldRequirement-Dn5H0DsY.js";import"./newTabMark-TI50-QeA.js";const G={state:{...f("Default"),name:"State",...M({labels:{default:"Default",checked:"Checked",indeterminate:"Mixed",disabled:"Disabled",disabledChecked:"Disabled + checked",disabledIndeterminate:"Disabled + mixed"},options:["default","checked","indeterminate","disabled","disabledChecked","disabledIndeterminate"]}),description:"Which state to draw. Focus is not in this list: it only appears on keyboard focus, so Tab to the control to see the ring move onto the drawn box. **Mixed** is the partly-on picture a screen sets from outside; clicking it makes the box checked, the way every browser treats a mixed checkbox."},label:{name:"Label",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Subscribe to emails"}},description:"The caller’s copy. The checkbox never supplies its own label."},labelHidden:{...f("Off"),name:"Hide the label",control:"boolean",description:"Clip the label out of sight while it stays the control’s accessible name. Only for places where a visible name already exists nearby, like a table column header or a group legend."},defaultChecked:{control:!1,table:{disable:!0}},checked:{control:!1,table:{disable:!0}},indeterminate:{control:!1,table:{disable:!0}},disabled:{control:!1,table:{disable:!0}},id:{control:!1,table:{disable:!0}},name:{control:!1,table:{disable:!0}},onChange:{control:!1,table:{disable:!0}},inverse:{...R("Off"),name:"Inverse",description:"Turn this on when the control lands on the dark band. The box takes the ground itself with a white edge, the tick sits in a paper-coloured box, and the label sentence takes the ground’s full ink. The preview drops onto a dark panel while it is on, because drawing an inverse control on the page colour would document it as broken."},required:{control:!1,table:{disable:!0}},density:{control:!1,table:{disable:!0}}},H={state:"default",label:"Subscribe to emails",labelHidden:!1,inverse:!1},_={background:"var(--color-bg-inverse)",padding:"var(--size-300)",borderRadius:"var(--radius-card, 0)"};function O({state:t,label:b,labelHidden:r,inverse:n}){const o=e.jsx("div",{style:{maxWidth:320},children:e.jsx(a,{label:b,labelHidden:r,inverse:n,defaultChecked:t==="checked"||t==="disabledChecked",indeterminate:t==="indeterminate"||t==="disabledIndeterminate",disabled:t==="disabled"||t==="disabledChecked"||t==="disabledIndeterminate"},`${t}-${r}-${n}`)});return n?e.jsx("div",{style:_,children:o}):o}function u({defaultChecked:t,indeterminate:b,disabled:r,error:n,inverse:o=!1}){const m=e.jsx(a,{label:"Subscribe to emails",defaultChecked:t,indeterminate:b,disabled:r,inverse:o,error:n?"Tick this box to accept the terms before you continue.":void 0});return o?e.jsx("div",{style:_,children:m}):m}const z=t=>u({...t,inverse:!0}),s={margin:0,marginBottom:"var(--size-200)",fontSize:"var(--font-size-body)",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase",color:"var(--color-text-primary)",fontFamily:"var(--font-family-body)"},Z={title:"Atoms/Checkbox",component:a,tags:["autodocs"],parameters:{docs:{page:P("Checkbox"),toc:{headingSelector:"h2"},description:{component:"A labelled box a shopper can tick, for choices where any number can be on at once. The box you see is a drawing: the real control is a native checkbox clipped out of sight behind it, and that is what takes focus and holds the value."}},componentDoc:{usage:`
## When to use

- ✅ **Any number of the options can be on at once**, like a set of filter facets.
- ✅ **One yes or no a shopper opts into**, like the consent line in the newsletter form.
- ✅ **A facet inside Filters & Sort.** Filter Group's facet options are this component.
- ✅ **A name that is already visible right next to the control**, like a table's row header.
  Turn **Hide the label** on and the name stays for screen readers while the pixels go.

- ❌ **Picking one thing un-picks another.** A checkbox promises independent choices.
- ❌ **A choice a shopper makes from a picture, a shade or a price.** Those are **Option chip**
  and **Swatch**, which show what is being chosen.
- ❌ **One value out of a long list.** **Select field** collapses the list into a field.
- ❌ **A control with no name anywhere on the screen.** Hiding the label hides a name that
  already exists; it does not stand in for one nobody wrote.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Row**, the whole \`<label>\` | required | The hit area. Clicking anywhere in it, not only the box, toggles the control |
| **The real checkbox**, a native input clipped out of sight | required | Takes the focus, holds the value, stays in the tab order. Clipped, never \`display: none\` |
| **The box**, drawn over the input | required | Decoration. Never announced on its own |
| **The mark**, a checkmark or a dash | required, visible only when the box is on | A tick when the choice is on, a dash when it is partly on. Appears with a full on or off swap, never a fade |
| **The label text** | **always required**, the caller writes it | The only source of the control's name. Hiding it clips the pixels, never the name. May carry inline links |

- **Tokens own the look.** Shape, size, colour and the focus ring. The same control re-themes
  across all 21 brands without a value being restated here.
- **The caller owns the words.** The label, and nothing else. There is no third category.
- **The box you see is not the control.** This is the most misread thing about this component.
  The clipped input beside it is what focus lands on, what a form reads a value from, and what a
  screen reader announces.
- **The box and its mark are a shared drawing.** One file draws this box, the radio's
  circle and the option chip's indicator, so the three cannot drift into looking like three
  design systems. Everything that is a statement about *the control*, hover, press, focus and
  disabled, lives here, because the shared drawing has no tab stop of its own.
- **The box leads the row, everywhere.** It comes first and the label follows it, in forms, in
  consent lines and in Filter Group's facet rows alike. There is no option to move it: one
  arrangement, one drawing, and a screen that wants the words first is asking for a different
  control rather than for this one turned around.

### Variants

**None.** The approved docs that place this control name one checkbox and no variant axis.

**Hiding the label is not a variant.** The control is identical either way. It says where the
label's *pixels* are allowed to live, and it never touches the name.

**The side the box sits on is not a variant, and it is not an option either.** The box leads and
the label follows, on every screen that places this control.

**Mixed is not a variant either.** It is a state, so it lives with the other states below and in
the **All states** grid.

### Its twin

**Checkbox and Radio are one family, and the shape is the promise.** A box means *any number of
these*, a circle means *exactly one*. They share one drawing, so the ground, the edge, the mark
colour, the transition and the focus ring are the same declarations. Only the corner and the mark
differ.
`,guidance:`
## Behaviors

### States

- **Default.** Unchecked and enabled. Nothing is inferred: it becomes checked, disabled or
  focused only because someone acted on it or the screen that placed it said so.
- **Checked.** The box swaps its own ground through a token and the checkmark appears. A real
  state change, not just a mark turning up.
- **Hover.** The box's border colour swaps. Ratified for this control and the radio together, so
  the two hover identically by decision rather than by copying.
- **Hover on touch.** It is deliberately not fenced behind a pointer check. The change has no
  affordance behind it, so a hover that sticks after a tap shows a slightly darker edge and
  nothing else.
- **Focus.** The ring moves onto the drawn box, because the real input is clipped to a single
  pixel and its own ring would never be seen. Whether that ring is perceivable on every brand's
  page ground is still a check a person has to make by eye.
- **Disabled.** The whole control dims through the shared disabled-opacity token, applied once,
  at the row.
- **Mixed.** The partly-on picture: the box takes the same fill the checked box takes and draws a
  dash instead of a tick. Use it on a box that stands for a set where some of the things under it
  are on and some are not, like a "select all" line above a list of filters. A screen sets it from
  outside; a shopper never reaches it by clicking, and clicking a mixed box makes it checked, the
  way every browser treats one. A screen reader announces the control as mixed rather than as on
  or off. Disabled and mixed dim together, through the same single application of the token.
- **Hidden label.** The label can be clipped out of sight while it stays the
  control's name, using the recipe the text field already had. Never \`display: none\`, which
  would take the name away with the pixels.
- **Error.** The screen supplies a sentence and the control draws the state: the box takes the
  danger edge at double thickness, a message appears below the row with the library's danger
  glyph, and a screen reader announces it the moment it arrives. The same treatment the text
  field and the select draw, so a form with all three does not report a failure three ways.
- **Required.** A required checkbox draws an asterisk beside its label, and the form it sits in
  says once, before its first input, what the asterisk means. The mark is drawn for the eye only:
  a screen reader reads the requirement off the control itself, so nobody hears "star" after the
  label. Every required field is marked, including on a form where all of them are, so a reader
  never has to notice an absence and work out what it meant.

### Interactions

- **Clicking the label toggles the control**, not only the box. The whole row is the hit area.
- **Space toggles it when focused, and Tab reaches it once.** The input is hidden but still in
  the layout, so it keeps exactly one tab stop.
- **A link inside the label opens the link and leaves the box alone.** The rest of the row still
  toggles. Each link is its own stop for the keyboard, so a shopper tabs to the checkbox, then to
  the terms, then to the privacy policy, and the checkbox is still named by the whole sentence.
- **An error message points at it.** The control's id is stable across re-renders, and the
  message the component draws is tied to it by that id, marked as an alert, and flagged on the
  input as invalid. Nothing about the failure is carried by colour on its own.
- **The row is the target, and it is a row rather than a button.** It holds the 24px floor and is
  deliberately not padded out to the larger target the buttons and the chips use. A checkbox is a
  line of a form: growing every row would change the rhythm of every form and every filter list to
  buy a target that is already the whole sentence beside the box.

## Rules

- ✅ **Do** let the caller write the label. The component never supplies one.
- ❌ **Don't** lean on copy near the control to explain what is being agreed to. The label is the
  name a screen reader reads out.

- ✅ **Do** pass an id when a form needs to point an error message at this control.
- ✅ **Do** write the error as an instruction. "Tick this box to accept the terms before you
  continue" tells someone what to do; "Invalid field" tells them they failed.
- ✅ **Do** treat Filter Group's facet checkboxes as this component. They are it, so styling
  them means styling this atom.
- ✅ **Do** keep a checkbox for independent choices. When picking one thing un-picks another this
  is the wrong control, and the shape is how a shopper tells the two apart.

- ❌ **Don't** rebuild the control out of a styled box and a click handler. The native input is
  what makes it focusable, announceable and readable by a form for free.
- ❌ **Don't** express a state by fading the element. The checkmark's own reveal is a full on or
  off swap, which is what keeps it clear of this rule.
- ❌ **Don't** dim a disabled checkbox twice, once on the row and again on the box. Two
  applications composite into a value no token declares, and the box renders visibly lighter than
  its own label. Apply the disabled treatment at one level only.
- ❌ **Don't** hide the label to save space. It is for places where the name is already visible
  next to the control, not for places where nobody wrote one.

### Content rules

- ✅ **Do** keep the label one short, readable sentence.
- ✅ **Do** put long consent copy in a paragraph beside the checkbox, the way the newsletter form
  puts its legal links, rather than inside the label.
- ✅ **Do** put a link inside the label when the words being agreed to are the link, like the terms
  and the privacy policy in a consent line. Clicking the link opens it and leaves the box alone.
- ✅ **Do** expect a long label to wrap. The box is set not to shrink, so three lines of real
  consent copy do not collapse it. Whether that still holds at 200% zoom and 320px wide, per
  brand, has not been checked yet.
- ❌ **Don't** put a link inside the label when missing it by a few pixels would matter. A finger
  that lands beside the link ticks the box instead of opening the page, so anything a shopper has
  to be able to reach reliably goes on a support line under the row, not in the sentence.
- ❌ **Don't** invent a character limit. Every approved brief that places this control leaves the
  number to design.

## Open items

| Question | Owner |
|---|---|
| The store locator's product-line filter and the reviews media filter both use this control with no approved brief behind them. Fold them into the spec, or leave them as they are? | DS team |
`,spec:{elements:[{name:"Row, the label",requirement:"required",condition:"The whole hit area: a click anywhere in it toggles the control."},{name:"Native input",requirement:"required",condition:"Clipped out of sight, and never display none."},{name:"Box",requirement:"required",condition:"The drawing over the input, shared with the radio."},{name:"Checkmark",requirement:"conditional",condition:"While the control is checked."},{name:"Dash",requirement:"conditional",condition:"While the control is mixed. It replaces the checkmark in the same box."},{name:"Label text",requirement:"required"},{name:"Links in the label",requirement:"optional",condition:"Inline, composed with the Link atom. A click on one navigates and leaves the box alone."},{name:"Hidden label",requirement:"conditional",condition:"While Hide the label is on: the pixels are clipped and the name stays."}],authorability:[{name:"Label",rule:"Authored at the call site. The component never supplies one."},{name:"Label length",rule:"No character limit. Keep it one short sentence and put long consent copy beside it."},{name:"Links in the label",rule:"Allowed inline, with the Link atom. Clicking one navigates and does not toggle the box."},{name:"Control side",rule:"Not authorable. The box leads and the label follows it, on every screen that places this control."},{name:"Hiding the label",rule:"Only where a visible name already sits next to the control, never to save space."},{name:"Checked",rule:"Set from outside, by the form or by the shopper. The control assumes nothing."},{name:"Mixed",rule:"Set from outside only, by a screen that owns a set. Clicking a mixed box checks it."},{name:"Id",rule:"Pass one when a form points an error message here. Otherwise it is generated."},{name:"Error",rule:"The screen writes the sentence. Write it as an instruction, not a verdict."},{name:"Required",rule:"Set by the form. It draws the asterisk; the form draws the line that explains it."},{name:"Box and mark",rule:"Fixed by tokens: the size, the corner, the mark and the dim are not authorable."},{name:"Variants",rule:"There are none. One checkbox, and a circle means Radio instead."}],variants:[{label:"Unchecked",props:{defaultChecked:!1}},{label:"Checked",props:{defaultChecked:!0}},{label:"Mixed",props:{indeterminate:!0}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"},{key:"error",name:"Error",props:{error:!0}},{key:"disabled",name:"Disabled",props:{disabled:!0}}],render:u,interactions:["Clicking anywhere in the row toggles the control, not only the box.","Space toggles it when focused, and Tab reaches it exactly once.","The focus ring lands on the drawn box, because the real input is clipped to one pixel.","Hover swaps the box border colour, on touch as well as with a pointer.","Disabled dims the whole row once, through the shared disabled-opacity token.","The generated id survives a re-render, so the error message pointed at the control cannot come loose.","An error draws three channels at once: the edge hue, the edge thickness, and a message that was not there before.","The checkmark appears with a full on or off swap, never with a fade.","Checked, mixed, disabled and focused are set from outside. The control infers none of them.","A mixed box draws the checked ground with a dash instead of a tick, and clicking it makes it checked.","A link inside the label navigates and does not toggle the box; the rest of the row still toggles.","The row holds the 24px pointer floor and is deliberately not padded out to the library's larger control target."],accessibility:[{label:"Native control",text:"The control is a real checkbox input, and the drawn box is hidden from assistive technology."},{label:"Programmatic label",text:"The visible text names the input through a real label element, so the text and the box are one control."},{label:"Keyboard",text:"Tab reaches the control exactly once and Space toggles it. No key handler is re-implemented."},{label:"Focus",text:"The focus ring lands on the box a person can see rather than on the clipped input, and it uses the shared ring."},{label:"Hidden label",text:"Hiding the label clips it out of sight and never removes the name. display none is not the recipe."},{label:"Disabled",text:"The shared dim is applied once, at the row, so the box never renders lighter than the label beside it."},{label:"Error messages",text:"The message carries a unique id, the input points at it and is marked invalid, and the message is announced as an alert when it appears."},{label:"Required",text:"A required checkbox carries the native attribute and aria-required, and its asterisk is hidden from screen readers."},{label:"Contrast",text:"The resting border, the checked fill and the mark each hold their contrast pair, on every brand."},{label:"Forced colours",text:"The checkmark stays visible in a high contrast mode, where an opacity-based reveal may not be honoured."},{label:"Zoom",text:"At 200% zoom on a 320px screen the box holds its size while a three-line consent label wraps beside it."},{label:"Mixed",text:"A mixed checkbox is announced as mixed rather than as on or off, through the state the browser reads and the one assistive technology reads."},{label:"Links in the label",text:"Each link is its own keyboard stop with its own name, the checkbox stays one stop, and the whole sentence is still the control's name."},{label:"Target size",text:"The whole row is the pointer target, and it holds at least the 24px WCAG 2.5.8 floor."}],openItems:[]}}}},l={name:"Default",args:H,argTypes:G,render:t=>e.jsx(O,{...t}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"The checkbox with every option a designer can change. Switch **State** to compare resting, checked, mixed, disabled and disabled while checked; type into **Label** to try real copy, including copy long enough to wrap. The box always leads the row and the label always follows it, here and in a Filter Group facet alike. Change the **Brand** toolbar and the same control re-themes across all 21 brands without a value being restated. Switch **Inverse** on to stand the control on the dark band: the preview drops onto that ground, the box keeps a white edge and the tick moves into a paper-coloured square."}}}},k=[{key:"unchecked",label:"Unchecked",props:{}},{key:"checked",label:"Checked",props:{defaultChecked:!0},dimension:"value"},{key:"indeterminate",label:"Mixed",props:{indeterminate:!0},dimension:"value"}],h=[{key:"default",label:"Default"},{key:"hover",label:"Hover",pseudo:"hover"},{key:"focus",label:"Focus",pseudo:"focusVisible"},{key:"error",label:"Error",props:{error:!0},dimension:"state"},{key:"disabled",label:"Disabled",props:{disabled:!0},dimension:"state"}],d={name:"All states",parameters:{themeShellPadding:!1,pseudo:{...y(h.filter(t=>t.pseudo==="hover"),{pseudoTarget:".ds-checkbox"}),...y(h.filter(t=>t.pseudo==="focusVisible"),{pseudoTarget:".ds-checkbox__input"})},docs:{description:{story:`Every value of the control against every state, on both grounds it is allowed to stand on, in two labelled grids. Each grid reads the same way: **Unchecked**, **Checked** and **Mixed** down the side, **Default**, **Hover**, **Focus**, **Error** and **Disabled** across the top, so a cell in one answers the cell in the same position in the other. The disabled-and-checked cell, the disabled-and-mixed cell and the checked error cell read directly here rather than being described. **Hover** and **Focus** are frozen with storybook-addon-pseudo-states so both sit still for a design review or a screenshot; the colours are the control's real CSS, held open rather than triggered. Disabled dims the whole control through a single application of the shared token, so the box never renders lighter than its own label.

**Light plane** is the page ground, the default every screen in the library draws on. **Inverse plane** is the control standing on the dark band it declares through \`inverse\`. What changes on that band: the resting box takes the ground itself with a white edge, the checked and mixed box is a paper-coloured square with a dark tick, and the label sentence takes the ground’s full ink. **Hover** there draws the same edge as **Default** on purpose, because that edge is already the ground’s full ink and has nowhere louder to go; what the rule buys is that the page-ground hover, which is the brand’s black, cannot reach through. **Focus** and the pressed state read the rings and the fill that ground publishes rather than the page’s. Every brand clears its floors on the dark plane: the edge and the filled box against the ground, the tick against the box it sits in.

This is a QA surface, not themed product UI, which is why its own chrome stays neutral across brands.`}}},render:()=>e.jsxs("dl",{style:{display:"grid",gap:"var(--size-700)",margin:0,paddingBlock:"var(--size-100)"},children:[e.jsxs("div",{children:[e.jsx("dt",{style:s,children:"Light plane"}),e.jsx("dd",{style:{margin:0},children:e.jsx(g,{rows:k,columns:h,render:u,label:"Light plane"})})]}),e.jsxs("div",{children:[e.jsx("dt",{style:s,children:"Inverse plane"}),e.jsx("dd",{style:{margin:0},children:e.jsx(g,{rows:k,columns:h,render:z,label:"Inverse plane"})})]})]})},c={name:"Label and content",parameters:{docs:{description:{story:"Three ways the label and its surrounding copy behave, named and side by side, none a state of the control. **Consent** keeps the long legal sentence in a paragraph beside the box, not inside the label, so the label stays one short, readable line and still names the control. It is the one approved context and the same pattern the newsletter form uses. **Links in the label** puts the terms and the privacy policy inside the sentence instead: clicking a link opens it and leaves the box alone, while clicking anywhere else in the row still ticks it. Each link is its own stop for the keyboard, and the whole sentence is still the checkbox's name. Reach for it when the words being agreed to are the link, and keep anything a shopper must reach reliably on a support line under the row, because a finger that lands beside a link ticks the box. **Long label** lets real consent copy wrap to several lines while the box is set not to shrink, so it holds its size instead of collapsing."}}},render:()=>e.jsxs("dl",{style:{display:"grid",gap:"var(--size-600)",maxWidth:520,margin:0},children:[e.jsxs("div",{children:[e.jsx("dt",{style:s,children:"Consent"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:360},children:[e.jsx(a,{label:"I'd like to receive email updates about new products and offers.",name:"consent"}),e.jsxs("p",{style:{margin:0,fontSize:"var(--font-size-body)",color:"var(--color-text-primary)"},children:["By subscribing you agree to our ",e.jsx(i,{href:"#",children:"Privacy Policy"})," and"," ",e.jsx(i,{href:"#",children:"Terms of Service"}),"."]})]})})]}),e.jsxs("div",{children:[e.jsx("dt",{style:s,children:"Links in the label"}),e.jsx("dd",{style:{margin:0},children:e.jsx("div",{style:{maxWidth:360},children:e.jsx(a,{name:"terms",label:e.jsxs(e.Fragment,{children:["I agree with the ",e.jsx(i,{href:"#",children:"Terms of Service"})," and the"," ",e.jsx(i,{href:"#",children:"Privacy Policy"}),"."]})})})})]}),e.jsxs("div",{children:[e.jsx("dt",{style:s,children:"Long label"}),e.jsx("dd",{style:{margin:0},children:e.jsx("div",{style:{maxWidth:220},children:e.jsx(a,{label:"I agree to receive personalized marketing communications from Revlon and its affiliated brands, including product recommendations, exclusive offers, and updates about new launches, delivered by email."})})})]})]})},p={name:"Group",parameters:{docs:{description:{story:'A named set of related checkboxes, wrapped in `CheckboxGroup`. **Why a fieldset and a legend:** on their own, three checkboxes are three unrelated questions; a real `<fieldset>` announces them as one set and the `<legend>` gives the set its name, so assistive technology reads "how can we reach you" over the options rather than three yes-or-no rows. The group adds no tab stop and repaints no box: every checkbox inside behaves exactly as it does on its own. **Required lives in the name.** A required set draws its asterisk inside the legend, because for a group the name is the only channel there is: `aria-required` is not allowed on a `<fieldset>` (its role is `group`), so the requirement rides the words of the name, which is what the legend is. **The error belongs to the set.** "Pick at least one" is not a sentence any single box can own, so the message is tied to the group, reads directly under the name above the options, and is announced the moment it arrives. It is the same error contract the text field, the select and the single checkbox already draw. FilterGroup and the base Form compose this same primitive, so a filter category and a form field-set group the same way.'}}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--size-500)",maxWidth:320},children:[e.jsx(w,{legend:"How can we reach you?",children:["Email","Text message","Post"].map(t=>e.jsx(a,{label:t},t))}),e.jsx(w,{legend:"How can we reach you?",required:!0,error:"Pick at least one way for us to reach you.",children:["Email","Text message","Post"].map(t=>e.jsx(a,{label:t},`req-${t}`))})]})};var x,v,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Default',
  args: CHECKBOX_DEFAULT_ARGS,
  argTypes: CHECKBOX_ARG_TYPES,
  render: args => <ConfigurableCheckbox {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The checkbox with every option a designer can change. Switch **State** to compare ' + 'resting, checked, mixed, disabled and disabled while checked; type into **Label** to ' + 'try real copy, including copy long enough to wrap. The box always leads the row and ' + 'the label always follows it, here and in a Filter Group facet alike. Change the ' + '**Brand** toolbar and the same control re-themes across all 21 brands without a ' + 'value being restated. Switch **Inverse** on to stand the control on the dark band: ' + 'the preview drops onto that ground, the box keeps a white edge and the tick moves ' + 'into a paper-coloured square.'
      }
    }
  }
}`,...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var C,S,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'All states',
  parameters: {
    // Flush canvas so the grid gets the full width for its columns, the same flag every other
    // matrix story sets. See .storybook/preview.jsx.
    themeShellPadding: false,
    // The pseudo-states addon freezes a :hover or :focus-visible by adding a class to the element
    // the CSS rule hangs the pseudo on, and for this control those are two different elements:
    // hover is \`.ds-checkbox:hover .ds-checkbox__control\` (the row owns it), focus is
    // \`.ds-checkbox__input:focus-visible + .ds-checkbox__control\` (the clipped input owns it). A
    // single shared target would leave one of the two columns showing its resting state, so each
    // column is aimed at the element that actually carries its pseudo.
    pseudo: {
      ...getStateMatrixPseudoParameters(MATRIX_COLUMNS.filter(column => column.pseudo === 'hover'), {
        pseudoTarget: '.ds-checkbox'
      }),
      ...getStateMatrixPseudoParameters(MATRIX_COLUMNS.filter(column => column.pseudo === 'focusVisible'), {
        pseudoTarget: '.ds-checkbox__input'
      })
    },
    docs: {
      description: {
        story: 'Every value of the control against every state, on both grounds it is allowed to stand ' + 'on, in two labelled grids. Each grid reads the same way: **Unchecked**, **Checked** ' + 'and **Mixed** down the side, **Default**, **Hover**, **Focus**, **Error** and ' + '**Disabled** across the top, so a cell in one answers the cell in the same position ' + 'in the other. The disabled-and-checked cell, the disabled-and-mixed cell and the ' + 'checked error cell read directly here rather than being described. **Hover** and ' + '**Focus** are frozen with storybook-addon-pseudo-states so both sit still for a ' + 'design review or a screenshot; the colours are the control\\'s real CSS, held open ' + 'rather than triggered. Disabled dims the whole control through a single application ' + 'of the shared token, so the box never renders lighter than its own label.\\n\\n' + '**Light plane** is the page ground, the default every screen in the library draws ' + 'on. **Inverse plane** is the control standing on the dark band it declares through ' + '\`inverse\`. What changes on that band: the resting box takes the ground itself with a ' + 'white edge, the checked and mixed box is a paper-coloured square with a dark tick, ' + 'and the label sentence takes the ground\\u2019s full ink. **Hover** there draws the ' + 'same edge as **Default** on purpose, because that edge is already the ground\\u2019s ' + 'full ink and has nowhere louder to go; what the rule buys is that the page-ground ' + 'hover, which is the brand\\u2019s black, cannot reach through. **Focus** and the ' + 'pressed state read the rings and the fill that ground publishes rather than the ' + 'page\\u2019s. Every brand clears its floors on the dark plane: the edge and the ' + 'filled box against the ground, the tick against the box it sits in.\\n\\n' + 'This is a QA surface, not themed product UI, which is why its own chrome stays ' + 'neutral across brands.'
      }
    }
  },
  render: () => <dl style={{
    display: 'grid',
    gap: 'var(--size-700)',
    margin: 0,
    paddingBlock: 'var(--size-100)'
  }}>
      <div>
        <dt style={EXAMPLE_LABEL_STYLE}>Light plane</dt>
        <dd style={{
        margin: 0
      }}>
          <StateMatrixGrid rows={MATRIX_ROWS} columns={MATRIX_COLUMNS} render={renderSpecCell} label="Light plane" />
        </dd>
      </div>
      <div>
        <dt style={EXAMPLE_LABEL_STYLE}>Inverse plane</dt>
        <dd style={{
        margin: 0
      }}>
          <StateMatrixGrid rows={MATRIX_ROWS} columns={MATRIX_COLUMNS} render={renderInversePlaneCell} label="Inverse plane" />
        </dd>
      </div>
    </dl>
}`,...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var L,E,I;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Label and content',
  parameters: {
    docs: {
      description: {
        story: 'Three ways the label and its surrounding copy behave, named and side by side, none a ' + 'state of the control. **Consent** keeps the long legal sentence in a paragraph ' + 'beside the box, not inside the label, so the label stays one short, readable line ' + 'and still names the control. It is the one approved context and the same pattern ' + 'the newsletter form uses. **Links in the label** puts the terms and the privacy ' + 'policy inside the sentence instead: clicking a link opens it and leaves the box ' + 'alone, while clicking anywhere else in the row still ticks it. Each link is its own ' + 'stop for the keyboard, and the whole sentence is still the checkbox\\'s name. Reach ' + 'for it when the words being agreed to are the link, and keep anything a shopper must ' + 'reach reliably on a support line under the row, because a finger that lands beside a ' + 'link ticks the box. **Long label** lets real consent copy wrap to several ' + 'lines while the box is set not to shrink, so it holds its size instead of ' + 'collapsing.'
      }
    }
  },
  render: () => <dl style={{
    display: 'grid',
    gap: 'var(--size-600)',
    maxWidth: 520,
    margin: 0
  }}>
      <div>
        <dt style={EXAMPLE_LABEL_STYLE}>Consent</dt>
        <dd style={{
        margin: 0
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          maxWidth: 360
        }}>
            <Checkbox label="I'd like to receive email updates about new products and offers." name="consent" />
            <p style={{
            margin: 0,
            fontSize: 'var(--font-size-body)',
            color: 'var(--color-text-primary)'
          }}>
              By subscribing you agree to our <Link href="#">Privacy Policy</Link> and{' '}
              <Link href="#">Terms of Service</Link>.
            </p>
          </div>
        </dd>
      </div>

      <div>
        <dt style={EXAMPLE_LABEL_STYLE}>Links in the label</dt>
        <dd style={{
        margin: 0
      }}>
          <div style={{
          maxWidth: 360
        }}>
            <Checkbox name="terms" label={<>
                  I agree with the <Link href="#">Terms of Service</Link> and the{' '}
                  <Link href="#">Privacy Policy</Link>.
                </>} />
          </div>
        </dd>
      </div>

      <div>
        <dt style={EXAMPLE_LABEL_STYLE}>Long label</dt>
        <dd style={{
        margin: 0
      }}>
          <div style={{
          maxWidth: 220
        }}>
            <Checkbox label={'I agree to receive personalized marketing communications from Revlon and its ' + 'affiliated brands, including product recommendations, exclusive offers, and ' + 'updates about new launches, delivered by email.'} />
          </div>
        </dd>
      </div>
    </dl>
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var D,j,q;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Group',
  parameters: {
    docs: {
      description: {
        story: 'A named set of related checkboxes, wrapped in \`CheckboxGroup\`. **Why a fieldset and a ' + 'legend:** on their own, three checkboxes are three unrelated questions; a real ' + '\`<fieldset>\` announces them as one set and the \`<legend>\` gives the set its name, so ' + 'assistive technology reads "how can we reach you" over the options rather than three ' + 'yes-or-no rows. The group adds no tab stop and repaints no box: every checkbox inside ' + 'behaves exactly as it does on its own. **Required lives in the name.** A required set ' + 'draws its asterisk inside the legend, because for a group the name is the only channel ' + 'there is: \`aria-required\` is not allowed on a \`<fieldset>\` (its role is \`group\`), so ' + 'the requirement rides the words of the name, which is what the legend is. **The error ' + 'belongs to the set.** "Pick at least one" is not a sentence any single box can own, so ' + 'the message is tied to the group, reads directly under the name above the options, and ' + 'is announced the moment it arrives. It is the same error contract the text field, the ' + 'select and the single checkbox already draw. FilterGroup and the base Form compose this ' + 'same primitive, so a filter category and a form field-set group the same way.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--size-500)',
    maxWidth: 320
  }}>
      <CheckboxGroup legend="How can we reach you?">
        {['Email', 'Text message', 'Post'].map(option => <Checkbox key={option} label={option} />)}
      </CheckboxGroup>
      <CheckboxGroup legend="How can we reach you?" required error="Pick at least one way for us to reach you.">
        {['Email', 'Text message', 'Post'].map(option => <Checkbox key={\`req-\${option}\`} label={option} />)}
      </CheckboxGroup>
    </div>
}`,...(q=(j=p.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const J=["Playground","AllStates","LabelAndContent","Group"];export{d as AllStates,p as Group,c as LabelAndContent,l as Playground,J as __namedExportsOrder,Z as default};
