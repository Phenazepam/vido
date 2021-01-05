export default {
  state: {
    tours: []
  },
  mutations: {
    updateStateTourFavorites: (state, update) => {
      console.log(update);
      state.tours = update
    }
  },
  actions: {
    setTourFavourites:  ({ dispatch }, tour) => {

      console.log(tour);
      
      if(!localStorage.tourFavorites) {
        localStorage.setItem('tourFavorites', JSON.stringify([tour]))
      } else {

        const storage = JSON.parse(localStorage.getItem('tourFavorites'))
        
        if (storage.filter(el => el.id === tour.id).length) {
          dispatch('deleteTourFavourites', tour.id)
        } else {
          storage.push(tour)
          localStorage.setItem('tourFavorites', JSON.stringify(storage))
        }

      }
    },

    getTourFavourites: ({ commit }) => {
      const storage = JSON.parse(localStorage.getItem('tourFavorites'))
      
      commit('updateStateTourFavorites', storage)
    },

    deleteTourFavourites: ({ commit }, id) => {
      let storage = JSON.parse(localStorage.getItem('tourFavorites'))

      storage = storage.filter(tour => tour.id !== id)

      localStorage.setItem('tourFavorites', JSON.stringify(storage))
      
      const toutFavorites = JSON.parse(localStorage.getItem('tourFavorites'))

      commit('updateStateTourFavorites', toutFavorites)
    }
  }
}