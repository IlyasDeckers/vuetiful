export default function compare (x, y, reverse = false) {
  let comparison = 0

  if (x > y) {
    comparison = 1
  } else if (x < y) {
    comparison = -1
  }
  return reverse ? comparison * -1 : comparison
}
