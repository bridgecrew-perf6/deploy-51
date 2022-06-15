<template>
  <div class="d-flex">
    <left-menu>
      <div class="group-list">
        <div class="group-list__header">
          <img class="group-list__header-image" src="@/assets/images/groups/img-group02.png" />
          <div class="group-list__header-wrapper">
            <p class="group-list__header-name h2">
              {{ group.name }}
            </p>
            <p class="group-list__header-desc">{{ group.ageGroup }} лет ({{ group.preparationYear }} год подготовки)</p>
          </div>
        </div>
        <div class="group-list__filters">
          <v-select
            class="group-list__select"
            v-model="selectedSortSportsmas"
            :items="sortSportsmans"
            item-text="title"
            item-value="id"
            single-line
            hide-details
            flat
            :menu-props="{
              contentClass: 'group-list__menu',
              nudgeBottom: 32,
              maxWidth: 180,
            }"
          >
            <template v-slot:item="{ item }">
              <img v-if="item.icon" class="group-list__select-image" :src="item.icon" />
              <p class="group-list__select-title">{{ item.title }}</p>
            </template>
            <template v-slot:selection="{ item }">
              <img v-if="item.icon" class="group-list__select-image" :src="item.icon" />
              <p class="group-list__select-title">{{ item.title }}</p>
            </template>
          </v-select>
          <button class="group-list__alphabet-sort" @click="sortAlphabet()">
            <svg
              v-if="sortAlphabetCurrent == 0"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.23 14.782c.071-.04.13-.025.188-.025.974 0 1.952-.003 2.927.003.148 0 .184-.037.184-.18L14.523.184c0-.146.042-.177.184-.174.622.01 1.24.006 1.861 0 .123 0 .162.028.162.152-.003 2.683-.003 5.366-.003 8.053 0 2.131 0 4.263-.003 6.395 0 .12.029.151.159.151 1.006-.006 2.016-.003 3.023-.003.026 0 .052.003.094.007-.094.17-.233.29-.343.43-.285.369-.583.728-.887 1.082-.638.743-1.26 1.496-1.887 2.246-.386.462-.777.92-1.156 1.385-.084.105-.13.093-.207-.003-.34-.406-.696-.8-1.03-1.212a123.209 123.209 0 0 0-1.855-2.237c-.401-.474-.777-.966-1.204-1.422-.065-.08-.126-.161-.2-.25ZM5.397 6.711h-3.39l-.392 1.236H0L2.538 0h2.34l2.539 7.947H5.8l-.404-1.236Zm-.45-1.413L3.69 1.413 2.457 5.298h2.49ZM6.656 20H5.089v-2.705H3.23L1.858 20H.081l1.521-2.99a2.44 2.44 0 0 1-.968-.772 2.906 2.906 0 0 1-.404-.721c-.1-.26-.15-.524-.15-.79 0-.289.05-.568.146-.846.098-.276.234-.527.408-.756.169-.22.373-.416.612-.58.24-.164.496-.288.774-.368.275-.081.557-.121.842-.121h3.794V20Zm-1.57-6.535H2.87c-.155 0-.314.04-.479.121-.165.08-.304.183-.42.31-.201.214-.302.49-.302.827 0 .236.084.465.253.685.116.149.262.264.437.353.178.087.346.134.508.134h2.214v-2.43h.004Z"
                fill="currentColor"
              />
            </svg>
            <svg
              v-if="sortAlphabetCurrent == 1"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.23 14.782c.071-.04.13-.025.188-.025.974 0 1.952-.003 2.927.003.148 0 .184-.037.184-.18L14.523.184c0-.146.042-.177.184-.174.622.01 1.24.006 1.861 0 .123 0 .162.028.162.152-.003 2.683-.003 5.366-.003 8.053 0 2.131 0 4.263-.003 6.395 0 .12.029.151.159.151 1.006-.006 2.016-.003 3.023-.003.026 0 .052.003.094.007-.094.17-.233.29-.343.43-.285.369-.583.728-.887 1.082-.638.743-1.26 1.496-1.887 2.246-.386.462-.777.92-1.156 1.385-.084.105-.13.093-.207-.003-.34-.406-.696-.8-1.03-1.212a123.209 123.209 0 0 0-1.855-2.237c-.401-.474-.777-.966-1.204-1.422-.065-.08-.126-.161-.2-.25ZM5.397 18.711h-3.39l-.392 1.236H0L2.538 12h2.34l2.539 7.947H5.8l-.404-1.236Zm-.45-1.413L3.69 13.413l-1.234 3.885h2.49ZM6.656 7.944H5.089V5.24H3.23L1.858 7.944H.081l1.521-2.99a2.44 2.44 0 0 1-.968-.771A2.905 2.905 0 0 1 .23 3.46c-.1-.26-.15-.524-.15-.79 0-.288.05-.567.146-.846.098-.276.234-.527.408-.756.169-.22.373-.415.612-.58.24-.164.496-.288.774-.368C2.295.04 2.577 0 2.862 0h3.794v7.944ZM5.086 1.41H2.87c-.155 0-.314.04-.479.12-.165.081-.304.183-.42.31-.201.214-.302.49-.302.828 0 .235.084.464.253.684.116.15.262.264.437.354.178.086.346.133.508.133h2.214v-2.43h.004Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

      <persons :items="filter" type="sportsman" />
    </left-menu>

    <div class="container create-gt__container">
      <Header hideSearch />

      <div class="create-gt__header d-flex justify-space-between align-center">
        <h1 class="create-gt__title h1">Создание группового занятия №15</h1>

        <base-button label="Создать событие" @click="createEvent()" />
      </div>

      <training-workload :event="newEvent" v-model="newEvent" createMenu />

      <div class="create-gt__subheader d-flex justify-space-between align-center">
        <h2 class="h2">Программа тренировки</h2>

        <router-link :to="{ name: 'ExerciseLibrary' }"> Библиотека упражнений </router-link>
      </div>

      <training-plan-create-first v-model="exercises.first" />

      <training-plan-create-second v-model="exercises.second" />

      <training-plan-create-third v-model="exercises.third" />

      <v-row>
        <v-col cols="6" class="pt-0">
          <h2 class="h2 section-title">Прогноз роста показателей</h2>
          <training-forecast-progress />
        </v-col>
        <v-col cols="6" class="pt-0">
          <h2 class="h2 section-title">Инвентарь</h2>
          <inventory :inventory="inventory" checkbox />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'
