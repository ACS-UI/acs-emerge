import{j as e,S as y,g as v}from"./iframe-6dx3hp_4.js";import{S as i}from"./Select-DBrm7KPu.js";import{a as T}from"./annotationPage-eYx--AWZ.js";import{D as l,a as k}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./FieldRequirement-Dn5H0DsY.js";import"./Icon-BihOhSWB.js";import"./MenuItem-bBgP9Lwo.js";import"./newTabMark-TI50-QeA.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";const S={inverse:{name:"Inverse",control:"boolean",description:"Light label and error text for a dark surrounding ground. The field stays light."},state:{...k("Default"),name:"State",...l({labels:{default:"Empty",filled:"Filled",open:"Open",error:"Error",disabled:"Disabled"},options:["default","filled","open","error","disabled"]}),description:"Which state to draw. **Filled** is a chosen value; it reads the same control-edge border the field already rests on, so choosing a row does not move the border, the same as the text field. **Open** is new, because the list belongs to this design system now, so a story can finally show it. Focus is not in this list: Tab into the field to see the ring, and hover it with a mouse to see the border change."},label:{name:"Label",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Preferred shade"}},description:"The control's name. Always the caller's, and never optional."},labelHidden:{name:"Hide the label",...l({labels:{false:"Visible",true:"Hidden"},options:[!1,!0]}),table:{category:"Content",type:{summary:'false | true | "mobile"'},defaultValue:{summary:"false"}},description:"Hides the field's name **from the eye only**. The label is still a real `<label for>` and still the control's accessible name, so a screen reader always hears it, never `display: none`, which would take the name out of the accessibility tree with the pixels (WCAG 3.3.2). **Labels should stay visible wherever they can:** the reviewed accessibility list asks for a persistent visible label, and every use of this is a departure from that line taken on purpose. `Hidden on a phone only` is the same switch scoped to the mobile breakpoint, which is what the filter panel's sort field uses."},error:{control:!1,table:{disable:!0}},id:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},disabled:{control:!1,table:{disable:!0}},defaultOpen:{control:!1,table:{disable:!0}}},x={state:"default",label:"Preferred shade",labelHidden:!1,inverse:!1},w=e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"",children:"Choose a shade"}),e.jsx("option",{value:"ivory",children:"Ivory"}),e.jsx("option",{value:"buff",children:"Buff"}),e.jsx("option",{value:"natural-tan",children:"Natural Tan"}),e.jsx("option",{value:"cappuccino",children:"Cappuccino"})]});function D({state:t,label:o,labelHidden:s,inverse:a}){return e.jsx("div",{style:{display:"flex",alignItems:"flex-start",minHeight:260,background:a?"var(--color-bg-inverse)":void 0},children:e.jsx("div",{style:{width:280},children:e.jsx(i,{label:o,labelHidden:s,inverse:a,defaultValue:t==="filled"?"ivory":void 0,defaultOpen:t==="open",disabled:t==="disabled",error:t==="error"?"Select a shade to continue.":void 0,children:w},`${t}-${s}`)})})}const H={title:"Atoms/Select field",component:i,tags:["autodocs"],parameters:{docs:{page:T("Select"),toc:{headingSelector:"h2"},description:{component:"A labelled drop-down: pick one value from a list the screen supplies."}},componentDoc:{usage:`
## When to use

- ✅ **One value out of a list the screen already knows**, like a shade, a size, a sort order
  or a country.
- ✅ **When showing every choice at once would crowd the screen.** A drop-down hides all but
  the chosen one.
- ✅ **When the choice needs a name on screen.** The label is always visible here.

- ❌ **A choice the shopper wants to compare**, like sizes with prices or subscription plans.
  Those are **Option selector** and **Option chip**, which show every choice at once.
- ❌ **Anything typed.** That is **Text field**.
- ❌ **More than one value at once.** This picks one. Independent yes or no choices are
  **Checkbox**, which is what the filter panel uses.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Label** | **always required** | Never dropped. Unlike the text field, there is no hidden-label option here |
| **Field** | required | The closed control, showing the chosen value from the leading edge |
| **Chevron** | required | Decorative and hidden from screen readers: the control already announces itself as a drop-down. It turns over when the list is open |
| **List** | required | The open list of choices. It is a **Popover**, this library's own floating surface, not the operating system's menu |
| **Row** | required | One per choice. The chosen row is marked, the row the keyboard is on is highlighted, and those are two different things |
| **Error** | optional | A message under the field, tied to it, shown only when the screen puts one there |

- **Tokens own the look.** Height, inset, border, radius, type and colour, in the field and in
  the list alike.
- **The caller owns the words.** The label, the choices and the error message.

### Variants

**There are none.** One appearance. What changes is the state.

**The list is this design system's, not the platform's**, and that is the fact that matters most
on this page.

- A native browser drop-down is free, and the platform's list is excellent.
- What it trades away is only visible once it is seen: on a field low on a long page, the browser
  draws its list **straight over the field you are choosing for**. Nothing here can reach it,
  because it is not this system's list.
- So the list is ours. It opens below the field, and above it when there is no room below,
  measured against the real viewport and measured again while you scroll.
- It is themed on all 21 brands, and every behaviour the browser would hand over for free is
  written down and checked here instead.

**A hidden label is not offered here**, unlike the text field. Nothing asks for one, and a
drop-down with no visible name is much harder to place meaningfully than a search box is.
`,guidance:`
## Behaviors

### States

- **Default.** The resting control with no selected value, showing a "Choose a shade" style first
  option when nothing is chosen yet.
- **Filled**, which the MASTER doc calls **Selected**. A chosen value. The component derives it
  from its real value, with no visual-only prop. **There is no edge step.** The field rests on the
  control outline from the first paint, so choosing a row moves nothing. The text field and the
  search field read the same pair, so the three fields agree about what a field looks like empty
  and what it looks like once it holds something: identical.
- **Hover.** The border changes.
- **Focus.** The standard ring, and it carries more weight here than usual: the keyboard never
  leaves the field while the list is open, so this ring is the only thing on screen saying
  where the keyboard is.
- **Open.** The list appears below the field, the chevron turns over, and the field reports
  that it is expanded. It sits **flush against the field**, with no gap, so the two read as one
  surface.
- **Open, flipped.** The same list above the field instead of below it. Nobody chooses it: the
  component measures the viewport when it opens, and again while you scroll, and puts the list
  on the side that has room. It never covers the field you are choosing for.
- **Long list.** Past six rows the list scrolls inside itself rather than growing off the
  screen.
- **Error.** The screen supplies the sentence. The component draws the state, announces it, and
  ties it to the field. **The state moves three things and none of them is colour alone:** the
  field's ring doubles in thickness, the message carries the library's danger mark, and the
  message is set one rung larger than a caption. The text field draws the same three, from the
  same token and the same type style.
- **Disabled, real but not drawn.** The control genuinely disables and leaves the tab order,
  and nothing about it looks different. The stylesheet has no rule for the state, the same gap
  the text field carries. It is in the grid at the bottom of this page, and in Open items.

**The flip is up and down only.** A list running off the left or right edge is a separate
problem and is not solved here.

### Interactions

- **Click or tap the field to open the list, click it again to close it.** Clicking anywhere
  else closes it too.
- **The keyboard, in full.** Down or Up opens the list and then walks it. Home and End jump to
  the ends. Typing letters jumps to the first choice that starts with them, and typing more
  letters keeps narrowing rather than starting over. Enter or Space chooses. Escape closes and
  puts the cursor back on the field. Tab closes and carries on to the next control.
- **The keyboard never goes inside the list.** It stays on the field, and the field says which
  row it is on. That is why nothing gets stranded behind an open list, and why nothing here
  traps you.
- **Opening marks the choice already made, and the site selector's menu marks nothing.** This is
  a field carrying a value, so it opens with the current choice ringed and the cursor there.
  **Dropdown** is a small panel of links with no value to point at, so it opens with nothing
  marked and Tab walks the rows. The two look different on purpose: what each one is decides it.
- **Rows the list has disabled are skipped**, not merely refused. Landing on a row that will
  not answer is a dead end with no explanation.
- **The pointer and the keyboard share one highlight.** Moving the mouse over a row moves the
  keyboard's position to it, so Enter always chooses the row you are looking at.
- **The label focuses the field.** It is a real label bound to a real id, one per instance.
- **Choosing is still the screen's business.** The component holds a value only when the screen
  does not hand it one, and it reports every change either way.

## Rules

- ✅ **Do** write the error as an instruction: "Select a shade to continue".
- ❌ **Don't** write a verdict like "Required". The person reading it is trying to finish
  something, and a verdict does not tell them how.

- ❌ **Don't** hide the label. There is no supported way to, and no brief asks for one.
- ❌ **Don't** use the first option as the label. "Choose a shade" is a legitimate empty state,
  not the field's name.

- ✅ **Do** show a required-field error yourself.
- ❌ **Don't** expect the browser to refuse an empty required field. It cannot any more: the
  value rides on a hidden field, and browsers do not validate those.

- ✅ **Do** keep lists short enough to read. Past six rows the list scrolls, which works, but a
  list somebody has to scroll to search is usually a search box wearing a drop-down's clothes.
- ❌ **Don't** reach for this when the shopper needs to compare the choices. That is what the
  option components are for.

### Content rules

- ✅ **Do** write the label at the call site. There is no default.
- ✅ **Do** let the choices be content. This component never supplies a list.
- ❌ **Don't** invent a character limit. The MASTER doc sets three: 42 characters for the
  instruction, 40 and one line for a selection value, 40 and one line for the error message. The
  component does not enforce them; they are an authoring rule for the screen.

## Open items

| Question | Owner |
|---|---|
| **Touch is the open one.** On a phone a native drop-down opens the platform's own wheel, a genuinely excellent piece of UI that no design system out-builds, and the one a thumb already knows. The system's answer is a custom list, and custom is what ships. Whether a phone should get the platform's list back below some width is a real question, left open rather than quietly answered | Design |
| **Disabled is unstyled.** The state works and looks identical to the default, the same gap the text field carries | Design |
| **Grouped choices are not supported.** A grouped list still shows every choice, but the group names are dropped. No screen asks for groups today | Design |
| **A list running off the left or right edge is not handled.** The flip is up and down only | Design / DS team |
| **Six rows, then scroll.** Six is a convention borrowed from native drop-downs, not a number anybody ratified | Design |
`,spec:{elements:[{name:"Label",requirement:"required"},{name:"Field, the trigger",requirement:"required"},{name:"Chevron",requirement:"required"},{name:"List",requirement:"required"},{name:"Row",requirement:"required"},{name:"Value carrier",requirement:"required"},{name:"Error",requirement:"conditional",condition:"When the screen passes one"}],authorability:[{name:"Label",rule:"The author writes it. There is no default and no hidden-label option."},{name:"Choices",rule:"The screen supplies the list. The component never invents an option."},{name:"Empty first row",rule:'A "Choose a shade" row is a legitimate empty state. It is never the name of the field.'},{name:"Chosen value",rule:"The screen owns it. The component holds one only when the screen hands it none."},{name:"Error message",rule:"The screen writes it, as an instruction to follow and never as a verdict."},{name:"List length",rule:"Past six rows the list scrolls inside itself. The doc caps a choice at 40 characters."},{name:"One value",rule:"A field picks exactly one option. More than one value per field is not supported."},{name:"Look",rule:"Type, colour, height, radius and the row density all come from tokens."}],variants:[{label:"Nothing chosen",props:{chosen:""}},{label:"Something chosen",props:{chosen:"filled"}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"},{key:"error",name:"Error",props:{error:!0}},{key:"disabled",name:"Disabled",props:{disabled:!0}}],render:g,interactions:["Click the field to open the list. Click it again, or anywhere outside, to close it unchanged.","Down or Up opens the list and then walks it. Home and End jump to the ends.","Typing letters jumps to the first match, and more letters keep narrowing for half a second.","Enter or Space chooses. Escape closes and returns focus. Tab closes and moves to the next control.","Focus never enters the list. It stays on the field, which points at the row the keyboard is on.","Arrows skip rows the list has disabled, and the pointer moves the same single highlight.","The list opens flush below the field and flips above when the room runs out, remeasured on scroll.","A chosen value draws the field edge on the control border. Resting, it is the lighter field border.","Every change is reported. The component holds a value only when the screen hands it none."],accessibility:[{label:"Keyboard",text:"Down or Up opens and walks the list, Home and End jump to the ends, letters narrow, Enter or Space chooses, Escape closes."},{label:"Focus containment",text:"The trigger keeps focus the whole time the list is open, so nothing is stranded behind the panel."},{label:"Accessible name",text:"The label names the trigger through a per-instance id, and the chevron is hidden so it never names the field."},{label:"Expanded state",text:"The trigger reports whether the list is open, and the chosen row is announced as the selected option."},{label:"Error",text:"An error is announced when it appears and is tied to the field, so it is read together with the control. It is also a thicker border and a mark."},{label:"Contrast",text:"The chosen value, the chevron, the field border and the row highlight clear their thresholds in every brand."},{label:"Touch",text:"The field and every row are at least 44px tall, and a list that flips still fits at 375px."},{label:"Disabled",text:"A disabled field leaves the tab order and is announced as disabled, whatever it looks like."},{label:"Right to left",text:"Placement is written in logical properties, so the field, the chevron and the list mirror in a right-to-left locale."}],openItems:[{question:"The doc asks for a label that is always visible. Hide label ships here as an exception.",owner:"Design"},{question:"Should a phone get the platform drop-down back below some width? Custom ships on every viewport today.",owner:"Design"},{question:"Should grouped choices be supported? A grouped list keeps every option and drops the group name.",owner:"Design"},{question:"What should a list do when it runs off the left or the right edge? The flip is up and down only.",owner:"Design / DS team"},{question:"Is six rows the right point to start scrolling? Six is borrowed from native drop-downs, not ratified.",owner:"Design"}]}}}},n={name:"Default",args:x,argTypes:S,render:t=>e.jsx(D,{...t}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"The drop-down with every option a designer can change. Switch **State** to Filled to show a chosen value; the edge does not move, because the field already rests on the control outline. Switch **State** to Open and the list appears, themed rather than the operating system's. Switch it to Error and the message appears, tied to the field so a screen reader reads the two together. Switch it to Disabled and notice **nothing looks different**: a real gap, not a rendering fault. Then put the cursor in the field and use it without the mouse: Down opens, arrows walk, letters jump, Enter chooses, Escape closes. Change the **Brand** toolbar and the field *and the list* re-theme across all 21 brands."}}}},E=e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"",children:"Choose a size"}),e.jsx("option",{value:"30ml",children:"30 ml"}),e.jsx("option",{value:"50ml",children:"50 ml"})]}),A=[{key:"placeholder",label:"Nothing chosen",props:{chosen:""},dimension:"condition"},{key:"chosen",label:"Something chosen",props:{chosen:"filled"},dimension:"condition"},{key:"short",label:"Short list, something chosen",props:{chosen:"filled",short:!0},dimension:"condition"}],h=[{key:"default",label:"Default"},{key:"hover",label:"Hover",pseudo:"hover"},{key:"focus",label:"Focus",pseudo:"focusVisible"},{key:"error",label:"Error",props:{error:!0},dimension:"state"},{key:"disabled",label:"Disabled",props:{disabled:!0},dimension:"state"}];function g({chosen:t,short:o,error:s,disabled:a}){const b=t==="filled"?o?"30ml":"natural-tan":t;return e.jsx("div",{style:{width:220,textAlign:"start"},children:e.jsx(i,{label:o?"Size":"Preferred shade",defaultValue:b,disabled:a,error:s?"Select a shade to continue.":void 0,children:o?E:w})})}const r={name:"State matrix",parameters:{themeShellPadding:!1,pseudo:v(h,{pseudoTarget:".ds-select__control"}),docs:{description:{story:"The CLOSED field against every state, in one grid. **Hover** and **Focus** are frozen with storybook-addon-pseudo-states; **Error** and **Disabled** are real props. Read the second row against the first down the **Default** column: the edge is darker once something is chosen, because the field rests on the light field border and steps to the control outline when it holds a value. **Filled is not a column**, because it is not something a caller sets: a field holding a value IS filled, so the row data decides it and every column shows what a filled field looks like in that state. The text field matrix draws the same rows in the same order. Read the **Disabled** column against the **Default** one: the whole field dims and the pointer says so. It used to be identical to Default, which this page recorded as a real gap; the gap is closed and this column is where a reader sees it. **Open and flipped are not columns here**, and that is a room problem rather than a statement: four open lists in one row of cells overlap each other. Set the cover story's **State** control to Open to draw the list, which is also the answer to what this grid used to say, that the open list could never be shown at all because it belonged to the operating system. This is a QA tool, not themed product UI, which is why its own chrome stays neutral regardless of brand."}}},render:()=>e.jsx(y,{rows:A,columns:h,render:g})};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Default',
  args: SELECT_DEFAULT_ARGS,
  argTypes: SELECT_ARG_TYPES,
  render: args => <ConfigurableSelect {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The drop-down with every option a designer can change. Switch **State** to Filled to ' + 'show a chosen value; the edge does not move, because the field already rests on the ' + 'control outline. Switch **State** to Open and ' + 'the list appears, themed rather than the operating system\\'s. ' + 'Switch it to Error and the message appears, tied to the field so a ' + 'screen reader reads the two together. Switch it to Disabled and notice **nothing ' + 'looks different**: a real gap, not a rendering fault. Then put the cursor in the ' + 'field and use it without the mouse: Down opens, arrows walk, letters jump, Enter ' + 'chooses, Escape closes. Change the **Brand** toolbar and the field *and the list* ' + 're-theme across all 21 brands.'
      }
    }
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'State matrix',
  parameters: {
    themeShellPadding: false,
    pseudo: getStateMatrixPseudoParameters(STATE_MATRIX_COLUMNS, {
      pseudoTarget: '.ds-select__control'
    }),
    docs: {
      description: {
        story: 'The CLOSED field against every state, in one grid. **Hover** and **Focus** are frozen ' + 'with storybook-addon-pseudo-states; **Error** and **Disabled** are real props. Read the ' + 'second row against the first down the **Default** column: the edge is darker once ' + 'something is chosen, because the field rests on the light field border and steps to the ' + 'control outline when it holds a value. **Filled is not a column**, because it is not ' + 'something a caller sets: a field holding a value IS filled, so the row data decides it ' + 'and every column shows what a filled field looks like in that state. The text field ' + 'matrix draws the same rows in the same order. Read ' + 'the **Disabled** column against the **Default** one: the whole field dims and the pointer ' + 'says so. It used to be identical to Default, which this page recorded as a real gap; the ' + 'gap is closed and this column is where a reader sees it. **Open and flipped are ' + 'not columns here**, and that is a room problem rather than a statement: four open ' + 'lists in one row of cells overlap each other. Set the cover story\\'s **State** ' + 'control to Open to draw the list, which is also the answer to what this grid used ' + 'to say, that the open list could never be shown at all because it belonged to the ' + 'operating system. This is a ' + 'QA tool, not themed product UI, which is why its own chrome stays neutral ' + 'regardless of brand.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={STATE_MATRIX_ROWS} columns={STATE_MATRIX_COLUMNS} render={renderStateMatrixCell} />
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const N=["Playground","StateMatrix"];export{n as Playground,r as StateMatrix,N as __namedExportsOrder,H as default};
