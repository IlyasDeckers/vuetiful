/* eslint-disable */
import Home from './Home'

describe('@/app/home', () => {
  it('is a valid view', () => {
    expect(Home).toBeAViewComponent()
  })

  it('has a mounted hook', () => {
    expect(typeof Home.mounted).toBe('function')
  })
})
