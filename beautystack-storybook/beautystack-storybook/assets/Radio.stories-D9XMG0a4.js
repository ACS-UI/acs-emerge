import{r,j as e,S as E,g as q}from"./iframe-6dx3hp_4.js";import{B as _}from"./Button-CiZyClsp.js";import{C as Z}from"./ControlIndicator-DEJX7FyE.js";import{a as J}from"./FieldRequirement-Dn5H0DsY.js";import{I as ee}from"./Icon-BihOhSWB.js";import{a as te}from"./annotationPage-eYx--AWZ.js";import{c as ae,a as j,D as oe}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Loading-DyIAIYoE.js";import"./newTabMark-TI50-QeA.js";/* empty css               */const V=r.createContext(null),$=r.createContext(null);function i({label:t,labelHidden:o=!1,inverse:a=!1,name:n,id:h,required:v,"aria-invalid":y,"aria-describedby":k,...c}){const x=r.useId(),d=h??x,l=r.useContext(V),T=n??l??void 0,s=r.useContext($),p=v??(s==null?void 0:s.required)??void 0,D=y??(s==null?void 0:s.invalid)??void 0,u=[...new Set([k,s==null?void 0:s.describedBy].filter(Boolean).flatMap(K=>K.split(/\s+/)).filter(Boolean))],C=u.length?u.join(" "):void 0,Q=["ds-radio",o?"ds-radio--label-hidden":"",a?"ds-radio--inverse":""].filter(Boolean).join(" ");return e.jsxs("label",{className:Q,htmlFor:d,children:[e.jsx("input",{className:"ds-radio__input",type:"radio",id:d,name:T,required:p,"aria-invalid":D,"aria-describedby":C,...c}),e.jsx(Z,{shape:"radio",inverse:a,className:"ds-radio__control",markClassName:"ds-radio__mark"}),e.jsx("span",{className:"ds-radio__label-text",children:t})]})}i.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{labelHidden:{defaultValue:{value:"false",computed:!1},required:!1},inverse:{defaultValue:{value:"false",computed:!1},required:!1}}};function A({legend:t,legendHidden:o=!1,error:a,required:n=!1,name:h,id:v,className:y,children:k,...c}){const x=r.useId(),d=v??x,l=`${d}-error`,T=h??`${d}-options`,s={required:n||void 0,invalid:a?"true":void 0,describedBy:a?l:void 0},p=[...new Set([c["aria-describedby"],a?l:void 0].filter(Boolean).flatMap(C=>C.split(/\s+/)).filter(Boolean))],D=p.length?p.join(" "):void 0,u=["ds-radio-group",o?"ds-radio-group--legend-hidden":"",y].filter(Boolean).join(" ");return e.jsxs("fieldset",{className:u,id:d,"aria-invalid":a?"true":void 0,...c,"aria-describedby":D,children:[e.jsxs("legend",{className:"ds-radio-group__legend",children:[t,e.jsx(J,{required:n})]}),a&&e.jsxs("span",{className:"ds-radio-group__error",id:l,role:"alert",children:[e.jsx(ee,{name:"circle-x",size:"sm",className:"ds-radio-group__error-icon"}),a]}),e.jsx(V.Provider,{value:T,children:e.jsx($.Provider,{value:s,children:e.jsx("div",{className:"ds-radio-group__options",children:k})})})]})}A.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{legendHidden:{defaultValue:{value:"false",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1}}};const ne={state:{...j("Default"),name:"State",...oe({labels:{default:"Default",checked:"Chosen",disabled:"Disabled",disabledChecked:"Disabled + chosen"},options:["default","checked","disabled","disabledChecked"]}),description:"Which state to draw. Focus is not in this list: it only appears on keyboard focus, so Tab to the control to see the ring move onto the drawn circle."},label:{name:"Label",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Every 2 months"}},description:"The caller’s copy. The radio never supplies its own label."},labelHidden:{...j("Off"),name:"Hide the label",control:"boolean",description:"Clip the label out of sight while it stays the control’s accessible name. Only for places where a visible name already exists nearby, like a table row header or a group legend."},inverse:{...ae("Off"),name:"Inverse",description:"Turn this on when the option lands on the dark band. The circle takes the ground itself with a white edge, the chosen dot sits in a paper-coloured circle, and the option’s words take the ground’s full ink. The preview drops onto a dark panel while it is on, because drawing an inverse control on the page colour would document it as broken."},defaultChecked:{control:!1,table:{disable:!0}},checked:{control:!1,table:{disable:!0}},disabled:{control:!1,table:{disable:!0}},id:{control:!1,table:{disable:!0}},name:{control:!1,table:{disable:!0}},value:{control:!1,table:{disable:!0}},onChange:{control:!1,table:{disable:!0}}},se={state:"default",label:"Every 2 months",labelHidden:!1,inverse:!1},Y={background:"var(--color-bg-inverse)",padding:"var(--size-300)",borderRadius:"var(--radius-card, 0)"};function re({state:t,label:o,labelHidden:a,inverse:n}){const h=e.jsx("div",{style:{maxWidth:320},children:e.jsx(i,{label:o,labelHidden:a,inverse:n,name:"playground-radio",value:"playground",defaultChecked:t==="checked"||t==="disabledChecked",disabled:t==="disabled"||t==="disabledChecked"},`${t}-${a}-${n}`)});return n?e.jsx("div",{style:Y,children:h}):h}let R=0;function I({defaultChecked:t,disabled:o,inverse:a=!1}){R+=1;const n=e.jsx(i,{name:`radio-cell-${R}`,value:"cell",label:"Every 2 months",defaultChecked:t,disabled:o,inverse:a},R);return a?e.jsx("div",{style:Y,children:n}):n}const ie=t=>I({...t,inverse:!0}),S={margin:0,marginBottom:"var(--size-200)",fontSize:"var(--font-size-body)",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase",color:"var(--color-text-primary)",fontFamily:"var(--font-family-body)"},ye={title:"Atoms/Radio",component:i,tags:["autodocs"],parameters:{docs:{page:te("Radio"),toc:{headingSelector:"h2"},description:{component:'One choice out of two or more, with every option on screen at once. A native `<input type="radio">` is clipped out of sight behind a drawn circle and a dot that carry the visible styling; give two or more of them the same group name and the browser makes them one group, so exactly one can be chosen at a time.'}},componentDoc:{usage:`
## When to use

- ✅ **Exactly one answer out of two or more**, with every option on screen at once. Delivery
  frequency, purchase option, one shade per row.
- ✅ **The bare circle inside something else**, like an option chip that needs a mark of its
  own. That is the reason this control exists on its own.
- ✅ **When the options should be readable without opening anything.** All of them are visible,
  all of the time.

- ❌ **More than one answer can be true at once.** That is **Checkbox**. Same family, different
  promise, and the shape is how a shopper tells them apart.
- ❌ **One thing to turn on or off.** That is a checkbox or a button, never a lone radio.
- ❌ **Picking one value from a long list.** That is **Select field**, which keeps the list closed
  until you open it.
- ❌ **Choosing a shade or a size on a product.** Those are **Swatch** and **Option selector**.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Root**, the \`<label>\` | required | The full hit area. Clicking anywhere inside it, not only the circle, chooses this option |
| **Native \`<input type="radio">\`** | required, visually hidden | The real control: it takes the focus, holds the value and belongs to the group. Hidden by clipping, never \`display: none\`, or the arrow keys go with it |
| **The drawn circle** | required | Decoration painted over the input, and hidden from screen readers so nothing is announced twice |
| **The dot** | required, visible only when chosen | Revealed with a full flip from invisible to visible, never a fade |
| **The label text** | always required, the component never supplies it | The only source of the radio's accessible name. Hiding the label clips the pixels, never the name |

- **The circle a shopper sees is not the control.** The hidden input beside it takes the focus,
  gives a form its value, and is what a screen reader announces. Same arrangement as the
  checkbox, on purpose.
- **Tokens own the look.** Shape, size and colour.
- **The caller owns the words.** The label. There is no third category.

### The circle and the box are one drawing

One shared part draws the checkbox's box and the radio's circle, so the two controls can never
drift into looking like two different design systems. The ground, the edge, the mark colour, the
transition and the focus ring are literally the same declarations, the hover is one ratified
decision written in both stylesheets, and the label under each reads the same typography recipe.
**The corner and the mark are the one thing they do not share.**

- **The radio is fully round on every brand.** The shape is the promise: a circle means
  "exactly one".
- **The checkbox follows its brand**, from a sharp square to a soft one.
- **Each corner is named at the component level**, so either can be re-shaped without touching
  the other.

### The group is the point

A single radio is almost always a mistake. A radio says "exactly one of these", and one of
these is not a choice: a lone radio a shopper can turn on and never off is the classic version
of the bug.

Every radio in a set shares one **group name**, and three things arrive from the browser at
once, for free:

- **Picking one un-picks the others.** No state juggling in the screen around it.
- **The whole group is one tab stop.** Tab enters it, Tab leaves it. It does not stop on every
  option, the way a row of checkboxes does.
- **The arrow keys move the choice inside it.** Up and Left step back, Down and Right step
  forward, and it wraps around at both ends.

That last one is the entire reason this control is a native input rather than a styled circle,
and it breaks silently the moment somebody hides the input with \`display: none\`.

**The group name is the group's, not something each option repeats.** **Radio group** publishes
one name for the set it wraps, and every radio inside reads it, so a set that allows two answers
cannot be composed by forgetting a prop. An author who needs a particular name, because a form
posts under it, passes it to the group; an author who does not gets one. The group also wraps the
set in a real \`fieldset\` with a \`legend\` and carries the visible name, the required marker and
the set's error, shown in the **Group** story. The atom draws no group shell of its own.

### Which edge the circle sits on

**The circle leads and the option's words follow it**, in every set, and there is no option to
move it. The checkbox is arranged the same way, which is what keeps the twins reading as one
family from across a page.

### Variants

**None.** There is one radio. Hiding the label is not a variant: it is a statement about where
the control's name is allowed to live, and the control itself is identical. The side the circle
sits on is not a variant either, and it is not authorable: it is one arrangement, shared with the
checkbox.
`,guidance:`
## Behaviors

### States

- **Default.** Unchosen, enabled. Nothing about it is inferred.
- **Chosen.** The circle fills with the same ground the checkbox uses when it is checked, and
  the dot appears with a full flip from invisible to visible. Same tokens, same transition, one
  shape apart, which is what makes the two controls read as one family.
- **Hover.** The circle's border colour swaps, the same swap the checkbox draws, so the two hover
  identically rather than by copying.
- **Hover on touch.** It is deliberately not fenced behind a pointer check. The change has no
  affordance behind it, so a hover that sticks after a tap shows a slightly darker edge and
  nothing else.
- **Focus.** The ring lands on the drawn circle, not on the hidden input, because the input is
  clipped to a single pixel and its own ring would never be seen. On a filled circle the ring
  switches to the version meant for that ground.
- **Disabled.** The whole control dims through the shared disabled-opacity token, applied
  **once**, at the root. Applying it a second time on the circle would composite into a value
  no token declares, which is the exact defect the checkbox was fixed for.
- **Indeterminate.** There is none. A radio has no mixed state, in this system or in the
  platform. Unbuilt rather than forgotten.
- **Error.** Not a state of this control at all. A set of radios can fail in exactly one way,
  required with nothing chosen, so the message belongs to **Radio group** and it goes the moment
  an option is picked. An error drawn over a chosen option is a failure that has stopped
  existing.

**The hover is one decision across both twins.** The radio and the checkbox draw the same hover,
and neither can move it alone.

### Interactions

- **Clicking the label chooses the option**, not only clicking the circle. The whole label is
  the hit area.
- **Tab reaches the group once, and the arrows move inside it.** Tab enters on the chosen one,
  Down, Right, Up and Left move the selection and wrap, and Tab leaves the group entirely.
- **Space chooses the focused option** and never un-chooses it. That is the difference from a
  checkbox, and it is the platform's behaviour, not a decision this component makes.
- **The chosen circle darkens on press.** Only the chosen circle has a pressed step to reach for;
  the resting circle keeps its edge, because inventing a pressed colour for it would be a decision
  nobody made.
- **Where Tab lands depends on the group.** With nothing chosen it lands on the first option;
  with something chosen, on the chosen one.

## Rules

- ✅ **Do** wrap a set of radios in **Radio group**. It gives the set its \`fieldset\`, its
  \`legend\`, its required marker, its error and, since the set can only ever have one answer, the
  one name every option in it shares.
- ✅ **Do** pass the group a \`name\` when a form posts under a particular one. Leave it out and the
  group derives one, which is a real group either way.
- ❌ **Don't** hand each option its own name. Two names in one set is two questions wearing one
  legend, and it is the only way left to draw a set that accepts two answers.
- ❌ **Don't** ship a single radio. If there is only one thing, it is a checkbox or a button.

- ✅ **Do** reach for the checkbox when several answers can be true at once. Same family,
  different promise, and the shape is how a shopper tells them apart.
- ✅ **Do** pass an explicit \`id\` when a form needs to point an error message at this control.

- ❌ **Don't** replace the native input with a styled \`div\` and a click handler. The arrow keys
  are the whole reason this control exists.
- ❌ **Don't** hide the input with \`display: none\`. It takes the tab order and the group
  navigation with it.
- ❌ **Don't** express a state by fading part of the control. The dot's own reveal is a full
  flip, not a fade, which is exactly what keeps it out of that rule.
- ❌ **Don't** hide the label unless a visible name already sits next to the control, like a
  table row header. Hiding it clips the pixels and keeps the name, but a radio with no visible
  name anywhere is a different and worse problem.

### Content rules

- ✅ **Do** write options as parallel phrases. "Every month" and "Every 2 months" and "Every 3
  months", not "Monthly" and "Every 2 months" and "Quarterly delivery". A radio group is read
  as a list.
- ❌ **Don't** invent a character limit. It is explicitly undefined, and design owes the number.
- ❌ **Don't** assume long copy is safe. The circle is set not to shrink when the label wraps,
  but whether that holds at 200% zoom and 320px wide, per brand, is a check nobody has run yet.

## Open items

| Question | Owner |
|---|---|
| **Low priority.** Two brands, cutex and christina aguilera, give the checkbox a fully round corner, so on those two the checkbox and the radio are the same picture and the shape stops carrying the promise. Fix in the brand tokens, or accept it? | Design |
| The 18px circle and the 24px root height are unratified code choices inherited from the checkbox. If 24px is meant as the touch target, it sits below both the library's own 40px pointer-target floor and the 44px WCAG 2.5.5 AAA number some teams hold themselves to. Two different bars, and this control clears neither | Design |
| **The UX note says touch devices do not hover, and this hover is not fenced behind a pointer check.** The edge darkens on any pointer, so a tap can leave it darker until focus moves elsewhere. Fence it on the radio and the checkbox together, or accept it? | Design |
| **The UX note lists pressed among the supported states, and only the chosen circle has one.** The resting circle paints a role with no pressed step to reach for, so there is nothing to consume and no colour was invented. Give the resting circle a pressed state, or accept the narrower one? | Design |
| **The UX note says responsive behaviour changes the control's size only, and today it changes nothing.** The circle, the dot and the row are one size at every width. Name a size per breakpoint, or accept the single size? | Design |
`,spec:{elements:[{name:"Root, the label",requirement:"required",condition:"The whole hit area: a click anywhere in it chooses the option, not only the circle."},{name:"Native radio input",requirement:"required",condition:"Clipped out of sight, never removed. It takes focus, holds the value and joins the group."},{name:"Drawn circle",requirement:"required",condition:"The drawing the checkbox shares, painted over the input and hidden from screen readers."},{name:"Dot",requirement:"conditional",condition:"While the option is chosen. It appears with a full flip, never a fade."},{name:"Label text",requirement:"required",condition:"Always from the caller, and the only source of the accessible name."}],authorability:[{name:"Label",rule:"The author writes it at the call site. The component never supplies one."},{name:"Label length",rule:"The author keeps it to one short phrase. No character limit is set here."},{name:"Option wording",rule:"The author writes the options as parallel phrases, so the set reads as one list."},{name:"Group name",rule:"The group owns it. The author passes one only when a form posts under a particular name."},{name:"Group shell",rule:"The set is wrapped in Radio group, which draws the fieldset, the legend and the error."},{name:"Hidden label",rule:"The author hides it only where a visible name already sits beside the control."},{name:"Control side",rule:"Not authorable. The circle leads and the option follows it, the same arrangement the checkbox draws."},{name:"Id",rule:"The author passes an explicit id when a form points an error message here."},{name:"A lone radio",rule:"Fixed: a radio never travels alone. One thing to switch is a checkbox or a button."},{name:"Native input",rule:"Fixed: the input stays, clipped rather than removed, and never a styled div."},{name:"Look and dim",rule:"Fixed: the circle, the dot and the single disabled dim all come from tokens."},{name:"Variants",rule:"Fixed: there are none. One radio, and a box means Checkbox instead."}],variants:[{label:"Unchosen",props:{}},{label:"Chosen",props:{defaultChecked:!0}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"},{key:"disabled",name:"Disabled",props:{disabled:!0}}],render:I,interactions:["Clicking anywhere in the label chooses the option, not only the circle.","Radios sharing one name are one tab stop. Tab enters on the chosen option, or the first when none is.","Arrow keys move the choice inside the group and wrap. Up and Left step back, Down and Right forward.","Space chooses the focused option and never un-chooses it. That is the platform, not a local rule.","The hover edge is not fenced behind a pointer check, so a tap can leave it darker until focus moves.","The chosen circle darkens on press; the resting circle has no pressed step to reach for.","Every other native radio prop passes straight through to the input, including checked and onChange."],accessibility:[{label:"Keyboard",text:"Tab reaches the group once and lands on the chosen option, the arrows move the choice and wrap, and Space never un-chooses."},{label:"Native semantics",text:"The control is a real radio input in a named group, so a screen reader announces the choice and its place in the set."},{label:"Accessible name",text:"The visible label names the input through a real label element, and the drawn circle is hidden from assistive technology."},{label:"Group name",text:"The set carries a name of its own, from the Radio group primitive that wraps it in a fieldset and legend."},{label:"Focus",text:"The focus ring lands on the drawn circle rather than on the clipped input, and it holds on a filled circle as well as an empty one."},{label:"Hidden label",text:"Hiding the label clips it out of sight and keeps the name. display none is not the recipe: it takes the group navigation with it."},{label:"Reduced motion",text:"The dot appears with a full on or off swap, and the control drops its transitions when the user asks for reduced motion."},{label:"Contrast",text:"The resting edge, the chosen fill and the dot each hold their contrast pair against the ground behind them, on every brand."},{label:"Target size",text:"The whole label row is the pointer target and it clears the library 40px floor, which sits above the 24px WCAG 2.5.8 floor."},{label:"Zoom and reflow",text:"At 200% zoom on a 320px screen the circle holds its size while a three-line label wraps beside it."},{label:"Right to left",text:"In a right-to-left direction the circle leads on the right and the label follows. That is the document direction; the control has no side option."}],openItems:[{question:"Two brands draw the checkbox with a fully round corner, so there the shape stops telling the two apart. Fix in the brand tokens, or accept it?",owner:"Design"},{question:"The 18px circle and the 24px root height are unratified code choices inherited from the checkbox. Ratify them, or resize?",owner:"Design"},{question:"Her note says touch devices do not hover. The ratified hover is not fenced behind a pointer query, so a tap can leave a darker edge. Fence it, or ratify?",owner:"Design"},{question:"Her note lists pressed among the states. Only the chosen circle has a pressed rung to read; the resting one has none. Mint one, or ratify the narrower state?",owner:"Design"},{question:"Her note says responsive changes the size only. This control draws one size at every breakpoint. Name a size per breakpoint, or ratify the single size?",owner:"Design"}]}}}},m={name:"Default",args:se,argTypes:ne,render:t=>e.jsx(re,{...t}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"One radio with every option a designer can change. Switch **State** to compare resting, chosen, disabled and disabled while chosen; turn **Hide the label** on to see the control keep its accessible name while the copy leaves the screen. The circle always leads the row and the option follows it, the same arrangement the checkbox draws. Change the **Brand** toolbar and the same control re-themes across all 21 brands without a value being restated. Switch **Inverse** on to stand the option on the dark band: the preview drops onto that ground, the circle keeps a white edge and the chosen dot moves into a paper-coloured circle. A lone radio is shown here because this is the control's own page. In a real interface it never travels alone."}}}},L=[{key:"unchosen",label:"Unchosen",props:{}},{key:"chosen",label:"Chosen",props:{defaultChecked:!0},dimension:"value"}],g=[{key:"default",label:"Default"},{key:"hover",label:"Hover",pseudo:"hover"},{key:"focus",label:"Focus",pseudo:"focusVisible"},{key:"disabled",label:"Disabled",props:{disabled:!0},dimension:"state"}],b={name:"All states",parameters:{themeShellPadding:!1,pseudo:{...q(g.filter(t=>t.pseudo==="hover"),{pseudoTarget:".ds-radio"}),...q(g.filter(t=>t.pseudo==="focusVisible"),{pseudoTarget:".ds-radio__input"})},docs:{description:{story:`Both halves of the choice against every state, on both grounds the option is allowed to stand on, in two labelled grids. Each grid reads the same way: **Unchosen** and **Chosen** down the side, **Default**, **Hover**, **Focus** and **Disabled** across the top, so a cell in one answers the cell in the same position in the other. The disabled-and-chosen cell reads directly here rather than being described. **Hover** and **Focus** are frozen with storybook-addon-pseudo-states so both sit still for a design review or a screenshot; the colours are the control's real CSS, held open rather than triggered. Hover is aimed at the label row and Focus at the clipped input, because for this control those are two different elements, so the Hover column shows the real hover edge rather than the resting circle.

**Light plane** is the page ground, the default every screen in the library draws on. **Inverse plane** is the option standing on the dark band it declares through \`inverse\`. What changes on that band: the resting circle takes the ground itself with a white edge, the chosen circle is paper-coloured with a dark dot, and the option’s words take the ground’s full ink. **Hover** there draws the same edge as **Default** on purpose, because that edge is already the ground’s full ink and has nowhere louder to go; what the rule buys is that the page-ground hover, which is the brand’s black, cannot reach through. **Focus** reads the ring that ground publishes rather than the page’s. Every brand clears its floors on the dark plane: the edge and the chosen circle against the ground, the dot against the circle it sits in.

This is a QA surface, not themed product UI, which is why its own chrome stays neutral across brands.`}}},render:()=>e.jsxs("dl",{style:{display:"grid",gap:"var(--size-700)",margin:0,paddingBlock:"var(--size-100)"},children:[e.jsxs("div",{children:[e.jsx("dt",{style:S,children:"Light plane"}),e.jsx("dd",{style:{margin:0},children:e.jsx(E,{rows:L,columns:g,render:I,label:"Light plane"})})]}),e.jsxs("div",{children:[e.jsx("dt",{style:S,children:"Inverse plane"}),e.jsx("dd",{style:{margin:0},children:e.jsx(E,{rows:L,columns:g,render:ie,label:"Inverse plane"})})]})]})},f={name:"Label and content",parameters:{docs:{description:{story:"How the label and the copy around it behave, named rather than left to be inferred, and not a state of the control. **Long label** lets real option copy wrap to several lines while the circle is set not to shrink, so it holds its size instead of collapsing. Hiding the label is not shown here as an example of its own: turn **Hide the label** on in the Default story to see the copy leave while the control keeps its accessible name."}}},render:()=>e.jsx("dl",{style:{display:"grid",gap:"var(--size-600)",maxWidth:520,margin:0},children:e.jsxs("div",{children:[e.jsx("dt",{style:S,children:"Long label"}),e.jsx("dd",{style:{margin:0},children:e.jsx("div",{style:{maxWidth:220},children:e.jsx(i,{name:"long",value:"long",label:"Deliver every 2 months and save 15% on every order, cancel or change the schedule at any time from your account"})})})]})})};function he(){const[t,o]=r.useState(null);return e.jsxs("form",{style:{display:"grid",gap:"var(--size-200)"},onSubmit:a=>a.preventDefault(),children:[e.jsx(A,{legend:"Delivery frequency",required:!0,error:t?void 0:"Choose how often you would like a delivery.",children:["Every month","Every 2 months","Every 3 months"].map(a=>e.jsx(i,{value:a,label:a,checked:t===a,onChange:()=>o(a)},`req-${a}`))}),e.jsxs("div",{style:{display:"flex",gap:"var(--size-200)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(_,{variant:"secondary",type:"submit",children:"Submit"}),t&&e.jsx(_,{variant:"ghost",type:"button",onClick:()=>o(null),children:"Clear the choice to see the error again"})]})]})}const w={name:"Group",parameters:{docs:{description:{story:'A named set of related radios, wrapped in `RadioGroup`. **Why a fieldset and a legend:** on their own, three radios are three loose options; a real `<fieldset>` announces them as one set and the `<legend>` gives the set its name, so assistive technology reads "delivery frequency" over the options rather than three unlabelled rows. The group adds no tab stop and repaints no circle. **One answer, always, and the group is what guarantees it.** Every option in a set shares one `name`, which is what makes picking one un-pick the last one; the group supplies that name, so a set cannot be built that allows two answers at once. Pass `name` when a form needs a particular one, or leave it out and the group derives one. **Required lives in the name, and on the options.** A required set draws its asterisk inside the legend, because `aria-required` is not allowed on a `<fieldset>` (its role is `group`), and the group also carries `required` onto every native `<input>` it wraps, so the browser\'s own constraint validation can act on it. Try the second set below: submit it empty and the browser refuses, on the radio itself, not only in the message this story draws. **The error is one case: required, and nothing chosen.** That is the only way a set of radios can fail, so the message reads directly under the name, is announced the moment it arrives, and goes as soon as an option is chosen; the same failure is also on each option as `aria-invalid`/`aria-describedby`, merged rather than overwriting anything the option set for itself. The second set here is live: pick anything and the error clears.'}}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--size-500)",maxWidth:320},children:[e.jsx(A,{legend:"Delivery frequency",name:"delivery-frequency",children:["Every month","Every 2 months","Every 3 months"].map((t,o)=>e.jsx(i,{value:t,label:t,defaultChecked:o===1},t))}),e.jsx(he,{})]})};var N,H,O;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Default',
  args: RADIO_DEFAULT_ARGS,
  argTypes: RADIO_ARG_TYPES,
  render: args => <ConfigurableRadio {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'One radio with every option a designer can change. Switch **State** to compare ' + 'resting, chosen, disabled and disabled while chosen; turn **Hide the label** on to ' + 'see the control keep its accessible name while the copy leaves the screen. The circle ' + 'always leads the row and the option follows it, the same arrangement the checkbox ' + 'draws. Change ' + 'the **Brand** toolbar and the same control re-themes across all 21 brands without a ' + 'value being restated. Switch **Inverse** on to stand the option on the dark band: the ' + 'preview drops onto that ground, the circle keeps a white edge and the chosen dot moves ' + 'into a paper-coloured circle. A lone radio is shown here because this is the control\\'s ' + 'own page. In a real interface it never travels alone.'
      }
    }
  }
}`,...(O=(H=m.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var z,G,F;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'All states',
  parameters: {
    // Flush canvas so the grid gets the full width for its columns.
    themeShellPadding: false,
    pseudo: {
      ...getStateMatrixPseudoParameters(MATRIX_COLUMNS.filter(column => column.pseudo === 'hover'), {
        pseudoTarget: '.ds-radio'
      }),
      ...getStateMatrixPseudoParameters(MATRIX_COLUMNS.filter(column => column.pseudo === 'focusVisible'), {
        pseudoTarget: '.ds-radio__input'
      })
    },
    docs: {
      description: {
        story: 'Both halves of the choice against every state, on both grounds the option is allowed to ' + 'stand on, in two labelled grids. Each grid reads the same way: **Unchosen** and ' + '**Chosen** down the side, **Default**, **Hover**, **Focus** and **Disabled** across ' + 'the top, so a cell in one answers the cell in the same position in the other. The ' + 'disabled-and-chosen cell reads directly here rather than being described. **Hover** ' + 'and **Focus** are frozen with storybook-addon-pseudo-states so both sit still for a ' + 'design review or a screenshot; the colours are the control\\'s real CSS, held open ' + 'rather than triggered. Hover is aimed at the label row and Focus at the clipped ' + 'input, because for this control those are two different elements, so the Hover column ' + 'shows the real hover edge rather than the resting circle.\\n\\n' + '**Light plane** is the page ground, the default every screen in the library draws ' + 'on. **Inverse plane** is the option standing on the dark band it declares through ' + '\`inverse\`. What changes on that band: the resting circle takes the ground itself with ' + 'a white edge, the chosen circle is paper-coloured with a dark dot, and the ' + 'option\\u2019s words take the ground\\u2019s full ink. **Hover** there draws the same ' + 'edge as **Default** on purpose, because that edge is already the ground\\u2019s full ' + 'ink and has nowhere louder to go; what the rule buys is that the page-ground hover, ' + 'which is the brand\\u2019s black, cannot reach through. **Focus** reads the ring that ' + 'ground publishes rather than the page\\u2019s. Every brand clears its floors on the ' + 'dark plane: the edge and the chosen circle against the ground, the dot against the ' + 'circle it sits in.\\n\\n' + 'This is a QA surface, not themed product UI, which is why its own chrome stays ' + 'neutral across brands.'
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
          <StateMatrixGrid rows={MATRIX_ROWS} columns={MATRIX_COLUMNS} render={renderRadioCell} label="Light plane" />
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
}`,...(F=(G=b.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var P,B,M;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Label and content',
  parameters: {
    docs: {
      description: {
        story: 'How the label and the copy around it behave, named rather than left to be inferred, and ' + 'not a state of the control. **Long label** lets real option copy wrap to several ' + 'lines while the circle is set not to shrink, so it holds its size instead of ' + 'collapsing. Hiding the label is not shown here as an example of its own: turn **Hide ' + 'the label** on in the Default story to see the copy leave while the control keeps its ' + 'accessible name.'
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
        <dt style={EXAMPLE_LABEL_STYLE}>Long label</dt>
        <dd style={{
        margin: 0
      }}>
          <div style={{
          maxWidth: 220
        }}>
            <Radio name="long" value="long" label="Deliver every 2 months and save 15% on every order, cancel or change the schedule at any time from your account" />
          </div>
        </dd>
      </div>
    </dl>
}`,...(M=(B=f.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var W,U,X;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Group',
  parameters: {
    docs: {
      description: {
        story: 'A named set of related radios, wrapped in \`RadioGroup\`. **Why a fieldset and a legend:** ' + 'on their own, three radios are three loose options; a real \`<fieldset>\` announces them ' + 'as one set and the \`<legend>\` gives the set its name, so assistive technology reads ' + '"delivery frequency" over the options rather than three unlabelled rows. The group ' + 'adds no tab stop and repaints no circle. **One answer, always, and the group is what ' + 'guarantees it.** Every option in a set shares one \`name\`, which is what makes picking ' + 'one un-pick the last one; the group supplies that name, so a set cannot be built that ' + 'allows two answers at once. Pass \`name\` when a form needs a particular one, or leave ' + 'it out and the group derives one. **Required lives in the name, and on the options.** A ' + 'required set draws its asterisk inside the legend, because \`aria-required\` is not ' + 'allowed on a \`<fieldset>\` (its role is \`group\`), and the group also carries \`required\` ' + 'onto every native \`<input>\` it wraps, so the browser\\'s own constraint validation can ' + 'act on it. Try the second set below: submit it empty and the browser refuses, on the ' + 'radio itself, not only in the message this story draws. **The error is one case: ' + 'required, and nothing chosen.** That is the only way a set of radios can fail, so the ' + 'message reads directly under the name, is announced the moment it arrives, and goes as ' + 'soon as an option is chosen; the same failure is also on each option as ' + '\`aria-invalid\`/\`aria-describedby\`, merged rather than overwriting anything the option ' + 'set for itself. The second set here is live: pick anything and the error clears.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--size-500)',
    maxWidth: 320
  }}>
      {/* The set names itself, because a form would post under that name. Its options do not
          repeat it: the group publishes it and every radio inside reads it. */}
      <RadioGroup legend="Delivery frequency" name="delivery-frequency">
        {['Every month', 'Every 2 months', 'Every 3 months'].map((option, i) => <Radio key={option} value={option} label={option} defaultChecked={i === 1} />)}
      </RadioGroup>
      <RequiredDeliveryGroup />
    </div>
}`,...(X=(U=w.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const ke=["Playground","AllStates","LabelAndContent","Group"];export{b as AllStates,w as Group,f as LabelAndContent,m as Playground,ke as __namedExportsOrder,ye as default};
