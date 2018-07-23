import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-pro-solid'
import light from '@fortawesome/fontawesome-pro-light'
import regular from '@fortawesome/fontawesome-pro-regular'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import brands from '@fortawesome/fontawesome-free-brands'

import moduleName from '@/utilities/module-name'

(!process.env.FA_PRO)
  ? fontawesome.library.add(fas, far, brands) // Free icons
  : fontawesome.library.add(solid, light, brands, regular) // Pro icons

const requireModule = require.context('.', true, /^((?!\.unit\.).)*\.js$/)
requireModule.keys().forEach(fileName => {
  // Skip this file, as it's not a plugin
  if (fileName === './index.js') return

  const pluginName = moduleName(fileName)
  const plugin = require('./' + pluginName)
  Vue.use(plugin.install)
})

export { default as http } from './http'
