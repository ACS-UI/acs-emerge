import{j as e}from"./iframe-6dx3hp_4.js";import{F as d,a as I}from"./Form-DqpXLk_6.js";import{I as c}from"./Input-3DsPWvNA.js";import{S as N}from"./Select-DBrm7KPu.js";import{B as M}from"./Button-CiZyClsp.js";import{F as m}from"./FieldRequirement-Dn5H0DsY.js";import{a as R}from"./annotationPage-eYx--AWZ.js";import{D as P}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./MenuItem-bBgP9Lwo.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";import"./Loading-DyIAIYoE.js";/* empty css               */const _={columns:{control:!1,table:{disable:!0}},onSubmit:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},successHeadingLevel:{control:!1,table:{disable:!0}},submitError:{name:"submitError",control:"text",description:"The form level submission error: the form could not be sent, with every field as the reader left it. Empty for none. Different from a field error, which says one control is wrong and belongs to that control.",table:{category:"States"}},status:{name:"status",...P({options:["idle","success"]}),description:"The form's own state. On success the confirmation replaces the fields in the same box, so the block keeps its height, and there is no way back from it but a reload.",table:{category:"States"}},successHeading:{control:"text",table:{category:"States"}},successMessage:{control:"text",table:{category:"States"}}},H="Something went wrong. Please try again.",j="Thanks, we will be in touch.",C="Your message has been sent. Somebody from the team will get back to you at the address you gave us.",se={title:"Molecules/Form",component:d,tags:["autodocs"],parameters:{docs:{page:R("Form"),toc:{headingSelector:"h2, h3"},description:{component:"The base multi field form: a real form element and the grid its fields sit in. It owns no field, no button and no measure. What it owns is the one piece of layout the criteria ratifies, that fields stack onto two or one column depending on the breakpoint."}},componentDoc:{usage:`
## When to use

- ✅ **When a visitor sends you a set of values in one go.** Contact, a data request, a giveaway
  entry, a professional enquiry. The criteria names those four and says the field count and the
  field types are each form's own.
- ✅ **When two short fields read better side by side.** A first and a last name cost one row
  instead of two, and the pair collapses on a narrow viewport without the caller writing a rule.
- ✅ **Inside a dialog or a narrow column**, on one track, which is what the write a review
  dialog uses.

- ❌ **For an email sign up.** One address and a submit is **Newsletter form**, which is a real
  component and carries its own error and success states.
- ❌ **For a search box.** One field and an action, with its own suggestion behaviour, is
  **Search bar**.
- ❌ **As a layout box for anything that is not a form.** It renders a form element, so anything
  inside it is submittable content and a stray button in it submits.
`,anatomy:`
## Anatomy

**This is a container, and every part below is passed in.** The fields are the library's atoms,
each with its own page, its own criteria and its own gate.

