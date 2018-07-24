export default function isInteger (val) {
  if (isNaN(val)) {
    return false
  }
  let x = parseFloat(val)
  return (x | 0) === x
}
