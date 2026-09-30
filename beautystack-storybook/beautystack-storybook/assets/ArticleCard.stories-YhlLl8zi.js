import{j as t,S as A,g as R}from"./iframe-6dx3hp_4.js";import{A as i}from"./ArticleCard-C8RmiUi7.js";import{a as x}from"./annotationPage-eYx--AWZ.js";import{p as w,c as S}from"./campaign-colorsilk-Dk82vMQn.js";import{b as n,c as d}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";const y="/article-card-fixtures/this-photo-was-removed.jpg",C={title:{...n("Master the No-Makeup Makeup Look in 5 Steps"),name:"Headline",control:"text",description:"The card's only always-on text, and the name the card link is announced by."},showDate:{...d("On"),table:{...d("On").table,category:"Content"},name:"Show date",description:"Whether the card draws the published date at all. Off, the card renders no date and no machine-readable value either. On, it draws the Date control below."},date:{name:"Date",control:"text",if:{arg:"showDate",truthy:!0},table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"June 2025"}},description:"The published date, written the way a reader should see it. The card formats nothing: it renders exactly what it is given. Reachable while Show date above is on."},dateTime:{control:!1,table:{disable:!0}},description:{...n("A short summary"),name:"Short description",control:"text",description:"A short summary under the headline. Optional: empty it and the card draws headline and date alone. A long one is trimmed to keep the row of cards even, so it is written to be read at a glance rather than in full."},image:{...n("A real photograph"),name:"Image URL",control:"text",description:"Swap in a real photo. Empty it to see the empty state, or type a URL that does not resolve to see what a photograph that failed to load looks like."},href:{control:!1,table:{disable:!0}}},D={title:"Master the No-Makeup Makeup Look in 5 Steps",description:"The barely-there finish everyone is asking for, built from four products and one brush. Skin first, colour second, and nothing that reads as makeup from across a room.",showDate:!0,date:"June 2025",dateTime:"2025-06",image:w,headingLevel:3};function I({title:e,description:r,showDate:s,date:b,dateTime:v,image:T,headingLevel:k}){return t.jsx(i,{href:"#",title:e,description:r||void 0,date:s&&b||void 0,dateTime:s&&v||void 0,image:T||void 0,headingLevel:k})}function f({image:e}={}){const r=e===null?void 0:e??w;return t.jsx("div",{style:{width:280},children:t.jsx(i,{href:"#",title:"Master the No-Makeup Makeup Look",description:"The barely-there finish everyone is asking for, built from four products and one brush.",date:"June 2025",dateTime:"2025-06",image:r})})}const P={title:"Molecules/Article Card",component:i,tags:["autodocs"],argTypes:{headingLevel:{control:!1,table:{disable:!0}}},parameters:{docs:{page:x("Article Card"),toc:{headingSelector:"h2"},description:{component:"The card an editorial feed draws for one article: a photograph, a headline, a short description, a Read more cue and a published date, in one clickable block. The whole card is the link to the article, always, and the cue is not a second control."}},componentDoc:{usage:`
## When to use

The library keeps two kinds of card surface apart. An **authored** surface is one somebody
composes by hand, placing each tile where they want it; a **queried** surface asks a feed for rows
and draws whatever comes back. This is the queried card, and **Content card** is the authored one.

- ✅ **A blog index or an article listing**, where the rows arrive from a feed rather than being
  placed one by one.
- ✅ **A related-articles strip** at the end of an article.
- ✅ **Any row of dated editorial links** whose destination is one article each.

- ❌ **A band of tiles somebody arranged by hand.** That is **Content card**, which carries no date
  and can carry a button.
- ❌ **A card that needs a second destination, or a button on it.** This card is one link to one
  article and nothing else, so an action that is not "open this article" has no home on it.
- ❌ **A product with a price, shades and an add to bag.** That is **Product card**.
- ❌ **Laying a row or a grid of these out.** **Card collection** owns the columns and the mobile
  stack.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **The card link**, one anchor around everything | always | Every card has a destination. There is no second link and no button anywhere inside it |
