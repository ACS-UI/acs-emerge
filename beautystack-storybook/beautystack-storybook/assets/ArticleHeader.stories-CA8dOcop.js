import{j as a}from"./iframe-6dx3hp_4.js";import{A as u}from"./ArticleHeader-98e5dwCp.js";import{a as T}from"./annotationPage-eYx--AWZ.js";import{D as x,a as R,c as i}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./MediaFrame-CgpnOU1q.js";import"./Placeholder-Ed4iQRc7.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./useScrollLock-B-psvS0l.js";const C="/revlon-home/blog-landing-hero.jpg",S="/revlon-home/blog-landing-article-madelyn-cline.jpg",_={heading:{name:"Title",control:"text",table:{category:"Content"}},standfirst:{name:"Opening sentence",control:"text",table:{category:"Content"},description:"The sentence under the title saying what the article is about. Optional."},category:{name:"Category",control:"text",table:{category:"Content"}},date:{name:"Date",control:"text",table:{category:"Content"}},readingTime:{name:"Reading time",control:"text",table:{category:"Content"}},authorName:{name:"Author",control:"text",table:{category:"Content"}},authorRole:{name:"Author role",control:"text",table:{category:"Content"}},showAvatar:{...i("On"),name:"Portrait",description:"Whether the byline carries a picture. With a name and no picture the round frame is still drawn."},showMedia:{...i("On"),name:"Lead picture",description:"Whether the header opens on a picture. An article that opens on words alone is not a special case."},mediaRatio:{...R("16 / 9"),name:"Picture shape",...x({labels:{"16 / 9":"Wide, 16:9","3 / 2":"Classic, 3:2","1 / 1":"Square"},options:["16 / 9","3 / 2","1 / 1"]}),description:"There is no house shape for a lead picture. The one the article publishes is the one to draw."},headingLevel:{control:!1,table:{disable:!0}},media:{control:!1,table:{disable:!0}},author:{control:!1,table:{disable:!0}},categoryHref:{control:!1,table:{disable:!0}},dateTime:{control:!1,table:{disable:!0}},label:{control:!1,table:{disable:!0}}},t={heading:"Master the No-Makeup Makeup Look in 5 Steps",standfirst:"Celebrating your natural features while evening out your complexion. The secret is choosing the right products and applying them with a light touch.",category:"Tutorials",date:"June 2025",readingTime:"6 min read",authorName:"Revlon Beauty Editors",authorRole:"Editorial team",showAvatar:!0,showMedia:!0,mediaRatio:"16 / 9"};function g({heading:e,standfirst:n,category:y,date:b,readingTime:f,authorName:s,authorRole:v,showAvatar:E,showMedia:A,mediaRatio:w}){return a.jsx(u,{heading:e,standfirst:n,category:y,categoryHref:"#",date:b,dateTime:"2025-06",readingTime:f,author:s?{name:s,role:v,avatar:E?S:void 0}:void 0,media:A?{image:C,alt:""}:void 0,mediaRatio:w})}const F={title:"Organisms/Article header",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",themeShellPadding:!1,docs:{page:T("Article header"),toc:{headingSelector:"h2, h3"}}}},r={name:"Default",args:t,argTypes:_,render:e=>a.jsx(g,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"Every part a page can hand over. Clear **Author** and the byline is not drawn; turn **Lead picture** off and the article opens on words alone. Neither is a special case: what the page supplies is what gets drawn."}}}},D={"Every part":t,"No picture":{...t,showMedia:!1},"No byline":{...t,authorName:"",authorRole:"",showAvatar:!1},"Title only":{...t,standfirst:"",category:"",date:"",readingTime:"",authorName:"",authorRole:"",showAvatar:!1,showMedia:!1}},o={name:"Content shapes",parameters:{controls:{disable:!0},docs:{description:{story:"The four shapes side by side. What changes between them is which facts the page had, never a setting somebody picked."}}},render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-stack-xloose)"},children:Object.entries(D).map(([e,n])=>a.jsxs("div",{children:[a.jsx("p",{className:"tpl-small",style:{color:"var(--color-text-muted)",paddingInline:"var(--grid-margin-desktop)"},children:e}),a.jsx(g,{...n})]},e))})};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Default',
  args: DEFAULT_ARGS,
  argTypes: ARTICLE_HEADER_ARG_TYPES,
  render: args => <ConfigurableArticleHeader {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'Every part a page can hand over. Clear **Author** and the byline is not drawn; turn ' + '**Lead picture** off and the article opens on words alone. Neither is a special case: ' + 'what the page supplies is what gets drawn.'
      }
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,h,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Content shapes',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'The four shapes side by side. What changes between them is which facts the page had, ' + 'never a setting somebody picked.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-stack-xloose)'
  }}>
      {Object.entries(PRESETS).map(([name, args]) => <div key={name}>
          <p className="tpl-small" style={{
        color: 'var(--color-text-muted)',
        paddingInline: 'var(--grid-margin-desktop)'
      }}>
            {name}
          </p>
          <ConfigurableArticleHeader {...args} />
        </div>)}
    </div>
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const U=["Playground","ContentShapes"];export{o as ContentShapes,r as Playground,U as __namedExportsOrder,F as default};
