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

## Filters

### json()

### lowercase()

### uppercase()

### hide()
```js
{{ 'random text' | hide('text') }}
```

Returns:
```
'random'
```

### boolean()

### initials()
```js
{{ 'Ilyas Deckers' | initials() }}
```

Returns:
```
'ID'
```

### truncate()
```js
{{ 'Some long string, with random text' | truncate(15, '...') }}
```

Returns:
```
'Some long strin...'
```

### currency
```js
{{ 1500.45563256 | currency(2) }}
```

Returns:
```
€1,500.45
```

### number
```js
{{ 150435.45546 | number(3) }}
```

Returns:
```
150,435.455
```


