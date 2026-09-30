import{j as o}from"./iframe-6dx3hp_4.js";import{T as n}from"./Tag-A0JNg_qu.js";import{a as h}from"./annotationPage-eYx--AWZ.js";import{c as l}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";const d={showRemove:{...l("On"),name:"Dismissible",description:"Turn the pill into a button that takes the tag off, with a ✕ drawn on it. Only switch it on when the screen that placed the tag can actually honour it, and it always needs a spoken name."},children:{name:"Word",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Medium"}},description:"The tag's word. Always the caller's: the component never writes one, and never has an opinion about what it says."},onRemove:{control:!1,table:{disable:!0}},removeLabel:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}}},c={showRemove:!0,children:"Medium"};function p({showRemove:e,children:t}){return o.jsx(n,{onRemove:e?()=>{}:void 0,removeLabel:e?`Remove filter: ${t}`:void 0,children:t})}const v={title:"Atoms/Tag",component:n,tags:["autodocs"],parameters:{docs:{page:h("Tag"),toc:{headingSelector:"h2"},description:{component:"A short word in a bordered capsule: a topic, a facet, an attribute. It can be plain, or it can be dismissible, and a dismissible one is a button from edge to edge."}},componentDoc:{usage:`
## When to use

- ✅ **A word the content supplied**, like a review topic or a product attribute.
- ✅ **A filter someone applied**, when the screen can take it off again. Turn **Dismissible** on and
  the whole pill becomes the button that takes it off. **Filters and Sort** draws exactly this,
  above the results on desktop.
- ✅ **Several in a row.** The screen owns the row; the tag owns the capsule.

- ❌ **A status the system asserts**, like *Sale*, *New* or *Sold out*. That is **Badge**, which
  knows the word before any content arrives.
- ❌ **A choice that stays chosen.** A tag remembers nothing, so a persistent choice is the
  **option chip**'s job.
- ❌ **An action that is not "take this off".** A dismissible tag does exactly one thing. Anything
  else you press is a **Button** or an **Icon button**.
- ❌ **A sentence.** A tag holds a word or two. Anything longer is a **Callout**.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Capsule**, the pill | required | A plain container when the tag is read-only. When it is dismissible it **is the button**, the whole surface, edge to edge |
| **Word** | **required** | The tag's whole content. It holds one line and truncates rather than wrapping |
| **Dismiss**, the trailing ✕ | optional, and only when the screen can honour it | A **drawing**, not a second button. What speaks is the capsule's own spoken name |

- **Tokens own the look.** Height, inset, pitch, edge, radius, type and colour. The same capsule
  re-themes across all 21 brands without a value being restated.
- **The caller owns the words.** The word itself, and the dismiss's spoken name. There is no third
  category.
- **One tag, one tab stop.** A row of five applied filters is five controls, not ten.

### Tag is not Badge

The library already has a pill. The line between them is not how they look, it is **who chose the
word**, and the build enforces it.

| | **Badge** | **Tag** |
|---|---|---|
| Who chose the word | the **system** | the **content** |
| Vocabulary | a closed set the system knows | any word at all |
| Colour | decided by which one it is | one appearance, always |
| Examples | *Sale*, *New*, *Sold out* | *Long lasting*, *Medium* |

That is why a tag has **no kind, no tone and no colour axis**. Adding one fails the build, and so
does reaching for the feedback, commerce or chart colour ramps: all three carry exactly the kind of
meaning a tag does not have.

### Variants

**There are none.** One appearance, with one optional part. What changes between two tags is the
word inside them.

**No size axis and no leading glyph.** The capsule stands on one row height, the same rung a button
stands on, wherever it is placed. A tag with a mark in front starts to look like Badge.
`,guidance:`
## Behaviors

### States

- **A read-only tag has none.** No hover, no focus, no pressed, no disabled, no pointer cursor. It
  is a label, and a label is not a control.
- **Dismissible, hover.** The whole pill takes a quiet ground, one step off the page. It is the
  same single move the ghost button makes, on the same step.
- **Dismissible, hover on touch.** There isn't one. The rule is fenced behind a pointer check, so
  nothing sticks after a tap on a phone.
- **Dismissible, pressed.** One step further in the same direction. Never a new colour.
- **Dismissible, focus.** The standard ring, around the whole pill.
- **The target.** The pill stands 44px tall, so the pointer target is the capsule itself. It clears
  the library's own 40px floor, WCAG 2.5.8's 24px AA floor and WCAG 2.5.5's 44px AAA number without
  any invisible area doing the work.

**One ink, one move.** The word and the ✕ are the same colour once you reach for the pill, so a
state has exactly one thing to change: the ground behind them.

### Interactions

- **Clicking anywhere on a dismissible tag dismisses it**: the word, the ✕, the padding between
  them. The whole tag is the control, and the action after a click is always the dismiss.
- **The cost, stated once.** You can no longer select the word of a dismissible tag by dragging
  across it. A read-only tag is still plain text, which is what keeps that cost bounded.
- **Dismissing is reported, not performed.** The component says it was pressed. Whether the tag
  disappears, and what that does to the results behind it, is the screen's decision. This component
  holds no state at all.
- **The word never wraps.** It truncates with an ellipsis. A taller tag would change the height of
  the whole row, the same reasoning that holds a button's label to one line.

## Rules

- ✅ **Do** use a tag for a word the content supplied.
- ❌ **Don't** use one for a status the system asserts. That is a Badge.
- ❌ **Don't** give a tag a colour to mean something. It has no colour axis, and giving it one makes
  it Badge under a second name.

- ❌ **Don't** make a tag dismissible unless the screen can actually take it off.
- ✅ **Do** give every dismissible tag a spoken name that says what is being taken off, like
  "Remove filter: Fair". Without it a screen reader announces the word alone, *"Fair, button"*,
  which sounds fine and says nothing about what pressing it does.
- ❌ **Don't** put a second control inside a tag. The ✕ is a drawing; a button around it would be a
  second tab stop announcing the same action.
- ❌ **Don't** type the ✕ as a text character. It comes from the shared glyph set, so it keeps its
  shape on every brand typeface.

- ✅ **Do** let the screen own the row. Wrapping, the space between tags and the order they appear
  in all belong to the layout. A tag has no outer margin, on purpose.
- ❌ **Don't** put a sentence in one.

### Content rules

- ✅ **Do** write every word at the call site. The component supplies none and has no list of
  allowed ones.
- ❌ **Don't** expect a default dismiss label. There is none, and there could not be one: "Remove
  filter: Fair" names the thing being taken off, which only the screen knows. That copy does not
  exist yet in any locale either.
- ❌ **Don't** invent a character limit. No brief supplies one, so no number is written here.

## Open items

| Question | Owner |
|---|---|
| **The dismiss wording**, in every supported locale. "Remove filter: Fair" is a pattern this library chose, not one a brief ratified | Content |
| **Truncation or wrapping** for an over-long word. No brief covers it | Design / Content |
`,spec:{elements:[{name:"Capsule",requirement:"required",condition:"A plain container while the tag is read-only. When it is dismissible it is the button, edge to edge."},{name:"Word",requirement:"required",condition:"The whole content, always from the caller. It holds one line and truncates rather than wrapping."},{name:"Dismiss mark",requirement:"conditional",condition:"Only on a dismissible tag. The trailing glyph from the shared registry, hidden from screen readers."}],authorability:[{name:"Word",rule:"The author writes it at the call site. The component supplies none and allows any."},{name:"Word length",rule:"The author keeps it to a word or two, never a sentence. No character limit is set."},{name:"Dismissible",rule:"The author turns it on only when the screen can actually take the tag off."},{name:"Spoken name",rule:"The author writes what the dismiss takes off. There is no default to fall back on."},{name:"The row",rule:"The author owns the wrapping, the spacing and the order. A tag carries no outer margin."},{name:"Who chose the word",rule:"Fixed: the word comes from content. A word the system asserts is a Badge."},{name:"Colour",rule:"Fixed: one appearance. There is no kind, no tone and no colour axis to mean anything with."},{name:"Dismiss mark",rule:"Fixed: a drawing from the glyph set, never a text character and never a second button."},{name:"Look",rule:"Fixed: height, inset, pitch, edge, radius, type and colour all come from tokens, never the page."},{name:"Variants",rule:"Fixed: there are none. One appearance, one optional part, and no size axis."}],variants:[{label:"Plain",props:{removable:!1,word:"Long lasting"}},{label:"Dismissible",props:{removable:!0,word:"Medium"}},{label:"Long word",props:{removable:!0,word:"Deeply moisturising overnight"}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"},{key:"active",name:"Pressed",pseudo:"active"}],render:u,interactions:["Clicking anywhere on a dismissible tag dismisses it: the word, the mark, the padding between.","A read-only tag answers nothing. It is a label, and a label is not a control.","Dismissing is reported, never performed. This component holds no state of its own.","The word never wraps. It truncates with an ellipsis, so a row of tags keeps one height.","The pill stands 44px tall, so the pointer target is the capsule and nothing invisible is needed.","The word of a dismissible tag cannot be drag-selected. A read-only tag is still plain text."],accessibility:[{label:"Keyboard",text:"A dismissible tag is one button: Tab reaches it once, on the capsule, and Enter or Space takes the tag off."},{label:"Read-only tag",text:"A read-only tag renders as plain text with no role and no tab stop, because a label is not a control."},{label:"Accessible name",text:"The name belongs to the capsule and comes from the screen, so a dismiss announces what it removes instead of the word alone."},{label:"One tab stop",text:"A dismissible tag renders one button and hides the mark from screen readers, so five applied filters are five controls and not ten."},{label:"Focus",text:"The focus ring lands on the whole capsule and stays visible against the page ground on every brand."},{label:"Hover on touch",text:"The hover rule stays fenced behind the pointer query, so no ground sticks after a tap on a phone."},{label:"Reduced motion",text:"Hover and press move the ground and nothing else, and that change drops when the user asks for reduced motion."},{label:"Contrast",text:"The word holds 4.5:1 and the 1px edge holds 3:1 against the ground behind them, where the subtle border role is the one at risk."},{label:"Target size",text:"The capsule is 44px tall, so the pointer target is the drawn pill and two targets in a row never overlap."},{label:"Truncation",text:"A word cut short by the ellipsis is still readable in full to assistive technology, because the text itself is never shortened."},{label:"Right to left",text:"In a right-to-left direction the mark moves to the leading edge and the ellipsis to the trailing one."}],openItems:[{question:"What is the dismiss wording in every supported locale? The pattern is this library's choice, not a brief.",owner:"Content"},{question:"Should an over-long word truncate or wrap? No brief covers it, and truncation is what ships.",owner:"Design / Content"}]}}}};function u({removable:e,word:t}){return o.jsx("div",{style:{width:220,textAlign:"start"},children:o.jsx(n,{onRemove:e?()=>{}:void 0,removeLabel:e?`Remove filter: ${t}`:void 0,children:t})})}const a={name:"Default",args:c,argTypes:d,render:e=>o.jsx(p,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"The tag with everything a designer can change, which is almost nothing, and that is the design. Turn **Dismissible** off for a plain label; leave it on and hover anywhere on the pill to see the whole surface light up, because the whole surface is the button. Change the **Word** and notice the component has no opinion about what it says. Change the **Brand** toolbar and the same capsule re-themes across all 21 brands."}}}};var s,i,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Default',
  args: TAG_DEFAULT_ARGS,
  argTypes: TAG_ARG_TYPES,
  render: args => <ConfigurableTag {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The tag with everything a designer can change, which is almost nothing, and that is ' + 'the design. Turn **Dismissible** off for a plain label; leave it on and hover anywhere ' + 'on the pill to see the whole surface light up, because the whole surface is the ' + 'button. Change the **Word** and notice the component has no opinion about what it ' + 'says. Change the **Brand** toolbar and the same capsule re-themes across all 21 ' + 'brands.'
      }
    }
  }
}`,...(r=(i=a.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const T=["Default"];export{a as Default,T as __namedExportsOrder,v as default};
