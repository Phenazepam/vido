<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="header__logo">VIDODO</div>
        <div class="header__island">
          <div class="island_icon">111</div>
          <div class="island_name">Lanzarote</div>
        </div>
        <vi-select 
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
      </div>
    </div>
    <div>
      <router-view/>
    </div>
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
      ],
      
      selectedCurrency: {value: 0, text: "RUB"},
      currencyOptions: [
        {value: 0, text: "RUB"},
        {value: 1, text: "EUR"},
        {value: 2, text: "USD"},
        {value: 3, text: "GBP"},
      ]
    };
  },
};
</script>
<style lang="scss">
.container {
  width: 80%;
  min-height: 30px;
  align-items: center;
  margin: 0 auto;
}
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.header__island {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
}
.languageSelector{
  width: 120px;
}
.currencySelector{
  width: 70px;
}
</style>