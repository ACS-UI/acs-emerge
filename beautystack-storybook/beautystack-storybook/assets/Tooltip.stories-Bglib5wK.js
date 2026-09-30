import{j as e}from"./iframe-6dx3hp_4.js";import{T as a}from"./Tooltip-DIsL9-Da.js";import{a as A}from"./annotationPage-eYx--AWZ.js";import{a as d,D as S}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./popoverPlacement-CK5qQ-ie.js";const l={position:{...d("Auto"),name:"Position",...S({labels:{auto:"Auto",top:"Top",bottom:"Bottom",left:"Left",right:"Right"},options:["auto","top","left","right","bottom"]}),description:"Which side the bubble sits on. The four named sides are decrees: the bubble goes there and stays. Auto is a question, answered by the room actually on screen."},children:{name:"Text",control:"text",table:{category:"Content",type:{summary:"Short text"},defaultValue:{summary:"Uncut Ruby (810)"}},description:'What the bubble says. THIS CONTROL IS A DEMO AFFORDANCE, not an authoring surface: it is here so a reader can see how the bubble wraps and re-themes without editing code. In a product the words are not typed at all. MASTER doc, Content and authoring: "Tooltip text is populated from the associated content or product data" and "Tooltip text is not independently authored within the Tooltip atom". The atom itself invents nothing and carries no default text: what it draws is exactly what the host handed it.'},open:{...d("Off"),name:"Pinned open",control:"boolean",description:"Hold the bubble on screen so it can be looked at without a live pointer. A documentation and QA affordance. A tooltip that is always up is a label, not a tooltip."},renderTrigger:{control:!1,table:{disable:!0}},className:{control:!1,table:{disable:!0}}},k={position:"auto",children:"Uncut Ruby (810)",open:!1},I="#8E1C2B";function h({triggerProps:t}){return e.jsx("button",{type:"button","aria-label":"Uncut Ruby",...t,style:{inlineSize:40,blockSize:40,padding:0,border:"none",borderRadius:"var(--radius-swatch)",background:I,boxShadow:"0 0 0 1px var(--color-border-subtle)",cursor:"pointer"}})}const T={display:"flex",alignItems:"center",justifyContent:"center",minBlockSize:220},q={title:"Atoms/Tooltip",component:a,tags:["autodocs"],parameters:{docs:{page:A("Tooltip"),toc:{headingSelector:"h2, h3"},description:{component:"A short description of the thing you are pointing at, drawn as a bubble in the inverse surface. It appears on hover and on keyboard focus, and it is gone the moment both have left."}},componentDoc:{usage:`
## When to use

- ✅ **A short description of a control that already has a name**, like the shade name on a swatch.
- ✅ **When losing it costs nothing.** It arrives on hover or on keyboard focus and goes the moment
  both have left.
- ✅ **On a desktop layout.** It is a pointer and keyboard affordance.

- ❌ **Anything that can be clicked, focused or read at length.** That is **Popover**, which is
  opened on purpose and gives focus back.
- ❌ **A control's only label.** A tooltip is invisible to anyone who never hovers, so the control
  has to be named already.
- ❌ **Text that has to stay on screen.** A bubble that never goes away is a label. Write a label.
- ❌ **Something a phone user needs.** A tap is not a hover, so touch never sees it.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Trigger**, the thing being described | **required** | The caller's own control. The tooltip never draws one, it hands the trigger the one attribute that pairs the two |
| **Bubble**, the pill in the inverse surface | **required** | The whole drawing. One surface, one ink, one radius |
| **Bridge**, the invisible extension across the gap | required, and invisible | It paints nothing. It exists so the pointer can travel from the trigger onto the bubble without the bubble vanishing on the way |

- **The bubble is the only floating surface with no hairline**, and its own ground is why: it is
  painted on the inverse ink, which is never the same value as the page behind it, so the thing a
  hairline insures against cannot happen here. Its shadow is the overlay rung, the same height
  a menu sits at.
- **It is on the top layer, and it is the only thing there.** The bubble reads the highest rung of
  the library's stacking ruler, above a sticky bar, above the site header and above a dialog. A
  description covered by the thing it describes is not a description. It is safe up there because
  of what a tooltip is: it never takes focus, holds nothing that can be used, and leaves the moment
  the pointer and the focus do.
- **Tokens own the look.** Surface, ink, radius, inset, type, elevation, the 8px gap and the
  motion. The same bubble re-themes across all 21 brands: a pill on Revlon, a rectangle on the
  square-cornered brands.
