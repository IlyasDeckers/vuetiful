/* eslint-disable */
import filter from './filter'

describe('./varianceOf', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function')
  })

  describe('filter arrays', () => {
    it('filters list', () => {
      const arr = [
        '15464', '2456', '36546545', '568854', '46655'
      ]

      expect(filter(arr, '2456')).toEqual(["2456"])
    })

    it('filters an array', () => {
      const arr = {
        id: 2,
        name: 'John',
        foo: 'bar'
      }

      expect(filter(arr, {foo: 'bar'})).toEqual([{"foo": "bar", "id": 2, "name": "John"}]
    )
    })

    it('filters an array of objects', () => {
      const arr = [
        {
          id: 2,
          name: 'jane'
        },
        {
          id: 3,
          name: 'ilyas'
        }
      ]

      expect(filter(arr, {
        id: 2,
        name: 'jane'
      })).toEqual([{"id": 2, "name": "jane"}])
    })

    it('filters an array of objects', () => {
      const arr = [
        {
          id: 2,
          name: 'jane'
        },
        {
          id: 3,
          name: 'ilyas'
        }
      ]

      expect(filter(arr, {name: 'ilyas'})).toEqual([{"id": 3, "name": "ilyas"}])
    })
  })
})
