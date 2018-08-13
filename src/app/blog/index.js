const Posts = () => import(/* webpackChunkName: "views-blog" */ './Posts.vue')

/* eslint-disable */
export const routes = [
  {
    path: '/blog',
    component: Posts,
    meta: { auth: false }
  },
]
