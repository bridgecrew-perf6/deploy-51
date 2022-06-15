<template>
  <div class="d-flex">
    <left-menu>
      <div class="training-plan-calendar__menu-inner">
        <v-radio-group v-model="currentEventType" class="training-plan-calendar__radio-group">
          <template v-slot:label>
            <p class="training-plan-calendar__radio-group-label">Отметить событие</p>
          </template>
          <v-radio
            class="training-plan-calendar__radio-event"
            v-for="(event, index) in typeEvent"
            :key="index"
            :value="event.label"
            :color="event.color"
            :ripple="false"
          >
            <template v-slot:label>
              <p class="training-plan-calendar__radio-label">
                <span class="training-plan-calendar__radio-color" :style="`background-color: ${event.color}`"></span>
                {{ event.label }}
              </p>
            </template>
          </v-radio>
        </v-radio-group>
      </div>
    </left-menu>

    <div class="container">
      <Header />

      <div class="section-title--create d-flex align-center justify-space-between mb-8">
        <div class="d-flex align-center">
          <wu-icon icon="education" class="mr-3" />
          <h2 class="h2">Создание годового учебно-тренировочного плана</h2>
        </div>

        <base-button label="Задать цели на сезон" @click="nextStep($event)" />
      </div>

      <section class="training-plan-year__info">
        <p class="training-plan-year__info-title">Данные группы</p>

        <div class="training-plan-year__info-form">
          <select-group class="training-plan-year__info-group" :value="localGroup.name" />

          <div class="training-plan-year__info-season-dates">
            <div class="training-plan-year__info-season-start">
              <label class="training-plan-year__info-label">Начало сезона</label>
              <v-text-field
                v-model="localGroup.startSeason"
                class="training-plan-year__info-input"
                height="auto"
                flat
                hide-details
                v-mask="'##.##.####'"
                placeholder="__ . __ . ____"
                :error="errorStartDate"
              >
              </v-text-field>
            </div>
            <span class="training-plan-year__info-season-separator"></span>
            <div class="training-plan-year__info-season-end">
              <label class="training-plan-year__info-label">Окончание сезона</label>
              <v-text-field
                v-model="localGroup.endSeason"
                class="training-plan-year__info-input"
                height="auto"
                flat
                hide-details
                v-mask="'##.##.####'"
                placeholder="__ . __ . ____"
                :error="errorEndDate"
              >
              </v-text-field>
            </div>
            <p v-if="errorEndDate || errorStartDate" class="training-plan-year__info-season-error">
              Неверный формат даты
            </p>
          </div>
        </div>
      </section>

      <section class="training-plan-year__calendar">
        <div class="training-plan-year__calendar-header">
          <p class="training-plan-year__calendar-title">События сезона</p>

          <wu-alert type="error"> Рекомендуем запланировать события в календаре перед созданием УТП </wu-alert>
        </div>
        <v-card class="training-plan-year__card mb-10 mt-6">
          <vc-date-picker
            :value="selectedDates"
            v-model="selectedDates"
            :attributes="days"
            transition="slide-v"
            :rows="3"
            :columns="4"
            is-expanded
            is-range
            title-position="left"
            :masks="masksCalendar"
            :from-date="fromDate"
            :select-attribute="attribute"
            :drag-attribute="attribute"
          >
            <template slot="header-title" slot-scope="props">
              {{ props.monthLabel }}, {{ props.shortYearLabel }}
            </template>
          </vc-date-picker>
        </v-card>
      </section>
    </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import moment from 'moment'
import SelectGroup from '@/components/SelectGroup.vue'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'