- **The corner is the tall-field one, not the field one.** A bubble wraps, so it is a box more
  than one line high, and the pill corner a single-line control uses would eat the first line of
  text on a two-line bubble. On a one-line bubble the two draw identically.
- **The caller owns the words.** There is no third category.
- **The pairing is per instance.** Two tooltips on one page never collide, and the component hands
  the pairing to the trigger rather than leaving it to the screen to remember.

### There is no arrow

The shape this component was drawn from, the shade swatch's hand-built bubble, carried a caret: an
8×8 square rotated 45°. **This bubble has none**, and carries itself on
its inverse colour alone. It is not hidden behind a prop, and nothing in the library draws one.

### Variants

**There are none.** One appearance, on five positions. What changes between two tooltips is the
words in them and the side they sit on.

### A tooltip is not a Popover

| | **Tooltip** | **Popover** |
|---|---|---|
| What it holds | a short description | anything, including controls |
| How it arrives | revealed by pointing or tabbing at something else | **opened** by the user |
| Focus | never takes any | takes it, and gives it back |
| Losing it | costs nothing | may cost the thing you were doing |
| Gap to the trigger | 8px, so it reads as a separate thing pointing at one | none, so it reads as one surface with the control |

The test is whether anything inside it can be **used**. If it can, it is a Popover: a control
inside a surface that vanishes when the pointer leaves is a control a keyboard user can never
operate.

**The gap is the visible half of that same difference.** A panel a person opened belongs to the
control that opened it, so it sits flush against it. A bubble describes something from outside,
so it stands off.
`,guidance:`
## Behaviors

### States

- **Resting.** Nothing on screen. The bubble is in the page but hidden, which is what lets a
  screen reader read its text as the trigger's description without anyone hovering anything.
- **Pointed at.** The bubble fades in and settles 4px outward, after a short wait. The wait is
  deliberate: a pointer sweeping across a row of shade chips would otherwise set off five bubbles
  in a row.
- **Pointed at, on touch.** There is no bubble, and that is answered twice: a tap is refused by its
  pointer type, and a device whose primary pointer cannot hover at all is refused by the same
  hover-capability question every hover affordance in this library asks. MASTER doc: **It does not
  appear on touch devices unless triggered through an alternative interaction.** The alternative
  the doc allows is keyboard focus, and neither guard touches it.
- **Focused.** The same bubble, with no wait at all. Someone who tabbed to a control asked for it
  by name. Only keyboard focus counts, so clicking with a mouse never leaves a bubble stuck to a
  control.
- **Dismissed.** Escape takes it away without moving the pointer and without moving focus. A
  tooltip can cover the very thing a low-vision reader is magnifying, so it has to be removable
  from where they are.
- **Reduced motion.** The fade and the settle are dropped. The tooltip still appears: a motion
  preference must never remove an accessibility feature.

### Interactions

- **Pointing at the trigger reveals it, moving away hides it.** The pointer may travel *onto the
  bubble itself* and it stays. That is a requirement, not a nicety, and it is why the bubble is
  invisibly extended across the 8px gap.
- **Tabbing to the trigger reveals it, tabbing away hides it.**
- **Escape hides it, and only it.** A tooltip inside an open dialog does not also close the dialog.
- **Nothing takes it away on a timer.** It stays for as long as the pointer or the focus is there.
- **Nothing inside it can be clicked, and it never takes focus.** That is the Popover boundary.
- **It never covers the thing that triggered it.** Every position starts one gap outside the
  trigger's own box, so an overlap is not something the component avoids: it is something the
  stylesheet cannot express.
- **Auto re-measures.** It picks the side with room when it opens, and again on every scroll and
  resize while the bubble is up. The four named sides never move.

## Rules

- ✅ **Do** use it for a short description of a control that already has a name.
- ❌ **Don't** use it as a control's only label. It is invisible to anyone who never hovers.
- ❌ **Don't** put anything in it that can be clicked, focused or read at length. That is a Popover,
  and the first two are refused rather than discouraged: the atom throws on an interactive child.

- ✅ **Do** leave the position on **Auto** unless the layout has a reason. Auto is measured against
  the room actually on screen; a named side is a decree and will happily hang off the edge.
- ❌ **Don't** ask for an arrow. There isn't one.
- ❌ **Don't** pin it open as a way of showing permanent text. A bubble that never goes away is a
  label, so write a label.

### Content rules

- ✅ **Do** let the text come from the content or product data the trigger already carries. MASTER
  doc: **Tooltip text is not independently authored within the Tooltip atom.** On a Swatch that is
  the shade name. The atom supplies no text of its own and has no default; the **Text** control on
  this page is a demo affordance so the wrapping and the re-theming can be seen, not an invitation
  to write a bubble by hand.
