
const path = require('path')
const { resolve } = require('path')
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt2Webstite',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
    // 使Vue Component 與 Page 可以使用tailwind @apply 指令
    '~/assets/css/tailwind.css',
    // import elemnt UI
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //  { src: '~/plugins/icons.js', ssr: true }
    // '@/plugins/svg-icon' //注册插件文件
    // import elemnt UI (in plugins folder)
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/fontawesome',
    '@nuxtjs/svg'
  ],
  fontawesome: {
     component: 'Fa',
     suffix: false,
     icons: {
       solid: true,
       brands: true,
     },
 },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
     scss: {
        implementation: require('sass'),
      },
    },
  }
}
