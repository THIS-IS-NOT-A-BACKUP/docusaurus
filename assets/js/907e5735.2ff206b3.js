"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["35919"],{37403:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>c,DocPropsList:()=>m,assets:()=>u,metadata:()=>s,toc:()=>h,contentTitle:()=>d});var s=JSON.parse('{"id":"tests/sidebar-frontmatter/index","title":"Sidebar front matter","description":"","source":"@site/_dogfooding/_docs tests/tests/sidebar-frontmatter/index.mdx","sourceDirName":"tests/sidebar-frontmatter","slug":"/tests/sidebar-frontmatter/","permalink":"/tests/docs/tests/sidebar-frontmatter/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"dabreadman","lastUpdatedAt":1738865992000,"frontMatter":{"sidebar_label":"Sidebar Front Matter Tests","sidebar_class_name":"dogfood_sidebar_class_name_test"},"sidebar":"sidebar","previous":{"title":"Test links","permalink":"/tests/docs/tests/links/test-markdown-links"},"next":{"title":"Doc With Sidebar Class Name","permalink":"/tests/docs/tests/sidebar-frontmatter/doc-with-sidebar-className"}}'),n=r(85893),a=r(80980),i=r(35363),l=r(34134),o=r(86762);let c={sidebar_label:"Sidebar Front Matter Tests",sidebar_class_name:"dogfood_sidebar_class_name_test"},d="Sidebar front matter",u={},m=({category:e})=>{let t=[e,...e.items];return(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)("code",{children:"type"})}),(0,n.jsx)("th",{children:(0,n.jsx)("code",{children:"label"})}),(0,n.jsx)("th",{children:(0,n.jsx)("code",{children:"customProps"})}),(0,n.jsx)("th",{children:(0,n.jsx)("code",{children:"className"})})]})}),(0,n.jsx)("tbody",{children:t.map((e,t)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.type}),(0,n.jsx)("td",{children:(0,n.jsx)(i.Z,{to:e.href,children:e.label})}),(0,n.jsx)("td",{children:JSON.stringify(e.customProps)}),(0,n.jsx)("td",{children:JSON.stringify(e.className)})]},t))})]})},h=[{value:"Items table",id:"items-table",level:2}];function f(e){let t={h1:"h1",h2:"h2",header:"header",hr:"hr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"sidebar-front-matter",children:"Sidebar front matter"})}),"\n","\n",(0,n.jsx)(o.Z,{}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"items-table",children:"Items table"}),"\n","\n",(0,n.jsx)(m,{category:(0,l.jA)()})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}p.displayName="MDXContent(_dogfooding/_docs tests/tests/sidebar-frontmatter/index.mdx)"},86762:function(e,t,r){r.d(t,{Z:()=>g});var s=r(85893);r(67294);var n=r(90496),a=r(85921),i=r(35363),l=r(11660),o=r(82095),c=r(77827),d=r(57922);let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function m(e){let{className:t,href:r,children:a}=e;return(0,s.jsx)(i.Z,{href:r,className:(0,n.Z)("card padding--lg",u.cardContainer,t),children:a})}function h(e){let{className:t,href:r,icon:a,title:i,description:l}=e;return(0,s.jsxs)(m,{href:r,className:t,children:[(0,s.jsxs)(d.Z,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:i,children:[a," ",i]}),l&&(0,s.jsx)("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:l,children:l})]})}function f(e){let{item:t}=e,r=(0,a.LM)(t),n=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,s.jsx)(h,{className:t.className,href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??n(t.items.length)}):null}function p(e){let{item:t}=e,r=(0,o.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",n=(0,a.xz)(t.docId??void 0);return(0,s.jsx)(h,{className:t.className,href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,s.jsx)(p,{item:t});case"category":return(0,s.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e,r=(0,a.Ok)();return(0,s.jsx)(g,{items:r,className:t})}function b(e){let{item:t}=e;return(0,s.jsx)("article",{className:(0,n.Z)("docCardListItem_hvcp","col col--6"),children:(0,s.jsx)(x,{item:t})})}function g(e){let{items:t,className:r}=e;if(!t)return(0,s.jsx)(j,{...e});let i=(0,a.MN)(t);return(0,s.jsx)("section",{className:(0,n.Z)("row",r),children:i.map((e,t)=>(0,s.jsx)(b,{item:e},t))})}},34134:function(e,t,r){function s(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return r(90158).jA(...t)}r.d(t,{jA:()=>s}),r(8156)},11660:function(e,t,r){r.d(t,{c:()=>o});var s=r(67294),n=r(8156);let a=["zero","one","two","few","many","other"];function i(e){return a.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,n.Z)();return(0,s.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);let n=r.select(t);return s[Math.min(r.pluralForms.indexOf(n),s.length-1)]})(r,t,e)}}},80980:function(e,t,r){r.d(t,{Z:()=>l,a:()=>i});var s=r(67294);let n={},a=s.createContext(n);function i(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);