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
          :series="series"
          :events="getDayEvents(n)"
          :selectedMonth="selectedMonth"
        />
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import 'moment/locale/ru'
import CalendarDay from '@/components/Calendar/CalendarDay'
import axios from 'axios'

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
  },
  data: function () {
    return {
      dataInitDay: this.initDay,
      weekDays: moment.weekdaysShort(true),
      series: [
        '29 03 2021',
        '30 03 2021',
        '31 03 2021',
        '01 04 2021',
        '02 04 2021',
        '03 04 2021',
        '04 04 2021',
        '05 04 2021',
        '06 04 2021',
        '07 04 2021',
        '08 04 2021',
        '09 04 2021',
        '10 04 2021',
      ],
      baseLineTitle: '',
    }
  },
  methods: {
    getDay: function (n) {
      return moment(this.startWeek.toDate()).add(n - 1, 'd')
    },
    getDayEvents(n) {
      let date = this.getDay(n)
      return this.events.filter(item => {
        return date.isSame(item.start_time, 'day')
      })
    },
    hoverChildren: function () {
      /*this.$children.forEach(child => {
              if(child.$options.name === "CalendarDay") {
                  child.backlightDay();
              }
          });*/
    },
    leaveChildren: function () {
      /*this.$children.forEach(child => {
              if(child.$options.name === "CalendarDay") {
                  child.notBacklightDay();
              }
          });*/
    },
  },
  computed: {
    baseLineLabel: function () {
      return (
        moment(this.initDay).startOf('week').format('D MMM') +
        ' - ' +
        moment(this.initDay).endOf('week').format('D MMM') +
        ', ' +
        moment(this.initDay).format('YYYY')
      )
    },
    thisDate: function () {
      return moment().format('D MMMM')
    },
    thisDayOfWeek: function () {
      return moment().format('dddd')
    },
    thisMonth: function () {
      return moment(this.initDay).format('MMMM')
    },
    selectedMonth() {
      return moment(this.initDay).format('MMMM')
    },
    thisYear: function () {
      return moment(this.initDay).format('YYYY')
    },
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
    baseLineStyle: function () {
      let periodOfStart = moment().diff(this.startWeek, 'days') + 1
      return {
        top: Math.ceil(periodOfStart / 7) * 170 + 'px',
      }
    },
    isShowBaseline: function () {
      return moment(this.initDay).format('DD-MM-YYYY') == moment().format('DD-MM-YYYY')
    },
  },
  created: function () {
    moment.locale('ru')
  }
}
</script>

<style lang="scss" scoped>
.head-calendar {
  margin-bottom: 20px;
}

.calendar-title {
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

/*
.month-title {
  font-size: rem(24px);
  font-family: $FiraSansMedium;
  margin-right: rem(10px);
  text-transform: capitalize;
}
.year-title {
  font-size: rem(24px);
}

.head-calendar {
  padding-bottom: rem(5px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.circle-item {
  display: flex;
  align-items: center;
  margin-right: rem(20px);
  &:after {
    content: '';
    @include background-contain('arrow-down.svg') opacity: 0.56;
    width: rem(14px);
    height: rem(14px);
    transform: rotate(-90deg);
    margin-left: rem(4px);
  }
  &:last-child {
    margin-right: 0;
    &:after {
      display: none;
    }
  }
}

.circle-block {
  display: flex;
  align-items: center;
  margin-right: rem(-12px);
}
.circle-title {
  margin-right: rem(4px);
  font-size: rem(14px);
  color: $gray;
}
.calendar-title {
  display: flex;
  align-items: center;
}
.head-calendar {
  border-bottom: 2px solid rgba(34, 34, 34, 0.16);
  margin-bottom: rem(22px);
}

.calendar {
  width: 100%;
}

.month {
  padding: rem(20px);
  text-align: center;
  font-size: 1.5rem;
}

.weeks {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
}

.week-day {
  width: rem(100px);
  flex-grow: 1;
  padding: rem(10px);
  text-align: left;
  font-size: rem(14px);
}

.days {
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}
.base-line {
  position: absolute;
  top: rem(340px);
  width: 100%;
  display: flex;
  justify-content: center;
  transform: translateY(-50%);
  &-label {
    padding: rem(6px) rem(8px) rem(5px);
    background: linear-gradient(0deg, rgba(236, 72, 101, 0.2), rgba(236, 72, 101, 0.2)), #ffffff;
    border: 1px solid #ec4865;
    box-sizing: border-box;
    border-radius: rem(4px);
    letter-spacing: rem(1px);
    text-transform: uppercase;
    color: #a12238;
    font-size: rem(10px);
    position: relative;
    z-index: 1;
    cursor: pointer;
    &:hover + .base-line-label-big {
      display: flex;
    }
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(255, 20, 20, 0.6);
    top: 50%;
  }
  &-label-big {
    position: absolute;
    top: rem(-6px);
    background: #ffffff;
    border: 1px solid #ec4865;
    box-sizing: border-box;
    border-radius: rem(4px);
    font-size: rem(14px);
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #a12238;
    padding: 0 rem(8px);
    height: rem(29px);
    line-height: 1;
    align-items: center;
    cursor: default;
    user-select: none;
    transform: translateY(-100%);
    display: none;
  }
} */
</style>
