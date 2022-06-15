<template>
  <div class="chart" :class="{ 'chart--tab': inTab }">
    <div class="chart__header">
      <div v-if="!inTab" class="chart__header-select">
        <span class="chart__header-select-color chart__header-select-color_1"></span>
        <v-select
          class="group-list__select chart__select"
          v-model="selectedOne"
          :items="select"
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
      <div v-if="!inTab" class="chart__header-title">сравнить паказатели</div>
      <div class="chart__header-select">
        <span class="chart__header-select-color chart__header-select-color_2"></span>
        <v-select
          class="group-list__select chart__select"
          v-model="selectedTwo"
          :items="select"
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

      <v-select
        v-if="inTab"
        class="group-list__select chart__select chart__select--period"
        v-model="selectedPeriod"
        :items="selectPeriod"
        item-text="title"
        item-value="id"
        single-line
        hide-details
        flat
        :menu-props="{
          contentClass: 'group-list__menu',
          nudgeBottom: 32,
          maxWidth: 250,
        }"
      >
      </v-select>
    </div>
    <div class="chart__content">
      <div class="chart__arrow">
        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.43953 0.43934C8.85374 -0.146447 7.904 -0.146447 7.31821 0.43934L0.795508 6.96204C0.66747 7.03019 0.547232 7.11821 0.43934 7.2261C-0.146447 7.81189 -0.146447 8.76164 0.43934 9.34742L7.27202 16.1801C7.85781 16.7659 8.80756 16.7659 9.39334 16.1801C9.97913 15.5943 9.97913 14.6446 9.39334 14.0588L3.66737 8.33282L9.43953 2.56066C10.0253 1.97487 10.0253 1.02513 9.43953 0.43934Z"
            fill="#95B0DA"
          />
        </svg>
      </div>

      <div class="chart__chart">
        <div class="chart__chart-group" v-for="(col, index) in chart.columns" :key="index">
          <div class="chart__chart-col chart__chart-col_1" :style="{ height: `${col[0]}%` }"></div>

          <div class="chart__chart-col chart__chart-col_2" :style="{ height: `${col[1]}%` }"></div>
        </div>
      </div>

      <div class="chart__arrow">
        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.439375 16.3458C1.02516 16.9316 1.97491 16.9316 2.5607 16.3458L9.0834 9.82311C9.21144 9.75496 9.33167 9.66695 9.43957 9.55905C10.0254 8.97327 10.0254 8.02352 9.43957 7.43773L2.60688 0.605052C2.0211 0.0192649 1.07135 0.019265 0.485563 0.605052C-0.100224 1.19084 -0.100224 2.14058 0.485563 2.72637L6.21153 8.45234L0.439375 14.2245C-0.146411 14.8103 -0.146411 15.76 0.439375 16.3458Z"
            fill="#95B0DA"
          />
        </svg>
      </div>
    </div>
    <div v-if="inTab" class="chart__legend">
      <p v-for="(legend, index) in chart.legend" :key="index" class="chart__legend-text">{{ legend }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColChart',
  props: {
    inTab: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedOne: 1,
      selectedTwo: 2,
      selectedPeriod: 1,
      select: [
        {
          id: 1,
          title: 'Техника',
        },
        {
          id: 2,
          title: 'Шагомер',
        },
      ],
      selectPeriod: [
        {
          id: 1,
          title: 'Сравнить с прошлой неделей',
        },
      ],
      chart: {
        columns: [
          [93, 45],
          [80, 65],
          [30, 65],
          [60, 45],
          [80, 65],
          [30, 65],
          [80, 65],
        ],
        legend: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
      },
    }
  },
}
</script>

<style scoped lang="scss">
.chart {
  position: relative;
  width: 100%;
  height: 283px;
  padding: 26px 20px 50px 28px;
  border-radius: 28px;
  background-color: #fff;
  box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  &--tab {
    background-color: transparent;
    box-shadow: none;
    .chart__chart {
      border-bottom: 1px solid #525bba;
    }
    .chart__chart-col {
      &_1 {
        background: linear-gradient(0deg, #464ea3 0%, #333876 100%);
      }
      &_2 {
      }
    }
    .chart__select {
      &::v-deep {
        .group-list__select-title {
          font-weight: 400;
          font-size: 14px;
          line-height: 19px;
          color: #fff;
        }
      }
    }
  }

  &__select {
    width: 93px;
    max-width: 100px;
    height: 28px;
    margin-left: 13px;

    &::v-deep {
      .group-list__select-title {
        color: $blue02;
        font-size: 16px;
        font-weight: 500;

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
    &--period {
      width: 240px;
      max-width: none;
      &::v-deep {
        .v-select__selection {
          color: #fff !important;
        }
      }
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__header-title {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: #8085bb;
    font-size: 14px;
  }

  &__header-select {
    display: flex;
    align-items: center;
  }

  &__header-select-color {
    display: block;
    width: 24px;
    height: 24px;
    margin-top: 5px;
    border-radius: 4px;

    &_1 {
      background-color: #d77ded;
    }

    &_2 {
      background-color: #68d4d8;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__arrow {
    margin-top: 85px;
    cursor: pointer;
  }

  &__chart {
    width: calc(100% - 24px);
    height: 170px;
    padding: 0 20px;
    margin-top: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__chart-group {
    height: 100%;
    display: flex;
    align-items: flex-end;
  }

  &__chart-col {
    width: 15.7px;
    border-radius: 8px 8px 0px 0px;

    &_1 {
      background: linear-gradient(180deg, #9c7af5 0%, #f680e9 100%);
    }

    &_2 {
      background: linear-gradient(180deg, #83e3d2 0%, #1ba8e9 100%);
    }
  }

  &__legend {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 7px;
    padding: 0 10px;
  }

  &__legend-text {
    flex: 0 0 calc(100% / 7);
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
  }
}
</style>
