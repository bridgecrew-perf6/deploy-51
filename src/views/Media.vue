<template>
  <div class="d-flex">
    <left-menu> </left-menu>

    <div class="container create-gt__container">
      <Header />

      <div class="d-flex justify-space-between align-center">
        <h1 class="h1">Медиа</h1>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'

export default {
  data() {
    return {}
  },
  components: {
    LeftMenu,
    Header,
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style lang="sass" scoped></style>
