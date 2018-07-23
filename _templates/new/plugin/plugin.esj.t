---
to: "src/plugins/<%= h.inflection.dasherize(name).toLowerCase() %>.js"
eof_last: false
---
export function install (Vue) {
  Vue.prototype.$<%= h.inflection.dasherize(name).substr(name.lastIndexOf('/') + 1 ).toLowerCase() %> = {}
}
