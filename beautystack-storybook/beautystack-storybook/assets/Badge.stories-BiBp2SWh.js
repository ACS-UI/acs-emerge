import{j as e}from"./iframe-6dx3hp_4.js";import{B as t}from"./Badge-gItHl2ZN.js";import{a as p}from"./annotationPage-eYx--AWZ.js";import{D as g,a as m}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";const u={kind:{...m("New"),name:"Kind",...g({labels:{new:"New",bestseller:"Best seller (not ratified)",trending:"Trending (not ratified)",award:"Award winner (not ratified)",viral:"Viral (not ratified)"},options:["new","bestseller","trending","award","viral"]}),description:"Which style to draw. Only New is agreed today. The other four ship in code but are not an agreed set yet."},children:{name:"Label",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"The selected kind's built-in label"}},description:"The tag text, authored or pulled from product data. Leave it empty to see the built-in word for the selected Kind, or type over it, the way a product card passes a label from product data."}},w={kind:"new"};function y({kind:o,children:c}){return e.jsx(t,{kind:o,children:c})}const T={title:"Atoms/Badge",component:t,tags:["autodocs"],parameters:{docs:{page:p("Badge"),toc:{headingSelector:"h2"},description:{component:"A single inline tag: one small pill of colour and text that calls out something about a product, like New or Best Seller. Picking a kind picks the style it draws."}}}},a={name:"Default",args:w,argTypes:u,render:o=>e.jsx(y,{...o}),parameters:{docs:{description:{story:"The tag with the two things a designer can change. Switch **Kind** to compare the one agreed style, New, against the four provisional ones. Leave **Label** empty to see the built-in word for whichever kind is selected, or type over it the way a product card passes a label from product data. That override is the whole content mechanism, live, on any kind."}}}},r={name:"Kinds",render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--size-100)",flexWrap:"wrap"},children:[e.jsx(t,{kind:"new"}),e.jsx(t,{kind:"bestseller"}),e.jsx(t,{kind:"trending"}),e.jsx(t,{kind:"award"}),e.jsx(t,{kind:"viral"})]}),parameters:{docs:{description:{story:`The five kinds this page ships, side by side, which the one-at-a-time control above cannot show. Read it as the mechanism, colour and border from tokens per kind, not as an agreed set. Only **New** is agreed. The other four are extra badges nobody has turned into a taxonomy yet.

**Viral** is the newest and it is the editorial outline: a paper ground, a red edge and a red label, both reading the role whose job in this library is the editorial hue rather than the price red the tag looks like. It makes no price claim, so it must not borrow the token that does.`}}}};var n,i,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Default',
  args: BADGE_DEFAULT_ARGS,
  argTypes: BADGE_ARG_TYPES,
  render: args => <ConfigurableBadge {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'The tag with the two things a designer can change. Switch **Kind** to compare the ' + 'one agreed style, New, against the four provisional ones. Leave **Label** empty ' + 'to see the built-in word for whichever kind is selected, or type over it the way ' + 'a product card passes a label from product data. That override is the whole ' + 'content mechanism, live, on any kind.'
      }
    }
  }
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,l,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Kinds',
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--size-100)',
    flexWrap: 'wrap'
  }}>
      <Badge kind="new" />
      <Badge kind="bestseller" />
      <Badge kind="trending" />
      <Badge kind="award" />
      <Badge kind="viral" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The five kinds this page ships, side by side, which the one-at-a-time control above ' + 'cannot show. Read it as the mechanism, colour and border from tokens per kind, not ' + 'as an agreed set. Only **New** is agreed. The other four are extra badges nobody ' + 'has turned into a taxonomy yet.\\n\\n' + '**Viral** is the newest and it is the editorial outline: a paper ground, a red edge ' + 'and a red label, both reading the role whose job in this library is the editorial ' + 'hue rather than the price red the tag looks like. It makes no price claim, so it ' + 'must not borrow the token that does.'
      }
    }
  }
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const B=["Playground","AllKinds"];export{r as AllKinds,a as Playground,B as __namedExportsOrder,T as default};
