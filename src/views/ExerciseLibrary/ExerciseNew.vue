<template>
  <div class="d-flex">
    <left-menu class="exercise__left-menu">
      <h3 class="exercise-aside__title">Новое упражнение</h3>

      <p class="exercise-aside__progress-text">
        {{ textProgress }}
      </p>

      <p class="exercise-aside__progress-percent">{{ valueProgress }}%</p>

      <v-progress-linear
        class="exercise-aside__progress"
        rounded
        color="#64C048"
        background-color="#36427D"
        :value="valueProgress"
      ></v-progress-linear>

      <p class="exercise-aside__stepper-title">Вы указали:</p>
      <v-stepper class="exercise-aside__stepper" v-model="step" vertical>
        <v-stepper-step class="exercise-aside__stepper-step" :complete="step > 1" step="1">
          Спорт и период
        </v-stepper-step>
        <v-stepper-content class="exercise-aside__stepper-content" step="1">
          <p class="exercise-aside__list-name">Спорт</p>
          <ul class="exercise-aside__list">
            <li class="exercise-aside__item">Хоккей</li>
          </ul>
        </v-stepper-content>

        <v-stepper-step class="exercise-aside__stepper-step" :complete="step > 2" step="2">
          Задачи и навыки
        </v-stepper-step>
        <v-stepper-content class="exercise-aside__stepper-content" step="2"> </v-stepper-content>

        <v-stepper-step class="exercise-aside__stepper-step" :complete="step > 3" step="3">
          Описание и методология
        </v-stepper-step>
        <v-stepper-content class="exercise-aside__stepper-content" step="3"> </v-stepper-content>

        <v-stepper-step class="exercise-aside__stepper-step" :complete="step > 4" step="4">
          Интенсивность и дозировка
        </v-stepper-step>
        <v-stepper-content class="exercise-aside__stepper-content" step="4"> </v-stepper-content>

        <v-stepper-step class="exercise-aside__stepper-step" step="5"> Место проведения и инвентарь </v-stepper-step>
        <v-stepper-content class="exercise-aside__stepper-content" step="5"> </v-stepper-content>
      </v-stepper>
    </left-menu>

    <div class="container">
      <Header hideSearch />

      <div class="d-flex align-center justify-space-between mb-8">
        <div class="d-flex align-center">
          <wu-icon icon="run" class="mr-3" />
          <h2 class="h1 exercise__page-title">Новое упражнение</h2>
        </div>

        <wu-button v-if="step == 5" label="Сохранить упражнение"></wu-button>
      </div>

      <v-card class="exercise">
        <div class="exercise__main-content">
          <div class="exercise__head">
            <!-- <wu-input class="exercise__name" placeholder="Введите название ..."></wu-input> -->
            <v-text-field class="exercise__name" flat hide-details placeholder="Введите название ..."></v-text-field>
            <wu-select class="exercise__preparation-type"></wu-select>
          </div>

          <div class="exercise__subhead">
            <button class="exercise__add-tag">+ добавить тег</button>
            <button class="exercise__add-fav">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.903 15.977c-.765.011-1.14-.494-.988-1.164.318-1.376.635-2.74.964-4.115.094-.376.047-.635-.282-.905-1.058-.87-2.07-1.799-3.115-2.692-.353-.294-.6-.647-.424-1.117.177-.47.588-.564 1.047-.6 1.41-.105 2.81-.211 4.208-.364.188-.023.424-.247.506-.435C6.37 3.34 6.9 2.07 7.429.811c.189-.435.412-.822.953-.81.505.011.729.375.905.799.529 1.258 1.07 2.515 1.587 3.785.141.341.33.459.694.482 1.41.094 2.81.223 4.22.341.423.035.835.2.882.635.035.317-.106.764-.33.976a74.005 74.005 0 0 1-3.232 2.821c-.294.247-.341.459-.259.8.33 1.363.635 2.739.976 4.114.106.423.059.788-.294 1.058-.376.294-.764.212-1.14-.023-1.2-.73-2.422-1.446-3.61-2.199-.294-.176-.493-.188-.787 0-1.176.717-2.351 1.411-3.527 2.116-.212.13-.459.212-.564.27Z"
                  fill="currentColor"
                />
              </svg>
              Добавить в избранное
            </button>
          </div>

          <v-stepper class="exercise__stepper" v-model="step">
            <v-stepper-header class="exercise__stepper-header">
              <v-stepper-step class="exercise__stepper-step" :complete="step > 1" step="1"></v-stepper-step>

              <v-divider class="exercise__stepper-divider"></v-divider>

              <v-stepper-step class="exercise__stepper-step" :complete="step > 2" step="2"></v-stepper-step>

              <v-divider class="exercise__stepper-divider"></v-divider>

              <v-stepper-step class="exercise__stepper-step" :complete="step > 3" step="3"></v-stepper-step>

              <v-divider class="exercise__stepper-divider"></v-divider>

              <v-stepper-step class="exercise__stepper-step" :complete="step > 4" step="4"></v-stepper-step>

              <v-divider class="exercise__stepper-divider"></v-divider>

              <v-stepper-step class="exercise__stepper-step" step="5"></v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content class="exercise__stepper-content" step="1">
                <h3 class="exercise__content-title">Спорт и период</h3>

                <v-row class="exercise__sport-and-period sport-and-period">
                  <v-col class="sport-and-period__col" cols="6">
                    <div class="sport-and-period__card">
                      <wu-select class="sport-and-period__select" outlined label="Вид спорта"></wu-select>
                      <wu-select class="sport-and-period__select" outlined label="Возрастная группа"></wu-select>
                      <wu-select class="sport-and-period__select" outlined label="Амплуа"></wu-select>

                      <p class="sport-and-period__checkbox-label">Вид организации</p>
                      <wu-checkbox
                        class="sport-and-period__checkbox"
                        small
                        white
                        textDark
                        label="индивидуальное"
                      ></wu-checkbox>
                    </div>
                  </v-col>
                  <v-col class="sport-and-period__col" cols="6">
                    <div class="sport-and-period__card">
                      <p class="sport-and-period__col-title">Календарный период</p>
                      <wu-select class="sport-and-period__select" outlined label="Период"></wu-select>
                      <wu-select class="sport-and-period__select" outlined label="Этап"></wu-select>
                      <wu-select class="sport-and-period__select" outlined label="Мезоцикл"></wu-select>
                      <wu-select class="sport-and-period__select" outlined label="Микроцикл"></wu-select>
                    </div>
                  </v-col>
                </v-row>
              </v-stepper-content>

              <v-stepper-content class="exercise__stepper-content" step="2">
                <h3 class="exercise__content-title">Задачи и навыки</h3>

                <v-row class="targets-and-skills">
                  <v-col cols="12">
                    <wu-select class="targets-and-skills__select" outlined label="Цель упражнения"></wu-select>
                  </v-col>

                  <v-col cols="12">
                    <wu-select class="targets-and-skills__select" outlined label="Задача упражнения"></wu-select>
                  </v-col>

                  <v-col cols="3">
                    <wu-select class="targets-and-skills__select" outlined label="Этап обучения"></wu-select>
                  </v-col>
                  <v-col cols="3">
                    <wu-select
                      class="targets-and-skills__select"
                      outlined
                      label="Основные методы тренировки"
                    ></wu-select>
                  </v-col>
                  <v-col cols="3">
                    <wu-select
                      class="targets-and-skills__select"
                      outlined
                      label="Основные средства упражнения"
                    ></wu-select>
                  </v-col>
                  <v-col cols="3">
                    <wu-select class="targets-and-skills__select" outlined label="Этап тренировки"></wu-select>
                  </v-col>

                  <v-col cols="6">
                    <h3 class="targets-and-skills__skills-title">
                      Основные навыки
                      <span class="targets-and-skills__skills-counter">({{ mainSkills.length }} из 4)</span>
                    </h3>

                    <draggable
                      class="targets-and-skills__skills-list"
                      :list="mainSkills"
                      handle=".targets-and-skills__skills-handle"
                    >
                      <div class="targets-and-skills__skills-item" v-for="(skill, index) in mainSkills" :key="index">
                        <svg
                          class="targets-and-skills__skills-handle"
                          width="10"
                          height="17"
                          viewBox="0 0 10 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.135 4.443c1.03 0 1.865-.815 1.865-1.821S9.165.801 8.135.801 6.27 1.616 6.27 2.622s.835 1.821 1.865 1.821ZM8.135 10.618c1.03 0 1.865-.815 1.865-1.821s-.835-1.821-1.865-1.821-1.865.815-1.865 1.82c0 1.007.835 1.822 1.865 1.822ZM8.135 16.802c1.03 0 1.865-.816 1.865-1.822 0-1.005-.835-1.82-1.865-1.82s-1.865.815-1.865 1.82c0 1.006.835 1.822 1.865 1.822ZM1.865 4.443c1.03 0 1.866-.815 1.866-1.821S2.896.801 1.865.801C.835.8 0 1.616 0 2.622s.835 1.821 1.865 1.821ZM1.865 10.618c1.03 0 1.866-.815 1.866-1.821s-.835-1.821-1.866-1.821C.835 6.976 0 7.79 0 8.796c0 1.007.835 1.822 1.865 1.822ZM1.865 16.802c1.03 0 1.866-.816 1.866-1.822 0-1.005-.835-1.82-1.866-1.82-1.03 0-1.865.815-1.865 1.82 0 1.006.835 1.822 1.865 1.822Z"
                            fill="#B9CBE5"
                          />
                        </svg>

                        <wu-select class="targets-and-skills__skills-select" outlined></wu-select>

                        <button @click="removeMainSkills(index)" class="targets-and-skills__skills-remove">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m7.453 6.309 4.523 4.523a.803.803 0 0 1-1.133 1.133L6.33 7.455l-4.529 4.529a.803.803 0 0 1-1.134 0l-.005-.006a.803.803 0 0 1 0-1.134l4.511-4.511-4.529-4.53a.803.803 0 0 1 0-1.133L.651.663a.803.803 0 0 1 1.134 0l4.511 4.512 4.53-4.529a.803.803 0 0 1 1.133 0l.012.012a.803.803 0 0 1 0 1.133L7.453 6.31Z"
                              fill="#B9CBE5"
                            />
                          </svg>
                        </button>
                      </div>
                    </draggable>

                    <button
                      v-if="mainSkills.length < 4"
                      @click="addMainSkills()"
                      class="targets-and-skills__skills-add-btn"
                    >
                      + Добавить основной навык
                    </button>
                  </v-col>
                  <v-col cols="6">
                    <h3 class="targets-and-skills__skills-title">
                      Дополнительные навыки
                      <span class="targets-and-skills__skills-counter">({{ exSkills.length }} из 6)</span>
                    </h3>

                    <draggable
                      class="targets-and-skills__skills-list"
                      :list="exSkills"
                      handle=".targets-and-skills__skills-handle"
                    >
                      <div class="targets-and-skills__skills-item" v-for="(skill, index) in exSkills" :key="index">
                        <svg
                          class="targets-and-skills__skills-handle"
                          width="10"
                          height="17"
                          viewBox="0 0 10 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.135 4.443c1.03 0 1.865-.815 1.865-1.821S9.165.801 8.135.801 6.27 1.616 6.27 2.622s.835 1.821 1.865 1.821ZM8.135 10.618c1.03 0 1.865-.815 1.865-1.821s-.835-1.821-1.865-1.821-1.865.815-1.865 1.82c0 1.007.835 1.822 1.865 1.822ZM8.135 16.802c1.03 0 1.865-.816 1.865-1.822 0-1.005-.835-1.82-1.865-1.82s-1.865.815-1.865 1.82c0 1.006.835 1.822 1.865 1.822ZM1.865 4.443c1.03 0 1.866-.815 1.866-1.821S2.896.801 1.865.801C.835.8 0 1.616 0 2.622s.835 1.821 1.865 1.821ZM1.865 10.618c1.03 0 1.866-.815 1.866-1.821s-.835-1.821-1.866-1.821C.835 6.976 0 7.79 0 8.796c0 1.007.835 1.822 1.865 1.822ZM1.865 16.802c1.03 0 1.866-.816 1.866-1.822 0-1.005-.835-1.82-1.866-1.82-1.03 0-1.865.815-1.865 1.82 0 1.006.835 1.822 1.865 1.822Z"
                            fill="#B9CBE5"
                          />
                        </svg>

                        <wu-select class="targets-and-skills__skills-select" outlined></wu-select>

                        <button @click="removeExSkills(index)" class="targets-and-skills__skills-remove">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m7.453 6.309 4.523 4.523a.803.803 0 0 1-1.133 1.133L6.33 7.455l-4.529 4.529a.803.803 0 0 1-1.134 0l-.005-.006a.803.803 0 0 1 0-1.134l4.511-4.511-4.529-4.53a.803.803 0 0 1 0-1.133L.651.663a.803.803 0 0 1 1.134 0l4.511 4.512 4.53-4.529a.803.803 0 0 1 1.133 0l.012.012a.803.803 0 0 1 0 1.133L7.453 6.31Z"
                              fill="#B9CBE5"
                            />
                          </svg>
                        </button>
                      </div>
                    </draggable>

                    <button
                      v-if="exSkills.length < 6"
                      @click="addExSkills()"
                      class="targets-and-skills__skills-add-btn"
                    >
                      + Добавить дополнительный навык
                    </button>
                  </v-col>
                </v-row>
              </v-stepper-content>

              <v-stepper-content class="exercise__stepper-content" step="3">
                <h3 class="exercise__content-title">Описание и методология</h3>
                <v-row class="description">
                  <v-col class="description__col" cols="6">
                    <p class="description__title">Описание</p>
                    <wu-editor />
                  </v-col>
                  <v-col class="description__col" cols="6">
                    <p class="description__title">Методология</p>
                    <wu-editor />
                  </v-col>
                </v-row>
              </v-stepper-content>

              <v-stepper-content class="exercise__stepper-content" step="4">
                <h3 class="exercise__content-title">Интенсивность и дозировка</h3>

                <v-row>
                  <v-col cols="4">
                    <div class="intensity-and-dosage__intensity">
                      <span class="intensity-and-dosage__intensity-text">Интенсивность</span>

                      <wu-select outlined></wu-select>
                    </div>
                  </v-col>
                  <v-col cols="3" offset="1">
                    <div class="intensity-and-dosage__dosage-wrapper">
                      <p class="intensity-and-dosage__dosage-text">
                        <img
                          class="intensity-and-dosage__dosage-icon"
                          src="@/assets/images/svg/profile/my-groups.svg"
                          alt="Участники"
                        />
                        Кол-во участников
                      </p>

                      <wu-input class="intensity-and-dosage__dosage-input" value="1" readonly></wu-input>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div class="intensity-and-dosage__dosage-wrapper">
                      <p class="intensity-and-dosage__dosage-text">
                        <img
                          class="intensity-and-dosage__dosage-icon"
                          src="@/assets/images/svg/exercise/timer.svg"
                          alt="Время"
                        />
                        Время выполнения
                      </p>

                      <wu-input
                        class="intensity-and-dosage__dosage-input intensity-and-dosage__dosage-input--time"
                      ></wu-input>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="intensity-and-dosage__dosage-wrapper">
                      <p class="intensity-and-dosage__dosage-text">
                        <img
                          class="intensity-and-dosage__dosage-icon"
                          src="@/assets/images/svg/exercise/sets.svg"
                          alt="Подходы"
                        />
                        Количество подходов
                      </p>

                      <wu-input class="intensity-and-dosage__dosage-input" value="2" readonly></wu-input>
                    </div>
                    <wu-slider class="intensity-and-dosage__dosage-slider" value="2"></wu-slider>
                  </v-col>
                  <v-col cols="6">
                    <div class="intensity-and-dosage__dosage-wrapper">
                      <p class="intensity-and-dosage__dosage-text">
                        <img
                          class="intensity-and-dosage__dosage-icon"
                          src="@/assets/images/svg/exercise/repeats.svg"
                          alt="Повторы"
                        />
                        Количество повторов
                      </p>

                      <wu-input class="intensity-and-dosage__dosage-input" value="14" readonly></wu-input>
                    </div>
                    <wu-slider class="intensity-and-dosage__dosage-slider" value="14"></wu-slider>
                  </v-col>
                </v-row>
              </v-stepper-content>

              <v-stepper-content class="exercise__stepper-content" step="5">
                <h3 class="exercise__content-title">Место проведения и инвентарь</h3>

                <v-row class="place-and-inventory">
                  <v-col cols="4">
                    <p class="place-and-inventory__title">Место проведения</p>

                    <wu-checkbox small white textDark label="Футбольное поле"></wu-checkbox>
                  </v-col>
                  <v-col cols="8">
                    <p class="place-and-inventory__title">Инвентарь</p>

                    <div class="place-and-inventory__inventory-list">
                      <wu-checkbox
                        class="place-and-inventory__inventory-checkbox"
                        small
                        white
                        textDark
                        label="Футбольное поле"
                      ></wu-checkbox>
                      <wu-checkbox
                        class="place-and-inventory__inventory-checkbox"
                        small
                        white
                        textDark
                        label="Футбольное поле"
                      ></wu-checkbox>
                      <wu-checkbox
                        class="place-and-inventory__inventory-checkbox"
                        small
                        white
                        textDark
                        label="Футбольное поле"
                      ></wu-checkbox>
                    </div>
                  </v-col>
                </v-row>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </div>

        <v-card-actions class="exercise__footer">
          <wu-button
            v-if="step > 1"
            @click="prevStep()"
            class="exercise__prev-step"
            dark
            label="Вернуться назад"
          ></wu-button>
          <wu-button
            v-if="step < 5"
            @click="nextStep()"
            class="exercise__next-step"
            dark
            label="Перейти далее"
          ></wu-button>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { mask } from 'vue-the-mask'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'

