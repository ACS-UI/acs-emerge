import{r as n,j as e}from"./iframe-6dx3hp_4.js";import{I as d}from"./Icon-BihOhSWB.js";function f(){return e.jsx("span",{className:"ds-article-card__empty","aria-hidden":"true",children:e.jsx(d,{name:"image-off",size:"lg"})})}function w({href:t,image:a,title:o,description:r,date:s,dateTime:l,headingLevel:c=3}){if(!t)throw new Error("ArticleCard requires an `href`. The whole card is one link to the article and there is no call to action inside it, so a card with no destination has nothing to be. Give every feed row its article URL.");const[h,m]=n.useState(null),p=!!a&&a!==h,i=n.useId(),u=`h${Math.min(6,Math.max(2,Number(c)||3))}`;return e.jsxs("a",{className:"ds-article-card",href:t,"aria-labelledby":i,children:[e.jsx("div",{className:"ds-article-card__media",children:p?e.jsx("img",{className:"ds-article-card__img",src:a,alt:"",loading:"lazy",onError:()=>m(a)}):e.jsx(f,{})}),e.jsxs("div",{className:"ds-article-card__text",children:[e.jsx(u,{className:"ds-article-card__title",id:i,children:o}),r&&e.jsx("p",{className:"ds-article-card__description",children:r}),s&&e.jsx("time",{className:"ds-article-card__date",dateTime:l,children:s}),e.jsxs("span",{className:"ds-article-card__read-more",children:["Read more",e.jsx(d,{name:"arrow-right",size:"sm","aria-hidden":"true"})]})]})]})}w.__docgenInfo={description:`href         the article. REQUIRED: the whole card is this one link, root to edge, always, and
             a card handed nowhere to go is refused rather than drawn as an inert tile. There is
             no second destination anywhere inside it and no second affordance for this one
             either.
image        the article's photograph. Absent or broken, the media box draws its empty state.
title        the headline. Required, and it is the accessible name of the card link.
description  the short description. OPTIONAL: populated dynamically, an administrator can
             override it, and it may be truncated to preserve the layout. A feed that has none
             passes nothing and the card draws nothing, which is what optional means here.
date         the published date as the reader sees it, already formatted for the locale.
dateTime     the same date machine-readable, for the \`<time datetime>\` attribute. Optional:
             a feed that has only a display string still renders a \`<time>\`, just an unannotated
             one, which is what the HTML spec asks for rather than a guess at a parse.
headingLevel 2 to 6. The HOST owns it, because only the host knows what sits above the feed.`,methods:[],displayName:"ArticleCard",props:{headingLevel:{defaultValue:{value:"3",computed:!1},required:!1}}};export{w as A};
