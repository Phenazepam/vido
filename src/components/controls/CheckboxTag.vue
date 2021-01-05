<template>
  <label class="checkbox-tag">
    
    <input type="checkbox" name="checked" :value="value">

    <div class="checkbox-tag__control">
      <slot></slot>
    </div>

  </label>
</template>

<script>
import '@/assets/controls/checkboxTag.scss'

export default {
  name: 'CheckboxTag',
  props: {
    value: [ Number, Object, String, Array, Boolean ]
  }
}
</script>
