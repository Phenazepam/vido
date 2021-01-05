<template>
  <div>
    <header class="header">
      <router-link to="/" tag="div" class="header__logo">
        <img aria-hidden="true" src="../../public/imgs/Logo.png" alt="vidodo"/>
      </router-link>

      <div class="header__control">
        <div class="header__control-item">
          <img src="../../public/imgs/lanzarote_icon.png" />
          Lanzarote
        </div>
        <div class="header__control-item">
          <vi-select
            class="languageSelector nav__item"
            v-model="selectedLanguage"
            :items="languageOptions"
            :active="selectedLanguage"
          />
        </div>
        <div class="header__control-item">
          EUR €
        </div>
      </div>

      <div class="header__links">
        
        <router-link 
          to="/catalog" 
          tag="div" 
          class="header__links-item"
        >
          <icon 
            name="icon icon_catalog" 
          />
          Каталог
        </router-link>

        <div class="header__links-item">
          <icon 
            name="icon icon_help" 
          />
          Помощь
        </div>

        <router-link 
          to="/favorites"
          tag="div"
          class="header__links-item"
        >
          <icon 
            name="icon icon_favorites" 
          />
          Избранное
        </router-link>

        <router-link 
          tag="div"
          to="/basket"
          class="header__links-item"
        >
          <icon 
            name="icon icon_basket" 
          />
          Корзина
        </router-link>
      </div>

      <div class="header__action" @click="auth.state = true">
        <btn
          class="btn_primary btn_singin"
          
        >
          Sing in
        </btn>
      </div>

    </header>

    <auth 
      :stateAuth="auth.state"
      @stateAuth="controlStateAuth"
    />


    <section class="main">
      <transition name="component-fade" mode="out-in">
        <router-view />
      </transition>
    </section>


    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <div class="footer__inner-forclients">
            <div class="footer__inner-forclients-title">For clients</div>
            <div class="footer__inner-forclients-item">Support</div>
            <div class="footer__inner-forclients-item">Contacts</div>
            <div class="footer__inner-forclients-item">Legal information</div>
            <div class="footer__inner-forclients-item">About Us</div>
          </div>
          <div class="footer__inner-paymentmethods">
            <div class="footer__inner-paymentmethods-title">Payment Methods</div>
            <div class="footer__inner-paymentmethods-inner">
              <div class="footer__inner-paymentmethods-inner-item">
                <img src="@/../public/imgs/footer/visa.png" alt="">
              </div>
              <div class="footer__inner-paymentmethods-inner-item">
                <img src="@/../public/imgs/footer/mastercard.png" alt="">
              </div>
              <div class="footer__inner-paymentmethods-inner-item">
                <img src="@/../public/imgs/footer/american.png" alt="">
              </div>
              <div class="footer__inner-paymentmethods-inner-item">
                <img src="@/../public/imgs/footer/paypal.png" alt="">
              </div>
              <div class="footer__inner-paymentmethods-inner-item">
                <img src="@/../public/imgs/footer/apple.png" alt="">
              </div>
              <div class="footer__inner-paymentmethods-inner-item">
                <img src="@/../public/imgs/footer/google.png" alt="">
              </div>
            </div>
          </div>
          <div class="footer__inner-other">
            <div class="footer__inner-other-stores">
              <div class="footer__inner-other-stores-item">
                <img src="@/../public/imgs/footer/app_store.png" alt="">
              </div>
              <div class="footer__inner-other-stores-item">
                <img src="@/../public/imgs/footer/google_play.png" alt="">
              </div>
            </div>
            <div class="footer__inner-other">
              <div class="footer__inner-other-title">
                Share with friends
              </div>
              <div class="footer__inner-other-social">
                <div class="footer__inner-other-social-item">
                  <img src="@/../public/imgs/footer/facebook_icon.png" alt="">
                </div>
                <div class="footer__inner-other-social-item">
                  <img src="@/../public/imgs/footer/twetter_icon.png" alt="">
                </div>
                <div class="footer__inner-other-social-item">
                  <img src="@/../public/imgs/footer/google_icon.png" alt="">
                </div>
              </div>
            </div>
            <div class="footer__inner-other-join">
              <div class="footer__inner-other-join-title">
                Join us
              </div>
              <div class="footer__inner-other-join-inner">
                <div class="footer__inner-other-join-inner-item">
                  <img src="@/../public/imgs/footer/join_facebook.png" alt="">
                </div>
                <div class="footer__inner-other-join-inner-item">
                  <img src="@/../public/imgs/footer/join_instagram.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__info">
          © 2020, Vidodo Guide LLP | Our policy and terms
        </div>
        <div class="footer__guide">
          <div class="footer__guide-title">
            Island guide
          </div>
          <img src="@/../public/imgs/footer/guide.png" alt="">
        </div>
        <div class="footer__message">
          <img src="@/../public/imgs/footer/message.png" alt="">
        </div>
      </div>

    </footer>
  </div>
</template>
<script>
import '@/assets/header.scss'

import Auth from '@/components/Auth'
import viSelect from '@/components/vi-select'
import Btn from '@/components/Btn'
import Icon from '@/components/Icon'

export default {
  name: "main-layout",
  data: () => ({
    auth: {
      state: false 
    },
    selectedLanguage: { value: 0, img: require('@/../public/imgs/header_language_polish.png') },
    languageOptions: [
      
    ],
  }),
  methods: {
    controlStateAuth (state) {
      this.auth.state = state
    }
  },
  components: {
    Auth,
    viSelect,
    Btn,
    Icon    
  },
};
</script>

<style lang="scss">
  .footer{
    position: relative;
    min-height: 434px;
    margin-top: 90px;
    background: no-repeat url(../../public/imgs/footer/bg_img.png);
    background-size: cover;
    background-position: center;

    &__inner{
      padding-top: 140px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      &-forclients{
        &-title{
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        &-item{
          font-size: 18px;
          font-weight: 500;
          padding-bottom: 4px;
          margin-bottom: 8px;
          cursor: pointer;
        }
      }
      &-paymentmethods{
        &-title{
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        &-inner{
          width: 235px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          &-item{
            cursor: pointer;
            width: 33.33%;
          }
        }
      }
      &-other{
        &-stores{
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          &-item:first-child{
            margin-right:5px;
          }
          &-item{
            cursor: pointer;
          }
        }
        &-title{
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 10px;
        }
        &-social{
          display: flex;
          justify-content: space-between;
          max-width: 150px;
          &-item{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background: white;
            cursor: pointer;
            transition: .3s;
          }
          &-item:hover{
            background: #DCDFE7;
          }
        }
        &-join{
          margin-top: 10px;
          &-title{
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 10px;
          }
          &-inner{
            display: flex;
            justify-content: space-between;
            max-width: 80px;
            &-item{
              cursor: pointer;
            }
          }
        }
      }
    }
    &__info{
      color: #1E2843;
      margin-top: 40px;
      text-align: center;
    }
    &__guide{
      position: absolute;
      right: 20px;
      bottom: 20px;
      display: flex;
      justify-content: space-between;
      width: 160px;
      &-title{
        font-weight: 600;
        font-size: 20px;
        margin-right: 12px;
      }
    }
    &__message{
      position: absolute;
      right: 15px;
      bottom: 100px;
    }
  }
</style>