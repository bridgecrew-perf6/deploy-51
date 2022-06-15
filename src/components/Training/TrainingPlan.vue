<template>
  <v-item-group mandatory class="d-flex mb-15">
    <v-item v-for="(n, index) in trainingPlan" :key="index" v-slot="{ active, toggle }">
      <v-card :ripple="false" class="d-flex training-plan__card" @click="toggle">
        <div class="training-plan training-plan--second" :class="{ 'training-plan--active': active }">
          <div class="training-plan__title-wrapper" v-if="!active">
            <span class="training-plan__title-icon"></span>
            <p class="training-plan__title">Часть II</p>
          </div>
          <div class="training-plan__content" v-if="active">
            <div class="training-plan__content-header">
              <h2 class="training-plan__content-header-title">часть II - Основная</h2>
            </div>
            <div class="training-plan__content-body">
              <div class="training-plan__exercises-wrapper">
                <vue-custom-scrollbar
                  class="training-plan__exercises-list-scroll"
                  :settings="scrollSettings"
                  style="height: 100%"
                >
                  <div class="training-plan__exercises-list-inner">
                    <div
                      class="training-plan__exercise-wrapper"
                      :class="{
                        'training-plan__exercise-wrapper--half': trainingPlan[index].length === 2,
                        'training-plan__exercise-wrapper--full': trainingPlan[index].length === 1,
                      }"
                      v-for="element in trainingPlan[index]"
                      :key="element.id"
                    >
                      <div
                        class="training-plan__exercise-status"
                        :class="{ 'training-plan__exercise-status--full': trainingPlan[index].length === 1 }"
                      >
                        <template v-if="status">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="10" cy="10" r="10" fill="#2ABAF3" />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.3633 7.29289C14.9728 6.90237 14.3396 6.90237 13.9491 7.29289L8.82658 12.4154L6.70606 10.2923C6.31578 9.90155 5.683 9.90155 5.29271 10.2923C4.90243 10.6831 4.90243 11.3166 5.29271 11.7074L8.11941 14.5375C8.5097 14.9283 9.14247 14.9283 9.53276 14.5375C9.56197 14.5083 9.58899 14.4777 9.61382 14.4459C9.64595 14.4208 9.6769 14.3935 9.70645 14.364L15.3633 8.70711C15.7538 8.31658 15.7538 7.68342 15.3633 7.29289Z"
                              fill="white"
                            />
                          </svg>
                        </template>
                      </div>
                      <v-card
                        class="training-plan__exercise"
                        :class="{ 'training-plan__exercise--full': trainingPlan[index].length === 1 }"
                      >
                        <div
                          class="training-plan__exercise-cover"
                          :class="{ 'training-plan__exercise-cover--full': trainingPlan[index].length === 1 }"
                          :style="`background-image: url(${element.img})`"
                        ></div>

                        <div
                          class="training-plan__exercise-content-wrapper"
                          :class="{ 'training-plan__exercise-content-wrapper--full': trainingPlan[index].length === 1 }"
                        >
                          <v-card-title class="training-plan__exercise-title-wrapper" :aria-label="element.title">
                            <p class="training-plan__exercise-title">{{ element.title }}</p>
                            <p class="training-plan__exercise-time">
                              <span class="training-plan__exercise-time-minutes">{{ element.time }}</span
                              >мин
                            </p>
                          </v-card-title>
                          <div
                            class="training-plan__exercise-content"
                            :class="{ 'training-plan__exercise-content--full': trainingPlan[index].length === 1 }"
                          >
                            <div class="d-flex justify-space-between mb-2">
                              <p class="training-plan__exercise-content-description">{{ element.description }}</p>
                              <svg
                                class="training-plan__exercise-content-favorite"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.745 15.33c-.734.011-1.095-.474-.948-1.117.305-1.32.61-2.628.925-3.948.09-.36.045-.609-.27-.868C2.435 8.562 1.465 7.67.461 6.813c-.338-.282-.575-.62-.406-1.071.17-.451.564-.542 1.004-.575a119.26 119.26 0 0 0 4.038-.35c.18-.023.406-.237.485-.418.53-1.195 1.038-2.413 1.546-3.62.18-.418.394-.79.913-.779.485.012.7.361.869.767.508 1.207 1.026 2.414 1.523 3.632.135.328.316.44.665.463 1.354.09 2.696.214 4.05.327.406.034.8.192.846.61.034.304-.102.732-.316.935a71.02 71.02 0 0 1-3.102 2.708c-.282.237-.327.44-.248.767.316 1.308.609 2.628.936 3.948.102.406.056.756-.282 1.015-.36.282-.733.203-1.094-.023-1.15-.699-2.324-1.387-3.463-2.109-.282-.17-.474-.18-.756 0-1.128.688-2.256 1.354-3.384 2.03-.203.125-.44.204-.541.26Z"
                                  fill="#B9CBE5"
                                />
                              </svg>
                            </div>

                            <div class="d-flex justify-space-between">
                              <span class="training-plan__exercise-content-intensity">
                                <template v-if="element.intensity === 'low'">
                                  <img src="@/assets/images/svg/workload/low.svg" />
                                  Низкая
                                </template>
                                <template v-else-if="element.intensity === 'middle'">
                                  <img src="@/assets/images/svg/workload/medium.svg" />
                                  Умеренная
                                </template>
                                <template v-else>
                                  <img src="@/assets/images/svg/workload/hight.svg" />
                                  Высокая
                                </template>
                              </span>
                              <span class="training-plan__exercise-content-type">
                                {{ element.type }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </v-card>
                    </div>
                  </div>
                </vue-custom-scrollbar>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-item>
  </v-item-group>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

export default {
  data() {
    return {
      scrollSettings: {
        suppressScrollY: true,
        useBothWheelAxes: true,
        suppressScrollX: false,
        wheelPropagation: false,
      },
      status: true,
    }
  },
  components: {
    vueCustomScrollbar,
  },
  props: {
    trainingPlan: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.training-plan__card
    border-radius: 0px
    background-color: transparent
    box-shadow: none !important
    &.v-item--active
        width: 100%
    &::before
        display: none

    &:first-child
        border-top-left-radius: 28px
        border-bottom-left-radius: 28px
        &.v-item--active
            .training-plan__card
                &:last-child

    &:last-child
        border-top-right-radius: 28px
        border-bottom-right-radius: 28px
    &:nth-child(2)
        background: linear-gradient(180deg, $blue01 0%, $blue01 56px, $blue02 56px, $blue02 100%)
        .training-plan
            box-shadow: none


    &:nth-child(1):not(.v-item--active),
    &:nth-child(2):not(.v-item--active)
        &:nth-child(2)
            .training-plan__title-icon
                background-color: $blue02
            .training-plan__title-wrapper
                background-color: $blue03

    &:nth-child(3),
    &:nth-child(1)
        &.v-item--active
            .training-plan
                background: linear-gradient(180deg, $blue02 0%, $blue02 56px, $blue03 56px, $blue03 100%)

    &:nth-child(1):not(.v-item--active),
    &:nth-child(2):not(.v-item--active)
        .training-plan
            border-radius: 0 !important
            border-top-left-radius: 28px !important
            border-bottom-left-radius: 28px !important
            overflow: hidden

    &:nth-child(3):not(.v-item--active)
        .training-plan
            border-radius: 0 !important
            border-top-right-radius: 28px !important
            border-bottom-right-radius: 28px !important
            overflow: hidden

    &:nth-child(1).v-item--active ~ &:not(.v-item--active)
        .training-plan
            border-radius: 0 !important
            border-top-right-radius: 28px !important
            border-bottom-right-radius: 28px !important
            overflow: hidden

.training-plan
  position: relative
  height: 350px
  border-radius: 28px
  padding-left: 62px
  margin-bottom: 40px
  background: linear-gradient(180deg, $blue01 0%, $blue01 56px, $blue02 56px, $blue02 100%)
  box-shadow: none
  &:last-child
    margin-bottom: 0px

.training-plan--active
    width: 100%
    padding-left: 0px


.training-plan--first
  .training-plan__title-icon
    &::after
      background-image: url("data:image/svg+xml,%3Csvg width='9' height='20' viewBox='0 0 9 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)' fill='%2395B0DA'%3E%3Cpath d='M2.345 9.955c0-1.777-.007-3.554.004-5.33.006-.866.533-1.512 1.326-1.683.728-.156 1.503.208 1.81.897.114.257.172.56.173.842.012 3.554.013 7.107.006 10.66-.002 1.008-.692 1.724-1.633 1.737-.953.015-1.673-.713-1.68-1.744-.015-1.792-.006-3.586-.006-5.379ZM4.06 19.999c-.887 0-1.775.003-2.662-.001-.79-.004-1.239-.304-1.36-.898-.134-.66.284-1.28.957-1.294a238.88 238.88 0 0 1 5.955-.037c.638.004 1.082.529 1.066 1.144-.016.6-.48 1.06-1.147 1.074-.936.021-1.873.005-2.81.005a.019.019 0 0 1 .001.007ZM4.021.01c.935 0 1.87-.015 2.804.004.75.016 1.178.44 1.18 1.112.001.655-.456 1.096-1.2 1.1-1.87.01-3.74.01-5.609-.002C.478 2.22-.004 1.748 0 1.105.005.473.5.013 1.217.005 2.15-.004 3.086.004 4.02.004V.01Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h8.017v20H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")
.training-plan--second
  .training-plan__title-icon
    &::after
      background-image: url("data:image/svg+xml,%3Csvg width='13' height='20' viewBox='0 0 13 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)' fill='%23B9CBE5'%3E%3Cpath d='M2.304 10.008c0-1.793-.007-3.584.004-5.377.004-.701.297-1.257.955-1.56.63-.29 1.23-.203 1.77.233.404.327.584.771.585 1.278.006 3.602.012 7.204 0 10.806-.005.981-.71 1.68-1.63 1.692-.946.012-1.668-.69-1.678-1.694-.02-1.792-.007-3.585-.006-5.378ZM10.051 10.024c0 1.743-.046 3.487.019 5.227.036.97-.917 1.868-1.677 1.84-.978-.04-1.651-.742-1.653-1.826-.006-3.52-.005-7.04 0-10.558.002-1.07.695-1.8 1.677-1.796.953.005 1.63.738 1.632 1.786.006 1.776.002 3.551.002 5.327ZM6.183 19.998c-1.63 0-3.26.005-4.89-.002-.76-.003-1.244-.4-1.29-1.032-.049-.656.415-1.177 1.108-1.196.758-.021 1.518-.008 2.276-.008 1.937 0 3.874-.004 5.811.001.74.002 1.482.02 2.223.039.432.011.833.395.919.86.09.492-.194 1.066-.653 1.227a2.192 2.192 0 0 1-.71.105c-1.598.01-3.196.006-4.794.006ZM6.228.002c1.631 0 3.262-.004 4.893.002.743.002 1.216.423 1.237 1.076.021.667-.432 1.134-1.162 1.146-1.033.017-2.067.006-3.1.006L1.605 2.23c-.193 0-.389 0-.58-.024C.368 2.122-.016 1.693.001 1.08.017.465.474.015 1.143.008 2.532-.006 3.92.003 5.308.003l.92-.001Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h12.358v20H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")
.training-plan--third
  .training-plan__title-icon
    &::after
      background-image: url("data:image/svg+xml,%3Csvg width='17' height='20' viewBox='0 0 17 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)' fill='%23B9CBE5'%3E%3Cpath d='M10.126 9.997c0 1.777.013 3.554-.004 5.331-.012 1.337-1.212 2.14-2.363 1.592-.687-.328-.956-.92-.955-1.66.002-2.57 0-5.138 0-7.706 0-1.002-.019-2.004.01-3.005.022-.84.573-1.459 1.354-1.601.764-.139 1.497.214 1.788.923.12.288.16.626.162.942.016 1.727.008 3.456.008 5.184ZM14.55 9.997c0 1.793.01 3.586-.003 5.377-.01 1.294-1.228 2.09-2.354 1.548-.67-.323-.94-.894-.94-1.617V9.2c0-1.518-.011-3.035.002-4.554.01-1.076.781-1.81 1.782-1.726.896.074 1.504.741 1.51 1.698.01 1.793.002 3.586.003 5.378ZM2.429 10.016c0-1.79-.006-3.58.002-5.371.005-.984.64-1.691 1.528-1.733.881-.04 1.606.615 1.695 1.582.049.529.032 1.064.033 1.597.003 3.1.006 6.2.001 9.298 0 .752-.409 1.34-1.06 1.582-.67.25-1.43.104-1.83-.477a2.325 2.325 0 0 1-.39-1.2c-.041-1.759-.017-3.518-.017-5.278h.038ZM8.486.001c2.391 0 4.782-.004 7.174.002.922.002 1.47.694 1.196 1.488-.139.403-.43.64-.842.715-.204.037-.418.034-.627.034L4.48 2.243c-1.048 0-2.096 0-3.144-.004-.456-.002-.869-.12-1.14-.519A1.008 1.008 0 0 1 .136.618C.366.195.742.003 1.216.002c1.034-.002 2.068 0 3.102 0h4.169ZM8.46 19.996c-2.326-.001-4.653 0-6.979-.002-.192 0-.39.002-.577-.036a1.121 1.121 0 0 1-.896-1.112c.015-.527.419-.979.958-1.06.142-.021.29-.02.435-.02h14.15c.528 0 1.02.097 1.26.63.36.806-.16 1.58-1.082 1.593-1.244.018-2.488.006-3.732.007H8.46Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h16.927v20H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")


.training-plan__title-wrapper
  position: absolute
  top: 0px
  left: 0px
  height: 100%
  width: 150px
  background-color: $blue02

.training-plan__title-icon
  position: relative
  display: block
  width: 100%
  height: 56px
  background-color: $blue01
  z-index: 1
  &::after
    content: ""
    position: absolute
    width: 62px
    height: 100%
    background-repeat: no-repeat
    background-position: center

.training-plan__title
  position: absolute
  right: 100%
  top: 0px
  padding-right: 56px

  width: 350px
  font-size: 14px
  line-height: 19px
  letter-spacing: 0.2em
  text-transform: uppercase
  text-align: center
  color: #F0EFF8
  transform: rotate(-90deg) translateY(20px)
  transform-origin: top right

.training-plan__content
  position: relative
  height: 100%
  background-color: #FFFFFF
  border-radius: 28px
  z-index: 2

.training-plan__content-header
    display: flex
    align-items: center
    justify-content: center
    height: 56px


.training-plan__content-header-title
    font-weight: 600
    font-size: 14px
    line-height: 19px
    letter-spacing: 0.1em
    text-transform: uppercase
    color: $blue02

.training-plan__exercises-wrapper
    padding: 0 20px

.training-plan__exercises-list-scroll
  padding-bottom: 20px

.training-plan__exercises-list-inner
    display: flex


.training-plan__exercise-wrapper
    position: relative
    min-width: calc((100% - 35px) / 3)
    max-width: calc((100% - 35px) / 3)
    margin-right: 15px
    &:last-child
        margin-right: 0px
        .training-plan__exercise-status
            &::after
                display: none


.training-plan__exercise-wrapper--half
    min-width: calc((100% - 35px) / 2)
    max-width: calc((100% - 35px) / 2)

.training-plan__exercise-wrapper--full
    display: flex
    min-width: 100%
    max-width: 100%


.training-plan__exercise-status
    position: relative
    display: block
    margin-bottom: 20px
    line-height: 0px
    text-align: center
    &::after
        content: ''
        position: absolute
        top: 50%
        left: calc(50% + 20px)
        height: 2px
        width: calc(100% - 30px)
        background-color: #DCE5F2

.training-plan__exercise-status--full
    margin-right: 20px

.training-plan__exercise
    margin-right: 15px
    max-height: 210px
    background-color: #FFFFFF
    border: 2px solid rgba(185, 203, 229, 0.5)
    border-radius: 12px
    overflow: hidden
    cursor: pointer
    &:last-child
        margin-right: 0px
    &::v-deep
        box-shadow: none !important
    &:hover
        max-height: none
        position: relative
        z-index: 100
        .training-plan__exercise-content
            display: block


.training-plan__exercise--full
    display: flex
    width: 100%
    max-height: 250px
    &:hover
        max-height: 250px
        .training-plan__exercise-content
            display: flex

.training-plan__exercise-cover
    width: 100%
    height: 160px
    max-height: 160px
    background-size: cover
    background-position: center

.training-plan__exercise-cover--full
    height: 250px
    max-height: 250px
    max-width: 280px

.training-plan__exercise-content-wrapper
    padding: 8px 20px

.training-plan__exercise-content-wrapper--full
    display: flex
    flex-direction: column

.training-plan__exercise-title-wrapper
    display: flex
    justify-content: space-between
    padding: 0px 0px 8px


.training-plan__exercise-title
    flex: 0 0 75%
    font-size: 16px
    line-height: 20px
    font-weight: normal
    color: $blue02

    display: -webkit-box
    -webkit-line-clamp: 1
    -webkit-box-orient: vertical
    overflow: hidden

.training-plan__exercise-time
    margin-left: 15px
    font-size: 12px
    line-height: 12px
    text-align: center

.training-plan__exercise-time-minutes
    display: block
    font-family: 'FolksBold', sans-serif
    font-size: 24px
    line-height: 20px
    font-weight: 700
    color: $blue05

.training-plan__exercise-content
    display: none
    padding-top: 7px
    border-top: 2px solid #DCE5F2

.training-plan__exercise-content--full
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 100%

.training-plan__exercise-content-description
    font-size: 14px
    line-height: 16px
    color: $blue02
    margin-right: 15px


.training-plan__exercise-content-favorite
    min-width: 16px

.training-plan__exercise-content-intensity,
.training-plan__exercise-content-type
    font-size: 12px
    line-height: 20px
    color: $blue02
</style>