| Part | Required? | Note |
|---|---|---|
| **The form**, a real \`<form>\` | required | So Enter submits from inside a field, and so a submit control is associated with its fields |
| **The grid** | required | One track, which is what this page draws. A host wide enough for a pair sets two tracks above the desktop edge, and below that edge every form is one track |
| **The requirement line** | conditional | The first child, wherever the form holds a field with a visible name that is required |
| **Fields** | required, and the count and types are the form's own | **Text field** and **Select field**, half a row each by default |
| **Full width parts** | as the content needs | A message box, a submit, a vendor embed, a standing sentence. Marked by name, never by position |
| **Error message, per field** | required | The field atoms carry the state and announce it. One control is wrong, and the message belongs to that control |
| **Submission error**, one line | conditional | The form could not be sent at all. It sits between the last field and the submit, in the same ink and at the same size as a field message |
| **Success confirmation** | conditional | A heading and a message, laid into the box the fields sized. No button, no link and no way back |
| **Consent checkbox** and **CAPTCHA** | optional | If a consent line lands it is the shared checkbox atom. A CAPTCHA is a vendor's embed, marked as an integration area |

- **Tokens own the look.** The pitch between fields is the form's own hook; the field height,
  radius, type and ink are each the atom's.
- **The form owns the content.** Which fields exist, what they are called, what they say when
  empty, what the submit control says, what the submission error says and what the confirmation
  says. The component ships none of those words and has no default for any of them.
- **The page owns the measure.** The form fills the box it is given. Contact Us boxes it at the
  site's 800px reading column; a dialog boxes it at the panel.

### Variants

**None a designer picks.** The column count is a fact about the host, not a choice about the form:
a page wide enough for a pair gets two tracks, a dialog or a narrow column gets one, and below the
desktop edge both draw one track anyway. It is set once where the form is mounted and it is the
component's only axis, which is why this page draws one column and offers no control for it.
`,guidance:`
## Behaviors

### States

- **The form has two states of its own, and idle is the third.** It has no hover, no focus and no
  disabled: those belong to a field or to the button.
- **The field's own states belong to the field.** Hover, focus, filled, disabled and error are
  documented once, on **Text field** and on **Select field**.
- **A submission error is not a field error, and the difference is the point.** A field error says
  one control is wrong and sits under that control. A submission error says the whole form could
  not be sent, with every field exactly as the visitor left it. Both can be on screen at once, and
  a form that could not be sent while three fields are also wrong shows four messages.
- **The submission error sits between the last field and the submit**, in the error ink, at the
  size and with the glyph every field message uses. **The submit stays enabled**, because trying
  again is the only thing a visitor can do about a send that failed.
- **The success confirmation replaces the fields in the same box.** A heading and a message, and
  the box keeps the height it had while the visitor was filling it in, so nothing below the form
  jumps up at the moment they acted.
- **The confirmation is a dead end.** No button, no link, no submit another and no way home. A
  visitor who wants the form back reloads the page.

### Across viewports

- **A host that asks for two tracks gets them above the desktop edge and one below it**, which is
  the base form's one piece of ratified viewport behaviour. A host that asks for one gets one at
  every width.
- **The pair that shares a row is any two consecutive short fields.** A first and a last name, a
  city and a state, a postal code and a country.
- **A message box, a submit and a vendor embed take the whole measure.** Half a row of message
  box is a box nobody can write in, and a submit floating in one of two tracks reads as an
  alignment accident.
- **Fields say which they are by name, not by position**, so adding a field or reordering the set
  cannot silently drop a box into half a row.
- **The collapse is at the same edge the footer un stacks its columns at**, so the library
  publishes no second opinion about where a two track layout stops working.

### Interactions

- **Enter submits from inside a field**, because the submit control is a real submit button
  inside a real form.
- **Tapping a field activates it**, with a caret and a visible focus ring.
- **Tapping a menu opens the system's own list.** It opens below the field, flips above it when
  there is no room, and never covers the field it belongs to.
- **The browser's own validation is off and cannot be turned on.** Its bubble is worded by nobody
  on this project and cannot be themed, so the agreed message will be the one a visitor reads.
  The agreed message has not been written yet.
- **A failed send announces itself.** The submission error is a live region, so it is read out the
  moment it appears, with the visitor's eyes still on the button they pressed.
- **A successful send announces itself too.** The confirmation message is a live region, and
  nothing in the confirmation can be focused, so nobody is dropped into a pane with no way out.
- **The answered form is not reachable.** On success the fields are hidden in place rather than
  removed: they hold the box open and they leave the tab order, so tabbing never lands in a form
  that has already been sent.

## Rules

- ✅ **Do** compose every field from its atom.
- ❌ **Don't** hand roll a field, a text area or a helper sentence. That is how two
  implementations of one control drift apart.

- ✅ **Do** put the message box, the submit and any vendor embed in a full width part.
- ❌ **Don't** leave them in half a row.

- ✅ **Do** let the page decide the measure.
- ❌ **Don't** widen a form to its container. A field 1200px wide reads as a mistake.

- ✅ **Do** give every field a visible label, and mark the required ones.
- ❌ **Don't** let a placeholder stand in for a label. A placeholder is an example, and it leaves
  as soon as somebody types.

- ✅ **Do** draw the requirement line whenever a required field has a visible name.
- ❌ **Don't** ship an asterisk with nothing explaining it.

- ❌ **Don't** theme a CAPTCHA. It stands in for a third party's own chrome.

- ✅ **Do** put the submission error between the last field and the submit control.
- ❌ **Don't** put it under the button, and don't disable the button while it is showing. Trying
  again is the only move a visitor has.

- ✅ **Do** use a submission error for a send that failed and a field error for a control that is
  wrong.
- ❌ **Don't** use one for the other. A form level line about a missing field sends a visitor
  hunting, and a field level line about a server sends them editing something that was fine.

- ❌ **Don't** put a button, a link or a submit another into the confirmation. It is a dead end,
  and a reload is what brings the form back.

### Content rules

- ✅ **Do** let the field set mirror the real form. The one on this page was measured.
- ❌ **Don't** invent a character limit for the message or for any label. The limits are owed by
  design.

## Open items

| Question | Owner |
|---|---|
| **The live form marks both sides and the library marks one.** A required field carries an asterisk; the real page also writes the word optional after the optional labels. The library declined the second half | Design |
| **The label is drawn one way and specified another.** Sentence case at body size in code, uppercase and tracked at caption size in the drawing and on the live page. It is the field atom's type recipe, so it is one decision for **Text field**, **Select field** and **Checkbox** at once | Design |
| **The wording is not written.** Both new states are drawn and neither one's words are agreed: what the submission error says, and what the confirmation's heading and message say. The page shows stand-ins | Design / Product |
| **What fires a submission error is the integration's, not the library's.** The form has no back end behind it, so nothing here decides when the line appears | Product |
| Which forms exist, contact and data requests and giveaways and professional among them, and whether each can be authored without a code change | Product |
`,spec:{elements:[{name:"Form element",requirement:"required",condition:"A real form, so Enter submits and the button is associated."},{name:"Grid",requirement:"required",condition:"Two tracks above the desktop edge, one below."},{name:"Requirement line",requirement:"conditional",condition:"While the form holds a required field with a visible name."},{name:"Fields",requirement:"required",condition:"The caller’s atoms. Half a row each by default."},{name:"Full width part",requirement:"conditional",condition:"For the message, the submit, a vendor embed or a standing sentence."},{name:"Error per field",requirement:"required",condition:"One control is wrong. The atom draws and announces it."},{name:"Submission error",requirement:"conditional",condition:"The form could not be sent. One line, before the submit."},{name:"Success confirmation",requirement:"conditional",condition:"Heading and message, in the box the fields sized. No control."}],authorability:[{name:"Fields",rule:"The caller’s children. The form renders no control of its own."},{name:"Column count",rule:"The host’s, set where the form is mounted. One in a narrow host, two on a wide page."},{name:"Full width",rule:"Marked by part name at the call site, never by position in the set."},{name:"Requirement line",rule:"Passed as the first child. Its words are content and a locale re-points them."},{name:"Submission",rule:"The caller’s handler. With none, the form prevents its own submission."},{name:"Submission error",rule:"The caller’s. A part placed before the submit, carrying the caller’s words."},{name:"Confirmation copy",rule:"The caller’s, and there is no default. A form with no words shows none."},{name:"Confirmation heading level",rule:"The page’s, 2 to 6. It defaults one level below a section’s own heading."},{name:"Validation",rule:"The browser’s is off and cannot be turned on. The agreed message is not written yet."},{name:"Measure",rule:"The page’s. The form fills the box it is given."},{name:"Actions row",rule:"The caller’s. One button at the start on a page, two at the end in a dialog."}],variants:[{label:"One column",props:{columns:1}}],statesMode:"linked",states:[{key:"default",name:"Default",story:"Default",annotation:"The fields as a visitor meets them, with the line that explains the required mark above them."},{key:"field-error",name:"Error, per field",story:"Error",annotation:"One message per wrong control, under the control. The optional field is untouched."},{key:"submit-error",name:"Submission error",story:"Submission error",annotation:"One line between the last field and the submit: the form could not be sent, and the button still can try."},{key:"success",name:"Success",story:"Success",annotation:"Heading and message in the box the fields sized, so the page does not move. Nothing in it can be clicked."}],render:W,interactions:["Enter submits from inside a field, because the submit control is a real submit button inside a real form.","The browser’s own validation is off on every instance and a caller cannot turn it on.","With no handler the form prevents its own submission rather than navigating.","Fields take the whole measure below the desktop edge, on both column counts.","A full width part is named at the call site, so reordering the fields never moves a box into half a row.","A submission error is announced when it appears, and the submit control stays enabled so a visitor can try again.","A submission error and a field error can show together: one says the send failed, the other says a control is wrong.","On success the confirmation replaces the fields in the same box, and nothing in it is focusable."],accessibility:[{label:"Form semantics",text:"A real form element, so a submit control is associated with its fields and Enter submits from inside one."},{label:"Required fields",text:"A required field draws an asterisk in its label and states the fact on its own control. The form carries the line explaining the mark, before the first field."},{label:"Reading order",text:"The grid never reorders: the tracks follow source order, so what a reader sees and what a screen reader reads are the same sequence."},{label:"Reflow",text:"One track below the desktop edge, so no control is narrower than the label above it."},{label:"No second tab stop",text:"The form adds no focusable element of its own, so wrapping fields in one never changes the tab order."},{label:"Failure is announced",text:"The submission error is a live region, so a visitor who cannot see it is told the form was not sent. Its glyph is decorative, so the failure is announced once."},{label:"Success is announced",text:"The confirmation carries a heading and its message is a live region, so the outcome reaches a visitor reading it and a visitor listening to it."},{label:"The answered form leaves the tab order",text:"On success the fields are hidden in place: they hold the box open and leave the accessibility tree, so a sent form cannot be tabbed into or read out."},{label:"Colour is never the only cue",text:"The submission error carries the danger glyph beside its text, so the line does not rely on its ink to read as a failure."}],openItems:[{question:"Does the measured page overturn the one sided requirement marker?",owner:"Design"},{question:"Uppercase and tracked labels, or sentence case at body size? One decision for all three field atoms.",owner:"Design"},{question:"What does the submission error say, and what does the confirmation say? Both states are drawn with stand-in words.",owner:"Design / Product"}]}}}};function W({columns:t}){return e.jsx("div",{style:{width:420,textAlign:"start"},children:e.jsx(d,{columns:t,children:e.jsx(b,{})})})}function u({submitError:t,status:n,errors:a,columns:l=1}){return e.jsx("div",{style:{maxWidth:420},children:e.jsx(d,{columns:l,status:n,successHeading:j,successMessage:C,children:e.jsx(b,{errors:a,submitError:t})})})}const f=["United States","Canada","United Kingdom","Australia"];function b({errors:t={},submitError:n}){return e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx(c,{label:"First name",required:!0,placeholder:"First Name",autoComplete:"given-name",error:t.firstName}),e.jsx(c,{label:"Telephone",type:"tel",placeholder:"Phone Number",autoComplete:"tel"}),e.jsx(N,{label:"Country",required:!0,defaultValue:f[0],error:t.country,children:f.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsx(c,{label:"Message",multiline:!0,required:!0,rows:5,placeholder:"Please enter your comments here.",error:t.message}),n&&e.jsx(I,{children:n}),e.jsx(M,{variant:"primary",type:"submit",children:"Submit"})]})}const s={name:"Default",argTypes:_,args:{submitError:"",status:"idle",successHeading:j,successMessage:C},parameters:{docs:{description:{story:`Four fields on one track: a required text field, an optional one, a menu and a text area. That is every control this component composes and both sides of the requirement marker, in the smallest set that shows them.

The asterisks are the fields' own, and the line above them is what explains the mark. Switch the **Brand** toolbar to re-theme the whole form by tokens alone: the field radius is the one to watch, since three brands round it far enough that a tall box would eat its own first line, and the field caps the curve rather than letting it.

**Press Submit.** Nothing happens, and that is the honest state of it: this form has no back end behind it, so no send can succeed and none can fail. Use the **Controls** panel to switch the two states the form itself has, a submission error and the confirmation, and the three stories below draw each one on its own.`}}},render:({submitError:t,status:n,successHeading:a,successMessage:l})=>e.jsx("div",{style:{maxWidth:420},children:e.jsx(d,{columns:1,status:n,successHeading:a,successMessage:l,children:e.jsx(b,{submitError:t})})})},o={name:"Error",parameters:{docs:{description:{story:`The same four fields with the error state on the three required ones. The optional telephone is untouched, which is the point: the state lands exactly where the requirement marker already promised it would, and never on a field a visitor was free to skip.

Each message is the field atom's own part, passed as a string, so the danger edge, the glyph and the announcement are the atom's and not this page's. **The wording is placeholder wording.** What fires an error, what each one says and where focus goes after a failed submit are undecided, and they are Open items above rather than sentences invented here.`}}},render:()=>e.jsx(u,{errors:{firstName:"Enter your first name.",country:"Choose a country.",message:"Enter a message."}})},r={name:"Submission error",parameters:{docs:{description:{story:`The form could not be sent, and every field is exactly as the visitor left it. **This is not the field error above it.** That one says one control is wrong and sits under that control; this one says the whole form did not go through, and it sits where a visitor is already looking, between the last field and the button they just pressed.

**The submit stays enabled.** Trying again is the only thing a visitor can do about a send that failed, so the control that tries is never the one taken away. The line reads the same ink, the same size and the same glyph as a field message, so a reader meets one error treatment on the form rather than two.

The two can coexist: switch the **submitError** control on the **Default** story and the field errors keep whatever they were carrying. **The wording is a stand-in.** What a visitor actually reads is an Open item above.`}}},render:()=>e.jsx(u,{submitError:H})},i={name:"Success",parameters:{docs:{description:{story:`The confirmation, in the box the fields sized. **The form is hidden in place rather than removed**, so the block keeps the height it had while the visitor was filling it in and nothing below the form jumps up at the moment they acted. It also leaves the tab order, so an answered form cannot be tabbed into or read out.

**There is no way back, on purpose.** No button, no link, no submit another and no way home. A visitor who wants the form again reloads the page. The heading names the outcome and the message is a live region, so the result reaches a visitor who is reading it and a visitor who is listening to it.

**The words are stand-ins and the component ships none of them.** The heading and the message are the form's to write, the same way its labels and its submit wording are.`}}},render:()=>e.jsx(u,{status:"success"})},h={name:"The required line, on both planes",parameters:{docs:{description:{story:`The line that explains the asterisk, on the page ground and on a dark band. **Only the ink moves.** The type, the size and the spacing are the same line; on a dark band it reads the second inverse text level, which is what the muted role is on paper. Measured on all 21 brands against each brand's own dark ground: 4.66:1 at worst and 17.06:1 at best, against the 4.5:1 a reader needs of text they have to act on. Before this axis existed the line had one ink for both grounds, and on the dark side 17 of the 21 brands read it under that floor.

**The host declares the plane, the line never guesses it.** It is the same boolean the field, the checkbox, the button and the link already take. No shipped band draws this line on a dark ground today: the newsletter band draws no line at all, because it hides its one field's label and an explanation of an invisible mark explains nothing. The axis is here for the next dark-band form, so it does not have to paint the line from outside.`}}},render:()=>e.jsxs("div",{style:{display:"grid",gap:0},children:[e.jsx("div",{style:{background:"var(--color-bg-page)",padding:"var(--space-inset-base)"},children:e.jsx(m,{})}),e.jsx("div",{style:{background:"var(--color-bg-inverse)",padding:"var(--space-inset-base)"},children:e.jsx(m,{inverse:!0})})]})};var p,g,w;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Default',
  argTypes: FORM_ARG_TYPES,
  args: {
    submitError: '',
    status: 'idle',
    successHeading: DEMO_SUCCESS_HEADING,
    successMessage: DEMO_SUCCESS_MESSAGE
  },
  parameters: {
    docs: {
      description: {
        story: 'Four fields on one track: a required text field, an optional one, a menu and a text ' + 'area. That is every control this component composes and both sides of the requirement ' + 'marker, in the smallest set that shows them.\\n\\n' + 'The asterisks are the fields\\' own, and the line above them is what explains the mark. ' + 'Switch the **Brand** toolbar to re-theme the whole form by tokens alone: the field ' + 'radius is the one to watch, since three brands round it far enough that a tall box ' + 'would eat its own first line, and the field caps the curve rather than letting it.\\n\\n' + '**Press Submit.** Nothing happens, and that is the honest state of it: this form has ' + 'no back end behind it, so no send can succeed and none can fail. Use the **Controls** ' + 'panel to switch the two states the form itself has, a submission error and the ' + 'confirmation, and the three stories below draw each one on its own.'
      }
    }
  },
  render: ({
    submitError,
    status,
    successHeading,
    successMessage
  }) => <div style={{
    maxWidth: 420
  }}>
      <Form columns={1} status={status} successHeading={successHeading} successMessage={successMessage}>
        <BaseFields submitError={submitError} />
      </Form>
    </div>
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var y,v,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Error',
  parameters: {
    docs: {
      description: {
        story: 'The same four fields with the error state on the three required ones. The optional ' + 'telephone is untouched, which is the point: the state lands exactly where the ' + 'requirement marker already promised it would, and never on a field a visitor was ' + 'free to skip.\\n\\n' + 'Each message is the field atom\\'s own part, passed as a string, so the danger edge, ' + 'the glyph and the announcement are the atom\\'s and not this page\\'s. **The wording is ' + 'placeholder wording.** What fires an error, what each one says and where focus goes ' + 'after a failed submit are undecided, and they are Open items above rather than ' + 'sentences invented here.'
      }
    }
  },
  render: () => <DemoForm errors={{
    firstName: 'Enter your first name.',
    country: 'Choose a country.',
    message: 'Enter a message.'
  }} />
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var k,x,S;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Submission error',
  parameters: {
    docs: {
      description: {
        story: 'The form could not be sent, and every field is exactly as the visitor left it. **This ' + 'is not the field error above it.** That one says one control is wrong and sits under ' + 'that control; this one says the whole form did not go through, and it sits where a ' + 'visitor is already looking, between the last field and the button they just ' + 'pressed.\\n\\n' + '**The submit stays enabled.** Trying again is the only thing a visitor can do about a ' + 'send that failed, so the control that tries is never the one taken away. The line ' + 'reads the same ink, the same size and the same glyph as a field message, so a reader ' + 'meets one error treatment on the form rather than two.\\n\\n' + 'The two can coexist: switch the **submitError** control on the **Default** story and ' + 'the field errors keep whatever they were carrying. **The wording is a stand-in.** ' + 'What a visitor actually reads is an Open item above.'
      }
    }
  },
  render: () => <DemoForm submitError={DEMO_SUBMIT_ERROR} />
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var E,q,A;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Success',
  parameters: {
    docs: {
      description: {
        story: 'The confirmation, in the box the fields sized. **The form is hidden in place rather ' + 'than removed**, so the block keeps the height it had while the visitor was filling it ' + 'in and nothing below the form jumps up at the moment they acted. It also leaves the ' + 'tab order, so an answered form cannot be tabbed into or read out.\\n\\n' + '**There is no way back, on purpose.** No button, no link, no submit another and no ' + 'way home. A visitor who wants the form again reloads the page. The heading names the ' + 'outcome and the message is a live region, so the result reaches a visitor who is ' + 'reading it and a visitor who is listening to it.\\n\\n' + '**The words are stand-ins and the component ships none of them.** The heading and the ' + 'message are the form\\'s to write, the same way its labels and its submit wording are.'
      }
    }
  },
  render: () => <DemoForm status="success" />
}`,...(A=(q=i.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var D,O,F;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'The required line, on both planes',
  parameters: {
    docs: {
      description: {
        story: 'The line that explains the asterisk, on the page ground and on a dark band. **Only the ink ' + 'moves.** The type, the size and the spacing are the same line; on a dark band it reads ' + 'the second inverse text level, which is what the muted role is on paper. Measured on all ' + '21 brands against each brand\\'s own dark ground: 4.66:1 at worst and 17.06:1 at best, ' + 'against the 4.5:1 a reader needs of text they have to act on. Before this axis existed ' + 'the line had one ink for both grounds, and on the dark side 17 of the 21 brands read it ' + 'under that floor.\\n\\n' + '**The host declares the plane, the line never guesses it.** It is the same boolean the ' + 'field, the checkbox, the button and the link already take. No shipped band draws this ' + 'line on a dark ground today: the newsletter band draws no line at all, because it hides ' + 'its one field\\'s label and an explanation of an invisible mark explains nothing. The axis ' + 'is here for the next dark-band form, so it does not have to paint the line from outside.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 0
  }}>
      <div style={{
      background: 'var(--color-bg-page)',
      padding: 'var(--space-inset-base)'
    }}>
        <FormRequirementNote />
      </div>
      <div style={{
      background: 'var(--color-bg-inverse)',
      padding: 'var(--space-inset-base)'
    }}>
        <FormRequirementNote inverse />
      </div>
    </div>
}`,...(F=(O=h.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const oe=["Playground","ErrorState","SubmissionError","Success","RequiredLinePlanes"];export{o as ErrorState,s as Playground,h as RequiredLinePlanes,r as SubmissionError,i as Success,oe as __namedExportsOrder,se as default};
