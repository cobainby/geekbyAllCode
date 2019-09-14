---
title: 解决Vue项目打包路径错误的问题 (2018-08-18)
date: '2018-09-18 11:00:00'
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
poster: /images/weekly-4.jpeg
---
# 解决Vue项目打包路径错误的问题
---
在Vue项目打包的过程中，由于图片路径不一致，造成打包后无法访问到图片的资源。

### 解决办法：
*更改build/utils.js文件中的ExtractTextPlugin插件的options相关配置*

```js
if(option.extract){
  return ExtractTextPlugin.extract({
    use:loaders, 
    publicPath:'../../', //注意配置这一部分，根据目录结构自由调整
    fallback:'vue-style-loader'
   })
}else{
  return['vue-style-loader'].concat(loaders)
}

```

