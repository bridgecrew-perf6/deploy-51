<template>
  <div class="progress">
    <div class="progress__header">
      <div class="progress__title">Прогресс</div>
     <!--<wu-select-period @change="changePeriod"/>-->
    </div>
    <div class="progress__block">
      <div class="progress__chart">
        <div class="progress__chart-days">
          <div class="progress__chart-day">
            <p class="progress__chart-day-title">Понедельник</p>
            <div class="progress__chart-day-stat"
                 :style="{color: colors(increasement.monday)}">
              <div class="progress__chart-day-arrow">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M9.34507 4.29104L5.73675 0.70157C5.34665 0.313511 4.71634 0.313511 4.32624 0.701571L0.717927 4.29104C0.0854199 4.92025 0.531015 6 1.42318 6L8.63982 6C9.53198 6 9.97758 4.92025 9.34507 4.29104Z"
                      :fill="colors(increasement.monday)"/>
                </svg>
              </div>
              <div class="progress__chart-day-num">{{increasement.monday}} <span>%</span></div>
            </div>
          </div>
          <div class="progress__chart-day">
            <p class="progress__chart-day-title">Вторник</p>
            <div class="progress__chart-day-stat"
                 :style="{color: colors(increasement.tuesday)}">
              <div class="progress__chart-day-arrow">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M9.34507 4.29104L5.73675 0.70157C5.34665 0.313511 4.71634 0.313511 4.32624 0.701571L0.717927 4.29104C0.0854199 4.92025 0.531015 6 1.42318 6L8.63982 6C9.53198 6 9.97758 4.92025 9.34507 4.29104Z"
                      :fill="colors(increasement.tuesday)"/>
                </svg>
              </div>
              <div class="progress__chart-day-num">{{increasement.tuesday}} <span>%</span></div>
            </div>
          </div>
          <div class="progress__chart-day">
            <p class="progress__chart-day-title">Среда</p>
            <div class="progress__chart-day-stat"
                 :style="{color: colors(increasement.wednesday)}">
              <div class="progress__chart-day-arrow">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M9.34507 4.29104L5.73675 0.70157C5.34665 0.313511 4.71634 0.313511 4.32624 0.701571L0.717927 4.29104C0.0854199 4.92025 0.531015 6 1.42318 6L8.63982 6C9.53198 6 9.97758 4.92025 9.34507 4.29104Z"
                      :fill="colors(increasement.wednesday)"/>
                </svg>
              </div>
              <div class="progress__chart-day-num">{{increasement.wednesday}} <span>%</span></div>
            </div>
          </div>
          <div class="progress__chart-day">
            <p class="progress__chart-day-title">Четверг</p>
            <div class="progress__chart-day-stat"
                 :style="{color: colors(increasement.thursday)}">
              <div class="progress__chart-day-arrow">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M9.34507 4.29104L5.73675 0.70157C5.34665 0.313511 4.71634 0.313511 4.32624 0.701571L0.717927 4.29104C0.0854199 4.92025 0.531015 6 1.42318 6L8.63982 6C9.53198 6 9.97758 4.92025 9.34507 4.29104Z"
                      :fill="colors(increasement.thursday)"/>
                </svg>
              </div>
              <div class="progress__chart-day-num">{{increasement.thursday}} <span>%</span></div>
            </div>
          </div>
          <div class="progress__chart-day">
            <p class="progress__chart-day-title">Пятница</p>
            <div class="progress__chart-day-stat"
                 :style="{color: colors(increasement.friday)}">
              <div class="progress__chart-day-arrow">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M9.34507 4.29104L5.73675 0.70157C5.34665 0.313511 4.71634 0.313511 4.32624 0.701571L0.717927 4.29104C0.0854199 4.92025 0.531015 6 1.42318 6L8.63982 6C9.53198 6 9.97758 4.92025 9.34507 4.29104Z"
                      :fill="colors(increasement.friday)"/>
                </svg>
              </div>
              <div class="progress__chart-day-num">{{increasement.friday}} <span>%</span></div>
            </div>
          </div>
          <div class="progress__chart-day">
            <p class="progress__chart-day-title">Суббота</p>
            <div class="progress__chart-day-stat"
                 :style="{color: colors(increasement.saturday)}">
              <div class="progress__chart-day-arrow">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M9.34507 4.29104L5.73675 0.70157C5.34665 0.313511 4.71634 0.313511 4.32624 0.701571L0.717927 4.29104C0.0854199 4.92025 0.531015 6 1.42318 6L8.63982 6C9.53198 6 9.97758 4.92025 9.34507 4.29104Z"
                      :fill="colors(increasement.saturday)"/>
                </svg>
              </div>
              <div class="progress__chart-day-num">{{increasement.saturday}} <span>%</span></div>
            </div>
          </div>
          <div class="progress__chart-day">
            <p class="progress__chart-day-title">Воскресение</p>
            <div class="progress__chart-day-stat"
                 :style="{color: colors(increasement.sunday)}">
              <div class="progress__chart-day-arrow">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M9.34507 4.29104L5.73675 0.70157C5.34665 0.313511 4.71634 0.313511 4.32624 0.701571L0.717927 4.29104C0.0854199 4.92025 0.531015 6 1.42318 6L8.63982 6C9.53198 6 9.97758 4.92025 9.34507 4.29104Z"
                      :fill="colors(increasement.sunday)"/>
                </svg>
              </div>
              <div class="progress__chart-day-num">{{increasement.sunday}} <span>%</span></div>
            </div>
          </div>
        </div>
        <div class="progress__chart-canvas">
          <canvas id="sparkline" height="65" style="width: 100%"></canvas>
        </div>
      </div>
      <div class="progress__stats">
        <stats-block title="ОФП" :percent="statistics.physical" />
        <stats-block title="Теория" :percent="statistics.theoretic" />
        <stats-block title="Тактика" :percent="statistics.tactical" />
        <stats-block title="Техника" :percent="statistics.technical" />
        <stats-block title="Игра" :percent="statistics.game" />
        <stats-block title="Психология" :percent="statistics.psychological" />
      </div>
    </div>
  </div>
