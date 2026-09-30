import{j as e}from"./iframe-6dx3hp_4.js";import{I as f}from"./Icon-BihOhSWB.js";import{s as x,N as w,b as k,o as _}from"./newTabMark-TI50-QeA.js";const S=["default","accent"];function T({href:a,external:l=!1,target:b,rel:n,emphasis:i="default",icon:h,collapsible:t=!1,disclosure:d=!1,column:v=!1,inverse:g=!1,className:y,children:u,...s}){const m=S.includes(i)?i:"default",c=["ds-nav-item",m==="default"?null:`ds-nav-item--${m}`,t?"ds-nav-item--collapsible":null,d&&!t?"ds-nav-item--disclosure":null,v?"ds-nav-item--column":null,g?"ds-nav-item--inverse":null,y].filter(Boolean).join(" "),r=l?k:b,N=l?n?`${n} noopener noreferrer`:"noopener noreferrer":n,o=!!a&&_(r),E=o&&x({target:r,children:u});if(o&&s["aria-label"])throw new Error(`NavItem cannot speak the new-tab note for a row the host has already named. A name written by the host replaces the row's contents, so the hidden note would be silent. Append ${JSON.stringify(w)} to the name you passed, or drop the name and let the row be announced by its own words.`);const p=e.jsxs(e.Fragment,{children:[h?e.jsx("span",{className:"ds-nav-item__icon","aria-hidden":"true",children:h}):null,e.jsx("span",{className:"ds-nav-item__label",children:u}),E?e.jsx("span",{className:"ds-nav-item__external-mark",children:e.jsx(f,{name:"arrow-up-right",size:"sm"})}):null,o?e.jsx("span",{className:"ds-sr-only",children:w}):null,t||d?e.jsx("span",{className:"ds-nav-item__chevron","aria-hidden":"true",children:e.jsx(f,{name:"chevron-down",size:"sm"})}):null]});return a?e.jsx("a",{className:c,href:a,target:r,rel:N,...s,children:p}):e.jsx("button",{type:"button",className:c,...s,children:p})}T.__docgenInfo={description:`One row of site navigation.

@param {string} [href]  The destination. ITS PRESENCE FIXES THE ELEMENT: given one this is a
  real \`<a href>\`; given none it is a \`<button type="button">\`, which is what a trigger that
  only opens a panel has to be.
@param {'default'|'accent'} [emphasis]  Which ink the row RESTS on. \`accent\` is the authored
  emphasis link; it is not, and must not be read as, "the page you are on".
@param {React.ReactNode} [icon]  An optional mark before the label, in a fixed box so the
  three delivery routes the criteria leaves open (an emoji, an uploaded SVG, a library glyph)
  cannot shift the label between them. Decorative: it is \`aria-hidden\`, because the label
  beside it already says the same thing.
@param {boolean} [disclosure]  The row OPENS A PANEL, so it draws the library's chevron after
  the label. Say it wherever a popover, megamenu or drawer section hangs off the row: the host
  is the only side that knows. It says the row HAS a mark and nothing about whether the panel
  is open, which is \`aria-expanded\`'s, through the spread.
@param {boolean} [collapsible]  Draw the row as a DISCLOSURE: full width, a thumb-sized block
  inset, and the library's chevron pinned at the trailing edge, turning over when the row
  reports itself open. It says the row HAS a disclosure mark and nothing about whether the
  thing is open: \`aria-expanded\` and \`aria-controls\` are the host's, through the spread, and
  the mark reads the attribute rather than a prop.
@param {boolean} [external]  The destination is another tab or window. Sugar for
  \`target="_blank" rel="noopener noreferrer"\`, and what makes the row draw the library's
  new-tab mark after its label and speak the note, the same rule \`Link\` reads (newTabMark.js).
  Meaningful with \`href\` only.`,methods:[],displayName:"NavItem",props:{external:{defaultValue:{value:"false",computed:!1},required:!1},emphasis:{defaultValue:{value:"'default'",computed:!1},required:!1},collapsible:{defaultValue:{value:"false",computed:!1},required:!1},disclosure:{defaultValue:{value:"false",computed:!1},required:!1},column:{defaultValue:{value:"false",computed:!1},required:!1},inverse:{defaultValue:{value:"false",computed:!1},required:!1}}};export{T as N};
