import axios from 'axios'
import sortingBy from '@/sortingBy'


export default {
  state: {
    tours: []
  },
  mutations: {
    updateStateTours: (state, update) => {
      state.tours = update
    },
    sortTours: (state, sort) => {
      state.tours = sortingBy[sort](state.tours)
    }
  },
  actions: {
    getTours: async ({ commit }) => {
      const result = await axios.get('/api/events')
      commit('updateStateTours', result.data)
    }
  }
}