<template>
  <div class="d-flex">
    <left-menu>
      <div class="training-plan-year__info-group">
        <img
          class="training-plan-year__info-group-logo"
          :src="require('@/assets/images/groups/img-group01.png')"
          alt=""
        />
        <div>
          <p class="training-plan-year__info-group-name">НП-2</p>
          <p class="training-plan-year__info-group-about">8-9 лет (2 год подготовки)</p>
        </div>
      </div>

      <v-divider class="training-plan-year__divider" />

      <div class="training-plan-year__info-season-dates">
        <div class="training-plan-year__info-season-start">
          <label class="training-plan-year__info-label">Начало сезона</label>
          <v-text-field
            v-model="group.startSeason"
            class="training-plan-year__info-input"
            height="auto"
            flat
            hide-details
            v-mask="'##.##.####'"
            placeholder="__ . __ . ____"
          >
          </v-text-field>
        </div>
        <span class="training-plan-year__info-season-separator"></span>
        <div class="training-plan-year__info-season-end">
          <label class="training-plan-year__info-label">Окончание сезона</label>
          <v-text-field
            v-model="group.endSeason"
            class="training-plan-year__info-input"
            height="auto"
            flat
            hide-details
            v-mask="'##.##.####'"
            placeholder="__ . __ . ____"
          >
          </v-text-field>
        </div>
      </div>

      <div class="mt-5">
        <v-stepper class="constructor__stepper" v-model="stepsLeftMenu">
          <v-stepper-items>
            <v-stepper-content step="1">
              <label class="constructor__drag-label">Задайте периоды на сезон</label>

              <ul class="constructor__drag-list mt-5">
                <li
                  v-for="(item, index) in periodsList"
                  :key="index"
                  @dragend="dragend"
                  draggable="true"
                  unselectable="on"
                  class="constructor__drag-item"
                >
                  {{ item.name }}
                  <v-menu open-on-hover bottom offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <button class="constructor__drag-item-btn" v-bind="attrs" v-on="on">
                        <svg
                          class="constructor__drag-item-icon"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="#B9CBE5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.018 0c3.305.005 5.987 2.703 5.981 6.018-.004 3.306-2.7 5.987-6.015 5.982C2.68 11.995-.005 9.297 0 5.984.005 2.68 2.706-.006 6.018 0Zm.572 7.217h.002c0-.39.008-.781-.003-1.171-.012-.407-.224-.626-.582-.628-.36-.002-.586.216-.591.617-.011.78-.011 1.561 0 2.342.006.394.244.623.596.616.339-.006.562-.227.575-.606.014-.39.003-.78.003-1.17ZM5.41 3.582c0 .599.03.632.578.632.565 0 .604-.037.606-.573.002-.616-.017-.637-.562-.638-.604 0-.621.015-.622.579Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </template>

                    <v-card class="constructor__drag-item-menu"> Это текст описание с краткими рекомендациями. </v-card>
                  </v-menu>
                </li>
              </ul>

              <label class="constructor__drag-list-next" @click="stepsLeftMenu += 1">Перейти к настройке этапов</label>
            </v-stepper-content>
            <v-stepper-content step="2">
              <label class="constructor__drag-list-prev" @click="stepsLeftMenu -= 1">Назад к выбору периодов</label>

              <label class="constructor__drag-label">Задайте этапы на сезон</label>

              <ul class="constructor__drag-list mt-5">
                <li
                  v-for="(item, index) in stagesList"
                  :key="index"
                  @dragend="dragend"
                  draggable="true"
                  unselectable="on"
                  class="constructor__drag-item constructor__drag-item--stage"
                >
                  {{ item.name }}
                  <v-menu open-on-hover bottom offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <button class="constructor__drag-item-btn" v-bind="attrs" v-on="on">
                        <svg
                          class="constructor__drag-item-icon"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="#B9CBE5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.018 0c3.305.005 5.987 2.703 5.981 6.018-.004 3.306-2.7 5.987-6.015 5.982C2.68 11.995-.005 9.297 0 5.984.005 2.68 2.706-.006 6.018 0Zm.572 7.217h.002c0-.39.008-.781-.003-1.171-.012-.407-.224-.626-.582-.628-.36-.002-.586.216-.591.617-.011.78-.011 1.561 0 2.342.006.394.244.623.596.616.339-.006.562-.227.575-.606.014-.39.003-.78.003-1.17ZM5.41 3.582c0 .599.03.632.578.632.565 0 .604-.037.606-.573.002-.616-.017-.637-.562-.638-.604 0-.621.015-.622.579Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </template>

                    <v-card class="constructor__drag-item-menu"> Это текст описание с краткими рекомендациями. </v-card>
                  </v-menu>
                </li>
              </ul>

              <label class="constructor__drag-list-next" @click="stepsLeftMenu += 1"
                >Перейти к настройке мезоциклов</label
              >
            </v-stepper-content>
            <v-stepper-content step="3">
              <label class="constructor__drag-list-prev" @click="stepsLeftMenu -= 1">Назад к выбору этапов</label>

              <label class="constructor__drag-label">Задайте мезоциклы на сезон</label>

              <ul class="constructor__drag-list mt-5">
                <li
                  v-for="(item, index) in mesocyclesList"
                  :key="index"
                  @dragend="dragend"
                  draggable="true"
                  unselectable="on"
                  class="constructor__drag-item constructor__drag-item--mesocycle"
                >
                  {{ item.name }}
                  <v-menu open-on-hover bottom offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <button class="constructor__drag-item-btn" v-bind="attrs" v-on="on">
                        <svg
                          class="constructor__drag-item-icon"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="#B9CBE5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.018 0c3.305.005 5.987 2.703 5.981 6.018-.004 3.306-2.7 5.987-6.015 5.982C2.68 11.995-.005 9.297 0 5.984.005 2.68 2.706-.006 6.018 0Zm.572 7.217h.002c0-.39.008-.781-.003-1.171-.012-.407-.224-.626-.582-.628-.36-.002-.586.216-.591.617-.011.78-.011 1.561 0 2.342.006.394.244.623.596.616.339-.006.562-.227.575-.606.014-.39.003-.78.003-1.17ZM5.41 3.582c0 .599.03.632.578.632.565 0 .604-.037.606-.573.002-.616-.017-.637-.562-.638-.604 0-.621.015-.622.579Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </template>

                    <v-card class="constructor__drag-item-menu"> Это текст описание с краткими рекомендациями. </v-card>
                  </v-menu>
                </li>
              </ul>

              <label class="constructor__drag-list-next" @click="stepsLeftMenu += 1"
                >Перейти к настройке микроциклов</label
              >
            </v-stepper-content>
            <v-stepper-content step="4">
              <label class="constructor__drag-list-prev" @click="stepsLeftMenu -= 1">Назад к выбору мезоциклов</label>

              <label class="constructor__drag-label">Задайте микроциклы на сезон</label>

              <ul class="constructor__drag-list mt-5">
                <li
                  v-for="(item, index) in microcyclesList"
                  :key="index"
                  @dragend="dragend"
                  draggable="true"
                  unselectable="on"
                  class="constructor__drag-item constructor__drag-item--microcycle"
                >
                  {{ item.name }}
                  <v-menu open-on-hover bottom offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <button class="constructor__drag-item-btn" v-bind="attrs" v-on="on">
                        <svg
                          class="constructor__drag-item-icon"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="#B9CBE5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.018 0c3.305.005 5.987 2.703 5.981 6.018-.004 3.306-2.7 5.987-6.015 5.982C2.68 11.995-.005 9.297 0 5.984.005 2.68 2.706-.006 6.018 0Zm.572 7.217h.002c0-.39.008-.781-.003-1.171-.012-.407-.224-.626-.582-.628-.36-.002-.586.216-.591.617-.011.78-.011 1.561 0 2.342.006.394.244.623.596.616.339-.006.562-.227.575-.606.014-.39.003-.78.003-1.17ZM5.41 3.582c0 .599.03.632.578.632.565 0 .604-.037.606-.573.002-.616-.017-.637-.562-.638-.604 0-.621.015-.622.579Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </template>

                    <v-card class="constructor__drag-item-menu"> Это текст описание с краткими рекомендациями. </v-card>
                  </v-menu>
                </li>
              </ul>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </div>

      <span class="training-plan-year__prev-step" @click="prevStep($event)">
        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.635.271a.926.926 0 0 0-1.31 0L.272 3.326a.923.923 0 0 0-.27.671.923.923 0 0 0 .27.669L3.326 7.72a.926.926 0 1 0 1.309-1.309L2.219 3.996 4.635 1.58a.926.926 0 0 0 0-1.309Z"
            fill="#464EA3"
          />
        </svg>
        Вернуться назад</span
      >
    </left-menu>

    <div class="container">
      <Header />

      <div class="section-title--create d-flex align-center justify-space-between mb-8">
        <div class="d-flex align-center">
          <wu-icon icon="education" class="mr-3" />
          <h2 class="h2">Создание годового учебно-тренировочного плана</h2>
        </div>

        <base-button label="Сохранить" @click="step = 2" />
      </div>

      <v-card class="training-plan-year__card constructor mb-10">
        <div class="constructor__header">
          <div class="constructor__months">
            <ul class="constructor__months-list">
              <li class="constructor__months-item">Месяц</li>
              <li class="constructor__months-item" v-for="(month, index) in months" :key="index">{{ month }}</li>
            </ul>
          </div>
          <div class="constructor__weeks">
            <ul class="constructor__weeks-list">
              <li class="constructor__weeks-item">Неделя</li>
              <li v-for="week in countWeeks" :key="week" class="constructor__weeks-item">{{ week }}</li>
            </ul>
          </div>
        </div>
        <div id="content" class="constructor__body">
          <div class="constructor__body-aside">
            <div class="constructor__row-title">Периоды</div>
            <div class="constructor__row-title">Этапы</div>
            <div class="constructor__row-title">Мезоциклы</div>
            <div class="constructor__row-title">Микроциклы</div>
          </div>

          <div class="constructor__body-content">
            <div class="constructor__row">
              <grid-layout
                :layout.sync="periods"
                :col-num="52"
                :row-height="72"
                :is-draggable="true"
                :is-resizable="true"
                :margin="[3, 9]"
                :use-css-transforms="true"
                :max-rows="1"
                :prevent-collision="true"
                class="constructor__grid-layout"
              >
                <grid-item
                  class="constructor__grid-item constructor__grid-item--period"
                  v-for="item in periods"
                  :x="item.x"
                  :y="item.y"
                  :w="item.w"
                  :h="item.h"
                  :i="item.i"
                  :key="item.i"
                >
                  {{ item.title }}
                  <span class="constructor__grid-item-dates">{{ getDates(item.x, item.w) }}</span>
                </grid-item>
              </grid-layout>
            </div>

            <div class="constructor__row">
              <grid-layout
                :layout.sync="stages"
                :col-num="52"
                :row-height="72"
                :is-draggable="true"
                :is-resizable="true"
                :margin="[3, 9]"
                :use-css-transforms="true"
                :max-rows="1"
                :prevent-collision="true"
              >
                <grid-item
                  class="constructor__grid-item constructor__grid-item--stage"
                  v-for="item in stages"
                  :x="item.x"
                  :y="item.y"
                  :w="item.w"
                  :h="item.h"
                  :i="item.i"
                  :key="item.i"
                >
                  {{ item.title }}
                  <span class="constructor__grid-item-dates">{{ getDates(item.x, item.w) }}</span>
                </grid-item>
              </grid-layout>
            </div>

            <div class="constructor__row constructor__row--height">
              <grid-layout
                :layout.sync="mesocycles"
                :col-num="52"
                :row-height="72"
                :is-draggable="true"
                :is-resizable="true"
                :margin="[3, 9]"
                :use-css-transforms="true"
                :max-rows="1"
                :prevent-collision="true"
                class="constructor__grid-layout"
              >
                <grid-item
                  class="constructor__grid-item constructor__grid-item--mesocycle"
                  v-for="item in mesocycles"
                  :x="item.x"
                  :y="item.y"
                  :w="item.w"
                  :h="item.h"
                  :i="item.i"
                  :key="item.i"
                >
                  {{ item.title }}
                  <span class="constructor__grid-item-dates">{{ getDates(item.x, item.w) }}</span>
                </grid-item>
              </grid-layout>

              <grid-layout
                v-if="mesocycles.weeks"
                :layout.sync="mesocycles.weeks"
                :col-num="52"
                :row-height="27"
                :is-draggable="false"
                :is-resizable="false"
                :margin="[3, 0]"
                :use-css-transforms="true"
                :max-rows="1"
                :prevent-collision="true"
                class="constructor__grid-layout"
              >
                <grid-item
                  class="constructor__grid-item constructor__grid-item--microcycle constructor__grid-item--weeks"
                  v-for="(item, index) in mesocycles.weeks"
                  :x="item.x"
                  :y="0"
                  :w="item.w"
                  :h="1"
                  :i="index"
                  :key="index"
                >
                  {{ index }}
                </grid-item>
              </grid-layout>
            </div>
            <div class="constructor__row constructor__row--height">
              <grid-layout
                :layout.sync="microcycles"
                :col-num="52"
                :row-height="72"
                :is-draggable="true"
                :is-resizable="true"
                :margin="[3, 9]"
                :use-css-transforms="true"
                :max-rows="1"
                :prevent-collision="true"
                class="constructor__grid-layout"
              >
                <grid-item
                  class="constructor__grid-item constructor__grid-item--microcycle"
                  v-for="item in microcycles"
                  :x="item.x"
                  :y="item.y"
                  :w="item.w"
                  :h="item.h"
                  :i="item.i"
                  :key="item.i"
                >
                  {{ item.title }}
                  <span class="constructor__grid-item-dates">{{ getDates(item.x, item.w) }}</span>
                </grid-item>
              </grid-layout>
              <grid-layout
                :layout.sync="microcycles"
                :col-num="52"
                :row-height="27"
                :is-draggable="false"
                :is-resizable="false"
                :margin="[3, 0]"
                :use-css-transforms="true"
                :max-rows="1"
                :prevent-collision="true"
                class="constructor__grid-layout"
              >
                <template v-for="mic in microcycles">
                  <grid-item
                    class="constructor__grid-item constructor__grid-item--microcycle constructor__grid-item--weeks"
                    v-for="(item, index) in mic.w"
                    :x="mic.x + index"
                    :y="0"
                    :w="1"
                    :h="1"
                    :i="index"
                    :key="item"
                  >
                    {{ index + 1 }}
                  </grid-item>
                </template>
              </grid-layout>
            </div>
          </div>
        </div>
      </v-card>

      <div class="advice">
        <div class="advice__header">
          <p class="advice__title">Совет по созданию готового УТП</p>
          <span class="advice__steps">Шаг {{ stepsLeftMenu }} из 4</span>
        </div>
        <p class="advice__text">
          Здесь окно для рекомендаций и советов по построению годового учебно-тренировочного плана для тренера. Далее
          текст рыба. Вот вам яркий пример современных тенденций - граница обучения кадров предполагает независимые
          способы реализации дальнейших направлений развития. Также как разбавленное изрядной долей эмпатии,
          рациональное мышление, в своём классическом представлении, допускает внедрение направлений прогрессивного
          развития.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

