import isFLoat from './is-float'

describe('./is-float', () => {
  it('is a function', () => {
    expect(typeof isFLoat).toBe('function')
  })

  it('is float', () => {
    expect(isFLoat(123.2)).toEqual(true)
  })

  it('is not a float', () => {
    expect(isFLoat(1232)).toEqual(false)
  })
})