- ✅ **Do** pass a description, never a name. The trigger is named already; the tooltip explains
  it.
- ❌ **Don't** put a link, a button or a dismiss control in it. **It is refused**: the atom throws
  on a child that is a control, names the doc's rule in the message, and tells you to put the
  control in a Popover.
- ❌ **Don't** invent a character limit. No brief supplies a number, so none is written here. The
  bubble wraps and is capped at its own reading measure.

## Open items

| Question | Owner |
|---|---|
| **The cross axis.** A bubble wider than the room beside its trigger still overhangs the edge of the screen. The same gap Popover carries on its inline axis, for the same reason | Design / DS team |
| **Is a shade's name its NAME or its DESCRIPTION?** On the product page it is now both, so a screen reader hears it twice | Design / Content |
| **Should Auto prefer top or bottom?** Top today, because top is what the library already shipped. Never briefed | Design |
| **Touch.** A tooltip is a hover affordance and this one refuses touch pointers. Whether a phone should reach the same text some other way is a real product question | Design |
| **The reading measure** the bubble wraps at is inherited from the exemplar. The library's only measure token is the 800px reading column | Design / DS team |
`,spec:{elements:[{name:"Trigger",requirement:"required"},{name:"Bubble",requirement:"required"},{name:"Text",requirement:"required"},{name:"Bridge",requirement:"required"}],authorability:[{name:"Text",rule:"Populated from the content or product data the trigger carries, never authored inside the atom."},{name:"Length",rule:"No character limit is set. The bubble wraps at its own reading measure."},{name:"Content",rule:"Text only. A link, a button or a dismiss control belongs in a Popover."},{name:"Position",rule:"Leave it on Auto unless the layout has a reason. A named side never re-measures."},{name:"Trigger",rule:"The caller draws and names it. The tooltip describes that control, never names it."},{name:"Sole source",rule:"A tooltip never carries the only copy of a fact. A phone may never reveal it."},{name:"Pinning",rule:"It is never pinned open to carry permanent text. Permanent text is a visible label."},{name:"Look",rule:"The inverse surface, the radius and the type come from tokens. There is no arrow."}],variants:[{label:"Auto",props:{position:"auto",open:!0}},{label:"Top",props:{position:"top",open:!0}},{label:"Bottom",props:{position:"bottom",open:!0}},{label:"Left",props:{position:"left",open:!0}},{label:"Right",props:{position:"right",open:!0}}],states:[{key:"resting",name:"Resting",props:{open:!1}},{key:"revealed",name:"Revealed",props:{open:!0}}],render:P,interactions:["Pointing at the trigger reveals it after a short wait. Tabbing to it reveals it with no wait.","The pointer can travel onto the bubble itself and it stays, because the 8px gap is bridged.","Escape hides it without moving the pointer or the focus, and a dialog around it stays open.","Nothing hides it on a timer. It stays while the pointer or the focus is on the trigger.","A touch pointer is refused and so is a device that cannot hover at all. Focus still reveals it.","Auto re-measures on every scroll and resize while it is up. A named side never moves.","Nothing inside it can be clicked, and it never takes focus.","Reduced motion drops the fade and the settle. The bubble still appears."],accessibility:[{label:"Role and wiring",text:"The bubble carries the tooltip role, and the trigger points at it with aria-describedby."},{label:"Never the name",text:"The trigger carries its own accessible name, so the bubble describes the control and is never the only thing naming it."},{label:"On focus",text:"Tabbing to the trigger reveals the bubble and tabbing away hides it, with no pointer involved."},{label:"Dismissible",text:"Escape hides the bubble without moving the pointer or the focus, and leaves any dialog around it open."},{label:"Persistent",text:"Nothing hides it on a timer. It stays for as long as the pointer or the focus is on the trigger."},{label:"Hoverable",text:"The pointer can travel from the trigger onto the bubble without it closing, so the text can be read."},{label:"Not focusable",text:"The bubble never takes focus, and a child that is a link, a button or any other control is refused by the atom rather than drawn."},{label:"Reduced motion",text:"The fade and the 4px settle are dropped under reduced motion, while the reveal itself stays."},{label:"Contrast",text:"The bubble ink clears 4.5:1 against the inverse surface it sits on, in every brand."},{label:"Stacking",text:"The bubble draws above the chrome around it, so a sticky section header never covers the text it reveals."}],openItems:[{question:"The cross axis: a bubble wider than the room beside its trigger still overhangs the edge of the screen",owner:"Design / DS team"},{question:"Is a shade's name its accessible name or its description? It is both today, so a screen reader hears it twice",owner:"Design / Content"},{question:"Should Auto prefer top or bottom? Top today, because top is what the library already shipped. Never briefed",owner:"Design"},{question:"Should a phone reach the same text some other way? A tooltip is a hover affordance and this one refuses touch",owner:"Design"},{question:"What measure should the bubble wrap at? It has one of its own, and the library's only measure token is the 800px reading column",owner:"Design / DS team"}]}}}};function P({position:t,open:n}){return e.jsx("div",{style:{inlineSize:280,minBlockSize:128,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(a,{position:t,open:n,renderTrigger:o=>e.jsx(h,{triggerProps:o}),children:"Uncut Ruby"})})}const i={name:"Default",args:k,argTypes:l,render:({position:t,children:n,open:o})=>e.jsx("div",{style:T,children:e.jsx(a,{position:t,open:o||void 0,renderTrigger:x=>e.jsx(h,{triggerProps:x}),children:n})}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"Hover the chip, or tab to it. Notice that pointing waits a beat and tabbing does not. Move **Position** through all five values: the four named ones are decrees, **Auto** is measured. Turn **Pinned open** on to hold the bubble still while you change the **Brand** toolbar: the same bubble is a pill on Revlon and a rectangle on the square-cornered brands, because its corner is the brand's own tall-field radius."}}}},s={name:"Positions",argTypes:l,parameters:{docs:{description:{story:"The whole vocabulary, pinned open side by side. The four named sides are **decrees**: each bubble goes where it was told and stays there. **Auto** is the odd one out: it is a question, and what you see is the answer for the room this cell happens to have. Each bubble reports the side it actually resolved to, read off the DOM rather than guessed from the picture."}}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"var(--size-500)",padding:"var(--size-500)",justifyItems:"center"},children:["top","bottom","left","right","auto"].map(t=>e.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:"var(--size-400)"},children:[e.jsxs("code",{style:{fontSize:"var(--font-size-small)",color:"var(--color-text-secondary)"},children:['position="',t,'"']}),e.jsx("div",{style:{...T,minBlockSize:140,inlineSize:240},children:e.jsx(a,{position:t,open:!0,renderTrigger:n=>e.jsx(h,{triggerProps:n}),children:"Uncut Ruby (810)"})})]},t))})},R=["auto","top","bottom","left","right"],c=[{key:"short",label:"Short",text:"810"},{key:"name",label:"Shade name",text:"Uncut Ruby (810)"},{key:"wrapped",label:"Wraps at the measure",text:"Uncut Ruby (810), limited edition, back in stock next week"}],r={name:"State matrix",argTypes:l,parameters:{themeShellPadding:!1,docs:{description:{story:"Every position against every content shape, in one grid, with all fifteen bubbles held open. The **auto** row is the only one that can disagree with its own label: it shows where the measurement put it, which is the point of it, and in a cell with room on every side that is *top*. The last column is the wrapping case: the bubble is capped at its own measure and wraps rather than running to the edge of the screen, and it is the case the radius token was changed for. **Resting is not a row or a column here**, and the absence is deliberate: this grid's two axes are position and content shape, and a tooltip at rest shows neither of them, so the resting and revealed pair is drawn on the Spec view instead. This is a QA tool, not product UI."}}},render:()=>e.jsx("div",{style:{padding:"var(--size-500)",overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"var(--size-200)"}}),c.map(t=>e.jsx("th",{style:{padding:"var(--size-200)",fontSize:"var(--font-size-small)",textAlign:"center"},children:t.label},t.key))]})}),e.jsx("tbody",{children:R.map(t=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",style:{textAlign:"start",padding:"var(--size-200)",fontSize:"var(--font-size-small)",whiteSpace:"nowrap"},children:e.jsx("code",{children:t})}),c.map(n=>e.jsx("td",{style:{inlineSize:360,minInlineSize:360,padding:"var(--size-700) var(--size-400)",textAlign:"center",verticalAlign:"middle"},children:e.jsx(a,{position:t,open:!0,renderTrigger:o=>e.jsx(h,{triggerProps:o}),children:n.text})},n.key))]},t))})]})})};var p,u,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Default',
  args: TOOLTIP_DEFAULT_ARGS,
  argTypes: TOOLTIP_ARG_TYPES,
  // The trigger is always the caller's, so the story supplies one: a plain chip, not the Swatch
  // atom, because Swatch composes this component itself and there would then be two.
  render: ({
    position,
    children,
    open
  }) => <div style={CENTER}>
      <Tooltip position={position} open={open || undefined} renderTrigger={triggerProps => <Chip triggerProps={triggerProps} />}>
        {children}
      </Tooltip>
    </div>,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'Hover the chip, or tab to it. Notice that pointing waits a beat and tabbing does not. ' + 'Move **Position** through all five values: the four named ones are decrees, **Auto** ' + 'is measured. Turn **Pinned open** on to hold the bubble still while you change the ' + '**Brand** toolbar: the same bubble is a pill on Revlon and a rectangle on the ' + 'square-cornered brands, because its corner is the brand\\'s own tall-field radius.'
      }
    }
  }
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,m,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Positions',
  argTypes: TOOLTIP_ARG_TYPES,
  parameters: {
    docs: {
      description: {
        story: 'The whole vocabulary, pinned open side by side. The four named sides are **decrees**: ' + 'each bubble goes where it was told and stays there. **Auto** is the odd one out: it ' + 'is a question, and what you see is the answer for the room this cell happens to have. ' + 'Each bubble reports the side it actually resolved to, read off the DOM rather than ' + 'guessed from the picture.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 'var(--size-500)',
    padding: 'var(--size-500)',
    justifyItems: 'center'
  }}>
      {['top', 'bottom', 'left', 'right', 'auto'].map(side => <div key={side} style={{
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--size-400)'
    }}>
          <code style={{
        fontSize: 'var(--font-size-small)',
        color: 'var(--color-text-secondary)'
      }}>
            position=&quot;{side}&quot;
          </code>
          {/* Room on every side, so nothing here is a collision case, each bubble is where its
              own prop put it, and \`auto\` is where the measurement put it. */}
          <div style={{
        ...CENTER,
        minBlockSize: 140,
        inlineSize: 240
      }}>
            <Tooltip position={side} open renderTrigger={triggerProps => <Chip triggerProps={triggerProps} />}>
              Uncut Ruby (810)
            </Tooltip>
          </div>
        </div>)}
    </div>
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var v,w,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'State matrix',
  argTypes: TOOLTIP_ARG_TYPES,
  parameters: {
    themeShellPadding: false,
    docs: {
      description: {
        story: 'Every position against every content shape, in one grid, with all fifteen bubbles held ' + 'open. The **auto** row is the only one that can disagree with its own label: it ' + 'shows where the measurement put it, which is the point of it, and in a cell with room ' + 'on every side that is *top*. The last column is the wrapping case: the bubble is ' + 'capped at its own measure and wraps rather than running to the edge of the screen, ' + 'and it is the case the radius token was changed for. **Resting is not a row or a column ' + 'here**, and the absence is deliberate: this grid\\'s two axes are position and content ' + 'shape, and a tooltip at rest shows neither of them, so the resting and revealed pair is ' + 'drawn on the Spec view instead. This is a QA tool, not product ' + 'UI.'
      }
    }
  },
  render: () => <div style={{
    padding: 'var(--size-500)',
    overflowX: 'auto'
  }}>
      <table style={{
      borderCollapse: 'collapse'
    }}>
        <thead>
          <tr>
            {/* The corner cell is a \`td\`, not an empty \`th\`, an empty header is a header with no
                name, which axe reports (empty-table-header) and which is the correct call: the
                corner of a row/column matrix heads nothing. */}
            <td style={{
            padding: 'var(--size-200)'
          }} />
            {MATRIX_COLUMNS.map(col => <th key={col.key} style={{
            padding: 'var(--size-200)',
            fontSize: 'var(--font-size-small)',
            textAlign: 'center'
          }}>
                {col.label}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {MATRIX_ROWS.map(side => <tr key={side}>
              <th scope="row" style={{
            textAlign: 'start',
            padding: 'var(--size-200)',
            fontSize: 'var(--font-size-small)',
            whiteSpace: 'nowrap'
          }}>
                <code>{side}</code>
              </th>
              {MATRIX_COLUMNS.map(col => <td key={col.key} style={{
            inlineSize: 360,
            minInlineSize: 360,
            padding: 'var(--size-700) var(--size-400)',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}>
                  <Tooltip position={side} open renderTrigger={triggerProps => <Chip triggerProps={triggerProps} />}>
                    {col.text}
                  </Tooltip>
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </div>
}`,...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const N=["Playground","FivePositions","StateMatrix"];export{s as FivePositions,i as Playground,r as StateMatrix,N as __namedExportsOrder,q as default};
