import{j as e}from"./iframe-6dx3hp_4.js";import{T as D}from"./TableScroll-CfRxUVuq.js";import{a as R}from"./annotationPage-eYx--AWZ.js";import{L as g}from"./Link-yk_PIpvX.js";import{D as q}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";const E=""+new URL("product-square-BE-98aQ7.jpg",import.meta.url).href,W=""+new URL("product-landscape-BXgSBCCT.png",import.meta.url).href,P=""+new URL("banner-wide-23k73muI.jpg",import.meta.url).href,h=["Ingredient","Purpose","Concentration","Family","Origin","pH","Solubility","Format"],s=[["Glycerin","Humectant, draws moisture into skin","10%","Polyol","Plant or synthetic","5.5","Water","Liquid"],["Salicylic Acid","Exfoliates and unclogs pores","2%","Beta hydroxy acid","Willow bark or synthetic","3.5","Alcohol","Powder"],["Titanium Dioxide","Mineral pigment and SPF active","25%","Mineral filter","Mined and purified","7.0","Dispersion","Powder"],["Dimethicone","Silicone emollient, smooths texture","15%","Silicone","Synthetic","6.5","Oil","Fluid"],["Niacinamide","Vitamin B3, evens the look of tone","5%","Vitamin","Synthetic","6.0","Water","Powder"],["Hyaluronic Acid","Binds water at the surface","2%","Polysaccharide","Fermented","6.5","Water","Powder"],["Shea Butter","Occlusive, seals moisture in","12%","Plant butter","Shea nut","6.0","Oil","Solid"]],b=1,y=60;function F(t){return Array.from({length:t},(o,a)=>{const n=s[a%s.length];if(a<s.length)return n;const r=Math.floor(a/s.length)+1;return[`${n[0]} ${r}`,...n.slice(1)]})}const k=2,v=24;function B(t){return Array.from({length:t},(o,a)=>{const n=h[a%h.length];return a<h.length?n:`${n} ${Math.floor(a/h.length)+1}`})}function L(t,o){return Array.from({length:o},(a,n)=>t[n%t.length])}const _=/^[+-]?[$€£]?\s?\d{1,3}(?:[,.]\d{3})*(?:[,.]\d+)?\s?%?$/;function M(t,o){const a=F(o).map(r=>L(r,t));if(a.length===0)return new Set;const n=new Set;for(let r=0;r<t;r+=1)a.every(l=>_.test(String(l[r]??"").trim()))&&n.add(r);return n}const ae={title:"Molecules/Table",tags:["autodocs"],parameters:{docs:{page:R("Table"),toc:{headingSelector:"h2"},description:{component:"A grid-based layout that organizes data into rows and columns, making it easy to compare information, view structured metrics, or scan complex details at a glance."}},componentDoc:{usage:`
## When to use

- ✅ **Rows and columns of the same kind of information**, like an ingredient list or a delivery
  matrix.
- ✅ **When someone reads across a row or scans down a column** to compare.
- ✅ **Text, links or images in the cells.** All three are ratified.

- ❌ **Comparing two or three products.** Do not build a product comparison as a Table variant.
- ❌ **Sorting, selecting, paging or expanding rows.** None of it exists here. If you have read
  another design system's table, this is not a data grid.
- ❌ **Laying two things out side by side.** A table is for tabular data, and a layout built from
  one reads as a table to a screen reader.
- ❌ **A card list on small screens.** Nothing collapses, hides or stacks at any width. It scrolls
  sideways instead.
`,anatomy:`
## Anatomy

