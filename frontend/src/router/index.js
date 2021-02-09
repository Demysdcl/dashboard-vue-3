import Home from '@/views/Home'
import { createRouter, createWebHistory } from 'vue-router'

const createRoute = (name, hasAuth = true) => ({
  path: `/${name.toLowerCase()}`,
  name,
  meta: { hasAuth },
  component: () =>
    import(/* webpackChunkName: "[request]" */ `../views/${name}/index.vue`),
})

const views = () => ['Feedbacks', 'Credentials'].map(createRoute)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...views(),
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
