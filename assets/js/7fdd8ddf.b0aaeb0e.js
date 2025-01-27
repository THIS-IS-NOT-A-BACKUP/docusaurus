"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["84429"],{3939:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>d,metadata:()=>s,assets:()=>u,toc:()=>g,contentTitle:()=>h});var s=JSON.parse('{"type":"mdx","permalink":"/tests/pages/code-block-tests","source":"@site/_dogfooding/_pages tests/code-block-tests.mdx","title":"Code block tests","description":"This test page is quite outdated: MDX v2 lowercase tags are not substituted anymore in the same way as they were in v1.","frontMatter":{},"lastUpdatedBy":"dabreadman","lastUpdatedAt":1738001985000,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_pages tests/code-block-tests.mdx","unlisted":false}'),l=n(85893),r=n(80980),o=n(95998),i=n(14522),c=n(15398),a=n(58636);let d={},h="Code block tests",u={},g=[{value:"Code block prism language tests",id:"code-block-prism-language-tests",level:2},{value:"<code>pre</code>",id:"pre",level:2},{value:"<code>pre &gt; string</code>",id:"pre--string",level:3},{value:"<code>pre &gt; string[]</code>",id:"pre--string-1",level:3},{value:"<code>pre &gt; element</code>",id:"pre--element",level:3},{value:"<code>pre &gt; element[]</code>",id:"pre--element-1",level:3},{value:"<code>pre &gt; code &gt; element</code>",id:"pre--code--element",level:3},{value:"<code>code</code>",id:"code",level:2},{value:"<code>code &gt; string</code>",id:"code--string",level:3},{value:"<code>code &gt; string[]</code>",id:"code--string-1",level:3},{value:"<code>code &gt; element</code>",id:"code--element",level:3},{value:"<code>code &gt; element[]</code>",id:"code--element-1",level:3},{value:"<code>CodeBlock</code>",id:"codeblock",level:2},{value:"<code>CodeBlock &gt; string</code>",id:"codeblock--string",level:3},{value:"<code>CodeBlock &gt; string[]</code>",id:"codeblock--string-1",level:3},{value:"<code>CodeBlock &gt; element</code>",id:"codeblock--element",level:3},{value:"<code>CodeBlock &gt; element[]</code>",id:"codeblock--element-1",level:3},{value:"Code blocks with line numbering tests",id:"code-blocks-with-line-numbering-tests",level:2},{value:"Code block wrapping tests",id:"code-block-wrapping-tests",level:2},{value:"Magic comments tests",id:"magic-comments-tests",level:2},{value:"HTML - script + style highlighting",id:"html---script--style-highlighting",level:2},{value:"Empty code blocks edge cases",id:"empty-code-blocks-edge-cases",level:2}];function m(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"code-block-tests",children:"Code block tests"})}),"\n",(0,l.jsx)(t.admonition,{title:"legacy test page - MDX v1",type:"danger",children:(0,l.jsx)(t.p,{children:"This test page is quite outdated: MDX v2 lowercase tags are not substituted anymore in the same way as they were in v1."})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n'})}),"\n",(0,l.jsx)(t.p,{children:"See:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/1584",children:"https://github.com/facebook/docusaurus/pull/1584"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/3749",children:"https://github.com/facebook/docusaurus/pull/3749"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/6177",children:"https://github.com/facebook/docusaurus/pull/6177"})}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"code-block-prism-language-tests",children:"Code block prism language tests"}),"\n",(0,l.jsxs)(t.p,{children:["Code block with/without the good prism language case(lower or upper) in ",(0,l.jsx)(t.code,{children:"additionalLanguages[]"})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",metastring:'title="php"',children:'<?php\n$x=15;\n$y=30;\n$z=$x+$y;\necho "Sum: ",$z;\n?>\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-PHP",metastring:'title="PHP"',children:'<?php\n$x=15;\n$y=30;\n$z=$x+$y;\necho "Sum: ",$z;\n?>\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-pHp",metastring:'title="pHp"',children:'<?php\n$x=15;\n$y=30;\n$z=$x+$y;\necho "Sum: ",$z;\n?>\n'})}),"\n",(0,l.jsx)(t.p,{children:"See:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/pull/9183",children:"https://github.com/facebook/docusaurus/pull/9183"})}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"pre",children:(0,l.jsx)(t.code,{children:"pre"})}),"\n",(0,l.jsx)(t.h3,{id:"pre--string",children:(0,l.jsx)(t.code,{children:"pre > string"})}),"\n",(0,l.jsxs)(t.p,{children:["Multi-line text inside ",(0,l.jsx)(t.code,{children:"pre"})," will turn into one-liner, but it's okay (",(0,l.jsx)(t.a,{href:"https://github.com/mdx-js/mdx/issues/1095",children:"https://github.com/mdx-js/mdx/issues/1095"}),")"]}),"\n",(0,l.jsx)("pre",{children:"1 2 3"}),"\n","\n",(0,l.jsx)("pre",{children:(0,l.jsx)(t.p,{children:"1\n2\n3"})}),"\n",(0,l.jsx)(t.h3,{id:"pre--string-1",children:(0,l.jsx)(t.code,{children:"pre > string[]"})}),"\n",(0,l.jsx)("pre",{children:(0,l.jsxs)(t.p,{children:["1","\n","2","\n","3","\n"]})}),"\n",(0,l.jsx)(t.h3,{id:"pre--element",children:(0,l.jsx)(t.code,{children:"pre > element"})}),"\n",(0,l.jsx)("pre",{children:(0,l.jsx)(i.Z,{children:"Lol bro"})}),"\n",(0,l.jsx)(t.h3,{id:"pre--element-1",children:(0,l.jsx)(t.code,{children:"pre > element[]"})}),"\n",(0,l.jsxs)("pre",{children:[(0,l.jsx)("a",{href:"/",children:"Front page"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)("strong",{children:"Input: "}),'a = "abcd", b = "cdabcdab"',"\n","\n",(0,l.jsx)("strong",{children:"Output: "}),"3","\n","\n",(0,l.jsx)("strong",{children:"Explanation: "}),'a after three repetitions become "ab\n',(0,l.jsx)("strong",{children:"cdabcdab"}),'cd", at which time b is a substring.',"\n"]})]}),"\n",(0,l.jsx)(t.h3,{id:"pre--code--element",children:(0,l.jsx)(t.code,{children:"pre > code > element"})}),"\n",(0,l.jsx)("pre",{children:(0,l.jsx)("code",{children:(0,l.jsx)("b",{children:"Hey bro"})})}),"\n",(0,l.jsx)(t.h2,{id:"code",children:(0,l.jsx)(t.code,{children:"code"})}),"\n",(0,l.jsx)(t.h3,{id:"code--string",children:(0,l.jsx)(t.code,{children:"code > string"})}),"\n",(0,l.jsx)("code",{children:"1 2 3"}),"\n",(0,l.jsx)("code",{children:`link:
title: front page
path: /docs/`}),"\n",(0,l.jsx)(t.h3,{id:"code--string-1",children:(0,l.jsx)(t.code,{children:"code > string[]"})}),"\n",(0,l.jsx)("code",{children:(0,l.jsxs)(t.p,{children:["link:"," \n","\n","  ","title: front page","\n","\n","  ","path: /docs/","\n"]})}),"\n",(0,l.jsx)(t.h3,{id:"code--element",children:(0,l.jsx)(t.code,{children:"code > element"})}),"\n",(0,l.jsx)("code",{children:(0,l.jsx)(i.Z,{children:"Lol bro"})}),"\n",(0,l.jsx)(t.h3,{id:"code--element-1",children:(0,l.jsx)(t.code,{children:"code > element[]"})}),"\n",(0,l.jsxs)("code",{children:[(0,l.jsx)("a",{href:"/",children:"Front page"}),(0,l.jsx)("br",{}),(0,l.jsxs)(t.p,{children:[(0,l.jsx)("strong",{children:"Input: "}),'a = "abcd", b = "cdabcdab"']}),(0,l.jsx)("br",{}),(0,l.jsxs)(t.p,{children:[(0,l.jsx)("strong",{children:"Output: "}),"3",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("strong",{children:"Explanation: "}),'a after three repetitions become "ab',(0,l.jsx)("strong",{children:"\ncdabcdab\n"}),'cd", at which time b is a substring.']}),(0,l.jsx)("br",{})]}),"\n",(0,l.jsx)(t.h2,{id:"codeblock",children:(0,l.jsx)(t.code,{children:"CodeBlock"})}),"\n",(0,l.jsx)(t.h3,{id:"codeblock--string",children:(0,l.jsx)(t.code,{children:"CodeBlock > string"})}),"\n",(0,l.jsx)(o.Z,{children:"1 2 3"}),"\n",(0,l.jsx)(o.Z,{className:"language-yaml",title:"test",children:`link:
title: front page
path: /docs/`}),"\n",(0,l.jsx)(t.h3,{id:"codeblock--string-1",children:(0,l.jsx)(t.code,{children:"CodeBlock > string[]"})}),"\n",(0,l.jsx)(o.Z,{className:"language-yaml",title:"test",children:(0,l.jsxs)(t.p,{children:["link:","\n","\n","  ","title: front page","\n","\n","  ","path: /docs/","\n"]})}),"\n",(0,l.jsx)(t.h3,{id:"codeblock--element",children:(0,l.jsx)(t.code,{children:"CodeBlock > element"})}),"\n",(0,l.jsx)(o.Z,{className:"language-yaml",title:"test",children:(0,l.jsx)(i.Z,{children:"Lol bro"})}),"\n",(0,l.jsx)(t.h3,{id:"codeblock--element-1",children:(0,l.jsx)(t.code,{children:"CodeBlock > element[]"})}),"\n",(0,l.jsxs)(o.Z,{className:"language-yaml",title:"test",children:[(0,l.jsx)("a",{href:"/",children:"Front page"}),(0,l.jsx)("br",{}),(0,l.jsxs)(t.p,{children:[(0,l.jsx)("strong",{children:"Input: "}),'a = "abcd", b = "cdabcdab"']}),(0,l.jsx)("br",{}),(0,l.jsxs)(t.p,{children:[(0,l.jsx)("strong",{children:"Output: "}),"3",(0,l.jsx)("br",{}),"\n",(0,l.jsx)("strong",{children:"Explanation: "}),'a after three repetitions become "ab',(0,l.jsx)("strong",{children:"\ncdabcdab\n"}),'cd", at which time b is a substring.']}),(0,l.jsx)("br",{})]}),"\n",(0,l.jsx)(t.h2,{id:"code-blocks-with-line-numbering-tests",children:"Code blocks with line numbering tests"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",children:'function PageLayout(props) {\n  // highlight-next-line\n  return <Layout title="Awesome Docusaurus page" description="Test Test Test Test Test Test Test Test Test Test Test Test Test Test ">;\n}\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",metastring:"showLineNumbers",children:'function PageLayout(props) {\n  // highlight-next-line\n  return <Layout title="Awesome Docusaurus page" description="Test Test Test Test Test Test Test Test Test Test Test Test Test Test ">;\n}\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",metastring:"{1,3,6} showLineNumbers",children:"function PageLayout(props) {\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n  console.log(\n    'Test Test Test Test Test Test Test Test Test Test Test Test Test Test ',\n  );\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"code-block-wrapping-tests",children:"Code block wrapping tests"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:'mkdir this_is_a_loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong_string_to_test_code_block_wrapping\necho "this is a long string made up of many separate words that should be broken between words when possible"\ncurl https://docusaurus.io/tests/pages/code-block-tests\n'})}),"\n",(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(a.Z,{value:"short-tab-1",label:"Short tab",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:'echo "hi"\n'})})}),(0,l.jsx)(a.Z,{value:"long-tab",label:"Long tab",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"echo this will test whether a long string that is initially hidden will have the option to wrap when made visible\n"})})}),(0,l.jsx)(a.Z,{value:"short-tab-2",label:"Short tab",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"rm short_initially_hidden_string\n"})})})]}),"\n",(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(a.Z,{value:"long-tab",label:"Long tab",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"echo medium_length_string_will_have_the_option_to_wrap_after_window_resized_while_it_is_hidden\n"})})}),(0,l.jsx)(a.Z,{value:"short-tab",label:"Short tab",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:'echo "short_initially_hidden_string"\n'})})})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",metastring:"showLineNumbers",children:"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>\n        This is a React page. Let's make this sentence bit long. Some more words\n        to make sure... Some more words to make sure... Some more words to make\n        sure...\n      </p>\n    </Layout>\n  );\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"magic-comments-tests",children:"Magic comments tests"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-lua",metastring:'title="lua_sum.lua"',children:"function sum(n)\n  -- highlight-next-line\n  local result = 0\n  for i = 1, n do\n   -- highlight-start\n    result = result + i\n  end\n  -- highlight-end\n  print(result)\nend\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-haskell",metastring:'title="haskell.hs"',children:"stringLength :: String -> Int\n-- highlight-next-line\nstringLength [] = 0\nstringLength (x:xs) = 1 + stringLength xs\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-wasm",metastring:'title="sum_webAssembly.wasm"',children:'(module\n  ;; highlight-next-line\n  (func $add (param $a i32) (param $b i32) (result i32)\n    local.get $a\n    ;; highlight-start\n    local.get $b\n    i32.add)\n    ;; highlight-end\n  (export "add" (func $add)))\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",metastring:'title="sql_query.sql"',children:"-- highlight-start\nSELECT *\nFROM orders\n-- highlight-end\nWHERE customer_id IN (\n  SELECT customer_id\n  -- highlight-next-line\n  FROM customers\n  WHERE country = 'USA'\n)\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",metastring:'title="sql_query_block.sql"',children:"/* highlight-start */\nSELECT *\nFROM orders\n/* highlight-end */\nWHERE customer_id IN (\n  SELECT customer_id\n  /* highlight-next-line */\n  FROM customers\n  WHERE country = 'USA'\n)\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-matlab",metastring:'title="matlab.m"',children:"% highlight-start\nfunction result = times2(n)\n  result = n * 2;\nend\n% highlight-end\n\nx = 10;\n% highlight-next-line\ny = times2(x);\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-latex",metastring:'title="latex.tex"',children:"\\begin{document}\n	\\section{Triangles}\n	% highlight-next-line\n	\\subsection{Pythagoras' Theorem}\n	Pythagoras's theorem is:\n	% highlight-start\n	\\begin{equation}\n		c^2 = a^2 + b^2\n	\\end{equation}\n	% highlight-end\n\\end{document}\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-vba",metastring:'title="vba.vb"',children:"Function Factorial(ByVal n As Long) As Long\n    If n < 0 Then\n        Err.Raise 5 ' Invalid argument\n    End If\n    'highlight-next-line\n    Factorial = 1 ' return value\n    Dim i As Long\n    ' highlight-start\n    For i = 2 To n\n        Factorial = Factorial * i\n    Next\n    ' highlight-end\nEnd Function\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-vbnet",metastring:'title="vbnet.vb"',children:'\' highlight-next-line\nDim languages As New HashSet(Of String) From {\n    "C#",\n    "Visual Basic",\n    _ \' highlight-start\n    "F#",\n    "PowerShell",\n    "TypeScript"\n    _\' highlight-end\n}\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-batch",metastring:'title="cmd.bat"',children:"rem highlight-start\n@echo off\nsetlocal\nRem highlight-end\nipconfig\nREM highlight-next-line\necho Docusaurus is awesome\nnetstat\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",metastring:'title="fortran.f90"',children:'! highlight-start\nprogram hello\n! highlight-end\n  implicit none\n  ! highlight-next-line\n  print *, "Hello, World!"\nend program hello\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-cobol",metastring:'title="cobol.cob"',children:'*> highlight-start\nIDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO.\n*> highlight-end\nPROCEDURE DIVISION.\n  *> highlight-next-line\n  DISPLAY "Hello, World!".\nEND PROGRAM HELLO.\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fsharp",metastring:'title="fsharp.fsx"',children:'(* highlight-start *)\n[<EntryPoint>]\n(* highlight-end *)\nlet main _ =\n    // highlight-next-line\n    printfn "Hello, World!"\n    0\n'})}),"\n",(0,l.jsx)(t.h2,{id:"html---script--style-highlighting",children:"HTML - script + style highlighting"}),"\n",(0,l.jsxs)(t.p,{children:["See ",(0,l.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/9517",children:"https://github.com/facebook/docusaurus/issues/9517"})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-html",children:"<html lang=\"en\">\n  <head>\n    <script>\n      const name = 'Formidable';\n      console.log(name);\n    <\/script>\n    <style>\n      .some-class {\n        border: solid red thick;\n      }\n    </style>\n  </head>\n</html>\n"})}),"\n",(0,l.jsx)(t.h2,{id:"empty-code-blocks-edge-cases",children:"Empty code blocks edge cases"}),"\n",(0,l.jsx)(t.p,{children:"Empty inline code block: ``"}),"\n",(0,l.jsxs)(t.p,{children:["Single space inline code block: ",(0,l.jsx)(t.code,{children:" "})]}),"\n",(0,l.jsx)(t.p,{children:"Empty code block"}),"\n","\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{})}),"\n",(0,l.jsx)(t.p,{children:"Empty 1 line code block"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{})}),"\n",(0,l.jsx)(t.p,{children:"Empty 2 line code block"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{})}),"\n",(0,l.jsx)(t.p,{children:"Empty live code block"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",metastring:"live",live:!0})})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},58636:function(e,t,n){n.d(t,{Z:()=>r});var s=n(85893);n(67294);var l=n(90496);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.Z)("tabItem_pnkT",r),hidden:n,children:t})}},15398:function(e,t,n){n.d(t,{Z:()=>j});var s=n(85893),l=n(67294),r=n(90496),o=n(54947),i=n(3620),c=n(844),a=n(97486),d=n(32263),h=n(16971);function u(e){return l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||l.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function g(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var m=n(71607);function p(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e,a=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),h=e=>{let t=e.currentTarget,n=c[a.indexOf(t)].value;n!==l&&(d(t),i(n))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{let n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{let n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:c.map(e=>{let{value:t,label:n,attributes:o}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>{a.push(e)},onKeyDown:u,onClick:h,...o,className:(0,r.Z)("tabs__item","tabItem_AQgk",o?.className,{"tabs__item--active":l===t}),children:n??t},t)})})}function x(e){let{lazy:t,children:n,selectedValue:o}=e,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=i.find(e=>e.props.value===o);return e?(0,l.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==o}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:s}=e,r=function(e){let{values:t,children:n}=e;return(0,l.useMemo)(()=>{let e=t??u(n).map(e=>{let{props:{value:t,label:n,attributes:s,default:l}}=e;return{value:t,label:n,attributes:s,default:l}});return!function(e){let t=(0,d.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[o,m]=(0,l.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:t,tabValues:r})),[p,x]=function(e){let{queryString:t=!1,groupId:n}=e,s=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(r),(0,l.useCallback)(e=>{if(!r)return;let t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})},[r,s])]}({queryString:n,groupId:s}),[b,j]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[s,r]=(0,h.Nk)(n);return[s,(0,l.useCallback)(e=>{n&&r.set(e)},[n,r])]}({groupId:s}),f=(()=>{let e=p??b;return g({value:e,tabValues:r})?e:null})();return(0,c.Z)(()=>{f&&m(f)},[f]),{selectedValue:o,selectValue:(0,l.useCallback)(e=>{if(!g({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),j(e)},[x,j,r]),tabValues:r}}(e);return(0,s.jsxs)("div",{className:(0,r.Z)("tabs-container","tabList_Qoir"),children:[(0,s.jsx)(p,{...t,...e}),(0,s.jsx)(x,{...t,...e})]})}function j(e){let t=(0,m.Z)();return(0,s.jsx)(b,{...e,children:u(e.children)},String(t))}},56497:function(e,t,n){n.d(t,{Z:()=>r});var s=n(85893);n(67294);var l=n(71607);function r(e){let{children:t,fallback:n}=e;return(0,l.Z)()?(0,s.jsx)(s.Fragment,{children:t?.()}):n??null}},14522:function(e,t,n){n.d(t,{Z:()=>i});var s=n(85893);n(67294);var l=n(90496);let r="dot_giz1",o="bar_rrRL";function i(e){let{children:t,minHeight:n,url:i="http://localhost:3000",style:c,bodyStyle:a}=e;return(0,s.jsxs)("div",{className:"browserWindow_my1Q",style:{...c,minHeight:n},children:[(0,s.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,s.jsxs)("div",{className:"buttons_uHc7",children:[(0,s.jsx)("span",{className:r,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:r,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:r,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,l.Z)("browserWindowAddressBar_Pd8y","text--truncate"),children:i}),(0,s.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:o}),(0,s.jsx)("span",{className:o}),(0,s.jsx)("span",{className:o})]})})]}),(0,s.jsx)("div",{className:"browserWindowBody_Idgs",style:a,children:t})]})}},95998:function(e,t,n){n.d(t,{Z:()=>et});var s,l={};n.r(l),n.d(l,{ButtonExample:()=>_});var r=n(85893),o=n(67294),i=n(90496),c=n(71607),a=n(10075),d=n(77827),h=n(8156),u=n(56497),g=n(85108),m=n(45245),p=n(26378);function x(){let{prism:e}=(0,p.L)(),{colorMode:t}=(0,m.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var b=n(67490);function j(e){let{children:t}=e;return(0,r.jsx)("div",{className:(0,i.Z)("playgroundHeader_Tvsk"),children:t})}function f(){return(0,r.jsx)("div",{children:"Loading..."})}function T(){return(0,r.jsx)(u.Z,{fallback:(0,r.jsx)(f,{}),children:()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.Z,{fallback:e=>(0,r.jsx)(g.Ac,{...e}),children:(0,r.jsx)(a.i5,{})}),(0,r.jsx)(a.IF,{})]})})}function v(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{children:(0,r.jsx)(d.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,r.jsx)("div",{className:"playgroundPreview_mApW",children:(0,r.jsx)(T,{})})]})}function k(){let e=(0,c.Z)();return(0,r.jsx)(a.uz,{className:"playgroundEditor_TySg"},String(e))}function y(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{children:(0,r.jsx)(d.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,r.jsx)(k,{})]})}let w=e=>`${e};`;function N(e){let{children:t,transformCode:n,...s}=e,{siteConfig:{themeConfig:l}}=(0,h.Z)(),{liveCodeBlock:{playgroundPosition:o}}=l,i=x(),c=s.metastring?.includes("noInline")??!1;return(0,r.jsx)("div",{className:"playgroundContainer_6Ior",children:(0,r.jsx)(a.nu,{code:t?.replace(/\n$/,""),noInline:c,transformCode:n??w,theme:i,...s,children:"top"===o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{}),(0,r.jsx)(y,{})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{}),(0,r.jsx)(v,{})]})})})}function _(e){return(0,r.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}let L={React:o,...o,...l};var E=n(55951),B=n(6324),C=n.n(B);let I=/title=(?<quote>["'])(?<title>.*?)\1/,S=/\{(?<range>[\d,-]+)\}/,Z={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},$={...Z,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},A=Object.keys(Z);function R(e,t){let n=e.map(e=>{let{start:n,end:s}=$[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${s})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}function H(e){let{as:t,...n}=e,s=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[s,l]=e,r=t[s];r&&"string"==typeof l&&(n[r]=l)}),n}(x());return(0,r.jsx)(t,{...n,style:s,className:(0,i.Z)(n.className,"codeBlockContainer_jDV4",E.k.common.codeBlock)})}let O={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function M(e){let{children:t,className:n}=e;return(0,r.jsx)(H,{as:"pre",tabIndex:0,className:(0,i.Z)(O.codeBlockStandalone,"thin-scrollbar",n),children:(0,r.jsx)("code",{className:O.codeBlockLines,children:t})})}var F=n(50923);let W={attributes:!0,characterData:!0,childList:!0,subtree:!0};var D=n(7316);let q={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function P(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:l,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let c=l({line:t,className:(0,i.Z)(n,s&&q.codeLine)}),a=t.map((e,t)=>(0,r.jsx)("span",{...o({token:e})},t));return(0,r.jsxs)("span",{...c,children:[s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:q.codeLineNumber}),(0,r.jsx)("span",{className:q.codeLineContent,children:a})]}):a,(0,r.jsx)("br",{})]})}var V=n(44771);function z(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function U(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let G={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function X(e){let{code:t,className:n}=e,[s,l]=(0,o.useState)(!1),c=(0,o.useRef)(void 0),a=(0,o.useCallback)(()=>{(0,V.Z)(t),l(!0),c.current=window.setTimeout(()=>{l(!1)},1e3)},[t]);return(0,o.useEffect)(()=>()=>window.clearTimeout(c.current),[]),(0,r.jsx)("button",{type:"button","aria-label":s?(0,d.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,d.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,d.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",n,G.copyButton,s&&G.copyButtonCopied),onClick:a,children:(0,r.jsxs)("span",{className:G.copyButtonIcons,"aria-hidden":"true",children:[(0,r.jsx)(z,{className:G.copyButtonIcon}),(0,r.jsx)(U,{className:G.copyButtonSuccessIcon})]})})}function Q(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let J={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function Y(e){let{className:t,onClick:n,isEnabled:s}=e,l=(0,d.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,r.jsx)("button",{type:"button",onClick:n,className:(0,i.Z)("clean-btn",t,s&&J.wordWrapButtonEnabled),"aria-label":l,title:l,children:(0,r.jsx)(Q,{className:J.wordWrapButtonIcon,"aria-hidden":"true"})})}function K(e){var t;let{children:n,className:s="",metastring:l,title:c,showLineNumbers:a,language:d}=e,{prism:{defaultLanguage:h,magicComments:u}}=(0,p.L)(),g=(t=d??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(s)??h,t?.toLowerCase()),m=x(),b=function(){let[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),l=(0,o.useRef)(null),r=(0,o.useCallback)(()=>{let n=l.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[l,e]),i=(0,o.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=l.current;s(e>t||l.current.querySelector("code").hasAttribute("style"))},[l]);return!function(e,t){let[n,s]=(0,o.useState)(),l=(0,o.useCallback)(()=>{s(e.current?.closest("[role=tabpanel][hidden]"))},[e,s]);(0,o.useEffect)(()=>{l()},[l]),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:W,s=(0,F.zX)(t),l=(0,F.Ql)(n);(0,o.useEffect)(()=>{let t=new MutationObserver(s);return e&&t.observe(e,l),()=>t.disconnect()},[e,s,l])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(l,i),(0,o.useEffect)(()=>{i()},[e,i]),(0,o.useEffect)(()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)}),[i]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:r}}(),j=(l?.match(I)?.groups.title??"")||c,{lineClassNames:f,code:T}=function(e,t){let n=e.replace(/\n$/,""),{language:s,magicComments:l,metastring:r}=t;if(r&&S.test(r)){let e=r.match(S).groups.range;if(0===l.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=l[0].className;return{lineClassNames:Object.fromEntries(C()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===s)return{lineClassNames:{},code:n};let o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return R(["js","jsBlock"],t);case"jsx":case"tsx":return R(["js","jsBlock","jsx"],t);case"html":return R(["js","jsBlock","html"],t);case"python":case"py":case"bash":return R(["bash"],t);case"markdown":case"md":return R(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return R(["tex"],t);case"lua":case"haskell":return R(["lua"],t);case"sql":return R(["lua","jsBlock"],t);case"wasm":return R(["wasm"],t);case"vb":case"vba":case"visual-basic":return R(["vb","rem"],t);case"vbnet":return R(["vbnet","rem"],t);case"batch":return R(["rem"],t);case"basic":return R(["rem","f90"],t);case"fsharp":return R(["js","ml"],t);case"ocaml":case"sml":return R(["ml"],t);case"fortran":return R(["f90"],t);case"cobol":return R(["cobol"],t);default:return R(A,t)}}(s,l),i=n.split("\n"),c=Object.fromEntries(l.map(e=>[e.className,{start:0,range:""}])),a=Object.fromEntries(l.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),d=Object.fromEntries(l.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),h=Object.fromEntries(l.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<i.length;){let t=i[e].match(o);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);a[n]?c[a[n]].range+=`${e},`:d[n]?c[d[n]].start=e:h[n]&&(c[h[n]].range+=`${c[h[n]].start}-${e-1},`),i.splice(e,1)}n=i.join("\n");let u={};return Object.entries(c).forEach(e=>{let[t,{range:n}]=e;C()(n).forEach(e=>{u[e]??=[],u[e].push(t)})}),{lineClassNames:u,code:n}}(n,{metastring:l,language:g,magicComments:u}),v=function(e){let{showLineNumbers:t,metastring:n}=e;return"boolean"==typeof t?t?1:void 0:"number"==typeof t?t:function(e){let t=e?.split(" ").find(e=>e.startsWith("showLineNumbers"));if(t)return t.startsWith("showLineNumbers=")?parseInt(t.replace("showLineNumbers=",""),10):1}(n)}({showLineNumbers:a,metastring:l});return(0,r.jsxs)(H,{as:"div",className:(0,i.Z)(s,g&&!s.includes(`language-${g}`)&&`language-${g}`),children:[j&&(0,r.jsx)("div",{className:O.codeBlockTitle,children:j}),(0,r.jsxs)("div",{className:O.codeBlockContent,children:[(0,r.jsx)(D.y$,{theme:m,code:T,language:g??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:l,getTokenProps:o}=e;return(0,r.jsx)("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,i.Z)(t,O.codeBlock,"thin-scrollbar"),style:n,children:(0,r.jsx)("code",{className:(0,i.Z)(O.codeBlockLines,void 0!==v&&O.codeBlockLinesWithNumbering),style:void 0===v?void 0:{counterReset:`line-count ${v-1}`},children:s.map((e,t)=>(0,r.jsx)(P,{line:e,getLineProps:l,getTokenProps:o,classNames:f[t],showLineNumbers:void 0!==v},t))})})}}),(0,r.jsxs)("div",{className:O.buttonGroup,children:[(b.isEnabled||b.isCodeScrollable)&&(0,r.jsx)(Y,{className:O.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),(0,r.jsx)(X,{className:O.codeButton,code:T})]})]})]})}let ee=(s=function(e){let{children:t,...n}=e,s=(0,c.Z)(),l=o.Children.toArray(t).some(e=>(0,o.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t;return(0,r.jsx)("string"==typeof l?K:M,{...n,children:l},String(s))},function(e){return e.live?(0,r.jsx)(N,{scope:L,...e}):(0,r.jsx)(s,{...e})});function et(e){return(0,r.jsx)(ee,{...e})}}}]);