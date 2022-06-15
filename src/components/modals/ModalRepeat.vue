<template>
  <v-dialog v-model="show" :max-width="maxWidth">
    <div class="modal-close" @click.stop="show = false"></div>
    <v-card class="modal-reminders">
      <p class="modal-reminders__title">Повторять</p>

      <v-slide-group
        class="reminders-slider"
        show-arrows
        center-active
        v-model="model"
        @click:next="next()"
        @click:prev="prev()"
      >
        <v-slide-item class="reminders-slider__item">
          <p>ежедневно</p>
        </v-slide-item>
        <v-slide-item class="reminders-slider__item">
          <p>еженедельно</p>
        </v-slide-item>
        <v-slide-item class="reminders-slider__item">
          <p>ежемесячно</p>
        </v-slide-item>
        <v-slide-item class="reminders-slider__item">
          <p>ежегодно</p>
        </v-slide-item>
      </v-slide-group>
      <v-row>
        <v-col class="reminders-slider__wrapper">
          <span class="reminders-slider__text">повторять в </span>
          <v-text-field
            class="modal-create__input modal-create__input--small"
            height="auto"
            flat
            hide-details
            placeholder="__:__"
          ></v-text-field>
        </v-col>
        <v-col class="reminders-slider__wrapper reminders-slider__wrapper--padding" v-if="model >= 2">
          <template v-if="model === 2">
            <span class="reminders-slider__text">каждое </span>
            <v-text-field
              class="modal-create__input modal-create__input--small modal-create__input--xsmall"
              height="auto"
              flat
              hide-details
              placeholder="1"
            ></v-text-field>
            <span class="reminders-slider__text"> число месяца</span>
          </template>
          <template v-else-if="model === 3">
            <span class="reminders-slider__text">каждый год </span>
            <v-text-field
              class="modal-create__input modal-create__input--small modal-create__input--xsmall"
              height="auto"
              flat
              hide-details
              placeholder="1"
            ></v-text-field>
            <span class="reminders-slider__text"> числа</span>
          </template>
        </v-col>
      </v-row>
      <v-row v-if="model === 1">
        <v-col>
          <v-chip-group
            class="repeat-chip-group__days-list"
            v-model="selection"
            active-class="repeat-chip-group__days--selected"
            multiple
            :show-arrows="false"
          >
            <v-chip class="repeat-chip-group__days" v-for="day in days" :key="day" :value="day">
              {{ day }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: { mask },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      model: 0,
      hours: '',
      minutes: '',
      days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      selectionDays: [],
      rules: {
        hours: value => (value >= 0 && value <= 24) || 'часы',
        minutes: value => (value >= 0 && value <= 60) || 'минуты',
      },
    }
  },
  methods: {
    next() {
      this.model += 1
    },
    prev() {
      this.model -= 1
    },
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        this.$emit('getRepeatData', '')
        this.$emit('close')
      },
    },
    maxWidth: function () {
      if (this.model == 0) return 235
      else if (this.model == 1) return 385
      else if (this.model >= 2) return 465
      else return 235
    },
  },
}
</script>

<style lang="sass" scoped>
.card-date-time
    padding: 22px

.modal-close
    background-image: url("data:image/svg+xml,%3Csvg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.761 5.961 2.888 4.154C2.046 3.34 1.2 2.53.358 1.716A.972.972 0 0 1 .314.341C.693-.072 1.35-.123 1.762.26c.545.502 1.072 1.022 1.605 1.536.927.892 1.851 1.788 2.778 2.68.026.026.054.048.092.083l.697-.66 3.7-3.52c.415-.393.87-.478 1.317-.245.587.309.726 1.075.253 1.545-.571.568-1.16 1.11-1.744 1.665-.896.852-1.788 1.703-2.684 2.552-.022.022-.044.044-.013.022.3.328.584.672.902.98 1.164 1.14 2.347 2.262 3.51 3.397a.973.973 0 0 1-.369 1.634c-.413.142-.791.063-1.106-.243-1.404-1.35-2.807-2.706-4.21-4.059l-.269-.258L4.985 8.54c-1.063 1.009-2.123 2.021-3.189 3.027-.57.54-1.447.373-1.725-.321-.151-.376-.06-.78.256-1.079.75-.706 1.504-1.416 2.252-2.132C3.3 7.35 4.023 6.661 4.76 5.961Z' fill='%23B9CBE5'/%3E%3C/svg%3E");
    background-size: auto
    z-index: 2

.modal-reminders
    padding: 17px 20px 20px

