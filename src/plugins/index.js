import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/pro-solid-svg-icons'
import light from '@fortawesome/pro-light-svg-icons'
import regular from '@fortawesome/pro-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import moduleName from '@/utilities/module-name'

(!process.env.FA_PRO)
  ? fontawesome.library.add(fas, far, fab) // Free icons
  : fontawesome.library.add(solid, light, fab, regular) // Pro icons

const requireModule = require.context('.', true, /^((?!\.unit\.).)*\.js$/)
requireModule.keys().forEach(fileName => {
  // Skip this file, as it's not a plugin
  if (fileName === './index.js') return

  const pluginName = moduleName(fileName)
  const plugin = require('./' + pluginName)
  Vue.use(plugin.install)
})

export { default as http } from './http'
