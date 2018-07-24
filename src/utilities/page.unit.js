/* eslint-disable */
import page from './page'

describe('./page', () => {
  const myArray = new Array("image000_tn.jpg", "image001_tn.jpg", "image002_tn.jpg", "image003_tn.jpg", "image004_tn.jpg", "image005_tn.jpg", "image006_tn.jpg", "image007_tn.jpg", "image008_tn.jpg", "image009_tn.jpg", "image010_tn.jpg", "image011_tn.jpg", "image012_tn.jpg", "image013_tn.jpg", "image014_tn.jpg", "image015_tn.jpg", "image016_tn.jpg", "image017_tn.jpg", "image018_tn.jpg", "image019_tn.jpg", "image020_tn.jpg", "image021_tn.jpg", "image022_tn.jpg", "image023_tn.jpg", "image024_tn.jpg")
  it('is a function', () => {
    expect(typeof page).toBe('function')
  })

  describe('splits an array', () => {
    it('in two pages', () => {
      const result = page(myArray, 2)
      expect(result).toEqual([["image000_tn.jpg", "image001_tn.jpg"], ["image002_tn.jpg", "image003_tn.jpg"], ["image004_tn.jpg", "image005_tn.jpg"], ["image006_tn.jpg", "image007_tn.jpg"], ["image008_tn.jpg", "image009_tn.jpg"], ["image010_tn.jpg", "image011_tn.jpg"], ["image012_tn.jpg", "image013_tn.jpg"], ["image014_tn.jpg", "image015_tn.jpg"], ["image016_tn.jpg", "image017_tn.jpg"], ["image018_tn.jpg", "image019_tn.jpg"], ["image020_tn.jpg", "image021_tn.jpg"], ["image022_tn.jpg", "image023_tn.jpg"], ["image024_tn.jpg"]])
    })

    it('in three pages', () => {
      const result = page(myArray, 3)
      expect(result).toEqual([["image000_tn.jpg", "image001_tn.jpg", "image002_tn.jpg"], ["image003_tn.jpg", "image004_tn.jpg", "image005_tn.jpg"], ["image006_tn.jpg", "image007_tn.jpg", "image008_tn.jpg"], ["image009_tn.jpg", "image010_tn.jpg", "image011_tn.jpg"], ["image012_tn.jpg", "image013_tn.jpg", "image014_tn.jpg"], ["image015_tn.jpg", "image016_tn.jpg", "image017_tn.jpg"], ["image018_tn.jpg", "image019_tn.jpg", "image020_tn.jpg"], ["image021_tn.jpg", "image022_tn.jpg", "image023_tn.jpg"], ["image024_tn.jpg"]])
    })
  })
})
