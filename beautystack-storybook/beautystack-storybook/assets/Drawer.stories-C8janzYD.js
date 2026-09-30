import{j as e,r as l}from"./iframe-6dx3hp_4.js";import{D as h}from"./Drawer-CypulVuT.js";import{N as x}from"./NavItem-Dq6-KykK.js";import{M as k}from"./MenuItem-bBgP9Lwo.js";import{I as S}from"./IconButton-Btgg2ITq.js";import{I as T}from"./Icon-BihOhSWB.js";import{F as D}from"./FilterGroup-sj5PvoiP.js";import{B as r}from"./Button-CiZyClsp.js";import{a as C}from"./annotationPage-eYx--AWZ.js";import{c as O,D as F,a as _}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./useScrollLock-B-psvS0l.js";import"./newTabMark-TI50-QeA.js";import"./Checkbox-C5uneDTR.js";import"./ControlIndicator-DEJX7FyE.js";import"./FieldRequirement-Dn5H0DsY.js";import"./CheckboxGroup-Hr1vSafZ.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./popoverPlacement-CK5qQ-ie.js";import"./Loading-DyIAIYoE.js";/* empty css               */const E=[{label:"Face",href:"#face",links:[{label:"All Face",href:"#all-face"},{label:"Foundation",href:"#foundation"}]},{label:"Eyes",href:"#eyes",links:[{label:"All Eyes",href:"#all-eyes"},{label:"Mascara",href:"#mascara"}]},{label:"Best Sellers",href:"#best-sellers",links:[]}],j=`
  .sb-drawer-nav { list-style: none; margin: 0; padding: 0; }
  .sb-drawer-nav__item { border-bottom: var(--border-10) solid var(--color-border-subtle); }
  .sb-drawer-nav__row {
    display: flex;
    align-items: stretch;
    width: 100%;
    min-height: var(--nav-drawer-row-height);
    padding-inline: var(--menu-item-padding-x);
  }
  .sb-drawer-nav__link {
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0;
    padding-block: var(--space-inset-xtight);
    font-family: var(--typography-label-font-family);
    font-weight: var(--typography-label-font-weight);
    font-size: var(--typography-label-font-size);
    line-height: var(--typography-label-line-height);
    letter-spacing: var(--typography-label-letter-spacing);
    text-transform: var(--typography-label-text-case);
  }
  .sb-drawer-nav__disclosure {
    --icon-button-seat-margin: calc((var(--icon-button-glyph-size) - var(--icon-button-size)) / 2);
    flex: none;
    align-self: center;
  }
  .sb-drawer-nav__sublist { list-style: none; margin: 0; padding: 0 0 var(--space-inset-xtight) 0; }
