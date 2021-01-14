<template>
  <div class="basket-card">
    <div class="row">
      <div class="basket-card__picture">
        <div class="picture">
          <img src="" alt="">
        </div>
      </div>
      <div class="basket-card__description">
        <div class="description">
          <div class="description__type">
            {{ data.type }}
          </div>
          <div class="description__title">
            {{ data.title }}
          </div>
          <div class="description__properties">
            <div class="properties">
              <div class="properties__datetime">
                {{ data.datetime }}
              </div>
              <div class="properties__people">
                {{ data.people }}
              </div>
              <div class="properties__cancel-info">
                <div class="row">
                  <div>
                    Free cancelation
                  </div>
                  <p>
                    Cancel your reservation by 11:00 on 31 August,
                    to receive a full refund
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="basket-card__price">
        <div class="price">
          <div class="price__saving">
            {{ data.price.saving }}
          </div>
          <div class="price__base">
            {{ data.price.base }}
          </div>
          <button>
            <icon-base name="delete"  width="20" height="20" viewBox="0 0 20 20" />
            Delete
          </button>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import IconBase from './IconBase'

export default {
  name: 'BasketCard',
  props: {
    data: Object
  },
  components: {
    IconBase
  }
}
</script>


<style lang="scss">
  .basket-card {
    width: 848px;
    padding: 24px;
    background: $white;
    border: 1px solid $gray;
    box-sizing: border-box;
    border-radius: 8px;

    .picture {
      width: 110px;
      height: 110px;
      margin: 0 20px 0 0;
      border-radius: 11px;
      border: 1px solid $gray;
    }

    .description {
      &__type {
        display: inline;
        background: $yellow;
        border-radius: 2px;
        color: $white;
        font-size: 12px;
        padding: 3px 8px;
      }

      &__title {
        margin: 4px 0 8px 0;
        font-weight: bold;
        font-size: 22px;
        color: $text-primary;
      }

      .properties {
        &__datetime {
          font-weight: 500;
          font-size: 20px;
          color: $text-primary;
          margin-bottom: 9px;
        }

        &__people {
          font-size: 16px;
          margin-bottom: 20px;
        }

        &__cancel-info {
          .row {
            div {
              background: $secondary;
              border-radius: 2px;
              color: $white;
              padding: 7px 35px;
              margin: 0 15px 0 0;
            }
            p {
              font-size: 14px;
              color: $green;
              max-width: 300px;
            }
          }
        }
      }
    }

    &__price {
      margin: 0 0 0 22px;
      .price {
        margin: 64px 0 0 0;
        text-align: right;

        &__saving {
          font-weight: 500;
          font-size: 12px;
          color: $primary;
        }

        &__base {
          margin: 8px 0 25px 0;
          font-size: 24px;
          font-weight: 600;
          color: $text-primary;
        }
        
        button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 12px;
          color: #8F95A1;
          font-size: 14px;
          background: $white;
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          outline: none;
          border: none;
          width: 91px;
        }
      }
    }
  }
</style>