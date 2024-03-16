import { createRouter, createWebHistory } from 'vue-router'
import Product from '../components/Product/AppProducts.vue'

const routes = [
  {
    path: '/',
    name: 'products',
    component: Product
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
