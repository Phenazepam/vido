<template>

  <div class="page-section">
    <div class="page-section__header">
      <div>
        <div class="page-breadcrumbs">
          Catalog > Search
        </div>
        <div class="page-title">
          Lanzarote, Canary Islands
        </div>
      </div>
      <div>
        <input-fileds
          search
          placeholder="Find something specific"/>
        <btn search>Search</btn>
      </div>
    </div>

    <div class="page-catalog catalog">

      <!-- category -->
      <div class="catalog-category category">
        <div class="category__item"
          v-for="el in category"
          :key="el"
        >
          <p>{{ el }}</p>
          <img src="@/../public/imgs/wooman.png">
        </div>
      </div>

      <div class="catalog-main">

        <!-- catalog-sidebar -->
        <div class="catalog-sidebar">
          <form>
            <div class="catalog-sidebar__select-dates">
              <p>When are you traveling?</p>
              <input-fileds
                datepicker
                placeholder="Select Dates"/>
            </div>

            <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Time
              </div>
              <div class="catalog-sidebar__control"
                v-for="el in sidebarFilters.time"
                :key="el.title"
              >
                <checkbox type="inverse">
                  <template v-slot:title>
                    {{ el.title }}
                  </template>
                </checkbox>
              </div>
            </div>

            <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Travel Services
              </div>
              <div class="catalog-sidebar__control"
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

            <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Duration
              </div>
              <div class="page-row">
                <div class="catalog-sidebar__control catalog-sidebar__control_tag"
                  v-for="(el, i) in sidebarFilters.duration"
                  :key="i"
                >
                  <checkbox-tag :value="el">
                    {{ el }}
                  </checkbox-tag>
                </div>
              </div>
            </div>

            <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Languages
              </div>
              <div class="page-row">
                <div class="catalog-sidebar__control catalog-sidebar__control_tag"
                  @click="checkedProp"
                  v-for="el in sidebarFilters.languages"
                  :key="el.value"
                >
                  <checkbox-tag :value="el.value">
                    {{ el.title }}
                  </checkbox-tag>
                </div>
              </div>
            </div>

            <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Other filters
              </div>
              <div class="catalog-sidebar__control"
                v-for="el in sidebarFilters.other"
                :key="el"
              >
                <checkbox type="inverse">
                  <template v-slot:title>
                    {{ el }}
                  </template>
                </checkbox>
              </div>
            </div>
          </form>
        </div>

        <!-- catalog-events -->
        <div class="catalog-events events">
          <div class="page-info">
            COVID-19: Check local travel restrictions and learn what we're doing to help keep you safe and your plans flexible. 
            <a>Learn more.</a>
          </div>
          <div class="events__header">
            <div class="events__found">
              Found  {{ tours.length }} events
            </div>
          
            <div class="events__sorting">
              <span>Sorting by:</span> 
              <v-select 
                :items="sortCard" 
                @input="sortTours"
              />  
            </div>
          </div>
          <div class="catalog-events__item"
            v-for="tour in tours"
            :key="tour.id"
          >
            <tour-card 
              horizontal
              :data="tour"
            ></tour-card>
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
import TourCard from '@/components/TourCard'
import Btn from '@/components/controls/Btn'
import InputFileds from '@/components/controls/InputFileds'
import vSelect from '@/components/controls/vSelect'

import { mapState } from 'vuex'


export default {
  name: 'Catalog',
  data: () => ({
    category: [
      'Outdoor Activities',
      'Tours & Adventure',
      'Tickets & Passes',
      'Travel Services'
    ],

    sortCard: [
      {
        text: 'Popular',
        value: 'popular'
      },
      {
        text: 'Price (low to high)',
        value: 'low'
      },
      {
        text: 'Price (high to low)',
        value: 'high'
      },
    ],

    sidebarFilters: {
      time: [
        {
          title: '08:00 - 12:00 hr',
          time: { to: '08:00', from: '12:00' }
        },
        {
          title: '12:00 - 17:00 hr',
          time: { to: '12:00', from: '17:00' }
        },
        {
          title: '17:00 - 23:59 hr',
          time: { to: '17:00', from: '23:59' }
        }
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
        {
          title: 'English',
          value: 'english'
        },
        {
          title: 'Spanish',
          value: 'spanish'
        },
        {
          title: 'German',
          value: 'german'
        },
        {
          title: 'French',
          value: 'french'
        }
      ]
    }
  }),
  computed: {
    ...mapState({
      tours: s => s.tours.tours
    })
  },
  methods: {
    sortTours (el) {
      this.$store.commit('sortTours', el.value)
    },
    checkedProp() {
      console.log(1);
    }
  },
  created () {
    this.$store.dispatch('getTours')
  },
  components: {
    Checkbox,
    CheckboxTag,
    TourCard,
    Btn,
    InputFileds,
    vSelect
  }
}
</script>

<style lang="scss">
  .page {
    &-section {
      width: 100%;
      max-width: 1150px;
      margin: auto;

      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    &-row {
      display: flex;
      flex-wrap: wrap;
    }

    &-justify-between {
      justify-content: space-between;
    }

    &-breadcrumbs {
      font-weight: 500;
      font-size: 12px;
      color: $text-secondary;
    }

    &-title {
      font-weight: bold;
      font-size: 36px;
      color: $text-primary;
      padding: 0 0 24px 0;
    }

    &-info {
      background: #FFF4E1;
      padding: 15px;
      color: #7E776A;
      font-size: 14px;
      font-weight: 600;
      border-radius: 8px;
      margin: 0 0 15px 0;
      
      a {
        color: $primary;
      }
    }

  }
</style>