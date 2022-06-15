<template>
  <div class="d-flex">
    <left-menu>
      <sidaber-sportsman-profile :sportsman="sportsman" />
    </left-menu>

    <div class="container create-gt__container">
      <Header hideSearch />

      <div class="create-gt__header d-flex justify-space-between align-center">
        <h1 class="create-gt__title h1">Создание индивидуальное занятия №15</h1>

        <base-button label="Создать событие" />
      </div>

      <div class="create-gt__subheader d-flex justify-space-between align-center">
        <h2 class="h2">Программа тренировки</h2>

        <router-link to="/"> Библиотека упражнений </router-link>
      </div>

      <v-row>
        <v-col cols="6" class="pt-0"> </v-col>
        <v-col cols="6" class="pt-0">
          <h2 class="h2 section-title">Инвентарь</h2>
          <inventory :inventory="inventory" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'
import BaseButton from '@/components/library/BaseButton.vue'
import Inventory from '@/components/Training/Inventory.vue'

import SidaberSportsmanProfile from '@/components/Training/SidaberSportsmanProfile.vue'

export default {
  data() {
    return {
      sortAlphabetSettings: ['az', 'za'],
      sortAlphabetCurrent: 0,

      selectedSportsmans: [],
      sportsman: {
        full_name: 'Ярасимов Юрий',
        age: 8,
        position_type: 'goalie',
        avatar: null,
        team_number: 37,
      },
      favorites: false,
      library: [
        {
          id: 1,
          title: 'Баланс в основной стойке Удерживание равновесия в основной стойке в разных ситуациях',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 10,
          intensity: 'low',
          favorite: false,
          type: 'Техническое',
          img: 'https://source.unsplash.com/650x650/?sport',
        },
        {
          id: 2,
          title: 'Баланс в движении',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 7,
          intensity: 'middle',
          favorite: true,
          type: 'Техническое',
          img: 'https://source.unsplash.com/560x560/?sport',
        },
        {
          id: 3,
          title: 'Лягушка',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 11,
          intensity: 'low',
          favorite: false,
          type: 'Техническое',
          img: 'https://source.unsplash.com/560x560/?sport',
        },
        {
          id: 4,
          title: 'Змейка',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 12,
          intensity: 'middle',
          favorite: true,
          type: 'Техническое',
          img: 'https://source.unsplash.com/560x560/?sport',
        },
        {
          id: 5,
          title: 'Техника катания в основной стойке',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 15,
          intensity: 'middle',
          favorite: true,
          type: 'Техническое',
          img: 'https://source.unsplash.com/560x560/?sport',
        },
        {
          id: 6,
          title: 'Скручивание корпуса из положения',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 10,
          intensity: 'middle',
          favorite: true,
          type: 'Техническое',
          img: 'https://source.unsplash.com/560x560/?sport',
        },
        {
          id: 7,
          title: 'Змейка',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 12,
          intensity: 'middle',
          favorite: true,
          type: 'Техническое',
          img: 'https://source.unsplash.com/560x560/?sport',
        },
        {
          id: 8,
          title: 'Техника катания в основной стойке',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 15,
          intensity: 'middle',
          favorite: true,
          type: 'Техническое',
          img: 'https://source.unsplash.com/560x560/?sport',
        },
        {
          id: 9,
          title: 'Скручивание корпуса из положения',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 10,
          intensity: 'middle',
          favorite: true,
          type: 'Техническое',
          img: 'https://source.unsplash.com/560x560/?sport',
        },
      ],
      exercisesFirst: [
        {
          id: 2,
          title: 'Баланс в движении 2',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 7,
          intensity: 'middle',
          favorite: true,
          type: 'Техническое',
          img: 'https://source.unsplash.com/560x560/?sport',
        },
      ],
      inventory: [
        {
          img: 'https://source.unsplash.com/560x560/?sport',
          title: 'Ворота',
          count: 1,
        },
        {
          img: 'https://source.unsplash.com/560x560/?sport',
          title: 'Шайба',
          count: 2,
        },
        {
          img: 'https://source.unsplash.com/560x560/?sport',
          title: 'Фишки',
          count: 8,
        },
        {
          img: 'https://source.unsplash.com/560x560/?sport',
          title: 'Шина',
          count: 4,
        },
      ],

      exercisesSecond: [],
      exercisesThird: [],
      scrollSettings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false,
      },
      trash: false,
      addItem: false,
    }
  },
  components: {
    draggable,
    vueCustomScrollbar,
    LeftMenu,
    Header,
    BaseButton,
    Inventory,
    SidaberSportsmanProfile,
  },
  computed: {
    timeFirstExercises() {
      return this.exercisesFirst.reduce((sum, current) => sum + current.time, 0)
    },
    timeSecondExercises() {
      return this.exercisesSecond.reduce((sum, current) => sum + current.time, 0)
    },
    timeThirdExercises() {
      return this.exercisesThird.reduce((sum, current) => sum + current.time, 0)
    },
  },
  methods: {
    choose(evt) {
      this.trash = true
    },
    unchoose(evt) {
      this.trash = false
    },
    addFirstExercise(el) {
      this.exercisesFirst.push(el)
    },
    addSecondExercise(el) {
      this.exercisesSecond.push(el)
    },
    addThirdExercise(el) {
      this.exercisesThird.push(el)
    },
  },
}
</script>

