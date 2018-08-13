const Home = () => import(/* webpackChunkName: "views-home" */ './Home.vue')

export const routes = [
  {
    path: '/',
    component: Home,
    meta: { auth: false }
  }
]
