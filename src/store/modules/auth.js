export default {
  state: {
    auth: {}
  },

  mutations: {
    autuUpdateState: (state, update) => {
      state.auth = update
    }
  },

  actions: {
    login: ({commit}, formData) => {
      if (!localStorage.auth) {
        return {
          error: [
            { email: 'Invalid email.'},
            { password: 'Invalid password.' }
          ]
        }
      }

      const user = JSON.parse(localStorage.getItem('auth'))
      const error = []

      if (user.email !== formData.email) {
        error.push({email: 'Invalid email.'})
      } else if (user.password !== formData.password) {
        error.push({password: 'Invalid password.'})
      } 
      
      return error.length  
        ? { error }
        : { successfully: true }
      
    },
    
    registration: ({commit}, auth) => {
      localStorage.setItem('auth', JSON.stringify(auth))
      commit('autuUpdateState', JSON.parse(localStorage.getItem('auth')))
    },

    isLogin: ({commit}) => {
      commit('autuUpdateState', JSON.parse(localStorage.getItem('auth')))
    }
  }
}