<template>
  <div class="check">
    <div class="check__title">Select travelers, date, language</div>
    <div class="check__controls">
      <div class="row justify-between">
        <div class="check__controls-person">
          <div class="check__controls-person-preview" @click="expandOpen">
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
        <div class="check__controls-language">
          <div class="check__controls-language-preview" @click="expandOpen">
            <div class="check__controls-language-preview-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM2 10C2 9.101 2.156 8.238 2.431 7.431L4 9L6 11V13L8 15L9 16V17.931C5.061 17.436 2 14.072 2 10ZM16.33 14.873C15.677 14.347 14.687 14 14 14V13C14 11.896 13.104 11 12 11H8V9V8C9.104 8 10 7.104 10 6V5H11C12.104 5 13 4.104 13 3V2.589C15.928 3.778 18 6.65 18 10C18 11.835 17.373 13.522 16.33 14.873Z"
                  fill="#1E2843"
                />
              </svg>
            </div>
            <div class="check__controls-language-preview-text">
              {{ previewLanguage }}
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
            <div v-if="isOpen" class="check__controls-language-expand">
              <div
                v-for="(v, k) in languages"
                :key="k"
                class="check__controls-language-expand-item"
                :class="{ active: v.isActive }"
                @click="changeActiveLanguage(v)"
              >
                {{ v.title }}
              </div>
            </div>
          </transition>
        </div>
        <transition name="checkFade">
          <div
            class="check__controls-date"
            :class="{ 'check__controls-date-expand': isOpen }"
            @click=" !isOpen ? expandOpen() : ''"
          >
            <div class="check__controls-date-title">
              <datepicker
                ref="programaticOpen"
                class="check__controls-date-datepicker"
                :class="{'dt-inline' : !isOpen}"
                :inline="isOpen"
                calendar-class="dt"
                wrapper-class="dt"
                
              ></datepicker>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker,
  },
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
      languages: [
        {
          title: "Without audio guide",
          isActive: true,
        },
        {
          title: "English",
          isActive: false,
        },
        {
          title: "German",
          isActive: false,
        },
        {
          title: "French",
          isActive: false,
        },
        {
          title: "Russian",
          isActive: false,
        },
        {
          title: "Polish",
          isActive: false,
        },
      ],
      previewLanguage: "",
      DatepickerInline: true,
    };
  },
  methods: {
    expandOpen() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.$refs.programaticOpen.showCalendar();
      } else {
        this.$refs.programaticOpen.close(true);
      }
    },
    plus(index) {
      this.persons[index]++;
      this.changePersonPreview();
    },
    minus(index) {
      if (this.persons[index] > 0) {
        this.persons[index]--;
        this.changePersonPreview();
      }
    },
    changePersonPreview() {
      this.preview = "";
      for (let key in this.persons) {
        if (this.persons[key] > 0) {
          this.preview += this.persons[key] + " " + key + ", ";
        }
      }
    },
    changeActiveLanguage(item) {
      this.languages.forEach((item) => {
        item.isActive = false;
      });
      item.isActive = true;
      this.previewLanguage = item.title;
    },
  },
  mounted() {
    this.previewLanguage = this.languages[0].title;
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
      background-color: white;
      border-radius: 12px;
      &-preview {
        width: 305px;
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
        height: 259px;
        &-item {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          padding-left: 5px;
          cursor: pointer;
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
        &-item:hover {
          background-color: #d5e1e6;
          border-radius: 12px;
        }
      }
    }
    &-date {
      width: 305px;
      height: 46px;
      background: #ffffff;
      border-radius: 12px;
      &-datepicker {
        width: inherit;
        height: inherit;
      }
      &-expand {
        // padding: 10px 16px;
        height: 259px + 46px;
      }
      /* &-title:hover{
        background-color: #d5e1e6;
        border-radius: 12px;
      } */
    }
  }
}
.dt-inline {
  border-radius: 12px;
  line-height: 2px;
  height: 305px;
  min-width: 305px;
  pointer-events: none;
}
.dt {
  border-radius: 12px;
  line-height: 2px;
  height: 305px;
  min-width: 305px;
}
.vdp-datepicker input[type="text"]:read-only {
  width: 305px !important;
  height: 46px !important;
  border-radius: 12px !important;
  border: transparent !important;
  cursor: pointer;
  font-weight: 600;
  padding-left: 16px;
  font-size: 18px;
}
/* .vdp-datepicker input[type="text"]:read-only:hover {
  background-color: #d5e1e6;
  border-radius: 12px;
} */
.vdp-datepicker__calendar .cell {
  height: 37px !important;
  line-height: 37px !important;
}
.vdp-datepicker__calendar .cell.selected {
  background-color: $primary !important;
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
.active {
  background-color: #d5e1e6;
  border-radius: 12px;
}
.checkFade-enter-active {
  transition: all 0.5s ease;
}
.checkFade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.checkFade-enter, .checkFade-leave-to
/* .slide-checkFade-leave-active до версии 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>