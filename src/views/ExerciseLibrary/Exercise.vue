<template>
  <div class="d-flex">
    <left-menu>
      <h3 class="exercise__aside-title">
        <img class="exercise__aside-icon" src="@/assets/images/svg/exercise/section.svg" alt="Раздел" />
        Раздел упражнения
      </h3>
      <div class="exercise__aside-block">
        <div class="exercise__aside-row">
          <span class="exercise__aside-info">Вид спорта</span>
          <div class="exercise__aside-dots"></div>
          <span class="exercise__aside-value">Универсально</span>
        </div>
        <div class="exercise__aside-row">
          <span class="exercise__aside-info">Возрастная группа</span>
          <div class="exercise__aside-dots"></div>
          <span class="exercise__aside-value">7-16 лет</span>
        </div>

        <p class="exercise__aside-info">Вид организации</p>
        <p class="exercise__aside-info-list">
          <span v-for="(form, index) in exercise.organizationForm" :key="index" class="exercise__aside-info-item">
            {{ form.name }}
            <template v-if="index < exercise.organizationForm.length - 1"> • </template>
          </span>
        </p>
      </div>

      <h3 class="exercise__aside-title">
        <img class="exercise__aside-icon" src="@/assets/images/svg/exercise/calendar.svg" alt="Календарь" />
        Календарный период
      </h3>
      <div class="exercise__aside-block">
        <div class="exercise__aside-row">
          <span class="exercise__aside-info">Период</span>
          <div class="exercise__aside-dots"></div>
          <span class="exercise__aside-value">Универсально</span>
        </div>
        <div class="exercise__aside-row">
          <span class="exercise__aside-info">Этап</span>
          <div class="exercise__aside-dots"></div>
          <span class="exercise__aside-value">Универсально</span>
        </div>
        <div class="exercise__aside-row">
          <span class="exercise__aside-info">Мезоцикл</span>
          <div class="exercise__aside-dots"></div>
          <span class="exercise__aside-value">Универсально</span>
        </div>
        <div class="exercise__aside-row">
          <span class="exercise__aside-info">Микроцикл</span>
          <div class="exercise__aside-dots"></div>
          <span class="exercise__aside-value">Универсально</span>
        </div>
      </div>

      <h3 class="exercise__aside-title">
        <img class="exercise__aside-icon" src="@/assets/images/svg/exercise/tags.svg" alt="Теги" />
        Теги
      </h3>
      <div class="wu-tags">
        <span class="wu-tag">махи</span>
        <span class="wu-tag">физическое</span>
        <span class="wu-tag">универсальное</span>
      </div>
    </left-menu>

    <div class="container">
      <Header hideSearch />

      <div class="d-flex align-center justify-space-between mb-8">
        <div class="d-flex align-center">
          <wu-icon icon="exercise" class="mr-3" />
          <h2 class="h1 exercise-title">Упражнение “{{ exercise.title }}”</h2>
        </div>

        <div class="d-flex align-center">
          <button class="exercise__add-fav">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.90261 15.9767C3.13847 15.9885 2.76227 15.483 2.9151 14.8129C3.23251 13.4374 3.54993 12.0737 3.8791 10.6983C3.97315 10.3221 3.92612 10.0634 3.59695 9.79306C2.53891 8.92311 1.52789 7.99438 0.481596 7.10092C0.128914 6.80702 -0.117963 6.45434 0.0583776 5.98409C0.234719 5.51385 0.646181 5.4198 1.10467 5.38454C2.51539 5.27873 3.91437 5.17293 5.31334 5.0201C5.50143 4.99659 5.73655 4.77322 5.81885 4.58512C6.37138 3.33898 6.9004 2.06933 7.42943 0.811429C7.61752 0.376454 7.84089 -0.0114956 8.38167 0.000260458C8.88718 0.0120165 9.11054 0.376454 9.28689 0.799672C9.81591 2.05757 10.3567 3.31547 10.874 4.58512C11.015 4.92605 11.2031 5.04361 11.5676 5.06712C12.9783 5.16117 14.3773 5.29049 15.788 5.40805C16.2112 5.44332 16.6227 5.6079 16.6697 6.04287C16.705 6.36029 16.5639 6.80702 16.3405 7.01863C15.2942 7.99438 14.2127 8.92311 13.1076 9.84008C12.8137 10.087 12.7667 10.2986 12.849 10.6395C13.1781 12.0032 13.4838 13.3787 13.8247 14.7541C13.9305 15.1773 13.8835 15.5418 13.5308 15.8122C13.1546 16.1061 12.7667 16.0238 12.3905 15.7886C11.1914 15.0598 9.96874 14.3427 8.78137 13.5903C8.48747 13.4139 8.28762 13.4022 7.99372 13.5903C6.81811 14.3074 5.64251 15.001 4.4669 15.7064C4.25529 15.8357 4.00841 15.918 3.90261 15.9767Z"
                fill="currentColor"
              />
            </svg>

            Добавить в избранное
          </button>
          <base-button label="Редактировать" />
        </div>
      </div>

      <div class="exercise-about">
        <div class="exercise-about__inner">
          <img src="@/assets/images/svg/exercise/book.svg" alt="Подробнее" class="exercise-about__img" />

          <p class="exercise-about__text">
            Поддержание • Регламентированное упражнение • База 1 • Общеподготовительные • Подготовительная часть
            тренировки
          </p>
        </div>

        <p class="exercise-about__type">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 7.907c-.019.498-.255.75-.636.797-.285.036-.657-.027-.834.13-.168.15-.113.535-.192.805-.784 2.654-2.53 4.274-5.248 4.805-.324.064-.404.181-.378.469.014.147.006.298-.01.446-.044.398-.31.638-.699.641-.39.002-.66-.236-.71-.63-.035-.285.03-.657-.127-.834-.15-.169-.534-.114-.804-.194-2.672-.787-4.289-2.548-4.817-5.286-.055-.281-.156-.363-.418-.342a2.479 2.479 0 0 1-.526-.017C.23 8.65.002 8.38 0 8.006c-.002-.376.236-.737.586-.688.817.114.921-.348 1.102-.99.747-2.669 2.537-4.258 5.255-4.784.28-.054.365-.154.343-.416A2.536 2.536 0 0 1 7.3.602c.047-.371.318-.6.693-.602.375-.002.643.223.702.593.01.066.015.135.018.202.032.681.032.681.688.822 2.623.561 4.627 2.65 5.041 5.293.052.33.184.369.467.385.297.016.612.077.873.208.14.07.181.331.217.404Zm-2.922.082c-.005-2.852-2.25-5.081-5.11-5.073-2.824.008-5.055 2.256-5.052 5.093.002 2.848 2.252 5.08 5.112 5.073 2.826-.008 5.055-2.255 5.05-5.093Z"
              fill="#464EA3"
            />
            <path
              d="M10.164 7.994c.002 1.234-.945 2.177-2.18 2.174-1.213-.004-2.15-.946-2.151-2.162 0-1.239.938-2.174 2.18-2.171 1.213.002 2.15.943 2.151 2.159Z"
              fill="#464EA3"
            />
          </svg>
          <span v-for="(type, index) in exercise.typeOfPreparation" :key="index">
            {{ type.name }}
            <template v-if="index < exercise.typeOfPreparation.length - 1">/</template>
          </span>
        </p>
      </div>

      <v-row class="exercise__row">
        <v-col class="exercise__col" cols="12">
          <h2 class="exercise-section__title">Задачи и навыки</h2>
          <v-card class="exercise-section__card">
            <v-row class="exercise-section__header">
              <v-col cols="5">
                <p class="exercise-section__target-title">Цель упражнения</p>
                <p class="exercise-section__target-value">Увеличение физических показателей</p>
              </v-col>
              <v-col cols="7">
                <p class="exercise-section__task-title">Задача упражнения</p>
                <p class="exercise-section__task-value">Подготовка к основной части упражнения</p>
              </v-col>
            </v-row>
            <v-row class="exercise-section__skills">
              <v-col cols="5">
                <p class="exercise-section__skills-title">Основные навыки</p>
                <div class="exercise-section__skills-main">
                  <wu-checkbox
                    v-for="(mainSkill, index) in exercise.mainSkills"
                    :key="index"
                    class="exercise-section__skills-checkbox"
                    small
                    white
                    textDark
                    readonly
                    value="true"
                    :label="mainSkill.name"
                  ></wu-checkbox>
                </div>
              </v-col>
              <v-col cols="7">
                <p class="exercise-section__skills-title">Дополнительные навыки</p>
                <div class="exercise-section__skills-extra">
                  <wu-checkbox
                    v-for="(extraSkill, index) in exercise.extraSkills"
                    :key="index"
                    class="exercise-section__skills-checkbox exercise-section__skills-checkbox--extra"
                    small
                    white
                    textDark
                    readonly
                    value="true"
                    :label="extraSkill.name"
                  ></wu-checkbox>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col class="exercise__col" cols="6">
          <h2 class="exercise-section__title">Описание</h2>
          <v-card class="exercise-section__card">
            <div class="exercise-section__description" v-html="exercise.description" />
          </v-card>
        </v-col>

        <v-col class="exercise__col" cols="6">
          <h2 class="exercise-section__title">Методология</h2>
          <v-card class="exercise-section__card">
            <ul class="exercise-section__methodology">
              <li class="exercise-section__methodology-item">
                <span class="exercise-section__methodology-step">1</span>
                Ноги полусогнуты в коленях
              </li>
              <li class="exercise-section__methodology-item">
                <span class="exercise-section__methodology-step">1</span>
                Ноги полусогнуты в коленях
              </li>
              <li class="exercise-section__methodology-item">
                <span class="exercise-section__methodology-step">1</span>
                Ноги полусогнуты в коленях
              </li>
            </ul>
          </v-card>
        </v-col>

        <v-col class="exercise__col" cols="12">
          <h2 class="exercise-section__title">Интенсивность и дозировка</h2>
          <v-card class="exercise-section__card">
            <v-row>
              <v-col cols="3">
                <div class="exercise-section__intensity">
                  <span class="exercise-section__intensity-text">Интенсивность</span>

                  <div class="exercise-section__intensity-value">
                    <img v-if="exercise.loadIntensity.load === 1" src="@/assets/images/svg/workload/low.svg" />
                    <img v-if="exercise.loadIntensity.load === 2" src="@/assets/images/svg/workload/medium.svg" />
                    <img v-if="exercise.loadIntensity.load === 3" src="@/assets/images/svg/workload/hight.svg" />
                    <img v-if="exercise.loadIntensity.load === 4" src="@/assets/images/svg/workload/submaximum.svg" />
                    <img v-if="exercise.loadIntensity.load === 5" src="@/assets/images/svg/workload/maximum.svg" />
                    {{ exercise.loadIntensity.name }}
                  </div>
                </div>
              </v-col>
              <v-col cols="3" offset="1">
                <div class="exercise-section__dosage-wrapper">
                  <p class="exercise-section__dosage-text">
                    <img
                      class="exercise-section__dosage-icon"
                      src="@/assets/images/svg/profile/my-groups.svg"
                      alt="Участники"
                    />
                    Кол-во участников
                  </p>

                  <wu-input class="exercise-section__dosage-input" value="1" readonly></wu-input>
                </div>
              </v-col>
              <v-col cols="4" offset="1">
                <div class="exercise-section__dosage-wrapper">
                  <p class="exercise-section__dosage-text">
                    <img
                      class="exercise-section__dosage-icon"
                      src="@/assets/images/svg/exercise/timer.svg"
                      alt="Время"
                    />
                    Время выполнения
                  </p>

                  <wu-input
                    class="exercise-section__dosage-input exercise-section__dosage-input--time"
                    :value="timeFormatter"
                    readonly
                  ></wu-input>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="exercise-section__dosage-wrapper">
                  <p class="exercise-section__dosage-text">
                    <img
                      class="exercise-section__dosage-icon"
                      src="@/assets/images/svg/exercise/sets.svg"
                      alt="Подходы"
                    />
                    Количество подходов
                  </p>

                  <wu-input class="exercise-section__dosage-input" value="2" readonly></wu-input>
                </div>
                <wu-slider class="exercise-section__dosage-slider" readonly value="2"></wu-slider>
              </v-col>
              <v-col cols="6">
                <div class="exercise-section__dosage-wrapper">
                  <p class="exercise-section__dosage-text">
                    <img
                      class="exercise-section__dosage-icon"
                      src="@/assets/images/svg/exercise/repeats.svg"
                      alt="Повторы"
                    />
                    Количество повторов
                  </p>

                  <wu-input class="exercise-section__dosage-input" value="14" readonly></wu-input>
                </div>
                <wu-slider class="exercise-section__dosage-slider" readonly value="14"></wu-slider>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col class="exercise__col" cols="6">
          <h2 class="exercise-section__title">Место проведения</h2>
          <v-card class="exercise-section__card">
            <div class="exercise-section__playground-wrapper">
              <wu-checkbox
                class="exercise-section__playground-checkbox"
                v-for="(place, index) in exercise.playground"
                :key="index"
                small
                white
                textDark
                :label="place.name"
                readonly
                value="true"
              ></wu-checkbox>
            </div>
          </v-card>
        </v-col>

        <v-col class="exercise__col" cols="6">
          <h2 class="exercise-section__title">Инвентарь</h2>
          <v-card
            class="exercise-section__card"
            :class="{ 'exercise-section__card--empty': !exercise.equipment.length }"
          >
            <p v-if="!exercise.equipment.length" class="exercise-section__inventory-empty">Не требуется</p>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'

