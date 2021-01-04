<template>
  <div class="vi-card-vertical">
    <div class="card">
      <router-link to="/event" tag="div" class="card__picture">
        <img
          :src="require(`@/../public/imgs/MainPage/PopularAdventures/${card_data.img}`)"
          width="262px"
          height="144px"
          alt="img"
        />
        <div class="card__picture-heart">
          <img
            src="@/../public/imgs/MainPage/PopularAdventures/heart_orange.png"
            alt=""
          />
        </div>
      </router-link>
      <div class="card__about">
        <div class="card__info">
          <div class="card__info-type">{{card_data.type}}</div>
          <div class="card__info-rating">
            <div class="card__info-rating-vidodo">
              <img
                src="@/../public/imgs/MainPage/PopularAdventures/rating_vidodo.png"
                alt=""
              />
              {{card_data.ratingVidodo}}
            </div>
            <div class="card__info-rating-general">
              <img
                src="@/../public/imgs/MainPage/PopularAdventures/rating_general.png"
                alt=""
              />
              {{card_data.ratingGeneral}}
            </div>
          </div>
        </div>
        <router-link to="/event" tag="div" class="card__title">
          {{card_data.title}}
        </router-link>
        <div class="card__description">
          {{card_data.description}}
        </div>
        <div class="card__footer">
          <div class="card__footer-time">{{card_data.duration}} min</div>
          <div class="card__footer-transport">
            <img
              src="@/../public/imgs/MainPage/PopularAdventures/truck.png"
              alt=""
            />
          </div>
          <div class="card__footer-price">
            <p><small>from</small></p>
            {{card_data.price}} €
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-card-vertical',
  props: {
    card_data:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    getImg(img){
      return img;
    }
  }
}
</script>
<style lang="scss" scoped>
  .card {
  width: 262px;
  position: relative;
  margin-right: 28px;
  &__picture {
    cursor: pointer;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    img{
      border-radius: 12px;
    }
    /* background-image: url(../../public/imgs/MainPage/PopularAdventures/item_picture_01.png);
    height: 144px; */
    &-heart {
      position: absolute;
      top: 16px;
      left: 16px;
      cursor: pointer;
      // border: 1px solid transparent;
      padding: 5px 5px 0px 5px;
      border-radius: 50%;
      transition: 0.2s;
      filter: contrast(0.18);
      
    }
    &-heart:hover {
      filter: contrast(1);
      //background-color: $primary;
      // border: 1px solid $primary;
    }
  }
  &__about {
    max-width: 262px;
    position: absolute;
    left: 0;
    top: 132px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: white;
  }
  &__info {
    display: flex;
    margin-top: 12px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    &-type {
      padding: 3px 8px;
      background-color: #4f9cf8;
      color: white;
      border-radius: 4px;
      font-size: 12px;
      margin-bottom: 0;
      text-overflow: clip; 
      max-width: 103px;
      white-space: nowrap; 
      overflow:hidden; 
    }
    &-rating {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-vidodo {
        display: flex;
        align-items: center;
        margin: 0 5px;
        padding: 3px 7px;
        border: 1px solid #dcdfe7;
        border-radius: 4px;
        font-size: 12px;
        img {
          padding-right: 4px;
          border-right: 1px solid #dcdfe7;
          margin-right: 3px;
        }
      }
      &-general {
        display: flex;
        align-items: center;
        margin: 0 5px;
        padding: 2px 6px;
        border: 1px solid #dcdfe7;
        border-radius: 4px;
        font-size: 12px;
        img {
          padding-right: 2px;
          border-right: 1px solid #dcdfe7;
          margin-right: 3px;
        }
      }
    }
  }
  &__title {
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    margin-top: 8px;
    max-width: 230px;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
  &__description {
    max-width: 230px;
    font-size: 14px;
    line-height: 1.5;
    margin-top: 4px;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 12px;
    margin-top: 30px;
    &-time {
      margin-top: 20px;
      font-size: 12px;
      color: #b7bcca;
    }
    &-transport {
      margin-top: 20px;
    }
    &-price {
      margin-left: 75px;
      font-size: 22px;
      font-weight: 600;
      text-align: right;
      small {
        font-size: 12px;
        color: #b7bcca;
      }
    }
  }
}
</style>