<template>
  <v-btn @click="handleOnClick($event)" class="sign-btn">
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleOnClick: function () {
      this.$emit('click')
    },
  },
}
</script>

<style lang="sass" scoped>
.sign-btn
  height: auto !important
  padding: 6px 24px !important
  text-align: center
  font-family: 'Manrope', sans-serif
  font-weight: 500
  letter-spacing: normal
  text-transform: none
  color: #fff !important
  background-color: rgba(42, 186, 243, 1) !important
  border: 2px solid rgba(255, 255, 255, 0.5)
  border-radius: 32px

::v-deep .v-btn__content
    font-size: 14px !important
    line-height: 32px
    font-weight: 500
</style>
