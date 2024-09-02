"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58679],{37082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>j,default:()=>f,frontMatter:()=>x,metadata:()=>s,toc:()=>b});let s=JSON.parse('{"id":"tests/toc-partials/index","title":"TOC partial test","description":"This page tests that MDX-imported content appears correctly in the table-of-contents","source":"@site/_dogfooding/_docs tests/tests/toc-partials/index.mdx","sourceDirName":"tests/toc-partials","slug":"/tests/toc-partials/","permalink":"/tests/docs/tests/toc-partials/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"dabreadman","lastUpdatedAt":1725301117000,"frontMatter":{},"sidebar":"sidebar","previous":{"title":"Test links","permalink":"/tests/docs/tests/links/test-markdown-links"},"next":{"title":"Visibility","permalink":"/tests/docs/tests/visibility/"}}');var a=n(62540),i=n(43023);let l=[{value:"Partial",id:"partial",level:2},{value:"Partial Sub Heading 1",id:"partial-sub-heading-1",level:3},{value:"Partial Sub Sub Heading 1",id:"partial-sub-sub-heading-1",level:4},{value:"Partial Sub Heading 2",id:"partial-sub-heading-2",level:3},{value:"Partial Sub Sub Heading 2",id:"partial-sub-sub-heading-2",level:4}];function r(e){let t={h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"partial",children:"Partial"}),"\n",(0,a.jsx)(t.p,{children:"Partial intro"}),"\n",(0,a.jsx)(t.h3,{id:"partial-sub-heading-1",children:"Partial Sub Heading 1"}),"\n",(0,a.jsx)(t.p,{children:"Partial Sub Heading 1 content"}),"\n",(0,a.jsx)(t.h4,{id:"partial-sub-sub-heading-1",children:"Partial Sub Sub Heading 1"}),"\n",(0,a.jsx)(t.p,{children:"Partial Sub Sub Heading 1 content"}),"\n",(0,a.jsx)(t.h3,{id:"partial-sub-heading-2",children:"Partial Sub Heading 2"}),"\n",(0,a.jsx)(t.p,{children:"Partial Sub Heading 2 content"}),"\n",(0,a.jsx)(t.h4,{id:"partial-sub-sub-heading-2",children:"Partial Sub Sub Heading 2"}),"\n",(0,a.jsx)(t.p,{children:"Partial Sub Sub Heading 2 content"})]})}function d(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}function o(e){let t={h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"2nd-level-partial",children:"2nd level partial"}),"\n",(0,a.jsx)(t.p,{children:"I'm 2 levels deep."})]})}function c(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}d.displayName="MDXContent(_dogfooding/_docs tests/tests/toc-partials/_partial.mdx)",c.displayName="MDXContent(_dogfooding/_docs tests/tests/toc-partials/_second-level-partial.mdx)";let p=[{value:"1st level partial",id:"1st-level-partial",level:2},{value:"2nd level partial",id:"2nd-level-partial",level:3}];function h(e){let t={h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"1st-level-partial",children:"1st level partial"}),"\n",(0,a.jsx)(t.p,{children:"I'm 1 level deep."}),"\n",(0,a.jsx)(c,{})]})}function u(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}u.displayName="MDXContent(_dogfooding/_docs tests/tests/toc-partials/_first-level-partial.mdx)";let x={},j="TOC partial test",g={},b=[...l,...l,...p,...p];function m(e){let t={a:"a",h1:"h1",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"toc-partial-test",children:"TOC partial test"})}),"\n",(0,a.jsx)(t.p,{children:"This page tests that MDX-imported content appears correctly in the table-of-contents"}),"\n",(0,a.jsx)(t.p,{children:"See also:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/3915",children:"https://github.com/facebook/docusaurus/issues/3915"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/9684",children:"https://github.com/facebook/docusaurus/pull/9684"})}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"The table of contents should include headings of this partial"}),":"]}),"\n",(0,a.jsx)(d,{}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"We can import the same partial using a different name and it still works"}),":"]}),"\n","\n",(0,a.jsx)(d,{}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"We can import a partial and not use it, the TOC remains unaffected"}),":"]}),"\n","\n",(0,a.jsx)(t.hr,{}),"\n","\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"It also works for partials importing other partials"})}),"\n",(0,a.jsx)(u,{}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"And we can even use the same partial twice!"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"(although it's useless and not particularly recommended because headings will have the same ids)"})}),"\n",(0,a.jsx)(u,{})]})}function f(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}f.displayName="MDXContent(_dogfooding/_docs tests/tests/toc-partials/index.mdx)"},43023:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(63696);let a={},i=s.createContext(a);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);