"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["37874"],{97199:function(e,t,n){n.r(t),n.d(t,{frontMatter:()=>u,default:()=>m,contentTitle:()=>d,assets:()=>h,toc:()=>p,metadata:()=>r});var r=JSON.parse('{"id":"api/plugins/plugin-google-analytics","title":"\uD83D\uDCE6 plugin-google-analytics","description":"The default Google Analytics plugin. It is a JavaScript library for measuring how users interact with your website in the production build. If you are using Google Analytics 4 you might need to consider using plugin-google-gtag instead.","source":"@site/docs/api/plugins/plugin-google-analytics.mdx","sourceDirName":"api/plugins","slug":"/api/plugins/@docusaurus/plugin-google-analytics","permalink":"/docs/api/plugins/@docusaurus/plugin-google-analytics","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-google-analytics.mdx","tags":[],"version":"current","lastUpdatedBy":"dabreadman","lastUpdatedAt":1743877163000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"slug":"/api/plugins/@docusaurus/plugin-google-analytics"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 plugin-debug","permalink":"/docs/api/plugins/@docusaurus/plugin-debug"},"next":{"title":"\uD83D\uDCE6 plugin-google-gtag","permalink":"/docs/api/plugins/@docusaurus/plugin-google-gtag"}}'),s=n(85893),l=n(80980),a=n(15398),i=n(58636),o=n(32240),c=n(66359);let u={sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},d="\uD83D\uDCE6 plugin-google-analytics",h={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function g(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"-plugin-google-analytics",children:"\uD83D\uDCE6 plugin-google-analytics"})}),"\n","\n",(0,s.jsxs)(t.p,{children:["The default ",(0,s.jsx)(t.a,{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/",children:"Google Analytics"})," plugin. It is a JavaScript library for measuring how users interact with your website ",(0,s.jsx)(t.strong,{children:"in the production build"}),". If you are using Google Analytics 4 you might need to consider using ",(0,s.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:"plugin-google-gtag"})," instead."]}),"\n",(0,s.jsxs)(t.admonition,{title:"Deprecated",type:"danger",children:[(0,s.jsxs)(t.p,{children:["This plugin is ",(0,s.jsx)(t.strong,{children:"deprecated"})," and became useless on July 1, 2023."]}),(0,s.jsxs)(t.p,{children:["Google is ",(0,s.jsx)(t.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"moving away from Universal Analytics"}),"."]}),(0,s.jsxs)(t.p,{children:["If you are still using this plugin with a ",(0,s.jsx)(t.code,{children:"UA-*"})," tracking id, you should create a Google Analytics 4 account as soon as possible, and use ",(0,s.jsx)(t.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:(0,s.jsx)(t.code,{children:"@docusaurus/plugin-google-gtag"})})," instead of this plugin. More details ",(0,s.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"here"}),"."]})]}),"\n",(0,s.jsx)(t.admonition,{title:"production only",type:"warning",children:(0,s.jsxs)(t.p,{children:["This plugin is always inactive in development and ",(0,s.jsx)(t.strong,{children:"only active in production"})," to avoid polluting the analytics statistics."]})}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(i.Z,{value:"npm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-google-analytics\n"})})}),(0,s.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-google-analytics\n"})})}),(0,s.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-google-analytics\n"})})}),(0,s.jsx)(i.Z,{value:"bun",label:"Bun",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"bun add @docusaurus/plugin-google-analytics\n"})})})]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["If you use the preset ",(0,s.jsx)(t.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,s.jsxs)(t.p,{children:["You can configure this plugin through the ",(0,s.jsx)(t.a,{href:"/docs/using-plugins#docusauruspreset-classic",children:"preset options"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(o.Z,{children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"trackingID"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.td,{children:"The tracking ID of your analytics service."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"anonymizeIP"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsx)(t.td,{children:"Whether the IP should be anonymized when sending requests."})]})]})]})}),"\n",(0,s.jsx)(t.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,s.jsx)(t.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,s.jsx)(c.Z,{pluginName:"@docusaurus/plugin-google-analytics",presetOptionName:"googleAnalytics",code:"{\n  trackingID: 'UA-141789564-1',\n  anonymizeIP: true,\n}"})]})}function m(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},58636:function(e,t,n){n.d(t,{Z:()=>l});var r=n(85893);n(67294);var s=n(90496);function l(e){let{children:t,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_pnkT",l),hidden:n,children:t})}},15398:function(e,t,n){n.d(t,{Z:()=>x});var r=n(85893),s=n(67294),l=n(90496),a=n(54947),i=n(3620),o=n(844),c=n(97486),u=n(32263),d=n(16971);function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var g=n(71607);function m(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{let t=e.currentTarget,n=o[c.indexOf(t)].value;n!==s&&(u(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t),children:o.map(e=>{let{value:t,label:n,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...a,className:(0,l.Z)("tabs__item","tabItem_AQgk",a?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function f(e){let{lazy:t,children:n,selectedValue:a}=e,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=i.find(e=>e.props.value===a);return e?(0,s.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,l=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}),r=(0,u.lx)(e,(e,t)=>e.value===t.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[t,n])}(e),[a,g]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:l})),[m,f]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(l),(0,s.useCallback)(e=>{if(!l)return;let t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})},[l,r])]}({queryString:n,groupId:r}),[b,x]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[r,l]=(0,d.Nk)(n);return[r,(0,s.useCallback)(e=>{n&&l.set(e)},[n,l])]}({groupId:r}),j=(()=>{let e=m??b;return p({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{j&&g(j)},[j]),{selectedValue:a,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);g(e),f(e),x(e)},[f,x,l]),tabValues:l}}(e);return(0,r.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(m,{...t,...e}),(0,r.jsx)(f,{...t,...e})]})}function x(e){let t=(0,g.Z)();return(0,r.jsx)(b,{...e,children:h(e.children)},String(t))}},56497:function(e,t,n){n.d(t,{Z:()=>l});var r=n(85893);n(67294);var s=n(71607);function l(e){let{children:t,fallback:n}=e;return(0,s.Z)()?(0,r.jsx)(r.Fragment,{children:t?.()}):n??null}},32240:function(e,t,n){n.d(t,{Z:()=>o});var r=n(85893),s=n(67294),l=n(96700),a=n(3620);let i=s.forwardRef(function(e,t){let{name:n,children:i}=e,o=function(e){let t=e;for(;(0,s.isValidElement)(t);)[t]=s.Children.toArray(t.props.children);if("string"!=typeof t)throw Error(`Could not extract APITable row name from JSX tree:
${JSON.stringify(e,null,2)}`);return t}(i),c=n?`${n}-${o}`:o,u=`#${c}`,d=(0,a.k6)();return(0,l.Z)().collectAnchor(c),(0,r.jsx)("tr",{id:c,tabIndex:0,ref:d.location.hash===u?t:void 0,onClick:e=>{let t="TD"===e.target.tagName.toUpperCase(),n=!!window.getSelection()?.toString();t&&!n&&d.push(u)},onKeyDown:e=>{"Enter"===e.key&&d.push(u)},children:i.props.children})});function o(e){let{children:t,name:n}=e;if("table"!==t.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");let[l,a]=s.Children.toArray(t.props.children),o=(0,s.useRef)(null);(0,s.useEffect)(()=>{o.current?.focus()},[o]);let c=s.Children.map(a.props.children,e=>(0,r.jsx)(i,{name:n,ref:o,children:e}));return(0,r.jsxs)("table",{className:"apiTable_e8hp",children:[l,(0,r.jsx)("tbody",{children:c})]})}},66359:function(e,t,n){n.d(t,{Z:()=>d});var r=n(85893);n(67294);var s=n(35363),l=n(90158),a=n(77827),i=n(15398),o=n(58636),c=n(93278);let u=void 0;function d(e){let{code:t,pluginName:n,presetOptionName:d}=e,h=(0,l.zu)(u).path;return(0,r.jsxs)(i.Z,{groupId:"api-config-ex",children:[(0,r.jsxs)(o.Z,{value:"preset",label:(0,a.I)({message:"Preset options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(a.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,r.jsx)(s.Z,{to:`${h}/using-plugins#docusauruspreset-classic`,children:(0,r.jsx)(a.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // highlight-start
        ${d}: ${t.replace(/\n/g,"\n        ")},
        // highlight-end
      },
    ],
  ],
};`})]}),(0,r.jsxs)(o.Z,{value:"plugin",label:(0,a.I)({message:"Plugin options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(a.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {
  plugins: [
    [
      '${n}',
      // highlight-start
      ${t.replace(/\n/g,"\n      ")},
      // highlight-end
    ],
  ],
};`})]})]})}},93278:function(e,t,n){n.d(t,{Z:()=>ep});var r,s={};n.r(s),n.d(s,{ButtonExample:()=>C});var l=n(85893),a=n(67294),i=n(90496),o=n(71607),c=n(10075),u=n(77827),d=n(8156),h=n(56497),p=n(85108),g=n(45245),m=n(26378);function f(){let{prism:e}=(0,m.L)(),{colorMode:t}=(0,g.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var b=n(67490);function x(e){let{children:t}=e;return(0,l.jsx)("div",{className:(0,i.Z)("playgroundHeader_Tvsk"),children:t})}function j(){return(0,l.jsx)("div",{children:"Loading..."})}function y(){return(0,l.jsx)(h.Z,{fallback:(0,l.jsx)(j,{}),children:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.Z,{fallback:e=>(0,l.jsx)(p.Ac,{...e}),children:(0,l.jsx)(c.i5,{})}),(0,l.jsx)(c.IF,{})]})})}function v(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{children:(0,l.jsx)(u.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,l.jsx)("div",{className:"playgroundPreview_mApW",children:(0,l.jsx)(y,{})})]})}function k(){let e=(0,o.Z)();return(0,l.jsx)(c.uz,{className:"playgroundEditor_TySg"},String(e))}function w(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{children:(0,l.jsx)(u.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,l.jsx)(k,{})]})}let N=e=>`${e};`;function B(e){let{children:t,transformCode:n,...r}=e,{siteConfig:{themeConfig:s}}=(0,d.Z)(),{liveCodeBlock:{playgroundPosition:a}}=s,i=f(),o=r.metastring?.includes("noInline")??!1;return(0,l.jsx)("div",{className:"playgroundContainer_6Ior",children:(0,l.jsx)(c.nu,{code:t?.replace(/\n$/,""),noInline:o,transformCode:n??N,theme:i,...r,children:"top"===a?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{}),(0,l.jsx)(w,{})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w,{}),(0,l.jsx)(v,{})]})})})}function C(e){return(0,l.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let I={React:a,...a,...s};var Z=n(55951),L=n(6324),E=n.n(L),T=n(50923);let A=/title=(?<quote>["'])(?<title>.*?)\1/,_=/\{(?<range>[\d,-]+)\}/,S={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},$={...S,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},D=Object.keys(S);function M(e,t){let n=e.map(e=>{let{start:n,end:r}=$[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${r})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}let R=(0,a.createContext)(null);function W(e){let{metadata:t,wordWrap:n,children:r}=e,s=(0,a.useMemo)(()=>({metadata:t,wordWrap:n}),[t,n]);return(0,l.jsx)(R.Provider,{value:s,children:r})}function O(){let e=(0,a.useContext)(R);if(null===e)throw new T.i6("CodeBlockContextProvider");return e}function P(e){let{as:t,...n}=e,r=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[r,s]=e,l=t[r];l&&"string"==typeof s&&(n[l]=s)}),n}(f());return(0,l.jsx)(t,{...n,style:r,className:(0,i.Z)(n.className,"codeBlockContainer_jDV4",Z.k.common.codeBlock)})}let V={codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q"};function q(e){let{children:t,className:n}=e;return(0,l.jsx)(P,{as:"pre",tabIndex:0,className:(0,i.Z)(V.codeBlockStandalone,"thin-scrollbar",n),children:(0,l.jsx)("code",{className:V.codeBlockLines,children:t})})}let z={attributes:!0,characterData:!0,childList:!0,subtree:!0};function F(e){let{children:t}=e;return t}var H=n(7316);function U(e){let{line:t,token:n,...r}=e;return(0,l.jsx)("span",{...r})}let G={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function J(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:s,getTokenProps:a}=e,o=function(e){let t=1===e.length&&"\n"===e[0].content?e[0]:void 0;return t?[{...t,content:""}]:e}(t),c=s({line:o,className:(0,i.Z)(n,r&&G.codeLine)}),u=o.map((e,t)=>{let n=a({token:e});return(0,l.jsx)(U,{...n,line:o,token:e,children:n.children},t)});return(0,l.jsxs)("span",{...c,children:[r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:G.codeLineNumber}),(0,l.jsx)("span",{className:G.codeLineContent,children:u})]}):u,(0,l.jsx)("br",{})]})}let X=a.forwardRef((e,t)=>(0,l.jsx)("pre",{ref:t,tabIndex:0,...e,className:(0,i.Z)(e.className,V.codeBlock,"thin-scrollbar")}));function Q(e){let{metadata:t}=O();return(0,l.jsx)("code",{...e,className:(0,i.Z)(e.className,V.codeBlockLines,void 0!==t.lineNumbersStart&&V.codeBlockLinesWithNumbering),style:{...e.style,counterReset:void 0===t.lineNumbersStart?void 0:`line-count ${t.lineNumbersStart-1}`}})}function Y(e){let{className:t}=e,{metadata:n,wordWrap:r}=O(),s=f(),{code:a,language:o,lineNumbersStart:c,lineClassNames:u}=n;return(0,l.jsx)(H.y$,{theme:s,code:a,language:o,children:e=>{let{className:n,style:s,tokens:a,getLineProps:o,getTokenProps:d}=e;return(0,l.jsx)(X,{ref:r.codeBlockRef,className:(0,i.Z)(t,n),style:s,children:(0,l.jsx)(Q,{children:a.map((e,t)=>(0,l.jsx)(J,{line:e,getLineProps:o,getTokenProps:d,classNames:u[t],showLineNumbers:void 0!==c},t))})})}})}var K=n(44771);function ee(e){let{className:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,i.Z)("clean-btn",t)})}function et(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function en(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let er={copyButtonCopied:"copyButtonCopied_wDuR",copyButtonIcons:"copyButtonIcons_gMWc",copyButtonIcon:"copyButtonIcon_GXfb",copyButtonSuccessIcon:"copyButtonSuccessIcon_ktUX"};function es(e){let{className:t}=e,{copyCode:n,isCopied:r}=function(){let{metadata:{code:e}}=O(),[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(void 0),s=(0,a.useCallback)(()=>{(0,K.Z)(e),n(!0),r.current=window.setTimeout(()=>{n(!1)},1e3)},[e]);return(0,a.useEffect)(()=>()=>window.clearTimeout(r.current),[]),{copyCode:s,isCopied:t}}();return(0,l.jsx)(ee,{"aria-label":r?(0,u.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,u.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)(t,er.copyButton,r&&er.copyButtonCopied),onClick:n,children:(0,l.jsxs)("span",{className:er.copyButtonIcons,"aria-hidden":"true",children:[(0,l.jsx)(et,{className:er.copyButtonIcon}),(0,l.jsx)(en,{className:er.copyButtonSuccessIcon})]})})}function el(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let ea={wordWrapButtonIcon:"wordWrapButtonIcon___5r",wordWrapButtonEnabled:"wordWrapButtonEnabled_nam_"};function ei(e){let{className:t}=e,{wordWrap:n}=O();if(!(n.isEnabled||n.isCodeScrollable))return!1;let r=(0,u.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,l.jsx)(ee,{onClick:()=>n.toggle(),className:(0,i.Z)(t,n.isEnabled&&ea.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,l.jsx)(el,{className:ea.wordWrapButtonIcon,"aria-hidden":"true"})})}function eo(e){let{className:t}=e;return(0,l.jsx)(h.Z,{children:()=>(0,l.jsxs)("div",{className:(0,i.Z)(t,"buttonGroup_KXnS"),children:[(0,l.jsx)(ei,{}),(0,l.jsx)(es,{})]})})}let ec={codeBlockContent:"codeBlockContent_cKMj",codeBlockTitle:"codeBlockTitle_U6Q0"};function eu(e){let{className:t}=e,{metadata:n}=O();return(0,l.jsxs)(P,{as:"div",className:(0,i.Z)(t,n.className),children:[n.title&&(0,l.jsx)("div",{className:ec.codeBlockTitle,children:(0,l.jsx)(F,{children:n.title})}),(0,l.jsxs)("div",{className:ec.codeBlockContent,children:[(0,l.jsx)(Y,{}),(0,l.jsx)(eo,{})]})]})}function ed(e){let t=function(e){let{prism:t}=(0,m.L)();return function(e){var t,n,r;let s=(n=(t={language:e.language,defaultLanguage:e.defaultLanguage,className:e.className}).language??function(e){if(!e)return;let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(t.className)??t.defaultLanguage,n?.toLowerCase()??"text"),{lineClassNames:l,code:a}=function(e,t){let n=e.replace(/\r?\n$/,"");return function(e,t){let{metastring:n,magicComments:r}=t;if(n&&_.test(n)){let t=n.match(_).groups.range;if(0===r.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${n}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let s=r[0].className;return{lineClassNames:Object.fromEntries(E()(t).filter(e=>e>0).map(e=>[e-1,[s]])),code:e}}return null}(n,{...t})??function(e,t){let{language:n,magicComments:r}=t;if(void 0===n)return{lineClassNames:{},code:e};let s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return M(["js","jsBlock"],t);case"jsx":case"tsx":return M(["js","jsBlock","jsx"],t);case"html":return M(["js","jsBlock","html"],t);case"python":case"py":case"bash":return M(["bash"],t);case"markdown":case"md":return M(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return M(["tex"],t);case"lua":case"haskell":return M(["lua"],t);case"sql":return M(["lua","jsBlock"],t);case"wasm":return M(["wasm"],t);case"vb":case"vba":case"visual-basic":return M(["vb","rem"],t);case"vbnet":return M(["vbnet","rem"],t);case"batch":return M(["rem"],t);case"basic":return M(["rem","f90"],t);case"fsharp":return M(["js","ml"],t);case"ocaml":case"sml":return M(["ml"],t);case"fortran":return M(["f90"],t);case"cobol":return M(["cobol"],t);default:return M(D,t)}}(n,r),l=e.split(/\r?\n/),a=Object.fromEntries(r.map(e=>[e.className,{start:0,range:""}])),i=Object.fromEntries(r.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),o=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),c=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<l.length;){let t=l[e].match(s);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);i[n]?a[i[n]].range+=`${e},`:o[n]?a[o[n]].start=e:c[n]&&(a[c[n]].range+=`${a[c[n]].start}-${e-1},`),l.splice(e,1)}let u={};return Object.entries(a).forEach(e=>{let[t,{range:n}]=e;E()(n).forEach(e=>{u[e]??=[],u[e].push(t)})}),{code:l.join("\n"),lineClassNames:u}}(n,{...t})}(e.code,{metastring:e.metastring,magicComments:e.magicComments,language:s}),o=function(e){let{className:t,language:n}=e;return(0,i.Z)(t,n&&!t?.includes(`language-${n}`)&&`language-${n}`)}({className:e.className,language:s}),c=(r=e.metastring,(r?.match(A)?.groups.title??"")||e.title),u=function(e){let{showLineNumbers:t,metastring:n}=e;if("boolean"==typeof t)return t?1:void 0;if("number"==typeof t)return t;let r=n?.split(" ").find(e=>e.startsWith("showLineNumbers"));if(r)return r.startsWith("showLineNumbers=")?parseInt(r.replace("showLineNumbers=",""),10):1}({showLineNumbers:e.showLineNumbers,metastring:e.metastring});return{codeInput:e.code,code:a,className:o,language:s,title:c,lineNumbersStart:u,lineClassNames:l}}({code:e.children,className:e.className,metastring:e.metastring,magicComments:t.magicComments,defaultLanguage:t.defaultLanguage,language:e.language,title:e.title,showLineNumbers:e.showLineNumbers})}(e),n=function(){let[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),s=(0,a.useRef)(null),l=(0,a.useCallback)(()=>{let n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[s,e]),i=(0,a.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=s.current;r(e>t||s.current.querySelector("code").hasAttribute("style"))},[s]),[o,c]=(0,a.useState)(),u=(0,a.useCallback)(()=>{c(s.current?.closest("[role=tabpanel][hidden]"))},[s,c]);return(0,a.useEffect)(()=>{u()},[u]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:z,r=(0,T.zX)(t),s=(0,T.Ql)(n);(0,a.useEffect)(()=>{let t=new MutationObserver(r);return e&&t.observe(e,s),()=>t.disconnect()},[e,r,s])}(o,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(i(),u())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1}),(0,a.useEffect)(()=>{i()},[e,i]),(0,a.useEffect)(()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)}),[i]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:l}}();return(0,l.jsx)(W,{metadata:t,wordWrap:n,children:(0,l.jsx)(eu,{})})}let eh=(r=function(e){let{children:t,...n}=e,r=(0,o.Z)(),s=a.Children.toArray(t).some(e=>(0,a.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t;return(0,l.jsx)("string"==typeof s?ed:q,{...n,children:s},String(r))},function(e){return e.live?(0,l.jsx)(B,{scope:I,...e}):(0,l.jsx)(r,{...e})});function ep(e){return(0,l.jsx)(eh,{...e})}}}]);