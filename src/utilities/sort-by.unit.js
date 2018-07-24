/* eslint-disable */
import sortBy from './sort-by'

describe('./sortBy', () => {
  const arr = [
    'arr', 'test', 'wheeee'
  ]

  it('is a function', () => {
    expect(typeof sortBy).toBe('function')
  })

  it('sorts an array', () => {
    expect(sortBy(arr, sortBy, 1)).toEqual(["arr", "wheeee", "test"])
  })

  it('reverse sorts an array', () => {
    expect(sortBy(arr, sortBy, -1)).toEqual([ 'test', 'wheeee', 'arr' ])
  })
})