</template>

<script>
import StatsComponent from "@/components/Progress/StatsComponent";
import {mapActions, mapGetters} from 'vuex'
import {Chart, registerables} from 'chart.js'
import StatsBlock from './StatsBlock'

Chart.register(...registerables)

export default {
  name: 'Progress',
  components: {
    StatsComponent,
    StatsBlock
  },
  props: {
    statistics: Object,
    increasement: Object,
    chartStatistics: Object
  },
  data() {
    return {
      chart: null,
      periods: [
        {
          label: 'Понедельник',
          count: 10,
          achievement: 17
        },
        {
          label: 'Вторник',
          count: 1,
          achievement: 7
        },
        {
          label: 'Среда',
          count: 5,
          achievement: 2
        },
        {
          label: 'Четверг',
          count: 8,
          achievement: 8
        },
        {
          label: 'Пятница',
          count: 3,
          achievement: 14
        },
        {
          label: 'Суббота',
          count: 8,
          achievement: 4
        },
        {
          label: 'Воскресенье',
          count: 10,
          achievement: 0
        },
      ],
    }
  },
  computed: {
    valueSparkline() {
      return this.periods.map(period => period.count)
    },
    labelsSparkline() {
      return this.periods.map(period => period.label)
    }
  },
  mounted() {
    this.createPeriods()
    this.initChart()
  },
  methods: {
    colors(num) {
      if (num < 4) return '#FF4B6B'
      if (num < 7) return '#FFA217'
      if (num <= 10) return '#64C048'
      if (num > 10) return '#2ABAF3'
    },
    createPeriods() {
      this.periods[0].count = this.chartStatistics.monday
      this.periods[1].count = this.chartStatistics.tuesday
      this.periods[2].count = this.chartStatistics.wednesday
      this.periods[3].count = this.chartStatistics.tuesday
      this.periods[4].count = this.chartStatistics.friday
      this.periods[5].count = this.chartStatistics.saturday
      this.periods[6].count = this.chartStatistics.sunday

      console.log(this.chartStatistics)
    },
    initChart() {
      let canvas = document.getElementById('sparkline')
      let context = canvas.getContext('2d')

      let gradientBorder = context.createLinearGradient(0, 0, 0, 65)
      gradientBorder.addColorStop(0, '#FF4B6B')
      gradientBorder.addColorStop(0.5, '#FFA217')
      gradientBorder.addColorStop(1, '#64C048')

      let gradientBackground = context.createLinearGradient(0, 0, 0, 65)
      gradientBackground.addColorStop(0, 'rgba(255, 75, 107, 0.3)')
      gradientBackground.addColorStop(0.5, 'rgba(255, 162, 23, 0.2)')
      gradientBackground.addColorStop(1, 'rgba(100, 192, 72, 0.1)')

      const totalDuration = 700
      const delayBetweenPoints = totalDuration / this.valueSparkline.length

      this.chart = new Chart(canvas, {
        type: 'line',
        data: {
          labels: this.labelsSparkline,
          datasets: [
            {
              borderColor: gradientBorder,
              data: this.valueSparkline,
              lineTension: 0.3,
              fill: true,
              backgroundColor: gradientBackground,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
            tooltip: {
              display: false,
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
          responsive: true,
        },
      })
    },
    changePeriod(period) {
      console.log(period)
    }
  }
}
</script>

<style scoped lang="scss">
.progress {
  &__header {
    margin-left: 20px;
    display: flex;
    align-items: center;
  }

  &__title {
    color: $blue02;
    font-size: 20px;
    font-weight: 400;
  }

  &__block {
    width: 100%;
    height: 301px;
    margin-top: 12px;
    border-radius: 28px;
    background-color: $blue02;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    overflow: hidden;
  }

  &__chart {
    position: relative;
    height: 113px;
  }

  &__chart-days {
    padding: 15px 22px 16px 15px;
    display: flex;
    justify-content: space-between;
  }

  &__chart-day {
    width: 120px;
    height: 78px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
      border-right: 1px solid #36427D;
    }
  }

  &__chart-day-title {
    color: #ECF6FF;
    font-size: 12px;
  }

  &__chart-day-stat {
    margin-top: 5px;
    display: flex;
    align-items: center;
    color: #2ABAF3;
  }

  &__chart-day-arrow {
    margin-bottom: 3px;
  }

  &__chart-day-num {
    margin-left: 6px;
    font-size: 24px;
    font-weight: 700;

    span {
      margin-left: -4px;
      font-size: 14px;
      font-weight: 400;
    }
  }

  &__chart-canvas {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &__stats {
    width: 100%;
    height: 188px;
    padding: 0 24px;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $blue03;
  }
}
</style>
