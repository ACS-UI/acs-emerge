import{j as e}from"./iframe-6dx3hp_4.js";import{L as h}from"./Link-yk_PIpvX.js";import{a as p}from"./annotationPage-eYx--AWZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";import"./newTabMark-TI50-QeA.js";function c({lists:d=!1}){return e.jsxs("div",{className:"tpl-prose",style:{maxWidth:560},children:[e.jsx("h1",{className:"tpl-title",children:"How to Apply"}),e.jsxs("p",{children:["Build coverage in ",e.jsx("strong",{children:"thin layers"})," rather than one heavy pass, and set the high-movement areas with a translucent powder. See our"," ",e.jsx(h,{href:"#",editorial:!0,children:"full patch-test guide"})," ","before the first use."]}),d?e.jsxs("ul",{children:[e.jsx("li",{children:"Silicone emollients for a smooth, blurred finish"}),e.jsx("li",{children:"Mineral pigments for true-to-shade colour payoff"})]}):null]})}const w={title:"Molecules/Rich text",tags:["autodocs"],parameters:{docs:{page:p("Rich text"),toc:{headingSelector:"h2"},description:{component:"A type of text formatting that allows authors to customize how words look by adding styles like bold, italics, colors, lists and links, instead of just using plain text."}},componentDoc:{playground:!1,usage:`
## When to use

- ✅ **Long-form copy an author writes**, like an article body, a policy page or an FAQ answer.
- ✅ **A heading with paragraphs under it**, where the sizes should come from the brand rather
  than from whoever typed them.
- ✅ **A bulleted or a numbered list** inside that copy.

- ❌ **One stylised line pulled out of the copy.** That is **Quote**.
- ❌ **A notice about the whole page**, like a shipping message. Rich text is body copy, not a
  notice.
- ❌ **Copy paired with an image side by side.** That is **Text image band**.
- ❌ **Copy that collapses and expands.** That is **Accordion**.
- ❌ **A call to action.** Authors do not drop a Button inside the copy; a call to action is
  authored through its own CTA field wherever the host offers one, never inside rich text.
`,anatomy:`
## Anatomy

There is no \`<RichText>\` component to import. Write native markup inside a \`.tpl-prose\`
wrapper, and the layer supplies the measure, the rhythm and the type.

| Part | Required? | Note |
|---|---|---|
| **Display heading** (\`.tpl-title\`) | optional | Steps down to the display-mobile rung below the tablet breakpoint. Typographic only |
| **Body paragraph** | required | The one part every instance has |
| **Bulleted list** | optional, the Lists sub-variant | |
| **Numbered list** | optional, the Lists sub-variant | No Figma reference exists for it. The marker is here because the criteria ratifies it |
| **Inline emphasis**, bold and italic | optional | |
| **Inline link** | optional | Its look and its states belong to **Link**, not to this layer |

- **Tokens own the look.** Every size, weight and rhythm in this layer.
- **The author owns the words.** The heading, the paragraphs, the list items.
- \`.tpl-prose\` is the wrapper a template binds to. It is not a component boundary the way
  Quote or PDP Hero are.
- The templates binding it today are blog details, FAQ, content page, product details and
  campaign details. There is no generated Composition section on this page to keep that list
  honest, because there is no component to generate it from.

### Variants

Exactly two. **Default** is a heading plus prose. **Lists** adds a bulleted or a numbered list.
Nothing else changes between them.

**Lists reaches production in one place.** The product page draws bulleted lists in its detail
panels. The *Lists* story below is where both patterns sit side by side, the numbered one
included.
`,guidance:`
## Behaviors

### States

- **No interactive states.** Neither sub-variant has a hover, a focus or an expand state of
  its own.
- **A link inside the copy is the exception.** Its states belong to Link, not to this layer.
- **Breakpoints change type only.** The display heading steps down to an h1-equivalent size
  below the tablet breakpoint. Nothing is added, removed or reordered at any width.

### Interactions

- **None**, on either sub-variant.

## Rules

- ✅ **Do** bind prose to \`.tpl-prose\` so the measure and the rhythm come from tokens.
- ❌ **Don't** set a font size on a prose element. It is the one thing the criteria explicitly
  forbids.

- ❌ **Don't** place a Button inside the copy. A call to action is authored through its own CTA
  field wherever the host offers one, never as a block inside rich text.

- ✅ **Do** pick a named style, never a size. Heading and body sizes are token-level decisions,
  not per-instance choices.
- ❌ **Don't** carry letter-spacing on body copy or list items. Figma's 0.8px tracking arrived
  from an unrelated component, and no body role in this system is tracked.

- ✅ **Do** write real markup: real headings, real \`<ul>\` and \`<ol>\`, real links.
- ❌ **Don't** fake a list with typed bullet characters. Visual bullets are not a list, and a
  screen reader will not announce one.
- ❌ **Don't** pick a heading level by how big it looks. Levels stay sequential and never skip.
- ❌ **Don't** nest a list two levels deep without checking first. Nesting is undrawn and
  unspecified.
- ❌ **Don't** ship a real list to production assuming the screen-reader caveat is handled.
  \`.tpl-prose ul, .tpl-prose ol { list-style: none }\` can strip list semantics in Safari with
  VoiceOver, where "list, 4 items" goes unannounced. If it is lost, restore it with
  \`role="list"\` on the consumer markup.

### Content rules

- ✅ **Do** keep list items parallel: same grammar, same sentence case, and a numbered list only
  when the order matters. This is design-system guidance, not a ratified rule.
- ❌ **Don't** invent a character limit. Both sub-variants leave it undefined, and design owes
  the number.

## Open items

| Question | Owner |
|---|---|
| May authors apply arbitrary text colours inside rich text? The description says yes ("bold, italics, colors, lists, links"); the ratified response says sizes are a closed, token-level set. The two are not reconciled for colour | Design / Client |
`,spec:{elements:[{name:"Prose wrapper",requirement:"required",condition:"The wrapper class a template binds to. It supplies the measure, the rhythm and every type size."},{name:"Display heading",requirement:"optional",condition:"Steps down to an h1 size below the tablet breakpoint."},{name:"Body paragraph",requirement:"required"},{name:"Bulleted list",requirement:"optional",condition:"Real ul markup. The marker is drawn by the layer, not by the browser."},{name:"Numbered list",requirement:"optional",condition:"Real ol markup. The number is drawn by a CSS counter."},{name:"Inline emphasis",requirement:"optional"},{name:"Inline link",requirement:"optional",condition:"The Link atom, in its editorial form."}],authorability:[{name:"Heading",rule:"The author writes it. Fixed: the size comes from tokens and never sets the level."},{name:"Heading level",rule:"Levels run in sequence and never skip. How big a heading looks does not change one."},{name:"Body copy",rule:"The author writes the paragraphs, with bold and italic inline. No character limit is set."},{name:"Lists",rule:"Add a bulleted or a numbered list, as real markup, never as typed bullet characters."},{name:"List items",rule:"Keep them parallel: same grammar, same sentence case. Number them only when order matters."},{name:"List nesting",rule:"Fixed at one level. A second level is undrawn and unspecified."},{name:"Inline link",rule:"Authors place links in the copy. Fixed: the look and the states belong to the Link atom."},{name:"Type and rhythm",rule:"Fixed by tokens: every size, weight, tracking and the measure. Never set a font size."}],variants:[{label:"Default",props:{}},{label:"Lists",props:{lists:!0}}],states:[{key:"default",name:"Default"}],render:c,interactions:["There are none. Neither sub variant carries a hover, a focus or an expand state of its own.","A link inside the copy carries the Link states, which belong to that component.","Below the tablet breakpoint the display heading steps down. Nothing is added, removed or reordered."],accessibility:[{label:"Heading order",text:"Heading levels run in sequence and skip none. The level says where the copy sits in the page structure, not how big it draws."},{label:"List semantics",text:'The layer sets list-style to none, which can drop list semantics in Safari with VoiceOver, so put role="list" on a list at the call site.'},{label:"Real markup",text:"Headings, lists and links are real elements. A typed bullet character is read out as text, so a screen reader announces no list at all."},{label:"Focus",text:"This layer draws no focus style of its own, so keep the focus ring the Link carries, visible against the page ground."},{label:"Link purpose",text:"Link text names its destination, so a link read on its own still says where it goes."},{label:"Contrast",text:"Body copy and inline links clear 4.5:1 against the page ground, in every brand theme."},{label:"Reading measure",text:"Keep the measure the wrapper sets, so long copy stays inside a readable line length instead of running the full width of the page."},{label:"Touch targets",text:"An inline link takes the inline exception to target size. No control inside this layer needs a real tap area of its own."}],openItems:[{question:"May an author set a text colour inside rich text, or is colour closed to the token set?",owner:"Design / Product"}]}}}},t={name:"Heading and prose",render:()=>e.jsxs("div",{className:"tpl-prose",children:[e.jsx("h1",{className:"tpl-title",children:"Ingredient Glossary"}),e.jsxs("p",{children:["Understanding what goes into your beauty products helps you make more informed choices for your skin. All Revlon formulations are ",e.jsx("strong",{children:"dermatologist tested"}),", and ingredient concentrations are calibrated to balance ",e.jsx("em",{children:"efficacy"})," with tolerability across a wide range of skin types."]}),e.jsxs("p",{children:["When in doubt, we recommend patch testing any new product on the inside of your wrist before applying it to your face. See our"," ",e.jsx(h,{href:"#",editorial:!0,children:"full patch-test guide"})," ","for step-by-step instructions."]})]}),parameters:{docs:{description:{story:"The **Default** sub-variant: a display heading (`.tpl-title`) plus body paragraphs with inline bold, italic and a link. Every type size in this layer binds a token. Switch the **Brand** toolbar to see the same markup reflow under a different type scale, with nothing in the markup changing."}}}},a={name:"Lists",render:()=>e.jsxs("div",{className:"tpl-prose",children:[e.jsx("h1",{className:"tpl-title",children:"How to Apply"}),e.jsx("p",{children:"Follow these steps for full-coverage, all-day wear:"}),e.jsxs("ol",{role:"list",children:[e.jsx("li",{children:"Start with clean, moisturized skin and let it fully absorb."}),e.jsx("li",{children:"Apply with a damp sponge, working from the center of the face outward."}),e.jsx("li",{children:"Build coverage in thin layers rather than one heavy pass."}),e.jsx("li",{children:"Set with a translucent powder in high-movement areas."})]}),e.jsx("p",{children:"Key ingredients to look for in a long-wear formula:"}),e.jsxs("ul",{role:"list",children:[e.jsx("li",{children:"Silicone emollients for a smooth, blurred finish"}),e.jsx("li",{children:"Mineral pigments for true-to-shade colour payoff"}),e.jsx("li",{children:"A humectant to keep the wear from looking dry by hour eight, drawing moisture into the skin surface so the finish stays fresh through a full working day and holds its true shade under warm light"})]})]}),parameters:{docs:{description:{story:'The **Lists** sub-variant: a bulleted and a numbered list. Both markers are drawn by the layer rather than by the browser, so check marker alignment against the first line and wrap on a long item. The layer sets `list-style: none`, so a real list needs `role="list"` to keep announcing itself as one in Safari with VoiceOver.'}}}};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Heading and prose',
  render: () => <div className="tpl-prose">
      <h1 className="tpl-title">Ingredient Glossary</h1>
      <p>
        Understanding what goes into your beauty products helps you make more informed choices
        for your skin. All Revlon formulations are <strong>dermatologist tested</strong>, and
        ingredient concentrations are calibrated to balance <em>efficacy</em> with tolerability
        across a wide range of skin types.
      </p>
      <p>
        When in doubt, we recommend patch testing any new product on the inside of your wrist
        before applying it to your face. See our{' '}
        <Link href="#" editorial>
          full patch-test guide
        </Link>{' '}
        for step-by-step instructions.
      </p>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The **Default** sub-variant: a display heading (\`.tpl-title\`) plus body paragraphs ' + 'with inline bold, italic and a link. Every type size in this layer binds a token. ' + 'Switch the **Brand** toolbar to see the same markup reflow under a different type ' + 'scale, with nothing in the markup changing.'
      }
    }
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var r,o,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Lists',
  render: () => <div className="tpl-prose">
      <h1 className="tpl-title">How to Apply</h1>
      <p>Follow these steps for full-coverage, all-day wear:</p>
      <ol role="list">
        <li>Start with clean, moisturized skin and let it fully absorb.</li>
        <li>Apply with a damp sponge, working from the center of the face outward.</li>
        <li>Build coverage in thin layers rather than one heavy pass.</li>
        <li>Set with a translucent powder in high-movement areas.</li>
      </ol>
      <p>Key ingredients to look for in a long-wear formula:</p>
      <ul role="list">
        <li>Silicone emollients for a smooth, blurred finish</li>
        <li>Mineral pigments for true-to-shade colour payoff</li>
        <li>A humectant to keep the wear from looking dry by hour eight, drawing moisture into the skin surface so the finish stays fresh through a full working day and holds its true shade under warm light</li>
      </ul>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The **Lists** sub-variant: a bulleted and a numbered list. Both markers are drawn ' + 'by the layer rather than by the browser, so check marker alignment against the ' + 'first line and wrap on a long item. The layer sets \`list-style: none\`, so a real ' + 'list needs \`role="list"\` to keep announcing itself as one in Safari with VoiceOver.'
      }
    }
  }
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const k=["HeadingAndProse","Lists"];export{t as HeadingAndProse,a as Lists,k as __namedExportsOrder,w as default};
