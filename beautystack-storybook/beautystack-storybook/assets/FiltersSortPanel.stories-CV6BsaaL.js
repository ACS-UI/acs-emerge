import{j as t,r as b}from"./iframe-6dx3hp_4.js";import{F as d}from"./FiltersSortPanel-CPq3da6j.js";import{a as f}from"./annotationPage-eYx--AWZ.js";import{D as y,a as n,c as v}from"./designerArgTypes-CVo4ohMZ.js";import{F as p,C as T,S as k}from"./filtersSortFixtures-BNZ3J36l.js";import"./preload-helper-C1FmrZbK.js";import"./CardCollection-Bq5DTwa9.js";import"./Link-yk_PIpvX.js";import"./Icon-BihOhSWB.js";import"./newTabMark-TI50-QeA.js";import"./Pagination-BryqecgJ.js";import"./IconButton-Btgg2ITq.js";import"./FilterGroup-sj5PvoiP.js";import"./Checkbox-C5uneDTR.js";import"./ControlIndicator-DEJX7FyE.js";import"./FieldRequirement-Dn5H0DsY.js";import"./CheckboxGroup-Hr1vSafZ.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./popoverPlacement-CK5qQ-ie.js";import"./Select-DBrm7KPu.js";import"./MenuItem-bBgP9Lwo.js";import"./Popover-BGxFbLtI.js";import"./Button-CiZyClsp.js";import"./Loading-DyIAIYoE.js";/* empty css               */import"./Drawer-CypulVuT.js";import"./useScrollLock-B-psvS0l.js";import"./Tag-A0JNg_qu.js";const c=p.length,S={facetGroupCount:{...n("All 5 groups","A number from 0 to 5"),name:"Number of filter groups",control:{type:"range",min:0,max:c,step:1},description:"How many facet groups the host hands to the panel. Every one of them draws: there is no cap. Drop it to 0 to see the panel with nothing to filter by."},resultCount:{...n("31","A whole number"),name:"Results count",control:{type:"number",min:0},description:'How many products survived the filter. It reads against the unfiltered total, so the line says "31 of 108 products" rather than a bare number. Set it to 0 to see a real zero-result count rather than a blank row.'},loading:{...v("Off"),name:"Loading state",description:'Hold the brief treatment the host shows while it is re-querying: a spinner and the words "Loading" take the seat the results count sits in, and the product row fades out and back in. Only the middle changes. The trigger, the count seat, the tags, Sort and every filter group stay live and operable, and the results themselves stay mounted, so the grid keeps its place rather than jumping to the top when the query returns. Applying a filter in the canvas shows the same treatment by itself; this switch is for holding it still.'},mode:{...n("On the page","Choice"),name:"How the filters are reached",...y({labels:{inline:"On the page",overlay:"Behind a button"},options:["inline","overlay"]}),description:"Two presentations of the same filters. **On the page** stands them in a column a shopper reads without opening anything. **Behind a button** gives them one door, the Filter trigger, at every width. Switch between them here: they are two presentations of one panel and a page never carries both."},facetGroups:{control:!1,table:{disable:!0}},sortOptions:{control:!1,table:{disable:!0}},onFilterChange:{control:!1,table:{disable:!0}},onSortChange:{control:!1,table:{disable:!0}},defaultPanelOpen:{control:!1,table:{disable:!0}}},F={facetGroupCount:c,resultCount:31,loading:!1,mode:"inline"};function x({label:e="Results area, drawn by Card Grid and Product Card"}){return t.jsx("div",{style:{minHeight:320,display:"grid",placeItems:"center",padding:"var(--size-300)",background:"var(--color-bg-subtle)",border:"1px dashed var(--color-border-subtle)",color:"var(--color-text-muted)",fontFamily:"var(--typography-small-font-family)",fontSize:"var(--typography-small-font-size)",lineHeight:"var(--typography-small-line-height)",textAlign:"center"},children:e})}const C=600;function u({facetGroupCount:e,resultCount:r,loading:o,mode:g}){const[m,i]=b.useState(!1),w=()=>{i(!0),setTimeout(()=>i(!1),C)};return t.jsx(d,{facetGroups:p.slice(0,e),sortOptions:k,resultCount:r,totalCount:108,loading:o||m,mode:g,initialSelected:T,onFilterChange:w,children:t.jsx(x,{label:"Results grid, drawn by Card Grid and Product Card"})})}const re={title:"Organisms/Filters + Sort Panel",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{page:f("Filters and sort panel"),toc:{headingSelector:"h2"},description:{component:"Everything a shopper uses to work a long product list: the Filter trigger and its panel, the Sort control beside it, and the results count."}},componentDoc:{usage:`
## When to use

- ✅ **A product list long enough to need narrowing.** Filtering takes products out of the list:
  shade, coverage, price.
- ✅ **A list a shopper wants in a different order.** Sorting reorders the same products and
  removes none of them.
- ✅ **Both, side by side, at every breakpoint.**
- ✅ **Either presentation.** A column of filters on the page, or the same filters behind a
  Filter button. Pick by whether the page can spare a column.

- ❌ **One facet category on its own.** That is **Filter group**, this panel's own child.
- ❌ **One combined "Filter and Sort" button.** They are two independent controls, always.
- ❌ **Searching for a product by name.** That is **Search bar**.
- ❌ **The results themselves.** **Card grid** and **Product card** draw them. This panel only
  says what changed.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Filter trigger**, the button that opens the panel | required **wherever there is no column** | The sliders glyph, then the word "Filter" carrying the applied count, drawn as the outlined button. It is the only door in the button presentation, at every width, and it appears in the column presentation below the tablet breakpoint, where the column steps aside |
| **Results count** | required, **readable without opening the panel** | Drawn once, in the row rather than inside the panel, so a phone reads it without a tap |
| **Sort control**, the drop-down | required, **at every breakpoint** | The **Select field** atom, sitting beside the Filter trigger at the right end of the band's first row, never inside the filter panel at either size. Its label reads "Sort by:" and is **hidden from the eye at every width**: it is still the control's one accessible name, and the field itself shows the chosen value. Not the **Dropdown** component, whose ratified scope is the global Language / Region / Currency selectors |
| **Filter panel**, its title, close and facet groups | required, **it is Filter's open state** | A left-docked drawer titled "Filters", filled from the same content block as the column and never from a second one |
| **Filter column** | **the alternative to the trigger**, never beside it | The same facet groups standing on the page instead of behind a door. Present in the column presentation from the tablet breakpoint up |
| **Facet groups** | **a separate component**, not rebuilt here | The category and its checkboxes are **Filter group**'s anatomy, on its own page. Every group the caller hands over draws, and every one starts closed |
| **Applied pills, drawer seat** | **the only seat wherever the door is** | The same run as the band's, at the top of the drawer above the groups. It is where the tags stand on a phone, and in the button presentation at every width, because there the door is the only place the filters live. Exactly one of the two seats is drawn at any width |
| **Panel footer**, "Clear All" and "Show Results" | required, **in the drawer** | The confirm bar. "Show Results" closes the panel, and the reviewed annotation names it by name. The ghost "Clear All" beside it empties the whole selection and is drawn only while at least one filter is applied |

- **Tokens own the look.** Spacing, colour and the panel's chrome.
- **The caller owns the data.** Facet groups, sort options and the results count all arrive from
  content tagging or metadata rather than being authored by hand.

**The header row is the reference site's toolbar.** Measured on a real product listing page at
1440 and at 390: the site keeps three things outside its "FILTER BY" panel, in one
row above the grid, and they are the Filter trigger, the results count and Sort. This component's
header row is that row. The results count holds the left edge; the Filter trigger and the sort
field are a pair at the right edge, in that order, at every width. On a phone the pair keeps the
first line to itself, the results count drops to its own line underneath, and there are no pills:
the applied pills stand at the top of the filter drawer instead.

**There are two presentations, and they are two, not a compromise.** The filters either stand on
the page as a column or sit behind the Filter button, and the choice is the caller's. Nothing below
the door changes with it: the same categories, the same counts, the same Sort in the same row, the
same selection handed out. The **How the filters are reached** control on the cover draws each of
them, because a shopper never meets both at once and neither does this page.

**Only one of them can be on a page.** A column and a button leading to the same filters are the
same filters through two doors, and a page carrying both offers a shopper a choice that has no
answer. In the column presentation the button appears only below the tablet breakpoint, where the
column has stepped aside and the button is the one door left.

### Variants

**One axis, and it is where the filters are reached.**

- **On the page.** A column beside the results. The default, and what a product listing and a
  search results page use.
- **Behind a button.** The Filter trigger is the only way in, at every width, and the panel opens
  over the page.

There is no style axis and no size axis. The criteria ratifies two *controls*, Filter and
Sort, each with a closed and an open state, and neither of those is a variant of the other.
`,guidance:`
## Behaviors

### States

- **Filter, closed and open.** Pressing the trigger opens the panel, a left-docked drawer titled
  "Filters". In the column presentation the trigger only appears below the tablet breakpoint,
  because above it the door is already open and a second one would lead to the same place.
- **The column, or the button, never both.** In the button presentation there is no column at any
  width. It is not a column that has been hidden: it is not drawn at all, so the filters exist
  once on the page and a screen reader meets each category once.
- **Sort, closed and open.** A value that expands into a list. The list is this design system's
  own rather than the browser's, inherited by composing the **Select field** atom. Its label reads
  "Sort by:" and is not drawn: the words are off screen at every width, the name is not, and the
  field shows the chosen value. It stands beside the Filter trigger at the right end of the band's
  first row, not inside the panel, so it can be reached without opening the filters, which
  is what the criteria has always asked for.
- **Facet groups, all of them, all closed.** Every group the host hands over draws, and every one
  starts collapsed. Both are measured from the reference site: eight groups, eight drawn, and on
  a fresh load none of them open, not even a group holding a selection that arrived in the URL.
- **A group holding a selection.** Nothing on the header says so, at either breakpoint. The
  applied tags carry that fact instead: in the column presentation above the tablet breakpoint
  they stand over the results, and everywhere the door is the only way in (below that breakpoint,
  and in the button presentation at every width) they stand at the top of the filter drawer, one
  screen above these groups. Each one names the filter it holds and removes it on click, which a
  number beside a title never could.
- **Loading.** The host owns it and the panel only reflects it. A spinner and the words it is
  given take the seat the results count sits in, because that line is the one thing on the page
  that cannot be true while the query is in flight, and the product row fades out and back in.
  The word is a fixed, generic "Loading". The results region announces itself as busy, and the count's number is held
  back rather than read out stale. Only the middle
  changes: the toolbar and the filter groups stay live, so a shopper can pick a second facet
  without waiting. The results themselves stay mounted, so the grid keeps its place. The seat holds
  the words and the ring in one box, so nothing else in the bar moves. Under **reduce motion** the row
  dims without a fade and the ring is a static mark.
- **Focus.** Every control draws its own ring. Figma drew none for this component, so the ring is
  a design-system convention.
- **Tablet and mobile.** The sidebar is replaced by the drawer and the trigger appears. The trigger
  and the sort field share one row, the results count sits on its own line under them, and the page
  carries no pills. The applied pills move to the top of the drawer, above the filter groups.

### Interactions

- **Clicking the Filter trigger opens the panel**, as a left-docked drawer titled "Filters".
- **Ticking a sub-filter publishes the whole applied selection outward**, as plain lists rather
  than the panel's own internal one, so a host cannot change what is applied by holding on to a
  live reference.
- **Choosing a sort option hands the value out**, and the host reorders the list.
- **Adding a second filter applies both.** Filters accumulate per group; they never replace one
  another.
- **Unticking a facet removes that filter**, and the counters drop on the same click.

## Rules

- ✅ **Do** keep Filter and Sort as two controls a shopper can reach independently, at every
  breakpoint.
- ❌ **Don't** merge them into one "Filter and Sort" button.
- ✅ **Do** pick one presentation per page: the column, or the button.
- ❌ **Don't** put a Filter button beside a visible column. Two doors to one room is a choice with
  no answer.
- ❌ **Don't** move Sort or the results count inside the panel to save room in the row. Both have
  to read without opening anything, in either presentation.
- ❌ **Don't** put Sort inside the filter panel. A sort a shopper can only reach by opening the
  filters is not an independent control.

- ✅ **Do** draw every facet group the caller hands over. Facets arrive from content tagging, so
  dropping some of them is the panel overriding the content.
- ✅ **Do** open the panel with every group closed.
- ❌ **Don't** rebuild the facet accordion here. It is **Filter group**'s.

- ✅ **Do** update the results on every applied filter, with a brief loading state.
- ❌ **Don't** hard-code facets or sort options. Both arrive as data.
- ✅ **Do** let the applied-filter pills stand above the results wherever the filter column does,
  one per applied facet, each removable, with **Clear All** beside them.
- ❌ **Don't** draw the pills on the page where the drawer is the only door: on a phone, and in the
  button presentation at every width. There they stand at the top of the drawer, beside the groups
  that set them, and the page says what is applied with the ticked facet, the group's own "(N)"
  and the trigger's "Filter (N)".

### Content rules

- ✅ **Do** expect facet labels and sort options to arrive from content tagging or metadata.
- ✅ **Do** treat the panel title "Filters" and the drawer's "Show Results" as fixed interface
  copy.
- ❌ **Don't** invent character limits for a facet label. They are left to design.

## Open items

| Question | Owner |
|---|---|
| The panel docks left, matching the reference site. Figma draws it right-docked over a scrim. The side is still undecided, and it is now the only part of that disagreement left open: whether a desktop overlay exists at all was settled by shipping both presentations | Design |
| The reference drawer is 350px wide and edge-to-edge on a phone with no gap, while the shared drawer primitive is 360px and always reserves a gap and a scrim. It also serves the cart, so this is a shared decision, not a local fix | DS team |
| The category label is 12px with 2px tracking on the reference site. The library's only caps recipe is 14px, and minting a caps-at-the-caption-rung style is a 21-brand portfolio decision | DS team |
| The facet option label is 18px on the reference site against the body rung's 16px, and the facet checkbox is 22px with a 2px light edge and a red checked ground against the Checkbox atom's 18px, 1px subtle edge and action-primary ground. Both are atom-level, neither is this component's to fork | DS team |
| Is the results count a desktop requirement, or mobile and tablet only? The criteria calls it an open exploration, and the reference site only shows it below the mobile bar ("2 products", lowercase) while the code ships "214 results" everywhere | Client |
| Which pages should have filters turned off? Asked once by the client and never answered | Client |
`,spec:{elements:[{name:"Filter trigger",requirement:"conditional",condition:"Wherever there is no filter column: the only door behind a button, the tablet door beside a column."},{name:"Results count",requirement:"required",condition:"Drawn once in the row, not inside the panel, so a phone reads it unopened."},{name:"Applied-filter pills",requirement:"conditional",condition:"Desktop only, and only while a filter is applied. One removable pill per facet, with Clear All beside them."},{name:"Sort control",requirement:"required",condition:"The Select field atom, on the band at every breakpoint. Its label is beside the box on a desk and hidden from the eye on a phone."},{name:"Filter panel",requirement:"required",condition:"A left-docked drawer titled Filters, filled from the same content block as the column."},{name:"Filter column",requirement:"conditional",condition:"The column presentation, from the tablet breakpoint up. Never drawn beside the trigger."},{name:"Facet groups",requirement:"required",condition:"The Filter group component. Every group the caller hands over draws."},{name:"Panel footer, Clear All and Show Results",requirement:"conditional",condition:"The drawer mount only. Clear All is drawn there only while at least one filter is applied."}],authorability:[{name:"Facet groups",rule:"The caller supplies the groups and their options. Every group handed over draws."},{name:"Group order",rule:"The order the groups arrive in is the order they are drawn."},{name:"Sort options",rule:"The caller supplies the list. The panel hard-codes no option of its own."},{name:"Results count",rule:"The host supplies the number, and the system fixes the wording around it."},{name:"Panel title",rule:'Fixed by the system. The drawer is titled "Filters".'},{name:"Group open state",rule:"Fixed by the system: every group starts closed, however few there are."},{name:"Filter and Sort",rule:"Fixed by the system as two controls, each independently operable at every breakpoint."},{name:"Show Results",rule:"Fixed by the system: the drawer carries it, beside Clear All. The sidebar does not."},{name:"Applied pills",rule:"One pill per applied facet: above the results with the column, inside the drawer behind the door."},{name:"Presentation",rule:"Chosen when the page is built: the column or the trigger, never both on one page."}],variants:[{label:"No groups",props:{groupCount:0}},{label:"Three groups",props:{groupCount:3}},{label:"Five groups",props:{groupCount:5}}],states:[{key:"default",name:"Default"},{key:"loading",name:"Loading",props:{loading:!0}},{key:"zero",name:"Zero results",props:{resultCount:0}}],render:A,interactions:["Clicking the Filter trigger opens the panel, a left-docked drawer titled Filters.","The filters are reached one of two ways, a column on the page or the trigger, never both on one page.","Ticking a sub-filter publishes the whole applied selection outward, as plain lists.","Choosing a sort option hands the value out and the host reorders the list.","Adding a second filter applies both. Filters accumulate per group, they never replace one another.","Unticking a facet removes that filter, and both counters drop on the same click.","Clicking a category expands it. A second click collapses it again."],accessibility:[{label:"Keyboard",text:"The trigger, every category, every facet and the Sort control are reachable and operable from the keyboard alone."},{label:"Screen reader",text:"The sidebar is a named landmark, and the trigger announces the dialog it opens and whether that dialog is open."},{label:"Category state",text:"Every category announces whether it is expanded, and its name carries how many of its filters are applied."},{label:"Live results",text:"The results count is a live region and holds its announcement back while the host is still applying."},{label:"Reading order",text:"A facet box drawn at the trailing edge of its row still comes before its own name in the reading order."},{label:"Focus",text:"Opening the panel moves focus into it, keeps it there, and returns it to the trigger on close."},{label:"Target size",text:"The trigger, the Sort control and every facet row keep a target of at least 44px in each direction."},{label:"Contrast",text:"The muted results count, the category labels and the facet boxes hold 4.5:1 on every brand ground."}],openItems:[{question:"The panel docks left, matching the site. Figma draws it right-docked over a scrim. The side is undecided, and the only half still open",owner:"Design"},{question:"The site drawer is 350px and edge to edge on a phone. The shared drawer is 360px and reserves a gap and a scrim. It also serves the cart",owner:"DS team"},{question:"Figma cannot draw the panel title. The shared drawer hides its title layer so nav and cart can show a wordmark, and an instance cannot reveal it",owner:"DS team"},{question:"The category label wants 12px with 2px tracking. The only caps recipe is 14px, and minting a caption-rung one is a 21-brand decision.",owner:"DS team"},{question:"The facet label and its box want 18px and 22px against the atoms 16px and 18px. That is an atom-level decision, not this panel one.",owner:"DS team"},{question:"Is the results count required on desktop, or on mobile only? The code ships it at every width.",owner:"Product"},{question:"Which pages should have filters turned off? Asked once and never answered.",owner:"Product"}]}}}};function A({groupCount:e=3,loading:r=!1,resultCount:o=214}){return t.jsx("div",{style:{width:320},children:t.jsx(u,{facetGroupCount:e,resultCount:o,loading:r})})}const a={name:"Default",args:F,argTypes:S,render:e=>t.jsx("div",{className:"ds-rail",children:t.jsx(u,{...e})}),parameters:{themeShellPadding:!1,controls:{sort:"alpha"},docs:{description:{story:`The whole panel in the arrangement it ships in: the filter groups in a column on the left, and the toolbar over the **results** column rather than inside the sidebar. Row one carries the Filter control at the left edge and, at the right, the results count beside the sort field; row two carries the applied tags with **Clear All** ending the run. The grey block marks where the products go: they belong to Card Grid and Product Card and are documented there.

It arrives with filters applied, because the tags are the only surface that reports what is applied. The panel manages that selection for real: tick a facet in the canvas, or dismiss a tag, and it applies.

**Applying a filter shows a brief wait.** A spinner and the word "Loading" take the seat the results count sits in, and the product row fades out and back in. Only the middle changes: the trigger, the count seat, the tags, the sort field and every filter group stay live and operable throughout, so a shopper can pick a second facet without waiting. The wait here is simulated, because this page has no query behind it; in a real page the host owns the query and hands the panel the same **Loading state** this cover drives.

Sort is the \`Select\` field with its label hidden from the eye at every width. One \`label\`, one \`htmlFor\`, one accessible name: the words "Sort by:" are off screen, not deleted, and no second label is composed to replace them, so the control still announces itself and the box still shows the chosen value. It is deliberately **not** the \`Dropdown\` component, whose ratified scope is the global Language / Region / Currency selectors.

**Worth trying.**

- **Behind a button.** Switch **How the filters are reached**. The column goes, the Filter trigger appears at every width at the head of the row, the panel opens over the page, and the applied tags go with it: they stand at the top of the drawer rather than over the results, because the drawer is the only place the filters live. The two presentations are never both on one page.
- **Quiet.** Set **Number of filter groups** to 1 and **Results count** to 0. One category and "0 results", which reads as a real count rather than a blank row.
- **Loading.** Turn **Loading state** on to hold the wait still and look at it: the ring sits exactly where the count line starts, and the dimmed products underneath are the previous answer, still there so the page does not jump. Under **reduce motion** the dim arrives without a fade and the ring is a static mark.
- **The grid.** Turn **Grid** on in the toolbar. Twelve tinted columns are drawn over the band, and the sidebar and the results column each end on a column line: the sidebar holds three columns, the results hold the other nine, and the channel between them is the grid gutter rather than a gap this band chose for itself. Narrow the browser and the count drops to eight and then to four, which is the same grid re-thinking itself at each seam.
- **Tablet and mobile.** Narrow the browser, or use the **viewport toolbar**. Below the tablet breakpoint the Filter trigger and the sort field keep the bar to themselves, the results count drops to its own line, the column is replaced by the left-docked drawer, and the applied tags move to the top of that drawer.`}}}};var s,h,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Default',
  args: FILTERS_SORT_DEFAULT_ARGS,
  argTypes: FILTERS_SORT_ARG_TYPES,
  render: args => <div className="ds-rail">
      <ConfigurableFiltersSortPanel {...args} />
    </div>,
  parameters: {
    themeShellPadding: false,
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The whole panel in the arrangement it ships in: the filter groups in a column on the ' + 'left, and the toolbar over the **results** column rather than inside the sidebar. Row ' + 'one carries the Filter control at the left edge and, at the right, the results count ' + 'beside the sort field; row ' + 'two carries the applied tags with ' + '**Clear All** ending the run. The grey block marks where the products go: they belong ' + 'to Card Grid and Product Card and are documented there.\\n\\n' + 'It arrives with filters applied, because the tags are the only surface that reports ' + 'what is applied. The panel manages that selection for real: tick a facet in the ' + 'canvas, or dismiss a tag, and it applies.\\n\\n' + '**Applying a filter shows a brief wait.** A spinner and the word "Loading" ' + 'take the seat the results count sits in, and the product row fades out and back in. ' + 'Only the middle changes: the ' + 'trigger, the count seat, the tags, the sort field and every filter group stay live and ' + 'operable throughout, so a shopper can pick a second facet without waiting. The wait ' + 'here is simulated, because this page has no query behind it; in a real page the host ' + 'owns the query and hands the panel the same **Loading state** this cover drives.\\n\\n' + 'Sort is the \`Select\` field with its label hidden from the eye at every width. One ' + '\`label\`, one \`htmlFor\`, one accessible name: the words "Sort by:" are off screen, not ' + 'deleted, and no second label is composed to replace them, so the control still ' + 'announces itself and the box still shows the chosen value. It is deliberately **not** ' + 'the \`Dropdown\` component, whose ratified scope is the global Language / Region / ' + 'Currency selectors.\\n\\n' + '**Worth trying.**\\n\\n' + '- **Behind a button.** Switch **How the filters are reached**. The column goes, the ' + 'Filter trigger appears at every width at the head of the row, the panel opens over the ' + 'page, and the applied tags go with it: they stand at the top of the drawer rather than ' + 'over the results, because the drawer is the only place the filters live. The two ' + 'presentations are never both on one page.\\n' + '- **Quiet.** Set **Number of filter groups** to 1 and **Results count** to 0. One ' + 'category and "0 results", which reads as a real count rather than a blank row.\\n' + '- **Loading.** Turn **Loading state** on to hold the wait still and look at it: the ' + 'ring sits exactly where the count line starts, and the dimmed products underneath ' + 'are the previous answer, still there so the page does not jump. Under **reduce ' + 'motion** the dim arrives without a fade and the ring is a static mark.\\n' + '- **The grid.** Turn **Grid** on in the toolbar. Twelve tinted columns are drawn over ' + 'the band, and the sidebar and the results column each end on a column line: the ' + 'sidebar holds three columns, the results hold the other nine, and the channel between ' + 'them is the grid gutter rather than a gap this band chose for itself. Narrow the ' + 'browser and the count drops to eight and then to four, which is the same grid ' + 're-thinking itself at each seam.\\n' + '- **Tablet and mobile.** Narrow the browser, or use the **viewport toolbar**. Below ' + 'the tablet breakpoint the Filter trigger and the sort field keep the bar to ' + 'themselves, the results count drops to its own line, the column is replaced by the ' + 'left-docked drawer, and the applied tags move to the top of that drawer.'
      }
    }
  }
}`,...(l=(h=a.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};const oe=["Default"];export{a as Default,oe as __namedExportsOrder,re as default};
