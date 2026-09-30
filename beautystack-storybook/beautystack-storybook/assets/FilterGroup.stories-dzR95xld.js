import{j as n,r as x}from"./iframe-6dx3hp_4.js";import{F as y}from"./FilterGroup-sj5PvoiP.js";import{a as S}from"./annotationPage-eYx--AWZ.js";import{D as d,a as p}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Checkbox-C5uneDTR.js";import"./ControlIndicator-DEJX7FyE.js";import"./Icon-BihOhSWB.js";import"./FieldRequirement-Dn5H0DsY.js";import"./CheckboxGroup-Hr1vSafZ.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./popoverPlacement-CK5qQ-ie.js";function c({initialSelected:e=[],...a}){const[t,s]=x.useState(()=>new Set(e)),v=(h,k)=>{s(T=>{const l=new Set(T);return k?l.add(h):l.delete(h),l})};return n.jsx("div",{style:{maxWidth:280,width:"100%"},children:n.jsx(y,{...a,selected:t,onChange:v})})}const o={finish:{title:"Finish",facets:[{label:"Matte",value:"matte",count:21},{label:"Satin",value:"satin",count:14},{label:"Gloss",value:"gloss",count:9},{label:"Sheer",value:"sheer",count:6},{label:"Metallic",value:"metallic",count:3}],initialSelected:["matte","satin"]},coverage:{title:"Coverage",facets:[{label:"Full Coverage",value:"full",count:24},{label:"Medium Coverage",value:"medium",count:17},{label:"Sheer Coverage",value:"light",count:8}],initialSelected:["full"]},shadeRange:{title:"Shade Range",facets:[{label:"Fair",value:"fair"},{label:"Light",value:"light-shade"},{label:"Medium",value:"medium-shade"},{label:"Tan",value:"tan"},{label:"Deep",value:"deep"}],initialSelected:[]},colour:{title:"Colour",kind:"colour",facets:[{label:"Nude",value:"nude",color:"#E2B99B",count:18},{label:"Beige",value:"beige",color:"#C99A6E",count:14},{label:"Coral",value:"coral",color:"#F2734F",count:9},{label:"Pink",value:"pink",color:"#DA73A1",count:21},{label:"Red",value:"red",color:"#C8102E",count:26},{label:"Berry",value:"berry",color:"#9D374B",count:12},{label:"Plum",value:"plum",color:"#7B3F62",count:8},{label:"Wine",value:"wine",color:"#560429",count:7},{label:"Mocha",value:"mocha",color:"#8A4446",count:11},{label:"Espresso",value:"espresso",color:"#3E2723",count:6}],initialSelected:["red","berry"]}},C={category:{...p("Finish"),name:"Category",...d({labels:{finish:"Finish",coverage:"Coverage",shadeRange:"Shade Range",colour:"Colour"},options:["finish","coverage","shadeRange","colour"]}),description:"Which real facet set to preview. Shade Range carries no count on any option, so switch to it to see the list read cleanly without them. Colour is the shade grid: the same checkbox rows, laid out across the column with the shade each option stands for."},state:{...p("Expanded"),name:"State",...d({labels:{expanded:"Expanded",collapsed:"Collapsed"},options:["expanded","collapsed"]}),description:"Which way the category opens on load. The trigger stays fully interactive after that, so click it to open or close it for real."},title:{control:!1,table:{disable:!0}},facets:{control:!1,table:{disable:!0}},selected:{control:!1,table:{disable:!0}},onChange:{control:!1,table:{disable:!0}},defaultOpen:{control:!1,table:{disable:!0}},initialSelected:{control:!1,table:{disable:!0}}},F={category:"finish",state:"expanded"};function E({category:e,state:a}){const t=o[e]??o.finish;return n.jsx(c,{title:t.title,facets:t.facets,initialSelected:t.initialSelected,defaultOpen:a==="expanded",kind:t.kind},`${e}-${a}`)}const L={title:"Molecules/Filter Group",component:y,tags:["autodocs"],parameters:{docs:{page:S("Filter Group"),toc:{headingSelector:"h2, h3"},description:{component:"One criterion a shopper can narrow a list of products by: a trigger carrying the category name and a chevron, opening onto a list of checkboxes more than one of which can be ticked at a time. The categories and their options both arrive from the content and its tagging, and this component draws the one it is given."}},componentDoc:{usage:`
## When to use

