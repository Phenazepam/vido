<template>
  <svg 
    :width="width" 
    :height="height" 
    :viewBox="viewBox" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <component :is="lodaginIcon"/>
  </svg>
</template>

<script>
import '@/assets/icons.scss'

import IconFavorites from './img/IconFavorites'
import IconRatingVidodo from './img/IconRatingVidodo'
import IconRatingGeneral from './img/IconRatingGeneral'
import IconMessages from './img/IconMessages'
import IconTruck from './img/IconTruck'
import IconUsers from './img/IconUsers'
import IconDelete from './img/IconDelete'

export default {
  name: 'IconBase',
  props: {
    name: String,
    viewBox: String,
    width: [Number, String],
    height: [Number, String]
  },
  computed: {
    lodaginIcon() {
      return `icon-${this.name}`
    }
  },
  components: {
    IconFavorites,
    IconRatingVidodo,
    IconRatingGeneral,
    IconMessages,
    IconTruck,
    IconUsers,
    IconDelete
  }
}
</script>