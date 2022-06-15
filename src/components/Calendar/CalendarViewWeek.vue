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
        <div class="hours-time"></div>
        <div
          class="weeks-day"
          :class="{ 'weeks-day--weekend': getDayOfWeek(index) === 'сб' || getDayOfWeek(index) === 'вс' }"
          v-for="(weekDay, index) in weekDays"
          :key="weekDay"
        >
          <span class="weeks-day__text">
            <b class="weeks-day__number">{{ getDayNumber(index) }} </b>
            {{ getDayOfWeek(index) }}
          </span>
          <span class="weeks-day__today" v-if="isCurrentDay(index)">сегодня</span>
        </div>
      </div>
      <div class="hours-wrap">
        <div class="base-linetime" :style="baseLineStyle">
          <div class="base-linetime-round"></div>
        </div>
        <div class="hours" ref="hours">
          <div class="hours-time">
            <div class="hours-time-item" v-for="(m, index) in 18" :key="index">{{ m + 5 }}:00</div>
          </div>
          <div class="hours-col" v-for="(n, index) in 7" :style="isCurrentDay(index) ? timeStyle : ''" :key="index">
            <div class="hours-item" v-for="(m, index) in 12" :key="index"></div>
            <template v-for="(event, index) in groupSchedule[n]">
              <CalendarEvent :event="event" :base="heightHourCeil" :key="index"></CalendarEvent>
            </template>
          </div>
          <ModalTrainerNewEvent
            :inDate="createDate"
            :inTimeStart="createTimeStart"
            :inTimeEnd="createTimeEnd"
            :visible="dialogEvent"
            @close="dialogEvent = false"
            v-if="dialogEvent"
          ></ModalTrainerNewEvent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment, { duration } from 'moment'
import CalendarEvent from '@/components/Calendar/CalendarEvent'
import CalendarDragEvent from '@/components/Calendar/CalendarDragEvent'
import ModalTrainerNewEvent from '@/components/modals/ModalTrainerNewEvent'
import { TRAINER_ROLE } from '@/config/api'

