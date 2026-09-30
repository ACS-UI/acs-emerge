import{j as e,S as W,g as L}from"./iframe-6dx3hp_4.js";import{F as V}from"./Form-DqpXLk_6.js";import{I as t}from"./Input-3DsPWvNA.js";import{S as G}from"./Select-DBrm7KPu.js";import{C as z}from"./Checkbox-C5uneDTR.js";import{F as U}from"./FieldRequirement-Dn5H0DsY.js";import{a as Y}from"./annotationPage-eYx--AWZ.js";import{D as b,a as w,c as f}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./MenuItem-bBgP9Lwo.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";import"./ControlIndicator-DEJX7FyE.js";const C={lines:{...w("Short text"),name:"Type",...b({labels:{single:"Short text",multiline:"Long text",password:"Password"},options:["single","multiline","password"]}),description:"Short text is one line; long text is a box the user can write a paragraph in; password is one line that hides what is typed, with an eye button that shows it and hides it again. It is the same field every way: same label, same error, same shell, and only the control inside it changes."},required:{...f("Off"),name:"Required",description:"Marks the field as required: an asterisk joins the label and the control reports itself as required to a screen reader. The form explains the asterisk once, above its first field."},labelHidden:{...f("Off"),name:"Hide label",description:"Off by default. Hide only when persistent visible context identifies the purpose and expected input. A placeholder alone is insufficient. Keep labels visible in multi-field forms; validate the exception in the complete composition. The accessible label remains."},inverse:{...f("Off"),name:"Inverse",description:"For a field standing on a dark band. The field itself keeps its light ground; what moves are the label and any message, which render on the band's own ground and switch to the inks made for it."},state:{...w("Empty"),name:"State",...b({labels:{empty:"Empty",filled:"Filled"},options:["empty","filled"]}),description:"Show the same field empty or with an authored value so the filled border is visible."},label:{control:!1,table:{disable:!0}},placeholder:{control:!1,table:{disable:!0}},error:{control:!1,table:{disable:!0}},id:{control:!1,table:{disable:!0}},multiline:{control:!1,table:{disable:!0}},rows:{control:!1,table:{disable:!0}},disabled:{control:!1,table:{disable:!0}},type:{control:!1,table:{disable:!0}},showPasswordLabel:{control:!1,table:{disable:!0}},hidePasswordLabel:{control:!1,table:{disable:!0}},passwordShownAnnouncement:{control:!1,table:{disable:!0}},passwordHiddenAnnouncement:{control:!1,table:{disable:!0}}},J={lines:"single",required:!1,labelHidden:!1,inverse:!1,state:"empty",label:"Full name",placeholder:"Jane Doe"},s="demo-password",B="Use at least 8 characters.",F="Enter your password to continue.";function K({lines:a,required:p,labelHidden:i,inverse:r,state:o,label:H,placeholder:M}){const m=a==="multiline",n=a==="password",N=m?"Thanks!":n?s:"Jane Doe";return e.jsx("div",{style:r?{background:"var(--color-bg-inverse)",padding:"var(--size-400)",maxWidth:280}:{maxWidth:280},children:e.jsx(t,{label:n?"Password":H,placeholder:n?void 0:M,type:n?"password":void 0,autoComplete:n?"current-password":void 0,multiline:m,rows:m?5:void 0,defaultValue:o==="filled"?N:void 0,required:p,labelHidden:i,inverse:r},`${a}-${o}`)})}const pe={title:"Atoms/Text field",component:t,tags:["autodocs"],parameters:{docs:{page:Y("Input"),toc:{headingSelector:"h2"},description:{component:"A labelled place to type, on one line or several. In code the component is called `Input`."}},componentDoc:{usage:`
## When to use

- ✅ **Anywhere someone types free text**: a name, an email address, a message, a search term.
- ✅ **A long answer.** Switch **Lines** to several and the field becomes a box for a paragraph,
  with the same label, the same error and the same shell.
- ✅ **Inside a form the screen already owns.** The field holds no value of its own.
- ✅ **A password.** Set the type to password and the field hides what is typed, with an eye
  button that shows it and hides it again.

- ❌ **A choice from a fixed list.** That is **Select field**, which renders a different control with
  different keyboard behaviour.
- ❌ **A yes or no.** That is **Checkbox**.
- ❌ **The assembled newsletter sign-up.** That is **Newsletter form**, which puts this field, the
  button, the checkbox and the anchor link together.
