import{j as n}from"./iframe-6dx3hp_4.js";const t={mark:"*",note:"* indicates required fields"};function i({required:e=!1}){return e?n.jsx("span",{className:"ds-field-requirement","aria-hidden":"true",children:t.mark}):null}function s({children:e,inverse:r=!1}){return n.jsx("p",{className:`ds-field-requirement__note${r?" ds-field-requirement__note--inverse":""}`,children:e??t.note})}i.__docgenInfo={description:`The mark beside a required control's own name. Renders nothing for an optional one.

@param {boolean} [required] whether the control this sits beside is required.`,methods:[],displayName:"FieldRequirement",props:{required:{defaultValue:{value:"false",computed:!1},required:!1}}};s.__docgenInfo={description:`The line that explains the mark. It renders before the form's first input.

NOT \`aria-hidden\`, unlike the mark: this sentence IS the instruction WCAG 3.3.2 asks for.

The FORM renders it, because only the form knows where its first input is and whether it holds
a required field at all.

\`inverse\` is the PLANE the host stands on, the same boolean opt-in Input, Checkbox, Button,
Link and IconButton publish, declared by the host from its own ground and never inferred: a
host painting this line from outside would have to repaint it for every dark band, so the
plane lives on the atom instead.

@param {string} [children] override the sentence. Content, so a page or a locale may pass its own.
@param {boolean} [inverse] this line stands on \`color.bg.inverse\`, so it takes the inverse ink.`,methods:[],displayName:"FormRequirementNote",props:{inverse:{defaultValue:{value:"false",computed:!1},required:!1}}};export{s as F,i as a};
