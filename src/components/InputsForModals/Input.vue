<template>
  <v-text-field flat hide-details :placeholder="placeholder">
    <template slot="prepend">
      <slot name="icon"> </slot>
    </template>
  </v-text-field>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: [String, Number],
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="sass" scoped></style>