<style lang="sass" scoped>

/* Card  */
.library__exercise-list
  span
    display: flex
    flex-wrap: wrap


.library__exercise-list-scroll,
.training-plan__ibrary-list-scroll
  padding-right: 10px


.library__exercise
  margin-right: 15px
  margin-bottom: 15px
  width: calc((100% - 30px) / 3)
  background-color: #FFFFFF
  border: 2px solid rgba(185, 203, 229, 0.5)
  border-radius: 12px
  overflow: hidden
  cursor: pointer
  &::v-deep
    box-shadow: none !important
  &:nth-child(3n)
    margin-right: 0px
  &:nth-last-child(-n+3)
    margin-bottom: 5px

.library__exercise-cover
  width: 100%
  height: 100px
  max-height: 100px
  background-size: cover
  background-position: center

.library__exercise-title
  max-height: 40px
  padding: 5px 10px
  font-size: 12px
  line-height: 16px
  text-align: center
  color: $blue02

  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  overflow: hidden


.library__exercise-add
  position: absolute
  top: 10px
  right: 10px
  width: 20px
  height: 20px

  font-weight: 500
  font-size: 17px
  line-height: 20px
  color: #FFFFFF

  background-color: rgba(0, 0, 0, 0.2)
  border-radius: 4px !important

/* End card */


/* Collapse */
.training-plan__exercises-collapse

  border: 2px solid rgba(185, 203, 229, 0.5)
  border-radius: 12px
  margin-bottom: 12px
  &::after
    display: none
  &:last-child
    margin-bottom: 0px
  &.v-expansion-panel--active
    margin-top: 0px

.training-plan__exercises-collapse-header
  justify-content: space-between
  padding: 12px 15px
  color: $blue02
  &::v-deep
    .v-expansion-panel-header__icon
      display: none

.training-plan__exercises-collapse-title
  font-size: 16px
  line-height: 20px

.training-plan__exercises-collapse-time-wrap
  font-size: 12px
  line-height: 16px
  display: flex
  flex-direction: column
  text-align: center
  flex: 0 0 auto

.training-plan__exercises-collapse-time
  font-size: 24px
  line-height: 20px
  font-weight: 700
  color: $blue05


