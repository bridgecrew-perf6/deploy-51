<template>
  <router-view :profile="profile" />
</template>

<script>
import ScheduleHeader from '@/components/ScheduleHeader'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AccountTrainer',
  components: { ScheduleHeader },
  methods: {},
  computed: {
    ...mapState('auth', ['profile']),
  },
}
</script>
