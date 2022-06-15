<template>
  <div class="simple-note"
       :style="`background-color: ${note.body.color}; color: ${note.body.color}`">
    <div class="simple-note__inner">
      <p class="simple-note__title">{{ note.title }}</p>
      <p class="simple-note__text">{{ note.body.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleNote',
  props: {
    note: Object
  }
}
</script>

<style scoped lang="scss">
.simple-note {
  border-radius: 8px;

  &__inner {
    padding: 15px;
  }

  &__title {
    font-size: 20px;
    line-height: 27px;
    color: $blue02;
  }

  &__text {
    font-size: 16px;
    line-height: 22px;
    color: $blue02;
  }
}
</style>
