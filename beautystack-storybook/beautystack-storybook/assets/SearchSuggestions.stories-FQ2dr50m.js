import{j as n}from"./iframe-6dx3hp_4.js";import{S as p}from"./SearchSuggestions-CAczFYXo.js";import{a as y}from"./annotationPage-eYx--AWZ.js";import{c as s}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Placeholder-Ed4iQRc7.js";import"./Icon-BihOhSWB.js";import"./MenuItem-bBgP9Lwo.js";import"./newTabMark-TI50-QeA.js";const r=e=>`/revlon-home/${e}`,v=[{label:"face"},{label:"face makeup"},{label:"face primer"}],T=[{label:"Face"},{label:"Best Sellers"},{label:"New Arrivals"}],g=[{name:"PhotoReady™ Lift & Fill Skin Tint",image:r("fc-skin-tint.png")},{name:"PhotoReady Insta-Sculpt™ Bronzer & Contour Stick",image:r("fc-bronzer.png")},{name:"Insta-Blush™ Cream Blush Stick",image:r("fc-insta-blush.png")}],S={query:{name:"Search query",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"face"}},description:"What the shopper has typed so far. It comes back in the see-all CTA and, when every group is empty, in the no-results message."},showSuggestions:{...s("On"),name:"Suggestions group",description:"Show the Suggestions group. Turn every group off to preview the no-results state."},showCollections:{...s("On"),name:"Collections group",description:"Show the Collections group."},showProducts:{...s("On"),name:"Products group",description:"Show the Products group. Search never returns the other two without this one, so turning it off while another group is on previews a result set that cannot arrive."},suggestions:{control:!1,table:{disable:!0}},collections:{control:!1,table:{disable:!0}},products:{control:!1,table:{disable:!0}},onSuggestionSelect:{control:!1,table:{disable:!0}},onCollectionSelect:{control:!1,table:{disable:!0}},onProductSelect:{control:!1,table:{disable:!0}},onSeeAll:{control:!1,table:{disable:!0}}},k={query:"face",showSuggestions:!0,showCollections:!0,showProducts:!0};function m({query:e,showSuggestions:a,showCollections:w,showProducts:f,productList:b=g}){return n.jsx(p,{query:e,suggestions:a?v:[],collections:w?T:[],products:f?b:[]})}function x({width:e,...a}){return n.jsx("div",{className:"sb-unstyled",style:{width:e||"100%"},children:n.jsx(m,{...a})})}const R={title:"Molecules/SearchSuggestions",component:p,tags:["autodocs"],parameters:{docs:{page:y("SearchSuggestions"),toc:{headingSelector:"h2"},description:{component:"The panel that opens under the search field while a shopper types. It sorts what it finds into three short lists, suggestions, collections and products, and ends with a link to see everything."}},componentDoc:{usage:`
## When to use

- ✅ **Under a live search field**, showing matches as someone types. It is a sibling of
  **Search bar**, never a part of it.
- ✅ **When there are three kinds of match to offer at once**: search terms, collections and
  products.
- ✅ **When a query finds nothing.** The panel says so in one line rather than closing.

- ❌ **The full results page.** The see-all link is how a shopper gets there.
- ❌ **A rich product tile.** A suggestion row is an image and a name. Price, rating and badges
  are **Product card**'s.
- ❌ **A list of fixed choices**, like a sort order. That is **Select field**.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Panel**, the results container | required | A **sibling** of the search field, never a child. The page that hosts the field puts this panel next to it |
| **Column row** | required | Two columns at the wide breakpoint, one stacked column at mobile |
| **Group**: Suggestions, Collections, Products | required **whenever that group has results** | Each renders on its own. **Products is the category a result set is built on**: Suggestions and Collections appear beside it, never instead of it |
| **Group header** | required **whenever its group renders** | Fixed UI copy, not an authored field |
| **Item row**, a suggestion or a collection | up to 3 per group, a hard cap | The **Menu item** atom. The two-column layout is sized for 3 plus 3 plus 3 |
| **Product row**, a thumbnail and a name | up to 3, the same hard cap | The **Menu item** atom, with the thumbnail leading. Image and name only. No price, no rating, no badge |
| **See-all link** | required | Runs the query as typed and goes to the results page |
| **No-results line** | required **only when all three groups are empty** | Replaces the whole panel body, in its own labelled region |

- **Tokens own the look.** Padding, column gap, the rule under each group header, the thumbnail
  radius. The panel re-themes across the 21 brands without a value being restated.
