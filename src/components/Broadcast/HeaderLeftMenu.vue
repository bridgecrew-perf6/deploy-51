<template>
  <div class="header-left-menu">
    <div class="header-left-menu__icon">
      <slot name="icon"></slot>
    </div>
    <div class="header-left-menu__title">{{title}}</div>
    <slot name="rightContent"></slot>
  </div>
</template>

<script>
export default {
  name: 'HeaderLeftMenu',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
.header-left-menu {
  display: flex;
  align-items: center;

  &__icon {
    margin-top: 5px;
  }

  &__title {
    margin-left: 9px;
    color: $blue02;
    font-size: 20px;
    font-weight: 400;
  }
}
</style>
