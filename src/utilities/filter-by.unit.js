/* eslint-disable */
import filterBy from './filter-by'

describe('./filter-by', () => {
  it('is a function', () => {
    expect(typeof filterBy).toBe('function')
  })

  const arr =[
    {
      id: 2,
      name: 'jane',
      state: true
    },
    {
      id: 3,
      name: 'ilyas'
    }
  ]

  it('number', () => {
    expect(filterBy(arr, '3')).toEqual([ { id: 3, name: 'ilyas' } ])
  })

  it('string', () => {
    expect(filterBy(arr, 'ilyas')).toEqual([ { id: 3, name: 'ilyas' } ])
  })

  it('boolean', () => {
    expect(filterBy(arr, 'true')).toEqual([{"id": 2, "name": "jane", "state": true}])
  })
})
