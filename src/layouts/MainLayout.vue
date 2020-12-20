<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <img aria-hidden="true" src="../../public/imgs/Logo.png" alt="vidodo"/>
      </div>

      <div class="header__control">
        <div class="header__control-item">
          <img src="../../public/imgs/lanzarote_icon.png" />
          Lanzarote
        </div>
        <div class="header__control-item">
          РУС
        </div>
        <div class="header__control-item">
          EUR €
        </div>
      </div>

      <div class="header__links">
        <router-link 
          class="header__links-item"
          tag="div"
          to="catalog"
        >
          <icon 
            name="icon icon_catalog" 
          />
          Каталог
        </router-link>

        <router-link 
          class="header__links-item"
          tag="div"
          to="help"
        >
          <icon 
            name="icon icon_help" 
          />
          Помощь
        </router-link>

        <router-link 
          class="header__links-item"
          tag="div"
          to="help"
        >
          <icon 
            name="icon icon_favorites" 
          />
          Избранное
        </router-link>

        <router-link 
          class="header__links-item"
          tag="div"
          to="help"
        >
          <icon 
            name="icon icon_basket" 
          />
          Корзина
        </router-link>
      </div>

      <div class="header__action" @click="auth.state = true">
        <btn
          class="btn_primary btn_singin"
        >
          Sing in
        </btn>
      </div>

    </header>

    <auth 
      :stateAuth="auth.state"
      @stateAuth="controlStateAuth"
    />

    <section 
      class="main"
      :class="{ main_fixed:  auth.state}"
    >
      <router-view />
    </section>
  </div>
</template>
<script>
import '@/assets/header.scss'

import Auth from '@/components/Auth'
import viSelect from '@/components/vi-select'
import Btn from '@/components/Btn'
import Icon from '@/components/Icon'

export default {
  name: "main-layout",
  data: () => ({
    auth: {
      state: false 
    }
  }),
  methods: {
    controlStateAuth (state) {
      this.auth.state = state
    }
  },
  components: {
    Auth,
    viSelect,
    Btn,
    Icon    
  },
};
</script>


<style>
  .main_fixed {
    overflow: hidden;
  }
</style>