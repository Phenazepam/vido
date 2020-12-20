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

<style>
  /* .btn {
    vertical-align: middle;
    width: 100%;
    height: 50px;
    font-size: 18px;
    border-radius: 12px;
    font-weight: bold;
    border: none;
  }
  .btn:active, .btn:focus {
    outline: none;
  }
  .btn_liner-gradient {
    background: linear-gradient(180deg, #15D79D -46%, #00875F 119%);
    color: #fff;
  } */
</style>