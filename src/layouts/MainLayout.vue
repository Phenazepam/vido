<template>
  <div>
  <!--   <header class="header">
      <div class="container">

        <div class="header__inner">

          <div class="header__logo">
            <img src="../../public/imgs/Logo.png" alt="vidodo" />
          </div>

          <div class="header__island">
            <img
              src="../../public/imgs/lanzarote_icon.png"
              class="island_icon"
              alt=""
            />
            <div class="island_name">Lanzarote</div>
          </div>

          <vi-select
            class="languageSelector nav__item"
            v-model="selectedLanguage"
            :items="languageOptions"
            :active="selectedLanguage"
          />

          <vi-select
            class="currencySelector nav__item"
            v-model="selectedCurrency"
            :items="currencyOptions"
            :active="selectedCurrency"
          /> 
                  
          <div class="nav__item">
            <div class="nav__item-icon">
              <img src="../../public/imgs/catalog_icon.png" alt="">
            </div>
            <a href="#" class="header__catalog header__link">Каталог</a>
          </div>

          <div class="nav__item">
            <div class="nav__item-icon">
              <img src="../../public/imgs/help_icon.png" alt="">
            </div>
            <a href="#" class="header__help header__link">Помощь</a>
          </div>

          <div class="nav__item">
            <div class="nav__item-icon">
              <img src="../../public/imgs/favourite_icon.png" alt="">
            </div>
            <a href="#" class="header__favourite header__link">Избранное</a>
          </div>

          <div class="nav__item">
            <div class="nav__item-icon">
              <img src="../../public/imgs/basket_icon.png" alt="">
            </div>
            <a href="#" class="header__basket header__link">Корзина</a>
          </div>

          <div class="nav__item">
            <a href="#" class="header__account header__link">Личный кабинет</a>
          </div>

        </div>

      </div>

    </header> -->
    <Header/>
    <router-view />
  </div>
</template>
<script>
import viSelect from "@/components/vi-select"
import Header from "@/components/Header"

export default {
  name: "main-layout",
  components: {
    viSelect,
    Header
  },
};
</script>
