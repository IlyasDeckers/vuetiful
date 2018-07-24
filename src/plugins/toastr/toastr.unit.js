import { createLocalVue } from 'vue-test-utils'
import * as toastr from './toastr'

describe('./pusher', () => {
  const localVue = createLocalVue()
  localVue.use(toastr)

  describe('Toastr', () => {
    it('is an object', () => {
      expect(typeof localVue.prototype.$toastr)
        .toBe('object')
    })
  })

  describe('Create notifications', () => {
    it('Produces a success notification', () => {
      expect(localVue.prototype.$toastr.s('success')['msg'])
        .toEqual('success')
    })

    it('Produces an error notification', () => {
      expect(localVue.prototype.$toastr.s('error')['msg'])
        .toEqual('error')
    })

    it('Produces a warning notification', () => {
      expect(localVue.prototype.$toastr.w('warning')['type'])
        .toEqual('warning')
    })

    it('Produces a info notification', () => {
      expect(localVue.prototype.$toastr.i('info')['msg'])
        .toEqual('info')
    })
  })

  describe('Tests parameters', () => {
    it('Runs without timeout', () => {
      expect(localVue.prototype.$toastr.i({
        msg: 'No Timeout',
        timeout: 0
      })['timeout']).toEqual(0)
    })

    it('Closes on hover', () => {
      expect(localVue.prototype.$toastr.i({
        msg: 'No Timeout',
        closeOnHover: true
      })['closeOnHover']).toEqual(true)
    })

  })
})