export default {
  name: 'CalendarViewWeek',
  props: {
    initDay: {
      type: Date,
    },
    events: {
      type: [Array, Object],
    },
  },
  components: { ModalTrainerNewEvent, CalendarEvent, CalendarDragEvent },
  data: function () {
    return {
      weekDays: moment.weekdaysShort(true),
      heightHourCeil: 64,
      currentMoment: moment().toDate(),
      schedule: this.events,
      dragEvent: null,
      dragEventWidth: null,
      dragDiff: 0,
      dragEl: null,
      offsetMinuteMin: 15, // Минимальное смещение в минутах при drag-and-drop
      dialogEvent: false,
      dialogEventSkills: false,

      role: localStorage.getItem('role'),
      trainerRole: TRAINER_ROLE,

      // Время начала - окончания события для модалки
      createTimeStart: '',
      createTimeEnd: '',
      createDate: null,
    }
  },
  watch: {
    events: function (val) {
      this.schedule = val
    },
  },
  computed: {
    startWeek: function () {
      return moment(this.initDay).startOf('week')
    },
    endWeek: function () {
      return moment(this.initDay).endOf('week')
    },
    weekNumber: function () {
      return moment(this.initDay).week()
    },
    yearNumber: function () {
      return moment(this.initDay).year()
    },
    month: function () {
      return moment(this.initDay).format('MMMM')
    },
    thisDate: function () {
      return moment().format('D MMMM')
    },
    thisDayOfWeek: function () {
      return moment().format('dddd')
    },
    currentTime: function () {
      return moment(this.currentMoment).format('H:mm')
    },
    isDayInWeek() {
      return moment().isBetween(this.startWeek, this.endWeek)
    },
    baseLineStyle: function () {
      let currentHour = moment(this.currentMoment).hour()
      let currentMinute = moment(this.currentMoment).minute()
      let heughtHour = (currentMinute / 60) * 64
      return {
        top: `${(currentHour - 7) * this.heightHourCeil + heughtHour}px`,
        display: this.isDayInWeek ? 'block' : 'none',
      }
    },
    convertMinOffset: function () {
      // Преобразуем смещение в минутах в смещение в пикселях
      return (this.heightHourCeil * this.offsetMinuteMin) / 60
    },
    dragDay: function () {
      if (this.dragEvent) {
        return moment(this.dragEvent.start_time).isoWeekday()
      }
      return null
    },
    groupSchedule() {
      let groupSchedule = []
      for (let i = 1; i <= 7; i++) {
        groupSchedule[i] = []
      }

      this.schedule.map(item => {
        if (moment(item.start_time).isBetween(this.startWeek.toDate(), this.endWeek.toDate(), undefined, '[]')) {
          let day = moment(item.start_time).isoWeekday()
          groupSchedule[day].push(item)
        }
      })

      groupSchedule.forEach(function (day) {
        if (day.length > 1) {
          day.sort(function (fisrt, second) {
            let a = moment(fisrt.timeFrom, 'HH:mm:ss'),
              b = moment(second.timeFrom, 'HH:mm:ss')

            if (b.isAfter(a, 'hours')) return -1
            else return 1
          })
        }
      })

      return groupSchedule
    },
    timeStyle() {
      let gradient = ''
      let grayColor = 'rgba(128, 133, 187, 0.1)'
      let greenColor = 'rgba(100, 192, 72, 0.1)'
      let transparent = 'rgb(255, 255, 255, 0)'

      let heightCalendar = this.heightHourCeil * 18

      //Определяем текущее время
      let currentHour = moment(this.currentMoment).hour()
      let currentMinute = moment(this.currentMoment).minute()
      let heightHour = (currentMinute / 60) * this.heightHourCeil
      let currentTimePosition = (currentHour - 7) * this.heightHourCeil + heightHour

      gradient = `linear-gradient(180deg, ${grayColor} 0px, ${grayColor} ${currentTimePosition}px`

      if (this.groupSchedule[moment().day()].length) {
        this.groupSchedule[moment().day()].forEach((event, index, array) => {
          let momentJs = moment(event.start_time)
          let hour = momentJs.hour()
          let minute = momentJs.minute()

          let startPosition = (hour - 6 + minute / 60) * this.heightHourCeil
          let endPosition = startPosition + this.heightHourCeil * event.duration

          if (endPosition < currentTimePosition) {
            if (index !== array.length - 1) {
              gradient += `, ${grayColor} ${currentTimePosition}px`
            } else {
              gradient += `, ${greenColor} ${currentTimePosition}px, ${greenColor} ${heightCalendar}px)`
            }
          } else {
            gradient += `, ${greenColor} ${currentTimePosition}px`

            gradient += `, ${greenColor} ${startPosition}px, ${transparent} ${startPosition}px, ${transparent} ${endPosition}px`

            if (index === array.length - 1) {
              gradient += `, ${greenColor} ${endPosition}px, ${greenColor} ${heightCalendar}px)`
            }
          }
        })
      } else {
        gradient += `, ${greenColor} ${currentTimePosition}px, ${greenColor} ${heightCalendar}px)`
      }

      return `background: ${gradient}`
    },
  },
  methods: {
    getDayNumber(n) {
      let start = this.startWeek.toDate()
      return moment(start).add(n, 'd').format('D')
    },
    getDayOfWeek(n) {
      let start = this.startWeek.toDate()
      return moment(start).add(n, 'd').format('dd')
    },

    getDate(n) {
      let start = this.startWeek.toDate()
      return moment(start)
        .add(n - 1, 'd')
        .format('DD-MM-YYYY')
    },

    isCurrentDay(n) {
      if (moment(this.initDay).format('M') == moment().format('M')) {
        return this.getDayNumber(n) == moment().format('D')
      }
      return false
    },

    setCurrentMoment() {
      setInterval(
        function () {
          this.currentMoment = moment().toDate()
        }.bind(this),
        60000
      )
    },

    groupEvent() {
      let groupSchedule = []
      for (let i = 1; i <= 7; i++) {
        groupSchedule[i] = []
      }

      this.schedule.map(item => {
        let day = moment(item.start_time).isoWeekday()
        if (day) {
          groupSchedule[day].push(item)
        }
      })
      return groupSchedule
    },

    handleDown(event) {
      setTimeout(
        function () {
          for (let child in this.$children) {
            if (this.$children[child].$el.contains(event.target)) {
              let eventTarget = this.$children[child]
              if (eventTarget.event) {
                eventTarget.isDraggable = true
                this.isDraggable = true
                this.dragEventWidth = eventTarget.$el.parentElement.getBoundingClientRect().width
                this.dragEl = eventTarget
                this.dragEvent = {
                  id: eventTarget.event.id,
                  start_time: eventTarget.event.start_time,
                  duration: eventTarget.event.duration,
                  title: eventTarget.event.name,
                  desc: eventTarget.event.type_of_preparation,
                  rating: eventTarget.event.rating,
                  attenders: eventTarget.event.attenders,
                }
              }
            }
          }
        }.bind(this),
        200
      )
    },

    handleUp() {
      if (this.dragEvent) {
        this.$set(this.dragEl.$options.propsData.event, 'start_time', this.dragEvent.start_time)
        // Редактируем занятие
        this.$store.dispatch('events/updateEvent', {
          id: this.dragEvent.id,
          data: {
            date: moment(this.dragEvent.start_time).format('YYYY-MM-DD'),
            //.format("YYYY-MM-DDTHH:mm:ss") + ".000Z",
            timeFrom: moment(this.dragEvent.start_time).format('HH:mm:ss'),
            timeTo: moment(this.dragEvent.start_time).add(this.dragEvent.duration, 'hours').format('HH:mm:ss'),
          },
        })

        this.groupEvent()
        this.dragEl.isDraggable = false
        this.dragEvent = null
        this.dragEl = null
      }

      /*if (this.dragEvent) {
        this.$set(this.dragEl.$options.propsData.event, 'start_time', this.dragEvent.start_time)
        this.$store.dispatch('events/updateEvent', {
          id: this.dragEvent.id,
          data: {
            dateFrom: moment.utc(this.dragEvent.start_time).format('YYYY-MM-DDTHH:mm:ss') + '.000Z',
            dateTo:
              moment
                .utc(this.dragEvent.start_time)
                .add(this.dragEvent.duration, 'hours')
                .format('YYYY-MM-DDTHH:mm:ss') + '.000Z',
          },
        })

        this.groupEvent()
        this.dragEl.isDraggable = false
        this.dragEvent = null
        this.dragEl = null
      }*/
    },

    handleMove(event) {
      if (!this.dragEvent) return

      let offsetY = event.clientY
      let offsetX = event.pageX
      let boundingEl = this.$refs.hours.getBoundingClientRect()
      let startCol = (this.dragDay - 1) * this.dragEventWidth + 35 + boundingEl.left

      if (this.dragDiff == 0) {
        this.dragDiff = offsetY
      }

      let moveUp = this.dragDiff - offsetY > 0
      let moveDown = this.dragDiff - offsetY < 0
      // Переносим в предыдущий день
      if (offsetX < startCol && this.dragDay >= 2) {
        this.dragEvent.start_time = this.crossEvent(
          moment(this.dragEvent.start_time).subtract(1, 'days').toDate(),
          moveUp,
          moveDown
        )
        return
      }

      // Переносим в следующий день
      if (offsetX > startCol + this.dragEventWidth && this.dragDay <= 6) {
        this.dragEvent.start_time = this.crossEvent(
          moment(this.dragEvent.start_time).add(1, 'days').toDate(),
          moveUp,
          moveDown
        )
        return
      }

      // Переносим часы в рамках одного дня
      if (Math.abs(this.dragDiff - offsetY) >= this.convertMinOffset) {
        let topOffset = offsetY - this.$refs.hours.getBoundingClientRect().top
        let topIndex = Math.trunc(topOffset / this.offsetMinuteMin) - 1
        let startDay = moment(this.dragEvent.start_time).hours(7).minutes(0)
        let newTime = startDay.add(this.offsetMinuteMin * topIndex, 'minutes').toDate()

        if (moment(newTime).hour() < 7 || moment(newTime).hour() > 18) return

        this.dragEvent.start_time = this.crossEvent(newTime, moveUp, moveDown)

        //newTime = this.crossEvent(newTime, moveUp, moveDown);
        // if(moment(newTime).hour() < 7 || moment(newTime).hour() > 18) return;
        this.dragEvent.start_time = this.crossEvent(newTime, moveUp, moveDown)
        this.dragDiff = 0
      }
    },

    isCompare(event1, event2) {
      return (
        moment(event1.start_time).isBetween(
          moment(event2.start_time).toDate(),
          moment(event2.end_time),
          undefined,
          '[)'
        ) ||
        moment(event1.end_time).isBetween(moment(event2.start_time).toDate(), moment(event2.end_time)) ||
        moment(event2.start_time).isBetween(
          moment(event1.start_time).toDate(),
          moment(event1.end_time),
          undefined,
          '[)'
        ) ||
        moment(event2.end_time).isBetween(moment(event1.start_time).toDate(), moment(event1.end_time))
      )
    },

    crossEvent(newTime, moveUp, moveDown) {
      let calcTime = newTime
      for (let key in this.schedule) {
        let event = this.schedule[key]

        if (!moment(this.dragEl.event.start_time).isSame(event.start_time)) {
          let ev1 = {
            start_time: moment(calcTime),
            end_time: moment(calcTime).add(this.dragEl.event.duration, 'hours'),
          }
          let ev2 = {
            start_time: moment(event.start_time),
            end_time: moment(event.start_time).add(event.duration, 'hours'),
          }

          // Считает пересечение интервалов
          if (this.isCompare(ev1, ev2)) {
            if (moveUp) {
              calcTime = moment(event.start_time).subtract(this.dragEl.event.duration, 'hours').toDate()
              if (moment(calcTime).hour() < 7) calcTime = moment(event.start_time).add(event.duration, 'hours').toDate()
            }
            if (moveDown) {
              calcTime = moment(event.start_time).add(event.duration, 'hours').toDate()
            }

            break
          }
        }
      }

      if (!moment(calcTime).isSame(newTime)) {
        calcTime = this.crossEvent(calcTime, moveUp, moveDown)
      }

      return calcTime
    },

    createEvent(date, time) {
      this.createTimeStart = time < 10 ? '0' + time + ':00' : time + ':00'
      this.createTimeEnd = time + 1 < 10 ? '0' + (time + 1) + ':00' : time + 1 + ':00'
      this.createDate = date
      this.dialogEvent = true
    },
  },
  mounted() {
    this.setCurrentMoment()
    document.documentElement.addEventListener('mousemove', this.handleMove, true)
    document.documentElement.addEventListener('mousedown', this.handleDown, true)
    document.documentElement.addEventListener('mouseup', this.handleUp, true)
    document.documentElement.addEventListener('touchmove', this.handleMove, true)
    document.documentElement.addEventListener('touchstart', this.handleDown, true)
    document.documentElement.addEventListener('touchend', this.handleUp, true)
  },
  beforeUnmount() {
    document.documentElement.removeEventListener('mousemove', this.handleMove, true)
    document.documentElement.removeEventListener('mousedown', this.handleDown, true)
    document.documentElement.removeEventListener('mouseup', this.handleUp, true)
    document.documentElement.removeEventListener('touchmove', this.handleMove, true)
    document.documentElement.removeEventListener('touchstart', this.handleDown, true)
    document.documentElement.removeEventListener('touchend', this.handleUp, true)
  },
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

.add-event {
  display: none;
  position: absolute;
  top: rem(4px);
  left: rem(4px);
}

.base-linetime {
  position: absolute;
  top: rem(340px);
  width: calc(100% - 2.188rem);
  left: 2.188rem;
  display: flex;
  justify-content: center;
  transform: translateY(-50%);
  height: 1px;
  transition: all 0.4s;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: $blue02;
    top: 50%;
  }

  &-round {
    position: absolute;
    top: rem(-3px);
    width: rem(8px);
    height: rem(8px);
    background: $blue02;
    border-radius: 100%;
    transform: translateX(-5px);
  }
}

