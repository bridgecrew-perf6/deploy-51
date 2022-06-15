<template>
  <div class="achievements-card">
    <div class="achievements-card__reward">
      <img src="@/assets/images/rewards/reward-1.svg" class="achievements-card__reward-image" alt="reward">
    </div>
    <div class="achievements-card__content">
      <div class="achievements-card__content-top">
        <div class="achievements-card__content-left">
          <div class="achievements-card__title">{{ title }}</div>
          <p class="achievements-card__subtitle">Выполненно {{ completed }} из {{ assignments }} заданий</p>
        </div>
        <div class="achievements-card__content-num">{{ percent }} <span>%</span></div>
      </div>
      <div class="achievements-card__content-progress">
        <span class="achievements-card__content-progress-line"
              :style="{width: percent + '%', backgroundColor: color}"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AchievementsCard',
  props: {
    title: {
      type: String
    },
    assignments: {
      type: Number
    },
    completed: {
      type: Number
    },
  },
  computed: {
    percent() {
      return Math.ceil(this.completed / this.assignments * 100)
    },
    color() {
      if(this.percent > 15 && this.percent < 30) return '#FFA217'
      if(this.percent < 15) return '#EA6363'
      return '#64C048'
    }
  }
}
</script>

<style scoped lang="scss">
.achievements-card {
  width: 100%;
  height: 120px;
  padding: 0 24px 0 19px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  background-color: $blue02;
  box-shadow: 0px 6px 8px rgba(51, 56, 118, 0.3);

  &__reward {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $blue03;
    box-shadow: 0px 6px 8px rgba(51, 56, 118, 0.3);
  }

  &__reward-image {
    max-width: 65px;
  }

  &__content {
    width: calc(100% - 98px);
    margin-left: 18px;
    margin-bottom: 10px;
  }

  &__content-top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }

  &__subtitle {
    margin-top: 2px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
  }

  &__content-num {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    font-family: 'FolksBold';

    span {
      margin-left: -10px;
      font-size: 20px;
      font-weight: 400;
      font-family: $Manrope, Arial, -apple-system, system-ui, 'Segoe UI', 'Helvetica Neue', sans-serif;
    }
  }

  &__content-progress {
    width: 100%;
    height: 6px;
    margin-top: 0px;
    border-radius: 50px;
    background-color: $blue01;
    overflow: hidden;
  }

  &__content-progress-line {
    display: block;
    height: 100%;
    border-radius: 50px;
    transition: 0.3s;
  }
}
</style>
