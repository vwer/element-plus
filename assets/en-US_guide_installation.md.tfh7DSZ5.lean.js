import{_ as a}from"./chunks/theme.Q658I92K.js";import{_ as n,o as t,c as r,a as s,W as i,y as e}from"./chunks/framework.DwCbV5ML.js";const y=JSON.parse('{"title":"Installation","description":"","frontmatter":{"title":"Installation","lang":"en-US"},"headers":[{"level":2,"title":"Compatibility <span class=\\"vp-tag \\">2.5.0</span>","slug":"compatibility","link":"#compatibility","children":[{"level":3,"title":"Sass","slug":"sass","link":"#sass","children":[]},{"level":3,"title":"Version","slug":"version","link":"#version","children":[]}]},{"level":2,"title":"Using Package Manager","slug":"using-package-manager","link":"#using-package-manager","children":[]},{"level":2,"title":"Import in Browser","slug":"import-in-browser","link":"#import-in-browser","children":[{"level":3,"title":"unpkg","slug":"unpkg","link":"#unpkg","children":[]},{"level":3,"title":"jsDelivr","slug":"jsdelivr","link":"#jsdelivr","children":[]}]},{"level":2,"title":"Hello World","slug":"hello-world","link":"#hello-world","children":[]}],"relativePath":"en-US/guide/installation.md","filePath":"en-US/guide/installation.md","lastUpdated":1730473820000}'),h={name:"en-US/guide/installation.md"};function k(p,o,d,c,g,E){const l=a;return t(),r("div",null,[s("h1",{id:"installation",tabindex:"-1"},[i("Installation "),s("a",{class:"header-anchor vp-link",href:"#installation","aria-label":'Permalink to "Installation"'},"​")]),s("h2",{id:"compatibility",tabindex:"-1"},[i("Compatibility "),s("span",{class:"vp-tag"},"2.5.0"),i(),s("a",{class:"header-anchor vp-link",href:"#compatibility","aria-label":'Permalink to "Compatibility ^(2.5.0)"'},"​")]),s("p",null,"Element Plus can run on browsers that support last 2 versions."),s("p",null,[i("If you really need to support outdated browsers, please add "),s("a",{href:"https://babeljs.io/",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("Babel"),e(l,{class:"link-icon"})]),i(" and Polyfill yourself.")]),s("p",null,"Since Vue 3 no longer supports IE11, Element Plus does not support IE either."),s("div",{class:"vp-table"},[s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"version"),s("th",null,[s("img",{src:"https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png",alt:"Chrome"}),i(),s("br"),i(" Chrome")]),s("th",null,[s("img",{src:"https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png",alt:"IE"}),i(),s("br"),i(" Edge")]),s("th",null,[s("img",{src:"https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png",alt:"Firefox"}),i(),s("br"),i(" Firefox")]),s("th",null,[s("img",{src:"https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png",alt:"Safari"}),i(),s("br"),i(" Safari")])])]),s("tbody",null,[s("tr",null,[s("td",null,"< 2.5.0"),s("td",null,"Chrome ≥ 64"),s("td",null,"Edge ≥ 79"),s("td",null,"Firefox ≥ 78"),s("td",null,"Safari ≥ 12")]),s("tr",null,[s("td",null,"2.5.0 +"),s("td",null,"Chrome ≥ 85"),s("td",null,"Edge ≥ 85"),s("td",null,"Firefox ≥ 79"),s("td",null,"Safari ≥ 14.1")])])])]),s("h3",{id:"sass",tabindex:"-1"},[i("Sass "),s("a",{class:"header-anchor vp-link",href:"#sass","aria-label":'Permalink to "Sass"'},"​")]),s("p",null,[i("Version "),s("code",null,"2.8.5"),i(" and later, the minimum compatible version of "),s("a",{href:"https://github.com/sass",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("Sass"),e(l,{class:"link-icon"})]),i(" is "),s("code",null,"1.79.0"),i(".")]),s("p",null,[i("If your terminal prompts "),s("code",null,"legacy JS API Deprecation Warning"),i(", you can configure the following code in "),s("a",{href:"https://vitejs.dev/config/shared-options.html#css-preprocessoroptions",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("vite.config.ts"),e(l,{class:"link-icon"})]),i(".")]),s("div",{class:"language-ts vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"css"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  preprocessorOptions"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line highlighted"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    scss"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": { "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"api"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'modern-compiler'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])]),s("h3",{id:"version",tabindex:"-1"},[i("Version "),s("a",{class:"header-anchor vp-link",href:"#version","aria-label":'Permalink to "Version"'},"​")]),s("p",null,[i("Element Plus is currently in a rapid development iteration. "),s("a",{href:"https://www.npmjs.org/package/element-plus",class:"vp-link",target:"_blank",rel:"noreferrer"},[s("img",{src:"https://img.shields.io/npm/v/element-plus.svg?style=flat-square",alt:"ElementPlus version badge"}),e(l,{class:"link-icon"})])]),s("p",null,[i("In addition, every commit and PR on the dev branch will be published to "),s("a",{href:"https://github.com/stackblitz-labs/pkg.pr.new",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("pkg.pr.new"),e(l,{class:"link-icon"})]),i(", if you want to use some unpublished content, you can refer to "),s("a",{href:"https://github.com/element-plus/element-plus/issues/18433#issuecomment-2392618431",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("here"),e(l,{class:"link-icon"})]),i(".")]),s("h2",{id:"using-package-manager",tabindex:"-1"},[i("Using Package Manager "),s("a",{class:"header-anchor vp-link",href:"#using-package-manager","aria-label":'Permalink to "Using Package Manager"'},"​")]),s("p",null,[s("strong",null,[i("We recommend using the package manager (NPM, "),s("a",{href:"https://classic.yarnpkg.com/lang/en/",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("Yarn"),e(l,{class:"link-icon"})]),i(", "),s("a",{href:"https://pnpm.io/",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("pnpm"),e(l,{class:"link-icon"})]),i(") to install Element Plus")]),i(", so that you can utilize bundlers like "),s("a",{href:"https://vitejs.dev",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("Vite"),e(l,{class:"link-icon"})]),i(" and "),s("a",{href:"https://webpack.js.org/",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("webpack"),e(l,{class:"link-icon"})]),i(".")]),s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# Choose a package manager you like.")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# NPM")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"$"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," element-plus"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --save")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# Yarn")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"$"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," yarn"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," add"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," element-plus")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# pnpm")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"$"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," pnpm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," element-plus")])])])]),s("p",null,[i("If your network environment is not good, it is recommended to use a mirror registry "),s("a",{href:"https://github.com/cnpm/cnpm",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("cnpm"),e(l,{class:"link-icon"})]),i(" or "),s("a",{href:"https://registry.npmmirror.com/",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("Alibaba"),e(l,{class:"link-icon"})]),i(".")]),s("h2",{id:"import-in-browser",tabindex:"-1"},[i("Import in Browser "),s("a",{class:"header-anchor vp-link",href:"#import-in-browser","aria-label":'Permalink to "Import in Browser"'},"​")]),s("p",null,[i("Import Element Plus through browser HTML tags directly, and use global variable "),s("code",null,"ElementPlus"),i(".")]),s("p",null,[i("According to different CDN providers, there are different introduction methods. Here we use "),s("a",{href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("unpkg"),e(l,{class:"link-icon"})]),i(" and "),s("a",{href:"https://jsdelivr.com",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("jsDelivr"),e(l,{class:"link-icon"})]),i(" as example. You can also use other CDN providers.")]),s("h3",{id:"unpkg",tabindex:"-1"},[i("unpkg "),s("a",{class:"header-anchor vp-link",href:"#unpkg","aria-label":'Permalink to "unpkg"'},"​")]),s("div",{class:"language-html vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"head"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  <!-- Import style -->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"link"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," rel"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"stylesheet"'),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," href"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"//unpkg.com/element-plus/dist/index.css"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  <!-- Import Vue 3 -->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," src"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"//unpkg.com/vue@3"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  <!-- Import component library -->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," src"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"//unpkg.com/element-plus"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"head"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),s("h3",{id:"jsdelivr",tabindex:"-1"},[i("jsDelivr "),s("a",{class:"header-anchor vp-link",href:"#jsdelivr","aria-label":'Permalink to "jsDelivr"'},"​")]),s("div",{class:"language-html vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"head"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  <!-- Import style -->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"link")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    rel"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"stylesheet"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    href"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"//cdn.jsdelivr.net/npm/element-plus/dist/index.css"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  />")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  <!-- Import Vue 3 -->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," src"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"//cdn.jsdelivr.net/npm/vue@3"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  <!-- Import component library -->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," src"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"//cdn.jsdelivr.net/npm/element-plus"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"head"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[i("We recommend using CDN to import Element Plus users to lock the version on the link address, so as not to be affected by incompatible updates when Element Plus is upgraded in the future. Please check "),s("a",{href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("unpkg.com"),e(l,{class:"link-icon"})]),i(" for the method to lock the version.")]),s("p",null,[i("Due to the limitations of native HTML parsing behavior, single-closed tags may cause some exceptions, so please use double-closed tags, "),s("a",{href:"https://vuejs.org/guide/essentials/component-basics.html#in-dom-template-parsing-caveats",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("reference"),e(l,{class:"link-icon"})])]),s("div",{class:"language-html vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"<!-- examples -->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-table"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-table-column"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-table-column"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-table-column"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-table-column"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-table"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])])]),s("h2",{id:"hello-world",tabindex:"-1"},[i("Hello World "),s("a",{class:"header-anchor vp-link",href:"#hello-world","aria-label":'Permalink to "Hello World"'},"​")]),s("p",null,[i("With CDN, we can easily use Element Plus to write a Hello World page. "),s("a",{href:"https://codepen.io/iamkun/pen/YzWMaVr",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("Online Demo"),e(l,{class:"link-icon"})])]),s("iframe",{height:"469",style:{width:"100%"},scrolling:"no",title:"YzWMaVr",src:"https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default-tab=html,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},[i(" See the Pen "),s("a",{href:"https://codepen.io/iamkun/pen/YzWMaVr"},"YzWMaVr"),i(" by iamkun ("),s("a",{href:"https://codepen.io/iamkun"},"@iamkun"),i(") on "),s("a",{href:"https://codepen.io"},"CodePen"),i(". ")]),s("p",null,[i("If you are installing via package manager and want to use it with a packaging tool, please read the next section: "),s("a",{href:"/en-US/guide/quickstart.html",class:"vp-link"},"Quick Start"),i(".")])])}const b=n(h,[["render",k]]);export{y as __pageData,b as default};