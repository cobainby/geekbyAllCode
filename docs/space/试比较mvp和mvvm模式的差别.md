---
title: 试比较mvp和mvvm模式的差别 (2018-12-21)
date: '2018-12-26 09:09:43'
type: weekly
tag:
meta:
  -
    name: description
    content: cobainby
  -
    name: keywords
    content: cobainby
author: cobainby-co
poster: /images/post-1.jpg
---
## 阅读

1、和jquery这种mvp模式相比，
vue的mvvm模式更效率。
mvp是面向dom编程，通过操作dom来控制逻辑
而mvvm的重点是m层，是通过对于数据的控制，来绑定view层。
mvp
v层就是dom，就是视图，
p层就是控制器，执行操作dom的方法。
m指的是模型层，ajax内容
绝大部分代码都是p层，在进行dom的操作。

mvvm
m=模型层，数据层，
v=view层。dom显示数据
vm=viewmodel，就是vue，封装好的。

和mvp最大的不同，vue没有p层。没有对于dom的控制层。直接对于dom的数据进行操作。
所以vue编程的最核心工作是m层。是数据的编程。

---