.training-plan__exercises-collapse-body
  &::v-deep
    .v-expansion-panel-content__wrap
      padding: 0px 15px 10px 15px
    .training-plan__exercises-collapse-inner
      padding-top: 10px
      border-top: 2px solid rgba(185, 203, 229, 0.5)

    .training-plan__exercises-collapse-desc
      margin-bottom: 12px
      font-size: 14px
      line-height: 16px
      color: $blue02

    .training-plan__exercises-collapse-footer
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      align-items: center
      font-size: 12px
      line-height: 20px
      color: $blue02

    .training-plan__exercises-collapse-intensity
      svg
        margin-right: 5px


    .training-plan__exercises-collapse-type
      margin-left: 35px
      padding-left: 20px
      position: relative
      &::before
        content: ''
        position: absolute
        top: 50%
        left: 0
        width: 16px
        height: 16px
        border-radius: 4px
        background-color: #95B0DA
        transform: translateY(-50%)

    .training-plan__exercises-collapse-favorite
      svg
        margin-right: 5px
        vertical-align: sub
/* EndCollapse */


/* Trash */
.training-plan__trash
  position: absolute
  bottom: 0
  left: 20px
  width: calc(100% - 20px)
  height: 60px

  border: 2px dashed rgba(185, 203, 229, 0.5)
  border-radius: 12px

  display: flex
  align-items: center
  justify-content: center

  font-size: 16px
  line-height: 22px
  color: $blue06
  .v-expansion-panel
    display: none
  svg
    vertical-align: text-top
/* End Trash */

.training-plan
  position: relative
  height: 410px
  box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15)
  border-radius: 28px
  padding-left: 62px
  overflow: hidden
  margin-bottom: 40px
  &:last-child
    margin-bottom: 0px

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
  padding-left: 39px

  width: 410px
  font-size: 14px
  line-height: 19px
  letter-spacing: 0.2em
  text-transform: uppercase
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
  justify-content: space-between
  align-items: center
  width: 100%
  height: 56px
  border-bottom: 2px solid rgba($blue06, 0.5)

.header-library
  display: flex
  align-items: center
  justify-content: space-between
  flex: 0 0 50%

  padding-left: 20px
  padding-right: 10px

.header-library__filters

.header-library__favorites
  &::v-deep
    margin-top: 0px
    padding-top: 0px
    margin-right: 50px
    .v-input--selection-controls__input
      display: none

.header-library__search

.header__plan
  display: flex
  justify-content: space-between
  align-items: center
  flex: 0 0 50%
  padding-left: 10px
  padding-right: 20px

.header__plan-text
  font-size: 16px
  line-height: 22px
  color: $blue02

.header__plan-time-wrapper
  display: flex
  align-items: center
  margin-right: 20px
  font-size: 14px
  line-height: 19px
  color: $blue02

.header__plan-time
  margin-left: 15px
  font-size: 12px
  line-height: 16px
  text-align: center

.header__plan-time-minutes
  display: block
  font-family: 'FolksBold', sans-serif
  font-size: 24px
  line-height: 20px
  font-weight: 700
  color: $blue05


.training-plan__content-body
  height: calc(100% - 60px)
  display: flex
  padding: 20px

.training-plan__library-wrapper,
.training-plan__exercises-wrapper
  position: relative
  flex: 0 0 auto
  max-width: 50%
  width: 100%

.training-plan__library-wrapper
  padding-right: 10px
  border-right: 2px dashed rgba(185, 203, 229, 0.5);
  border-radius: 12px

.training-plan__library-wrapper--empty
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.training-plan__library-empty-text
  margin-top: 13px
  font-weight: 500
  font-size: 17px
  line-height: 23px
  color: $blue06


.training-plan__exercises-wrapper
  padding-left: 20px
  padding-bottom: 70px

.training-plan__exercises
  width: 100%
  height: 100%


.group-list
  max-width: 320px
  margin: 0 auto
  padding-top: 32px

.group-list__header
  display: flex
  margin-bottom: 32px

.group-list__header-image
  display: inline-block
  max-width: 48px
  max-width: 48px
  width: 100%
  height: auto
  margin-right: 28px
  z-index: 1

.group-list__header-wrapper
  color: $blue02
  z-index: 1

.group-list__header-name
  font-weight: 500

.group-list__header-desc
  font-size: 14px !important
  line-height: 19px
  font-weight: normal


