import{j as n}from"./iframe-6dx3hp_4.js";import{N as D,w as _,u as W,R as M}from"./BrandWordmark-CszUK9Mj.js";import{a as G}from"./annotationPage-eYx--AWZ.js";import{D as b,a as f,c as o}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./SearchBar-DwGR_hzY.js";import"./Icon-BihOhSWB.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./SearchSuggestions-CAczFYXo.js";import"./Placeholder-Ed4iQRc7.js";import"./MenuItem-bBgP9Lwo.js";import"./Button-CiZyClsp.js";import"./Loading-DyIAIYoE.js";/* empty css               */import"./Drawer-CypulVuT.js";import"./useScrollLock-B-psvS0l.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";import"./MediaFrame-CgpnOU1q.js";import"./NavItem-Dq6-KykK.js";const U=[{code:"EN",label:"English",href:"#",current:!0},{code:"FR",label:"Français",href:"#"}],r=e=>n.jsx("img",{src:`/flags/${e}.svg`,alt:"",width:"24",height:"24",loading:"lazy"}),j=[{value:"USD",code:"USD",label:"United States (USD $)",href:"#",current:!0,media:r("us")},{value:"CAD",code:"CAD",label:"Canada (CAD $)",href:"#",media:r("ca")},{value:"GBP",code:"GBP",label:"United Kingdom (GBP £)",href:"#",media:r("gb")},{value:"AUD",code:"AUD",label:"Australia (AUD $)",href:"#",media:r("au")}],H="Find your shade with Virtual Try-On",V={href:"/collections/virtual-try-on",label:"Try It Now"},c={suggestions:[{label:"foundation"},{label:"lipstick"},{label:"mascara"}],collections:[{label:"Best Sellers"},{label:"New Arrivals"},{label:"Virtual Try-On"}],products:[{name:"PhotoReady™ Lift & Fill Skin Tint",image:"/revlon-home/fc-skin-tint.png"},{name:"PhotoReady Insta-Sculpt™ Bronzer & Contour Stick",image:"/revlon-home/fc-bronzer.png"},{name:"Insta-Blush™ Cream Blush Stick",image:"/revlon-home/fc-insta-blush.png"}]};function z(){return n.jsxs("div",{style:{padding:"var(--size-600) var(--size-400)",maxWidth:"640px",margin:"0 auto",minHeight:"250vh"},children:[n.jsx("p",{children:"Scroll this preview down past ~120px, then back up, to see the ratified scroll behaviour: the bar hides briefly on the way down and re-anchors immediately on the way up."}),Array.from({length:12}).map((e,t)=>n.jsxs("p",{style:{color:"var(--color-text-muted)"},children:["Filler paragraph ",t+1,", present only so this preview has enough height to scroll."]},t))]})}const u={showMegamenu:{...o("On"),name:"Dropdown menus",description:"Show the dropdown columns authored under nine of the ten links. Off strips every column, so each link becomes a plain, single-level link instead."},showAnnouncement:{...o("On"),name:"Promo banner",description:"Show the announcement strip above the bar."},announcementLinked:{...o("On"),name:"Promo banner link",description:"Give the promo banner a destination. The whole strip becomes one link, with a labelled call to action after the message. Off leaves it a plain line of copy."},showCurrency:{...o("On"),name:"Currency selector",description:"Show the currency selector. Its trigger is a circular flag, the short code and the caret, and nothing else; the rows carry the fuller name."},showSearch:{...o("On"),name:"Search",description:"Show the search trigger. Clicking it opens SearchBar across the whole middle of the bar, in place of the link row, and the close icon beside the field puts the row back."},showLocator:{...o("On"),name:"Store locator",description:"Show the store-locator link."},showLanguage:{...o("On"),name:"Language selector",description:"Show the language selector, backed by the ratified revlon.ca example: English by default, plus French."},sticky:{...o("Off"),name:"Sticky on scroll",description:"Pin the bar to the top and grow the preview tall enough to scroll. Scroll down past 120px to see the bar hide, then scroll up to see it re-anchor immediately."},headerLayout:{...f("Flagship"),name:"Header layout",...b({labels:{flagship:"Flagship",inline:"Inline"},options:["flagship","inline"]}),description:"Two arrangements of the same header from the same atoms. Flagship is the two-tier rail: the logo and utilities on top, a hairline, then the link row, all aligned left on the 1200 rail. Inline is the single-tier bar every template still ships. Flagship is the client-facing default here; the global default is an open question for the DS team."},drawerSide:{...f("Right"),name:"Mobile panel side",...b({labels:{left:"Left",right:"Right"},options:["left","right"]}),description:"Which edge the mobile panel slides in from."},items:{control:!1,table:{disable:!0}},utilities:{control:!1,table:{disable:!0}},languages:{control:!1,table:{disable:!0}},currencies:{control:!1,table:{disable:!0}},regions:{control:!1,table:{disable:!0}},brand:{control:!1,table:{disable:!0}},logo:{control:!1,table:{disable:!0}},announcement:{control:!1,table:{disable:!0}},announcementLink:{control:!1,table:{disable:!0}},searchSuggestions:{control:!1,table:{disable:!0}}},p={showMegamenu:!0,showAnnouncement:!0,announcementLinked:!0,showSearch:!0,showLocator:!0,showLanguage:!0,showCurrency:!0,headerLayout:"flagship",sticky:!1,drawerSide:"right"};function Y(e,t){return t?e:e.map(({columns:m,...a})=>({...a,href:a.href??"#"}))}function l({items:e,headerLayout:t,showMegamenu:m,showAnnouncement:a,announcementLinked:C,showSearch:L,showLocator:O,showLanguage:q,showCurrency:R,sticky:g,drawerSide:I,searchSuggestions:B}){const{logo:F}=W(),P=[L&&"search",O&&"locator",q&&"language",R&&"currency"].filter(Boolean),w=n.jsx(D,{items:Y(e,m),logo:F,layout:t,utilities:P,languages:U,currencies:j,announcement:a?H:void 0,announcementLink:a&&C?V:void 0,searchSuggestions:B,sticky:g,drawerSide:I});return g?n.jsxs("div",{children:[w,n.jsx(z,{})]}):w}const be={title:"Organisms/Navigation",component:D,tags:["autodocs"],parameters:{layout:"fullscreen",themeShellPadding:!1,docs:{page:G("Navigation"),toc:{headingSelector:"h2"},description:{component:"The global site header: the brand logo, the primary link row and its megamenu, and the utility cluster beside them. It ships on every page and renders as the page's banner landmark."}},componentDoc:{usage:`
## When to use

