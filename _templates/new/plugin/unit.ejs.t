---
to: "src/plugins/<%= h.inflection.dasherize(name) %>.unit.js"
---
<%
  const fileName = h.inflection.dasherize(name)
  const noPath = fileName.substr(fileName.lastIndexOf('/') + 1 )
  const importName = h.inflection.camelize(noPath.replace(/-/g, '_'))
%>import * as <%= noPath %> from './<%= noPath %>'
import { createLocalVue } from 'vue-test-utils'

describe('@plugins/<%= fileName %>', () => {
  const localVue = createLocalVue()
  localVue.use(<%= noPath %>)

  describe('Init', () => {
    it('is an object', () => {
      expect(typeof localVue.prototype.$<%= noPath %>)
        .toBe('object')
    })
  })
})
