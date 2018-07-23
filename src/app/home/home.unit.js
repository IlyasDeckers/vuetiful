/* eslint-disable */
import home from './Home'

describe('@/app/home', () => {
  it('has a created hook', () => {
    expect(typeof home.created).toBe('function')
  })
})