- ✅ **One facet category inside the filter panel**, like Finish, Coverage or Shade Range.
- ✅ **Options a shopper can have on at the same time.** Ticking one never un-ticks another.

- ❌ **On its own, anywhere.** Filter Group is **Filters and Sort**'s child. This page shows it
  alone only so its parts and states can be specified.
- ❌ **Choosing one value out of many.** Sorting is a **Select field**, not a list of checkboxes.
- ❌ **Collapsible content that is not a filter.** That is **Accordion**.
- ❌ **The applied-filter pills, the results count or the sort control.** They belong to the
  panel around this component, not to it.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Category trigger**, the label and the chevron | required | The only way to open or close the category. The chevron flips to say which way it is |
| **Options panel**, the list of sub-filters | required, **and drawn only while the category is open** | Hidden entirely when closed, not dimmed. Closed is the resting state Figma itself draws |
| **Option row**, a checkbox, a label and a count | required, **and the count is undecided** | Whether the "(21)" after a label ships at all is still open, below |

- **Tokens own the look.** Shape, spacing, colour, and the checkbox's own painting.
- **The caller owns the words and the numbers.** Category titles, facet labels and facet counts
  all arrive as data, pulled from content tagging and metadata rather than typed in.
- **The checkbox is not this component's own control.** It composes the **Checkbox** atom. Filter
  Group owns the row's frame and the rhythm around it, and nothing about how the control paints.
- **The box leads the row**, with the option's words after it. That is the **Checkbox**'s own
  single arrangement, taken as it comes rather than re-drawn here, so a facet row and a consent
  line in a form are the same control laid out the same way.
- **A facet's "(21)" is part of the option, not a note on it.** It takes the row's own size and
  ink, the same as the words beside it, so a facet reads as one run of text.
- **A rule sits between two categories**, never under the last one. A panel of one category
  carries none at all.

### Variants

**None.** The criteria ratifies no variant axis here. Figma draws two states of one
component, a closed trigger and an open one, not two components. Stated rather than left implied.
`,guidance:`
## Behaviors

### States

- **Closed on load.** Every category in the panel starts collapsed, and a shopper opens the ones
  they want. The host can still say otherwise for a single category, but the filter panel does not:
  it loads them all closed, including a category that already holds a filter from the page's own
  address.
- **Closed or open.** A click on the trigger toggles it either way after that.
- **Closed keeps its selection.** Collapsing a category never clears what is ticked inside it.
- **Option, resting or selected.** A ticked facet always looks different, and never by a colour
  change alone.
- **Focus.** The trigger and every checkbox draw their own ring. Figma shows no focus treatment
  for this component at all, so the ring is a design-system convention rather than a drawn one.
- **Hover, on the category trigger.** The title and the chevron move to the accent colour
  together.
- **Hover, on an option row.** Only the checkbox's own edge darkens. There is no row fill. Both
  hovers are design-system conventions: the criteria asks for neither.
- **Pressed.** The trigger steps one further along the same accent ladder, so a real press reads
  as darker than a hover rather than identical to it.
- **Disabled, and zero results.** Neither exists. Nothing in the criteria describes a
  disabled option or an empty facet list, so if the results ever return a facet with no matches,
  that state still has to be designed before it ships.

### Interactions

- **Clicking the trigger opens or closes the category.** A second click reverses the first.
- **The sub-filters exist only while the category is open.**
- **Ticking a sub-filter hands the choice to the results.** The hand-off itself, and the brief
  loading state it may cause, belong to the panel around this component.
