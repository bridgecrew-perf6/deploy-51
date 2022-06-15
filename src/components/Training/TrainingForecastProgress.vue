<template>
  <section class="forecast-progress">
    <div class="forecast-progress__header">
      <div class="forecast-progress__tip">
        <span class="forecast-progress__tip-square"></span>
        <p class="forecast-progress__tip-text">Не меняя план тренировки, достигнете цели в нужный срок</p>
      </div>
      <div class="forecast-progress__forecast">
        <p class="forecast-progress__forecast-text">Общий прогноз</p>
        <p class="forecast-progress__forecast-percent-num">
          <svg
            v-if="commonProgress"
            width="14"
            height="6"
            viewBox="0 0 14 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6741 4.18582L7.38506 0.414057C7.03763 0.166293 6.57126 0.166294 6.22383 0.414058L0.934821 4.18582C0.142441 4.7509 0.542209 6 1.51544 6H12.0934C13.0667 6 13.4664 4.75089 12.6741 4.18582Z"
              fill="#64C048"
            />
          </svg>
          {{ commonProgress }}<span class="forecast-progress__forecast-percent">%</span>
        </p>
      </div>
    </div>
    <div class="forecast-progress__body">
      <div class="item" v-for="(item, index) in data" :key="index">
        <div class="item-inner">
          <v-menu open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <div class="item-graphics" v-bind="attrs" v-on="on">
                <div class="item-graphics-current" :style="`height: ${item.current}%`">
                  <span class="item-graphics-current-text">
                    {{ item.progress }}
                    <svg
                      v-if="item.progress > 0"
                      width="7"
                      height="3"
                      viewBox="0 0 7 3"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.072 3L3.036 0L0 3H6.072Z" /></svg
                  ></span>
                </div>
                <div class="item-graphics-progress" :style="`height: ${item.current + item.progress}%`"></div>
                <span class="item-graphics-target" :style="`bottom: ${item.target}%`"
                  ><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.28.901c-.093.372-.147.675-.246.963-.07.19-.223.348-.346.515a8.67 8.67 0 0 1-.299.364C5.96 1.705 4.056 2.09 2.86 3.819a3.87 3.87 0 0 0 .522 4.987c1.342 1.296 3.451 1.47 5 .424 1.435-.97 2.401-3.145 1.06-5.434.199-.174.398-.363.613-.545.061-.053.16-.114.23-.106.376.037.705-.03.92-.387 1.534 2.213 1.38 5.669-1.135 7.814-2.37 2.016-5.982 1.887-8.214-.319C-.377 8.056-.53 4.501 1.517 2.137 3.65-.342 7.147-.54 9.28.9Z"
                      fill="#fff"
                    />
                    <path
                      d="M8.22 4.979c.56.947.269 2.19-.621 2.88a2.376 2.376 0 0 1-3.114-.182 2.301 2.301 0 0 1-.245-3.07c.69-.901 1.963-1.212 2.891-.682-.483.478-.966.94-1.434 1.418-.138.144-.268.318-.314.5-.093.348.038.66.368.833.337.182.667.144.95-.12.423-.402.837-.82 1.25-1.229.093-.098.17-.22.27-.348Z"
                      fill="#fff"
                    />
                    <path
                      d="M10.905.371v.94h.951c.016.03.031.06.046.083-.398.38-.797.766-1.204 1.145-.053.053-.169.075-.245.068-.407-.068-.66.144-.92.41-.998 1.007-2.018 2-3.03 3-.085.084-.161.182-.26.22a.338.338 0 0 1-.292-.06c-.054-.046-.07-.19-.039-.258.039-.099.138-.174.223-.258 1.066-1.053 2.14-2.1 3.19-3.168.138-.144.23-.379.246-.583.015-.243.084-.425.26-.591.338-.326.645-.667.967-1.008.03.015.069.037.107.06Z"
                      fill="#fff"
                    />
                  </svg>
                  {{ item.target }} <span class="item-graphics-target-percent">%</span></span
                >
              </div>
            </template>

            <v-card class="item-graphics-menu">
              <ul class="item-graphics-menu-list">
                <li class="item-graphics-menu-item">
                  <p class="item-graphics-menu-title">{{ item.title }}</p>
                  <p class="item-graphics-menu-num">
                    {{ item.current }}<span class="item-graphics-menu-percent">%</span>
                  </p>
                </li>
                <li class="item-graphics-menu-item">
                  <p class="item-graphics-menu-title">Рост</p>
                  <p class="item-graphics-menu-num">
                    +{{ item.progress }}<span class="item-graphics-menu-percent">%</span>
                  </p>
                </li>
                <li class="item-graphics-menu-item">
                  <p class="item-graphics-menu-title">Цель сезона</p>
                  <p class="item-graphics-menu-num">
                    {{ item.target }}<span class="item-graphics-menu-percent">%</span>
                  </p>
                </li>
              </ul>
            </v-card>
          </v-menu>

          <div class="item-legend">
            <div class="item-legend-title">{{ item.title }}</div>
            <p class="item-legent-current">{{ item.current }}<span class="item-legent-current-percent">%</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'ОФП',
          current: 43,
          progress: 15,
          target: 62,
        },
        {
          title: 'Техника',
          current: 36,
          progress: 0,
          target: 54,
        },
        {
          title: 'Теория',
          current: 56,
          progress: 11,
          target: 72,
        },
        {
          title: 'Тактика',
          current: 63,
          progress: 2,
          target: 100,
        },
      ],
    }
  },
  computed: {
    commonProgress() {
      return this.data.reduce((sum, current) => sum + current.progress, 0)
    },
  },
}
</script>

