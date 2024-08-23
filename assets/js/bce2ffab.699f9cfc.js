"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99068],{24239:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(24246);n(27378);var r=n(40624),s=n(97298),l=n(41428),o=n(7812),a=n(64149),c=n(36712),u=n(52615);let d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function m({href:e,children:t}){return(0,i.jsx)(l.Z,{href:e,className:(0,r.Z)("card padding--lg",d.cardContainer),children:t})}function f({href:e,icon:t,title:n,description:s}){return(0,i.jsxs)(m,{href:e,children:[(0,i.jsxs)(u.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:n,children:[t," ",n]}),s&&(0,i.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p({item:e}){var t;let n=(0,s.LM)(e),r=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,i.jsx)(f,{href:n,icon:"\u{1F5C3}\uFE0F",title:e.label,description:null!==(t=e.description)&&void 0!==t?t:r(e.items.length)}):null}function h({item:e}){var t,n;let r=(0,a.Z)(e.href)?"\u{1F4C4}\uFE0F":"\u{1F517}",l=(0,s.xz)(null!==(t=e.docId)&&void 0!==t?t:void 0);return(0,i.jsx)(f,{href:e.href,icon:r,title:e.label,description:null!==(n=e.description)&&void 0!==n?n:null==l?void 0:l.description})}function y({item:e}){switch(e.type){case"link":return(0,i.jsx)(h,{item:e});case"category":return(0,i.jsx)(p,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function g({className:e}){let t=(0,s.jA)();return(0,i.jsx)(b,{items:t.items,className:e})}function b(e){let{items:t,className:n}=e;if(!t)return(0,i.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){var i;i=n[t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i})}return e}({},e));let l=(0,s.MN)(t);return(0,i.jsx)("section",{className:(0,r.Z)("row",n),children:l.map((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(y,{item:e})},t))})}},7812:(e,t,n)=>{n.d(t,{c:()=>a});var i=n(27378),r=n(4423);let s=["zero","one","two","few","many","other"];function l(e){return s.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,i.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);let r=n.select(t);return i[Math.min(n.pluralForms.indexOf(r),i.length-1)]})(n,t,e)}}},33047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var i=n(24246),r=n(71670),s=n(24239);let l={unlisted:!0,tags:["visibility","unlisted"]},o="Only Unlisteds - Subcategory index unlisted",a={id:"tests/visibility/only-unlisteds/unlisted-subcategory/index",title:"Only Unlisteds - Subcategory index unlisted",description:"Doc with unlisted front matter",source:"@site/_dogfooding/_docs tests/tests/visibility/only-unlisteds/unlisted-subcategory/index.mdx",sourceDirName:"tests/visibility/only-unlisteds/unlisted-subcategory",slug:"/tests/visibility/only-unlisteds/unlisted-subcategory/",permalink:"/tests/docs/tests/visibility/only-unlisteds/unlisted-subcategory/",draft:!1,unlisted:!0,tags:[{inline:!1,label:"Visibility",permalink:"/tests/docs/tags/visibility"},{inline:!1,label:"Unlisted",permalink:"/tests/docs/tags/unlisted"}],version:"current",lastUpdatedBy:"dabreadman",lastUpdatedAt:1724437056e3,frontMatter:{unlisted:!0,tags:["visibility","unlisted"]},sidebar:"sidebar"},c={},u=[];function d(e){let t={h1:"h1",header:"header",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"only-unlisteds---subcategory-index-unlisted",children:"Only Unlisteds - Subcategory index unlisted"})}),"\n",(0,i.jsx)(t.p,{children:"Doc with unlisted front matter"}),"\n","\n",(0,i.jsx)(s.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}m.displayName="MDXContent(_dogfooding/_docs tests/tests/visibility/only-unlisteds/unlisted-subcategory/index.mdx)"},71670:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var i=n(27378);let r={},s=i.createContext(r);function l(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);