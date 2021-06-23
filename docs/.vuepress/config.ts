import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  bundler: '@vuepress/vite',
  bundlerConfig: {},
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-3ZMM7QYSWH'
      }
    ]
  ],
  lang: 'zh-CN',
  title: '菜园子',
  description: '园子里有一些菜',
  head: [['link', { rel: 'icon', href: '/images/cabbage-dog-removebg.png' }]],
  markdown: {
    importCode: {
      // handleImportPath: (str) =>
      //   str.replace(/^@src/, path.resolve(__dirname, 'path/to/src'))
    }
  },
  themeConfig: {
    navbar: [
      { text: '关于生活', link: '/life/' },
      { text: '关于技术', link: '/tech/' }
    ],
    sidebar: {
      '/tech/': [
        {
          isGroup: true,
          text: '面试基础',
          children: ['/tech/interview-js.md']
        }
      ]
    },
    logo: '/images/cabbage-dog-removebg.png',
    darkMode: true,
    repo: 'cabbage9/cabbage-garden',
    repoLabel: 'GitHub'
  }
})
