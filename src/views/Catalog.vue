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
            <checkbox
              class="sidebar__checkbox checkbox__input_outline_"
              title="8:00 - 12:00 hr"
            />
            <checkbox
              class="sidebar__checkbox checkbox__input_outline_"
              title="12:00 - 17:00 hr"
            />
            <checkbox
              class="sidebar__checkbox checkbox__input_outline_"
              title="17:00 - 23:59 hr"
            />
            <checkbox
              class="sidebar__checkbox checkbox__input_outline_"
              title="Period"
            />
          </div>
          <div class="sidebar__item">
            <h3 class="sidebar__title">Travel Services</h3>
            <div>
              <checkbox
                class="sidebar__checkbox checkbox__input_outline_"
                title="Transportation"
              />
              <checkbox
                class="sidebar__checkbox checkbox__input_outline_"
                title="Transfer"
              />
              <checkbox
                class="sidebar__checkbox checkbox__input_outline_"
                title="Rentals"
              />
              <checkbox
                class="sidebar__checkbox checkbox__input_outline_"
                title="Photography"
              />
              <checkbox
                class="sidebar__checkbox checkbox__input_outline_"
                title="Other"
              />
            </div>
          </div>

          <div class="sidebar__item">
            <div class="sidebar__title">
              Duration
            </div>
            <div class="row">
              <div class="sidebar__filter">
                All day
              </div>
              <div class="sidebar__filter">
                1-3 hours
              </div>
              <div class="sidebar__filter">
                3-6 hours
              </div>
              <div class="sidebar__filter">
                Up to 1 hour
              </div>
              <div class="sidebar__filter">
                Several days
              </div>
            </div>
          </div>

          <div class="sidebar__item">
            <div class="sidebar__title">
              Languages
            </div>
            <div class="row">
              <div class="sidebar__filter">
                English
              </div>
              <div class="sidebar__filter">
                Spanish
              </div>
              <div class="sidebar__filter">
                German
              </div>
              <div class="sidebar__filter">
                French
              </div>
            </div>
          </div>

          <div class="sidebar__item">
            <div class="sidebar__title">
              Other filters
            </div>
            <div>
              <checkbox
                class="sidebar__checkbox"
                title="Private Tours"
              />
              <checkbox
                class="sidebar__checkbox"
                title="Kid friendly"
              />
              <checkbox
                class="sidebar__checkbox"
                title="Deals & Discounts"
              />
              <checkbox
                class="sidebar__checkbox"
                title="Free Cancellation"
              />
              <checkbox
                class="sidebar__checkbox"
                title="Pickup possible"
              />
              <checkbox
                class="sidebar__checkbox"
                title="Wheelchair accessible"
              />
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
            

            <card 
              class="card--horizonale"
            />
            <card 
              class="card--horizonale"
            />
            <card 
              class="card--horizonale"
            />
            <card 
              class="card--horizonale"
            />
            <card 
              class="card--horizonale"
            />
            <card 
              class="card--horizonale"
            />
            <card 
              class="card--horizonale"
            />
            <card 
              class="card--horizonale"
            />
            <card 
              class="card--horizonale"
            />
      
    
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import '@/assets/catalog.scss'

import Checkbox from '@/components/Checkbox'
import Card from '@/components/Card'

export default {
  name: 'Catalog',
  components: {
    Checkbox,
    Card
  }
}
</script>