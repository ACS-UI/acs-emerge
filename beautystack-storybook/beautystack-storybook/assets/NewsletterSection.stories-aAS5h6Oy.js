import{j as t,S as R,r as u}from"./iframe-6dx3hp_4.js";import{N as o}from"./NewsletterSection-3il-1Xyd.js";import{a as D}from"./annotationPage-eYx--AWZ.js";import{c as O,D as N,a as E}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Button-CiZyClsp.js";import"./Icon-BihOhSWB.js";import"./Loading-DyIAIYoE.js";import"./newTabMark-TI50-QeA.js";/* empty css               */import"./Checkbox-C5uneDTR.js";import"./ControlIndicator-DEJX7FyE.js";import"./FieldRequirement-Dn5H0DsY.js";import"./Input-3DsPWvNA.js";import"./IconButton-Btgg2ITq.js";import"./Link-yk_PIpvX.js";const m={heading:"Be Unforgettable",consentLabel:"By submitting your email, you agree to receive advertising emails from Revlon.",legal:"Please review our",privacyLabel:"Privacy Policy"},I={heading:"Be the first to know",body:"Sign up for Revlon emails and get news on new products, offers and beauty tips."},P={ground:{...E("Dark"),name:"Ground",...N({labels:{paper:"Paper",inverse:"Dark"},options:["paper","inverse"]}),description:"Which plane the band opens on, and the only way to see the other one: the ground is a control, not a second entry in the sidebar. On **paper** the band takes the page ink, and every atom inside reads the light plane from this same prop: the field, the submit, the consent tick and the privacy link. On the **dark** plane the band and every atom in it swap to the inverse pair."},showCaptcha:{...O("Off"),name:"Captcha seam",description:"Show the NEUTRAL placeholder for a third-party CAPTCHA embed. A CAPTCHA is not a DS component, so the seam draws a labelled empty slot the page assembler replaces with the external widget, not a control of ours. This page carries the toggle so the taller band can be seen."},heading:{control:"text",name:"Heading text",table:{category:"Content"},description:"The block title. The band draws it itself, at the head of the content column."},body:{control:"text",name:"Subtext",table:{category:"Content"},description:"One short sentence under the title, drawn only when given: what signing up gets the reader. It sits with the title as one group, on the body type the other section bands use for the line under their headline, and takes the plane's ink. Leave it empty and the band draws the title alone."},label:{control:"text",name:"Spoken name",table:{category:"Content"},description:"What a screen reader announces the band by when jumping between landmarks."}},l={...m,ground:"inverse",showCaptcha:!1};function q(e){return t.jsx(o,{...l,...e})}const ne={title:"Organisms/Newsletter section",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",themeShellPadding:!1,docs:{page:D("Newsletter section"),toc:{headingSelector:"h2"},description:{component:"The email sign-up as a whole site section: a full-bleed band with the sign-up form centred inside it. The band is this component and everything inside it is the form, composed unchanged."}},componentDoc:{usage:`
## When to use

- ✅ **A page needs an email sign-up as one of its sections**, between the content and the footer,
  the way the homepage and the product page both end.
- ✅ **The sign-up should open the page up.** The band carries the site section rhythm, so it
  breathes like the other sections rather than sitting in a content column.
- ✅ **The same block on a light or a dark plane.** The ground is one control.

- ❌ **A sign-up inside a dialog, a drawer or a sidebar.** Mount the form on its own there: a
  band is a page section, and a section inside a box is two boxes.
- ❌ **The field, the consent tick, the legal line or the success message.** All four belong to
  the form, and its page is where they are documented and changed.
- ❌ **A second title above the form.** The block already has one, drawn by the form.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Band** | required | Runs the full width of the page and carries the section rhythm |
| **Content column** | required | Centred inside the band and capped at the text measure |
| **Sign-up form** | required, but **owned by the form, not the band** | Heading, field, submit, consent, legal and success all live on its page |
| **Subtext** | optional | One short sentence under the title, grouped with it, drawn only when given |
| **Captcha seam** | optional | A neutral placeholder for the external third-party widget, not a DS component |

- **The section owns the band.** The plane, the air around the content and the spoken name.
- **The form owns everything inside it.** It is composed unchanged and nothing here repaints it.
- **The title is the form's.** A second marketing heading would give one block two titles, so there is none. The success state does not keep the marketing title: it announces the subscription with its own confirmation heading, and that heading and one short message are the whole of it.

