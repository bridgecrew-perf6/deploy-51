<template>
  <div class="workload">
    <div class="workload__inner">
      <ul class="workload__list">
        <li class="workload__item" v-for="(period, index) in periods" :key="index">
          <p class="workload__label">{{ period.label }}</p>
          <img v-if="period.count == 0" src="@/assets/images/svg/workload/empty.svg" class="workload__icon" />
          <img
            v-else-if="period.count > 0 && period.count < 2"
            src="@/assets/images/svg/workload/low.svg"
            class="workload__icon"
          />
          <img
            v-else-if="period.count >= 3 && period.count <= 4"
            src="@/assets/images/svg/workload/medium.svg"
            class="workload__icon"
          />
          <img
            v-else-if="period.count >= 5 && period.count <= 6"
            src="@/assets/images/svg/workload/hight.svg"
            class="workload__icon"
          />
          <img
            v-else-if="period.count >= 7 && period.count <= 8"
            src="@/assets/images/svg/workload/hight.svg"
            class="workload__icon"
          />
          <img v-else src="@/assets/images/svg/workload/maximum.svg" class="workload__icon" />
        </li>
      </ul>
      <div v-if="periods.length" class="workload__sparkline-container">
        <canvas id="sparkline" height="65" style="width: 100%"></canvas>
      </div>
    </div>

    <div v-if="createMenu" class="workload__create-event">
      <span class="workload__create-event-current" :style="`left: calc(((100% / ${periods.length}) / 2))`"></span>
      <div class="workload__create-inner">
        <v-row>
          <v-col cols="4" class="d-flex">
            <div class="workload__create-date-wrapper">
              <span class="modal-create__label">Дата</span>
              <v-text-field
                class="modal-create__input modal-create__input--small"
                height="auto"
                flat
                hide-details
                placeholder="__.__.____"
                v-mask="'##.##.####'"
                v-model="date"
              >
              </v-text-field>
            </div>
            <div class="workload__create-time-wrapper">
              <span class="modal-create__label">Время</span>

              <div class="workload__create-time-inner">
                <v-text-field
                  class="modal-create__input modal-create__input--small"
                  height="auto"
                  flat
                  hide-details
                  placeholder="___:___"
                  return-masked-value
                  v-mask="'##:##'"
                  v-model="timeStart"
                >
                </v-text-field
                ><span class="workload__dash">-</span>
                <v-text-field
                  class="modal-create__input modal-create__input--small"
                  height="auto"
                  flat
                  hide-details
                  placeholder="___:___"
                  return-masked-value
                  v-mask="'##:##'"
                  v-model="timeEnd"
                >
                </v-text-field>
              </div>
            </div>
          </v-col>
          <v-col :cols="4">
            <span class="modal-create__label">Задача</span>
            <v-select
              v-if="!standard"
              :items="trainingObjective"
              item-value="id"
              item-text="name"
              flat
              single-line
              hide-details
              class="modal-create__select-event-subtype modal-create__select--border"
              :menu-props="menuSettingsBordered"
              label="Выберите задачу"
              v-model="objectiveType"
            >
            </v-select>
            <v-select
              v-else
              :items="standardTaskType"
              item-value="id"
              item-text="name"
              flat
              single-line
              hide-details
              class="modal-create__select-event-subtype modal-create__select--border"
              :menu-props="menuSettingsBordered"
              label="Выберите задачу"
              v-model="taskType"
            >
            </v-select>
          </v-col>
          <v-col v-if="!standard" :cols="4">
            <span class="modal-create__label">Подкатегория</span>
            <v-select
              :items="lessonTypes"
              item-value="id"
              item-text="name"
              flat
              single-line
              hide-details
              class="modal-create__select-event-subtype modal-create__select--border"
              :menu-props="menuSettingsBordered"
              label="Выберите подкатегорию"
              v-model="event.title"
            >
            </v-select>
          </v-col>
          <v-col cols="4" v-if="!standard">
            <span class="modal-create__label">Тип занятия</span>
            <v-select
              :items="trainingObjectType"
              item-value="id"
              item-text="name"
              flat
              single-line
              hide-details
              class="modal-create__select-event-subtype modal-create__select--border"
              :menu-props="menuSettingsBordered"
              label="Выберите тип занятия"
              v-model="objectType"
              :readonly="true"
            >
            </v-select>
          </v-col>
          <v-col cols="4" v-if="!standard">
            <span class="modal-create__label">Вид подготовки</span>
            <v-select
              :items="trainingTypes"
              item-value="id"
              item-text="name"
              flat
              single-line
              hide-details
              class="modal-create__select-event-subtype modal-create__select--border"
              :menu-props="menuSettingsBordered"
              label="Выберите вид подготовки"
              v-model="trainingType"
            >
            </v-select>
          </v-col>
          <v-col cols="4">
            <span class="modal-create__label">Место проведения</span>
            <v-select
              :items="trainingPlaceTypes"
              item-value="id"
              item-text="name"
              flat
              single-line
              hide-details
              class="modal-create__select-event-subtype modal-create__select--border"
              :menu-props="menuSettingsBordered"
              label="Выберите тип зала"
              v-model="placeType"
            >
            </v-select>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { mask } from 'vue-the-mask'
