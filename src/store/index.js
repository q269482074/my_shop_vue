import category from './category'
import product from './product'
import cart from './cart'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    category,
    product,
    cart,
  }
})
