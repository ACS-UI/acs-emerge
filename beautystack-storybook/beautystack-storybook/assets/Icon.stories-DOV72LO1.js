import{j as e,r as E}from"./iframe-6dx3hp_4.js";import{a as v,I as u,b as M,c as h,d as Z}from"./Icon-BihOhSWB.js";import{a as H}from"./annotationPage-eYx--AWZ.js";import{D as I,a as z}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";const p="var(--docs-font-sans, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif)",s="ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace",l="#27272a",d="#5e5e65",U="#e4e4e7",L="#f1f1f3",$="#1f5ea8",V=t=>{var a;return((a=t.match(/--[\w-]+/))==null?void 0:a[0])??null},b=Object.entries(Z).map(([t,a])=>({rung:t,ref:a,cssVar:V(a)}));function Y(){const[t,a]=E.useState({brand:null,px:{}});return E.useEffect(()=>{const n=document.documentElement;let r=null,o=!1;const i=()=>{if(o)return;const P=getComputedStyle(n),x={};for(const{rung:B,cssVar:T}of b)T&&(x[B]=P.getPropertyValue(T).trim());const k=n.getAttribute("data-brand"),S=`${k} ${JSON.stringify(x)}`;S!==r&&(r=S,a({brand:k,px:x}))};i();const c=requestAnimationFrame(i),w=setTimeout(i,300),g=new MutationObserver(i);return g.observe(n,{attributes:!0,attributeFilter:["data-brand"]}),()=>{o=!0,cancelAnimationFrame(c),clearTimeout(w),g.disconnect()}},[]),t}const K={display:"flex",flexWrap:"wrap",alignItems:"center",gap:16,padding:"12px 16px",border:`1px solid ${U}`,borderRadius:8,background:"#fafafa",fontFamily:p,margin:"0 0 20px"},X={display:"inline-flex",alignItems:"baseline",gap:6,fontSize:13,color:l},J={display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(104px, 100%), 1fr))",maxWidth:900,gap:12},Q={display:"flex",flexDirection:"column",gap:8,fontFamily:p},ee={aspectRatio:"1 / 1",display:"flex",alignItems:"center",justifyContent:"center",background:L,borderRadius:10,color:l},te={fontFamily:s,fontSize:11.5,fontWeight:600,color:l,overflowWrap:"break-word"},ne={display:"flex",gap:12,alignItems:"flex-start",flexWrap:"wrap"},ae={display:"flex",flexDirection:"column",gap:8,width:56},oe={aspectRatio:"1 / 1",display:"flex",alignItems:"center",justifyContent:"center",background:L,borderRadius:10,color:l},se="#a1a1aa",re=t=>({width:t,height:t,display:"flex",alignItems:"center",justifyContent:"center",background:"#fff",outline:`1px dashed ${se}`,outlineOffset:0}),W={fontSize:11,fontFamily:s,color:d,textAlign:"center"},ie={...W,color:l,fontWeight:700},le={fontSize:11.5,color:d,fontFamily:p,marginTop:10},he={fontSize:11.5,color:d,fontFamily:p,lineHeight:1.5,margin:"12px 0 0",maxWidth:"70ch"},de={display:"flex",flexDirection:"column",alignItems:"center",gap:1},ce={fontSize:12.5,fontFamily:s,fontWeight:700,color:l,textAlign:"center",lineHeight:"16px",minHeight:16},pe={fontSize:11.5,color:d,fontFamily:p,lineHeight:1.4},ge={fontSize:11.5,color:d,fontFamily:p,lineHeight:1.5,margin:"16px 0 0",maxWidth:"70ch"};function ue({name:t}){return h[t]?e.jsxs("div",{style:Q,children:[e.jsx("div",{style:ee,children:e.jsx(u,{name:t,style:{width:24,height:24,color:l,"--icon-stroke-scale":M.lg}})}),e.jsx("code",{style:te,children:t})]}):null}function ye(){const t=Object.keys(h).filter(n=>h[n].size==null),a=Object.keys(h).filter(n=>h[n].shapes&&!Array.isArray(h[n].shapes));return!t.length&&!a.length?null:e.jsxs("div",{style:{...pe,marginTop:16,maxWidth:"70ch"},children:[t.length?e.jsxs("p",{style:{margin:"0 0 6px",color:"#B3261E"},children:["REGRESSION: these entries declare no default size, which renders a 0 x 24px sliver wherever no host CSS rescues them:"," ",t.map((n,r)=>e.jsxs("code",{style:{fontFamily:s},children:[r?", ":"",n]},n)),". Every glyph declares a default size, and 24px is the fallback."]}):null,a.length?e.jsxs("p",{style:{margin:0,color:"#B3261E"},children:["REGRESSION: these entries hold more than one drawing, which nothing can select between, because ",e.jsx("code",{style:{fontFamily:s},children:"direction"})," and"," ",e.jsx("code",{style:{fontFamily:s},children:"state"})," are retired:"," ",a.map((n,r)=>e.jsxs("code",{style:{fontFamily:s},children:[r?", ":"",n]},n)),"."]}):null]})}function G({name:t="camera"}){const{brand:a,px:n}=Y(),r=h[t];return r?e.jsxs("div",{children:[e.jsxs("div",{style:K,children:[e.jsxs("span",{style:{fontSize:11,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase",color:d},children:["Size scale",a?`, live on ${a}`:""]}),b.map(({rung:o,ref:i,cssVar:c})=>e.jsxs("span",{style:X,children:[e.jsx("code",{style:{fontFamily:s,fontSize:12,fontWeight:700},children:o}),e.jsx("code",{style:{fontFamily:s,fontSize:11.5,color:d},children:c||i}),n[o]?e.jsx("span",{style:{color:$,fontFamily:s,fontSize:11.5},children:n[o]}):null]},o))]}),e.jsx("div",{style:ne,children:b.map(({rung:o,ref:i})=>{const c=r.size===o,w=n[o]?n[o].replace("px",""):"",g=n[o]?`${o} = ${n[o]}`:o;return e.jsxs("div",{style:ae,children:[e.jsx("div",{style:oe,children:e.jsx("div",{style:re(i),children:e.jsx(u,{name:t,size:o,style:{color:l}})})}),e.jsxs("span",{style:de,children:[e.jsx("span",{style:ce,title:g,children:w}),e.jsxs("span",{style:c?ie:W,title:g,children:[o,c?" •":""]})]})]},o)})}),e.jsx("p",{style:he,children:"The dashed square is the box the rung writes, drawn at exactly that size, with the glyph centred inside it. The tile around it is the same 56px square for every rung, so the only thing that changes across the row is the box itself."}),e.jsxs("p",{style:le,children:[e.jsx("code",{style:{fontFamily:s},children:t})," defaults to"," ",e.jsx("code",{style:{fontFamily:s},children:r.size}),n[r.size]?` (${n[r.size]})`:"",", the rung marked •. Every glyph in the registry declares one, so ",e.jsx("code",{style:{fontFamily:s},children:'<Icon name="…" />'})," with no ",e.jsx("code",{style:{fontFamily:s},children:"size"})," always draws a box. A host whose own CSS owns the box passes"," ",e.jsx("code",{style:{fontFamily:s},children:"size={null}"})," to say so."]})]}):null}function q(){return e.jsxs("div",{children:[e.jsx("div",{style:J,children:v.map(t=>e.jsx(ue,{name:t},t))}),e.jsxs("p",{style:ge,children:["Every tile above seats its glyph in the same 24px box, the"," ",e.jsx("code",{style:{fontFamily:s},children:"lg"})," rung, so the grid compares drawings and not sizes. The four rungs, each in a dashed square of its own size with the pixel box under it, are in the ",e.jsx("strong",{children:"Sizes"})," demo on this page."]}),e.jsx(ye,{})]})}G.__docgenInfo={description:"The rung marked with a bullet is the chosen glyph's own registered default, the rung it\nresolves to when `size` is left unset. Every other glyph in the registry resolves the same\nway, off the same rungs; this is the one demonstration of that mechanism, not forty.",methods:[],displayName:"IconSizeScale",props:{name:{defaultValue:{value:"'camera'",computed:!1},required:!1}}};q.__docgenInfo={description:"",methods:[],displayName:"IconGallery"};const me={display:"flex",alignItems:"center",justifyContent:"center",width:160,height:160,background:"var(--color-bg-surface, #f7f7f7)",border:"1px solid var(--color-border, #e4e4e4)",borderRadius:"var(--radius-card, 8px)",color:"var(--color-text-primary)"},fe=t=>t.split("-").map((n,r)=>r===0?n[0].toUpperCase()+n.slice(1):n).join(" "),we=Object.fromEntries(v.map(t=>[t,fe(t)])),xe={auto:"Auto (glyph default)",sm:"Small, 16px",md:"Medium, 20px",lg:"Large, 24px",xl:"Extra large, 28px"},be={name:{...z("Camera"),name:"Glyph",...I({labels:we,options:v}),description:"Which registered shape to draw. This is the registry key shown on every card in the gallery below."},size:{...z("Auto (glyph default)"),name:"Size",...I({labels:xe,options:["auto","sm","md","lg","xl"]}),description:"Which rung of the four-step scale to draw at. Auto leaves the prop unset, so the glyph falls back to its own registered default, the size its majority real call site already renders at."},className:{control:!1,table:{disable:!0}},style:{control:!1,table:{disable:!0}}},ve={name:"camera",size:"auto"};function ke({name:t,size:a}){const n=a==="auto"?void 0:a;return e.jsx("div",{style:me,children:e.jsx(u,{name:t,size:n,style:{width:n?void 0:40,height:n?void 0:40,"--icon-stroke-scale":n?void 0:"calc(24 / 40)"}})})}const Ce={title:"Atoms/Icon",component:u,tags:["autodocs"],parameters:{docs:{page:H("Icon"),toc:{headingSelector:"h2"},description:{component:"The library's glyph registry, plus the one component that draws any entry in it. Give it a registered name and it returns an `<svg>` that takes its ink from whatever paints the element around it."}},componentDoc:{usage:`
## When to use

