import axios from 'axios'
import sortingBy from '@/sortingBy'

export default {
  state: {
    tours: [],
    general: []
  },
  mutations: {
    updateStateTours: (state, update) => {
      state.general = update
      state.tours = update
    },

    sortTours: (state, sort) => {
      state.tours = sortingBy[sort](state.tours)
    },

    filterEvents: (state, filter) => {
      const events = state.general
      const parameters = filter.parameters

      state.tours = filter.filtration({ events, parameters })
    }
  },  
  actions: {
    getTours: async ({ commit }) => {
      const result = await axios.get('/api/events')
      commit('updateStateTours', result.data)
    }
  }
}