import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jhon',
      last_name: 'Jep',
    },
    products: [
      {
        id:1,
        name: 'arroz',
        price: 20,
      },
      {
        id:2,
        name: 'feijão',
        price: 16
      },
      {
        id:3,
        name: 'carne',
        price: 25
      }
    ],
    cart: []
  },
  getters: {
  },
  mutations: {
    alterar(state, newUser) {
      state.user = newUser
    },
    addCart(state, data) {
      state.cart.push(data)
    },
    rmCart(state, data) {
      state.cart = state.cart.filter(e => e !== data)
    },
    addProducts(state, data) {
      state.products.push(data)
    },
    rmProducts(state, data) {
      state.products = state.products.filter(e => e !== data)
    }
  },
  actions: {
  },
  modules: {

  }
})
