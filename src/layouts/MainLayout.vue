<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__logo">
            <img src="../../public/imgs/Logo.png" alt="" />
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
            <img src="../../public/imgs/catalog_icon.png" alt="">
            <a href="#" class="header__catalog header__link">Каталог</a>
          </div>
          <div class="nav__item">
            <img src="../../public/imgs/help_icon.png" alt="">
            <a href="#" class="header__help header__link">Помощь</a>
          </div>
          <div class="nav__item">
            <img src="../../public/imgs/favourite_icon.png" alt="">
            <a href="#" class="header__favourite header__link">Избранное</a>
          </div>
          <div class="nav__item">
            <img src="../../public/imgs/basket_icon.png" alt="">
            <a href="#" class="header__basket header__link">Корзина</a>
          </div>
          <div class="nav__item">
            <a href="#" class="header__account header__link">Личный кабинет</a>
          </div>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>
<script>
import viSelect from "@/components/vi-select";

export default {
  name: "main-layout",
  components: {
    viSelect,
  },
  data() {
    return {
      selectedLanguage: { value: 0, text: "Русский" },
      languageOptions: [
        { value: 0, text: "Русский" },
        { value: 1, text: "Английский" },
        { value: 2, text: "Французский" },
        { value: 3, text: "Испанский" },
        { value: 4, text: "Немецкий" },
        { value: 5, text: "asdfasdasdasdasdasdasdasdasdas" },
      ],

      selectedCurrency: { value: 0, text: "RUB" },
      currencyOptions: [
        { value: 0, text: "RUB" },
        { value: 1, text: "EUR" },
        { value: 2, text: "USD" },
        { value: 3, text: "GBP" },
      ],
    };
  },
};
</script>
<style lang="scss">
.header {
  padding-left: 15px;
  padding-right: 15px;
}
.container {
  width: 88%;
  max-width: 1440px;
  margin: 0 auto;
}
.header__inner {
  display: flex;
  justify-content: space-between;
  padding: 35px 0;
  align-items: center;
}
/* .header__logo{
  padding-top: 2px ;
} */
.header__island {
  display: flex;
  justify-content: space-between;
}
.island_name{
  font-weight: 500;
}
.island_icon {
  margin-right: 10px;
}
.header__inner a {
  text-decoration: none;
  color: #1e2843;
  padding: 5px 0;
}
.nav__item{
  // margin-right: 30px;
  border-bottom: solid 2px transparent;
  transition: 0.2s linear;
  padding: 5px 0;
  align-items: center;
}
.nav__item:last-child{
  margin-right: 0;
}
.nav__item:hover{
  border-bottom: solid 2px #ff7c66;
}
.nav__item img{
  margin-right: 5px;
}
.nav__item a{
  vertical-align: top; 
}
.languageSelector {
  padding: 0;
  width: 140px;
  /* transition: 0.2s linear;
  border-bottom: solid 2px transparent; */
}
/* .languageSelector:hover {
  border-bottom: solid 2px #ff7c66;
} */
.currencySelector {
  padding: 0;
  width: 70px;
  /* transition: 0.2s linear;
  border-bottom: solid 1px transparent; */
}
/* .currencySelector:hover {
  border-bottom: solid 2px #ff7c66;
} */

</style>
