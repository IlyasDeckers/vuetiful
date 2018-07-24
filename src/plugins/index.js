import Vue from 'vue'

const requireModule = require.context('.', true, /^((?!\.unit\.).)*\.js$/)
requireModule.keys().forEach(fileName => {
  // Skip this file, as it's not a plugin
  if (fileName === './index.js') return

  const pluginName = fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')

  const plugin = require('./' + pluginName)
  Vue.use(plugin.install)
})

export { default as http } from './http'
