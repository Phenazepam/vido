<template>
  <label class="input">

    <input 
      :type="type" 
      class="input__field" 
      :placeholder="placeholder"
      @input="setValue"
    />

  </label>
</template>

<script>
import '@/assets/inputFileds.scss'

export default {
  name: 'InputFileds',
  props: {
    placeholder: String,
    type: String,
  },
  methods: {
    setValue( event ) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>