<template>
  <div>
    <router-view :initDay="initDay" :events="eventsPeriod" />

    <Progress v-if="$route.name == 'CalendarMonth'" />
  </div>
</template>

<script>
import Progress from '@/components/Progress/Progress.vue'

export default {
  name: 'Calendar',
  components: { Progress },
  props: {
    initDay: {
      type: Date,
    },
    eventsPeriod: {
      type: Array,
    },
  },
}
</script>
