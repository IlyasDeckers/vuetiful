import isArray from './is-array'
import isObject from './is-object'

export default function search (haystack, needle) {
  if (isArray(haystack)) {
    return haystack.filter(x => search(x, needle))
  } else if (isObject(haystack)) {
    return Object.keys(haystack).some(key => {
      if (isObject(haystack[key])) {
        return search(haystack[key], needle)
      }

      return String(haystack[key])
        .toLowerCase()
        .includes(String(needle).toLowerCase())
    })
  }
  return []
}
