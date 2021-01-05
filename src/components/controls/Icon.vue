<template>
  <div 
    :class="name"
    :style="{ opacity }"
  ></div>
</template>

<script>
import '@/assets/icons.scss'

export default {
  name: 'Icon',
  props: {
    name: String,
    opacity: Number
  }
}
</script>