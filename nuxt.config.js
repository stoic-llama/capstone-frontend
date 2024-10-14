export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'capstone-frontend',
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
      // Find free favicon here
      // https://www.iconsdb.com/deep-pink-icons/bottle-icon.html#custom_size
      // Drop the free favicon in this website to generate all sizes and html code
      // https://favicon.io/favicon-converter/
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    `~/assets/custom.scss`,
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/bootstrap.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Envionrment Variables
  // https://nuxtjs.org/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config/
  publicRuntimeConfig: {
    baseURL: process.env.API_BASE_URL,
    authURL: process.env.API_AUTH_URL,
  },
  privateRuntimeConfig: {
    // apiSecret: process.env.API_SECRET
  },

  // NOTE: Make sure to manually copy paste the server middleware folder when deploy to cloud
  // https://github.com/nuxt/nuxt/issues/9158#issuecomment-820676790
  serverMiddleware: [
    '~/serverMiddleware/healthcheck',
  ],
  

}
