import axios from 'axios'

export default {
  state: {
    Event: {}
  },
  mutations: {
    updateStateEvent: (state, update) => {
      state.Event = update
    }
  },
  actions: {
    getEvent: async ({ commit }, id) => {
      const result = await axios.get(`/api/card/${id}`)
      commit('updateStateEvent', result.data)
    } 
  },
  getters: {
    getPictures: (state, idx = 0) => {
        return {
          main: state.Event.photos.filter(el => el === state.Event.photos[idx]),
          other: state.Event.photos.filter(el => el !== state.Event.photos[idx])
        }
      },
      getMainPicture: state => {
        if (Object.keys(state.Event).length){
            var mainPicture = state.Event.photos[0]
            /* state.Event.photos.shift()
            var pictures = state.Event.photos */
            return mainPicture
        }
      },
      getOtherPictures: state =>{
        if (Object.keys(state.Event).length){
            // var mainPicture = state.Event.photos[0]
            state.Event.photos.shift()
            var pictures = state.Event.photos
            return pictures
        }
      }
  }
}