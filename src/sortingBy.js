const sortingBy = {
  low: state => {
    return state.sort((a, b) => {
      return Number(a.properties.price.base) -  Number(b.properties.price.base)
    })
  },
  high: state => {
    return state.sort((a, b) => { 
      return Number(b.properties.price.base) - Number(a.properties.price.base)
    })
  },
  popular: state => {
    return state.sort((a, b) => {
      return a.id - b.id
    })
  }
}

export default sortingBy