- ❌ **The site search box.** That is **SearchBar**, and it is not this field with decoration on
  it: it owns its own input, because a search clears its own term, holds a control inside the
  box and behaves as a searchbox rather than a text box. Reaching for this atom to build one is
  the thing that decision forbids.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Label** | **always required** | Never dropped. "Hide label" makes it invisible, never absent: a field with no label is unusable with a screen reader |
| **Control** | required | A single-line box, or a several-line one. The same shell either way |
| **Hint** | optional | A quiet line of guidance under the control, the same size as the error, muted, and never carrying an icon |
| **Error** | optional | A message under the field. It appears only when the screen puts one there |
| **Show or hide button** | password only | An eye button in the field's end. It shows the password and hides it again |

- **Tokens own the box.** Height, inset, border, radius, type and colour.
- **The caller owns the words.** The label, the placeholder and the error message.

### Variants

**Two axes, and no others.**

- **Lines**, one or several. Same label, same error, same shell. Only the control changes.
  **Password** is the one-line field with its type set to password: it hides what is typed and
  adds the show or hide button, and nothing else about the field changes.
- **Hide label**, off by default. A contextual exception when persistent visible context identifies
  the purpose and expected input. The associated label remains available to assistive technology.
  SearchBar owns its own field and does not use this component.

**There is deliberately no dark-band variant.** A field on a dark section keeps this component's
ordinary light ground.

**On a phone the text is forced to 16px**, so the browser does not zoom the page when the field
takes focus. That is a library-wide rule, not this component's.
`,guidance:`
## Behaviors

### States

- **Default.** The resting field with no value.
- **Filled.** Once the screen has supplied a value or the user has typed one, the border uses the
  semantic control border token. The state is derived from the real value, not a visual prop.
- **Hover.** The border contrast increases. Pointer only.
- **Focus.** The standard ring. Hover and focus both come with the component, so no screen has to
  add them.
- **Error.** The error is a **message**, not a flag. The screen supplies the sentence; the component
  draws the state, announces it, and ties it to the control so a screen reader reads the reason
  when the field takes focus. **The state moves three things and none of them is colour alone:**
  the field's ring doubles in thickness, the message carries the library's danger mark, and the
  message is set one rung larger than a caption so it is not the smallest line on the screen.
- **Disabled: real, but not drawn.** The field genuinely disables, stops taking input and leaves
  the tab order. **Nothing about it looks different.** The checkbox dims itself through a shared
  value; this one has no rule for the state at all. That is a live gap, shown in the grid at the
  bottom of this page rather than only stated, and carried as an open item.

### Interactions

- **Typing marks the field filled.** The component reads the real value only to draw the semantic
  control border; the screen still owns the value itself.
- **The label is always clickable** and focuses the control, because it is a real label bound to a
  real id. That binding is per instance, which matters: it used to be regenerated on every render,
  so the association went stale the second time a screen re-drew.
- **An error is announced when it appears.** It is a live message, so a screen reader says it
  without the user having to go looking for it.

## Rules

- ✅ **Do** give every field a label.
- ❌ **Don't** use the placeholder as one. It vanishes the moment someone types, so anything only
  said there is lost exactly when it is needed.

- ✅ **Do** keep labels visible by default, and always in multi-field forms. Hide only when
  persistent visible context identifies the purpose and expected input. Validate the complete
  composition; being inside a molecule does not establish that the context is sufficient.
- ❌ **Don't** delete it. Hidden and absent are not the same thing.

- ❌ **Don't** put a field on a dark band expecting it to invert. It does not.
- ❌ **Don't** disable a form's submit button to stop an incomplete submission. Let the submit
  happen and show the field's error, so the reason is announced and reachable instead of left for
  a shopper to work out from a control that does nothing.

### Content rules

- ✅ **Do** write the error as an instruction: "Enter your full name to continue", not "Invalid".
  The person reading it is trying to finish something, and a verdict does not tell them how.
- ✅ **Do** write the placeholder as an example of the answer, never as the instruction.
- ❌ **Don't** invent a character limit. The MASTER doc sets three, and they are the only ones:
  42 characters for the instruction, 42 for the example copy, 40 and one line for the error
  message. The component does not enforce them; they are an authoring rule for the screen.

