import{j as o}from"./iframe-6dx3hp_4.js";import{D as c,F as d,L as n,a as b,b as y}from"./Footer-BfocwZBN.js";import{a as k}from"./annotationPage-eYx--AWZ.js";import{u as v}from"./BrandWordmark-CszUK9Mj.js";import{G as T}from"./Homepage-BCdkFher.js";import{d as s,a,c as L,D as S}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./IconButton-Btgg2ITq.js";import"./newTabMark-TI50-QeA.js";import"./NavItem-Dq6-KykK.js";import"./Icon-BihOhSWB.js";import"./SearchBar-DwGR_hzY.js";import"./SearchSuggestions-CAczFYXo.js";import"./Placeholder-Ed4iQRc7.js";import"./MenuItem-bBgP9Lwo.js";import"./Button-CiZyClsp.js";import"./Loading-DyIAIYoE.js";/* empty css               */import"./Drawer-CypulVuT.js";import"./useScrollLock-B-psvS0l.js";import"./Popover-BGxFbLtI.js";import"./popoverPlacement-CK5qQ-ie.js";import"./MediaFrame-CgpnOU1q.js";import"./Hero-BHurgzVJ.js";import"./ContentCard-Cy_xF-W9.js";import"./ProductCard-1ftwzkvg.js";import"./Badge-gItHl2ZN.js";import"./Select-DBrm7KPu.js";import"./FieldRequirement-Dn5H0DsY.js";import"./Price-xMe2P_eJ.js";import"./StarRating-BT40pja7.js";import"./SwatchCarousel-BPc8GOsx.js";import"./Swatch-H9rl2Pji.js";import"./Tooltip-DIsL9-Da.js";import"./shadeGroup-Blqfx0Bo.js";import"./NewsletterSection-3il-1Xyd.js";import"./Checkbox-C5uneDTR.js";import"./ControlIndicator-DEJX7FyE.js";import"./Input-3DsPWvNA.js";import"./Link-yk_PIpvX.js";const D=[{value:"en-us",label:"English (US)",href:"#"},{value:"en-ca",label:"English (CA)",href:"#"},{value:"fr-ca",label:"Français (CA)",href:"#"}],E={variant:{...a(n[0].label),name:"Logo placement",...s({labels:Object.fromEntries(n.map(e=>[e.value,e.label])),options:n.map(e=>e.value)}),description:"Where the brand mark sits. Both placements are in the criteria, and this is the only thing that changes between them."},columnCount:{...a("Five"),name:"Link columns",...S({labels:{2:"Two",3:"Three",4:"Four (the reviewed frames)",5:"Five (the most complex layout)"},options:[2,3,4,5]}),description:"How many link lists the footer is given. Five is the maximum, and how many draw side by side is whatever the width fits."},showSocialLinks:{...L("On"),name:"Social links",description:"Show the social row. The only optional part in the whole anatomy list."},localeList:{...a("Default (5 regions)"),name:"Locale list",...s({labels:{default:"Default (5 regions)",compact:"Compact (3 regions, brand example)",global:"Global Sites (13 regions, the shipped list)"},options:["default","compact","global"]}),description:"Swap the locale set the drop-down lists. The list always arrives as data, and this control proves it by rendering differently-shaped ones. **Global Sites is the real revlon.com list**, and it is the setting that shows the panel SCROLL: the cap holds six whole rows, so the list scrolls at seven and the panel edge still lands between rows rather than through one."},columns:{control:!1,table:{disable:!0}},legalLinks:{control:!1,table:{disable:!0}},socialLinks:{control:!1,table:{disable:!0}},locales:{control:!1,table:{disable:!0}},wordmark:{control:!1,table:{disable:!0}},logo:{control:!1,table:{disable:!0}},globalSitesLabel:{control:!1,table:{disable:!0}},legalLinksLabel:{control:!1,table:{disable:!0}},socialLinksLabel:{control:!1,table:{disable:!0}},copyright:{control:!1,table:{disable:!0}}},A={variant:"wordmark",columnCount:5,legalLinks:c,showSocialLinks:!0,localeList:"default"};function m({variant:e,columnCount:p,showSocialLinks:u,localeList:i,...g}){const{footerLogo:f,wordmark:w}=v();return o.jsx(d,{...g,variant:e,columns:y.slice(0,p),socialLinks:u?b:[],locales:i==="compact"?D:i==="global"?T:void 0,logo:f,wordmark:w})}const ge={title:"Organisms/Footer",component:d,tags:["autodocs"],argTypes:{headingLevel:{control:!1,table:{disable:!0}}},parameters:{layout:"fullscreen",themeShellPadding:!1,docs:{page:k("Footer"),toc:{headingSelector:"h2"},description:{component:"The band at the bottom of every page. It gives a shopper a way to reach any page on the site, including secondary and legal pages, plus the brand's social channels and a way to switch region."}},componentDoc:{usage:`
## When to use

