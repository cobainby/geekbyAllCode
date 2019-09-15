---
title: 解决vue点击侧边栏不会强刷新view的问题 (2019-01-14)
date: '2019-01-14 10:59:00'
type: weekly
meta:
  -
    name: description
    content: cobainby
  -
    name: keywords
    content: cobainby
author: cobainby-co
poster: /images/weekly-3.jpg
---

**## 问题**



1、点击侧边栏 刷新当前路由

在用 spa(单页面开发) 这种开发模式之前，大部分都是多页面后台，用户每次点击侧边栏都会重新请求这个页面，用户渐渐养成了点击侧边栏当前路由来刷新页面的习惯。但现在 spa 就不一样了，用户点击当前高亮的路由并不会刷新view，因为vue-router会拦截你的路由，它判断你的url并没有任何变化，所以它不会触发任何钩子或者是view的变化。issue地址，社区也对该问题展开了激烈讨论。





clickLink(path) { this.$router.push({ path, query: { t: +new Date() //保证每次点击路由的query项都是不一样的，确保会重新刷新view } }) } 

但这也有一个弊端就是 url 后面有一个很难看的 query 后缀如 xxx.com/article/list?t=1496832345025，但我司用户们表示能接受。。。只能暂时这样hack了，不知道大家有没有更好的方法，学习学习。



另一个方法：

```javascript

watch: {

$route: function(to, from) {

this.$store.dispatch(

"updateActiveTemplateId",

this.$route.params.templateId

); // 通过更新Vuex中的store的数据，让数据发生变化

this.init(1, 20);

}

}
```

