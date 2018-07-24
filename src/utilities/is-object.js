import exists from './exists'
import isArray from './is-array'

export default function isObject (val) {
  return (
    typeof val === 'object' &&
    exists(val) &&
    !isArray(val) &&
    !(val instanceof RegExp) &&
    !(val instanceof String) &&
    !(val instanceof Number)
  )
}
