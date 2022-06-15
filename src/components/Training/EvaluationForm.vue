<template>
  <section class="evaluation-form">
    <h2 class="evaluation-form__page-title">Результаты тестировния</h2>

    <div class="evaluation-form__card">
      <v-data-table
        class="evaluation-form__table"
        :item-class="itemClass"
        :headers="headers"
        disable-pagination
        hide-default-footer
        :items="sportsmen"
        fixed-header
      >
        <template v-slot:header.name>
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
                maxWidth: 160,
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

            <button class="group-list__alphabet-sort">
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
        </template>

        <template v-slot:item.name="{ item }">
          <div class="player">
            <div class="player__avatar-wrapper">
              <span class="player__number">{{ item.teamNumber }}</span>
              <v-img
                :src="require(`@/assets/images/positionTypes/${item.amplua}.svg`)"
                width="56"
                max-width="56"
                height="56"
                class="player__avatar"
              ></v-img>
            </div>

            <div class="player__about">
              <p class="player__full-name">{{ item.firstName }} {{ item.lastName }}</p>
              <div class="player__info">8 лет, защитник</div>
            </div>
          </div>
        </template>

        <template v-slot:item.progress.a>
          <v-text-field class="evaluation-form__input" v-mask="'###'" hide-details></v-text-field>
        </template>

        <template v-slot:item.progress.b>
          <v-text-field class="evaluation-form__input" v-mask="'###'" hide-details></v-text-field>
        </template>

        <template v-slot:item.progress.c>
          <v-text-field class="evaluation-form__input" v-mask="'###'" hide-details></v-text-field>
        </template>

        <template v-slot:item.progress.d>
          <v-text-field class="evaluation-form__input" v-mask="'###'" hide-details></v-text-field>
        </template>

        <template v-slot:item.progress.e>
          <v-text-field class="evaluation-form__input" v-mask="'###'" hide-details></v-text-field>
        </template>

        <template v-slot:item.ofp="{ item }">
          <v-chip class="evaluation-form__chip" :color="getColor(item.ofp)" dark>
            {{ item.ofp }}
            <span class="evaluation-form__chip-percent">%</span>
          </v-chip>
        </template>
      </v-data-table>
    </div>
  </section>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: { mask },
  data() {
    return {
      amplua: 'non-goalies',
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'name',
          width: '26%',
        },
        { text: 'Отжимания (кол-во раз)', value: 'progress.a', align: 'center', width: '12.64%' },
        { text: 'Бег 10 м (сек)', value: 'progress.b', align: 'center', width: '12.64%' },
        { text: 'Скакалка (кол-во раз)', value: 'progress.c', align: 'center', width: '12.64%' },
        { text: 'Прыжок в длину (см)', value: 'progress.d', align: 'center', width: '12.64%' },
        { text: 'Прыжок в высоту (см)', value: 'progress.e', align: 'center', width: '12.64%' },
        { text: 'Показатель ОФП', value: 'ofp', align: 'center', width: '10.8%' },
      ],
      positionTypes: [
        { slug: 'goalie', title: 'вратарь' },
        { slug: 'defender', title: 'защитник' },
        { slug: 'forward', title: 'нападающий' },
      ],
      sortAlphabetSettings: ['az', 'za'],
      sortAlphabetCurrent: 0,
      selectedSortSportsmas: 'all',
      selectedSportsmans: [],
      selectedSportsmanIndex: null,
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
    }
  },
  computed: {
    sportsmen() {
      let arr = []

      for (let index = 0; index < 10; index++) {
        let element = {
          firstName: 'Герасимов',
          lastName: 'Юрий',
          amplua: 'defender',
          teamNumber: Math.floor(Math.random() * (100 - 0 + 1) + 0),
          avatar: null,
          ofp: Math.floor(Math.random() * (100 - 0 + 1) + 0),
          progress: {
            a: '',
            b: '',
            c: '',
            d: '',
            e: '',
          },
        }
        arr.push(element)
      }

      return arr
    },
  },
  methods: {
    getColor(percent) {
      if (percent <= 30) return 'terrible'
      else if (percent >= 31 && percent <= 60) return 'badly'
      else if (percent >= 61 && percent <= 70) return 'good'
      else return 'great'
    },
    itemClass(item) {
      return 'evaluation-form__row'
    },
  },
}
</script>