- **The panel is the *overlay* surface level, whole.** Its ground, its 1px
  hairline and its shadow all come from that one policy, so it separates itself from the page the
  same way every other floating panel in the library does. The hairline earns its place: a
  white panel on a white page with a shadow too faint to find is the defect it removes, and the
  panel sizes itself border-box, so the line costs no layout.
- **The rows are the Menu item atom.** Their inset, corner, ink, type and hover
  wash are the atom's, the same ones the sort menu, the locale menu and the drop-down draw.
  This panel keeps what a row MEANS: the four hand-offs, the labelled groups, the focus ring.
- **The group labels are fixed UI copy.** "Suggestions", "Collections" and "Products" are not
  written per instance.
- **Everything else is content.** The suggestion text, the collection names, the product names
  and photos, and the query itself all arrive from search and the catalogue.

**Nothing mounts this panel in a live page yet.** It renders from the component gallery only.
Wiring it under the search field's active state, inside **Navigation**, has not happened.

### Variants

**There are none.** The brief names two states, populated and no-results, at two layouts, two
columns and one stacked column. Those four combinations are one panel answering its content and
its width, not four components.
`,guidance:`
## Behaviors

### States

- **Populated.** Up to 3 suggestions, up to 3 collections and up to 3 products, plus the
  see-all link.
- **A group with nothing to show does not render.** No empty heading, no placeholder row.
- **Products only.** The reduced set. With no text groups beside them the products take the whole
  panel width and stay left-aligned, rather than sitting in a half of it.