<style lang="sass" scoped>
$heightLegend: 30px


.forecast-progress
    padding: 20px
    background-color: $blue03

    box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15)
    border-radius: 28px

/* Header */
.forecast-progress__header
    display: flex
    justify-content: space-between
    margin-bottom: 30px
    color: #fff


.forecast-progress__tip,
.forecast-progress__forecast
    background-color: $blue02
    border-radius: 12px
    padding: 12px 15px

.forecast-progress__tip
    flex: 0 0 65%
    display: flex
    align-items: flex-start

.forecast-progress__tip-square
    display: inline-block
    min-width: 32px
    min-height: 32px
    margin-right: 12px
    background-color: $blue01
    border-radius: 8px

.forecast-progress__tip-text
    display: inline-block
    font-size: 14px
    line-height: 16px


.forecast-progress__forecast
    flex: 0 0 30%
    display: flex
    justify-content: space-between
    align-items: center
    flex-wrap: wrap

.forecast-progress__forecast-text
    max-width: 75px
    font-weight: 500
    font-size: 12px
    line-height: 12px

.forecast-progress__forecast-percent-num
    padding-left: 5px
    font-family: 'FolksBold', serif
    font-weight: bold
    font-size: 28px
    line-height: 34px
    svg
        vertical-align: middle

.forecast-progress__forecast-percent
    font-family: $Manrope, sans-serif !important
    font-size: 14px

/* Body */
.forecast-progress__body
    height: 200px
    display: flex
    justify-content: space-between
    align-items: flex-end

.item
    position: relative
    width: 100%
    height: 100%
    &:first-child
        .item-legend
            border-top-left-radius: 12px
            border-bottom-left-radius: 12px
    &:last-child
        .item-legend
            border-top-right-radius: 12px
            border-bottom-right-radius: 12px
            &::after
                display: none

.item-inner
    height: 100%
    display: flex
    flex-direction: column
    justify-content: flex-end

.item-graphics
    position: relative
    height: calc(100% - #{$heightLegend});
    display: flex
    align-items: flex-end
    justify-content: center

/*  Menu */
.item-graphics-menu
    padding: 2px 6px
    border: 2px solid #DCE5F2
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15)
    border-radius: 8px
    min-width: 130px

.item-graphics-menu-list

.item-graphics-menu-item
    display: flex
    justify-content: space-between

.item-graphics-menu-title
    font-size: 12px
    line-height: 20px
    color: $blue02

.item-graphics-menu-num
    font-family: 'FolksBold', serif
    font-weight: bold
    font-size: 14px
    line-height: 20px
    color: $blue02

.item-graphics-menu-percent
    font-family: $Manrope, sans-serif !important
    font-size: 7px
/* End Menu */


.item-graphics-current,
.item-graphics-progress
    width: 25px
    height: 0%
    border-top-left-radius: 4px
    border-top-right-radius: 4px
    transition: height 0.5s linear

.item-graphics-current
    background-color: $blue01
    z-index: 2

.item-graphics-current-text
    display: inline-block
    width: 100%
    font-weight: 600
    font-size: 12px
    line-height: 16px
    text-align: center
    color: #fff
    svg
        vertical-align: middle



.item-graphics-progress
    background-color: $good
    transform: translateX(-50%)
    z-index: 0


.item-legend
    max-height: $heightLegend
    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    padding: 5px 9px
    color: #fff
    background-color: $blue02
    &::after
        content: ''
        position: absolute
        top: 50%
        right: 0px

        width: 1px
        height: 24px

        background-color: $blue01
        transform: translateY(-50%)

.item-legend-title
    font-weight: 500
    font-size: 12px
    line-height: 16px

.item-legent-current
    font-family: 'FolksBold', serif
    font-weight: bold
    font-size: 16px
    line-height: 20px

.item-legent-current-percent
    font-family: $Manrope, sans-serif !important
    font-size: 8px
    line-height: 11px


.item-graphics-target
    position: absolute
    left: 50%
    min-width: 50px
    max-width: 56px
    padding-bottom: 2px
    font-family: 'FolksBold', serif
    font-weight: bold
    font-size: 16px
    line-height: 20px
    text-align: center
    white-space: nowrap
    color: #fff
    transform: translateX(-50%)
    z-index: 8
    &::after
        content: ''
        position: absolute

        bottom: 0px
        left: 50%


        width: 100%
        max-width: 45px
        height: 3px

        border-radius: 5px
        transform: translateX(-50%)
        background-color: #B9CBE5

.item-graphics-target-percent
    font-family: $Manrope, sans-serif !important
    font-size: 8px
    line-height: 11px
</style>
