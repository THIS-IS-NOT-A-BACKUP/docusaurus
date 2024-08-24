"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49406],{61132:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(24246);r(27378);var o=r(40624);function l({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.Z)("tabItem_pnkT",r),hidden:t,children:e})}},97555:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(24246),o=r(27378),l=r(40624),i=r(75527),c=r(3620),s=r(44479),a=r(62821),u=r(52196),p=r(53589);function d(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function b({value:e,tabValues:t}){return t.some(t=>t.value===e)}var g=r(29088);function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function y({className:e,block:t,selectedValue:r,selectValue:o,tabValues:c}){let s=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.o5)(),u=e=>{let t=e.currentTarget,n=c[s.indexOf(t)].value;n!==r&&(a(t),o(n))},p=e=>{var t,r;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=s.indexOf(e.currentTarget)+1;n=null!==(t=s[r])&&void 0!==t?t:s[0];break}case"ArrowLeft":{let t=s.indexOf(e.currentTarget)-1;n=null!==(r=s[t])&&void 0!==r?r:s[s.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},e),children:c.map(({value:e,label:t,attributes:o})=>(0,n.jsx)("li",h(f({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>s.push(e),onKeyDown:p,onClick:u},o),{className:(0,l.Z)("tabs__item","tabItem_AQgk",null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e))})}function j({lazy:e,children:t,selectedValue:r}){let i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=i.find(e=>e.props.value===r);return e?(0,o.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function m(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,l=function(e){let{values:t,children:r}=e;return(0,o.useMemo)(()=>{let e=null!=t?t:d(r).map(({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n}));return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[i,g]=(0,o.useState)(()=>(function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(r=t.find(e=>e.default))&&void 0!==r?r:t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:l})),[f,h]=function({queryString:e=!1,groupId:t}){let r=(0,c.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,a._X)(n),(0,o.useCallback)(e=>{var t,o;if(!n)return;let l=new URLSearchParams(r.location.search);l.set(n,e),r.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},r.location),o=o={search:l.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}),t))},[n,r])]}({queryString:r,groupId:n}),[y,j]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,n]=(0,p.Nk)(t);return[r,(0,o.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),m=(()=>{let e=null!=f?f:y;return b({value:e,tabValues:l})?e:null})();return(0,s.Z)(()=>{m&&g(m)},[m]),{selectedValue:i,selectValue:(0,o.useCallback)(e=>{if(!b({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);g(e),h(e),j(e)},[h,j,l]),tabValues:l}}(e);return(0,n.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(y,f({},t,e)),(0,n.jsx)(j,f({},t,e))]})}function O(e){let t=(0,g.Z)();return(0,n.jsx)(m,h(f({},e),{children:d(e.children)}),String(t))}},94544:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(24246);r(27378);var o=r(29088);function l({children:e,fallback:t}){return(0,o.Z)()?(0,n.jsx)(n.Fragment,{children:null==e?void 0:e()}):null!=t?t:null}},52605:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(24246),o=r(27378),l=r(80474),i=r(3620);let c=o.forwardRef(function({name:e,children:t},r){let c=function(e){let t=e;for(;(0,o.isValidElement)(t);)[t]=o.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(t),s=e?`${e}-${c}`:c,a=`#${s}`,u=(0,i.k6)();return(0,l.Z)().collectAnchor(s),(0,n.jsx)("tr",{id:s,tabIndex:0,ref:u.location.hash===a?r:void 0,onClick:e=>{"A"!==e.target.tagName.toUpperCase()&&u.push(a)},onKeyDown:e=>{"Enter"===e.key&&u.push(a)},children:t.props.children})});function s({children:e,name:t}){if("table"!==e.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[r,l]=o.Children.toArray(e.props.children),i=(0,o.useRef)(null);(0,o.useEffect)(()=>{var e;null===(e=i.current)||void 0===e||e.focus()},[i]);let s=o.Children.map(l.props.children,e=>(0,n.jsx)(c,{name:t,ref:i,children:e}));return(0,n.jsxs)("table",{className:"apiTable_e8hp",children:[r,(0,n.jsx)("tbody",{children:s})]})}},82064:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(24246);r(27378);var o=r(41428),l=r(92053),i=r(36712),c=r(97555),s=r(61132),a=r(38112);let u=void 0;function p({code:e,pluginName:t,presetOptionName:r}){let p=(0,l.zu)(u).path;return(0,n.jsxs)(c.Z,{groupId:"api-config-ex",children:[(0,n.jsxs)(s.Z,{value:"preset",label:(0,i.I)({message:"Preset options"}),children:[(0,n.jsx)("p",{children:(0,n.jsx)(i.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,n.jsx)(o.Z,{to:`${p}/using-plugins#docusauruspreset-classic`,children:(0,n.jsx)(i.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,n.jsx)(a.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-start
        ${r}: ${e.replace(/\n/g,"\n        ")},
        // highlight-end
      },
    ],
  ],
};`})]}),(0,n.jsxs)(s.Z,{value:"plugin",label:(0,i.I)({message:"Plugin options"}),children:[(0,n.jsx)("p",{children:(0,n.jsx)(i.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,n.jsx)(a.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${t}',
      // highlight-start
      ${e.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},38112:(e,t,r)=>{r.d(t,{Z:()=>ec});var n,o,l,i={};r.r(i),r.d(i,{ButtonExample:()=>N});var c=r(24246),s=r(27378),a=r(40624),u=r(29088),p=r(32711),d=r(36712),b=r(4423),g=r(94544),f=r(30691),h=r(78844),y=r(73919);function j(){let{prism:e}=(0,y.L)(),{colorMode:t}=(0,h.I)(),r=e.theme,n=e.darkTheme||r;return"dark"===t?n:r}var m=r(88941);function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function v({children:e}){return(0,c.jsx)("div",{className:(0,a.Z)("playgroundHeader_Tvsk"),children:e})}function x(){return(0,c.jsx)("div",{children:"Loading..."})}function w(){return(0,c.jsx)(g.Z,{fallback:(0,c.jsx)(x,{}),children:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m.Z,{fallback:e=>(0,c.jsx)(f.Ac,O({},e)),children:(0,c.jsx)(p.i5,{})}),(0,c.jsx)(p.IF,{})]})})}function P(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{children:(0,c.jsx)(d.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,c.jsx)("div",{className:"playgroundPreview_mApW",children:(0,c.jsx)(w,{})})]})}function k(){let e=(0,u.Z)();return(0,c.jsx)(p.uz,{className:"playgroundEditor_TySg"},String(e))}function S(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{children:(0,c.jsx)(d.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,c.jsx)(k,{})]})}let E=e=>`${e};`;function D(e){var t,r,n,o,{children:l,transformCode:i}=e,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children","transformCode"]);let{siteConfig:{themeConfig:a}}=(0,b.Z)(),{liveCodeBlock:{playgroundPosition:u}}=a,d=j(),g=null!==(o=null===(n=s.metastring)||void 0===n?void 0:n.includes("noInline"))&&void 0!==o&&o;return(0,c.jsx)("div",{className:"playgroundContainer_6Ior",children:(0,c.jsx)(p.nu,(t=O({code:null==l?void 0:l.replace(/\n$/,""),noInline:g,transformCode:null!=i?i:E,theme:d},s),r=r={children:"top"===u?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(P,{}),(0,c.jsx)(S,{})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(S,{}),(0,c.jsx)(P,{})]})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))})}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function N(e){var t,r;return(0,c.jsx)("button",(t=B({type:"button"},e),r=r={style:B({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let I=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({React:s},s,i);var C=r(89583),Z=r(6324),T=r.n(Z);let L=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),A=RegExp("\\{(?<range>[\\d,-]+)\\}"),_={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"<!--",end:"-->"}},$=(n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},_),o=o={lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}),n),M=Object.keys(_);function R(e,t){let r=e.map(e=>{let{start:r,end:n}=$[e];return`(?:${r}\\s*(${t.flatMap(e=>{var t,r;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(r=e.block)||void 0===r?void 0:r.end].filter(Boolean)}).join("|")})\\s*${n})`}).join("|");return RegExp(`^\\s*(?:${r})\\s*$`)}function V(e){var t,r,{as:n}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["as"]);let l=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach(([e,n])=>{let o=t[e];o&&"string"==typeof n&&(r[o]=n)}),r}(j());return(0,c.jsx)(n,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},o),r=r={style:l,className:(0,a.Z)(o.className,"codeBlockContainer_jDV4",C.k.common.codeBlock)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let q={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function W({children:e,className:t}){return(0,c.jsx)(V,{as:"pre",tabIndex:0,className:(0,a.Z)(q.codeBlockStandalone,"thin-scrollbar",t),children:(0,c.jsx)("code",{className:q.codeBlockLines,children:e})})}var H=r(51114);let z={attributes:!0,characterData:!0,childList:!0,subtree:!0};var F=r(26101);let G={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function J({line:e,classNames:t,showLineNumbers:r,getLineProps:n,getTokenProps:o}){var l,i;1===e.length&&"\n"===e[0].content&&(e[0].content="");let s=n({line:e,className:(0,a.Z)(t,r&&G.codeLine)}),u=e.map((e,t)=>(0,c.jsx)("span",U({},o({token:e})),t));return(0,c.jsxs)("span",(l=U({},s),i=i={children:[r?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:G.codeLineNumber}),(0,c.jsx)("span",{className:G.codeLineContent,children:u})]}):u,(0,c.jsx)("br",{})]},Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(i)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(i)).forEach(function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(i,e))}),l))}var Q=r(34370);function X(e){var t,r;return(0,c.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,c.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}function Y(e){var t,r;return(0,c.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,c.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee({code:e,className:t}){let[r,n]=(0,s.useState)(!1),o=(0,s.useRef)(void 0),l=(0,s.useCallback)(()=>{(0,Q.Z)(e),n(!0),o.current=window.setTimeout(()=>{n(!1)},1e3)},[e]);return(0,s.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,c.jsx)("button",{type:"button","aria-label":r?(0,d.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,d.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,d.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",t,K.copyButton,r&&K.copyButtonCopied),onClick:l,children:(0,c.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,c.jsx)(X,{className:K.copyButtonIcon}),(0,c.jsx)(Y,{className:K.copyButtonSuccessIcon})]})})}function et(e){var t,r;return(0,c.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,c.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let er={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function en({className:e,onClick:t,isEnabled:r}){let n=(0,d.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,c.jsx)("button",{type:"button",onClick:t,className:(0,a.Z)("clean-btn",e,r&&er.wordWrapButtonEnabled),"aria-label":n,title:n,children:(0,c.jsx)(et,{className:er.wordWrapButtonIcon,"aria-hidden":"true"})})}function eo({children:e,className:t="",metastring:r,title:n,showLineNumbers:o,language:l}){var i,u,p,d;let{prism:{defaultLanguage:b,magicComments:g}}=(0,y.L)(),f=null==(u=null!==(i=null!=l?l:function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==i?i:b)?void 0:u.toLowerCase(),h=j(),m=function(){let[e,t]=(0,s.useState)(!1),[r,n]=(0,s.useState)(!1),o=(0,s.useRef)(null),l=(0,s.useCallback)(()=>{let r=o.current.querySelector("code");e?r.removeAttribute("style"):(r.style.whiteSpace="pre-wrap",r.style.overflowWrap="anywhere"),t(e=>!e)},[o,e]),i=(0,s.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=o.current;n(e>t||o.current.querySelector("code").hasAttribute("style"))},[o]);return!function(e,t){let[r,n]=(0,s.useState)(),o=(0,s.useCallback)(()=>{var t;n(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))},[e,n]);(0,s.useEffect)(()=>{o()},[o]),function(e,t,r=z){let n=(0,H.zX)(t),o=(0,H.Ql)(r);(0,s.useEffect)(()=>{let t=new MutationObserver(n);return e&&t.observe(e,o),()=>t.disconnect()},[e,n,o])}(r,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(o,i),(0,s.useEffect)(()=>{i()},[e,i]),(0,s.useEffect)(()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)}),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:r,toggle:l}}(),O=(null!==(d=null==r?void 0:null===(p=r.match(L))||void 0===p?void 0:p.groups.title)&&void 0!==d?d:"")||n,{lineClassNames:v,code:x}=function(e,t){let r=e.replace(/\n$/,""),{language:n,magicComments:o,metastring:l}=t;if(l&&A.test(l)){let e=l.match(A).groups.range;if(0===o.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=o[0].className;return{lineClassNames:Object.fromEntries(T()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:r}}if(void 0===n)return{lineClassNames:{},code:r};let i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return R(["js","jsBlock"],t);case"jsx":case"tsx":return R(["js","jsBlock","jsx"],t);case"html":return R(["js","jsBlock","html"],t);case"python":case"py":case"bash":return R(["bash"],t);case"markdown":case"md":return R(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return R(["tex"],t);case"lua":case"haskell":case"sql":return R(["lua"],t);case"wasm":return R(["wasm"],t);case"vb":case"vba":case"visual-basic":return R(["vb","rem"],t);case"vbnet":return R(["vbnet","rem"],t);case"batch":return R(["rem"],t);case"basic":return R(["rem","f90"],t);case"fsharp":return R(["js","ml"],t);case"ocaml":case"sml":return R(["ml"],t);case"fortran":return R(["f90"],t);case"cobol":return R(["cobol"],t);default:return R(M,t)}}(n,o),c=r.split("\n"),s=Object.fromEntries(o.map(e=>[e.className,{start:0,range:""}])),a=Object.fromEntries(o.filter(e=>e.line).map(({className:e,line:t})=>[t,e])),u=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.start,e])),p=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.end,e]));for(let e=0;e<c.length;){let t=c[e].match(i);if(!t){e+=1;continue}let r=t.slice(1).find(e=>void 0!==e);a[r]?s[a[r]].range+=`${e},`:u[r]?s[u[r]].start=e:p[r]&&(s[p[r]].range+=`${s[p[r]].start}-${e-1},`),c.splice(e,1)}r=c.join("\n");let d={};return Object.entries(s).forEach(([e,{range:t}])=>{T()(t).forEach(t=>{var r;null!==(r=d[t])&&void 0!==r||(d[t]=[]),d[t].push(e)})}),{lineClassNames:d,code:r}}(e,{metastring:r,language:f,magicComments:g}),w=null!=o?o:!!(null==r?void 0:r.includes("showLineNumbers"));return(0,c.jsxs)(V,{as:"div",className:(0,a.Z)(t,f&&!t.includes(`language-${f}`)&&`language-${f}`),children:[O&&(0,c.jsx)("div",{className:q.codeBlockTitle,children:O}),(0,c.jsxs)("div",{className:q.codeBlockContent,children:[(0,c.jsx)(F.y$,{theme:h,code:x,language:null!=f?f:"text",children:({className:e,style:t,tokens:r,getLineProps:n,getTokenProps:o})=>(0,c.jsx)("pre",{tabIndex:0,ref:m.codeBlockRef,className:(0,a.Z)(e,q.codeBlock,"thin-scrollbar"),style:t,children:(0,c.jsx)("code",{className:(0,a.Z)(q.codeBlockLines,w&&q.codeBlockLinesWithNumbering),children:r.map((e,t)=>(0,c.jsx)(J,{line:e,getLineProps:n,getTokenProps:o,classNames:v[t],showLineNumbers:w},t))})})}),(0,c.jsxs)("div",{className:q.buttonGroup,children:[(m.isEnabled||m.isCodeScrollable)&&(0,c.jsx)(en,{className:q.codeButton,onClick:()=>m.toggle(),isEnabled:m.isEnabled}),(0,c.jsx)(ee,{className:q.codeButton,code:x})]})]})]})}function el(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}let ei=(l=function(e){var t,r,{children:n}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children"]);let l=(0,u.Z)(),i=s.Children.toArray(n).some(e=>(0,s.isValidElement)(e))?n:Array.isArray(n)?n.join(""):n,a="string"==typeof i?eo:W;return(0,c.jsx)(a,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},o),r=r={children:i},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t),String(l))},function(e){return e.live?(0,c.jsx)(D,el({scope:I},e)):(0,c.jsx)(l,el({},e))});function ec(e){return(0,c.jsx)(ei,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e))}},38825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>b});var n=r(24246),o=r(71670),l=r(97555),i=r(61132),c=r(52605),s=r(82064);let a={sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},u="\u{1F4E6} plugin-google-analytics",p={id:"api/plugins/plugin-google-analytics",title:"\u{1F4E6} plugin-google-analytics",description:"The default Google Analytics plugin. It is a JavaScript library for measuring how users interact with your website in the production build. If you are using Google Analytics 4 you might need to consider using plugin-google-gtag instead.",source:"@site/docs/api/plugins/plugin-google-analytics.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-google-analytics",permalink:"/docs/api/plugins/@docusaurus/plugin-google-analytics",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-google-analytics.mdx",tags:[],version:"current",lastUpdatedBy:"dabreadman",lastUpdatedAt:1724523358e3,sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},sidebar:"api",previous:{title:"\u{1F4E6} plugin-debug",permalink:"/docs/api/plugins/@docusaurus/plugin-debug"},next:{title:"\u{1F4E6} plugin-google-gtag",permalink:"/docs/api/plugins/@docusaurus/plugin-google-gtag"}},d={},b=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function g(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"-plugin-google-analytics",children:"\u{1F4E6} plugin-google-analytics"})}),"\n","\n",(0,n.jsxs)(t.p,{children:["The default ",(0,n.jsx)(t.a,{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/",children:"Google Analytics"})," plugin. It is a JavaScript library for measuring how users interact with your website ",(0,n.jsx)(t.strong,{children:"in the production build"}),". If you are using Google Analytics 4 you might need to consider using ",(0,n.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:"plugin-google-gtag"})," instead."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Deprecated",type:"danger",children:[(0,n.jsxs)(t.p,{children:["This plugin is ",(0,n.jsx)(t.strong,{children:"deprecated"}),", and will become useless on July 1, 2023."]}),(0,n.jsxs)(t.p,{children:["Google is ",(0,n.jsx)(t.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"moving away from Universal Analytics"}),"."]}),(0,n.jsxs)(t.p,{children:["If you are still using this plugin with a ",(0,n.jsx)(t.code,{children:"UA-*"})," tracking id, you should create a Google Analytics 4 account as soon as possible, and use ",(0,n.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:(0,n.jsx)(t.code,{children:"@docusaurus/plugin-google-gtag"})})," instead of this plugin. More details ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"here"}),"."]})]}),"\n",(0,n.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,n.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,n.jsx)(t.strong,{children:"only active in production"})," to avoid polluting the analytics statistics."]})}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(i.Z,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-google-analytics\n"})})}),(0,n.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-google-analytics\n"})})}),(0,n.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-google-analytics\n"})})})]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["If you use the preset ",(0,n.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,n.jsxs)(t.p,{children:["You can configure this plugin through the ",(0,n.jsx)(t.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,n.jsx)(c.Z,{children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"trackingID"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Required"})}),(0,n.jsx)(t.td,{children:"The tracking ID of your analytics service."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"anonymizeIP"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"false"})}),(0,n.jsx)(t.td,{children:"Whether the IP should be anonymized when sending requests."})]})]})]})}),"\n",(0,n.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,n.jsx)(t.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,n.jsx)(s.Z,{pluginName:"@docusaurus/plugin-google-analytics",presetOptionName:"googleAnalytics",code:"{\n  trackingID: 'UA-141789564-1',\n  anonymizeIP: true,\n}"})]})}function f(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);