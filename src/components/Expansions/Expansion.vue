<template>
  <v-expansion-panels flat class="expansion__panels">
    <v-expansion-panel class="expansion__panel">
      <v-expansion-panel-header class="expansion__panel-header"
        >{{ label }}
        <template v-slot:actions> </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="expansion__content">
        <div
          v-for="(filter, index) in filters"
          :key="index"
          class="expansion__content-inner"
          :class="{ 'expansion__content-inner--color': filter.color }"
        >
          <span
            class="expansion__content-color"
            v-if="filter.color"
            :style="`background-color: ${filter.color}`"
          ></span>
          <base-checkbox class="expansion__content-checkbox"
                         :label="filter.label"
                         white
                         textDark
                         reverse />
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import BaseCheckbox from '@/components/library/BaseCheckbox.vue'

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    filters: {
      type: Array,
      required: true,
    },
  },
  components: { BaseCheckbox },
}
</script>

<style lang="sass" scoped>
.expansion__panels
    &.v-expansion-panels
        &::v-deep
            border-bottom: 1px solid #ECF6FF
            border-radius: 0
            .v-expansion-panel-header.expansion__panel-header
                padding-top: 25px
                padding-bottom: 25px
                padding-left: 43px
                font-weight: 500
                font-size: 16px
                line-height: 20px
                color: #574F92
                &::after
                    content: ''
                    position: absolute
                    top: 26px
                    left: 12px
                    width: 20px
                    height: 20px
                    border-radius: 4px
                    background-color: $blue03
            .v-expansion-panel-content
                border-top: 1px solid #ECF6FF
            .v-expansion-panel-content__wrap
                padding: 20px 12px
            .v-expansion-panel-header__icon
                right: 10px
                background-image: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.66.339a1.158 1.158 0 0 1 0 1.638L5.839 5.799c-.23.23-.532.343-.833.34a1.155 1.155 0 0 1-.843-.34L.339 1.977A1.158 1.158 0 0 1 1.977.34L5 3.362 8.023.339a1.158 1.158 0 0 1 1.638 0Z' fill='%2395B0DA'/%3E%3C/svg%3E")
                background-size: auto
                background-position: center

.expansion__content-inner
    margin-bottom: 6px
    &:last-child
        margin-bottom: 0

.expansion__content-inner--color
    width: 100%
    display: flex
    align-items: center
    .expansion__content-checkbox
        width: 100%


.expansion__content-color
    display: inline-block
    width: 20px
    height: 20px
    margin-right: 10px
    border-radius: 4px
</style>
