import axios from 'axios'

export default {
  state: {
    tours: []
  },
  mutations: {
    updateStateTours: (state, update) => {
      state.tours = update
    }
  },
  actions: {
    getTours: async ({ commit }, top = 100) => {
      const result = await axios.get('/api/cards')
      commit('updateStateTours', result.data)
    } 
  },
}