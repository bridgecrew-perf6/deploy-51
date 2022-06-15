<template>
  <div class="d-flex">
    <left-menu style="flex-shrink: 0">
      <div v-if="group" class="group-list">
        <div class="group-list__header">
          <img class="group-list__header-image" src="@/assets/images/groups/img-group02.png" />
          <div class="group-list__header-wrapper">
            <p class="group-list__header-name h2">
              {{ group.name }}
            </p>
            <p class="group-list__header-desc">{{ group.ageGroup }} лет ({{ group.preparationYear }} год подготовки)</p>
          </div>
        </div>
        <div class="group-list__filters">
          <v-select
            class="group-list__select"
            v-model="selectedSortSportsmas"
            :items="sortSportsmans"
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
              <img v-if="item.icon" class="group-list__select-image" :src="item.icon" />
              <p class="group-list__select-title">{{ item.title }}</p>
            </template>
            <template v-slot:selection="{ item }">
              <img v-if="item.icon" class="group-list__select-image" :src="item.icon" />
              <p class="group-list__select-title">{{ item.title }}</p>
            </template>
          </v-select>
          <button class="group-list__alphabet-sort" @click="sortAlphabet()">
            <svg
              v-if="sortAlphabetCurrent == 0"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.23 14.782c.071-.04.13-.025.188-.025.974 0 1.952-.003 2.927.003.148 0 .184-.037.184-.18L14.523.184c0-.146.042-.177.184-.174.622.01 1.24.006 1.861 0 .123 0 .162.028.162.152-.003 2.683-.003 5.366-.003 8.053 0 2.131 0 4.263-.003 6.395 0 .12.029.151.159.151 1.006-.006 2.016-.003 3.023-.003.026 0 .052.003.094.007-.094.17-.233.29-.343.43-.285.369-.583.728-.887 1.082-.638.743-1.26 1.496-1.887 2.246-.386.462-.777.92-1.156 1.385-.084.105-.13.093-.207-.003-.34-.406-.696-.8-1.03-1.212a123.209 123.209 0 0 0-1.855-2.237c-.401-.474-.777-.966-1.204-1.422-.065-.08-.126-.161-.2-.25ZM5.397 6.711h-3.39l-.392 1.236H0L2.538 0h2.34l2.539 7.947H5.8l-.404-1.236Zm-.45-1.413L3.69 1.413 2.457 5.298h2.49ZM6.656 20H5.089v-2.705H3.23L1.858 20H.081l1.521-2.99a2.44 2.44 0 0 1-.968-.772 2.906 2.906 0 0 1-.404-.721c-.1-.26-.15-.524-.15-.79 0-.289.05-.568.146-.846.098-.276.234-.527.408-.756.169-.22.373-.416.612-.58.24-.164.496-.288.774-.368.275-.081.557-.121.842-.121h3.794V20Zm-1.57-6.535H2.87c-.155 0-.314.04-.479.121-.165.08-.304.183-.42.31-.201.214-.302.49-.302.827 0 .236.084.465.253.685.116.149.262.264.437.353.178.087.346.134.508.134h2.214v-2.43h.004Z"
                fill="currentColor"
              />
            </svg>
            <svg
              v-if="sortAlphabetCurrent == 1"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.23 14.782c.071-.04.13-.025.188-.025.974 0 1.952-.003 2.927.003.148 0 .184-.037.184-.18L14.523.184c0-.146.042-.177.184-.174.622.01 1.24.006 1.861 0 .123 0 .162.028.162.152-.003 2.683-.003 5.366-.003 8.053 0 2.131 0 4.263-.003 6.395 0 .12.029.151.159.151 1.006-.006 2.016-.003 3.023-.003.026 0 .052.003.094.007-.094.17-.233.29-.343.43-.285.369-.583.728-.887 1.082-.638.743-1.26 1.496-1.887 2.246-.386.462-.777.92-1.156 1.385-.084.105-.13.093-.207-.003-.34-.406-.696-.8-1.03-1.212a123.209 123.209 0 0 0-1.855-2.237c-.401-.474-.777-.966-1.204-1.422-.065-.08-.126-.161-.2-.25ZM5.397 18.711h-3.39l-.392 1.236H0L2.538 12h2.34l2.539 7.947H5.8l-.404-1.236Zm-.45-1.413L3.69 13.413l-1.234 3.885h2.49ZM6.656 7.944H5.089V5.24H3.23L1.858 7.944H.081l1.521-2.99a2.44 2.44 0 0 1-.968-.771A2.905 2.905 0 0 1 .23 3.46c-.1-.26-.15-.524-.15-.79 0-.288.05-.567.146-.846.098-.276.234-.527.408-.756.169-.22.373-.415.612-.58.24-.164.496-.288.774-.368C2.295.04 2.577 0 2.862 0h3.794v7.944ZM5.086 1.41H2.87c-.155 0-.314.04-.479.12-.165.081-.304.183-.42.31-.201.214-.302.49-.302.828 0 .235.084.464.253.684.116.15.262.264.437.354.178.086.346.133.508.133h2.214v-2.43h.004Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

      <persons :items="filter" type="sportsman" />
    </left-menu>

    <div class="container">
      <Header />

      <dashboard-events class="dashboard-events" />

      <section class="dashboard-charts">
        <h2 class="dashboard-charts__title">Прогресс</h2>
        <v-row>
          <v-col cols="6">
            <progress-left :spirit="95" :body="86" :intelligence="43" />
          </v-col>

          <v-col cols="6">
            <progress-right />
          </v-col>
        </v-row>
      </section>

      <div class="dashboard-team-result">
        <div class="dashboard-team-result__header">
          <h2 class="dashboard-team-result__title">Командный результат</h2>
          <p class="dashboard-team-result__descr">Регулярный чемпионат, 2 круг</p>
        </div>
        <team-result class="dashboard-team-result__block" />
      </div>

      <h2 class="dashboard-statistics__title">Статистика</h2>
      <dashboard-tabs class="dashboard-statistics" />

      <team-goals class="dashboard-goals" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'
