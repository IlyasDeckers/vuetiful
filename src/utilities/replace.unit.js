/* eslint-disable */
import replace from './replace'

describe('./replace', () => {
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
    expect(typeof replace).toBe('function')
  })

  it('removes an item from an array', () => {
    const toReplace = {
      id: 2,
      name: 'janeUpdated'
    }

    const result = replace(myArray, toReplace)
    expect(myArray).toEqual([{"id": 1, "name": "john"}, {"id": 2, "name": "janeUpdated"}, {"id": 3, "name": "ilyas"}])
    expect(result).toEqual([{"id": 2, "name": "jane"}])
  })
})
