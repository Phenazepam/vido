<template>

  <div class="card">

    <div class="card__picture">
      <img src="@/../public/imgs/MainPage/PopularAdventures/item_picture_01.png" alt="">

      <div class="card__picture-heart">
        <img src="@/../public/imgs/MainPage/PopularAdventures/heart.png" alt="">
      </div>

    </div>

    <div class="card__about">

      <div class="about">
        <div class="about__block-one">

          <div class="card__info-type">
            Sightseeing Tours
          </div>
          
          <div class="card__title">
            Adult-only sailing trip to Papagayo with lunch
          </div>

          <div class="card__description">
            Откройте для себя прелести Лансароте с этим полным дневным туром. Наслаждайтесь невероятным видом на этот уникальный...
          </div>

        </div>

        <div class="about__block-two">
          <div class="card__info-rating">
            <div class="card__info-rating-vidodo">
              <img src="@/../public/imgs/MainPage/PopularAdventures/rating_vidodo.png" alt="">
              4.2
            </div>

            <div class="card__info-rating-general">
              <img src="@/../public/imgs/MainPage/PopularAdventures/rating_general.png" alt="">
              4.5
            </div>
          </div>

          <div class="card__price">
            <p>from</p>
            <p class="price"> 24.00 € </p>
            <p>per person</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/card.scss'

export default {
  name: 'Card'
}
</script>