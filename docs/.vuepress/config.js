// docs/.vuepress/config.js
const { defineUserConfig } = require('vuepress')
const themeDefault = require('@vuepress/theme-default')
const { viteBundler } = require('@vuepress/bundler-vite')

module.exports = defineUserConfig({
  lang: 'en-US',
  title: 'QueensCo Wiki',
  description: 'My VuePress site on /docs',
  base: '/docs/',
  bundler: viteBundler(),
  theme: themeDefault.default({  // .default is necessary for CJS
    logo: 'https://vuejs.press/images/hero.png',
    navbar: ['/', '/get-started'],
  }),
})
