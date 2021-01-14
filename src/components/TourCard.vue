<template>

  <article :class="{'tour-card_horizontal': horizontal}"
    class="tour-card"
  >
    <div :class="{'tour-card__img_horizontal': horizontal}"
      class="tour-card__img"
      :style="setImage(data.context.img)"
    >
    
      <div class="tour-card__add-favorites"
        @click="addFavorites"
      >
        <icon-favorites />
      </div>
    </div>
    
    <div 
      :class="{'tour-card__content_horizontal': horizontal}"
      class="tour-card__content"
    >
      <div class="row justify-between">
        <div class="tour-card__type">
          {{ data.properties.type }}
        </div>
        <div class="tour-card__rating">
          <div class="rating">
            <div class="row">

              <div class="rating__item">
                <div class="row">
                  <div class="rating__item-logo">
                    <icon-rating-vidodo/>
                  </div>
                  <div class="rating__item-score">
                    <p>{{ data.properties.rating.vidodo }}</p>
                  </div>
                </div>
              </div>

              <div class="rating__item">
                <div class="row">
                  <div class="rating__item-logo">
                    <icon-rating-general/>
                  </div>
                  <div class="rating__item-score">
                    <p>{{ data.properties.rating.general }}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div 
        :class="{'tour-card__about_horizontal': horizontal }"
        class="tour-card__about" 
      >
        <div class="tour-card__title">
          {{ data.context.title }}
        </div>

        <div :class="{ 'tour-card__description_horizontal': horizontal}"
          class="tour-card__description"
        >
          {{ data.context.description }}
        </div>

      </div>

      <div class="tour-card__tags">
        <div class="tags">
          <div class="row">
            <div
              v-for="tag in tags"
              :key="tag" 
              class="tags__item"
            >
              <icon-base
                width="24"
                height="24"
                viewBox="0 0 24 24"
                :name="tag"
              />
            </div>
          </div>
        </div>

        <div class="tour-card__price">
          <p>from</p>

          <span v-if="!data.properties.price.new"
            class="tour-card__price_base"
          >
            {{ data.properties.price.base }} €
          </span>
          
          <div v-else>
            <span class="tour-card__price_old">
              {{ data.properties.price.base }} €
            </span>
            <span class="tour-card__price_new">
              {{ data.properties.price.new }} €
            </span>
            <div class="tour-card__price_savings">
              {{ (data.properties.price.base - data.properties.price.new).toFixed(2)  }} € savings
            </div>
          </div>
  
          <p v-if="horizontal">
            per person
          </p>

        </div>
      </div>

    </div>
  </article>
</template>

<script>
import '@/assets/tourCard.scss'

import IconBase from './IconBase'

import IconFavorites from './img/IconFavorites'
import IconRatingVidodo from './img/IconRatingVidodo'
import IconRatingGeneral from './img/IconRatingGeneral'
import IconMessages from './img/IconMessages'
import IconTruck from './img/IconTruck'
import IconUsers from './img/IconUsers'

export default {
  name: 'TourCard',
  data: () => ({
    tags: ['messages','truck', 'users']
  }),
  components: {
    IconFavorites,
    IconRatingVidodo,
    IconRatingGeneral,
    IconMessages,
    IconTruck,
    IconUsers,
    IconBase
  },
  props: {
    horizontal: Boolean,
    data: Object
  },

  methods: {
    addFavorites() {
      this.$store.dispatch('setTourFavourites', this.data)      
    },
    setImage: img => {
      return `background-image: url('/imgs/MainPage/PopularAdventures/${img}')`
    },
    loadingTags: tag => {
      if (tag) {
        return `Icon${tag}`
      }
    } 
  }
}
</script>