export default {
  directives: { mask },
  props: {
    group: {
      type: Object,
    },
  },
  data() {
    return {
      typeEvent: [
        { label: 'Матчи', color: '#EE1A40' },
        { label: 'Медицинское обследование', color: '#2ABAF3' },
        { label: 'Родительское собрание', color: '#ACA3DD' },
        { label: 'Командные активности', color: '#64C048' },
        { label: 'Контрольные нормативы', color: '#FF4E78' },
        { label: 'Турнир', color: '#FFBD5A' },
        { label: 'Каникулы', color: '#525BBA' },
        { label: 'Сборы', color: '#36427D' },
      ],
      masksCalendar: {
        weekdays: 'WW',
      },
      selectedDates: null,

      attribute: {
        /* highlight: {
          start: {
            style: {
              backgroundColor: '#3dafcc', // blue
            },
            contentStyle: {
              color: '#ffffff', // color of the text
            },
          },
          base: {
            style: {
              backgroundColor: '#D3EAF1', // light blue
            },
          },
          end: {
            style: {
              backgroundColor: '#3dafcc', // blue
            },
            contentStyle: {
              color: '#ffffff', // color of the text
            },
          },
        }, */
      },

      days: [],
      currentEventType: null,
      errorStartDate: false,
      errorEndDate: false,
    }
  },
  components: { LeftMenu, Header, SelectGroup },
  watch: {
    currentEventType: function (eventType) {
      this.selectedDates = null
      let color = this.typeEvent.find(event => event.label === eventType).color

      this.attribute = {
        highlight: {
          start: {
            style: {
              backgroundColor: color,
            },
            contentStyle: {
              color: '#ffffff',
            },
          },
          base: {
            style: {
              backgroundColor: color + '33',
            },
          },
          end: {
            style: {
              backgroundColor: color,
            },
            contentStyle: {
              color: '#ffffff',
            },
          },
        },
      }
    },
    selectedDates: {
      handler: function (days) {
        if (days) {
          if (this.currentEventType) {
            let event = this.typeEvent.find(event => event.label === this.currentEventType),
              color = event.color

            let newDay = {
              highlight: {
                start: {
                  fillMode: 'solid',
                  style: {
                    background: color,
                  },
                },
                base: {
                  fillMode: 'light',
                  style: {
                    background: color + '33',
                  },
                },
                end: {
                  fillMode: 'solid',
                  style: {
                    background: color,
                  },
                },
              },
              popover: {
                label: event.label,
              },
              order: ++this.days.length,
            }

            newDay.dates = {
              start: this.selectedDates.start,
              end: this.selectedDates.end,
            }

            this.days.push(newDay)
          }
        }
      },
      deep: true,
    },
  },
  computed: {
    localGroup: {
      get() {
        return this.group
      },
      set(val) {
        this.$emit('changeGroup', val)
      },
    },
    dates() {
      return this.days.map(day => day.date)
    },
    events() {
      return this.dates.map(date => ({
        highlight: {
          fillMode: 'solid',
          style: {
            background: 'purple',
          },
        },
        dates: date,
      }))
    },
    fromDate: function () {
      return moment().startOf('year').toDate()
    },
  },
  methods: {
    nextStep() {
      let start = moment(this.localGroup.startSeason, 'DD.MM.YYYY'),
        end = moment(this.localGroup.endSeason, 'DD.MM.YYYY')

      this.errorStartDate = !start.isValid()
      this.errorEndDate = !end.isValid()

      if (start.isValid() && end.isValid()) this.$emit('nextStep', this.group)
    },
  },
  mounted() {
    this.localGroup.startSeason = '12.07.2021'
    this.localGroup.endSeason = '10.07.2022'
  },
}
</script>

<style lang="scss" scoped>
.section-title--create {
  h2 {
    font-weight: normal;
    color: $blue02;
  }
}

