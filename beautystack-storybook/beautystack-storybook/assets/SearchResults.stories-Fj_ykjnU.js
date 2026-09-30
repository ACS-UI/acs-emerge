import{j as o}from"./iframe-6dx3hp_4.js";import{S as f,a as T,b,c as y,d as v,e as S}from"./PrototypeHomepage-D4lIqfih.js";import"./preload-helper-C1FmrZbK.js";import"./BrandWordmark-CszUK9Mj.js";import"./SearchBar-DwGR_hzY.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./SearchSuggestions-CAczFYXo.js";import"./Placeholder-Ed4iQRc7.js";import"./MenuItem-bBgP9Lwo.js";import"./Button-CiZyClsp.js";import"./Loading-DyIAIYoE.js";/* empty css               */import"./Drawer-CypulVuT.js";import"./useScrollLock-B-psvS0l.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";import"./MediaFrame-CgpnOU1q.js";import"./NavItem-Dq6-KykK.js";import"./Hero-BHurgzVJ.js";import"./CardCollection-Bq5DTwa9.js";import"./Link-yk_PIpvX.js";import"./Pagination-BryqecgJ.js";import"./Homepage-BCdkFher.js";import"./Footer-BfocwZBN.js";import"./ContentCard-Cy_xF-W9.js";import"./ProductCard-1ftwzkvg.js";import"./Badge-gItHl2ZN.js";import"./Select-DBrm7KPu.js";import"./FieldRequirement-Dn5H0DsY.js";import"./Price-xMe2P_eJ.js";import"./StarRating-BT40pja7.js";import"./SwatchCarousel-BPc8GOsx.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./shadeGroup-Blqfx0Bo.js";import"./NewsletterSection-3il-1Xyd.js";import"./Checkbox-C5uneDTR.js";import"./ControlIndicator-DEJX7FyE.js";import"./Input-3DsPWvNA.js";import"./FiltersSortPanel-CPq3da6j.js";import"./FilterGroup-sj5PvoiP.js";import"./CheckboxGroup-Hr1vSafZ.js";import"./Tag-A0JNg_qu.js";import"./filtersSortFixtures-BNZ3J36l.js";import"./blankContent-McemyZjd.js";const ge={title:"Templates/T-08. Search Results",id:"templates-search-results",component:T,tags:["autodocs","revlon-only"],argTypes:{products:{control:!1,table:{disable:!0}}},parameters:{layout:"fullscreen",themeShellPadding:!1,docs:{description:{component:`
This page surfaces all of the results that best fit the user's query and allows them to organize the list further through filters and sort.

Recommended structure:

| Component Name | Requirement | Content Authoring | Notes |
| :---- | :---- | :---- | :---- |
| Tertiary Hero | Required | Authorable | - |
| Search Bar | Required | Dynamic | - |
| Filters & Sort | Required | Dynamic | - |
| Cards/Product | Required | Dynamic | - |
| Pagination | Optional | Dynamic | Appears if content requires multiple pages. Can be enabled or disabled by content administrators. |
| Card collection or carrousel | Required | Content fragment - Featured collection | - |
`}}}},e={name:"Template",render:()=>o.jsx(y,{content:v}),parameters:{docs:{description:{story:"The structure, with nothing real in it. Same composition as the sample below, same components in the same order with the same layout props: only the content changes. The page title and the search field are named rather than filled (the field carries a term, because the clear control only exists when there is one to clear), every result card draws the library's own picture stand-in, the sidebar carries three named filter groups where the sample carries the five the organism documents, and a selection is left applied so the pill row and Clear all are on screen. The result set runs past one page in both views, so the pager, which section 08 marks optional and dependent on the result count, is visible here."}}}},t={name:"Page exemple",render:()=>o.jsx(y,{}),parameters:{docs:{description:{story:f}}}},r={name:"Page exemple: Virtual try-on",render:()=>o.jsx(S,{}),parameters:{docs:{description:{story:`The same template carrying a collection rather than a query: revlon.com's Virtual Try-On collection. Every result card fills the card's optional action seat with a "Try it now" control, seated at the foot of the card above the shade row, and each control's accessible name carries its own product so eight of them in a grid are eight distinguishable controls rather than one word repeated. The filter panel carries the new Colour group, whose rows are the panel's ordinary checkbox rows with a sample of the shade at the end of each. Product names, shade counts, prices and review counts are the live collection's own; the star ratings are read off the drawn stars, because the page publishes no numeric rating anywhere in its markup. Each card also carries the live collection's own product photograph and its own shade chips, so a card with four shades draws four chips and no arrows and a card with more draws its own count with arrows, derived rather than authored. The blank Template story above keeps the library's picture stand-in and its round placeholder numbers; only this page example carries real photography.`}}}},a={name:"No results",render:()=>o.jsx(b,{}),parameters:{docs:{description:{story:"What the page shows when a search matches nothing. The layout is the one revlon.com uses: the field keeps the term, and under the hairline one line of copy says plainly that nothing was found for it, We couldn’t find any results for “zzqxv”. That wording deliberately differs from the live site, whose line only repeats the term. The filter column, the sort, the results count, the grid and the pager are not drawn, because there is nothing for them to act on. The Featured Collection band below is unchanged, so the page still offers products to go to. Typing in the field opens the search suggestions panel, the same as on the other stories."}}}};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Template',
  render: () => <PrototypeSearchResults content={BLANK_SEARCH_CONTENT} />,
  parameters: {
    docs: {
      description: {
        story: 'The structure, with nothing real in it. Same composition as the sample below, same ' + 'components in the same order with the same layout props: only the content changes. ' + 'The page title and the search field are named rather than filled (the field carries a ' + 'term, because the clear control only exists when there is one to clear), ' + 'every result card draws the library\\'s own picture stand-in, the sidebar carries ' + 'three named filter groups where the sample carries the five the organism documents, ' + 'and a selection is left applied so the pill row and Clear all are on screen. The ' + 'result set runs past one page in both views, so the pager, which section 08 marks ' + 'optional and dependent on the result count, is visible here.'
      }
    }
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var h,l,c;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Page exemple',
  render: () => <PrototypeSearchResults />,
  parameters: {
    docs: {
      description: {
        story: SEARCH_PROTOTYPE_NOTE
      }
    }
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Page exemple: Virtual try-on',
  render: () => <PrototypeVirtualTryOn />,
  parameters: {
    docs: {
      description: {
        story: 'The same template carrying a collection rather than a query: revlon.com\\'s Virtual ' + 'Try-On collection. Every result card fills the card\\'s optional ' + 'action seat with a "Try it now" control, seated at the foot of the card above the ' + 'shade row, and each control\\'s accessible name carries its own product so eight of ' + 'them in a grid are eight distinguishable controls rather than one word repeated. The ' + 'filter panel carries the new Colour group, whose rows are the panel\\'s ordinary ' + 'checkbox rows with a sample of the shade at the end of each. Product names, shade ' + 'counts, prices and review ' + 'counts are the live collection\\'s own; the star ratings are read off the drawn stars, ' + 'because the page publishes no numeric rating anywhere in its markup. Each card also ' + 'carries the live collection\\'s own product photograph and its own shade chips, so a ' + 'card with four shades draws four chips and no arrows and a card with more draws its ' + 'own count with arrows, derived rather than authored. The blank Template story above ' + 'keeps the library\\'s picture stand-in and its round placeholder numbers; only this ' + 'page example carries real photography.'
      }
    }
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,w,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'No results',
  render: () => <PrototypeSearchNoResults />,
  parameters: {
    docs: {
      description: {
        story: 'What the page shows when a search matches nothing. The layout is the one revlon.com ' + 'uses: the field keeps the term, and under the hairline one line of copy says plainly ' + 'that nothing was found for it, We couldn’t find any results for “zzqxv”. ' + 'That wording deliberately differs from the live site, whose line only repeats the ' + 'term. The filter column, the sort, the results count, the grid and the pager are ' + 'not drawn, because there is nothing for them to act on. The Featured Collection band ' + 'below is unchanged, so the page still offers products to go to. Typing in the field ' + 'opens the search suggestions panel, the same as on the other stories.'
      }
    }
  }
}`,...(g=(w=a.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};const ye=["Template","SearchBandOnTheGrid","VirtualTryOn","NoResults"];export{a as NoResults,t as SearchBandOnTheGrid,e as Template,r as VirtualTryOn,ye as __namedExportsOrder,ge as default};
