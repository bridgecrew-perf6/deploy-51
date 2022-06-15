<template>
  <div class="header" style="display: flex">
    <v-row align="center">
      <v-col cols="6">
        <search-input v-if="!hideSearch" placeholder="Что будем искать?" />
        <router-link v-else :to="{ name: 'CalendarMonth' }" class="header__return-to-calendar"
          >Вернуться к календарю</router-link
        >
      </v-col>
      <v-col cols="4">
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <router-link to="#" class="header__nav-link">О спортшколе</router-link>
            </li>
            <li class="header__nav-item">
              <router-link to="#" class="header__nav-link">Матчи</router-link>
            </li>
          </ul>
        </nav>
      </v-col>
      <v-col cols="2">
        <ul class="buttons-block">
          <li class="buttons-item">
            <svg width="32" height="32" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.94115 12V17C6.44112 16.9999 5.94112 22 9.94113 21.9999H21.9411C25.9411 21.9999 25.4411 17 22.9411 17L22.9411 11.9999C22.9411 7.99994 19.9411 4.99994 15.9411 5C11.9412 5.00006 8.94115 7.99994 8.94115 12Z"
                fill="currentColor"
              />
              <path d="M17.5 24H14.5C12.5 24 12.5 27 14.5 27H17.5C19.5 27 19.5 24 17.5 24Z" fill="currentColor" />
            </svg>
          </li>
          <router-link :to="{ name: 'PersonalTrainerProfile' }" class="buttons-item">
            <svg width="32" height="32" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="9" r="4" fill="currentColor" />
              <path
                d="M21 17C19.5 15.5 18 15 16.0001 15C14.0002 15 12.5155 15.4843 11 17C9.48452 18.5157 8 21 8 23C8 25 10.0002 25.0006 16.0001 25.0003H16.0005C22.0001 25.0001 24 25 24 23C24 21 22.5 18.5 21 17Z"
                fill="currentColor"
              />
            </svg>
          </router-link>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SearchInput from '@/components/library/SearchInput.vue'
export default {
  props: {
    hideSearch: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SearchInput,
  },
}
</script>

<style lang="sass" scoped>
.header
    padding-top: 50px;
    padding-bottom: 30px;

.header__nav-list
    display: flex
    justify-content: center

.header__nav-item
    margin-right: 75px
    &:last-child
        margin-right: 0

.header__nav-link
    font-size: 16px
    font-weight: 500
    line-height: 22px
    letter-spacing: 0.02em
    color: $blue02 !important
    &:hover
        color: $blue03 !important
    &:active
        color: $blue01 !important

.buttons-item
  flex-shrink: 0
  margin: 0
  margin-right: 30px
  width: 40px
  height: 40px
  line-height: 40px
  text-align: center
  color: $blue05 !important
  border-radius: 50%
  cursor: pointer
  svg
    vertical-align: middle
  &:hover
      color: $blue03
  &:active
      color: $blue01
  &:last-child
      margin-right: 0
  &.router-link-active
    color: $blue02 !important
    background-color: rgba($blue06, 0.5)

.buttons-block
  display: flex
  justify-content: flex-end
  margin: 0 0 0 auto

.header__return-to-calendar
  position: relative
  padding-left: 15px
  font-weight: 500
  font-size: 16px
  line-height: 22px
  color: $blue05 !important
  &::before
    content: ''
    position: absolute
    top: 50%
    left: 0
    width: 7px
    height: 11px
    transform: translateY(-50%)
    background-image: url("data:image/svg+xml,%3Csvg width='7' height='11' viewBox='0 0 7 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.689.924a1.136 1.136 0 0 0-1.607 0L.333 4.672a1.133 1.133 0 0 0-.332.804c-.01.303.1.61.332.841l3.749 3.749a1.136 1.136 0 0 0 1.606-1.607L2.724 5.495 5.689 2.53a1.136 1.136 0 0 0 0-1.606Z' fill='%2395B0DA'/%3E%3C/svg%3E")
    background-repeat: no-repeat
    background-position: center
</style>
