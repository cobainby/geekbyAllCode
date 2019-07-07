module.exports = {
    title: 'Stone\'s blog',  //博客标题
    description: '我的个人博客', //个人描述
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', {  // 增加一个自定义的 favicon(网页标签的图标)
        rel: 'icon',
        type: 'image/x-icon',
        href: './favicon.ico'
      }],
      ['link', { rel: 'apple-touch-icon', href: './favicon.ico' }], //适配移动端ico
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav: [ // 导航栏配置
        {
          text: 'Home',
          link: '/' // '/'默认为docs文件夹下的README.md文件

        },
        {
          text: 'Blog',
          link: '/blog/'
        },
        {
          text: 'Space',
          link: '/space/'
        },
        {
          text: 'GitHub',
          link: 'https://github.com/HUYIJUNCODING'
        }
      ],
      sidebar: {
        '/blog/': [
          {
            title: '前端daily', //侧边栏名称
            collapsable: true, // 可折叠
            children: [
                '/blog/javaScript/one', //文章地址
                '/blog/javaScript/two',
            ]
          },
          {
            title: '框架相关',
            collapsable: true,
            children: [
                '/blog/framework/vuepressBlog',
            ]
          },
          {
            title: '工具收藏',
            collapsable: true,
            children: [
                '/blog/tools/one',
                '/blog/tools/two',
            ]
          },
        ],
        '/space/': [
          {
            title: '诗和远方',
            collapsable: true,
            children: [
                '/space/poetryAndDistance/one',
            ]
          },
          {
            title: '谝闲传',
            collapsable: true,
            children: [
                '/space/talk/one',
            ]
          },
        ]
      }, // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  }
