(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{254:function(e,t,a){"use strict";a.r(t);var r=a(1),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("blockquote",[a("p",[e._v("多页面自动路由 webpack 插件")])]),e._v(" "),a("p",[e._v("单页面可以直接使用 "),a("a",{attrs:{href:"https://github.com/ktsn/vue-route-generator",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-route-generator"),a("OutboundLink")],1)]),e._v(" "),a("h1",{attrs:{id:"vue-cli-plugin-auto-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-plugin-auto-router","aria-hidden":"true"}},[e._v("#")]),e._v(" vue-cli-plugin-auto-router")]),e._v(" "),a("p",[e._v("使用了 "),a("a",{attrs:{href:"https://github.com/ktsn/vue-route-generator",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-route-generator"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("单路由可以直接使用 "),a("a",{attrs:{href:"https://github.com/ktsn/vue-auto-routing",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-auto-routing"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vue add @kuaizi/vue-cli-plugin-auto-router\n")])])]),a("p",[e._v("默认页面文件夹为 "),a("code",[e._v("./src/pages/*/views/")]),e._v("，自定义需要添加配置 "),a("code",[e._v("package.json")]),e._v(" 中的 "),a("code",[e._v("autoRouterConf")]),e._v(" 字段")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n  //...\n  autoRouterConf: {\n    pages: ['./src/pages/**/views/'],\n    importPrefix: '../views'\n  }\n  //...\n}\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> cd example\n> yarn\n> yarn dev\n")])])]),a("h1",{attrs:{id:"auto-router-webpack-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-router-webpack-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" auto-router-webpack-plugin")]),e._v(" "),a("blockquote",[a("p",[e._v("多页面自动路由 "),a("code",[e._v("webpack")]),e._v(" 插件")])]),e._v(" "),a("p",[e._v("单页面可以直接使用 "),a("a",{attrs:{href:"https://github.com/ktsn/vue-route-generator",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-route-generator"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[e._v("#")]),e._v(" 参数")]),e._v(" "),a("ul",[a("li",[e._v("options {Object} 配置参数\n"),a("ul",[a("li",[e._v("pages {String|Array} 支持globby的匹配，支持字符串或者数组 "),a("a",{attrs:{href:"https://github.com/sindresorhus/globby#globbing-patterns",target:"_blank",rel:"noopener noreferrer"}},[e._v("globbing-patterns"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("importPrefix {String} 默认是"),a("code",[e._v("../views/")]),e._v(", "),a("code",[e._v("vue-route-generator")]),e._v("默认的是"),a("code",[e._v("@/pages")]),e._v(", 异步组件的默认路径，eg：import('../views/account.vue')")])])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("描述")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("pages")]),e._v(" "),a("td",[a("code",[e._v("String|Array")])]),e._v(" "),a("td",[e._v("支持globby的匹配，支持字符串或者数组 "),a("a",{attrs:{href:"https://github.com/sindresorhus/globby#globbing-patterns",target:"_blank",rel:"noopener noreferrer"}},[e._v("globbing-patterns"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("importPrefix")]),e._v(" "),a("td",[a("code",[e._v("String")])]),e._v(" "),a("td",[e._v("默认是"),a("code",[e._v("../views/")]),e._v(", "),a("code",[e._v("vue-route-generator")]),e._v("默认的是"),a("code",[e._v("@/pages")]),e._v(", 异步组件的默认路径，eg：import('../views/account.vue')")])])])]),e._v(" "),a("h2",{attrs:{id:"使用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# vue.config.js\nexport default {\n  // ...\n  configureWebpack: {\n      cache: true,\n      plugins: [\n        new webpackPluginAutoRouter({ pages: './src/pages/*/views/'})\n      ],\n  },\n  // ...\n}\n")])])]),a("p",[e._v("或者")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# webpack.config.js\nmodule.exports = {\n  // ...\n  plugins: [\n    new webpackPluginAutoRouter({ pages: './src/pages/*/views/'})\n  ],\n  // ...\n}\n")])])]),a("h2",{attrs:{id:"项目目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目目录","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目目录")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".\n├─assets\n│  └─less\n├─components\n│  ├─charts\n│  ├─count-to\n│  └─info-card\n├─i18n\n├─lib\n│  └─services\n├─pages\n│  ├─index\n│  │  ├─components\n│  │  │  └─common\n│  │  ├─routes\n│  │  ├─store\n│  │  └─views\n│  │      └─manage\n│  │          └─word\n│  └─login\n│      └─views\n└─store\n    └─modules\n")])])]),a("p",[a("code",[e._v("index")]),e._v(" 和 "),a("code",[e._v("login")]),e._v(" 分别是多页 "),a("code",[e._v("pages")]),e._v(" 的单页目录，我们设置 "),a("code",[e._v("pages: './src/pages/*/views/'")]),e._v(" 则可以匹配到 "),a("code",[e._v("index")]),e._v(" 和 "),a("code",[e._v("login")]),e._v(", "),a("code",[e._v("views")]),e._v("是存放单页路由页面组件的目录")]),e._v(" "),a("p",[e._v("每个单页目录中 "),a("code",[e._v("routes")]),e._v(" 是和 "),a("code",[e._v("views")]),e._v(" 同级，生成的"),a("code",[e._v("routes/index.js")]),e._v(" 文件应用 "),a("code",[e._v("views")]),e._v("的路由页面组件路径为 "),a("code",[e._v("../views/xxx.vue")]),e._v(", 我们设置 "),a("code",[e._v("importPrefix: '../views'")])]),e._v(" "),a("h2",{attrs:{id:"支持-route-meta-标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持-route-meta-标签","aria-hidden":"true"}},[e._v("#")]),e._v(" 支持 "),a("code",[e._v("route-meta")]),e._v(" 标签")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ktsn/vue-route-generator#route-meta",target:"_blank",rel:"noopener noreferrer"}},[e._v("route-meta"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("动态生成 "),a("code",[e._v("route")]),e._v(" 配置能否带上额外的"),a("code",[e._v("meta")]),e._v("配置，需要我们手动去添加支持 "),a("code",[e._v("<route-meta>")]),e._v(" 标签的 "),a("code",[e._v("loader")])]),e._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n  // ...\n  module: {\n    rules: [\n      {\n        resourceQuery: /blockType=route-meta/,\n        loader: require.resolve('@kuaizi/vue-cli-auto-router/meta-loader.js')\n      }\n    ]\n  }\n  // ...\n}\n")])])]),a("p",[e._v("添加支持 "),a("code",[e._v("<route-meta>")]),e._v(" 标签")]),e._v(" "),a("h3",{attrs:{id:"使用-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-3","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# index/views/manage/index.vue\n<route-meta>\n{\n  "name": "manage-user-define",\n  "sidebar": false\n}\n</route-meta>\n\n<template>\n  <Layout>\n    \x3c!-- more --\x3e\n  </Layout>\n</template>\n')])])]),a("p",[a("code",[e._v("<route-meta>")]),e._v(" 包含一个 "),a("code",[e._v("json")]),e._v(" 的内容, 其中 "),a("code",[e._v("name")]),e._v("字段会同步到 "),a("code",[e._v("route/index.js")]),e._v(" 所在的路由配置")]),e._v(" "),a("p",[e._v("启动项目后生成文件"),a("code",[e._v("index/routes/index.js")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export default [\n  //...\n  {\n    name: 'manage-user-define',\n    path: '/manage',\n    component: ManageIndex,\n    meta: {\n      \"sidebar\": false\n    }\n  }\n  //...\n]\n")])])]),a("h3",{attrs:{id:"vue-router-direct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-direct","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("vue-router direct")])]),e._v(" "),a("p",[e._v("路由的跳转需要手动去添加")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# index/main.js\n// ...\nimport Router from '@/router'\nimport routes from './routes'\nimport App from './App'\n\n// 定义跳转\nroutes.unshift({\n  path: '/manage',\n  redirect: '/manage/hello'\n})\n\nboostrap({ Router, Component: App, routes })\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);