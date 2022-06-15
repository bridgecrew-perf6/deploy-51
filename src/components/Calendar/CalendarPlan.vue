<template lang="pug">
  component(
    v-if="component"
    :is="component"
    :plan="plan"
  )
</template>

<script>
import moment from 'moment'
import CalendarPlanEdit from '@/components/Calendar/CalendarPlanEdit'
import CalendarRating from '@/components/Calendar/CalendarRating'
import { mapActions, mapState } from 'vuex'
import axios from 'axios'
import { API_URL_GRAF } from '../../config/api'

export default {
  name: 'CalendarPlan',
  components: {
    CalendarPlanEdit,
    CalendarRating,
  },
  data: () => ({
    component: '',
    plan: {},
  }),
  computed: {
    ...mapState('events', ['utils']),
    ...mapState('auth', ['profile']),
  },

  methods: {
    ...mapActions('events', ['loadUtils']),
    ...mapActions('auth', ['loadProfile']),
  },

  async created() {
    let self = this
    await axios
      .get(
        API_URL_GRAF + '/events/coach/' + this.$route.params.id + '/sportsman/' + this.$route.params.sportsman + '/',
        {
          headers: {
            Authorization: localStorage.getItem('access') ? 'Bearer ' + localStorage.getItem('access') : '',
            'Content-Type': 'application/json; charset=utf-8',
          },
        }
      )
      .then(res => {
        if (!res.data.date) {
          this.$router.push({ name: 'CalendarWeek' })
          return
        }

        self.plan = res.data

        self.loadUtils()
        if (moment().isAfter(moment(res.data.date + ' ' + res.data.timeTo))) {
          self.component = 'CalendarRating'
        } else {
          // Если событие не неступило
          // Переходим в редактирование
          self.component = 'CalendarPlanEdit'
        }
      })
  },
}
</script>

<style lang="scss"></style>
