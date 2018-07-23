import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'
import { sync } from 'vuex-router-sync'

import '@/plugins'
import '@/components'

sync(store, router)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// Global event bus
Object.defineProperty(Vue.prototype, '$bus', {
  get () {
    return this.$root.bus
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bus: new Vue({})
  },
  router,
  store,
  render: h => h(App)
})
