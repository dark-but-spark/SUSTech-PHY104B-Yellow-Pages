import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SUSTech PHY104B 黄页",
  description: "南方科技大学基础物理实验电子版黄页",
  base: process.env.BASE_URL || '/SUSTech-PHY104B-Yellow-Pages/',
  themeConfig: {
    nav: [
      { text: '开始阅读', link: '/guide' },
      { text: '资源目录', link: '/resources' },
      { text: '如何贡献', link: '/contributing' }
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
          { text: '实验报告模板', link: '/templates' }
          // 可在此处继续添加具体实验
        ]
      },
      {
        text: '本站设计与技术',
        items: [
          { text: '设计思路', link: '/site-design' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LIUBINfighter/SUSTech-PHY104B-Yellow-Pages' }
    ]
  }
})
