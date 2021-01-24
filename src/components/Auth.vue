<template>
  <div 
    v-if="stateAuth"
    class="auth-wrapper" 
  >
    <!-- <login 
      @stateAuth="closeAuth"
      @statePopup="switchPopup"
      :state="state"
    /> -->

    <registration 
      @stateAuth="closeAuth"
      @statePopup="switchPopup"
      :state="state"
    />

  </div>

</template>

<script>
import Registration from '@/components/Registration'
import Login from '@/components/Login'

export default {
  name: 'Auth',
  data: () => ({
    state: true,
  }),
  props: {
    stateAuth: Boolean
  },
  methods: {
    closeAuth (state) {
      this.$emit('stateAuth', state)
    },
    switchPopup (state) {
      this.state = state
    }
  },
  components: {
    Login,
    Registration
  }
}
</script>