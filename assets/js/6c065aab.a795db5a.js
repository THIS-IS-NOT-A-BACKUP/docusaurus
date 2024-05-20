"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22888],{61132:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(24246),o=(r(27378),r(40624));const c={tabItem:"tabItem_pnkT"};function s({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.Z)(c.tabItem,r),hidden:t,children:e})}},97555:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(24246),o=r(27378),c=r(40624),s=r(75527),i=r(3620),l=r(44479),a=r(62821),u=r(52196),d=r(53589);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function f(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function h(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:function(e){return f(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function y({queryString:e=!1,groupId:t}){const r=(0,i.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),c=(0,a._X)(n),s=(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace(b(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[n,r]);return[c,s]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,c=h(e),[s,i]=(0,o.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:c}))),[a,u]=y({queryString:r,groupId:n}),[p,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,n]=(0,d.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),f=(()=>{const e=null!=a?a:p;return m({value:e,tabValues:c})?e:null})();(0,l.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,c]),tabValues:c}}var j=r(29088);const O={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){v(e,t,r[t])}))}return e}function x(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function P({className:e,block:t,selectedValue:r,selectValue:o,tabValues:i}){const l=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),c=i[n].value;c!==r&&(a(t),o(c))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;var r;t=null!==(r=l[n])&&void 0!==r?r:l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;var n;t=null!==(n=l[r])&&void 0!==n?n:l[l.length-1];break}}null==t||t.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":t},e),children:i.map((({value:e,label:t,attributes:o})=>(0,n.jsx)("li",x(w({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},o),{className:(0,c.Z)("tabs__item",O.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e)))})}function k({lazy:e,children:t,selectedValue:r}){const c=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=c.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function S(e){const t=g(e);return(0,n.jsxs)("div",{className:(0,c.Z)("tabs-container",O.tabList),children:[(0,n.jsx)(P,w({},t,e)),(0,n.jsx)(k,w({},t,e))]})}function E(e){const t=(0,j.Z)();return(0,n.jsx)(S,x(w({},e),{children:f(e.children)}),String(t))}},94544:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(24246),o=(r(27378),r(29088));function c({children:e,fallback:t}){return(0,o.Z)()?(0,n.jsx)(n.Fragment,{children:null==e?void 0:e()}):null!=t?t:null}},52605:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(24246),o=r(27378),c=r(80474),s=r(3620);const i={apiTable:"apiTable_e8hp"};function l({name:e,children:t},r){const i=function(e){let t=e;for(;(0,o.isValidElement)(t);)[t]=o.Children.toArray(t.props.children);if("string"!=typeof t)throw new Error(`Could not extract APITable row name from JSX tree:\n${JSON.stringify(e,null,2)}`);return t}(t),l=e?`${e}-${i}`:i,a=`#${l}`,u=(0,s.k6)();return(0,c.Z)().collectAnchor(l),(0,n.jsx)("tr",{id:l,tabIndex:0,ref:u.location.hash===a?r:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||u.push(a)},onKeyDown:e=>{"Enter"===e.key&&u.push(a)},children:t.props.children})}const a=o.forwardRef(l);function u({children:e,name:t}){if("table"!==e.type)throw new Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");const[r,c]=o.Children.toArray(e.props.children),s=(0,o.useRef)(null);(0,o.useEffect)((()=>{var e;null===(e=s.current)||void 0===e||e.focus()}),[s]);const l=o.Children.map(c.props.children,(e=>(0,n.jsx)(a,{name:t,ref:s,children:e})));return(0,n.jsxs)("table",{className:i.apiTable,children:[r,(0,n.jsx)("tbody",{children:l})]})}},82064:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(24246),o=(r(27378),r(41428)),c=r(92053),s=r(36712),i=r(97555),l=r(61132),a=r(38112);const u=void 0;function d({code:e,pluginName:t,presetOptionName:r}){const d=(0,c.zu)(u).path;return(0,n.jsxs)(i.Z,{groupId:"api-config-ex",children:[(0,n.jsxs)(l.Z,{value:"preset",label:(0,s.I)({message:"Preset options"}),children:[(0,n.jsx)("p",{children:(0,n.jsx)(s.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,n.jsx)(o.Z,{to:`${d}/using-plugins#docusauruspreset-classic`,children:(0,n.jsx)(s.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,n.jsx)(a.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-start\n        ${r}: ${e.replace(/\n/g,"\n        ")},\n        // highlight-end\n      },\n    ],\n  ],\n};`})]}),(0,n.jsxs)(l.Z,{value:"plugin",label:(0,s.I)({message:"Plugin options"}),children:[(0,n.jsx)("p",{children:(0,n.jsx)(s.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,n.jsx)(a.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  plugins: [\n    [\n      '${t}',\n      // highlight-start\n      ${e.replace(/\n/g,"\n      ")},\n      // highlight-end\n    ],\n  ],\n};`})]})]})}},38112:(e,t,r)=>{r.d(t,{Z:()=>_e});var n={};r.r(n),r.d(n,{ButtonExample:()=>Z});var o=r(24246),c=r(27378),s=r(40624),i=r(29088),l=r(32711),a=r(36712),u=r(4423),d=r(94544),p=r(30691),b=r(78844),f=r(73919);function h(){const{prism:e}=(0,f.L)(),{colorMode:t}=(0,b.I)(),r=e.theme,n=e.darkTheme||r;return"dark"===t?n:r}var m=r(88941);const y={playgroundContainer:"playgroundContainer_6Ior",playgroundHeader:"playgroundHeader_Tvsk",playgroundEditor:"playgroundEditor_TySg",playgroundPreview:"playgroundPreview_mApW"};function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){g(e,t,r[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function v(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function w({children:e}){return(0,o.jsx)("div",{className:(0,s.Z)(y.playgroundHeader),children:e})}function x(){return(0,o.jsx)("div",{children:"Loading..."})}function P(){return(0,o.jsx)(d.Z,{fallback:(0,o.jsx)(x,{}),children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.Z,{fallback:e=>(0,o.jsx)(p.Ac,j({},e)),children:(0,o.jsx)(l.i5,{})}),(0,o.jsx)(l.IF,{})]})})}function k(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w,{children:(0,o.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,o.jsx)("div",{className:y.playgroundPreview,children:(0,o.jsx)(P,{})})]})}function S(){const e=(0,i.Z)();return(0,o.jsx)(l.uz,{className:y.playgroundEditor},String(e))}function E(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w,{children:(0,o.jsx)(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,o.jsx)(S,{})]})}const D=e=>`${e};`;function N(e){var t,{children:r,transformCode:n}=e,c=v(e,["children","transformCode"]);const{siteConfig:{themeConfig:s}}=(0,u.Z)(),{liveCodeBlock:{playgroundPosition:i}}=s,a=h();var d;const p=null!==(d=null===(t=c.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==d&&d;return(0,o.jsx)("div",{className:y.playgroundContainer,children:(0,o.jsx)(l.nu,O(j({code:null==r?void 0:r.replace(/\n$/,""),noInline:p,transformCode:null!=n?n:D,theme:a},c),{children:"top"===i?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{}),(0,o.jsx)(E,{})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E,{}),(0,o.jsx)(k,{})]})}))})}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){C(e,t,r[t])}))}return e}function I(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function Z(e){return(0,o.jsx)("button",I(B({type:"button"},e),{style:B({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const T=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){L(e,t,r[t])}))}return e}({React:c},c,n);var _,A,V=r(89583),$=r(6324),R=r.n($);function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const q=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),H=RegExp("\\{(?<range>[\\d,-]+)\\}"),W={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},F=(z=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){M(e,t,r[t])}))}return e}({},W),U=null!=(U={lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}})?U:{},Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(U)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(U)).forEach((function(e){Object.defineProperty(z,e,Object.getOwnPropertyDescriptor(U,e))})),z);var z,U;const G=Object.keys(W);function Q(e,t){const r=e.map((e=>{const{start:r,end:n}=F[e];return`(?:${r}\\s*(${t.flatMap((e=>{var t,r;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(r=e.block)||void 0===r?void 0:r.end].filter(Boolean)})).join("|")})\\s*${n})`})).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)}function X(e,t){let r=e.replace(/\n$/,"");const{language:n,magicComments:o,metastring:c}=t;if(c&&H.test(c)){const e=c.match(H).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,n=R()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(n),code:r}}if(void 0===n)return{lineClassNames:{},code:r};const s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return Q(["js","jsBlock"],t);case"jsx":case"tsx":return Q(["js","jsBlock","jsx"],t);case"html":return Q(["js","jsBlock","html"],t);case"python":case"py":case"bash":return Q(["bash"],t);case"markdown":case"md":return Q(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return Q(["tex"],t);case"lua":case"haskell":case"sql":return Q(["lua"],t);case"wasm":return Q(["wasm"],t);case"vb":case"vba":case"visual-basic":return Q(["vb","rem"],t);case"vbnet":return Q(["vbnet","rem"],t);case"batch":return Q(["rem"],t);case"basic":return Q(["rem","f90"],t);case"fsharp":return Q(["js","ml"],t);case"ocaml":case"sml":return Q(["ml"],t);case"fortran":return Q(["f90"],t);case"cobol":return Q(["cobol"],t);default:return Q(G,t)}}(n,o),i=r.split("\n"),l=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),a=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),d=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let b=0;b<i.length;){const e=i[b].match(s);if(!e){b+=1;continue}const t=e.slice(1).find((e=>void 0!==e));a[t]?l[a[t]].range+=`${b},`:u[t]?l[u[t]].start=b:d[t]&&(l[d[t]].range+=`${l[d[t]].start}-${b-1},`),i.splice(b,1)}r=i.join("\n");const p={};return Object.entries(l).forEach((([e,{range:t}])=>{R()(t).forEach((t=>{var r;null!==(r=(_=p)[A=t])&&void 0!==r||(_[A]=[]),p[t].push(e)}))})),{lineClassNames:p,code:r}}const Y={codeBlockContainer:"codeBlockContainer_jDV4"};function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function ee(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function te(e){var{as:t}=e,r=ee(e,["as"]);const n=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach((([e,n])=>{const o=t[e];o&&"string"==typeof n&&(r[o]=n)})),r}(h());return(0,o.jsx)(t,K(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){J(e,t,r[t])}))}return e}({},r),{style:n,className:(0,s.Z)(r.className,Y.codeBlockContainer,V.k.common.codeBlock)}))}const re={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function ne({children:e,className:t}){return(0,o.jsx)(te,{as:"pre",tabIndex:0,className:(0,s.Z)(re.codeBlockStandalone,"thin-scrollbar",t),children:(0,o.jsx)("code",{className:re.codeBlockLines,children:e})})}var oe=r(51114);const ce={attributes:!0,characterData:!0,childList:!0,subtree:!0};function se(e,t){const[r,n]=(0,c.useState)(),o=(0,c.useCallback)((()=>{var t;n(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,n]);(0,c.useEffect)((()=>{o()}),[o]),function(e,t,r=ce){const n=(0,oe.zX)(t),o=(0,oe.Ql)(r);(0,c.useEffect)((()=>{const t=new MutationObserver(n);return e&&t.observe(e,o),()=>t.disconnect()}),[e,n,o])}(r,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var ie=r(26101);const le={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function ae(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ae(e,t,r[t])}))}return e}function de(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function pe({line:e,classNames:t,showLineNumbers:r,getLineProps:n,getTokenProps:c}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const i=n({line:e,className:(0,s.Z)(t,r&&le.codeLine)}),l=e.map(((e,t)=>(0,o.jsx)("span",ue({},c({token:e})),t)));return(0,o.jsxs)("span",de(ue({},i),{children:[r?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:le.codeLineNumber}),(0,o.jsx)("span",{className:le.codeLineContent,children:l})]}):l,(0,o.jsx)("br",{})]}))}var be=r(34370);function fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function he(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function me(e){return(0,o.jsx)("svg",he(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){fe(e,t,r[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ge(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function je(e){return(0,o.jsx)("svg",ge(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ye(e,t,r[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const Oe={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ve({code:e,className:t}){const[r,n]=(0,c.useState)(!1),i=(0,c.useRef)(void 0),l=(0,c.useCallback)((()=>{(0,be.Z)(e),n(!0),i.current=window.setTimeout((()=>{n(!1)}),1e3)}),[e]);return(0,c.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,o.jsx)("button",{type:"button","aria-label":r?(0,a.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,a.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,a.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",t,Oe.copyButton,r&&Oe.copyButtonCopied),onClick:l,children:(0,o.jsxs)("span",{className:Oe.copyButtonIcons,"aria-hidden":"true",children:[(0,o.jsx)(me,{className:Oe.copyButtonIcon}),(0,o.jsx)(je,{className:Oe.copyButtonSuccessIcon})]})})}function we(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function xe(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function Pe(e){return(0,o.jsx)("svg",xe(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){we(e,t,r[t])}))}return e}({viewBox:"0 0 24 24"},e),{children:(0,o.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const ke={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function Se({className:e,onClick:t,isEnabled:r}){const n=(0,a.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,o.jsx)("button",{type:"button",onClick:t,className:(0,s.Z)("clean-btn",e,r&&ke.wordWrapButtonEnabled),"aria-label":n,title:n,children:(0,o.jsx)(Pe,{className:ke.wordWrapButtonIcon,"aria-hidden":"true"})})}function Ee({children:e,className:t="",metastring:r,title:n,showLineNumbers:i,language:l}){const{prism:{defaultLanguage:a,magicComments:u}}=(0,f.L)();var d;const p=function(e){return null==e?void 0:e.toLowerCase()}(null!==(d=null!=l?l:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==d?d:a),b=h(),m=function(){const[e,t]=(0,c.useState)(!1),[r,n]=(0,c.useState)(!1),o=(0,c.useRef)(null),s=(0,c.useCallback)((()=>{const r=o.current.querySelector("code");e?r.removeAttribute("style"):(r.style.whiteSpace="pre-wrap",r.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),i=(0,c.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,r=e>t||o.current.querySelector("code").hasAttribute("style");n(r)}),[o]);return se(o,i),(0,c.useEffect)((()=>{i()}),[e,i]),(0,c.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:r,toggle:s}}(),y=function(e){var t,r;return null!==(r=null===(t=null==e?void 0:e.match(q))||void 0===t?void 0:t.groups.title)&&void 0!==r?r:""}(r)||n,{lineClassNames:g,code:j}=X(e,{metastring:r,language:p,magicComments:u}),O=null!=i?i:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(r);return(0,o.jsxs)(te,{as:"div",className:(0,s.Z)(t,p&&!t.includes(`language-${p}`)&&`language-${p}`),children:[y&&(0,o.jsx)("div",{className:re.codeBlockTitle,children:y}),(0,o.jsxs)("div",{className:re.codeBlockContent,children:[(0,o.jsx)(ie.y$,{theme:b,code:j,language:null!=p?p:"text",children:({className:e,style:t,tokens:r,getLineProps:n,getTokenProps:c})=>(0,o.jsx)("pre",{tabIndex:0,ref:m.codeBlockRef,className:(0,s.Z)(e,re.codeBlock,"thin-scrollbar"),style:t,children:(0,o.jsx)("code",{className:(0,s.Z)(re.codeBlockLines,O&&re.codeBlockLinesWithNumbering),children:r.map(((e,t)=>(0,o.jsx)(pe,{line:e,getLineProps:n,getTokenProps:c,classNames:g[t],showLineNumbers:O},t)))})})}),(0,o.jsxs)("div",{className:re.buttonGroup,children:[(m.isEnabled||m.isCodeScrollable)&&(0,o.jsx)(Se,{className:re.codeButton,onClick:()=>m.toggle(),isEnabled:m.isEnabled}),(0,o.jsx)(ve,{className:re.codeButton,code:j})]})]})]})}function De(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ne(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function Ce(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Be(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Be(e,t,r[t])}))}return e}const Ze=(Le=function(e){var{children:t}=e,r=Ce(e,["children"]);const n=(0,i.Z)(),s=function(e){return c.Children.toArray(e).some((e=>(0,c.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof s?Ee:ne;return(0,o.jsx)(l,Ne(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){De(e,t,r[t])}))}return e}({},r),{children:s}),String(n))},function(e){return e.live?(0,o.jsx)(N,Ie({scope:T},e)):(0,o.jsx)(Le,Ie({},e))});var Le;function Te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _e(e){return(0,o.jsx)(Ze,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Te(e,t,r[t])}))}return e}({},e))}},21827:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>b});var n=r(24246),o=r(71670),c=r(97555),s=r(61132),i=r(52605),l=r(82064);const a={sidebar_position:2,slug:"/api/themes/@docusaurus/theme-classic"},u="\ud83d\udce6 theme-classic",d={id:"api/themes/theme-classic",title:"\ud83d\udce6 theme-classic",description:"The classic theme for Docusaurus.",source:"@site/docs/api/themes/theme-classic.mdx",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-classic",permalink:"/docs/api/themes/@docusaurus/theme-classic",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-classic.mdx",tags:[],version:"current",lastUpdatedBy:"dabreadman",lastUpdatedAt:1716228961e3,sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/api/themes/@docusaurus/theme-classic"},sidebar:"api",previous:{title:"Configuration",permalink:"/docs/api/themes/configuration"},next:{title:"\ud83d\udce6 theme-live-codeblock",permalink:"/docs/api/themes/@docusaurus/theme-live-codeblock"}},p={},b=[{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function f(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"-theme-classic",children:"\ud83d\udce6 theme-classic"}),"\n","\n",(0,n.jsx)(t.p,{children:"The classic theme for Docusaurus."}),"\n",(0,n.jsxs)(t.p,{children:["You can refer to the ",(0,n.jsx)(t.a,{href:"/docs/api/themes/configuration",children:"theme configuration page"})," for more details on the configuration."]}),"\n",(0,n.jsxs)(c.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(s.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-classic\n"})})}),(0,n.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/theme-classic\n"})})}),(0,n.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-classic\n"})})})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If you have installed ",(0,n.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install it as a dependency."]})}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,n.jsx)(i.Z,{children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"customCss"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"string[] | string"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"[]"})}),(0,n.jsxs)(t.td,{children:["Stylesheets to be imported globally as ",(0,n.jsx)(t.a,{href:"/docs/advanced/client#client-modules",children:"client modules"}),". Relative paths are resolved against the site directory."]})]})})]})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Most configuration for the theme is done in ",(0,n.jsx)(t.code,{children:"themeConfig"}),", which can be found in ",(0,n.jsx)(t.a,{href:"/docs/api/themes/configuration",children:"theme configuration"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,n.jsx)(t.p,{children:"You can configure this theme through preset options or plugin options."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,n.jsx)(l.Z,{pluginName:"@docusaurus/theme-classic",presetOptionName:"theme",code:"{\n  customCss: './src/css/custom.css',\n}"})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}}}]);