export default {
  data() {
    return {
      exercise: null,
    }
  },
  components: {
    LeftMenu,
    Header,
  },
  computed: {
    timeFormatter() {
      return `0${(this.exercise.duration / 60) ^ 0}`.slice(-2) + ':' + ('0' + (this.exercise.duration % 60)).slice(-2)
    },
  },
  methods: {
    getExercise() {
      this.$exercises
        .getExercise(this.$route.params.id)
        .then(response => {
          response.playground = [
            {
              id: 1,
              name: 'Лед',
            },
            {
              id: 2,
              name: 'Футбольное поле',
            },
            {
              id: 3,
              name: 'Улица',
            },
          ]
          this.exercise = response
        })
        .catch(error => {
          console.log(error)
        })
    },
  },

  mounted() {
    this.getExercise()
  },
}
</script>

<style lang="scss" scoped>
.exercise {
  &-title {
    font-size: 24px;
    line-height: 33px;
    font-weight: normal;
    color: $blue02;
  }
  &__add-fav {
    margin-right: 30px;
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    color: #b9cbe5;
    svg {
      margin-right: 5px;
    }
    &:hover {
      color: $blue02;
    }
  }

  &__row {
    margin-top: -20px;
    margin-bottom: -20px;
  }

  &__col {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &__aside-title {
    display: inline-flex;
    align-items: center;
    margin-bottom: 11px;
    padding-left: 15px;
    font-size: 16px;
    line-height: 22px;
    font-weight: normal;
    color: $blue02;
  }

  &__aside-icon {
    margin-right: 10px;
  }

  &__aside-block {
    margin-bottom: 35px;
    padding: 15px 22px;
    border: 1px solid #dce5f2;
    border-radius: 16px;
  }

  &__aside-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  &__aside-info {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: $blue02;
  }

  &__aside-dots {
    flex-grow: 1;
    border-bottom: 1px dashed #b9cbe5;
  }

  &__aside-value {
    font-size: 14px;
    line-height: 19px;
    color: $blue02;
  }

  &__aside-info-list {
  }

  &__aside-info-item {
    font-size: 14px;
    line-height: 20px;
    text-transform: lowercase;
    color: $blue02;
  }
}

.exercise-about {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  &__inner {
    display: inline-flex;
    align-items: flex-start;
  }
  &__img {
    margin-right: 7px;
  }

  &__text {
    font-size: 14px;
    line-height: 16px;
    color: $blue02;
  }

  &__type {
    display: inline-flex;
    align-items: flex-start;
    font-size: 14px;
    line-height: 16px;
    color: $blue02;
    svg {
      margin-right: 7px;
    }
  }
}

.wu-tag {
  padding: 2px 9px;
  margin-right: 14px;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;

  background: $blue03;
  border-radius: 28px;
  &:last-child {
    margin-right: 0px;
  }
}

.exercise-section {
  &__title {
    margin-bottom: 12px;
    padding-left: 26px;
    font-size: 20px;
    line-height: 27px;
    font-weight: normal;
    color: $blue02;
  }

  &__card {
    padding: 19px 25px;
    background-color: #ffffff;

    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15) !important;
    border-radius: 28px;
    &--empty {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  /* Targets and tasks  */

  &__header {
    border-bottom: 1px solid #dce5f2;
  }

  &__target-title,
  &__task-title {
    margin-bottom: 6px;
    padding-left: 21px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: $blue02;
  }

  &__target-title {
    background-image: url('~@/assets/images/svg/exercise/target.svg');
    background-repeat: no-repeat;
    background-position: left center;
  }

  &__target-value,
  &__task-value {
    padding-left: 21px;
    font-size: 14px;
    line-height: 19px;
    color: $blue02;
  }

  &__task-title {
    background-image: url('~@/assets/images/svg/exercise/task.svg');
    background-repeat: no-repeat;
    background-position: left center;
  }

  &__task-value {
  }

  &__skills {
  }

  &__skills-title {
    font-weight: 500;
    font-size: 14px;
    color: $blue02;
  }

  &__skills-extra {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__skills-checkbox {
    &--extra {
      flex: 0 0 50% !important;
    }
  }

  /* End Targets and tasks  */

  /* Intensity & Dosage */
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
  /* End Intensity & Dosage */

  /* Methodology */
  &__methodology-item {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 16px;
    color: $blue02;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  &__methodology-step {
    display: inline-block;
    min-width: 16px;
    min-height: 16px;
    margin-right: 7px;
    font-family: 'FolksBold', serif;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;

    background-color: $blue02;
    border-radius: 4px;
  }
  /* End Methodology */

  /* Description */
  &__description {
    font-size: 14px;
    line-height: 24px;
    color: $blue02;
  }
  /* End Description */

  /* Playground */
  &__playground-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__playground-checkbox {
    flex: 0 0 50% !important;
  }
  /* End Playground */

  /* Inventory */
  &__inventory-empty {
    font-size: 20px;
    line-height: 27px;

    color: $blue06;
  }
  /* End Inventory */
}
</style>
