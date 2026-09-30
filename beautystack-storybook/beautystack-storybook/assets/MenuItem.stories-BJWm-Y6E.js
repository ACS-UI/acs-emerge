import{j as e,S as D,g as E}from"./iframe-6dx3hp_4.js";import{M as d}from"./MenuItem-bBgP9Lwo.js";import{I as M}from"./Icon-BihOhSWB.js";import"./Popover-BGxFbLtI.js";import"./Button-CiZyClsp.js";import{e as t,D as c,a as w}from"./designerArgTypes-CVo4ohMZ.js";import{a as R}from"./annotationPage-eYx--AWZ.js";import"./preload-helper-C1FmrZbK.js";import"./newTabMark-TI50-QeA.js";import"./popoverPlacement-CK5qQ-ie.js";import"./Loading-DyIAIYoE.js";/* empty css               */const q={children:{name:"Label",control:"text",table:{category:"Content",type:{summary:"Short text"},defaultValue:{summary:"Most recent"}},description:"What the row says. Always the caller's. One line in every normal case, because the panel sizes itself to the widest row; where a cap does bite, the words wrap rather than lose their ending."},lead:{...w("Words only"),name:"Leading with",...c({labels:{none:"Words only","mark-start":"Mark, leading","mark-end":"Mark, trailing",picture:"Picture"},options:["none","mark-start","mark-end","picture"]}),description:"What the row carries besides its words. ONE control rather than a picture toggle beside a side setting, because the row refuses to carry a mark and a picture at once: with four named choices the combination it refuses cannot be asked for here either. A picture row is the big card you click whole; a trailing mark sits at the row edge and turns over when the menu says the row is open."},description:{...t("Off"),name:"Second line",if:{arg:"lead",neq:"picture"},description:"Add a second line under the label, for a row whose name needs a few more words. It carries no colour of its own, only a smaller size, so it stays readable on every ground the row can take. A row that leads with a picture cannot have one: that is a different shape."},strong:{...t("Off"),name:"Heavy label",description:"Draw the label heavy, for a row that carries more weight than the ones around it. It moves the row onto the strong pole of its own type style, so the face moves with the weight and each brand gets its real emphasis cut. A second line, if there is one, stays as it was."},external:{...t("Off"),name:"Opens in a new tab",if:{arg:"as",eq:"a"},description:"The row leaves for another tab. It takes the same mark the link does, after the last word, and it says so out loud to anyone listening rather than looking. A row that is only a picture or a glyph takes no mark, because a mark welded to a mark is not a sign."},selected:{...t("Off"),name:"Chosen",description:"Editorial text and a small check at the far right identify the chosen row. Navigation omits this treatment. Keyboard focus remains a separate indicator."},disabled:{...t("Off"),name:"Unavailable",description:"Draw this row as one that will not respond. The words go quiet and the pointer stops promising a click."},as:{...w("Plain box"),name:"Element",...c({labels:{div:"Plain box",button:"Button",a:"Link"},options:["div","button","a"]}),description:"What the row is underneath. A plain box for a list whose keyboard the menu itself drives, a button for a row you click, a link for a row that goes somewhere. The drawing is the same in all three."},iconSide:{control:!1,table:{disable:!0}},indent:{...t("Off"),name:"One level down",description:"Move the words one step in, for a third level of navigation under a group with a name. The row keeps its full width, so the highlight is still a row."},active:{control:!1,table:{disable:!0}},activeFocusVisible:{control:!1,table:{disable:!0}},selectionIndicator:{control:!1,table:{disable:!0}},media:{control:!1,table:{disable:!0}},icon:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}}},N=()=>e.jsx("img",{src:"/flags/us.svg",alt:"",width:"24",height:"24",loading:"lazy"}),v=()=>e.jsx("img",{src:"/flags/gb.svg",alt:"",width:"24",height:"24",loading:"lazy"}),W={display:"grid",gap:0,width:260,padding:"var(--popover-padding-y) var(--popover-padding-x)",boxSizing:"border-box",overflow:"hidden",background:"var(--popover-bg)",border:"var(--popover-border-width) solid var(--color-border-subtle)",borderRadius:"var(--popover-radius)",boxShadow:"var(--elevation-overlay)"},C={padding:"var(--size-400) 0",display:"flex",justifyContent:"center"},P={width:220,padding:"var(--popover-padding-y) var(--popover-padding-x)",boxSizing:"border-box",background:"var(--popover-bg)",border:"var(--popover-border-width) solid var(--color-border-subtle)"},n="Newest first",_=[{key:"simple",label:"Simple",props:{}},{key:"with-description",label:"With description",props:{description:n},dimension:"variant"},{key:"with-thumbnail",label:"With thumbnail",props:{media:e.jsx(v,{}),children:"A label long enough to wrap onto two full lines"},dimension:"variant"},{key:"new-tab",label:"Opens in a new tab",props:{as:"a",href:"#menu-item",external:!0},dimension:"variant"},{key:"strong",label:"Heavy label",props:{strong:!0,description:n},dimension:"variant"}],u=[{key:"default",label:"Default"},{key:"hover",label:"Hover",pseudo:"hover"},{key:"chosen",label:"Chosen",props:{selected:!0},dimension:"state"},{key:"unavailable",label:"Unavailable",props:{disabled:!0},dimension:"state"},{key:"unavailable-chosen",label:"Unavailable, and chosen",props:{selected:!0,disabled:!0},dimension:"state"}],J={title:"Atoms/Menu item",component:d,tags:["autodocs"],parameters:{docs:{page:R("Menu item"),toc:{headingSelector:"h2, h3"},description:{component:"One row of a menu or a drop-down list: the thing you point at and choose. It draws the row. What the row means stays with the menu around it."}},componentDoc:{usage:`
## When to use

- ✅ **Every row of a menu**, in a popover, a sort menu, an actions menu.
- ✅ **Every row of a drop-down list.** Select already builds its list out of these, so a menu
  you assemble yourself matches the drop-down without you copying anything.
- ✅ **A list where one row is the current answer.** Tell it which row is chosen and it takes a
  colour of its own.
- ✅ **A list where nothing is chosen**, like an actions menu. Say nothing about selection and
  every row draws the same.

- ❌ **A choice on a page you were already reading.** That is **Option chip**, a real form
  control that carries its own box or circle.
- ❌ **A filter you switch on and off.** That is **Checkbox** inside **Filter group**.
- ❌ **A label attached to content**, like "New" or "Best seller". That is **Tag**.
- ❌ **A row in a search suggestions panel.** That panel groups results in columns and has no
  chosen row, so it is **SearchSuggestions**, not a menu.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Row** | required | The whole strip you point at. It fills the width of the menu it sits in, so the highlight reads as a row rather than as a floating rectangle |
| **Label** | required | The words. One line in every normal case, and it wraps rather than being cut if a cap ever bites |
| **Second line** | optional | A quieter line under the label, for a row whose name needs a few more words. It carries no colour of its own, only a smaller size |
| **Picture** | optional | A picture to lead with. Handing one over is what turns the row into the big card you click whole |
| **Mark** | optional | A small glyph on the leading edge or the trailing one. One or the other, never both, and never on a row that already has a picture |
| **New-tab mark** | automatic | A small diagonal arrow after the last word, on a row that opens in another tab. Never authored: the row draws it from where it goes |
| **Heavy label** | optional | The label drawn heavy, for a row that carries more weight than its neighbours. The second line, if there is one, stays as it was |

- **Tokens own the look.** Inset, corner, minimum height, the pitch to the picture, the highlight
  colour and the chosen row's colour. The same row re-themes across all 21 brands.
- **The caller owns the words and the picture**, and nothing else.
- **The menu around it owns the meaning.** Whether these rows are options, menu items or links,
  and which one is chosen, is stated by the menu, never guessed by the row.

The row has a corner of its own, smaller than the panel it sits in, with a radius token minted
for the row, because a rounded wash pressed against a rounded panel makes two curves fight.

**The row declares no clearance of its own.** It runs the full width of its track, and the only
frame around its wash is the panel's own 8px inset, which holds it off the edge on every side.

### The three variants

A row is one of three shapes, and which one it is follows from what you hand it rather than from a
setting you pick:

| Variant | You hand it | What you get |
|---|---|---|
| **Simple** | a label | The words row every menu already ships |
| **With description** | a label and a second line | The name, with a quieter line under it |
| **With thumbnail** | a label and a picture | The big card you click whole |

**One at a time, and the system holds you to it.** A row handed both a picture and a second line is
refused rather than drawn with one of them dropped, because that would be a fourth shape nobody
designed. The mistake shows up where it was made instead of turning into a setting that does
nothing.

### A heavier label

A row can draw its **label heavy**, for one that carries more weight than the ones around it.

**It moves the whole style, not just the weight.** The row swaps to the strong half of its own type
style, so the typeface moves with it and each brand gets the emphasis cut it actually owns instead
of a thickened version of the ordinary one.

**Only the label.** A second line under it stays exactly as it was, because the two are a name and
a note about it: making both heavy would say the whole row is emphatic rather than that its name is.

**Weight, never colour.** Emphasis here is always the heavier label. Colour is already spoken for
twice on this row, by the chosen ground and by the unavailable state, and a third meaning on the
same channel would make all three harder to read.

### The second line

A second line is for a row whose name does not say enough on its own: a sort order and what it
sorts by, a section and what is in it.

**It is told apart by size, never by colour.** The obvious treatment would be quieter grey text,
and it is not used, for a measured reason: on the ground a chosen row takes, that grey does not
have enough contrast to stay readable, which is the same finding that stops a row showing both
"chosen" and "unavailable" at once. So the second line is simply smaller, and it stays legible on
every ground the row can take and on every brand.

**Both lines are the row's name.** A screen reader hears them together, so write the second line as
part of what the row is, not as a note about it.

### The picture row

Give a row a picture and it stops being a line of text and becomes a card you click whole: a
product beside its name, a category beside its photo. It is the same component and the same
states, one rung wider.

**The row crops your picture to a circle, in a fixed seat.** Whatever you hand it, a flag, a
photo, an icon, fills a round disc at one diameter rather than sitting inside it letterboxed.
That is the row's own drawing now, not a setting a surface around it has to supply. A search
panel's own product thumbnail is a different case: it is drawn at its own size and its own
corner, inside the row's words rather than through this picture seat, so it is untouched by any
of this.

### The mark

A row can carry a small glyph on **one** edge: leading, against the words, or trailing, at the
far edge of the row. Leading is a glyph that belongs to the line you are reading. Trailing is
something the row does, and it sits at the edge because a mark floating beside a short name
reads as part of the name.

**One or the other, never both.** There is a single mark and a setting for which edge it sits
on, so a row with marks on both sides is not a thing anyone can ask for. A rule you cannot break
beats a rule somebody has to remember.

**A mark and a picture cannot be combined.** A picture row is already led by its picture, and a
second small glyph beside it competes with the thing it was put there to support. Asking for
both stops the row being built rather than quietly dropping one, so a mistake is visible where
it was made instead of showing up as a prop that does nothing.

**A trailing mark can open a group.** Tell the menu that a row is open, in the ordinary way a
row says so to a screen reader, and the mark at its trailing edge turns over. There is no
separate setting for it: the row already carries the fact, so the drawing follows what was
announced and a chevron can never point one way while the menu says the other. That is how a
navigation panel gets a second level of sections without the rows under it looking different
from the rows beside it.

### One level down

A row can sit one step in from its siblings, for a third level of navigation: a group with a
name, and the links that belong to it underneath. The step is a **grid, not a nudge**: an
ordinary row already starts its words 12px in, and one level down is one more of that, so the
edges in a panel land on 0, 12 and 24 and a reader can state the rule after seeing two rows of
it.

**One level, not a ladder.** Nothing in this system nests three deep inside a menu, so a second
step is a decision to take rather than a number to multiply. The words move and the row does
not get narrower, so the highlight still runs the full width.

### Opening in another tab

A row that leaves for another tab says so **twice**: a small diagonal arrow after the last word,
and a spoken note that rides in the row's own name, so the change of tab reaches somebody who
cannot see it happen.

**The mark follows the destination, never a setting.** You cannot turn it on for a row that stays
in this tab, and you cannot turn it off for one that does not.

**A row that is only a picture or a glyph gets no mark**, and only the spoken half. A second glyph
welded to a glyph says nothing anyone can use, which is why a row of social marks is left alone.

**The mark sits after the words, not at the row's edge.** It is a property of the name rather than
something the row does, so it travels with the last word and wraps with it. The row's own trailing
glyph is a different thing in a different place.

**This is the same mark the link atom draws**, from the same rule in the same place, so a menu row
and a paragraph link can never disagree about what leaving the page looks like.

There is still **no trailing hint** for a shortcut or a count. It is a real menu pattern and a
decision about anatomy, so it is listed in Open items rather than half built.
`,guidance:`
## Behaviors

### States

- **Default.** Available, not chosen, nothing under the pointer.
- **Hover.** A wash of the system's hover colour across the whole row. It is a colour change,
  never a fade.
- **Chosen.** The row's own text colour and a small check at the far right on the panel's paper,
  without a weight change. The hover wash still appears under the pointer. Some hosts, like the
  megamenu's dropdown link, omit the check treatment.
- **Every row is at least 40px tall**, the same pointer target the rest of the library guarantees.
  A words row used to draw 36.8px, so it grew rather than borrowing the trick the library normally
  uses to reach that floor: menu rows sit shoulder to shoulder, and a target that reached past the
  seam would overlap its neighbours, so aiming between two rows would choose the wrong one.
- **The second line follows the row.** It has no colour of its own, so it goes quiet with the
  label on an unavailable row and stays put on every other ground.
- **The new-tab mark follows the row too.** It is inked from the row's own words, so it dims with
  them rather than staying dark on a row you cannot use.
- **Unavailable.** Quiet words, and the pointer stops promising a click. It takes no colour at
  all: not the highlight, and not the chosen one either, even if it is the row you picked. That
  is a contrast decision rather than a preference, and it costs a little: on a row that is both,
  only "you cannot pick this" is drawn. Screen readers are still told both.

Selection keeps its own text colour and check while the pointer changes the hover wash.
Keyboard movement adds the focus ring to the active row, independently of the chosen row.

### Interactions

- **Clicking a row chooses it.** What choosing *does* belongs to the menu, not to the row.
- **In a drop-down, the keyboard drives the highlight and the pointer writes to the same one.**
  Two independent highlights is how a list shows the mouse in one place and the keyboard in
  another, and you press Enter and get the row you were not looking at.
- **In a menu with no keyboard of its own**, a sort menu, an actions menu, the row hovers
  normally. Same wash, same colour.
- **The row never takes keyboard focus by itself.** In a drop-down, focus stays on the field the
  whole time. A row that is a link is focusable because links are.
- **Double-clicking selects nothing.** A menu row's words are not text to select.

## Rules

- ✅ **Do** use it for every row of every menu and drop-down, so two lists in one product cannot
  disagree about what chosen looks like.
- ✅ **Do** let the menu around it say what the rows mean. A drop-down's rows are options, an
  actions menu's rows are commands, a locale list's rows are links, and no two are
  interchangeable.
- ✅ **Do** tell it which row is chosen in any menu that has one, so the colour has something to
  land on.
- ❌ **Don't** use it for a choice on a page. That is **Option chip**, a real form control.
- ❌ **Don't** put a second control inside a row. One row, one choice: a button inside a row you
  can already click is a second tab stop for the same decision.
- ❌ **Don't** rely on grey text alone to say a row is unavailable. The menu has to say it too,
  or the fact reaches nobody who cannot see the colour.
- ❌ **Don't** space the rows apart. A gap between them turns the highlight into a floating
  rectangle instead of a row.
- ✅ **Do** put a mark on one edge or the other, whichever the mark is for: leading if it belongs
  to the words, trailing if it is something the row does.
- ❌ **Don't** put a mark on a row that already has a picture. The picture is the row's mark.
- ❌ **Don't** put a second line on a picture row. Those are two different shapes, and asking for
  both stops the row being built.
- ✅ **Do** use the heavy label sparingly. It only reads as emphasis while most rows around it are
  ordinary.
- ❌ **Don't** reach for colour to make a row stand out. The heavy label is the way, and the colours
  are already saying which row is chosen and which cannot be used.
- ✅ **Do** let a second line be part of what the row is. It is read out with the label, so it is
  the name and not a footnote.
- ❌ **Don't** draw your own new-tab indicator. A row that opens another tab already marks itself,
  and a second one beside it is two answers to one question.
- ❌ **Don't** indent more than one level. A third level is a decision about the menu, not a
  number to double.

### Content rules

- ✅ **Do** write every word at the call site. The component supplies none.
- ✅ **Do** write the option, not the instruction. "Most recent", not "Sort by most recent": the
  menu's own title already said that.
- ✅ **Do** decide the picture's own alternative text at the call site. A product thumbnail beside
  the product's name is decoration and takes an empty one; a category picture that carries meaning
  the words do not is not, and only the screen knows which it has.
- ❌ **Don't** count on a long name being cut. It wraps: a name shortened to "Portugues ..." says
  less than the name, so the row grows a second line instead of losing its ending.
- ❌ **Don't** invent a character limit. Nothing supplies one.
- ✅ **Do** keep a second line short and factual. It says what the row is, never why you should
  want it.
- ❌ **Don't** expect the picture slot to take a size or a shape of your own. It crops whatever it
  is handed to one fixed circle. A picture that needs its own size and corner belongs inside the
  row's own words instead, the way a search result's product thumbnail draws itself.

## Open items

| Question | Owner |
|---|---|
| ~~**Is "only text" a different row from "a menu item"?**~~ **ANSWERED.** The question asked for the difference to be named as a second line or a roomier row, and a second line is what the row now has. The plain row and the one with a description are two drawings under two names, so there is nothing left to tell apart | Answered |
| Should a row carry a trailing hint such as a shortcut or a count? A real menu pattern, and a decision about anatomy rather than a style. The picture, the mark and the second line halves of this question are all answered now; this one is not | Design |
| **Should a second indent level exist?** One level ships, because nothing measured in this system nests three deep inside a menu. A ladder built ahead of that would be a ruler with no evidence behind it | Design |
| Should the picture row carry a second line under the name, for a price or a shade count? A second line exists now, and a picture row is refused one on purpose: the two are different shapes, and combining them is a decision about the picture row's anatomy rather than a setting anyone can switch on | Design |
| ~~**Validate selection contrast in the remaining brands.**~~ **ANSWERED.** Selection now reads the row's own text colour rather than a second ink, so it carries whatever contrast the label already has on every brand: nothing separate to validate | Answered |
| Should the row's corner be the same on every brand? It is today, because nothing in the portfolio's harvest measures a menu, so there was nothing per brand to read. A later brand wave could change that | Design |
`,spec:{elements:[{name:"Row",requirement:"required",condition:"Fills the width of the menu, so the wash reads as a row."},{name:"Label",requirement:"required",condition:"One line in every normal case, and it wraps rather than losing its ending."},{name:"Second line",requirement:"optional",condition:"Handing one over is what makes it a description row. Smaller than the label, and no colour of its own."},{name:"Picture",requirement:"optional",condition:"Handing one over is what makes it a picture row. The row crops it to a circle at a fixed size."},{name:"Heavy label",requirement:"optional",condition:"Moves the label to the strong half of the row's own type style. The second line stays as it was."},{name:"New-tab mark",requirement:"automatic",condition:"Drawn from the destination on a row with words. Never on a row that is only a picture or a glyph."},{name:"Mark",requirement:"optional",condition:"One edge only, leading or trailing. Refused on a row that has a picture. A trailing mark turns over when the row reports itself open."},{name:"Element",requirement:"optional",condition:"A plain box by default; the host passes a link or a button."},{name:"Role and ARIA",requirement:"required",condition:"Written by the menu around the row, never by the row."}],authorability:[{name:"Label",rule:"Authored at the call site. The component supplies no words of its own."},{name:"Wording",rule:'Write the option, not the instruction: "Most recent", not "Sort by most recent".'},{name:"Label length",rule:"No character limit. A name too long for the menu wraps instead of being cut."},{name:"Second line",rule:"Authored at the call site, refused on a picture row. Short: it is read out as part of the name."},{name:"Picture",rule:"The caller hands one over or leaves it out. The row decides its size and shape, cropped to a circle."},{name:"Heavy label",rule:"Authored per row. Weight only: emphasis in this system is never a colour."},{name:"New-tab mark",rule:"Not authorable. The row draws it from where it goes, and a hand-drawn second one is refused."},{name:"Mark",rule:"Optional, on one edge. A row handed both a mark and a picture is refused rather than drawn."},{name:"One level down",rule:"Authored per row. The step itself is fixed: one row inset, so the panel reads one grid."},{name:"Chosen row",rule:"The menu tells a row it is the chosen one. The row never works that out itself."},{name:"Element",rule:"The host picks a plain box, a button or a link. The drawing is the same in all three."},{name:"Colour and corner",rule:"Fixed by tokens. The wash, the chosen ground and the corner are not authorable."},{name:"Row rhythm",rule:"Fixed by the system. Rows sit flush, and nothing may space them apart."},{name:"Extra controls",rule:"One row, one choice. No second control goes inside a row."}],variants:[{label:"Simple",props:{}},{label:"With description",props:{description:n}},{label:"With thumbnail",props:{media:e.jsx(v,{})}},{label:"Opens in a new tab",props:{as:"a",href:"#menu-item",external:!0}},{label:"Heavy label",props:{strong:!0,description:n}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"chosen",name:"Chosen",props:{selected:!0}},{key:"unavailable",name:"Unavailable",props:{disabled:!0}},{key:"unavailable-chosen",name:"Unavailable, and chosen",props:{selected:!0,disabled:!0}}],render:k,interactions:["Clicking a row chooses it. What choosing does belongs to the menu, never to the row.","Handing the row a picture is what makes it a picture row. There is no second setting.","Handing the row a second line is what makes it a description row. There is no second setting for that either.","The heavy label is asked for, not derived: nothing in a row's content says it should be emphatic.","A heavy label moves the whole type style to its strong half, so the face moves with the weight.","Only the label goes heavy. A second line under it keeps its own size and weight.","A row handed both a picture and a second line is refused outright: they are two different shapes.","A row that opens another tab draws a diagonal arrow after its last word and says so out loud as well.","The new-tab mark follows the destination, so it cannot be switched on for a row that stays in this tab.","A row that is only a picture or a glyph takes no new-tab mark, and keeps the spoken half.","A mark sits on one edge or the other. One slot and a side, so both sides at once cannot be asked for.","A trailing mark sits at the row edge, not beside the words, so it stays put however long a label is.","A trailing mark turns over when the menu says the row is open, so the drawing follows what was announced.","A row handed both a mark and a picture is refused outright rather than drawn with one of them dropped.","One level down moves the words one row inset in and leaves the row full width, so the wash is still a row.","Every row is at least 40px tall, so the whole strip is one pointer target and no more.","The row never takes focus by itself. A row that is a link is focusable because links are.","In a drop-down the keyboard cursor and the pointer write to the same single highlight.","Hover washes the whole row. It is a colour change, never a fade.","On a row that is both chosen and under the cursor, the cursor takes the ground.","An unavailable row takes no wash at all, chosen or not, and the pointer stops promising.","Every aria attribute the host spreads lands last, so the menu always wins.","Double-clicking a row selects no text. A row is a control, not a paragraph.","Rows sit flush against each other, so the wash reads as a row and not as a rectangle."],accessibility:[{label:"Meaning",text:"The host owns role and selection semantics. The decorative check is hidden from assistive technology."},{label:"Focus",text:"The row never becomes focusable and never moves focus, so a drop-down keeps focus on its own field the whole time."},{label:"Keyboard",text:"The menu owns the keyboard: its arrow keys move the highlight and Enter chooses. The row handles no key by itself."},{label:"Unavailable",text:"An unavailable row is announced as unavailable by the menu, not left to quiet ink to say on its own."},{label:"Leaving the page",text:"A row that opens another tab is announced as doing so, as part of its own name, and carries a visible mark whenever it has words for the mark to belong to."},{label:"Contrast, second line",text:"The second line takes no ink of its own, so it stays as readable as the label on every ground the row can take and on every brand."},{label:"Contrast, chosen",text:"The row's own text colour and a check identify selection, so contrast follows the label already kept readable on both the panel and hover grounds."},{label:"Contrast, quiet ink",text:"An unavailable row keeps its label legible against whatever ground it sits on, on every brand."},{label:"Announcement",text:"As the menu moves its highlight, the row under it is announced, so a keyboard user always hears where they are."}],openItems:[{question:"Should a row carry a trailing hint such as a shortcut or a count? The icon and the second line halves are answered.",owner:"Design"},{question:"Should the picture row carry a second line under the name, for a price or a shade count? It is refused today, on purpose.",owner:"Design"},{question:"Should the row corner be the same on every brand? Nothing measured per brand covers a menu.",owner:"Design"}]}}}};function H({children:a,selected:i,disabled:T,as:h,lead:o,indent:A,description:x,strong:S,external:I}){const l=o==="picture",O=o==="mark-start"||o==="mark-end";return e.jsx("div",{style:C,children:e.jsx("div",{style:{...W,width:l?320:260},children:e.jsx(d,{as:h,media:l?e.jsx(N,{}):void 0,icon:O?e.jsx(M,{name:o==="mark-end"?"chevron-down":"info",size:"md"}):void 0,iconSide:o==="mark-end"?"end":"start",indent:A,description:!l&&x?n:void 0,strong:S,external:h==="a"&&I,selected:i,disabled:T,...h==="a"?{href:"#menu-item"}:{},children:a})})})}const r={name:"Default",args:{children:"Most recent",lead:"none",indent:!1,description:!1,strong:!1,external:!1,selected:!1,disabled:!1,as:"div"},argTypes:q,render:a=>e.jsx(H,{...a}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"One row, on the paper it is meant to be read on. **Hover it** to see the wash. Turn **Chosen** on to see the small check at the far right. Turn **Picture** on and the same row leads with the United States flag, one of the country flags committed to this library, and becomes the big card you click whole, with every state unchanged. Change the **Brand** toolbar and the row re-themes across all 21 brands: the inset, the ground and the chosen colour are all tokens."}}}};function k({children:a,...i}){return e.jsx("div",{style:P,children:e.jsx(d,{...i,children:a??"Most recent"})})}const s={name:"State matrix",parameters:{themeShellPadding:!1,pseudo:E(u,{pseudoTarget:".ds-menu-item"}),docs:{description:{story:"Every shape a row can be, against the two things a pointer can do to it. The top four rows are the variants, the bottom three are the conditions any of them can be in. Read **Simple**, **With description** and **With thumbnail** in order: one label, a label with a quieter second line under it, a label led by a picture, the United Kingdom flag. The second line takes no colour of its own, only a smaller size, which is why it stays readable on every ground below it. Read **Opens in a new tab**: the mark sits after the last word rather than at the row edge, because it is a property of the name and not an affordance of the row, and it is spoken as well as drawn. Read down the **Hover** column: the unavailable row is the one that does not light up, which is the rule rather than an oversight. Read across **The chosen row**: the cursor takes the ground when it arrives, which is the precedence rather than a lost state, and the row goes back to its own colour the moment the cursor leaves. Read the bottom row: an unavailable row that is also the chosen one shows no colour at all, because the quiet ink does not have enough contrast against the chosen ground to stay readable. This is a QA tool, not themed product UI."}}},render:()=>e.jsx(D,{rows:_,columns:u,render:k})};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    children: 'Most recent',
    lead: 'none',
    indent: false,
    description: false,
    strong: false,
    external: false,
    selected: false,
    disabled: false,
    as: 'div'
  },
  argTypes: MENU_ITEM_ARG_TYPES,
  render: args => <ConfigurableMenuItem {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'One row, on the paper it is meant to be read on. **Hover it** to see the wash. Turn ' + '**Chosen** on to see the small check at the far right. ' + 'Turn **Picture** on and the same row leads with the United States flag, one of the ' + 'country flags committed to this library, and becomes the big ' + 'card you click whole, with every state unchanged. Change the **Brand** toolbar and ' + 'the row re-themes across all 21 brands: the inset, the ground and the chosen colour ' + 'are all tokens.'
      }
    }
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,y,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'State matrix',
  parameters: {
    themeShellPadding: false,
    pseudo: getStateMatrixPseudoParameters(STATE_MATRIX_COLUMNS, {
      pseudoTarget: '.ds-menu-item'
    }),
    docs: {
      description: {
        story: 'Every shape a row can be, against the two things a pointer can do to it. The top four ' + 'rows are the variants, the bottom three are the conditions any of them can be in. ' + 'Read **Simple**, **With description** and **With thumbnail** in order: one label, a ' + 'label with a quieter second line under it, a label led by a picture, the United ' + 'Kingdom flag. The second line ' + 'takes no colour of its own, only a smaller size, which is why it stays readable on ' + 'every ground below it. Read **Opens in a new tab**: the mark sits after the last ' + 'word rather than at the row edge, because it is a property of the name and not an ' + 'affordance of the row, and it is spoken as well as drawn. Read down ' + 'the **Hover** column: the unavailable row is the one that does not light up, which ' + 'is the rule rather than an oversight. Read across **The chosen row**: the cursor ' + 'takes the ground when it arrives, which is the precedence rather than a lost state, ' + 'and the row goes back to its own colour the moment the cursor leaves. Read the ' + 'bottom row: an unavailable row that is also the chosen one shows no colour at all, ' + 'because the quiet ink does not have enough contrast against the chosen ground to ' + 'stay readable. This is a QA tool, not themed product UI.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={STATE_MATRIX_ROWS} columns={STATE_MATRIX_COLUMNS} render={renderStateMatrixCell} />
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const Z=["Playground","StateMatrix"];export{r as Playground,s as StateMatrix,Z as __namedExportsOrder,J as default};
