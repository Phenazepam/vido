import axios from 'axios'

export default {
  state: {
    
  },
  mutations: {
    updateTourInformation: (state, update) => {
      state = update
    }
  },
  actions: {
    getTourInformation: async ({ commit }, id ) => {
      try {
        const response = await axios.get(`api/toutInformation/${id}`)
        commit('updateTourInformation', response)

      } catch (error) {
        console.log(error)
      }
    }
  }
}

/*  
Путь в router   
path: '/event/:id'

@click="showTourInformation (id)"

methods: {
  showTourInformation (id) {
    this.$router.push(`/event/${id}`)
  }
}


в event views

import { mapState } from 'vuex'

beforeRouteUpdate (to, from, next) {
  this.dispatch('getTourInformation', to.params.id)
  next()
}

computed: {
  ...mapState({
    tourInformation: s => {
      return s.tourInformation
    }
  })
}

*/