| **Media**, the photograph or its stand-in | **required** | A sixteen by nine box, always drawn, on a ground, so a card is never a collapsed hole |
| **Headline** | **required** | Also the name the card link is announced by, on its own. Wraps in full |
| **Short description** | optional | A short summary under the headline. Trimmed to three lines so a long one cannot unsettle the row |
| **Read more cue** | always | A visual label with a small decorative arrow, inside the same card link and after the date |
| **Date** | optional | Drawn only when a feed authors it. Rendered as time data, not as loose text |
| **Empty state**, the stand-in for a missing photograph | conditional | One decorative glyph, a crossed-out picture, and no words, whenever no photograph resolves. Nothing about it is authored |

- **Tokens own the look.** Shape, radius, type, the crop, the hover treatment and the media
  ground. The same card re-themes across every brand without a value being restated.
- **The feed owns the words and the photograph.** Headline, description, date and image.
- **The page owns the heading level.** The card title can be a level two through six, because only
  the page that mounts the feed knows what sits above it.
- **Every slot is one line of one record.** The Read more cue repeats the card destination visually;
  it is not a second destination or focusable control.

### Variants

**There is no variant axis.** A feed row is one shape at every width and on every page: picture,
headline, description, date. What changes is the record it was filled from.

**One shape is the point, and it is a decision rather than an omission.** A feed's job is to
repeat: one shape means a scannable list, and the rule a reader learns in the first row holds in the
last. The authored tile beside it is a stack at every width for the same reason, so the two cards
agree, and neither turns sideways in a narrow column.
`,guidance:`
## Behaviors

### States

- **With a photograph.** The picture fills the sixteen by nine box and is cropped to do it, so a
  square source loses its top and bottom rather than letterboxing.
- **With a long description.** The summary is trimmed to three lines. A record that runs long
  shortens on screen instead of pushing its card past the ones beside it.
- **With a long headline.** The headline wraps in full. The title stays readable while the Read more
  cue follows the text flow.
- **No photograph.** An empty state: one glyph, a crossed-out picture, and no words. That box is
  only ever a picture, so an empty one shows that the picture is missing.
- **A photograph that did not arrive.** The same empty state. The card promised a picture and lost
  it, which is a fault and should read as one.
- **Recovering.** The card remembers which source failed rather than a yes-or-no flag, so a
  working photograph clears the empty state on its own.
- **Read more cue.** A simple label and small right arrow follow the optional date at the start of
  the text flow. The cue sits at the base of each card, aligning across a row with the longest
  card. It is visual content inside the card link, and the arrow is decorative.
- **Hover.** The media dims slightly, the headline changes to the brand's editorial colour and the
  arrow moves gently to the right. These treatments are pointer-only because the Read more cue
  already identifies the destination at rest.
- **Hover on touch.** There isn't one. The rules sit behind a pointer check, so nothing sticks
  after a tap.
- **Focus.** The standard ring, on the card link.

### Interactions

- **Click or tap anywhere on the card and it opens the article.** The whole tile is the target,
  not just the headline. The Read more cue stays inside that same link and is not a second action.
- **The card announces itself by its headline.** The description and the date stay readable on the
  page, and neither is read out as part of the link's name.
- **Nothing inside the card takes focus.** One tab stop per card, however many rows the feed
  returns.

## Rules

- ✅ **Do** give every card its article. A card with nowhere to go is refused rather than drawn.
- ✅ **Do** give every card a headline. It is the name the card link is announced by and wraps in
  full when it runs long.
- ✅ **Do** pass the date twice, once for the reader and once machine-readable.
- ✅ **Do** set the heading level from the page, so the feed sits correctly under whatever heading
  is above it.

- ✅ **Do** place the visual Read more cue after the date, inside the card's one link. It is a
  label aligned to the card base, not a nested link or button.
- ✅ **Do** expect the card to fill the height a host gives it. In a row of cards drawn at one
  height the picture, the headline and the date stay at the top and the Read more cue drops to the
  row's base line, so the cues line up across the row. Nothing stretches a card standing alone or
  in a carousel, so nothing moves there.
