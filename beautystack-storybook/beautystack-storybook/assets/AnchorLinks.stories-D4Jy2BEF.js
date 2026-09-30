import{j as e,S}from"./iframe-6dx3hp_4.js";import{L as o,a as A}from"./Link-yk_PIpvX.js";import{a as I}from"./annotationPage-eYx--AWZ.js";import{D as N,a as _}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";import"./newTabMark-TI50-QeA.js";const R={marginTop:"var(--size-600)",display:"flex",flexDirection:"column",gap:"var(--size-600)"},L={minHeight:"900px",padding:"var(--size-300)",border:"var(--border-10) dashed var(--color-border-subtle)",borderRadius:"var(--radius-action)"},y={display:"inline-block",background:"var(--color-bg-inverse)",padding:"var(--size-100) var(--size-200)",borderRadius:"var(--radius-action)"},j={background:"var(--color-bg-inverse)",padding:"var(--size-300) var(--size-400)"};function k({tone:t,children:n}){return t==="inverse"?e.jsx("div",{style:j,children:n}):n}function v({sections:t,style:n=L}){return e.jsx("div",{style:R,children:t.map(a=>e.jsxs("section",{id:a.id,className:"ds-anchor-target",style:n,children:[e.jsx("strong",{children:a.label}),e.jsxs("p",{style:{margin:"var(--size-150) 0 0"},children:['Fixture target section for "',a.label,'".']})]},a.id))})}const T={display:"flex",flexDirection:"column",rowGap:"var(--size-150)",margin:0,paddingInlineStart:"var(--size-400)"};function D({sections:t,tone:n}){return e.jsx("nav",{"aria-label":"Jump to section",children:e.jsx("ol",{style:T,children:t.map(a=>e.jsx("li",{children:e.jsx(o,{href:`#${a.id}`,tone:n,children:a.label})},a.id))})})}const l=[{id:"pp-collect",label:"Information We May Collect About You"},{id:"pp-automated",label:"Information We May Collect Through Automated Means"},{id:"pp-children",label:"How We Protect Children's Privacy"}],x="tone-axis-target",E={tone:{..._("Default"),name:"Tone",...N({labels:{default:"Default",editorial:"Editorial",quiet:"Quiet",inverse:"Inverse"},options:A}),description:"Which ink plane the row sits in. Default and Editorial keep the underline, for links inside prose. Quiet and Inverse drop it, for link lists like this row; Inverse also moves the preview onto the dark ground it is meant for."},editorial:{control:!1,table:{disable:!0}},href:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},external:{control:!1,table:{disable:!0}},inverse:{control:!1,table:{disable:!0}}};function O({tone:t}){const n=e.jsx(o,{href:`#${x}`,tone:t,children:"Ingredients"});return t==="inverse"?e.jsx("span",{style:y,children:n}):n}const Q={title:"Molecules/Anchor links",component:o,tags:["autodocs"],parameters:{docs:{page:I("AnchorLinks"),toc:{headingSelector:"h2"},description:{component:"Links that jump a reader down to a section of the page they are already on. Each one is the library's own `Link` atom, arranged as a row or as a vertical list: there is no separate `AnchorLinks` component in code."}},componentDoc:{usage:`
## When to use

- ✅ **A long content page with named sections**, so a reader can skip to the one they came for.
- ✅ **Wayfinding inside one page.** Every link in the row lands on that same page.

- ❌ **Moving between pages.** Site-level wayfinding is **Navigation**; showing where a page
  sits in the site is **Breadcrumbs**.
- ❌ **A link inside a sentence.** That is **Link** in its default or editorial tone, which
  keeps the underline.
- ❌ **A "Read more" that unfolds truncated text.** Different interaction entirely, and it is
  the only related thing Figma ever drew.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Row**, a labelled navigation region | required once two or more links group together | The only row shipping today is hand-rolled inline styles in a template, and it does not use the atom |
| **Link**, a real anchor pointing at an id | required, one per target section | The part this page's rules govern |
| **Separator**, a decorative middot | shown between links, never before the first | Code only, with no requirement behind it. Hidden from screen readers, since it means nothing |
| **Target section**, a real id with a scroll offset | required on every section a link points to | Without the offset, the sticky Navigation bar covers the heading the link lands on |

