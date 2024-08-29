"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13948],{15995:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(62540);r(63696);var o=r(11750);function l({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.A)("tabItem_pnkT",r),hidden:t,children:e})}},27446:(e,t,r)=>{r.d(t,{A:()=>O});var n=r(62540),o=r(63696),l=r(11750),i=r(7846),c=r(49519),s=r(96439),a=r(19739),u=r(66904),p=r(79244);function d(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function b({value:e,tabValues:t}){return t.some(t=>t.value===e)}var g=r(10709);function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function y({className:e,block:t,selectedValue:r,selectValue:o,tabValues:c}){let s=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),u=e=>{let t=e.currentTarget,n=c[s.indexOf(t)].value;n!==r&&(a(t),o(n))},p=e=>{var t,r;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=s.indexOf(e.currentTarget)+1;n=null!==(t=s[r])&&void 0!==t?t:s[0];break}case"ArrowLeft":{let t=s.indexOf(e.currentTarget)-1;n=null!==(r=s[t])&&void 0!==r?r:s[s.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},e),children:c.map(({value:e,label:t,attributes:o})=>(0,n.jsx)("li",h(f({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>s.push(e),onKeyDown:p,onClick:u},o),{className:(0,l.A)("tabs__item","tabItem_AQgk",null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e))})}function j({lazy:e,children:t,selectedValue:r}){let i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=i.find(e=>e.props.value===r);return e?(0,o.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function m(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,l=function(e){let{values:t,children:r}=e;return(0,o.useMemo)(()=>{let e=null!=t?t:d(r).map(({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n}));return!function(e){let t=(0,u.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[i,g]=(0,o.useState)(()=>(function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(r=t.find(e=>e.default))&&void 0!==r?r:t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:l})),[f,h]=function({queryString:e=!1,groupId:t}){let r=(0,c.W6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,a.aZ)(n),(0,o.useCallback)(e=>{var t,o;if(!n)return;let l=new URLSearchParams(r.location.search);l.set(n,e),r.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},r.location),o=o={search:l.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}),t))},[n,r])]}({queryString:r,groupId:n}),[y,j]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,n]=(0,p.Dv)(t);return[r,(0,o.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),m=(()=>{let e=null!=f?f:y;return b({value:e,tabValues:l})?e:null})();return(0,s.A)(()=>{m&&g(m)},[m]),{selectedValue:i,selectValue:(0,o.useCallback)(e=>{if(!b({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);g(e),h(e),j(e)},[h,j,l]),tabValues:l}}(e);return(0,n.jsxs)("div",{className:(0,l.A)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(y,f({},t,e)),(0,n.jsx)(j,f({},t,e))]})}function O(e){let t=(0,g.A)();return(0,n.jsx)(m,h(f({},e),{children:d(e.children)}),String(t))}},40576:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(62540);r(63696);var o=r(10709);function l({children:e,fallback:t}){return(0,o.A)()?(0,n.jsx)(n.Fragment,{children:null==e?void 0:e()}):null!=t?t:null}},59273:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(62540),o=r(63696),l=r(52711),i=r(49519);let c=o.forwardRef(function({name:e,children:t},r){let c=function(e){let t=e;for(;(0,o.isValidElement)(t);)[t]=o.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(t),s=e?`${e}-${c}`:c,a=`#${s}`,u=(0,i.W6)();return(0,l.A)().collectAnchor(s),(0,n.jsx)("tr",{id:s,tabIndex:0,ref:u.location.hash===a?r:void 0,onClick:e=>{"A"!==e.target.tagName.toUpperCase()&&u.push(a)},onKeyDown:e=>{"Enter"===e.key&&u.push(a)},children:t.props.children})});function s({children:e,name:t}){if("table"!==e.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[r,l]=o.Children.toArray(e.props.children),i=(0,o.useRef)(null);(0,o.useEffect)(()=>{var e;null===(e=i.current)||void 0===e||e.focus()},[i]);let s=o.Children.map(l.props.children,e=>(0,n.jsx)(c,{name:t,ref:i,children:e}));return(0,n.jsxs)("table",{className:"apiTable_e8hp",children:[r,(0,n.jsx)("tbody",{children:s})]})}},59433:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(62540);r(63696);var o=r(36372),l=r(69615),i=r(81912),c=r(27446),s=r(15995),a=r(55887);let u=void 0;function p({code:e,pluginName:t,presetOptionName:r}){let p=(0,l.ir)(u).path;return(0,n.jsxs)(c.A,{groupId:"api-config-ex",children:[(0,n.jsxs)(s.A,{value:"preset",label:(0,i.T)({message:"Preset options"}),children:[(0,n.jsx)("p",{children:(0,n.jsx)(i.A,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,n.jsx)(o.A,{to:`${p}/using-plugins#docusauruspreset-classic`,children:(0,n.jsx)(i.A,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,n.jsx)(a.A,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
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
};`})]}),(0,n.jsxs)(s.A,{value:"plugin",label:(0,i.T)({message:"Plugin options"}),children:[(0,n.jsx)("p",{children:(0,n.jsx)(i.A,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,n.jsx)(a.A,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${t}',
      // highlight-start
      ${e.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},55887:(e,t,r)=>{r.d(t,{A:()=>ec});var n,o,l,i={};r.r(i),r.d(i,{ButtonExample:()=>B});var c=r(62540),s=r(63696),a=r(11750),u=r(10709),p=r(55152),d=r(81912),b=r(99468),g=r(40576),f=r(1495),h=r(66659),y=r(25436);function j(){let{prism:e}=(0,y.p)(),{colorMode:t}=(0,h.G)(),r=e.theme,n=e.darkTheme||r;return"dark"===t?n:r}var m=r(43758);function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function v({children:e}){return(0,c.jsx)("div",{className:(0,a.A)("playgroundHeader_Tvsk"),children:e})}function x(){return(0,c.jsx)("div",{children:"Loading..."})}function w(){return(0,c.jsx)(g.A,{fallback:(0,c.jsx)(x,{}),children:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m.A,{fallback:e=>(0,c.jsx)(f.MN,O({},e)),children:(0,c.jsx)(p.pA,{})}),(0,c.jsx)(p.p1,{})]})})}function P(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{children:(0,c.jsx)(d.A,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,c.jsx)("div",{className:"playgroundPreview_mApW",children:(0,c.jsx)(w,{})})]})}function k(){let e=(0,u.A)();return(0,c.jsx)(p.w,{className:"playgroundEditor_TySg"},String(e))}function A(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{children:(0,c.jsx)(d.A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,c.jsx)(k,{})]})}let S=e=>`${e};`;function E(e){var t,r,n,o,{children:l,transformCode:i}=e,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children","transformCode"]);let{siteConfig:{themeConfig:a}}=(0,b.A)(),{liveCodeBlock:{playgroundPosition:u}}=a,d=j(),g=null!==(o=null===(n=s.metastring)||void 0===n?void 0:n.includes("noInline"))&&void 0!==o&&o;return(0,c.jsx)("div",{className:"playgroundContainer_6Ior",children:(0,c.jsx)(p.Q,(t=O({code:null==l?void 0:l.replace(/\n$/,""),noInline:g,transformCode:null!=i?i:S,theme:d},s),r=r={children:"top"===u?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(P,{}),(0,c.jsx)(A,{})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(A,{}),(0,c.jsx)(P,{})]})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))})}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function B(e){var t,r;return(0,c.jsx)("button",(t=D({type:"button"},e),r=r={style:D({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let N=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({React:s},s,i);var C=r(12653),I=r(19934),T=r.n(I);let L=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),_=RegExp("\\{(?<range>[\\d,-]+)\\}"),$={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"<!--",end:"-->"}},R=(n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},$),o=o={lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}),n),M=Object.keys($);function W(e,t){let r=e.map(e=>{let{start:r,end:n}=R[e];return`(?:${r}\\s*(${t.flatMap(e=>{var t,r;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(r=e.block)||void 0===r?void 0:r.end].filter(Boolean)}).join("|")})\\s*${n})`}).join("|");return RegExp(`^\\s*(?:${r})\\s*$`)}function q(e){var t,r,{as:n}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["as"]);let l=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach(([e,n])=>{let o=t[e];o&&"string"==typeof n&&(r[o]=n)}),r}(j());return(0,c.jsx)(n,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},o),r=r={style:l,className:(0,a.A)(o.className,"codeBlockContainer_jDV4",C.G.common.codeBlock)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let V={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function G({children:e,className:t}){return(0,c.jsx)(q,{as:"pre",tabIndex:0,className:(0,a.A)(V.codeBlockStandalone,"thin-scrollbar",t),children:(0,c.jsx)("code",{className:V.codeBlockLines,children:e})})}var H=r(2550);let F={attributes:!0,characterData:!0,childList:!0,subtree:!0};var U=r(27663);let z={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function Q({line:e,classNames:t,showLineNumbers:r,getLineProps:n,getTokenProps:o}){var l,i;1===e.length&&"\n"===e[0].content&&(e[0].content="");let s=n({line:e,className:(0,a.A)(t,r&&z.codeLine)}),u=e.map((e,t)=>(0,c.jsx)("span",J({},o({token:e})),t));return(0,c.jsxs)("span",(l=J({},s),i=i={children:[r?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:z.codeLineNumber}),(0,c.jsx)("span",{className:z.codeLineContent,children:u})]}):u,(0,c.jsx)("br",{})]},Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(i)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(i)).forEach(function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(i,e))}),l))}var Y=r(936);function X(e){var t,r;return(0,c.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,c.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}function Z(e){var t,r;return(0,c.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,c.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee({code:e,className:t}){let[r,n]=(0,s.useState)(!1),o=(0,s.useRef)(void 0),l=(0,s.useCallback)(()=>{(0,Y.A)(e),n(!0),o.current=window.setTimeout(()=>{n(!1)},1e3)},[e]);return(0,s.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,c.jsx)("button",{type:"button","aria-label":r?(0,d.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,d.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,d.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.A)("clean-btn",t,K.copyButton,r&&K.copyButtonCopied),onClick:l,children:(0,c.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,c.jsx)(X,{className:K.copyButtonIcon}),(0,c.jsx)(Z,{className:K.copyButtonSuccessIcon})]})})}function et(e){var t,r;return(0,c.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({viewBox:"0 0 24 24"},e),r=r={children:(0,c.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}let er={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function en({className:e,onClick:t,isEnabled:r}){let n=(0,d.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,c.jsx)("button",{type:"button",onClick:t,className:(0,a.A)("clean-btn",e,r&&er.wordWrapButtonEnabled),"aria-label":n,title:n,children:(0,c.jsx)(et,{className:er.wordWrapButtonIcon,"aria-hidden":"true"})})}function eo({children:e,className:t="",metastring:r,title:n,showLineNumbers:o,language:l}){var i,u,p,d;let{prism:{defaultLanguage:b,magicComments:g}}=(0,y.p)(),f=null==(u=null!==(i=null!=l?l:function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==i?i:b)?void 0:u.toLowerCase(),h=j(),m=function(){let[e,t]=(0,s.useState)(!1),[r,n]=(0,s.useState)(!1),o=(0,s.useRef)(null),l=(0,s.useCallback)(()=>{let r=o.current.querySelector("code");e?r.removeAttribute("style"):(r.style.whiteSpace="pre-wrap",r.style.overflowWrap="anywhere"),t(e=>!e)},[o,e]),i=(0,s.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=o.current;n(e>t||o.current.querySelector("code").hasAttribute("style"))},[o]);return!function(e,t){let[r,n]=(0,s.useState)(),o=(0,s.useCallback)(()=>{var t;n(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))},[e,n]);(0,s.useEffect)(()=>{o()},[o]),function(e,t,r=F){let n=(0,H._q)(t),o=(0,H.Be)(r);(0,s.useEffect)(()=>{let t=new MutationObserver(n);return e&&t.observe(e,o),()=>t.disconnect()},[e,n,o])}(r,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(o,i),(0,s.useEffect)(()=>{i()},[e,i]),(0,s.useEffect)(()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)}),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:r,toggle:l}}(),O=(null!==(d=null==r?void 0:null===(p=r.match(L))||void 0===p?void 0:p.groups.title)&&void 0!==d?d:"")||n,{lineClassNames:v,code:x}=function(e,t){let r=e.replace(/\n$/,""),{language:n,magicComments:o,metastring:l}=t;if(l&&_.test(l)){let e=l.match(_).groups.range;if(0===o.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=o[0].className;return{lineClassNames:Object.fromEntries(T()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:r}}if(void 0===n)return{lineClassNames:{},code:r};let i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return W(["js","jsBlock"],t);case"jsx":case"tsx":return W(["js","jsBlock","jsx"],t);case"html":return W(["js","jsBlock","html"],t);case"python":case"py":case"bash":return W(["bash"],t);case"markdown":case"md":return W(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return W(["tex"],t);case"lua":case"haskell":case"sql":return W(["lua"],t);case"wasm":return W(["wasm"],t);case"vb":case"vba":case"visual-basic":return W(["vb","rem"],t);case"vbnet":return W(["vbnet","rem"],t);case"batch":return W(["rem"],t);case"basic":return W(["rem","f90"],t);case"fsharp":return W(["js","ml"],t);case"ocaml":case"sml":return W(["ml"],t);case"fortran":return W(["f90"],t);case"cobol":return W(["cobol"],t);default:return W(M,t)}}(n,o),c=r.split("\n"),s=Object.fromEntries(o.map(e=>[e.className,{start:0,range:""}])),a=Object.fromEntries(o.filter(e=>e.line).map(({className:e,line:t})=>[t,e])),u=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.start,e])),p=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.end,e]));for(let e=0;e<c.length;){let t=c[e].match(i);if(!t){e+=1;continue}let r=t.slice(1).find(e=>void 0!==e);a[r]?s[a[r]].range+=`${e},`:u[r]?s[u[r]].start=e:p[r]&&(s[p[r]].range+=`${s[p[r]].start}-${e-1},`),c.splice(e,1)}r=c.join("\n");let d={};return Object.entries(s).forEach(([e,{range:t}])=>{T()(t).forEach(t=>{var r;null!==(r=d[t])&&void 0!==r||(d[t]=[]),d[t].push(e)})}),{lineClassNames:d,code:r}}(e,{metastring:r,language:f,magicComments:g}),w=null!=o?o:!!(null==r?void 0:r.includes("showLineNumbers"));return(0,c.jsxs)(q,{as:"div",className:(0,a.A)(t,f&&!t.includes(`language-${f}`)&&`language-${f}`),children:[O&&(0,c.jsx)("div",{className:V.codeBlockTitle,children:O}),(0,c.jsxs)("div",{className:V.codeBlockContent,children:[(0,c.jsx)(U.f4,{theme:h,code:x,language:null!=f?f:"text",children:({className:e,style:t,tokens:r,getLineProps:n,getTokenProps:o})=>(0,c.jsx)("pre",{tabIndex:0,ref:m.codeBlockRef,className:(0,a.A)(e,V.codeBlock,"thin-scrollbar"),style:t,children:(0,c.jsx)("code",{className:(0,a.A)(V.codeBlockLines,w&&V.codeBlockLinesWithNumbering),children:r.map((e,t)=>(0,c.jsx)(Q,{line:e,getLineProps:n,getTokenProps:o,classNames:v[t],showLineNumbers:w},t))})})}),(0,c.jsxs)("div",{className:V.buttonGroup,children:[(m.isEnabled||m.isCodeScrollable)&&(0,c.jsx)(en,{className:V.codeButton,onClick:()=>m.toggle(),isEnabled:m.isEnabled}),(0,c.jsx)(ee,{className:V.codeButton,code:x})]})]})]})}function el(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}let ei=(l=function(e){var t,r,{children:n}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["children"]);let l=(0,u.A)(),i=s.Children.toArray(n).some(e=>(0,s.isValidElement)(e))?n:Array.isArray(n)?n.join(""):n,a="string"==typeof i?eo:G;return(0,c.jsx)(a,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},o),r=r={children:i},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t),String(l))},function(e){return e.live?(0,c.jsx)(E,el({scope:N},e)):(0,c.jsx)(l,el({},e))});function ec(e){return(0,c.jsx)(ei,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e))}},3161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>b});var n=r(62540),o=r(43023),l=r(27446),i=r(15995),c=r(59273),s=r(59433);let a={sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},u="\u{1F4E6} plugin-google-analytics",p={id:"api/plugins/plugin-google-analytics",title:"\u{1F4E6} plugin-google-analytics",description:"The default Google Analytics plugin. It is a JavaScript library for measuring how users interact with your website in the production build. If you are using Google Analytics 4 you might need to consider using plugin-google-gtag instead.",source:"@site/docs/api/plugins/plugin-google-analytics.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-google-analytics",permalink:"/docs/api/plugins/@docusaurus/plugin-google-analytics",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-google-analytics.mdx",tags:[],version:"current",lastUpdatedBy:"dabreadman",lastUpdatedAt:1724955483e3,sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},sidebar:"api",previous:{title:"\u{1F4E6} plugin-debug",permalink:"/docs/api/plugins/@docusaurus/plugin-debug"},next:{title:"\u{1F4E6} plugin-google-gtag",permalink:"/docs/api/plugins/@docusaurus/plugin-google-gtag"}},d={},b=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function g(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"-plugin-google-analytics",children:"\u{1F4E6} plugin-google-analytics"})}),"\n","\n",(0,n.jsxs)(t.p,{children:["The default ",(0,n.jsx)(t.a,{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/",children:"Google Analytics"})," plugin. It is a JavaScript library for measuring how users interact with your website ",(0,n.jsx)(t.strong,{children:"in the production build"}),". If you are using Google Analytics 4 you might need to consider using ",(0,n.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:"plugin-google-gtag"})," instead."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Deprecated",type:"danger",children:[(0,n.jsxs)(t.p,{children:["This plugin is ",(0,n.jsx)(t.strong,{children:"deprecated"}),", and will become useless on July 1, 2023."]}),(0,n.jsxs)(t.p,{children:["Google is ",(0,n.jsx)(t.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"moving away from Universal Analytics"}),"."]}),(0,n.jsxs)(t.p,{children:["If you are still using this plugin with a ",(0,n.jsx)(t.code,{children:"UA-*"})," tracking id, you should create a Google Analytics 4 account as soon as possible, and use ",(0,n.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:(0,n.jsx)(t.code,{children:"@docusaurus/plugin-google-gtag"})})," instead of this plugin. More details ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"here"}),"."]})]}),"\n",(0,n.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,n.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,n.jsx)(t.strong,{children:"only active in production"})," to avoid polluting the analytics statistics."]})}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,n.jsx)(i.A,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-google-analytics\n"})})}),(0,n.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-google-analytics\n"})})}),(0,n.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-google-analytics\n"})})})]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["If you use the preset ",(0,n.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,n.jsxs)(t.p,{children:["You can configure this plugin through the ",(0,n.jsx)(t.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,n.jsx)(c.A,{children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"trackingID"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Required"})}),(0,n.jsx)(t.td,{children:"The tracking ID of your analytics service."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"anonymizeIP"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"false"})}),(0,n.jsx)(t.td,{children:"Whether the IP should be anonymized when sending requests."})]})]})]})}),"\n",(0,n.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,n.jsx)(t.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,n.jsx)(s.A,{pluginName:"@docusaurus/plugin-google-analytics",presetOptionName:"googleAnalytics",code:"{\n  trackingID: 'UA-141789564-1',\n  anonymizeIP: true,\n}"})]})}function f(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);