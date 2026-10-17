import { defineConfig } from 'vitepress'
import { set_sidebar } from "../.vitepress/utils/auto_sidebar.mjs"; // 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs-demo/',
  head: [["link", { rel: "icon", href: "/logo.png" }]], //美化地址栏icon
  title: "我的博客项目",
  description: "A VitePress Site",
  themeConfig: {
    outline: { // 右侧大纲
      level: [2, 6],
      label: "目录",
      expand: true,
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      // { text: '首页', items: [
      //   { text: '首页', link: '/' },
      //   { text: 'Markdown示例', link: '/markdown-examples' },
      // ] },
      // { text: '示例', link: '/markdown-examples' },
      { text: 'Python', link: '/backend/python/' },
      { text: 'Android', link: '/frontend/android/' },
      { text: '其它', link: '/other/' },
      
      //  { text: '首页', link: '/' },
      // { text: '两边栏演示', link: '/两边栏演示' },
       

      //   { text: 'Python', items: [
      //   { text: 'Python基础', link: '/backend/python/基础' },
      //   { text: 'PythonWeb', link: '/backend/python/pythonWeb' },
      //   { text: 'AI大模型', link: '/backend/python/AIAgent' },
      //   { text: '爬虫', link: '/backend/python/' },
      // ] },
      //   { text: 'Android', items: [
      //   { text: 'FrameWork', link: '/frontend/android/framework' },
      //   { text: '性能优化', link: '/frontend/android/性能优化' },
      //   { text: '协程', link: '/frontend/android/协程' },
      //   { text: '框架', link: '/frontend/android/' },
      //   // { text: 'Jetpack', link: '/frontend/android/jetpack/' },
      //   { text: 'Jetpack', items: [
      //     { text: 'compose', link: '/frontend/android/jetpack/compose/' },
      //     { text: 'Jetpack组件', link: '/frontend/android/jetpack' },
      //   ] },
      //   { text: '基础', link: '/frontend/android/基础/' },
      // ] },
      
    ],
    // 三栏
    // sidebar: { 
    //   "/frontend/android/": set_sidebar("frontend/android"),
    //   "/backend/python/": set_sidebar("backend/python"),
    // },
    // 两栏
    sidebar: false, // 关闭默认侧边栏
    aside:"left", // 右侧边栏在左侧显示
socialLinks: [
  { icon: 'github', link: 'https://github.com/lixiaodong1222' },
  {
    icon: {
      svg: `<svg t="1791595097159" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20454" width="32" height="32"><path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" fill="#C71D23" p-id="20455"></path></svg>`
    },
    link: 'https://gitee.com/lixiaodong93'
  }
],
    // 底部配置
    footer: {
      copyright: 'Copyright © 2024 My Awesome Project'
    },
     // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
 
})

