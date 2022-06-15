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

      <select-group value="all" :items="allGropus"/>

      <expansion label="Все события" :filters="eventTypes"/>
      <expansion v-if="!isViewYear" label="Все залы" :filters="exercisePlaygrounds"/>
    </left-menu>

    <div class="container">
      <Header/>
      <schedule-header :initDay="initDay"
                       title="Календарь"
                       @next="next($event)"
                       @prev="prev($event)"/>
      <calendar :initDay="initDay" :eventsPeriod="eventPeriod "/>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
import LeftMenu from '@/components/LeftMenu.vue'
import ScheduleHeader from '@/components/ScheduleHeader'
import Calendar from '@/components/Calendar/Calendar'

import CalendarNav from '@/components/Calendar/CalendarNav.vue'
import SelectGroup from '@/components/SelectGroup.vue'
import Expansion from '@/components/Expansions/Expansion.vue'

import Header from '@/components/Header.vue'

export default {
  name: 'Schedule',
  data: () => ({
    initDay: moment().toDate(),
    utils: {},
    groups: [],
    eventPeriod: []
  }),
  components: {Calendar, ScheduleHeader, LeftMenu, Header, CalendarNav, Expansion, SelectGroup},
  computed: {
    todayLabel: function () {
      return moment(this.initDay).format('MMMM')
    },
    isViewYear() {
      return this.$route.name === 'CalendarYear'
    },
    eventTypes() {
      const eventTypes = []

      if (this.utils.eventTypes) {
        this.utils.eventTypes.forEach((item) => {
          if (item.eventTypes.length) {
            eventTypes.push({
              label: item.title,
              color: item.color,
              id: item.id
            })
          }
        })
      }

      return eventTypes
    },
    exercisePlaygrounds() {
      const exercisePlaygrounds = []

      if (this.utils.exercisePlaygrounds) {
        this.utils.exercisePlaygrounds.forEach((item) => {
          exercisePlaygrounds.push({label: item.name})
        })
      }

      return exercisePlaygrounds
    },
    allGropus() {
      const groups = [
        {
          img: require('@/assets/images/groups/img-group-all.png'),
          slug: 'all',
          name: 'Все группы',
          description: '',
        },
      ]

      if (this.groups.length) {
        this.groups.forEach((item) => {
          groups.push({
            img: require('@/assets/images/groups/img-group-all.png'),
            slug: item.slug,
            name: item.name,
            description: ''
          })
        })
      }

      return groups
    }
  },
  mounted() {
    this.getUtils()
    this.getGroups()
    this.getEvents()
  },
  methods: {
    async getUtils() {
      this.utils = await this.$events.getUtils()
    },
    async getGroups() {
      this.groups = await this.$groups.getGroups()
    },
    async getEvents() {
      const response = await this.$events.getCoaches({
        date_from: this.startDay(),
        date_to: this.endDay()
      })

      this.eventPeriod = []
      response.map(item => {
        let diffMin = moment(item.date + ' ' + item.timeTo).diff(moment(item.date + ' ' + item.timeFrom), 'minutes')
        item.diffMin = diffMin
        item.start_time = item.date + ' ' + item.timeFrom
        item.duration = parseFloat((diffMin / 60).toFixed(1))

        this.eventPeriod.push(item)
      })
    },
    next: function() {
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
        this.$router.push({name: 'CalendarDay'})
      }
      this.initDay = moment(day).toDate()
    },
    startDay: function () {
      return moment(this.initDay).startOf('month').format('YYYY-MM-DD')
    },
    endDay: function () {
      return moment(this.initDay).endOf('month').format('YYYY-MM-DD')
    },
  }
}
</script>
