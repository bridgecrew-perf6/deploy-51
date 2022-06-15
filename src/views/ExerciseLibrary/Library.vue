<template>
  <div class="d-flex">
    <left-menu>
      <h3 class="h3 library-aside__title">Категория упражнений</h3>
      <wu-select
        class="library-aside__select"
        label="Вид спорта"
        multiple
        :items="multipleItems"
        itemValue="id"
        itemText="name"
        outlined
        v-model="sel"
      ></wu-select>

      <wu-select
        class="library-aside__select"
        label="Возрастная группа"
        multiple
        :items="multipleItems"
        itemValue="id"
        itemText="name"
        outlined
        v-model="sel"
      ></wu-select>

      <wu-select
        class="library-aside__select"
        label="Амплуа"
        :items="multipleItems"
        itemValue="id"
        itemText="name"
        outlined
      ></wu-select>

      <div class="library-aside__checkbox-group">
        <p class="library-aside__checkbox-label">Вид организации</p>
        <wu-checkbox small white textDark label="индивидуальное"></wu-checkbox>
        <wu-checkbox small white textDark label="групповое"></wu-checkbox>
        <wu-checkbox small white textDark label="командное"></wu-checkbox>
        <wu-checkbox small white textDark label="домашнее задание"></wu-checkbox>
      </div>

      <h3 class="h3 library-aside__title">Календарный период</h3>

      <wu-select
        class="library-aside__select"
        label="Период"
        multiple
        :items="multipleItems"
        itemValue="id"
        itemText="name"
        outlined
      ></wu-select>
      <wu-select
        class="library-aside__select"
        label="Этап"
        multiple
        :items="multipleItems"
        itemValue="id"
        itemText="name"
        outlined
      ></wu-select>
      <wu-select
        class="library-aside__select"
        label="Мезоцикл"
        multiple
        :items="multipleItems"
        itemValue="id"
        itemText="name"
        outlined
      ></wu-select>
      <wu-select
        class="library-aside__select"
        label="Микроцикл"
        multiple
        :items="multipleItems"
        itemValue="id"
        itemText="name"
        outlined
      ></wu-select>

      <wu-select
        class="library-aside__select"
        label="Этап обучения"
        :items="simpleSelectItems"
        itemValue="id"
        itemText="name"
        outlined
      ></wu-select>

      <wu-select
        class="library-aside__select"
        label="Основные средства упражнения"
        :items="simpleSelectItems"
        itemValue="id"
        itemText="name"
        outlined
      ></wu-select>

      <wu-select
        class="library-aside__select"
        label="Этап тренировки"
        :items="simpleSelectItems"
        itemValue="id"
        itemText="name"
        outlined
      ></wu-select>
    </left-menu>

    <div class="container">
      <Header hideSearch />

      <div class="d-flex align-center justify-space-between mb-8">
        <div class="d-flex align-center">
          <wu-icon icon="library" class="mr-3" />
          <h2 class="h1 library-title">Библиотека упражнений</h2>
        </div>

        <wu-button :to="{ name: 'ExerciseNew' }" label="Добавить упражнение" />
      </div>

      <v-card class="exercise-library">
        <div class="exercise-library__filters filters">
          <div class="filters__header">
            <v-switch class="filters__collapse-btn" hide-details v-model="showFilters">
              <template v-slot:label>
                <img src="@/assets/images/svg/filters.svg" alt="Фильтры" />
                Фильтр упражнений
              </template>
            </v-switch>

            <v-switch class="filters__fav" hide-details>
              <template v-slot:label>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.903 15.977c-.765.011-1.14-.494-.988-1.164.318-1.376.635-2.74.964-4.115.094-.376.047-.635-.282-.905-1.058-.87-2.07-1.799-3.115-2.692-.353-.294-.6-.647-.424-1.117.177-.47.588-.564 1.047-.6 1.41-.105 2.81-.211 4.208-.364.188-.023.424-.247.506-.435C6.37 3.34 6.9 2.07 7.429.811c.189-.435.412-.822.953-.81.505.011.729.375.905.799.529 1.258 1.07 2.515 1.587 3.785.141.341.33.459.694.482 1.41.094 2.81.223 4.22.341.423.035.835.2.882.635.035.317-.106.764-.33.976a74.005 74.005 0 0 1-3.232 2.821c-.294.247-.341.459-.259.8.33 1.363.635 2.739.976 4.114.106.423.059.788-.294 1.058-.376.294-.764.212-1.14-.023-1.2-.73-2.422-1.446-3.61-2.199-.294-.176-.493-.188-.787 0-1.176.717-2.351 1.411-3.527 2.116-.212.13-.459.212-.564.27Z"
                    fill="currentColor"
                  />
                </svg>
                Показать избранные упражнения
              </template>
            </v-switch>
          </div>

          <div class="filters__content" v-if="showFilters">
            <v-row class="filters__content-row">
              <v-col class="filters__content-col" cols="6">
                <wu-select label="Цель" outlined></wu-select>
              </v-col>
              <v-col class="filters__content-col" cols="6">
                <wu-select label="Задача упражнения" outlined></wu-select>
              </v-col>
              <v-col class="filters__content-col" cols="3">
                <wu-select label="Вид подготовки" outlined></wu-select>
              </v-col>
              <v-col class="filters__content-col" cols="3">
                <wu-select label="Иненсивность" outlined></wu-select>
              </v-col>
              <v-col class="filters__content-col" cols="3">
                <wu-select label="Место проведения" outlined></wu-select>
              </v-col>
              <v-col class="filters__content-col d-flex align-end" cols="3">
                <wu-number label="Кол-во участников" v-model="filter.countSportsmans">
                  <template v-slot:icon>
                    <img src="@/assets/images/svg/profile/my-groups.svg" />
                  </template>
                </wu-number>
              </v-col>
              <v-col class="filters__content-col filters__content-col--time" cols="6">
                <svg
                  class="filters__time-icon"
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#a)" fill="#464EA3">
                    <path
                      d="M6.866 2.303c3.834-.003 6.918 3.02 6.92 6.782.003 3.844-3.03 6.9-6.862 6.915C3.12 16.014 0 12.956 0 9.21c0-3.854 3.032-6.903 6.866-6.907Zm.798 4.978h-.002c0-.631.015-1.263-.005-1.894-.015-.48-.28-.795-.77-.792-.492.002-.754.323-.759.802a188.785 188.785 0 0 0-.002 3.668c.004.483.269.783.747.829.454.044.771-.297.789-.84.018-.59.002-1.182.002-1.773ZM6.907 1.51c-.494-.002-.99.013-1.484-.005-.471-.017-.82-.238-.814-.745.008-.492.33-.746.813-.75.97-.011 1.939-.017 2.907.003.565.012.9.32.85.77-.059.519-.399.737-.907.728-.455-.006-.91 0-1.365-.001ZM12.18 1.698c.605.02 1.916 1.068 1.95 1.507.018.238-.089.575-.262.713-.172.138-.57.2-.744.093a6.711 6.711 0 0 1-1.37-1.111c-.151-.164-.162-.576-.072-.811.08-.204.393-.315.498-.391Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a"><path fill="#fff" d="M0 0h14.133v16H0z" /></clipPath>
                  </defs>
                </svg>
                <p class="filters__time-label">Время выполнения</p>
                <wu-slider class="filters__time-slider" v-model="filter.time" :step="5"></wu-slider>
                <wu-input class="filters__time-input" readonly v-model="timeFormatter"></wu-input>
              </v-col>
              <v-col class="filters__content-col" cols="2"> </v-col>
              <v-col class="filters__content-col" cols="2"></v-col>
              <v-col class="filters__content-col d-flex justify-end align-end" cols="2">
                <base-button label="Очистить"></base-button>
              </v-col>
            </v-row>
          </div>
        </div>
        <div class="exercise-library__content">
          <v-row class="exercise-library__row">
            <v-col class="exercise-library__col" v-for="(ex, index) in library" :key="index" cols="6">
              <router-link
                :to="{ name: 'Exercise', params: { id: ex.id } }"
                class="exercise-library__exercise-card exercise-card"
              >
                <v-img :src="ex.image" class="exercise-card__img"></v-img>
                <div class="exercise-card__info">
                  <div class="exercise-card__info-header">
                    <h3 class="exercise-card__title">{{ ex.title }}</h3>

                    <p class="exercise-card__time">{{ ex.duration }}<span class="exercise-card__min">мин</span></p>
                  </div>
                  <div class="exercise-card__body">{{ ex.description }}</div>
                  <div class="exercise-card__footer">
                    <p class="exercise-card__intensity">
                      <img v-if="ex.loadIntensity.load === 1" src="@/assets/images/svg/workload/low.svg" />
                      <img v-if="ex.loadIntensity.load === 2" src="@/assets/images/svg/workload/medium.svg" />
                      <img v-if="ex.loadIntensity.load === 3" src="@/assets/images/svg/workload/hight.svg" />
                      <img v-if="ex.loadIntensity.load === 4" src="@/assets/images/svg/workload/submaximum.svg" />
                      <img v-if="ex.loadIntensity.load === 5" src="@/assets/images/svg/workload/maximum.svg" />
                      {{ ex.loadIntensity.name }}
                    </p>

                    <p class="exercise-card__type-preparation">
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
                      <span v-for="(type, index) in ex.typeOfPreparation" :key="index">
                        {{ type.name }}
                        <template v-if="index < ex.typeOfPreparation.length - 1">/</template>
                      </span>
                    </p>

                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.90261 15.9767C3.13847 15.9885 2.76227 15.483 2.9151 14.8129C3.23251 13.4374 3.54993 12.0737 3.8791 10.6983C3.97315 10.3221 3.92612 10.0634 3.59695 9.79306C2.53891 8.92311 1.52789 7.99438 0.481596 7.10092C0.128914 6.80702 -0.117963 6.45434 0.0583776 5.98409C0.234719 5.51385 0.646181 5.4198 1.10467 5.38454C2.51539 5.27873 3.91437 5.17293 5.31334 5.0201C5.50143 4.99659 5.73655 4.77322 5.81885 4.58512C6.37138 3.33898 6.9004 2.06933 7.42943 0.811429C7.61752 0.376454 7.84089 -0.0114956 8.38167 0.000260458C8.88718 0.0120165 9.11054 0.376454 9.28689 0.799672C9.81591 2.05757 10.3567 3.31547 10.874 4.58512C11.015 4.92605 11.2031 5.04361 11.5676 5.06712C12.9783 5.16117 14.3773 5.29049 15.788 5.40805C16.2112 5.44332 16.6227 5.6079 16.6697 6.04287C16.705 6.36029 16.5639 6.80702 16.3405 7.01863C15.2942 7.99438 14.2127 8.92311 13.1076 9.84008C12.8137 10.087 12.7667 10.2986 12.849 10.6395C13.1781 12.0032 13.4838 13.3787 13.8247 14.7541C13.9305 15.1773 13.8835 15.5418 13.5308 15.8122C13.1546 16.1061 12.7667 16.0238 12.3905 15.7886C11.1914 15.0598 9.96874 14.3427 8.78137 13.5903C8.48747 13.4139 8.28762 13.4022 7.99372 13.5903C6.81811 14.3074 5.64251 15.001 4.4669 15.7064C4.25529 15.8357 4.00841 15.918 3.90261 15.9767Z"
                        fill="#B9CBE5"
                      />
                    </svg>
                  </div>
                </div>
              </router-link>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'