- **Tokens own the look.** Ink, underline weight and the type role, all through the \`Link\`
  atom, so the row re-themes with the brand.
- **The caller owns the words and the destinations.** The label and which section it points at.
- **There is no \`AnchorLinks\` component in code.** This page binds to \`Link\`, the same atom
  used everywhere else, arranged into a row. Figma has no row artefact either at any size.

### Variants

**The row has no variants.** One pattern, identical at every breakpoint.

What the row is *set in* belongs to the \`Link\` atom, and that is one axis, its **tone**:

| Tone | How it reads | For |
|---|---|---|
| **Default** | the link colour, underlined | a link inside a sentence |
| **Editorial** | the brand's own link colour, underlined | the same, in the brand link colour |
| **Quiet** | muted ink, no underline, steps up to full ink on hover | link **lists**: nav rows, footer columns, this row |
| **Inverse** | the same treatment, on a dark ground | link lists on a dark ground |

- **A link sits in exactly one tone.** They are an axis, not four flags you can combine.
- **Quiet and inverse were not invented here.** They were extracted from the treatment Footer,
  Navigation and Breadcrumbs each used to hand-roll, and those three now render the atom.
- **The row's own visual treatment is still an open question**, listed in Open items. What the
  tone axis changes is that whichever answer wins becomes a named tone rather than a fourth
  set of inline styles.
`,guidance:`
## Behaviors

### States

- **Resting.** The link sits in whichever tone it was set in.
- **Hover.** The same tone, intensified. A tone that is quiet by stroke steps its underline
  heavier; a tone that is quiet by ink steps its ink from muted to full.
- **Focus.** The library's visible ring. It is a white and black double ring, so it works on
  any ground and needs no inverse version of its own.

**One hover mechanic, not four.** Hover never turns on something that was off at rest, and it
never switches hue. That is what keeps the four tones one behaviour rather than four.

**Figma draws none of these.** Resting, hover and focus come from this design system's own
conventions, not from a design source.

### Interactions

- **Click or tap a link and the page scrolls to that section.**
- **The scroll is smooth, and instant for anyone who asked for reduced motion.** The criteria
  hedges this with "if possible". The answer here is yes.
- **Nothing about the row changes between mobile and desktop**, including how it wraps once
  there are more links than fit one line.

## Rules

- ✅ **Do** name the target section in the link text, and match its heading. Never "click here".
- ✅ **Do** put the target id on the section, not on its heading, so the whole section is the
  landing zone.
- ✅ **Do** pick a tone instead of re-styling the row template by template. Three disagreeing
  treatments happened exactly that way.

- ❌ **Don't** ship the smooth scroll without the reduced-motion escape hatch.
- ❌ **Don't** use the quiet tone for a link inside a paragraph. With no underline, colour is
  the only thing left telling it apart from plain text, and colour on its own is not enough.
  Quiet is for link lists, where position carries the affordance.
- ❌ **Don't** fade text on a dark ground with opacity to buy de-emphasis. That is what the
  inverse tone replaces: a fade spends the contrast budget and can drop the text below AA,
  while the inverse ink is derived per brand to stay inside it.
- ❌ **Don't** confuse this row with a "Read more" truncation link.

### Content rules

- ❌ **Don't** invent a character limit for a label. It is explicitly undefined, and long labels
  are what makes the row wrap.
- ❌ **Don't** invent a cap on how many links a row holds. Also undefined, and carried below as
  an open authoring question.

## Open items

| Question | Owner |
|---|---|
| Row visual treatment: three candidates disagree. The base link style (underlined, matching Figma's one related asset), the criteria (silent), and the shipped template convention (smaller, red, no underline). The tone axis narrows this to a choice between named tones rather than a request for new tokens | Design |
| Should the row become a real, reusable component instead of per-template inline styles? | Design / DS team |
| Character limit for a link label, and how many links a row should hold before it stops helping. Both explicitly undefined | Design |
`,spec:{elements:[{name:"Row",requirement:"conditional",condition:"Once two or more links group. A navigation region with a name."},{name:"Link",requirement:"required",condition:"A real anchor carrying its href, one per target section."},{name:"Separator",requirement:"optional",condition:"A middot between links, never before the first. Decorative."},{name:"Target section",requirement:"required",condition:"A real id with a scroll offset, so a sticky header cannot cover it."}],authorability:[{name:"Link text",rule:'Authored, and it names the section it goes to. Never "click here".'},{name:"Target",rule:"Authored. Put the id on the section, not on its heading."},{name:"Tone",rule:"Pick one of the four. A link sits in exactly one, and they do not combine."},{name:"Label length",rule:"No character limit is set. A long label is what makes the row wrap."},{name:"How many links",rule:"No cap is set. Enough links to stop helping is an authoring judgement."},{name:"Separator",rule:"Fixed by the system. The middot is not authorable and is never announced."},{name:"Hover",rule:"Fixed by the tone. It intensifies what is already there and never changes hue."},{name:"Row styling",rule:"Pick a tone. Restyling the row in a template is what produced three of them."}],variants:[{label:"Default",props:{tone:"default"}},{label:"Editorial",props:{tone:"editorial"}},{label:"Quiet",props:{tone:"quiet"}},{label:"Inverse",props:{tone:"inverse"}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"}],render:O,interactions:["Clicking a link scrolls the page to the section that id names.","The scroll is smooth, and instant for anyone who asked for reduced motion.","Hover intensifies the tone the link is already in: the underline steps, or the ink does.","Hover never turns on something that was off at rest, and never changes hue.","The row wraps once there are more links than fit, identically at every width.","A host class merges with the atom's own, so a caller cannot clobber the tone.","Props and ARIA pass straight through to the anchor, untouched.","The quiet tone drops the underline, so it belongs to link lists and never inside a paragraph.","De-emphasis on a dark ground is the inverse tone, never text faded with opacity."],accessibility:[{label:"Real anchor",text:"Every link renders a real anchor carrying its href, so the browser gives it its keyboard and its context menu."},{label:"Landmark",text:"A jump-nav row is a navigation region with an accessible name, so it is told apart from other navigation."},{label:"Focus",text:"Every link keeps the shared visible focus ring, which reads on a light and a dark ground alike."},{label:"Focus after a jump",text:"After a jump the target section takes focus, so a keyboard reader continues from where the page scrolled to."},{label:"Reduced motion",text:"The smooth scroll becomes an instant jump for a reader who has asked their system to reduce motion."},{label:"Not colour alone",text:"A link inside running text carries an underline, so colour is never the only thing marking it as a link."},{label:"Contrast",text:"Every tone holds 4.5:1 against its own ground as small text, on every brand, including the inverse one."},{label:"Announcement",text:"The row announces as a named region and each link is read on its own, with the separator staying silent."}],openItems:[{question:"The row treatment: the atom default and the shipped template row disagree. One has to win.",owner:"Design"},{question:"Should the row become a real, reusable component instead of per-template inline styles?",owner:"Design"},{question:"A character limit for a link label, and how many links a row holds before it stops helping.",owner:"Design"}]}}}},C=[{key:"default",label:"Default",props:{tone:"default"},dimension:"tone"},{key:"editorial",label:"Editorial",props:{tone:"editorial"},dimension:"tone"},{key:"quiet",label:"Quiet",props:{tone:"quiet"},dimension:"tone"}],q=[{key:"paper",label:"Paper"},{key:"inverse",label:"Inverse",props:{inverse:!0},dimension:"plane"}];function M({tone:t,inverse:n}){const a=e.jsx(o,{href:`#${x}`,tone:t,inverse:n,children:"Ingredients"});return n?e.jsx("span",{style:y,children:a}):a}const i={name:"Default",args:{tone:"editorial"},argTypes:E,parameters:{controls:{sort:"alpha"},docs:{description:{story:"The shape the requirement describes, and the behaviour that goes with it. Three entries from the real privacy policy, each landing on a target section below. Click one and the page scrolls, which is the point of the pattern and the one thing a picture of a list cannot show. The numbering belongs to the `<ol>`, not to the author, so reordering the sections never means renumbering anything by hand."}}},render:t=>e.jsxs("div",{children:[e.jsx(k,{tone:t.tone,children:e.jsx(D,{sections:l,tone:t.tone})}),e.jsx(v,{sections:l})]})},r={name:"Tones",parameters:{docs:{description:{story:"Every treatment against every ground, replacing the four stories that each drew one cell of it. Read a row to follow one tone between grounds, a column to compare the three tones on the same ground. **Default** and **Editorial** keep the underline, for a link inside a sentence, and differ only in ink: on thirteen of the twenty-one brands that ink is the same, so there the two rows are identical by design. **Quiet** drops the underline, which is what makes it usable in a list of links and why it must never sit inside a paragraph."}}},render:()=>e.jsx(S,{rows:C,columns:q,render:M})},h=[{id:"pp-newtab-collect",label:"Information We May Collect About You"}];function W({sections:t,tone:n}){return e.jsx("nav",{"aria-label":"Jump to section",children:e.jsxs("ol",{style:T,children:[t.map(a=>e.jsx("li",{children:e.jsx(o,{href:`#${a.id}`,tone:n,children:a.label})},a.id)),e.jsx("li",{children:e.jsx(o,{href:"#anchor-links-new-tab-example",tone:n,external:!0,children:"Read the full policy on our partner’s site"})})]})})}const s={name:"Opens in a new tab",args:{tone:"editorial"},argTypes:E,parameters:{controls:{sort:"alpha"},docs:{description:{story:'The last entry opts into `external`. It draws the external-link mark after its label and carries the spoken "(opens in a new tab)" note in its accessible name, both inherited from the atom automatically, because this row has never been its own component: any item in it that leaves the page says so, the same way any other `Link` in the library does.'}}},render:t=>e.jsxs("div",{children:[e.jsx(k,{tone:t.tone,children:e.jsx(W,{sections:h,tone:t.tone})}),e.jsx(v,{sections:h})]})};var d,c,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    tone: 'editorial'
  },
  argTypes: JUMP_NAV_ARG_TYPES,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The shape the requirement describes, and the behaviour that goes with it. Three entries from ' + 'the real privacy policy, each landing on a target section below. Click one and the ' + 'page scrolls, which is the point of the pattern and the one thing a picture of a list ' + 'cannot show. The numbering belongs to the \`<ol>\`, not to the author, so reordering the ' + 'sections never means renumbering anything by hand.'
      }
    }
  },
  render: args => <div>
      <ToneStage tone={args.tone}>
        <JumpNavList sections={VERTICAL_SECTIONS} tone={args.tone} />
      </ToneStage>
      <JumpTargets sections={VERTICAL_SECTIONS} />
    </div>
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Tones',
  parameters: {
    docs: {
      description: {
        story: 'Every treatment against every ground, replacing the four stories that each drew one ' + 'cell of it. Read a row to follow one tone between grounds, a column to compare the ' + 'three tones on the same ground. **Default** and **Editorial** keep the underline, for ' + 'a link inside a sentence, and differ only in ink: on thirteen of the twenty-one brands ' + 'that ink is the same, so there the two rows are identical by design. **Quiet** drops ' + 'the underline, which is what makes it usable in a list of links and why it must never ' + 'sit inside a paragraph.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={TONE_MATRIX_ROWS} columns={TONE_MATRIX_COLUMNS} render={renderToneMatrixCell} />
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var w,f,b;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Opens in a new tab',
  args: {
    tone: 'editorial'
  },
  argTypes: JUMP_NAV_ARG_TYPES,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The last entry opts into \`external\`. It draws the external-link mark after its label ' + 'and carries the spoken "(opens in a new tab)" note in its accessible name, both ' + 'inherited from the atom automatically, because this row has never been its own ' + 'component: any item in it that leaves the page says so, the same way any other ' + '\`Link\` in the library does.'
      }
    }
  },
  render: args => <div>
      <ToneStage tone={args.tone}>
        <JumpNavListWithExternalItem sections={NEW_TAB_SECTIONS} tone={args.tone} />
      </ToneStage>
      <JumpTargets sections={NEW_TAB_SECTIONS} />
    </div>
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const Y=["VerticalList","Tones","OpensInNewTab"];export{s as OpensInNewTab,r as Tones,i as VerticalList,Y as __namedExportsOrder,Q as default};
