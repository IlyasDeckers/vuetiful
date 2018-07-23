import Vue from 'vue'
import moduleName from '@/utilities/module-name'

const requireModule = require.context('.', true, /^((?!\.unit\.).)*\.js$/)
requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') return

  const filterName = moduleName(fileName)
  const filter = require('./' + filterName)

  Vue.filter(filterName, filter[filterName])
})
