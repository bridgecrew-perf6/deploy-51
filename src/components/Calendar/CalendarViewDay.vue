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
      <div class="hours-wrap">
        <div class="base-linetime" :style="baseLineStyle">
          <div class="base-linetime-round"></div>
        </div>
        <div class="hours" ref="hours">
          <div class="hours-time">
            <div class="hours-time-item" v-for="m in 16" :key="m">{{ 7 + m }}.00</div>
          </div>
          <div class="hours-col" :style="timeStyle">
            <div class="hours-item" v-for="(m, indexHours) in 16" :key="indexHours"></div>

            <grid-layout
              class="calendar__grid-layout"
              :layout.sync="groupSchedule"
              :col-num="1"
              :row-height="16"
              :is-draggable="true"
              :is-resizable="false"
              :responsive="false"
              :vertical-compact="false"
              :prevent-collision="true"
              :use-css-transforms="true"
              :max-rows="64"
              :margin="[0, 0]"
            >
              <grid-item
                class="calendar__grid-item"
                v-for="(item, index) in groupSchedule"
                :key="index"
                :static="item.static"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                @move="(i, newX, newY) => updateTime(newY, item)"
                @moved="updateEvent(item)"
                drag-allow-from=".calendar__grid-item-handle"
              >
                <svg
                  class="calendar__grid-item-handle"
                  width="17"
                  height="10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.642 1.865C3.642.835 2.827 0 1.822 0 .814 0 0 .835 0 1.865S.815 3.73 1.821 3.73s1.821-.835 1.821-1.865ZM9.818 1.865C9.818.835 9.003 0 7.997 0S6.176.835 6.176 1.865 6.99 3.73 7.997 3.73s1.821-.835 1.821-1.865ZM16.002 1.865C16.002.835 15.186 0 14.18 0c-1.006 0-1.822.835-1.822 1.865s.816 1.865 1.822 1.865c1.005 0 1.82-.835 1.82-1.865ZM3.642 8.135c0-1.03-.815-1.866-1.82-1.866C.814 6.27 0 7.104 0 8.135 0 9.165.815 10 1.821 10s1.821-.835 1.821-1.865ZM9.818 8.135c0-1.03-.815-1.866-1.821-1.866s-1.821.835-1.821 1.866c0 1.03.815 1.865 1.821 1.865s1.821-.835 1.821-1.865ZM16.002 8.135c0-1.03-.816-1.866-1.821-1.866-1.006 0-1.822.835-1.822 1.866 0 1.03.816 1.865 1.822 1.865C15.186 10 16 9.165 16 8.135Z"
                    fill="#B9CBE5"
                  />
                </svg>
                <CalendarEvent :event="item" :base="heightHourCeil" class="calendar__grid-event"></CalendarEvent>
              </grid-item>
            </grid-layout>
          </div>
        </div>
      </div>
      <div class="notes-wrap notes">
        <div class="notes__header">
          <p class="notes__title">Заметки</p>

          <search-input v-model="queryNote" class="notes__search" placeholder="Искать взаметках" />
        </div>

        <vue-custom-scrollbar class="notes__list custom-scroll" :settings="scrollSettings">
          <div class="notes__item">
            <new-note v-if="createNote" :date="initDay" @close="closeNote" />
          </div>

          <simple-note
            v-for="(note, index) in notesSearch"
            :key="'simple' + index"
            v-show="note.body.type === 'simple'"

            :note="note"
            class="notes__item"
          /> 


          <todo-note
            v-for="(note, index) in notesSearch"
            :key="'toDo' + index"
            v-show="note.body.type === 'toDo'"
            :note="note"
            class="notes__item"
          />

          <media-note
            v-for="(note, index) in notesSearch"
            :key="'media' + index"
            v-show="note.body.type === 'media'"
            :note="note"
            class="notes__item"
          />
        </vue-custom-scrollbar>

        <div class="notes__footer">
          <span class="notes__footer-add" @click="createNote = true">+ Добавить заметку</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'
import VueGridLayout from 'vue-grid-layout'


import SearchInput from '@/components/library/SearchInput.vue'
import CalendarEvent from '@/components/Calendar/CalendarEvent'

import NewNote from '@/components/Notes/NewNote.vue'
import SimpleNote from '@/components/Notes/SimpleNote.vue'
import TodoNote from '@/components/Notes/TodoNote.vue'
import MediaNote from '@/components/Notes/MediaNote.vue'

