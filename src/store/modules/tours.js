import axios from 'axios'
import sortingBy from '@/sortingBy'

export default {
  state: {
    tours: [],
    general: [],
    logger: {},
    counter: 0
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

      state.logger[filter.name] = filter 
      state.logger[filter.name].counter = state.counter++

      state.tours = Object.values(state.logger)
        .sort((a, b) => a.counter - b.counter)
        .reduce((events, { filtration, parameters, options }) => {
          return events = filtration({
            events: state.general,
            parameters: parameters.length ? parameters : options.map(n => n.value) 
          })
        }, state.general)
      

    }
  },  
  actions: {
    getTours: async ({ commit }) => {
      const result = await axios.get('/api/events')
      commit('updateStateTours', result.data)
    }
  }
}