<template>
  <div class="basket">
    <div class="container">
      <div class="basket__title">
        Корзина
      </div>
      <div class="basket__text">
        Ваша корзина пуста. Когда вы добавляете мероприятие в корзину, мы резервируем его за вами на 60 минут.
      </div>
      <div class="basket__search-catalog">

          <img src="@/../public/imgs/search.png" alt="">
          <p>Попробуйте найти подходящее мероприятие </p>
          <img src="@/../public/imgs/arrow-right.png" class="arrow" alt="">
          <button @click="$router.push('/catalog')">Перейти в каталог</button>

      </div>
      

      <div class="adventures">
        <div class="adventures__title">You may also like</div>
          <div class="adventures__slider slider">
            <div class="slider__item card">

              <div class="card__picture">
                <img
                  src="@/../public/imgs/MainPage/PopularAdventures/item_picture_01.png"
                  alt=""
                />
                <div class="card__picture-heart">
                  <img
                    src="@/../public/imgs/MainPage/PopularAdventures/heart.png"
                    alt=""
                  />
                </div>
              </div>

              <div class="card__about">
                <div class="card__info">
                  <div class="card__info-type">Outdoor Classes</div>
                  <div class="card__info-rating">
                    <div class="card__info-rating-vidodo">
                      <img
                        src="@/../public/imgs/MainPage/PopularAdventures/rating_vidodo.png"
                        alt=""
                      />
                      4.2
                    </div>
                    <div class="card__info-rating-general">
                      <img
                        src="@/../public/imgs/MainPage/PopularAdventures/rating_general.png"
                        alt=""
                      />
                      4.5
                    </div>
                  </div>
                </div>
                <div class="card__title">
                  Adult-only sailing trip to Papagayo with lunch
                </div>
                <div class="card__description">
                  Discover the delights of Lanzarote with this full day tour.
                  Enjoy views of this unique with this full day tour ...
                </div>
                <div class="card__footer">
                  <div class="card__footer-time">20 min</div>
                  <div class="card__footer-transport">
                    <img
                      src="@/../public/imgs/MainPage/PopularAdventures/truck.png"
                      alt=""
                    />
                  </div>
                  <div class="card__footer-price">
                    <p><small>from</small></p>
                    24.00 €
                  </div>
                </div>
              </div>
            </div>
            <div class="slider__item card">
              <div class="card__picture">
                <img
                  src="@/../public/imgs/MainPage/PopularAdventures/item_picture_01.png"
                  alt=""
                />
                <div class="card__picture-heart">
                  <img
                    src="@/../public/imgs/MainPage/PopularAdventures/heart.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="card__about">
                <div class="card__info">
                  <div class="card__info-type">Outdoor Classes</div>
                  <div class="card__info-rating">
                    <div class="card__info-rating-vidodo">
                      <img
                        src="@/../public/imgs/MainPage/PopularAdventures/rating_vidodo.png"
                        alt=""
                      />
                      4.2
                    </div>
                    <div class="card__info-rating-general">
                      <img
                        src="@/../public/imgs/MainPage/PopularAdventures/rating_general.png"
                        alt=""
                      />
                      4.5
                    </div>
                  </div>
                </div>
                <div class="card__title">
                  Adult-only sailing trip to Papagayo with lunch
                </div>
                <div class="card__description">
                  Discover the delights of Lanzarote with this full day tour.
                  Enjoy views of this unique with this full day tour ...
                </div>
                <div class="card__footer">
                  <div class="card__footer-time">20 min</div>
                  <div class="card__footer-transport">
                    <img
                      src="@/../public/imgs/MainPage/PopularAdventures/truck.png"
                      alt=""
                    />
                  </div>
                  <div class="card__footer-price">
                    <p><small>from</small></p>
                    24.00 €
                  </div>
                </div>
              </div>
            </div>
            <div class="slider__item card">
              <div class="card__picture">
                <img
                  src="@/../public/imgs/MainPage/PopularAdventures/item_picture_01.png"
                  alt=""
                />
                <div class="card__picture-heart">
                  <img
                    src="@/../public/imgs/MainPage/PopularAdventures/heart.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="card__about">
                <div class="card__info">
                  <div class="card__info-type">Outdoor Classes</div>
                  <div class="card__info-rating">
                    <div class="card__info-rating-vidodo">
                      <img
                        src="@/../public/imgs/MainPage/PopularAdventures/rating_vidodo.png"
                        alt=""
                      />
                      4.2
                    </div>
                    <div class="card__info-rating-general">
                      <img
                        src="@/../public/imgs/MainPage/PopularAdventures/rating_general.png"
                        alt=""
                      />
                      4.5
                    </div>
                  </div>
                </div>
                <div class="card__title">
                  Adult-only sailing trip to Papagayo with lunch
                </div>
                <div class="card__description">
                  Discover the delights of Lanzarote with this full day tour.
                  Enjoy views of this unique with this full day tour ...
                </div>
                <div class="card__footer">
                  <div class="card__footer-time">20 min</div>
                  <div class="card__footer-transport">
                    <img
                      src="@/../public/imgs/MainPage/PopularAdventures/truck.png"
                      alt=""
                    />
                  </div>
                  <div class="card__footer-price">
                    <p><small>from</small></p>
                    24.00 €
                  </div>
                </div>
              </div>
            </div>
            <div class="slider__item card">
              <div class="card__picture">
                <img
                  src="@/../public/imgs/MainPage/PopularAdventures/item_picture_01.png"
                  alt=""
                />
                <div class="card__picture-heart">
                  <img
                    src="@/../public/imgs/MainPage/PopularAdventures/heart.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="card__about">
                <div class="card__info">
                  <div class="card__info-type">Outdoor Classes</div>
                  <div class="card__info-rating">
                    <div class="card__info-rating-vidodo">
                      <img
                        src="@/../public/imgs/MainPage/PopularAdventures/rating_vidodo.png"
                        alt=""
                      />
                      4.2
                    </div>
                    <div class="card__info-rating-general">
                      <img
                        src="@/../public/imgs/MainPage/PopularAdventures/rating_general.png"
                        alt=""
                      />
                      4.5
                    </div>
                  </div>
                </div>
                <div class="card__title">
                  Adult-only sailing trip to Papagayo with lunch
                </div>
                <div class="card__description">
                  Discover the delights of Lanzarote with this full day tour.
                  Enjoy views of this unique with this full day tour ...
                </div>
                <div class="card__footer">
                  <div class="card__footer-time">20 min</div>
                  <div class="card__footer-transport">
                    <img
                      src="@/../public/imgs/MainPage/PopularAdventures/truck.png"
                      alt=""
                    />
                  </div>
                  <div class="card__footer-price">
                    <p><small>from</small></p>
                    24.00 €
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


  </div>
