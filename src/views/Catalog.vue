<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog__search">
        <h2 class="catalog__title">
          Lanzarote, Canary Islands
        </h2>
      </div>

      <div class="catalog__category">
        <div class="catalog__category-item">
          <p class="catalog__category-item-text">
            Outdoor Activities
          </p>
          <img src="@/../public/imgs/wooman.png">
        </div>
        <div class="catalog__category-item">
          <p class="catalog__category-item-text">
            Tours & Adventure
          </p>
          <img src="@/../public/imgs/wooman.png">
        </div>
        <div class="catalog__category-item">
          <p class="catalog__category-item-text">
            Tickets & Passes
          </p>
          <img src="@/../public/imgs/wooman.png">
        </div>
        <div class="catalog__category-item">
          <p class="catalog__category-item-text">
            Travel Services 
          </p>
          <img src="@/../public/imgs/wooman.png">
        </div>
      </div>



      <div class="catalog__main">
        <div class="catalog__sidebar sidebar">
          <div class="sidebar__header">
            <div class="sidebar__header-title">
              When are you traveling?
            </div>
          </div>
          <div class="sidebar__item">
            <h3 class="sidebar__title">Time</h3>

            <div 
              class="sidebar__control"
              v-for="el in sidebarFilters.time"
              :key="el"
            >
              <checkbox type="inverse">
                <template v-slot:title>
                  {{ el }}
                </template>
              </checkbox>
            </div>
          </div>

          <div class="sidebar__item">
            <h3 class="sidebar__title">Travel Services</h3>

            <div 
              class="sidebar__control"
              v-for="el in sidebarFilters.travel"
              :key="el"
            >
              <checkbox type="inverse">
                <template v-slot:title>
                  {{ el }}
                </template>
              </checkbox>
            </div>

          </div>

          <div class="sidebar__item">
            <div class="sidebar__title">
              Duration
            </div>
            <div class="row">
              
              <div 
                v-for="el in sidebarFilters.duration"
                :key="el"
                class="sidebar__filter"
              >
                <checkbox-tag>
                  {{ el }}
                </checkbox-tag>
              </div>
            
          
            </div>
          </div>

          <div class="sidebar__item">
            <div class="sidebar__title">
              Languages
            </div>
            <div class="row">

              <div 
                v-for="el in sidebarFilters.languages"
                :key="el"
                class="sidebar__filter"
              >
                <checkbox-tag>
                  {{ el }}
                </checkbox-tag>
              </div>

            </div>
          </div>

          <div class="sidebar__item">
            <div class="sidebar__title">
              Other filters
            </div>

            <div 
              class="sidebar__control"
              v-for="el in sidebarFilters.other"
              :key="el"
            >
              <checkbox 
                type="inverse">
                <template v-slot:title>
                  {{ el }}
                </template>
              </checkbox>
            </div>

          </div>
        </div>

        <div class="catalog__cards">

          <div class="catalog__covid-info">
            COVID-19: Check local travel restrictions and learn what we're doing to help keep you safe and your plans flexible. <a>Learn more</a>.
          </div>
          
          <div class="catalog__filters">
            <div class="filters">
              <div class="filters__found">
                Найдено 134 мероприятия
              </div>
              <div class="filters__control">
                <div class="filters__text">
                  
                </div>
              </div>
            </div>
          </div>

          <div class="cards">
            
            <tour-card horizontal
              v-for="tour in tours"
              :key="tour.id"
              :data="tour"
            >
            </tour-card>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import '@/assets/catalog.scss'

import Checkbox from '@/components/controls/Checkbox'
import CheckboxTag from '@/components/controls/CheckboxTag'
import Card from '@/components/Card'
import TourCard from '@/components/TourCard'

import { mapState } from 'vuex'


export default {
  name: 'Catalog',
  data: () => ({
    sidebarFilters: {
      time: [
        '8:00 - 12:00 hr',
        '12:00 - 17:00 hr',
        '17:00 - 23:59 hr',
        'Period'
      ],
      travel: [
        'Transportation',
        'Transfer',
        'Rentals',
        'Photography',
        'Other',
      ],
      other: [
        'Private Tours',
        'Kid friendly',
        'Deals & Discounts',
        'Free Cancellation',
        'Pickup possible',
        'Wheelchair accessible',
      ],
      duration: [
        'All day',
        '1-3 hours',
        '3-6 hours',
        'Up to 1 hour',
        'Several days'
      ],
      languages: [
        'English',
        'Spanish',
        'German',
        'French',
      ]
    }
  }),
  computed: {
    ...mapState({
      tours: s => s.tours.tours
    })
  },
  created () {
    this.$store.dispatch('getTours'),
    console.log(this.tours)
  },
  components: {
    Checkbox,
    CheckboxTag,
    Card,
    TourCard
  }
}
</script>