- **No suggestions.** All three groups empty. The body swaps for a single tappable band, \`Search
  for “[query]”\` plus a trailing arrow, inside its own labelled region, rather than an empty
  box: the see-all band's own anatomy, on the panel's own paper.
- **Hover.** On the three result rows it is the **Menu item** atom's wash, so a row here
  lights up exactly as a row in the sort menu does. The see-all band and the no-suggestions band
  draw the same wash, from the same colour role, and both sit on paper until a pointer arrives.
  Nothing is drawn for any of it in Figma.
- **Focus.** Drawn on every row and the band, and drawn only in code. The atom draws no focus
  state, on purpose, so this panel owns the ring on rows that are real buttons.
- **Keyboard-selected.** Distinct from focus, and it does not exist yet. The atom already has
  the state, and this panel does not ask for it while nothing here manages a cursor: asking
  would switch the row's own hover off. An open question, not a shipped state.
- **Loading.** The brief never mentions an in-flight moment, so nothing was built. That is a
  gap on record, not a design.

### Interactions

- **Tap a suggestion** and it runs a search for that term, then goes to the results page.
- **Tap a collection** and it goes to that collection's page.
- **Tap a product** and it goes to that product's page.
- **Tap the see-all link** and it runs the query as typed, then goes to the results page.
- **Four taps, four separate hand-offs.** The panel reports which row was chosen and stops. It
  never resolves a destination itself, which is what lets one host send each of the four
  somewhere different.

## Rules

- ✅ **Do** cap every group at 3.
- ❌ **Don't** let the response length decide the panel's height. The cap binds search as much
  as it binds this component.

- ✅ **Do** show the no-suggestions action band rather than an empty panel.
- ❌ **Don't** close the panel on a query that finds nothing. Silence reads as a broken field.
- ❌ **Don't** draw the band's hover wash while it is at rest. It sits on the panel's paper until
  a pointer reaches it, like every other band and row here. A control already wearing its hover
  has nowhere left to go when it is actually hovered.

- ✅ **Do** treat products as the category a result set is built on. Suggestions and Collections
  appear beside products, never instead of them.
- ❌ **Don't** show a panel of search terms or collections with no product in it. That is a
  content rule on what search returns, not something the panel enforces by dropping rows.

- ✅ **Do** let the product name carry the row. The thumbnail sits beside it and is decorative.
- ❌ **Don't** put a price, a rating or a badge on a product row. That is **Product card**'s job.

- ✅ **Do** build any new row here out of **Menu item**. One atom draws every choosable row in
  the library, so a change to the wash reaches all of them at once.
- ❌ **Don't** restyle a row from this panel. Its inset, corner, ground and type are the atom's,
  and a local override wins on specificity without anyone noticing.

- ❌ **Don't** send all four row types to the same place. They are four different destinations.
- ❌ **Don't** position the panel from inside it. Placing it under the live field is the host
  layout's job.

### Content rules

- ✅ **Do** quote the shopper's own query in the no-suggestions action, exactly as typed.
- ✅ **Do** keep the group labels as fixed copy. They are not written per instance.
- ❌ **Don't** invent a character limit. The brief says limits are owed by design. Product names
  wrap on mobile and tablet, so the full name remains available. On desktop a name takes two lines
  at most, and a longer one ends the second line in an ellipsis.

## Open items

| Question | Owner |
|---|---|
| Which breakpoint is the 1-to-2-column switch? The brief says "depending on the breakpoint" and never names one. The code picks the mobile cut, which is a code choice, not a ratified answer | Design |
| Above 3 matches, is the cap "best 3" or "first 3"? And should an over-cap state be signposted to the shopper at all? | Design / Client |
| Is the group order, Suggestions then Collections then Products, deliberate or incidental? | Design |
| Keyboard traversal from the field into the list: arrow keys, Escape, Enter, and whether focus returns to the field | Design |
| Should a screen reader announce the result count as someone types, and how often? | Design |
| What are the character limits? Still owed by design | Design |
| Her note says the container keeps a fixed size while suggestions are available. True at the wide layout, not at the stacked one, where height follows content | Design |
| Her note says the container shrinks to fit the no-results message. Only the height shrinks: the width stays the field's, which the panel is a sibling of | Design |
| Her note calls Show all results a link. It is a button, like every row here, because the panel hands the choice back and resolves no destination itself | Design |
| Her note names four destinations. The panel exposes four distinct hand-offs and resolves none of them, and no page mounts it yet, so no destination is proven | Design |
`,spec:{elements:[{name:"Panel",requirement:"required",condition:"A sibling of the search field, never a child. The host layout puts it under the field."},{name:"Column row",requirement:"required",condition:"Two columns at the wide breakpoint, one stacked column at mobile."},{name:"Group",requirement:"conditional",condition:"While that group has results. An empty group draws nothing at all, and an empty text column gives its track back so the products fill the panel."},{name:"Group header",requirement:"conditional",condition:"While its group renders"},{name:"Item row",requirement:"conditional",condition:"Inside a group that renders. The row is the Menu item atom, up to three per group."},{name:"Product row",requirement:"conditional",condition:"Inside a populated products group. The Menu item atom, with the thumbnail leading."},{name:"See all link",requirement:"required"},{name:"No suggestions action",requirement:"conditional",condition:"While all three groups are empty. Replaces the whole body, in its own named region: a single tappable band with a trailing arrow, the same anatomy and the same two grounds as the See all link, paper at rest and washed on hover."}],authorability:[{name:"Suggestion count",rule:"Fixed: three items per group at most, and the panel truncates a longer list."},{name:"Group labels",rule:"Fixed: Suggestions, Collections and Products are interface copy, never authored per instance."},{name:"No suggestions action",rule:"Fixed: the panel echoes the query exactly as typed and never closes on an empty result."},{name:"Row content",rule:"Fixed by search: the suggestion text, collection name, product name and photo are not authored."},{name:"Product row",rule:"Fixed: a picture and a name. No price, no rating and no badge belong on a product row."},{name:"Thumbnail",rule:"The author supplies the product photo. Fixed: its size, its crop and its corner."},{name:"Section order",rule:"Fixed: suggestions, then collections, then products, then the see all band."},{name:"Which groups appear",rule:"Fixed by search: products carry a result set, and the text groups only appear beside them."},{name:"Row styling",rule:"Fixed by the shared row atom: inset, corner, ink, type and hover wash. No local override."}],variants:[{label:"Suggestions panel",props:{query:"face",showSuggestions:!0,showCollections:!0,showProducts:!0}}],states:[{key:"populated",name:"Populated",props:{width:480}},{key:"one-group",name:"Products only",props:{width:480,query:"face",showSuggestions:!1,showCollections:!1,productList:g.slice(0,2)}},{key:"no-results",name:"No results",props:{width:480,showSuggestions:!1,showCollections:!1,showProducts:!1}},{key:"hover",name:"Hover",pseudo:"hover",props:{width:480}},{key:"focus",name:"Focus",pseudo:"focus-visible",props:{width:480}}],render:x,interactions:["Tapping a suggestion runs a search for that term. A collection and a product each go to their own page.","The see all link runs the query exactly as it was typed.","Four row types, four separate hand offs. The panel reports the choice and resolves no destination.","Each group renders only when it has results. The text groups appear beside products, never without them.","With products alone, the empty text column gives its track back and the products fill the panel width, left aligned.","Every group is capped at three, and the panel truncates whatever it is handed.","The panel never positions itself. Placing it under the live field is the host layout job.","The four row types lead to four different destinations, never to one shared place."],accessibility:[{label:"Rows are real buttons",text:"Every result row and the see all band is a real button element, reachable by Tab in reading order and activated by Enter or Space."},{label:"Regions and group labels",text:"The panel is a labelled region, and each group inside it is a section labelled by its own header, with ids unique to that instance."},{label:"No suggestions state",text:"The band sits in its own labelled region. It is a real button; its accessible name is its own sentence, and the trailing arrow is decorative."},{label:"Field to panel wiring",text:"The panel is a sibling of the search field, so the host owns the link between them: the field states that the panel is open and points at it."},{label:"Focus ring",text:"This panel draws the visible focus ring on every row and on the see all band, because the shared row atom draws no focus state of its own."},{label:"Decorative thumbnail",text:"The product thumbnail carries an empty alt and the product name carries the row, so a screen reader announces each product once."},{label:"Live announcement",text:"The panel declares no live region, so the host that mounts it owns any announcement of the result count as the shopper types."},{label:"Motion",text:"The panel opens with no transition and no animation, and any motion added later honours a reduced motion preference."},{label:"Target size",text:"A result row spans its column and stands at least 24px tall, and the see all band spans the panel, so no pointer target falls below the minimum."}],openItems:[{question:"Which width is the switch from two columns to one? The code cuts at mobile and no other value is settled.",owner:"Design"},{question:"Above three matches, is the cap the best three or the first three? And should an over cap state be signposted at all?",owner:"Design / Product"},{question:"Is the group order, suggestions then collections then products, deliberate or incidental?",owner:"Design"},{question:"Keyboard traversal from the field into the list: arrow keys, Escape, Enter, and whether focus returns to the field.",owner:"Design"},{question:"Should a screen reader announce the result count as someone types, and how often?",owner:"Design"},{question:"What are the character limits for a suggestion, a collection name and a product name?",owner:"Design"},{question:"Her note says the container keeps a fixed size while suggestions are available. True at the wide layout, not at the stacked one, where height follows content.",owner:"Design"},{question:"Her note says the container shrinks to fit the no-results message. Only the height shrinks: the width stays the field's, which the panel is a sibling of.",owner:"Design"},{question:"Her note calls Show all results a link. It is a button, like every row here, because the panel hands the choice back and resolves no destination itself.",owner:"Design"},{question:"Her note names four destinations. The panel exposes four distinct hand-offs and resolves none of them, and no page mounts it yet, so no destination is proven.",owner:"Design"}]}}}},t={name:"Default",args:k,argTypes:S,render:e=>n.jsx(m,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"All three groups at their cap: 3 suggestions, 3 collections, 3 products with their photographs, plus the see-all link. Two columns at this width, with Suggestions and Collections stacked on the left and Products on the right, collapsing to one column at mobile (switch the viewport toolbar to see it). Turn a group off to watch it disappear rather than leave an empty heading behind. Turn **both text groups** off to see the reduced set on its own: the products take the whole panel width and stay left-aligned. Turn all three off to preview the no-suggestions band."}}}},o={name:"No suggestions",args:{query:"xyzzy"},parameters:{docs:{description:{story:"All three groups empty. The panel renders a single tappable band, 'Search for “[query]”' with a trailing arrow, in its own labelled region, instead of an empty box: the same anatomy as the see-all band below a populated panel, and the same two grounds. It sits on the panel's paper at rest and takes the grey wash only under a pointer, so the hover is somewhere left to go rather than where it starts."}}}};var i,l,h;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Default',
  args: SEARCH_SUGGESTIONS_DEFAULT_ARGS,
  argTypes: SEARCH_SUGGESTIONS_ARG_TYPES,
  render: args => <ConfigurableSearchSuggestions {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'All three groups at their cap: 3 suggestions, 3 collections, 3 products with their ' + 'photographs, plus the see-all link. Two columns at this width, with Suggestions and ' + 'Collections stacked on the left and Products on the right, collapsing to one column ' + 'at mobile (switch the viewport toolbar to see it). Turn a group off to watch it ' + 'disappear rather than leave an empty heading behind. Turn **both text groups** off ' + 'to see the reduced set on its own: the products take the whole panel width and stay ' + 'left-aligned. Turn all three off to preview the no-suggestions band.'
      }
    }
  }
}`,...(h=(l=t.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var d,u,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'No suggestions',
  args: {
    query: 'xyzzy'
  },
  parameters: {
    docs: {
      description: {
        story: 'All three groups empty. The panel renders a single tappable band, \\'Search for ' + '“[query]”\\' with a trailing arrow, in its own labelled region, instead of an empty ' + 'box: the same anatomy as the see-all band below a populated panel, and the same two ' + 'grounds. It sits on the panel\\'s paper at rest and takes the grey wash only under a ' + 'pointer, so the hover is somewhere left to go rather than where it starts.'
      }
    }
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const F=["Playground","EmptySearch"];export{o as EmptySearch,t as Playground,F as __namedExportsOrder,R as default};
