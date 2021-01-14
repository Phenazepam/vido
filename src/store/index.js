import Vue from 'vue'
import Vuex from 'vuex'

// modules 
import tourFavorites from './modules/tourFavorites'
import tourInformation from './modules/tourInformation'
import tours from './modules/tours'
import event from './modules/event'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tours,
    tourFavorites,
    tourInformation,
    event
  }
})
