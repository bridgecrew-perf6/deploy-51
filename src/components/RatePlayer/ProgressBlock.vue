<template>
  <div class="progress">
    <div class="progress__header">{{ title }}</div>
    <div
        class="progress__num"
        :style="{backgroundColor: bg}">
      <slot>
        <div class="progress__num-content">
          {{ num }} <span>{{ text }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBlock',
  props: {
    bg: {
      type: String,
      default: '#2ABAF3'
    },
    title: {
      type: String
    },
    num: {
      type: String
    },
    text: {
      type: String
    },
  }
}
</script>

<style scoped lang="scss">
.progress {
  width: 100%;
  height: 122px;
  border-radius: 12px;
  color: #fff;
  overflow: hidden;

  &__header {
    width: 100%;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $blue02;
    font-size: 14px;
    font-weight: 600;
  }

  &__num {
    position: relative;
    width: 100%;
    height: 83px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__num-content {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    font-family: 'FolksBold', serif;

    span {
      margin-left: 4px;
      margin-bottom: 5px;
      font-size: 12px;
    }
  }
}
</style>
