<template>
  <div class="select">
    <div class="select__inner" @click="areOptionsVisible = !areOptionsVisible">
      <p class="select__title">
        {{ selected ? selected.text : items[0].text  }}
      </p>
    </div>
    <div class="select__options" v-if="areOptionsVisible">
      <p 
        v-for="item in items" 
        :key="item.value" 
        @click="selectedItem(item)"
      >
        {{ item.text }}
      </p>
    </div>
    <div class="select__icon">
      <icon-base width="14" height="9" viewBox="0 0 14 9" name="down"/>
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase'

export default {
  name: "v-select",
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
  mounted() {
    this.selected = this.active;
    document.addEventListener("click", this.closeSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeSelect);
  },
  components: {
    IconBase
  }
};
</script>

<style lang="scss">

.select {
  display: inline-block;
  width: 260px;
  border-radius: 8px;
  position: relative;
  min-width: auto;
  padding: 5px 40px 5px 15px;
  border: 1px solid $gray;

  &__icon {
    position: absolute;
    right: 15px;
    top: 12px;
  }

  p {
    margin: 0;
  }

  &__inner {
    
    padding: 5px 0;
    cursor: pointer;
    border-radius: 4px;
    margin: 0 auto;
  }

  &__title {
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis; 
    font-weight: 600;
    color: $text-primary;
  }

  &__options {
    position: absolute;
    width: 100%;
    top: 40px;
    left: 0;
    border: solid 1px #aeaeae;
    margin: 0 auto;
    cursor: pointer;
    background-color: #fff;
    z-index: 1000;

    p {
      white-space: nowrap; 
      overflow: hidden; 
      padding: 5px; 
      text-overflow: ellipsis; 
      font-weight: 600;
      color: $text-primary;

      &:hover {
        background: #e7e7e7;
      }
      }

      
  }
}


</style>