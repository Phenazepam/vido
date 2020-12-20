<template>
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
        Русский
      </div>
      <div class="header__control-item">
        EUR
      </div>
    </div>

    <div class="header__links">
      <div class="header__links-item">
        Каталог
      </div>
      <div class="header__links-item">
        Помощь
      </div>
      <div class="header__links-item">
        Избранное
      </div>
      <div class="header__links-item">
        Корзина
      </div>
    </div>

    <div class="header__action">
        <btn
          class="btn_primary btn_singin"
        >
          Sing in
        </btn>
    </div>

  </header>
</template>

<script>
import '@/assets/header.scss'
import Btn from './Btn'

export default {
  name: 'Header',
  components: {
    Btn
  }
}
</script>