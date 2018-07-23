import Vue from 'vue'

const requireModule = require.context('.', true, /^((?!\.unit\.).)*\.js$/)
requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') return
  const filterName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  const filter = require('./' + filterName)
  Vue.filter(filterName, filter[filterName])
})