import Persons from '@/components/Persons.vue'

import DashboardEvents from '@/components/Dashboard/DashboardEvents.vue'
import DashboardTabs from '@/components/Dashboard/DashboardTabs.vue'

import ProgressLeft from '@/components/Dashboard/Progress/ProgressLeft'
import ProgressRight from '@/components/Dashboard/Progress/ProgressRight'
import TeamResult from '@/components/Dashboard/TeamResult'
import TeamGoals from '@/components/Goals/TeamGoals'

export default {
  components: {
    LeftMenu,
    Header,
    Persons,
    DashboardEvents,
    DashboardTabs,
    ProgressLeft,
    ProgressRight,
    TeamResult,
    TeamGoals,
  },
  data() {
    return {
      sortAlphabetSettings: ['az', 'za'],
      sortAlphabetCurrent: 0,
      selectedSportsmans: [],
      group: null,
      sortSportsmans: [
        {
          id: 'all',
          icon: require('@/assets/images/svg/positionTypes/all-select.svg'),
          title: 'Все игроки',
        },
        {
          id: 'non-goalies',
          icon: require('@/assets/images/svg/positionTypes/non-goalies-select.svg'),
          title: 'Полевые игроки',
        },
        {
          id: 'goalies',
          icon: require('@/assets/images/svg/positionTypes/goalies-select.svg'),
          title: 'Вратари',
        },
      ],
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

      selectedSortSportsmas: 'all',
      progressPeriodSelected: 'week',
    }
  },
  computed: {
    filter() {
      if (this.group?.sportsmen) {
        if (this.selectedSortSportsmas === 'non-goalies')
          return this.group.sportsmen
            .filter(x => x.amplua === 'forward' || x.amplua === 'defender')
            .concat()
            .sort((a, b) =>
              this.sortAlphabetCurrent == 0
                ? a.full_name.localeCompare(b.full_name)
                : b.full_name.localeCompare(a.full_name)
            )
        else if (this.selectedSortSportsmas === 'goalies')
          return this.group.sportsmen
            .filter(x => x.amplua === 'goalie')
            .concat()
            .sort((a, b) =>
              this.sortAlphabetCurrent == 0
                ? a.full_name.localeCompare(b.full_name)
                : b.full_name.localeCompare(a.full_name)
            )
        else
          return this.group.sportsmen
            .concat()
            .sort((a, b) =>
              this.sortAlphabetCurrent == 0
                ? a.full_name.localeCompare(b.full_name)
                : b.full_name.localeCompare(a.full_name)
            )
      } else return []
    },
  },
  methods: {
    sortAlphabet() {
      this.sortAlphabetCurrent =
        this.sortAlphabetCurrent < this.sortAlphabetSettings.length - 1
          ? ++this.sortAlphabetCurrent
          : (this.sortAlphabetCurrent = 0)
    },
    getGroup() {
      this.$groups
        .getGroup(1)
        .then(response => {
          let positionTypes = [
            {
              id: 1,
              title: 'Вратарь',
              slug: 'goalie',
            },
            {
              id: 2,
              title: 'Защитник',
              slug: 'defender',
            },
            {
              id: 3,
              title: 'Нападающий',
              slug: 'forward',
            },
          ]

          response.sportsmen.forEach(sportsman => {
            sportsman.position_type = positionTypes.find(type => type.id === sportsman.amplua).slug
            sportsman.full_name = `${sportsman.user.firstName} ${sportsman.user.lastName}`
            sportsman.age = moment().diff(sportsman.user.birthDate, 'years')
            sportsman.avatar = sportsman.user.avatar
            sportsman.team_number = sportsman.squadNumber
          })

          this.group = response
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
  mounted() {
    this.getGroup()
  },
}
</script>

<style lang="scss" scoped>
.dashboard-events,
.dashboard-statistics,
.dashboard-goals {
  margin-bottom: 40px;
}

.dashboard-charts,
.dashboard-statistics {
  &__title {
    margin-bottom: 13px;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: #413a70;
  }
}

.dashboard-charts {
  margin-bottom: 40px;
}

/* Select position types */
.group-list__select {
  width: 100%;
  max-width: 180px;

  &::v-deep {
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

.group-list__menu {
  .v-select-list {
    padding: 0px;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    background-color: #fff;

    &::v-deep {
      .v-list-item {
        padding: 10px 13px;
        min-height: auto;
        position: relative;

        &.v-list-item--active {
          &::before {
            background-color: transparent;
          }

          .v-list-item__title {
            color: $blue02;
          }
        }

        &::after {
          display: none;
        }

        &:hover {
          &::before {
            background-color: #ecf6ff !important;
            opacity: 1;
          }
        }
      }

      .v-list-item__content {
        padding: 4px 0;
      }

      .v-list-item__title {
        line-height: 19px;
        color: $blue04;
      }
    }
  }
}

.group-list__select-image {
  margin-right: 8px;
  position: relative;
  z-index: 2;
}

.group-list__select-title {
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: $blue02;
  position: relative;
  z-index: 2;
}

/* End Select position types */

/* Alphabet sort */
.group-list__alphabet-sort {
  padding: 6px;
  color: $blue05;
}

/* End Alphabet sort */

.group-list {
  max-width: 320px;
  margin: 0 auto;
  padding-top: 32px;
}

.group-list__header {
  display: flex;
  margin-bottom: 32px;
}

.group-list__header-image {
  display: inline-block;
  max-width: 48px;
  max-width: 48px;
  width: 100%;
  height: auto;
  margin-right: 28px;
  z-index: 1;
}

.group-list__header-wrapper {
  color: $blue02;
  z-index: 1;
}

.group-list__header-name {
  font-weight: 500;
}

.group-list__header-desc {
  font-size: 14px !important;
  line-height: 19px;
  font-weight: normal;
}

.group-list__filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 5px;
  border-top: 1px solid #ecf6ff;
  border-bottom: 1px solid #ecf6ff;
}

.create-gt__header {
  margin: 50px 0 45px;
}

.create-gt__title {
  position: relative;
  padding-left: 48px;
  line-height: 36px;
  color: $blue02;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0px;
    width: 36px;
    height: 36px;
    transform: translateY(-50%);
    background: url(../assets/images/svg/red-timer.svg) no-repeat center center;
  }
}

.create-gt__subheader {
  margin-bottom: 15px;

  h2 {
    color: $blue02;
    font-weight: normal;
  }

  a {
    position: relative;
    padding-left: 25px;
    font-weight: 500;
    color: $blue05;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0px;
      width: 16px;
      height: 15px;
      transform: translateY(-50%);
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='15' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.784 10.135C.887 9.59-.062 8.558.004 7.113c.04-.924.354-1.79 1.162-2.254.715-.411 1.562-.594 2.344-.876 0-.545-.122-1.258.027-1.91C3.81.888 4.944.03 6.161.019 9.14-.01 12.117.003 15.096.01c.566.001.912.352.905.851-.008.482-.369.805-.95.806-2.783.006-5.565 0-8.348.008-.289.002-.596.025-.862.123-.535.195-.782.634-.776 1.19A1.2 1.2 0 0 0 6 4.127c.246.055.505.067.757.067 2.626.004 5.25.002 7.876.003.157 0 .314-.008.47.005.588.05.905.373.88.885-.023.478-.35.78-.91.79-.78.016-1.56.004-2.379.004v2.51c.64 0 1.279-.007 1.918.002.253.003.518-.003.756.069.38.115.652.363.615.813-.032.413-.21.728-.658.765-.522.045-1.049.056-1.574.07-.332.01-.664.003-1.06.003v1.689c-.667-.327-1.27-.56-1.804-.9-.554-.353-1.018-.322-1.558.011-.512.315-1.076.546-1.697.852v-1.594c-.892 0-1.727-.054-2.55.02-.498.044-.868.666-.865 1.19.002.52.437 1.078.958 1.182.266.053.546.056.818.056 2.9.003 5.8 0 8.7.003.215 0 .431.005.643.038.44.066.638.373.658.78.02.423-.213.713-.622.806-.263.06-.544.059-.816.059-2.9.004-5.8.005-8.7.001-2.496 0-3.803-1.754-3.072-4.17ZM7.568 5.95c-.081-.027-.135-.058-.188-.058-1.467-.003-2.933-.021-4.4.006-.748.014-1.233.51-1.271 1.19-.037.645.389 1.25 1.035 1.268 1.596.045 3.194.015 4.823.015l.001-2.42Z' fill='%2395B0DA'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}

.dashboard-team-result {
  margin-bottom: 40px;

  &__header {
    display: flex;
    align-items: center;
  }

  &__title {
    color: $blue02;
    font-size: 20px;
    font-weight: 400;
  }

  &__descr {
    margin-left: 6px;
    color: $blue05;
    font-size: 14px;
    font-weight: 400;
  }

  &__block {
    margin-top: 15px;
  }
}

/* All */
.section-title {
  font-weight: normal;
  color: $blue02;
  margin-bottom: 16px;
}

/* End All */
</style>
