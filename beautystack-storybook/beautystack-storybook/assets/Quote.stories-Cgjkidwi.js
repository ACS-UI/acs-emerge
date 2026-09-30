import{j as n}from"./iframe-6dx3hp_4.js";import{Q as i}from"./Quote-Du_RqtIZ.js";import{a as k}from"./annotationPage-eYx--AWZ.js";import"./preload-helper-C1FmrZbK.js";const h="It truly lasts all day, through work, workouts and everything in between.",T=`The formula never separates or goes patchy, even after a full day.

And it photographs true to shade every single time.`,x="For over a decade this is the one product I never travel without, through humid summers, twelve-hour shifts and every skin-care experiment in between, and it outlasts all of them.",q="Verified Buyer, Chicago IL",r={text:{name:"Quote text",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Sample testimonial copy (shown here)"}},description:"The quoted copy. It always comes from the caller: the component never writes it. An authored blank line between paragraphs is preserved."},attribution:{name:"Attribution",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"(none, optional)"}},description:"Optional, authorable. Who said the quote. Renders only when authored; leave it blank and nothing prints."}},O={title:"Atoms/Quote",component:i,tags:["autodocs"],parameters:{docs:{page:k("Quote"),toc:{headingSelector:"h2"},description:{component:"A stylized pull quote: one block of quoted text, set apart from ordinary body copy, to call out a notable line on a page. It renders as a real `<blockquote>`."}},componentDoc:{usage:`
## When to use

- ✅ **One notable line lifted out of the copy around it**, so a reader meets it before the
  paragraph it came from.
- ✅ **A short editorial statement** a page wants to say loudly and only once.

- ❌ **A customer review.** A review carries a rating, a title, a body and an author and date
  line, and Quote draws none of them.
- ❌ **Ordinary body copy**, however long. That is **Rich text**.
- ❌ **A notice about the page**, like a shipping message. Quote is editorial, not a notice.
- ❌ **A quotation inside a paragraph.** Quote is a block set apart, not inline punctuation.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Container**, the \`<blockquote>\` | always rendered | The element that tells a screen reader this is a quotation, not a styled paragraph |
| **Quotation marks** | always rendered | Drawn by the component itself, before and after the quote text. Not typed by the author, see Content rules |
| **Quote text**, the authored copy | always rendered | The primary content slot |
| **Attribution**, the authored credit line | rendered when authored | Optional. Who said the quote. See Content rules |

No other sub-parts, and no hover, focus or interactive state drawn anywhere, in the criteria or
in Figma.

- **Tokens own the look.** Shape, size and vertical rhythm. The same block re-themes across
  every brand without a value being restated.
- **The type is one named style, not a set of values.** The quote reads the **h1** style whole,
  so its face, weight, leading, tracking and case all arrive together from the brand. The mark is
  not assembled out of separate tokens.
- **The brand decides the face and the case, not this component.** On Revlon the quote reads in
  the heading face's bold cut; on six of the 21 brands the same style is also upper case. Both
  follow from the style, and neither is set here.
- **The author owns the words, never the marks.** The quote text and the attribution are both
  authored; the opening and closing quotation marks are drawn by the component and cannot be
  authored, so an author should never type their own \`"…"\` around the quote.

**A \`rating\` no longer exists on this component**, not merely undocumented. It would have
duplicated what a customer review carries: a rating, a title, a body and an author and date
line, and that scope stays owned by Review card.

### Variants

**There are none.** Figma draws one design at three widths, large, medium and small, never
three sub-variants of the component. Assuming an undrawn variant exists is how somebody ends
up building one nobody ratified.
`,guidance:`
## Behaviors

### States

- **Resting.** The only state Quote has.
- **No hover, no focus, no active state, on purpose.** This is a requirement, not a gap: the
  criteria says the component has "no functionality" at all. Adding a hover swap or a focus
  ring would break what was agreed, not complete it.
- **Breakpoints change size only.** Type steps down from the h1 rung (32px) to the h3 rung
  (20px), and the vertical padding follows. Tablet and mobile share that same smaller value:
  there is no separate tablet size. Nothing appears, disappears or rearranges.

### Interactions

- **None.** Quote ships no click, no hover, no focus and no keyboard handling of any kind.
  The criteria's own words are "no functionality".

## Rules

- ✅ **Do** keep it centred, on the plain paper background.
- ❌ **Don't** restyle the type by hand. The quote reads one named heading style, so a face, a
  weight or a case picked here would put the mark off the scale the rest of the library is on.
- ❌ **Don't** add a card, a border or a tinted background. The source draws none, at any size.

- ✅ **Do** let a long quote wrap on its own measure. A short one centres; a long one wraps at
  the container edge instead of stretching full width.
- ❌ **Don't** change what appears between breakpoints. Only the size and the rhythm may move.

- ❌ **Don't** make the quote clickable, hoverable or animated.
- ❌ **Don't** reach for Quote to build a customer review.

### Content rules

- ✅ **Do** author a multi-paragraph quote with a blank line between paragraphs. The break is
  preserved exactly as typed instead of collapsing into one run of text.
- ❌ **Don't** invent a character limit. It is undefined and owed by design, and this is the
  component where an open-ended limit does the most damage: one long line at heading size will
  overrun a page before anyone catches it.
- ❌ **Don't** type quotation marks into the quote text. The component draws them,
  non-authorable, so a hand-typed \`"…"\` around the copy would double the marks.
- ✅ **Do** author an attribution when the quote has a named source. Leave it out and nothing
  renders in its place.
- ❌ **Don't** reach for a star rating on a Quote. A rating belongs to Review card, never here.

## Open items

| Question | Owner |
|---|---|
| Should a pull quote read in the brand's heading face at all? It does today, and reads bold on Revlon, because the library's 32px styles are all heading styles: there is no plain-weight one at that size to reach for. Minting one is a decision across all 21 brands | Design / DS team |
`,spec:{elements:[{name:"Blockquote container",requirement:"required"},{name:"Quotation marks",requirement:"required"},{name:"Quote text",requirement:"required"},{name:"Attribution",requirement:"conditional",condition:"When an attribution is authored"}],authorability:[{name:"Quote text",rule:"The primary content slot. A blank line between paragraphs renders as a paragraph break."},{name:"Quotation marks",rule:"The component draws them, not authorable. Typing them into the copy doubles them."},{name:"Attribution",rule:"Optional and authorable. Renders only when authored, otherwise nothing prints."},{name:"Length",rule:"No character limit is set. One long line at heading size can overrun a page."},{name:"Rating",rule:"No rating exists on this component. That scope stays owned by Review card."},{name:"Look",rule:"Type, alignment and rhythm come from tokens. No card, border or tint is added."},{name:"Breakpoints",rule:"Only the size and the rhythm change. Nothing appears or disappears between them."}],variants:[{label:"Short quote",props:{text:h}},{label:"Multi-paragraph",props:{text:T}},{label:"Long quote",props:{text:x}},{label:"With attribution",props:{text:h,attribution:q}}],states:[{key:"resting",name:"Resting"}],render:A,interactions:["None. No click, no hover, no focus and no keyboard handling anywhere in the component.","Breakpoints re-scale only. The text steps from the h1 rung to the h3 size, and the padding follows.","An authored blank line between paragraphs is preserved rather than collapsed into one run."],accessibility:[{label:"Semantics",text:"The copy sits in a real blockquote, so assistive technology announces it as a quotation rather than as a styled paragraph."},{label:"Not a control",text:"Nothing inside a quote takes focus or carries an event handler."},{label:"Contrast",text:"The quote ink clears 4.5:1 against the page ground in every brand."},{label:"Screen reader read-out",text:"Each authored paragraph is announced as its own paragraph, never as one unbroken run of text."},{label:"Reflow",text:"A long quote stays readable at 320px and at 200% zoom, and never overruns the page."}],openItems:[{question:"Character limits are undefined, and a long quote at heading size is what damages a page.",owner:"Design"},{question:"Should a pull quote read the brand heading face? No plain-weight style exists at 32px to reach for instead.",owner:"Design / DS team"}]}}}};function A(s){return n.jsx("div",{style:{maxWidth:420},children:n.jsx(i,{...s})})}const e={args:{text:"I have been using ColorStay Foundation for over ten years. It truly lasts all day through work, workouts, and everything in between."},argTypes:r,parameters:{docs:{description:{story:"The whole ratified component: a centred, paper-white blockquote reading the h1 style, which is 32px in the brand's own heading face and cut, with the opening and closing marks drawn by the component itself. No card, no border. This story authors no **Attribution**, so none renders: try the field to see it appear, or see the Attribution story below. Edit **Quote text** to try your own copy, and change the **Brand** toolbar to see the face and the case move with it."}}}},t={name:"Multi-paragraph",args:{text:`The formula never separates or goes patchy, even after a full day.

And it photographs true to shade every single time.`},argTypes:r,parameters:{docs:{description:{story:"A quote authored as two paragraphs with a blank line between them. The authored break is preserved instead of collapsed. Check that the gap reads as intended, and that a single-paragraph quote (see the cover) picks up no stray whitespace."}}}},a={name:"Long",args:{text:"For over a decade this has been the one product I never travel without, through humid summers, twelve-hour shifts, and every skin-care experiment in between, and it simply outlasts all of them without ever feeling heavy or looking cakey by the end of the day."},render:s=>n.jsx("div",{style:{padding:"0 var(--size-200)"},children:n.jsx(i,{...s})}),argTypes:r,parameters:{docs:{description:{story:"A short quote (see the cover) centres on its own measure. A long one like this wraps at the container edge instead of stretching full width. Check it at 375, 768 and 1440: Figma's fixed pixel measures were artefacts of the sample copy, not tokens."}}}},o={name:"Attribution",args:{text:"I have been using ColorStay Foundation for over ten years. It truly lasts all day through work, workouts, and everything in between.",attribution:"Verified Buyer, Chicago IL"},argTypes:r,parameters:{docs:{description:{story:'The ratified `attribution` prop. **Not drawn in any Figma "Quote" variant**, but it is a real, optional, authorable part, not an undocumented mechanism. Leave it out and nothing renders in its place.'}}}};var d,l,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'I have been using ColorStay Foundation for over ten years. It truly lasts all day through work, workouts, and everything in between.'
  },
  argTypes: QUOTE_ARG_TYPES,
  parameters: {
    docs: {
      description: {
        story: 'The whole ratified component: a centred, paper-white blockquote reading the h1 style, ' + 'which is 32px in the brand\\'s own heading face and cut, with the opening and closing ' + 'marks drawn by the component itself. No card, no border. This story authors no ' + '**Attribution**, so none renders: try the field to see it appear, or see the ' + 'Attribution story below. Edit **Quote text** to try your own copy, and change the ' + '**Brand** toolbar to see the face and the case move with it.'
      }
    }
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Multi-paragraph',
  args: {
    text: 'The formula never separates or goes patchy, even after a full day.\\n\\nAnd it photographs true to shade every single time.'
  },
  argTypes: QUOTE_ARG_TYPES,
  parameters: {
    docs: {
      description: {
        story: 'A quote authored as two paragraphs with a blank line between them. The authored ' + 'break is preserved instead of collapsed. Check that the gap reads as intended, ' + 'and that a single-paragraph quote (see the cover) picks up no stray whitespace.'
      }
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Long',
  args: {
    text: 'For over a decade this has been the one product I never travel without, through humid summers, twelve-hour shifts, and every skin-care experiment in between, and it simply outlasts all of them without ever feeling heavy or looking cakey by the end of the day.'
  },
  render: args => <div style={{
    padding: '0 var(--size-200)'
  }}>
      <Quote {...args} />
    </div>,
  argTypes: QUOTE_ARG_TYPES,
  parameters: {
    docs: {
      description: {
        story: 'A short quote (see the cover) centres on its own measure. A long one like this ' + 'wraps at the container edge instead of stretching full width. Check it at 375, ' + "768 and 1440: Figma's fixed pixel measures were artefacts of the sample copy, not " + 'tokens.'
      }
    }
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,f,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Attribution',
  args: {
    text: 'I have been using ColorStay Foundation for over ten years. It truly lasts all day through work, workouts, and everything in between.',
    attribution: 'Verified Buyer, Chicago IL'
  },
  argTypes: QUOTE_ARG_TYPES,
  parameters: {
    docs: {
      description: {
        story: 'The ratified \`attribution\` prop. **Not drawn in any Figma "Quote" variant**, but it ' + 'is a real, optional, authorable part, not an undocumented mechanism. Leave it out ' + 'and nothing renders in its place.'
      }
    }
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const E=["Default","MultiParagraphQuote","LongQuote","WithAttribution"];export{e as Default,a as LongQuote,t as MultiParagraphQuote,o as WithAttribution,E as __namedExportsOrder,O as default};
