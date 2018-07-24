/* eslint-disable */
import exists from './exists'

describe('./exists', () => {
  it('is a function', () => {
    expect(typeof exists).toBe('function')
  })

  it('string exists', () => {
    var str = '123'
    expect(exists(123)).toEqual(true)
  })
})
