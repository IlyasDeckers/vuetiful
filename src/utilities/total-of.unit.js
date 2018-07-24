/* eslint-disable */
import totalOf from './total-of'

describe('./pageBy', () => {
  const arr = [
    '1', '2', '3'
  ]
  it('is a function', () => {
    expect(typeof totalOf).toBe('function')
  })

  it('calculates the sum of an array', () => {
    expect(totalOf(arr, totalOf)).toEqual(6)
  })
})
