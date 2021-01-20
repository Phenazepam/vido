<template>
  <div class="auth" v-if="state">
    
    <div 
      class="auth__close"
      @click="closeAuthForm"
    >
      <icon name="icon_close"/>
    </div>

    <div class="auth__head head">
      <h2 class="head__title">
        Авторизация
      </h2>
      <p class="head__subtitle">
        Войдите, чтобы добавлять туры в избранное и просматривать заказы с любого устройства.
      </p>
    </div>
    <div class="auth__control control">
      <div class="control__item">
        <input-fileds
          authorisation
          type="email"
          placeholder="E-mail"
        />
      </div>
      <div class="control__item">
        <input-fileds
          authorisation
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="control__item">
        <checkbox>
          <template v-slot:title>
            Запомнить меня
          </template>
        </checkbox>
      </div>
      <div class="control__item control_action">
        <btn class="btn_primary btn_auth">
          <icon 
            name="icon icon_lock" 
            :opacity="0.5"
          />
          Войти
        </btn>
      </div>
      <div class="auth__footer"> 
        Вы здесь впервые? <a @click="switchPopup">Зарегистрироваться</a>
      </div>
    </div>
  </div>
</template>

<script>
import InputFileds from './controls/InputFileds'
import Checkbox from './controls/Checkbox'
import Icon from './Icon'
import Btn from './controls/Btn'

export default {
  name: 'login',
  data: () => ({

  }),
  props: {
    state: Boolean
  },
  methods: {
    closeAuthForm () {
      this.$emit('stateAuth', false)
    },
    switchPopup () {
      this.$emit('statePopup', false)
    }
  },
  components: {
    InputFileds,
    Checkbox,
    Btn,
    Icon
  }
}
</script>