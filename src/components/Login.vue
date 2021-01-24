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
          v-model.trim="$v.form.email.$model"
          :error="$v.form.email.$error"
          :errorMessage="'Invalid email.'"
          authorisation
          type="email"
          placeholder="E-mail"
        />
      </div>
      <div class="control__item">
        <input-fileds
          v-model.trim="$v.form.password.$model"
          :error="$v.form.password.$error"
          :errorMessage="'Invalid password.'"
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
      <div class="control__item control_action" @click="login">
        <btn class="btn_primary btn_auth" >
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
import { required, minLength, email } from 'vuelidate/lib/validators'

import InputFileds from './controls/InputFileds'
import Checkbox from './controls/Checkbox'
import Icon from './Icon'
import Btn from './controls/Btn'

export default {
  name: 'login',
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  props: {
    state: Boolean
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    closeAuthForm () {
      this.$emit('stateAuth', false)
    },
    switchPopup () {
      this.$emit('statePopup', false)
    },
    login () {
    
      this.$v.$touch()
      
      if (!this.$v.$invalid) {
        const result = this.$store.dispatch('login', this.form)

        result.then(res => {
          if(res.successfully) {
            this.closeAuthForm()
          } else {

          }
        })

      }
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