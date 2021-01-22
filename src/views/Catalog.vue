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
          <form ref="form" @submit.prevent="filtersEvents">
            <div class="catalog-sidebar__select-dates">
              <p>When are you traveling?</p>
              <input-fileds
                datepicker
                placeholder="Select Dates"/>
            </div>

            <!-- <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title" >
                Time
              </div>
              <div class="catalog-sidebar__control"
                v-for="el in sidebarFilters.time"
                :key="el.title"
              >
                <checkbox 
                  type="inverse"
                  :value="el.value"
                  @input="filter"
                >
                  <template v-slot:title>
                    {{ el.title }}
                  </template>
                </checkbox>
              </div>
            </div> -->

            <!-- <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Travel Services
              </div>
              <div class="catalog-sidebar__control"
                v-for="el in sidebarFilters.travel"
                :key="el"
              >
                <checkbox 
                  type="inverse"
                  @isChecked="isChecked($event, 'travel')"
                >
                  <template v-slot:title>
                    {{ el }}
                  </template>
                </checkbox>
              </div>
            </div> -->

            <!-- <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Duration
              </div>
              <div class="page-row">
                <div class="catalog-sidebar__control catalog-sidebar__control_tag"
                  v-for="(el, i) in sidebarFilters.duration"
                  :key="i"
                >
                  <checkbox-tag 
                    :value="el"
                    @isChecked="isChecked($event, 'duration')"
                  >
                    {{ el }}
                  </checkbox-tag>
                </div>
              </div>
            </div> -->

            <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Languages
              </div>
              <div class="page-row">
                <div class="catalog-sidebar__control catalog-sidebar__control_tag"
                  v-for="el in filters.languages.value"
                  :key="el"
                >
                  <checkbox-tag @input="filtration({ languages: el })">
                    {{ el }}
                  </checkbox-tag>
                </div>
              </div>
            </div>

            <!-- <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Other filters
              </div>
              <div class="catalog-sidebar__control"
                v-for="el in sidebarFilters.other"
                :key="el"
              >
                <checkbox 
                  type="inverse"
                  @isChecked="isChecked($event, 'other')"
                >
                  <template v-slot:title>
                    {{ el }}
                  </template>
                </checkbox>
              </div>
            </div> -->
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

          <transition-group name="list" tag="div">
            <div class="catalog-events__item"
              v-for="tour in tours"
              :key="tour.id"
            >
              <tour-card 
                horizontal
                :data="tour"
              ></tour-card>
            </div>
          </transition-group>

        </div>

      </div>
    </div>
    
  </div>

</template>

<script>
import '@/assets/catalog.scss'

import Checkbox from '@/components/controls/Checkbox'
import CheckboxTag from '@/components/controls/CheckboxTag'
import InputFileds from '@/components/controls/InputFileds'
import vSelect from '@/components/controls/vSelect'
import TourCard from '@/components/TourCard'
import Btn from '@/components/controls/Btn'

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
          value: { to: '08:00', from: '12:00' }
        },
        {
          title: '12:00 - 17:00 hr',
          value: { to: '12:00', from: '17:00' }
        },
        {
          title: '17:00 - 23:59 hr',
          value: { to: '17:00', from: '23:59' }
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
    },

    filters: {
      languages: {
        value: ['english', 'spanish', 'german', 'french'],
        parameters: [],
        filtration: ({ events, parameters, value }) => {
          return parameters.reduce((events, parameter) => {
            return events.filter(n => {
              if (n.properties.languages.includes(parameter)) {
                console.log(n);
                return n 
              }
            })
          }, events)
        },
      },
  
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

    filtration (value) {
      const prop = Object.keys(value)

      if(!this.filters[prop].parameters.includes(value[prop])) {
        this.filters[prop].parameters
          .push(value[prop])
      } else {
        this.filters[prop].parameters
          .splice(this.filters[prop].parameters.indexOf(value[prop]), 1)
      }  

      this.$store.commit('filterEvents', this.filters[prop])
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