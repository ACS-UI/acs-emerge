import{r as c,j as e,S as V,g as Y}from"./iframe-6dx3hp_4.js";import{a as X}from"./annotationPage-eYx--AWZ.js";import{L as K,a as x,B as o,b as F,C as Q}from"./Button-CiZyClsp.js";import{c as f,D as k,a as T}from"./designerArgTypes-CVo4ohMZ.js";import"./preload-helper-C1FmrZbK.js";import"./Icon-BihOhSWB.js";import"./Loading-DyIAIYoE.js";import"./newTabMark-TI50-QeA.js";/* empty css               */const B=2,d={primary:3,secondary:2,ghost:1},J=[["primary","secondary"],["primary","ghost"],["secondary","ghost"]].map(t=>t.slice().sort((a,n)=>d[n]-d[a]).join("+"));function Z(t){var n;const a=((n=t==null?void 0:t.props)==null?void 0:n.variant)??"primary";return K[a]??a}function w({children:t,className:a="",...n}){const r=c.Children.toArray(t),h=r.length;if(h>B)throw new Error(`ButtonBlock holds at most ${B} buttons; received ${h}. A block that needs more is not a button block.`);if(h===2){const[i,s]=r.map(Z);if(i==="primary"&&s==="primary")throw new Error("ButtonBlock cannot hold two primary buttons: a block has at most one primary call to action. Make the second one secondary or ghost.");const l=[i,s].slice().sort((p,v)=>d[v]-d[p]).join("+");if(!J.includes(l))throw new Error(`ButtonBlock cannot mix ${i} and ${s}. The only allowed pairs are primary+secondary, primary+ghost and secondary+ghost.`);if(d[i]<d[s])throw new Error(`ButtonBlock's two buttons are out of order: ${i} is authored before ${s}, but a block runs heaviest emphasis first. Reorder the children so the higher-hierarchy button leads.`)}return e.jsx("div",{className:["ds-button-block",a].filter(Boolean).join(" "),...n,children:t})}w.__docgenInfo={description:"",methods:[],displayName:"ButtonBlock",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};const $={background:"#1a1a1a",padding:"var(--size-300)",borderRadius:"var(--radius-card, 4px)"},z={display:"flex",gap:"var(--size-200)",flexWrap:"wrap",alignItems:"center"},ee={variant:{...T("Primary"),name:"Emphasis",...k({labels:{primary:"Primary",secondary:"Secondary",ghost:"Ghost"},options:["primary","secondary","ghost"]}),description:"How much emphasis the CTA carries. Three steps, loudest first. This is one of the two axes; the other is Inverse, which decides the ground rather than the emphasis."},inverse:{...f("Off"),name:"Inverse",table:{category:"Options",type:{summary:"On or off"},defaultValue:{summary:"Off"}},description:"Turn this on when the CTA lands on a dark or photographic ground. Every style has an inverse, so this crosses the whole set rather than replacing a style. The preview drops onto a dark panel while it is on, because drawing an inverse button on the page colour would document it as broken."},state:{...T("Default"),name:"State",...k({labels:{default:"Default",disabled:"Disabled",loading:"Loading"},options:["default","disabled","loading"]}),description:"Which state to draw. Hover is not in this list, because it is a pointer state, so hover the preview with a mouse to see it."},behaviour:{...T("Goes somewhere"),name:"Behaviour",...k({labels:{navigates:"Goes somewhere",acts:"Does something"},options:["navigates","acts"]}),description:"Whether this CTA takes the user to another page or acts on the current one. It decides which HTML element renders, and how the keyboard activates it."},showIcon:{...f("Off"),name:"Leading icon",description:"Show the optional glyph before the label."},showTrailingIcon:{...f("Off"),name:"Trailing icon",description:"Show an authored glyph after the label. A link that opens in a new tab draws its own arrow here instead, automatically; see the New tab story."},children:{name:"Label",control:"text",table:{category:"Content",type:{summary:"Text"},defaultValue:{summary:"Shop Now"}},description:"The CTA text. It always comes from the caller; the component never writes it."},icon:{control:!1,table:{disable:!0}},leadingIcon:{control:!1,table:{disable:!0}},trailingIcon:{control:!1,table:{disable:!0}},href:{control:!1,table:{disable:!0}},disabled:{control:!1,table:{disable:!0}},loading:{control:!1,table:{disable:!0}}},te={variant:"primary",inverse:!1,state:"default",behaviour:"navigates",showIcon:!1,showTrailingIcon:!1,children:"Shop Now"};function ae({variant:t,inverse:a,state:n,behaviour:r,showIcon:h,showTrailingIcon:i,children:s}){const l=e.jsx(o,{variant:t,inverse:a,leadingIcon:h?e.jsx(Q,{}):void 0,trailingIcon:i?e.jsx(F,{}):void 0,disabled:n==="disabled",loading:n==="loading",href:r==="navigates"?"#pdp-hero":void 0,children:s});return a?e.jsx("div",{style:$,children:l}):l}const me={title:"Atoms/Button",component:o,tags:["autodocs"],parameters:{docs:{page:X("Button"),toc:{headingSelector:"h2"},description:{component:"The call-to-action: a label, an optional glyph, and one job, which is to take someone somewhere or act on the page. Give it a destination and it renders a real link; leave the destination out and it renders a button."}},componentDoc:{usage:`
## When to use

- ✅ **The action a card, a form, a dialog or a section is recommending.**
- ✅ **An action that goes somewhere.** Give it a destination and it becomes a real link.
- ✅ **An action that happens right here**, like submitting a form, opening the filter panel or
  opening the write-a-review overlay. Leave the destination out and it becomes a button.
- ✅ **On a dark panel or a photograph.** Turn **Inverse** on. Every style has one.

- ❌ **A link inside a sentence.** That is a plain link, not a call to action.
- ❌ **A control with no words.** Button always shows its label, so an icon-only control is
  **Icon button**'s job.
- ❌ **A choice between options**, like a size, a shade or a subscription plan. Those are the
  option and swatch components, which show every choice at once.
- ❌ **Breadcrumbs, tabs or pagination.** Those components own their own controls.
`,anatomy:`
## Anatomy

| Part | Required? | Note |
|---|---|---|
| **Root**, the link or the button | required | Which one renders is decided by the presence of a destination, nothing else |
| **Icon**, the optional glyph | optional | Decorative. Hidden from screen readers, and never the button's name |
| **Label**, the visible text | **always required** | The only source of the button's accessible name |

- **Tokens own the look.** Shape, height, colour, radius and type. The same button re-themes
  across all 21 brands without a single value being restated. Type arrives as ONE named style,
  **typography/body**, not as a handful of separate values: face, weight, size, leading and
  tracking all come from it, which is what keeps the Figma text style and the code saying the same
  thing. The body style carries no case, so a call to action is drawn in the case its label was
  written in.
- **The caller owns the words.** The label and the destination. There is no third category:
  nothing about a Button is CMS-editable styling.
- **The destination picks the element.** Never the style, and never an \`as\` prop, because
  Button has none.

### Variants

**Two axes, not one list.** Pick an **emphasis** for how loud the action is, then say whether it
lands on a dark ground. Three steps by two grounds is six combinations, and all six are drawn in
the *State matrix* story below.

**Emphasis, loudest first:**

- **Primary**, the filled call to action. One per component.
- **Secondary**, an outline **with a ground of its own**. The secondary button always carries a
  fill. It used to be a transparent outline, which made it read as a link in a box beside a
  filled primary. Its outline reads \`border.control\`, the softest line the brand's own
  palette can draw and still keep the button identifiable: see *The border roles read in one
  direction* on the Colour foundations page for the ruler it sits on.
- **Ghost**, no border and no fill at rest, action ink only. The quiet step, for an action that
  must stay available without competing. Ghost carries **no border of any kind**. The style that
  shipped under the name \`tertiary\` carried both a fill and a border, which is what stopped it
  reading as quiet.

**Ground, on the inverse axis:**

- **Primary + inverse** is the paper-coloured pill.
- **Secondary + inverse** fills one step off the dark ground and outlines in the inverse ink,
  so it stays opaque over a photograph.
- **Ghost + inverse** is ink only. It is the one combination that cannot prove its own
  contrast, because a transparent control has no ground to be measured against. It needs a
  scrim or a flat band behind it.

**No size axis.** Not small, not large. No approved brief asks for one, so adding one would
invent a requirement that does not exist.

**Both old names still work.** \`variant="inverse"\` resolves to primary on the inverse axis,
and \`variant="tertiary"\` to ghost. That is a requirement, not a courtesy: two call sites take
their style from **data** rather than from markup, so a value can arrive from a fixture or a
payload that no search of the code can see.
`,guidance:`
## Behaviors

### States

- **Default.** The resting call to action. Nothing is inferred: a Button is disabled or loading
  only because the screen that placed it said so.
- **Hover.** The background swaps for its hover colour. A real colour change, never a fade.
- **Hover on touch.** There isn't one. Every hover rule is fenced behind a pointer check, so
  nothing happens on a phone or a tablet.
- **Focus.** The standard ring. It is never removed without something being put back.
- **Disabled.** Decided by the screen that placed the button, never by Button itself, and drawn
  with the shared disabled-opacity token.
- **Loading.** The busy indicator draws in the icon's place and the label stays exactly what it
  already said. The control stops responding immediately, before the indicator appears: a short
  action that finishes fast never shows one at all, so a screen only sees it when the wait was
  long enough to matter.
- **Pressed.** Every combination scales down very slightly, and five of the six also change
  colour, stepping one further along the direction their hover took.

**Secondary's hover moved, and it had to.** Giving secondary a resting ground handed it the exact
colour its hover used to paint, so leaving the hover alone would have produced a state that
changes a stylesheet and no pixel. It now steps one further, onto the paper pill's ladder. Ghost
inherited the role secondary vacated.

**One combination presses without a colour change: secondary + inverse.** The dark ground's
ladder has exactly three steps, its resting fill takes the second and its hover takes the third,
so there is no fourth to press onto. It keeps the scale-down alone. That is the same fallback the
token generator records whenever a brand runs out of perceptible steps, not a gap.

### Interactions

- **Given a destination, it navigates.** The call to action becomes a real link and clicking it
  goes to the page. Whether a screen supplies a destination is that screen's decision.
- **Given no destination, it acts.** It becomes a button, and whatever the screen passes through
  it goes through untouched. That is what lets one component submit a form, open the filter
  panel, or open the write-a-review overlay without Button knowing what it opened.
- **The keyboard differs between the two.** A button answers Enter and Space; a link answers
  Enter only. Choosing between them is an accessibility decision as much as a markup one.
- **Hovering changes it on pointer devices only.**

## Rules

- ✅ **Do** use one primary per component. A card, a dialog, a form or a callout has exactly one
  action it is recommending; everything else in it is secondary or ghost.

- ❌ **Don't** put two primaries inside the same component. When two actions compete in one card or
  one dialog, one of them steps down.

> **The scope is the component, not the page.** A product grid where every card carries its own
> single *Add to bag* is correct. Hierarchy is local to the component that owns it. What the rule
> forbids is two recommendations inside one thing a person reads as a unit.

- ✅ **Do** run a block of buttons left to right, heaviest first: primary, then secondary, then
  ghost, starting at the start of its measure.
- ❌ **Don't** push the block to the end of its measure, and don't let the quiet button lead. A row
  that opens with **Cancel** reads as though cancelling is the action on offer.

> **This is the same rule everywhere a block of buttons appears**, a dialog's footer, a quiz's
> controls, a form's submit. Before it was taken, this library held four different answers to it
> across nine rows, three of which put the quiet button first. **A block holds at most five
> buttons**: the row is the ButtonBlock primitive, shown in the **Block** story below.

- ✅ **Do** give it a destination when it navigates.
- ❌ **Don't** wrap a button inside a link, and don't fake navigation with a click handler.

- ✅ **Do** pick the style for the emphasis and turn **Inverse** on for the ground. They are two
  separate decisions.
- ❌ **Don't** reach for a louder style to fix legibility on a photograph. That is what the inverse
  axis is for.
- ❌ **Don't** put a ghost on a photograph without a scrim or a flat band behind it. It has no
  ground of its own, so nothing can promise it stays readable.

- ❌ **Don't** express a state by fading the whole element. Disabled is the one sanctioned
  exception, and it uses the shared disabled-opacity token. Fading dims the label along with the
  fill and moves the contrast pair to a value nothing declares, so it cannot be checked against
  the 4.5:1 every resting label has to clear on every brand. Change the named colour instead.

- ❌ **Don't** write a bare hover rule. Fence it behind the pointer media query.
- ❌ **Don't** hard-code a colour, radius, height or font on Button's themeable surface.
- ❌ **Don't** assemble the label's type out of separate values. It is one named style,
  **typography/body**, and it carries five fields: face, weight, size, leading and tracking. The
  sixth, case, is not a field that style has, so the rule writes that silence down rather than
  leaving the control's case to whatever wraps it. A call to action does not get a text style of
  its own.
- ❌ **Don't** ship an icon-only call to action, and don't let a state be signalled by the glyph
  alone.
- ❌ **Don't** disable a form's submit button to stop an incomplete submission. A submit that
  disables itself makes the form's own agreed error message unreachable: the user gets a dead
  button and no explanation. Let the submit happen and show the error.

- ✅ **Do** re-check \`ContentCard\` after any change to Button's CSS. It reuses the inverse
  treatment **by class name, without importing this component**, so turning inverse into an axis
  could have unstyled that card in silence.

### Content rules

- ✅ **Do** write the label at the call site. The component never supplies one.
- ✅ **Do** hold the label to one line. A button label never wraps: when two buttons no longer fit
  side by side, the row stacks them instead. Holding the label is only half of it; every row that
  can hold two buttons must also be able to break the row, or the pair squeezes instead of
  stacking.
- ❌ **Don't** invent a character limit. Every approved brief that places a call to action says the
  same thing: limits are to be defined by design.
- ❌ **Don't** ship a call to action with no visible text. The glyph is decorative and can never
  stand in for the label.
`,spec:{elements:[{name:"Root, a link or a button",requirement:"required"},{name:"Label",requirement:"required"},{name:"Icon",requirement:"optional"},{name:"Loading label, spoken only",requirement:"conditional",condition:"While Loading is on"}],authorability:[{name:"Label",rule:"The author writes it, on one line, with no character limit. It is never empty."},{name:"Icon",rule:"Optional and decorative. It sits before the label and never replaces it."},{name:"Destination",rule:"Pass one when the action navigates. Without one the component renders a button."},{name:"Emphasis",rule:"Three steps of emphasis. One primary per component; a second one steps down."},{name:"Ground",rule:"Inverse is a second axis and crosses every style. The screen decides which ground applies."},{name:"Loading text",rule:"The component speaks it to screen readers. Content cannot change the word."},{name:"Look and type",rule:"Colour, height, radius and the one type style come from tokens, never the page."}],variants:[{label:"Primary",props:{variant:"primary"}},{label:"Secondary",props:{variant:"secondary"}},{label:"Ghost",props:{variant:"ghost"}},{label:"Primary + inverse",props:{variant:"primary",inverse:!0}},{label:"Secondary + inverse",props:{variant:"secondary",inverse:!0}},{label:"Ghost + inverse",props:{variant:"ghost",inverse:!0}}],states:[{key:"default",name:"Default"},{key:"hover",name:"Hover",pseudo:"hover"},{key:"focus",name:"Focus",pseudo:"focus-visible"},{key:"active",name:"Active",pseudo:"active"},{key:"disabled",name:"Disabled",props:{disabled:!0}},{key:"loading",name:"Loading",props:{loading:!0}}],render:U,interactions:["With a destination it renders a link and navigates. Without one it renders a button and acts.","Navigation comes from the destination, never from a click handler and never a button inside a link.","Hover changes the ground on pointer devices only. Nothing happens on touch.","Pressing scales it down. Five of the six combinations also step one rung along their hover colour.","Disabled and loading come from the screen that placed it. Loading also stops the control responding.","The wait is spoken as well as drawn: the ring is the picture, a polite status region is the voice.","A form never disables its own submit button. Let the submit run and show the error.","Only the disabled state uses opacity. No other state is drawn by fading the element.","Props and ARIA pass straight through to the rendered element, untouched."],accessibility:[{label:"Keyboard",text:"Render the native element, so nothing re-implements a keyboard: a button activates on Enter and Space, a link on Enter only."},{label:"Accessible name",text:"The visible label is the accessible name. The glyph carries aria-hidden and never names the control."},{label:"Accessible name, repeated CTAs",text:'A page with several "Shop Now" buttons must name each one for its own target, with aria-label at the call site.'},{label:"Focus",text:"Every combination shows a visible focus ring, the dark ground included, and no rule may remove it without putting one back."},{label:"Contrast, text",text:"The label clears 4.5:1 against the ground behind it, in every brand and in every state except disabled."},{label:"Contrast, borders",text:"A style that carries a border clears 3:1 against the page ground, in every brand. The secondary outline sits at that floor on purpose, 3.03:1 at worst."},{label:"Ghost on a photograph",text:"A ghost button has no ground of its own, so put a scrim or a flat band behind it before it lands on an image."},{label:"Disabled",text:"The native disabled attribute carries the state to assistive technology, and the shared opacity token draws it."},{label:"Loading",text:"Announce the wait when it starts and again when it ends, keep the visible label, and stop the control responding."},{label:"Reduced motion",text:"The 80ms press and the busy reveal both stop moving when the user asks for reduced motion."},{label:"Target size",text:"The hit area is at least 44px tall on touch, whatever the brand sets the height hook to."}]}}}},u={name:"Default",args:te,argTypes:ee,render:t=>e.jsx(ae,{...t}),parameters:{controls:{sort:"alpha"},docs:{description:{story:"The CTA with every option a designer can change. **Emphasis** sets how loud the action is and **Inverse** sets the ground; crossing them gives all six combinations. Turning Inverse on drops the preview onto a dark panel, which is the only ground those three are for. **State** shows disabled and loading. **Behaviour** turns the same component from a link into a button. **Leading icon** and **Trailing icon** are the two glyph seats, one on each side of the label; the New tab story below shows the trailing seat's OTHER occupant, an automatic arrow that a link opening in a new tab draws whether or not Trailing icon is on. Hover it with a mouse to see the hover colour: there is no hover on touch. Change the **Brand** toolbar and the same CTA re-themes across all 21 brands."}}}},m={name:"New tab",parameters:{docs:{description:{story:'A destination opening in a new tab draws its own arrow in the trailing seat automatically, the same registry glyph and the same new-tab rule every other link in the library uses, whether or not the caller authored a trailing icon of their own: the mandated glyph always wins the seat. A screen reader hears the destination note once, appended to the label ("Shop the collection (opens in a new tab)"), or folded into an `aria-label` when one is given instead of duplicating it.'}}},render:()=>e.jsxs("div",{style:z,children:[e.jsx(o,{variant:"primary",href:"#pdp-hero",children:"Shop the collection"}),e.jsx(o,{variant:"secondary",href:"#pdp-hero",target:"_blank",children:"Shop the collection"}),e.jsx(o,{variant:"ghost",href:"#pdp-hero",target:"_blank",trailingIcon:e.jsx(F,{}),children:"Shop the collection"})]})},A=Math.round(x/2.5),S=1400;function oe(){const[t,a]=c.useState(!1),[n,r]=c.useState(!1),h=c.useRef(null),i=c.useRef(null),s=(l,p,v)=>()=>{clearTimeout(p.current),l(!0),p.current=setTimeout(()=>l(!1),v)};return e.jsxs("div",{style:z,children:[e.jsx(o,{variant:"primary",loading:t,onClick:s(a,h,A),children:`Fast action (${A}ms)`}),e.jsx(o,{variant:"primary",loading:n,onClick:s(r,i,S),children:`Long action (${S/1e3}s)`})]})}const g={name:"Loading",parameters:{docs:{description:{story:`Click each button to see the threshold itself, not just the state it settles into. A wait shorter than ${x}ms never draws an indicator at all. The left one finishes in ${A}ms, so the ring is never even created: the click still disables the control at once and still speaks, it simply never had a reason to draw anything, and a fast action cannot flash. The right one runs for ${S/1e3} seconds, long enough for the ring to earn its place partway through. **Watch the button, not the ring**: the fast one never changes width at all, not by a pixel and not for a frame. Nothing about the loading state exists before ${x}ms, so there is no box to appear and vanish under you. The long one grows once, when the state arrives, and then holds still. **This is also where the wait can be heard**: turn a screen reader on and each click says "Loading…" when it starts and "Finished loading" when it ends, from a polite status region. That happens on both buttons, including the fast one that draws nothing: being told the control is busy never waits on the threshold. The visible label never changes, so the two signals never say the same thing twice.`}}},render:()=>e.jsx(oe,{})},ne=[{key:"primary",label:"Primary",props:{variant:"primary"},dimension:"emphasis"},{key:"secondary",label:"Secondary",props:{variant:"secondary"},dimension:"emphasis"},{key:"ghost",label:"Ghost",props:{variant:"ghost"},dimension:"emphasis"},{key:"primary-inverse",label:"Primary + inverse",props:{variant:"primary",inverse:!0},dimension:"emphasis"},{key:"secondary-inverse",label:"Secondary + inverse",props:{variant:"secondary",inverse:!0},dimension:"emphasis"},{key:"ghost-inverse",label:"Ghost + inverse",props:{variant:"ghost",inverse:!0},dimension:"emphasis"}],I=[{key:"default",label:"Default"},{key:"hover",label:"Hover",pseudo:"hover"},{key:"focus",label:"Focus",pseudo:"focusVisible"},{key:"active",label:"Active",pseudo:"active"},{key:"disabled",label:"Disabled",props:{disabled:!0},dimension:"state"},{key:"loading",label:"Loading",props:{loading:!0},dimension:"state"}];function U({variant:t,inverse:a,...n}){const r=e.jsx(o,{variant:t,inverse:a,...n,children:"Shop Now"});return a?e.jsx("div",{style:$,children:r}):r}const b={name:"State matrix",parameters:{themeShellPadding:!1,pseudo:Y(I),docs:{description:{story:"All six style-and-ground combinations against every state, in one grid: the three page-ground rows first, then the same three on the inverse axis. Reading a column straight down is the fastest way to see that a state behaves consistently across the whole set, which is what the inverse axis promises. **Hover**, **Focus** and **Active** are frozen with storybook-addon-pseudo-states instead of needing a live pointer, so all three sit still for a design review or a screenshot. The colours shown are the component's real CSS, just held open rather than triggered. **Disabled** and **Loading** are real props, not forced states. This is a QA tool, not themed product UI, which is why its own chrome stays neutral regardless of brand. It is the reusable template this page demonstrates for the rest of the atoms."}}},render:()=>e.jsx(V,{rows:ne,columns:I,render:U})},y={name:"Block",parameters:{docs:{description:{story:`A row of buttons, wrapped in \`ButtonBlock\`. **Why a primitive:** three hosts each carried a byte-identical copy of this one row, so it became one component with one hook. It runs from the **start** of its measure, heaviest button first (primary, then secondary, then ghost), and the order is the caller's source order, never re-sorted, only ever refused when it is wrong. **The row wraps, a label never does:** a Button label stays on one line, so when the labels run out of width the row breaks onto another rather than a sentence breaking mid-word.

**At most two calls to action, and only in these combinations, enforced in render:**

| Combination | Allowed | Why |
|---|---|---|
| primary + secondary | ✅ | confirm, or the quieter alternative |
| primary + ghost | ✅ | confirm, one step quieter on the second action |
| secondary + ghost | ✅ | the quieter alternative, one step quieter still |
| primary + primary | ❌ | a block never carries two competing primaries |
| secondary + secondary | ❌ | not one of the three allowed pairs |
| ghost + ghost | ❌ | not one of the three allowed pairs |
| any allowed pair, reversed | ❌ | order is part of the rule: the heavier button leads |

A single button is always fine, whatever its variant: the combination rule only has an opinion once there are two to relate to each other. The three blocks below show the three allowed pairs; a fourth combination throws instead of rendering, which is why there is no fourth block to click through.`}}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--size-500)"},children:[e.jsxs(w,{children:[e.jsx(o,{variant:"primary",children:"Save changes"}),e.jsx(o,{variant:"secondary",children:"Cancel"})]}),e.jsxs(w,{children:[e.jsx(o,{variant:"primary",children:"Add to bag"}),e.jsx(o,{variant:"ghost",children:"Add to wishlist"})]}),e.jsxs(w,{children:[e.jsx(o,{variant:"secondary",children:"Learn more"}),e.jsx(o,{variant:"ghost",children:"Not now"})]})]})};var D,E,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Default',
  args: BUTTON_DEFAULT_ARGS,
  argTypes: BUTTON_ARG_TYPES,
  render: args => <ConfigurableButton {...args} />,
  parameters: {
    controls: {
      sort: 'alpha'
    },
    docs: {
      description: {
        story: 'The CTA with every option a designer can change. **Emphasis** sets how loud the action ' + 'is and **Inverse** sets the ground; crossing them gives all six combinations. ' + 'Turning Inverse on drops the preview onto a dark panel, which is the only ground ' + 'those three are for. **State** shows disabled and loading. **Behaviour** turns the ' + 'same component from a link into a button. **Leading icon** and **Trailing icon** are ' + 'the two glyph seats, one on each side of the label; the New tab story below shows the ' + 'trailing seat\\'s OTHER occupant, an automatic arrow that a link opening in a new tab ' + 'draws whether or not Trailing icon is on. Hover it with a mouse to see the hover ' + 'colour: there is no hover on touch. Change the **Brand** toolbar and the same CTA ' + 're-themes across all 21 brands.'
      }
    }
  }
}`,...(L=(E=u.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var C,_,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'New tab',
  parameters: {
    docs: {
      description: {
        story: 'A destination opening in a new tab draws its own arrow in the trailing seat ' + 'automatically, the same registry glyph and the same new-tab rule every other link ' + 'in the library uses, whether or not the caller authored a trailing icon of their ' + 'own: the mandated glyph always wins the seat. A screen reader hears the destination ' + 'note once, appended to the label ("Shop the collection (opens in a new tab)"), or ' + 'folded into an \`aria-label\` when one is given instead of duplicating it.'
      }
    }
  },
  render: () => <div style={ROW}>
      <Button variant="primary" href="#pdp-hero">Shop the collection</Button>
      <Button variant="secondary" href="#pdp-hero" target="_blank">Shop the collection</Button>
      <Button variant="ghost" href="#pdp-hero" target="_blank" trailingIcon={<BagIcon />}>
        Shop the collection
      </Button>
    </div>
}`,...(N=(_=m.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var O,R,j;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Loading',
  parameters: {
    docs: {
      description: {
        story: 'Click each button to see the threshold itself, not just the state it settles into. ' + \`A wait shorter than \${LOADING_REVEAL_DELAY_MS}ms never draws an indicator at all. \` + \`The left one finishes in \${FAST_ACTION_MS}ms, so the ring is never even created: \` + 'the click still disables the control at once and still speaks, it simply never had ' + 'a reason to draw anything, and a fast action cannot flash. The right one runs for ' + \`\${SLOW_ACTION_MS / 1000} seconds, long enough for the ring to earn its place partway \` + 'through. **Watch the button, not the ring**: the fast one never changes width at ' + 'all, not by a pixel and not for a frame. Nothing about the loading state exists ' + \`before \${LOADING_REVEAL_DELAY_MS}ms, so there is no box to appear and vanish under \` + 'you. The long one grows once, when the state arrives, and then holds still. ' + '**This is also where the wait can be heard**: turn a screen reader on and ' + 'each click says "Loading…" when it starts and "Finished loading" when it ends, from ' + 'a polite status region. That happens on both buttons, including the fast one that ' + 'draws nothing: being told the control is busy never waits on the threshold. The ' + 'visible label never changes, so the two signals never say the same thing twice.'
      }
    }
  },
  render: () => <LoadingTimedDemo />
}`,...(j=(R=g.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var G,M,q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'State matrix',
  parameters: {
    themeShellPadding: false,
    // Built from the SAME columns array the grid renders from, so the
    // \`[data-state-matrix-col="hover"] button\` selectors this produces can
    // never drift out of sync with what the table actually draws.
    pseudo: getStateMatrixPseudoParameters(STATE_MATRIX_COLUMNS),
    docs: {
      description: {
        story: 'All six style-and-ground combinations against every state, in one grid: the three ' + 'page-ground rows first, then the same three on the inverse axis. Reading a column ' + 'straight down is the fastest way to see that a state behaves consistently across ' + 'the whole set, which is what the inverse axis promises. **Hover**, **Focus** and ' + '**Active** are frozen with storybook-addon-pseudo-states instead of needing a ' + 'live pointer, so all three sit still for a design review or a screenshot. The ' + 'colours shown are the component\\'s real CSS, just held open rather than triggered. ' + '**Disabled** and **Loading** are real props, not forced states. This is a QA tool, ' + 'not themed product UI, which is why its own chrome stays neutral regardless of ' + 'brand. It is the reusable template this page demonstrates for the rest of the ' + 'atoms.'
      }
    }
  },
  render: () => <StateMatrixGrid rows={STATE_MATRIX_ROWS} columns={STATE_MATRIX_COLUMNS} render={renderStateMatrixCell} />
}`,...(q=(M=b.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var P,W,H;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Block',
  parameters: {
    docs: {
      description: {
        story: 'A row of buttons, wrapped in \`ButtonBlock\`. **Why a primitive:** three hosts each carried ' + 'a byte-identical copy of this one row, so it became one component with one hook. It runs ' + 'from the **start** of its measure, heaviest button first (primary, then secondary, then ' + 'ghost), and the order is the caller\\'s source order, never re-sorted, only ever refused ' + 'when it is wrong. **The row wraps, a label never does:** a Button label stays on one ' + 'line, so when the labels run out of width the row breaks onto another rather than a ' + 'sentence breaking mid-word.\\n\\n' + '**At most two calls to action, and only in these combinations, enforced in render:**\\n\\n' + '| Combination | Allowed | Why |\\n' + '|---|---|---|\\n' + '| primary + secondary | ✅ | confirm, or the quieter alternative |\\n' + '| primary + ghost | ✅ | confirm, one step quieter on the second action |\\n' + '| secondary + ghost | ✅ | the quieter alternative, one step quieter still |\\n' + '| primary + primary | ❌ | a block never carries two competing primaries |\\n' + '| secondary + secondary | ❌ | not one of the three allowed pairs |\\n' + '| ghost + ghost | ❌ | not one of the three allowed pairs |\\n' + '| any allowed pair, reversed | ❌ | order is part of the rule: the heavier button leads |\\n\\n' + 'A single button is always fine, whatever its variant: the combination rule only has an ' + 'opinion once there are two to relate to each other. The three blocks below show the ' + 'three allowed pairs; a fourth combination throws instead of rendering, which is why ' + 'there is no fourth block to click through.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--size-500)'
  }}>
      <ButtonBlock>
        <Button variant="primary">Save changes</Button>
        <Button variant="secondary">Cancel</Button>
      </ButtonBlock>
      <ButtonBlock>
        <Button variant="primary">Add to bag</Button>
        <Button variant="ghost">Add to wishlist</Button>
      </ButtonBlock>
      <ButtonBlock>
        <Button variant="secondary">Learn more</Button>
        <Button variant="ghost">Not now</Button>
      </ButtonBlock>
    </div>
}`,...(H=(W=y.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const ge=["Playground","NewTab","LoadingTimed","StateMatrix","Block"];export{y as Block,g as LoadingTimed,m as NewTab,u as Playground,b as StateMatrix,ge as __namedExportsOrder,me as default};
