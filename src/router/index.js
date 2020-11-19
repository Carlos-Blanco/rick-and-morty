import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Characters',
    component: Home
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import(/* webpackChunkName: "Locations" */ '../views/Locations.vue')
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: () => import(/* webpackChunkName: "Episodes" */ '../views/Episodes.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
