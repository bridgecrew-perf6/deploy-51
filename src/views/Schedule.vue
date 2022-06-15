<template>
  <div class="d-flex">
    <left-menu>
      <calendar-nav
        v-if="!isViewYear"
        @next="next($event)"
        @prev="prev($event)"
        @selectDay="selectDay($event)"
        :labelNav="todayLabel"
        :initDay="initDay"
      />

      <select-group v-model="group" value="all" :items="groups" />

      <expansion label="Все события" :filters="eventTypes" />
      <!-- <expansion v-if="!isViewYear" label="Все залы" :filters="exercisePlaygrounds" /> -->
    </left-menu>

    <div class="container">
      <Header />
      <calendar-header :initDay="initDay" title="Календарь" @next="next($event)" @prev="prev($event)" />
      <calendar :initDay="initDay" :eventsPeriod="eventPeriod" :groups="groups" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import moment from 'moment-timezone'
import LeftMenu from '@/components/LeftMenu.vue'
import CalendarHeader from '@/components/Calendar/CalendarHeader'
import Calendar from '@/components/Calendar/Calendar'

import CalendarNav from '@/components/Calendar/CalendarNav.vue'
import SelectGroup from '@/components/SelectGroup.vue'
import Expansion from '@/components/Expansions/Expansion.vue'

import Header from '@/components/Header.vue'

export default {
  name: 'Schedule',
  data: () => ({
    initDay: moment().toDate(),
    groups: [],
    group: 'all',
    eventType: ['match'],
    eventPeriod: [],
  }),
  components: { Calendar, CalendarHeader, LeftMenu, Header, CalendarNav, Expansion, SelectGroup },
  computed: {
    ...mapGetters('events', { eventTypes: 'getEventTypes' }),
    todayLabel: function () {
      return moment(this.initDay).format('MMMM')
    },
    isViewYear() {
      return this.$route.name === 'CalendarYear'
    },
    exercisePlaygrounds() {
      const exercisePlaygrounds = []

      return exercisePlaygrounds
    },
  },
  mounted() {
    this.getGroups()
  },
  watch: {
    group: function (val) {
      this.getEvents()
    },
  },
  methods: {
    getGroups() {
      this.$groups.getGroups().then(response => {
        let allGroup = {
          logo: require('@/assets/images/groups/img-group-all.png'),
          id: 'all',
          shortName: 'Все группы',
          description: '',
        }

        response.splice(0, 0, allGroup)
        this.groups = response
        this.getEvents()
      })
    },
    getEvents() {
      this.$events
        .getEvents({
          start_date: this.startDay(),
          end_date: this.endDay(),
          group__in: this.group !== 'all' ? this.group : null,
        })
        .then(response => {
          response.forEach(event => {
            event.group = this.groups.find(group => group.id == event.group)
          })
          this.eventPeriod = response
        })
    },
    next: function () {
      if (this.$route.name == 'CalendarYear') {
        this.initDay = moment(this.initDay).add(1, 'year').toDate()
      }

      if (this.$route.name == 'CalendarMonth') {
        this.initDay = moment(this.initDay).add(1, 'months').toDate()
        this.getEvents()
      }

      if (this.$route.name == 'CalendarWeek') {
        this.initDay = moment(this.initDay).add(1, 'weeks').toDate()
        this.getEvents()
      }

      if (this.$route.name == 'CalendarDay') {
        this.initDay = moment(this.initDay).add(1, 'months').toDate()
        this.getEvents()
      }
    },
    prev: function () {
      if (this.$route.name == 'CalendarYear') {
        this.initDay = moment(this.initDay).subtract(1, 'year').toDate()
      }

      if (this.$route.name == 'CalendarMonth') {
        this.initDay = moment(this.initDay).subtract(1, 'months').toDate()
        this.getEvents()
      }
      if (this.$route.name == 'CalendarWeek') {
        this.initDay = moment(this.initDay).subtract(1, 'weeks').toDate()
        this.getEvents()
      }

      if (this.$route.name == 'CalendarDay') {
        this.initDay = moment(this.initDay).subtract(1, 'months').toDate()
        this.getEvents()
      }
    },
    selectDay(day) {
      if (this.$route.name !== 'CalendarDay') {
        this.$router.push({ name: 'CalendarDay' })
      }
      this.initDay = moment(day).toDate()
    },
    startDay: function () {
      return moment(this.initDay).startOf('month').format('YYYY-MM-DD')
    },
    endDay: function () {
      return moment(this.initDay).endOf('month').format('YYYY-MM-DD')
    },
  },
}
</script>
