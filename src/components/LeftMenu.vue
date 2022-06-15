<template>
  <div class="menu">
    <div class="assistant">
      <div class="assistant-text">
        Всё идёт по плану<span v-if="fullName">,</span>
        <span v-if="fullName" class="assistant-text-username">{{ fullName }}!</span>
        <p>Я приглядываю...</p>
      </div>

      <img src="@/assets/images/assistant-good.png" alt="Всё идёт по плану" class="assistant-eye" />
    </div>
    <div class="menu__content-inner">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', ['fullName']),
  },
  methods: {
    ...mapActions('auth', ['loadProfile']),
  },
  mounted() {
    this.loadProfile(localStorage.getItem('trainerID'))
  },
}
</script>

<style scoped lang="sass">
.menu
    position: relative
    max-width: 384px
    width: 100%
    min-height: 100vh
    background-color: #fff

.assistant
    display: flex
    justify-content: space-between
    align-items: center
    flex-wrap: wrap
    width: 100%
    padding: 50px 32px 42px
    background-color: #464EA3

.assistant-text
    max-width: 140px
    margin-right: 10px
    font-size: 14px
    line-height: 20px
    color: #fff

.assistant-text-username
    display: block
    font-size: 16px
    font-weight: 700

.menu__content-inner
    max-width: 320px
    margin: 0 auto
    padding-top: 32px
</style>
