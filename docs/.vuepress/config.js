module.exports = {
  title: '橘子辉煌',
  description: '太阳强烈，水波温柔',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  // base:'/geekbyAllCode/',
  // dest:'geekbyAllCode',
  theme: 'track',
  port: 3000,
  // Google Analytics ID
  ga: 'UA-130602776-1',
  // PWA support
  // serviceWorker: true,
  // fuck IE
  evergreen: true,
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    config: md => {
      md.use(require('markdown-it-task-lists')) // 一个 checkbox 的 TODO List 插件
        .use(require('markdown-it-imsize'), { autofill: true }) // 支持自定义 md 图片大小 ![](http://test.png =200x200)
    }
  },
  themeConfig: {
    footer: 'MIT Licensed | Copyright © 2018-present',
    // github card
    github: 'cobainby',
    // 博客的 logo
    logo: '/images/logo.png',
    logoInverse: '/images/logo-white.png',
    // 定制文章标题颜色
    accentColor: '#ac3e40',
    // 每页显示的文章数量
    per_page: 5,
    // 创建文章的时间格式, 不设则不显示 可选 [yyyy-MM-dd HH:mm:ss]
    date_format: 'yyyy-MM-dd',
    // 开启标签功能
    tags: true,
    // gitalk 的配置项, 不支持 flipMoveOptions
    comment: {
      clientID: '4bd9f5278b824687adfa',
      clientSecret: 'b3fb7f071fe80dc7a16ae346b770797fe0b4bb50',
      repo: 'blog',
      owner: 'baiyang',
      admin: ['kz-fe', 'tomieric'],
      // perPage: 5,
      // id: 'comment',      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    },
    // 和 vuepress 默认主题一样, 定制导航栏上的链接
    nav: [
        { text: '首页', link: '/', root: true }, // 指定它为博客根目录
        { text: '前端daily', link: '/webdaily/', root: true }, // 指定它为标签目录
        { text: '疑惑困难', link: '/problems/' }, // 指定它为标签目录
        { text: '工具收藏', link: '/tools/' }, // 指定它为标签目录
        { text: '随便', link: '/space/' }, // 指定它为标签目录
        { text: '关于我', link: '/about.html' }
    ],
    // 配置/page/1的链接地址
    pageRoot: '/space/',
    sidebar: 'auto',
    // 是否显示文章作者，默认为 false
    // 周刊为团队发布，因此设置为 true
    // 个人博客则不显示作者组件
    showAuthor: true
  },
  plugins: [
    ['@tomieric/vuepress-plugin-rss',
      {
        site_url: 'https://kuaizi-co.github.io/blog', // required
        copyright: '@2018 - present www.kuaizi.ai', // optional
        filter: ({ frontmatter }) => frontmatter.type === 'weekly' || (frontmatter.type === 'post' && frontmatter.sidebar !== false),
        count: 20
      }
    ]
  ]
}