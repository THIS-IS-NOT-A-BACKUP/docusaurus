"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61221],{61132:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(24246);r(27378);var i=r(40624);function a({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_pnkT",r),hidden:t,children:e})}},97555:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(24246),i=r(27378),a=r(40624),o=r(75527),s=r(3620),l=r(44479),c=r(62821),d=r(52196),u=r(53589);function h(e){var t,r;return null!==(r=null===(t=i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function m({value:e,tabValues:t}){return t.some(t=>t.value===e)}var p=r(29088);function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function j({className:e,block:t,selectedValue:r,selectValue:i,tabValues:s}){let l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{let t=e.currentTarget,n=s[l.indexOf(t)].value;n!==r&&(c(t),i(n))},u=e=>{var t,r;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=l.indexOf(e.currentTarget)+1;n=null!==(t=l[r])&&void 0!==t?t:l[0];break}case"ArrowLeft":{let t=l.indexOf(e.currentTarget)-1;n=null!==(r=l[t])&&void 0!==r?r:l[l.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e),children:s.map(({value:e,label:t,attributes:i})=>(0,n.jsx)("li",g(b({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>l.push(e),onKeyDown:u,onClick:d},i),{className:(0,a.Z)("tabs__item","tabItem_AQgk",null==i?void 0:i.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e))})}function f({lazy:e,children:t,selectedValue:r}){let o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=o.find(e=>e.props.value===r);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function x(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,a=function(e){let{values:t,children:r}=e;return(0,i.useMemo)(()=>{let e=null!=t?t:h(r).map(({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n}));return!function(e){let t=(0,d.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[o,p]=(0,i.useState)(()=>(function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(r=t.find(e=>e.default))&&void 0!==r?r:t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:a})),[b,g]=function({queryString:e=!1,groupId:t}){let r=(0,s.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,c._X)(n),(0,i.useCallback)(e=>{var t,i;if(!n)return;let a=new URLSearchParams(r.location.search);a.set(n,e),r.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},r.location),i=i={search:a.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}),t))},[n,r])]}({queryString:r,groupId:n}),[j,f]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,n]=(0,u.Nk)(t);return[r,(0,i.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),x=(()=>{let e=null!=b?b:j;return m({value:e,tabValues:a})?e:null})();return(0,l.Z)(()=>{x&&p(x)},[x]),{selectedValue:o,selectValue:(0,i.useCallback)(e=>{if(!m({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),g(e),f(e)},[g,f,a]),tabValues:a}}(e);return(0,n.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(j,b({},t,e)),(0,n.jsx)(f,b({},t,e))]})}function v(e){let t=(0,p.Z)();return(0,n.jsx)(x,g(b({},e),{children:h(e.children)}),String(t))}},29510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(24246),i=r(71670),a=r(97555),o=r(61132);let s={slug:"/migration/v2/automated"},l="Automated migration",c={id:"migration/v2/migration-automated",title:"Automated migration",description:"The migration CLI automatically migrates your v1 website to a v2 website.",source:"@site/docs/migration/v2/migration-automated.mdx",sourceDirName:"migration/v2",slug:"/migration/v2/automated",permalink:"/docs/migration/v2/automated",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/v2/migration-automated.mdx",tags:[],version:"current",lastUpdatedBy:"dabreadman",lastUpdatedAt:1724523358e3,frontMatter:{slug:"/migration/v2/automated"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/migration/v2"},next:{title:"Manual migration",permalink:"/docs/migration/v2/manual"}},d={},u=[{value:"Options",id:"options",level:4}];function h(e){let t={admonition:"admonition",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"automated-migration",children:"Automated migration"})}),"\n",(0,n.jsx)(t.p,{children:"The migration CLI automatically migrates your v1 website to a v2 website."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Manual work is still required after using the migration CLI, as we can't automate a full migration"})}),"\n",(0,n.jsx)(t.p,{children:"The migration CLI migrates:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Site configurations (from ",(0,n.jsx)(t.code,{children:"siteConfig.js"})," to ",(0,n.jsx)(t.code,{children:"docusaurus.config.js"}),")"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"package.json"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"sidebars.json"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"/docs"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"/blog"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"/static"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"versioned_sidebar.json"})," and ",(0,n.jsx)(t.code,{children:"/versioned_docs"})," if your site uses versioning"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"To use the migration CLI, follow these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Before using the migration CLI, ensure that ",(0,n.jsx)(t.code,{children:"/docs"}),", ",(0,n.jsx)(t.code,{children:"/blog"}),", ",(0,n.jsx)(t.code,{children:"/static"}),", ",(0,n.jsx)(t.code,{children:"sidebars.json"}),", ",(0,n.jsx)(t.code,{children:"siteConfig.js"}),", ",(0,n.jsx)(t.code,{children:"package.json"})," follow the expected structure."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"To migrate your v1 website, run the migration CLI with the appropriate filesystem paths:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# migration command format\nnpx @docusaurus/migrate migrate <v1 website directory> <desired v2 website directory>\n\n# example\nnpx @docusaurus/migrate migrate ./v1-website ./v2-website\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"To view your new website locally, go into your v2 website's directory and start your development server."}),"\n"]}),"\n",(0,n.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(o.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd ./v2-website\nnpm install\nnpm start\n"})})}),(0,n.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd ./v2-website\nyarn install\nyarn start\n"})})}),(0,n.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd ./v2-website\npnpm install\npnpm start\n"})})})]}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:"The migration CLI updates existing files. Be sure to have committed them first!"})}),"\n",(0,n.jsx)(t.h4,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.p,{children:"You can add option flags to the migration CLI to automatically migrate Markdown content and pages to v2. It is likely that you will still need to make some manual changes to achieve your desired result."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"--mdx"})}),(0,n.jsx)(t.td,{children:"Add this flag to convert Markdown to MDX automatically"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"--page"})}),(0,n.jsx)(t.td,{children:"Add this flag to migrate pages automatically"})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# example using options\nnpx @docusaurus/migrate migrate --mdx --page ./v1-website ./v2-website\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"danger",children:[(0,n.jsx)(t.p,{children:"The migration of pages and MDX is still a work in progress."}),(0,n.jsxs)(t.p,{children:["We recommend you to try to run the pages without these options, commit, and then try to run the migration again with the ",(0,n.jsx)(t.code,{children:"--page"})," and ",(0,n.jsx)(t.code,{children:"--mdx"})," options."]}),(0,n.jsx)(t.p,{children:"This way, you'd be able to easily inspect and fix the diff."})]})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},71670:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var n=r(27378);let i={},a=n.createContext(i);function o(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);