<template>
  <div :class="classObjectDay" @click.self="openModalEvents(events, 'day')">
    <div class="day-header" @click.self="openModalEvents(events, 'day')">
      <span :class="classObject">
        {{ day.format('D') }}
      </span>
    </div>

    <div class="day-events">
      <template v-if="events.length > 6">
        <calendar-event-icon
          class="day-event"
          @click="openModalEvents([event], 'event')"
          v-for="(event, index) in events.slice(0, 5)"
          :key="index"
          :idEventType="event.eventType"
          :shortName="event.group ? event.group.shortName : ''"
        />
        <calendar-event-icon class="day-event event-type--over" />
      </template>
      <template v-else>
        <calendar-event-icon
          class="day-event"
          @click="openModalEvents([event], 'event')"
          v-for="(event, index) in events"
          :key="index"
          :idEventType="event.eventType"
          :shortName="event.group ? event.group.shortName : ''"
        />
      </template>

      <modal-calendar-events
        :visible="showModal"
        :date="day.format('D MMMM')"
        :weekday="day.format('dddd')"
        @close="showModal = false"
        v-if="openEvents"
        :events="openEvents"
      />
    </div>
  </div>
</template>

<script>
import CalendarEventIcon from './CalendarEventIcon.vue'
import ModalCalendarEvents from '@/components/modals/ModalCalendarEvents.vue'

export default {
  props: {
    day: {
      type: [Object, Array, Number],
    },
    events: {
      type: Array,
    },
    selectedMonth: {
      type: String,
    },
  },
  name: 'CalendarDay',
  components: {
    CalendarEventIcon,
    ModalCalendarEvents,
  },
  data: () => ({
    showModal: false,
    openEvents: null,
  }),
  computed: {
    sortEvents: function () {
      return this.events.slice().sort((a, b) => {
        if (this.$moment(a.start_time).isBefore(b.start_time)) {
          return -1
        } else {
          return 1
        }
      })
    },
    isToday: function () {
      return this.$moment().format('DD-MM-YYYY') == this.day.format('DD-MM-YYYY') && this.day.format('D') !== 1
    },
    isWeekend: function () {
      return this.day.day() == 0 || this.day.day() == 6
    },
    isMatch: function () {
      return this.events.findIndex(x => x.eventType == 'match') >= 0
    },
    classObject: function () {
      return {
        'day-header__number': true,
        'day-header__number--weekend': this.isWeekend,
      }
    },
    isCurrentMonth: function () {
      return this.$moment(this.day).format('MMMM') === this.selectedMonth
    },
    classObjectDay: function () {
      return {
        day: true,
        hide: !this.isCurrentMonth,
        'day-today': this.isToday,
        'day-match': this.isMatch,
      }
    },
  },
  methods: {
    openModalEvents(events, type) {
      if (events.length) {
        this.openEvents = events
        this.showModal = true
      }
    },
  },
}
</script>

<style scoped lang="scss">
.events {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: -17px;
  padding-right: 5px;
  &-wrap {
    height: 100%;
    overflow: hidden;
  }
}
events::-webkit-scrollbar {
  width: 5px;
}
.day {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: calc((100% - (6 * 10px)) / 7);
  height: 120px;

  margin-bottom: 12px;
  padding: 11px;

  background-color: #ffffff;
  box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15);
  border-radius: 12px;
  transition: all 0.4s;

  border: 2px solid transparent;
  cursor: pointer;
  &.hide {
    visibility: hidden;
  }

  &.day-today {
    border: 2px solid #95b0da;
  }
  &.day-match {
    border: 2px solid #f8a3b3;
  }
}

.day-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.day-header__info {
  font-size: 0px;
}

.day-header__number {
  font-weight: 500;
  font-size: 19px;
  line-height: 20px;
  color: #b9cbe5;
  &--weekend {
    color: $terrible;
  }
}

.day-events {
  margin: -2.5px;
  display: flex;
  flex-wrap: wrap;

  flex-direction: row-reverse;
  justify-content: flex-end;

  width: 100%;
}

.day-event {
  margin: 2.5px;
}
</style>