`;function u(){const[a,o]=l.useState("Face");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:j}),e.jsx("ul",{className:"sb-drawer-nav",role:"list",children:E.map(n=>{const t=a===n.label,s=`sb-drawer-nav-${n.label.replace(/\s+/g,"-").toLowerCase()}`;return e.jsxs("li",{className:"sb-drawer-nav__item",children:[e.jsxs("div",{className:"sb-drawer-nav__row",children:[e.jsx(x,{className:"sb-drawer-nav__link",href:n.href,children:n.label}),n.links.length>0&&e.jsx(S,{className:"sb-drawer-nav__disclosure",size:"sm","aria-label":`${n.label} submenu`,"aria-expanded":t,"aria-controls":s,onClick:()=>o(t?null:n.label),children:e.jsx(T,{name:"chevron-down",size:null})})]}),n.links.length>0&&e.jsx("ul",{className:"sb-drawer-nav__sublist",role:"list",id:s,hidden:!t,children:n.links.map(i=>e.jsx("li",{children:e.jsx(k,{as:"a",href:i.href,children:i.label})},i.label))})]},n.label)})})]})}const A=[{title:"Color",facets:[{label:"Red",value:"red",count:12},{label:"Pink",value:"pink",count:8},{label:"Nude",value:"nude",count:5}]},{title:"Finish",facets:[{label:"Matte",value:"matte",count:20},{label:"Satin",value:"satin",count:14}]}];function N(){const[a,o]=l.useState({}),n=(t,s,i)=>{o(m=>{const p=new Set(m[t]??[]);return i?p.add(s):p.delete(s),{...m,[t]:[...p]}})};return e.jsx(e.Fragment,{children:A.map(t=>e.jsx(D,{title:t.title,facets:t.facets,selected:a[t.title]??[],onChange:(s,i)=>n(t.title,s,i),defaultOpen:!1},t.title))})}const R={side:{..._("Right"),name:"Side",...F({labels:{left:"Left",right:"Right"},options:["left","right"]}),description:"Which edge the panel enters from. No requirement in either parent names a side, so this is a caller decision, not a ratified variant."},showFooter:{...O("Off"),name:"Footer",description:'Show the optional footer slot, the way FiltersSortPanel fills it with its "Show Results" button. Off is how Navigation uses Drawer today, because it never fills it.'},title:{name:"Title",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Shop by category"}},description:"The panel heading. Always supplied by the parent, because Drawer has no title of its own, and no character limit is ratified for it anywhere."},open:{control:!1,table:{disable:!0}},onClose:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},footer:{control:!1,table:{disable:!0}}},I={side:"right",showFooter:!1,title:"Shop by category"};function q({side:a,showFooter:o,title:n}){const[t,s]=l.useState(!1);return e.jsxs("div",{style:{padding:"var(--size-400)"},children:[e.jsx(r,{variant:"secondary",onClick:()=>s(!0),children:"Open drawer"}),e.jsx(h,{open:t,onClose:()=>s(!1),side:a,title:n,footer:o?e.jsx(r,{variant:"primary",style:{width:"100%"},onClick:()=>s(!1),children:"Show results"}):void 0,children:e.jsx(u,{})})]})}function P(){const[a,o]=l.useState(!1),[n,t]=l.useState(!1);return e.jsxs("div",{style:{padding:"var(--size-400)",display:"flex",gap:"var(--size-300)"},children:[e.jsx(r,{variant:"secondary",onClick:()=>o(!0),children:"Open menu"}),e.jsx(r,{variant:"secondary",onClick:()=>t(!0),children:"Open filters"}),e.jsx(h,{open:a,onClose:()=>o(!1),side:"right",title:"Shop by category",children:e.jsx(u,{})}),e.jsx(h,{open:n,onClose:()=>t(!1),side:"right",title:"Filter by",footer:e.jsx(r,{variant:"primary",style:{width:"100%"},onClick:()=>t(!1),children:"Show results"}),children:e.jsx(N,{})})]})}const he={title:"Organisms/Drawer",component:h,tags:["autodocs"],parameters:{docs:{page:C("Drawer"),toc:{headingSelector:"h2, h3"},description:{component:"The slide-in panel behind the mobile menu and the expanded filter panel: a scrim, a sliding surface and a header with a close control. It is an internal primitive that another component places, never something a page author drops onto a page."}},componentDoc:{usage:`
## When to use

- ✅ **A menu that slides in over the page**, the way Navigation opens its mobile menu.
- ✅ **A filter panel that slides in over the results**, the way Filters and Sort opens its own.
- ✅ **Anything that has to hold the keyboard while it is open** and lock the page behind it.

- ❌ **A page author placing it directly.** Drawer is a primitive: a component composes it and
  owns the trigger and the open state.
- ❌ **A centred dialog over the page.** A drawer enters from an edge and stays anchored to it.
- ❌ **A small panel anchored to the control that opened it.** That is **Popover**.
- ❌ **Content that should stay on the page.** A panel that hides everything behind it is the
  wrong home for anything a shopper needs to compare with the page underneath. **Accordion** opens
  in place.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Scrim**, the full-screen backdrop | always | Clicking it dismisses the panel |