- ❌ **Don't** let hover carry meaning on its own. It does not exist on touch.
- ❌ **Don't** lay a row of cards out by hand. Card collection owns the columns and the mobile
  stack.

### Content rules

- ✅ **Do** fill a card from: photograph, headline, optional short description, optional date.
- ✅ **Do** write the description so its first line carries the point. It is trimmed to three lines
  to keep a row of cards even.
- ✅ **Do** write the date the way a reader should see it. The card formats nothing.
- ❌ **Don't** invent a character limit. None is defined yet. The headline and description are
  trimmed by line to preserve the grid row while Design determines the recommended count.

## Open items

| Question | Owner |
|---|---|
| A recommended character limit is owed for the headline and for the short description. The description is trimmed by line to hold the layout, which is not the same as knowing the count | Design |
| Whether a feed row should ever carry an author name beside the date | Content |
`,spec:{elements:[{name:"Card link, one anchor",requirement:"required",condition:"Every card has an article to open"},{name:"Media box",requirement:"required",condition:"Sixteen by nine, always drawn, always on a ground"},{name:"Headline",requirement:"required",condition:"Level two to six, chosen by the host page, trimmed to three lines"},{name:"Short description",requirement:"optional",condition:"Trimmed to three lines so a long one holds the row"},{name:"Date",requirement:"optional",condition:"Rendered as time data with a machine-readable value"},{name:"Empty state",requirement:"conditional",condition:"When no photograph resolves"},{name:"Read more cue",requirement:"required",condition:"Visual label and decorative arrow after the date, held at the card base"}],authorability:[{name:"Photograph",rule:"Required and populated dynamically. An administrator can override it."},{name:"Headline",rule:"Required and populated dynamically. It names the card link. Trimmed to three lines."},{name:"Short description",rule:"Optional and populated dynamically. An administrator can override it. Trimmed to three lines."},{name:"Date",rule:"Optional. Authored twice: the string a reader reads, and the machine-readable value."},{name:"Read more cue",rule:"Visual label and decorative arrow, after the optional date, at the card base, inside the card link."},{name:"Heading level",rule:"Set by the page that mounts the feed, from level two to level six."},{name:"Empty state",rule:"Fixed by the system: one glyph and no words. Nothing about it is authored."},{name:"Destination",rule:"One per card, and required. Nothing inside the card carries a second link or a button."},{name:"Look and behaviour",rule:"Fixed by the system: colour, radius, type, the crop, the hover treatment and the empty state."}],variants:[{label:"With photograph",props:{}},{label:"No photograph",props:{image:null}},{label:"Photograph failed",props:{image:y}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"}],render:f,interactions:["Click or tap anywhere on the card and it opens the article.","The card is one tab stop: the Read more cue is visual content inside the same link, not a second control.","Hover dims the media to 88 percent, turns the headline editorial colour and shifts the arrow right.","Hover is pointer-only: all three treatments sit behind a pointer check, so nothing happens on touch.","Focus draws one ring, on the card link.","A photograph that fails to load swaps the media box for the empty state.","The failure is tracked by source, so a working photograph clears the empty state on its own."],accessibility:[{label:"Link name",text:"The headline alone is the accessible name of the card link. The description and the date must not be read as part of it."},{label:"One destination, no second control",text:"The card is the only control on the tile. The Read more cue is inside that link, and its arrow is decorative and hidden from assistive technology."},{label:"Image",text:"Give the photograph an empty alt. It repeats the headline, so a described image is read twice."},{label:"Heading level",text:"The host sets the level so the feed continues the page outline instead of skipping a step."},{label:"Date",text:"Render the date as time data carrying a machine-readable value, so it is a published date and not a string."},{label:"One control",text:"Expose one control per card. The anchor holds no second interactive child, however many rows a feed returns."},{label:"Keyboard",text:"The card is a single link: reached with Tab, activated with Enter."},{label:"Focus ring",text:"Draw the standard focus ring on the card link, and keep it visible on every brand ground."},{label:"Empty state",text:"Keep the empty-state box hidden from assistive technology, glyph and all. It carries no words, and the headline already names the card."},{label:"Hover on touch",text:"Keep the media dim behind a pointer query, so no hover treatment sticks after a tap."}],openItems:[{question:"A recommended character limit is owed for the headline and for the short description. Trimming by line holds the layout, it is not the count.",owner:"Design"}]}}}},a={args:D,argTypes:C,render:e=>t.jsx(I,{...e}),parameters:{controls:{sort:"none"},docs:{description:{story:"One feed row with every slot filled: a photograph, a headline, a short description and a published date. Empty **Short description** to see the card without one, turn **Show date** off to see the card without a date, empty **Image URL** to see the empty state, or type a URL that does not resolve to see a photograph that was promised and lost. Paste a long paragraph into **Short description** to watch it trim to three lines instead of stretching the card. **Heading level** is the page's choice, not the card's, and switching it changes the outline rather than the drawing. There is no control for the article itself: every card has one, and the whole tile is the link to it."}}}},E=[{key:"photo",label:"With photograph",props:{image:S},dimension:"media"},{key:"no-photo",label:"No photograph",props:{image:null},dimension:"media"},{key:"failed",label:"Photograph failed",props:{image:y},dimension:"media"}],h=[{key:"default",label:"Default"},{key:"hover",label:"Hover",pseudo:"hover"},{key:"focus",label:"Focus",pseudo:"focusVisible"}],o={name:"All states",parameters:{themeShellPadding:!1,pseudo:R(h,{pseudoTarget:".ds-article-card"}),docs:{description:{story:"The three ways a card's media can arrive, against the states the card link carries, in one labelled grid: **With photograph**, **No photograph** and **Photograph failed** down the side, **Default**, **Hover** and **Focus** across the top. The two empty rows draw the same thing and mean different things: one card was authored without a picture, the other lost one it promised. **Hover** and **Focus** are frozen on the card link, so both sit still for a design review or a screenshot. This is a QA surface, not themed product UI, so its own chrome stays neutral across brands."}}},render:()=>t.jsx(A,{rows:E,columns:h,render:f})};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: ARTICLE_ARGS,
  argTypes: ARTICLE_CARD_ARG_TYPES,
  render: args => <ConfigurableArticleCard {...args} />,
  parameters: {
    controls: {
      sort: 'none'
    },
    docs: {
      description: {
        story: 'One feed row with every slot filled: a photograph, a headline, a short description and ' + 'a published date. Empty **Short description** to see the card without one, turn ' + '**Show date** off to see the card without a date, empty **Image URL** to see the ' + 'empty state, or type a URL that does not resolve to see a photograph that was ' + 'promised and lost. Paste a long paragraph into **Short description** to watch it trim ' + 'to three lines instead of stretching the card. ' + "**Heading level** is the page's choice, not the card's, and switching it changes the " + 'outline rather than the drawing. There is no control for the article itself: every ' + 'card has one, and the whole tile is the link to it.'
      }
    }
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'All states',
  parameters: {
    // Flush canvas so the grid gets the full width for its columns, the same flag every other
    // matrix story sets.
    themeShellPadding: false,
    pseudo: getStateMatrixPseudoParameters(ARTICLE_CARD_MATRIX_COLUMNS, {
      pseudoTarget: '.ds-article-card'
    }),
    docs: {
      description: {
        story: "The three ways a card's media can arrive, against the states the card link carries, in " + 'one labelled grid: **With photograph**, **No photograph** and **Photograph failed** ' + 'down the side, **Default**, **Hover** and **Focus** across the top. The two empty ' + 'rows draw the same thing and mean different things: one card was authored without a ' + 'picture, the other lost one it promised. **Hover** and **Focus** are frozen on the ' + 'card link, so both sit still for a design review or a screenshot. This is a QA ' + 'surface, not themed product UI, so its own chrome stays neutral across brands.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={ARTICLE_CARD_MATRIX_ROWS} columns={ARTICLE_CARD_MATRIX_COLUMNS} render={renderArticleCardSpecCell} />
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const W=["Article","AllStates"];export{o as AllStates,a as Article,W as __namedExportsOrder,P as default};
