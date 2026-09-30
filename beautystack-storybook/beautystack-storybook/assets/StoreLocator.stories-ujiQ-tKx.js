import{l as C,j as e}from"./iframe-6dx3hp_4.js";import{N as g,R,u as S}from"./BrandWordmark-CszUK9Mj.js";import{F as w}from"./Footer-BfocwZBN.js";import{H as f}from"./Hero-BHurgzVJ.js";import{C as b}from"./CardCollection-Bq5DTwa9.js";import{C as y}from"./ContentCard-Cy_xF-W9.js";import{N as v}from"./NewsletterSection-3il-1Xyd.js";import{N as x}from"./Homepage-BCdkFher.js";import{B as l,b as N}from"./blankContent-McemyZjd.js";import"./preload-helper-C1FmrZbK.js";import"./SearchBar-DwGR_hzY.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./SearchSuggestions-CAczFYXo.js";import"./Placeholder-Ed4iQRc7.js";import"./MenuItem-bBgP9Lwo.js";import"./Button-CiZyClsp.js";import"./Loading-DyIAIYoE.js";/* empty css               */import"./Drawer-CypulVuT.js";import"./useScrollLock-B-psvS0l.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";import"./MediaFrame-CgpnOU1q.js";import"./NavItem-Dq6-KykK.js";import"./Link-yk_PIpvX.js";import"./Pagination-BryqecgJ.js";import"./Checkbox-C5uneDTR.js";import"./ControlIndicator-DEJX7FyE.js";import"./FieldRequirement-Dn5H0DsY.js";import"./Input-3DsPWvNA.js";import"./ProductCard-1ftwzkvg.js";import"./Badge-gItHl2ZN.js";import"./Select-DBrm7KPu.js";import"./Price-xMe2P_eJ.js";import"./StarRating-BT40pja7.js";import"./SwatchCarousel-BPc8GOsx.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./shadeGroup-Blqfx0Bo.js";const L=[{label:"Revlonissimo",href:"#"},{label:"UniqOne",href:"#"},{label:"Sensor",href:"#"},{label:"Equave",href:"#"}],j=[{label:"Target",value:"target"},{label:"Walmart",value:"walmart"},{label:"CVS Pharmacy",value:"cvs"},{label:"Ulta Beauty",value:"ulta"},{label:"Walgreens",value:"walgreens"},{label:"Rite Aid",value:"riteaid"}];function T(){const o=C()==="pro";return e.jsxs("div",{className:"template-stage",children:[e.jsx(g,{items:o?L:R,variant:o?"product-line":"category",utilities:["search","locator"],sticky:!0}),e.jsx("div",{id:"main",tabIndex:-1}),e.jsx(f,{variant:"tertiary",heading:"Find Us",body:o?"Locate authorized salons and professional distributors stocking Revlon Professional product lines near you.":"Find Revlon products at a retailer near you or shop online at your preferred beauty destination."}),e.jsx("div",{className:"tpl-section",children:e.jsx("section",{"aria-label":"Find a retailer",children:e.jsx(b,{headline:"Find a retailer",subtitle:"Our products are available at your favorite beauty retailers. Choose one below to shop directly.",children:j.map(r=>e.jsx(y,{title:r.label},r.value))})})}),e.jsx(v,{}),e.jsx(w,{})]})}T.__docgenInfo={description:"",methods:[],displayName:"StoreLocator"};const k=`
This is the FILLED SAMPLE of this template: the same composition the Template story above draws, with revlon.com's own copy, photographs and destinations in it. Assembled out of \`src/components/\` only, standing on the 12 column page grid. Turn the toolbar **Grid** toggle on, or open the story with \`?globals=grid:!true\`, to compare the column lines with the edges of each band.

## The components on this page

One row per line of the client's recommended structure, plus anything this page draws that the structure does not name. A check means the library has a component for that line; a warning means it does not, and the note says what stands in.

| Spec line | Required? | What draws it | Component? |
|---|---|---|---|
| Hero Tertiary | Required | [Hero](https://revlon-beautystack-ds.vercel.app/?path=/docs/organisms-hero--docs), Tertiary, the live page heading and intro line | ✅ |
| Content Cards / Card collection | Required | [Card Collection](https://revlon-beautystack-ds.vercel.app/?path=/docs/organisms-card-collection--docs) with twelve [Content Card](https://revlon-beautystack-ds.vercel.app/?path=/docs/molecules-content-card--docs), one per retailer, each on that retailer's own store finder | ✅ |
| Header and footer | Frame, on every page | [Navigation](https://revlon-beautystack-ds.vercel.app/?path=/docs/organisms-navigation--docs), Flagship, and [Footer](https://revlon-beautystack-ds.vercel.app/?path=/docs/organisms-footer--docs), Wordmark | ✅ |

## The client's Template Definition text

Copied without edit from the client's own spec, section 09.

> ## **09 Store Locator**
>
> The store locator offers guests a way to see where Revlon's products can be found in store and online. This page will direct users to their selected retailer.
>
> Recommended structure:
>
> - Hero Tertiary - Required - Authored
> - Content Cards / Card collection - Required - Authored / Replacing current retailer locator dropdown.

## What is mounted for each spec line

| Spec line | What this page mounts | State |
|---|---|---|
| Hero Tertiary, Required, Authored | \`Hero variant="tertiary"\`, heading and body only, no media, so the band sits on the page ground and keeps normal ink. The words are the live page's own \`<h1>\` and \`<p>\` | present |
| Content Cards / Card collection, Required, Authored / Replacing current retailer locator dropdown | \`CardCollection columns={4}\` holding twelve \`ContentCard\`s, one per retailer, each carrying that retailer's own store-finder URL. \`columns={4}\` authored, so each card seats on three of the twelve page-grid columns, four to a line | present |
| "This page will direct users to their selected retailer" | Every card is a link on a real destination, harvested from the live dropdown's option values | present |
| *(not in the spec)* Search by location | **nothing** | **omitted, see below** |
| *(page furniture)* Header and footer | \`Navigation layout="flagship"\` and \`Footer variant="wordmark"\` | present |

## What came out, and why

## The words and the retailers are the live page's

## The band carries no headline, on purpose

The live page gives this control a form **label**, "Retailer", not a section heading, and it
publishes only one subheading, which is now the hero's body. Authoring a second headline over the
cards would be writing copy the source does not have. So the band is headless and the cards
themselves are the \`<h2>\`s: the page outline reads one \`<h1>\` (the hero) and twelve \`<h2>\`s
(the retailers), nothing else, which also makes heading navigation the retailer list. Measured in
the rendered page, not asserted: the footer draws no heading of any level, because the
\`FOOTER_COLUMNS\` fixture every prototype imports carries link lists with no column titles.

## The gaps this rebuild proves
`,E=[{label:"Bed Bath & Beyond",href:"https://www.bedbathandbeyond.com/store/selfservice/FindStore"},{label:"CVS",href:"https://www.cvs.com/store-locator/landing"},{label:"Harmon",href:"https://www.harmondiscount.com/store-locations.html"},{label:"H-E-B",href:"https://www.heb.com/store-locations"},{label:"Kroger",href:"https://www.kroger.com/stores/search"},{label:"Meijer",href:"https://www.meijer.com/custserv/store_locator.jsp"},{label:"Rite-Aid",href:"https://locations.riteaid.com/locations/search.html"},{label:"Target",href:"https://www.target.com/store-locator/find-stores"},{label:"Ulta",href:"https://www.ulta.com/stores"},{label:"Walgreens",href:"https://www.walgreens.com/storelocator/find.jsp"},{label:"Walmart",href:"https://www.walmart.com/store/finder"},{label:"Wegmans",href:"https://www.wegmans.com/stores/store-locator.html"}],A={heading:"Where to buy our products",body:"Choose a retailer below to find the closest store with Revlon products.",retailers:E},_={heading:l.heading,body:l.lead,retailers:N(12).map(t=>({label:t.title,href:t.href}))};function i({content:t=A}){const{logo:o,wordmark:r}=S();return e.jsxs("div",{className:"template-stage",children:[e.jsx(g,{items:x,logo:o,layout:"flagship",utilities:["search","locator"],sticky:!0}),e.jsx("div",{id:"main",tabIndex:-1}),e.jsx(f,{variant:"tertiary",heading:t.heading,body:t.body}),e.jsx(b,{columns:4,children:t.retailers.map(n=>e.jsx(y,{title:n.label,href:n.href,headingLevel:2},n.label))}),e.jsx(v,{}),e.jsx(w,{variant:"wordmark",wordmark:r})]})}i.__docgenInfo={description:"",methods:[],displayName:"PrototypeStoreLocator",props:{content:{defaultValue:{value:`{
  heading: 'Where to buy our products',
  body: 'Choose a retailer below to find the closest store with Revlon products.',
  retailers: RETAILERS,
}`,computed:!1},required:!1}}};const ve={title:"Templates/T-09. Store Locator",id:"templates-store-locator",component:T,tags:["autodocs","revlon-only"],parameters:{layout:"fullscreen",themeShellPadding:!1,docs:{description:{component:`
The store locator offers guests a way to see where Revlon products can be found in store and online. This page will direct users to their selected retailer.

Recommended structure:

| Component Name | Requirement | Content Authoring | Notes |
| :---- | :---- | :---- | :---- |
| Tertiary Hero | Required | Authorable | - |
| Card Collection | Required | Authorable | Replacing current retailer locator dropdown. |
`}}}},a={name:"Template",render:()=>e.jsx(i,{content:_}),parameters:{docs:{description:{story:"The structure, with nothing real in it. Same composition as the sample below, same components in the same order: only the content changes. The page title and its intro line name their slots instead of filling them, and each of the twelve retailer cards draws the library's own picture stand-in, because this template carries no imagery in either story. Twelve is kept rather than trimmed: it is what one authored card collection holds, and it is what closes four full rows on the grid."}}}},s={name:"Page exemple",render:()=>e.jsx(i,{}),parameters:{docs:{description:{story:k}}}};var d,c,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Template',
  render: () => <PrototypeStoreLocator content={BLANK_CONTENT} />,
  parameters: {
    docs: {
      description: {
        story: 'The structure, with nothing real in it. Same composition as the sample below, same ' + 'components in the same order: only the content changes. The page title and its intro ' + 'line name their slots instead of filling them, and each of the twelve retailer cards ' + 'draws the library\\'s own picture stand-in, because this template carries no imagery ' + 'in either story. Twelve is kept rather than trimmed: it is what one authored card ' + 'collection holds, and it is what closes four full rows on the grid.'
      }
    }
  }
}`,...(h=(c=a.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Page exemple',
  render: () => <PrototypeStoreLocator />,
  parameters: {
    docs: {
      description: {
        story: STORELOCATOR_NOTE
      }
    }
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Te=["Template","WhereToBuy"];export{a as Template,s as WhereToBuy,Te as __namedExportsOrder,ve as default};
