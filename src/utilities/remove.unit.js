/* eslint-disable */
import remove from './remove'

describe('./remove', () => {
  const myArray = [
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
    expect(typeof remove).toBe('function')
  })

  it('removes an item from an array', () => {
    const toRemove = {
      id: 2,
      name: 'jane'
    }

    const result = remove(myArray, toRemove)
    expect(myArray).toEqual([{"id": 1, "name": "john"}, {"id": 3, "name": "ilyas"}])
    expect(result).toEqual([toRemove])
  })
})