| **Panel**, the sliding surface | always | Whether it is showing is decided by the parent, never by Drawer |
| **Header**, the title and the close control | always | The title is the parent's words. "Close" is fixed interface copy, not authored content |
| **Body** | always, and **the parent fills it** | Drawer prescribes nothing about what goes inside. Navigation puts its links there, Filters and Sort puts facet groups |
| **Footer** | optional, and **no parent doc names it as a Drawer part** | Filters and Sort fills it with a "Show Results" button. Navigation never uses it |

- **Drawer supplies the shell, the parent supplies everything else**: the title, the body, the
  footer if there is one, and, the part most likely to be rebuilt by mistake, the open state and
  the trigger.
- **Tokens own the look.** The scrim colour, the panel surface, its border and shadow, the
  padding, the type and the slide timing all come from tokens, so the panel re-themes with the
  brand without a value being restated here.
- **The panel sits on the highest surface level, *top***, and its shadow got deeper on 13 August
  2026 when the elevation ramp was re-ordered by how much each level actually separates. It draws
  no hairline, and that is the rule rather than an omission: it is the one level that brings
  its own ground with it in the scrim, so it never has to guess what is behind it.
- **The width is the narrow-panel rung of the container ruler.** 360px on the docked
  presentation, tablet and up, where the panel clamps to the frame instead of holding a gap open. On a phone the panel is the screen:
  it takes the whole frame, edge to edge, the way the client's own mobile frame draws it.
- **The scrim shows on the docked presentation, not on the phone band.** The live drawer carries no
  dark backdrop at any width, so the panel takes the frame with no scrim below the tablet
  breakpoint, and keeps the backdrop above it, the way Modal does.

### Variants

- **Side, left or right.** No requirement in either parent says which edge the panel enters
  from, so it is a caller decision rather than a ratified variant.
- **There is no other axis.** Not a size, not a tone. Stated rather than left implied.
`,guidance:`
## Behaviors

### States

- **Closed or open.** The parent decides, and only the parent. Drawer holds no state of its own
  about whether it is showing.
- **Closed means unreachable, not just invisible.** A closed panel leaves the tab order
  completely: the close button, every link in the body and the footer all go at once. Marking it
  hidden for screen readers would not do that, because a focusable element inside a hidden one
  stays tabbable. That is the exact defect this closes.
- **Focus.** The close control, and everything the parent puts in the body, draws its own ring.
- **Motion.** The panel slides in from its edge and the scrim fades, on the shared motion tokens.
  For anyone who asks their system for reduced motion, a global rule cuts the transition and the
  panel simply appears. No parent doc mentions animation at all, so this is what the code does
  rather than what anybody agreed.

### Interactions

- **Escape dismisses it.**
- **The close control dismisses it.** Its name is "Close".
- **Clicking the scrim dismisses it. Clicking inside the panel does not.**
- **Opening moves focus into the panel**, so a keyboard user is never left on the trigger with
  the page locked underneath.
- **While open, the keyboard stays inside.** Tab past the last element returns to the first, and
  Shift+Tab from the first goes to the last. Focus never leaks into the page behind the scrim.
- **Closing returns focus to whatever had it before**, on every route out: Escape, the close
  control or the scrim.
- **Opening locks the page behind it from scrolling, and closing releases it.** The lock is
  shared with Modal through one counted hook, so two panels open at once, which the search
  results page really does mount, never fight over who owns it.

## Rules

- ✅ **Do** let the parent own the trigger and the open state.
- ❌ **Don't** give Drawer open state of its own. It is the one thing this component is built
  never to do.

- ✅ **Do** return focus to the trigger on every route out, not only the close button.
- ❌ **Don't** rely on hiding a closed panel from screen readers to take it out of the tab order.
  Hidden and unreachable are two different things.
