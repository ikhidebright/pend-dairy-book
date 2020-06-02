import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    overlay: false
  },
  mutations: {
    setUser(state, item) {
      state.user = item
    },
    // set loder
    Loader (state, item) {
      state.overlay = item
    }
  },
  actions: {
    // set loader
    Loader ({ commit }, payload) {
      commit("Loader", payload)
    }
  },
  modules: {
  }
})
