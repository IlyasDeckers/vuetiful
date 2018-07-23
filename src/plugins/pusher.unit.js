/* eslint-disable */
import Vue from 'vue'
import { createLocalVue } from 'vue-test-utils'
import * as pusher from './pusher'

process.env.PUSHER = {
  ENABLED: true,
  KEY: '"your-key"',
  CLUSTER: '"eu"'
}

describe('./pusher', () => {
  describe('initializes Pusher', () => {
    const localVue = createLocalVue()
    localVue.use(pusher)

    it('Installs pusher when not enabled', () => {
      expect(localVue.prototype.$pusher).toEqual({
        error: 'Pusher not enabled. Set the ENABLED variable to true in your config to enable pusher.'
      })
    })

    it('Installs pusher when not enabled', () => {
      const localVue = createLocalVue()
      localVue.use(pusher)
      expect(localVue.prototype.$pusher).toEqual({
        error: 'Pusher not enabled. Set the ENABLED variable to true in your config to enable pusher.'
      })
    })
  })


})