<template>
  <label class="checkbox">
    <span class="checkbox__input">
      <input type="checkbox" name="checked" :value="value">
      <span class="checkbox__control">
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3.625L5.61538 8L13 1" stroke="white" stroke-width="1.5"/>
        </svg>
      </span>
    </span>
    <span class="checkbox__text">
      <div class="checkbox__text-title">
        {{ title }}
      </div>
      <div class="checkbox__text-subtitle">
        {{ subtitle }}
      </div>
    </span>
  </label>
</template>

<script>
import '@/assets/checkbox.scss'

export default {
  name: 'Checkbox',
  props: {
    title: String,
    subtitle: String,
    value: [ Number, Object, String, Array, Boolean ]
  }

}
</script>
