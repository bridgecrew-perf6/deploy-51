<template>
  <v-select
    class="wu-small-select"
    :items="items"
    :item-text="text"
    :item-value="itemValue"
    hide-details
    flat
    :label="label"
    :menu-props="{
      contentClass: 'wu-small-select__menu',
      nudgeBottom: 32,
    }"
    :value="value"
    @change="handleChange"
  >
    <template v-slot:label>
      <span class="wu-small-select__square"></span>
      <p class="wu-small-select__title">{{ label }}</p>
    </template>
    <template v-slot:item="{ item }">
      <img v-if="item.icon || item.image" class="wu-small-select__image" :src="item.icon || item.image" />
      <span v-else class="wu-small-select__square"></span>
      <p class="wu-small-select__title">{{ item[text] }}</p>
    </template>
    <template v-slot:selection="{ item }">
      <img v-if="item.icon || item.image" class="wu-small-select__image" :src="item.icon || item.image" />
      <span v-else class="wu-small-select__square"></span>
      <p class="wu-small-select__title">{{ item[text] }}</p>
    </template>
  </v-select>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    itemValue: {
      type: String,
      default: 'id',
      required: true,
    },
    label: {
      type: String,
    },
    value: {
      type: [String, Number],
    },
  },
  computed: {
    selected: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    handleChange(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="sass" scoped>
.wu-small-select
  margin-top: 0
  padding-top: 0
  color: $blue05
  font-size: 14px
  line-height: 19px
  border-radius: 4px
  &::v-deep
    &.v-select--is-menu-active
        background-color: #fbfbfe
        border-radius: 4px 4px 0 0
        box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15)
    .v-input__slot
        padding-left: 13px
        &::after,
        &::before
            display: none
        .v-select__slot
            .v-label
                display: flex
                align-items: center
                width: 100%
                position: static !important
                &.v-label--active
                    transform: none
    &.v-input--is-label-active
        .v-select__slot
            .v-label
                display: none

    .v-select__selections
        padding-right: 25px
        flex-wrap: nowrap
        .v-select__selection
            width: 100%
            margin: 0
            padding: 5px 0 5px 10px
            color: $blue04

        input
            max-width: 0px
            width: 0px !important

    .v-input__append-inner
      position: absolute
      top: 50%
      right: 15px
      margin: 0px
      padding: 0px

      max-width: 10px
      transform: translateY(-50%)

    .v-input__icon.v-input__icon--append
      max-width: 10px !important
      height: 10px !important
      i
        max-width: 10px
        width: 100%
        height: 100%
        background-image: url("data:image/svg+xml,%3Csvg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.271.271a.926.926 0 0 0 0 1.31l3.055 3.054a.923.923 0 0 0 .671.271.923.923 0 0 0 .669-.27L7.72 1.58A.926.926 0 0 0 6.411.27L3.996 2.687 1.58.27a.926.926 0 0 0-1.309 0Z' fill='%23899BC9'/%3E%3C/svg%3E")
        background-repeat: no-repeat
        background-position: center


.wu-small-select__menu
  .v-select-list
    padding: 0px
    box-shadow: none
    background-color: transparent
    &::v-deep
        .v-list-item
            padding: 10px 13px
            min-height: auto
            position: relative
            &::before
                transition: none
            &::after
                display: none
            &.v-list-item--active
                &::before
                    background-color: #ecf6ff
                    opacity: 1
                .wu-small-select__title
                    color: $blue01
            &:hover
                &::before
                    background-color: #ECF6FF!important
                    opacity: 1

        .v-list-item__content
            padding: 4px 0
        .v-list-item__title
            line-height: 19px
            color: $blue04

.wu-small-select__image
  margin-right: 8px
  position: relative
  z-index: 2

.wu-small-select__square
    position: relative
    display: inline-block
    width: 14px
    min-width: 14px
    height: 14px
    margin-right: 5px
    background: $blue05
    border-radius: 4px
    z-index: 2


.wu-small-select__title
    max-width: 125px
    font-weight: 500
    font-size: 14px
    line-height: 19px
    color: $blue02
    position: relative
    z-index: 2

    text-overflow: ellipsis
    overflow: hidden
    white-space: nowrap
</style>
