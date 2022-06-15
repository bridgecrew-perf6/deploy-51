<template>
  <div class="text-header">
    <div class="text-header__left">{{ leftText }}</div>
    <div class="text-header__rigth">{{ rightText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    leftText: String,
    rightText: String,
  }
}
</script>

<style scoped lang="scss">
.text-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__left {
    color: $blue02;
    font-size: 20px;
    font-weight: 400;
  }

  &__rigth {
    color: $blue02;
    font-size: 16px;
  }
}
</style>
