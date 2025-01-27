"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["58327"],{16093:function(e,t,r){r.d(t,{Z:()=>n});let n=r.p+"assets/images/architecture-5b7220912f5cfdff40a7728233abb902.png"},14341:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>u,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"advanced/architecture","title":"Architecture","description":"How Docusaurus works to build your app","source":"@site/docs/advanced/architecture.mdx","sourceDirName":"advanced","slug":"/advanced/architecture","permalink":"/docs/advanced/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/architecture.mdx","tags":[],"version":"current","lastUpdatedBy":"dabreadman","lastUpdatedAt":1738001985000,"frontMatter":{"description":"How Docusaurus works to build your app"},"sidebar":"docs","previous":{"title":"Advanced Tutorials","permalink":"/docs/advanced/"},"next":{"title":"Plugins","permalink":"/docs/advanced/plugins"}}'),a=r(85893),i=r(80980);r(15398),r(58636);var s=r(47611);let o={description:"How Docusaurus works to build your app"},l="Architecture",u={},c=[];function d(e){let t={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"architecture",children:"Architecture"})}),"\n","\n",(0,a.jsx)(s.Z,{children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Architecture overview",src:r(16093).Z+"",width:"2228",height:"2007"})})}),"\n",(0,a.jsx)(t.p,{children:"This diagram shows how Docusaurus works to build your app. Plugins each collect their content and emit JSON data; themes provide layout components which receive the JSON data as route modules. The bundler bundles all the components and emits a server bundle and a client bundle."}),"\n",(0,a.jsx)(t.p,{children:"Although you (either plugin authors or site creators) are writing JavaScript all the time, bear in mind that the JS is actually run in different environments:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["All plugin lifecycle methods are run in Node. Therefore, until we support ES Modules in our codebase, plugin source code must be provided as ES modules that can be imported, or CommonJS that can be ",(0,a.jsx)(t.code,{children:"require"}),"'d."]}),"\n",(0,a.jsx)(t.li,{children:"The theme code is built with Webpack. They can be provided as ESM\u2014following React conventions."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Plugin code and theme code never directly import each other: they only communicate through protocols (in our case, through JSON temp files and calls to ",(0,a.jsx)(t.code,{children:"addRoute"}),"). A useful mental model is to imagine that the plugins are not written in JavaScript, but in another language like Rust. The only way to interact with plugins for the user is through ",(0,a.jsx)(t.code,{children:"docusaurus.config.js"}),", which itself is run in Node (hence you can use ",(0,a.jsx)(t.code,{children:"require"})," and pass callbacks as plugin options)."]}),"\n",(0,a.jsxs)(t.p,{children:["During bundling, the config file itself is serialized and bundled, allowing the theme to access config options like ",(0,a.jsx)(t.code,{children:"themeConfig"})," or ",(0,a.jsx)(t.code,{children:"baseUrl"})," through ",(0,a.jsx)(t.a,{href:"/docs/docusaurus-core#useDocusaurusContext",children:(0,a.jsx)(t.code,{children:"useDocusaurusContext()"})}),". However, the ",(0,a.jsx)(t.code,{children:"siteConfig"})," object only contains ",(0,a.jsx)(t.strong,{children:"serializable values"})," (values that are preserved after ",(0,a.jsx)(t.code,{children:"JSON.stringify()"}),"). Functions, regexes, etc. would be lost on the client side. The ",(0,a.jsx)(t.code,{children:"themeConfig"})," is designed to be entirely serializable."]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},58636:function(e,t,r){r.d(t,{Z:()=>i});var n=r(85893);r(67294);var a=r(90496);function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_pnkT",i),hidden:r,children:t})}},15398:function(e,t,r){r.d(t,{Z:()=>v});var n=r(85893),a=r(67294),i=r(90496),s=r(54947),o=r(3620),l=r(844),u=r(97486),c=r(32263),d=r(16971);function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var f=r(71607);function m(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:l}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{let t=e.currentTarget,r=l[u.indexOf(t)].value;r!==a&&(c(t),o(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t),children:l.map(e=>{let{value:t,label:r,attributes:s}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{u.push(e)},onKeyDown:h,onClick:d,...s,className:(0,i.Z)("tabs__item","tabItem_AQgk",s?.className,{"tabs__item--active":a===t}),children:r??t},t)})})}function b(e){let{lazy:t,children:r,selectedValue:s}=e,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=o.find(e=>e.props.value===s);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,i=function(e){let{values:t,children:r}=e;return(0,a.useMemo)(()=>{let e=t??h(r).map(e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}});return!function(e){let t=(0,c.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[s,f]=(0,a.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:i})),[m,b]=function(e){let{queryString:t=!1,groupId:r}=e,n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(i),(0,a.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})},[i,n])]}({queryString:r,groupId:n}),[g,v]=function(e){let{groupId:t}=e,r=t?`docusaurus.tab.${t}`:null,[n,i]=(0,d.Nk)(r);return[n,(0,a.useCallback)(e=>{r&&i.set(e)},[r,i])]}({groupId:n}),x=(()=>{let e=m??g;return p({value:e,tabValues:i})?e:null})();return(0,l.Z)(()=>{x&&f(x)},[x]),{selectedValue:s,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),v(e)},[b,v,i]),tabValues:i}}(e);return(0,n.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(m,{...t,...e}),(0,n.jsx)(b,{...t,...e})]})}function v(e){let t=(0,f.Z)();return(0,n.jsx)(g,{...e,children:h(e.children)},String(t))}}}]);