- ✅ **Every page.** One header, at the top, on every template in the library.
- ✅ **Category links that open a panel.** A link authored with columns opens a megamenu; a link
  authored with none stays a plain, single-level link.
- ✅ **The utility cluster**: search, store locator and language. Each one is optional
  and each one can be left out. **Account** and **cart** are two more the component supports and
  this page does not show: both are marked a later phase.

- ❌ **The search field itself.** **SearchBar** owns the field, its icon and its submit behaviour.
  Navigation only hosts the open and close chrome around it.
- ❌ **The rows inside the suggestions panel.** **SearchSuggestions** owns the groups, their caps
  and the no-results line. Navigation anchors that panel under the field and dismisses it.
- ❌ **The mobile panel's own behaviour.** The panel is **Drawer**, a primitive shared with the
  filters panel, and its focus-trap and restore contract is documented on Drawer's page.
- ❌ **Links at the bottom of the page.** That is **Footer**.
- ❌ **Where the shopper is inside a section.** That is **Breadcrumbs**.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Brand logo or wordmark** | **always required** | Links to the homepage on every page. The site supplies the artwork, per brand; a brand that supplies none draws its text wordmark instead, in the same slot |
| **Primary link row** | **always required** | The reference site publishes **ten** links in it, and one of them is highlighted |
| **A link with no destination** | optional | Two of the ten reference links go nowhere: they exist only to open their panel. Given no destination the row is a button, on the bar and in the mobile panel alike, which is what that site draws too |
| **Megamenu**: up to 5 columns of text links, an authored heading, icons before sub-link text, and one editorial column holding one or two cards | required **whenever a link carries sub-links** | A link authored with no columns renders as a plain link instead. The reference site's own menus run **one to four** columns |
| **Search** | optional | Navigation hosts the open and close chrome and decides the room. The field itself is **SearchBar**, and when it opens it takes the whole middle of the bar, in place of the link row |
| **Search suggestions panel** | optional, and only when the site supplies rows for it | Opens under the live field once someone has typed. The panel is **SearchSuggestions**; the header anchors it, and closes it when the field empties, when a row is chosen or when the search closes |
| **Store selector** | a genuine **contradiction**: included by the sheet's own description, optional by its own states list | Not resolved here. It is the gate's one deliberate skip |
| **Language selector** | optional, when relevant | A region selector shares the same mechanism and has no authored example anywhere in the library |
| **Currency selector** | optional | Its own utility, drawn only when it is listed AND currencies are authored. The trigger is a circular flag, the short code and the caret; a row carries the fuller name. **The rows on this page are a demonstration:** the reference site publishes no currency selector, so nothing here is harvested from it |
| **Promo banner** | optional | |
| **Account** | optional, marked **a later phase** | Still supported by the component, not drawn by default and not a control here |
| **Cart** | optional, the same later phase | Still supported by the component, not drawn by default and not a control here. On the professional channel it swaps for Pro Login |
| **Hamburger and mobile panel** | required **below desktop** | The panel is **Drawer**, a primitive shared with the filters panel |

**The mobile panel reads as three levels plus its utilities**, and each row wears the treatment of
what it is. **Every row in the panel is one of two atoms**, never markup the header draws itself:

| Level | What it is | What it wears |
|---|---|---|
| **Section** | A category | **Nav item**, in the same all-caps treatment the bar's primary links wear. A category with sub-links is a **disclosure**: the whole row opens the section, and the chevron at its far edge is part of the row's picture rather than a second control. A category with no sub-links is the same row as a link, and it navigates |
| **Sub link and group** | The links inside a section, and a named group inside it | **Menu item**, exactly as it draws anywhere else. A group carries a chevron at its trailing edge; the links beside it do not |
| **Inside a group** | The links under a named group | **Menu item, one level down** |
| **Utilities** | Account and Cart, when the site lists them | **Menu item**, the same row as a sub link, in a list of their own under a hairline |

