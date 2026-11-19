// Updated Quasar configuration
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
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14']
      },
      vueRouterMode: 'hash',
      publicPath: '/TyraArends.github.io/',
      vitePlugins: []
    },

    devServer: {
      open: true,
      port: 9100,
      strictPort: false
    },

    framework: {
      config: {
        dark: false,
        brand: {
          primary: '#426F8C',
          secondary: '#D69AA6',
          accent: '#8EADBF',
          dark: '#173B57',
          'dark-page': '#FAF7F5',
          positive: '#426F8C',
          negative: '#C77991',
          info: '#8EADBF',
          warning: '#D69AA6'
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
