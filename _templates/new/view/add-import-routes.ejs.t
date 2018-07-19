---
to: 'src/app/<%= h.inflection.dasherize(folder) %>/index.js'
inject: true
before: "import"
eof_last: false
skip_if: const <%= h.inflection.dasherize(name) %> =
---
const <%= h.inflection.dasherize(name) %> = () => import(/* webpackChunkName: 'views-<%= h.inflection.dasherize(folder) %>' */ './<%= h.inflection.dasherize(name) %>.vue')
