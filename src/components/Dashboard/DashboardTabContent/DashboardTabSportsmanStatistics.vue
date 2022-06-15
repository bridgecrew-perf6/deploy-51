<template>
  <v-row class="tab-sportsman-statistics">
    <v-col cols="4">
      <div class="tab-sportsman-statistics__statistics-games tab-sportsman-statistics__header">
        <p class="tab-sportsman-statistics__header-title">Количество игр</p>

        <div class="tab-sportsman-statistics__header-inner">
          <div class="tab-sportsman-statistics__header-progress">
            <p class="tab-sportsman-statistics__header-progress-games">
              <span class="tab-sportsman-statistics__header-progress-games-played">35</span>/48
            </p>
            <div class="tab-sportsman-statistics__header-progress-bar">
              <span
                class="
                  tab-sportsman-statistics__header-progress-line tab-sportsman-statistics__header-progress-line--lose
                "
                :style="`width: ${(7 / 48) * 100}%`"
              ></span>
              <span
                class="
                  tab-sportsman-statistics__header-progress-line tab-sportsman-statistics__header-progress-line--draw
                "
                :style="`width: ${(5 / 48) * 100}%`"
              ></span>
              <span
                class="
                  tab-sportsman-statistics__header-progress-line tab-sportsman-statistics__header-progress-line--wins
                "
                :style="`width: ${(23 / 48) * 100}%`"
              ></span>
            </div>
          </div>
          <div class="tab-sportsman-statistics__header-legend">
            <ul class="tab-sportsman-statistics__header-legend-list">
              <li class="tab-sportsman-statistics__header-legend-item">
                <span
                  class="
                    tab-sportsman-statistics__header-legend-number tab-sportsman-statistics__header-legend-number--wins
                  "
                  >23</span
                >
                Победа
              </li>
              <li class="tab-sportsman-statistics__header-legend-item">
                <span
                  class="
                    tab-sportsman-statistics__header-legend-number tab-sportsman-statistics__header-legend-number--draw
                  "
                  >5</span
                >
                Ничья
              </li>
              <li class="tab-sportsman-statistics__header-legend-item">
                <span
                  class="
                    tab-sportsman-statistics__header-legend-number tab-sportsman-statistics__header-legend-number--lose
                  "
                  >7</span
                >
                поражение
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="8">
      <v-row>
        <v-col cols="4">
          <div class="tab-sportsman-statistics__block tab-sportsman-statistics__block--header">
            <div class="tab-sportsman-statistics__block__header">+ / -</div>
            <div class="tab-sportsman-statistics__block-body tab-sportsman-statistics__block-body--great">
              <div class="tab-sportsman-statistics__block__content">
                <span class="tab-sportsman-statistics__block-body-number">+12</span>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="tab-sportsman-statistics__block tab-sportsman-statistics__block--header">
            <div class="tab-sportsman-statistics__block__header">Штрафное время</div>
            <div class="tab-sportsman-statistics__block-body tab-sportsman-statistics__block-body--good">
              <div class="tab-sportsman-statistics__block__content">
                <span class="tab-sportsman-statistics__block-body-number">12</span> мин
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="tab-sportsman-statistics__block tab-sportsman-statistics__block--header">
            <div class="tab-sportsman-statistics__block__header">Посещаемость</div>
            <div class="tab-sportsman-statistics__block-body tab-sportsman-statistics__block-body--good">
              <div class="tab-sportsman-statistics__block__content">
                <span class="tab-sportsman-statistics__block-body-number">84</span> %
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="5">
          <div class="tab-sportsman-statistics__block tab-sportsman-statistics__block--wtht-header">
            <div class="tab-sportsman-statistics__block-body tab-sportsman-statistics__block-body--space-between">
              <div class="tab-sportsman-statistics__block__content">
                <p class="tab-sportsman-statistics__block-body-title">Передачи</p>
                <span
                  class="
                    tab-sportsman-statistics__block-body-number
                    tab-sportsman-statistics__block-body-number--bg
                    tab-sportsman-statistics__block-body-number--great
                  "
                  >47</span
                >
              </div>
              <div class="tab-sportsman-statistics__block__content">
                <p class="tab-sportsman-statistics__block-body-title">Голы</p>
                <span
                  class="
                    tab-sportsman-statistics__block-body-number
                    tab-sportsman-statistics__block-body-number--bg
                    tab-sportsman-statistics__block-body-number--orange
                  "
                  >32</span
                >
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="tab-sportsman-statistics__block tab-sportsman-statistics__block--header">
            <div class="tab-sportsman-statistics__block__header">Очки</div>
            <div class="tab-sportsman-statistics__block-body tab-sportsman-statistics__block-body--good">
              <div class="tab-sportsman-statistics__block__content">
                <span class="tab-sportsman-statistics__block-body-number">79</span>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="tab-sportsman-statistics__block tab-sportsman-statistics__block--header">
            <div class="tab-sportsman-statistics__block__header">Кол-во занятий</div>
            <div class="tab-sportsman-statistics__block-body tab-sportsman-statistics__block-body--great">
              <div class="tab-sportsman-statistics__block__content">
                <span class="tab-sportsman-statistics__block-body-number">4</span> в неделю
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
}
</script>

<style lang="scss">
.tab-sportsman-statistics {
  padding: 20px;
}

.tab-sportsman-statistics__header {
  height: 100%;
}

.tab-sportsman-statistics__avatar-wrapper {
  position: relative;
  margin-bottom: 35px;
}

