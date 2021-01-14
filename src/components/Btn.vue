<template>
  <button class="btn"
    :class="typeButton"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script>
import '@/assets/btn.scss'

export default {
  name: 'Btn',
  props: {
    type: String,
    reset: Boolean,
    cansel: Boolean,
    confirm: Boolean,
  },
  computed: {
    typeButton() {
      return this.reset 
        ? 'btn_reset'
        : this.cansel 
        ? 'btn_cansel'
        : this.confirm
        ? 'btn_confrim'
        : 'btn'
    }
  }
}
</script>
