import{j as e,r as h}from"./iframe-6dx3hp_4.js";import{a as b}from"./annotationPage-eYx--AWZ.js";import{S as m}from"./SearchBar-DwGR_hzY.js";import{S as v}from"./SearchSuggestions-CAczFYXo.js";import{c as S,D as T}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./Placeholder-Ed4iQRc7.js";import"./MenuItem-bBgP9Lwo.js";const x=[{label:"lipstick"},{label:"lipstick matte"},{label:"lipstick red"}],k=[{label:"Lip Color"},{label:"Best Sellers"},{label:"New Arrivals"}],A=[{name:"ColorStay Full Cover Foundation"},{name:"Super Lustrous Lipstick"},{name:"Age Defying Concealer"}],C={placeholder:{name:"Placeholder",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Search products"}},description:"The hint text shown before anyone types. Always authored by the caller."},query:{name:"Query",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Empty"}},description:"Seeds and shows a term someone already searched, for example on arrival at a results page. Leave it empty for the resting field."},action:{name:"Action",...T({labels:{clear:"Clear",submit:"Submit"},options:["clear","submit"]}),table:{category:"Options",type:{summary:"Choice"},defaultValue:{summary:"Clear"}},description:'Which control sits in the field. "Clear" is the search page: a ✕ that appears with the first character and empties the query. "Submit" is the navigation: a ghost arrow that runs the search, always on screen.'},showSuggestions:{...S("Off"),name:"Suggestions panel",description:"Show the auto-suggestions panel, composed as a sibling below the field and populated with lookalike suggestion, collection and product data. Turn it on and type: the panel appears once there is a term and follows what you type, the way the navigation mounts it."},onSearch:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}}},q={placeholder:"Search products",query:"",action:"clear",showSuggestions:!1};function n({placeholder:a,query:t,action:f,showSuggestions:w,...y}){const[s,r]=h.useState(t);return h.useEffect(()=>{r(t)},[t]),e.jsx(m,{placeholder:a,query:t,action:f,onQueryChange:r,...y,children:w&&s.length>0?e.jsx(v,{query:s,suggestions:x,collections:k,products:A}):null})}function D({width:a,...t}){return e.jsx("div",{style:{width:a||"100%"},children:e.jsx(n,{...t})})}const G={title:"Molecules/SearchBar",component:m,tags:["autodocs"],parameters:{docs:{toc:{headingSelector:"h2"},description:{component:"The field a shopper types a search term into. It always renders expanded: a magnifying glass, the input and one control, wrapped in a search landmark. Which control is the Action variation: a clear ✕ on the search page, a ghost submit in the navigation."}},componentDoc:{usage:`
## When to use

- ✅ **Site-wide search.** The one field a shopper types a product, a page or a content term into.
- ✅ **On a results page**, already carrying the term they searched, still editable from there.
- ✅ **With live suggestions.** Compose **Search suggestions** as a sibling below the field.

- ❌ **The collapsed search icon in the header.** That icon, and the close control beside it,
  belong to **Navigation**.
- ❌ **Narrowing a list already on screen.** That is **Filters + Sort Panel**.
- ❌ **Any other single-line input**, like an email or a promo code. That is **Text field**.

**This field is not built on Text field, and the difference is behaviour rather than looks.** A
search field clears its own term, holds a control inside its own box, owns a query from typing
through to submission, and is announced as a searchbox rather than as a text box. It resembles a
Text field and is not one, the same way **Select field** is not one. Resemblance is not the test: if it
were, most of this library would have to be built on Text field.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Form**, the search landmark | required | Wraps every part below, so the field can be found by landmark navigation |
| **Magnifying glass**, at the leading edge | required | A drawing, not a button. Nothing to click, nothing to tab to. It is the picture of what the field is for |
| **Field**, the visible input | required | This component's own. It reads the same height, radius, type and colour as **Text field** and **Select field**, and is held to them by the same checks, but it is not built on either |
| **Hidden label** | required, even though nobody sees it | An icon and a placeholder tell a sighted shopper what the field is. Assistive technology still needs a real name |
| **Clear button** | **Action: Clear only, and only while the field has a value** | An **Icon button** carrying a ✕, at the trailing end. Absent on an empty field, not hidden. Its name comes from authored text, never from the glyph |
| **Submit button** | **Action: Submit only** | An **Icon button** at Ghost carrying an arrow, in the same trailing seat, always on screen. Its name comes from authored text, never from the glyph |
| **Suggestions panel** | optional, a sibling below the field | Composed through \`children\`. The field never renders it on its own |

**One control sits inside the field's trailing end, never two.** The magnifying glass moved to
the leading edge and stopped being a button, so the trailing seat holds exactly one thing and the
Action variation decides which. The field reserves that one seat at all times, whether or not
anything is in it, so nothing shifts on the first or last keystroke of a search.

- **Tokens own the look.** Height, inset, radius, border, type and colour, all re-themed across
  the 21 brands without a value being restated.
- **The caller owns one word: the placeholder.** The field's hidden name and both buttons' names
  are the component's own and are the same on every screen, so a search field is announced the
  same way wherever it is used.
- **The shopper owns the value.** The query is content, never a default.

### Variants

**One axis, Action, and it names the control rather than the page.**

| Action | The control in the field | Where it is used |
|---|---|---|
| **Clear** (default) | A ✕ that appears with the first character and empties the query | The search page, and the reviews filter |
| **Submit** | A ghost arrow that runs the search, always on screen | The navigation |

The axis is named after what the control does, not after the page it lands on. A field that knew
it was "the navigation one" could not be used anywhere else, and it is already used in three
places.

**No size axis and no style axis.** Figma's older nodes are one state, an already-filled active
field, drawn at three container widths rather than three looks.

**Two components make up the search feature, not one.** The collapsed icon in the header, and
the close control that collapses the field again, are **Navigation**'s. This page is the field
and the two buttons that sit inside it.

**There are two crosses in the search feature, and they do different jobs.** The one inside the
field empties the query and leaves the field open. The one beside the field, in the header,
closes the search and puts the magnifying glass back. Only the first belongs to this page.
`,guidance:`
## Behaviors

### States

- **Resting.** Empty, showing its placeholder and its magnifying glass. On Action: Clear the
  trailing seat is empty; on Action: Submit the ghost arrow is already there.
- **Filled.** Already carrying a term. On Action: Clear the ✕ has appeared. A results page hands
  the field the query the shopper searched, and they can keep editing it from there. **There is no
  edge step.** The field rests on the control outline from the first paint, the same edge the text
  field and the drop-down rest on, so typing a term does not move the border. The empty field and
  the filled one read the same edge.
- **Focus.** A visible focus ring, on the field and on its button. It is drawn entirely in code,
  because Figma never draws one.
- **Hover.** The field's edge darkens past the resting control border; the button's is the
  **Icon button** atom's own.
- **Submitting.** On Action: Submit, clicking the arrow or pressing Enter. On Action: Clear,
  pressing Enter, which is the only way that variation runs a search.
- **Disabled and error.** Neither applies to this component: the field has no error state and
  no disabled state, and nothing is drawn for either. A search that returns nothing is a real
  state, and it belongs to the results page rather than to this field.

### Interactions

- **Typing is reported as it happens**, which is what lets a suggestions panel update live
  under the field.
- **The clear button appears with the first character and goes with the last.** It is not
  hidden when the field is empty, it is not there at all, so there is nothing extra to tab
  through on an empty field.
- **Clearing empties the field and puts the cursor back in it**, ready for the next term.
- **Enter always runs the search.** On Action: Submit the arrow does it too. On Action: Clear
  there is no button that submits, so Enter is the only way, which is what the drawing asks for.
- **Tab reaches the field, then the one button.** On Action: Clear with an empty field there is
  no button at all, so the field is the only stop.
- **The magnifying glass is never a tab stop.** It is a drawing at the leading edge; there is
  nothing there to operate.
- **Submitting hands the value over, and stops.** The screen runs the search. The field never
  resolves a destination.
- **The searched term seeds the field**, so a results page shows what was searched rather than
  a placeholder.
- **Opening and closing the bar is Navigation's.** The icon that reveals the field, and where
  focus lands when it does, is one transition owned a level up.

## Rules

- ✅ **Do** let the host own the open and close chrome.
- ❌ **Don't** put a close control inside SearchBar. Its ✕ empties the query; a second ✕ that
  closed the whole bar would be two crosses in one field doing different things.

- ✅ **Do** keep the field text at 16px. Below that, focusing the field makes iOS Safari zoom
  the whole page.
- ❌ **Don't** add breakpoint-specific behaviour. The brief asks for none.

- ✅ **Do** give every instance its own id. The header's field and a results page's field can
  be on screen together.
- ❌ **Don't** fall back to one shared id. Two fields then answer to the same label, and the
  label stops naming either of them.

- ✅ **Do** rely on the button's name. It ships with one, "Clear search" or "Submit search",
  because a glyph is not a name, and there is no call site that can change it.
- ❌ **Don't** let the glyph announce itself as well. The button says what it does; a named glyph
  inside it says it twice.

- ✅ **Do** keep the magnifying glass at the leading edge, as a drawing.
- ❌ **Don't** wrap it in a button. It is the picture of what the field is for, and it sits where
  reading starts. Making it a control puts a second thing to press in a field that has one.

- ✅ **Do** pick the Action to match what the field is for. The navigation runs a search, so it
  gets the submit arrow; the search page is already showing results, so it gets the ✕.
- ❌ **Don't** put both in the field. It reserves one seat, and two controls would sit on the
  query text.

- ✅ **Do** build the field on this component.
- ❌ **Don't** rebuild it on **Text field** because the two look alike. They behave differently,
  and that is the whole reason this one exists.

- ✅ **Do** let the clear button appear and disappear with the value.
- ❌ **Don't** keep it on screen and grey it out. An empty field has nothing to clear.

### Content rules

- ✅ **Do** write the placeholder at the call site. It is the one word here that is yours, and the
  default is "Search products".
- ❌ **Don't** go looking for the hidden label. It is the component's, it always reads "Search",
  and there is nothing to write.
- ❌ **Don't** invent a character limit. The brief says limits are owed by design.

## Open items

| Question | Owner |
|---|---|
| Which state is the field's default? The brief files two mutually exclusive states under one heading, icon-only and already-expanded | Client / Design |
| What are the character limits? Still undefined | Design |
| Should the open desktop field cap at roughly 800px, the way Figma's largest frame does, or fill the nav row the way the code does today? | Product |
| Is this smart search? Can it correct or match a misspelled word? Unresolved: the team is reviewing Adobe's live search to map today's behaviour to the future one | Adobe / Client |
`,spec:{elements:[{name:"Form, the search landmark",requirement:"required"},{name:"Magnifying glass",requirement:"required"},{name:"Field",requirement:"required"},{name:"Hidden label",requirement:"required"},{name:"Clear button",requirement:"conditional",condition:"Action: Clear, while the field has a value"},{name:"Submit button",requirement:"conditional",condition:"Action: Submit"},{name:"Suggestions panel",requirement:"optional"}],authorability:[{name:"Placeholder",rule:'The author writes it. It defaults to "Search products".'},{name:"Hidden label",rule:'The component owns it. It reads "Search" on every instance and there is nothing to author.'},{name:"Query",rule:"The screen passes the searched term in, so a results page shows what was searched."},{name:"Trailing control",rule:"Action picks one seat: a submit arrow or a clear cross. Never two, never a close."},{name:"Magnifying glass",rule:"A drawing at the leading edge. It is never a button and never a tab stop."},{name:"Field id",rule:"Every instance gets its own. Two fields on one screen never share a label."},{name:"Length",rule:"No character limit is set for the placeholder or for the query."},{name:"Look",rule:"Type, colour, height and radius come from tokens, and the field text stays at 16px."}],variants:[{label:"Action: Clear",props:{action:"clear"}},{label:"Action: Submit",props:{action:"submit"}}],states:[{key:"resting",name:"Resting",props:{width:420}},{key:"filled",name:"Filled",props:{width:420,query:"colorstay"}},{key:"hover",name:"Hover",pseudo:"hover",props:{width:420}},{key:"focus",name:"Focus",pseudo:"focus-visible",props:{width:420,query:"colorstay"}}],render:D,interactions:["Typing is reported as it happens, which is what lets a panel below the field update live.","The clear button arrives with the first character and is gone with the last, never greyed.","Clearing empties the field and puts the cursor back into it.","Enter submits on both variations. On Action Submit the arrow submits too.","Tab reaches the field, then the one control in the well. The magnifier is never a stop.","Submitting hands the value to the screen and stops. The field resolves no destination.","The query seeds and follows the field, so a results page shows the term that was searched.","Opening and closing the bar belongs to Navigation, never to this component."],accessibility:[{label:"Landmark",text:"The field sits inside a search landmark, so it can be reached by landmark navigation."},{label:"Field label",text:"A clipped label names the field. It is never removed, and its id is unique to the instance so two fields never share one name."},{label:"Named controls",text:"Every icon-only control carries an authored name, and the glyph inside it is hidden, so the control is announced once."},{label:"Focus visible",text:"The field and its button each show a visible focus ring. No design source draws one, so it is drawn in code."},{label:"Submitting",text:"Enter fires exactly one submit on both variations, and the clear cross is never the default button of the form."},{label:"Contrast",text:"The placeholder, the query ink and the field edge clear their thresholds against the field ground in every brand."},{label:"Zoom on iOS",text:"The field text stays at 16px, so focusing it never zooms the whole page in iOS Safari."},{label:"Keyboard into the panel",text:"With a suggestions panel below, Tab moves through it and every row is a named button. Arrow keys still belong to the text in the field, not to the list."}],openItems:[{question:"Which state is the field default? The brief files two mutually exclusive states under one heading, an icon in the header and an open field.",owner:"Product / Design"},{question:"What are the character limits? Still undefined.",owner:"Design"},{question:"Should the open desktop field cap at roughly 800px the way the largest frame draws it, or fill the nav row the way the code does today?",owner:"Product"},{question:"Is this smart search? Should a misspelled term be corrected or matched, and by which service?",owner:"Product"}]}}}},i={name:"Default",args:q,argTypes:C,render:a=>e.jsx(n,{...a}),parameters:{docs:{page:b("SearchBar"),description:{story:`The field with everything a designer can change. **Placeholder** and **Query** are text; **Suggestions panel** is a toggle. Two presets worth trying: set **Query** to something like *colorstay foundation* to see the state a results page arrives in, and switch **Suggestions panel** on and then type, to see the composed sibling appear below the field and follow the term as it is written. Change the **Brand** toolbar and the same field re-themes across all 21 brands.

**Switch Action to see the two variations.** On *Clear* the field carries a ✕ that appears with the first character and empties the field, handing focus back when it is clicked; on an empty field it is gone entirely. On *Submit* the field carries a ghost arrow instead, always on screen, which runs the search. **Enter** runs the search either way. The magnifying glass at the leading edge is a drawing in both: nothing to click, nothing to tab to.`}}}},o={name:"States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--size-500)"},children:[e.jsx(n,{action:"clear",placeholder:"Search products",query:"","aria-label":"Search page, empty"}),e.jsx(n,{action:"clear",placeholder:"Search products",query:"banana","aria-label":"Search page, filled"}),e.jsx(n,{action:"submit",placeholder:"Search products",query:"banana","aria-label":"Navigation"})]}),parameters:{docs:{description:{story:"The three drawn rows, in order. The first two are one action in two content states, empty then filled, and they belong to the search page: the ✕ arrives with the text. Read the two edges against each other: the empty field rests on the light border every field in this library rests on, and the field holding a term steps up to the control outline, which is the same step the text field and the drop-down take. The third row is the navigation, and the ghost arrow that tells it apart is always there whether or not anything has been typed; it carries a term, so it draws the filled edge too. The magnifying glass is in the same place in all three and is a control in none of them. Change the **Brand** toolbar to see all three re-theme together."}}}};var l,d,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Default',
  args: SEARCH_BAR_DEFAULT_ARGS,
  argTypes: SEARCH_BAR_ARG_TYPES,
  render: args => <ConfigurableSearchBar {...args} />,
  parameters: {
    docs: {
      page: annotationPage('SearchBar'),
      description: {
        story: 'The field with everything a designer can change. **Placeholder** and **Query** are ' + 'text; **Suggestions panel** is a toggle. Two presets worth trying: set **Query** to ' + 'something like *colorstay foundation* to see the state a results page arrives in, ' + 'and switch **Suggestions panel** on and then type, to see the composed sibling ' + 'appear below the field and follow the term as it is written. ' + 'Change the **Brand** toolbar and the same field re-themes across all 21 brands.\\n\\n' + '**Switch Action to see the two variations.** On *Clear* the field carries a ✕ ' + 'that appears with the first character and empties the field, handing focus back ' + 'when it is clicked; on an empty field it is gone entirely. On *Submit* the field ' + 'carries a ghost arrow instead, always on screen, which runs the search. ' + '**Enter** runs the search either way. The magnifying glass at the leading edge is ' + 'a drawing in both: nothing to click, nothing to tab to.'
      }
    }
  }
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,g,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-500)'
  }}>
      <ConfigurableSearchBar action="clear" placeholder="Search products" query="" aria-label="Search page, empty" />
      <ConfigurableSearchBar action="clear" placeholder="Search products" query="banana" aria-label="Search page, filled" />
      <ConfigurableSearchBar action="submit" placeholder="Search products" query="banana" aria-label="Navigation" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The three drawn rows, in order. The first two are one action in two ' + 'content states, empty then filled, and they belong to the search page: the ✕ ' + 'arrives with the text. Read the two edges against each other: the empty field ' + 'rests on the light border every field in this library rests on, and the field ' + 'holding a term steps up to the control outline, which is the same step the text ' + 'field and the drop-down take. The third row is the navigation, and the ghost arrow ' + 'that tells it apart is always there whether or not anything has been typed; it ' + 'carries a term, so it draws the filled edge too. The ' + 'magnifying glass is in the same place in all three and is a control in none of ' + 'them. Change the **Brand** toolbar to see all three re-theme together.'
      }
    }
  }
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const W=["Playground","States"];export{i as Playground,o as States,W as __namedExportsOrder,G as default};
