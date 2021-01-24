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
        Регистрация
      </h2>
      <p class="head__subtitle">
        Создайте аккаунт, чтобы добавлять мероприятия в избранное и иметь доступ к своим бронированиям с любого устройства
      </p>
    </div>
    <div class="auth__control control">
      <div class="control__item">
        <input-fileds
          v-model.trim="$v.form.name.$model"
          :error="$v.form.name.$error"
          :errorMessage="'Please enter a name.'"
          authorisation
          placeholder="First name"
        />
      </div>
      <div class="control__item">
        <input-fileds
          v-model.trim="$v.form.lastName.$model"
          :error="$v.form.lastName.$error"
          :errorMessage="'Please enter a last name.'"
          authorisation
          placeholder="Last name"
        />
      </div>
      <div class="control__item">
        <input-fileds
          v-model.trim="$v.form.email.$model"
          :error="$v.form.email.$error"
          :errorMessage="'Enter a valid email - example@gmail.com.'"
          authorisation
          placeholder="E-mail"
        />
      </div>
      <div class="control__item">
        <input-fileds
          v-model.trim="$v.form.password.$model"
          type="password"
          :error="$v.form.password.$error"
          :errorMessage="'Password must have at least 6 letters.'"
          authorisation
          placeholder="Password"
        />
      </div>
      <div class="control__item">
        <input-fileds
          v-model.trim="$v.form.confirmPassword.$model"
          type="password"
          :error="$v.form.confirmPassword.$error"
          :errorMessage="'Passwords must be identical.'"
          authorisation
          placeholder="Confirm password"
        />
      </div>
      <div class="control__item">
        <checkbox>
          <template v-slot:title>
            Я хочу получать уникальные предложения
          </template>
          <template v-slot:subtitle>
            Время от времени вы также будете получать рекламные сообщения. Вы сможете отписаться в любой момент
          </template>
        </checkbox>
      </div>
      
      <div class="control__item control_action"  @click="submit">
        <btn class="btn_primary btn_auth">
          <icon 
            name="icon icon_lock" 
            :opacity="0.5"
          />
          Создать аккаунт
        </btn>
      </div>
      <div class="control__agreement">
        Создавая аккаунт, вы принимаете наши <a>«Условия предоставления услуг»</a> и <a>«Положение о конфиденциальности»</a>.
      </div>
    </div>
    <div class="auth__footer">
      Уже есть аккаунт? <a @click="switchPopup">Войти</a>
    </div>
  </div>

</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import InputFileds from './controls/InputFileds'
import Checkbox from './controls/Checkbox'
import Icon from './Icon'
import Btn from './controls/Btn'

export default {
  name: 'Registration',
  data: () => ({
    form: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }),
  props: {
    state: Boolean
  },
  validations: {
    form: {
      name: {
        required,
      },
      lastName: {
        required,
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    closeAuthForm () {
      this.$emit('stateAuth', false)
    },
    switchPopup () {
      this.$emit('statePopup', true)
    },
    submit () {
      this.$v.$touch()
      
      if (!this.$v.$invalid) {
        this.$store.dispatch('registration', this.form)
        this.closeAuthForm()
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