- ❌ **Don't** hard-code an id inside it. Two Drawers can be mounted on one page, and they must
  not collide.

- ✅ **Do** compose the shared scroll-lock hook rather than writing a second one. One hook keeps
  the page's own scroll setting under a single owner when two dialogs are open at once.
- ✅ **Do** compose the icon-button atom for the close control rather than hand-rolling a second
  icon-only button. The two implementations had already drifted onto 16 duplicated declarations
  before this was adopted.

### Content rules

- ✅ **Do** pass the title from the parent. Drawer has no title of its own.
- ❌ **Don't** invent a character limit for it. Both parent docs leave limits to design.
- ❌ **Don't** rewrite "Close". It is interface copy, not authored content.

## Open items

| Question | Owner |
|---|---|
| Which side the panel enters from is a caller decision today, with no requirement behind it | Design |
| What should the enter and exit motion be, and what should it become under reduced motion? Neither parent's interactions mention animation | Design |
| The footer slot is named by no requirement. One consumer fills it, the other never uses it | DS team |
`,spec:{elements:[{name:"Scrim",requirement:"required",condition:"On the docked presentation. Dropped on the phone band, where the panel takes the frame."},{name:"Panel",requirement:"required",condition:"The narrow-panel rung, 360px, clamped to the frame with no reserved gap; the whole frame on a phone. The parent decides when it shows."},{name:"Title",requirement:"required",condition:"The parent supplies the words."},{name:"Close control",requirement:"required",condition:'The icon-button atom, labelled "Close".'},{name:"Body",requirement:"required",condition:"The parent fills it. Drawer prescribes nothing about what goes inside."},{name:"Footer",requirement:"optional"}],authorability:[{name:"Title",rule:"The parent writes it. Drawer has no title of its own, and no limit is set."},{name:"Body",rule:"The parent fills it with anything. Drawer prescribes no content at all."},{name:"Footer",rule:"Optional, and filled by the parent. Leaving it out removes the slot."},{name:"Close label",rule:'Fixed by the system. "Close" is interface copy, not authored content.'},{name:"Side",rule:"Left or right, chosen by the component that places the drawer, not by an author."},{name:"Open state",rule:"Fixed to the parent. Drawer holds no open state and no trigger of its own."},{name:"Panel width",rule:"Fixed by the system at the 360px narrow-panel rung; the whole frame on a phone."},{name:"Dismiss routes",rule:"Fixed by the system: Escape, the close control and the scrim always dismiss."}],variants:[{label:"Right",props:{side:"right"}},{label:"Left",props:{side:"left"}}],states:[{key:"no-footer",name:"Without footer",props:{withFooter:!1}},{key:"footer",name:"With footer",props:{withFooter:!0}}],render:M,interactions:["Escape, the close control and a click on the scrim each dismiss the panel.","Opening moves focus into the panel, and closing returns it to the control that opened it.","While open, Tab and Shift+Tab cycle inside the panel and never reach the page behind.","Opening locks the page behind it from scrolling, and closing releases it.","A closed panel is inert, so nothing inside it can be reached by keyboard.","The parent owns the trigger, the open state, the title and everything in the body."],accessibility:[{label:"Dialog semantics",text:"The panel is a labelled dialog with modality, so everything behind it is unreachable while it is open."},{label:"Keyboard",text:"Tab and Shift+Tab cycle inside the panel, including on the first keypress after it opens."},{label:"Focus restore",text:"Focus returns to the trigger on every route out: Escape, the close control and the scrim."},{label:"Closed panel",text:"A closed panel is inert, so its close control, body links and footer leave the tab order together."},{label:"Naming",text:"The title is tied to the dialog by a per-instance id, so two drawers on one page announce their own titles."},{label:"Scroll lock",text:"Opening locks the page behind it and closing releases it, even when a second dialog is open."},{label:"Motion",text:"The panel slides on the motion token and arrives without animation when reduced motion is asked for."},{label:"Target size",text:"The close control keeps a 44px target in each direction, and the header never clips it."},{label:"Contrast",text:"The title, the close glyph and the scrim hold their contrast on every brand ground."},{label:"Safe area",text:"The footer reserves the device safe-area inset below its own padding, so a notch never covers it."}],openItems:[{question:"Which side should the panel enter from? It is a caller decision today, with no rule behind it.",owner:"Design"},{question:"What should the enter and exit motion be, and what should it become under reduced motion?",owner:"Design"},{question:"Should the footer slot stay? One consumer fills it and the other never uses it.",owner:"DS team"}]}}}},W={position:"relative",width:420,height:280,overflow:"hidden",transform:"translateZ(0)",border:"1px solid #e4e4e7",borderRadius:4,background:"var(--color-bg-page)",display:"flex",alignItems:"center",justifyContent:"center"};function G({side:a="right",withFooter:o=!1}){const[n,t]=l.useState(!1);return e.jsxs("div",{style:W,children:[e.jsx(r,{variant:"secondary",onClick:()=>t(!0),children:"Open panel"}),e.jsx(h,{open:n,onClose:()=>t(!1),side:a,title:"Shop by category",footer:o?e.jsx(r,{variant:"primary",style:{width:"100%"},onClick:()=>t(!1),children:"Show results"}):void 0,children:e.jsx(u,{})})]})}function M({side:a,withFooter:o}){return e.jsx(G,{side:a,withFooter:o})}const d={name:"Default",args:I,argTypes:R,render:a=>e.jsx(q,{...a}),parameters:{controls:{sort:"alpha"},docs:{description:{story:'Click **Open drawer** to run the full cycle: Escape, the close control and a scrim click all dismiss it, focus moves into the panel on open and stays inside while it is open, so Tab past the last link wraps to the first, and it returns to this button on close. The Footer control starts **off**, which is how `Navigation` uses Drawer today; it is not left off to hide a limitation, it is the state that proves the slot is genuinely optional. Switch **Side** to see the caller-decision edge, and turn **Footer** on to see it filled the way `FiltersSortPanel` fills it, with a "Show Results" button.'}}}},c={name:"Two instances",render:()=>e.jsx(P,{}),parameters:{docs:{description:{story:"The search results page mounts Navigation's drawer and the filter panel's drawer together, which is the one shape a single playground control cannot prove. Each instance gives its own title a unique id, so the two never collide: open both and confirm each panel is announced by its own title, not the other one's."}}}};var g,f,w;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Default',
  args: DRAWER_DEFAULT_ARGS,
  argTypes: DRAWER_ARG_TYPES,
  render: args => <ConfigurableDrawer {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'Click **Open drawer** to run the full cycle: Escape, the close control and a scrim ' + 'click all dismiss it, focus moves into the panel on open and stays inside while it ' + 'is open, so Tab past the last link wraps to the first, and it returns to this ' + 'button on close. The Footer control starts **off**, which is how \`Navigation\` uses ' + 'Drawer today; it is not left off to hide a limitation, it is the state that proves ' + 'the slot is genuinely optional. Switch **Side** to see the caller-decision edge, and ' + 'turn **Footer** on to see it filled the way \`FiltersSortPanel\` fills it, with a ' + '"Show Results" button.'
      }
    }
  }
}`,...(w=(f=d.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var b,y,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Two instances',
  render: () => <TwoInstancesDemo />,
  parameters: {
    docs: {
      description: {
        story: "The search results page mounts Navigation's drawer and the filter panel's drawer " + 'together, which is the one shape a single playground control cannot prove. Each ' + 'instance gives its own title a unique id, so the two never collide: open both and ' + "confirm each panel is announced by its own title, not the other one's."
      }
    }
  }
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const de=["Playground","TwoInstancesOnOnePage"];export{d as Playground,c as TwoInstancesOnOnePage,de as __namedExportsOrder,he as default};
