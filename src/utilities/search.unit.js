/* eslint-disable */
import search from './search'

describe('./varianceOf', () => {
  const arr = [
    {
      id: 1,
      name: 'john'
    },
    {
      id: 2,
      name: 'jane'
    },
    {
      id: 3,
      name: 'ilyas'
    }
  ]
  it('is a function', () => {
    expect(typeof search).toBe('function')
  })

  describe('Searches', () => {
    it('Finds in an array', () => {
      const arr = [
        '123', '456', '789'
      ]
      // console.log(search(arr, ['123']))
    })
    it('Finds an object by the id', () => {
      expect(search(arr, 1)).toEqual([ { id: 1, name: 'john' } ])
    })

    it('Finds an object by a value', () => {
      expect(search(arr, 'john')).toEqual([ { id: 1, name: 'john' } ])
    })
  })
})
