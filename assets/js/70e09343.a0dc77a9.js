(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35870],{46768:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(24246);r(27378);var s=r(66222),o=r(36712);function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function c(e,t){switch(e){case"noicon":case"loaded":return null;case"loading":return(0,o.I)({id:"theme.IdealImageMessage.loading",message:"Loading...",description:"When the full-scale image is loading"});case"load":{let{pickedSrc:e}=t,{size:r}=e,n=r?` (${function(e){let t=["B","KB","MB","GB","TB"];if(0===e)return"n/a";let r=Math.floor(Math.log(e)/Math.log(1024));return 0===r?`${e} ${t[r]}`:`${(e/1024**r).toFixed(1)} ${t[r]}`}(r)})`:"";return(0,o.I)({id:"theme.IdealImageMessage.load",message:"Click to load{sizeMessage}",description:"To prompt users to load the full image. sizeMessage is a parenthesized size figure."},{sizeMessage:n})}case"offline":return(0,o.I)({id:"theme.IdealImageMessage.offline",message:"Your browser is offline. Image not loaded",description:"When the user is viewing an offline document"});case"error":{let{loadInfo:e}=t;if(404===e)return(0,o.I)({id:"theme.IdealImageMessage.404error",message:"404. Image not found",description:"When the image is not found"});return(0,o.I)({id:"theme.IdealImageMessage.error",message:"Error. Click to reload",description:"When the image fails to load for unknown error"})}default:throw Error(`Wrong icon: ${e}`)}}function l(e){var t,r;let{img:o}=e,l=function(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,["img"]);return"string"==typeof o||"default"in o?(0,n.jsx)("img",i({src:"string"==typeof o?o:o.default},l)):(0,n.jsx)(s.Z,a(i({},l),{height:null!==(t=o.src.height)&&void 0!==t?t:100,width:null!==(r=o.src.width)&&void 0!==r?r:100,placeholder:{lqip:o.preSrc},src:o.src.src,srcSet:o.src.images.map(e=>a(i({},e),{src:e.path})),getMessage:c}))}},29564:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>y,frontMatter:()=>g,metadata:()=>b,toc:()=>f});var n=r(24246),s=r(71670);r(27378);var o=r(40624),i=r(36712),a=r(41428),c=r(46768),l=r(52615);let d=[{name:"\u{1F4E6} CodeSandbox",image:r(43376),url:"https://docusaurus.new/codesandbox",urlTS:"https://docusaurus.new/codesandbox-ts",description:(0,n.jsx)(i.Z,{id:"playground.codesandbox.description",children:"CodeSandbox is an online code editor and development environment that allows developers to create, share and collaborate on web development projects in a browser-based environment"})},{name:"\u26A1 StackBlitz \u{1F195}",image:r(14046),url:"https://docusaurus.new/stackblitz",urlTS:"https://docusaurus.new/stackblitz-ts",description:(0,n.jsx)(i.Z,{id:"playground.stackblitz.description",values:{webContainersLink:(0,n.jsx)(a.Z,{href:"https://blog.stackblitz.com/posts/introducing-webcontainers/",children:"WebContainers"})},children:"StackBlitz uses a novel {webContainersLink} technology to run Docusaurus directly in your browser."})}];function u({name:e,image:t,url:r,urlTS:s,description:d}){return(0,n.jsx)("div",{className:"col col--6 margin-bottom--lg",children:(0,n.jsxs)("div",{className:(0,o.Z)("card"),children:[(0,n.jsx)("div",{className:(0,o.Z)("card__image"),children:(0,n.jsx)(a.Z,{to:r,children:(0,n.jsx)(c.Z,{img:t,alt:`${e}'s image`})})}),(0,n.jsxs)("div",{className:"card__body",children:[(0,n.jsx)(l.Z,{as:"h3",children:e}),(0,n.jsx)("p",{children:d})]}),(0,n.jsxs)("div",{className:"card__footer",children:[(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("b",{children:(0,n.jsx)(i.Z,{id:"playground.tryItButton",children:"Try it now!"})})}),(0,n.jsxs)("div",{className:"button-group button-group--block",children:[(0,n.jsx)(a.Z,{className:"button button--secondary",to:r,children:"JavaScript"}),(0,n.jsx)(a.Z,{className:"button button--secondary",to:s,children:"TypeScript"})]})]})]})})}function p(){return(0,n.jsx)("div",{className:"row",children:d.map(e=>(0,n.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e),e.name))})}let g={},h="Playground",b={id:"playground",title:"Playground",description:"Playgrounds allow you to run Docusaurus in your browser, without installing anything!",source:"@site/docs/playground.mdx",sourceDirName:".",slug:"/playground",permalink:"/docs/playground",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/playground.mdx",tags:[],version:"current",lastUpdatedBy:"dabreadman",lastUpdatedAt:1724437056e3,frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"TypeScript Support",permalink:"/docs/typescript-support"}},m={},f=[];function x(e){let t={a:"a",admonition:"admonition",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"playground",children:"Playground"})}),"\n",(0,n.jsxs)(t.p,{children:["Playgrounds allow you to run Docusaurus ",(0,n.jsx)(t.strong,{children:"in your browser, without installing anything"}),"!"]}),"\n",(0,n.jsx)(t.p,{children:"They are mostly useful for:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Testing Docusaurus"}),"\n",(0,n.jsx)(t.li,{children:"Reporting bugs"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.a,{href:"https://docusaurus.new",children:"docusaurus.new"})," as an easy-to-remember shortcut."]}),"\n",(0,n.jsx)(t.p,{children:"Choose one of the available options below."}),"\n","\n",(0,n.jsx)(p,{}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["For convenience, we'll remember your choice next time you visit ",(0,n.jsx)(t.a,{href:"https://docusaurus.new",children:"docusaurus.new"}),"."]})})]})}function y(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},43376:(e,t,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/codesandbox.7906bc4.640.png 640w,"+r.p+"assets/ideal-img/codesandbox.36984ff.1030.png 1030w",images:[{path:r.p+"assets/ideal-img/codesandbox.7906bc4.640.png",width:640,height:355},{path:r.p+"assets/ideal-img/codesandbox.36984ff.1030.png",width:1030,height:571}],src:r.p+"assets/ideal-img/codesandbox.7906bc4.640.png",toString:function(){return r.p+"assets/ideal-img/codesandbox.7906bc4.640.png"},placeholder:void 0,width:640,height:355},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7ElEQVR4nB3Ov0rDQACA8ZszxVrvLpfYu0goUWtQwT+IOtRasrg6WQdbhL5BHZwEoaVIaXHpC6irxc3JxUVfw01wcHD7pB1+07d8orKasb1zQLmcUrIxcZwQmEUK85IFrVGBQQcRwtolppIkIQxDlFJsrm+QHx1Tq1bJa3UO9/YRWqtZTNMVXOwozhXI26dcTYbcPo+5ntzTGnQQURQhpaRkLYExSL+IPMnY6p9zNu5QH7WRzV2Ec47QGNJ0mcpahlYBN4MuP/zx9vnB1+83L++vCN/3mVJKzxY8z+Oy2eLp4ZFG44Lh3Yh+t8c/jL9rZrM0xfsAAAAASUVORK5CYII="}},14046:(e,t,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/stackblitz.4ee9b70.640.png 640w,"+r.p+"assets/ideal-img/stackblitz.8ebfdbb.1030.png 1030w",images:[{path:r.p+"assets/ideal-img/stackblitz.4ee9b70.640.png",width:640,height:356},{path:r.p+"assets/ideal-img/stackblitz.8ebfdbb.1030.png",width:1030,height:572}],src:r.p+"assets/ideal-img/stackblitz.4ee9b70.640.png",toString:function(){return r.p+"assets/ideal-img/stackblitz.4ee9b70.640.png"},placeholder:void 0,width:640,height:356},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA2UlEQVR4nB3LvUrDUABA4fsAovbPNs29yb25adKEWlJB8C0rqFOx+BD+ILjbvTiYDiWpUx2zWAIeMcPHmY5I05SLyysm0wxjR+ggbLiej/INvrZ42iKkjvBsgiMDXC+k5/hE4ykvb6+8r1as1x88Pj0jBjJABhP6KmbgWlpdySjJ2G4Ldl876rqmLArEUIV44TnSjFE6pusYonRGvtlQliU/hwOfeY5QJsbYFOlHOCqk3ZNEScZ+/01VVfxCM4jTdp9/J62zpkfHHYZSc3N7x2Jxz3L5wHx+zR8O9nujOJsFvAAAAABJRU5ErkJggg=="}},71670:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a,a:()=>i});var n=r(27378);let s={},o=n.createContext(s);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);