- ✅ **At the bottom of every page**, on every template.
- ✅ **To reach anything on the site from anywhere**, secondary pages and legal pages included.
- ✅ **For the brand's social channels.** They are the only optional part of the whole footer.
- ✅ **To switch region**, through the locale selector, which stays available at every
  breakpoint.

- ❌ **Email capture.** If a page needs it, place the subscription form beside the footer, never
  inside it.
- ❌ **Primary navigation.** That is **Navigation**, at the top of the page.
- ❌ **Moving around inside one page.** That is **Anchor links**.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Brand logo** | **required** | Spanning the band under the columns, or heading the grid in one column. Set **Logo placement** |
| **Link columns** | **required**, up to five | They carry access to every page on the site, secondary and legal pages included |
| **Legal links** | **required** | |
| **Copyright line** | **required** | |
| **Social links** | optional, **the only optional part in the whole footer** | |
| **Locale selector**, a closed trigger that opens a menu | **required** | The trigger and its menu are one part, not two |

- **Five columns is the ceiling, not the count.** The grid follows the list it is given: pass
  two and it draws two, pass five and it draws five. Anything beyond the fifth is not drawn.
- **The screen decides how many sit side by side.** The footer lays as many link columns as the
  width has room for, and the rest wrap onto the next row. There is no fixed step per device.
- **Tokens own the look.** Spacing, type and colour, so the same footer re-themes across all 21
  brands without a value being restated here.
- **The caller owns the content.** The link columns, the legal copy, the social platforms and
  the locale list all arrive as data, never hard-coded inside the component.
- **The brand mark is the brand's own art**, supplied per brand. A brand with no asset falls
  back to its name set as a lockup, which is a floor rather than a design.
- **Four bands, in this order, at every breakpoint.** The link columns; then the legal links
  with the social icons on the same line; then the locale trigger with the copyright line; then
  the brand mark, if this is the layout that spans. On a phone each of the middle two bands
  becomes a stack, and the locale trigger and the copyright centre themselves.

### Variants

**Two placements, and the only thing that moves is the brand mark.** Set **Logo placement** in
the controls to switch between them. Everything else is identical: the same required parts, in
the same four bands, in the same order.

- **Spanning the columns.** The mark runs the whole width of the band, under the columns. It is
  the criteria's default state, and what the reviewed frames draw at all three breakpoints.
- **In one column.** The mark heads the grid at the width of a single column, with the link
  columns beside it. This is the criteria's own "Footer / Logo" variant.
`,guidance:`
## Behaviors

### States

- **Default, and it is the only one.** There is no empty state and no loading state for the
  footer.
- **Locale selector, closed.** A real button, labelled "Global Sites" unless the caller passes
  its own, with a caret beside it.
- **Locale selector, open.** The trigger opens a menu of regions and says it is open. Escape
  closes it, a click anywhere else closes it, and focus goes back to the trigger.
- **Link, resting.** One step down from the full ink, in a muted colour of its own. It is a
  token, not a fade.
- **Link, hover.** The ink steps back up to full. A real colour change, and it never switches an
  underline on at the same time.
- **Hover on a social icon.** The disc lights up behind the glyph. The chip is the library's
  icon-only control, so the hover, the pressed state and the focus ring are the same ones every
  other icon-only control in the system draws.
- **Hover on the locale trigger.** The trigger is the drop-down component's ghost select, with
  no box of its own, so its hover, pressed and focus states are that component's, drawn here in
  their inverse-plane colours.

### Interactions

- **Every link navigates.** Each one is a real link, so a click goes to that page.
- **A social icon opens that platform in a new browser tab.**
- **The locale trigger opens the region menu, and choosing a region loads that regional site.**
  The rows are real links, not form values.
- **A region name is never cut short.** The menu is as wide as its longest region, so a long
  name reads in full instead of ending in three dots.
- **A long region list scrolls inside the menu, and it never cuts a row in half.** The menu
  opens six whole rows tall and scrolls from the seventh, so its bottom edge always lands
  between two regions rather than through one. A list of six or fewer opens whole, with no
  scrollbar at all, which is what the default five do. When it does scroll, the scrollbar is
  the thin one in a quiet grey rather than the browser's own chunky default. Switch **Locale
  list** to Global Sites to see it.
