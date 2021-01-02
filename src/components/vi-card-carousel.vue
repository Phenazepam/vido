<template>
  <div class="vi-card-carousel">
    <div class="carousel">
      <div class="container">
        <div class="carousel__controls">
          <div class="carousel__controls-title">{{ carousel_title }}</div>
          <div class="carousel__controls-buttons">
            <button class="carousel__controls-buttons-prev" @click="prevSlide">
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1L1 8L8 15"
                  stroke="#B7BCCA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="carousel__controls-buttons-next" @click="nextSlide">
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L8 8L1 15"
                  stroke="#1E2843"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="wrapper">
          <div class="carousel__items" :style="{'margin-left': '-' +(290 * currentSlideIndex)+'px'}">
            <vi-card-vertical
              v-for="card in carousel_data"
              :key="card.id"
              :card_data="card"             
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ViCardVertical from "./vi-card-vertical.vue";

export default {
  name: "vi-card-carousel",
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
    carousel_title: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  components: {
    ViCardVertical,
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.carousel_data.length%4) {
        this.currentSlideIndex = 0
      }
      else{
        this.currentSlideIndex++;
      }
    },
  },
};
</script>

<style lang="scss">
.carousel {
  margin-top: 70px;
  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    &-title {
      font-size: 36px;
      font-weight: 600;
    }
    &-buttons {
      padding: 5px;
      &-next,
      &-prev {
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: transparent;
        border-radius: 12px;
        vertical-align: middle;
        margin: 0 auto;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
}
.wrapper {
  height: 400px;
  overflow: hidden;
}
.carousel__items {
  padding: 0 4px;
  display: flex;
  justify-content: space-between;
  transition: all ease .5s;
}
</style>