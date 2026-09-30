import{j as e,S as v}from"./iframe-6dx3hp_4.js";import{L as s,a as b}from"./Link-yk_PIpvX.js";import{a as g}from"./annotationPage-eYx--AWZ.js";import{D as f}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";import"./newTabMark-TI50-QeA.js";const t={maxWidth:"46ch",color:"var(--color-text-primary)"},w={display:"inline-block",background:"var(--color-bg-inverse)",padding:"var(--size-100) var(--size-200)",borderRadius:"var(--radius-action)"},y={tone:{name:"Tone",...f({labels:{default:"Default",editorial:"Editorial",quiet:"Quiet",inverse:"Inverse"},options:b}),table:{category:"Options",defaultValue:{summary:"Default"}}},inverse:{name:"Inverse",control:{type:"boolean"},table:{category:"Options",defaultValue:{summary:"false"}}},editorial:{control:!1,table:{disable:!0}},href:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},external:{control:!1,table:{disable:!0}}},N={title:"Atoms/Link",component:s,tags:["autodocs"],parameters:{docs:{page:g("Link"),toc:{headingSelector:"h2"}}}},a={argTypes:y,args:{tone:"default",inverse:!1,href:"#link-default"},render:n=>e.jsxs("div",{style:n.inverse?{display:"grid",gap:"var(--size-300)",background:"var(--color-bg-inverse)",padding:"var(--size-300)",borderRadius:"var(--radius-action)"}:{display:"grid",gap:"var(--size-300)"},children:[e.jsxs("p",{style:n.inverse?{...t,color:"var(--color-text-inverse)"}:t,children:["Every shade is matched against a full range of skin tones before it ships."," ",e.jsx(s,{...n,children:"Read how we test"}),", or browse the finished range."]}),e.jsxs("p",{style:n.inverse?{...t,color:"var(--color-text-inverse)"}:t,children:["Full ingredient lists live on the brand's own site."," ",e.jsx(s,{...n,external:!0,href:"#link-external",children:"Read the full ingredient list"}),"."]})]}),parameters:{docs:{description:{story:'A link where most links live: inside a sentence. The controls above drive both instances, so Tone and Inverse can be read against real prose rather than against a label floating on its own. The second sentence opts into `external`: the mark and the "opens in a new tab" note it draws are conditional on the tab, not the tone, so they survive every combination the controls can set.'}}}},k=[{key:"default",label:"Default",props:{tone:"default"},dimension:"tone"},{key:"editorial",label:"Editorial",props:{tone:"editorial"},dimension:"tone"},{key:"quiet",label:"Quiet",props:{tone:"quiet"},dimension:"tone"}],x=[{key:"paper",label:"Paper"},{key:"paper-external",label:"Paper + external",props:{external:!0},dimension:"plane"},{key:"inverse",label:"Inverse",props:{inverse:!0},dimension:"plane"},{key:"inverse-external",label:"Inverse + external",props:{inverse:!0,external:!0},dimension:"plane"}];function T({tone:n,inverse:o,external:m}){const i=e.jsx(s,{href:"#tone-cell",tone:n,inverse:o,external:m,children:"Read how we test"});return o?e.jsx("span",{style:w,children:i}):i}const r={name:"Tones",parameters:{docs:{description:{story:'Every treatment against every ground. Read a row to follow one tone between grounds, a column to compare the three tones on the same ground. **Default** and **Editorial** keep the underline, for a link inside a sentence, and differ only in ink: on thirteen of the twenty-one brands that ink is the same, so there the two rows are identical by design. **Quiet** drops the underline, which is what makes it usable in a list of links and why it must never sit inside a paragraph. Inverse is a separate prop, not a fourth tone: it says what is behind the link, while tone says how the link reads against it. The two **+ external** columns are the same two grounds with `external` set: the mark and the "opens in a new tab" announcement a labelled new-tab link draws, shown here on every tone so this grid stops being the one page that never demonstrated it.'}}},render:()=>e.jsx(v,{rows:k,columns:x,render:T})};var l,d,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: LINK_ARG_TYPES,
  args: {
    tone: 'default',
    inverse: false,
    href: '#link-default'
  },
  render: args => <div style={args.inverse ? {
    display: 'grid',
    gap: 'var(--size-300)',
    background: 'var(--color-bg-inverse)',
    padding: 'var(--size-300)',
    borderRadius: 'var(--radius-action)'
  } : {
    display: 'grid',
    gap: 'var(--size-300)'
  }}>
      <p style={args.inverse ? {
      ...PROSE_STYLE,
      color: 'var(--color-text-inverse)'
    } : PROSE_STYLE}>
        Every shade is matched against a full range of skin tones before it ships.{' '}
        <Link {...args}>Read how we test</Link>, or browse the finished range.
      </p>
      <p style={args.inverse ? {
      ...PROSE_STYLE,
      color: 'var(--color-text-inverse)'
    } : PROSE_STYLE}>
        Full ingredient lists live on the brand's own site.{' '}
        <Link {...args} external href="#link-external">Read the full ingredient list</Link>.
      </p>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'A link where most links live: inside a sentence. The controls above drive both ' + 'instances, so Tone and Inverse can be read against real prose rather than against a ' + 'label floating on its own. The second sentence opts into \`external\`: the mark and the ' + '"opens in a new tab" note it draws are conditional on the tab, not the tone, so they ' + 'survive every combination the controls can set.'
      }
    }
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Tones',
  parameters: {
    docs: {
      description: {
        story: 'Every treatment against every ground. Read a row to follow one tone between grounds, a ' + 'column to compare the three tones on the same ground. **Default** and **Editorial** ' + 'keep the underline, for a link inside a sentence, and differ only in ink: on thirteen ' + 'of the twenty-one brands that ink is the same, so there the two rows are identical by ' + 'design. **Quiet** drops the underline, which is what makes it usable in a list of ' + 'links and why it must never sit inside a paragraph. Inverse is a separate prop, not a ' + 'fourth tone: it says what is behind the link, while tone says how the link reads ' + 'against it. The two **+ external** columns are the same two grounds with \`external\` ' + 'set: the mark and the "opens in a new tab" announcement a labelled new-tab link draws, ' + 'shown here on every tone so this grid stops being the one page that never demonstrated ' + 'it.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={TONE_MATRIX_ROWS} columns={TONE_MATRIX_COLUMNS} render={renderToneMatrixCell} />
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const P=["Default","Tones"];export{a as Default,r as Tones,P as __namedExportsOrder,N as default};
