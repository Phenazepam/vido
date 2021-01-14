<template>

  <div class="container">
    <div class="main__header">
      <p class="main__breadcrumbs"> 
        Catalog > Basket 
      </p>
      <h1 class="main__title"> 
        Корзина 
      </h1>
    </div>
    <div class="main__content">

      <div class="row justify-between">
        <div class="basket">
          <div class="main__info-tip">
            Мы зарезервировали ваши места на 37:42 минуты
          </div>
          <div class="basket-cards">
            <div class="basket__card"
              v-for="el in card"
              :key="el.id"
            >
              <basket-card :data="el" />
            </div>
          </div>

          <!-- Adventures -->
          <!-- <div class="container">
            <vi-card-carousel
              :carousel_data = cards
            />
          </div> -->
          
        </div>

        <div class="basket-sidebar">
          <div class="basket-sidebar__ordering">
            <div class="ordering">
              <div class="ordering__total">Всего (2 позиции):</div>
              <div class="ordering__price">140.00 € </div>
              <p>Без дополнительных сборов и комиссий</p>
              <button class="btn_ordering">
                Оформить заказ
              </button>
              <button class="btn_enter-search">
                Продолжить поиск
              </button>
              <span>
                Гарантия лучшей цены
              </span>
            </div>
          </div>
          <div class="basket__faq">
            <div class="faq">
              <p>Часто задоваемые вопросы</p>
              <ul>
                <li>Можно ли внести изменения в заказ после бронирования?</li>
                <li>Можно ли внести изменения в заказ после бронирования?</li>
                <li>Безопасны ли платежи?</li>
                <li>Взимается ли комиссия за заказ?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <vi-card-carousel
      :carousel_title="carouselTitle"
      :carousel_data="cards"
    />
  </div>

</template>


<script>
import BasketCard from '@/components/BasketCard'
import ViCardCarousel from '../components/vi-card-carousel.vue'
import axios from 'axios'

export default {
  data: () => ({
    card: [
      {
        id: 0,
        type: 'Entrance ticket',
        title: 'La Graciosa Day trip to Fuerteventura and Corralejo',
        datetime: 'August 21, 2020 11:00 - 17:00, English',
        people: '1 Adult, 2 Senior, 1 Youth, 2 Child, 1 Infant',
        price: {
          saving: 'savings 15.44 €',
          base: '65.00 €'
        }
      },  
      {
        id: 1,
        type: 'Entrance ticket',
        title: 'La Graciosa Day trip to Fuerteventura and Corralejo',
        datetime: 'August 21, 2020 11:00 - 17:00, English',
        people: '1 Adult, 2 Senior, 1 Youth, 2 Child, 1 Infant',
        price: {
          saving: 'savings 10.12 €',
          base: '40.00 €'
        }
      }
    ],
    cards:[],
    carouselTitle: 'Popular Adventures',
  }),
  created(){
    axios.get('/api/cards')
    .then(Response => {
      this.cards = Response.data
    })
  },
  components: {
    BasketCard,
    ViCardCarousel,
  }
}
</script>

<style lang="scss">

.btn_ordering {
  border-radius: 12px;
  border: none;
  outline: none;
  background: $light-green-gradient;
  margin-top: 15px;
  padding: 15px;
  width: 223px;
  color: $white;
  font-size: 18px;
  font-weight: bold;
}

.btn_enter-search {
  border-radius: 12px;
  border: none;
  outline: none;
  background: $white;
  margin-top: 15px;
  padding: 15px;
  width: 223px;
  color: $white;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  color: $text-primary;
}

.basket {

  &__faq {
    margin-top: 25px  ;
    .faq {
      p {
        font-weight: bold;
        font-size: 18px;
        color: $text-primary;
      }
      ul {
        list-style: none;
        padding-left: 15px;
        li {
          margin-top: 15px;
          font-size: 15px;
          font-weight: 500;
          color: $text-primary;
        }
      }
    }
  }

  &__card {
    margin-bottom: 25px;
  }
  

  &-sidebar {
    width: 263px;
  
    &__ordering {
      background: #E9F9FF;
      border-radius: 12px;
      padding: 20px;
      text-align: center;

      .ordering {
        &__total {
          font-weight: normal;
          font-size: 16px;
          color: $text-primary;
        }

        &__price {
          padding: 8px 0 4px 0;
          font-weight: 600;
          font-size: 28px;
          color: $text-primary;
        }

        p {
          font-weight: 500;
          font-size: 12px;
          color: #6FA2B5;
        }

        span {
          display: inline-block;
          margin-top: 25px;
          font-weight: 600;
          font-size: 14px;
          color: $secondary;
        }
      }
    }
  }
}
</style>