export default {
  data() {
    return {
      library: [],
      filter: {
        countSportsmans: 0,
        time: 15,
      },
      multipleItems: [
        { id: 0, name: 'Хоккей' },
        { id: 1, name: 'Футбол' },
        { id: 2, name: 'Бадминтон' },
        { id: 3, name: 'Баскетбол' },
        { id: 4, name: 'Бейсбол' },
        { id: 5, name: 'Бокс' },
        { id: 6, name: 'Борьба вольная' },
      ],
      simpleSelectItems: [
        { id: 0, name: 'Хоккей' },
        { id: 1, name: 'Футбол' },
        { id: 2, name: 'Бадминтон' },
        { id: 3, name: 'Баскетбол' },
        { id: 4, name: 'Бейсбол' },
        { id: 5, name: 'Бокс' },
        { id: 6, name: 'Борьба вольная' },
      ],
      showFilters: false,
      sel: null,
    }
  },
  components: {
    LeftMenu,
    Header,
  },
  computed: {
    timeFormatter() {
      return `0${(this.filter.time / 60) ^ 0}`.slice(-2) + ':' + ('0' + (this.filter.time % 60)).slice(-2)
    },
  },
  methods: {
    getLibrary() {
      this.$exercises
        .getExercises()
        .then(response => {
          for (let index = 0; index < 6; index++) {
            this.library = this.library.concat(response)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
  mounted() {
    this.getLibrary()
  },
}
</script>

<style lang="scss" scoped>
.library-title {
  font-weight: normal;
  color: $blue02;
}

.library-aside {
  &__title {
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 27px;
    font-weight: normal;
    color: $blue02;
  }

  &__select {
    margin-bottom: 13px;
  }

  &__checkbox-group {
    margin-bottom: 50px;
  }

  &__checkbox-label {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 19px;

    color: $blue02;
  }
}

.exercise-library {
  margin-bottom: 31px;
  padding: 21px;
  background-color: #ffffff;

  box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15) !important;
  border-radius: 28px;
  &__filters {
    margin-bottom: 29px;
  }

  &__row {
    &::v-deep {
      margin: -10px;
    }
  }

  &__col {
    &::v-deep {
      padding: 10px;
    }
  }
}

/* Filters */
.filters {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  &__collapse-btn {
    &::v-deep {
      margin-top: 0px;
      padding: 0px;
      &.v-input--is-label-active {
        .v-label {
          &::after {
            transform: translateY(-50%) rotate(0deg);
          }
        }
      }
      .v-input__slot {
        margin-bottom: 0px;
      }
      .v-input--selection-controls__input {
        display: none;
      }
      .v-label {
        position: relative;
        padding-right: 20px;
        font-size: 20px;
        line-height: 27px;

        color: $blue02;
        img {
          margin-right: 10px;
        }
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 0px;

          width: 11px;
          height: 7px;

          background-image: url("data:image/svg+xml,%3Csvg width='11' height='7' viewBox='0 0 11 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.6529 5.79979C11.1052 5.34742 11.1052 4.614 10.6529 4.16163L6.8305 0.339273C6.59896 0.107732 6.29378 -0.00529538 5.99035 0.000190488C5.68809 -0.00435096 5.3844 0.108696 5.15376 0.339331L1.3314 4.16169C0.879037 4.61405 0.879038 5.34748 1.3314 5.79985C1.78376 6.25221 2.51719 6.25221 2.96955 5.79985L5.99216 2.77724L9.0147 5.79979C9.46706 6.25215 10.2005 6.25215 10.6529 5.79979Z' fill='%23464EA3'/%3E%3C/svg%3E%0A");
          background-repeat: no-repeat;
          background-position: center;

          transform: translateY(-50%) rotate(180deg);
          transform-origin: center;
          transition: transform 0.3s ease-out;
        }
      }
    }
  }

  &__fav {
    &::v-deep {
      margin-top: 0px;
      padding: 0px;
      &.v-input--is-label-active {
        .v-label {
          color: $blue02;
        }
      }
      .v-input__slot {
        margin-bottom: 0px;
      }
      .v-input--selection-controls__input {
        display: none;
      }
      .v-label {
        color: #b9cbe5;
        svg {
          margin-right: 8px;
        }
      }
    }
  }

  &__content {
  }

  &__content-col {
    &--time {
      display: flex;
      align-items: center;
    }
  }

  &__time-icon {
    margin-right: 10px;
    flex-shrink: 0;
  }

  &__time-label {
    flex-shrink: 0;
    margin-right: 15px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;

    color: $blue02;
  }

  &__time-slider {
    flex: 1 1 auto !important;
    margin-right: 15px;
  }

  &__time-input {
    max-width: 70px;
  }
}
/* End Filters */

/* Card */
.exercise-card {
  display: flex;
  align-items: stretch;
  background-color: #ffffff;

  border: 2px solid #dce5f2;
  border-radius: 16px;
  overflow: hidden;
  &:hover {
    border-color: $blue05;
  }
  &__img {
    max-width: 168px;
    min-height: 100%;
    border-radius: 0 !important;
  }

  &__info {
    width: 100%;
    padding: 29px 21px 21px;
  }

  &__info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 2px solid #dce5f2;
  }

  &__title {
    font-size: 16px;
    line-height: 20px;
    font-weight: normal;
    color: $blue02;
  }

  &__time {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: 'FolksBold', serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 20px;
    text-align: center;
    color: $blue05;
  }

  &__min {
    width: 100%;
    font-family: $Manrope, sans-serif !important;
    font-size: 12px;
    line-height: 12px;
    color: $blue02;
  }

  &__body {
    min-height: 40px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 16px;
    color: $blue02;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__intensity {
    font-size: 14px;
    line-height: 20px;
    color: $blue02;
    img {
      margin-right: 5px;
    }
  }

  &__type-preparation {
    font-size: 14px;
    line-height: 20px;
    color: $blue02;
    svg {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
}
/* End Card */
</style>
