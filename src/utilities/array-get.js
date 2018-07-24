export default function arrayGet (obj, str) {
  return str.split('.').reduce((o, x) => o[x], obj)
}