### Variants

**One component, one axis.** The ground is light or dark, and nothing else about the band moves.

- **The light plane** keeps the sign-up reading as the dark card it draws, so the band's air and
  the card's own inset stay legible as two different things.
- **The dark plane** is the live homepage arrangement: the band takes the form's own ink, so the
  card's fill and its corner disappear and the block reads as one deep dark band.
`,guidance:`
## Behaviors

### States

- **Resting.** The band draws its air, the form sits centred, nothing else happens.
- **Invalid email.** The form shows its own error under the field, and the band does not move.
- **Subscribed.** The form swaps itself for a confirmation heading that announces the success and a short message, inside the same band. The confirmation is the end of the block: it carries no control of any kind, and reloading the page is what brings the form back.
- **Narrow screens.** Below the tablet width the band's air steps down and the form stacks.

### Interactions

- **Everything interactive here belongs to the form.** The band has no controls of its own.
- **The band is a landmark**, so it can be jumped to and is announced by its own name.
- **The block grows with its content.** Turning the captcha on makes the band taller rather than
  scrolling anything.
- **Answering the sign-up ends it.** Once the confirmation shows there is nothing left to press,
  and the answered form is out of the tab order.

## Rules

- ✅ **Do** mount this section instead of hand-wrapping the form when the sign-up is a page
  section.
- ✅ **Do** give the band a spoken name when a page carries more than one landmark.
- ✅ **Do** pick the plane on screen. Both are real arrangements of the same block.

- ❌ **Don't** wrap this section in another band, a card or a content column. It is the outermost
  thing.
- ❌ **Don't** restyle the form from the page. Its ground, its corner and its inset are its own.
- ❌ **Don't** add a heading above the form. The block has one title and the form draws it.
- ❌ **Don't** put a button or a link in the confirmation. The success state is a dead end by
  design and a reader reloads the page to sign up again.

### Content rules

- ✅ **Do** keep the block title short enough to read in one line at the narrow width.
- ❌ **Don't** invent a character limit for the legal line. It is owed by design.

## Open items

