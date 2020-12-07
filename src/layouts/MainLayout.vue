<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__logo">
            <img src="../../public/imgs/Logo.png" alt="">
          </div>
          <div class="header__island">
            <img src="../../public/imgs/lanzarote_icon.png" class="island_icon" alt="">
            <div class="island_name">Lanzarote</div>
          </div>
          <vi-select
            class="languageSelector"
            v-model="selectedLanguage"
            :items="languageOptions"
            :active="selectedLanguage"
          />
          <vi-select
            class="currencySelector"
            v-model="selectedCurrency"
            :items="currencyOptions"
            :active="selectedCurrency"
          />
          <a href="#" class="header__catalog">Каталог</a>
          <a href="#" class="header__help">Помощь</a>
          <a href="#" class="header__favourite">Избранное</a>
          <a href="#" class="header__basket">Корзина</a>
          <a href="#" class="header__account">Личный кабинет</a>
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
.header{
  padding-left: 15px;
  padding-right: 15px;
  
}
.container {
  width: 88%;
  max-width: 1440px;
  margin: 0 auto;
}
.header__inner{
  display: flex;
  justify-content: space-between;
  padding: 35px 0;
  align-items: center;
}
.header__island{
  display: flex;
  justify-content: space-between;
}
.island_icon{
  margin-right: 6px;
}
.header__inner a{
  text-decoration: none;
  color: #1E2843;
}
.languageSelector {
  padding: 0;
  width: 140px;
  border-bottom: solid 2px transparent;
}
.languageSelector:hover {
  border-bottom: solid 2px #aeaeae;
}
.currencySelector {
  width: 70px;
  border-bottom: solid 1px transparent;
}
.currencySelector:hover {
  border-bottom: solid 1px #aeaeae;
} 
</style>
