<template>
  <v-dialog v-model="show" max-width="245">
    <div class="modal-close" @click.stop="show = false"></div>
    <v-card class="modal-reminders">
      <p class="modal-reminders__title">Напомнить</p>

      <v-slide-group
        class="reminders-slider"
        show-arrows
        center-active
        v-model="model"
        @click:next="next()"
        @click:prev="prev()"
      >
        <v-slide-item class="reminders-slider__item">
          <p>в определенное время</p>
        </v-slide-item>
        <v-slide-item class="reminders-slider__item">
          <p>за 5 минут</p>
        </v-slide-item>
        <v-slide-item class="reminders-slider__item">
          <p>за 15 минут</p>
        </v-slide-item>
        <v-slide-item class="reminders-slider__item">
          <p>за 30 минут</p>
        </v-slide-item>
        <v-slide-item class="reminders-slider__item">
          <p>за 1 час</p>
        </v-slide-item>
        <v-slide-item class="reminders-slider__item">
          <p>за 2 часа</p>
        </v-slide-item>
      </v-slide-group>

      <template v-if="model === 0">
        <div class="time-range__time-wrap">
          <v-text-field
            v-model="hours"
            :rules="[rules.hours]"
            v-mask="'##'"
            hint="часы"
            persistent-hint
            class="time-range__time-input date-time-input date-time-input--big"
          ></v-text-field>
          <span>:</span>
          <v-text-field
            v-model="minutes"
            :rules="[rules.minutes]"
            v-mask="'##'"
            hint="минуты"
            persistent-hint
            class="time-range__time-input date-time-input date-time-input--big"
          ></v-text-field>
        </div>
      </template>
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
        this.$emit('getRemindersData', '')
        this.$emit('close')
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
        background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.035 13.493C-.372 10.162.558 5.546 3.043 3.365 5.8.94 9.815 1.006 12.42 3.576c2.502 2.477 2.933 6.78-.254 9.96.305.261.617.515.922.777.135.118.262.262.372.397.296.355.279.786-.017 1.065-.322.296-.719.296-1.057-.025-.397-.38-.786-.77-1.167-1.167-.169-.177-.304-.203-.54-.084-2.03.98-4.067.997-6.096.008-.228-.11-.372-.101-.55.085-.355.38-.727.744-1.107 1.107-.397.38-.837.398-1.158.068-.304-.313-.262-.778.118-1.158.372-.38.753-.736 1.15-1.116ZM8.42 7.677a2.422 2.422 0 0 1-.025-.305c0-.65.017-1.293-.009-1.944-.017-.507-.346-.812-.794-.795-.448.017-.694.305-.702.829 0 .972-.009 1.944 0 2.916 0 .448.228.753.668.77.803.033 1.606.033 2.41-.009.43-.017.7-.38.684-.77-.025-.422-.321-.692-.786-.7-.474.008-.939.008-1.446.008ZM3.931.786c-.152.253-.228.482-.389.625A83.545 83.545 0 0 1 1.26 3.347C.88 3.66.448 3.61.177 3.271c-.27-.338-.236-.77.136-1.082C1.057 1.547 1.8.896 2.578.304c.195-.144.575-.186.804-.11.22.068.355.372.549.592ZM12.072 0c.27.127.474.178.617.296.761.625 1.514 1.26 2.258 1.894.346.295.38.769.11 1.09-.271.321-.702.372-1.057.076a101.457 101.457 0 0 1-2.325-1.953c-.262-.22-.364-.54-.195-.837.127-.22.39-.38.592-.566Z' fill='%23464EA3'/%3E%3C/svg%3E")
        background-repeat: no-repeat
        background-position: center

.reminders-slider
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
    width: 165px
    text-align: center
    font-size: 14px
    line-height: 28px
    color: $blue02


/* TODO: Remove duplicate */
.time-range__time-wrap
    margin-top: 10px
    display: flex
    justify-content: center
    span
        margin: 0 8px
        font-weight: 500
        font-size: 32px
        line-height: 40px
        color: $blue05


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
