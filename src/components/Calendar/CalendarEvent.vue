<template>
  <router-link :to="{ name: nameRoute(event), params: { id: event.id } }" class="event" :style="eventStyle">
    <div class="event__inner">
      <div class="event__header">
        <calendar-event-icon
          class="mr-1"
          :idEventType="event.eventType"
          :shortName="event.group ? event.group.shortName : ''"
        />
        <span class="event__time">{{ startTime }}-{{ endTime }}</span>
      </div>
      <div class="event__body" v-if="event.duration > 60">
        <p class="event__title">{{ eventTitle }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'

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
  components: {
    CalendarEventIcon,
  },
  data() {
    return {
      startTime: '',
      endTime: '',
    }
  },
  computed: {
    ...mapGetters('events', ['getEventTypes', 'getTrainingType', 'getMatchTypes', 'getLessonTypes']),
    eventStyle: function () {
      return {
        height: this.base * (this.event.duration / 60) + 'px',
        top: this.convertTimeToOffset(this.$moment(this.event.occurrences[0])) + 'px',
      }
    },
    eventTypes() {
      return this.getEventTypes
    },
    trainingTypes() {
      return this.getTrainingType
    },
    matchTypes() {
      return this.getMatchTypes
    },

    lessonTypes() {
      return this.getLessonTypes
    },
    eventTitle() {
      if (this.event.eventType === 'match') return this.matchTypes.find(type => type.id === this.event.title).name
      else if (this.event.eventType === 'training') {
        return this.lessonTypes.find(type => type.id === this.event.title).name
      } else if (this.event.eventType === 'standard') return 'Норматив'
      else return ''
    },
  },
  watch: {
    event: {
      handler() {
        this.startTimeM()
        this.endTimeM()
      },
      deep: true,
    },
  },
  mounted() {
    this.startTimeM()
    this.endTimeM()
  },
  methods: {
    startTimeM() {
      this.startTime = this.$moment(this.event.occurrences[0]).format('HH:mm')
    },
    endTimeM() {
      this.endTime = this.$moment(this.event.occurrences[0]).add(this.event.duration, 'minutes').format('HH:mm')
    },
    convertTimeToOffset(time) {
      let momentJs = this.$moment(time)
      let hour = momentJs.hour()
      let minute = momentJs.minute()
      return (hour - 8 + minute / 60) * this.base
    },
    nameRoute(event) {
      if (event.eventType === 'match') return 'MatchEvent'
      else if (event.eventType === 'training') return 'TrainingView'
      else if (event.eventType === 'standard') return 'StandardView'
      else return ''
    },
  },
}
</script>

<style lang="scss" scoped>
.event {
  display: block;
  min-height: 64px;
  padding: 8px;
  z-index: 0;

  .event__inner {
    height: 100%;
    padding: 6px 8px;
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
    margin-top: 5px;
  }
}
</style>
