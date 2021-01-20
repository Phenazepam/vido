<template>
  <button
    class="btn"
    :class="setClass"
    :type="type"
  >
    <slot>

    </slot>
  </button>
</template>

<script>
import '@/assets/btn.scss'

export default {
  name: 'Btn',
  props: {
    type: String,
    //Button type
    authorisation: Boolean,
    primary: Boolean,
    secondary: Boolean,
    search: Boolean,
    cancel: Boolean,
    reset: Boolean
  },
  computed: {
    setClass() {
      const typeBtn = this.authorisation 
      ? 'authorisation'
      : this.primary
      ? 'primary'
      : this.secondary
      ? 'secondary'
      : this.search
      ? 'search'
      : this.cancel
      ? 'cancel'
      : this.reset
      ? 'reset'
      : ''

      return 'btn_' + typeBtn 

    }
  }
}
</script>