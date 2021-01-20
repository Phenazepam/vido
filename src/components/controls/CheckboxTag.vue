<template>
  <label class="checkbox-tag"  @input="checked">
    
    <input 
      type="checkbox" 
      name="checked" 
      :value="value"
    >

    <div class="checkbox-tag__control">
      <slot></slot>
    </div>

  </label>
</template>

<script>
import '@/assets/controls/checkboxTag.scss'

export default {
  name: 'CheckboxTag',
  data: () => ({
    isChecked: false
  }),
  props: {
    value: [ Number, Object, String, Array, Boolean ]
  },
  methods: {
    checked() {
      this.isChecked = !this.isChecked
      this.$emit('isChecked', this.isChecked)
    }
  }
}
</script>
