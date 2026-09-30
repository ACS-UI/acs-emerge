import{k as E,r as m,j as e}from"./iframe-6dx3hp_4.js";import{D as A}from"./BrandWordmark-CszUK9Mj.js";import{I as F}from"./IconButton-Btgg2ITq.js";import{N as b}from"./NavItem-Dq6-KykK.js";import{I}from"./Icon-BihOhSWB.js";const U=5,H=[{value:"wordmark",label:"Spanning the columns"},{value:"logo",label:"In one column"}],O=[{heading:"Shop",links:[{label:"Face Makeup",href:"#"},{label:"Lip Color",href:"#"},{label:"Eye Makeup",href:"#"},{label:"Skin Care",href:"#"}]},{heading:"About",links:[{label:"Our Story",href:"#"},{label:"Sustainability",href:"#"},{label:"Press",href:"#"},{label:"Careers",href:"#"}]},{heading:"Help",links:[{label:"FAQ",href:"#"},{label:"Shipping and Returns",href:"#"},{label:"Contact Us",href:"#"},{label:"Find a Store",href:"#"}]},{heading:"Services",links:[{label:"Shade Finder",href:"#"},{label:"Virtual Try On",href:"#"},{label:"Salon Locator",href:"#"},{label:"Gift Guide",href:"#"}]},{heading:"Community",links:[{label:"Beauty Edit",href:"#"},{label:"Tutorials",href:"#"},{label:"Ambassadors",href:"#"},{label:"Newsletter Archive",href:"#"}]}],P=[{platform:"instagram",href:"#"},{platform:"tiktok",href:"#"},{platform:"youtube",href:"#"},{platform:"pinterest",href:"#"}],T=[{label:"Privacy Policy",href:"#"},{label:"Terms of Use",href:"#"},{label:"Cookie Preferences",href:"#"},{label:"Accessibility",href:"#"}],V=[{value:"en-us",label:"English (US)",href:"#"},{value:"en-gb",label:"English (UK)",href:"#"},{value:"fr-fr",label:"Francais (FR)",href:"#"},{value:"es-es",label:"Espanol (ES)",href:"#"},{value:"pt-br",label:"Portugues (BR)",href:"#"}];function q({platform:l}){return e.jsx(I,{name:`social-${l}`,size:null})}function w({socialLinks:l,label:n}){return l.length?e.jsx("ul",{className:"ds-footer__social-list",role:"list","aria-label":n,children:l.map((r,o)=>e.jsx("li",{children:e.jsx(F,{className:"ds-footer__social-link",href:r.href,size:"sm",inverse:!0,"aria-label":r.platform,target:"_blank",rel:"noopener noreferrer",children:e.jsx(q,{platform:r.platform})})},o))}):null}function G({locales:l,label:n}){const[r,o]=m.useState(!1);return e.jsx(A,{className:"ds-footer__locale",inverse:!0,triggerClassName:"ds-footer__global-sites",panelClassName:"ds-footer__locale-menu",listClassName:"ds-footer__locale-list",optionClassName:"ds-footer__locale-option",placement:"bottom-start",label:n,open:r,onOpenChange:o,options:l.map((s,f)=>({value:s.value??f,label:s.label,href:s.href??"#",hrefLang:s.value}))})}function D({columns:l=O,legalLinks:n=T,socialLinks:r=P,variant:o="logo",wordmark:s,logo:f,locales:p=V,globalSitesLabel:g="Global Sites",legalLinksLabel:_="Legal links",socialLinksLabel:v="Social media",headingLevel:S=3,copyright:N}){const t=E(),k=N??`© ${new Date().getFullYear()} ${t}. All rights reserved.`,x=`h${S}`,L=n.length?_:void 0,j=m.useId(),u=l.slice(0,U),y={style:{"--ds-footer-link-columns":u.length}},d=o==="wordmark";return e.jsxs("footer",{className:`ds-footer ${d?"ds-footer--wordmark":"ds-footer--logo"}`,role:"contentinfo",children:[e.jsxs("div",{className:"ds-footer__main",...y,children:[!d&&e.jsx("div",{className:"ds-footer__logo-column",children:e.jsx("a",{className:"ds-footer__logo",href:"/","aria-label":`${t} home`,children:f??s??t})}),e.jsx("div",{className:"ds-footer__columns",children:u.map((a,i)=>{const c=a.heading?`${j}-col-${i}`:void 0;return e.jsxs("div",{className:"ds-footer__column",children:[a.heading&&e.jsx(x,{className:"ds-footer__col-heading",id:c,children:a.heading}),e.jsx("ul",{className:"ds-footer__col-list",role:"list","aria-labelledby":c,children:(a.links??[]).map((h,C)=>e.jsx("li",{children:e.jsx(b,{column:!0,inverse:!0,className:"ds-footer__col-link",href:h.href,external:h.external,children:h.label})},C))})]},i)})})]}),e.jsxs("div",{className:"ds-footer__legal-band",children:[e.jsx("ul",{className:"ds-footer__legal-links",role:"list","aria-label":L,children:n.map((a,i)=>e.jsx("li",{children:e.jsx(b,{column:!0,inverse:!0,className:"ds-footer__legal-link",href:a.href,external:a.external,children:a.label})},i))}),e.jsx(w,{socialLinks:r,label:v})]}),e.jsxs("div",{className:"ds-footer__legal",children:[e.jsx(G,{locales:p,label:g}),e.jsx("p",{className:"ds-footer__copyright",children:k})]}),d&&e.jsx("div",{className:"ds-footer__wordmark","aria-hidden":"true",children:s??e.jsx("span",{className:"ds-footer__wordmark-text",children:t})})]})}D.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{columns:{defaultValue:{value:`[
  {
    heading: 'Shop',
    links: [
      { label: 'Face Makeup', href: '#' },
      { label: 'Lip Color', href: '#' },
      { label: 'Eye Makeup', href: '#' },
      { label: 'Skin Care', href: '#' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Shipping and Returns', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Find a Store', href: '#' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Shade Finder', href: '#' },
      { label: 'Virtual Try On', href: '#' },
      { label: 'Salon Locator', href: '#' },
      { label: 'Gift Guide', href: '#' },
    ],
  },
  {
    heading: 'Community',
    links: [
      { label: 'Beauty Edit', href: '#' },
      { label: 'Tutorials', href: '#' },
      { label: 'Ambassadors', href: '#' },
      { label: 'Newsletter Archive', href: '#' },
    ],
  },
]`,computed:!1},required:!1},legalLinks:{defaultValue:{value:`[
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Cookie Preferences', href: '#' },
  { label: 'Accessibility', href: '#' },
]`,computed:!1},required:!1},socialLinks:{defaultValue:{value:`[
  { platform: 'instagram', href: '#' },
  { platform: 'tiktok', href: '#' },
  { platform: 'youtube', href: '#' },
  { platform: 'pinterest', href: '#' },
]`,computed:!1},required:!1},variant:{defaultValue:{value:"'logo'",computed:!1},required:!1},locales:{defaultValue:{value:`[
  { value: 'en-us', label: 'English (US)', href: '#' },
  { value: 'en-gb', label: 'English (UK)', href: '#' },
  { value: 'fr-fr', label: 'Francais (FR)', href: '#' },
  { value: 'es-es', label: 'Espanol (ES)', href: '#' },
  { value: 'pt-br', label: 'Portugues (BR)', href: '#' },
]`,computed:!1},required:!1},globalSitesLabel:{defaultValue:{value:"'Global Sites'",computed:!1},required:!1},legalLinksLabel:{defaultValue:{value:"'Legal links'",computed:!1},required:!1},socialLinksLabel:{defaultValue:{value:"'Social media'",computed:!1},required:!1},headingLevel:{defaultValue:{value:"3",computed:!1},required:!1}}};export{T as D,D as F,H as L,P as a,O as b};
