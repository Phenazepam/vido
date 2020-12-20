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
          placeholder="First name"
        />
      </div>
      <div class="control__item">
        <input-fileds
          placeholder="Last name"
        />
      </div>
      <div class="control__item">
        <input-fileds
          placeholder="E-mail"
        />
      </div>
      <div class="control__item">
        <input-fileds
          placeholder="Password"
        />
      </div>
      <div class="control__item">
        <input-fileds
          placeholder="Confirm password"
        />
      </div>
      <div class="control__item">
        <Checkbox 
          title="Активировать уникальные предложения"
          subtitle="Время от времени вы также будете получать рекламные сообщения. Вы сможете отписаться в любой момент"
        />
      </div>
      
      <div class="control__item control_action">
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
import InputFileds from './InputFileds'
import Checkbox from './Checkbox'
import Icon from './Icon'
import Btn from './Btn'

export default {
  name: 'Registration',
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
      this.$emit('statePopup', true)
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