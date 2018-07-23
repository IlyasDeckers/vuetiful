/* eslint-disable */
import * as authModule from './auth'

describe('./auth', () => {
  describe('in a store', () => {
    let store
    beforeEach(() => {
      store = createModuleStore(authModule)
      window.localStorage.clear()
    })

    it('actions.login sets the loged in user object and authenticated', () => {
      store.dispatch('login', user)
      expect(store.state.user).toEqual(user)
      expect(store.state.authenticated).toEqual(true)
    })

    it('actions.logout sets the loged in user object and authenticated to null', () => {
      store.dispatch('logout')
      expect(store.state.user).toEqual(null)
      expect(store.state.authenticated).toEqual(false)
      expect(store.state.ready).toEqual(false)
    })

    it('actions.logout sets the loged in user object and authenticated to null', () => {
      store.dispatch('ready')
      expect(store.state.ready).toEqual(true)
    })
  })
})

const user = {
  name: 'John Doe',
  email: 'john@doe.com'
}
