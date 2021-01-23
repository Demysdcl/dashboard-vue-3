import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

const createRoute = (name) => {
  return {
    path: `/${name.toLowerCase()}`,
    name,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../views/${name}/index.vue`),
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  createRoute('Feedbacks'),
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
