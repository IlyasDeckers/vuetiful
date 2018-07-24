import isString from './is-string'
import isObject from './is-object'
import isArray from './is-array'

export default function isEmpty (val) {
  if (isString(val) || isArray(val)) {
    return val.length === 0
  } else if (isObject(val)) {
    for (const name in val) {
      if (val.hasOwnProperty(name)) {
        return false
      }
    }
    return true
  }
  throw new TypeError('Val must be a string, array or object');
}