.modal-reminders__title
    position: relative
    margin-bottom: 15px
    padding-left: 25px

    font-weight: 600
    font-size: 14px
    line-height: 19px

    color: $blue02
    &::before
        content: ''
        position: absolute
        top: 50%
        left: 4.5px
        width: 16px
        height: 16px
        transform: translateY(-50%)
        background-image: url("data:image/svg+xml,%3Csvg width='13' height='14' viewBox='0 0 13 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.3 8.687H.111L.005 6.24c-.074-1.752.654-3.09 2.112-4.037.779-.506 1.661-.638 2.567-.661 1.271-.034 2.542-.06 3.813-.092.086-.002.172-.018.292-.03V0l3.395 2.421L8.81 4.83V3.308H5.477c-.492 0-.987-.027-1.478.004-1.423.092-2.454 1.264-2.551 2.609-.057.774-.072 1.553-.11 2.33-.005.131-.022.263-.039.436ZM3.964 12.535V14L.592 11.594 3.946 9.2v1.51h3.326c.493 0 .987.023 1.479-.005 1.468-.079 2.513-1.319 2.584-2.675.038-.747.066-1.495.102-2.242.007-.146.027-.29.042-.452h1.2c-.048 1.42.37 2.837-.173 4.223-.636 1.626-1.812 2.637-3.55 2.825-1.306.14-2.63.11-3.945.15-.328.011-.657.002-1.047.002Z' fill='%23464EA3'/%3E%3C/svg%3E")
        background-repeat: no-repeat
        background-position: center

.reminders-slider__text
    font-size: 16px
    line-height: 32px

    color: $blue02

.reminders-slider
    max-width: 195px
    padding-bottom: 0px
    &::v-deep
        background-color: #ECF6FF
        border-radius: 28px !important

        .v-slide-group__prev,
        .v-slide-group__next
            min-width: 20px
            flex: 0 0 20px
            .v-icon
                width: 5px
                height: 9px
                background-repeat: no-repeat
                background-position: center
        .v-slide-group__prev
            .v-icon
                background-image: url("data:image/svg+xml,%3Csvg width='5' height='9' viewBox='0 0 5 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.635.728a.926.926 0 0 0-1.31 0L.272 3.783a.923.923 0 0 0-.27.671.923.923 0 0 0 .27.669l3.055 3.054a.926.926 0 0 0 1.309-1.309L2.219 4.453l2.416-2.416a.926.926 0 0 0 0-1.309Z' fill='%23464EA3'/%3E%3C/svg%3E")
            .v-icon.v-icon--disabled
                background-image: url("data:image/svg+xml,%3Csvg width='5' height='9' viewBox='0 0 5 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.635.728a.926.926 0 0 0-1.31 0L.272 3.783a.923.923 0 0 0-.27.671.923.923 0 0 0 .27.669l3.055 3.054a.926.926 0 0 0 1.309-1.309L2.219 4.453l2.416-2.416a.926.926 0 0 0 0-1.309Z' fill='%23B9CBE5'/%3E%3C/svg%3E")
        .v-slide-group__next
            .v-icon
                background-image: url("data:image/svg+xml,%3Csvg width='6' height='9' viewBox='0 0 6 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.813 8.178a.926.926 0 0 0 1.31 0l3.054-3.055a.923.923 0 0 0 .271-.672.923.923 0 0 0-.27-.668L2.122.728a.926.926 0 0 0-1.31 1.31L3.23 4.453.813 6.869a.926.926 0 0 0 0 1.309Z' fill='%23525BBA'/%3E%3C/svg%3E")
            .v-icon.v-icon--disabled
                background-image: url("data:image/svg+xml,%3Csvg width='6' height='9' viewBox='0 0 6 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.813 8.178a.926.926 0 0 0 1.31 0l3.054-3.055a.923.923 0 0 0 .271-.672.923.923 0 0 0-.27-.668L2.122.728a.926.926 0 0 0-1.31 1.31L3.23 4.453.813 6.869a.926.926 0 0 0 0 1.309Z' fill='%23B9CBE5'/%3E%3C/svg%3E")

.reminders-slider__item
    width: 155px
    text-align: center
    font-size: 14px
    line-height: 28px
    color: $blue02

.reminders-slider__wrapper
    margin-top: 15px

.reminders-slider__wrapper--padding
    padding: 12px 0px


/* TODO: Remove duplicate */

.modal-create__input
  &::v-deep
      padding: 0
      margin-bottom: 10px
      .v-input__slot
        padding: 0 !important
        &::before,
        &::after
          display: none

      .v-text-field__slot input
        max-height: none
        font-size: 16px
        line-height: 22px

        padding: 8px 10px 0px

        color: $blue02
        @include input-placeholder
          color: $blue05

      .v-input__prepend-outer
        width: 33px
        margin: 0
        align-self: center
        justify-content: center

.modal-create__input--small
    margin: 0px
    max-width: 80px
    display: inline-flex

    &::v-deep
        .v-text-field__slot input
        font-size: 14px
        line-height: 19px

        .v-input__slot
            input
                padding: 6px 15px

        .v-input__control
            border: 1px solid #ECF6FF
            border-radius: 4px

.modal-create__input--xsmall
    max-width: 38px

.repeat-chip-group__days-list
    &::v-deep
        .v-slide-group__prev,
        .v-slide-group__next
            display: none
        .v-slide-group__content

.repeat-chip-group__days
    width: 32px
    height: 32px
    padding: 0px
    justify-content: center

    background-color: #ECF6FF !important
    border-radius: 50%
    &::v-deep
        .v-chip__content
            font-size: 16px
            line-height: 22px
            color: $blue03

.repeat-chip-group__days--selected
    background-color: $blue02 !important
    &::v-deep
        .v-chip__content
            color: #FFFFFF !important
</style>
