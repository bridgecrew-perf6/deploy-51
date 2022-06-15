<template>
  <section>
    <div class="d-flex justify-space-between align-center">
      <h2 class="section-title">Ближайшие события</h2>
    </div>

    <section ref="dashEventsCarousel" class="dashboard-event__card-wrapper">
      <div class="dashboard-event__card" v-for="event in events" :key="event.id">
        <div class="dashboard-event__date" :class="isToday(event.date)">{{ headerEventDateFormat(event.date) }}</div>
        <div class="dashboard-event__card-inner">
          <div class="dashboard-event__content">
            <div class="dashboard-event__head">
              <span class="dashboard-event__time"> {{ event.timeFrom }} - {{ event.timeTo }} </span>

              <div
                class="dashboard-event__workload-icon"
                :class="[
                  { 'workload-icon-high': event.workload === 4 },
                  { 'workload-icon-middle': event.workload < 4 && event.workload > 1 },
                  { 'workload-icon-low': event.workload === 1 },
                ]"
              ></div>
            </div>
            <div class="dashboard-event__text">
              <p class="dashboard-event__group-place">
                <span class="dashboard-event__group">{{ event.group }}</span>
                <span class="dashboard-event__place">{{ event.place }}</span>
              </p>
              <div v-if="event.type == 'Матч'"></div>
              <div class="dashboard-event__type-title">{{ event.type }}: {{ event.title }}</div>
            </div>
          </div>
          <div class="dashboard-event__reminder">
            Напомнить?
            <div class="dashboard-event__reminder-list">
              <wu-button class="dashboard-event__reminder-button" dark label="1 день"></wu-button>
              <wu-button class="dashboard-event__reminder-button" dark label="60 мин"></wu-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import moment from 'moment'
import Flickity from 'flickity'

export default {
  data() {
    return {
      events: [
        {
          id: 1,
          date: moment(),
          timeFrom: '11:00',
          timeTo: '13:00',
          typeOfPreparation: '1',
          exercisePlaygrounds: '',
          workload: 1,
          type: 'Практическое занятие',

          group: 'НП-1',
          title: 'Групповое тестирование',
          coach: 1,
          place: 'Зал: ОФП',
        },
        {
          id: 2,
          date: moment().add(1, 'days'),
          timeFrom: '11:00',
          timeTo: '13:00',
          typeOfPreparation: '1',
          exercisePlaygrounds: '',
          workload: 2,
          type: 'Практическое занятие',

          group: 'НП-1',
          title: 'Групповое тестирование',
          coach: 1,
          place: 'Зал: ОФП',
        },
        {
          id: 3,
          date: moment().add(1, 'days'),
          timeFrom: '11:00',
          timeTo: '13:00',
          typeOfPreparation: '1',
          exercisePlaygrounds: '',
          workload: 3,
          type: 'Практическое занятие',

          group: 'НП-1',
          title: 'Групповое тестирование',
          coach: 1,
          place: 'Зал: ОФП',
        },
        {
          id: 4,
          date: moment().add(2, 'days'),
          timeFrom: '11:00',
          timeTo: '13:00',
          typeOfPreparation: '1',
          exercisePlaygrounds: '',
          workload: 4,
          type: 'Практическое занятие',

          group: 'НП-1',
          title: 'Групповое тестирование',
          coach: 1,
          place: 'Зал: ОФП',
        },
      ],
    }
  },
  methods: {
    headerEventDateFormat(dateString) {
      return moment().date() === moment(dateString).date()
        ? moment(dateString).locale('ru').format('СЕГОДНЯ: DD MMMM dd')
        : moment(dateString).locale('ru').format('DD MMMM / dddd')
    },
    isToday(dateString) {
      return moment().date() === moment(dateString).date() ? 'dashboard-event__date--today' : ''
    },
    initCarousel() {
      new Flickity(this.$refs.dashEventsCarousel, {
        prevNextButtons: false,
        pageDots: false,
        freeScroll: false,
        freeScrollFriction: 0.3,
        dragThreshold: 10,
        groupCells: 1,
        draggable: '>3',
        cellAlign: 'left',
        contain: true,
        percentPosition: false,
        resize: true,
        watchCSS: false,
        on: {
          scroll: function (event, progress) {
            if (Math.round(progress) > 0) {
              if (!this.element.classList.contains('dashboard-event__card-wrapper--start'))
                this.element.classList.add('dashboard-event__card-wrapper--start')
            } else this.element.classList.remove('dashboard-event__card-wrapper--start')

            if (Math.round(progress) < Math.round(this.slidesWidth)) {
              if (!this.element.classList.contains('dashboard-event__card-wrapper--end'))
                this.element.classList.add('dashboard-event__card-wrapper--end')
            } else this.element.classList.remove('dashboard-event__card-wrapper--end')
          },
        },
      })
    },
  },

  mounted() {
    this.initCarousel()
  },
}
</script>

<style lang="scss" scoped>
@import '~flickity/dist/flickity.min.css';

.section-title {
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 27px;
  color: $blue02;
}
.dashboard-event {
  &__card-wrapper {
    position: relative;
    margin-bottom: 15px;
    z-index: 0;
    &::after,
    &::before {
      display: none;
      content: '';
      position: absolute;
      top: 0px;
      width: 20px;
      height: 100%;
      background: linear-gradient(269.64deg, #f8f8ff 0.29%, #f8f8ff 0.3%, rgba(248, 248, 255, 0) 99.66%);
      z-index: 100;
    }
    &--start {
      &::after {
        display: block;
        left: 0px;
        transform: rotate(-180deg);
      }
    }
    &--end {
      &::before {
        display: block;
        right: 0px;
      }
    }
  }

  &__card {
    margin-right: 16px;
    &:last-child {
      margin-right: 0px;
    }
  }

  &__card-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 197px;
    background: $blue02;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    border-radius: 28px;
    user-select: none;
  }

  &__date {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: $blue05;
  }

  &__date--today {
    color: $blue02;
  }

  &__content {
    height: 80%;
    position: relative;
    top: -1px;
    left: -1px;
    width: calc(100% + 1px);
    z-index: 2;
    background: #fff;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  &__time {
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: $blue02;
  }

  &__workload-icon {
    width: 35px;
    height: 21px;
    background-image: url('~@/assets/images/svg/workload/medium.svg');
  }

  &__text {
    font-size: 14px;
    line-height: 19px;
    color: $blue02;
    letter-spacing: 0.02em;
  }

  &__group-place {
    font-size: 14px;
    line-height: 19px;
  }

  &__group {
    margin-right: 7px;
    font-weight: 700;
    letter-spacing: 0.02em;

    color: $blue03;
  }

  &__type-title {
    font-size: 14px;
    line-height: 20px;

    color: $blue03;
  }

  &__reminder {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 100%;
    padding: 0 24px;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    color: $blue06;
  }

  &__reminder-list {
    margin-left: 12px;
    display: flex;
  }

  &__reminder-button {
    margin-right: 8px;
    &:last-child {
      margin-right: 0px;
    }
  }
}
</style>