import { Chart, registerables } from 'chart.js'

import _ from 'lodash'

Chart.register(...registerables)

export default {
  directives: { mask },
  props: {
    createMenu: {
      type: Boolean,
      default: false,
    },
    event: {
      type: Object,
    },
    standard: { type: Boolean, default: false },
    edit: { type: Boolean, default: false },
  },
  data() {
    return {
      periods: [
        {
          label: 'Понедельник',
          count: 8,
        },
        {
          label: 'Вторник',
          count: 1,
        },
        {
          label: 'Среда',
          count: 5,
        },
        {
          label: 'Четверг',
          count: 8,
        },
        {
          label: 'Пятница',
          count: 3,
        },
        {
          label: 'Суббота',
          count: 8,
        },
        {
          label: 'Воскресенье',
          count: 10,
        },
      ],
      chart: null,
      menuSettingsBordered: {
        contentClass: 'modal-create__select-menu',
        nudgeBottom: 32,
        nudgeLeft: 12,
      },
    }
  },
  computed: {
    ...mapGetters('events', [
      'getTrainingObjective',
      'getTrainingType',
      'getTrainingObjectType',
      'getTrainingPlaceTypes',
      'getStandardTaskType',
      'getLessonTypes',
    ]),
    trainingObjective() {
      return this.getTrainingObjective
    },
    trainingTypes() {
      return this.getTrainingType
    },
    trainingObjectType() {
      return this.getTrainingObjectType
    },
    trainingPlaceTypes() {
      return this.getTrainingPlaceTypes
    },
    standardTaskType() {
      return this.getStandardTaskType
    },
    valueSparkline() {
      return this.periods.map(period => period.count)
    },
    labelsSparkline() {
      return this.periods.map(period => period.label)
    },
    parseDateTime() {
      return this.$moment(this.event.recurrences.match(/(\d{8}T\d{6}Z)/g)[0]) || ''
    },
    lessonTypes() {
      return this.getLessonTypes
    },
    objectType() {
      return this.event.training?.objectType || ''
    },
    objectiveType: {
      get() {
        return this.event.training?.objectiveType || ''
      },
      set(val) {
        this.event.training.objectiveType = val
      },
    },
    trainingType: {
      get() {
        return this.event.training?.trainingType || ''
      },
      set(val) {
        this.event.training.trainingType = val
      },
    },
    taskType: {
      get() {
        return this.event.standard?.taskType || ''
      },
      set(val) {
        this.event.standard.taskType = val
      },
    },
    placeType: {
      get() {
        if (this.standard) return this.event.standard?.placeType
        else return this.event.training?.placeType
      },
      set(val) {
        if (this.standard) this.event.standard.placeType = val
        else this.event.training.placeType = val
      },
    },
    date: {
      get() {
        if (this.edit) return this.parseDateTime.format('DD.MM.YYYY')
        else return this.event.date
      },
      set: _.debounce(function (val) {
        if (this.edit) this.$emit('changeDate', val)
        else this.event.date = val
      }, 1000),
    },
    timeStart: {
      get() {
        if (this.edit) return this.parseDateTime.format('HH:mm')
        else return this.event.timeStart
      },
      set: _.debounce(function (val) {
        if (this.edit) {
          let duration = this.$moment(this.timeEnd, 'HH:mm').diff(this.$moment(val, 'HH:mm'), 'minutes')
          this.$emit('changeTimeStart', val)
          this.$emit('changeDuration', duration)
        } else {
          this.event.timeStart = val
        }
      }, 1000),
    },
    timeEnd: {
      get() {
        if (this.edit) return this.$moment(this.parseDateTime).add(this.event.duration, 'minutes').format('HH:mm')
        else return this.event.timeEnd
      },
      set: _.debounce(function (val) {
        if (this.edit) {
          let duration = this.$moment(val, 'HH:mm').diff(this.$moment(this.timeStart, 'HH:mm'), 'minutes')
          this.$emit('changeDuration', duration)
        } else {
          this.event.timeEnd = val
        }
      }, 1000),
    },
    inputVal: {
      get() {
        return this.event
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  mounted() {
    this.initChart()
    this.loadTrainingPlaceTypes()
  },
  methods: {
    ...mapActions('events', ['loadTrainingPlaceTypes']),
    initChart() {
      let canvas = document.getElementById('sparkline')
      let context = canvas.getContext('2d')

      let gradientBorder = context.createLinearGradient(0, 0, 0, 65)
      gradientBorder.addColorStop(0, '#FF4B6B')
      gradientBorder.addColorStop(0.5, '#FFA217')
      gradientBorder.addColorStop(1, '#64C048')

      let gradientBackground = context.createLinearGradient(0, 0, 0, 65)
      gradientBackground.addColorStop(0, 'rgba(255, 75, 107, 0.3)')
      gradientBackground.addColorStop(0.5, 'rgba(255, 162, 23, 0.2)')
      gradientBackground.addColorStop(1, 'rgba(100, 192, 72, 0.1)')

      const totalDuration = 700
      const delayBetweenPoints = totalDuration / this.valueSparkline.length

      this.chart = new Chart(canvas, {
        type: 'line',
        data: {
          labels: this.labelsSparkline,
          datasets: [
            {
              borderColor: gradientBorder,
              data: this.valueSparkline,
              lineTension: 0.3,
              fill: true,
              backgroundColor: gradientBackground,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
            tooltip: {
              display: false,
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
          responsive: true,
        },
      })
    },
    handleChange(event) {
      this.$emit('input', this.event)
    },
  },
}
</script>

<style lang="sass" scoped>
.workload
    margin-bottom: 40px

    background-color: $blue02
    box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15)
    border-radius: 28px
    overflow: visible

.workload__inner
    position: relative
    padding-bottom: 25px

.workload__list
    display: flex
    justify-content: space-between

.workload__item
    position: relative
    width: 100%
    padding-top: 10px
    padding-bottom: 40px
    text-align: center
    &::after
        content: ''
        position: absolute
        top: 50%
        right: 0px
        width: 1px
        height: 80%
        background-color: $blue03
        transform: translateY(-50%)
    &:last-child
      &::after
        display: none

.workload__label
    font-size: 12px
    line-height: 16px
    color: #ECF6FF

.workload__sparkline-container
    max-height: 65px
    position: absolute
    bottom: 0px
    left: 0px
    right: 0px
    canvas
        max-height: 65px

.workload__create-event
    position: relative
    background-color: #fff

    border-radius: 28px

.workload__create-event-current
    position: absolute
    top: -20px
    width: 0;
    height: 0;
    border-left: 35px solid transparent
    border-right: 35px solid transparent

    border-bottom: 20px solid #fff
    transform: translateX(-50%)

.workload__create-inner
    padding: 20px 25px


/* ToDo: Remove */
.workload__create-date-wrapper
    max-width: 115px
    margin-right: 25px
.workload__create-time-wrapper
.workload__create-time-inner
    display: flex
    align-items: center
    .modal-create__input--smal
        max-width: 65px
    .workload__dash
      margin-bottom: 6px

.modal-create__select-event-subtype
  padding: 0
  &::v-deep
    &.v-input--is-focused.v-select--is-menu-active
      .v-select__slot
        label
          display: flex
          align-items: center
    .v-select__slot
      label
        display: flex
        align-items: center
    .v-select__selection
        font-size: 14px
        color: $blue02
    .v-select__selections
      padding-left: 9px

    .v-input__slot
      &::before,
      &::after
        display: none

    .v-input__icon.v-input__icon--append
      i
        width: 10px
        height: 6px
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.707 1.707 3.586 3.586a1 1 0 0 0 1.414 0l3.586-3.586C9.923 1.077 9.477 0 8.586 0H1.414C.524 0 .077 1.077.707 1.707Z' fill='%23B9CBE5'/%3E%3C/svg%3E");
        background-repeat: no-repeat
        background-position: center


.modal-create__select--border
  align-items: center
  &::v-deep
    .v-input__control
      padding: 0 12px
      border: 1px solid #ecf6ff
      border-radius: 4px

    .v-select__slot label
      font-weight: 300
      font-size: 14px
      line-height: 19px
      color: $blue06

.modal-create__label
    font-weight: 500
    font-size: 10px
    line-height: 18px
    color: $blue02


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
  &::v-deep
    .v-text-field__slot input
      font-size: 14px
      line-height: 19px


    .v-input__slot
      input
        padding: 6px 8px

    .v-input__control
      border: 1px solid #ecf6ff
      border-radius: 4px
</style>
