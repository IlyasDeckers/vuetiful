import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import filters from 'vuetiful-filters'

import '@/plugins'
import '@/components'

Vue.use(filters)

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
