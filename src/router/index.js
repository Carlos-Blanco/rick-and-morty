import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/characters',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "Characters" */ '../views/Characters.vue')
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
