<template>
  <div class="schedule-header">
    <v-row justify="space-between">
      <v-col class="d-flex align-center" md="6">
        <h2 class="h2 schedule-header__title">{{ title }}</h2>

        <wu-select-period v-model="per" @change="changeView" :period="per" />

        <div v-if="isViewYear" class="years-nav">
          <button @click="handlePrev($event)" class="years-nav__prev">
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.502.439a1.498 1.498 0 0 0-2.119 0L.44 5.383A1.494 1.494 0 0 0 0 6.467c-.007.392.14.786.439 1.085l4.944 4.945a1.498 1.498 0 1 0 2.12-2.12l-3.91-3.91 3.91-3.91a1.498 1.498 0 0 0 0-2.118Z"
                fill="#95B0DA"
              />
            </svg>
          </button>
          <span class="years-nav__current">{{ selectedYear }}</span>
          <button @click="handleNext($event)" class="years-nav__next">
            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.274.439a1.498 1.498 0 0 1 2.119 0l4.945 4.944c.299.3.445.693.438 1.085.006.392-.14.786-.439 1.084l-4.944 4.945a1.498 1.498 0 1 1-2.119-2.12l3.91-3.91-3.91-3.91a1.498 1.498 0 0 1 0-2.118Z"
                fill="#95B0DA"
              />
            </svg>
          </button>
        </div>
      </v-col>
      <v-col v-if="!isViewYear" cols="3" class="d-flex justify-end">
        <base-button class="schedule-header__create-btn" @click="dialogEvent = true" label="+ Добавить событие" />
      </v-col>
      <v-col v-else cols="6" class="d-flex justify-end">
        <wu-button class="schedule-header__create-btn" label="Создать УТП" :to="{ name: 'SeasonTrainingPlanCreate' }" />
      </v-col>
    </v-row>
    <ModalTrainerNewEvent :visible="dialogEvent" @close="dialogEvent = false" v-if="dialogEvent"></ModalTrainerNewEvent>
  </div>
</template>

<script>
import ModalTrainerNewEvent from '@/components/modals/ModalTrainerNewEvent.vue'
export default {
  components: { ModalTrainerNewEvent },
  name: 'CalendarHeader',
  props: {
    title: {
      type: String,
      default: '',
    },
    initDay: {
      type: Date,
    },
  },
  data() {
    return {
      per: 'month',
      dialogEvent: false,
    }
  },
  computed: {
    isViewYear() {
      return this.$route.name === 'CalendarYear'
    },
    selectedYear() {
      return this.$moment(this.initDay).startOf('year').format('YYYY')
    },
  },
  watch: {
    '$route.name': {
      handler: function (route) {
        if (route === 'CalendarDay') this.per = 'day'
        else if (route === 'CalendarYear') this.per = 'year'
        else if (route === 'CalendarMonth') this.per = 'month'
        else if (route === 'CalendarWeek') this.per = 'week'
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    handleNext: function () {
      this.$emit('next')
    },
    handlePrev: function () {
      this.$emit('prev')
    },
    changeView(sel) {
      this.$router.push({ path: `/schedule/${sel}` })
    },
  },
  mounted() {
    if (this.per) {
      let route = `/schedule/${this.per}`
      if (this.$router.currentRoute.fullPath !== route) this.$router.push(`/schedule/${this.per}`)
    }
  },
}
</script>

<style lang="scss" scoped>
.select-period__menu {
  .v-select-list {
    padding: 0px;
    box-shadow: none;
    background-color: transparent;
    &::v-deep {
      .v-list-item {
        padding: 0 10px;
        min-height: auto;
        &.v-list-item--active {
          &::before {
            background-color: transparent;
          }
          .v-list-item__title {
            color: $blue02;
          }
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

.schedule-header__select {
  width: 100%;
  display: inline-block;
  max-width: 102px;
  &.v-select--is-menu-active {
    background-color: #fbfbfe;
    border-radius: 4px 4px 0 0;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  }
}

.schedule-header {
  margin-bottom: 16px;
}

.schedule-header__title {
  display: inline-block;
  margin-right: 3px;
  font-weight: 500;

  color: $blue02;
}

.years-nav {
  margin-left: 15px;

  &__current {
    margin: 0 10px;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: $blue02;
  }
}
</style>