## Open items

| Question | Owner |
|---|---|
| **Disabled is unstyled.** The state works and looks identical to the default. The checkbox dims itself through a shared value; this field does not | Design |
| The placeholder's contrast, per brand. It is the quietest text in the component and it is unmeasured across the 21 brands | Design / DS team |
`,spec:{elements:[{name:"Label",requirement:"required"},{name:"Control",requirement:"required"},{name:"Hint",requirement:"optional"},{name:"Error message",requirement:"conditional",condition:"When the screen passes one"},{name:"Placeholder",requirement:"optional"},{name:"Show or hide button",requirement:"conditional",condition:"Password fields only"}],authorability:[{name:"Label",rule:"Visible by default. Hide only when persistent context makes the expected input clear."},{name:"Placeholder",rule:"Optional, and written as an example of the answer. It is never the instruction."},{name:"Hint",rule:"Optional guidance under the control, same size as the error, muted, no icon, never red."},{name:"Error message",rule:"The screen writes it as a full sentence and an instruction, never as a verdict."},{name:"Value",rule:"The screen owns what is in the field. The component reads it only to know it is filled."},{name:"Lines",rule:"One line or several, on the same shell. Nothing else about the field changes."},{name:"Password",rule:"One line that hides what is typed. Set autocomplete to current-password or new-password."},{name:"Ground",rule:"There is no dark-band version. A field on a dark section keeps its light ground."},{name:"Length",rule:"The doc sets 42 for the label, 42 for the placeholder, 40 for the error. Not enforced."},{name:"Look",rule:"Type, colour, height and radius come from tokens, and the text is 16px on a phone."}],variants:[{label:"Nothing typed",props:{filled:!1}},{label:"Something typed",props:{filled:!0}},{label:"Several lines, something typed",props:{filled:!0,multiline:!0}},{label:"Password, something typed",props:{filled:!0,password:!0}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"},{key:"error",name:"Error",props:{error:!0}},{key:"disabled",name:"Disabled",props:{disabled:!0}}],render:j,interactions:["The screen owns the value. The field reads it only to know whether it is filled.","Clicking the label focuses the control. The binding is per instance and survives a re-render.","An error arrives as a sentence from the screen, is announced live, and marks the control invalid.","A value in the field draws the control edge on the semantic control border.","Hover changes the border on pointer devices. Focus draws the ring the whole library shares.","Disabled stops input and leaves the tab order. Nothing in the stylesheet paints it.","On a phone the text renders at 16px or larger, so focusing the field never zooms the page.","A form never disables its own submit button. Let the submit run and show the field error.","Props and ARIA pass straight through to the input or the textarea, untouched.","A password field hides what is typed. Its eye button shows it and hides it again, and keeps focus."],accessibility:[{label:"Programmatic label",text:"A real label is bound to the control by an id unique to the instance, and the binding survives a re-render."},{label:"Hidden label",text:"Hide only with clear, persistent visible context. Keep the accessible label and show labels in multi-field forms."},{label:"Error wiring",text:"The message carries a live role, and the control points at it and reports itself invalid, so the reason is read with the field."},{label:"Non-colour cue",text:"An error is a thicker border, a mark and a sentence together. Colour alone never carries the state, which matters most on a dark band."},{label:"Focus",text:"The field draws a visible focus ring, the same one every field in the library uses."},{label:"Contrast",text:"The error copy, the error border and the placeholder clear their thresholds against the field ground in every brand. The mark takes the copy's colour."},{label:"Disabled",text:"A disabled field leaves the tab order and is announced as disabled, whatever it looks like."},{label:"Zoom on iOS",text:"The field text is at least 16px, so focusing it never zooms the whole page in iOS Safari."},{label:"Keyboard",text:"Tab reaches the field, then the next control on the form, in the order the form reads."},{label:"Password button",text:"A real button named Show password or Hide password. It never submits the form, and its target is at least 24 by 24 pixels."}],openItems:[{question:"The doc puts the filled state after the field loses focus. It is drawn from the first keystroke here.",owner:"Design"},{question:"The doc asks every field for a maximum length that trips the error state. Nothing in the component sets or checks one.",owner:"Design / DS team"},{question:"Measure the placeholder contrast on all 21 brands, and raise the token if a brand fails.",owner:"Design / DS team"}]}}}},l={name:"Default",args:J,argTypes:C,render:a=>e.jsx(K,{...a}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"The field with the options a designer can change. Switch **State** to Filled and the control edge moves to the semantic control border, which is the state a field enters the moment someone types into it. Switch **Type** to turn it into a box for a paragraph, and notice the label, the error and the shell are identical. Switch **Required** on and an asterisk joins the label while the control reports itself as required to a screen reader. Switch **Inverse** on for a dark band: the field keeps its light ground on purpose, and the label is what changes ink. Tab through it with **Hide label** on to preview the contextual exception; the accessible name remains. Keep it off in multi-field forms. Tab into the field for the focus ring. Change the **Brand** toolbar and the same field re-themes across all 21 brands."}}}},d={name:"Required fields",parameters:{docs:{description:{story:'A required field carries an **asterisk beside its label**, an optional one carries nothing, and the form says once, before its first input, what the asterisk means. The sentence is not decoration: a bare `*` explains nothing to a first-time reader, so it is the sentence rather than the mark that satisfies WCAG 3.3.2. **Every** required field is marked, including on a form where all of them are, so a reader never has to notice an absence and work out what it meant.\n\n**The mark is drawn for the eye only.** It is hidden from screen readers, which read the requirement off the control itself instead, so nobody hears "Full name star".'}}},render:()=>e.jsx("div",{style:{maxWidth:300},children:e.jsxs(V,{columns:1,children:[e.jsx(U,{}),e.jsx(t,{label:"Full name",required:!0,placeholder:"Jane Doe"}),e.jsx(t,{label:"Phone number",placeholder:"Optional"}),e.jsxs(G,{label:"Topic",required:!0,children:[e.jsx("option",{value:"order",children:"Order"}),e.jsx("option",{value:"product",children:"Product"})]}),e.jsx(z,{label:"I accept the Terms of Service",required:!0})]})})},h={name:"Error",argTypes:C,parameters:{docs:{description:{story:'The screen supplies the words; the component draws the state, announces it, and ties it to the control so a screen reader reads the reason when the field takes focus. Write the sentence as an **instruction**, "Enter your full name to continue", rather than a verdict like "Invalid". The person reading it is trying to finish something, and a verdict does not tell them how.'}}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--size-300)",maxWidth:280},children:[e.jsx(t,{label:"Full name",placeholder:"Jane Doe",error:"Enter your full name to continue."}),e.jsx(t,{label:"Message",multiline:!0,rows:4,defaultValue:"Thanks!",error:"Your message needs at least 20 characters before you can send it."})]})},c={name:"Password",parameters:{docs:{description:{story:`The single-line field with \`type="password"\`. It hides what is typed and carries one eye button in its trailing end: press it and the password shows, press it again and it hides. The button is named **Show password** or **Hide password** for a screen reader, never submits the form, and keeps focus after a press, so a keyboard user can press it again straight away.

A shown password hides again on its own when the form is sent and when the visitor returns to the page with the browser's back or forward button. Each press is also said out loud to a screen reader: **Your password is visible.** or **Your password is hidden.**

Everything else is the ordinary field: the label, the required mark, the hint, the error, disabled and the dark band all behave exactly as they do on short text. Pass \`autoComplete="current-password"\` on a sign-in form and \`"new-password"\` where an account is created, so password managers fill and save the right thing.

**The hint, the error and the value are stand-in wording**, not revlon.com copy: the password rules a visitor reads are the site's to write.`}}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--size-300)",maxWidth:280},children:[e.jsx(t,{label:"Password",type:"password",autoComplete:"current-password",required:!0}),e.jsx(t,{label:"New password",type:"password",autoComplete:"new-password",hint:B,defaultValue:s}),e.jsx(t,{label:"Password",type:"password",autoComplete:"current-password",defaultValue:s,error:F}),e.jsx(t,{label:"Password",type:"password",defaultValue:s,disabled:!0}),e.jsx("div",{style:{background:"var(--color-bg-inverse)",padding:"var(--size-400)"},children:e.jsx(t,{label:"Password",type:"password",autoComplete:"current-password",defaultValue:s,inverse:!0})})]})},X=[{key:"empty",label:"Nothing typed",props:{filled:!1},dimension:"condition"},{key:"typed",label:"Something typed",props:{filled:!0},dimension:"condition"},{key:"multiline",label:"Several lines, something typed",props:{filled:!0,multiline:!0},dimension:"condition"},{key:"password",label:"Password, something typed",props:{filled:!0,password:!0},dimension:"condition"}],g=[{key:"default",label:"Default"},{key:"hover",label:"Hover",pseudo:"hover"},{key:"focus",label:"Focus",pseudo:"focusVisible"},{key:"error",label:"Error",props:{error:!0},dimension:"state"},{key:"disabled",label:"Disabled",props:{disabled:!0},dimension:"state"}];function j({multiline:a,password:p,error:i,disabled:r,filled:o}){return p?e.jsx("div",{style:{width:220,textAlign:"start"},children:e.jsx(t,{label:"Password",type:"password",autoComplete:"current-password",defaultValue:o?s:void 0,disabled:r,error:i?F:void 0})}):e.jsx("div",{style:{width:220,textAlign:"start"},children:e.jsx(t,{label:a?"Message":"Full name",placeholder:a?"Tell us how we can help…":"Jane Doe",multiline:a,rows:a?3:void 0,defaultValue:o?a?"Thanks!":"Jane Doe":void 0,disabled:r,error:i?"Enter your full name to continue.":void 0})})}const u={name:"State matrix",parameters:{themeShellPadding:!1,pseudo:L(g,{pseudoTarget:"input, textarea"}),docs:{description:{story:"What the field holds, against every state, in one grid. **Hover** and **Focus** are frozen with storybook-addon-pseudo-states; **Error** and **Disabled** are real props. Read the second row against the first down the **Default** column: **there is no edge step.** The field already rests on the control border, so holding a value moves nothing. **Filled is not a column**, because it is not something a caller sets: a field holding a value IS filled, so the row data decides it and every column shows what a filled field looks like in that state. The Select matrix draws the same first three rows in the same order; the **Password** row is this field's own, since a drop-down has no password type. Read the **Disabled** column against the **Default** one: the whole field dims and the pointer says so. It used to be identical to Default, which this page recorded as a real gap; the gap is closed and this column is where a reader sees it. This is a QA tool, not themed product UI, which is why its own chrome stays neutral regardless of brand."}}},render:()=>e.jsx(W,{rows:X,columns:g,render:j})};var y,v,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Default',
  args: INPUT_DEFAULT_ARGS,
  argTypes: INPUT_ARG_TYPES,
  render: args => <ConfigurableInput {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The field with the options a designer can change. Switch **State** to Filled and the ' + 'control edge moves to the semantic control border, which is the state a field enters ' + 'the moment someone types into it. Switch **Type** to turn it into a ' + 'box for a paragraph, and notice the label, the error and the shell are identical. ' + 'Switch **Required** on and an asterisk joins the label while the control reports ' + 'itself as required to a screen reader. Switch **Inverse** on for a dark band: the ' + 'field keeps its light ground on purpose, and the label is what changes ink. Tab ' + 'through it with **Hide label** on to preview the contextual exception; the accessible ' + 'name remains. Keep it off in multi-field forms. Tab ' + 'into the field for the focus ring. Change the **Brand** toolbar and the same field ' + 're-themes across all 21 brands.'
      }
    }
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var T,k,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Required fields',
  parameters: {
    docs: {
      description: {
        story: 'A required field carries an **asterisk beside its label**, an optional one carries ' + 'nothing, and the form says once, before its first input, what the asterisk means. ' + 'The sentence is not decoration: a bare \`*\` explains nothing to a first-time reader, ' + 'so it is the sentence rather than the mark that satisfies WCAG 3.3.2. **Every** ' + 'required field is marked, including on a form where all of them are, so a reader ' + 'never has to notice an absence and work out what it meant.\\n\\n' + '**The mark is drawn for the eye only.** It is hidden from screen readers, which read ' + 'the requirement off the control itself instead, so nobody hears "Full name star".'
      }
    }
  },
  render: () => <div style={{
    maxWidth: 300
  }}>
      <Form columns={1}>
        <FormRequirementNote />
        <Input label="Full name" required placeholder="Jane Doe" />
        <Input label="Phone number" placeholder="Optional" />
        <Select label="Topic" required>
          <option value="order">Order</option>
          <option value="product">Product</option>
        </Select>
        <Checkbox label="I accept the Terms of Service" required />
      </Form>
    </div>
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var D,A,I;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Error',
  argTypes: INPUT_ARG_TYPES,
  parameters: {
    docs: {
      description: {
        story: 'The screen supplies the words; the component draws the state, announces it, and ties it ' + 'to the control so a screen reader reads the reason when the field takes focus. Write ' + 'the sentence as an **instruction**, "Enter your full name to continue", rather than a ' + 'verdict like "Invalid". The person reading it is trying to finish something, and a ' + 'verdict does not tell them how.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--size-300)',
    maxWidth: 280
  }}>
      <Input label="Full name" placeholder="Jane Doe" error="Enter your full name to continue." />
      <Input label="Message" multiline rows={4} defaultValue="Thanks!" error="Your message needs at least 20 characters before you can send it." />
    </div>
}`,...(I=(A=h.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var P,E,O;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Password',
  parameters: {
    docs: {
      description: {
        story: 'The single-line field with \`type="password"\`. It hides what is typed and carries one ' + 'eye button in its trailing end: press it and the password shows, press it again and it ' + 'hides. The button is named **Show password** or **Hide password** for a screen reader, ' + 'never submits the form, and keeps focus after a press, so a keyboard user can press it ' + 'again straight away.\\n\\n' + 'A shown password hides again on its own when the form is sent and when the visitor ' + 'returns to the page with the browser\\'s back or forward button. Each press is also said ' + 'out loud to a screen reader: **Your password is visible.** or **Your password is hidden.**\\n\\n' + 'Everything else is the ordinary field: the label, the required mark, the hint, the ' + 'error, disabled and the dark band all behave exactly as they do on short text. Pass ' + '\`autoComplete="current-password"\` on a sign-in form and \`"new-password"\` where an ' + 'account is created, so password managers fill and save the right thing.\\n\\n' + '**The hint, the error and the value are stand-in wording**, not revlon.com copy: the ' + 'password rules a visitor reads are the site\\'s to write.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--size-300)',
    maxWidth: 280
  }}>
      <Input label="Password" type="password" autoComplete="current-password" required />
      <Input label="New password" type="password" autoComplete="new-password" hint={DEMO_PASSWORD_HINT} defaultValue={DEMO_PASSWORD} />
      <Input label="Password" type="password" autoComplete="current-password" defaultValue={DEMO_PASSWORD} error={DEMO_PASSWORD_ERROR} />
      <Input label="Password" type="password" defaultValue={DEMO_PASSWORD} disabled />
      <div style={{
      background: 'var(--color-bg-inverse)',
      padding: 'var(--size-400)'
    }}>
        <Input label="Password" type="password" autoComplete="current-password" defaultValue={DEMO_PASSWORD} inverse />
      </div>
    </div>
}`,...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var R,q,_;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'State matrix',
  parameters: {
    themeShellPadding: false,
    pseudo: getStateMatrixPseudoParameters(STATE_MATRIX_COLUMNS, {
      pseudoTarget: 'input, textarea'
    }),
    docs: {
      description: {
        story: 'What the field holds, against every state, in one grid. **Hover** and **Focus** are frozen ' + 'with storybook-addon-pseudo-states; **Error** and **Disabled** are real props. Read the ' + 'second row against the first down the **Default** column: **there is no edge step.** ' + 'The field already rests on the control border, so holding a value moves nothing. ' + '**Filled is not a ' + 'column**, because it is not something a caller sets: a field holding a value IS filled, so ' + 'the row data decides it and every column shows what a filled field looks like in that ' + 'state. The Select matrix draws the same first three rows in the same order; the ' + '**Password** row is this field\\'s own, since a drop-down has no password type. ' + 'Read the **Disabled** column against the **Default** one: the whole field dims and the ' + 'pointer says so. It used to be identical to Default, which this page recorded as a real ' + 'gap; the gap is closed and this column is where a reader sees it. ' + 'This is a QA tool, not themed product UI, ' + 'which is why its own chrome stays neutral regardless of brand.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={STATE_MATRIX_ROWS} columns={STATE_MATRIX_COLUMNS} render={renderStateMatrixCell} />
}`,...(_=(q=u.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};const me=["Playground","RequiredFields","ErrorsAreSentences","Password","StateMatrix"];export{h as ErrorsAreSentences,c as Password,l as Playground,d as RequiredFields,u as StateMatrix,me as __namedExportsOrder,pe as default};
