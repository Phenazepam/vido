<template>
  <div class="event">
    <div class="container">
      <div class="row">
        <div class="event__title">
          {{ event_data.title }}
        </div>
        <div class="row">
          <div class="event__heart">
            <img src="@/../public/imgs/Event/heart.png" alt="" />
          </div>
          <div class="event__price">
            <p class="event__price-other">from</p>
            <p class="event__price-amount">{{ event_data.price }} €</p>
            <p class="event__price-other">for person</p>
          </div>
        </div>
      </div>
      <div class="event__info">
        <div class="event__info-type">{{ event_data.type }}</div>
        <div class="event__info-ratingVidodo">
          <img src="@/../public/imgs/Event/rating_vidodo.png" alt="" />
          {{ event_data.ratingVidodo }}
          <div class="event__info-ratingVidodo-reviews">
            Reviews: {{ event_data.reviewsVidodo }}
          </div>
        </div>
        <div class="event__info-ratingGeneral">
          <img src="@/../public/imgs/Event/rating_general.png" alt="" />
          {{ event_data.ratingGeneral }}
          <div class="event__info-ratingVidodo-reviews">
            Reviews: {{ event_data.reviewsGeneral }}
          </div>
        </div>
        <div class="event__info-location">
          <div class="event__info-location-poi">
            <svg
              width="13"
              height="18"
              viewBox="0 0 13 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.2377 2.20528L2.23759 2.20539C1.20153 3.23235 0.592288 4.62371 0.531833 6.09226C0.510681 6.30477 0.500056 6.51823 0.499985 6.73184L0.500014 6.73569C0.501545 6.94149 0.519069 7.14686 0.552423 7.34986C0.675343 8.55587 1.42459 10.3055 2.31453 11.9943C3.22094 13.7143 4.3193 15.4552 5.20062 16.6546C5.48563 17.0427 5.87664 17.4567 6.40959 17.4969C6.97482 17.5395 7.43015 17.1524 7.80547 16.6454L7.80549 16.6453C8.69164 15.4479 9.78832 13.7081 10.6917 11.9896C11.5787 10.3024 12.3233 8.55499 12.4464 7.35154C12.4804 7.14814 12.4983 6.9423 12.5 6.73599H12.5L12.5 6.73183C12.4999 6.51712 12.4893 6.30255 12.4681 6.08893C12.4058 4.61927 11.7924 3.22805 10.7516 2.20428C8.45009 -0.062061 4.5391 -0.0744526 2.2377 2.20528ZM6.60331 3.51619C7.07279 3.53603 7.52943 3.68734 7.9229 3.95555C8.34534 4.2435 8.67655 4.65374 8.87329 5.13587C9.07006 5.61809 9.123 6.14957 9.02501 6.66304C8.92703 7.17646 8.68285 7.64742 8.32476 8.01721L8.32473 8.01719L8.32037 8.0218C8.0848 8.27133 7.80228 8.46825 7.49058 8.601C7.17891 8.73373 6.84432 8.79965 6.50735 8.79498L6.49979 8.79488L6.49223 8.795C6.15934 8.80046 5.82871 8.73516 5.52122 8.60291C5.21369 8.47064 4.93568 8.27415 4.70519 8.02529L4.69933 8.01896L4.69325 8.01283C4.45188 7.76962 4.25966 7.47927 4.12827 7.15835C3.99687 6.83742 3.92908 6.49265 3.92908 6.14417C3.92908 5.79568 3.99687 5.45092 4.12827 5.12998C4.25966 4.80907 4.45188 4.51871 4.69325 4.2755L4.69333 4.27558L4.70049 4.26805C4.93374 4.02305 5.21309 3.83016 5.52094 3.70071C5.82876 3.57127 6.15891 3.50786 6.49107 3.51408L6.60331 3.51619Z"
                stroke="#1E2843"
              />
            </svg>
          </div>
          <div class="event__info-location-name">
            {{ event_data.location }}
          </div>
        </div>
      </div>
      <div class="event__photo">
        <div class="row">
          <div class="event__photo-main">
            <div class="event__photo-main-controls">
              <div
                class="event__photo-main-controls-prev"
                @click="prevMainPhoto(pictures[pictures.length - 1])"
              >
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.79688 0.800781L1.59687 5.00078L5.79688 9.20078"
                    stroke="#1E2843"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                class="event__photo-main-controls-next"
                @click="nextMainPhoto(pictures[0])"
              >
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.20312 0.800781L5.40313 5.00078L1.20313 9.20078"
                    stroke="#1E2843"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <img v-if="mainPicture !== ''"
              :src="require(`@/../public/imgs/Event/${mainPicture}`)"
              alt=""
            />
          </div>
          <div class="event__photo-others">
            <div
              class="event__photo-others-picture"
              v-for="pic in pictures"
              :key="pic"
              @click="changeMainPhoto(pic)"
            >
              <img 
                v-if="pic !== undefined"
                :src="require(`@/../public/imgs/Event/${pic}`)" 
                alt="" 
              />
              <div class="event__photo-others-onhover">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="event__shortdesc">
        Spend a fantastic day exploring Lanzarote. Explore the picturesque town
        of Yaisa on the edge of the volcano, before you have the opportunity to
        appreciate the volcanic crater on Mount Timanfaya, or just have a cup of
        coffee with milk (cafe con leche).
      </div>
      <div class="event__about">
        <div class="event__about-title">About the event</div>
        <div class="row">
          <div class="event__about-item">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V12C1 11.4696 1.21071 10.9609 1.58579 10.5858C1.96086 10.2107 2.46957 10 3 10H6M13 8V4C13 3.20435 12.6839 2.44129 12.1213 1.87868C11.5587 1.31607 10.7956 1 10 1L6 10V21H17.28C17.7623 21.0055 18.2304 20.8364 18.5979 20.524C18.9654 20.2116 19.2077 19.7769 19.28 19.3L20.66 10.3C20.7035 10.0134 20.6842 9.72068 20.6033 9.44225C20.5225 9.16382 20.3821 8.90629 20.1919 8.68751C20.0016 8.46873 19.7661 8.29393 19.5016 8.17522C19.2371 8.0565 18.9499 7.99672 18.66 8H13Z"
                stroke="#8E93A0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="event__about-item-desc">
              <div class="event__about-item-desc-title">
                Cancellation 24 hours before the start of the activity with a
                full refund
              </div>
            </div>
          </div>
          <div class="event__about-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M2.20111 13.6132C2.12933 13.0369 2.11345 12.4514 2.15454 11.8746C2.1944 11.2996 2.28996 10.7272 2.4398 10.1707C2.58964 9.61421 2.79189 9.07251 3.04435 8.55379C3.29877 8.03046 3.60578 7.53221 3.95314 7.07185C4.31012 6.60017 4.71439 6.16238 5.15422 5.77219C6.05549 4.97125 7.14878 4.33888 8.29443 3.95919C8.85486 3.77188 9.43526 3.64117 10.02 3.56799C10.5924 3.49734 11.1765 3.4811 11.7592 3.52229C12.3333 3.56265 12.9071 3.65858 13.4631 3.80755C14.019 3.95652 14.564 4.16037 15.0808 4.4116C15.6052 4.66775 16.1038 4.97339 16.5628 5.32038C17.034 5.6765 17.4717 6.08077 17.8624 6.52146C18.2632 6.97365 18.6219 7.47093 18.9279 8.00093C18.9348 8.0129 18.9493 8.01748 18.9612 8.01057L19.8032 7.52447C20.1606 7.31811 20.6 7.60918 20.5494 8.01879L20.1431 11.3075C20.1024 11.6371 19.7576 11.8362 19.4519 11.7066L16.4006 10.4141C16.0206 10.2531 15.9882 9.72706 16.3456 9.5207L17.1858 9.0356C17.1978 9.02869 17.2028 9.0129 17.1959 9.00093C16.9574 8.58784 16.6783 8.20048 16.3669 7.84911C16.0627 7.50626 15.7236 7.19284 15.3571 6.91602C15.0004 6.64621 14.6119 6.40744 14.2045 6.20968C13.8025 6.01338 13.379 5.85601 12.9455 5.73911C12.512 5.62221 12.0662 5.54816 11.6208 5.51666C11.1682 5.48469 10.7124 5.49726 10.2672 5.55221C9.81314 5.60769 9.36186 5.71004 8.92615 5.85537C8.03577 6.15119 7.18324 6.64455 6.48136 7.26687C6.14025 7.57004 5.8251 7.91019 5.54827 8.27671C5.2776 8.63389 5.04019 9.02269 4.84143 9.42843C4.6465 9.8308 4.48739 10.2552 4.37136 10.6882C4.25483 11.1204 4.18078 11.5662 4.14941 12.0138C4.11717 12.462 4.12924 12.9169 4.18532 13.366C4.23967 13.8161 4.34239 14.2661 4.48749 14.7054C4.63758 15.1533 4.83351 15.5887 5.07151 16.0009C5.30951 16.4132 5.58858 16.8005 5.89949 17.151C6.20839 17.4981 6.54667 17.812 6.90982 18.085C7.27024 18.3573 7.65767 18.5943 8.06378 18.7917C8.46578 18.988 8.88883 19.1467 9.32136 19.2619C9.75439 19.3779 10.2015 19.4523 10.6461 19.4843C11.0982 19.5155 11.5527 19.5047 11.9988 19.4493C12.4546 19.3928 12.9059 19.2905 13.3399 19.1461C14.2289 18.8499 15.0815 18.3588 15.7847 17.7346C16.1275 17.4305 16.4409 17.0913 16.7177 16.7248C16.9875 16.3681 17.2263 15.9797 17.4241 15.5722C17.5476 15.3191 17.6558 15.0576 17.7481 14.7904C17.8382 14.5297 18.1104 14.3711 18.3769 14.4425L19.3438 14.7016C19.6103 14.773 19.77 15.0473 19.684 15.3095C19.5562 15.6993 19.4015 16.0806 19.2222 16.4486C18.9669 16.9724 18.6604 17.4715 18.3134 17.9305C17.9573 18.4017 17.553 18.8395 17.1123 19.2302C16.661 19.6305 16.1637 19.9892 15.6337 20.2952C15.1037 20.6012 14.5435 20.853 13.9721 21.0432C13.4134 21.2295 12.8326 21.3616 12.2465 21.4344C11.6733 21.5055 11.0878 21.5214 10.5051 21.4802C9.93189 21.4394 9.36028 21.3433 8.8043 21.1943C8.24833 21.0453 7.70477 20.8419 7.18791 20.5906C6.66645 20.3374 6.16733 20.0309 5.70461 19.6815C5.23815 19.3296 4.80086 18.9262 4.40394 18.4787C4.00315 18.0265 3.64446 17.5292 3.33946 17.0009C3.03446 16.4727 2.78315 15.9134 2.59094 15.3385C2.40286 14.7727 2.27215 14.1923 2.20111 13.6132Z"
                  fill="#8E93A0"
                />
                <path
                  d="M10.5 9V13.5L13.5 15"
                  stroke="#8E93A0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(-1 0 0 1 24 0)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div class="event__about-item-desc">
              <div class="event__about-item-desc-title">Duration: 6h</div>
              <div class="event__about-item-desc-text">Start time 11:30</div>
            </div>
          </div>
          <div class="event__about-item">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.59 12.41L12.42 19.58C12.2343 19.766 12.0137 19.9135 11.7709 20.0141C11.5281 20.1148 11.2678 20.1666 11.005 20.1666C10.7422 20.1666 10.4819 20.1148 10.2391 20.0141C9.99632 19.9135 9.77575 19.766 9.59 19.58L1 11V1H11L19.59 9.59C19.9625 9.96473 20.1716 10.4716 20.1716 11C20.1716 11.5284 19.9625 12.0353 19.59 12.41V12.41Z"
                stroke="#8E93A0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6H6.01"
                stroke="#8E93A0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="event__about-item-desc">
              <div class="event__about-item-desc-title">
                Paper and mobile vouchers accepted
              </div>
            </div>
          </div>
          <div class="event__about-item">
            <svg
              width="25"
              height="19"
              viewBox="0 0 25 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9524 17.9997V16.3807C13.9524 15.5219 13.6112 14.6983 13.004 14.091C12.3967 13.4837 11.5731 13.1426 10.7143 13.1426H4.2381C3.3793 13.1426 2.55568 13.4837 1.94842 14.091C1.34116 14.6983 1 15.5219 1 16.3807V17.9997"
                stroke="#8E93A0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.47638 9.90392C9.26473 9.90392 10.7145 8.45418 10.7145 6.66583C10.7145 4.87748 9.26473 3.42773 7.47638 3.42773C5.68803 3.42773 4.23828 4.87748 4.23828 6.66583C4.23828 8.45418 5.68803 9.90392 7.47638 9.90392Z"
                stroke="#8E93A0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.6674 4.44048C23.6693 4.97471 23.5028 5.50172 23.1817 5.97858C22.8009 6.54999 22.2155 7.03062 21.4911 7.36661C20.7667 7.70261 19.9318 7.88071 19.0801 7.88095C18.3678 7.88235 17.6651 7.75753 17.0293 7.51667L13.9531 8.28571L14.9785 5.97858C14.6574 5.50172 14.4909 4.97471 14.4928 4.44048C14.4931 3.80167 14.7306 3.17554 15.1786 2.63223C15.6266 2.08892 16.2674 1.64988 17.0293 1.3643C17.6651 1.12344 18.3678 0.998619 19.0801 1.00001H19.3499C20.4748 1.04656 21.5373 1.40265 22.3339 2.00012C23.1305 2.59759 23.6053 3.39444 23.6674 4.2381V4.44048Z"
                stroke="#8E93A0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="event__about-item-desc">
              <div class="event__about-item-desc-title">Tour guide</div>
              <div class="event__about-item-desc-text">
                Spanish, English, French, German
              </div>
            </div>
          </div>
          <div class="event__about-item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99935 18.3327C14.6017 18.3327 18.3327 14.6017 18.3327 9.99935C18.3327 5.39698 14.6017 1.66602 9.99935 1.66602C5.39698 1.66602 1.66602 5.39698 1.66602 9.99935C1.66602 14.6017 5.39698 18.3327 9.99935 18.3327Z"
                stroke="#8E93A0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.10742 4.10742L15.8908 15.8908"
                stroke="#8E93A0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="event__about-item-desc">
              <div class="event__about-item-desc-title">Not suitable for:</div>
              <div class="event__about-item-desc-text">
                People in wheelchairs
              </div>
            </div>
          </div>
          <div class="event__about-item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 15C2.91667 15 1.25 14.5 1.25 12.5C1.25 10.5 1.25 6.66667 1.25 5C1.25 4.16667 1.75 2.5 3.75 2.5C5.50273 2.5 9.30351 2.5 13.3014 2.5C14.3552 2.5 15.3317 3.0529 15.8739 3.95651L18.3225 8.03747C18.6022 8.50371 18.75 9.03722 18.75 9.58095V13.75C18.75 14.1667 18.5 15 17.5 15H16.25"
                stroke="#8E93A0"
                stroke-width="2"
              />
              <circle
                cx="5.625"
                cy="15.625"
                r="2.125"
                stroke="#8E93A0"
                stroke-width="2"
              />
              <circle
                cx="14.375"
                cy="15.625"
                r="2.125"
                stroke="#8E93A0"
                stroke-width="2"
              />
              <path d="M7.5 15L11.875 15" stroke="#8E93A0" stroke-width="2" />
              <rect
                x="4.75"
                y="6"
                width="3"
                height="4.25"
                rx="1"
                stroke="#8E93A0"
                stroke-width="2"
              />
              <rect
                x="10.75"
                y="6"
                width="3"
                height="4.25"
                rx="1"
                stroke="#8E93A0"
                stroke-width="2"
              />
            </svg>

            <div class="event__about-item-desc">
              <div class="event__about-item-desc-title">With transfer</div>
              <div class="event__about-item-desc-text">
                Pick-up at or near your hotel in Lanzarote. Meet at Playa Blanca
                at 8:40 am. Puerto Calero and Puerto del Carmen at 9:10 am.
                Arrecife at 9:40 am Costa Teguise at 9:55 am
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="event__sights">
        <div class="event__sights-title">Sights</div>
        <div class="event__sights-text">
          <ul>
            <li>
              Get panoramic views of Lanzarote's north coast as you cross La
              Graciosa
            </li>
            <li>Admire white sand beaches and clear waters</li>
            <li>Swimming and snorkeling in the natural marine reserve</li>
          </ul>
        </div>
      </div>
      <!-- <div class="event__fulldesc">
        <div class="event__fulldesc-title">Full description</div>
        <div class="event__fulldesc-text" v-if="showShort">
          {{ fullDesc | limitTo }}
        </div>
        <div class="event__fulldesc-text" v-else>
          {{ fullDesc }}
        </div>
        <div class="event__fulldesc-control" @click="showShort = !showShort">
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6 4.5L11 1"
              stroke="#C4C4C4"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div> -->
      <div class="event__included">
        <div class="event__included-title">What's included</div>
        <div class="event__included-text">
          <ul>
            <li>Visiting volcanoes</li>
            <li>Entrance ticket to Jameos del Agud</li>
            <li>Travel insurance for the duration of the tour</li>
            <li>Guide</li>
            <li>Bus transfers</li>
          </ul>
        </div>
      </div>
      <div class="event__notincluded">
        <div class="event__notincluded-title">What's not included</div>
        <div class="event__notincluded-text">
          <ul>
            <li>Camel ride: 6 € for 25 minutes.</li>
          </ul>
        </div>
      </div>
      <div class="event__importantInfo">
        <div class="event__importantInfo-title">Important information</div>
        <div class="event__importantInfo-text">
          <ul>
            <li>
              Sail to La Graciosa Island and enjoy the quiet beaches on a 6-hour
              journey. Swim, kayak and relax in the blue waters of the natural
              park and marine reserve. Benefit from complimentary drinks and a
              delicious lunch.
            </li>
          </ul>
        </div>
      </div>
      <div class="event__covidInfo">
        <div class="event__covidInfo-title">COVID information</div>
        <div class="event__covidInfo-text">
          <div class="event__covidInfo-text-measures">
            Принимаются меры по обеспечению безопасности:
            <ul>
              <li>
                Regular cleaning is carried out at all points of interaction
                with customers
              </li>
              <li>All participants are required to wear protective masks</li>
              <li>
                Regular cleaning is carried out at all points of interaction
                with customers
              </li>
              <li>All participants are required to wear protective masks</li>
              <li>
                Regular cleaning is carried out at all points of interaction
                with customers
              </li>
            </ul>
          </div>
          <div class="event__covidInfo-text-demands">
            Требования к участникам
            <ul>
              <li>
                Regular cleaning is carried out at all points of interaction
                with customers
              </li>
              <li>All participants are required to wear protective masks</li>
              <li>
                Regular cleaning is carried out at all points of interaction
                with customers
              </li>
              <li>All participants are required to wear protective masks</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="event__meetingPoint">
        <div class="event__meetingPoint-title">Meeting point</div>
        <div class="event__meetingPoint-text">
          Пожалуйста, обратитесь в кассу Lineas Romero с подтверждением, чтобы
          забрать посадочный талон за 15 минут до отправления.
        </div>
      </div>
      <vi-card-carousel
        :carousel_title="carouselTitle"
        :carousel_data="cards"
      />
    </div>
  </div>
