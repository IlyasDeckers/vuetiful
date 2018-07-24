import isEmpty from './is-empty'

describe('./is-empty', () => {
  it('is a function', () => {
    expect(typeof isEmpty).toBe('function')
  })

  it('is an empty array', () => {
    expect(isEmpty([])).toEqual(true)
  })

  it('is an empty object', () => {
    expect(isEmpty({})).toEqual(true)
  })

  it('is an empty string', () => {
    expect(isEmpty('')).toEqual(true)
  })

  it('is not an empty string', () => {
    expect(isEmpty('string')).toEqual(false)
  })

  it('is not an empty array', () => {
    expect(isEmpty([ '0' ])).toEqual(false)
  })

  it('is not an empty object', () => {
    expect(isEmpty({ id: 0 })).toEqual(false)
  })

  it('throws an error', () => {
    try {
      isEmpty(1235.2)
    } catch (e) {
      expect(e.message).toBe('Val must be a string, array or object')
    }

  })

})
