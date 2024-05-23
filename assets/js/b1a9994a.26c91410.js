"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95422],{42174:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/datagit-9cff7b631eaa43b00d9e1373359abfb1.png"},58956:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/jest-59f159eb97ecd87655cf47ec5cc00d47.png"},5457:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/redwood-c3155187911b62428e0cc1e8b662de76.png"},29963:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(24246),t=n(71670);const r={title:"Releasing Docusaurus i18n",authors:["slorber"],tags:["release","i18n"],image:"/img/blog/2021-03-09-releasing-docusaurus-i18n/social-card.png"},o=void 0,a={permalink:"/blog/2021/03/09/releasing-docusaurus-i18n",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2021/03-09-releasing-docusaurus-i18n.mdx",source:"@site/blog/2021/03-09-releasing-docusaurus-i18n.mdx",title:"Releasing Docusaurus i18n",description:"Today, we officially release Docusaurus 2 i18n (internationalization), as part of 2.0.0-alpha.71.",date:"2021-03-09T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"i18n",permalink:"/blog/tags/i-18-n"}],readingTime:3.445,hasTruncateMarker:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer, This Week In React editor",url:"https://thisweekinreact.com",twitter:"sebastienlorber",email:"sebastien@thisweekinreact.com",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Releasing Docusaurus i18n",authors:["slorber"],tags:["release","i18n"],image:"/img/blog/2021-03-09-releasing-docusaurus-i18n/social-card.png"},unlisted:!1,lastUpdatedAt:171648814e4,lastUpdatedBy:"dabreadman",prevItem:{title:"Announcing Docusaurus 2 Beta",permalink:"/blog/2021/05/12/announcing-docusaurus-two-beta"},nextItem:{title:"Docusaurus 2020 Recap",permalink:"/blog/2021/01/19/docusaurus-2020-recap"}},l={authorsImageUrls:[void 0]},d=[{value:"Translate your site",id:"translate-your-site",level:2},{value:"Design decisions",id:"design-decisions",level:2},{value:"Showcase",id:"showcase",level:2},{value:"Jest: upgrading Docusaurus",id:"jest-upgrading-docusaurus",level:3},{value:"Redwood: adopting Docusaurus",id:"redwood-adopting-docusaurus",level:3},{value:"Datagit: using LTR support",id:"datagit-using-ltr-support",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Today, we officially release ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://docusaurus.io/docs/i18n/introduction",children:"Docusaurus 2 i18n"})})," (",(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Internationalization_and_localization",children:"internationalization"}),"), as part of ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-alpha.71",children:"2.0.0-alpha.71"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Docusaurus 2 has now reached ",(0,i.jsx)(s.strong,{children:"full feature parity with Docusaurus 1"}),". \ud83c\udf89 And soon, after a few additional infrastructure updates and a bit more testing, the ",(0,i.jsx)(s.strong,{children:"first Docusaurus 2 beta"})," will be released."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"We went the extra mile"}),", and the new i18n support is ",(0,i.jsx)(s.strong,{children:"even better than in Docusaurus 1"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["In this post, we will present you the ",(0,i.jsx)(s.strong,{children:"translation workflow"}),", explain some ",(0,i.jsx)(s.strong,{children:"design decisions"})," and ",(0,i.jsx)(s.strong,{children:"showcase early adopter sites"})," that just went live: ",(0,i.jsx)(s.a,{href:"https://jestjs.io/",children:"Jest"}),", ",(0,i.jsx)(s.a,{href:"https://learn.redwoodjs.com/",children:"Redwood"}),", and ",(0,i.jsx)(s.a,{href:"https://datagit.ir/",children:"Datagit"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["We also ",(0,i.jsx)(s.strong,{children:"dogfood"})," the i18n support on the ",(0,i.jsx)(s.strong,{children:"Docusaurus 2 site itself"}),", and this post is already available in ",(0,i.jsx)(s.a,{href:"https://docusaurus.io/blog/2021/03/09/releasing-docusaurus-i18n",children:"English"})," and ",(0,i.jsx)(s.a,{href:"https://docusaurus.io/fr/blog/2021/03/09/releasing-docusaurus-i18n",children:"French"}),"!"]}),"\n",(0,i.jsx)(s.h2,{id:"translate-your-site",children:"Translate your site"}),"\n",(0,i.jsxs)(s.p,{children:["You can translate a Docusaurus site in ",(0,i.jsx)(s.strong,{children:"3 simple steps"}),":"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Configure"}),": declare the default locale and alternative locales in ",(0,i.jsx)(s.code,{children:"docusaurus.config.js"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Translate"}),": put the translation files at the ",(0,i.jsx)(s.a,{href:"https://docusaurus.io/docs/next/i18n/introduction#translation-files-location",children:"correct filesystem location"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Deploy"}),": build and deploy your site using a single or multi-domain strategy"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["The i18n support is ",(0,i.jsx)(s.strong,{children:"very flexible"})," and based on the ",(0,i.jsx)(s.strong,{children:"filesystem"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://docusaurus.io/docs/i18n/tutorial",children:"i18n tutorial"})})," is the best way to get started, and we provide help to use ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://docusaurus.io/docs/i18n/git",children:"Git"})})," or ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://docusaurus.io/docs/i18n/crowdin",children:"Crowdin"})}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"design-decisions",children:"Design decisions"}),"\n",(0,i.jsx)(s.p,{children:"The goals of the Docusaurus i18n system are:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Simple"}),": just put the translated files in the ",(0,i.jsx)(s.a,{href:"https://docusaurus.io/docs/next/i18n/introduction#translation-files-location",children:"correct filesystem location"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Flexible translation workflows"}),": use Git (monorepo, forks, or submodules), SaaS software, FTP"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Flexible deployment options"}),": single, multiple domains, or hybrid"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Modular"}),": allow plugin authors to provide i18n support"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Low-overhead runtime"}),": documentation is mostly static and does not require a heavy JS library or polyfills"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Scalable build-times"}),": allow building and deploying localized sites independently"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Localize assets"}),": an image of your site might contain text that should be translated"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"No coupling"}),": not forced to use any SaaS, yet integrations are possible"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsxs)(s.strong,{children:["Easy to use with ",(0,i.jsx)(s.a,{href:"https://crowdin.com/",children:"Crowdin"})]}),": multiple Docusaurus 1 sites use Crowdin, and should be able to migrate to v2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Good SEO defaults"}),": we set useful SEO headers like ",(0,i.jsx)(s.a,{href:"https://developers.google.com/search/docs/advanced/crawling/localized-versions",children:(0,i.jsx)(s.code,{children:"hreflang"})})," for you"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"RTL support"}),": locales reading right-to-left (Arabic, Hebrew, etc.) are supported and easy to implement"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Default translations"}),": classic theme labels are translated for you in ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-translations/locales",children:"many languages"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"showcase",children:"Showcase"}),"\n",(0,i.jsxs)(s.p,{children:["We worked with a few volunteers to ",(0,i.jsx)(s.strong,{children:"dogfood the i18n support"})," before releasing it."]}),"\n",(0,i.jsx)(s.h3,{id:"jest-upgrading-docusaurus",children:"Jest: upgrading Docusaurus"}),"\n",(0,i.jsxs)(s.p,{children:["We have made it possible to ",(0,i.jsx)(s.strong,{children:"upgrade"})," a ",(0,i.jsx)(s.strong,{children:"translated Docusaurus 1 site"})," to Docusaurus 2."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"https://jestjs.io",children:"Jest"})}),", using Docusaurus 1 and Crowdin was one of those sites."]}),"\n",(0,i.jsxs)(s.p,{children:["The Docusaurus 2 migration was successful and the new site is now deployed in production (",(0,i.jsx)(s.a,{href:"https://jestjs.io/blog/2021/03/09/jest-website-upgrade",children:"announcement post"}),")."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://jestjs.io",children:(0,i.jsx)(s.img,{alt:"Jest&#39;s website front page in Japanese",src:n(58956).Z+"",width:"2772",height:"1798"})})}),"\n",(0,i.jsx)(s.h3,{id:"redwood-adopting-docusaurus",children:"Redwood: adopting Docusaurus"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://redwoodjs.com/",children:"Redwood"})," is a React full-stack Jamstack framework."]}),"\n",(0,i.jsxs)(s.p,{children:["They were looking for a solution to create an ",(0,i.jsx)(s.strong,{children:"internationalized learning platform"}),", and became early adopters of Docusaurus 2 i18n for ",(0,i.jsx)(s.a,{href:"https://learn.redwoodjs.com/",children:"learn.redwoodjs.com"}),", using Crowdin to get it translated to French."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://learn.redwoodjs.com/",children:(0,i.jsx)(s.img,{alt:"Redwood&#39;s doc page in French",src:n(5457).Z+"",width:"2772",height:"1798"})})}),"\n",(0,i.jsx)(s.h3,{id:"datagit-using-ltr-support",children:"Datagit: using LTR support"}),"\n",(0,i.jsxs)(s.p,{children:["The i18n system should work with any language, including ",(0,i.jsx)(s.strong,{children:"Right-to-Left languages"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://datagit.ir/",children:"Datagit.ir"})," is using Farsi, and a simple configuration option is able to ",(0,i.jsx)(s.strong,{children:"flip the Docusaurus theme"})," to add the required Right-to-Left support."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://datagit.ir/",children:(0,i.jsx)(s.img,{alt:"Datagit&#39;s website in Persian, a right-to-left language. The sidebar appears on the right of the window and the TOC appears on the left.",src:n(42174).Z+"",width:"2772",height:"1798"})})}),"\n",(0,i.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(s.p,{children:"We sincerely hope you will adopt and like the new i18n support."}),"\n",(0,i.jsx)(s.p,{children:"This feature has not been an easy one, and we would like to thank everyone that got involved in this journey:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/lex111",children:"Alexey"})," for his help to make the i18n support exhaustive and even better than v1"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/SimenB",children:"Simen"})," for volunteering and supporting the Jest migration"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/clairefro",children:"Claire"})," for adopting Docusaurus 2 on the new Redwood platform and providing many feedbacks"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/massoudmaboudi",children:"Massoud"})," for reviewing my work on LTR and adopting it on Datagit"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://crowdin.com/",children:"Crowdin"})," for their support and willingness to improve their translation SaaS"]}),"\n",(0,i.jsx)(s.li,{children:"The Docusaurus community for their patience, and providing many useful feedbacks on GitHub"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Thanks for reading."}),"\n",(0,i.jsxs)(s.p,{children:["\ud83d\ude4f And please, add your brand new i18n sites to our ",(0,i.jsx)(s.a,{href:"https://docusaurus.io/showcase",children:"showcase page"}),". We accept any all polished Docusaurus site here, and we are working on a ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/4238",children:"redesign"})," allowing you to filter sites by features."]})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},71670:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var i=n(27378);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);