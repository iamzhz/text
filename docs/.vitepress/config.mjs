import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "the thing",
  description: "一个代替臃肿的美篇的东西",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '寒假生活', link: '/winter'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iamzhz' }
    ]
  }
})
