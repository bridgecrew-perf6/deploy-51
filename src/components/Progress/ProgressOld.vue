<template lang="pug">
  .progress
    v-row
      v-col(md="12")
        .progress__title
          p Прогресс
          p.select За неделю
            img( height='10' width='15'
              src="@/assets/images/arrow-down.svg"
            )
      //v-col(md="6" style="display:flex")
        .progress__data__total
          .progress__data__total__block
            .progress__data__total__block__data(v-for='total in totals')
              .progress__data__total__block__data__text
                .left {{total.title}}
                .right {{total.percent}}
                  .percent %
              ProgressBar(:title="total")
          img(
            :src="totalChertState"
          )

      v-col(md="12" cols="12")
        v-row
          div.stats-component-block(v-for="stats in statistic" style="padding-right:0;")
            StatsComponent(:statsData="stats")


</template>

<script>
import StatsComponent from './StatsComponent'
import ProgressBar from './ProgressBar'
import arrowDown from '@/assets/images/arrow-down.svg'
import mind from './svg/mind.svg'
import body from './svg/body.svg'
import spirit from './svg/spirit.svg'

export default {
  name: 'Progress',
  components: {
    StatsComponent,
    ProgressBar,
    arrowDown,
  },
  data() {
    return {
      totalChertState: './svg/spirit.svg',
      totals: [
        {
          title: 'Дух',
          percent: 95,
          color: '#2ABAF3',
          img: spirit,
        },
        {
          title: 'Тело',
          percent: 86,
          color: '#79C54C',
          img: body,
        },
        {
          title: 'Разум',
          percent: 43,
          color: '#FF4E78',
          img: mind,
        },
      ],
      statistic: [
        {
          title: 'Теория',
          percent: 18,
          color: '#FF4B61',
          path: 'M76 2H116C131.464 2 144 14.536 144 30V70',
        },
        {
          title: 'ОфП',
          percent: 42,
          color: '#FFA217',
          path: 'M76 2H116C131.464 2 144 14.536 144 30V110C144 125.464 131.464 138 116 138H110H93',
        },
        {
          title: 'Психология',
          percent: 53,
          color: '#64C048',
          path: 'M76 2H116C131.464 2 144 14.536 144 30V110C144 125.464 131.464 138 116 138H76H59H42',
        },
        {
          title: 'Техника',
          percent: 74,
          color: '#79C54C',
          path: 'M76 2H116C131.464 2 144 14.536 144 30V110C144 125.464 131.464 138 116 138H76H36C20.536 138 8 125.464 8 110V70',
        },
        {
          title: 'Тактика',
          percent: 96,
          color: '#2ABAF3',
          path: 'M76 2H116C131.464 2 144 14.536 144 30V110C144 125.464 131.464 138 116 138H76H36C20.536 138 8 125.464 8 110V70V30C8 14.536 20.536 2 36 2H42',
        },
        {
          title: '+',
          percent: 0,
          color: '#6E65AE',
          path: '',
        },
      ],
    }
  },
  mounted() {
    let max = 1000
    for (let i = 0; i < this.totals.length; i++) {
      if (this.totals[i].percent < max) {
        max = this.totals[i].percent
        this.totalChertState = this.totals[i].img
        console.log(this.totalChertState)
      }
    }
  },
  methods: {
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      let angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
      }
    },
    // M26 4C32.8317 4 38.9362 7.11399 42.9714 12
    // path(:d="this.describeArc(125, 125, 110, 0, 160)" stroke='#F02B38' stroke-width='7' stroke-linecap='round')
    describeArc(x, y, radius, startAngle, endPoint) {
      const endAngle = (360 * endPoint) / 100
      let start = this.polarToCartesian(x, y, radius, endAngle)
      let end = this.polarToCartesian(x, y, radius, startAngle)
      let largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

      let d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ')

      return d
    },
  },
}
</script>

<style scoped lang="scss">
.stats-component-block {
  width: 136px;
  height: 136px;
  margin: 12px 12px;
}
.select {
  margin: 5px 0 0 10px;
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;
  color: gray;
}

.percent {
  margin: auto 0 5px 0;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
}

.left {
  display: flex;
  margin: auto auto auto 0;
}

.right {
  display: flex;
  margin: 0 0 0 auto;
  font-family: Folks-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
}

.progress {
  height: 100%;
  width: 100%;

  &__title {
    display: flex;
    height: 100%;
    width: 100%;
    margin: 10px 20px;
  }

  &__data {
    display: flex;
    height: 100%;
    width: 100%;
    font-family: Manrope;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 27px;
    color: #30295f;
    &__total {
      height: 100%;
      background: linear-gradient(
          245.99deg,
          rgba(38, 242, 255, 0.83) 10.88%,
          rgba(36, 109, 228, 0.83) 45.81%,
          rgba(124, 8, 126, 0.788455) 71.72%,
          rgba(175, 12, 127, 0.7802) 81.99%,
          rgba(91, 0, 106, 0.83) 94.79%
        ),
        #413a70;
      border-radius: 28px;
      display: flex;
      padding: 14px 28px;
      width: 100%;
      &__shart {
        margin: auto;
        background: #402f56f0;
        color: white;
        padding: 40px 20px;
        border-radius: 100px;
        text-align: center;
        font-weight: 300;
        font-size: 24px;
        line-height: 33px;
        align-items: flex-end;
      }

      &__block {
        height: 50%;
        width: min-content;

        &__data {
          background: rgba(255, 255, 255, 0.1);
          margin: 10px;
          color: white;
          padding: 2px 18px 17px 18px;
          border-radius: 25px;

          &__text {
            display: flex;
          }
        }
      }
    }

    &__stats {
      margin: 10px;

      &__block {
        margin: 0 10px;
        height: fit-content;
      }
    }
  }
}
</style>
