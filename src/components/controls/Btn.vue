<template>
  <button
    class="btn"
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
    type: String 

  }
}
</script>