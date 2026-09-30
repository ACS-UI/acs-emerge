import{j as e}from"./iframe-6dx3hp_4.js";import{I as u}from"./Icon-BihOhSWB.js";import{b as _,s as I,N as p,o as R}from"./newTabMark-TI50-QeA.js";function A({as:w="div",media:t,icon:a,iconSide:f="start",indent:b=!1,description:n,strong:v=!1,external:g=!1,selected:h,selectionIndicator:m=!0,active:o,activeFocusVisible:N=!0,disabled:y=!1,className:k,children:c,...s}){if(a&&t)throw new Error("MenuItem cannot carry an icon and a picture at once. A picture row is the card you click whole and the picture is already its leading mark. Drop the icon, or drop the picture and let the glyph lead.");if(t&&n)throw new Error("MenuItem cannot carry a picture and a description at once. The variants are simple, with-description and with-thumbnail, and a row is only ever one of them. Drop the description, or drop the picture and let the words carry both lines.");const r=f==="end"?"end":"start",i=s.target??(g?_:void 0),d=R(i),x=s.rel??(d?"noopener noreferrer":void 0),E=I({target:i,children:c});if(d&&s["aria-label"])throw new Error(`MenuItem cannot speak the new-tab note for a row the host has already named. A name written by the host replaces the row's contents, so the hidden note would be silent. Append ${JSON.stringify(p)} to the name you passed, or drop the name and let the row be announced by its own words.`);const l=o!==void 0,T=["ds-menu-item",k].filter(Boolean).join(" ");return e.jsxs(w,{className:T,"data-variant":t?"with-thumbnail":n?"with-description":"simple","data-icon":a?r:void 0,"data-indent":b?"true":void 0,"data-weight":v?"strong":void 0,"data-cursor":l?"managed":"pointer","data-active":l&&o?"true":void 0,"data-focus-visible":l&&o&&N?"true":void 0,"data-selected":h?"true":void 0,"data-selection-indicator":m?"true":void 0,"data-disabled":y?"true":void 0,target:i,rel:x,...s,children:[t?e.jsx("span",{className:"ds-menu-item__media",children:t}):null,a&&r==="start"?e.jsx("span",{className:"ds-menu-item__icon",children:a}):null,e.jsxs("span",{className:"ds-menu-item__text",children:[e.jsxs("span",{className:"ds-menu-item__label",children:[c,E&&e.jsx("span",{className:"ds-menu-item__external-mark",children:e.jsx(u,{name:"arrow-up-right"})}),d&&e.jsx("span",{className:"ds-sr-only",children:p})]}),n?e.jsx("span",{className:"ds-menu-item__description",children:n}):null]}),a&&r==="end"?e.jsx("span",{className:"ds-menu-item__icon",children:a}):null,h&&m?e.jsx("span",{className:"ds-menu-item__selection","aria-hidden":"true",children:e.jsx(u,{name:"check",size:"sm"})}):null]})}A.__docgenInfo={description:`One row of a menu or a suspended list.

@param {'div'|'li'|'a'|'button'|string} as   The element to render. \`div\` by default, the
  neutral box. The host chooses; this component never infers one from the ARIA it is handed.
@param {React.ReactNode} [media]  A picture to lead the row with, and ITS PRESENCE IS THE
  RUNG: given one the row draws as the big pickable card, given none it is the words row every
  menu in this library already ships. There is no second prop naming the rung, so the two can
  never disagree. The slot is a track and not a frame: the host sizes what goes in it, and the
  corner belongs to the picture.
@param {boolean} [selected] Draws the chosen ground, editorial text and a small trailing check.
  The host owns aria-selected, aria-checked or aria-current for its own pattern.
@param {boolean} [selectionIndicator] Opt out for navigation rows; true for selection lists.
@param {boolean} [activeFocusVisible] The managed cursor came from keyboard input, not a pointer.
@param {boolean} [active]    DRAWING ONLY, and its PRESENCE is also the mode switch: passing it
  at all declares "my host manages the cursor", which turns this row's own \`:hover\` off.
@param {boolean} [disabled]  DRAWING ONLY. The host writes \`aria-disabled\` and refuses the
  activation; a \`disabled\` attribute belongs to the elements that have one, and a \`div\` is not
  one of them.
@param {React.ReactNode} [icon]  A small mark beside the words. ONE slot, so a mark on both
  sides is not a thing this component can be asked for. It may not be combined with \`media\`:
  see the header for why a picture row refuses a second mark, and note that this one throws.
@param {'start'|'end'} [iconSide]  Which edge the mark sits on. \`start\` leads the words,
  \`end\` sits at the far edge of the row rather than trailing the label, because a mark that
  floats beside a short name reads as part of the name. A trailing mark on a row whose HOST
  publishes \`aria-expanded\` turns over when the row reports itself open: the disclosure
  behaviour is derived from the announcement, never from a prop of its own.
@param {boolean} [indent]  Draw this row one level down from its siblings: the same row with
  its words on the next step of the list's own inset grid. One level, not a depth.
@param {React.ReactNode} [description]  A SECOND LINE under the label, and ITS PRESENCE IS THE
  RUNG in the same way the picture's is: given one the row is \`with-description\`, given none it
  is \`simple\`. It may not be combined with \`media\`, because the variants are three and a row is
  only ever one of them. It carries no ink of its own, only a smaller size.
@param {boolean} [strong]  Draw the LABEL heavy. It moves the row's own type recipe to its
  strong pole, so the face moves with the weight and a brand's real emphasis cut is used rather
  than a synthesised bold. The second line, if there is one, stays as it was: the name is what
  gains emphasis, not the note under it.
@param {boolean} [external]  The row opens in another tab. Sugar for the target and the rel a
  caller would otherwise spell out, the same opt-in the Link atom publishes, and the visible
  mark follows the rule both atoms import rather than a prop: a row with words takes the mark, a
  row that is only a glyph does not. A row the HOST has already named cannot take the spoken
  half from this atom and is refused instead.`,methods:[],displayName:"MenuItem",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1},iconSide:{defaultValue:{value:"'start'",computed:!1},required:!1},indent:{defaultValue:{value:"false",computed:!1},required:!1},strong:{defaultValue:{value:"false",computed:!1},required:!1},external:{defaultValue:{value:"false",computed:!1},required:!1},selectionIndicator:{defaultValue:{value:"true",computed:!1},required:!1},activeFocusVisible:{defaultValue:{value:"true",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{A as M};