</template>
<script>
import ViCardCarousel from "@/components/vi-card-carousel.vue";
import axios from "axios";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Event",
  components: {
    ViCardCarousel,
  },
  data() {
    return {
      cards: [],
      carouselTitle: "You may also like",
      mainPicture: "",
      pictures: [],
      showShort: true,
    };
  },
  computed: {
    ...mapState({
      event_data: (state) => state.event.Event,
    }),
  },
  created() {
    this.interval = setInterval(
      () => this.nextMainPhoto(this.pictures[0]),
      20000
    );
    axios.get("/api/cards").then((Response) => {
      this.cards = Response.data;
    });
  },
  async mounted() {
    await this.$store.dispatch("getEvent", 1);
    console.log("-------------->", this.event_data.photos[0]);
    this.mainPicture = this.event_data.photos[0];
    this.pictures = this.event_data.photos.filter(
      (el) => el !== this.event_data.photos[0]
    );
    console.log(this.mainPicture, this.pictures);
  },

  methods: {
    changeMainPhoto(img) {
      this.pictures[this.pictures.indexOf(img)] = this.mainPicture;
      this.mainPicture = img;
      // this.pictures.splice(this.pictures.indexOf(img), 1);
    },
    nextMainPhoto(img) {
      this.pictures.push(this.mainPicture);
      this.mainPicture = img;
      this.pictures.splice(this.pictures.indexOf(img), 1);
    },
    prevMainPhoto(img) {
      this.pictures.unshift(this.mainPicture);
      this.mainPicture = img;
      this.pictures.splice(this.pictures.indexOf(img), 1);
    },
  },
  filters: {
    limitTo: function (value) {
      if (!value) return "";
      return value.substring(0, 480) + "...";
    },
  },
};
</script>
<style lang="scss">
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.event {
  color: #1e2843;
  font-size: 20px;
  &__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.1;
  }
  &__heart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    margin-right: 24px;
    cursor: pointer;
  }
  &__price {
    text-align: right;
    &-amount {
      font-weight: 600;
      font-size: 24px;
      text-align: right;
      color: #1e2843;
    }
    &-other {
      font-weight: 500;
      font-size: 12px;
      color: #8f95a1;
    }
  }
  &__info {
    display: flex;
    margin-top: 16px;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    &-type {
      padding: 3px 8px;
      background-color: #4f9cf8;
      color: white;
      border-radius: 4px;
      font-size: 16px;
      margin-bottom: 0;
      margin-right: 40px;
      text-overflow: clip;
      white-space: nowrap;
      overflow: hidden;
    }
    &-ratingVidodo {
      margin-right: 40px;
      display: flex;
      align-items: center;
      padding: 3px 7px;
      border: 1px solid #dcdfe7;
      border-radius: 4px;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #1e2843;
      img {
        padding-right: 4px;
        border-right: 1px solid #dcdfe7;
        margin-right: 3px;
      }
      &-reviews {
        margin-left: 12px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #8f95a1;
      }
    }
    &-ratingGeneral {
      margin-right: 40px;
      display: flex;
      align-items: center;
      padding: 3px 7px;
      border: 1px solid #dcdfe7;
      border-radius: 4px;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #1e2843;
      img {
        padding-right: 2px;
        border-right: 1px solid #dcdfe7;
        margin-right: 3px;
      }
      &-reviews {
        margin-left: 12px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #8f95a1;
      }
    }
    &-location {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      &-poi {
        margin: auto;
      }
      &-name {
        margin-left: 7px;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #1e2843;
      }
    }
  }
  &__photo {
    margin-top: 30px;
    &-main {
      position: relative;
      img {
        max-width: 72vw;
        width: 970px;
        height: 401px;
        border-radius: 12px;
      }
      &-controls {
        &-next {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          width: 24px;
          height: 24px;
          right: 17px;
          top: 200px;
          z-index: 2;
          background: #ffffff;
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
          border-radius: 6px;
          cursor: pointer;
          svg {
            width: 4.2px;
            height: 8.4px;
          }
        }
        &-prev {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          width: 24px;
          height: 24px;
          left: 17px;
          top: 200px;
          z-index: 2;
          background: #ffffff;
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
          border-radius: 6px;
          cursor: pointer;
          svg {
            width: 4.2px;
            height: 8.4px;
          }
        }
      }
    }
    &-others {
      display: flex;
      flex-direction: column;
      height: 401px;
      justify-content: space-between;
      &-picture {
        position: relative;
        img {
          // margin: 11px 10px;
          width: 150px;
          height: 70.71px;
          border-radius: 8px;
        }
      }
      &-onhover {
        width: 150px;
        height: 70.71px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: $primary;
        border-radius: 8px;
        opacity: 0;
        transition: 0.3s;
        cursor: pointer;
        svg {
          position: absolute;
          top: 23px;
          left: 63px;
          z-index: 2;
        }
      }
      &-onhover:hover {
        opacity: 0.8;
      }
    }
  }
  &__shortdesc {
    margin-top: 40px;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #1e2843;
  }
  &__about {
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-item {
      margin-top: 25px;
      flex-basis: 33%;
      display: flex;
      justify-content: start;
      align-items: flex-start;
      &-desc {
        margin-left: 7px;
        &-title {
          font-weight: 700;
        }
      }
    }
  }
  &__sights {
    margin-top: 25px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 17px;
      ul {
        list-style-position: inside;
      }
      li {
        font-size: 20px;
        line-height: 26px;
        list-style-type: none;
      }
      li:before {
        width: 10px;
        color: #d4d6dd;
        content: "•";
        font-weight: 700;
        font-size: 22px;
        padding-right: 12px;
        vertical-align: middle;
      }
    }
  }
  &__fulldesc {
    margin-top: 40px;
    position: relative;
    transition: 0.2s ease;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 16px;
      font-size: 20px;
      line-height: 32px;
      text-align: justify;
    }
    &-control {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      bottom: 0;
      background: #ffffff;
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.5);
      border-radius: 8px;
      cursor: pointer;
    }
  }
  &__included {
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 17px;
      ul {
        list-style-position: inside;
      }
      li {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        list-style-type: none;
        padding: 6px 0;
      }
      li:before {
        width: 10px;
        color: $secondary;
        content: "•";
        font-weight: 700;
        font-size: 28px;
        padding-right: 12px;
        vertical-align: middle;
      }
    }
  }
  &__notincluded {
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 17px;
      ul {
        list-style-position: inside;
      }
      li {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        list-style-type: none;
        padding: 6px 0;
      }
      li:before {
        width: 10px;
        color: $secondary;
        content: "•";
        font-weight: 700;
        font-size: 28px;
        padding-right: 12px;
        vertical-align: middle;
      }
    }
  }
  &__importantInfo {
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 17px;
      ul {
        list-style-position: inside;
      }
      li {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        list-style-type: none;
        padding: 6px 0;
      }
      li:before {
        width: 10px;
        color: $primary;
        content: "•";
        font-weight: 700;
        font-size: 28px;
        padding-right: 12px;
        vertical-align: middle;
      }
    }
  }
  &__covidInfo {
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 17px;

      &-measures {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        ul {
          list-style-position: inside;
        }
        li {
          font-weight: 500;
          font-size: 20px;
          line-height: 26px;
          list-style-type: none;
          padding: 6px 0;
        }
        li:before {
          width: 10px;
          color: $secondary;
          content: "•";
          font-weight: 700;
          font-size: 28px;
          padding-right: 12px;
          vertical-align: middle;
        }
      }
      &-demands {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        ul {
          list-style-position: inside;
        }
        li {
          font-weight: 500;
          font-size: 20px;
          line-height: 26px;
          list-style-type: none;
          padding: 6px 0;
        }
        li:before {
          width: 10px;
          color: $primary;
          content: "•";
          font-weight: 700;
          font-size: 28px;
          padding-right: 12px;
          vertical-align: middle;
        }
      }
    }
  }
  &__meetingPoint {
    margin-top: 40px;
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }
    &-text {
      margin-top: 17px;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
    }
  }
}
</style>