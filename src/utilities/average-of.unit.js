import averageOf from './average-of'

describe('./compare', () => {
  it('is a function', () => {
    expect(typeof averageOf).toBe('function')
  })

  it('gets the average of', () => {
    expect(averageOf(['123', '124', '136'])).toEqual(127.66666666666667)
  })
})
