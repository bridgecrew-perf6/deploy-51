<template>
  <div class="wu-icon" :style="style">
    <div class="wu-icon__inner" :style="styleInner">
      <img class="wu-icon__icon" :src="require(`@/assets/images/svg/icons/${icon}.svg`)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    color: {
      type: String,
      default: '#464EA3',
    },
    width: {
      type: String,
      default: '36',
    },
    height: {
      type: String,
      default: '36',
    },
  },
  computed: {
    style() {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
        backgroundColor: this.hexToRgb(this.color),
      }
    },
    styleInner() {
      return {
        width: this.width - 2 + 'px',
        height: this.height - 2 + 'px',
        backgroundColor: this.color,
      }
    },
  },
  methods: {
    hexToRgb(hex) {
      let arrHex = hex
        .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1)
        .match(/.{2}/g)
        .map(x => parseInt(x, 16))

      return `rgba(${arrHex.join(', ')}, 0.7)`
    },
  },
}
</script>

<style lang="scss" scoped>
.wu-icon {
  display: inline-block;
  border-radius: 8px;
  overflow: hidden;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
}
</style>
