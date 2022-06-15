<template>
  <div class="stat" :style="{backgroundColor: colors(percent)}">
    <div class="stat__text">
      {{ percent }}
      <span class="stat__percent">%</span>
    </div>
    <div class="stat__title">{{ title }}</div>
    <div class="stat__progress" :style="{height: `${percent}%`}"></div>
  </div>
</template>

<script>
export default {
  name: 'StatsBlock',
  props: {
    percent: Number,
    title: String,
  },
  computed: {
    colors() {
      return (num) => {
        if (num < 30) return '#FF4E78'
        if (num >= 30 && num < 50) return '#FFA217'
        if (num >= 50 && num < 80) return '#64C048'
        return '#2ABAF3'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.stat {
  position: relative;
  width: 135px;
  height: 135px;
  padding: 15px 10px 15px 10px;
  border-radius: 28px;
  overflow: hidden;


  &__text {
    width: 130px;
    font-family: 'FolksBold', serif;
    font-weight: bold;
    font-size: 60px;
    line-height: 79px;
    text-align: center;
    color: #ffffff;
  }

  &__percent {
    margin-left: -15px;
    font-family: "Manrope", sans-serif !important;
    font-size: 20px;
    line-height: 27px;
    font-weight: normal;
  }

  &__title {
    position: relative;
    width: 100%;
    text-align: center;
    font-family: "Manrope";
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    z-index: 3;
  }

  &__progress {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    background-color: #fff;
    opacity: 0.3;
    z-index: 0;
  }
}
</style>
