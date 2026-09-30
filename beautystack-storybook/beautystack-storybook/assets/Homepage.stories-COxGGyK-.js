import{j as r}from"./iframe-6dx3hp_4.js";import{H as u}from"./Homepage-BCdkFher.js";import"./BrandWordmark-CszUK9Mj.js";import"./Footer-BfocwZBN.js";import"./Hero-BHurgzVJ.js";import"./ContentCard-Cy_xF-W9.js";import"./ProductCard-1ftwzkvg.js";import"./NewsletterSection-3il-1Xyd.js";import{D as T}from"./designerArgTypes-CVo4ohMZ.js";import{D as E,P as a,B as y}from"./PrototypeHomepage-D4lIqfih.js";import"./preload-helper-C1FmrZbK.js";import"./Button-CiZyClsp.js";import"./Icon-BihOhSWB.js";import"./Loading-DyIAIYoE.js";import"./newTabMark-TI50-QeA.js";/* empty css               */import"./IconButton-Btgg2ITq.js";import"./SearchBar-DwGR_hzY.js";import"./SearchSuggestions-CAczFYXo.js";import"./Placeholder-Ed4iQRc7.js";import"./MenuItem-bBgP9Lwo.js";import"./Drawer-CypulVuT.js";import"./useScrollLock-B-psvS0l.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";import"./MediaFrame-CgpnOU1q.js";import"./NavItem-Dq6-KykK.js";import"./Badge-gItHl2ZN.js";import"./Select-DBrm7KPu.js";import"./FieldRequirement-Dn5H0DsY.js";import"./Price-xMe2P_eJ.js";import"./StarRating-BT40pja7.js";import"./SwatchCarousel-BPc8GOsx.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./shadeGroup-Blqfx0Bo.js";import"./Checkbox-C5uneDTR.js";import"./ControlIndicator-DEJX7FyE.js";import"./Input-3DsPWvNA.js";import"./Link-yk_PIpvX.js";import"./CardCollection-Bq5DTwa9.js";import"./Pagination-BryqecgJ.js";import"./FiltersSortPanel-CPq3da6j.js";import"./FilterGroup-sj5PvoiP.js";import"./CheckboxGroup-Hr1vSafZ.js";import"./Tag-A0JNg_qu.js";import"./filtersSortFixtures-BNZ3J36l.js";import"./blankContent-McemyZjd.js";const i={video:"Looping video",image:"Still image"};({...T({labels:i,options:Object.keys(i)})});const he={title:"Templates/T-01. Homepage",id:"templates-homepage",component:u,tags:["autodocs","revlon-only"],parameters:{layout:"fullscreen",themeShellPadding:!1,docs:{description:{component:`
The homepage is typically the user's first landing page when accessing the site. It is a flexible space to showcase what's new, featured, or seasonal at Revlon and offer quick links to key products and categories for further exploration.

| Component Name | Requirement | Content Authoring | Notes |
| :---- | :---- | :---- | :---- |
| Hero Primary or Primary Campaign | Required | Authored | - |
| Carrousel product | Required | Dynamic Carousel | E.g., 'Trending', 'Latest', 'Best Sellers' |
| Hero Primary Campaign or Secondary | Required | Authored | Recommended components for this section may change if a secondary banner component is added to scope. |
| Carrousel | Required | Authored | Product category carousel. E.g., Lips, Hair, etc. |
`}}}},e={name:"Template (Hero Primary)",render:()=>r.jsx(a,{content:y}),parameters:{docs:{description:{story:"The structure, with nothing real in it. Same composition as the revlon.com sample below, same components in the same order with the same layout props: the only thing that changes is the content handed to the page. Every picture box is empty on purpose and draws the library's own stand-in, and the repeating bands carry only enough cards to show that they repeat, six category tiles where the live rail draws eight."}}}},t={name:"Template (Hero Campaign)",render:()=>r.jsx(a,{content:y,heroVariant:"split"}),parameters:{docs:{description:{story:"The Homepage Template with a Primary Campaign opening: one media-only panel and one media panel with the headline, description and CTA. Both image slots use placeholders. The remaining page sections match the Template."}}}},o={name:"Page exemple",render:()=>r.jsx(a,{}),parameters:{docs:{description:{story:E}}}};var n,s,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Template (Hero Primary)',
  render: () => <PrototypeHomepage content={BLANK_HOMEPAGE_CONTENT} />,
  parameters: {
    docs: {
      description: {
        story: 'The structure, with nothing real in it. Same composition as the revlon.com sample ' + 'below, same components in the same order with the same layout props: the only thing ' + 'that changes is the content handed to the page. Every picture box is empty on ' + 'purpose and draws the library\\'s own stand-in, and the repeating bands carry only ' + 'enough cards to show that they repeat, six category tiles where the live rail draws ' + 'eight.'
      }
    }
  }
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var m,c,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Template (Hero Campaign)',
  render: () => <PrototypeHomepage content={BLANK_HOMEPAGE_CONTENT} heroVariant="split" />,
  parameters: {
    docs: {
      description: {
        story: 'The Homepage Template with a Primary Campaign opening: one media-only panel and one ' + 'media panel with the headline, description and CTA. Both image slots use placeholders. ' + 'The remaining page sections match the Template.'
      }
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,h,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Page exemple',
  render: () => <PrototypeHomepage />,
  parameters: {
    docs: {
      description: {
        story: HOMEPAGE_PROTOTYPE_NOTE
      }
    }
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const ge=["Template","TemplatePrimaryCampaign","RevlonHomepage"];export{o as RevlonHomepage,e as Template,t as TemplatePrimaryCampaign,ge as __namedExportsOrder,he as default};
