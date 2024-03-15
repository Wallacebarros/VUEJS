import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/usuario/:id',
    name: 'usuario',
    component: () => import('../views/UsuarioView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
