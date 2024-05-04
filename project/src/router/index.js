import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'test',

      component: () => import('../views/TestView.vue')
    },
    {
      path: '/izera',
      name: 'izera',

      component: () => import('../views/IzeraView.vue')
    },
    {
      path: '/dolinalotnicza',
      name: 'dolinalotnicza',

      component: () => import('../views/AirValleyView.vue')
    },
    {
      path: '/smr',
      name: 'smr',

      component: () => import('../views/SMRView.vue')
    },
    {
      path: '/easyrobots',
      name: 'easyrobots',
      component: () => import('../views/EasyRobots.vue')
    }
  ]
})

export default router
