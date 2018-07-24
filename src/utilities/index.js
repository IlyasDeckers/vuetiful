/* eslint-disable */
import './array/array'

export { default as merge } from './merge';
export { default as replace } from './replace';
export { default as remove } from './remove';
export { default as compare } from './compare';


export function flatten(list) {
  return Array.prototype.concat(...list);
}

export function search(haystack, needle) {
  if (isArray(haystack)) {
    return haystack.filter(x => search(x, needle));
  } else if (isObject(haystack)) {
    return Object.keys(haystack).some(key => {
      if (isObject(haystack[key])) {
        return search(haystack[key], needle);
      }

      return String(haystack[key])
        .toLowerCase()
        .includes(String(needle).toLowerCase());
    });
  }
  return [];
}

export function exists(val) {
  return val !== undefined && val !== null;
}

export function sum(array, key) {
  return array.map(x => x[key]).reduce((x, y) => x + y, 0);
}