import BaseButton from '@/components/library/BaseButton.vue'
import Inventory from '@/components/Training/Inventory.vue'
import TrainingForecastProgress from '@/components/Training/TrainingForecastProgress.vue'
import Persons from '@/components/Persons.vue'

import TrainingPlanCreateFirst from '@/components/Training/TrainingPlanCreateFirst.vue'
import TrainingPlanCreateSecond from '@/components/Training/TrainingPlanCreateSecond.vue'
import TrainingPlanCreateThird from '@/components/Training/TrainingPlanCreateThird.vue'

import TrainingWorkload from '@/components/Training/TrainingWorkload.vue'

import SmallSelect from '@/components/elements/SmallSelect.vue'

export default {
  data() {
    return {
      sortAlphabetSettings: ['az', 'za'],
      sortAlphabetCurrent: 0,
      selectedSportsmans: [],
      group: {},
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
      sortSportsmans: [
        {
          id: 'all',
          icon: require('@/assets/images/svg/positionTypes/all-select.svg'),
          title: 'Все игроки',
        },
        {
          id: 'non-goalies',
          icon: require('@/assets/images/svg/positionTypes/non-goalies-select.svg'),
          title: 'Полевые игроки',
        },
        {
          id: 'goalies',
          icon: require('@/assets/images/svg/positionTypes/goalies-select.svg'),
          title: 'Вратари',
        },
      ],
      newEvent: {
        date: '01.03.2022',
        timeFrom: '11:00',
        timeTo: '13:00',
        typeOfPreparation: '',
        exercisePlaygrounds: '',

        group: 1,
        title: 'Групповая тренировка',
        coach: 1,

        //BAD
        attenders: [],
        description: 'Описание',
        reminders: [1],
        tags: [],
      },
      exercises: {},
      selectedSortSportsmas: 'all',
    }
  },
  components: {
    LeftMenu,
    Header,
    BaseButton,
    Inventory,
    TrainingWorkload,
    Persons,
    SmallSelect,
    TrainingForecastProgress,
    TrainingPlanCreateFirst,
    TrainingPlanCreateSecond,
    TrainingPlanCreateThird,
  },
  computed: {
    filter() {
      if (this.selectedSortSportsmas === 'non-goalies')
        return this.group.sportsmans
          .filter(x => x.position_type === 'forward' || x.position_type === 'defender')
          .concat()
          .sort((a, b) =>
            this.sortAlphabetCurrent == 0
              ? a.full_name.localeCompare(b.full_name)
              : b.full_name.localeCompare(a.full_name)
          )
      else if (this.selectedSortSportsmas === 'goalies')
        return this.group.sportsmans
          .filter(x => x.position_type === 'goalie')
          .concat()
          .sort((a, b) =>
            this.sortAlphabetCurrent == 0
              ? a.full_name.localeCompare(b.full_name)
              : b.full_name.localeCompare(a.full_name)
          )
      else
        return this.group.sportsmans
          .concat()
          .sort((a, b) =>
            this.sortAlphabetCurrent == 0
              ? a.full_name.localeCompare(b.full_name)
              : b.full_name.localeCompare(a.full_name)
          )
    },
  },
  methods: {
    sortAlphabet() {
      this.sortAlphabetCurrent =
        this.sortAlphabetCurrent < this.sortAlphabetSettings.length - 1
          ? ++this.sortAlphabetCurrent
          : (this.sortAlphabetCurrent = 0)
    },
    getGroup() {
      this.$groups
        .getGroup(1)
        .then(response => {
          let positionTypes = [
            {
              id: 1,
              title: 'Вратарь',
              slug: 'goalie',
            },
            {
              id: 2,
              title: 'Защитник',
              slug: 'defender',
            },
            {
              id: 3,
              title: 'Нападающий',
              slug: 'forward',
            },
          ]

          response.sportsmans.forEach(sportsman => {
            sportsman.position_type = positionTypes.find(type => type.id === sportsman.positionType).slug
            sportsman.full_name = `${sportsman.user.firstName} ${sportsman.user.lastName}`
            sportsman.age = sportsman.user.age
            sportsman.avatar = sportsman.user.avatar
            sportsman.team_number = sportsman.teamNumber

            this.newEvent.attenders.push(sportsman.id)
          })

          this.group = response
        })
        .catch(error => {
          console.log(error)
        })
    },
    createEvent() {
      this.newEvent.date = moment(this.newEvent.date, 'DD.MM.YYYY').format('YYYY-MM-DD')

      this.$events
        .postEvents(this.newEvent)
        .then(response => {
          let eventID = response.id,
            eventPars = [
              {
                id: 1,
                name: 'Подготовительная',
                slug: 'pre',
              },
              {
                id: 2,
                name: 'Основная',
                slug: 'main',
              },
              {
                id: 3,
                name: 'Заключительная',
                slug: 'end',
              },
            ]

          this.exercises.first.forEach((ex, index) => {
            let payload = {
              order: index,
              event: eventID,
              eventPart: eventPars.find(part => part.slug === 'pre').id,
              exercise: ex.id,
            }

            this.$exercisesEvent
              .postExercisesEvent(payload)
              .then(response => {
                console.log(response)
              })
              .catch(error => {
                console.log(error)
              })
          })

          this.exercises.second.forEach((ex, index) => {
            let payload = {
              order: index,
              event: eventID,
              eventPart: eventPars.find(part => part.slug === 'main').id,
              exercise: ex.id,
            }

            this.$exercisesEvent
              .postExercisesEvent(payload)
              .then(response => {
                console.log(response)
              })
              .catch(error => {
                console.log(error)
              })
          })

          this.exercises.third.forEach((ex, index) => {
            let payload = {
              order: index,
              event: eventID,
              eventPart: eventPars.find(part => part.slug === 'end').id,
              exercise: ex.id,
            }

            this.$exercisesEvent
              .postExercisesEvent(payload)
              .then(response => {
                console.log(response)
              })
              .catch(error => {
                console.log(error)
              })
          })

          this.$router.push({ name: 'CalendarMonth' })
        })
        .catch(error => {
          alert('ERROR')
        })
    },
  },
  mounted() {
    this.getGroup()
  },
}
</script>

<style lang="sass" scoped>

/* Select position types */
.group-list__select
  width: 100%
  max-width: 180px
  &::v-deep
    .v-select__selections
      padding-left: 13px
    &.v-select--is-menu-active
      border-bottom-left-radius: 0
      border-bottom-right-radius: 0
      background-color: #fff


.group-list__menu
  .v-select-list
    padding: 0px
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15)
    background-color: #fff
    &::v-deep
      .v-list-item
        padding: 10px 13px
        min-height: auto
        position: relative
        &.v-list-item--active
          &::before
            background-color: transparent

          .v-list-item__title
            color: $blue02
        &::after
          display: none
        &:hover
          &::before
            background-color: #ECF6FF!important
            opacity: 1


      .v-list-item__content
        padding: 4px 0
      .v-list-item__title
        line-height: 19px
        color: $blue04

.group-list__select-image
  margin-right: 8px
  position: relative
  z-index: 2

.group-list__select-title
  font-weight: 500
  font-size: 14px
  line-height: 19px
  color: $blue02
  position: relative
  z-index: 2
/* End Select position types */

/* Alphabet sort */
.group-list__alphabet-sort
  padding: 6px
  color: $blue05
/* End Alphabet sort */


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
