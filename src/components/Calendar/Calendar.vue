<template>
  <div>
    <router-view :initDay="initDay" :events="eventsPeriod" />

    <Progress v-if="$route.name == 'CalendarMonth'" />
  </div>
</template>

<script>
import CalendarNav from '@/components/Calendar/CalendarNav'
import CalendarViewMonth from '@/components/Calendar/CalendarViewMonth'
import CalendarViewWeek from '@/components/Calendar/CalendarViewMonth'
import { mapActions, mapGetters } from 'vuex'
import ModalTrainerNewEvent from '@/components/modals/ModalTrainerNewEvent'
import { TRAINER_ROLE, SPORTSMAN_ROLE } from '@/config/api'

import Progress from '@/components/Progress/Progress.vue'

export default {
  name: 'Calendar',
  components: { CalendarViewMonth, CalendarNav, CalendarViewWeek, ModalTrainerNewEvent, Progress },
  props: {
    initDay: {
      type: Date,
    },
    eventsPeriod: {
      type: Array
    }
  },
  data: () => ({
    dialogEvent: false,
  }),
  computed: {
    ...mapGetters('events', ['events']),
  },
  methods: {
    ...mapActions('events', ['loadEvents', 'loadEventsSportsman']),
    ...mapActions('auth', ['loadProfile']),
  },
  created() {
    const role = localStorage.getItem('role')

    if (role == TRAINER_ROLE) {
      this.loadEvents()
      this.loadProfile()
    }

    if (role == SPORTSMAN_ROLE) {
      this.loadEventsSportsman()
    }
  },
}
</script>
