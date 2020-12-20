<template>
  <div class="select">
    <div class="select__inner" @click="areOptionsVisible = !areOptionsVisible">
      <p class="select__title">
        <img 
           
          :src="active.img" alt=""
        >
        {{ selected ? selected.text : "Выберите опцию" }}
      </p>
      <img src="../../public/imgs/select_vector.png" alt="" />
    </div>
    <div class="options" v-if="areOptionsVisible">
      <p v-for="item in items" :key="item.value" @click="selectedItem(item)">
        <img 
           v-if="item.img"
          src= "@/../public/imgs/header_language_polish.png" alt=""
        >
        {{ item.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "vi-select",
  data: () => ({
    selected: null,
    areOptionsVisible: false,
  }),
  props: {
    items: Array,
    active: Object,
  },
  methods: {
    selectedItem(item) {
      this.selected = item;
      this.$emit("input", this.selected);
      this.areOptionsVisible = false;
    },
    closeSelect() {
      this.areOptionsVisible = false;
    },
  },
  computed: {},
  mounted() {
    this.selected = this.active;
    document.addEventListener("click", this.closeSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeSelect);
  },
};
</script>

<style lang="css">
.select p {
  margin: 0;
}
.select {
  position: relative;
  min-width: auto;
  padding: 0 5px;
}
.select__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 auto;
  
}
.select__inner img{
  margin-left: 5px;
}
.select__title{
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis; 
}
.options {
  border: solid 1px #aeaeae;
  position: absolute;
  top: 40px;
  right: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
  background-color: #fff;
  z-index: 1000;
}
.options p:hover {
  background: #e7e7e7;
}
.options p {
  display: flex;
  justify-content: space-between;
  white-space: nowrap; 
  overflow: hidden; 
  padding: 5px; 
  text-overflow: ellipsis; 
}

</style>