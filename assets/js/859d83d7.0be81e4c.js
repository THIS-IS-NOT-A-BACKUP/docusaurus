"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["86645"],{9676:function(e,s,o){o.d(s,{Z:()=>n});let n=o.p+"assets/images/social-card-7b2ed059f27fc8b64f3f20025ebb382f.png"},57583:function(e,s,o){o.d(s,{Z:()=>n});let n=o.p+"assets/images/author-index-4abd3b8b777b2c1b3958768559896262.png"},4841:function(e,s,o){o.d(s,{Z:()=>n});let n=o.p+"assets/images/author-page-4a9753641b116ddfeecc46ed1dcee907.png"},15353:function(e,s,o){o.d(s,{Z:()=>n});let n=o.p+"assets/images/author-socials-93483e664b2d095b137cf10c4769c100.png"},29696:function(e,s,o){o.d(s,{Z:()=>n});let n=o.p+"assets/images/blog-feed-xslt-22194c2a971aba7f3bbf6115d3aa1d49.png"},54324:function(e,s,o){o.d(s,{Z:()=>n});let n=o.p+"assets/images/blog-sidebar-years-1d0be02836d9a3307386c365b9969a37.png"},24506:function(e,s,o){o.d(s,{Z:()=>n});let n=o.p+"assets/images/social-card-7b2ed059f27fc8b64f3f20025ebb382f.png"},14830:function(e,s,o){o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>c});var n=o(23970),t=o(85893),r=o(80980);let l={title:"Docusaurus 3.5",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2024-08-09T00:00:00.000Z")},i=void 0,a={image:o(9676).Z,authorsImageUrls:[void 0]},c=[{value:"Highlights",id:"highlights",level:2},{value:"Blog Social Icons",id:"blog-social-icons",level:3},{value:"Blog Authors Pages",id:"blog-authors-pages",level:3},{value:"Blog Feeds Styling",id:"blog-feeds-styling",level:3},{value:"Blog Sidebar Grouping",id:"blog-sidebar-grouping",level:3},{value:"Blog Consistency Options",id:"blog-consistency-options",level:3},{value:"<code>onInlineAuthors</code>",id:"oninlineauthors",level:4},{value:"<code>onUntruncatedBlogPosts</code>",id:"onuntruncatedblogposts",level:4},{value:"Translations",id:"translations",level:2},{value:"Other changes",id:"other-changes",level:2}];function h(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["We are happy to announce ",(0,t.jsx)(s.strong,{children:"Docusaurus 3.5"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["This release contains many ",(0,t.jsx)(s.strong,{children:"new exciting blog features"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Upgrading should be easy. Our ",(0,t.jsx)(s.a,{href:"/community/release-process",children:"release process"})," respects ",(0,t.jsx)(s.a,{href:"https://semver.org/",children:"Semantic Versioning"}),". Minor versions do not include any breaking changes."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Docusaurus blog post social card",src:o(24506).Z+"",width:"1200",height:"600"})}),"\n","\n",(0,t.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,t.jsx)(s.h3,{id:"blog-social-icons",children:"Blog Social Icons"}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10222",children:"#10222"}),", we added the possibility to associate social links to blog authors, for inline authors declared in front matter or global through the ",(0,t.jsx)(s.code,{children:"authors.yml"})," file."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yml",metastring:'title="blog/authors.yml"',children:"slorber:\n  name: S\xe9bastien Lorber\n  # other author properties...\n  # highlight-start\n  socials:\n    x: sebastienlorber\n    linkedin: sebastienlorber\n    github: slorber\n    newsletter: https://thisweekinreact.com\n  # highlight-end\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Author socials screenshot displaying slorber author with 4 social platform icons",src:o(15353).Z+"",width:"780",height:"180"})}),"\n",(0,t.jsxs)(s.p,{children:["Icons and handle shortcuts are provided for pre-defined platforms ",(0,t.jsx)(s.code,{children:"x"}),", ",(0,t.jsx)(s.code,{children:"linkedin"}),", ",(0,t.jsx)(s.code,{children:"github"})," and ",(0,t.jsx)(s.code,{children:"stackoverflow"}),". It's possible to provide any additional platform entry (like ",(0,t.jsx)(s.code,{children:"newsletter"})," in the example above) with a full URL."]}),"\n",(0,t.jsx)(s.h3,{id:"blog-authors-pages",children:"Blog Authors Pages"}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10216",children:"#10216"}),", we added the possibility for ",(0,t.jsx)(s.a,{href:"/docs/blog#global-authors",children:"global blog authors"})," (declared in ",(0,t.jsx)(s.code,{children:"authors.yml"}),") to have their own dedicated page listing all the blog posts they contributed to."]}),"\n",(0,t.jsxs)(s.p,{children:["This feature is opt-in and mostly relevant for ",(0,t.jsx)(s.strong,{children:"multi-author blogs"}),". You can turn it on for a specific author by setting the ",(0,t.jsx)(s.code,{children:"page: true"})," property:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yml",metastring:'title="blog/authors.yml"',children:"slorber:\n  name: S\xe9bastien Lorber\n  # the description will be displayed on the author's page\n  description: 'A freelance React and React-Native developer...'\n  # highlight-next-line\n  page: true # Turns the feature on\n"})}),"\n",(0,t.jsxs)(s.p,{children:["This creates a ",(0,t.jsx)(s.a,{href:"/blog/authors/slorber",children:"dedicated author page"})," at ",(0,t.jsx)(s.code,{children:"/blog/authors/slorber"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Author page screenshot for slorber global author",src:o(4841).Z+"",width:"883",height:"900"})}),"\n",(0,t.jsxs)(s.p,{children:["An ",(0,t.jsx)(s.a,{href:"/blog/authors",children:"authors index page"})," is also created, listing all the blog authors."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Author index page listing multiple authors",src:o(57583).Z+"",width:"705",height:"645"})}),"\n",(0,t.jsxs)(s.p,{children:["Check the ",(0,t.jsx)(s.a,{href:"/docs/blog#authors-pages",children:"blog authors pages guide"})," for details."]}),"\n",(0,t.jsx)(s.h3,{id:"blog-feeds-styling",children:"Blog Feeds Styling"}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/9252",children:"#9252"}),", we added support for ",(0,t.jsx)(s.a,{href:"https://darekkay.com/blog/rss-styling/",children:"styling your blog feeds"})," by providing custom XSLT ",(0,t.jsx)(s.code,{children:".xls"})," files for the RSS and Atom feeds. This allows browsers to render the feeds in a more visually appealing way, like a regular HTML page, instead of the default XML view."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="website/docusaurus.config.js"',children:"const blogOptions = {\n  feedOptions: {\n    // highlight-start\n    xslt: {\n      rss: 'custom-rss.xsl',\n      atom: 'custom-atom.xsl',\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Writing your own XSLT can be complex, but you can also use ",(0,t.jsx)(s.code,{children:"xslt: true"})," to turn on the built-in style:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="website/docusaurus.config.js"',children:"const blogOptions = {\n  feedOptions: {\n    // highlight-start\n    xslt: true,\n    // highlight-end\n  },\n};\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Screenshot of the Docusaurus blog RSS feed, beautifully styled",src:o(29696).Z+"",width:"730",height:"782"})}),"\n",(0,t.jsx)(s.h3,{id:"blog-sidebar-grouping",children:"Blog Sidebar Grouping"}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10252",children:"#10252"}),", we added support for grouping blog posts by years in the blog sidebar."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Screenshot of the Docusaurus blog, in particular the sidebar items grouped by year",src:o(54324).Z+"",width:"910",height:"452"})}),"\n",(0,t.jsxs)(s.p,{children:["This feature is now turned on by default, but can be disabled with ",(0,t.jsx)(s.code,{children:"themeConfig.blog.sidebar.groupByYear: false"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"blog-consistency-options",children:"Blog Consistency Options"}),"\n",(0,t.jsx)(s.p,{children:"We added new blog options to enforce recommended practices for your blog posts:"}),"\n",(0,t.jsx)(s.h4,{id:"oninlineauthors",children:(0,t.jsx)(s.code,{children:"onInlineAuthors"})}),"\n",(0,t.jsxs)(s.p,{children:["We believe large multi-blogs are easier to manage by using ",(0,t.jsx)(s.a,{href:"/docs/blog#global-authors",children:"global authors"}),", declared in ",(0,t.jsx)(s.code,{children:"authors.yml"}),". This notably permits to avoids duplicating author information across multiple blog posts, and now permits to generate ",(0,t.jsx)(s.a,{href:"/docs/blog#authors-pages",children:"author pages"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10224",children:"#10224"}),", we added the ",(0,t.jsx)(s.code,{children:"onInlineAuthors"})," option. Use ",(0,t.jsx)(s.code,{children:"onInlineAuthors: 'throw'"})," to forbid ",(0,t.jsx)(s.a,{href:"/docs/blog#inline-authors",children:"inline authors"}),", and enforce a consistent usage of ",(0,t.jsx)(s.a,{href:"/docs/blog#global-authors",children:"global authors"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"onuntruncatedblogposts",children:(0,t.jsx)(s.code,{children:"onUntruncatedBlogPosts"})}),"\n",(0,t.jsxs)(s.p,{children:["We believe blog posts are better using ",(0,t.jsx)(s.a,{href:"/docs/blog#blog-list",children:"truncation markers"})," (",(0,t.jsx)(s.code,{children:"\x3c!-- truncate --\x3e"})," or ",(0,t.jsx)(s.code,{children:"{/* truncate */}"}),"). On paginated lists (blog home, tags pages, authors pages), this permits to render a more concise preview of the blog post instead of a full blog post."]}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10375",children:"#10375"}),", we added the ",(0,t.jsx)(s.code,{children:"onUntruncatedBlogPosts"})," option. Use ",(0,t.jsx)(s.code,{children:"onUntruncatedBlogPosts: 'throw'"})," to enforce a consistent usage of ",(0,t.jsx)(s.a,{href:"/docs/blog#blog-list",children:"truncation markers"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"translations",children:"Translations"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\uD83C\uDDEA\uD83C\uDDEA ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10339",children:"#10339"}),": Add Estonian theme translations."]}),"\n",(0,t.jsxs)(s.li,{children:["\uD83C\uDDEE\uD83C\uDDE9 ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10325",children:"#10325"}),": Add Indonesian theme translations."]}),"\n",(0,t.jsxs)(s.li,{children:["\uD83C\uDDEA\uD83C\uDDF8 ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10360",children:"#10360"}),": Improve Spanish theme translations."]}),"\n",(0,t.jsxs)(s.li,{children:["\uD83C\uDDE9\uD83C\uDDEA ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10235",children:"#10235"}),": Improve German theme translations."]}),"\n",(0,t.jsxs)(s.li,{children:["\uD83C\uDDE8\uD83C\uDDF3 ",(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10257",children:"#10257"}),": Improve Traditional Chinese (zh-Hant) theme translations."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsx)(s.p,{children:"Other notable changes include:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10369",children:"#10369"}),": Add support for ",(0,t.jsx)(s.a,{href:"https://pkg.pr.new",children:"pkg.pr.new"})," continuous releases so that you can test any pull-request code in a StackBlitz playground."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10376",children:"#10376"}),": Theme unlisted/draft banners are also shown in dev so that you don't forget to publish your content."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10335",children:"#10335"}),": The Markdown top-level headings ",(0,t.jsx)(s.code,{children:"# title"})," are automatically wrapped in ",(0,t.jsx)(s.code,{children:"<header>"})," for consistency with front matter ",(0,t.jsx)(s.code,{children:"title: Title"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10286",children:"#10286"}),": Allows Docusaurus plugins to self-disable by returning ",(0,t.jsx)(s.code,{children:"null"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10241",children:"#10241"}),": Add support for ",(0,t.jsxs)(s.a,{href:"https://mdxjs.com/packages/mdx/#processoroptions",children:["MDX processor ",(0,t.jsx)(s.code,{children:"recmaPlugins"})," option"]})," to modify the MDX Estree AST."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10324",children:"#10324"}),": The docs autogenerated ",(0,t.jsx)(s.code,{children:"_category_.json"})," accepts a new ",(0,t.jsx)(s.code,{children:"description"})," property that gets displayed on generated index pages."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10368",children:"#10368"}),": The CLI command ",(0,t.jsx)(s.code,{children:"docusaurus --version"})," now actually returns the Docusaurus version."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10240",children:"#10240"}),": Markdown ",(0,t.jsx)(s.code,{children:"mdx-code-block"})," now supports indentation."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10219",children:"#10219"}),": Fix ",(0,t.jsx)(s.code,{children:"<TabItem lazy>"})," support the for ",(0,t.jsx)(s.code,{children:"className"})," prop."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10313",children:"#10313"}),": Blog-related ",(0,t.jsx)(s.code,{children:"@docusaurus/theme-common/internal"})," APIs have been moved to ",(0,t.jsx)(s.code,{children:"@docusaurus/plugin-content-blog/client"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/10316",children:"#10316"}),": Docs-related ",(0,t.jsx)(s.code,{children:"@docusaurus/theme-common/internal"})," APIs have been moved to ",(0,t.jsx)(s.code,{children:"@docusaurus/plugin-content-docs/client"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Check the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"/changelog/3.5.0",children:"3.5.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function d(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},80980:function(e,s,o){o.d(s,{Z:()=>i,a:()=>l});var n=o(67294);let t={},r=n.createContext(t);function l(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:s},e.children)}},23970:function(e){e.exports=JSON.parse('{"permalink":"/blog/releases/3.5","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/3.5/index.mdx","source":"@site/blog/releases/3.5/index.mdx","title":"Docusaurus 3.5","description":"We are happy to announce Docusaurus 3.5.","date":"2024-08-09T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":3.91,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.","socials":{"bluesky":"https://bsky.app/profile/sebastienlorber.com","x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","instagram":"https://www.instagram.com/thisweekinreact","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 3.5","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png","date":"2024-08-09T00:00:00.000Z"},"unlisted":false,"lastUpdatedAt":1738001985000,"lastUpdatedBy":"dabreadman","prevItem":{"title":"Docusaurus 3.6","permalink":"/blog/releases/3.6"},"nextItem":{"title":"Docusaurus 3.4","permalink":"/blog/releases/3.4"}}')}}]);