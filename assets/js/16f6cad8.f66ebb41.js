"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84694],{41124:(e,n,i)=>{i.d(n,{Z:()=>a});var s=i(24246),t=(i(27378),i(4646));const l={tableOfContentsInline:"tableOfContentsInline_2sru"};function a({toc:e,minHeadingLevel:n,maxHeadingLevel:i}){return(0,s.jsx)("div",{className:l.tableOfContentsInline,children:(0,s.jsx)(t.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null})})}},4646:(e,n,i)=>{i.d(n,{Z:()=>I});var s=i(24246),t=i(27378),l=i(73919);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},s=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),s.forEach((function(n){a(e,n,i[n])}))}return e}function c(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,s)}return i}(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})),e}function r(e,n){if(null==e)return{};var i,s,t=function(e,n){if(null==e)return{};var i,s,t={},l=Object.keys(e);for(s=0;s<l.length;s++)i=l[s],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)i=l[s],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}function d(e){const n=e.map((e=>c(o({},e),{parentIndex:-1,children:[]}))),i=Array(7).fill(-1);n.forEach(((e,n)=>{const s=i.slice(2,e.level);e.parentIndex=Math.max(...s),i[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:i}=e,t=r(e,["parentIndex"]);i>=0?n[i].children.push(t):s.push(t)})),s}function u({toc:e,minHeadingLevel:n,maxHeadingLevel:i}){return e.flatMap((e=>{const s=u({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[c(o({},e),{children:s})]:s}))}function b(e){const n=e.getBoundingClientRect();return n.top===n.bottom?b(e.parentNode):n}function m(e,{anchorTopOffset:n}){const i=e.find((e=>b(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(b(i))?i:null!==(s=e[e.indexOf(i)-1])&&void 0!==s?s:null;var s}var t;return null!==(t=e[e.length-1])&&void 0!==t?t:null}function h(){const e=(0,t.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,t.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function p(e){const n=(0,t.useRef)(void 0),i=h();(0,t.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:t,minHeadingLevel:l,maxHeadingLevel:a}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function({minHeadingLevel:e,maxHeadingLevel:n}){const i=[];for(let s=e;s<=n;s+=1)i.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),c=m(o,{anchorTopOffset:i.current}),r=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,i){i?(n.current&&n.current!==e&&n.current.classList.remove(t),e.classList.add(t),n.current=e):e.classList.remove(t)}(e,e===r)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,i])}var x=i(41428);function g({toc:e,className:n,linkClassName:i,isChild:t}){return e.length?(0,s.jsx)("ul",{className:t?void 0:n,children:e.map((e=>(0,s.jsxs)("li",{children:[(0,s.jsx)(x.Z,{to:`#${e.id}`,className:null!=i?i:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,s.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const f=t.memo(g);function v(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function j(e,n){if(null==e)return{};var i,s,t=function(e,n){if(null==e)return{};var i,s,t={},l=Object.keys(e);for(s=0;s<l.length;s++)i=l[s],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)i=l[s],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}function I(e){var{toc:n,className:i="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:r}=e,b=j(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const m=(0,l.L)(),h=null!=c?c:m.tableOfContents.minHeadingLevel,x=null!=r?r:m.tableOfContents.maxHeadingLevel,g=function({toc:e,minHeadingLevel:n,maxHeadingLevel:i}){return(0,t.useMemo)((()=>u({toc:d(e),minHeadingLevel:n,maxHeadingLevel:i})),[e,n,i])}({toc:n,minHeadingLevel:h,maxHeadingLevel:x});return p((0,t.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:h,maxHeadingLevel:x}}),[a,o,h,x])),(0,s.jsx)(f,function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},s=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),s.forEach((function(n){v(e,n,i[n])}))}return e}({toc:g,className:i,linkClassName:a},b))}},6698:(e,n,i)=>{i.d(n,{Z:()=>r});var s=i(24246),t=(i(27378),i(40624));const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},s=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),s.forEach((function(n){a(e,n,i[n])}))}return e}function c(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,s)}return i}(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})),e}function r({children:e,minHeight:n,url:i="http://localhost:3000",style:a,bodyStyle:r}){return(0,s.jsxs)("div",{className:l.browserWindow,style:c(o({},a),{minHeight:n}),children:[(0,s.jsxs)("div",{className:l.browserWindowHeader,children:[(0,s.jsxs)("div",{className:l.buttons,children:[(0,s.jsx)("span",{className:l.dot,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:l.dot,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:l.dot,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,t.Z)(l.browserWindowAddressBar,"text--truncate"),children:i}),(0,s.jsx)("div",{className:l.browserWindowMenuIcon,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:l.bar}),(0,s.jsx)("span",{className:l.bar}),(0,s.jsx)("span",{className:l.bar})]})})]}),(0,s.jsx)("div",{className:l.browserWindowBody,style:r,children:e})]})}},57378:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var s=i(24246),t=i(71670),l=i(6698),a=i(41124);const o={id:"toc",description:"Customizing headings and table-of-contents in Markdown",slug:"/markdown-features/toc"},c="Headings and Table of contents",r={id:"guides/markdown-features/toc",title:"Headings and Table of contents",description:"Customizing headings and table-of-contents in Markdown",source:"@site/docs/guides/markdown-features/markdown-features-toc.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/toc",permalink:"/docs/markdown-features/toc",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-toc.mdx",tags:[],version:"current",lastUpdatedBy:"dabreadman",lastUpdatedAt:1716574571e3,frontMatter:{id:"toc",description:"Customizing headings and table-of-contents in Markdown",slug:"/markdown-features/toc"},sidebar:"docs",previous:{title:"Admonitions",permalink:"/docs/markdown-features/admonitions"},next:{title:"Assets",permalink:"/docs/markdown-features/assets"}},d={},u=[{value:"Markdown headings",id:"markdown-headings",level:2},{value:"Heading IDs",id:"heading-ids",level:3},{value:"Table of contents heading level",id:"table-of-contents-heading-level",level:2},{value:"Inline table of contents",id:"inline-table-of-contents",level:2},{value:"Customizing table of contents generation",id:"customizing-table-of-contents-generation",level:2},{value:"Example Section 1",id:"example-section-1",level:2},{value:"Example Subsection 1 a",id:"example-subsection-1-a",level:3},{value:"Example subsubsection 1 a I",id:"example-subsubsection-1-a-i",level:4},{value:"Example subsubsection 1 a II",id:"example-subsubsection-1-a-ii",level:4},{value:"Example subsubsection 1 a III",id:"example-subsubsection-1-a-iii",level:4},{value:"Example Subsection 1 b",id:"example-subsection-1-b",level:3},{value:"Example subsubsection 1 b I",id:"example-subsubsection-1-b-i",level:4},{value:"Example subsubsection 1 b II",id:"example-subsubsection-1-b-ii",level:4},{value:"Example subsubsection 1 b III",id:"example-subsubsection-1-b-iii",level:4},{value:"Example Subsection 1 c",id:"example-subsection-1-c",level:3},{value:"Example subsubsection 1 c I",id:"example-subsubsection-1-c-i",level:4},{value:"Example subsubsection 1 c II",id:"example-subsubsection-1-c-ii",level:4},{value:"Example subsubsection 1 c III",id:"example-subsubsection-1-c-iii",level:4},{value:"Example Section 2",id:"example-section-2",level:2},{value:"Example Subsection 2 a",id:"example-subsection-2-a",level:3},{value:"Example subsubsection 2 a I",id:"example-subsubsection-2-a-i",level:4},{value:"Example subsubsection 2 a II",id:"example-subsubsection-2-a-ii",level:4},{value:"Example subsubsection 2 a III",id:"example-subsubsection-2-a-iii",level:4},{value:"Example Subsection 2 b",id:"example-subsection-2-b",level:3},{value:"Example subsubsection 2 b I",id:"example-subsubsection-2-b-i",level:4},{value:"Example subsubsection 2 b II",id:"example-subsubsection-2-b-ii",level:4},{value:"Example subsubsection 2 b III",id:"example-subsubsection-2-b-iii",level:4},{value:"Example Subsection 2 c",id:"example-subsection-2-c",level:3},{value:"Example subsubsection 2 c I",id:"example-subsubsection-2-c-i",level:4},{value:"Example subsubsection 2 c II",id:"example-subsubsection-2-c-ii",level:4},{value:"Example subsubsection 2 c III",id:"example-subsubsection-2-c-iii",level:4},{value:"Example Section 3",id:"example-section-3",level:2},{value:"Example Subsection 3 a",id:"example-subsection-3-a",level:3},{value:"Example subsubsection 3 a I",id:"example-subsubsection-3-a-i",level:4},{value:"Example subsubsection 3 a II",id:"example-subsubsection-3-a-ii",level:4},{value:"Example subsubsection 3 a III",id:"example-subsubsection-3-a-iii",level:4},{value:"Example Subsection 3 b",id:"example-subsection-3-b",level:3},{value:"Example subsubsection 3 b I",id:"example-subsubsection-3-b-i",level:4},{value:"Example subsubsection 3 b II",id:"example-subsubsection-3-b-ii",level:4},{value:"Example subsubsection 3 b III",id:"example-subsubsection-3-b-iii",level:4},{value:"Example Subsection 3 c",id:"example-subsection-3-c",level:3},{value:"Example subsubsection 3 c I",id:"example-subsubsection-3-c-i",level:4},{value:"Example subsubsection 3 c II",id:"example-subsubsection-3-c-ii",level:4},{value:"Example subsubsection 3 c III",id:"example-subsubsection-3-c-iii",level:4}];function b(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Code:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Code",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"headings-and-table-of-contents",children:"Headings and Table of contents"}),"\n",(0,s.jsx)(n.h2,{id:"markdown-headings",children:"Markdown headings"}),"\n",(0,s.jsx)(n.p,{children:"You can use regular Markdown headings."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"## Level 2 title\n\n### Level 3 title\n\n#### Level 4 title\n"})}),"\n",(0,s.jsx)(n.p,{children:"Each Markdown heading will appear as a table of contents entry."}),"\n",(0,s.jsx)(n.h3,{id:"heading-ids",children:"Heading IDs"}),"\n",(0,s.jsx)(n.p,{children:"Each heading has an ID that can be automatically generated or explicitly specified. Heading IDs allow you to link to a specific document heading in Markdown or JSX:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"[link](#heading-id)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<Link to="#heading-id">link</Link>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["By default, Docusaurus will generate heading IDs for you, based on the heading text. For example, ",(0,s.jsx)(n.code,{children:"### Hello World"})," will have ID ",(0,s.jsx)(n.code,{children:"hello-world"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Generated IDs have ",(0,s.jsx)(n.strong,{children:"some limitations"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The ID might not look good"}),"\n",(0,s.jsxs)(n.li,{children:["You might want to ",(0,s.jsx)(n.strong,{children:"change or translate"})," the text without updating the existing ID"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A special Markdown syntax lets you set an ",(0,s.jsx)(n.strong,{children:"explicit heading id"}),":"]}),"\n",(0,s.jsx)(i,{language:"md",children:"### Hello World {#my-explicit-id}\n"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/cli#docusaurus-write-heading-ids-sitedir",children:(0,s.jsx)(n.code,{children:"write-heading-ids"})})})," CLI command to add explicit IDs to all your Markdown documents."]})}),"\n",(0,s.jsx)(n.admonition,{title:"Avoid colliding IDs",type:"warning",children:(0,s.jsx)(n.p,{children:"Generated heading IDs will be guaranteed to be unique on each page, but if you use custom IDs, make sure each one appears exactly once on each page, or there will be two DOM elements with the same ID, which is invalid HTML semantics, and will lead to one heading being unlinkable."})}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents-heading-level",children:"Table of contents heading level"}),"\n",(0,s.jsx)(n.p,{children:"Each Markdown document displays a table of contents on the top-right corner. By default, this table only shows h2 and h3 headings, which should be sufficient for an overview of the page structure. In case you need to change the range of headings displayed, you can customize the minimum and maximum heading level \u2014 either per page or globally."}),"\n",(0,s.jsxs)(n.p,{children:["To set the heading level for a particular page, use the ",(0,s.jsx)(n.code,{children:"toc_min_heading_level"})," and ",(0,s.jsx)(n.code,{children:"toc_max_heading_level"})," front matter."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="myDoc.md"',children:"---\n# Display h2 to h5 headings\ntoc_min_heading_level: 2\ntoc_max_heading_level: 5\n---\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To set the heading level for ",(0,s.jsx)(n.em,{children:"all"})," pages, use the ",(0,s.jsx)(n.a,{href:"/docs/api/themes/configuration#table-of-contents",children:(0,s.jsx)(n.code,{children:"themeConfig.tableOfContents"})})," option."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    tableOfContents: {\n      // highlight-start\n      minHeadingLevel: 2,\n      maxHeadingLevel: 5,\n      // highlight-end\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you've set the options globally, you can still override them locally via front matter."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"themeConfig"})," option would apply to all TOC on the site, including ",(0,s.jsx)(n.a,{href:"#inline-table-of-contents",children:"inline TOC"}),", but front matter options only affect the top-right TOC. You need to use the ",(0,s.jsx)(n.code,{children:"minHeadingLevel"})," and ",(0,s.jsx)(n.code,{children:"maxHeadingLevel"})," props to customize each ",(0,s.jsx)(n.code,{children:"<TOCInline />"})," component."]})}),"\n",(0,s.jsx)(n.h2,{id:"inline-table-of-contents",children:"Inline table of contents"}),"\n",(0,s.jsx)(n.p,{children:"It is also possible to display an inline table of contents directly inside a Markdown document, thanks to MDX."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"toc"})," variable is available in any MDX document and contains all the headings of an MDX document. By default, only ",(0,s.jsx)(n.code,{children:"h2"})," and ",(0,s.jsx)(n.code,{children:"h3"})," headings are displayed in the TOC. You can change which heading levels are visible by setting ",(0,s.jsx)(n.code,{children:"minHeadingLevel"})," or ",(0,s.jsx)(n.code,{children:"maxHeadingLevel"})," for individual ",(0,s.jsx)(n.code,{children:"TOCInline"})," components."]}),"\n","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />\n"})}),"\n","\n",(0,s.jsx)(l.Z,{children:(0,s.jsx)(a.Z,{toc:u})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"toc"})," global is just a list of heading items:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare const toc: {\n  value: string;\n  id: string;\n  level: number;\n}[];\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that the ",(0,s.jsx)(n.code,{children:"toc"})," global is a flat array, so you can easily cut out unwanted nodes or insert extra nodes, and create a new TOC tree."]}),"\n","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import TOCInline from '@theme/TOCInline';\n\n<TOCInline\n  // Only show h2 and h4 headings\n  toc={toc.filter((node) => node.level === 2 || node.level === 4)}\n  minHeadingLevel={2}\n  // Show h4 headings in addition to the default h2 and h3 headings\n  maxHeadingLevel={4}\n/>\n"})}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsx)(a.Z,{toc:u.filter((e=>2===e.level||4===e.level)),minHeadingLevel:2,maxHeadingLevel:4})}),"\n",(0,s.jsx)(n.h2,{id:"customizing-table-of-contents-generation",children:"Customizing table of contents generation"}),"\n",(0,s.jsxs)(n.p,{children:["The table-of-contents is generated by parsing the Markdown source with a ",(0,s.jsx)(n.a,{href:"/docs/markdown-features/plugins",children:"Remark plugin"}),". There are known edge-cases where it generates false-positives and false-negatives."]}),"\n",(0,s.jsxs)(n.p,{children:["Markdown headings within hideable areas will still show up in the TOC. For example, headings within ",(0,s.jsx)(n.a,{href:"/docs/markdown-features/tabs",children:(0,s.jsx)(n.code,{children:"Tabs"})})," and ",(0,s.jsx)(n.a,{href:"/docs/markdown-features#details",children:(0,s.jsx)(n.code,{children:"details"})})," will not be excluded."]}),"\n",(0,s.jsx)(n.p,{children:"Non-Markdown headings will not show up in the TOC. This can be used to your advantage to tackle the aforementioned issue."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:'<details>\n<summary>Some details containing headings</summary>\n<h2 id="#heading-id">I\'m a heading that will not show up in the TOC</h2>\n\nSome content...\n\n</details>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ability to ergonomically insert extra headings or ignore certain headings is a work-in-progress. If this feature is important to you, please report your use-case in ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/6201",children:"this issue"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Below is just some dummy content to have more table of contents items available on the current page."})}),"\n",(0,s.jsx)(n.h2,{id:"example-section-1",children:"Example Section 1"}),"\n",(0,s.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,s.jsx)(n.h3,{id:"example-subsection-1-a",children:"Example Subsection 1 a"}),"\n",(0,s.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-1-a-i",children:"Example subsubsection 1 a I"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-1-a-ii",children:"Example subsubsection 1 a II"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-1-a-iii",children:"Example subsubsection 1 a III"}),"\n",(0,s.jsx)(n.h3,{id:"example-subsection-1-b",children:"Example Subsection 1 b"}),"\n",(0,s.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-1-b-i",children:"Example subsubsection 1 b I"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-1-b-ii",children:"Example subsubsection 1 b II"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-1-b-iii",children:"Example subsubsection 1 b III"}),"\n",(0,s.jsx)(n.h3,{id:"example-subsection-1-c",children:"Example Subsection 1 c"}),"\n",(0,s.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-1-c-i",children:"Example subsubsection 1 c I"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-1-c-ii",children:"Example subsubsection 1 c II"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-1-c-iii",children:"Example subsubsection 1 c III"}),"\n",(0,s.jsx)(n.h2,{id:"example-section-2",children:"Example Section 2"}),"\n",(0,s.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,s.jsx)(n.h3,{id:"example-subsection-2-a",children:"Example Subsection 2 a"}),"\n",(0,s.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-2-a-i",children:"Example subsubsection 2 a I"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-2-a-ii",children:"Example subsubsection 2 a II"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-2-a-iii",children:"Example subsubsection 2 a III"}),"\n",(0,s.jsx)(n.h3,{id:"example-subsection-2-b",children:"Example Subsection 2 b"}),"\n",(0,s.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-2-b-i",children:"Example subsubsection 2 b I"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-2-b-ii",children:"Example subsubsection 2 b II"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-2-b-iii",children:"Example subsubsection 2 b III"}),"\n",(0,s.jsx)(n.h3,{id:"example-subsection-2-c",children:"Example Subsection 2 c"}),"\n",(0,s.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-2-c-i",children:"Example subsubsection 2 c I"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-2-c-ii",children:"Example subsubsection 2 c II"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-2-c-iii",children:"Example subsubsection 2 c III"}),"\n",(0,s.jsx)(n.h2,{id:"example-section-3",children:"Example Section 3"}),"\n",(0,s.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,s.jsx)(n.h3,{id:"example-subsection-3-a",children:"Example Subsection 3 a"}),"\n",(0,s.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-3-a-i",children:"Example subsubsection 3 a I"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-3-a-ii",children:"Example subsubsection 3 a II"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-3-a-iii",children:"Example subsubsection 3 a III"}),"\n",(0,s.jsx)(n.h3,{id:"example-subsection-3-b",children:"Example Subsection 3 b"}),"\n",(0,s.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-3-b-i",children:"Example subsubsection 3 b I"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-3-b-ii",children:"Example subsubsection 3 b II"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-3-b-iii",children:"Example subsubsection 3 b III"}),"\n",(0,s.jsx)(n.h3,{id:"example-subsection-3-c",children:"Example Subsection 3 c"}),"\n",(0,s.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-3-c-i",children:"Example subsubsection 3 c I"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-3-c-ii",children:"Example subsubsection 3 c II"}),"\n",(0,s.jsx)(n.h4,{id:"example-subsubsection-3-c-iii",children:"Example subsubsection 3 c III"})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var s=i(27378);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);