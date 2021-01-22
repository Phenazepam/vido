<template>
  <div class="check">
    <div class="check__title">Select travelers, date, language</div>
    <div class="check__controls">
      <div class="row justify-between">
        <div class="check__controls-person">
          <div class="check__controls-person-preview" @click="isOpen = !isOpen">
            <div class="check__controls-person-preview-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 8H17V11H14V13H17V16H19V13H22V11H19V8ZM4 8C4 10.28 5.72 12 8 12C10.28 12 12 10.28 12 8C12 5.72 10.28 4 8 4C5.72 4 4 5.72 4 8ZM10 8C10 9.178 9.178 10 8 10C6.822 10 6 9.178 6 8C6 6.822 6.822 6 8 6C9.178 6 10 6.822 10 8ZM4 18C4 16.346 5.346 15 7 15H9C10.654 15 12 16.346 12 18V19H14V18C14 15.243 11.757 13 9 13H7C4.243 13 2 15.243 2 18V19H4V18Z"
                  fill="#1E2843"
                />
              </svg>
            </div>
            <div class="check__controls-person-preview-text">
              {{ preview }}
            </div>
            <div class="check__controls-person-preview-btn">
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L7 7L13 1" stroke="#8F93A1" stroke-width="1.5" />
              </svg>
            </div>
          </div>
          <hr v-if="isOpen" />
          <transition name="checkFade">
            <div v-if="isOpen" class="check__controls-person-expand">
              <div class="check__controls-person-expand-info">
                You can select up to 8 travelers in total.
              </div>
              <div class="check__controls-person-expand-item">
                <div class="check__controls-person-expand-item-text">
                  <div class="check__controls-person-expand-item-text-title">
                    Adult
                  </div>
                  (age 18 - 24 years)
                </div>
                <div class="check__controls-person-expand-item-control">
                  <div class="minus-btn" @click="minus('Adult')">
                    <svg
                      width="12"
                      height="2"
                      viewBox="0 0 12 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0H12V2H0V0Z" fill="#FF5134" />
                    </svg>
                  </div>
                  <div class="check__controls-person-expand-item-control-value">
                    {{ persons.Adult }}
                  </div>
                  <div class="plus-btn" @click="plus('Adult')">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.35714 5.14286V5.64286H6.85714H11.5V6.35714H6.85714H6.35714V6.85714V11.5H5.64286V6.85714V6.35714H5.14286H0.5V5.64286H5.14286H5.64286V5.14286V0.5H6.35714V5.14286Z"
                        fill="url(#paint0_linear)"
                        stroke="#FF5134"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="6"
                          y1="0"
                          x2="6"
                          y2="20.1429"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FF7C66" />
                          <stop offset="1" stop-color="#FF5134" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="check__controls-person-expand-item">
                <div class="check__controls-person-expand-item-text">
                  <div class="check__controls-person-expand-item-text-title">
                    Senior
                  </div>
                  (age 65 - 100 years)
                </div>
                <div class="check__controls-person-expand-item-control">
                  <div class="minus-btn" @click="minus('Senior')">
                    <svg
                      width="12"
                      height="2"
                      viewBox="0 0 12 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0H12V2H0V0Z" fill="#FF5134" />
                    </svg>
                  </div>
                  <div class="check__controls-person-expand-item-control-value">
                    {{ persons.Senior }}
                  </div>
                  <div class="plus-btn" @click="plus('Senior')">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.35714 5.14286V5.64286H6.85714H11.5V6.35714H6.85714H6.35714V6.85714V11.5H5.64286V6.85714V6.35714H5.14286H0.5V5.64286H5.14286H5.64286V5.14286V0.5H6.35714V5.14286Z"
                        fill="url(#paint0_linear)"
                        stroke="#FF5134"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="6"
                          y1="0"
                          x2="6"
                          y2="20.1429"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FF7C66" />
                          <stop offset="1" stop-color="#FF5134" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="check__controls-person-expand-item">
                <div class="check__controls-person-expand-item-text">
                  <div class="check__controls-person-expand-item-text-title">
                    Youth
                  </div>
                  (age 13 - 17 years)
                </div>
                <div class="check__controls-person-expand-item-control">
                  <div class="minus-btn" @click="minus('Youth')">
                    <svg
                      width="12"
                      height="2"
                      viewBox="0 0 12 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0H12V2H0V0Z" fill="#FF5134" />
                    </svg>
                  </div>
                  <div class="check__controls-person-expand-item-control-value">
                    {{ persons.Youth }}
                  </div>
                  <div class="plus-btn" @click="plus('Youth')">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.35714 5.14286V5.64286H6.85714H11.5V6.35714H6.85714H6.35714V6.85714V11.5H5.64286V6.85714V6.35714H5.14286H0.5V5.64286H5.14286H5.64286V5.14286V0.5H6.35714V5.14286Z"
                        fill="url(#paint0_linear)"
                        stroke="#FF5134"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="6"
                          y1="0"
                          x2="6"
                          y2="20.1429"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FF7C66" />
                          <stop offset="1" stop-color="#FF5134" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="check__controls-person-expand-item">
                <div class="check__controls-person-expand-item-text">
                  <div class="check__controls-person-expand-item-text-title">
                    Child
                  </div>
                  (age 5 - 12 years)
                </div>
                <div class="check__controls-person-expand-item-control">
                  <div class="minus-btn" @click="minus('Child')">
                    <svg
                      width="12"
                      height="2"
                      viewBox="0 0 12 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0H12V2H0V0Z" fill="#FF5134" />
                    </svg>
                  </div>
                  <div class="check__controls-person-expand-item-control-value">
                    {{ persons.Child }}
                  </div>
                  <div class="plus-btn" @click="plus('Child')">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.35714 5.14286V5.64286H6.85714H11.5V6.35714H6.85714H6.35714V6.85714V11.5H5.64286V6.85714V6.35714H5.14286H0.5V5.64286H5.14286H5.64286V5.14286V0.5H6.35714V5.14286Z"
                        fill="url(#paint0_linear)"
                        stroke="#FF5134"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="6"
                          y1="0"
                          x2="6"
                          y2="20.1429"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FF7C66" />
                          <stop offset="1" stop-color="#FF5134" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="check__controls-person-expand-item">
                <div class="check__controls-person-expand-item-text">
                  <div class="check__controls-person-expand-item-text-title">
                    Infant
                  </div>
                  (age 0 - 4 years)
                </div>
                <div class="check__controls-person-expand-item-control">
                  <div class="minus-btn" @click="minus('Infant')">
                    <svg
                      width="12"
                      height="2"
                      viewBox="0 0 12 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0H12V2H0V0Z" fill="#FF5134" />
                    </svg>
                  </div>
                  <div class="check__controls-person-expand-item-control-value">
                    {{ persons.Infant }}
                  </div>
                  <div class="plus-btn" @click="plus('Infant')">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.35714 5.14286V5.64286H6.85714H11.5V6.35714H6.85714H6.35714V6.85714V11.5H5.64286V6.85714V6.35714H5.14286H0.5V5.64286H5.14286H5.64286V5.14286V0.5H6.35714V5.14286Z"
                        fill="url(#paint0_linear)"
                        stroke="#FF5134"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="6"
                          y1="0"
                          x2="6"
                          y2="20.1429"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FF7C66" />
                          <stop offset="1" stop-color="#FF5134" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div class="check__controls-language">2</div>
        <div class="check__controls-date">3</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      adult_amount: 0,
      persons: {
        Adult: 0,
        Senior: 0,
        Youth: 0,
        Child: 0,
        Infant: 0,
      },
      preview: "",
    };
  },
  methods: {
    plus(index) {
      this.persons[index]++;
      this.changePreview();
    },
    minus(index) {
      if (this.persons[index] > 0) {
        this.persons[index]--;
        this.changePreview();
      }
    },
    changePreview() {
      this.preview = "";
      for (let key in this.persons) {
        if (this.persons[key] > 0) {
          this.preview += this.persons[key] + " " + key + ", ";
        }
      }
    },
  },
};
</script>
<style lang="scss">
.check {
  background-color: #d1f1fd;
  border-radius: 8px;
  padding: 20px;
  &__title {
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 20px;
  }
  &__controls {
    &-person {
      background-color: white;
      border-radius: 12px;
      &-preview {
        width: 440px;
        height: 46px;
        display: flex;
        position: relative;
        cursor: pointer;
        transition: 0.3s;
        &-icon {
          padding-left: 16px;
          height: inherit;
          display: flex;
          justify-content: start;
          align-items: center;
        }
        &-text {
          padding-left: 16px;
          height: inherit;
          display: flex;
          justify-content: start;
          align-items: center;
          font-weight: 600;
          font-size: 18px;
          line-height: 21px;
          color: #1e2843;
        }
        &-btn {
          position: absolute;
          right: 15px;
          top: 15px;
        }
      }
      &-preview:hover {
        background-color: #d5e1e6;
        border-radius: 12px;
      }
      &-expand {
        padding: 10px 16px;
        &-item {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          &-text {
            display: flex;
            align-items: center;
            font-size: 14px;
            line-height: 16px;
            &-title {
              padding-right: 3px;
              font-weight: 500;
              font-size: 18px;
              line-height: 21px;
            }
          }
          &-control {
            display: flex;
            align-items: center;
            &-value {
              width: 20px;
              text-align: center;
            }
          }
        }
      }
    }
    &-language {
      width: 305px;
      height: 46px;
      background: #ffffff;
      border-radius: 12px;
    }
    &-date {
      width: 305px;
      height: 46px;
      background: #ffffff;
      border-radius: 12px;
    }
  }
}
.minus-btn {
  cursor: pointer;
  width: 24px;
  height: 24px;
  border: 1px solid #ff5134;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.plus-btn {
  cursor: pointer;
  width: 24px;
  height: 24px;
  border: 1px solid #ff5134;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkFade-enter-active {
  transition: all .5s ease;
}
.checkFade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.checkFade-enter, .checkFade-leave-to
/* .slide-checkFade-leave-active до версии 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>