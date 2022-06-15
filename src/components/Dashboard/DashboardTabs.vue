<template>
  <div class="statistics-tabs__wrapper" :class="{ 'statistics-tabs__wrapper--player': player }">
    <v-tabs :ripple="false" class="statistics-tabs" v-model="tab">
      <v-tab :ripple="false" class="statistics-tabs__tab">
        <div class="statistics-tabs__tab-inner">
          <div class="statistics-tabs__tab-icon">
            <img src="@/assets/images/svg/statistics/statistics.svg" />
          </div>
          <p class="statistics-tabs__tab-title">Статистика</p>
        </div>
      </v-tab>
      <v-tab :ripple="false" class="statistics-tabs__tab">
        <div class="statistics-tabs__tab-inner">
          <div class="statistics-tabs__tab-icon">
            <img src="@/assets/images/svg/statistics/progress.svg" />
          </div>
          <p class="statistics-tabs__tab-title">Развитие</p>
        </div>
      </v-tab>
      <v-tab v-if="!player" :ripple="false" class="statistics-tabs__tab">
        <div class="statistics-tabs__tab-inner">
          <div class="statistics-tabs__tab-icon">
            <img src="@/assets/images/svg/statistics/attendance.svg" />
          </div>
          <p class="statistics-tabs__tab-title">Посещаемость</p>
        </div>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-if="player" class="statistics-tabs__tabs-items" v-model="tab">
      <v-tab-item class="statistics-tabs__tab-item">
        <dashboard-tab-sportsman-statistics />
      </v-tab-item>
      <v-tab-item class="statistics-tabs__tab-item">
        <dashboard-tab-sportsman-progress />
      </v-tab-item>
    </v-tabs-items>
    <v-tabs-items v-else class="statistics-tabs__tabs-items" v-model="tab">
      <v-tab-item class="statistics-tabs__tab-item">
        <dashboard-table-group-statistics />
      </v-tab-item>
      <v-tab-item class="statistics-tabs__tab-item">
        <dashboard-table-group-progress />
      </v-tab-item>
      <v-tab-item class="statistics-tabs__tab-item">
        <dashboard-table-group-attendance />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import DashboardTableGroupStatistics from '@/components/Dashboard/DashboardTabContent/DashboardTableGroupStatistics.vue'
import DashboardTableGroupProgress from '@/components/Dashboard/DashboardTabContent/DashboardTableGroupProgress.vue'
import DashboardTableGroupAttendance from '@/components/Dashboard/DashboardTabContent/DashboardTableGroupAttendance.vue'

import DashboardTabSportsmanProgress from '@/components/Dashboard/DashboardTabContent/DashboardTabSportsmanProgress.vue'
import DashboardTabSportsmanStatistics from '@/components/Dashboard/DashboardTabContent/DashboardTabSportsmanStatistics.vue'

export default {
  props: {
    player: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tab: 0,
    }
  },
  components: {
    DashboardTableGroupStatistics,
    DashboardTableGroupProgress,
    DashboardTableGroupAttendance,

    DashboardTabSportsmanProgress,
    DashboardTabSportsmanStatistics,
  },
}
</script>

<style lang="scss" scoped>
$circles: 86px;
$squaresSize: 45px;
$squaresPositionX: -45px;
$squaresPositionY: -0px;

.statistics-tabs {
  &::v-deep {
    .v-item-group {
      height: auto;
      background-color: $blue03;
    }
    .v-tabs-slider-wrapper {
      display: none;
    }
  }
  &__wrapper {
    border-radius: 28px;
    overflow: hidden;
    &--player {
      .statistics-tabs {
        &::v-deep {
          .v-item-group {
            background-color: $blue02;
          }
        }

        &__tab {
          background-color: $blue02;
          &::after,
          &::before {
            background-color: $blue02;
          }

          &.v-tab--active {
            .statistics-tabs__tab-inner {
              &::after,
              &::before {
                background-color: #5f68ce;
              }
            }
            background-color: #5f68ce;
          }
        }

        &__tab-item {
          background-color: #5f68ce;
        }
      }
    }
  }

  &__tab {
    flex-grow: 1;
    margin: 0px;
    padding: 16px;
    background-color: $blue03;

    &:hover {
      &::after,
      &::before {
        opacity: 1 !important;
      }
    }

    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 45px;
      height: 45px;
      bottom: 0px;
      transition: none;
      background-color: $blue03;
      opacity: 1 !important;
      z-index: 5;
    }

    &::after {
      right: 0px;
      border-bottom-right-radius: 9999px;
    }
    &::before {
      top: auto;
      left: 0px;
      border-bottom-left-radius: 9999px;
    }

    &.v-tab--active {
      &::after,
      &::before {
        display: none;
      }

      .statistics-tabs__tab-inner {
        &::after,
        &::before {
          content: '';
          position: absolute;
          bottom: 0px;
          width: $squaresSize;
          height: $squaresSize;
          background-color: $blue02;
          z-index: 1;
        }
        &::after {
          left: $squaresPositionX;
          bottom: $squaresPositionY;
        }
        &::before {
          right: $squaresPositionX;
          bottom: $squaresPositionY;
        }
      }
      z-index: 4;
      background-color: $blue02;

      border-top-left-radius: 32px;
      border-top-right-radius: 32px;
    }
  }

  &__tab-inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__tab-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 8px;
    background-color: $blue01;
  }

  &__tab-title {
    font-family: $Manrope, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
  }

  &__tabs-items {
    &::v-deep {
      padding: 0px !important;
      background-color: $blue03;
    }
  }

  &__tab-item {
    background-color: $blue02;
    border-radius: 28px;
    &:first-child {
      border-top-left-radius: 0px;
    }
    &:last-child {
      border-top-right-radius: 0px;
    }
  }
}
</style>
