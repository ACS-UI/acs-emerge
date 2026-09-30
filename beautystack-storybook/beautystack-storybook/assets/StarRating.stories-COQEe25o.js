import{j as e}from"./iframe-6dx3hp_4.js";import{S as t}from"./StarRating-BT40pja7.js";import{a as j}from"./annotationPage-eYx--AWZ.js";import{c as E}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";const n=E("On"),W={inverse:{...n,name:"Inverse",description:"Use on a dark background."},showRating:{...n,name:"Rating",description:"Show the rating badge at all. Turn this off to see the absent state."},rating:{name:"Score",if:{arg:"showRating",eq:!0},control:{type:"range",min:0,max:5,step:.1},description:"The score out of five. Fractional values partially fill the star run.",table:{category:"Options",type:{summary:"A number from 0 to 5"},defaultValue:{summary:"4.2"}}},showScore:{...n,name:"Average score",description:"Print the average score beside the stars. Off unless a page asks: a detail page shows it, a product card does not.",table:{...n.table,defaultValue:{summary:"Off"}}},showCount:{...n,name:"Review count",description:"Show the parenthesised review count beside the score."},linkToReviews:{...n,name:"Jump to the reviews",description:"Carry the review count on a control that goes to the reviews. A detail page turns this on; a card never does, because a card is already one whole link and a link inside a link breaks it.",table:{...n.table,defaultValue:{summary:"Off"}}},count:{name:"Number of reviews",if:{arg:"showCount",eq:!0},control:{type:"number",min:0},description:"The review count shown in parentheses, and folded into the spoken name.",table:{category:"Options",type:{summary:"A whole number"},defaultValue:{summary:"1460"}}}},O={inverse:!1,showRating:!0,rating:4.2,showScore:!0,showCount:!0,count:1460,linkToReviews:!1};function N({showRating:a,rating:d,showScore:c,showCount:l,count:u,linkToReviews:q,inverse:p}){return e.jsx("div",{style:p?{background:"var(--color-bg-inverse)",padding:"var(--space-inset-base)"}:void 0,children:e.jsx(t,{inverse:p,rating:a?d:void 0,showScore:c,count:l?u:void 0,reviewsHref:q?"#reviews":void 0})})}const B={title:"Atoms/StarRating",component:t,tags:["autodocs"],parameters:{docs:{page:j("StarRating"),toc:{headingSelector:"h2"},description:{component:"A five-star rating badge: a score out of five, with the average score and a review count beside it when a page asks for them. On a detail page the count can ride on a control that jumps to the reviews. It is a primitive, never placed on a page on its own."}},componentDoc:{usage:`
## When to use

- ✅ **Inside a component showing a product's aggregate score**, with the review count beside
  it.
- ✅ **On a detail page, with the average score printed**, which is what the live site and the
  drawings both do there. A product card shows the stars and the count only, so it asks for
  nothing and gets the right thing.
- ✅ **Inside a single review**, showing that review's own score, with no count.
- ✅ **On a detail page, carrying the jump to the reviews**, by naming a destination. The whole
  badge becomes the link and the count rides in its label, so the row is one thing rather than a
  picture with a link stuck beside it.

- ❌ **Straight on a page.** Whichever component mounts it decides whether a rating appears at
  all, and that decision is never this one's.
- ❌ **Inside anything that is already a link.** A product card is one whole link, and a link
  inside a link is closed early by the browser: measured, the rating, the price, the size
  selector and the call to action all fall out of the card. Name no destination there.
- ❌ **Collecting a rating.** It draws a score, it never takes one, in either shape.
- ❌ **Showing how many reviews gave each score.** This atom draws one score, never a distribution.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Root** | rendered only when there is a score | With no score, nothing renders at all. See States |
| **Track** | required, once the root renders | Holds the two star runs in the same box. Hidden from screen readers |
| **Base**, five **outlined** stars | required, once the root renders | The unearned run the fill sits on top of. Hollow, with a hairline edge, never a dimmed solid |
| **Fill**, five **solid** stars clipped to the score | required, once the root renders | A width clip over a second identical run, not five stars swapped in and out. That is what lets a fractional score land partway through a star |
| **Star**, one drawn shape used by both runs | five per run | An inline SVG on the component's own geometry, **not a font character**. The two runs differ only in ink |
| **Average score**, the number itself | optional, **off unless a page asks** | A detail page prints it, a product card does not. That split is what the live site and the drawings both do, so silence is what a component gets by passing nothing |
| **Review count**, the parenthesised number | optional: present for an aggregate score, omitted for a single review's own | The parentheses are the label, not decoration, and the same number is folded into the spoken name |
| **Reviews control**, the jump to the reviews | optional, **only when a page names a destination** | The whole badge becomes it, and the count moves inside its label. The label is underlined at rest and thickens on hover, on pointer devices only |

