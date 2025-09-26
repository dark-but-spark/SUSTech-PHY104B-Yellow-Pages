import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: "SUSTech PHY104B 黄页",
  description: "南方科技大学基础物理实验电子版黄页",
  base: process.env.BASE_URL || '/SUSTech-PHY104B-Yellow-Pages/',
    markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },
  
  head: [
    ['script', {}, `
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$']],
          displayMath: [['$$', '$$']],
          processEscapes: true
        },
        svg: {
          fontCache: 'global'
        }
      };
    `],
    ['script', { 
      async: true,
      src: 'https://polyfill.io/v3/polyfill.min.js?features=es6' 
    }],
    ['script', { 
      async: true,
      id: 'MathJax-script',
      src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js' 
    }]
  ],
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
        text: '小实验',
        items: [
          { text: '实验报告模板', link: '/templates' },
          
          { text: '01 热敏电阻温度特性研究实验', link: '/01/README' },
          { text: '02 热电偶特性（25年春季）', link: '/02/README' },
          { text: '03 示波器原理与交流信号测量', link: '/03/README' },
          { text: '04 声速的测量', link: '/04/README' },
          { text: '05 透镜参数的测量', link: '/05/README' },
          { text: '06 光电效应法测普朗克常量', link: '/06/README' },
          { text: '07 分光计的调整与使用', link: '/07/README' },
          { text: '08 干涉法测几何量-2025', link: '/08/README' },
          { text: '09 氢氘光谱实验', link: '/09/README' },
          { text: '10 迈克耳逊干涉仪-2025', link: '/10/README' },
          { text: '11 脉搏语音及图像的傅里叶分析', link: '/11/README' },
          { text: '12 空气比热容比', link: '/12/README' },
          { text: '13 线性与非线性元件伏安特性的测量', link: '/13/README' },
          { text: '14 测量螺线管的磁场', link: '/14/README' },
          { text: '15 液体黏度的测定', link: '/15/README' },
          { text: '16 液体表面张力系数的测定', link: '/16/README' },
          { text: '17 密立根油滴实验-2025', link: '/17/README' },
          { text: '18 切变模量的测量-2025', link: '/18/README' },
          { text: '19 固体杨氏模量讲义2025', link: '/19/README' },
          { text: '20 直线运动规律的研究2025', link: '/20/README' },
          { text: '21 时间测量中随机误差的分布规律', link: '/21/README' },
          { text: '22 单摆的设计与研究实验', link: '/22/README' },
          // 可在此处继续添加具体实验
        ]
      },
      {
        text: '计算器',
        items: [
          // { text: '01 热敏电阻温度特性研究实验', link: '/01/calculator' },
          // { text: '02 热电偶特性（25年春季）', link: '/02/calculator' },
          // { text: '03 示波器原理与交流信号测量', link: '/03/calculator' },
          // { text: '04 声速的测量', link: '/04/calculator' },
          // { text: '05 透镜参数的测量', link: '/05/calculator' },
          // { text: '06 光电效应法测普朗克常量', link: '/06/calculator' },
          // { text: '07 分光计的调整与使用', link: '/07/calculator' },
          // { text: '08 干涉法测几何量-2025', link: '/08/calculator' },
          // { text: '09 氢氘光谱实验', link: '/09/calculator' },
          // { text: '10 迈克耳逊干涉仪-2025', link: '/10/calculator' },
          // { text: '11 脉搏语音及图像的傅里叶分析', link: '/11/calculator' },
          // { text: '12 空气比热容比', link: '/12/calculator' },
          // { text: '13 线性与非线性元件伏安特性的测量', link: '/13/calculator' },
          // { text: '14 测量螺线管的磁场', link: '/14/calculator' },
          // { text: '15 液体黏度的测定', link: '/15/calculator' },
          // { text: '16 液体表面张力系数的测定', link: '/16/calculator' },
          // { text: '17 密立根油滴实验-2025', link: '/17/calculator' },
          // { text: '18 切变模量的测量-2025', link: '/18/calculator' },
          { text: '19 固体杨氏模量讲义2025', link: '/19/calculator' },
          // { text: '20 直线运动规律的研究2025', link: '/20/calculator' },
          { text: '21 时间测量中随机误差的分布规律', link: '/21/calculator' },
          { text: '22 单摆的设计与研究实验', link: '/22/calculator' },
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
      { icon: 'github', link: 'https://github.com/dark-but-spark/SUSTech-PHY104B-Yellow-Pages' }
    ]
  }
})
