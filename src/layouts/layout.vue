<template lang="pug">
  div.main-layout.v-application.v-application--is-ltr
    TheSidebar(@changeState="TakeChange" )
    .page-wrapper
      router-view
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
export default {
  name: 'main-layout',
  components: { TheSidebar },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    TakeChange() {
      this.active = !this.active
    },
  },
}
</script>

<style lang="scss">
.container {
  padding: 0 135px;
}
.main-layout {
  padding-left: 80px;
  padding-right: 0px;
}

.page-wrapper {
  width: 100%;
  background-color: #fbfbfe;
}
</style>
