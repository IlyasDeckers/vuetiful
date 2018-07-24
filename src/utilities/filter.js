import isArray from './is-array'
import isEmpty from './is-empty'
import isString from './is-string'
import isFunction from './is-function'

export default function filter (array, filters) {
  let collection = [].concat(array)
  if (!isEmpty(filters)) {
    collection = collection.filter(obj => {
      return Object.keys(filters).every(propertyName => {
        if (filters[propertyName].length === 0) {
          return true
        } else if (
          isArray(filters[propertyName])
        ) {
          return filters[propertyName].includes(obj[propertyName])
        } else if (
          isString(filters[propertyName])
        ) {
          return obj[propertyName].toLowerCase().includes(filters[propertyName.toLowerCase()])
        } else if (isFunction(filter[propertyName])) {
          return filters[propertyName](obj[propertyName])
        } else {
          return filters[propertyName] === obj[propertyName]
        }
      })
    })
  }

  return collection
}
