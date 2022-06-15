<template>
  <div class="d-flex">
    <left-menu>
      <div class="group-list">
        <div class="group-list__header">
          <img class="group-list__header-image" :src="group.img" />
          <div class="group-list__header-wrapper">
            <p class="group-list__header-name h2">
              {{ group.name }}
            </p>
            <p v-if="group.description" class="group-list__header-desc">{{ group.description }}</p>
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

      <v-list class="group-list__list" flat>
        <v-list-item-group v-model="selectedSportsmans" multiple>
          <v-list-item v-for="(sportsman, index) in filter" :key="index">
            <!-- <template v-slot:default="{ active }"> -->
            <!-- <v-list-item-action>
                <base-checkbox class="expansion__content-checkbox" :value="active" label="" white textDark reverse />
              </v-list-item-action> -->

            <v-list-item-avatar width="56" height="56" class="group-list__sportsman-avatar-wrapper">
              <v-img
                v-if="sportsman.avatar"
                :alt="sportsman.full_name"
                :src="sportsman.avatar"
                class="group-list__sportsman-avatar"
              ></v-img>
              <v-img
                v-else
                :alt="sportsman.full_name"
                :src="require(`@/assets/images/positionTypes/${sportsman.position_type}.svg`)"
                class="group-list__sportsman-avatar group-list__sportsman-avatar--type"
                width="56"
                height="56"
              ></v-img>
              <span class="group-list__sportsman-number">{{ sportsman.team_number }}</span>
            </v-list-item-avatar>

            <v-list-item-content class="group-list__sportsman-content">
              <v-list-item-title class="group-list__sportsman-name">{{ sportsman.full_name }}</v-list-item-title>
              <v-list-item-subtitle class="group-list__sportsman-subtitle"
                >{{ sportsman.age }} лет,
                {{ positionTypes.find(x => x.slug === sportsman.position_type).title }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <!-- </template> -->
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </left-menu>

    <div class="container training-container">
      <Header hideSearch />

      <div class="mt-16 mb-2 d-flex justify-space-between align-center">
        <h1 class="page-title page-title--event h1">Групповое практическое занятие №15</h1>

        <base-button label="Напомнить о событии" />
      </div>
      <div class="mb-10 d-flex justify-space-between align-center">
        <ul class="training-info__list">
          <li class="training-info__item">Физическое</li>
          <li class="training-info__item">Развитие технических навыков</li>
          <li class="training-info__item">Гимнастический зал №3</li>
        </ul>

        <p class="training-date">
          <span>20/08/2021</span>
          <span>пятница</span>
          <span>16:00 - 18:00</span>
        </p>
      </div>
      <v-row class="mb-10">
        <v-col cols="6" class="pt-0">
          <h2 class="h2 section-title">Прогноз роста показателей</h2>
          <training-forecast-progress />
        </v-col>
        <v-col cols="6" class="pt-0">
          <h2 class="h2 section-title">Инвентарь</h2>
          <inventory :inventory="inventory" />
        </v-col>
      </v-row>

      <div class="mb-4 d-flex justify-space-between align-center">
        <h2 class="h2 section-title">Программа тренировки</h2>
      </div>

      <training-plan :trainingPlan="trainingPlan" />
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'
import BaseButton from '@/components/library/BaseButton.vue'
import Inventory from '@/components/Training/Inventory.vue'
import TrainingForecastProgress from '@/components/Training/TrainingForecastProgress.vue'
import TrainingPlan from '@/components/Training/TrainingPlan.vue'

import SmallSelect from '@/components/elements/SmallSelect.vue'

export default {
  name: 'Training',
  components: {
    vueCustomScrollbar,
    LeftMenu,
    Header,
    BaseButton,
    Inventory,
    SmallSelect,
    TrainingForecastProgress,
    TrainingPlan,
  },
  data: () => ({
    group: {
      img: require('@/assets/images/groups/img-group02.png'),
      slug: 'np2',
      name: 'НП-2',
      description: '8-9 лет (2 год подготовки) ',
      sportsmans: [
        {
          full_name: 'Ярасимов Юрий',
          age: 8,
          position_type: 'defender',
          avatar: null,
          team_number: 37,
        },
        {
          full_name: 'Двилянский Егор',
          age: 9,
          position_type: 'forward',
          avatar: null,
          team_number: 9,
        },
        {
          full_name: 'Докукин Никита',
          age: 8,
          position_type: 'goalie',
          avatar: null,
          team_number: 54,
        },
        {
          full_name: 'Иванов Кирилл',
          age: 8,
          position_type: 'defender',
          avatar: 'https://source.unsplash.com/120x120/?avatar',
          team_number: 18,
        },
      ],
    },
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
    ],
    selectedSortSportsmas: 'all',
    positionTypes: [
      { slug: 'goalie', title: 'вратарь' },
      { slug: 'defender', title: 'защитник' },
      { slug: 'forward', title: 'нападающий' },
    ],
    sortAlphabetSettings: ['az', 'za'],
    sortAlphabetCurrent: 0,

    selectedSportsmans: [],

    trainingPlan: [
      [
        {
          id: 1,
          title: 'Баланс в основной стойке',
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
          title: 'Баланс в основной стойке',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 10,
          intensity: 'low',
          favorite: false,
          type: 'Техническое',
          img: 'https://source.unsplash.com/650x650/?sport',
        },
        {
          id: 5,
          title: 'Баланс в движении',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 7,
          intensity: 'middle',
          favorite: true,
          type: 'Техническое',
          img: 'https://source.unsplash.com/560x560/?sport',
        },
        {
          id: 6,
          title: 'Лягушка',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 11,
          intensity: 'low',
          favorite: false,
          type: 'Техническое',
          img: 'https://source.unsplash.com/560x560/?sport',
        },
      ],
      [
        {
          id: 1,
          title: 'Баланс в основной стойке',
          description: 'Удерживание равновесия в основной стойке в разных ситуациях',
          time: 10,
          intensity: 'low',
          favorite: false,
          type: 'Техническое',
          img: 'https://source.unsplash.com/650x650/?sport',
        },
      ],
      [
        {
          id: 1,
          title: 'Баланс в основной стойке',
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
      ],
    ],

    isActiveEdit: false,
    isActiveModal: false,
    dialog: false,
    items: ['Группа С8 | 10-13', 'Группа С8 | 10-14', 'Группа С8 | 10-15'],
    list1: [
      { name: 'Баланс в основной стойке', id: 1 },
      { name: 'Подъем в основную стойку из положения лежа на животе', id: 2 },
    ],
    list2: [
      { name: '5 х 4  Большинство', id: 5 },
      { name: '3 х 5 Меньшинство', id: 6 },
      { name: 'Розыгрыш', id: 7 },
    ],
    list3: [
      { name: 'Свободная игра 1', id: 8 },
      { name: 'Свободная игра 2', id: 9 },
      { name: 'Свободная игра 3', id: 10 },
    ],
    list4: [
      { name: 'Свободная игра 123', id: 8 },
      { name: 'Свободная игра 2232', id: 9 },
      { name: 'Свободная игра 3323', id: 10 },
    ],
    accordionBigItems: [
      {
        open: true,
        children: [
          { name: 'Баланс в основной стойке', id: 1 },
          { name: 'Подъем в основную стойку из положения лежа на животе', id: 2 },
        ],
      },
      {
        open: false,
        children: [
          { name: '5 х 4  Большинство', id: 5 },
          { name: '3 х 5 Меньшинство', id: 6 },
          { name: 'Розыгрыш', id: 7 },
        ],
      },
      {
        open: false,
        children: [
          { name: 'Свободная игра 1', id: 8 },
          { name: 'Свободная игра 2', id: 9 },
          { name: 'Свободная игра 3', id: 10 },
        ],
      },
      {
        open: false,
        children: [
          { name: 'Свободная игра 123', id: 8 },
          { name: 'Свободная игра 2232', id: 9 },
          { name: 'Свободная игра 3323', id: 10 },
        ],
      },
    ],
  }),

  methods: {
    add: function () {
      this.list.push({ name: 'Juan' })
    },
    replace: function () {
      this.list = [{ name: 'Edgard' }]
    },
    clone: function (el) {
      return {
        name: el.name + ' cloned',
      }
    },
    log: function (evt) {
      window.console.log(evt)
    },
    toggleOpen: function (index) {
      this.accordionBigItems = this.accordionBigItems.map((accordionBigItem, i) => {
        if (index === i) {
          accordionBigItem.open = !accordionBigItem.open
        } else {
          accordionBigItem.open = false
        }
        return accordionBigItem
      })
    },
    editTraining: function () {
      this.isActiveEdit = !this.isActiveEdit
    },

    toggleModalPlan: function () {
      this.isActiveModal = !this.isActiveModal
      console.log(this.isActiveModal)
    },
    sortAlphabet() {
      this.sortAlphabetCurrent =
        this.sortAlphabetCurrent < this.sortAlphabetSettings.length - 1
          ? ++this.sortAlphabetCurrent
          : (this.sortAlphabetCurrent = 0)
    },
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
  mounted() {},
}
</script>

<style lang="sass" scoped>
.training-container
  overflow: hidden

/* TODO: Remove and create component */
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

.training-info__list
  display: flex

.training-info__item,
.training-date
  position: relative
  font-size: 16px
  line-height: 22px
  color: $blue02

.training-info__item
  padding-right: 16px
  &::after
    content: '•'
    position: absolute
    text-align: center
    width: 16px
  &:last-of-type
    &::after
      display: none

.training-date
  padding-left: 22px
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.017 4.304h13.938c.01.201.026.392.026.583.002 2.095.004 4.19 0 6.286-.003 1.787-.982 2.802-2.765 2.814-2.855.019-5.709.015-8.563 0-1.525-.007-2.58-.933-2.62-2.437C-.03 9.153.017 6.752.017 4.304Zm3.623 1.93c-.485.013-.916.46-.912.95.003.53.494 1.01 1.007.982a.956.956 0 0 0 .898-.957c-.005-.566-.436-.99-.993-.975Zm7.593.995a.96.96 0 0 0-.913-.996c-.511-.024-.967.408-.982.93-.015.524.408.98.921.993a.94.94 0 0 0 .974-.927Zm-8.504 3.417a.954.954 0 0 0 .91 1.004c.503.03.98-.408 1-.92a.962.962 0 0 0-.907-1.008c-.501-.023-.976.415-1.003.924Zm5.215-3.44c.013-.496-.404-.94-.905-.964a.977.977 0 0 0-1.014.968c0 .487.438.926.938.938a.973.973 0 0 0 .981-.942Zm-.99 4.446c.483.028.987-.444 1-.938.015-.484-.4-.933-.903-.977-.512-.045-.974.367-1.014.904-.037.502.398.98.916 1.011ZM13.93 3.089H.066C-.23 1.544.773.129 2.294.057 3.896-.02 5.504.014 7.11.007c1.408-.004 2.816-.015 4.224.004 1.74.024 2.82 1.293 2.597 3.078Z' fill='%23525BBA'/%3E%3C/svg%3E")
  background-repeat: no-repeat
  background-position: left center
  span
    margin-right: 12px
    &:last-of-type
      margin-right: 0px
</style>