Every row is **one control and one tab stop**, and the whole width of the row is its target, so a
thumb landing anywhere between the two hairlines hits the row it is aiming at. Every chevron in the
panel sits on one column, every target clears 40px on its own, and every text edge lands on the
same grid, one step in for the third level.

- **The bar runs the full width of the screen.** It is the one organism in the library that does.
  Every other band on a page sits in the 1200px page canvas, and the header used to sit there
  too, which is why its link row was cut by the same amount at 1280, 1440 and 1920 alike: a bar
  that cannot use a bigger screen cannot be helped by one. Free of the canvas it gains
  **240px at 1440**, and the reference site's ten labels fit with room to spare.
- **A multi-column megamenu bleeds but its contents do not.** The full-width panel paints the whole
  width under the bar, and the columns inside it sit in the same 1200px page canvas every other band
  uses. A **hugging** menu does not bleed at all: it opens as the flush popover, hugging its content
  under its own link. Both panels are **flat and square**, no border and no rounded corner, edge
  definition from the raised shadow alone, which is what tells the header menu apart from the rounded
  card the Select and the Dropdown draw.
- **The open panel breathes by the Figma spec.** The panel insets its content **32px** top and
  bottom and **16px** left and right, each column adds **8px** top and bottom, and columns sit **32px**
  apart, so the first row of links clears the bar and its hairline without crowding.
- **Tokens own the look.** Shape, spacing, type and every colour. The same header re-themes across
  every brand without a value being restated.
- **The site owns the words.** Link labels, megamenu copy, column headings, the wordmark and the
  utility labels are all authored per site.

**One shipped fact carries no client requirement at all.** Which side the mobile panel slides in
from is not named anywhere. Drawer records the same gap.

### Variants

**Megamenu columns: one to five, arranged by rule rather than by authoring order.** Columns with
**no heading** are read first, before every column that carries one, in every panel. Two headed
columns keep the order they were written in, and so do two headerless ones: the rule decides which
KIND leads and nothing else.

**The editorial column always sits furthest right**, wherever the content declares it, and it holds
**one or two** cards, stacked. A third is dropped, the same way a sixth column is. When a panel
would need six columns to hold five text columns and its cards, the editorial column keeps its
place and the last text column is the one that goes.

### The editorial column

One column of a menu can be an **editorial block**: a picture, and under it an optional label that
links somewhere. It is the slot for whatever the brand is putting in front of people this week.

**The picture belongs to the brand, not to the menu.** Change the brand and the picture changes
with it, the same way the wordmark does, because a photograph is brand property rather than part of
the menu's structure. A menu that names its own picture keeps that one, so a specific campaign can
still be pinned to a specific menu.

**A brand with no picture of its own draws the placeholder.** That is the honest state rather than
a gap: it says this brand has nothing in the slot yet, instead of borrowing another brand's
picture and implying it does.

**The label names what the picture shows.** It is set in the same style as the column headings
beside it, so the panel reads as one thing, and it takes the panel's own ink so it stays readable
on every brand. The picture and the label are one target with one name, not two links to the same
page.

**The picture is left alone under the pointer.** Only the label underlines, because that is how
every other destination in this header answers a pointer, and a photograph that moved or dimmed
would be a second answer to a question the label has already answered.

**Column headers are authored copy**, for example "Featured Collections". A column may also carry
none: the reference site opens three of its menus with a headerless stack of top-level links.

**Two panel shapes, chosen by the menu's own content, and both flat.** A menu of **up to two
columns hugs its content** (a single long column reads down two sub-columns) and opens as the
**flush** popover: it hangs under its own link. A menu of **three or more columns** opens as the
**full-width panel** that spans under the bar. Both are **square and borderless**, with
the raised shadow doing the edge, which is the header's own flat look and deliberately not the
rounded, hairlined card the Select and the Dropdown draw. This is the reference site's own pattern,
a short menu dropping a list under its link and a wide one dropping a spanning panel, and the component
picks the shape from the content rather than a hand-set flag.
`,guidance:`
## Behaviors

### States

- **Desktop.** Resting, link hover (a colour change plus its dropdown opening), dropdown open,
  search open, scrolled-hidden and scrolled-anchored.
- **Mobile and tablet.** Collapsed bar, panel open, a main link expanded in place as a
  disclosure, and its sub-links.
- **There is no hover state at all below desktop.** The criteria states it flatly for mobile and
  tablet alike, and the build hides the hover-driven link row and switches on the hamburger
  across the whole band, not on a phone alone.
- **The width where that happens is measured, not chosen.** The bar runs the full width of the
  screen, so the link row's room grows with the screen. Below **1230px** there is no longer enough
  of it for the reference site's ten labels, and that is exactly where the row hands over to the
  hamburger. The row needs 827px and everything beside it in the bar takes 383px, so the last
  width that still fits is 1210px; 1230px is the next step on the breakpoint ruler above it,
  which leaves 20px of slack at the narrowest desktop this header ever draws. Nothing is ever cut
  in silence, and no cap on the number of links is needed to promise that.