- **The columns fit the width.** The footer draws as many link columns side by side as the
  screen has room for, and the rest wrap. A wide screen holds five, a tablet holds four, a phone
  holds two as a 2x2 grid. No breakpoint fixes the number.
- **Two footers on one page never cross wires.** Each trigger points at its own menu, which the
  gallery relies on because it renders more than one.
- **The footer sits at the bottom of the page**, short pages included. That is the page shell's
  job as much as the footer's, and it is carried in Open items.

## Rules

- ❌ **Don't** put an email-capture or newsletter form in the footer.
- ✅ **Do** place the subscription form next to the footer instead.

- ✅ **Do** keep the link columns to five or fewer. The sixth is not drawn.
- ❌ **Don't** hide the locale selector at any breakpoint. The same functionality is required on
  mobile.
- ❌ **Don't** hard-code a locale list. It depends on the brand, so it always arrives as data.

- ✅ **Do** open social links in a new tab.
- ❌ **Don't** open an in-site or a legal link in a new tab.
- ✅ **Do** give an icon-only social link a name of its own. The glyph alone says nothing to
  someone who cannot see it.

- ❌ **Don't** signal a link hover with a fade, or by switching an underline on. Step the ink
  instead.
- ❌ **Don't** treat the spanning lockup as a second logo. It is the brand mark for that layout,
  it is decorative in the markup, and the accessible brand name is carried by the copyright line.

### Content rules

- ✅ **Do** cover every page on the site in the link columns, secondary and legal pages included.
- ✅ **Do** let the locale list follow the brand. Which regions appear depends on the brand.
- ❌ **Don't** invent character limits for locale names or legal-link labels. They are design's
  call, and no number exists yet.

## Open items

