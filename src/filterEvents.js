const filterEvents = {
  time: state => {
    return state.filter(el => {
      return el.id <= 4
    })
  },
  travel: state => {
    return state.filter(el => {
      return el.id === 7
    })
  },
  duration: state => {
    return state.filter(el => {
      return el.id >= 3 && el.id <= 7 
    })
  },
  languages: state => {
    return state.filter(el => {
      return el.id === 6
    })
  },
  other: state => {
    return state.filter(el => {
      return el.id === 8
    })
  } 
}

export default filterEvents