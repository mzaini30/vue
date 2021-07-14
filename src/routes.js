function index() {
  return import(/* webpackChunkName: "index" */ '/src/pages/index.vue')
}

export default [
  {
    name: 'index',
    path: '/',
    component: index,
  },
]
