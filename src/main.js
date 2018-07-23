import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

import '@/plugins'
import '@/filters'
import '@/components'

sync(store, router)

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
