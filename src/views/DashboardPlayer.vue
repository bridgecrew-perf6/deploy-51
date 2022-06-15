<template>
  <div class="d-flex player">
    <player-sidebar class="player__sidebar" />
    <div class="container player__container">
      <Header />
      <div class="player__content">
        <div class="player__header">
          <h2 class="player__title">Прогресс</h2>
          <v-select
            class="group-list__select player__select"
            v-model="progressPeriodSelected"
            :items="progressPeriod"
            item-text="title"
            item-value="id"
            single-line
            hide-details
            flat
            :menu-props="{
              contentClass: 'group-list__menu',
              nudgeBottom: 32,
              maxWidth: 180,
            }"
          >
            <template v-slot:item="{ item }">
              <p class="group-list__select-title">{{ item.title }}</p>
            </template>
            <template v-slot:selection="{ item }">
              <p class="group-list__select-title">{{ item.title }}</p>
            </template>
          </v-select>
        </div>
        <div class="player__row">
          <progress-left :spirit="95" :body="86" :intelligence="43" class="player__progress" />
          <col-chart class="player__progress" />
        </div>

        <dashboard-tabs player class="dashboard-statistics" />

        <div class="player__team-goals">
          <team-goals dashboard player />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerSidebar from '@/components/Dashboard/PlayerSidebar'
import Header from '@/components/Header.vue'
import ProgressLeft from '@/components/Dashboard/Progress/ProgressLeft'
import ColChart from '@/components/Dashboard/ColChart.vue'
import TeamGoals from '@/components/Goals/TeamGoals'
import DashboardTabs from '@/components/Dashboard/DashboardTabs.vue'

export default {
  name: 'DashboardPlayer',
  components: {
    PlayerSidebar,
    Header,
    ProgressLeft,
    ColChart,
    TeamGoals,
    DashboardTabs,
  },
  data() {
    return {
      progressPeriodSelected: 'week',
      progressPeriod: [
        {
          id: 'week',
          title: 'За неделю',
        },
        {
          id: 'month',
          title: 'За месяц',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.player {
  &__content {
    padding-bottom: 83px;
  }

  &__header {
    display: flex;
  }

  &__title {
    color: $blue02;
    font-size: 20px;
    font-weight: 400;
  }

  &__row {
    margin-top: 15px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
  }

  &__progress {
    width: 49%;
  }

  &__select {
    width: 100%;
    max-width: 120px;
    height: 28px;
    margin-left: 13px;

    &::v-deep {
      .group-list__select-title {
        color: #aca3dd;
        font-size: 14px;
        font-weight: 400;

        .v-select__selections {
          padding-left: 13px;
        }

        &.v-select--is-menu-active {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