export default {
  name: 'CalendarViewDay',
  props: {
    initDay: {
      type: Date,
    },
    events: {
      type: [Array, Object],
    },
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    SearchInput,
    NewNote,
    CalendarEvent,
    SimpleNote,
    TodoNote,
    MediaNote,
    vueCustomScrollbar,
  },
  data: function () {
    return {
      heightHourCeil: 64,
      currentMoment: this.$moment().toDate(),
      schedule: this.events,
      offsetMinuteMin: 15,

      createNote: false,
      notes: [],
      queryNote: '',
      scrollSettings: {
        useBothWheelAxes: true,
        suppressScrollX: false,
        wheelPropagation: false,
      },

      layout: [],

      groupSchedule: [],
    }
  },
  computed: {
    notesSearch() {
      return this.notes.filter(item => {
        if (item.body.text) {
          return (
            item.body.text.toLowerCase().indexOf(this.queryNote.toLowerCase()) >= 0 ||
            item.title.toLowerCase().indexOf(this.queryNote.toLowerCase()) >= 0
          )
        } else {
          return item.title.toLowerCase().indexOf(this.queryNote.toLowerCase()) >= 0
        }
      })
    },
    thisDate: function () {
      return this.$moment(this.initDay).format('D MMMM')
    },
    thisDayOfWeek: function () {
      return this.$moment(this.initDay).format('dddd')
    },
    currentTime: function () {
      return this.$moment(this.currentMoment).format('H:mm')
    },
    isCurrentDay() {
      let selectedDate = this.$moment(this.$moment(this.initDay).format('DD.MM.YYYY'), 'DD.MM.YYYY'),
        today = this.$moment(this.$moment().format('DD.MM.YYYY'), 'DD.MM.YYYY')

      return selectedDate.diff(today, 'days') === 0
    },
    baseLineStyle: function () {
      let currentHour = this.$moment(this.currentMoment).hour()
      let currentMinute = this.$moment(this.currentMoment).minute()
      let heughtHour = (currentMinute / 60) * 64
      return {
        top: `${(currentHour - 8) * this.heightHourCeil + heughtHour}px`,
        display: !this.isCurrentDay ? 'none' : 'block',
      }
    },
    timeStyle() {
      if (this.isCurrentDay) {
        let gradient = ''
        let grayColor = 'rgba(128, 133, 187, 0.1)'
        let greenColor = 'rgba(100, 192, 72, 0.1)'
        let transparent = 'rgb(255, 255, 255, 0)'

        let heightCalendar = this.heightHourCeil * 18

        //Определяем текущее время
        let currentHour = this.$moment(this.currentMoment).hour()
        let currentMinute = this.$moment(this.currentMoment).minute()
        let heightHour = (currentMinute / 60) * this.heightHourCeil
        let currentTimePosition = (currentHour - 8) * this.heightHourCeil + heightHour

        gradient = `linear-gradient(180deg, ${grayColor} 0px, ${grayColor} ${currentTimePosition}px`

        if (this.groupSchedule.length) {
          this.groupSchedule.forEach((event, index, array) => {
            let momentJs = this.$moment(event.occurrences[0])
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
      } else return ''
    },
  },
  watch: {
    initDay() {
      if (this.events.length) this.initGroupSchedule(this.events)

      this.getNotes()
    },
    events() {
      if (this.events.length) this.initGroupSchedule(this.events)
    },
  },
  mounted() {
    this.getNotes()

    if (this.events.length) this.initGroupSchedule(this.events)
  },
  methods: {
    convertTimeToOffset(time) {
      let momentJs = this.$moment(time)
      let hour = momentJs.hour()
      let minute = momentJs.minute()
      return (hour - 8 + minute / 60) * this.heightHourCeil
    },
    yPositionToTime(px) {
      let mins = px * this.offsetMinuteMin

      if (mins <= 24 * 60 || mins > 0) {
        var h = (mins / 60) | 0,
          m = mins % 60 | 0
        return this.$moment().hours(h).minutes(m).seconds(0).add(8, 'hours').format('HH:mm:ss')
      }
    },
    initGroupSchedule(events) {
      let groupSchedule = []
      let selectedDate = this.$moment(this.$moment(this.initDay))

      events.forEach((item, index) => {
        let today = this.$moment(this.$moment(item.occurrences[0]))

        if (selectedDate.clone().startOf('day').diff(today.clone().startOf('day')) === 0) {
          groupSchedule.push({
            ...item,
            x: 0,
            y: this.convertTimeToOffset(this.$moment(item.occurrences[0])) / 16,
            w: 100,
            h: (this.heightHourCeil * (item.duration / 60)) / 16,
            i: index,
            static: false,
          })
        }
      })

      let that = this
      if (groupSchedule.length > 1) {
        groupSchedule.sort(function (fisrt, second) {
          let a = that.$moment(fisrt.occurrences[0]).format('HH:mm:ss'),
            b = that.$moment(second.occurrences[0]).format('HH:mm:ss')

          if (that.$moment(b).isAfter(a, 'hours')) return -1
          else return 1
        })
      }
      this.groupSchedule = groupSchedule
    },
    getNotes() {
      this.notes = []
      const date = this.$moment(this.initDay.toLocaleDateString(), 'DD.MM.YYYY').format('YYYY-MM-DD'),
        user = JSON.parse(atob(localStorage.getItem('access').split('.')[1])).user_id

      this.$notes.getNotes(user, date).then(response => {
        this.parseNotes(response)
      })
    },
    parseNotes(response) {
      response.forEach(item => {
        const jsonText = JSON.parse(item.text)
        this.notes.push({
          id: item.id,
          title: item.title,
          body: jsonText,
        })
      })
    },
    closeNote() {
      this.createNote = false
      this.getNotes()
    },
    updateTime(newY, item) {
      const time = this.yPositionToTime(newY)
      const inx = this.groupSchedule.findIndex(event => event.id === item.id)

      let dateTime = this.$moment(item.occurrences[0])
      let date = dateTime.format('YYYY-MM-DD')
      this.groupSchedule[inx].occurrences[0] = this.$moment(`${date} ${time}`).utc().format('YYYY-MM-DD[T]HH:mm:ss[Z]')
    },
    updateEvent(item) {
      let date = item.occurrences[0]
      const dateStartRFC = this.$moment(date).utc().format('YYYYMMDDTHHmmss')

      const body = {
        recurrences: `DTSTART:${dateStartRFC}`,
      }

      this.$events
        .putEvents(item.id, body)
        .then(() => {
          this.notify({
            title: 'Событие успешно обновлено',
            text: 'Время события обновлено',
            bg: '#64C048',
            autoClose: 4000,
          })
        })
        .catch(error => console.log(error))
    },
  },
}
</script>

<style lang="scss" scoped>
.calendar {
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  background-color: #fff;
  margin-left: rem(35px);
  box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15);
  margin-bottom: 35px;
}

.calendar__grid-layout {
  width: 100%;
  position: absolute;
  height: 100% !important;
  top: 0;
  left: 0;

  &::v-deep {
    .vue-grid-placeholder {
      opacity: 0 !important;
      display: none !important;
    }
  }
}

.calendar__grid-item-handle {
  position: absolute;
  right: 26px;
  bottom: 23px;
}

.notes-wrap {
  flex: 0 0 50%;
}

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

.base-linetime {
  position: absolute;
  top: rem(340px);
  width: calc(100% - 2.188rem);
  left: 0;
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

  &-wrap {
    position: relative;
    flex: 0 0 50%;
  }

  &-time {
    position: absolute;
    width: rem(35px);
    left: rem(-35px);

    &-item {
      display: flex;
      align-items: flex-start;
      height: 64px;

      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: $blue02;
    }
  }

  &-col {
    width: calc((100% - 2.188rem));
    position: relative;
    border-radius: 16px 16px 0px 0px;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border-top-left-radius: 16px;
      background-color: rgba(128, 133, 187, 0.1);
    }
  }

  &-item {
    height: 64px;
    position: relative;
    cursor: pointer;

    &:after {
      content: '';
      border-bottom: 1px solid #ecf6ff;
      position: absolute;
      width: calc(100%);
      right: 0;
    }

    &:first-child {
      &::after {
        display: none;
      }
    }
  }
}

.notes {
  position: relative;
  padding: 21px;
}

.notes__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.notes__title {
  font-size: 20px;
  line-height: 27px;

  color: $blue02;
}

.notes__search {
  max-width: 332px;
  width: 100%;
}

.notes__footer {
  position: absolute;
  bottom: 21px;
  left: 21px;
  right: 21px;
  display: flex;
  justify-content: flex-end;
}

.notes__footer-add {
  font-size: 16px;
  line-height: 22px;

  color: $blue02;
  cursor: pointer;
}

.notes__type-list {
}

.notes__type-btn {
  margin-right: 25px;

  &:last-child {
    margin-right: 0px;
  }

  color: $blue05;
}

.notes__type-btn--active {
  color: $blue02;
}

.notes-wrap {
  margin-bottom: 18px;
}

.notes__list {
  max-height: 860px;
  padding-bottom: 40px;
}

.notes__item {
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0px;
  }
}

.notes__inner {
  padding: 15px;
}

.notes__item-title {
  font-size: 20px;
  line-height: 27px;
  color: $blue02;
}

.notes__item-text {
  font-size: 16px;
  line-height: 22px;
  color: $blue02;
}
</style>