export default {
  data() {
    return {
      step: 1,
      mainSkills: [],
      exSkills: [],
    }
  },
  directives: { mask },
  components: {
    LeftMenu,
    Header,
    draggable,
  },
  computed: {
    valueProgress() {
      return ((this.step - 1) * 100) / 5
    },
    textProgress() {
      switch (this.step) {
        case 1:
          return 'Начните заполнять информацию об упражнении'
        case 2:
          return 'Хорошее начало!'
        case 3:
          return 'Отличный темп!'
        case 4:
          return 'Почти всё готово'
        case 5:
          return 'Последний рывок!'

        default:
          return ''
      }
    },
  },
  methods: {
    nextStep() {
      if (this.step < 5) {
        this.step += 1
      }
    },
    prevStep() {
      if (this.step > 1) {
        this.step -= 1
      }
    },
    addMainSkills() {
      this.mainSkills.push({})
    },
    removeMainSkills(index) {
      this.mainSkills.splice(index, 1)
    },
    addExSkills() {
      this.exSkills.push({})
    },
    removeExSkills(index) {
      this.exSkills.splice(index, 1)
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.exercise-aside {
  &__title {
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
  }

  &__progress-text {
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }

  &__progress-percent {
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 22px;
  }

  &__progress {
    margin-bottom: 24px;
  }

  &__stepper-title {
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    color: #ffffff;
  }

  &__stepper {
    &::v-deep {
      padding-bottom: 0px;
      background-color: transparent;
      color: #fff;
      box-shadow: none !important;
    }
  }

  &__stepper-step {
    &::v-deep {
      padding: 0px;
      .v-stepper__step__step {
        min-width: auto;
        width: 20px;
        height: 20px;
        background-color: $blue02 !important;
        &.primary {
          background-color: $badly !important;
        }
      }
      .v-stepper__label {
        position: relative;
        flex-grow: 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: $blue06;
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          right: -30px;
          width: 10px;
          height: 6px;
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.707 1.707 3.586 3.586a1 1 0 0 0 1.414 0l3.586-3.586C9.923 1.077 9.477 0 8.586 0H1.414C.524 0 .077 1.077.707 1.707Z' fill='%23B9CBE5'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          transform: translateY(-50%);
          transition: transform 0.2s ease-in;
        }
      }
      &.v-stepper__step--complete {
        .v-stepper__step__step.primary {
          background-color: $good !important;
          .v-icon {
            width: 11px;
            height: 8px;
            background-image: url("data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.363.293a1 1 0 0 0-1.414 0L3.827 5.416 1.706 3.293a.999.999 0 0 0-1.413 0c-.39.39-.39 1.024 0 1.415l2.826 2.83a.999.999 0 0 0 1.494-.092c.033-.025.064-.052.093-.082l5.657-5.657a1 1 0 0 0 0-1.414Z' fill='%23fff'/%3E%3C/svg%3E");
          }
        }
        .v-stepper__label {
          color: $blue06 !important;
        }
      }

      &.v-stepper__step--active {
        .v-stepper__label {
          &::before {
            transform: rotate(-180deg);
          }
        }
      }
    }
  }

  &__stepper-content {
    &::v-deep {
      position: relative;
      border-left: none !important;
      padding: 21px 21px 21px 35px !important;

      margin-top: 0 !important;
      margin-bottom: 0px !important;
      margin-left: 10px !important;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0px;
        width: 1px;
        height: calc(100% - 32px);
        background-color: $blue02;
        transform: translateY(-50%);
      }
      &:last-child {
        &::before {
          display: none;
        }
      }
    }
  }

  &__list-name {
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;

    color: #ffffff;
  }

  &__list {
  }

  &__item {
    position: relative;
    padding-left: 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    color: #dce5f2;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0px;
      width: 7px;
      height: 5px;
      transform: translateY(-50%);
      background-image: url("data:image/svg+xml,%3Csvg width='7' height='5' viewBox='0 0 7 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1.155' height='3.464' rx='.577' transform='rotate(-45.035 3.074 1.274)' fill='%23DCE5F2'/%3E%3Crect x='5.815' width='1.155' height='5.774' rx='.577' transform='rotate(45 5.815 0)' fill='%23DCE5F2'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}

.exercise {
  padding: 0px;
  box-shadow: none !important;
  border-radius: 28px;
  background-color: $blue02;
  &__left-menu {
    background-color: #2e376a;
    color: #fff;
  }

  &__page-title {
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;

    color: $blue02;
  }

  &__head {
    position: relative;
    margin-bottom: 10px;
  }

  &__main-content {
    padding: 25px;
    background-color: #ffffff;
    border-radius: 27px 27px 28px 28px !important;
  }

  &__footer {
    display: flex;
    justify-content: center;
  }

  &__next-step {
    margin: 0 12px;
  }

  &__prev-step {
    margin: 0 12px;
  }

  &__name {
    &::v-deep {
      padding: 0;
      margin-top: 0px;
      border-bottom: 1px solid #ecf6ff;
      &.v-input--is-focused {
        border-bottom-color: $blue02;
      }
      .v-input__slot {
        padding: 0 !important;
        &::before,
        &::after {
          display: none;
        }
      }

      .v-text-field__slot input {
        max-height: none;
        font-size: 20px;
        line-height: 27px;

        padding: 8px 230px 8px 10px;

        color: $blue02;
        @include input-placeholder {
          color: $blue05;
        }
      }

      .v-input__prepend-outer {
        width: 33px;
        margin: 0;
        align-self: center;
        justify-content: center;
      }
    }
  }

  &__preparation-type {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 225px;
  }

  &__subhead {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 23px;
    color: $blue05;
  }

  &__add-tag {
    &:hover {
      color: $blue03;
    }
    margin-right: 35px;
  }

  &__add-fav {
    &:hover {
      color: $blue03;
    }
  }

  &__stepper {
    box-shadow: none !important;
    border-radius: 0 !important;
  }

  &__stepper-header {
    box-shadow: none;
    height: auto;
  }

  &__stepper-step {
    &::v-deep {
      padding: 6px 18px;
      &.v-stepper__step--complete {
        .v-stepper__step__step.primary {
          background-color: $good !important;
          .v-icon {
            width: 11px;
            height: 8px;
            background-image: url("data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.363.293a1 1 0 0 0-1.414 0L3.827 5.416 1.706 3.293a.999.999 0 0 0-1.413 0c-.39.39-.39 1.024 0 1.415l2.826 2.83a.999.999 0 0 0 1.494-.092c.033-.025.064-.052.093-.082l5.657-5.657a1 1 0 0 0 0-1.414Z' fill='%23fff'/%3E%3C/svg%3E");
          }
        }
      }

      .v-stepper__step__step {
        min-width: 20px;
        width: 20px;
        height: 20px;
        margin-right: 0px;
        font-weight: 500;
        font-size: 14px;
        line-height: 32px;
        color: #ffffff;

        background-color: $blue05 !important;

        &.primary {
          background-color: $blue02 !important;
        }
      }
    }
  }

  &__stepper-divider {
    border-color: #dce5f2 !important;
    border-radius: 2px;
    margin: 0 -12px;
  }

  &__stepper-content {
    padding: 18px 0px;
  }

  &__content-title {
    margin-bottom: 18px;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: $blue02;
  }

  /* First step content */
  .sport-and-period {
    margin: 0 -12px;
    &__col {
      padding: 0 12px;
    }

    &__card {
      height: 100%;
      padding: 14px;
      border: 0.5px solid #dce5f2;
      border-radius: 8px;
    }

    &__checkbox-label {
      margin-bottom: 8px;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;

      color: $blue02;
    }

    &__checkbox {
    }

    &__select {
      max-width: 295px;
      margin-bottom: 12px;
    }

    &__col-title {
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: $blue02;
    }
  }
  /* End First step content */

  /* Second step content */
  .targets-and-skills {
    &__skills-title {
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: $blue02;
    }

    &__skills-counter {
      font-weight: 300;
      font-size: 12px;
      line-height: 32px;

      color: $blue05;
    }

    &__skills-list {
      margin-bottom: 8px;
    }

    &__skills-item {
      margin-bottom: 8px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      &:last-child {
        margin-bottom: 0px;
      }
    }

    &__skills-handle {
      cursor: pointer;
      margin-right: 12px;
      margin-bottom: 10px;
    }

    &__skills-select {
      flex-grow: 1;
      margin-right: 6px;
    }

    &__skills-remove {
      margin-bottom: 5px;
    }

    &__skills-add-btn {
      margin-left: 30px;
      font-size: 16px;
      line-height: 22px;
      color: $blue02;
    }
  }
  /* End Second step content */

  /* Fourth step content */
  .intensity-and-dosage {
    &__intensity {
      display: flex;
      align-items: flex-end;
    }

    &__intensity-text,
    &__intensity-value {
      font-size: 14px;
      line-height: 19px;
      color: $blue02;
    }

    &__intensity-text {
      margin-right: 15px;
    }

    &__intensity-value {
      img {
        margin-right: 5px;
      }
    }

    &__dosage-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    }

    &__dosage-text {
      padding-left: 10px;
      font-size: 14px;
      line-height: 19px;
      color: $blue02;
    }

    &__dosage-icon {
      margin-right: 10px;
    }

    &__dosage-input {
      max-width: 50px;
      &::v-deep {
        .v-text-field__slot {
          input {
            text-align: center;
          }
        }
      }
      &--time {
        max-width: 75px;
      }
    }

    &__dosage-slider {
    }
  }
  /* End fourth step content */

  /* Third step content */
  .description {
    &__title {
      margin-bottom: 9px;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: $blue02;
    }
  }
  /* End third step content */

  /* Fifth step content */
  .place-and-inventory {
    &__title {
      margin-bottom: 18px;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;

      color: $blue02;
    }

    &__inventory-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__inventory-checkbox {
      flex: 0 0 50%;
    }
  }
  /* End Fifth step content */
}
</style>
