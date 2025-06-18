import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SUSTech PHY104B 黄页",
  description: "南方科技大学基础物理实验电子版黄页",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始阅读', link: '/' },
      { text: '资源目录', link: '/resources' },
      { text: '如何贡献', link: '/contributing' },
      { text: '技术手册', link: '/manual' }
    ],

    sidebar: [
      {
        text: '课程须知与资源',
        items: [
          { text: '课程须知', link: '/guide' },
          { text: '资源导航', link: '/resources' },
          { text: '如何贡献', link: '/contributing' }
        ]
      },
      {
        text: '实验导航',
        items: [
          { text: '实验报告模板', link: '/templates' },
          { text: '数据分析程序', link: '/programs' }
          // 可在此处继续添加具体实验
        ]
      },
      {
        text: '本站设计与技术',
        items: [
          { text: '设计思路', link: '/site-design' },
          { text: '技术迭代', link: '/tech-iteration' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LIUBINfighter/SUSTech-PHY104B-Yellow-Pages' }
    ]
  }
})
