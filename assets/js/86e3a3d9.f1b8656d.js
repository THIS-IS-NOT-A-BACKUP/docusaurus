"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15158],{24239:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(24246);r(27378);var o=r(40624),a=r(97298),c=r(41428),i=r(7812),s=r(64149),l=r(36712),d=r(52615);let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function m({href:e,children:t}){return(0,n.jsx)(c.Z,{href:e,className:(0,o.Z)("card padding--lg",u.cardContainer),children:t})}function h({href:e,icon:t,title:r,description:a}){return(0,n.jsxs)(m,{href:e,children:[(0,n.jsxs)(d.Z,{as:"h2",className:(0,o.Z)("text--truncate",u.cardTitle),title:r,children:[t," ",r]}),a&&(0,n.jsx)("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:a,children:a})]})}function g({item:e}){var t;let r=(0,a.LM)(e),o=function(){let{selectMessage:e}=(0,i.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(h,{href:r,icon:"\u{1F5C3}\uFE0F",title:e.label,description:null!==(t=e.description)&&void 0!==t?t:o(e.items.length)}):null}function p({item:e}){var t,r;let o=(0,s.Z)(e.href)?"\u{1F4C4}\uFE0F":"\u{1F517}",c=(0,a.xz)(null!==(t=e.docId)&&void 0!==t?t:void 0);return(0,n.jsx)(h,{href:e.href,icon:o,title:e.label,description:null!==(r=e.description)&&void 0!==r?r:null==c?void 0:c.description})}function f({item:e}){switch(e.type){case"link":return(0,n.jsx)(p,{item:e});case"category":return(0,n.jsx)(g,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function y({className:e}){let t=(0,a.jA)();return(0,n.jsx)(x,{items:t.items,className:e})}function x(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(y,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e));let c=(0,a.MN)(t);return(0,n.jsx)("section",{className:(0,o.Z)("row",r),children:c.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(f,{item:e})},t))})}},2187:(e,t,r)=>{function n(...e){return r(92053).jA(...e)}r.d(t,{jA:()=>n}),r(4423)},7812:(e,t,r)=>{r.d(t,{c:()=>s});var n=r(27378),o=r(4423);let a=["zero","one","two","few","many","other"];function c(e){return a.filter(t=>e.includes(t))}let i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function s(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),i}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let o=r.select(t);return n[Math.min(r.pluralForms.indexOf(o),n.length-1)]})(r,t,e)}}},36911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(24246),o=r(71670),a=r(24239),c=r(2187);let i={},s="Category with a doc of category's name",l={id:"tests/category-links/with-category-name-doc/with-category-name-doc",title:"Category with a doc of category's name",description:"You should be able to click on the category and browse this /.md doc",source:"@site/_dogfooding/_docs tests/tests/category-links/with-category-name-doc/with-category-name-doc.mdx",sourceDirName:"tests/category-links/with-category-name-doc",slug:"/tests/category-links/with-category-name-doc/",permalink:"/tests/docs/tests/category-links/with-category-name-doc/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"dabreadman",lastUpdatedAt:1724437056e3,frontMatter:{},sidebar:"sidebar",previous:{title:"Sample doc",permalink:"/tests/docs/tests/category-links/regular-category/sample-doc"},next:{title:"Sample doc",permalink:"/tests/docs/tests/category-links/with-category-name-doc/sample-doc"}},d={},u=[{value:"Intro",id:"intro",level:2},{value:"Category content",id:"category-content",level:2}];function m(e){let t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"category-with-a-doc-of-categorys-name",children:"Category with a doc of category's name"})}),"\n",(0,n.jsxs)(t.p,{children:["You should be able to click on the category and browse this ",(0,n.jsx)(t.code,{children:"<categoryName>/<categoryName>.md"})," doc"]}),"\n",(0,n.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,n.jsx)(t.p,{children:"Some intro text"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"It is also possible to render the card items for that category thanks to MDX:"})}),"\n",(0,n.jsx)(t.h2,{id:"category-content",children:"Category content"}),"\n","\n",(0,n.jsx)(a.Z,{items:(0,c.jA)().items})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}h.displayName="MDXContent(_dogfooding/_docs tests/tests/category-links/with-category-name-doc/with-category-name-doc.mdx)"},71670:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>c});var n=r(27378);let o={},a=n.createContext(o);function c(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);