import{j as t,r as A}from"./iframe-6dx3hp_4.js";import{O as i}from"./OptionSelector-OIytlthe.js";import{P as c}from"./Price-xMe2P_eJ.js";import{a as x}from"./annotationPage-eYx--AWZ.js";import{D as p,a as u}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./OptionChip-BlxUvyIz.js";const d=[{id:"single",label:"Single"},{id:"duo",label:"Duo pack"},{id:"trio",label:"Trio pack"}],k=[{id:"single",label:"Single",description:"One lipstick",price:t.jsx(c,{value:10.99})},{id:"duo",label:"Duo pack",description:"Two of the same shade",price:t.jsx(c,{value:19.99}),badge:"Best value"},{id:"trio",label:"Trio pack",description:"Three, for gifting",price:t.jsx(c,{value:27.99})}],s=(e,o)=>o==="one-sold-out"?e.map((a,n)=>n===1?{...a,soldOut:!0}:a):o==="one-unavailable"?e.map((a,n)=>n===2?{...a,unavailable:!0}:a):e,h={available:s(d,"available"),"one-sold-out":s(d,"one-sold-out"),"one-unavailable":s(d,"one-unavailable")},T={stock:{...u("All available"),name:"Availability",...p({labels:{available:"All available","one-sold-out":"One sold out","one-unavailable":"One unavailable here"},options:["available","one-sold-out","one-unavailable"]}),description:"Which options can be picked. Sold out and unavailable are two different facts and the group keeps them apart, see the Option chip page."},layout:{...u("Compact pills"),name:"Shape",...p({labels:{text:"Compact pills",row:"Full-width rows"},options:["text","row"]}),description:"A row of small pills, or a stack of full-width rows with descriptions and prices. The second shape is built and nothing places it yet."},label:{name:"Group heading",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Pack size"}},description:'What this group of options is: "Pack size", "Format", "Scent".'},options:{control:!1,table:{disable:!0}},value:{control:!1,table:{disable:!0}},onChange:{control:!1,table:{disable:!0}},name:{control:!1,table:{disable:!0}},labels:{control:!1,table:{disable:!0}}},C={stock:"available",layout:"text",label:"Pack size"};function P({stock:e,layout:o,label:a}){const[n,S]=A.useState("single"),O=o==="row"?s(k,e):h[e];return t.jsx("div",{style:{maxWidth:o==="row"?380:void 0},children:t.jsx(i,{label:a,options:O,value:n,onChange:S,layout:o})})}const j={title:"Molecules/Option selector",component:i,tags:["autodocs"],parameters:{docs:{page:x("Option selector"),toc:{headingSelector:"h2"},description:{component:"A named group of choices: pack size, format, scent, delivery frequency. It is deliberately **not** the shade picker."}},componentDoc:{usage:`
## When to use

- ✅ **A set of choices made of words**, under a heading that says what the set is.
- ✅ **When the shopper should read their choice back**, which the heading always does: "Pack size:
  Duo pack".

- ❌ **Shades.** A shade is a colour you read off a chip, so that is **Swatch** and **Swatch
  carousel**. The build stops you: this component never imports the swatch and has no colour
  property to be tempted with.
- ❌ **A single option on its own**, with no group to belong to. That is **Option chip** as a
  standalone toggle.
- ❌ **Buy once or subscribe.** That pairing is not this component's job.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Heading** | required | What this group of options is, and the chosen value it always echoes, "Pack size: Duo pack" |
| **Options** | required | Each one is the **Option chip** component. Nothing about a single choice is decided here |

- **Tokens own the look.** Pitch, inset and type.
- **A compact pill draws its word at the small rung, 14px**, and that is the **Option chip**'s
  decision rather than this group's: the atom's compact layout reads the
  small type recipe, so the size chips here and the shade filter on the product page speak with
  one voice. A full-width row keeps the body rung, 16px, because a row is a sentence and a chip
  is a label.
- **The caller owns the words.** The heading, and every option's label, description, price, badge
  and note, exactly as the commerce system reports them.

### The boundary that defines it

**A shade is a colour you read off a swatch. A size is a word you read off a label.** Modelling one
as the other is how "30-Piece" ends up drawn as a coloured circle with a tooltip. Shades stay on
the swatch and its carousel, everything made of words stays here, and the two never meet.

### What it takes from the platform

The group is a real fieldset, with a real legend and real radio buttons. That gives it three things
free, on every platform and every screen reader:

- Arrow-key movement between the options.
- The group's name, announced when focus enters it.
- "3 of 3" position announcements.

None of it is re-implemented, which is why this component contains no keyboard code at all.

### Variants

**Two shapes.** A row of compact pills, and a stack of full-width rows with descriptions and
prices. **The second is built and nothing places it yet**, shown because it ships, not because it
was agreed.
`,guidance:`
## Behaviors

### States

**The group itself has none.** Every state belongs to an individual option and is documented on the
**Option chip** page: default, chosen, sold out, unavailable here, hover, focus.

Three behaviours the group does own:

- **Something is always chosen.** If the screen names no value, the first option is shown as
  chosen. A group of options with none picked is a decision nobody made.
- **The heading always echoes the chosen value**, "Pack size: Duo pack". It is the one thing the
  group itself draws, and there is no way to ask it not to.
- **A blocked option cannot be picked, and says so without a word.** No state word is printed.
  Sold out is the strikeout, unavailable is the dimming, and the
  reason is spoken rather than shown: the group puts it in the option's accessible name, so a
  screen reader says "Duo pack, Sold out" while the screen shows a struck-through "Duo pack".

### Interactions

- **Choosing is reported, never performed.** The group tells the screen which option was chosen.
  What that does to the price, the photograph, the availability line or the button is the screen's
  business.
- **Arrow keys move between options**, and the platform does it, not this component.
- **An empty list renders nothing at all**, rather than an empty fieldset with a heading over it.

## Rules

- ✅ **Do** use it for a choice made of words.
- ❌ **Don't** use it for shades. The build stops you, and the swatch is the right component.

- ✅ **Do** let it own the group semantics.
- ❌ **Don't** hand-roll a set of buttons instead. You lose arrow keys, the group's name and the
  position announcement all at once.

- ❌ **Don't** expect it to price anything, or to know what a choice means.
- ❌ **Don't** remove a blocked option from the group. Keeping it means a screen reader still meets
  it, and a shopper still learns the difference between "wait" and "not for you".

### Content rules

- ✅ **Do** write the heading at the call site: "Pack size", "Format", "Scent".
- ✅ **Do** let every option's words arrive from the commerce system, exactly as given. A price
  delta, a "Best value", a shipping caveat: all of it is content.
- ✅ **Do** translate the two words this component owns. "Sold out" and "Unavailable" exist so a
  blocked option can be announced, and they are never printed.
- ❌ **Don't** blank them. The words are spoken rather than printed, so an empty one tells a
  screen reader nothing at all about the state.

## Open items

| Question | Owner |
|---|---|
| **The full-width row shape has no host** | Design |
| The two fallback state words are the component's rather than agreed copy | Content |
`,spec:{elements:[{name:"Group, a real fieldset",requirement:"required",condition:"Arrow keys, the group name and the position count come from the platform."},{name:"Heading",requirement:"required",condition:"What this group of options is."},{name:"Options",requirement:"required",condition:"Each one is the Option chip component."},{name:"Chosen value echo",requirement:"required",condition:'Always drawn. It appends the chosen label: "Pack size: Duo pack".'}],authorability:[{name:"Heading",rule:'The author writes it: "Pack size", "Format", "Scent".'},{name:"Option words",rule:"Every label, description, price, badge and note arrives from the commerce data."},{name:"Value echo",rule:"Fixed: the heading always echoes the chosen value."},{name:"Blocked options",rule:"A blocked option stays in the group. It is never taken out of the list."},{name:"Spoken state words",rule:'Translate "Sold out" and "Unavailable". Blanking them silences the state.'},{name:"Colour",rule:"Fixed: there is none. Shades are read off a chip, so they belong to the swatch."},{name:"Group semantics",rule:"Fixed to a real fieldset. A set of buttons is never hand rolled instead."},{name:"Option look",rule:"Fixed by the option chip: its type, its inset and all of its states."}],variants:[{label:"Compact pills",props:{layout:"text"}},{label:"Full-width rows",props:{layout:"row"}}],states:[{key:"available",name:"All available",props:{scenario:"available"}},{key:"sold-out",name:"One sold out",props:{scenario:"one-sold-out"}},{key:"unavailable",name:"One unavailable here",props:{scenario:"one-unavailable"}}],render:E,interactions:["Choosing is reported, never performed. What the choice changes is the screen business.","Arrow keys move between the options, and the platform does it rather than this component.","Something is always chosen: with no value named, the first option is shown as the chosen one.","A blocked option cannot be picked, and its reason is spoken rather than printed.","An empty list renders nothing at all, rather than a heading standing over an empty group."],accessibility:[{label:"Group semantics",text:"The group is a real fieldset with a legend, so arrow keys, the group name and the position count come from the platform."},{label:"Keyboard",text:"Arrow keys move between options and Tab moves past the group. No keyboard behaviour is re-implemented."},{label:"Blocked options",text:"A blocked option stays in the accessibility tree, and its state is never carried by colour or opacity alone."},{label:"Spoken reason",text:"A blocked option carries its reason in its accessible name, so it is announced rather than only drawn."},{label:"Focus",text:"Every option draws a visible keyboard focus state of its own."},{label:"Empty group",text:"An empty option list renders nothing, so a heading never stands over a group with no controls."},{label:"Motion",text:"The option transition is suppressed for anyone who has asked their system to reduce motion."},{label:"Touch",text:"Nothing in this group is reachable by hover alone, so a touch input loses no information."}],openItems:[{question:"The full width row shape is built and nothing places it yet. Does it ship?",owner:"Design"},{question:'Are "Sold out" and "Unavailable" the right spoken words, or does content own them?',owner:"Content"}]}}}},r={name:"Default",args:C,argTypes:T,render:e=>t.jsx(P,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"A live group, so click the options and they really do choose. Watch the heading: the chosen value is always written into it, which is how a shopper reads their own choice without hunting for the highlighted pill. Switch **Availability** to see a blocked option keep its place in the row rather than vanishing. Try the arrow keys, because that behaviour is the platform's, not this component's. Change the **Brand** toolbar and the group re-themes across all 21 brands."}}}},l={name:"Blocked option",argTypes:T,parameters:{docs:{description:{story:`One option sold out, one unavailable in this context. Neither is removed from the row: both stay reachable by keyboard, and both say why. The first one is struck through, the second one is dimmed. Removing them would be quieter and worse: a shopper using a screen reader would never learn the option exists, and a sighted shopper would not learn the difference between "wait" and "not for you".

Neither option prints its state as a word beside the label. Put a screen reader on this story and the second option announces as "Duo pack, Sold out", the third as "Trio pack, Unavailable". That announcement is the only way to learn the reason without seeing it, so it is checked in both states.`}}},render:()=>t.jsxs("div",{style:{display:"grid",gap:"var(--size-400)"},children:[t.jsx(i,{label:"Pack size",options:h["one-sold-out"],value:"single",onChange:()=>{}}),t.jsx(i,{label:"Pack size",options:h["one-unavailable"],value:"single",onChange:()=>{}})]})};let m=0;function E({layout:e,scenario:o}){m+=1;const a=e==="row"?s(k,o):h[o];return t.jsx("div",{style:{width:e==="row"?300:240,textAlign:"start"},children:t.jsx(i,{label:"Pack size",name:`matrix-selector-${m}`,options:a,value:"single",onChange:()=>{},layout:e})})}var b,w,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Default',
  args: OPTION_SELECTOR_DEFAULT_ARGS,
  argTypes: OPTION_SELECTOR_ARG_TYPES,
  render: args => <ConfigurableOptionSelector {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'A live group, so click the options and they really do choose. Watch the heading: the ' + 'chosen value is always written into it, which is how a shopper reads their own ' + 'choice without hunting for the highlighted pill. Switch ' + '**Availability** to see a blocked option keep its place in the row rather than ' + 'vanishing. Try the arrow keys, because that behaviour is the platform\\'s, not this ' + 'component\\'s. Change the **Brand** toolbar and the group re-themes across all 21 ' + 'brands.'
      }
    }
  }
}`,...(g=(w=r.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var y,v,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Blocked option',
  argTypes: OPTION_SELECTOR_ARG_TYPES,
  parameters: {
    docs: {
      description: {
        story: 'One option sold out, one unavailable in this context. Neither is removed from the row: ' + 'both stay reachable by keyboard, and both say why. The first one is struck through, ' + 'the second one is dimmed. Removing them would be quieter and worse: a shopper using a ' + 'screen reader would never learn the option exists, and a sighted shopper would not ' + 'learn the difference between "wait" and "not for you".\\n\\n' + 'Neither option prints its state as a word beside the label. Put a screen reader on ' + 'this story and the second option announces as "Duo pack, Sold out", the third as ' + '"Trio pack, Unavailable". That announcement is the only way to learn the reason ' + 'without seeing it, so it is checked in both states.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--size-400)'
  }}>
      <OptionSelector label="Pack size" options={STOCK_SCENARIOS['one-sold-out']} value="single" onChange={() => {}} />
      <OptionSelector label="Pack size" options={STOCK_SCENARIOS['one-unavailable']} value="single" onChange={() => {}} />
    </div>
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const B=["Playground","BlockedOptionsKeepTheirPlace"];export{l as BlockedOptionsKeepTheirPlace,r as Playground,B as __namedExportsOrder,j as default};