| Question | Owner |
|---|---|
| The requirements say this component has three variants, and only one of them is written down. Are two missing, or is the count wrong? | Client / Design |
| The footer has to sit at the bottom on every template, including short pages that do not fill the screen. That is composition, not something the footer alone can promise | Design / Eng |
| Figma draws no hover states: links, the locale trigger and social all step per their atoms (Link, Dropdown ghost, IconButton). Draw them, or ratify the atoms | Design |
| Is the locale list correct for each brand? | Brand owners |
| Character limits for locale names and legal-link labels | Design |
| The band hairlines now read \`border.control-inverse\`, the nearest **inverse-plane** role available, but it is the *control* role standing in for a divider. Mint \`border.divider-inverse\` if the borrowing should not be permanent | Design / DS |
| Nothing in Figma draws the **in-column logo** placement, which the criteria ratifies and this page documents. Draw a reference frame for it, or confirm the spanning one is the only drawn state | Design |
`,spec:{elements:[{name:"Brand logo",requirement:"required",condition:"Spans the band under the columns, or heads the grid in one column."},{name:"Link columns",requirement:"required",condition:"Up to five. As many sit side by side as the width fits."},{name:"Legal links",requirement:"required",condition:"On their own line under the columns, with the social icons at its far end."},{name:"Copyright line",requirement:"required",condition:"Carries the accessible brand name, since the spanning lockup is decorative."},{name:"Locale selector",requirement:"required",condition:"A trigger and the menu it opens, present at every breakpoint."},{name:"Social links",requirement:"optional"},{name:"Column heading",requirement:"optional"}],authorability:[{name:"Link columns",rule:"The author supplies up to five columns of links, in order. A sixth is not drawn."},{name:"Column heading",rule:"Free text on any column, and it can be left out."},{name:"Legal links",rule:"The author supplies the labels and destinations. No character limit is set yet."},{name:"Social links",rule:"Optional. The author picks the platforms, and each icon gets a name of its own."},{name:"Locale list",rule:"Arrives as data and follows the brand. It is never hard-coded and never hidden."},{name:"Copyright line",rule:"Fixed by the system, and it is what carries the brand name."},{name:"Brand logo",rule:"Fixed by the brand theme. A brand with no asset falls back to its name in type."},{name:"Logo placement",rule:"Spanning the band or in one column, chosen when the page is built."},{name:"Column layout",rule:"Fixed by the system: as many columns draw as the width fits, at any width."},{name:"Newsletter form",rule:"Not a footer part. A subscription form sits beside the footer, never inside it."}],variants:[{label:"Logo spanning the columns",props:{variant:"wordmark"}},{label:"Logo in one column",props:{variant:"logo"}}],statesMode:"linked",states:[{key:"wordmark",name:"Logo spanning the columns",story:"Default",annotation:"The lockup runs the width of the band under the columns, decorative in the markup."},{key:"logo-column",name:"Logo in one column",story:"Default",annotation:"Set Logo placement to In one column: the mark heads the grid instead of spanning the band."},{key:"another-brand",name:"Another brand, same layout",story:"Default",annotation:"Switch brand in the toolbar: tokens only. A brand with no asset sets its name instead."},{key:"quiet",name:"Social links off",story:"Default",annotation:"Turn Social links off. It is the one optional part; everything else here is required."},{key:"locales",name:"Locales vary by brand",story:"Default",annotation:"Set Locale list to Compact: the region list arrives as data, never hard coded."}],render:x,interactions:["Every link is a real link, so a click goes to that page.","A social icon opens that platform in a new browser tab.","The locale trigger opens the region menu, and choosing a region loads that regional site.","The menu is as wide as its longest region, so a long name reads in full.","Escape closes the menu, a click outside closes it, and focus returns to the trigger.","The footer draws as many link columns as fit: five on a wide screen, four on a tablet, two on a phone.","A link hover steps the ink. It never fades, and it never switches an underline on."],accessibility:[{label:"Keyboard",text:"Tab runs the link columns, then social, then the locale trigger, then the legal links, and skips the lockup."},{label:"Screen reader",text:"Every icon-only social link carries its own name, and the locale menu announces itself and its rows."},{label:"Locale menu",text:"Escape closes it and focus returns to the trigger. Its rows are real links, because each one loads a regional site."},{label:"Focus",text:"Every control keeps a visible focus ring, and the ring reads against the dark band on every brand."},{label:"Contrast",text:"Link ink, the copyright line and the menu rows hold 4.5:1, and the social glyphs hold 3:1, on the inverse ground."},{label:"Target size",text:"Social icons and the locale trigger keep a target of at least 44px in each direction."},{label:"Long content",text:"A long locale name or legal label wraps rather than truncating, including in one column at 390px."}],openItems:[{question:"Three footer variants are counted and one is documented. Are two missing, or is the count wrong?",owner:"Design"},{question:"Which layer guarantees the footer sits at the bottom of a short page? The footer alone cannot promise it.",owner:"Design / Engineering"},{question:"Figma draws no hover states: links, the locale trigger and social all step per their atoms. Draw them, or ratify the atoms?",owner:"Design"},{question:"Is the locale list correct for each brand?",owner:"Product"},{question:"Character limits for locale names and legal-link labels.",owner:"Design"},{question:"The band hairlines read the inverse control border role, standing in for a divider. Mint a divider role, or keep the borrowing?",owner:"Design / DS team"},{question:"Nothing in Figma draws the in-column logo placement the criteria ratifies. Draw a reference frame, or confirm the spanning one is it.",owner:"Design"}]}}}};function x({variant:e="wordmark"}){return o.jsx("div",{style:{width:560},children:o.jsx(m,{variant:e,columnCount:3,legalLinks:c,showSocialLinks:!0,localeList:"default"})})}const t={name:"Default",args:A,argTypes:E,render:e=>o.jsx(m,{...e}),parameters:{controls:{sort:"alpha"},docs:{description:{story:`The default state, at the most complex layout: **five link columns**, the brand mark spanning the band beneath them, the social row, the locale selector, the legal links and the copyright line.

**Everything that can be changed is a control below.** Move **Logo placement** to put the mark in one column instead, take **Link columns** down to two to watch the grid follow the data, turn **Social links** off to prove the only optional part in the anatomy table, or switch **Locale list** to a differently-shaped set of regions.

**Resize the window to see the columns refit.** The count is whatever the width holds, not a step per device.`}}}};var r,l,h;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Default',
  args: FOOTER_DEFAULT_ARGS,
  argTypes: FOOTER_ARG_TYPES,
  render: args => <ConfigurableFooter {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The default state, at the most complex layout: **five link columns**, the brand mark ' + 'spanning the band beneath them, the social row, the locale selector, the legal links ' + 'and the copyright line.\\n\\n' + '**Everything that can be changed is a control below.** Move **Logo placement** to put ' + 'the mark in one column instead, take **Link columns** down to two to watch the grid ' + 'follow the data, turn **Social links** off to prove the only optional part in the ' + 'anatomy table, or switch **Locale list** to a differently-shaped set of regions.\\n\\n' + '**Resize the window to see the columns refit.** The count is whatever the width ' + 'holds, not a step per device.'
      }
    }
  }
}`,...(h=(l=t.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const fe=["Default"];export{t as Default,fe as __namedExportsOrder,ge as default};
