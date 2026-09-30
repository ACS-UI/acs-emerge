import{j as t,C as c}from"./iframe-6dx3hp_4.js";import{P as a}from"./Price-xMe2P_eJ.js";import{a as h}from"./annotationPage-eYx--AWZ.js";import"./preload-helper-C1FmrZbK.js";const l={inverse:{control:"boolean",table:{category:"Options",type:{summary:"Boolean"},defaultValue:{summary:"Off"}},name:"Inverse",description:"Whether the host has put this price on a dark band. The amount takes the inverse ink. Turning it on also moves the preview onto the dark ground, since the ink is unreadable anywhere else."},value:{name:"Price",control:{type:"number",min:0,step:.01},table:{category:"Content",type:{summary:"Number"},defaultValue:{summary:"13.99"}},description:"The live amount, passed as a plain number so the component can format it. Never pass a pre-formatted string: it would block any future locale rule before one exists."},currency:{name:"Currency mark",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"$"}},description:"The symbol shown before both amounts. Locale, thousands separators and decimal rules are not defined yet: every brand shows two decimals today."}},d={inverse:!1,value:13.99},y={title:"Atoms/Price",component:a,tags:["autodocs"],parameters:{docs:{page:h("Price"),toc:{headingSelector:"h2"},description:{component:"A product's monetary amount: one live price, formatted by the component and shown with its currency mark."}},componentDoc:{usage:`
## When to use

- ✅ **The price of one product**, on a product card or a product detail page.
- ✅ **A price that has to re-theme.** Colour and type come from tokens, so the same price reads
  correctly on every brand without a value being restated.

- ❌ **A markdown or a promotion.** Neither brief names a sale, a struck price or a discount.
- ❌ **A word about the price**, like *Sale* or *New*. That small pill is **Badge**'s job.
- ❌ **A price range, a "from" price or a per-unit price.** Neither parent brief names one and
  none is built.
- ❌ **A professional (B2B) page.** Price renders nothing on that channel, and nothing has been
  agreed to stand in its place.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Root**, the row | required | An inline row that keeps the amount on one baseline and carries its type style |
| **Live amount**, the current price | **always required** | The whole of what this page ships |

- **Tokens own the look.** Colour and typography. The same price re-themes across every brand
  without a value being restated here.
- **The caller owns the numbers.** The amount and the currency mark are content. Both parent
  briefs record price as PIM data, "dynamically fetched content" on the product detail page and
  "dynamic based on PIM information" on the product card, so nobody types a price by hand.
- **The caller passes a number**, not a formatted string. Formatting is Price's job.

### Variants

**No style axis and no size axis.** Neither brief declares either one for a price.

**One axis, and it is the ground: Inverse.** The screen turns it on when the
price sits on a dark band, and the three inks swap for the dark-ground set. It changes nothing
else: the same parts, the same type, the same two decimals. Price never works the ground out for
itself, so a dark band that forgets to say so gets dark ink on dark paper.

**Prominence is unspecified.** How loud a price should be next to a product title is specified by
neither brief. It reads the body style in the brand's own emphatic cut at the same size, which is
a code choice standing in for a decision nobody has made.
`,guidance:`
## Behaviors

### States

- **Single amount.** The resting state, and what every consumer renders: the currency mark and
  the amount the caller passed.
- **On a dark band.** The screen turns **Inverse** on and the ink swaps for the dark-ground
  one. Nothing else about the price moves. Turn **Inverse** on in the controls to see it.
- **Nothing at all, on the professional channel.** Price renders nothing when the page is on the
  professional (B2B) channel, because professional buyers do not see consumer pricing. Neither
  brief mentions channels anywhere, so this is an architecture behaviour rather than a stated
  requirement.
- **No hover, focus or pressed state.** Price is not interactive, so none of the three exists.

To see the empty channel state, switch the **Channel** toolbar to **B2B professional**. A channel
showing no consumer price is an architecture behaviour, not a promotion.

### Interactions

- **None.** Price is not a control. Nothing happens when it is clicked, hovered or focused, and
  neither brief claims an interaction for it.
- **Wrap it in a link and the hover rule applies from that moment.** Both parents share the same
  line: no hover states on mobile.

## Rules

- ✅ **Do** pass the amount as a number and let Price format it.
- ❌ **Don't** pass a price you have already formatted. It blocks any future locale rule before
  one exists.

- ❌ **Don't** dim a price with \`opacity\` to make it secondary. Use the muted **token**. A faded
  element has no declared colour value, so its contrast cannot be checked against the 4.5:1 the
  resting amount has to clear.
- ❌ **Don't** hard-code a colour or a type value. It will not switch when the brand switches, and
  no token gate can see it.
- ❌ **Don't** write a bare hover rule. Fence it behind the pointer media query.

- ✅ **Do** turn **Inverse** on when the price sits on a dark band. The screen owns that call:
  Price never works out what it is standing on.
- ❌ **Don't** reach for a different colour to make a price readable on a dark band. That is what
  the inverse ground is for.

- ✅ **Do** check the price at 320px and at 200% zoom. A long amount on one baseline must not
  overlap the star rating beside it.
- ❌ **Don't** assume a price always renders. It is absent on the professional channel, so no
  layout may depend on its box being there.

### Content rules

- ✅ **Do** treat the amount as data. Both briefs record it as PIM content, so nobody types a
  price by hand.
- ❌ **Don't** invent a character limit. Both briefs say only that limits are to be defined by
  design.
- ❌ **Don't** assume a currency or a locale. Price defaults to \`$\` and always shows two
  decimals. Decimals, thousands separators and locale are undefined, which is an open question
  for a multi-market portfolio, not a spec.

## Open items

| Question | Owner |
|---|---|
| Is the price on the product detail page required or optional? The line that names it carries no marker, while every sibling in that list does | Client / Design |
| Is price a ratified product-card state at all, or is its mention in that brief's prose loose? | Client |
| Should the professional channel render nothing, or something else, such as a prompt to contact a rep? | Design |
| Price ranges, "from" pricing and per-unit pricing are named by neither brief and not built. Is that silence deliberate? | Client |
| Currency, locale, decimals and thousands separators for a multi-market portfolio | Design / PM |
| Should price render larger next to a product title? The weight half is settled: the amount reads the body style's emphatic cut at the same size. The size itself is still open | Design |
`,spec:{elements:[{name:"Root, the inline row",requirement:"required"},{name:"Live amount",requirement:"required"},{name:"Currency mark",requirement:"required"},{name:"Compare-at amount",requirement:"conditional",condition:"When a second amount is passed"}],authorability:[{name:"Amount",rule:"Pass a plain number, never a formatted string. The component formats it."},{name:"Decimals",rule:"Fixed at two. Locale, separators and rounding are not settable today."},{name:"Currency mark",rule:"The author sets it. It prints before the amount and defaults to a dollar sign."},{name:"Ground",rule:"The screen turns inverse on for a dark band. The price never detects its own ground."},{name:"Look",rule:"Colour and type come from tokens. Neither is set on the page."}],variants:[{label:"Consumer channels",props:{value:13.99,channel:"dtc"}},{label:"Professional channel",props:{value:13.99,channel:"pro"}}],states:[{key:"resting",name:"Resting"}],render:u,interactions:["None. Price is not a control: it takes no focus, and nothing happens on click or hover.","The caller passes a number and the component formats it, always to two decimals.","On the professional channel it returns nothing, so no layout may depend on its box.","The host declares the ground. On inverse the ink swaps and nothing else moves."],accessibility:[{label:"Non-colour cue",text:"A marked-down price is never told apart by colour alone. The strikethrough carries the distinction on every ground."},{label:"Contrast",text:"Every ink clears 4.5:1 against the ground it lands on, on the page ground and on the dark band, in all 21 brands."},{label:"No element opacity",text:"A quieter price uses the muted colour token. A faded element has no measurable contrast ratio."},{label:"Screen reader read-out",text:"The price is announced as the amount to pay."},{label:"Reflow",text:"The row stays readable at 320px and at 200% zoom, and never overlaps the rating beside it."},{label:"Not a control",text:"Price takes no focus and exposes no interactive role, so nothing announces it as something to activate."}],openItems:[{question:"Should the professional channel render nothing, or something else, such as a prompt to contact a rep?",owner:"Design"},{question:"Currency, locale, decimals and thousands separators for a multi-market portfolio.",owner:"Design / Product"},{question:"Should price render larger beside a product title? The weight is settled; the size is not.",owner:"Design"}]}}}};function u({channel:e,...i}){return t.jsx(c.Provider,{value:e,children:t.jsx(a,{...i})})}const n={name:"Default",args:d,argTypes:l,render:e=>e.inverse?t.jsx("div",{style:{background:"var(--color-bg-inverse)",padding:"var(--space-inset-loose)"},children:t.jsx(a,{...e})}):t.jsx(a,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"The price with every value a designer can change: the amount, and the mark that goes in front of it. This single-amount render is what every consumer draws by default. Switch the **Channel** toolbar to **B2B professional** to see it render nothing at all."}}}};var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Default',
  args: PRICE_DEFAULT_ARGS,
  argTypes: PRICE_ARG_TYPES,
  render: args => args.inverse ? <div style={{
    background: 'var(--color-bg-inverse)',
    padding: 'var(--space-inset-loose)'
  }}><Price {...args} /></div> : <Price {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The price with every value a designer can change: the amount, and the mark that goes ' + 'in front of it. This single-amount render is what every consumer draws by default. ' + 'Switch the **Channel** toolbar to **B2B professional** to see it render nothing at ' + 'all.'
      }
    }
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const f=["Cover"];export{n as Cover,f as __namedExportsOrder,y as default};