.hours {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;

  &-wrap {
    position: relative;
  }

  &-time {
    width: rem(35px);

    &-item {
      display: flex;
      align-items: flex-start;
      height: 64px;

      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: $blue02;

      &:after {
        content: '';
        border-bottom: 1px solid #ecf6ff;
        position: absolute;
        width: calc(100% - 2.188rem);
        right: 0;
      }
    }
  }

  &-col {
    width: calc((100% - 2.188rem) / 7);
    position: relative;
  }

  &-item {
    height: 64px;
    position: relative;
    cursor: pointer;
  }
}

.hours--today {
  background: rgba(100, 192, 72, 0.1);
}

.weeks {
  display: flex;
  flex-wrap: wrap;
}

.weeks-day {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: calc((100% - 2.188rem) / 7);
  padding: 10px 12px 10px 20px;
  color: #fff;
  background-color: $blue02;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;

    width: 1px;
    height: 26px;

    transform: translateY(-50%);
    background-color: #8085bb;
  }
  &:nth-child(2) {
    border-top-left-radius: 16px;
  }
  &:last-child {
    border-top-right-radius: 16px;
  }
}

.weeks-day__text,
.weeks-day__number {
  font-weight: 600;
}

.weeks-day__text {
  font-size: 10px;
  line-height: 14px;
  text-transform: uppercase;
}

.weeks-day__number {
  font-size: 16px;
  line-height: 22px;
}

.weeks-day--weekend {
  color: rgba($terrible, 0.5);
}

.weeks-day__today {
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
}

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
    @include background-contain('arrow-down.svg');
    opacity: 0.56;
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
  align-items: flex-end;
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
</style>
