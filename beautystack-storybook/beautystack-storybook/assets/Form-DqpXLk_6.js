import{j as e}from"./iframe-6dx3hp_4.js";import{I as u}from"./Icon-BihOhSWB.js";function b({columns:s=2,status:t="idle",successHeading:a,successMessage:n,successHeadingLevel:r=3,onSubmit:i,className:d,children:l,...c}){const o=t==="success",m=`h${Math.min(6,Math.max(2,Number(r)||3))}`,h=["ds-form",s===1?"ds-form--single":"",o?"ds-form--success":"",d].filter(Boolean).join(" ");return e.jsxs("form",{className:h,onSubmit:i??(f=>f.preventDefault()),...c,noValidate:!0,children:[e.jsx("div",{className:"ds-form__pane ds-form__pane--fields",children:l}),o&&e.jsxs("div",{className:"ds-form__pane ds-form__pane--confirmation",children:[e.jsx(m,{className:"ds-form__success-heading",children:a}),e.jsx("p",{className:"ds-form__success-message",role:"status",children:n})]})]})}function g({className:s,children:t,...a}){const n=["ds-form__submit-error",s].filter(Boolean).join(" ");return e.jsxs("p",{className:n,role:"alert",...a,children:[e.jsx(u,{name:"circle-x",size:"sm",className:"ds-form__submit-error-icon"}),t]})}function w({className:s,children:t,...a}){const n=["ds-form__wide",s].filter(Boolean).join(" ");return e.jsx("div",{className:n,...a,children:t})}b.__docgenInfo={description:"",methods:[],displayName:"Form",props:{columns:{defaultValue:{value:"2",computed:!1},required:!1},status:{defaultValue:{value:"'idle'",computed:!1},required:!1},successHeadingLevel:{defaultValue:{value:"3",computed:!1},required:!1}}};g.__docgenInfo={description:`The form level submission error: the form could not be sent, with every field as it was left.

NOT A FIELD ERROR. A field error says one control is wrong and lives on that control, drawn and
announced by the atom from its own \`error\` string. This one says the SEND failed, which is a
fact about the form and about no field in it. Both can be on screen at once.

WHERE IT GOES: between the last field and the submit control, passed as the child immediately
before it, which is where a reader looks when a button did not do what it said.

THE SUBMIT CONTROL STAYS ENABLED. Trying again is the only thing a reader can do about a send
that failed, so the control that tries is never the thing taken away.

THE TREATMENT IS THE LIBRARY'S ERROR TREATMENT, not a second one: the \`small\` recipe, the
danger role and the \`circle-x\` glyph. What it does NOT take is the ring, because there is no
shell here to draw one around.

@param {string} [children] the message. Content, so the form and its locale own the words.`,methods:[],displayName:"FormSubmitError"};w.__docgenInfo={description:`A part that takes the whole measure, whatever the grid is doing around it.

THE SPAN IS A PART NAME, NEVER ARITHMETIC. \`nth-child\` would work today and would move a box
into half a row the first time somebody adds a field or reorders the set, silently, with no
diff to read. Naming it is what makes the two track layout survive editing.

WHAT BELONGS IN ONE. A message box, because half a row of text area is a box nobody can write
in. A submit control, because a button floating in one of two tracks reads as an alignment
accident. A vendor CAPTCHA, because its embed has a fixed width this grid cannot narrow. And a
standing line about the form as a whole, its requirement note or its legal sentence, because a
sentence sitting in the first of two tracks reads as belonging to the field beside it.`,methods:[],displayName:"FormWide"};export{b as F,g as a,w as b};
