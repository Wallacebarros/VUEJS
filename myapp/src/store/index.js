import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jhon',
      last_name: 'Jep',
    }
  },
  getters: {
  },
  mutations: {
    alterar(state, newUser) {
      state.user = newUser
    } 
  },
  actions: {
  },
  modules: {

  }
})
