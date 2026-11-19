import { configure } from 'quasar/wrappers'

export default configure((/* ctx */) => {
  return {
    boot: [],

    css: [
      'app.scss'
    ],

    extras: [
      'material-icons',
      'mdi-v7'
    ],

    build: {
      target: { browser: ['es2022', 'firefox115', 'chrome115', 'safari14'] },
      vueRouterMode: 'hash',
      publicPath: '/TyraArends.github.io/',
      vitePlugins: []
    },

    devServer: {
      open: true,
      // Avoid clash with another process often bound to 127.0.0.1:9000 (e.g. Python),
      // which makes http://localhost:9000/ return ERR_INVALID_HTTP_RESPONSE in the browser.
      port: 9100,
      strictPort: false
    },

    framework: {
      config: {
        dark: false,
        brand: {
          primary: '#426F8C',      // Ocean blue
          secondary: '#D69AA6',    // Dusty pink
          accent: '#8EADBF',       // Soft blue
          dark: '#173B57',         // Deep navy
          'dark-page': '#FAF7F5',  // Warm ivory
          positive: '#426F8C',
          negative: '#C77991',
          info: '#8EADBF',
          warning: '#D69AA6'
        }
        }
      },
      plugins: ['Dialog', 'Scroll']
    },

    animations: 'all',

    ssr: { pwa: false },

    pwa: {
      workboxMode: 'GenerateSW'
    }
  }
})
