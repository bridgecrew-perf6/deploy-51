<template>
  <div class="event" :style="eventStyle">
    <div class="event__inner">
      <div class="event__header">
        <calendar-event-icon :key="index" :event="event" />
        <span class="event__time">{{ replaceSeconds(event.timeFrom) }}-{{ replaceSeconds(event.timeTo) }}</span>
      </div>
      <div class="event__body" v-if="event.duration > 1">
        <p class="event__title">{{ event.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import CalendarEventIcon from './CalendarEventIcon.vue'

export default {
  name: 'CalendarEvent',
  props: {
    event: {
      type: Object,
    },
    base: {
      type: Number,
      default: 1,
    },
  },
  data: function () {
    return {
      isDraggable: false,
    }
  },
  components: {
    CalendarEventIcon,
  },
  computed: {
    eventStyle: function () {
      return {
        height: this.base * this.event.duration + 'px',
        top: this.convertTimeToOffset(this.event.start_time) + 'px',
        opacity: this.isDraggable ? 0.5 : 1,
      }
    },
    time: function () {
      return moment(this.event.start_time).format('HH:mm')
    },
  },
  methods: {
    convertTimeToOffset(time) {
      let momentJs = moment(time)
      let hour = momentJs.hour()
      let minute = momentJs.minute()
      return (hour - 6 + minute / 60) * this.base
    },
    replaceSeconds(time) {
      return time.replace(/(:\d{2})$/, '')
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.event {
  position: absolute;

  width: 100%;
  padding: 8px;
  z-index: 2;

  .event__inner {
    height: 100%;
    padding: 8px;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15);
    border-radius: 12px;
    overflow: hidden;
  }
  .event__header {
    display: flex;
  }
  .event__time {
    padding-left: 3px;
    padding-top: 7px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;

    color: $blue02;
  }
  .event__title {
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;

    font-size: 12px;
    line-height: 18px;

    color: $blue02;
  }
  .event__body {
    margin-top: 8px;
  }
}
</style>
