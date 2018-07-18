# Reference

## Utilities
```js
import { utilityName } from './utilities'
```

### replace()
Replaces an item from an array.

* Type: `Array`

Example:
```js
import { replace } from './utilities'

let users = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Jane'
  }
]

user = replace(users, {
  id: 2,
  name: 'Joe'
})

console.log(user)
```
Returns
```json
[
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Joe'
  }
]
```

### remove()
Remove an item from an array.

Example:
```js
import { remove } from './utilities'

let users = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Jane'
  }
]

user = replace(users, {
  id: 2,
  name: 'Jane'
})

console.log(user)
```
Returns
```json
[
  {
    id: 1,
    name: 'John'
  }
]
```
### compare()
WIP

### array_get()
WIP
### orderBy()
WIP
### flatten()
WIP
### groupBy()
WIP
### filter()
WIP
### search()
WIP
### isString()
WIP
### isFunction()
WIP
### isArray()
WIP
### isInteger()
WIP
### isFloat()
WIP
### isEmpty()
WIP
### exists()
WIP
### sum()
WIP
