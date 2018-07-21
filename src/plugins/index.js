import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-pro-solid'
import light from '@fortawesome/fontawesome-pro-light'
import regular from '@fortawesome/fontawesome-pro-regular'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import brands from '@fortawesome/fontawesome-free-brands'

(!process.env.FA_PRO)
  ? fontawesome.library.add(fas, far, brands) // Free icons
  : fontawesome.library.add(solid, light, brands, regular) // Pro icons

const requireModule = require.context('.', true, /^((?!\.unit\.).)*\.js$/)
requireModule.keys().forEach(fileName => {
  // Skip this file, as it's not a plugin
  if (fileName === './index.js') return

  // Fomat the plugin name from fileName
  const pluginName = fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')

  // Require the plugin
  const plugin = require('./' + pluginName)
  Vue.use(plugin.install)

  if (plugin.default) {
    // export default (?)
  }
})

export { default as http } from './http'
