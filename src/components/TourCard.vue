<template>
  <article 
    :class="{ 
      'tour-card': true,
      'tour-card_horizontal': horizontal 
    }"
  >
    <div 
      :class="{ 
        'tour-card__img': true,
        'tour-card__img_horizontal': horizontal 
      }"
    >
      <div class="tour-card__add-favorites"
        @click="addFavorites"
      >
        <icon-favorites />
      </div>
    </div>
    
    <div 
      :class="{ 
        'tour-card__content': true,
        'tour-card__content_horizontal': horizontal 
      }"
    >
      <div class="row justify-between">
        <div class="tour-card__type">
          {{ data.type }}
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
                    <p>{{ data.ratingVidodo }}</p>
                  </div>
                </div>
              </div>

              <div class="rating__item">
                <div class="row">
                  <div class="rating__item-logo">
                    <icon-rating-general/>
                  </div>
                  <div class="rating__item-score">
                    <p>{{ data.ratingGeneral }}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div 
        :class="{ 
          'tour-card__about': true, 
          'tour-card__about_horizontal': horizontal 
        }" 
      >
        <div class="tour-card__title">
          {{ data.title }}
        </div>

        <div 
          :class="{ 
            'tour-card__description': true,
            'tour-card__description_horizontal': horizontal 
          }"
        >
          {{ data.description }}
        </div>

      </div>

      <div class="row">
        <div class="tour-card__tags">

        </div>

        <div class="tour-card__price">
          <p>from</p>

          <span>
            {{ data.price }}
          </span>

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

import IconFavorites from './img/IconFavorites'
import IconRatingVidodo from './img/IconRatingVidodo'
import IconRatingGeneral from './img/IconRatingGeneral'

export default {
  name: 'TourCard',
  components: {
    IconFavorites,
    IconRatingVidodo,
    IconRatingGeneral,
  },
  props: {
    horizontal: Boolean,
    data: Object
  },
  methods: {
    addFavorites() {
      console.log(this.data)
      this.$store.dispatch('setTourFavourites', this.data)      
    }
  }
}
</script>

