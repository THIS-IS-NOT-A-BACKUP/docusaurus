"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63067],{65500:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=n(24246),s=n(71670);const i={id:"introduction",sidebar_label:"Introduction",slug:"/docs-introduction"},r="Docs Introduction",d={id:"guides/docs/introduction",title:"Docs Introduction",description:"The docs feature provides users with a way to organize Markdown files in a hierarchical format.",source:"@site/docs/guides/docs/docs-introduction.mdx",sourceDirName:"guides/docs",slug:"/docs-introduction",permalink:"/docs/docs-introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/docs-introduction.mdx",tags:[],version:"current",lastUpdatedBy:"dabreadman",lastUpdatedAt:171994422e4,frontMatter:{id:"introduction",sidebar_label:"Introduction",slug:"/docs-introduction"},sidebar:"docs",previous:{title:"Pages",permalink:"/docs/creating-pages"},next:{title:"Create a doc",permalink:"/docs/create-doc"}},c={},l=[{value:"Docs-only mode",id:"docs-only-mode",level:2}];function a(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"docs-introduction",children:"Docs Introduction"}),"\n",(0,t.jsx)(o.p,{children:"The docs feature provides users with a way to organize Markdown files in a hierarchical format."}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsxs)(o.p,{children:["Check the ",(0,t.jsx)(o.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-docs",children:"Docs Plugin API Reference documentation"})," for an exhaustive list of options."]})}),"\n",(0,t.jsx)(o.p,{children:"Your site's documentation is organized by four levels, from lowest to highest:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"Individual pages."}),"\n",(0,t.jsx)(o.li,{children:"Sidebars."}),"\n",(0,t.jsx)(o.li,{children:"Versions."}),"\n",(0,t.jsx)(o.li,{children:"Plugin instances."}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["The guide will introduce them in that order: starting from ",(0,t.jsx)(o.a,{href:"/docs/create-doc",children:"how individual pages can be configured"}),", to ",(0,t.jsx)(o.a,{href:"/docs/sidebar",children:"how to create a sidebar or multiple ones"}),", to ",(0,t.jsx)(o.a,{href:"/docs/versioning",children:"how to create and manage versions"}),", to ",(0,t.jsx)(o.a,{href:"/docs/docs-multi-instance",children:"how to use multiple docs plugin instances"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"docs-only-mode",children:"Docs-only mode"}),"\n",(0,t.jsx)(o.p,{children:"A freshly initialized Docusaurus site has the following structure:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"example.com/                                -> generated from `src/pages/index.js`\n\nexample.com/docs/intro                      -> generated from `docs/intro.md`\nexample.com/docs/tutorial-basics/...        -> generated from `docs/tutorial-basics/...`\n...\n\nexample.com/blog/2021/08/26/welcome         -> generated from `blog/2021-08-26-welcome/index.md`\nexample.com/blog/2021/08/01/mdx-blog-post   -> generated from `blog/2021-08-01-mdx-blog-post.mdx`\n...\n"})}),"\n",(0,t.jsxs)(o.p,{children:["All docs will be served under the subroute ",(0,t.jsx)(o.code,{children:"docs/"}),". But what if ",(0,t.jsx)(o.strong,{children:"your site only has docs"}),", or you want to prioritize your docs by putting them at the root?"]}),"\n",(0,t.jsx)(o.p,{children:"Assume that you have the following in your configuration:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          /* docs plugin options */\n        },\n        blog: {\n          /* blog plugin options */\n        },\n        // ...\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(o.p,{children:"To enter docs-only mode, change it to like this:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          routeBasePath: '/', // Serve the docs at the site's root\n          /* other docs plugin options */\n        },\n        // highlight-next-line\n        blog: false, // Optional: disable the blog plugin\n        // ...\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Note that you ",(0,t.jsx)(o.strong,{children:"don't necessarily have to give up on using the blog"})," or other plugins; all that ",(0,t.jsx)(o.code,{children:"routeBasePath: '/'"})," does is that instead of serving the docs through ",(0,t.jsx)(o.code,{children:"https://example.com/docs/some-doc"}),", they are now at the site root: ",(0,t.jsx)(o.code,{children:"https://example.com/some-doc"}),". The blog, if enabled, can still be accessed through the ",(0,t.jsx)(o.code,{children:"blog/"})," subroute."]}),"\n",(0,t.jsxs)(o.p,{children:["Don't forget to put some page at the root (",(0,t.jsx)(o.code,{children:"https://example.com/"}),") through adding the front matter:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-md",metastring:'title="docs/intro.md"',children:"---\n# highlight-next-line\nslug: /\n---\n\nThis page will be the home page when users visit https://example.com/.\n"})}),"\n",(0,t.jsx)(o.admonition,{type:"warning",children:(0,t.jsxs)(o.p,{children:["If you added ",(0,t.jsx)(o.code,{children:"slug: /"})," to a doc to make it the homepage, you should delete the existing homepage at ",(0,t.jsx)(o.code,{children:"./src/pages/index.js"}),", or else there will be two files mapping to the same route!"]})}),"\n",(0,t.jsx)(o.p,{children:"Now, the site's structure will be like the following:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"example.com/                       -> generated from `docs/intro.md`\nexample.com/tutorial-basics/...    -> generated from `docs/tutorial-basics/...`\n...\n"})}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:['There\'s also a "blog-only mode" for those who only want to use the blog feature of Docusaurus. You can use the same method detailed above. Follow the setup instructions on ',(0,t.jsx)(o.a,{href:"/docs/blog#blog-only-mode",children:"Blog-only mode"}),"."]})})]})}function h(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},71670:(e,o,n)=>{n.d(o,{Z:()=>d,a:()=>r});var t=n(27378);const s={},i=t.createContext(s);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);