| Question | Owner |
|---|---|
| On the dark plane the band's air and the form's own inset stack, so the block is deeper there than on paper. Keep it, or move the inset into the band? | Design |
| Is a third light plane, the alternate paper the carousel section offers, ever wanted behind a dark card? | Design |
| After a failed submission, should focus move to the invalid field or to an error summary, rather than staying where it was? | Design |
| The quietest inks (the legal line and the field placeholder) miss 4.5:1 on some brands. Re-point them to a stronger role? | Design |
`,spec:{elements:[{name:"Band",requirement:"required"},{name:"Content column",requirement:"required",condition:"Centred in the band and capped at the text measure."},{name:"Sign-up form",requirement:"required",condition:"The form molecule, composed unchanged. Its own page documents it."},{name:"Captcha seam",requirement:"optional",condition:"Belongs to the form. Off unless the placement asks for it."},{name:"Subtext",requirement:"optional",condition:"One short sentence under the title, grouped with it. Drawn only when given."},{name:"Band heading",requirement:"conditional",condition:"Never drawn here. The form draws the block title."},{name:"Confirmation",requirement:"conditional",condition:"Replaces the form once the sign-up is answered: a heading and one message, and no control beside them."}],authorability:[{name:"Block title",rule:"Free text, drawn by the form. The band draws no title of its own."},{name:"Subtext",rule:"Free text, one short sentence under the title. Absent unless authored."},{name:"Consent and legal copy",rule:"Free text, and both belong to the form."},{name:"Required field instruction",rule:"Not drawn here. The band holds one field and no visible mark for a line to explain."},{name:"Confirmation copy",rule:"Free text, heading and message. No CTA can be authored beside them."},{name:"Privacy link",rule:"Free label and free destination."},{name:"Spoken name",rule:"Free text. It names the band for a screen reader, not on screen."},{name:"Ground",rule:"Light or dark, chosen when the page is built, not by the author."},{name:"Band air",rule:"Fixed by the system: the site section rhythm, at both widths."},{name:"Content width",rule:"Fixed by the system: the text measure, centred in the band."}],variants:[{label:"On paper",props:{ground:"paper"}},{label:"On the dark plane",props:{ground:"inverse"}}],statesMode:"linked",states:[{key:"resting",name:"Resting",story:"All states",annotation:"The band draws its air and the form sits centred, at its own measure."},{key:"error",name:"Invalid email",story:"All states",annotation:"The error lands under the field and the band holds still, on both planes."},{key:"success",name:"Subscribed",story:"All states",annotation:"Heading and message only, laid into the cell the form sized, so the band does not move."},{key:"paper",name:"On the paper plane",story:"All states",annotation:"The same block on the page ground, every atom inside on its light plane."},{key:"captcha",name:"With the captcha seam",story:"Captcha seam",annotation:"The seam belongs to the form, and the band grows to carry it."},{key:"narrow",name:"Narrow screens",story:"Default",annotation:"Narrow the canvas past the tablet width: the air steps down and it stacks."}],render:q,interactions:["Every control in the block belongs to the form, never to the band.","The band is a landmark, so it can be jumped to and announced by name.","Turning the captcha seam on makes the band taller, and nothing scrolls.","Below the tablet width the band air steps down and the form stacks.","The block is as tall as what it carries: no height is forced on it.","The confirmation carries no control: a reload is what brings the form back."],accessibility:[{label:"Landmark",text:"The band is a named region, so a screen reader can jump to it and say which block it is."},{label:"Heading order",text:"The block carries exactly one title, drawn by the form, so no level is repeated or skipped."},{label:"Keyboard",text:"Tab order runs straight through the form, and the band adds no stop of its own."},{label:"Contrast",text:"The band headline, its body ink and the confirmation clear 4.5:1 on both planes on every brand."},{label:"Quiet inks",text:"The legal line and the placeholder fall under 4.5:1 on some brands. Open item."},{label:"Reflow",text:"At 320px the band keeps its content inside the page gutter with no sideways scrolling."}],openItems:[{question:"On the dark plane the band air and the form inset stack. Keep the deeper block, or move the inset?",owner:"Design"},{question:"Is a third light plane ever wanted behind a dark card, as the carousel section offers?",owner:"Design"},{question:"After a failed submission, should focus move to the invalid field or to an error summary?",owner:"Design"},{question:"The quiet inks, the legal line and the placeholder, miss 4.5:1 on some brands. Re-point them?",owner:"Design"}]}}},argTypes:P,render:e=>t.jsx(o,{...e})},r={args:{...l},parameters:{docs:{description:{story:`The band the live site draws: full bleed edge to edge, the sign-up centred in a column that stops at the text measure, and the section rhythm as its only air.