.group-list__filters
  display: flex
  justify-content: space-between
  align-items: center
  padding: 9px 5px
  border-top: 1px solid #ECF6FF
  border-bottom: 1px solid #ECF6FF


.group-list__list
  &::v-deep
    padding: 15px 0
    .v-list-item
      min-height: auto
      margin-bottom: 15px
      padding: 0 18px
      &:last-child
        margin-bottom: 0px
      &::after
        display: none

.group-list__sportsman-avatar-wrapper
  margin-top: 0px !important
  margin-bottom: 0px !important
  overflow: visible
  position: relative

.group-list__sportsman-avatar
  &::v-deep
    .v-responsive__content
      border: 2px solid rgba(255, 255, 255, 0.5)
      border-radius: 50%


.group-list__sportsman-avatar--type
  &::v-deep
    .v-image__image.v-image__image--cover
      background-size: auto
      background-color: $blue02

.group-list__sportsman-number
  position: absolute
  bottom: -1px
  left: -5px

  width: 24px

  font-weight: 700
  font-size: 14px
  line-height: 16px
  text-align: center
  color: #fff
  background-color: #464EA3
  border: 1px solid rgba(255, 255, 255, 0.5)
  border-radius: 4px


.group-list__sportsman-content
  padding: 0px

.group-list__sportsman-name
  font-weight: 600
  font-size: 14px
  line-height: 19px
  color: $blue02

.group-list__sportsman-subtitle
  font-size: 12px
  line-height: 20px
  color: $blue02 !important


.create-gt__header
  margin: 50px 0 45px
.create-gt__title
  position: relative
  padding-left: 48px
  line-height: 36px
  color: $blue02
  &::after
    content: ''
    position: absolute
    top: 50%
    left: 0px
    width: 36px
    height: 36px
    transform: translateY(-50%)
    background-image: url("data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='36' height='36' rx='8' fill='%235ACEFC'/%3E%3Crect width='33.6' height='33.6' rx='8' fill='%232ABAF3'/%3E%3Cpath d='M26.347 13.506c-.039.209-.167.363-.309.508-.163.165-.329.329-.498.488-.15.143-.34.198-.541.217a.42.42 0 0 1-.337-.114c-.275-.26-.556-.516-.824-.784-.932-.932-1.86-1.87-2.789-2.806-.077-.079-.145-.165-.222-.244a.417.417 0 0 1-.114-.345c.011-.187.06-.363.195-.502.202-.213.402-.428.613-.632.18-.172.4-.251.649-.189a.6.6 0 0 1 .262.136c.697.672 1.39 1.343 2.076 2.024.507.501 1.001 1.015 1.503 1.521.143.146.288.29.336.502v.22ZM8.346 25.361c.09-.132.17-.275.274-.395.19-.214.397-.414.59-.613l1.63 1.63c-.166.163-.343.34-.523.514-.055.053-.114.103-.169.154a.57.57 0 0 1-.646.11 1.417 1.417 0 0 1-.366-.224c-.161-.134-.31-.284-.459-.435a1.179 1.179 0 0 1-.33-.56v-.181ZM26.347 10.348c-.051.161-.158.286-.274.403-.189.191-.38.38-.565.566L23.889 9.7c.011-.013.028-.035.048-.053.239-.228.472-.465.718-.681.206-.182.43-.196.66-.046.373.244.681.558.925.93.05.078.072.173.107.26v.238ZM11.056 17.757c.222.002.426.057.597.222.468.457.947.903 1.41 1.367 1.418 1.424 2.83 2.854 4.247 4.281l.19.2c.229.248.26.73.029.977-.384.41-.788.804-1.19 1.196-.133.129-.305.129-.476.088a.854.854 0 0 1-.395-.205c-.408-.387-.821-.771-1.22-1.17-1.48-1.482-2.955-2.972-4.43-4.459a7.013 7.013 0 0 1-.353-.387c-.195-.226-.206-.631-.002-.844.368-.38.75-.747 1.126-1.117.13-.127.292-.15.467-.15ZM23.922 18.149c-.257.001-.46-.067-.64-.245-1.163-1.156-2.337-2.3-3.5-3.457-.744-.74-1.471-1.497-2.21-2.24-.227-.23-.337-.494-.279-.814a.686.686 0 0 1 .127-.297 10 10 0 0 1 1.157-1.176c.204-.176.608-.165.818.027.38.35.758.703 1.126 1.067 1.506 1.5 3.008 3.006 4.51 4.51.137.138.27.285.396.433.152.182.242.391.204.633a.44.44 0 0 1-.094.213c-.377.437-.782.843-1.22 1.217a.526.526 0 0 1-.395.129ZM19 14.611l1.593 1.591-4.853 4.849-1.592-1.591L19 14.61ZM14.248 25.383c-.014.258-.064.46-.216.616-.213.219-.427.439-.656.64-.285.25-.654.236-.926-.032-.951-.938-1.9-1.88-2.845-2.823a29.541 29.541 0 0 1-.845-.88c-.176-.191-.204-.417-.107-.656a.579.579 0 0 1 .07-.128c.226-.316.492-.591.814-.811a.678.678 0 0 1 .542-.112c.077.016.161.05.216.102.719.696 1.437 1.392 2.148 2.096.523.52 1.034 1.052 1.548 1.578.059.061.112.129.167.195.065.073.098.16.09.215Z' fill='%23fff'/%3E%3C/svg%3E")
    background-repeat: no-repeat
    background-position: center

