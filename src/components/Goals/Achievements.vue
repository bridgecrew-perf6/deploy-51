<template>
  <div class="achievements">
    <h2 class="achievements__title">Достижения</h2>
    <div class="achievements__block">
      <div class="achievements__new-achievement">
        <div class="achievements__new-achievement-title">Новое достижение</div>
        <img src="@/assets/images/reward10.svg" class="achievements__new-achievement-reward" alt="reward">
        <div class="achievements__new-achievement-subtitle">
          ТОП-10 среди команд
          в общешкольном рейтинге
        </div>
      </div>
      <div class="achievements__block-wrapper">
        <div class="achievements__cards">
          <achievements-card
              title="Дружная команда"
              :assignments="23"
              :completed="13"
              class="achievements__card"/>
          <achievements-card
              title="Командный дух"
              :assignments="23"
              :completed="7"
              class="achievements__card"/>
          <achievements-card
              title="ТОП-5 по меткости"
              :assignments="23"
              :completed="5"
              class="achievements__card"/>
        </div>
        <div class="achievements__line-wrapper">
          <div class="achievements__line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AchievementsCard from './AchievementsCard'

export default {
  name: 'Achievements',
  components: {
    AchievementsCard
  }
}
</script>

<style scoped lang="scss">
.achievements {
  &__title {
    margin-left: 20px;
    color: $blue02;
    font-size: 20px;
    font-weight: 400;
  }

  &__block {
    margin-top: 12px;
    width: 100%;
    padding: 22px 12px 20px 20px;
    border-radius: 28px;
    display: flex;
    justify-content: space-between;
    background-color: $blue01;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  }

  &__new-achievement {
    width: 392px;
    height: 392px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../../assets/images/new-achievement-bg.svg');
    background-color: $blue02;
    color: #fff;
    text-align: center;
  }

  &__new-achievement-title {
    max-width: 120px;
    font-size: 20px;
    font-weight: 500;
  }

  &__new-achievement-subtitle {
    max-width: 255px;
    font-size: 20px;
    font-weight: 400;
  }

  &__new-achievement-reward {
    margin-top: 13px;
    margin-bottom: 24px;
  }

  &__block-wrapper {
    display: flex;
    width: calc(100% - 412px);
  }

  &__cards {
    width: calc(100% - 19px);
  }

  &__card {
    &:not(:first-child) {
      margin-top: 15px;
    }
  }

  &__line-wrapper {
    height: 100%;
    margin-left: 13px;
    display: flex;
    align-items: center;
  }

  &__line {
    width: 6px;
    height: 100px;
    border-radius: 6px;
    background-color: rgba(70, 78, 163, 0.5);
  }
}
</style>