- **The logo and the utilities hold their two ends at every width.** The mark sits at the leading
  gutter and the utility group sits flush at the trailing one, from the narrowest phone to the
  widest desktop. Whatever is in the middle flexes between them: the link row, the open search
  field, or nothing at all once the row hands over to the hamburger. Neither end moves for any of
  the three, so there is no width at which the utilities drift toward the centre of the bar.
- **Focus.** Every interactive part gets a visible focus ring. That ring is owned by the code:
  Figma draws no focus state to confirm it against.
- **Expanded state is published, not implied.** The hamburger, every megamenu link, every mobile
  disclosure button and every selector trigger announce whether they are open.
- **The link states themselves live on Nav item.** Resting, hover, pressed and focus are one row
  used in three places here, and the grid that shows them is at **Atoms → Nav item → All states**.
- **A closed panel is genuinely closed.** Neither an open megamenu's columns nor a closed locale
  menu's options can be reached by keyboard while the panel is shut.

### Interactions

- **Hovering a link that carries sub-links opens its dropdown**, recolours the link and draws an
  accent underline under it. The underline is the hover mark: it is not a fixed marker on the page
  in view, and it stays only while the pointer is on the link or while that link's panel is open, so
  it does not blink off when the pointer moves down into the panel.
- **Arrow-down opens the same panel by keyboard** and moves focus into it. Escape closes it and
  puts focus back where it was when the panel opened, so a panel a visitor opened from the
  keyboard hands the keyboard back to the link, and one that opened under a passing pointer does
  not steal focus onto a link nobody went near.
- **Clicking anywhere outside an open panel closes it.**
- **Clicking a link, a sub-link or an icon navigates to that page.**
- **Clicking the search icon opens the search field across the whole middle of the bar**, between
  the logo and the utilities, the way the live site does it. The link row stands down while the
  field is there and comes straight back when the close icon returns the trigger to its icon
  state. The two share one slot on purpose: a field squeezed in beside the links would take its
  room out of them, which is how a header ends up cutting labels to show a 244px search box.
- **Nothing else in the bar moves while the search is open.** The logo stays at the left gutter,
  the utility group stays at the right one, the bar keeps its height, and no dimming layer is
  drawn over the page. The search icon stays on screen in both states and reports which one it is
  in, so pressing Escape or the close icon has somewhere to hand the keyboard back to.
- **The keyboard gets the same round trip as the pointer.** Opening puts the caret in the field,
  Escape closes from anywhere inside the row, and focus returns to the search icon. Below the
  tablet breakpoint the logo gives the field its room, which is the one width where there is not
  enough of it to go around.
- **Typing in the open field opens the suggestions panel**, when the site has supplied rows for
  it. Emptying the field closes the panel, and so does choosing a row or closing the search. A
  site that supplies nothing gets no panel at all.
- **Clicking the language selector opens its own dropdown**, and the current option is
  marked with a shaded row.
- **A locale menu with no room below its trigger opens above it instead.** It is measured when it
  opens and again while the page scrolls, so the menu never covers the control it belongs to.
- **Clicking the logo navigates to the homepage.**
- **On scroll past 120px the bar hides briefly**, then animates back in and stays anchored the
  instant the visitor scrolls back up.

The megamenu and the locale menus are the same floating surface underneath, with different
contents: the megamenu spans the page under the bar and holds columns, and a locale menu is a
small panel anchored to its own trigger.

## Rules

- ✅ **Do** author up to five megamenu columns.
- ❌ **Don't** exceed five. The cap is ratified, not a guideline, and a sixth column is silently
  dropped rather than squeezed in.
- ✅ **Do** use exactly one editorial column.
- ❌ **Don't** author two. Only the first one keeps its picture; the second falls back to its links.
- ✅ **Do** let the editorial picture come from the brand unless a specific menu needs a specific
  one. That is what makes one menu work for every brand.
- ❌ **Don't** write a line of selling into the editorial label. It names what the picture is.

- ✅ **Do** keep the logo linked to the homepage, on every page.
- ✅ **Do** let the header run edge to edge. It is the only band on the page that does, and the
  room is what keeps the link row whole.
- ❌ **Don't** count the links. There is no maximum number of them: what there is, is a width. Add
  labels and the row keeps its promise until the screen runs out, at which point the whole thing
  becomes the hamburger rather than losing a label quietly. A longer set of labels moves that
  width up, so a site that adds two more should look at where the collapse lands.
- ❌ **Don't** rely on hover to reach anything below desktop. There is no hover there at all.
- ❌ **Don't** place the search field anywhere but behind its trigger. The field belongs to
  **SearchBar**, not to this component.

- ✅ **Do** give every icon-only control an accessible name. The header is mostly wordless
  controls, so this is where an unnamed one does the most damage.
- ❌ **Don't** author more than one highlighted link in the row. Two highlights in one row of
  links is no highlight. The highlight is authored and stays put; it never marks the page the
  visitor is on.

### Content rules

- ✅ **Do** author every column header. They are copy, for example "Featured Collections", never
  derived from the page tree.
- ✅ **Do** author language options per locale. The ratified example is the Canadian site: English
  by default, plus French.
- ❌ **Don't** invent a character limit for a link label. Limits are owed by design.
- ❌ **Don't** pick an icon route for sub-link text yet. Three are sanctioned, a custom upload, a
  prefixed library glyph and an emoji, and none has been chosen.

## Open items