.tab-sportsman-statistics__avatar {
  width: 180px;
  height: 180px;
  margin: 0 auto;
  border: 3px solid #95b0da;
  border-radius: 50%;
}

.tab-sportsman-statistics__avatar--type {
  background-color: $blue02;

  &::v-deep {
    .v-image__image {
      background-size: 90px;
    }
  }
}

.tab-sportsman-statistics__sp-number {
  position: absolute;
  left: 50%;
  bottom: -17px;
  display: inline-block;
  min-width: 45px;
  font-weight: bold;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
  background-color: $blue03;
  border: 2px solid $blue05;
  border-radius: 12px;
  transform: translateX(-50%);
}

.tab-sportsman-statistics__about {
  text-align: center;
}

.tab-sportsman-statistics__fullname {
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: $blue02;
}

.tab-sportsman-statistics__position {
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  color: #413a70;
}

.tab-sportsman-statistics__progress-block {
  margin-bottom: 30px;
}

.tab-sportsman-statistics__title-block {
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 27px;
  color: $blue02;
}

.tab-sportsman-statistics__progress-wrapper,
.tab-sportsman-statistics__statistics-wrapper {
  padding: 20px;
  background-color: $blue03;
  box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  border-radius: 28px;
}

.tab-sportsman-statistics__progress-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.tab-sportsman-statistics__progress-item {
  margin-right: 1px;
  margin-left: 1px;
  margin-bottom: 5px;
}

.tab-sportsman-statistics__statistics-games {
  background-color: $blue02;
  border-radius: 12px;
}

.tab-sportsman-statistics__header {
  padding: 10px 13px;
}

.tab-sportsman-statistics__header-title {
  margin-bottom: 30px !important;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #fff;
}

.tab-sportsman-statistics__header-progress {
  margin-bottom: 35px;
}

.tab-sportsman-statistics__header-progress-games {
  margin-bottom: 7px !important;
  font-family: 'FolksBold', serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  color: $blue05;
}

.tab-sportsman-statistics__header-progress-games-played {
  font-size: 54px;
  line-height: 54px;
  color: #ffffff;
}

.tab-sportsman-statistics__header-progress-bar {
  position: relative;
  display: flex;
  height: 8px;
  background-color: #525bba;
  border-radius: 4px;
  overflow: hidden;
}

.tab-sportsman-statistics__header-progress-line {
  height: 100%;

  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.tab-sportsman-statistics__header-progress-line--wins {
  background-color: $great;
}

.tab-sportsman-statistics__header-progress-line--draw {
  background-color: #fff;
}

.tab-sportsman-statistics__header-progress-line--lose {
  background-color: $terrible;
}

.tab-sportsman-statistics__header-legend-list {
  padding-left: 5px !important;
}

.tab-sportsman-statistics__header-legend-item {
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #ffffff;

  &:last-child {
    margin-bottom: 0px;
  }
}

.tab-sportsman-statistics__header-legend-number {
  display: inline-block;
  min-width: 32px;
  margin-right: 12px;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  border-radius: 4px;
}

.tab-sportsman-statistics__header-legend-number--wins {
  background-color: $great;
  color: #fff;
}

.tab-sportsman-statistics__header-legend-number--draw {
  background-color: #fff;
  color: $blue02;
}

.tab-sportsman-statistics__header-legend-number--lose {
  background-color: $terrible;
  color: #fff;
}

.tab-sportsman-statistics__block {
  border-radius: 12px;
  overflow: hidden;
}

.tab-sportsman-statistics__block--header {
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0px;
  }
}

.tab-sportsman-statistics__block--wtht-header {
  height: 100%;
  margin-bottom: 0px;
  padding: 14px 21px 21px;
  border-radius: 12px;
  background-color: $blue02;
}

.tab-sportsman-statistics__block__header {
  min-height: 50px;
  font-weight: 600;
  font-size: 12px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  background-color: $blue02;
}

.tab-sportsman-statistics__block-body {
  min-height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-sportsman-statistics__block-body--space-between {
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 -10px;
}

.tab-sportsman-statistics__block-body--column {
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.tab-sportsman-statistics__block-body-title {
  margin-bottom: 7px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
}

.tab-sportsman-statistics__block__content {
  flex: 0 0 50%;
  padding: 0 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #fff;
}

.tab-sportsman-statistics__block__content--time {
  display: flex;
}

.tab-sportsman-statistics__block-body--good {
  background-color: $good;
}

.tab-sportsman-statistics__block-body--great {
  background-color: $great;
}

.tab-sportsman-statistics__block-body--orange {
  background-color: $badly;
}

.tab-sportsman-statistics__block-body--terrible {
  background-color: $terrible;
}

.tab-sportsman-statistics__block-body-number {
  min-height: 75px;
  font-family: 'FolksBold', serif !important;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px !important;
}

.tab-sportsman-statistics__block-body-number--bg {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 13px;
  border-radius: 12px;
}

.tab-sportsman-statistics__block-body-number--time {
  display: flex;
  flex-direction: column;
  line-height: 40px;
  margin-bottom: 7px;

  span {
    font-family: $Manrope;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
  }
}

.tab-sportsman-statistics__block-body-number--great {
  background-color: $great;
}

.tab-sportsman-statistics__block-body-number--orange {
  background-color: $badly;
}

.tab-sportsman-statistics__block-body-number--dark-blue {
  background-color: $blue01;
  color: #fff;
}
</style>