import VueGridLayout from 'vue-grid-layout'

import LeftMenu from '@/components/LeftMenu.vue'

import Header from '@/components/Header.vue'

let mouseXY = { x: null, y: null }

export default {
  props: {
    group: {
      type: Object,
    },
  },
  data() {
    return {
      stepsLeftMenu: null,
      weeks: [],
      value: [0, 52],
      periodsList: [{ name: 'Подготовительный' }, { name: 'Соревновательный' }, { name: 'Переходный' }],
      stagesList: [
        { name: 'Общеподготовительный' },
        { name: 'Специально-подготовительный' },
        { name: 'Восстановительный' },
      ],
      mesocyclesList: [{ name: 'Втягивающий' }, { name: 'Базовый' }, { name: 'Восстановительно-поддерж ивающий' }],
      microcyclesList: [
        { name: 'Втягивающий' },
        { name: 'Базовый' },
        { name: 'Восстановительный' },
        { name: 'Поддерживающий' },
      ],

      periods: [],
      stages: [],
      mesocycles: [],
      microcycles: [],
    }
  },
  components: { LeftMenu, Header, GridLayout: VueGridLayout.GridLayout, GridItem: VueGridLayout.GridItem },
  computed: {
    countWeeks() {
      if (this.group.endSeason) {
        return moment(this.group.endSeason, 'DD.MM.YYYY')
          .add(1, 'days')
          .diff(moment(this.group.startSeason, 'DD.MM.YYYY'), 'week')
      } else return 52
    },
    months() {
      if (this.group.startSeason) {
        let start = moment(this.group.startSeason, 'DD.MM.YYYY'),
          end = moment(this.group.endSeason, 'DD.MM.YYYY'),
          months = []

        while (end > start || start.format('M') === end.format('M')) {
          months.push(start.format('MMMM'))
          start.add(1, 'month')
        }
        return months
      } else return []
    },
    emptyPeriods() {
      return this.countWeeks - this.periods.reduce((sum, current) => sum + current.w, 0)
    },
    positionPeriods() {
      return this.periods.reduce((pos, curr) => (pos > curr.w + curr.x ? pos : curr.w + curr.x), 0)
    },
    emptyStages() {
      return this.countWeeks - this.stages.reduce((sum, current) => sum + current.w, 0)
    },
    positionStages() {
      return this.stages.reduce((pos, curr) => (pos > curr.w + curr.x ? pos : curr.w + curr.x), 0)
    },
    emptyMesocycles() {
      return this.countWeeks - this.mesocycles.reduce((sum, current) => sum + current.w, 0)
    },
    positionMesocycles() {
      return this.mesocycles.reduce((pos, curr) => (pos > curr.w + curr.x ? pos : curr.w + curr.x), 0)
    },

    emptyMicrocycles() {
      return this.countWeeks - this.microcycles.reduce((sum, current) => sum + current.w, 0)
    },
    positionMicrocycles() {
      return this.microcycles.reduce((pos, curr) => (pos > curr.w + curr.x ? pos : curr.w + curr.x), 0)
    },

    lengthPeriod() {
      return this.periods.length
    },
  },
  methods: {
    dragend: function (e) {
      let parentRect = document.getElementById('content').getBoundingClientRect()
      let mouseInGrid = false

      if (
        mouseXY.x > parentRect.left &&
        mouseXY.x < parentRect.right &&
        mouseXY.y > parentRect.top &&
        mouseXY.y < parentRect.bottom
      ) {
        mouseInGrid = true
      }

      if (this.stepsLeftMenu === 1) {
        if (mouseInGrid === true && this.periods.findIndex(item => item.i === this.lengthPeriod) === -1) {
          this.periods.push({
            x: this.positionPeriods,
            y: 1,
            w: this.emptyPeriods,
            h: 1,
            i: this.lengthPeriod,
            title: e.srcElement.innerText,
          })
        }
      } else if (this.stepsLeftMenu === 2) {
        if (mouseInGrid === true && this.stages.findIndex(item => item.i === this.stages.length) === -1) {
          this.stages.push({
            x: this.positionStages,
            y: 1,
            w: this.emptyStages,
            h: 1,
            i: this.stages.length,
            title: e.srcElement.innerText,
          })
        }
      } else if (this.stepsLeftMenu === 3) {
        if (mouseInGrid === true && this.mesocycles.findIndex(item => item.i === this.mesocycles.length) === -1) {
          this.mesocycles.push({
            x: this.positionMesocycles,
            y: 1,
            w: this.emptyMesocycles,
            h: 1,
            i: this.mesocycles.length,
            title: e.srcElement.innerText,
            weeks: [],
          })
        }
      } else if (this.stepsLeftMenu === 4) {
        if (mouseInGrid === true && this.microcycles.findIndex(item => item.i === this.microcycles.length) === -1) {
          this.microcycles.push({
            x: this.positionMicrocycles,
            y: 1,
            w: this.emptyMicrocycles,
            h: 1,
            i: this.microcycles.length,
            title: e.srcElement.innerText,
          })
        }
      }
    },
    getDateWeek() {
      moment.locale('ru')
      this.weeks = []

      for (let index = 0; index < this.countWeeks; index++) {
        let start = moment(this.group.startSeason, 'DD.MM.YYYY').add(index, 'week').startOf('week'),
          end = moment(this.group.startSeason, 'DD.MM.YYYY').add(index, 'week').endOf('week')

        this.weeks.push({ week: index + 1, startWeek: start, endWeek: end })
      }
    },
    getDates(start, duration) {
      if (this.weeks.length && duration > 0) {
        return `${moment(this.weeks[start].startWeek).format('DD.MMM')} - ${moment(
          this.weeks[start + duration - 1].endWeek
        ).format('DD.MMM')}`
      }
    },
    nextStep() {
      this.$emit('nextStep')
    },
    prevStep() {
      this.$emit('prevStep')
    },
  },
  mounted() {
    this.getDateWeek()

    this.stepsLeftMenu = 1

    document.addEventListener(
      'dragover',
      function (e) {
        mouseXY.x = e.clientX
        mouseXY.y = e.clientY
      },
      false
    )
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

.training-plan-year {
  &__info-group {
    display: flex;
    align-items: center;
  }

  &__info-group-logo {
    margin-right: 28px;
  }

  &__info-group-name {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: $blue02;
  }

  &__info-group-about {
    font-size: 14px;
    line-height: 19px;
    color: $blue02;
  }

  &__divider {
    margin-top: 28px;
    margin-bottom: 21px;
  }

  &__prev-step {
    svg {
      margin-right: 6px;
    }
    position: absolute;
    bottom: 28px;
    left: 50%;

    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: $blue02;

    cursor: pointer;

    transform: translateX(-50%);
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
    }
  }

  &__info-season-dates {
    display: flex;
    align-items: flex-end;
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
}

.constructor {
  &::v-deep {
    background-color: #fbfbfe;
    border-radius: 16px;
    box-shadow: none !important;
    overflow: hidden;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 96px;
    width: 1px;
    height: 100%;
    background-color: #dce5f2;
  }
  &__header {
    border-bottom: 1px solid #dce5f2;
  }

  &__months {
    background-color: $blue02;
  }

  &__months-list {
    display: flex;
    justify-content: space-between;
    padding: 5px 0px;
  }

  &__months-item {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    width: 100%;

    color: #ffffff;
    text-transform: capitalize;
    &:first-child {
      min-width: 96px;
    }
  }

  &__weeks {
  }

  &__weeks-list {
    display: flex;
    justify-content: space-between;
    padding: 5px 0px;
  }

  &__weeks-item {
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: $blue02;

    &:first-child {
      min-width: 96px;
    }
  }

  &__body {
    display: flex;
    min-height: 425px;
  }

  &__body-aside {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 96px;
  }

  &__body-content {
    flex: 1 1 100%;
  }

  &__row {
    position: relative;
    height: 90px;

    &--height {
      height: 125px;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 103%;
      height: 1px;
      border-bottom: 1px dashed #dce5f2;
      z-index: 0;
    }
  }
  &__row-title {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: $blue02;
    &:nth-child(1),
    &:nth-child(2) {
      height: 90px;
    }
    &:nth-child(3),
    &:nth-child(4) {
      height: 125px;
    }
  }
}

.constructor__grid-layout {
  flex: 1 1 100%;
  &::v-deep {
    .vue-grid-item.vue-grid-placeholder {
      background: $blue02;
      border-radius: 8px;
    }
  }
}

.constructor__grid-item {
  &::v-deep {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    max-height: 72px;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: $blue02;
    overflow-wrap: anywhere;

    border-radius: 8px;
    .vue-resizable-handle {
      display: none;
      width: 8px;
      height: 14px;

      bottom: 50%;
      right: -4px;
      border-radius: 2px;
      transform: translateY(50%);
      &::after,
      &::before {
        content: '';
        position: absolute;
        top: 50%;

        width: 1px;
        height: 8px;
        background-color: #e5e6f5;
        transform: translateY(-50%);
      }
      &::after {
        left: 2px;
      }
      &::before {
        right: 2px;
      }
    }
    &:hover {
      cursor: grab !important;
      .vue-resizable-handle {
        display: block;
        cursor: ew-resize;
      }
    }
    &:active {
      cursor: grabbing !important;
    }

    .constructor__grid-item-dates {
      display: none;
      position: absolute;
      bottom: -26px;
      left: 0;

      min-width: 150px;
      padding: 0 10px;

      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      text-align: center;

      color: #fff;
      border-radius: 0px 12px 12px 12px;
      z-index: 3;
    }

    &.vue-draggable-dragging {
      .constructor__grid-item-dates {
        display: block;
      }
    }
    &.resizing {
      opacity: 1;
      .constructor__grid-item-dates {
        display: block;
      }
    }
  }

  &--period {
    background-color: #e5e6f5;
    border: 2px solid #95b0da;
    .constructor__grid-item-dates {
      background-color: $blue02;
    }
    &::v-deep {
      .vue-resizable-handle {
        background: $blue02;
      }
    }
  }
  &--stage {
    background-color: rgba(36, 109, 228, 0.15);
    border: 2px solid rgba(36, 109, 228, 0.5);
    .constructor__grid-item-dates {
      background-color: $blue02;
    }
    &::v-deep {
      .vue-resizable-handle {
        background: $blue02;
      }
    }
  }
  &--mesocycle {
    background-color: rgba($great, 0.15);
    border: 2px solid rgba($great, 0.5);
    .constructor__grid-item-dates {
      background-color: $great;
    }
    &::v-deep {
      .vue-resizable-handle {
        background: $great;
      }
    }
  }
  &--microcycle {
    background-color: rgba($good, 0.15);
    border: 2px solid rgba($good, 0.5);
    .constructor__grid-item-dates {
      background-color: $good;
    }
    &::v-deep {
      .vue-resizable-handle {
        background: $good;
      }
    }
  }

  &--weeks {
    font-size: 13px;
  }
}

.constructor__grid-week-list {
  display: inline-flex;
}
.constructor__grid-week-item {
}

.constructor {
  &__stepper {
    &::v-deep {
      box-shadow: none !important;
    }
  }

  &__drag-list {
    margin-bottom: 32px;
  }

  &__drag-label {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: $blue02;
  }

  &__drag-list-prev {
    position: relative;
    display: block;
    margin-bottom: 24px;
    padding-left: 12px;

    font-weight: 500;
    font-size: 14px;
    line-height: 19px;

    color: $blue02;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0px;
      width: 5px;
      height: 8px;

      background-image: url("data:image/svg+xml,%3Csvg width='5' height='8' viewBox='0 0 5 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.635.271a.926.926 0 0 0-1.31 0L.272 3.326a.923.923 0 0 0-.27.671.923.923 0 0 0 .27.669L3.326 7.72a.926.926 0 1 0 1.309-1.309L2.219 3.996 4.635 1.58a.926.926 0 0 0 0-1.309Z' fill='%23464EA3'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;

      transform: translateY(-50%);
    }
  }

  &__drag-list-next {
    position: relative;
    padding-right: 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: rgba($blue02, 0.5);
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0px;
      width: 5px;
      height: 8px;

      background-image: url("data:image/svg+xml,%3Csvg width='5' height='8' viewBox='0 0 5 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.271 7.721a.926.926 0 0 0 1.31 0l3.054-3.054a.923.923 0 0 0 .271-.672.923.923 0 0 0-.27-.669L1.58.272A.926.926 0 0 0 .27 1.58l2.416 2.415L.27 6.412a.926.926 0 0 0 0 1.31Z' fill='%23464EA3' fill-opacity='.5'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;

      transform: translateY(-50%);
    }
  }

  &__drag-item {
    position: relative;
    margin-bottom: 12px;

    font-weight: 500;
    font-size: 14px;
    line-height: 73px;
    text-align: center;
    color: $blue02;

    background-color: #e5e6f5;

    border: 2px solid #95b0da;
    border-radius: 8px;

    cursor: grab;
    user-select: none;
    &:last-child {
      margin-bottom: 0px;
    }
    &:active {
      cursor: grabbing;
    }

    &--stage {
      background-color: #dee9fb;
      border: 2px solid #8085bb;
    }

    &--mesocycle {
      background-color: #d2e7f7;
      border: 2px solid #7ed1f5;
    }
    &--microcycle {
      background-color: #dbe8de;
      border: 2px solid #a0d493;
    }
  }

  &__drag-item-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 0px;
    line-height: 0px;
    color: #b9cbe5;
    &:hover {
      svg {
        color: $blue02;
      }
    }
  }

  &__drag-item-icon {
  }

  &__drag-item-menu {
    &::v-deep {
      max-width: 340px;
      padding: 18px;
      font-size: 14px;
      line-height: 19px;
      color: $blue02;

      box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15) !important;
      border-radius: 12px 12px 12px 0px;
    }
  }
}

