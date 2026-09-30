import{j as e,M as r}from"./iframe-6dx3hp_4.js";import{useMDXComponents as t}from"./index-DscS5J8E.js";import"./preload-helper-C1FmrZbK.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Guides/Favicon"}),`
`,e.jsx(n.h1,{id:"favicon",children:"Favicon"}),`
`,e.jsx(n.p,{children:`The small mark a browser shows in a tab, a bookmark, a history entry and a phone home screen. It
is the one piece of brand identity that appears outside the page, so it is the one piece a site
cannot inherit from the design system: each brand ships its own.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The artwork comes from the site that is live today."}),` No favicon is redrawn for the migration.
What changes is how many files are published and how they are declared, not the mark itself.`]}),`
`,e.jsx(n.h2,{id:"what-to-publish-on-the-new-site",children:"What to publish on the new site"}),`
`,e.jsx(n.p,{children:"Four files cover every browser and device in use."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"File"}),e.jsx(n.th,{children:"Size"}),e.jsx(n.th,{children:"What it serves"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"favicon.ico"})}),e.jsx(n.td,{children:"32×32"}),e.jsx(n.td,{children:"Older browsers, and the file search engines still look for at the site root"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"icon.svg"})}),e.jsx(n.td,{children:"Any"}),e.jsx(n.td,{children:"Every current browser. One vector scales to every size, and it can carry a dark-mode variant inside itself"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"apple-touch-icon.png"})}),e.jsx(n.td,{children:"180×180"}),e.jsx(n.td,{children:"iOS and iPadOS, when someone adds the site to their home screen"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Two PNGs named in the web manifest"}),e.jsx(n.td,{children:"192×192 and 512×512"}),e.jsx(n.td,{children:"Android, when someone installs the site"})]})]})]}),`
`,e.jsx(n.h2,{id:"what-ships-for-revlon",children:"What ships for Revlon"}),`
`,e.jsxs(n.p,{children:["The Revlon set is in ",e.jsx(n.code,{children:"public/revlon-favicon/"}),`. This Storybook uses it for its own browser tab.
Every picture is the live site's own file, byte for byte.`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"File"}),e.jsx(n.th,{children:"Taken from revlon.com"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"favicon.ico"}),", with 16, 32 and 48 px inside"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"https://www.revlon.com/cdn/shop/files/favicon.ico"})})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"apple-touch-icon.png"}),", 180 px"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"https://www.revlon.com/cdn/shop/files/apple-touch-icon-180x180.png?v=15415165209874855402"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"web-app-manifest-192x192.png"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"https://www.revlon.com/cdn/shop/files/web-app-manifest-192x192.png"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"web-app-manifest-512x512.png"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"https://www.revlon.com/cdn/shop/files/web-app-manifest-512x512.png"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"site.webmanifest"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"https://www.revlon.com/cdn/shop/files/manifest.json?v=5576993873638834773"}),", cut down to the two icons above, each listed for both uses"]})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The live page declares the 180 px icon and the manifest in its head."}),`
`,e.jsx(n.li,{children:"The two manifest icons are the 192 and 512 the live manifest lists."}),`
`,e.jsxs(n.li,{children:["The live manifest marks those two for Android's shaped icons only (",e.jsx(n.code,{children:"maskable"}),`). This manifest
lists each one twice: once for that use, and once for every other use (`,e.jsx(n.code,{children:"any"}),`). Desktop Chrome
and Edge install a site only from an icon marked for any use, and the live icons that carried
that use are among the ones dropped below. The pictures are unchanged.`]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:".ico"}),` is on the store's file server, but the live page does not declare it. Its 16 px
picture matches the 16 px icon the page does declare.`]}),`
`]}),`
`,e.jsx(n.p,{children:"The live page and its manifest name twenty-one more files. These were left out:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Eight smaller home screen icons, from 57 to 152 px. iOS scales the 180 px one down."}),`
`,e.jsxs(n.li,{children:["The 16, 32 and 96 px tab icons. The ",e.jsx(n.code,{children:".ico"})," carries the small sizes."]}),`
`,e.jsx(n.li,{children:`Seven Android icons, from 36 to 256 px, one of them a broken link. The 192 and 512, now listed
for any use as well, take their place.`}),`
`,e.jsx(n.li,{children:"The Safari pinned tab mask. Current Safari uses the regular icon instead."}),`
`,e.jsx(n.li,{children:`The Windows tile settings and tile picture. Neither tile picture they name loads on the live
site.`}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["No ",e.jsx(n.code,{children:"icon.svg"})," ships."]})," The store's file server holds a ",e.jsx(n.code,{children:"favicon.svg"}),`, but the live page does not
declare it, and it is a 256 px picture inside an SVG file rather than a drawing. A true vector has
to be cut from the brand artwork.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The live site uses two drawings of the R."})," The 16 and 32 px tab icons, and the ",e.jsx(n.code,{children:".ico"}),`, show a
flat red R, edge to edge, on a transparent ground. The home screen icons and the two manifest icons
show an R that shades from red to orange at its foot, on a white square with padding. This set
keeps the same split.`]}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"It is not the logo shrunk."}),` At 32 pixels a wordmark is a grey smudge. The favicon is the one
element of the mark that survives at that size, usually a single letter or a symbol.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test it at 16 pixels, not at 512."})," If it reads at 16 it reads everywhere."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Give it its own padding."}),` A mark drawn edge to edge in the square looks larger and cruder
than the marks beside it in a row of tabs.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use a solid background, not transparency."}),` A transparent mark disappears against a dark
browser chrome, which is what most people are running.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dark mode is optional and lives inside the SVG."})," A ",e.jsx(n.code,{children:"prefers-color-scheme"}),` media query in the
file itself swaps the colours. Only worth doing when the mark genuinely fails on one of the two
grounds.`]}),`
`]})]})}function a(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{a as default};