- **Tokens own both inks, the outline weight and the pitch between the stars**, so the earned
  star is *that brand's* rating red rather than Revlon's, across all 21 brands.
- **The shape is the component's own.** One path, shared by both runs, so the fill can never be
  a different silhouette from the outline underneath it.
- **The run is sized off the small text rung**, so it stands exactly as tall as the small text
  it sits beside. There is no size control: a rating is as big as its neighbour.
- **The score and the review count are content.** They arrive from the product or the review,
  never written inside the component.

> **The stars are drawn, not typed.** They are a glyph pair rather than the text characters
> \`★★★★★\`, and unearned means **outlined** rather than a pale solid silhouette. That is what
> keeps an unearned star from reading as an earned one on a brand whose accent is light.

**Whether a rating appears at all is never this component's decision.** It belongs to whichever
component mounts it, so a change here lands everywhere at once.

### Variants

**Two, and the page picks by naming a destination or not.**

1. **Inert.** Stars, the average score and the review count as plain text. A card, a listing,
   anywhere with no action. **This is what you get by passing nothing**, which is why ten of the
   eleven places that mount a rating needed no change when the second variant arrived.
2. **Jumping to the reviews.** Stars and the average score, with the count carried by a link that
   goes to the reviews section. It draws the same parenthesised figure the inert badge draws,
   \`(6098)\`, and it is announced as *Read 6098 reviews*, so it says what it goes to for anyone
   who cannot see the number. **The rating and the count are announced as two separate things
   here**, the score on the stars and the count on the link, which is what a descriptive link
   means.

**The second one contains a link, so it can never sit inside another link.** That is not a style
rule. Served as HTML, a link inside a link makes the browser close the outer one early, and on a
product card the rating, the price and the call to action all end up outside the card.

**The row is two groups, not four things.** The stars and the score sit close together because
they are one fact; the control stands further off because it is a different kind of thing.
`,guidance:`
## Behaviors

### States

- **Rated.** The fill draws over the base run at the percentage the score represents. A 4.2 out
  of 5 fills roughly 84% of the track.
- **Fractional scores land mid-star.** Because the fill is a width clip over a second identical
  run, 4.5 cuts the fifth star down the middle and 3.2 leaves a fifth of the fourth one red,
  instead of jumping in whole steps.
- **Rated, with a review count.** The count appears in parentheses beside the stars, \`(1460)\`,
  exactly as supplied, on every surface that shows one. On an inert badge that same figure is
  folded into the spoken name. On a badge with a destination the figure is the link's drawn words
  and the link is announced as *Read 1460 reviews*, so the number on the screen and the number in
  the ear are always the same number.
- **No reviews yet.** A product whose reviews integration is switched on before its first review
  lands draws \`(0)\`, and the spoken name says *0 reviews*. It is a real count of nothing, not a
  missing count: leaving the count out altogether is the different state one bullet up. Set
  **Review count** to 0 in the Playground above to see it.
- **Exactly one review.** The spoken name says *1 review*, and a link is announced as *Read 1
  review*. The number and its noun agree wherever they appear, because that phrase is only ever
  heard by someone who cannot read the figure beside it.
- **Absent.** With no score, nothing renders: no empty track, no "0 out of 5 stars", no
  zero-width sliver holding a gap open in the layout. Turn **Rating** off in the Playground
  above to see it.
- **Inert.** With no destination there is no hover, no focus, no pressed and no disabled, because
  this is a picture of a score rather than a control. That is what almost every surface gets.
- **Jumping to the reviews.** With a destination the parenthesised count beside the stars is a
  link. It is underlined at rest, so the control is told from its neighbours by more than ink,
  and the underline thickens on hover. The stars themselves stay inert, and the focus ring is the
  library's, drawn around the figure that Enter will follow.

**The absent state is the one most likely to break by accident.** A score arriving as
\`undefined\` with no guard in front of it would draw a broken track and announce the literal
word "undefined", so the guard lives inside the primitive rather than in every parent that
mounts it.

### Interactions

- **None, unless a page names a destination.** The rating itself never answers a tap.
- **With a destination, the words beside the stars are the jump to the reviews.** Tapping them
  goes to the reviews section; tapping the stars does nothing. A screen reader meets the rating
  once, as the score out of five, and then meets a link that says how many reviews it goes to.
- **The hover is ours.** The live site draws that row with a vendor widget, but this library does
  not mount the widget, it redraws the row. Whatever we draw we own, hover included, and it is
  declared for pointer devices only.
- **Never inside another link.** Yes on a detail page, never inside a card. It is not a matter
  of taste: a link nested in a link is closed early by the HTML parser, and the card comes apart
  around it.

## Rules

- ✅ **Do** let the parent decide whether a rating renders at all.
- ❌ **Don't** put page-specific or channel-specific logic inside the primitive. Flag it if it
  already has some, rather than let it stay quiet.

- ❌ **Don't** restate the scale. One constant feeds the spoken name and both runs. A hand-typed
  "5" anywhere is how the picture and the number drift apart.
- ❌ **Don't** draw the star with a font character. The shape has to be the library's, or it
  changes with whatever family, platform and fallback happen to resolve.
- ❌ **Don't** give the unearned star a fill. Hollow is what tells it apart from an earned star
  in a light-accent brand, where a pale solid and a brand solid are the same picture.
- ❌ **Don't** let the stars shrink. Inside a clipped run, shrinkable stars squash to fit the
  clip instead of being cut by it, and a 1 out of 5 renders as five small whole stars.
- ❌ **Don't** fake a future state by fading the whole element. The partial fill is a width clip,
  not a fade, and must never be simplified into one.
- ❌ **Don't** name a destination inside something that is already a link. The build fails if you
  do, because a link inside a link is not a style problem, it is markup the browser cannot parse.
- ❌ **Don't** flatten the row back to one even gap. The stars and the score are one group and
  the control is another, and the spacing is what says so.

- ✅ **Do** re-check contrast on a new ground. This component supplies the two star inks only;
  the background comes from whatever surface it lands on, and a contrast pair needs both sides.
- ✅ **Do** hide one of the two copies when a surface also prints the score as its own text. The
  reviews section does exactly that, and without it the number is announced twice on one page.

### Content rules

- ❌ **Don't** invent a character limit for the review count. Every brief that places a rating
  says limits are owed by design.
- ❌ **Don't** reformat the review count. It is drawn exactly as supplied, in parentheses,
  \`(1461)\`, on every surface, and the accessible name carries the same digits so the screen and
  the ear cannot disagree. A thousands separator on one of them is the two falling out of step.
- ✅ **Do** leave the rounding to the component. The score is rounded to **one decimal**, the way
  the live product page draws it, and the same rounded number is what the stars are cut at and
  what a screen reader is told. A host that pre-rounds its own figure is rounding twice.
- ❌ **Don't** round to halves. It looks right on a 4.48 and it cannot draw the live page's own
  4.2, which would have to become 4.0 or 4.5.

## Open items

| Question | Owner |
|---|---|
| Is suppressing every rating on the professional channel an agreed system-wide rule, or a decision this primitive is quietly making on its own? | Design |
| What verb should the reviews control be announced with? The count and the destination are settled and now live in the link's accessible name; the word "Read" is not ratified anywhere. It no longer appears on the screen, so this is a question about what a screen reader hears rather than about drawn copy | Design |
| Should a product with no reviews yet still offer the jump? It currently draws \`(0)\` and is announced as *Read 0 reviews*, which is honest and reads oddly. The alternative is for the page to withhold the destination, which is a host decision rather than this component's | Design |
| The control's spoken sentence is written inside the component, so it is English wherever it renders. Should it be authorable? | Design / DS team |
| Does the star belong in the **Icon** set? It is the only hand-drawn glyph in the library living outside it, the only one inked by tokens rather than \`currentColor\`, it ships as a locked filled and outlined pair, and it sits off the icon size scale | Design / DS team |
| Decide what very large review counts should read like. The figure is drawn exactly as supplied everywhere on this component; the reviews section writes its own aggregate a different way | Design |
`,spec:{elements:[{name:"Root",requirement:"conditional",condition:"Only with a score"},{name:"Track",requirement:"required"},{name:"Base run",requirement:"required"},{name:"Fill run",requirement:"required"},{name:"Star",requirement:"required"},{name:"Average score",requirement:"optional",condition:"Only when a page asks"},{name:"Review count",requirement:"optional"},{name:"Reviews control",requirement:"optional",condition:"Only on a detail page"}],authorability:[{name:"Score",rule:"The parent passes it. Without one nothing renders: no empty track and no spoken zero."},{name:"Average score",rule:"Optional, and off by default. A detail page asks for it; a card never does."},{name:"Score format",rule:"Rounded to one decimal, like the live product page. 4.48 draws 4.5, and 4 stays 4."},{name:"Review count",rule:"Optional. It prints in parentheses beside the stars and joins the spoken phrase."},{name:"Count of none",rule:"A count of zero is a count: it draws (0) and it is spoken, not left out."},{name:"Count format",rule:"A bare number in parentheses, no separator, no character limit. The noun agrees."},{name:"Reviews control",rule:"Name a destination and the count becomes the jump. A card names none."},{name:"Control label",rule:"The component writes it and the count rides inside it. The wording is open."},{name:"Write a review",rule:"Hand over an opener and the row draws it. No opener, no control: it opens the reviews form."},{name:"Write label",rule:'Authorable. It reads "Write a review", the words the live product page draws.'},{name:"Scale",rule:"Five stars, from one constant. The scale is never restated anywhere else."},{name:"Star shape",rule:"The library geometry, never a font character, and it never shrinks to fit."},{name:"Unearned star",rule:"Hollow with a one-pixel edge at any size. It is never a dimmed or pale solid."},{name:"Look",rule:"The two star inks come from tokens. The ground comes from the surface it lands on."}],variants:[{label:"0.5 of 5",props:{rating:.5}},{label:"2.5 of 5",props:{rating:2.5}},{label:"4.2 of 5",props:{rating:4.2}},{label:"5 of 5",props:{rating:5}}],states:[{key:"rated",name:"Rated"},{key:"counted",name:"With a review count",props:{count:1460}},{key:"scored",name:"With the average score",props:{count:1460,showScore:!0}},{key:"action",name:"The detail-page row",props:{count:6098,showScore:!0,reviewsHref:"#reviews",onWriteReview:()=>{}}},{key:"absent",name:"No score",props:{rating:void 0}}],render:z,interactions:["Without a destination it answers nothing: no click, no tap, no keyboard, no hover and no focus.","Given a destination, the count becomes a link to the reviews that says how many there are, and the stars stay inert.","The control underlines at rest and thickens that underline on hover, on pointer devices only, and only under the words.","Never give a destination inside something that is already a link. The browser closes the outer one and the card breaks.","The score and the count are one phrase without a destination and two with one. The artwork is hidden either way.","The printed score is the same number as the spoken one, because neither is rounded.","Nothing renders when the score is missing, and nothing renders on the professional channel.","A fraction is drawn by clipping the solid run over the outlined one, never by fading it.","It is never made interactive inside something that is already a whole-card link."],accessibility:[{label:"Accessible name",text:"Without a destination one node carries the score and the count in one phrase. With one, the stars announce the score and the link announces the count."},{label:"Each fact announced once",text:"The rating and the review count are two separate announcements, and neither repeats the other. Nothing on the row is met twice."},{label:"Label in name",text:"The control draws the count and is announced as a sentence carrying the same digits, so a voice user says what they read and reaches the link."},{label:"Artwork hidden",text:"Both star runs are hidden from screen readers, so the picture is never read out star by star."},{label:"Absent rating",text:"A score that is not a finite number draws nothing and announces nothing: no empty track, no spoken zero."},{label:"Every drawn number is spoken",text:"Whatever count is painted is announced, zero included, and the noun agrees: 0 reviews, 1 review, 1460 reviews. On a link both are one string."},{label:"Duplicate announcement",text:"The printed score sits inside the one image role, so it is heard once. A surface that prints the score again hides its own copy."},{label:"Contrast",text:"The component supplies the two star inks and no ground, so both ratios are re-checked on every new surface."},{label:"Unearned star",text:"The outlined star stays visible on the ground it lands on. Hollow, not a pale solid, is what tells it from an earned one."}],openItems:[{question:"Is suppressing every rating on the professional channel a system rule, or this primitive deciding alone?",owner:"Design"},{question:"What verb should the reviews control be announced with? It is now heard rather than drawn.",owner:"Design"},{question:'Should a product with no reviews yet still offer the jump? The control draws "(0)" and is announced as "Read 0 reviews" today, which is honest and reads oddly.',owner:"Design"},{question:"The control's spoken sentence is written inside the component, so it is English everywhere. Should it be authorable?",owner:"Design / DS team"},{question:"Is the border-toned ink right for an outlined star? On paper a hairline at that value is close to invisible.",owner:"DS team"},{question:"Does the star belong in the Icon set? It is the only hand-drawn glyph in the library living outside it.",owner:"Design / DS team"},{question:"What is the count format across the library? A control groups it, an inert badge draws the bare figure, and the reviews section writes it out a third way.",owner:"Design"},{question:"The drawings measure the score larger and in the bright accent; it draws at the count's size and ink. Adopt either, and does contrast hold?",owner:"Design / DS team"}]}}}};function z({rating:a,count:d,showScore:c,reviewsHref:l,onWriteReview:u}){return e.jsx(t,{rating:a,count:d,showScore:c,reviewsHref:l,onWriteReview:u})}const r={name:"Default",args:O,argTypes:W,render:a=>e.jsx(N,{...a}),parameters:{docs:{description:{story:"The aggregate shape: a score and a review count together. Move **Score** to see a partial star land anywhere on the scale, and turn **Rating** off to see the absent state, where nothing renders at all, not even an empty track. Switch the **Brand** toolbar and only the earned ink moves."}}}},s={name:"Single review",args:{rating:5},parameters:{docs:{description:{story:"The per-review shape: a score with no review count. It proves the count is genuinely omittable, because a single review has no aggregate to report, so no parentheses render at all."}}}},o={name:"Scale",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--size-100)"},children:[e.jsx(t,{rating:.5,count:3}),e.jsx(t,{rating:2.5,count:128}),e.jsx(t,{rating:4.9,count:942}),e.jsx(t,{rating:5,count:12480})]}),parameters:{docs:{description:{story:'Four points on the scale, from a near-empty score to a full one. Every one announces "out of 5 stars", because every one draws five stars in both runs from the same constant. The spoken scale cannot disagree with the drawn one.'}}}},i={name:"Jumping to the reviews",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--size-200)"},children:[e.jsx(t,{rating:4.48,count:6098,showScore:!0}),e.jsx(t,{rating:4.48,count:6098,showScore:!0,reviewsHref:"#reviews",onWriteReview:()=>{}})]}),parameters:{docs:{description:{story:`The same score and the same count, drawn both ways. **Above**, the inert badge a card gets by passing nothing: the count sits in parentheses and nothing on the row answers a tap. **Below**, the detail-page shape: naming a destination turns that same parenthesised figure into a link to the reviews, announced as *Read 6098 reviews* so it says what it goes to, and the row gains the vertical rule and the **Write a review** button the live product page draws beside it. The two rows draw the count identically, which is the point. The stars stay inert. Tab to the second row to see the focus ring around the figure, and hover it to see the underline thicken.

Note the **grouping**. The stars and the score keep their tight pitch because they are one fact; the control stands twice as far off because it is a different kind of thing. A screen reader hears one phrase on the first row, and on the second it hears the rating and then a link that names how many reviews it goes to.

**This shape must never be placed inside another link.** A product card is already one whole link, and the browser closes the outer link early when it meets a nested one: measured, the rating, the price and the call to action all fall out of the card. The build fails if a card asks for it.`}}}},h={name:"Earned and unearned",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--size-100)"},children:[e.jsx(t,{rating:0}),e.jsx(t,{rating:3.2}),e.jsx(t,{rating:4.5}),e.jsx(t,{rating:5})]}),parameters:{docs:{description:{story:"The two treatments, and the fraction mechanic that has to survive them. **Unearned is hollow**, an outline rather than a pale solid, so it cannot be mistaken for an earned star in a brand whose accent is light. **Earned is filled**, in that brand's rating red. The two middle rows prove the partial fill still works on drawn stars: 3.2 leaves a fifth of the fourth star red, 4.5 cuts the fifth one down the middle."}}}};var w,g,m;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Default',
  args: STAR_RATING_DEFAULT_ARGS,
  argTypes: STAR_RATING_ARG_TYPES,
  render: args => <ConfigurableStarRating {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'The aggregate shape: a score and a review count together. Move **Score** to see a ' + 'partial star land anywhere on the scale, and turn **Rating** off to see the absent ' + 'state, where nothing renders at all, not even an empty track. Switch the **Brand** ' + 'toolbar and only the earned ink moves.'
      }
    }
  }
}`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var v,f,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Single review',
  args: {
    rating: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'The per-review shape: a score with no review count. It proves the count is genuinely ' + 'omittable, because a single review has no aggregate to report, so no parentheses ' + 'render at all.'
      }
    }
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,k,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Scale',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-100)'
  }}>
      <StarRating rating={0.5} count={3} />
      <StarRating rating={2.5} count={128} />
      <StarRating rating={4.9} count={942} />
      <StarRating rating={5} count={12480} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Four points on the scale, from a near-empty score to a full one. Every one announces ' + '"out of 5 stars", because every one draws five stars in both runs from the same ' + 'constant. The spoken scale cannot disagree with the drawn one.'
      }
    }
  }
}`,...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var S,R,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Jumping to the reviews',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-200)'
  }}>
      <StarRating rating={4.48} count={6098} showScore />
      <StarRating rating={4.48} count={6098} showScore reviewsHref="#reviews" onWriteReview={() => {}} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The same score and the same count, drawn both ways. **Above**, the inert badge a card ' + 'gets by passing nothing: the count sits in parentheses and nothing on the row answers ' + 'a tap. **Below**, the detail-page shape: naming a destination turns that same ' + 'parenthesised figure into a link to the reviews, announced as *Read 6098 reviews* so ' + 'it says what it goes to, and the row gains the vertical rule and the **Write a review** ' + 'button the live product page draws beside it. The two rows draw the count identically, ' + 'which is the point. ' + 'The stars stay inert. Tab to the second row to see the focus ring around the figure, ' + 'and hover it to see the underline thicken.\\n\\n' + 'Note the **grouping**. The stars and the score keep their tight pitch because they are ' + 'one fact; the control stands twice as far off because it is a different kind of thing. ' + 'A screen reader hears one phrase on the first row, and on the second it hears the ' + 'rating and then a link that names how many reviews it goes to.\\n\\n' + '**This shape must never be placed inside another link.** A product card is already one ' + 'whole link, and the browser closes the outer link early when it meets a nested one: ' + 'measured, the rating, the price and the call to action all fall out ' + 'of the card. The build fails if a card asks for it.'
      }
    }
  }
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var x,D,I;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Earned and unearned',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--size-100)'
  }}>
      <StarRating rating={0} />
      <StarRating rating={3.2} />
      <StarRating rating={4.5} />
      <StarRating rating={5} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'The two treatments, and the fraction mechanic that has ' + 'to survive them. **Unearned is hollow**, an outline rather than a pale solid, so it ' + 'cannot be mistaken for an earned star in a brand whose accent is light. **Earned is ' + 'filled**, in that brand\\'s rating red. The two middle rows prove the partial fill ' + 'still works on drawn stars: 3.2 leaves a fifth of the fourth star red, 4.5 cuts the ' + 'fifth one down the middle.'
      }
    }
  }
}`,...(I=(D=h.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const P=["Playground","SingleReview","RatingScale","JumpingToTheReviews","EarnedAndUnearned"];export{h as EarnedAndUnearned,i as JumpingToTheReviews,r as Playground,o as RatingScale,s as SingleReview,P as __namedExportsOrder,B as default};
