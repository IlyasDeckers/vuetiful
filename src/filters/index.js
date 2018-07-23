export function json (value) {
  return typeof value === 'string'
    ? value
    : JSON.stringify(value, null, arguments.length > 1 ? 2 : 2)
}

export function lowercase (value) {
  return value || value === 0 ? value.toString().toLowerCase() : ''
}

export function uppercase (value) {
  return value || value === 0 ? value.toString().toUpperCase() : ''
}

export function hide (value, pattern) {
  return value || value === 0 ? value.toString().replace(pattern, '') : ''
}

export function boolean (value, truthy, falsy) {
  return value || value === true ? truthy : falsy
}

export function initials (value) {
  let initials = ''
  let parts = value.split(/[ -]/)
  for (var i = 0; i < parts.length; i++) {
    initials += parts[i].charAt(0)
  }
  if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
    initials = initials.replace(/[a-z]+/g, '')
  }
  initials = initials.substr(0, 3).toUpperCase()
  return initials
}

export function truncate (text, length, clamp) {
  clamp = clamp || '...'
  let node = document.createElement('div')
  node.innerHTML = text
  let content = node.textContent
  return content.length > length ? content.slice(0, length) + clamp : content
}

export function currency (value, decimals) {
  return Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'symbol',
    minimumFractionDigits: decimals,
    maximumFractionDigit: decimals,
  }).format(value)
}

export function number (value, decimals) {
  return Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}
