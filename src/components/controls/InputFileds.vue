<template>
  <label 
    v-if="search"
    class="input"
  >
    <div class="input__inner">
      <div class="input__icon">
        <icon-base width="16" height="16" viewBox="0 0 16 16" name="search" />
      </div>
      <div class="input__title"></div>
    </div>

    <input :type="type" 
      class="input__field input__field_search" 
      :placeholder="placeholder"
      @input="setValue"
    >
  </label>

  <label 
    v-else-if="datepicker"
    class="input"
  >
    <div class="input__inner">
      <div class="input__icon">
        <icon-base width="15" height="15" viewBox="0 0 15 15" name="calendar" />
      </div>
      <div class="input__title"></div>
    </div>

    <input :type="type" 
      class="input__field input__field_datepicker" 
      :placeholder="placeholder"
      @input="setValue"
    >
  </label>

  <label 
    v-else-if="authorisation"
    class="input"
  >
    <div class="input__inner">
      <div class="input__title">{{ title }}</div>
    </div>

    <input :type="type" 
      class="input__field input__field_authorisation" 
      :class="{input__field_error: error}"
      :placeholder="placeholder"
      @input="setValue"
    >
    <div class="input__error" v-if="error">
      <p>{{ errorMessage }}</p>
    </div>
  </label>


</template>

<script>
import '@/assets/inputFileds.scss'

import IconBase from '@/components/IconBase'

export default {
  name: 'InputFileds',
  props: {
    placeholder: String,
    title: String,
    type: String,
    error: Boolean,
    errorMessage: String,
    value: [String, Number, Object, Array],
    // Input type
    search: Boolean,
    authorisation: Boolean,
    datepicker: Boolean
  },
  methods: {
    setValue( event ) {
      this.$emit('input', event.target.value)
    }
  },
  components: {
    IconBase
  }
}
</script>