| Question | Owner |
|---|---|
| Store locator: included, as the sheet's own description reads, or optional, as its states list reads? Encoded as the gate's one deliberate skip | Client |
| Which icon route wins for sub-link text: custom upload, prefixed library glyph, or emoji? An emoji in a nav label carries real assistive-technology and cross-platform consequences. The reference site has already answered it in practice, and not through the icon slot: two of its sub-links carry an emoji **inside the label text**, one of them behind a stray zero width joiner. The fixture preserves both rather than cleaning them up, so the decision is taken with the real strings in front of it | Client |
| ~~**The image column is authored in the reference theme and hidden by that theme's own stylesheet**, so nobody has ever seen it on that site. Switch it on for real, or retire the part?~~ **ANSWERED: switched on.** It is a real editorial slot now, a picture with an optional label and link, drawn in the main example and carrying a different picture per brand | Answered |
| ~~**The theme authors two image blocks in one menu and this component allows one**, so the second column falls back to its links. Raise the allowance, or confirm one is the rule~~ **ANSWERED: the allowance is raised to two.** A panel carries one or two editorial cards, which is the number the theme was already asking for. A third is dropped, the way a sixth column is | Answered |
| ~~**An image column here replaces that column's links; on the reference site the banner sits above the column header and the links stay.** Drawing the banner where the site authors it therefore costs a real link~~ **ANSWERED, and it dissolved rather than being decided.** The editorial cards are lifted out to the rightmost column now, so the column a card was written in keeps its heading and its whole list. Nothing is displaced and no link is spent | Answered |
| ~~**A one-column dropdown and a four-column megamenu are two different objects on the reference site**, with different widths and different anchors: the narrow list starts inside the header, the wide panel starts below it. This component draws one object for both. Ratify the single panel, or draw the narrow list~~ **ANSWERED: draw both.** A menu of up to two columns hugs its content and opens as the flush popover under its own link; three or more columns keep the full-width panel. The choice is made from the content shape | Answered |
| **One sub-link leaves the domain with nothing marking it**, and it is authored exactly like its siblings. Does an external destination get an affordance? | Design / Client |
| **The page the visitor is on rests in the accent ink**, host-driven off the current marker. It shares that ink with the authored highlight link, and both are told apart from a hovered link by drawing: hover underlines, these two do not. Whether the current page needs a mark of its own beyond the shared ink, given the accent is doing three jobs, is the part still open | Design / Client |
| ~~**Should the megamenu be a panel with edges instead of one that spans the page?**~~ **ANSWERED: the header menu is flat and square.** Both panels, the hugging flush one and the full-width one, draw no border and no rounded corner; the raised shadow does the edge. This is deliberately not the rounded, hairlined card the Select and the Dropdown draw | Answered |
| ~~**Should a link hover as a colour change or as a rule that sweeps in under the label?** The criteria offers a colour change as its own example and that is what ships. The reference site does the other one. Both satisfy the requirement; only one of them is on screen~~ **ANSWERED: both.** Hover recolours the link and draws an accent underline under it, in the brand's accent, tweened in on the row's own motion. The underline stays while the link's panel is open | Answered |
| Which side the mobile panel opens from is not named in any criteria line. Drawer records the same gap | Design / DS team |
| **On a phone the open field keeps the logo beside it and draws about 100px of typing room.** Nothing overflows and the logo truncates to make the space, but a field that narrow is close to useless. Should the field take the whole bar below the tablet cut, with the logo stepping out while it is open? | Design |
`,spec:{elements:[{name:"Brand logo or wordmark",requirement:"required"},{name:"Primary link row",requirement:"required"},{name:"Megamenu",requirement:"conditional",condition:"When a link carries columns"},{name:"Utility cluster",requirement:"optional"},{name:"Search suggestions panel",requirement:"conditional",condition:"When the caller supplies panel rows"},{name:"Account and cart",requirement:"conditional",condition:"A later phase, not drawn by default"},{name:"Promo banner",requirement:"optional"},{name:"Currency selector",requirement:"conditional",condition:"When listed and given currencies"},{name:"Region selector",requirement:"conditional",condition:"When listed and given regions. No authored example in the library"},{name:"Hamburger and mobile panel",requirement:"conditional",condition:"Below desktop"}],authorability:[{name:"Logo artwork",rule:"Supplied per brand. A brand that supplies none draws its text wordmark in the same slot."},{name:"Link labels",rule:"Authored per site. The system sets no length limit and never truncates a label."},{name:"Link destination",rule:"Optional. A link authored without one becomes a button that only opens its panel."},{name:"Highlighted link",rule:"One per row. The highlight is authored and never moves to the page in view."},{name:"Megamenu columns",rule:"One to five per link, headerless columns first. A sixth is dropped rather than squeezed in."},{name:"Editorial column",rule:"Always furthest right. One or two cards, stacked. Picture from the brand unless named."},{name:"Column headings",rule:"Authored copy. A column may carry none, and none is derived from the page tree."},{name:"Utility cluster",rule:"Search, store locator, language and currency, each listed by the caller."},{name:"Language options",rule:"Authored per locale. A Canadian locale ships English by default plus French."},{name:"Currency options",rule:"Off unless the utility is listed and currencies are authored. Both, or nothing draws."},{name:"Currency rows here",rule:"A demonstration. The reference site publishes no currency selector to harvest."},{name:"Currency trigger",rule:"Fixed. The flag, the short code and the caret. A row carries the fuller name."},{name:"Region options",rule:"Same two conditions. The library authors none, so no page draws one."},{name:"Promo banner",rule:"One strip of authored copy above the bar, or none. Up to 60 characters including the link label."},{name:"Promo banner link",rule:"Optional destination and a short label. With both, the whole strip becomes one link."},{name:"Search field",rule:"Fixed. The field belongs to SearchBar, and this header only opens and closes it."}],variants:[{label:"Site header",props:{}}],statesMode:"linked",states:[{key:"full",name:"Every optional part on",story:"Flagship",annotation:"The full tree, with the promo banner and the whole utility cluster on."},{key:"quiet",name:"Required parts only",story:"Default",annotation:"Logo and links, nothing else. No banner, no search, no locator, no locale."},{key:"flat",name:"No panels",story:"Flagship",annotation:"Switch Megamenu off. Every link goes straight to its page and nothing opens."},{key:"column-cap",name:"Six columns authored",story:"Default",annotation:"Five render and the sixth is dropped, so the cap truncates rather than defaults."},{key:"image-block",name:"Panel with editorial cards",story:"Default",annotation:"The one or two editorial cards a panel may carry, in the column furthest right."},{key:"currency-off",name:"Currency off",story:"Flagship",annotation:"Switch Currency off and no selector is drawn at any width. That is what a header which never lists the utility gets."},{key:"currency-on",name:"Currency on",story:"Flagship",annotation:"The page default. Flag, short code and caret in the bar and in the drawer."},{key:"suggestions",name:"Search open, suggestions under it",story:"Default",annotation:"The panel under the live field, three groups capped at three rows each."}],render:K,interactions:["Hovering a link that carries columns opens its panel and recolours the link itself.","Arrow down opens the same panel from the keyboard and moves focus into it.","Escape closes an open panel and puts focus back where it was when the panel opened.","Clicking outside a panel closes it. Clicking a link, a sub-link or an icon navigates.","The search icon opens the field across the whole middle of the bar, in place of the link row.","The close icon beside the field returns the trigger to an icon and puts the link row back.","Typing opens the suggestions panel when the site supplies rows. An empty field closes it.","A locale menu with no room under its trigger opens above it, and is measured again on scroll.","Past 120px of scroll the bar hides, then re-anchors the moment the visitor scrolls back up.","Below 1230px there is no hover at all: the row collapses and a tap expands a link in place.","That 1230px is the ruler step above the width where the real ten labels would start to crop.","The link states themselves belong to the nav item atom and are drawn on its own page."],accessibility:[{label:"Landmarks",text:"The header is the banner landmark, and the bar link list and the mobile panel list are each a named navigation landmark."},{label:"Control names",text:"Every icon-only control carries its own accessible name: the hamburger, the search trigger, the store locator and each locale trigger."},{label:"Expanded state",text:"The hamburger, every link that opens a panel and every locale trigger publish whether they are open, so the state is announced."},{label:"Keyboard",text:"Arrow down opens a panel and moves focus into it, Tab walks its columns in reading order, and Escape closes it and returns focus."},{label:"Focus",text:"Every interactive part draws a visible focus ring, including links inside an open panel and options inside a locale menu."},{label:"Closed panels",text:"A closed panel is out of the tab order, so neither megamenu columns nor locale options can be reached while it is shut."},{label:"Motion",text:"The hide and re-anchor slide on scroll is suppressed when the visitor asks for reduced motion."},{label:"Target size",text:"Every control in the bar and in the mobile panel meets the minimum touch target, and a tap leaves no hover state behind."},{label:"The split section row",text:"A section row holds two separate controls, a link and a disclosure button, so it has two keyboard stops and each clears the target floor on its own."},{label:"Naming the disclosure",text:'Each section chevron carries a name built from the section it opens, so nine icon-only controls in one panel do not all announce as "button".'},{label:"Contrast",text:"Link ink, the accent link and the glyphs meet contrast against the header background in every brand theme."}],openItems:[{question:"Is the store locator a required part of the header, or an optional one?",owner:"Product"},{question:"Which icon route wins for sub-link text: a custom upload, a library glyph, or an emoji?",owner:"Product"},{question:"ANSWERED: the image column is switched on as an editorial slot, with the picture coming from the brand.",owner:"Product / Design"},{question:"ANSWERED: a panel carries one or two editorial cards, and a third is dropped.",owner:"Product"},{question:"ANSWERED: the cards move to the rightmost column, so the column they were written in keeps its links.",owner:"Design"},{question:"ANSWERED: draw both. A menu of up to two columns hugs its content and opens as the flush popover under its link; three or more columns keep the full-width band.",owner:"Design"},{question:"Does a link that leaves the domain get an affordance of its own?",owner:"Design / Product"},{question:"The page in view rests in the accent ink, host-driven. Whether it needs a mark beyond the shared accent ink is the part still open.",owner:"Design / Product"},{question:"ANSWERED: the header menu is flat and square, both panels, no border and no corner, edge from the raised shadow, not the Select's rounded card.",owner:"Design"},{question:"ANSWERED: both. Hover recolours the link and draws an accent underline, kept while the panel is open.",owner:"Design"},{question:"Which side does the mobile panel open from?",owner:"Design / DS team"},{question:"On a phone the open field draws about 100px of typing room. Should it take the whole bar, with the logo stepping out?",owner:"Design"}]}}}},d=_(M);function K({preset:e="full"}){const t=e==="quiet";return n.jsx("div",{style:{width:1100},children:n.jsx(l,{items:d,showMegamenu:e!=="flat",showAnnouncement:!t,showSearch:!t,showLocator:!t,showLanguage:!t,showCurrency:!t,sticky:!1,drawerSide:"right"})})}const s={name:"Sticky on scroll",args:{items:d,...p,sticky:!0,searchSuggestions:c},argTypes:u,render:e=>n.jsx(l,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"The header pinned to the top of a page long enough to scroll. Scroll down and the bar slips away after the first 120px; scroll up, even a little, and it comes back. Everything else is the Default story."}}}},i={name:"Default",args:{items:d,...p,searchSuggestions:c},argTypes:u,render:e=>n.jsx(l,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:`The full header tree: ten links in order, 64 sub-links under them, and real destinations. Nine links open a dropdown and "New" navigates directly. "Collections" and "Beauty Lab" carry no destination, so those two only open their panel. No link is highlighted and none is marked current: every item rests in one ink. The reference site draws its Beauty Lab link red; this library deliberately does not. Every in-scope optional slot is filled on top of that: a promo banner, and the utility cluster of search, store locator and language.