.create-gt__subheader
  margin-bottom: 15px
  h2
    color: $blue02
    font-weight: normal
  a
    position: relative
    padding-left: 25px
    font-weight: 500
    color: $blue05
    &::after
      content: ''
      position: absolute
      top: 50%
      left: 0px
      width: 16px
      height: 15px
      transform: translateY(-50%)
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='15' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.784 10.135C.887 9.59-.062 8.558.004 7.113c.04-.924.354-1.79 1.162-2.254.715-.411 1.562-.594 2.344-.876 0-.545-.122-1.258.027-1.91C3.81.888 4.944.03 6.161.019 9.14-.01 12.117.003 15.096.01c.566.001.912.352.905.851-.008.482-.369.805-.95.806-2.783.006-5.565 0-8.348.008-.289.002-.596.025-.862.123-.535.195-.782.634-.776 1.19A1.2 1.2 0 0 0 6 4.127c.246.055.505.067.757.067 2.626.004 5.25.002 7.876.003.157 0 .314-.008.47.005.588.05.905.373.88.885-.023.478-.35.78-.91.79-.78.016-1.56.004-2.379.004v2.51c.64 0 1.279-.007 1.918.002.253.003.518-.003.756.069.38.115.652.363.615.813-.032.413-.21.728-.658.765-.522.045-1.049.056-1.574.07-.332.01-.664.003-1.06.003v1.689c-.667-.327-1.27-.56-1.804-.9-.554-.353-1.018-.322-1.558.011-.512.315-1.076.546-1.697.852v-1.594c-.892 0-1.727-.054-2.55.02-.498.044-.868.666-.865 1.19.002.52.437 1.078.958 1.182.266.053.546.056.818.056 2.9.003 5.8 0 8.7.003.215 0 .431.005.643.038.44.066.638.373.658.78.02.423-.213.713-.622.806-.263.06-.544.059-.816.059-2.9.004-5.8.005-8.7.001-2.496 0-3.803-1.754-3.072-4.17ZM7.568 5.95c-.081-.027-.135-.058-.188-.058-1.467-.003-2.933-.021-4.4.006-.748.014-1.233.51-1.271 1.19-.037.645.389 1.25 1.035 1.268 1.596.045 3.194.015 4.823.015l.001-2.42Z' fill='%2395B0DA'/%3E%3C/svg%3E")
      background-repeat: no-repeat
      background-position: center

/* All */
.section-title
  font-weight: normal
  color: $blue02
  margin-bottom: 16px

.create-gt__container
  overflow: hidden
/* End All */
</style>
