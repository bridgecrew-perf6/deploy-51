<template>
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
      <img v-if="item.icon" class="group-list__select-image" :src="item.icon"/>
      <p class="group-list__select-title">{{ item.title }}</p>
    </template>
    <template v-slot:selection="{ item }">
      <img v-if="item.icon" class="group-list__select-image" :src="item.icon"/>
      <p class="group-list__select-title">{{ item.title }}</p>
    </template>
  </v-select>
</template>

<script>
export default {
  props: {
    sortSportsmans: Array
  },
  data() {
    return {}
  },
  computed: {
    selectedSortSportsmas: {
      get() {
        return 'all'
      },
      set(value) {
        this.$emit('selectedSortSportsmas', value)
      },
    }
  },
}
</script>

<style scoped lang="sass">
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
            background-color: #ECF6FF !important
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
  margin-bottom: 0 !important
  font-weight: 500
  font-size: 14px
  line-height: 19px
  color: $blue02
  position: relative
  z-index: 2
/* End Select position types */
</style>
