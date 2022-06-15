<template>
  <div class="calendar-nav">
    <div class="calendar-nav__header">
      <button class="calendar-nav__prev" @click="handlePrev($event)">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.197.914a1.031 1.031 0 0 0-1.458 0L.337 4.316a1.028 1.028 0 0 0-.302.739c-.006.272.095.546.302.753L3.74 9.211a1.031 1.031 0 0 0 1.458-1.458l-2.69-2.69 2.69-2.69a1.031 1.031 0 0 0 0-1.459Z"
            fill="#95B0DA"
          />
        </svg>
      </button>
      <p class="calendar-nav__month h2">{{ labelNav }}</p>
      <button class="calendar-nav__next" @click="handleNext($event)">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M.801.913a1.031 1.031 0 0 1 1.459 0l3.403 3.403c.204.205.305.474.302.742.005.27-.095.544-.302.75L2.26 9.213A1.031 1.031 0 0 1 .8 7.753l2.691-2.69-2.69-2.691a1.031 1.031 0 0 1 0-1.459Z"
            fill="#95B0DA"
          />
        </svg>
      </button>
    </div>
    <div class="calendar-nav__body">
      <div class="calendar-nav__weeks">
        <div
          class="calendar-nav__week-day"
          :class="{ 'calendar-nav__week-day--weekend': index === 5 || index === 6 }"
          v-for="(weekDay, index) in weekDays"
          :key="index"
        >
          {{ weekDay }}
        </div>
      </div>
      <div class="calendar-nav__days">
        <div
          class="calendar-nav__day"
          :class="classObjectDay(getDay(n))"
          v-for="n in periodLength"
          :key="n"
          @click="handleSelectDay(getDay(n))"
        >
          {{ getDay(n).format('D') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  props: {
    labelNav: {
      type: String,
      default: 'Сегодня',
    },
    initDay: {
      type: Date,
    },
  },
  data() {
    return {
      weekDays: moment.weekdaysShort(true),
    }
  },
  computed: {
    startDay: function () {
      return moment(this.initDay).startOf('month')
    },
    endDay: function () {
      return moment(this.initDay).endOf('month')
    },
    startWeek: function () {
      return this.startDay.startOf('week')
    },
    endWeek: function () {
      return this.endDay.endOf('week')
    },
    periodLength: function () {
      return this.endWeek.diff(this.startWeek, 'days') + 1
    },
    selectedMonth() {
      return moment(this.initDay).format('MMMM')
    },
  },
  methods: {
    handleNext: function () {
      this.$emit('next')
    },
    handlePrev: function () {
      this.$emit('prev')
    },
    handleSelectDay(day) {
      this.$emit('selectDay', day)
    },
    getDay: function (n) {
      return moment(this.startWeek.toDate()).add(n - 1, 'd')
    },
    isCurrentMonth(day) {
      return moment(day).format('MMMM') === this.selectedMonth
    },
    isToday(day) {
      return moment().format('DD-MM-YYYY') == day.format('DD-MM-YYYY') && day.format('D') !== 1
    },
    isWeekend(day) {
      if (moment(day).format('MMMM') === this.selectedMonth) {
        return day.day() == 0 || day.day() == 6
      }
    },
    isSelectedDay(day) {
      if (this.$route.name === 'CalendarDay') {
        return moment(this.initDay).format('DD-MM-YYYY') == day.format('DD-MM-YYYY') && day.format('D') !== 1
      }
    },
    classObjectDay(day) {
      return {
        'calendar-nav__day--gray': !this.isCurrentMonth(day),
        'calendar-nav__day--selected': !this.isToday(day) && this.isSelectedDay(day),
        'calendar-nav__day--today': this.isToday(day),
        'calendar-nav__day--weekend': this.isWeekend(day),
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.calendar-nav
    margin-bottom: 25px

.calendar-nav__header
    display: flex
    align-items: center
    justify-content: center

.calendar-nav__prev,
.calendar-nav__next
    padding: 10px
    border-radius: 50%


.calendar-nav__prev
    margin-right: 25px


.calendar-nav__next
    margin-left: 25px

.calendar-nav__month
    font-weight: 500
    color: $blue01
    &:first-letter
        text-transform: capitalize


.calendar-nav__body
    padding: 0 12px

    padding-bottom: 25px
    border-bottom: 1px solid #ECF6FF

.calendar-nav__weeks
    display: flex
    flex-wrap: wrap

.calendar-nav__week-day
    width: calc((100% - (2.5px * 6)) / 7);
    height: 40px
    flex-grow: 1

    font-weight: 500
    font-size: 14px
    line-height: 40px
    text-transform: uppercase
    text-align: center

    color: #95B0DA

.calendar-nav__week-day--weekend
    color: $terrible

.calendar-nav__days
    display: flex
    flex-wrap: wrap
    justify-content: flex-start

.calendar-nav__day
    width: calc((100% - (2.5px * 6)) / 7)
    margin-right: 2.5px
    height: 40px
    line-height: 40px
    color: $blue01
    text-align: center
    cursor: pointer
    &:nth-child(7n)
        margin-right: 0

.calendar-nav__day--gray
    color: $blue06

.calendar-nav__day--today
    font-weight: 700
    color: #fff
    background-color: $blue01
    border-radius: 50%

.calendar-nav__day--weekend
    color: $terrible

.calendar-nav__day--selected
    background-color: #ECF6FF
    border-radius: 50%
</style>