- **More than one sub-filter can be on at once**, inside one category.
- **The whole option row is the tap target**, not just the box.

## Rules

- ✅ **Do** let a shopper have several filters on at once inside one category.
- ✅ **Do** keep the whole option row tappable.
- ❌ **Don't** collapse a category while a filter inside it is on.
- ❌ **Don't** signal a ticked option by colour alone.

- ❌ **Don't** hard-code the facet list. It always arrives as data.
- ❌ **Don't** hand-roll a second checkbox. One implementation is what keeps the box the same
  colour on every brand.

### Content rules

- ✅ **Do** expect the category title, the facet labels and the facet counts to arrive from
  content tagging and metadata, never as authored copy.
- ✅ **Do** leave the order of the categories to the panel. Every category the content provides is
  shown, in the order it was configured, and this component never sorts or hides one.
- ❌ **Don't** invent a character limit for a title or a label. They are left to design.

## Open items

| Question | Owner |
|---|---|
| Should the facet count ship at all: required, optional, or dropped? | Design |
`,spec:{elements:[{name:"Category trigger",requirement:"required",condition:"The title and the chevron. The only way to open or close the category."},{name:"Options panel",requirement:"required",condition:"Drawn only while the category is open. Closed hides it, never dims it."},{name:"Option row",requirement:"required",condition:"A checkbox, a label and an optional count. The control is the Checkbox atom, drawn exactly as that atom draws it."},{name:"Facet count",requirement:"optional",condition:"The number after a facet label, when the facet carries one."}],authorability:[{name:"Category title",rule:"It arrives as data from content tagging, never typed in at the call site."},{name:"Facet list",rule:"It always arrives as data. The list is never hard coded."},{name:"Facet labels",rule:"They arrive as data with the facets, and so do their counts."},{name:"Starting state",rule:"Categories load closed. The panel sets it for every group; a lone host may say otherwise."},{name:"Group order",rule:"The panel decides which categories exist and in what order. This component reorders nothing."},{name:"Closed with a pick",rule:"Never load a category closed while a facet inside it is already on."},{name:"Facet control",rule:"Fixed to the shared checkbox. A second one is never hand rolled."},{name:"Row chrome",rule:"Fixed: shape, spacing, colour, the tick mark and the rule between categories."}],variants:[{label:"Nothing selected",props:{picks:[]}},{label:"Two selected",props:{picks:["matte","satin"]}},{label:"Colour samples, two selected",props:{set:"colour",picks:["red","berry"]}}],states:[{key:"collapsed",name:"Collapsed",props:{open:!1}},{key:"expanded",name:"Expanded",props:{open:!0}}],render:A,interactions:["Clicking the trigger opens or closes the category. A second click reverses the first.","The sub-filters exist only while the category is open.","More than one sub-filter can be on at once inside one category.","The whole option row is the tap target, not only the box.","Collapsing never clears what is ticked inside the category.","Ticking a facet hands the choice to the panel around this component."],accessibility:[{label:"Keyboard",text:"The trigger and every checkbox are native controls, so nothing re-implements Enter, Space or Tab."},{label:"Screen reader",text:"The trigger owns its panel by id and the panel names itself back, so the open state is announced with what it controls."},{label:"Facet labels",text:"Every checkbox has a label tied to it programmatically, and the whole row is that label."},{label:"Focus",text:"The trigger and every checkbox draw a visible keyboard focus state of their own."},{label:"Checked affordance",text:"A ticked facet draws a real tick, so the state never rests on a colour change alone."},{label:"Unique ids",text:"Ids are derived per instance, so a panel mounting this group twice cannot cross its labels."},{label:"Reading order",text:"The box draws after the words but stays first in the markup, so label and reading order are unchanged."},{label:"Collapsed options",text:"A closed category hides its options outright, so nothing inside it can be reached by keyboard while it is shut."},{label:"Grouped facets",text:"The options sit in a real group named after their category, so they are announced as one set."},{label:"Name and count together",text:"The facet name and its count are one label, so they are announced together rather than as two things."},{label:"Target size",text:"The label wraps the input, so the whole option row is the tap target and not only the box."}],openItems:[{question:"Should the facet count ship at all: required, optional, or dropped?",owner:"Design"},{question:"What are the character limits for a category title and a facet label?",owner:"Design"},{question:"The facet row height in the design source sits between two token steps. Does it force a change?",owner:"Design"}]}}}},r={name:"Default",args:F,argTypes:C,render:e=>n.jsx(E,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:`The category with the two things a designer can change: which real facet set it shows, and which way it opens. Matte and Satin start ticked, so the selected treatment is visible without clicking anything.

