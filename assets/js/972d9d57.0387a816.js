/*! For license information please see 972d9d57.0387a816.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40937],{28475:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(27378),i=function(){return i=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var i in t=arguments[s])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};function r(e){var t=n.useState(!1),s=t[0],r=t[1],o=n.useState(!1),a=o[0],l=o[1],c=encodeURIComponent(e.id),d="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,u=e.title,h=e.poster||"hqdefault",p="&"+e.params||0,g=e.muted?"&mute=1":"",m=e.announce||"Watch",f=e.webp?"webp":"jpg",x=e.webp?"vi_webp":"vi",j=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+x+"/"+d+"/"+h+"."+f:"https://i.ytimg.com/"+x+"/"+c+"/"+h+"."+f),y=e.noCookie;y=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var b=e.playlist?y+"/embed/videoseries?autoplay=1"+g+"&list="+c+p:y+"/embed/"+c+"?autoplay=1&state=1"+g+p,w=e.activatedClass||"lyt-activated",v=e.adNetwork||!1,k=e.aspectHeight||9,D=e.aspectWidth||16,I=e.iframeClass||"",S=e.playerClass||"lty-playbtn",C=e.wrapperClass||"yt-lite",E=e.onIframeAdded||function(){},M=e.rel?"prefetch":"preload";return n.useEffect((function(){a&&E()}),[a]),n.createElement(n.Fragment,null,n.createElement("link",{rel:M,href:j,as:"image"}),n.createElement(n.Fragment,null,s&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:y}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),v&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){s||r(!0)},onClick:function(){a||l(!0)},className:C+" "+(a?w:""),"data-title":u,style:i({backgroundImage:"url("+j+")"},{"--aspect-ratio":k/D*100+"%"})},n.createElement("button",{type:"button",className:S,"aria-label":m+" "+u}),a&&n.createElement("iframe",{className:I,title:u,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:b})))}},51374:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/slash-introducing-411a16dd05086935b8e9ddae38ae9b45.svg"},21717:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=s(24246),i=s(71670),r=s(28475);const o={description:"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",slug:"/"},a="Introduction",l={id:"introduction",title:"Introduction",description:"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/introduction.mdx",tags:[],version:"current",lastUpdatedBy:"dabreadman",lastUpdatedAt:1720030602e3,frontMatter:{description:"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.",slug:"/"},sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},c={},d=[{value:"Fast Track \u23f1\ufe0f",id:"fast-track",level:2},{value:"Docusaurus: Documentation Made Easy",id:"docusaurus-documentation-made-easy",level:2},{value:"Migrating from v1",id:"migrating-from-v1",level:2},{value:"Features",id:"features",level:2},{value:"Design principles",id:"design-principles",level:2},{value:"Comparison with other tools",id:"comparison-with-other-tools",level:2},{value:"Gatsby",id:"gatsby",level:3},{value:"Next.js",id:"nextjs",level:3},{value:"VitePress",id:"vitepress",level:3},{value:"MkDocs",id:"mkdocs",level:3},{value:"Docsify",id:"docsify",level:3},{value:"GitBook",id:"gitbook",level:3},{value:"Jekyll",id:"jekyll",level:3},{value:"Staying informed",id:"staying-informed",level:2},{value:"Something missing?",id:"something-missing",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["\u26a1\ufe0f Docusaurus will help you ship a ",(0,n.jsx)(t.strong,{children:"beautiful documentation site in no time"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["\ud83d\udcb8 Building a custom tech stack is expensive. Instead, ",(0,n.jsx)(t.strong,{children:"focus on your content"})," and just write Markdown files."]}),"\n",(0,n.jsxs)(t.p,{children:["\ud83d\udca5 Ready for more? Use ",(0,n.jsx)(t.strong,{children:"advanced features"})," like versioning, i18n, search and theme customizations."]}),"\n",(0,n.jsxs)(t.p,{children:["\ud83d\udc85 Check the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/showcase?tags=favorite",children:"best Docusaurus sites"})})," for inspiration and read some ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://twitter.com/sebastienlorber/timelines/1392048416872706049",children:"testimonials"})}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["\ud83e\uddd0 Docusaurus is a ",(0,n.jsx)(t.strong,{children:"static-site generator"}),". It builds a ",(0,n.jsx)(t.strong,{children:"single-page application"})," with fast client-side navigation, leveraging the full power of ",(0,n.jsx)(t.strong,{children:"React"})," to make your site interactive. It provides out-of-the-box ",(0,n.jsx)(t.strong,{children:"documentation features"})," but can be used to create ",(0,n.jsx)(t.strong,{children:"any kind of site"})," (personal website, product, blog, marketing landing pages, etc)."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(51374).Z+"",width:"760",height:"160"})}),"\n",(0,n.jsx)(t.h2,{id:"fast-track",children:"Fast Track \u23f1\ufe0f"}),"\n",(0,n.jsxs)(t.p,{children:["Understand Docusaurus in ",(0,n.jsx)(t.strong,{children:"5 minutes"})," by playing!"]}),"\n",(0,n.jsxs)(t.p,{children:["Create a new Docusaurus site and follow the ",(0,n.jsx)(t.strong,{children:"very short"})," embedded tutorial."]}),"\n",(0,n.jsxs)(t.p,{children:["Install ",(0,n.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"Node.js"})," and create a new Docusaurus site:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx create-docusaurus@latest my-website classic\n"})}),"\n",(0,n.jsx)(t.p,{children:"Start the site:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd my-website\nnpx docusaurus start\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Open ",(0,n.jsx)(t.a,{href:"http://localhost:3000",children:(0,n.jsx)(t.code,{children:"http://localhost:3000"})})," and follow the tutorial."]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://docusaurus.new",children:"docusaurus.new"})})," to test Docusaurus immediately in your browser!"]}),(0,n.jsxs)(t.p,{children:["Or read the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://tutorial.docusaurus.io",children:"5-minute tutorial"})})," online."]})]}),"\n",(0,n.jsx)(t.h2,{id:"docusaurus-documentation-made-easy",children:"Docusaurus: Documentation Made Easy"}),"\n",(0,n.jsxs)(t.p,{children:["In this presentation at ",(0,n.jsx)(t.a,{href:"https://www.algolia.com/",children:"Algolia Community Event"}),", ",(0,n.jsx)(t.a,{href:"https://opensource.facebook.com/",children:"Meta Open Source team"})," shared a brief walk-through of Docusaurus. They covered how to get started with the project, enable plugins, and set up functionalities like documentation and blogging."]}),"\n","\n","\n",(0,n.jsx)("div",{className:"video-container",children:(0,n.jsx)(r.Z,{id:"Yhyx7otSksg",params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:"Docusaurus: Documentation Made Easy",poster:"maxresdefault",webp:!0})}),"\n",(0,n.jsx)(t.h2,{id:"migrating-from-v1",children:"Migrating from v1"}),"\n",(0,n.jsxs)(t.p,{children:["Docusaurus v2+ has been a total rewrite from Docusaurus v1, taking advantage of a completely modernized toolchain. After ",(0,n.jsx)(t.a,{href:"https://docusaurus.io/blog/2022/08/01/announcing-docusaurus-2.0",children:"v2's official release"}),", we highly encourage you to ",(0,n.jsx)(t.strong,{children:"use Docusaurus v2+ over Docusaurus v1"}),", as Docusaurus v1 has been deprecated."]}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.a,{href:"/showcase",children:"lot of users"})," are already using Docusaurus v2+ (",(0,n.jsx)(t.a,{href:"https://www.npmtrends.com/docusaurus-vs-@docusaurus/core",children:"trends"}),")."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Use Docusaurus v2+ if:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\u2705"," You want a modern Jamstack documentation site"]}),"\n",(0,n.jsxs)(t.li,{children:["\u2705"," You want a single-page application (SPA) with client-side routing"]}),"\n",(0,n.jsxs)(t.li,{children:["\u2705"," You want the full power of React and MDX"]}),"\n",(0,n.jsxs)(t.li,{children:["\u2705"," You do not need support for IE11"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Use ",(0,n.jsx)(t.a,{href:"https://v1.docusaurus.io/",children:"Docusaurus v1"})," if:"]})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\u274c"," You don't want a single-page application (SPA)"]}),"\n",(0,n.jsxs)(t.li,{children:["\u274c"," You need support for IE11 (...do you? IE ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/lifecycle/products/internet-explorer-11",children:"has already reached end-of-life"})," and is no longer officially supported)"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For existing v1 users that are seeking to upgrade to v2+, you can follow our ",(0,n.jsx)(t.a,{href:"/docs/migration",children:"migration guides"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,n.jsx)(t.p,{children:"Docusaurus is built with high attention to the developer and contributor experience."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\u269b\ufe0f ",(0,n.jsx)(t.strong,{children:"Built with \ud83d\udc9a and React"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Extend and customize with React"}),"\n",(0,n.jsx)(t.li,{children:"Gain full control of your site's browsing experience by providing your own React components"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\ud83d\udd0c ",(0,n.jsx)(t.strong,{children:"Pluggable"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Bootstrap your site with a basic template, then use advanced features and plugins"}),"\n",(0,n.jsx)(t.li,{children:"Open source your plugins to share with the community"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\u2702\ufe0f ",(0,n.jsx)(t.strong,{children:"Developer experience"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Start writing your docs right now"}),"\n",(0,n.jsx)(t.li,{children:"Universal configuration entry point to make it more maintainable by contributors"}),"\n",(0,n.jsx)(t.li,{children:"Hot reloading with lightning-fast incremental build on changes"}),"\n",(0,n.jsx)(t.li,{children:"Route-based code and data splitting"}),"\n",(0,n.jsx)(t.li,{children:"Publish to GitHub Pages, Netlify, Vercel, and other deployment services with ease"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Our shared goal\u2014to help your users quickly find what they need and understand your products better. We share our best practices to help you build your docs site right and well."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\ud83c\udfaf ",(0,n.jsx)(t.strong,{children:"SEO friendly"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"HTML files are statically generated for every possible path."}),"\n",(0,n.jsx)(t.li,{children:"Page-specific SEO to help your users land on your official docs directly relating their problems at hand."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\ud83d\udcdd ",(0,n.jsx)(t.strong,{children:"Powered by MDX"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Write interactive components via JSX and React embedded in Markdown."}),"\n",(0,n.jsx)(t.li,{children:"Share your code in live editors to get your users to love your products on the spot."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\ud83d\udd0d ",(0,n.jsx)(t.strong,{children:"Search"}),": Your full site is searchable."]}),"\n",(0,n.jsxs)(t.li,{children:["\ud83d\udcbe ",(0,n.jsx)(t.strong,{children:"Document Versioning"}),": Helps you keep documentation in sync with project releases."]}),"\n",(0,n.jsxs)(t.li,{children:["\ud83c\udf0d ",(0,n.jsx)(t.strong,{children:"Internationalization (i18n)"}),": Translate your site in multiple locales."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Docusaurus v2+ is born to be compassionately accessible to all your users, and lightning-fast."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\u26a1\ufe0f ",(0,n.jsx)(t.strong,{children:"Lightning-fast"}),". Docusaurus v2+ follows the ",(0,n.jsx)(t.a,{href:"https://developers.google.com/web/fundamentals/performance/prpl-pattern/",children:"PRPL Pattern"})," that makes sure your content loads blazing fast."]}),"\n",(0,n.jsxs)(t.li,{children:["\ud83e\udd96 ",(0,n.jsx)(t.strong,{children:"Accessible"}),". Attention to accessibility, making your site equally accessible to all users."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"design-principles",children:"Design principles"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Little to learn"}),". Docusaurus should be easy to learn and use as the API is quite small. Most things will still be achievable by users, even if it takes them more code and more time to write. Not having abstractions is better than having the wrong abstractions, and we don't want users to have to hack around the wrong abstractions. Mandatory talk\u2014",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=4anAwXYqLG8",children:"Minimal API Surface Area"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Intuitive"}),". Users will not feel overwhelmed when looking at the project directory of a Docusaurus project or adding new features. It should look intuitive and easy to build on top of, using approaches they are familiar with."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Layered architecture"}),". The separations of concerns between each layer of our stack (content/theming/styling) should be clear\u2014well-abstracted and modular."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Sensible defaults"}),". Common and popular performance optimizations and configurations will be done for users but they are given the option to override them."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"No vendor lock-in"}),". Users are not required to use the default plugins or CSS, although they are highly encouraged to. Certain core infrastructures like React Loadable and React Router cannot be swapped because we do default performance optimization on them, but not higher-level ones. Choice of Markdown engines, CSS frameworks, CSS methodology, and other architectures will be entirely up to users."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We believe that, as developers, knowing how a library works helps us become better at using it. Hence we're dedicating effort to explaining the architecture and various components of Docusaurus with the hope that users reading it will gain a deeper understanding of the tool and be even more proficient in using it."}),"\n",(0,n.jsx)(t.h2,{id:"comparison-with-other-tools",children:"Comparison with other tools"}),"\n",(0,n.jsx)(t.p,{children:"Across all static site generators, Docusaurus has a unique focus on documentation sites and has many out-of-the-box features."}),"\n",(0,n.jsx)(t.p,{children:"We've also studied other main static site generators and would like to share our insights on the comparison, hopefully helping you navigate through the prismatic choices out there."}),"\n",(0,n.jsx)(t.h3,{id:"gatsby",children:"Gatsby"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.gatsbyjs.com/",children:"Gatsby"})," is packed with a lot of features, has a rich ecosystem of plugins, and is capable of doing everything that Docusaurus does. Naturally, that comes at a cost of a higher learning curve. Gatsby does many things well and is suitable for building many types of websites. On the other hand, Docusaurus tries to do one thing super well - be the best tool for writing and publishing content."]}),"\n",(0,n.jsx)(t.p,{children:"GraphQL is also pretty core to Gatsby, although you don't necessarily need GraphQL to build a Gatsby site. In most cases when building static websites, you won't need the flexibility that GraphQL provides."}),"\n",(0,n.jsx)(t.p,{children:"Many aspects of Docusaurus v2+ were inspired by the best things about Gatsby and it's a great alternative."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/pedronauck/docz",children:"Docz"})," is a Gatsby theme to build documentation websites. It is currently less featured than Docusaurus."]}),"\n",(0,n.jsx)(t.h3,{id:"nextjs",children:"Next.js"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://nextjs.org/",children:"Next.js"})," is another very popular hybrid React framework. It can help you build a good documentation website, but it is not opinionated toward the documentation use-case, and it will require a lot more work to implement what Docusaurus provides out-of-the-box."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/shuding/nextra",children:"Nextra"})," is an opinionated static site generator built on top of Next.js. It is currently less featured than Docusaurus."]}),"\n",(0,n.jsx)(t.h3,{id:"vitepress",children:"VitePress"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://vitepress.dev/",children:"VitePress"})," has many similarities with Docusaurus - both focus heavily on content-centric websites and provides tailored documentation features out of the box. However, VitePress is powered by Vue, while Docusaurus is powered by React. If you want a Vue-based solution, VitePress would be a decent choice."]}),"\n",(0,n.jsx)(t.h3,{id:"mkdocs",children:"MkDocs"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.mkdocs.org/",children:"MkDocs"})," is a popular Python static site generator with value propositions similar to Docusaurus."]}),"\n",(0,n.jsx)(t.p,{children:"It is a good option if you don't need a single-page application and don't plan to leverage React."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://squidfunk.github.io/mkdocs-material/",children:"Material for MkDocs"})," is a beautiful theme."]}),"\n",(0,n.jsx)(t.h3,{id:"docsify",children:"Docsify"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docsify.js.org/",children:"Docsify"})," makes it easy to create a documentation website, but is not a static-site generator and is not SEO friendly."]}),"\n",(0,n.jsx)(t.h3,{id:"gitbook",children:"GitBook"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.gitbook.com/",children:"GitBook"})," has a very clean design and has been used by many open source projects. With its focus shifting towards a commercial product rather than an open-source tool, many of its requirements no longer fit the needs of open source projects' documentation sites. As a result, many have turned to other products. You may read about Redux's switch to Docusaurus ",(0,n.jsx)(t.a,{href:"https://github.com/reduxjs/redux/issues/3161",children:"here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Currently, GitBook is only free for open-source and non-profit teams. Docusaurus is free for everyone."}),"\n",(0,n.jsx)(t.h3,{id:"jekyll",children:"Jekyll"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/jekyll/jekyll",children:"Jekyll"})," is one of the most mature static site generators around and has been a great tool to use \u2014 in fact, before Docusaurus, most of Facebook's Open Source websites are/were built on Jekyll! It is extremely simple to get started. We want to bring a similar developer experience as building a static site with Jekyll."]}),"\n",(0,n.jsxs)(t.p,{children:["In comparison with statically generated HTML and interactivity added using ",(0,n.jsx)(t.code,{children:"<script />"})," tags, Docusaurus sites are React apps. Using modern JavaScript ecosystem tooling, we hope to set new standards on doc sites' performance, asset building pipeline and optimizations, and ease to set up."]}),"\n",(0,n.jsx)(t.h2,{id:"staying-informed",children:"Staying informed"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/facebook/docusaurus",children:"GitHub"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://twitter.com/docusaurus",children:"Twitter"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/blog",children:"Blog"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://discord.gg/docusaurus",children:"Discord"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"something-missing",children:"Something missing?"}),"\n",(0,n.jsxs)(t.p,{children:["If you find issues with the documentation or have suggestions on how to improve the documentation or the project in general, please ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/docusaurus",children:"file an issue"})," for us, or send a tweet mentioning the ",(0,n.jsx)(t.a,{href:"https://twitter.com/docusaurus",children:"@docusaurus"})," Twitter account."]}),"\n",(0,n.jsxs)(t.p,{children:["For new feature requests, you can create a post on our ",(0,n.jsx)(t.a,{href:"/feature-requests",children:"feature requests board (Canny)"}),", which is a handy tool for road-mapping and allows for sorting by upvotes, which gives the core team a better indicator of what features are in high demand, as compared to GitHub issues which are harder to triage. Refrain from making a Pull Request for new features (especially large ones) as someone might already be working on it or will be part of our roadmap. Talk to us first!"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},71670:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var n=s(27378);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);