.training-plan-calendar {
  &__radio-group {
    &::v-deep {
      margin: 0px;
      .v-label {
        padding: 0px;
      }
    }
  }

  &__radio-group-label {
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 27px;
    color: $blue02;
  }

  &__radio-event {
    &::v-deep {
      padding: 16px;
      border: 2px solid #ecf6ff;
      border-radius: 12px;
      .v-label {
        font-size: 16px;
        line-height: 20px;
        color: $blue02;
        .v-icon {
          display: none;
        }
      }
      .v-input--selection-controls__input {
        margin-right: 0px;
        display: none;
      }
      .training-plan-calendar__radio-color {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 15px;
        border-radius: 4px;
        vertical-align: sub;
      }
      &.v-item--active {
        border-color: #95b0da;
      }
    }
  }
}

.training-plan-year {
  &__info {
    margin-bottom: 60px;
  }

  &__info-title {
    margin-bottom: 10px;
    padding-left: 25px;
    font-size: 20px;
    line-height: 27px;

    color: $blue02;
  }

  &__info-form {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px 23px;
    background-color: #ffffff;

    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    border-radius: 12px;
  }

  &__info-label {
    margin-bottom: 2px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;

    color: $blue02;
  }

  &__info-input {
    &::v-deep {
      margin-top: 0px;
      padding-top: 0px;
      background-color: #ffffff;
      border: 1px solid #ecf6ff;
      border-radius: 4px;
      .v-input__slot {
        &::before,
        &::after {
          display: none;
        }
        input {
          padding: 0px 10px;
          font-size: 14px;
          line-height: 32px;
          color: $blue02;
        }
      }
      &.v-input--is-focused {
        border-color: $blue02;
      }
      &.error--text {
        border-color: $terrible;
      }
    }
  }

  &__info-season-error {
    width: 100%;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    color: $terrible;
  }

  &__info-season-dates {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  &__info-season-start,
  &__info-season-end {
    max-width: 115px;
  }

  &__info-season-separator {
    position: relative;
    bottom: 15px;
    display: inline-block;
    margin: 0 4px;
    width: 16px;
    height: 1px;
    background-color: #dce5f2;
  }

  &__info-group {
    max-width: 320px;
    width: 100%;
  }
}

.training-plan-year {
  &__calendar-header {
    display: flex;
    justify-content: space-between;
  }

  &__calendar-title {
    padding-left: 25px;
    font-size: 20px;
    line-height: 27px;

    color: $blue02;
  }

  &__card {
    &::v-deep {
      box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15) !important;
      border-radius: 28px;
    }
    .vc-container {
      &::v-deep {
        padding: 21px 21px 6px;
        box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
        border-radius: 28px;
        .vc-arrows-container {
          display: none;
        }
        .vc-pane-layout {
          gap: 20px;
        }
        .vc-header {
          padding: 0px;
          padding-left: 10px;
        }
        .vc-title {
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          color: $blue02;
          text-transform: capitalize;
        }
        .vc-pane {
          min-width: auto;
          max-width: 315px;
          margin-bottom: 15px;
        }
        .vc-weeks {
          min-width: auto;
          padding: 0px;
        }
        .vc-weekday {
          max-width: 40px;
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;

          color: $blue01;
          &:nth-child(6),
          &:nth-child(7) {
            color: $terrible;
          }
        }
        .vc-day {
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;

          color: $blue01;
          &.weekday-position-6,
          &.weekday-position-7 {
            color: $terrible;
          }
          &.is-not-in-month {
            .vc-day-layer {
              display: none;
            }
            span {
              opacity: 1;
              color: $blue06 !important;
            }
          }
        }
      }
    }
  }
}

.menu-select {
  .v-select-list {
    padding: 0px;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    background-color: #fff;

    &::v-deep {
      .v-ripple__container {
        display: none;
      }
      .v-list-item--link {
        padding: 10px 13px;
        min-height: auto;
        position: relative;

        &::before {
          background-color: transparent;
          opacity: 1;
        }

        &.v-list-item--active {
          .v-list-item__title {
            color: $blue02;
          }
        }

        &::after {
          display: none;
        }

        &:hover {
          &::before {
            background-color: #ecf6ff;
            transition: none;
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
</style>