- ✅ **Any glyph in the library.** Every shape a component draws comes from this one registry.
- ✅ **Decoration beside a label**, in a heading, a link, a button or a caption. The words carry the
  meaning; the glyph supports them.
- ✅ **A social logo in the footer.** Six official brand marks are registered.

- ❌ **An icon-only control.** The box, the hit target and the accessible name belong to **Icon
  button**. Icon only fills its slot.
- ❌ **A shape nobody has registered.** There is no free-form path prop, so a new shape is a new
  registry entry first.
- ❌ **A photograph, an illustration or a product shot.** Those go in **MediaFrame**.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Root**, the \`<svg>\` | required | Its \`viewBox\` comes straight off the registry entry. Nothing about it is authored per call site |
| **Shape**, one or more drawn elements | required | Parsed from the entry's own vendored artwork. Every entry holds exactly one drawing, and its name is that drawing's own name |

- **Tokens own the weight and the scale.** The stroke width is one token; the four size rungs are core size
  tokens.
- **The parent owns the colour.** Every shape strokes with \`currentColor\` and fills with nothing, so ink is
  always inherited. There is no \`color\` prop.
- **The caller owns one thing: the name.** An unknown name renders nothing rather than throwing, so a typo in a
  footer link cannot blank the page it sits on.

**Forty-two glyphs are registered: thirty-six icons and six brand marks.** The artwork is
[Lucide](https://lucide.dev/icons/), vendored from a version-pinned package, ISC licensed, drawn on a 24 grid
with round caps and joins. The six social logos come from [simple-icons](https://simpleicons.org/) instead,
version-pinned the same way, CC0-1.0 licensed, and each one is the **official mark** rather than a drawing of
it. **CC0 covers the package, not the marks: every logo stays its owner's trademark, and using one follows that
brand's own guidelines.**

The six marks are **filled**, where the other thirty-six are strokes, because that is how those brands
publish them. The fill rides \`currentColor\` exactly as the stroke does, so a footer re-inks all six with no
prop.

**The plus and the minus are drawings too**, not typed characters, so the quantity stepper's own signs paint
the same line every other glyph does instead of whatever bar the brand's face happens to draw.

**One shape, one name, and the name is the shape's own.** Every key in the registry is the icon's canonical
name in the package it comes from: \`check\`, \`x\`, \`circle-check\`, \`map-pin\`, \`shopping-cart\`,
\`sliders-horizontal\`. No key describes a job, a component or a place: there is no per-component spelling of a
chevron, and no per-meaning one either.

**Where a meaning maps to a picture, the component holds the map.** A callout decides that "success" is drawn as
a circled tick; the icon set only knows it ships \`circle-check\`. So a component that maps a meaning to a
picture keeps a small local table from its own kinds and roles to glyph names, beside the states it serves.

**All four directions, for both arrow families.** \`chevron-up\`, \`chevron-down\`, \`chevron-left\`,
\`chevron-right\`, \`arrow-up\`, \`arrow-down\`, \`arrow-left\`, \`arrow-right\`. Two of the eight, \`arrow-up\` and
\`arrow-down\`, still have no call site and are registered anyway, because a set that is missing a side pushes
the next author into typing a character, which is how a back arrow ends up shipping as "←". Five
of the eight were registered with no host at all, and three of those five have since found one,
which is the argument for registering a side before anybody asks for it.

Every vendored drawing is compared **byte for byte** against the pinned package, so "is this
still the same chevron?" has an answer rather than a convention.

### The line is 2px in every box

Every glyph paints a **2px line at every size**: 16, 20, 24 or 28, the weight on the page is the same. The
width comes from one token, so a thinner set is one alias rather than a pass over forty glyphs, and no call
site can opt out of it.

**How it is done.**
The artwork is drawn on a 24 grid, so a stroke declared in that grid is painted at *box / 24* of its declared
width. The component compensates for exactly that: it multiplies the token by *24 / box*, so 3px declared in a
16px box, 2.4px in a 20px box and 1.71px in a 28px box all land on 2px painted. Under zoom the line scales with
the drawing, the way every other thing on the page does, and the way the same icon behaves in Figma.

**Why not \`vector-effect: non-scaling-stroke\`.** That property pins a stroke to screen pixels under every
transform, and it does not survive a cross-renderer check. Measured on one page across three renderers: Figma
painted 2 CSS px, Chromium at a device pixel ratio of 2 painted 2 CSS px, and Brave on a retina display painted
1. It also freezes the line while the glyph grows, so zooming in to inspect an icon shows a hairline.

The intended consequence, so nobody tunes it away: an equal line makes the ink read **relatively heavier at
16px and relatively lighter at 28px**. That is what an equal line weight means, and it is what makes a page of
icons read as one hand.

**If a host owns the glyph's box, it owes the ratio.** Passing \`size={null}\` hands the box to the host's CSS,
and the component then has no idea what size it is being drawn at, so the host declares \`--icon-stroke-scale\`
next to the width it sets. Icon buttons already do this on every rung. Left undeclared, a glyph is compensated
for a 24px box, which is correct only if that is the box.

### Variants

**There is no style variant.** Icon takes one content prop, \`name\`, and one scale prop, \`size\`. That is the
whole surface. No \`tone\`, \`variant\`, \`color\`, \`weight\`, \`fill\` or \`strokeWidth\` prop exists, and each
absence is enforced in code.

There is no \`direction\` prop and no \`state\` prop. Either would pick a drawing out of an entry that
holds more than one, which only makes sense while entries are named after a job rather than a drawing.
\`direction="prev"\` is \`name="chevron-left"\`, and \`state="off"\` is \`name="volume-x"\`: the same drawing,
said in the one place a reader already looks.

\`strokeWidth\` is the sharpest of those absences. The weight is one system-wide decision held by one token, and
exposing it per call site would let a single button opt out of it.

**Four size rungs, plus unset.** \`sm\` 16px, \`md\` 20px, \`lg\` 24px, \`xl\` 28px. Sixteen is the smallest, and
nothing sits under it: a chevron drawn at 8px is 4 by 6px of ink and nothing in the library asks for one.
Leave \`size\` out and
the glyph falls back to its own registered default, which is the size its majority real call site already
renders at. Passing \`null\` emits no width or height at all, which hands the box to the host's own CSS.

**A rung has to be earned**, by call sites that already agree on the box or by a size the reference brand's own
site draws. \`xl\` arrived that way. A 32px rung and a 40px rung have both been asked for and refused,
because nothing in this library draws a glyph at either: the 40s that exist are control boxes, and the
glyph inside one is 20px.

**A glyph inside an icon button takes the button's step**: 32px box and 16px glyph, 40 and 20,
44 and 24, 48 and 28. That is the whole scale above, in order, one rung per button rung, so a control and its
mark are decided together instead of separately.

**Three hosts still own their glyph's box**, because none of them is a button: a 10px play mark inside a small
pill, a 12px dismiss on a chip, and a 16px mark in four places that are links and list markers. Whether any of
those earns a rung of its own is an open item; every size that used to be on this list because a control had
picked a percentage is gone.
`,guidance:`
## Behaviors

### States

- **Icon has none of its own.** It is a presentational atom, not a control: no hover, no focus, no pressed, no
  disabled. Every state a reader might expect belongs to the control around it, most often **Icon button**.
- **Colour follows the parent.** Recolour the heading, link, button label or caption around a glyph and the
  glyph follows, with no prop, no override and no per-brand exception.
- **Decorative by default.** Every icon renders \`aria-hidden="true"\` unless a caller overrides it. That matches
  every real call site today: each one is either inside a control that already carries its own name, or
  wrapped in its own hidden span.
- **A missing glyph draws nothing.** An unregistered name is a silent gap, never a thrown error or a blank page.

### Interactions

- **There are none.** Icon renders a static \`<svg>\`. Nothing responds to a pointer or a key.
- **It does not know it is inside a button.** Icon fills a control's glyph slot and nothing more, so the
  hover, press and focus a shopper sees are the control's, never the glyph's.

## Rules

- ✅ **Do** let colour ride \`currentColor\` from the parent.
- ❌ **Don't** add a \`color\`, \`tone\` or \`strokeWidth\` prop at a call site. Those axes do not exist on purpose.

- ✅ **Do** register a new glyph before using it: name it and map it to a canonical icon.
- ✅ **Do** re-run the icon sync after touching anything about the artwork source.
- ❌ **Don't** hand-draw a new inline \`<svg>\` inside a component. Only a registered glyph may be drawn, and
  that is enforced in code.
- ❌ **Don't** hand-edit an artwork string in the registry. The art is vendored, not authored, and the
  byte-for-byte freshness check will say so.
- ❌ **Don't** use the first spelling that resolves. \`check-circle\`, \`alert-triangle\`, \`x-circle\`,
  \`alert-circle\` and \`filter\` all still resolve to a file and are all retired aliases. They are refused.
- ❌ **Don't** map an ordinary glyph to the brand-mark source. It publishes 3,453 logos, and that field is
  refused to anything outside the six social marks.

- ✅ **Do** name the drawing, not the job: \`x\` for a dismiss glyph, \`circle-check\` for a success mark,
  \`chevron-left\` for a previous arrow.
- ❌ **Don't** register a second entry for a shape that already has one, named after the component, the place or
  the meaning that wants it.
- ✅ **Do** keep the meaning-to-glyph table in the component that owns the meaning.

- ✅ **Do** name the control around a meaningful icon. The label goes on the button, never on the glyph.
- ❌ **Don't** let a glyph carry meaning on its own. It is decorative by default and screen readers skip it.
- ❌ **Don't** drop a dense glyph to 16px without looking at it. \`camera\`, \`gift\`, \`package\` and \`truck\` each lose
  an internal detail at that box: the camera's lens counter closes, the gift's bow merges. Their real box is
  20px, where all four hold.

## Open items

| Question | Owner |
|---|---|
| \`shopping-bag\` (Button's "add to bag" glyph) and \`shopping-cart\` (Navigation's trolley) draw two different objects for what may be one idea. Converging them is a content decision, "cart" or "bag", as much as a visual one | Design / Content |
| Two of the eight directionals (\`arrow-up\`, \`arrow-down\`) have no call site. They stay: the set carries arrows and chevrons on all four sides | Design / DS team |
| Name the sizes still owned by a host (10, 12 and 16px) a rung of their own, or leave them host-owned. The list used to be twice as long; the sizes that left were the ones a control had reached by percentage rather than by choice | DS team |
| **Which brands get a logo.** The roster is the six the Footer renders, and the source publishes thousands. Adding a seventh widens the roster, which is a design call rather than a glyph anybody adds in passing | Design |
| The six marks are **filled** while the other thirty-six are strokes, so the set is deliberately not one weight. Worth a look at the Footer before it is called final | Design |
`,spec:{elements:[{name:"Root drawing",requirement:"required",condition:"Comes from the registry entry, never authored per call site."},{name:"Shape",requirement:"required",condition:"One vendored drawing per registry entry."},{name:"Size box",requirement:"conditional",condition:"A rung writes 16, 20, 24 or 28 inline. Null emits no box and leaves it to host CSS."}],authorability:[{name:"Which glyph",rule:"Pick a registered name. A new drawing is registered first, never invented here."},{name:"Size",rule:"Pick a rung: 16, 20, 24 or 28. Leave it out for the glyph's own default."},{name:"Naming",rule:"A registry name says the drawing, not the job: x, chevron-left, circle-check."},{name:"Colour",rule:"Fixed. The glyph inherits the ink around it, and there is no colour prop."},{name:"Line weight",rule:"Fixed by one token for the whole library. There is no stroke-width prop."},{name:"Artwork",rule:"Not authorable. The drawings are vendored, so a shape is never hand edited."},{name:"Meaning",rule:"The control around the glyph carries the name. A glyph alone says nothing."}],variants:[{label:"Stroke",props:{name:"camera"}},{label:"Dense stroke",props:{name:"gift"}},{label:"Directional",props:{name:"chevron-right"}},{label:"Brand mark",props:{name:"social-instagram"}}],states:[{key:"auto",name:"Registered default"},{key:"sm",name:"Small, 16",props:{size:"sm"}},{key:"md",name:"Medium, 20",props:{size:"md"}},{key:"lg",name:"Large, 24",props:{size:"lg"}},{key:"xl",name:"Extra large, 28",props:{size:"xl"}}],render:Te,interactions:["There are none. It renders a static drawing and nothing responds to a pointer or a key.","Colour follows the parent, because every shape rides the inherited ink.","An unregistered name renders nothing rather than throwing.","A rung writes the box as an inline style, so a host stylesheet cannot win against it.","Passing null for the size emits no box at all and leaves it to the host CSS.","Four dense drawings lose an internal detail at 16px, so their real box is 20px."],accessibility:[{label:"Decorative by default",text:"Every glyph is hidden from assistive technology unless a caller deliberately overrides it."},{label:"Meaning lives outside",text:"A glyph never carries meaning on its own. The control around it supplies the accessible name."},{label:"Fails soft",text:"An unknown name renders nothing, so a typo at one call site never blanks the page around it."},{label:"Contrast",text:"The glyph takes the ink of whatever paints it, so that surface has to hold at least 3:1 for a meaningful shape."},{label:"Line weight",text:"The painted line stays 2px at every rung and on every brand, so a glyph never thins out as it scales."},{label:"Dense glyphs",text:"A glyph that loses an internal detail at 16px is drawn at 20px instead. Four drawings are in that group."},{label:"Forced colours",text:"The whole set stays visible in a forced colours mode, including the six filled brand marks."},{label:"Brand marks",text:"The six filled marks hold at least 3:1 against every ground they are placed on."}],openItems:[{question:"The add-to-bag glyph and the trolley draw two different objects for what may be one idea. Converging them is a content decision too",owner:"Design / Content"},{question:"Two of the eight directionals have no call site. They stay: the set carries arrows and chevrons on all four sides",owner:"Design / DS team"},{question:"Name the sizes still owned by a host (10, 12 and 16px) a rung of their own, or leave them host-owned",owner:"DS team"},{question:"Which brands get a logo? The roster is the six the Footer renders and the source publishes thousands",owner:"Design"},{question:"Should the six filled marks match the stroked set, or stay filled? The set is not one weight today",owner:"Design"}]}}}},Se={display:"flex",alignItems:"center",justifyContent:"center",width:56,height:56,color:"var(--color-text-primary)"};function Te({name:t="camera",size:a}){return e.jsx("span",{style:Se,children:e.jsx(u,{name:t,size:a})})}const y={name:"Default",args:ve,argTypes:be,render:t=>e.jsx(ke,{...t}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"Switch **Glyph** to try any of the 42 registered shapes. Switch **Size** to move it through the four-rung scale, or leave it on Auto to see the glyph's own registered default, which is the size its majority real call site already renders at. Change the **Brand** toolbar and the glyph re-inks with the page, because colour is never a prop."}}}},m={name:"Sizes",parameters:{docs:{description:{story:"The four-rung scale, once, on one glyph: `sm`, `md`, `lg` and `xl`, each resolving to its own core size token. **Each glyph sits in a dashed square drawn at exactly its rung**, with the pixel box printed under it, so the size is readable straight off the page instead of through a ruler. The rung marked with a bullet is `camera`'s own registered default. Every other glyph resolves to its own default the same way, off the same four rungs, whenever `size` is left unset."}}},render:()=>e.jsx(G,{name:"camera"})},f={name:"All glyphs",parameters:{controls:{disable:!0},docs:{description:{story:"Every registered glyph, generated straight off the registry, so no second copy can drift out of sync with it. One card per glyph, and **every tile is the same 24px seat**, the `lg` rung, so the grid compares drawings and not sizes. The four-rung scale that same glyph resolves through is demonstrated once in the **Sizes** story above, where each rung draws its own dashed box, rather than repeated on every card here."}}},render:()=>e.jsx(q,{})};var j,A,C;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Default',
  args: ICON_DEFAULT_ARGS,
  argTypes: ICON_ARG_TYPES,
  render: args => <ConfigurableIcon {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'Switch **Glyph** to try any of the 42 registered shapes. Switch **Size** to move it through the ' + 'four-rung scale, or leave it on Auto to see the glyph\\'s own registered default, which is the size ' + 'its majority real call site already renders at. Change the **Brand** toolbar and the glyph re-inks ' + 'with the page, because colour is never a prop.'
      }
    }
  }
}`,...(C=(A=y.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var D,N,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:"{\n  name: 'Sizes',\n  parameters: {\n    docs: {\n      description: {\n        story: 'The four-rung scale, once, on one glyph: `sm`, `md`, `lg` and `xl`, each resolving to its own ' + 'core size token. **Each glyph sits in a dashed square drawn at exactly its rung**, with the pixel ' + 'box printed under it, so the size is readable straight off the page instead of through a ruler. ' + 'The rung marked with a bullet is `camera`\\'s own registered default. Every other glyph resolves to ' + 'its own default the same way, off the same four rungs, whenever `size` is left unset.'\n      }\n    }\n  },\n  render: () => <IconSizeScale name=\"camera\" />\n}",...(F=(N=m.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var _,O,R;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'All glyphs',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Every registered glyph, generated straight off the registry, so no second copy can drift out of ' + 'sync with it. One card per glyph, and **every tile is the same 24px seat**, the \`lg\` rung, so the ' + 'grid compares drawings and not sizes. The four-rung scale that same glyph resolves through is ' + 'demonstrated once in the **Sizes** story above, where each rung draws its own dashed box, rather ' + 'than repeated on every card here.'
      }
    }
  },
  render: () => <IconGallery />
}`,...(R=(O=f.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const De=["Playground","Sizes","AllGlyphs"];export{f as AllGlyphs,y as Playground,m as Sizes,De as __namedExportsOrder,Ce as default};
