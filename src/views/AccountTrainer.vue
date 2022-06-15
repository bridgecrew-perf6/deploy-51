<template>
  <router-view :profile="profile" />
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AccountTrainer',
  methods: {},
  computed: {
    ...mapState('auth', ['profile']),
  },
}
</script>
