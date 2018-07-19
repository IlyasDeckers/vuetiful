---
to: "src/app/<%= h.inflection.dasherize(folder).toLowerCase() %>/index.js"
eof_last: false
unless_exists: true
---
const <%= h.inflection.dasherize(name) %> = () => import(/* webpackChunkName: "views-<%= h.inflection.dasherize(folder) %>" */ './<%= h.inflection.dasherize(name) %>.vue')

/* eslint-disable */
export const routes = [
  {
    path: '/<%= h.inflection.dasherize(folder) %>',
    component: <%= h.inflection.dasherize(name) %>,
    meta: { auth: false }
  },
]
