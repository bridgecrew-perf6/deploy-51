<template>
  <Preloader fullPage v-if="!event" />
  <router-view v-else :event="event" />
</template>

<script>
import Preloader from '@/components/Preloader.vue'

export default {
  name: 'Standard',
  components: {
    Preloader,
  },
  data: () => ({
    event: null,
  }),

  methods: {
    getEvent() {
      this.$events.getEvent(this.$route.params.id).then(response => {
        this.event = response
      })
    },
  },
  mounted() {
    if (this.$route.name !== 'StandardCreateView') this.getEvent()
    else this.event = {}
  },
}
</script>
