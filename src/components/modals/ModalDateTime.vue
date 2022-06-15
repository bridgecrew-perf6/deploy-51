<template>
  <v-dialog v-model="show" max-width="330">
    <div class="modal-close" @click.stop="show = false"></div>
    <v-card class="card-date-time">
      <p class="card-date-time__label">Выберите дату</p>
      <div class="card-date-time__inputs-date-wrap date-time-wrap">
        <v-text-field
          v-model="day"
          :rules="[rules.day]"
          v-mask="'##'"
          hide-details
          class="date-time-input date-input"
        ></v-text-field>
        <v-text-field
          v-model="month"
          :rules="[rules.month]"
          v-mask="'##'"
          hide-details
          class="date-time-input date-input"
        ></v-text-field>
        <v-text-field
          v-model="year"
          :rules="[rules.year]"
          v-mask="'####'"
          hide-details
          class="date-time-input date-input"
        ></v-text-field>
      </div>

      <div class="time-range__wrap">
        <div class="time-range__start-wrap">
          <p class="card-date-time__label time-label">Время начала</p>
          <div class="time-range__time-wrap">
            <v-text-field
              v-model="startHours"
              :rules="[rules.hours]"
              v-mask="'##'"
              hint="часы"
              persistent-hint
              class="time-range__time-input date-time-input date-time-input--big"
            ></v-text-field>
            <span>:</span>
            <v-text-field
              v-model="startMinutes"
              :rules="[rules.minutes]"
              v-mask="'##'"
              hint="минуты"
              persistent-hint
              class="time-range__time-input date-time-input date-time-input--big"
            ></v-text-field>
          </div>
        </div>
        <div class="time-range__end-wrap">
          <p class="card-date-time__label time-label">Время окончания</p>
          <div class="time-range__time-wrap">
            <v-text-field
              v-model="endHours"
              :rules="[rules.hours]"
              v-mask="'##'"
              hint="часы"
              persistent-hint
              class="time-range__time-input date-time-input date-time-input--big"
            ></v-text-field>
            <span>:</span>
            <v-text-field
              v-model="endMinutes"
              :rules="[rules.minutes]"
              v-mask="'##'"
              hint="минуты"
              persistent-hint
              class="time-range__time-input date-time-input date-time-input--big"
            ></v-text-field>
          </div>
        </div>
      </div>
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
      day: '',
      month: '',
      year: '',

      startHours: '',
      startMinutes: '',
      endHours: '',
      endMinutes: '',

      rules: {
        day: value => (value >= 1 && value <= 31) || '',
        month: value => (value >= 1 && value <= 12) || '',
        year: value => value >= 2021 || '',
        hours: value => (value >= 0 && value <= 24) || 'часы',
        minutes: value => (value >= 0 && value <= 60) || 'минуты',
      },
    }
  },
  methods: {},
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          if (
            this.day &&
            this.month &&
            this.year &&
            this.startHours &&
            this.startMinutes &&
            this.endHours &&
            this.sendMinutes
          ) {
            let date = `${this.day}/${this.month}/${this.year}`
            let timeStart = `${this.startHours}:${this.startMinutes}`
            let timeEnd = `${this.endHours}:${this.endMinutes}`
            this.$emit('getData', { date, timeStart, timeEnd })
          }
          this.$emit('close')
        }
      },
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


.card-date-time

.card-date-time__label
    margin-bottom: 10px
    font-size: 12px
    line-height: 16px
    color: $blue02

.time-label
    margin-bottom: 5px

.card-date-time__inputs-date-wrap
    display: flex
    margin-bottom: 15px

.date-time-wrap

.date-time-input
    &::v-deep
        padding: 0px
        margin-top: 0px
        .v-input__slot
            &::before
                opacity: 1 !important
                border-top-width: 2px
                border-color: $blue05 !important
        .v-text-field__slot
            font-size: 18px
            input
                color: $blue02
                padding-bottom: 4px
        &.error--text
            .v-text-field__slot
                input
                    color: $terrible
            .v-input__slot
                &::before
                    border-color: $terrible !important
                &::after
                    border-color: $terrible
        &.v-input--is-focused
            .v-input__slot
                &::after
                    border-color: $blue02


.date-input
    &::v-deep
        margin-right: 10px
        max-width: 22px
        &:last-child
            margin-right: 0px
            max-width: 44px

.time-range__wrap
    display: flex

.time-range__start-wrap
    position: relative
    margin-right: 60px
    &::before
        content: ''
        position: absolute
        bottom: 32px
        right: -43px

        width: 24px
        height: 1px
        background-color: $blue06
.time-range__end-wrap



.time-range__time-wrap
    display: flex
    span
        margin: 0 8px
        font-weight: 500
        font-size: 32px
        line-height: 40px
        color: $blue05

.time-range__time-input

.date-time-input--big
    max-width: 40px
    &::v-deep
        .v-input__slot
            margin-bottom: 0px
        .v-text-field__slot

            input
                padding-top: 0px
                padding-bottom: 0px
                font-size: 32px
                max-height: none

        .v-messages__message
            font-size: 10px
            line-height: 14px
            text-align: center
            color: $blue05
</style>