<style lang="scss" scoped>
.group-list__filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.group-list__select {
  width: 100%;
  max-width: 160px;

  &::v-deep {
    .v-select__selections {
      padding-left: 0px;
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

.evaluation-form {
  &__page-title {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: $blue02;
  }

  &__card {
    padding: 20px;
    background-color: #ffffff;

    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    border-radius: 28px;
    overflow: hidden;
  }
}

.evaluation-form__table {
  &::v-deep {
    background-color: transparent;

    .v-data-table__wrapper {
      &::-webkit-scrollbar {
        width: 3px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background: #aaa;
        border-radius: 6px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #999;
      }
    }
    .v-data-table-header {
      th {
        height: auto !important;
        padding: 8px;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        color: $blue02 !important;
        border-bottom: 2px solid transparent !important;
        &:first-child {
          padding: 8px 19px;
        }
        &.active {
          border-bottom-color: #fff !important;
        }
      }
      .v-data-table-header__icon {
        display: none;
      }
    }

    .evaluation-form__row {
      &:hover {
        background-color: transparent !important;
      }
      td {
        padding: 10px 4px !important;
        &:not(:first-child) {
          border-bottom: 2px solid #dce5f2 !important;
        }
        &:last-child {
          border-bottom: none !important;
        }
        &:first-child {
          border-bottom: none !important;
          padding-left: 19px !important;
          padding-right: 19px !important;
        }
      }
      &:last-child {
        td {
          &:not(:first-child) {
            border-bottom: none !important;
          }
        }
      }
    }
  }
}

.evaluation-form__chip {
  &::v-deep {
    display: inline-block;
    width: 100%;
    height: auto;
    border-radius: 12px;
    .v-chip__content {
      width: 100%;
      align-items: flex-end;
      justify-content: center;
      padding: 12px;
      font-family: 'Folks', sans-serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 25px;
      letter-spacing: 0.05em;
      color: #fff;
    }
    &.terrible {
      background-color: $terrible;
    }
    &.badly {
      background-color: $badly;
    }
    &.good {
      background-color: $good;
    }
    &.great {
      background-color: $great;
      border: 2px solid rgba($great, 0.5);
    }
  }
  &-percent {
    font-size: 11px;
    line-height: 20px;
  }
}

.player {
  display: flex;
  &__number {
    position: absolute;
    bottom: -1px;
    left: -5px;

    width: 24px;

    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #fff;
    background-color: #464ea3;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    z-index: 2;
  }

  &__avatar-wrapper {
    position: relative;
    margin-right: 10px;
    overflow: visible;
  }

  &__avatar {
    &::v-deep {
      .v-responsive__content {
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 50%;
      }
      .v-image__image.v-image__image--cover {
        background-size: auto;
        background-color: $blue02;
        border-radius: 50%;
      }
    }
  }

  &__about {
    margin-top: 7px;
  }

  &__full-name {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: $blue02;
  }

  &__info {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: $blue02;
  }
}

.sort {
  display: flex;
  align-items: center;

  &__number {
    margin-right: 25px;
  }

  &__alphabet {
    margin-right: 25px;
  }

  &__amplua {
    &::v-deep {
      margin-top: 0px;
      padding-top: 0px;
    }
  }

  &__amplua-radio {
    &::v-deep {
      margin-right: 0px !important;
      padding: 7px 15px;
      border-radius: 14px;
      &.v-item--active {
        background-color: $blue01;
      }
      .v-input--selection-controls__input {
        display: none;
      }
      .v-label {
        svg {
          margin-right: 5px;
        }
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;

        color: #ffffff;
      }
    }
  }
}

.evaluation-form__input {
  &::v-deep {
    max-width: 52px;
    margin: 0 auto;
    padding-top: 0px;
    .v-input__slot {
      &::before,
      &::after {
        display: none;
      }
    }
    .v-text-field__slot {
      input {
        max-height: none;
        padding: 5px;
        font-family: 'FolksBold', serif;
        font-weight: 700;
        font-size: 22px;
        line-height: 38px;
        text-align: center;

        color: $blue02;

        background-color: #ecf6ff;
        border-radius: 8px;
        border: 2px solid transparent;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        -moz-appearance: textfield;

        &:focus {
          border: 2px solid #b9cbe5;
        }
      }
    }
  }
}
</style>