</template>


<style scoped lang="scss">
  .basket {
    margin: 70px 0;
  }
  .basket__title {
    font-weight: bold;
    font-size: 36px;
    color: $text-primary;
    padding: 0 0 24px 0;
  }
  .basket__text {
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    color: $text-primary;
    padding: 0 0 32px 0;
  }
  .basket__search-catalog {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    max-width: 676px; 
    background: $light-blue;
    border-radius: 8px;
    margin: 0 0 124px 0;

    p {
      font-weight: 600;
      font-size: 18px;
      color: $text-primary;
    }

    img {
      width: 24px;
      height: 24px;
      display: inline;
    }

    .arrow {
      width: 25px;
      height: 14px;
    }

    button {
      padding: 8px 12px;
      color: $text-primary;
      background: $white;
      border-radius: 8px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
      border: none;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }

  
/* Adventures */
.adventures {
  margin-bottom: 70px;
  &__title {
    font-size: 36px;
    font-weight: 600;
  }
  &__slider {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
}
.adventures__slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.slider {
  display: flex;
  justify-content: space-between;
  &__item {
    width: 262px;
  }
}
.card {
  width: 262px;
  position: relative;
  min-height: 356px;

  &__picture {
    &-heart {
      position: absolute;
      top: 16px;
      left: 16px;
      cursor: pointer;
      padding: 5px 5px 0px 5px;
      border-radius: 50%;
      transition: 0.2s;
    }

    &-heart:hover {
      background-color: $primary;
    }

  }
  &__about {
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
    &-type {
      padding: 3px 8px;
      background-color: #4f9cf8;
      color: white;
      border-radius: 4px;
      font-size: 12px;
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
        }
      }
    }
  }
  &__title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    margin-top: 8px;
  }
  &__description {
    font-size: 14px;
    line-height: 1.5;
    margin-top: 4px;
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