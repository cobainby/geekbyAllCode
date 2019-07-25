module.exports = {
    title: 'geek by',  //博客标题
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
          text: '首页',
          link: '/' // '/'默认为docs文件夹下的README.md文件

        },
        {
          text: '前端daily',
          link: '/webdaily/' // '/'默认为docs文件夹下的README.md文件

        },
        {
          text: '困惑',
          link: '/problems/' // '/'默认为docs文件夹下的README.md文件

        },
        {
          text: '工具收藏',
          link: '/tools/' // '/'默认为docs文件夹下的README.md文件

        },
        {
          text: '随笔',
          link: '/space/'
        },
        {
          text: 'GitHub',
          link: 'https://github.com/cobainby'
        }
      ],
      sidebar: {
        '/webdaily/':[
          ''
        ],
        '/problems/':[
          '',
          '解决vue项目打包路径错误'
        ],
        '/tools/':[
          ''
        ],
        '/space/':[
          '',
          'blog的重新出发'
        ]
      }, // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  }
