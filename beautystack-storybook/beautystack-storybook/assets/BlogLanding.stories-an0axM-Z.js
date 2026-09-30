import{j as e}from"./iframe-6dx3hp_4.js";import{B as y}from"./BlogLanding-Cbjy-jut.js";import{u as b,N as v,R as f}from"./BrandWordmark-CszUK9Mj.js";import{F as T}from"./Footer-BfocwZBN.js";import{H as C}from"./Hero-BHurgzVJ.js";import{C as N}from"./CardCollection-Bq5DTwa9.js";import{A as S}from"./ArticleCard-C8RmiUi7.js";import"./Pagination-BryqecgJ.js";import{N as k}from"./NewsletterSection-3il-1Xyd.js";import{A as a}from"./Homepage-BCdkFher.js";import{B as n,b as R}from"./blankContent-McemyZjd.js";import"./preload-helper-C1FmrZbK.js";import"./SearchBar-DwGR_hzY.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./SearchSuggestions-CAczFYXo.js";import"./Placeholder-Ed4iQRc7.js";import"./MenuItem-bBgP9Lwo.js";import"./Button-CiZyClsp.js";import"./Loading-DyIAIYoE.js";/* empty css               */import"./Drawer-CypulVuT.js";import"./useScrollLock-B-psvS0l.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";import"./MediaFrame-CgpnOU1q.js";import"./NavItem-Dq6-KykK.js";import"./Link-yk_PIpvX.js";import"./Checkbox-C5uneDTR.js";import"./ControlIndicator-DEJX7FyE.js";import"./FieldRequirement-Dn5H0DsY.js";import"./Input-3DsPWvNA.js";import"./ContentCard-Cy_xF-W9.js";import"./ProductCard-1ftwzkvg.js";import"./Badge-gItHl2ZN.js";import"./Select-DBrm7KPu.js";import"./Price-xMe2P_eJ.js";import"./StarRating-BT40pja7.js";import"./SwatchCarousel-BPc8GOsx.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./shadeGroup-Blqfx0Bo.js";const g=[{title:"Get The Look From Christian Siriano's NYFW Show with Revlon",href:"https://www.revlon.com/blogs/news/christian-siriano-nyfw-makeup-look",image:a("blog-landing-article-siriano-look.jpg")},{title:"Revlon Returns to NYFW with Christian Siriano",href:"https://www.revlon.com/blogs/news/christian-siriano-nyfw",image:a("blog-landing-article-nyfw.png")},{title:"Caring For Your Mental Wellness Is Beautiful: Introducing Revlon x Real",href:"https://www.revlon.com/blogs/news/revlon-real-mental-health",image:a("blog-landing-article-revlon-real.jpg")},{title:"Meet Our New Brand Ambassador: Madelyn Cline",href:"https://www.revlon.com/blogs/news/madelyn-cline-brand-ambassador",image:a("blog-landing-article-madelyn-cline.jpg")}],x=g.length,A=`
Template 04 reassembled from \`src/components/\` and nothing else, standing on the 12 column page
grid, following the client spec's own recommended structure. It declares no CSS and writes no
inline style: the only class this page writes is \`template-stage\`, already in
\`src/styles/global.css\`.

## The components on this page

One row per line of the client's recommended structure, plus anything this page draws that the structure does not name. A check means the library has a component for that line; a warning means it does not, and the note says what stands in.

| Spec line | Required? | What draws it | Component? |
|---|---|---|---|
| Hero Secondary | Required | [Hero](https://revlon-beautystack-ds.vercel.app/?path=/docs/organisms-hero--docs), Secondary: copy on the dark block, the banner photograph beside it | ✅ |
| Article Card / Article listing | Required | [Card Collection](https://revlon-beautystack-ds.vercel.app/?path=/docs/organisms-card-collection--docs), three across, with four [Article Card](https://revlon-beautystack-ds.vercel.app/?path=/docs/molecules-article-card--docs) | ✅ |
| Pagination | Required only past one page | [Pagination](https://revlon-beautystack-ds.vercel.app/?path=/docs/molecules-pagination--docs), drawn by the card band itself once a feed runs past twelve. **Not on this filled sample**: the 'news' folder holds four articles and four is one page, which is the client's condition answering itself. The **Template** story above draws it, over a structure feed of 42 | ✅ |
| Sign up band | Not in the spec | [Newsletter Section](https://revlon-beautystack-ds.vercel.app/?path=/docs/organisms-newsletter-section--docs) | ✅ |
| Header and footer | Frame, on every page | [Navigation](https://revlon-beautystack-ds.vercel.app/?path=/docs/organisms-navigation--docs), Flagship, and [Footer](https://revlon-beautystack-ds.vercel.app/?path=/docs/organisms-footer--docs), Wordmark | ✅ |

## The client's Template Definition text, section 04

Reproduced exactly as delivered. Nothing below is reworded.

> ## **04 Blog Landing**
>
> Ideally a blog landing page is an overview style page that allows users to explore all of various
> blog categories and individual articles at a top level.
>
> Recommended structure:
>
> - Hero Secondary - Required - Authored
> - Article Card / Article listing - Required - Dynamic - Dynamic content for documents published in a 'news' folder.
> - Pagination - Required only when there is more than 1 page of content - Dynamic

## What this page mounts for each spec line

| Spec line | Mounted | Note |
| --- | --- | --- |
| Hero Secondary, required, authored | \`Hero variant="secondary" headingLevel={1} cta={null}\`, heading + body + the live banner photograph, copy on the dark block in the left half | The layout the spec names, rather than the legacy \`image\` layout the shipped template mounts. Secondary takes \`headingLevel\`, so the spec's own component opens the page: this is the page's \`h1\`. No eyebrow and no CTA, because the live page publishes neither and the doc names neither. |
| Article Card / Article listing, required, dynamic | \`CardCollection columns={3} totalCount={4} page={1}\` + four \`ArticleCard\` at \`headingLevel={2}\` | The four real articles the 'news' folder holds, each with its live headline, its live destination and its live photograph. Three across, a cap rather than a fixed track: the band draws fewer as the room narrows, two on a tablet and two on a phone. **The Template story above draws the card whole**, picture box, headline, short description and date. This sample draws a picture and a headline only, because that is all revlon.com/blogs/news publishes on a card. |
| Pagination, required only when >1 page | \`Pagination variant="numbered"\`, **drawn by \`CardCollection\` itself** off \`totalCount\`, and on this filled sample that comes to **nothing, which is the condition working** | The pager belongs to the band: it divides \`totalCount\` by its page of 12 and draws the rail only past one page. The 'news' folder holds four documents, so this sample has no second page and no pager. **The Template story above draws four numbers**, because its structure feed declares \`totalCount={42}\`, and a condition a reader never sees crossed is a line they never learn is there. |
| *(not a spec line)* Header, sign up band, footer | \`Navigation\` + skip target, \`NewsletterSection\`, \`Footer\` | House rule: every page opens with the navigation and closes with the footer, and the blog pages carry the sign up band above the footer. |

## Where the live site disagrees with the doc, for the reviewer

1. **The live header is three sections, not one Hero.** revlon.com/blogs/news opens on a centred
   \`h1\` of its own, then a full-bleed image band carrying no text, then a separate paragraph. The
   doc names "Hero Secondary", so this page mounts Secondary: the headline sets left rather than
   centred, and the banner becomes the right-hand column rather than a ground the copy sits on.
2. **The live standfirst is 251 characters and Secondary's ceiling is 200.** Carried whole rather
   than trimmed: the words are the client's and the ceiling is the component's, and cutting one to
   satisfy the other would hide the finding.
3. **The live page draws no pagination at all**, which agrees with the doc's own condition once the
   feed is counted: four articles is one page.

## Gaps this rebuild still finds
`,L={heading:"Revlon News",body:"Discover the latest in beauty trends, expert tips, and product reviews on the Revlon blog. Stay updated with our exclusive content to enhance your beauty routine and achieve flawless looks. Join our community and embrace your unique style with Revlon.",media:{image:a("blog-landing-hero.jpg")},articles:g,totalCount:x},E={heading:n.heading,body:n.lead,media:{},articles:R(6,{date:n.date,dateTime:n.dateTime}),totalCount:42};function s({content:o=L}){const{logo:u,wordmark:w}=b();return e.jsxs("div",{className:"template-stage",children:[e.jsx(v,{items:f,logo:u,layout:"flagship",utilities:["search","locator"],sticky:!0}),e.jsx("div",{id:"main",tabIndex:-1}),e.jsx(C,{variant:"secondary",headingLevel:1,heading:o.heading,body:o.body,cta:null,media:o.media}),e.jsx(N,{columns:3,totalCount:o.totalCount,page:1,children:o.articles.map(t=>e.jsx(S,{href:t.href,title:t.title,description:t.description,date:t.date,dateTime:t.dateTime,image:t.image,headingLevel:2},t.title))}),e.jsx(k,{}),e.jsx(T,{variant:"wordmark",wordmark:w})]})}s.__docgenInfo={description:"",methods:[],displayName:"PrototypeBlogLanding",props:{content:{defaultValue:{value:`{
  heading: 'Revlon News',
  body: 'Discover the latest in beauty trends, expert tips, and product reviews on the Revlon blog. Stay updated with our exclusive content to enhance your beauty routine and achieve flawless looks. Join our community and embrace your unique style with Revlon.',
  media: { image: ASSET('blog-landing-hero.jpg') },
  articles: ARTICLES,
  totalCount: NEWS_FEED_TOTAL,
}`,computed:!1},required:!1}}};const fe={title:"Templates/T-04. Blog Landing",id:"templates-blog-landing",component:y,tags:["autodocs","revlon-only"],parameters:{layout:"fullscreen",themeShellPadding:!1,docs:{description:{component:`
Ideally a blog landing page is an overview style page that allows users to explore all of various blog categories and individual articles at a top level.

Recommended structure:

| Component Name | Requirement | Content Authoring | Notes |
| :---- | :---- | :---- | :---- |
| Hero Secondary | Required | Authored | - |
| Article Card / Listing | Required | Dynamic | Dynamic content for documents published in a folder. |
| Pagination | Required only when there is more than 1 page of content | Dynamic | - |
`}}}},r={name:"Template",render:()=>e.jsx(s,{content:E}),parameters:{docs:{description:{story:"The structure, with nothing real in it. Same composition as the sample below, same components in the same order: only the content changes. Every picture box is empty on purpose and draws the library's own stand-in, and the feed runs past one page so the pager, which section 04 marks required only past one page, is visible here. The cards are drawn whole, picture, headline, short description and date, so every field the article card supports is on show; the sample below keeps only the two its own feed publishes. A blog landing page carries no breadcrumbs, in either view."}}}},i={name:"Page exemple",render:()=>e.jsx(s,{}),parameters:{docs:{description:{story:A}}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Template',
  render: () => <PrototypeBlogLanding content={BLANK_CONTENT} />,
  parameters: {
    docs: {
      description: {
        story: 'The structure, with nothing real in it. Same composition as the sample below, same ' + 'components in the same order: only the content changes. Every picture box is empty on ' + 'purpose and draws the library\\'s own stand-in, and the feed runs past one page so the ' + 'pager, which section 04 marks required only past one page, is visible here. The cards ' + 'are drawn whole, picture, headline, short description and date, so every field the ' + 'article card supports is on show; the sample below keeps only the two its own feed ' + 'publishes. A blog landing page carries no breadcrumbs, in either view.'
      }
    }
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var h,p,m;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Page exemple',
  render: () => <PrototypeBlogLanding />,
  parameters: {
    docs: {
      description: {
        story: BLOGLANDING_NOTE
      }
    }
  }
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Te=["Template","TheRevlonBlog"];export{r as Template,i as TheRevlonBlog,Te as __namedExportsOrder,fe as default};
