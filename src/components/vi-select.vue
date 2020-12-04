<template>
  <div class="vi-select">
    <div class="vi-select__inner" @click="areOptionsVisible = !areOptionsVisible">
      <p class="title">
        {{ selected ? selected.text : "Выберите опцию" }}
      </p>
      <img src="../../public/imgs/select_vector.png" alt="" />
    </div>
    <div class="options" v-if="areOptionsVisible">
      <p v-for="item in items" :key="item.value" @click="selectedItem(item)">
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

<style lang="scss">
.vi-select p {
  margin: 0;
}
.vi-select {
  position: relative;
  min-width: auto;
  padding: 0 5px;
}
.vi-select__inner {
  display: block;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 auto;
}
/* .vi-select__inner:hover {
  border-bottom:1px solid #eaeaea;;
} */
.options {
  border: solid 1px #aeaeae;
  position: absolute;
  top: 34px;
  right: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
}
.options p:hover {
  background: #e7e7e7;
}
.options p {
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
.vi-select__inner{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.vi-select__inner img{
  margin-left: 10px;
}
/* .options p img{
  justify-content: end;
} */
</style>