**Every part the header can draw is a control below**, with one exception. The account and the cart are a later phase, so this story draws neither and offers no control for them.

Two toolbars change what you are looking at without touching this story. **Brand** restyles the same content across every theme, tokens only, and the mark in the bar follows it: artwork is supplied per brand, so a brand with none keeps its text wordmark in the same slot. **Channel** switches the behavioural context, which is behaviour and never a token.

**Presets worth looking at.**

- **The widest panel.** Hover "Beauty Tools" for four columns, three under an authored heading and one a headerless stack. Escape closes it, and so does a click outside.
- **The longest panel.** Hover "Collections" for the three-column menu whose last column runs nine links deep, and for the two labels that carry an emoji inside the link text.
- **A hugging menu.** Hover "Face" or "Nails" for a single column, or "Blog" for two columns. Each opens the flat, square flush panel that hugs its content under its own link, rather than the full-width band. Up to two columns hug; three or more span.
- **Skip to the content.** Press Tab once with nothing focused. A "Skip to main content" button appears at the top left of the bar and jumps past the whole header, so a keyboard reaches the page without walking ten links and a megamenu.
- **Megamenu open, from the keyboard.** Tab to "Beauty Tools" and press the down arrow. The panel opens, focus moves into its first link, and Escape closes it and hands the keyboard back.
- **A small menu open.** Click *EN* in the utility cluster. The current option is the shaded row. Scroll the preview until the trigger is near the bottom of the frame and open it again: the menu opens upward instead, so it never covers the control it belongs to.
- **Mobile panel.** Narrow the preview below 1230px, or use the viewport toolbar, and tap the hamburger. Nine of the ten links become a tap-to-expand disclosure in place rather than a navigation, in the same order as the bar; "New" has no sub-links and navigates directly. Tapping anywhere on a section row opens it, and the sections with six or more links read down two columns instead of one long one. That is the reference site's own drawer, link for link.
- **Sticky on scroll.** Turn *Sticky on scroll* on. The preview grows tall enough to scroll, so scrolling down past 120px hides the bar briefly and it re-anchors immediately on the way back up.
- **No dropdowns.** Turn *Dropdown menus* off to see every link fall back to a plain, single-level link.

