---
to: 'src/app/index.js'
inject: true
after: 'const routes = \['
skip_if: '...<%= h.inflection.dasherize(folder) %>,'
eof_last: false
---
  ...<%= h.inflection.dasherize(folder) %>,
