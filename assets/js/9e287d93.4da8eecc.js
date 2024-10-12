"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["47580"],{49479:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>u,frontMatter:()=>o});var r=JSON.parse('{"id":"api/misc/eslint-plugin/no-untranslated-text","title":"no-untranslated-text","description":"Enforce text labels in JSX to be wrapped by translate calls.","source":"@site/docs/api/misc/eslint-plugin/no-untranslated-text.mdx","sourceDirName":"api/misc/eslint-plugin","slug":"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/no-untranslated-text.mdx","tags":[],"version":"current","lastUpdatedBy":"dabreadman","lastUpdatedAt":1728757058000,"frontMatter":{"slug":"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},"sidebar":"api","previous":{"title":"no-html-links","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/no-html-links"},"next":{"title":"prefer-docusaurus-heading","permalink":"/docs/api/misc/@docusaurus/eslint-plugin/prefer-docusaurus-heading"}}'),s=n("24246"),i=n("80980"),l=n("32240");let o={slug:"/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"},a="no-untranslated-text",c={},u=[{value:"Rule Details",id:"details",level:2},{value:"Rule Configuration",id:"configuration",level:2},{value:"When Not To Use It",id:"when-not-to-use",level:2},{value:"Further Reading",id:"further-reading",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"no-untranslated-text",children:"no-untranslated-text"})}),"\n","\n",(0,s.jsx)(t.p,{children:"Enforce text labels in JSX to be wrapped by translate calls."}),"\n",(0,s.jsxs)(t.p,{children:["When the ",(0,s.jsx)(t.a,{href:"/docs/i18n/introduction",children:"i18n feature"})," is used, this rule ensures that all labels appearing on the website are translatable, so no string accidentally slips through untranslated."]}),"\n",(0,s.jsx)(t.h2,{id:"details",children:"Rule Details"}),"\n",(0,s.jsxs)(t.p,{children:["Examples of ",(0,s.jsx)(t.strong,{children:"incorrect"})," code for this rule:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Hello World is not translated\n<Component>Hello World</Component>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Examples of ",(0,s.jsx)(t.strong,{children:"correct"})," code for this rule:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Hello World is translated\n<Component>\n  <Translate>Hello World</Translate>\n</Component>\n"})}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Rule Configuration"}),"\n",(0,s.jsx)(t.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ignoredStrings"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string[]"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"[]"})}),(0,s.jsx)(t.td,{children:"Text labels that only contain strings in this list will not be reported."})]})})]})}),"\n",(0,s.jsx)(t.h2,{id:"when-not-to-use",children:"When Not To Use It"}),"\n",(0,s.jsxs)(t.p,{children:["If you're not using the ",(0,s.jsx)(t.a,{href:"/docs/i18n/introduction",children:"i18n feature"}),", you can disable this rule. You can also disable this rule where the text is not supposed to be translated."]}),"\n",(0,s.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate",children:"https://docusaurus.io/docs/docusaurus-core#translate"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docusaurus.io/docs/docusaurus-core#translate-imperative",children:"https://docusaurus.io/docs/docusaurus-core#translate-imperative"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},32240:function(e,t,n){n.d(t,{Z:()=>d});var r=n("24246"),s=n("27378"),i=n("96700"),l=n("3620");let o="apiTable_e8hp";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var i=[],l=!0,o=!1;try{for(s=s.call(e);!(l=(n=s.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){o=!0,r=e}finally{try{!l&&null!=s.return&&s.return()}finally{if(o)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=s.forwardRef(function(e,t){var n=e.name,o=e.children,a=function(e){for(var t=e;(0,s.isValidElement)(t);)t=c(s.Children.toArray(t.props.children),1)[0];if("string"!=typeof t)throw Error("Could not extract APITable row name from JSX tree:\n".concat(JSON.stringify(e,null,2)));return t}(o),u=n?"".concat(n,"-").concat(a):a,d="#".concat(u),h=(0,l.k6)();return(0,i.Z)().collectAnchor(u),(0,r.jsx)("tr",{id:u,tabIndex:0,ref:h.location.hash===d?t:void 0,onClick:function(e){var t,n="TD"===e.target.tagName.toUpperCase(),r=!!(null===(t=window.getSelection())||void 0===t?void 0:t.toString());n&&!r&&h.push(d)},onKeyDown:function(e){"Enter"===e.key&&h.push(d)},children:o.props.children})});function d(e){var t=e.children,n=e.name;if("table"!==t.type)throw Error("Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row.");var i=c(s.Children.toArray(t.props.children),2),l=i[0],a=i[1],d=(0,s.useRef)(null);(0,s.useEffect)(function(){var e;null===(e=d.current)||void 0===e||e.focus()},[d]);var h=s.Children.map(a.props.children,function(e){return(0,r.jsx)(u,{name:n,ref:d,children:e})});return(0,r.jsxs)("table",{className:o,children:[l,(0,r.jsx)("tbody",{children:h})]})}},80980:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var r=n(27378);let s={},i=r.createContext(s);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);