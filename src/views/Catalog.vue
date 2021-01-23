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

            <div class="catalog-sidebar__item">
              <div class="catalog-sidebar__title">
                Travel Services
              </div>
              <div class="catalog-sidebar__control"
                v-for="(el, i) in filters.service.options"
                :key="i"
              >
                <checkbox 
                  type="inverse"
                  @input="filtration({ service: el.value })"
                >
                  <template v-slot:title>
                    {{ el.name }}
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
                  v-for="(el, i) in filters.duration.options"
                  :key="i"
                >
                  <checkbox-tag @input="filtration({ duration: el.value })">
                    {{ el.name }}
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
                  v-for="(el, i) in filters.languages.options"
                  :key="i"
                >
                  <checkbox-tag @input="filtration({ languages: el.value })">
                    {{ el.name }}
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
        name: 'languages',
        options: [
          {
            name: 'english', 
            value: 'english'
          },
          { 
            name: 'spanish', 
            value: 'spanish'
          },
          { 
            name: 'german', 
            value: 'german'
          },
          {
            name: 'french',
            value: 'french'
          }
        ],
        parameters: [],
        filtration: ({ events, parameters }, array = []) => {
          events.forEach(event => {
            event.properties.languages.forEach( el => {
              if (parameters.includes(el)) {
                if (!array.includes(event)) {
                  array.push(event)
                }
              }
            })
          })
          return array
        }
      },
      duration: {
        name: 'duration',
        options: [
          { 
            name: 'All day', 
            value: 720
          },
          { 
            name: '1-3 hours', 
            value: 60
          },
          { 
            name: '3-6 hours', 
            value: 180
          },
          { 
            name: 'Up to 1 hour', 
            value: 20
          },
          { 
            name: 'Several days', 
            value: 120
          },
        ],
        parameters: [],
        filtration: ({ events, parameters }, array = []) => {
          events.forEach(event => {
            if (parameters.includes(event.properties.duration)) {
              if(!array.includes(event)) {
                array.push(event)
              }
            }
          })
          return array
        }
      },
      service: {
        name: 'service',
        options: [
          { 
            name: 'Private Tours', 
            value: 'Private Tours'
          },
          { 
            name: 'Kid friendly', 
            value: 'Kid friendly'
          },
          { 
            name: 'Deals & Discounts', 
            value: 'Deals & Discounts'
          },
          { 
            name: 'Free Cancellation', 
            value: 'Free Cancellation'
          },
          { 
            name: 'Wheelchair accessible', 
            value: 'Wheelchair accessible'
          },
        ],
        parameters: [],
        filtration: ({ events, parameters }, array = []) => {
          events.forEach(event => {
            if (parameters.includes(event.properties.service)) {
              if(!array.includes(event)) {
                array.push(event)
              }
            }
          })
          return array
        }
      }
  
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

    filtration (options) {
      const prop = Object.keys(options)

      if(!this.filters[prop].parameters.includes(options[prop])) {
        this.filters[prop].parameters.push(options[prop])
      } else {
        this.filters[prop].parameters.splice(this.filters[prop].parameters.indexOf(options[prop]), 1)
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