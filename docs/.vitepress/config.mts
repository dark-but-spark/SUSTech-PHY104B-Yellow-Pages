import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SUSTech PHY104B 黄页",
  description: "南方科技大学基础物理实验电子版黄页",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
