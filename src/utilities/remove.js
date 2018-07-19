export function remove (array, item) {
  const id = array.findIndex(x => x.id === item.id)
  return array.splice(id, 1)
}
