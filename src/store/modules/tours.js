import axios from 'axios'
import sortingBy from '@/sortingBy'
import filterEvents from '@/filterEvents'


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
    },

    filterTours: (state, prop) => {
      state.tours = filterEvents[prop](state.tours)
    }
  },
  actions: {
    getTours: async ({ commit }) => {
      const result = await axios.get('/api/events')
      commit('updateStateTours', result.data)
    }
  }
}