**There is no \`<Table>\` component to import.** Write a native \`<table className="tpl-table">\`,
always inside the shared scroll apparatus: \`<TableScroll labelledBy="{the caption's id}">\`. It is
part of the pattern, not an optional nicety, and it is one mount rather than four decisions to
repeat. It writes the frame, the region, the tab stop, the region role, the name, the measurement
that turns the fades on, the drag and the two arrows. Pass \`label\` instead of \`labelledBy\` when the
table has no caption to be named by, and \`style\` or \`className\` only to SEAT it in its column.

| Part | Required? | Note |
|---|---|---|
| **Table frame**, \`<table className="tpl-table">\` | always | The whole styling layer |
| **Scroll region**, \`.tpl-table-scroll\` | always | Written by \`TableScroll\` with a tab stop, a region role and a name. It is what a too-wide table does instead of restructuring. It is also the scrollport the header row holds against, so it is capped at the height of the screen |
| **Scroll frame**, \`.tpl-table-scroll-frame\` | always | The box the arrows are pinned to, and \`TableScroll\`'s outer element. An absolutely positioned child of the region itself would travel with the content instead of staying at the edge |
| **Scroll arrow** | at a cut edge | A small \`IconButton\` at a cut edge, vertically centred on the table. One per cut edge, and each one exists only while that edge is fading |
| **Header row**, \`<thead>\` with \`<th>\` cells | always | Real header cells, never data cells wearing a colour |
| **Data cell**, \`<td>\` | always | Text, a link or an image |
| **Grid lines** | always | Every cell boxed, plus a frame, at 1px. On \`--open\`, the row lines only, same weight. Every line is drawn by the cell that closes it, and the header row draws all four of its own, which is what lets them hold with it |
| **Row stripe** | optional | \`--striped\`. Alternate rows take the alt surface ground |
| **Header highlight** | optional | \`--header-highlight\`. The header row takes the alt surface ground and the full page ink. It is what marks a header as emphasised. The weight is the same either way: a header is strong in both states |
| **First column highlight** | optional | \`--first-column-highlight\`. The whole first column, the cell that names it included, takes the alt surface ground, the full page ink and the strong pole of its own recipe |
| **Numeric column** | optional | \`.tpl-table-numeric\` on every one of that column's cells, the header cell included. It takes the lower of the two column floors. One unmarked cell keeps the whole column at the higher one |
| **Caption** | optional | An on/off control. When on, a real \`<caption>\`, painted below the grid like an image caption |
| **Link in a cell** | optional | Content decides |
| **Image in a cell** | optional | Content decides. Respects its own aspect ratio, never cropped or stretched, bounded by the fixed column width and a 160px height cap, 8px corner. An optional caption sits under it in a figure |

- **The header row holds while the rows scroll under it.** On a table taller than the screen, the
  region scrolls inside itself and the header stays at the top of it. It carries the page's own
  ground so the rows cannot show through it, which is the same paper it was already sitting on, and
  it carries its own four grid lines, so a header that is holding is still a closed box rather than
  a band of words.
- **The header row takes a little less height than a data row.** Its block inset is one step down
  the ruler, 16px against the cells' 20px, so a header that is holding takes less of the view. The
  left and right insets do not move: a header word and the cell text under it share a left edge.
- **Tokens own the look.** The header, the rules, the type, the spacing, and the one ground the
  stripe and the two highlights share. The same table re-themes across every brand without a value
  being restated.
- **The content owns the rest.** How many rows, how many columns, and what is in each cell.
- **Nothing is capped.** Rows and columns are both content's call. There is no ceiling on either.
- **A word is never broken.** No word is ever cut mid-word to make it fit. A column grows until its
  longest word fits whole, and the sideways scroll takes the growth. A hyphenated compound still
  wraps at its hyphen, which is ordinary typography rather than a cut.
- **Columns split evenly among columns of the same kind**, unless a design says otherwise. That is
  the binding designer note, scoped: a table whose columns are all text, or all numbers, splits
  evenly at any row count and any column count. A mixed table splits by kind, so a number column
  sits at half the width of the text columns beside it, unless its own content needs more, in which
  case the content wins and it settles between the two floors.
- **There are two minimum column widths, and what the column holds decides which one it gets.**
  **160px** is the floor for a column of words, from \`--tpl-table-min-column\`, and it is what a
  column gets when nothing says otherwise. **80px** is the floor for a column of numbers, from
  \`--tpl-table-min-column-numeric\`, opted into with \`.tpl-table-numeric\` on **every cell** of that
  column, the header cell included. Columns grow above their floor to fill the container, and above
  it again for a word that does not fit; when they cannot all sit at their floor, the table scrolls
  sideways inside its region.

### Variants

**Two grids, and the stripe is a separate switch that rides on either.**

| Axis | Options | Class |
|---|---|---|
| **Grid** | Full (default) / Open | \`.tpl-table\` / \`.tpl-table--open\` |
| **Stripe** | off (default) / on | \`.tpl-table--striped\` |
| **Header highlight** | off (default) / on | \`.tpl-table--header-highlight\` |
| **First column highlight** | off (default) / on | \`.tpl-table--first-column-highlight\` |

**Full** boxes every cell and frames the whole grid. **Open** keeps the row lines and nothing
else: no verticals, no frame. They are two drawings of the same table, not a strong one and a weak
one, and the choice is the density the page around the table can carry.

**Every line is the same 1px**, from the shared border role, in both grids, so they re-theme across
every brand at one weight. Nothing is heavier than anything else: not the frame, not the rules
between cells, and not the line under the header.

**One ground, three users.** The stripe and both highlights paint the same alt surface role. The
stripe changes the paper and nothing else. The two highlights change the paper and the ink together:
an emphasised cell takes the full page ink with its ground, so it reads as a stronger surface rather
than as a louder version of a quieter one. In the first column that also means a weight, because the
data cells under it are regular; in the header row it does not, because a header is already strong.

**The header is strong at every width, and it is told apart from its rows by weight and ink.** It
carries no background and no heavier rule unless the header highlight is switched on. A plain header
reads the strong body recipe in the muted text colour, the same size as the rows under it and a
heavier weight. A highlighted header reads that same strong recipe in the full page ink on the alt
ground, so what the switch changes is darker and a different paper. Sentence case either way: the
header is not a caps treatment.

**On mobile both header states step down one rung**, to the caption size, keeping the strong reading
and the same ink they have above the breakpoint. The band steps the size and nothing else.

**A highlighted first column takes the ink and the weight too**, over its whole column including the
cell that names it, because a column includes its own heading. The weight is the strong pole of the
recipe those cells already read. If that column is a real row header, write it as
\`<th scope="row">\` and it draws exactly as it would as data cells: the highlight sets the ink
itself rather than letting each cell type inherit its own.
`,guidance:`
## Behaviors

### States

- **There are none, beyond a link.** No sorting, no selection, no pagination, no expanding.
- **A link inside a cell has no agreed states.** Default, hover, focus and visited are all
  undefined, and the colour it uses today was proposed with no drawing behind it.
- **Nothing restructures on a small screen.** No breakpoint collapses the table to cards, hides a
  column or stacks it. The identical grid persists at every width.
- **Every table drops its body type one rung on mobile.** The rung is scoped in the layer to three
  columns or fewer. Four columns and up keep the desktop body size at every width and rely on the
  sideways scroll instead.
- **The header drops to the caption rung on mobile**, reading a whole recipe there rather than a
  size override. Both header states take the strong caption recipe, so whichever of the two states a
  header is in above the breakpoint, it is still in below it. Neither the ink nor the weight changes
  at the step: a plain header stays muted and strong, an emphasised one stays at full strength, at
  every width.
- **The head cell of a highlighted first column steps with the header row, not with its own column.**
  It is a heading, so on a phone it takes the header's caption rung rather than the rung the data
  cells under it take. A cell that followed its column would draw a size larger than the header row
  it sits in.
- **A word is never broken to make it fit.** A column can never be narrower than its own longest
  word: it grows until the word fits whole, and the table grows with it. A hyphenated compound still
  wraps at the hyphen, which is a break the text itself offers rather than a cut through a word.
- **A table too wide for its container scrolls sideways**, inside its own region, with its columns
  intact. The page itself never scrolls sideways.
- **Width decides the scroll, not the device.** Every column has a floor, 160px for words and 80px
  for numbers. When the columns cannot all sit at their floor inside the container, the table grows
  past it and the region scrolls. A wide table in a narrow slot scrolls on a desktop for the same
  reason it scrolls on a phone.
- **On a phone, a text table shows two whole columns and a sliver of the third.** That is what the
  160px floor was set to produce: at a 390px phone the space a page gives a table is 342px, so two
  whole columns and a 22px sliver of the next one are in view and the rest is behind the scroll. The
  sliver is the affordance, it is what says there is more sideways.
- **The cut edge fades.** When there is content past either end, that end of the region dissolves.
  It is a mask on the region's own paint, not a rectangle laid over the table, so it is correct on
  every brand ground. The fade lifts while anything inside the region has a focus ring, so the ring
  is never the thing that gets faded.
- **A cut edge also carries an arrow, and only a cut edge does.** No fade, no arrow, in both
  directions: the same two facts decide each. A table that fits shows neither, a table scrolled to
  its start shows one at the end, a table scrolled to its end shows one at the start, and a table in
  the middle shows both.
- **A table taller than the screen scrolls inside its own region.** The region is capped at the
  height of the screen, the same cap a modal panel takes, and the header row holds at the top of it
  while the rows travel underneath, keeping its own ground and its own four lines the whole way.
  Below that height nothing scrolls vertically and nothing holds, so a short table is exactly the
  table it was.

### Interactions

- **A cell can link out**, to an internal or an external destination, depending on what the
  content holds. No distinction is drawn between the two.
- **The scroll region takes focus and answers the arrow keys.** Tab moves to the region, then Left
  and Right scroll it. That is the browser's own behaviour for a focused scroll box, so there is
  nothing to press and nothing to learn.
- **Press a scroll arrow to move a viewful of columns, less one.** The column that is last in view
  becomes the first one after the press, so exactly one column carries over and you can see where
  you were. Backwards it is the mirror: the column that is first in view becomes the last. The
  region always lands on a column boundary, never mid-column, and a press that would run past the
  end lands exactly on the end so the final column is revealed whole. When only one column fits the
  view there is no column to carry, so the press moves one column instead. The move is animated
  unless the reader has asked for reduced motion, in which case it jumps. The arrows are ordinary
  buttons: they take Tab, they announce their direction, and they are an addition to the keyboard
  rather than a replacement for it.
- **Press, hold and drag a scrolling table to scroll it.** The cursor turns to a grab hand over a
  region that has more to show, and to a closed hand while you are pulling it. Nothing arms until the
  pointer has travelled about 5px, so a plain click on a link inside a cell is still a click, and a
  table that already fits offers no gesture at all.
- **Selection is suspended while a drag is running, and only then.** On a mouse, pulling sideways to
  scroll and pulling sideways to select are the same gesture, so past the threshold the scroll wins.
  Double click still selects a word and triple click still selects a line.
- **A finger keeps the platform's own scrolling**, with its momentum and its rubber band. Nothing
  about touch changes.
- **The scrollbar is the same one a Popover draws**: the thin bar with the neutral control-border
  thumb over a transparent track, so a scrolling table and a scrolling menu finish alike.

## Rules

- ✅ **Do** write a native \`<table className="tpl-table">\` inside a \`<TableScroll>\`.
- ❌ **Don't** hand-write the region, the frame, the fade classes or the arrows at a call site. That
  is one decision spelled twice, and the half a page forgets is the half a reader loses: a region
  written by hand scrolls with no dissolve at the cut edge and, by the coupling, no arrow either.
- ❌ **Don't** hand-roll inline table styles. That is exactly what this layer replaced.
- ✅ **Do** let the columns split evenly unless the design says otherwise. Marking a column numeric
  is one of the things a design says: it gives that column the lower floor and the others keep the
  room.
- ✅ **Do** mark a column of numbers with \`.tpl-table-numeric\` on **every** cell of it, its header
  cell included. One unmarked cell keeps the whole column at the 160px word floor, so a partial
  marking reads correct and draws nothing.
- ❌ **Don't** mark a column numeric because the numbers look tidy narrower. It is for columns whose
  cells are numbers. A long word in one of them will not be squeezed: the column grows to fit it,
  and the numeric floor stops being the width you were expecting.
- ❌ **Don't** reach for a wrap or a hyphenation keyword to make something fit. Nothing in a table
  breaks a word; if it does not fit, the column grows and the table scrolls.
- ✅ **Do** author as many rows and columns as the content needs. Nothing caps either.
- ❌ **Don't** restructure the table on mobile. No collapse to cards, no column hiding.
- ❌ **Don't** use this for product comparison. That is Comparison table.

- ✅ **Do** write real \`<th>\` cells inside \`<thead>\`. A plain header reads at the same size as the
  rows under it, in a heavier weight and a softer ink, and the markup is still what carries the
  structure for anyone not reading the drawing. Switch the header highlight on when a table needs its
  header to announce itself louder: it goes darker and onto a band.
- ❌ **Don't** reach for a highlight to make one word stand out. The two highlights emphasise a whole
  header row or a whole first column, ground and ink together. Emphasis inside a run of text is still
  weight, never a second colour.
- ❌ **Don't** use the first column highlight to mean "these are row headers". If they are, write
  \`<th scope="row">\` and let the highlight be the look, not the semantics.
- ✅ **Do** keep the scroll region reachable by keyboard, with a name. \`TableScroll\` writes
  \`tabIndex={0}\`, \`role="region"\` and \`aria-labelledby\`; all you pass is the caption's id.
  Without them the content past the cut edge is unreachable for anyone not using a mouse.
- ✅ **Do** let \`TableScroll\` attach the drag. It is what makes the table draggable and gives it
  its grab cursor, and it comes with the mount rather than being a second line to remember.
- ✅ **Do** let the arrows hang off the same two facts the fades hang off. One measurement, two
  consumers, one owner. A fade with no arrow, or an arrow with no fade, is the one thing this
  pattern forbids.
- ❌ **Don't** style the arrow. It is the shared icon button at its small rung, on the inverted
  primary plane, the same control the product page carousel floats over its thumbnails; the only
  thing the table decides is where it sits.
- ❌ **Don't** keep an arrow on screen and disable it at the end of the range. An arrow that cannot
  go anywhere is not an affordance; it leaves with its fade.
- ✅ **Do** give a table an accessible name when a page carries more than one, through a caption or
  an \`aria-label\`. Turning the caption off with no other name on that table breaks this rule, and
  it also leaves the scroll region with nothing to be named by.

### Content rules

- ✅ **Do** write link text that says where it goes. "Click here" in a cell fails at scale.
- ✅ **Do** let the content decide the number of rows and columns. Both vary by brand and by region.
- ✅ **Do** let an image keep its own aspect ratio. It is never cropped or stretched, bounded by the
  fixed column width and a 160px height cap and given an 8px corner. Wrap it in a figure to add a caption.
- ❌ **Don't** invent a character limit. None is defined.

## Open items

| Question | Owner |
|---|---|
| The link treatment in a cell: colour, underline, hover, focus, and whether an external link looks different | Design |
| Whether a row header inside a striped row, and a caption under a cell image inside one, should follow the emphasis to the full page ink. They are the last two places this layer sets the softer ink on the alt ground, and neither is an emphasis state | Design |
| Whether a trackpad flick that runs off the end of a scrolling table should be allowed to become a browser back-navigation. The Popover ships no answer to copy, and the product page carousel contains it | Design |
| Whether losing a mouse selection sweep across a wide table is the right price for the drag. Every other way of selecting survives, and a table that fits is untouched | Design |
`,spec:{elements:[{name:"Table frame",requirement:"required",condition:"A native table carrying the tpl-table class. There is no component to import."},{name:"Scroll region",requirement:"required",condition:"A tpl-table-scroll box around the table, written by the shared TableScroll, carrying a tab stop, a region role, a name tied to the caption, and the shared drag. Capped at the height of the screen, which is what the header row holds against."},{name:"Scroll frame",requirement:"optional",condition:"A tpl-table-scroll-frame box around the region, and the outer element of the shared TableScroll. It is what the arrows are pinned to: a child of the region itself would travel with the content."},{name:"Scroll arrow",requirement:"optional",condition:"The shared icon button, small rung, inverted primary plane, vertically centred at a cut edge. One per cut edge, present exactly while that edge fades, absent rather than disabled at the ends."},{name:"Header row",requirement:"required",condition:"A thead of real th cells."},{name:"Data cell",requirement:"required",condition:"A td holding text, a link or an image."},{name:"Grid lines",requirement:"required",condition:"Full: every cell boxed and a frame around them. Open: the row lines only. One 1px weight from the border role either way. Each line belongs to the cell that closes it, so a held header keeps its own box."},{name:"Row stripe",requirement:"optional",condition:"Alternate rows on the alt surface ground. Composes with either grid."},{name:"Header highlight",requirement:"optional",condition:"The header row emphasised: the alt surface ground and the full page ink. Off by default, where the header reads strong in the muted ink on the page ground. The strong pole is the same in both states."},{name:"First column highlight",requirement:"optional",condition:"The whole first column, the cell that names it included, on the alt surface ground, in the full page ink, on the strong pole of the recipe those cells already read."},{name:"Numeric column",requirement:"optional",condition:"A column whose every cell carries tpl-table-numeric, header included. It takes the 80px floor instead of the 160px one; one unmarked cell keeps the whole column at 160."},{name:"Caption",requirement:"optional",condition:"A real caption element, on/off. Painted below the grid like an image caption (caption-side: bottom), first in markup regardless."},{name:"Link in a cell",requirement:"optional",condition:"Takes the editorial link colour and an underline."},{name:"Image in a cell",requirement:"optional",condition:"Respects its own aspect ratio, never cropped or stretched, bounded by the fixed column width and a 160px height cap, 8px corner. Optional caption in a figure."}],authorability:[{name:"Table frame",rule:"Fixed: a native table with the tpl-table class, always inside a tpl-table-scroll region."},{name:"Header labels",rule:"The author writes them. Fixed: real th cells in a thead, never coloured data cells, always strong."},{name:"Columns",rule:"The content decides how many. Nothing caps the count."},{name:"Rows",rule:"The content decides how many. Nothing caps the count."},{name:"Column widths",rule:"Fixed: same-kind columns split evenly above their floor, 160px for words, 80px for numbers."},{name:"Word breaking",rule:"Fixed: nothing breaks a word. A column grows until its longest word fits whole."},{name:"Numeric columns",rule:"The author marks EVERY cell of a number column, header included. Fixed: width only."},{name:"Cell content",rule:"Each cell holds text, a link or an image. No character limit is set."},{name:"Link text",rule:'Write text that says where it goes. "Click here" in a cell fails at scale.'},{name:"Image in a cell",rule:"Authors place one, optional caption. Fixed: it keeps its ratio, capped at 160px, never cropped."},{name:"Caption",rule:"Authors write it, on or off. On, a real caption paints below the grid; off, needs another name."},{name:"Small screens",rule:"Fixed: nothing collapses, hides or stacks. Too wide scrolls sideways inside the region."},{name:"Scroll gesture",rule:"Fixed: dragged, arrowed, swiped, and stepped a viewful of columns less one by the arrows."},{name:"Scroll arrows",rule:"Fixed, never an authoring choice: TableScroll mounts them at a cut edge and only there."},{name:"Sticky header",rule:"Fixed: the header holds at the top of the region, opaque, carrying its own four grid lines."},{name:"Mobile type",rule:"Fixed: the body drops a rung at three columns or fewer; the header drops one, staying strong."},{name:"Grid",rule:"Authors pick Full (cells boxed plus a frame) or Open (row lines only). Fixed: 1px either way."},{name:"Stripe",rule:"Authors switch it on or off. Fixed: alternate rows, the alt surface ground, no other colour."},{name:"Highlights",rule:"Authors switch header and first column on or off. Fixed: one ground, the page ink, the strong pole."}],variants:[{label:"Full grid (default)",props:{modifier:""}},{label:"Open, row lines only",props:{modifier:"tpl-table--open"}},{label:"Open with stripe",props:{modifier:"tpl-table--open tpl-table--striped"}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Link hover",pseudo:"hover"}],render:z,interactions:["A cell can link out to an internal or an external destination, with no difference drawn between them.","Nothing sorts, selects, pages or expands. This is a style layer rather than a data grid.","A table too wide for its container scrolls sideways in its own region, and the page never scrolls sideways.","A word is never broken to fit a column. The column grows until the word fits whole and the region takes the growth.","The scroll region takes keyboard focus and the arrow keys scroll it, which is the browser behaviour for a scroll box.","A scrolling region is dragged by pressing and pulling it with a mouse, past about 5px of travel.","Selection is suspended for the life of a drag and no longer. A finger keeps the platform scrolling, untouched.","The cut edge of a scrolling region fades, one end at a time, and the fade lifts while anything inside has a focus ring.","A cut edge also carries a scroll arrow, and only a cut edge does: one predicate decides the fade and the arrow together.","One press of an arrow moves a viewful of columns less one, so the column last in view becomes the first.","A table taller than the screen scrolls inside its region, and its header holds at the top with its own lines.","No breakpoint collapses, hides or stacks anything. The identical grid persists at every width.","A link in a cell takes the editorial link colour and an underline. Hover, focus and visited are undefined."],accessibility:[{label:"Header cells",text:"The header is real th cells inside a thead. A row told apart by colour alone is a header only for the people who can see the colour."},{label:"Header scope",text:"A table that carries row headers as well as column headers sets scope on every th, so a cell is announced under both of its headers."},{label:"Accessible name",text:"A page carrying more than one table gives each of them an accessible name, through a caption or an aria-label."},{label:"Keyboard scroll",text:"The scroll region carries a tab stop, a region role and a name, so the arrow keys scroll it and nothing past the cut edge is out of reach."},{label:"Drag is an addition",text:"The press-and-drag scroll is a second way in, never the only one. The keyboard, the scrollbar and a finger all still reach the same content."},{label:"Scroll arrows",text:"The arrows enhance a region that is already keyboard operable, never replace it. They take Tab, name their direction, and are never hidden from the tree."},{label:"Sticky header",text:"A header that holds while rows scroll under it stays a real th in a thead: the position is paint, and the structure a screen reader announces is unchanged."},{label:"Highlight contrast",text:"A highlight moves the ink to full strength with its ground, so emphasised text clears 4.5:1 on the alt surface in 20 of the 21 brands."},{label:"Link purpose",text:'Link text in a cell names its destination. "Click here" gives a screen reader nothing to go on when the links are read as a list.'},{label:"Link focus",text:"A link in a cell keeps a visible focus ring wherever it sits. Every cell shares one page-surface ground, with no fill to test it against."},{label:"Contrast per brand",text:"Cell text clears 4.5:1 against the page surface it sits on, in every brand theme. The grid draws rules, not a ground, so there is no second surface to test."},{label:"Image alternatives",text:"An image in a cell carries alt text, or an empty alt when the cells beside it already say what it shows."},{label:"Touch targets",text:"A link in a cell is inline text and takes the inline exception to target size, so keep the cell padding that separates it from the rows around it."}],openItems:[{question:"What is the link treatment in a cell: colour, underline, hover, focus, and does external differ?",owner:"Design"},{question:"Should the block cap that makes the header hold be the screen, as it is, or a shorter box? A capped region is a nested scroll on a long page.",owner:"Design"},{question:"Do a row header inside a striped row, and a caption under a cell image, follow the emphasis to the full page ink? Neither is an emphasis state today.",owner:"Design"},{question:"Should a flick past the end of a scrolling table be contained, or stay a browser back-navigation? The Popover ships no answer to copy.",owner:"Design"},{question:"Is losing a mouse selection sweep across a wide table the right price for the drag? Every other way of selecting survives.",owner:"Design"}]}}}};function z({modifier:t=""}={}){return e.jsx("div",{style:{width:300,overflowX:"auto",textAlign:"start"},children:e.jsxs("table",{className:t?`tpl-table ${t}`:"tpl-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Ingredient"}),e.jsx("th",{scope:"col",children:"Purpose"})]})}),e.jsxs("tbody",{children:[s.slice(0,2).map(([o,a])=>e.jsxs("tr",{children:[e.jsx("td",{children:o}),e.jsx("td",{children:a})]},o)),e.jsxs("tr",{children:[e.jsx("td",{children:"Dimethicone"}),e.jsx("td",{children:e.jsx(g,{href:"#",children:"Full breakdown"})})]})]})]})})}const G={grid:{name:"Grid",...q({options:["Full","Open"]}),table:{category:"Options",type:{summary:"Choice"},defaultValue:{summary:"Full"}},description:"**Full** boxes every cell and frames the whole grid. **Open** keeps the row lines and nothing else: no verticals, no frame. Every line is the same 1px from the shared border role in both, so the two re-theme identically across the 21 brands. Full is what `.tpl-table` draws when nothing is picked."},striped:{name:"Stripe",control:{type:"boolean"},table:{category:"Options",type:{summary:"Boolean"},defaultValue:{summary:"false"}},description:"Alternate rows take the alt surface ground. It is a **second axis**, not a third option on the Grid control: a striped table is still Full or Open. Nothing else fills, and a stripe changes the paper and nothing else: no weight and no ink. That is what tells it apart from the two highlights, which do both."},headerHighlight:{name:"Header highlight",control:{type:"boolean"},table:{category:"Options",type:{summary:"Boolean"},defaultValue:{summary:"false"}},description:"The header row takes the alt surface ground and the full page ink, so an emphasised header is darker as well as sitting on a band. The weight does not change: a header reads the strong pole in both states. **Off is the default reading**: a plain header carries no fill, reads at the same size as the rows under it in a heavier weight, and takes the softer, muted ink."},firstColumnHighlight:{name:"First column highlight",control:{type:"boolean"},table:{category:"Options",type:{summary:"Boolean"},defaultValue:{summary:"false"}},description:'The whole first column takes the same alt surface ground, the full page ink and the strong pole of the recipe those cells already read. That pole is a real change in the data rows, which are regular, and no change in the cell that names the column, which is a header and already strong. The cell that NAMES the column is part of it, so it is emphasised too, whether or not the header highlight is also on. Combines freely with that switch: they resolve the same ink and the same weight where they overlap. If that column really is a set of row headers, write `<th scope="row">` and let this be the look rather than the semantics; it draws the same either way.'},columns:{name:"Columns",control:{type:"range",min:k,max:v,step:1},table:{category:"Options",type:{summary:`A number from ${k} to ${v}`},defaultValue:{summary:"3"}},description:"**Nothing caps this.** The top of this slider is how much lookalike data this page is willing to generate, not a rule: the layer counts no columns and a template may write as many as the content needs. Columns of the same kind split evenly above their floor, 160px for a column of words and 80px for a column of numbers; past the point where they all stop fitting at their floor, the table grows and its scroll region takes over sideways. At three columns or fewer the body type also drops one rung on mobile.\n\n**Past the eighth column the headings repeat with a number.** The eight columns of the fixture come round again as `Ingredient 2`, `Purpose 2` and so on, carrying the same cells. Only the heading takes the suffix, so a repeated `Concentration` still holds single values and still takes the numeric floor.\n\n**Which columns are numeric is read off the data, not switched here.** `Concentration` and `pH` hold single numbers, so both take the 80px floor. That is content rather than a design choice, which is why it is not a control.\n\n**Push it past about eight and watch the arrows.** The table outgrows the docs canvas, both ends of the region fade once you are in the middle of it, and each arrow appears exactly while its own end is cut.\n\n**Watch `Concentration` as you widen this.** `pH` sits at exactly half the width of the text columns beside it, which is what the numeric floor is for. `Concentration` does not, because its own header word is wider than half a column and no word is ever broken. The floor is the same 80px on both; the difference is that one of them has something longer to show."},rows:{name:"Rows",control:{type:"range",min:b,max:y,step:1},table:{category:"Options",type:{summary:`A number from ${b} to ${y}`},defaultValue:{summary:"7"}},description:`How many data rows to draw, and **nothing caps this**. Nothing about the layer changes with the count: the row rule repeats and the columns keep their widths. The top of this slider is how much lookalike data this page is willing to generate, not a rule, and the layer counts no rows at all.

**Push it past about forty and watch the header.** A table taller than the screen scrolls inside its own region, and the header row holds at the top of it while the rows travel underneath. Below that height nothing scrolls and nothing sticks, which is the same table as before.`},captionOn:{name:"Caption",control:{type:"boolean"},table:{category:"Content",type:{summary:"Boolean"},defaultValue:{summary:"true"}},description:"On or off. On, the table carries a real `<caption>`, painted below the grid like an image caption (`caption-side: bottom`) while staying the table's first child in markup, which the HTML spec requires regardless of where it paints. Off, the element is not rendered at all, and a page carrying more than one table needs another accessible name instead."},caption:{name:"Caption text",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:'"Ingredient details"'}},description:"What the caption says when the switch above is on. Ignored while it is off."}},V={Full:"",Open:"tpl-table--open"};function $({grid:t,striped:o,headerHighlight:a,firstColumnHighlight:n}){return["tpl-table",V[t]||"",o?"tpl-table--striped":"",a?"tpl-table--header-highlight":"",n?"tpl-table--first-column-highlight":""].filter(Boolean).join(" ")}function H(t){const{columns:o,rows:a,captionOn:n,caption:r}=t,l="table-demo-caption",m=M(o,a),w=B(o);return e.jsx(D,{labelledBy:n?l:void 0,label:"Ingredient details",children:e.jsxs("table",{className:$(t),children:[n?e.jsx("caption",{id:l,children:r}):null,e.jsx("thead",{children:e.jsx("tr",{children:w.map((i,p)=>e.jsx("th",{scope:"col",className:m.has(p)?"tpl-table-numeric":void 0,children:i},i))})}),e.jsx("tbody",{children:F(a).map(i=>e.jsx("tr",{children:L(i,o).map((p,f)=>e.jsx("td",{className:m.has(f)?"tpl-table-numeric":void 0,children:p},w[f]))},i[0]))})]})})}const d={name:"Default",args:{grid:"Full",striped:!1,headerHighlight:!1,firstColumnHighlight:!1,columns:3,rows:7,captionOn:!0,caption:"Ingredient details"},argTypes:G,render:t=>e.jsx(H,{...t}),parameters:{controls:{sort:"alpha"},docs:{description:{story:`The plain table: seven rows and three columns, every cell boxed and a frame around the whole of it. The content is lookalike ingredient data, not real client copy.

**Two of these three columns are words and one is numbers**, which is why they are not the same width. \`Ingredient\` and \`Purpose\` take the 160px floor, \`Concentration\` holds single values and takes the 80px one, and the even split holds inside each kind rather than across the table. Push Columns to 8 and \`pH\` joins it.

**No word is ever broken.** A column grows until its longest word fits whole, which is why \`Concentration\` is wider than its 80px floor: the header word needs the room. Narrow the preview and the table keeps its columns and scrolls sideways instead of cutting anything. **Press and drag it** to scroll it, or Tab to it and use the arrow keys.

**Every line is the same 1px**, from the shared border role, so both grids re-theme across every brand at one weight. Nothing is heavier than anything else, including the line under the header.

**Two grids and three switches.** Grid picks Full (every cell boxed, plus a frame) or Open (the row lines only). Stripe, Header highlight and First column highlight are independent of it and of each other, so every combination is reachable. All three paint from one alt surface role. The stripe changes the paper and nothing else; the two highlights also take the full page ink and the heavier cut of the recipe those cells already read, so an emphasised cell is darker as well as sitting on a band. In the first column that cut is a real change, because the data rows are regular; in the header row it is not, because a header is already strong.

**Off is the default reading for all three switches.** With Header highlight off, the header reads at the same size as the rows under it, in a heavier weight and a softer, muted ink. Switch it on and the header takes a ground and the full page ink, keeping the weight it already had. Sentence case either way: the header is not a caps treatment. Switch First column highlight on and the whole first column does the same, the cell that names it included.

**Switch Columns and Rows for the shape, Caption to turn the element on or off**, and edit Caption text while it is on. The caption paints below the grid, like an image caption, while staying the table's first child in markup, which the HTML spec requires regardless of where it paints. It is also what names the scroll region, so turning it off hands the region a written label instead.

**Nothing caps the rows or the columns.** Both are sliders, and the top of each is how much lookalike data this page will generate rather than a rule. Push Columns past 8 to watch the table outgrow its container and the region take over sideways.

**The columns are wider than they were.** The floor for a column of words went from 80px to 160px, so a three-column table no longer squeezes into a phone: two whole columns and a sliver of the third are what a reader sees, and the rest is behind the sideways scroll.

**Resize the preview to 390px.** Two whole recipes swap at that band: at three columns or fewer the body type drops one rung, and at any count the header drops to the caption rung, 12px on Revlon, staying strong and keeping whichever ink it had above the breakpoint. Neither the weight nor the ink changes at the step. Both come from the layer, not from this story.`}}}},c={name:"Wide",render:()=>e.jsx("div",{style:{width:342,maxWidth:"100%"},children:e.jsx(H,{grid:"Full",striped:!0,headerHighlight:!0,firstColumnHighlight:!0,columns:8,rows:7,captionOn:!0,caption:"Formulation reference, eight columns"})}),parameters:{docs:{description:{story:`Eight columns in a 342px container, which is more table than the box can hold, so the table keeps its columns and the region scrolls sideways under it. **The page never scrolls sideways**, at any width: what moves is the region, and only the region.

**342px is what a real page gives a table on a 390px phone**, once the page keeps its own gutters. The box is pinned rather than tied to the viewport, so this reads the same on a desktop: the trigger is the width of the slot, never the size of the screen. What you should see is **two whole columns and a sliver of the third**, which is what the 160px floor was measured to produce.

**There are two floors and this table draws both.** Six of these columns hold words and sit at 160px; \`Concentration\` and \`pH\` hold single numbers and sit at 80px, half the width, which is the whole point of the second floor. Columns split evenly above their own floor and stop shrinking at it; the moment they cannot all fit the table grows past its container instead of crushing anything. Each floor is one token, \`--tpl-table-min-column\` and \`--tpl-table-min-column-numeric\`, so the whole library moves when either moves.

**A column is numeric because its content is**, not because a switch says so. It is marked with \`.tpl-table-numeric\` on the column's cells, the header cell included, and this page derives which columns those are by reading the data it draws.

**Tab into it and press the arrow keys.** The region is focusable, takes the house focus ring, and scrolls on Left and Right without a script and without buttons. That is what makes the columns past the cut edge reachable for anyone not using a mouse, and it is the whole of the accessibility requirement for a scrolling region.

**The cut edge fades**, one end at a time, and only while there is something past it. It is a mask on the region rather than a shape laid over the table, so it is correct on every brand ground, and it lifts entirely while anything inside the region is showing a focus ring.

All three optional treatments are on here, the stripe and both highlights, because a wide table is where they earn their keep: a reader scrolling sideways loses the header and the first column from view, and a ground plus a stronger ink is what makes them findable again. Watch the top-left cell, where the two highlights overlap: it reads the same as either switch would draw it on its own.`}}}},u={name:"Images and links",render:()=>e.jsx(D,{labelledBy:"images-and-links-caption",children:e.jsxs("table",{className:"tpl-table",children:[e.jsx("caption",{id:"images-and-links-caption",children:"Product imagery and references"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Ratio"}),e.jsx("th",{scope:"col",children:"Image"}),e.jsx("th",{scope:"col",children:"Learn more"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Square (1:1)"}),e.jsx("td",{children:e.jsx("img",{src:E,alt:"Revlon Super Lustrous red lipstick standing beside its black cap"})}),e.jsx("td",{children:e.jsx(g,{external:!0,href:"https://www.revlon.com/face/foundation",children:"Full ingredient breakdown"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Landscape (3:2)"}),e.jsx("td",{children:e.jsxs("figure",{children:[e.jsx("img",{src:W,alt:"Dark green Bold Ember roll-on bottle with a gold shield and an orange 72 badge"}),e.jsx("figcaption",{children:"Bold Ember, 72-hour roll-on"})]})}),e.jsx("td",{children:e.jsx(g,{href:"#",children:"SPF and mineral filters explained"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Wide (2.2:1)"}),e.jsx("td",{children:e.jsx("img",{src:P,alt:"Revlon ColorStay Full Time mascara in a red tube on a black textured background"})}),e.jsx("td",{children:e.jsx(g,{href:"#",children:"How long-wear formulas are tested"})})]})]})]})}),parameters:{docs:{description:{story:`The two cell contents beyond text, in one table, because a real page carries them in one table.

**An image in a cell respects its own aspect ratio**: never cropped, never stretched, scaling to its intrinsic proportions within the fixed column width and a 160px height cap, with an 8px corner. Three real sources prove it, a square (1:1), a landscape (3:2) and a wide banner (2.2:1), each rendering true. The landscape row wraps its image in a figure to add an optional caption; a bare image is fine without one.

**A cell may link out**, to an internal or an external destination, and the link takes the editorial link colour rather than the browser's default blue, so the treatment follows each brand. Hover, focus and visited are still undefined, below. Every link here says where it goes, which is the content rule that matters most in a cell.

**The first reference is an external link**, drawn with the Link atom rather than a bare anchor, so the new tab, the \`rel\` pair, the visible external mark and the spoken note all come from the atom. The other two are ordinary internal links. Nothing about the table changes between them: this is how a link behaves anywhere, used in a cell.`}}}};var x,T,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    grid: 'Full',
    striped: false,
    headerHighlight: false,
    firstColumnHighlight: false,
    columns: 3,
    rows: 7,
    captionOn: true,
    caption: 'Ingredient details'
  },
  argTypes: TABLE_ARG_TYPES,
  render: args => <TableDemo {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The plain table: seven rows and three columns, every cell boxed and a frame around the ' + 'whole of it. The content is lookalike ingredient data, not real client copy.\\n\\n' + '**Two of these three columns are words and one is numbers**, which is why they are not ' + 'the same width. \`Ingredient\` and \`Purpose\` take the 160px floor, \`Concentration\` holds ' + 'single values and takes the 80px one, and the even split holds inside each kind rather ' + 'than across the table. Push Columns to 8 and \`pH\` joins it.\\n\\n' + '**No word is ever broken.** A column grows until its longest word fits whole, which is ' + 'why \`Concentration\` is wider than its 80px floor: the header word needs the room. ' + 'Narrow the preview and the table keeps its columns and scrolls sideways instead of ' + 'cutting anything. **Press and drag it** to scroll it, or Tab to it and use the arrow ' + 'keys.\\n\\n' + '**Every line is the same 1px**, from the shared border role, so both grids re-theme ' + 'across every brand at one weight. Nothing is heavier than anything else, including ' + 'the line under the header.\\n\\n' + '**Two grids and three switches.** Grid picks Full (every cell boxed, plus a frame) or ' + 'Open (the row lines only). Stripe, Header highlight and First column highlight ' + 'are independent of it and of each other, so every combination is reachable. All three ' + 'paint from one alt surface role. The stripe changes the paper and nothing else; the two ' + 'highlights also take the full page ink and the heavier cut of the recipe those cells ' + 'already read, so an emphasised cell is darker as well as sitting on a band. In the first ' + 'column that cut is a real change, because the data rows are regular; in the header row ' + 'it is not, because a header is already strong.\\n\\n' + '**Off is the default reading for all three switches.** With Header highlight off, the ' + 'header reads at the same size as the rows under it, in a heavier weight and a softer, ' + 'muted ink. Switch it on and the header takes a ground and the full page ink, keeping the ' + 'weight it already had. Sentence case either way: the header is not a caps ' + 'treatment. Switch First column highlight on and the whole first column does the same, ' + 'the cell that names it included.\\n\\n' + '**Switch Columns and Rows for the shape, Caption to turn the element on or off**, and ' + 'edit Caption text while it is on. The caption paints below the grid, like an image ' + 'caption, while staying the table\\'s first child in markup, which the HTML spec ' + 'requires regardless of where it paints. It is also what names the scroll region, so ' + 'turning it off hands the region a written label instead.\\n\\n' + '**Nothing caps the rows or the columns.** Both are sliders, and the top of each is how ' + 'much lookalike data this page will generate rather than a rule. Push Columns past 8 ' + 'to watch the table outgrow its container and the region take over sideways.\\n\\n' + '**The columns are wider than they were.** The floor for a column of words went from ' + '80px to 160px, so a three-column table no longer squeezes into a phone: two whole ' + 'columns and a sliver of the third are what a reader sees, and the rest is behind the ' + 'sideways scroll.\\n\\n' + '**Resize the preview to 390px.** Two whole recipes swap at that band: at three columns ' + 'or fewer the body type drops one rung, and at any count the header drops to the caption ' + 'rung, 12px on Revlon, staying strong and keeping whichever ink it had above the ' + 'breakpoint. Neither the weight nor the ink changes at the step. Both come from the ' + 'layer, not from this story.'
      }
    }
  }
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var S,I,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Wide',
  render: () => <div style={{
    width: 342,
    maxWidth: '100%'
  }}>
      <TableDemo grid="Full" striped headerHighlight firstColumnHighlight columns={8} rows={7} captionOn caption="Formulation reference, eight columns" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Eight columns in a 342px container, which is more table than the box can hold, so the ' + 'table keeps its columns and the region scrolls sideways under it. **The page never ' + 'scrolls sideways**, at any width: what moves is the region, and only the region.\\n\\n' + '**342px is what a real page gives a table on a 390px phone**, once the page keeps its ' + 'own gutters. The box is pinned rather than tied to the viewport, so this reads the same ' + 'on a desktop: the trigger is the width of the slot, never the size of the screen. What ' + 'you should see is **two whole columns and a sliver of the third**, which is what the ' + '160px floor was measured to produce.\\n\\n' + '**There are two floors and this table draws both.** Six of these columns hold words ' + 'and sit at 160px; \`Concentration\` and \`pH\` hold single numbers and sit at 80px, half ' + 'the width, which is the whole point of the second floor. Columns split evenly above ' + 'their own floor and stop shrinking at it; the moment they cannot all fit the table ' + 'grows past its container instead of crushing anything. Each floor is one token, ' + '\`--tpl-table-min-column\` and \`--tpl-table-min-column-numeric\`, so the whole library ' + 'moves when either moves.\\n\\n' + '**A column is numeric because its content is**, not because a switch says so. It is ' + 'marked with \`.tpl-table-numeric\` on the column\\'s cells, the header cell included, and ' + 'this page derives which columns those are by reading the data it draws.\\n\\n' + '**Tab into it and press the arrow keys.** The region is focusable, takes the house ' + 'focus ring, and scrolls on Left and Right without a script and without buttons. That ' + 'is what makes the columns past the cut edge reachable for anyone not using a mouse, ' + 'and it is the whole of the accessibility requirement for a scrolling region.\\n\\n' + '**The cut edge fades**, one end at a time, and only while there is something past it. ' + 'It is a mask on the region rather than a shape laid over the table, so it is correct ' + 'on every brand ground, and it lifts entirely while anything inside the region is ' + 'showing a focus ring.\\n\\n' + 'All three optional treatments are on here, the stripe and both highlights, because a ' + 'wide table is where they earn their keep: a reader scrolling sideways loses the header ' + 'and the first column from view, and a ground plus a stronger ink is what makes them ' + 'findable again. Watch the top-left cell, where the two highlights overlap: it reads the ' + 'same as either switch would draw it on its own.'
      }
    }
  }
}`,...(C=(I=c.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var O,j,N;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Images and links',
  render: () => <TableScroll labelledBy="images-and-links-caption">
      <table className="tpl-table">
        <caption id="images-and-links-caption">Product imagery and references</caption>
        <thead>
          <tr>
            <th scope="col">Ratio</th>
            <th scope="col">Image</th>
            <th scope="col">Learn more</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Square (1:1)</td>
            <td>
              <img src={squareImage} alt="Revlon Super Lustrous red lipstick standing beside its black cap" />
            </td>
            <td>
              <Link external href="https://www.revlon.com/face/foundation">Full ingredient breakdown</Link>
            </td>
          </tr>
          <tr>
            <td>Landscape (3:2)</td>
            <td>
              <figure>
                <img src={landscapeImage} alt="Dark green Bold Ember roll-on bottle with a gold shield and an orange 72 badge" />
                <figcaption>Bold Ember, 72-hour roll-on</figcaption>
              </figure>
            </td>
            <td><Link href="#">SPF and mineral filters explained</Link></td>
          </tr>
          <tr>
            <td>Wide (2.2:1)</td>
            <td>
              <img src={wideImage} alt="Revlon ColorStay Full Time mascara in a red tube on a black textured background" />
            </td>
            <td><Link href="#">How long-wear formulas are tested</Link></td>
          </tr>
        </tbody>
      </table>
    </TableScroll>,
  parameters: {
    docs: {
      description: {
        story: 'The two cell contents beyond text, in one table, because a real page carries them in ' + 'one table.\\n\\n' + '**An image in a cell respects its own aspect ratio**: never cropped, never stretched, ' + 'scaling to its intrinsic proportions within the fixed column width and a 160px height ' + 'cap, with an 8px corner. Three real sources prove it, a square (1:1), a landscape ' + '(3:2) and a wide banner (2.2:1), each rendering true. The landscape row wraps its ' + 'image in a figure to add an optional caption; a bare image is fine without one.\\n\\n' + '**A cell may link out**, to an internal or an external destination, and the link takes ' + 'the editorial link colour rather than the browser\\'s default blue, so the treatment ' + 'follows each brand. Hover, focus and visited are still undefined, below. Every link ' + 'here says where it goes, which is the content rule that matters most in a cell.\\n\\n' + '**The first reference is an external link**, drawn with the Link atom rather than a ' + 'bare anchor, so the new tab, the \`rel\` pair, the visible external mark and the spoken ' + 'note all come from the atom. The other two are ordinary internal links. Nothing about ' + 'the table changes between them: this is how a link behaves anywhere, used in a cell.'
      }
    }
  }
}`,...(N=(j=u.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const ne=["Default","Wide","ImagesAndLinks"];export{d as Default,u as ImagesAndLinks,c as Wide,ne as __namedExportsOrder,ae as default};
