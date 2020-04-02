import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, item) {
      state.user = item
    }
  },
  actions: {
  },
  modules: {
  }
})
