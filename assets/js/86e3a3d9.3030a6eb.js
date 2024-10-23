"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["59093"],{37760:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>u,frontMatter:()=>i});var r=JSON.parse('{"id":"tests/category-links/with-category-name-doc/with-category-name-doc","title":"Category with a doc of category\'s name","description":"You should be able to click on the category and browse this /.md doc","source":"@site/_dogfooding/_docs tests/tests/category-links/with-category-name-doc/with-category-name-doc.mdx","sourceDirName":"tests/category-links/with-category-name-doc","slug":"/tests/category-links/with-category-name-doc/","permalink":"/tests/docs/tests/category-links/with-category-name-doc/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"dabreadman","lastUpdatedAt":1729707571000,"frontMatter":{},"sidebar":"sidebar","previous":{"title":"Sample doc","permalink":"/tests/docs/tests/category-links/regular-category/sample-doc"},"next":{"title":"Sample doc","permalink":"/tests/docs/tests/category-links/with-category-name-doc/sample-doc"}}'),o=n("24246"),a=n("80980"),c=n("78042"),s=n("34134");let i={},l="Category with a doc of category's name",d={},u=[{value:"Intro",id:"intro",level:2},{value:"Category content",id:"category-content",level:2}];function m(e){let t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"category-with-a-doc-of-categorys-name",children:"Category with a doc of category's name"})}),"\n",(0,o.jsxs)(t.p,{children:["You should be able to click on the category and browse this ",(0,o.jsx)(t.code,{children:"<categoryName>/<categoryName>.md"})," doc"]}),"\n",(0,o.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsx)(t.p,{children:"Some intro text"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"It is also possible to render the card items for that category thanks to MDX:"})}),"\n",(0,o.jsx)(t.h2,{id:"category-content",children:"Category content"}),"\n","\n",(0,o.jsx)(c.Z,{items:(0,s.jA)().items})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}h.displayName="MDXContent(_dogfooding/_docs tests/tests/category-links/with-category-name-doc/with-category-name-doc.mdx)"},78042:function(e,t,n){n.d(t,{Z:()=>x});var r=n("24246");n("27378");var o=n("90496"),a=n("85921"),c=n("35363"),s=n("11660"),i=n("82095"),l=n("77827"),d=n("57922");let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function m(e){let{href:t,children:n}=e;return(0,r.jsx)(c.Z,{href:t,className:(0,o.Z)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:a,description:c}=e;return(0,r.jsxs)(m,{href:t,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,o.Z)("text--truncate",u.cardTitle),title:a,children:[n," ",a]}),c&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:c,children:c})]})}function f(e){let{item:t}=e,n=(0,a.LM)(t),o=function(){let{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(h,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??o(t.items.length)}):null}function g(e){let{item:t}=e,n=(0,i.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",o=(0,a.xz)(t.docId??void 0);return(0,r.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(g,{item:t});case"category":return(0,r.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e,n=(0,a.jA)();return(0,r.jsx)(x,{items:n.items,className:t})}function x(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(y,{...e});let c=(0,a.MN)(t);return(0,r.jsx)("section",{className:(0,o.Z)("row",n),children:c.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(p,{item:e})},t))})}},34134:function(e,t,n){function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n(90158).jA(...t)}n.d(t,{jA:function(){return r}}),n(8156)},11660:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(27378),o=n(8156);let a=["zero","one","two","few","many","other"];function c(e){return a.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function i(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let o=n.select(t);return r[Math.min(n.pluralForms.indexOf(o),r.length-1)]})(n,t,e)}}},80980:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return c}});var r=n(27378);let o={},a=r.createContext(o);function c(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);