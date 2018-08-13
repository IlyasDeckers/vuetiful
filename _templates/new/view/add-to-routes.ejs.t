---
to: 'src/app/<%= h.inflection.dasherize(folder) %>/index.js'
inject: true
after: 'const routes = \['
eof_last: false
unless_exists: true
append: true
skip_if: import { routes as <%= h.inflection.dasherize(folder) %> } from './<%= h.inflection.dasherize(folder) %>'
---
  {
    path: '/<%= h.inflection.dasherize(folder) %>/<%= h.inflection.dasherize(name).toLowerCase() %>',
    component: <%= h.inflection.dasherize(name) %>,
    meta: { auth: false }
  },
