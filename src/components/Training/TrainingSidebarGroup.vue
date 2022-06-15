<template>
  <div>
    <div class="group-list">
      <div v-if="!edit" class="group-list__header">
        <img
          class="group-list__header-image"
          :src="group.avatar || require('@/assets/images/groups/img-group02.png')"
        />
        <div class="group-list__header-wrapper">
          <p class="group-list__header-name h2">
            {{ group.shortName }}
          </p>
          <p class="group-list__header-desc">8-9 лет (1 год подготовки)</p>
        </div>
      </div>
      <select-group v-else v-model="groupVal" :items="groups" />

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
  </div>
</template>

<script>
import Persons from '@/components/Persons.vue'
import SelectGroup from '@/components/SelectGroup.vue'

export default {
  props: {
    idGroup: {
      type: [String, Number],
      required: true,
    },
    edit: {
      type: Boolean,
    },
  },
  data() {
    return {
      group: {},
      groups: [],
      selectedSortSportsmas: 'all',
      positionTypes: [
        { slug: 'goalie', title: 'вратарь' },
        { slug: 'defender', title: 'защитник' },
        { slug: 'forward', title: 'нападающий' },
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
      sortAlphabetSettings: ['az', 'za'],
      sortAlphabetCurrent: 0,
    }
  },
  components: {
    Persons,
    SelectGroup,
  },
  computed: {
    filter() {
      if (this.selectedSortSportsmas === 'non-goalies')
        return this.group.sportsmen
          ?.filter(x => x.position_type === 'forward' || x.position_type === 'defender')
          .concat()
          .sort((a, b) =>
            this.sortAlphabetCurrent == 0
              ? a.full_name.localeCompare(b.full_name)
              : b.full_name.localeCompare(a.full_name)
          )
      else if (this.selectedSortSportsmas === 'goalies')
        return this.group.sportsmen
          ?.filter(x => x.position_type === 'goalie')
          .concat()
          .sort((a, b) =>
            this.sortAlphabetCurrent == 0
              ? a.full_name.localeCompare(b.full_name)
              : b.full_name.localeCompare(a.full_name)
          )
      else
        return this.group.sportsmen
          ?.concat()
          .sort((a, b) =>
            this.sortAlphabetCurrent == 0
              ? a.full_name.localeCompare(b.full_name)
              : b.full_name.localeCompare(a.full_name)
          )
    },
    groupVal: {
      get() {
        return this.idGroup
      },
      set(val) {
        this.$emit('changeGroup', val)
      },
    },
  },
  methods: {
    sortAlphabet() {
      this.sortAlphabetCurrent =
        this.sortAlphabetCurrent < this.sortAlphabetSettings.length - 1
          ? ++this.sortAlphabetCurrent
          : (this.sortAlphabetCurrent = 0)
    },
    getGroup(idGroup) {
      this.$groups
        .getGroup(idGroup)
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

          response.sportsmen?.forEach(sportsman => {
            sportsman.position_type = positionTypes.find(type => type.id === sportsman.amplua).slug
            sportsman.full_name = `${sportsman.user.firstName} ${sportsman.user.lastName}`
            sportsman.birthDate = sportsman.user.birthDate
            sportsman.avatar = sportsman.user.avatar
            sportsman.team_number = sportsman.teamNumber
          })

          this.group = response
        })
        .catch(error => {
          console.log(error)
        })
    },
    getGroups() {
      this.$groups.getGroups({ coaches__id__contains: localStorage.getItem('trainerID') }).then(response => {
        this.groups = response
      })
    },
  },
  mounted() {
    if (this.edit) this.getGroups()
    this.getGroup(this.idGroup)
  },
}
</script>

<style lang="sass" scoped>

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
</style>
