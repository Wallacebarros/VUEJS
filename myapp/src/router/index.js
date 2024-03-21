import { createRouter, createWebHistory } from 'vue-router'
import Product from '../components/Product/AppProducts.vue'
import CompositionApi from '../views/CompositionApiView.vue'

const routes = [
  {
    path: '/',
    name: 'products',
    component: Product
  },
  {
    path: '/compositionApi',
    name: 'compositionApi',
    component: CompositionApi
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
