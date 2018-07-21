import merge from './merge'

const replace = function replace (array, item) {
  const id = array.findIndex(x => x.id === item.id)
  const data = array[id]
  return array.splice(id, 1, merge(data, item))
}

export default replace