**Try it.** Submit an empty field for the error, a real address for the confirmation (the band holds its height either way, so answering it does not move the page), and narrow the canvas past the tablet width to watch the air step down. The confirmation is a dead end: reload to get the form back.`}}}},i={name:"Captcha seam",args:{...l,showCaptcha:!0},parameters:{docs:{description:{story:"The same band with the CAPTCHA placeholder switched on, the shape a high traffic public placement takes. A CAPTCHA is not a DS component: the seam is a neutral, labelled slot for the external embed, not a control of ours. What the band does is grow to carry it, because a section is as tall as its content."}}}},h={name:"With subtext",args:{...l,...I},parameters:{docs:{description:{story:"The band with its optional subtext: one short sentence under the title saying what signing up gets the reader, the line the live site draws under its own headline. The title and the sentence are one group, a tight step apart, and the band's own air still separates them from the form, so the block reads title, promise, field. The sentence takes the title's ink on both planes. A band handed no subtext draws the title alone, which is every other story on this page."}}}};function _({email:e,...c}){const s=u.useRef(null);return u.useEffect(()=>{var p;const n=(p=s.current)==null?void 0:p.querySelector("form");if(!n)return;const a=n.elements.email;a&&(a.value=e),n.requestSubmit()},[e]),t.jsx("div",{ref:s,children:t.jsx(o,{...c})})}const B=600,j=[{key:"resting",label:"Resting",props:{stateName:"resting"},dimension:"state"},{key:"error",label:"Invalid email",props:{submitEmail:"",stateName:"invalid email"},dimension:"state"},{key:"success",label:"Subscribed",props:{submitEmail:"jane@example.com",stateName:"subscribed"},dimension:"state"}],G=[{key:"paper",label:"Paper",props:{ground:"paper",groundName:"the paper plane"},dimension:"ground"},{key:"inverse",label:"Dark",props:{ground:"inverse",groundName:"the dark plane"},dimension:"ground"}];function L({submitEmail:e,stateName:c,groundName:s,...n}){const a=`Newsletter sign up, ${c}, on ${s}`;return t.jsx("div",{style:{width:B},children:e===void 0?t.jsx(o,{...n,...m,label:a}):t.jsx(_,{email:e,...n,...m,label:a})})}const d={name:"All states",parameters:{themeShellPadding:!1,docs:{description:{story:"Every form-level state against both planes, in one labelled grid: **Resting**, **Invalid email** and **Subscribed** down the side, **Paper** and **Dark** across the top. None of the three states is a prop, because the component holds idle, error and success internally, so the two answered cells in each row submit the real form on arrival, one with an empty field and one with a valid address. Read down a column and the band is the same height in all three: the confirmation is laid into the cell the form sizes, so answering the form never moves the page. Read across a row and the error and the confirmation are on both planes, which the page had never drawn. The captcha seam is not here: it is a third axis, and it has its own story. This is a QA surface, not themed product UI, which is why its own chrome stays neutral across brands."}}},render:()=>t.jsx(R,{rows:j,columns:G,render:L})};var g,b,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...BASE_ARGS
  },
  parameters: {
    docs: {
      description: {
        story: 'The band the live site draws: full bleed edge to edge, the sign-up centred in a ' + 'column that stops at the text measure, and the section rhythm as its only air.\\n\\n' + '**Try it.** Submit an empty field for the error, a real address for the ' + 'confirmation (the band holds its height either way, so answering it does not move ' + 'the page), and narrow the canvas past the tablet width to watch the air step down. ' + 'The confirmation is a dead end: reload to get the form back.'
      }
    }
  }
}`,...(w=(b=r.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var f,y,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Captcha seam',
  args: {
    ...BASE_ARGS,
    showCaptcha: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The same band with the CAPTCHA placeholder switched on, the shape a high traffic public ' + 'placement takes. A CAPTCHA is not a DS component: the seam is a neutral, labelled slot for ' + 'the external embed, not a control of ours. What the band does is grow to carry it, because ' + 'a section is as tall as its content.'
      }
    }
  }
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var v,T,x;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'With subtext',
  args: {
    ...BASE_ARGS,
    ...REVLON_SUBTEXT_COPY
  },
  parameters: {
    docs: {
      description: {
        story: 'The band with its optional subtext: one short sentence under the title saying what ' + 'signing up gets the reader, the line the live site draws under its own headline. The ' + 'title and the sentence are one group, a tight step apart, and the band\\'s own air still ' + 'separates them from the form, so the block reads title, promise, field. The sentence ' + 'takes the title\\'s ink on both planes. A band handed no subtext draws the title alone, ' + 'which is every other story on this page.'
      }
    }
  }
}`,...(x=(T=h.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var S,A,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'All states',
  parameters: {
    // Flush canvas so the grid gets the full width for its columns, the same flag every other
    // matrix story sets. See .storybook/preview.jsx.
    themeShellPadding: false,
    docs: {
      description: {
        story: 'Every form-level state against both planes, in one labelled grid: **Resting**, ' + '**Invalid email** and **Subscribed** down the side, **Paper** and **Dark** across the ' + 'top. None of the three states is a prop, because the component holds idle, error and ' + 'success internally, so the two answered cells in each row submit the real form on ' + 'arrival, one with an empty field and one with a valid address. Read down a column and ' + 'the band is the same height in all three: the confirmation is laid into the cell the ' + 'form sizes, so answering the form never moves the page. Read across a row and the ' + 'error and the confirmation are on both planes, which the page had never drawn. The ' + 'captcha seam is not here: it is a third axis, and it has its own story. This is a QA ' + 'surface, not themed product UI, which is why its own chrome stays neutral across ' + 'brands.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={MATRIX_ROWS} columns={MATRIX_COLUMNS} render={renderMatrixCell} />
}`,...(C=(A=d.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const ae=["Default","CaptchaSeam","WithSubtext","AllStates"];export{d as AllStates,i as CaptchaSeam,r as Default,h as WithSubtext,ae as __namedExportsOrder,ne as default};
