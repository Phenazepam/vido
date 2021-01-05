<template>
  <section class="favorites">
    <div class="container">
      <h2 class="page__title">
        Избранное
      </h2>
      <div class="section__event">
        <div class="page__subtitle">
          Мероприятия
        </div>
        <div class="page__tours">
          <div class="row">
            <div 
              class="page__tours-favorite"
              v-for="tour in tourFavorites"
              :key="tour.id"
            >
              <tour-card
                :data="tour"
              ></tour-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TourCard from '@/components/TourCard'
import { mapState } from 'vuex'

export default {
  name: 'Favorites',
  computed: {
    ...mapState({
      tourFavorites: s => s.tourFavorites.tours
    })
  },
  created() {
    this.$store.dispatch('getTourFavourites')
  },
  components: {
    TourCard
  }
}
</script>

<style lang="scss">
.page {
  &__title {
    font-size: 36px;
    color: $text-primary;
    margin-bottom: 24px;
  }

  &__subtitle {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 24px;
    color: $text-primary;
  }

  &__tours-favorite {
    margin-right: 30px;

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}

</style>