import Vue from 'vue'

export class Bus {
  constructor () {
    this.emitter = new Vue({})
  }

  emit (event, args) {
    this.emitter.$emit(event, args)
  }

  on (event, callback) {
    this.emitter.$on(event, callback)
  }

  off (event, callback) {
    this.emitter.$off(event, callback)
  }
}

export function install (Vue) {
  // Vue.prototype.$bus = new Bus()
}
