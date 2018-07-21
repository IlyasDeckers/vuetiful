import Toast from './components/Toast'

export function install (Vue) {
  let MyComponent = Vue.extend({
    render: function (createElement) {
      return createElement(
        'vue-toastr',
        {ref: 'vueToastr'}
      )
    },
    components: {
      'vue-toastr': Toast
    }
  })
  var component = new MyComponent().$mount()
  document.body.appendChild(component.$el)
  Vue.prototype.$toastr = component.$refs.vueToastr
}