**Presets worth trying.** Set **Category** to *Coverage* and **State** to *Collapsed*: expanding it again shows "Full Coverage" still ticked, which is how collapsing never clears a selection. Set **Category** to *Shade Range* to see every facet render with no count at all, because that set ships none and the list has to read cleanly without them.`}}}},i={name:"Colour samples",render:()=>n.jsx(c,{title:o.colour.title,facets:o.colour.facets,initialSelected:o.colour.initialSelected,defaultOpen:!0,kind:"colour"}),parameters:{docs:{description:{story:`A category whose options are shades. Nothing about the row has changed: it is the same checkbox with the same tick, the same focus ring, the same label and the same count, and the whole row is still the tap target. What is added is a sample of the shade at the trailing edge, which is a drawing and not a second control: it has no name, no tab stop and no click of its own.

Every sample carries the chip's own resting ring, not just the pale ones, so a nude or an off-white still has an edge against the panel. Two options are ticked, and the tick is what says so: a ticked option is never signalled by colour alone, which is why the sample looks the same whether its row is on or off.`}}}};function A({picks:e,open:a,set:t="finish"}){const s=o[t]??o.finish;return n.jsx("div",{style:{width:240},children:n.jsx(c,{title:s.title,facets:s.facets,initialSelected:e,defaultOpen:a,kind:s.kind},`${t}-${e.join("-")||"none"}-${a}`)})}var u,g,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Default',
  args: FILTER_GROUP_DEFAULT_ARGS,
  argTypes: FILTER_GROUP_ARG_TYPES,
  render: args => <ConfigurableFilterGroup {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The category with the two things a designer can change: which real facet set it ' + 'shows, and which way it opens. Matte and Satin start ticked, so the selected ' + 'treatment is visible without clicking anything.\\n\\n' + '**Presets worth trying.** Set **Category** to *Coverage* and **State** to ' + '*Collapsed*: expanding it again shows "Full Coverage" still ticked, which is how ' + 'collapsing never clears a selection. Set **Category** to *Shade Range* to see every ' + 'facet render with no count at all, because that set ships none and the list has to ' + 'read cleanly without them.'
      }
    }
  }
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var w,f,b;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Colour samples',
  render: () => <FilterGroupStateful title={FACET_SETS.colour.title} facets={FACET_SETS.colour.facets} initialSelected={FACET_SETS.colour.initialSelected} defaultOpen kind="colour" />,
  parameters: {
    docs: {
      description: {
        story: 'A category whose options are shades. Nothing about the row has changed: it is the ' + 'same checkbox with the same tick, the same focus ring, the same label and the same ' + 'count, and the whole row is still the tap target. What is added is a sample of the ' + 'shade at the trailing edge, which is a drawing and not a second control: it has no ' + 'name, no tab stop and no click of its own.\\n\\n' + 'Every sample carries the chip\\'s own resting ring, not just the pale ones, so a ' + 'nude or an off-white still has an edge against the panel. Two options are ticked, ' + 'and the tick is what says so: a ticked option is never signalled by colour alone, ' + 'which is why the sample looks the same whether its row is on or off.'
      }
    }
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const U=["Playground","ColourSamples"];export{i as ColourSamples,r as Playground,U as __namedExportsOrder,L as default};
