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
        text: '小实验',
        items: [
          { text: '实验报告模板', link: '/templates' },
          { text: '01 热敏电阻温度特性研究实验', link: '/01 热敏电阻温度特性研究实验/README' },
          { text: '02 热电偶特性（25年春季）', link: '/02 热电偶特性（25年春季）/README' },
          { text: '03 示波器原理与交流信号测量', link: '/03 示波器原理与交流信号测量/README' },
          { text: '04 声速的测量', link: '/04 声速的测量/README' },
          { text: '05 透镜参数的测量', link: '/05 透镜参数的测量/README' },
          { text: '06 光电效应法测普朗克常量', link: '/06 光电效应法测普朗克常量/README' },
          { text: '07 分光计的调整与使用', link: '/07 分光计的调整与使用/README' },
          { text: '08 干涉法测几何量-2025', link: '/08 干涉法测几何量-2025/README' },
          { text: '09 氢氘光谱实验', link: '/09 氢氘光谱实验/README' },
          { text: '10 迈克耳逊干涉仪-2025', link: '/10 迈克耳逊干涉仪-2025/README' },
          { text: '11 脉搏语音及图像的傅里叶分析', link: '/11 脉搏语音及图像的傅里叶分析/README' },
          { text: '12 空气比热容比', link: '/12 空气比热容比/README' },
          { text: '13 线性与非线性元件伏安特性的测量', link: '/13 线性与非线性元件伏安特性的测量/README' },
          { text: '14 测量螺线管的磁场', link: '/14 测量螺线管的磁场/README' },
          { text: '15 液体黏度的测定', link: '/15 液体黏度的测定/README' },
          { text: '16 液体表面张力系数的测定', link: '/16 液体表面张力系数的测定/README' },
          { text: '17 密立根油滴实验-2025', link: '/17 密立根油滴实验-2025/README' },
          { text: '18 切变模量的测量-2025', link: '/18 切变模量的测量-2025/README' },
          { text: '19 固体杨氏模量讲义2025', link: '/19 固体杨氏模量讲义2025/README' },
          { text: '20 直线运动规律的研究2025', link: '/20 直线运动规律的研究2025/README' },
          { text: '21 时间测量中随机误差的分布规律', link: '/21 时间测量中随机误差的分布规律/README' },
          { text: '22 单摆的设计与研究实验', link: '/22 单摆的设计与研究实验/README' },
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
