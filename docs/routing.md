# routing
Routes can be defined per page/component in your app folder. If we take a look at the file structure of the app folder we can see the following.
```js
- src
|  - app
|  |  - Home
|  |  | - components
|  |  |   - Links.vue
|  |  | - home.vue
|  |---- index.js // Your page/component routes
|-- index.js // Register your exported routes here
```

> ***Tip:*** When running `npm run new view` routes get configured and registered automatically.

Routes are registered in the `index.js` file of your page folder. If we take a look at this file we see that it contains the routes for that folder and that we apply a `webpackChunkName`. It is more efficient if we split each route's components into a separate chunk, and only load them when the route is visited. This is called [lazy loading](https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk).

```js
// src/app/home/routes.js
const Home = () => import(/* webpackChunkName: "pages-home" */ './Home.vue')

export const routes = [
  {
    path: '/',
    component: Home,
    meta: { auth: false }
  }
]
```
In our `index.js` file in the app folder we load the routes we defined.

```js
// src/app/index.js
import { routes as home } from './home'

export const routes = [
  ...home
]
```
