<template>
  <label class="checkbox" @click="checked">
    <span class="checkbox__input">

      <input type="checkbox" :value="value">

      <span class="checkbox__control"
        :class="{ checkbox__control_inverse: type === 'inverse' }"
      >
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M1 3.625L5.61538 8L13 1" 
            stroke-width="1.5"
            :stroke="type === 'inverse' ? '#FF5134' : '#fff'" 
          />
        </svg>
      </span>

    </span>
    <span class="checkbox__text">
      <div class="checkbox__text-title">
        <slot name="title"></slot>
      </div>
      <div class="checkbox__text-subtitle">
        <slot name="subtitle"></slot>
      </div>
    </span>
  </label>
</template>

<script>
import '@/assets/checkbox.scss'

export default {
  name: 'Checkbox',
  data: () => ({
    counter: 0
  }),
  props: {
    value: [ Number, Object, String, Array, Boolean ],
    type: String
  },
  methods: {
    checked() {
      this.$emit('input', this.counter++)
    }
  }

}
</script>
