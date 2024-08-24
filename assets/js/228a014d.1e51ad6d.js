"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48375],{61132:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(24246);n(27378);var i=n(40624);function s({children:e,hidden:t,className:n}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_pnkT",n),hidden:t,children:e})}},97555:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(24246),i=n(27378),s=n(40624),l=n(75527),a=n(3620),o=n(44479),c=n(62821),u=n(52196),d=n(53589);function h(e){var t,n;return null!==(n=null===(t=i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}function p({value:e,tabValues:t}){return t.some(t=>t.value===e)}var f=n(29088);function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function x({className:e,block:t,selectedValue:n,selectValue:i,tabValues:a}){let o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{let t=e.currentTarget,r=a[o.indexOf(t)].value;r!==n&&(c(t),i(r))},d=e=>{var t,n;let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let n=o.indexOf(e.currentTarget)+1;r=null!==(t=o[n])&&void 0!==t?t:o[0];break}case"ArrowLeft":{let t=o.indexOf(e.currentTarget)-1;r=null!==(n=o[t])&&void 0!==n?n:o[o.length-1]}}null==r||r.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},e),children:a.map(({value:e,label:t,attributes:i})=>(0,r.jsx)("li",g(m({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>o.push(e),onKeyDown:d,onClick:u},i),{className:(0,s.Z)("tabs__item","tabItem_AQgk",null==i?void 0:i.className,{"tabs__item--active":n===e}),children:null!=t?t:e}),e))})}function j({lazy:e,children:t,selectedValue:n}){let l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=l.find(e=>e.props.value===n);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,s=function(e){let{values:t,children:n}=e;return(0,i.useMemo)(()=>{let e=null!=t?t:h(n).map(({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r}));return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,f]=(0,i.useState)(()=>(function({defaultValue:e,tabValues:t}){var n;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let r=null!==(n=t.find(e=>e.default))&&void 0!==n?n:t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:s})),[m,g]=function({queryString:e=!1,groupId:t}){let n=(0,a.k6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,c._X)(r),(0,i.useCallback)(e=>{var t,i;if(!r)return;let s=new URLSearchParams(n.location.search);s.set(r,e),n.replace((t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},n.location),i=i={search:s.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}),t))},[r,n])]}({queryString:n,groupId:r}),[x,j]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[n,r]=(0,d.Nk)(t);return[n,(0,i.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:r}),b=(()=>{let e=null!=m?m:x;return p({value:e,tabValues:s})?e:null})();return(0,o.Z)(()=>{b&&f(b)},[b]),{selectedValue:l,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);f(e),g(e),j(e)},[g,j,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(x,m({},t,e)),(0,r.jsx)(j,m({},t,e))]})}function y(e){let t=(0,f.Z)();return(0,r.jsx)(b,g(m({},e),{children:h(e.children)}),String(t))}},52605:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(24246),i=n(27378),s=n(80474),l=n(3620);let a=i.forwardRef(function({name:e,children:t},n){let a=function(e){let t=e;for(;(0,i.isValidElement)(t);)[t]=i.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(t),o=e?`${e}-${a}`:a,c=`#${o}`,u=(0,l.k6)();return(0,s.Z)().collectAnchor(o),(0,r.jsx)("tr",{id:o,tabIndex:0,ref:u.location.hash===c?n:void 0,onClick:e=>{"A"!==e.target.tagName.toUpperCase()&&u.push(c)},onKeyDown:e=>{"Enter"===e.key&&u.push(c)},children:t.props.children})});function o({children:e,name:t}){if("table"!==e.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[n,s]=i.Children.toArray(e.props.children),l=(0,i.useRef)(null);(0,i.useEffect)(()=>{var e;null===(e=l.current)||void 0===e||e.focus()},[l]);let o=i.Children.map(s.props.children,e=>(0,r.jsx)(a,{name:t,ref:l,children:e}));return(0,r.jsxs)("table",{className:"apiTable_e8hp",children:[n,(0,r.jsx)("tbody",{children:o})]})}},4395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var r=n(24246),i=n(71670),s=n(97555),l=n(61132),a=n(52605);let o={sidebar_position:4,slug:"/api/plugins/@docusaurus/plugin-client-redirects"},c="\u{1F4E6} plugin-client-redirects",u={id:"api/plugins/plugin-client-redirects",title:"\u{1F4E6} plugin-client-redirects",description:"Docusaurus Plugin to generate client-side redirects.",source:"@site/docs/api/plugins/plugin-client-redirects.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-client-redirects",permalink:"/docs/api/plugins/@docusaurus/plugin-client-redirects",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-client-redirects.mdx",tags:[],version:"current",lastUpdatedBy:"dabreadman",lastUpdatedAt:1724523358e3,sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/api/plugins/@docusaurus/plugin-client-redirects"},sidebar:"api",previous:{title:"\u{1F4E6} plugin-content-pages",permalink:"/docs/api/plugins/@docusaurus/plugin-content-pages"},next:{title:"\u{1F4E6} plugin-debug",permalink:"/docs/api/plugins/@docusaurus/plugin-debug"}},d={},h=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>RedirectRule</code>",id:"RedirectRule",level:4},{value:"<code>CreateRedirectsFn</code>",id:"CreateRedirectsFn",level:4},{value:"Example configuration",id:"ex-config",level:3}];function p(e){let t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"-plugin-client-redirects",children:"\u{1F4E6} plugin-client-redirects"})}),"\n","\n",(0,r.jsxs)(t.p,{children:["Docusaurus Plugin to generate ",(0,r.jsx)(t.strong,{children:"client-side redirects"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This plugin will write additional HTML pages to your static site that redirect the user to your existing Docusaurus pages with JavaScript."}),"\n",(0,r.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,r.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,r.jsx)(t.strong,{children:"only active in production"})," because it works on the build output."]})}),"\n",(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsx)(t.p,{children:"It is better to use server-side redirects whenever possible."}),(0,r.jsx)(t.p,{children:"Before using this plugin, you should look if your hosting provider doesn't offer this feature."})]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-client-redirects\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-client-redirects\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-client-redirects\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,r.jsx)(a.Z,{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"fromExtensions"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string[]"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"[]"})}),(0,r.jsx)(t.td,{children:"The extensions to be removed from the route after redirecting."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"toExtensions"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string[]"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"[]"})}),(0,r.jsx)(t.td,{children:"The extensions to be appended to the route after redirecting."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"redirects"})}),(0,r.jsx)(t.td,{children:(0,r.jsxs)("code",{children:[(0,r.jsx)(t.a,{href:"#RedirectRule",children:"RedirectRule"}),"[]"]})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"[]"})}),(0,r.jsx)(t.td,{children:"The list of redirect rules."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"createRedirects"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)("code",{children:(0,r.jsx)(t.a,{href:"#CreateRedirectsFn",children:"CreateRedirectsFn"})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"undefined"})}),(0,r.jsx)(t.td,{children:"A callback to create a redirect rule. Docusaurus query this callback against every path it has created, and use its return value to output more paths."})]})]})]})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["This plugin will also read the ",(0,r.jsx)(t.a,{href:"/docs/api/docusaurus-config#onDuplicateRoutes",children:(0,r.jsx)(t.code,{children:"siteConfig.onDuplicateRoutes"})})," config to adjust its logging level when multiple files will be emitted to the same location."]})}),"\n",(0,r.jsx)(t.h3,{id:"types",children:"Types"}),"\n",(0,r.jsx)(t.h4,{id:"RedirectRule",children:(0,r.jsx)(t.code,{children:"RedirectRule"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"type RedirectRule = {\n  to: string;\n  from: string | string[];\n};\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.p,{children:['The idea of "from" and "to" is central in this plugin. "From" means a path that you want to ',(0,r.jsx)(t.em,{children:"create"}),', i.e. an extra HTML file that will be written; "to" means a path to want to redirect ',(0,r.jsx)(t.em,{children:"to"}),", usually a route that Docusaurus already knows about."]}),(0,r.jsx)(t.p,{children:'This is why you can have multiple "from" for the same "to": we will create multiple HTML files that all redirect to the same destination. On the other hand, one "from" can never have more than one "to": the written HTML file needs to have a determinate destination.'})]}),"\n",(0,r.jsx)(t.h4,{id:"CreateRedirectsFn",children:(0,r.jsx)(t.code,{children:"CreateRedirectsFn"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'// The parameter `path` is a route that Docusaurus has already created. It can\n// be seen as the "to", and your return value is the "from". Returning a falsy\n// value will not create any redirect pages for this particular path.\ntype CreateRedirectsFn = (path: string) => string[] | string | null | undefined;\n'})}),"\n",(0,r.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,r.jsx)(t.p,{children:"Here's an example configuration:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-client-redirects',\n      // highlight-start\n      {\n        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage\n        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)\n        redirects: [\n          // /docs/oldDoc -> /docs/newDoc\n          {\n            to: '/docs/newDoc',\n            from: '/docs/oldDoc',\n          },\n          // Redirect from multiple old paths to the new path\n          {\n            to: '/docs/newDoc2',\n            from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],\n          },\n        ],\n        createRedirects(existingPath) {\n          if (existingPath.includes('/community')) {\n            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X\n            return [\n              existingPath.replace('/community', '/docs/team'),\n              existingPath.replace('/community', '/docs/support'),\n            ];\n          }\n          return undefined; // Return a falsy value: no redirect created\n        },\n      },\n      // highlight-end\n    ],\n  ],\n};\n"})})]})}function f(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var r=n(27378);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);