**The link states are on their own page**, at **Atoms → Nav item → All states**.`}}}},$=d.slice(0,5),h={name:"Inline header",args:{items:$,...p,headerLayout:"inline",searchSuggestions:c},argTypes:u,render:e=>n.jsx(l,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:`The single-tier bar: wordmark at the leading edge, the link row centred between it and the utilities, everything on one line.

**Five links is comfortable, six is the ceiling.** Measured at 1230px, where the desktop bar starts and the row is tightest: five links take 520px and clear the utilities by 73px. Six take 614px and clear them by 32px, which is the minimum gap itself, so six fits without breathing.

**Past six, the header is the two-tier one.** This is not a choice between two looks. Handed the full ten-item tree this bar asks for 1151px of row and is given 907px even on a 1440px screen, so the last links run underneath the utility cluster. The two-tier header exists to buy back the line that a wordmark and a set of tools take away.

**The rule is the measurement, not the number.** A brand whose words run longer than "BEAUTY TOOLS" reaches the wall sooner. Count the row at 1230px; if it does not clear, use the two-tier header.`}}}};var k,y,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Sticky on scroll',
  args: {
    items: NAV_ITEMS,
    ...NAV_DEFAULT_ARGS,
    sticky: true,
    searchSuggestions: SEARCH_SUGGESTIONS
  },
  argTypes: NAV_ARG_TYPES,
  render: args => <ConfigurableNavigation {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The header pinned to the top of a page long enough to scroll. Scroll down and the ' + 'bar slips away after the first 120px; scroll up, even a little, and it comes back. ' + 'Everything else is the Default story.'
      }
    }
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var T,S,x;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    items: NAV_ITEMS,
    ...NAV_DEFAULT_ARGS,
    searchSuggestions: SEARCH_SUGGESTIONS
  },
  argTypes: NAV_ARG_TYPES,
  render: args => <ConfigurableNavigation {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The full header tree: ten links in order, 64 sub-links under them, and real ' + 'destinations. Nine links open a dropdown and "New" navigates directly. ' + '"Collections" and "Beauty Lab" carry no destination, so those two only open their ' + 'panel. No link is highlighted and none is marked current: every item rests in one ' + 'ink. The reference site draws its Beauty Lab link red; this library deliberately ' + 'does not. Every in-scope optional slot ' + 'is filled on top of that: a promo banner, and the utility cluster of search, store ' + 'locator and language.\\n\\n' + '**Every part the header can draw is a control below**, with one exception. The ' + 'account and the cart are a later phase, so this story draws neither and offers ' + 'no control for them.\\n\\n' + 'Two toolbars change what you are looking at without touching this story. ' + '**Brand** restyles the same content across every theme, tokens only, and the mark ' + 'in the bar follows it: artwork is supplied per brand, so a brand with none keeps ' + 'its text wordmark in the same slot. **Channel** switches the behavioural context, ' + 'which is behaviour and never a token.\\n\\n' + '**Presets worth looking at.**\\n\\n' + '- **The widest panel.** Hover "Beauty Tools" for four columns, three under an ' + 'authored heading and one a headerless stack. Escape closes it, and so does a ' + 'click outside.\\n' + '- **The longest panel.** Hover "Collections" for the three-column menu whose last ' + 'column runs nine links deep, and for the two labels that carry an emoji inside the ' + 'link text.\\n' + '- **A hugging menu.** Hover "Face" or "Nails" for a single column, or "Blog" for two ' + 'columns. Each opens the flat, square flush panel that hugs its content under its own ' + 'link, rather than the full-width band. Up to two columns hug; three or more span.\\n' + '- **Skip to the content.** Press Tab once with nothing focused. A "Skip to main ' + 'content" button appears at the top left of the bar and jumps past the whole header, ' + 'so a keyboard reaches the page without walking ten links and a megamenu.\\n' + '- **Megamenu open, from the keyboard.** Tab to "Beauty Tools" and press the down ' + 'arrow. The panel opens, focus moves into its first link, and Escape closes it and ' + 'hands the keyboard back.\\n' + '- **A small menu open.** Click *EN* in the utility cluster. The current ' + 'option is the shaded row. Scroll the preview until the trigger is near the bottom ' + 'of the frame and open it again: the menu opens upward instead, so it never covers ' + 'the control it belongs to.\\n' + '- **Mobile panel.** Narrow the preview below 1230px, or use the viewport ' + 'toolbar, and tap the hamburger. Nine of the ten links become a tap-to-expand ' + 'disclosure in place rather than a navigation, in the same order as the bar; "New" ' + 'has no sub-links and navigates directly. Tapping anywhere on a section row opens ' + 'it, and the sections with six or more links read down two columns instead of one ' + 'long one. That is the reference site\\'s own drawer, link for link.\\n' + '- **Sticky on scroll.** Turn *Sticky on scroll* on. The preview grows tall ' + 'enough to scroll, so scrolling down past 120px hides the bar briefly and it ' + 're-anchors immediately on the way back up.\\n' + '- **No dropdowns.** Turn *Dropdown menus* off to see every link fall back to a ' + 'plain, single-level link.\\n\\n' + '**The link states are on their own page**, at **Atoms → Nav item → All states**.'
      }
    }
  }
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var A,E,N;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Inline header',
  args: {
    items: INLINE_ITEMS,
    ...NAV_DEFAULT_ARGS,
    headerLayout: 'inline',
    searchSuggestions: SEARCH_SUGGESTIONS
  },
  argTypes: NAV_ARG_TYPES,
  render: args => <ConfigurableNavigation {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The single-tier bar: wordmark at the leading edge, the link row centred between it ' + 'and the utilities, everything on one line.\\n\\n' + '**Five links is comfortable, six is the ceiling.** Measured at 1230px, where the ' + 'desktop bar starts and the row is tightest: five links take 520px and clear the ' + 'utilities by 73px. Six take 614px and clear them by 32px, which is the minimum gap ' + 'itself, so six fits without breathing.\\n\\n' + '**Past six, the header is the two-tier one.** This is not a choice between two looks. ' + 'Handed the full ten-item tree this bar asks for 1151px of row and is given 907px even ' + 'on a 1440px screen, so the last links run underneath the utility cluster. The ' + 'two-tier header exists to buy back the line that a wordmark and a set of tools take ' + 'away.\\n\\n' + '**The rule is the measurement, not the number.** A brand whose words run longer than ' + '"BEAUTY TOOLS" reaches the wall sooner. Count the row at 1230px; if it does not ' + 'clear, use the two-tier header.'
      }
    }
  }
}`,...(N=(E=h.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const fe=["Sticky","Flagship","Inline"];export{i as Flagship,h as Inline,s as Sticky,fe as __namedExportsOrder,be as default};
