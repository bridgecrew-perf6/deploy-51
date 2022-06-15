<template>
  <div class="calendar-wrap">
    <div class="head-calendar">
      <div class="calendar-title">
        <svg
          class="calendar-title__icon"
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2.833" width="18" height="16.333" rx="3" stroke="#464EA3" stroke-width="2" />
          <path
            d="M7.833 1a1 1 0 1 0-2 0h2Zm-2 3.333a1 1 0 1 0 2 0h-2ZM16.167 1a1 1 0 1 0-2 0h2Zm-2 3.333a1 1 0 1 0 2 0h-2ZM1.833 6.667a1 1 0 0 0 0 2v-2Zm18.334 2a1 1 0 1 0 0-2v2ZM5.833 1v3.333h2V1h-2Zm8.334 0v3.333h2V1h-2ZM1.833 8.667h18.334v-2H1.833v2Z"
            fill="#464EA3"
          />
          <circle cx="6.417" cy="13.083" r="1.25" fill="#464EA3" />
          <circle cx="10.583" cy="13.083" r="1.25" fill="#464EA3" />
          <circle cx="14.75" cy="13.083" r="1.25" fill="#464EA3" />
        </svg>
        <span class="calendar-title__day-of-the-month h2">{{ thisDate }}</span>
        <span class="calendar-title__day-of-week h3">{{ thisDayOfWeek }}</span>
      </div>
    </div>
    <div class="calendar">
      <div class="weeks">
        <div
          class="week-day"
          :class="{ 'week-day--weekend': index === 5 || index === 6 }"
          v-for="(weekDay, index) in weekDays"
          :key="index"
        >
          {{ weekDay }}
        </div>
      </div>
      <div class="days">
        <calendar-day
          v-for="n in periodLength"
          :key="n"
          :day="getDay(n)"
          :events="getDayEvents(n)"
          :selectedMonth="selectedMonth"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDay from '@/components/Calendar/CalendarDay'

export default {
  name: 'CalendarViewMonth',
  components: { CalendarDay },
  props: {
    initDay: {
      type: Date,
    },
    events: {
      type: [Array, Object],
    },
    groups: {
      type: Array,
    },
  },
  data: function () {
    return {
      dataInitDay: this.initDay,
      weekDays: this.$moment.weekdaysShort(true),
    }
  },
  methods: {
    getDay: function (n) {
      return this.$moment(this.startWeek.toDate()).add(n - 1, 'd')
    },
    getDayEvents(n) {
      let date = this.getDay(n)

      return this.events.filter(item => {
        return date.isSame(item.occurrences[0], 'day')
      })
    },
  },
  computed: {
    thisDate: function () {
      return this.$moment().format('D MMMM')
    },
    thisDayOfWeek: function () {
      return this.$moment().format('dddd')
    },
    thisMonth: function () {
      return this.$moment(this.initDay).format('MMMM')
    },
    selectedMonth() {
      return this.$moment(this.initDay).format('MMMM')
    },
    thisYear: function () {
      return this.$moment(this.initDay).format('YYYY')
    },
    startDay: function () {
      return this.$moment(this.initDay).startOf('month')
    },
    endDay: function () {
      return this.$moment(this.initDay).endOf('month')
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
  },
}
</script>

<style lang="scss" scoped>
.head-calendar {
  margin-bottom: 20px;
}

.calendar-title__icon {
  margin-right: 10px;
  vertical-align: text-top;
}

.calendar-title__day-of-the-month {
  display: inline-block;
  margin-right: 8px;
  color: $blue03;
}

.calendar-title__day-of-week {
  font-weight: 500;
  color: $blue05;
}

.calendar {
  width: 100%;
}

.weeks {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  border-bottom: 1px solid #b9cbe5;
}

.week-day {
  padding-left: 15px;
  padding-bottom: 7px;
  flex-grow: 1;

  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;

  color: #95b0da;
  &--weekend {
    color: $terrible;
  }
}

.days {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
}
</style>
