<template>
  <div class="bottom-header">
    <div class="bottom-header__type">
      <div class="bottom-header__icon">
        <slot name="icon"></slot>
      </div>
      <h1 class="bottom-header__title">{{ title }}</h1>
    </div>
    <slot name="btns">
      <base-button :label="btnText" @click="$emit('btnClick')" />
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.bottom-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__type {
    display: flex;
    align-items: center;
  }

  &__icon {
    max-width: 34px;
    margin-right: 9px;
  }

  &__title {
    padding-bottom: 6px;
    color: $blue02;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px
  }
}
</style>