.advice {
  position: relative;
  max-width: 835px;

  padding: 21px 21px 21px 42px;
  background-color: #ffffff;

  box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  border-radius: 28px;
  &::after {
    content: '';
    position: absolute;
    top: 21px;
    left: 19px;
    width: 5px;
    height: calc(100% - 42px);
    background-color: $blue02;
    border-radius: 15px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  &__title {
    position: relative;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    padding-left: 30px;

    color: $blue02;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0px;
      width: 20px;
      height: 15px;

      background-image: url("data:image/svg+xml,%3Csvg width='20' height='15' viewBox='0 0 20 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.781 14.752c-2.4 0-4.8.002-7.199-.001-1.254-.001-2.012-.76-2.017-2.013-.003-.721-.05-1.447.012-2.162.065-.742-.186-1.29-.674-1.836C-.295 7.4-.299 7.355.881 6.038c.515-.576.764-1.156.696-1.932-.064-.732-.02-1.475-.011-2.213C1.579.8 2.363.005 3.444.003 8.33 0 13.215 0 18.101.004c1.12.002 1.893.786 1.895 1.923.006 3.64.006 7.278 0 10.918-.002 1.126-.788 1.905-1.912 1.907-2.435.005-4.869 0-7.303 0Zm7.331-1.876V1.893H3.417c0 1.077-.023 2.12.009 3.163.016.549-.11 1-.503 1.395-.276.276-.501.601-.755.914.062.089.1.171.161.224.953.82 1.268 1.863 1.092 3.083-.022.152-.003.308-.003.463v1.74h14.694Z' fill='%23464EA3'/%3E%3Cpath d='M10.767 6.467c-1.113 0-2.227.003-3.34-.003a2.316 2.316 0 0 1-.608-.071c-.452-.127-.698-.521-.643-.98.053-.451.39-.779.867-.78 2.483-.008 4.968-.008 7.451 0 .51 0 .85.333.892.808.042.484-.222.87-.721.97-.298.06-.612.053-.919.054-.992.006-1.985.002-2.98.002ZM9.812 10.127c-.874 0-1.749.004-2.623 0-.616-.005-.989-.322-1.019-.849-.03-.546.344-.972.958-.98a240.44 240.44 0 0 1 5.452 0c.623.007.98.409.958.97-.02.54-.376.854-1 .858-.908.005-1.817.001-2.726.001Z' fill='%23464EA3'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
      transform: translateY(-50%);
    }
  }

  &__steps {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: $blue05;
  }

  &__text {
    font-size: 14px;
    line-height: 20px;
    color: $blue02;
  }
}
</style>
