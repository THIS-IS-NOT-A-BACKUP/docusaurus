"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67041],{61132:(e,s,r)=>{r.d(s,{Z:()=>l});var n=r(24246),t=(r(27378),r(40624));const i={tabItem:"tabItem_pnkT"};function l({children:e,hidden:s,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i.tabItem,r),hidden:s,children:e})}},97555:(e,s,r)=>{r.d(s,{Z:()=>S});var n=r(24246),t=r(27378),i=r(40624),l=r(75527),c=r(3620),d=r(44479),o=r(62821),a=r(52196),h=r(53589);function u(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function j(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,n)}return r}(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))})),e}function x(e){var s,r;return null!==(r=null===(s=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===s?void 0:s.filter(Boolean))&&void 0!==r?r:[]}function p(e){const{values:s,children:r}=e;return(0,t.useMemo)((()=>{const e=null!=s?s:function(e){return x(e).map((({props:{value:e,label:s,attributes:r,default:n}})=>({value:e,label:s,attributes:r,default:n})))}(r);return function(e){const s=(0,a.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,r])}function f({value:e,tabValues:s}){return s.some((s=>s.value===e))}function m({queryString:e=!1,groupId:s}){const r=(0,c.k6)(),n=function({queryString:e=!1,groupId:s}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:e,groupId:s}),i=(0,o._X)(n),l=(0,t.useCallback)((e=>{if(!n)return;const s=new URLSearchParams(r.location.search);s.set(n,e),r.replace(j(function(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(s){u(e,s,r[s])}))}return e}({},r.location),{search:s.toString()}))}),[n,r]);return[i,l]}function b(e){const{defaultValue:s,queryString:r=!1,groupId:n}=e,i=p(e),[l,c]=(0,t.useState)((()=>function({defaultValue:e,tabValues:s}){if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=s.find((e=>e.default)))&&void 0!==r?r:s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:i}))),[o,a]=m({queryString:r,groupId:n}),[u,j]=function({groupId:e}){const s=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,n]=(0,h.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:n}),x=(()=>{const e=null!=o?o:u;return f({value:e,tabValues:i})?e:null})();(0,d.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),a(e),j(e)}),[a,j,i]),tabValues:i}}var g=r(29088);const y={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function w(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function v(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(s){w(e,s,r[s])}))}return e}function D(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,n)}return r}(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))})),e}function k({className:e,block:s,selectedValue:r,selectValue:t,tabValues:c}){const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),a=e=>{const s=e.currentTarget,n=d.indexOf(s),i=c[n].value;i!==r&&(o(s),t(i))},h=e=>{let s=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;var r;s=null!==(r=d[n])&&void 0!==r?r:d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;var n;s=null!==(n=d[r])&&void 0!==n?n:d[d.length-1];break}}null==s||s.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},e),children:c.map((({value:e,label:s,attributes:t})=>(0,n.jsx)("li",D(v({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>d.push(e),onKeyDown:h,onClick:a},t),{className:(0,i.Z)("tabs__item",y.tabItem,null==t?void 0:t.className,{"tabs__item--active":r===e}),children:null!=s?s:e}),e)))})}function O({lazy:e,children:s,selectedValue:r}){const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function z(e){const s=b(e);return(0,n.jsxs)("div",{className:(0,i.Z)("tabs-container",y.tabList),children:[(0,n.jsx)(k,v({},s,e)),(0,n.jsx)(O,v({},s,e))]})}function S(e){const s=(0,g.Z)();return(0,n.jsx)(z,D(v({},e),{children:x(e.children)}),String(s))}},1346:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var n=r(24246),t=r(71670),i=r(97555),l=r(61132);const c={description:"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website."},d="CLI",o={id:"cli",title:"CLI",description:"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website.",source:"@site/docs/cli.mdx",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/cli.mdx",tags:[],version:"current",lastUpdatedBy:"dabreadman",lastUpdatedAt:1717524991e3,frontMatter:{description:"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website."},sidebar:"api",next:{title:"Client API",permalink:"/docs/docusaurus-core"}},a={},h=[{value:"Docusaurus CLI commands",id:"docusaurus-cli-commands",level:2},{value:"<code>docusaurus start [siteDir]</code>",id:"docusaurus-start-sitedir",level:3},{value:"Options",id:"options",level:4},{value:"Enabling HTTPS",id:"enabling-https",level:4},{value:"<code>docusaurus build [siteDir]</code>",id:"docusaurus-build-sitedir",level:3},{value:"Options",id:"options-1",level:4},{value:"<code>docusaurus swizzle [themeName] [componentName] [siteDir]</code>",id:"docusaurus-swizzle",level:3},{value:"Options",id:"options-swizzle",level:4},{value:"<code>docusaurus deploy [siteDir]</code>",id:"docusaurus-deploy-sitedir",level:3},{value:"Options",id:"options-3",level:4},{value:"<code>docusaurus serve [siteDir]</code>",id:"docusaurus-serve-sitedir",level:3},{value:"<code>docusaurus clear [siteDir]</code>",id:"docusaurus-clear-sitedir",level:3},{value:"<code>docusaurus write-translations [siteDir]</code>",id:"docusaurus-write-translations-sitedir",level:3},{value:"<code>docusaurus write-heading-ids [siteDir] [files]</code>",id:"docusaurus-write-heading-ids-sitedir",level:3}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"cli",children:"CLI"}),"\n",(0,n.jsx)(s.p,{children:"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website."}),"\n",(0,n.jsx)(s.p,{children:"Once your website is bootstrapped, the website source will contain the Docusaurus scripts that you can invoke with your package manager:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  // ...\n  "scripts": {\n    "docusaurus": "docusaurus",\n    "start": "docusaurus start",\n    "build": "docusaurus build",\n    "swizzle": "docusaurus swizzle",\n    "deploy": "docusaurus deploy",\n    "clear": "docusaurus clear",\n    "serve": "docusaurus serve",\n    "write-translations": "docusaurus write-translations",\n    "write-heading-ids": "docusaurus write-heading-ids"\n  }\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"docusaurus-cli-commands",children:"Docusaurus CLI commands"}),"\n",(0,n.jsx)(s.p,{children:"Below is a list of Docusaurus CLI commands and their usages:"}),"\n",(0,n.jsx)(s.h3,{id:"docusaurus-start-sitedir",children:(0,n.jsx)(s.code,{children:"docusaurus start [siteDir]"})}),"\n",(0,n.jsxs)(s.p,{children:["Builds and serves a preview of your site locally with ",(0,n.jsx)(s.a,{href:"https://webpack.js.org/configuration/dev-server",children:"Webpack Dev Server"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--port"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"3000"})}),(0,n.jsx)(s.td,{children:"Specifies the port of the dev server."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--host"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"localhost"})}),(0,n.jsxs)(s.td,{children:["Specify a host to use. For example, if you want your server to be accessible externally, you can use ",(0,n.jsx)(s.code,{children:"--host 0.0.0.0"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--locale"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Specify site locale to be used."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--hot-only"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsxs)(s.td,{children:["Enables Hot Module Replacement without page refresh as a fallback in case of build failures. More information ",(0,n.jsx)(s.a,{href:"https://webpack.js.org/configuration/dev-server/#devserverhotonly",children:"here"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--no-open"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Do not open the page automatically in the browser."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--config"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"undefined"})}),(0,n.jsxs)(s.td,{children:["Path to Docusaurus config file, default to ",(0,n.jsx)(s.code,{children:"[siteDir]/docusaurus.config.js"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--poll [optionalIntervalMs]"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsxs)(s.td,{children:["Use polling of files rather than watching for live reload as a fallback in environments where watching doesn't work. More information ",(0,n.jsx)(s.a,{href:"https://webpack.js.org/configuration/watch/#watchoptionspoll",children:"here"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--no-minify"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Build website without minimizing JS/CSS bundles."})]})]})]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"Please note that some functionality (for example, anchor links) will not work in development. The functionality will work as expected in production."})}),"\n",(0,n.jsxs)(s.admonition,{title:"Development over network",type:"info",children:[(0,n.jsxs)(s.p,{children:["When forwarding port 3000 from a remote server or VM (e.g. GitHub Codespaces), you can run the dev server on ",(0,n.jsx)(s.code,{children:"0.0.0.0"})," to make it listen on the local IP."]}),(0,n.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(l.Z,{value:"npm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm run start -- --host 0.0.0.0\n"})})}),(0,n.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"yarn run start --host 0.0.0.0\n"})})}),(0,n.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pnpm run start --host 0.0.0.0\n"})})})]})]}),"\n",(0,n.jsx)(s.h4,{id:"enabling-https",children:"Enabling HTTPS"}),"\n",(0,n.jsxs)(s.p,{children:["There are multiple ways to obtain a certificate. We will use ",(0,n.jsx)(s.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})," as an example."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Run ",(0,n.jsx)(s.code,{children:"mkcert localhost"})," to generate ",(0,n.jsx)(s.code,{children:"localhost.pem"})," + ",(0,n.jsx)(s.code,{children:"localhost-key.pem"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Run ",(0,n.jsx)(s.code,{children:"mkcert -install"})," to install the cert in your trust store, and restart your browser"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Start the app with Docusaurus HTTPS env variables:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"HTTPS=true SSL_CRT_FILE=localhost.pem SSL_KEY_FILE=localhost-key.pem yarn start\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsxs)(s.li,{children:["Open ",(0,n.jsx)(s.code,{children:"https://localhost:3000/"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"docusaurus-build-sitedir",children:(0,n.jsx)(s.code,{children:"docusaurus build [siteDir]"})}),"\n",(0,n.jsx)(s.p,{children:"Compiles your site for production."}),"\n",(0,n.jsx)(s.h4,{id:"options-1",children:"Options"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--dev"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Builds the website in dev mode, including full React error messages."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--bundle-analyzer"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsxs)(s.td,{children:["Analyze your bundle with the ",(0,n.jsx)(s.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",children:"webpack bundle analyzer"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--out-dir"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"build"})}),(0,n.jsx)(s.td,{children:"The full path for the new output directory, relative to the current workspace."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--config"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"undefined"})}),(0,n.jsxs)(s.td,{children:["Path to Docusaurus config file, default to ",(0,n.jsx)(s.code,{children:"[siteDir]/docusaurus.config.js"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--locale"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Build the site in the specified locale. If not specified, all known locales are built."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--no-minify"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Build website without minimizing JS/CSS bundles."})]})]})]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsxs)(s.p,{children:["For advanced minification of CSS bundle, we use the ",(0,n.jsx)(s.a,{href:"https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-advanced",children:"advanced cssnano preset"})," (along with additional several PostCSS plugins) and ",(0,n.jsx)(s.a,{href:"https://github.com/jakubpawlowicz/clean-css#level-2-optimizations",children:"level 2 optimization of clean-css"}),". If as a result of this advanced CSS minification you find broken CSS, build your website with the environment variable ",(0,n.jsx)(s.code,{children:"USE_SIMPLE_CSS_MINIFIER=true"})," to minify CSS with the ",(0,n.jsx)(s.a,{href:"https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-default",children:"default cssnano preset"}),". ",(0,n.jsxs)(s.strong,{children:["Please ",(0,n.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/new?labels=bug%2C+needs+triage&template=bug.md",children:"fill out an issue"})," if you experience CSS minification bugs."]})]}),(0,n.jsxs)(s.p,{children:["You can skip the HTML minification with the environment variable ",(0,n.jsx)(s.code,{children:"SKIP_HTML_MINIFICATION=true"}),"."]})]}),"\n",(0,n.jsx)(s.h3,{id:"docusaurus-swizzle",children:(0,n.jsx)(s.code,{children:"docusaurus swizzle [themeName] [componentName] [siteDir]"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/swizzling",children:"Swizzle"})," a theme component to customize it."]}),"\n",(0,n.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(l.Z,{value:"npm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm run swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\nnpm run swizzle @docusaurus/theme-classic Footer -- --eject\n"})})}),(0,n.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"yarn swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\nyarn swizzle @docusaurus/theme-classic Footer --eject\n"})})}),(0,n.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pnpm run swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\npnpm run swizzle @docusaurus/theme-classic Footer --eject\n"})})})]}),"\n",(0,n.jsxs)(s.p,{children:["The swizzle CLI is interactive and will guide you through the whole ",(0,n.jsx)(s.a,{href:"/docs/swizzling",children:"swizzle process"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"options-swizzle",children:"Options"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"themeName"})}),(0,n.jsx)(s.td,{children:"The name of the theme to swizzle from."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"componentName"})}),(0,n.jsx)(s.td,{children:"The name of the theme component to swizzle."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--list"})}),(0,n.jsx)(s.td,{children:"Display components available for swizzling"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--eject"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/swizzling#ejecting",children:"Eject"})," the theme component"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--wrap"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/swizzling#wrapping",children:"Wrap"})," the theme component"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--danger"})}),(0,n.jsx)(s.td,{children:"Allow immediate swizzling of unsafe components"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--typescript"})}),(0,n.jsx)(s.td,{children:"Swizzle the TypeScript variant component"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--config"})}),(0,n.jsxs)(s.td,{children:["Path to docusaurus config file, default to ",(0,n.jsx)(s.code,{children:"[siteDir]/docusaurus.config.js"})]})]})]})]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsx)(s.p,{children:"Unsafe components have a higher risk of breaking changes due to internal refactorings."})}),"\n",(0,n.jsx)(s.h3,{id:"docusaurus-deploy-sitedir",children:(0,n.jsx)(s.code,{children:"docusaurus deploy [siteDir]"})}),"\n",(0,n.jsxs)(s.p,{children:["Deploys your site with ",(0,n.jsx)(s.a,{href:"https://pages.github.com/",children:"GitHub Pages"}),". Check out the docs on ",(0,n.jsx)(s.a,{href:"/docs/deployment#deploying-to-github-pages",children:"deployment"})," for more details."]}),"\n",(0,n.jsx)(s.h4,{id:"options-3",children:"Options"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--locale"})}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Deploy the site in the specified locale. If not specified, all known locales are deployed."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--out-dir"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"build"})}),(0,n.jsx)(s.td,{children:"The full path for the new output directory, relative to the current workspace."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--skip-build"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Deploy website without building it. This may be useful when using a custom deploy script."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--target-dir"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"."})}),(0,n.jsx)(s.td,{children:"Path to the target directory to deploy to."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--config"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"undefined"})}),(0,n.jsxs)(s.td,{children:["Path to Docusaurus config file, default to ",(0,n.jsx)(s.code,{children:"[siteDir]/docusaurus.config.js"})]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"docusaurus-serve-sitedir",children:(0,n.jsx)(s.code,{children:"docusaurus serve [siteDir]"})}),"\n",(0,n.jsx)(s.p,{children:"Serve your built website locally."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--port"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"3000"})}),(0,n.jsx)(s.td,{children:"Use specified port"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--dir"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"build"})}),(0,n.jsx)(s.td,{children:"The full path for the output directory, relative to the current workspace"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--build"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Build website before serving"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--config"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"undefined"})}),(0,n.jsxs)(s.td,{children:["Path to Docusaurus config file, default to ",(0,n.jsx)(s.code,{children:"[siteDir]/docusaurus.config.js"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--host"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"localhost"})}),(0,n.jsxs)(s.td,{children:["Specify a host to use. For example, if you want your server to be accessible externally, you can use ",(0,n.jsx)(s.code,{children:"--host 0.0.0.0"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--no-open"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"false"})," locally, ",(0,n.jsx)(s.code,{children:"true"})," in CI"]}),(0,n.jsx)(s.td,{children:"Do not open a browser window to the server location."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"docusaurus-clear-sitedir",children:(0,n.jsx)(s.code,{children:"docusaurus clear [siteDir]"})}),"\n",(0,n.jsx)(s.p,{children:"Clear a Docusaurus site's generated assets, caches, build artifacts."}),"\n",(0,n.jsx)(s.p,{children:"We recommend running this command before reporting bugs, after upgrading versions, or anytime you have issues with your Docusaurus site."}),"\n",(0,n.jsx)(s.h3,{id:"docusaurus-write-translations-sitedir",children:(0,n.jsx)(s.code,{children:"docusaurus write-translations [siteDir]"})}),"\n",(0,n.jsx)(s.p,{children:"Write the JSON translation files that you will have to translate."}),"\n",(0,n.jsxs)(s.p,{children:["By default, the files are written in ",(0,n.jsx)(s.code,{children:"website/i18n/<defaultLocale>/..."}),"."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--locale"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"<defaultLocale>"})}),(0,n.jsx)(s.td,{children:"Define which locale folder you want to write translations the JSON files in"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--override"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Override existing translation messages"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--config"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"undefined"})}),(0,n.jsxs)(s.td,{children:["Path to Docusaurus config file, default to ",(0,n.jsx)(s.code,{children:"[siteDir]/docusaurus.config.js"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--messagePrefix"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"''"})}),(0,n.jsx)(s.td,{children:"Allows adding a prefix to each translation message, to help you highlight untranslated strings"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"docusaurus-write-heading-ids-sitedir",children:(0,n.jsx)(s.code,{children:"docusaurus write-heading-ids [siteDir] [files]"})}),"\n",(0,n.jsxs)(s.p,{children:["Add ",(0,n.jsx)(s.a,{href:"/docs/markdown-features/toc#heading-ids",children:"explicit heading IDs"})," to the Markdown documents of your site."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"files"})}),(0,n.jsx)(s.td,{children:"All MD files used by plugins"}),(0,n.jsx)(s.td,{children:"The files that you want heading IDs to be written to."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--maintain-case"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Keep the headings' casing, otherwise make all lowercase."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"--overwrite"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"false"})}),(0,n.jsx)(s.td,{children:"Overwrite existing heading IDs."})]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},71670:(e,s,r)=>{r.d(s,{Z:()=>c,a:()=>l});var n=r(27378);const t={},i=n.createContext(t);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);