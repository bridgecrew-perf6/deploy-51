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
                <label class="filters__label-btn-group">Библиотека упражнений</label>
                <v-btn-toggle v-model="library.libraryToggle" class="filters__btn-group" group>
                  <v-btn :ripple="false" class="filters__btn-toggle" value="all"> Общедоступные </v-btn>

                  <v-btn :ripple="false" class="filters__btn-toggle" value="my"> Мои упражнения </v-btn>

                  <v-btn :ripple="false" class="filters__btn-toggle" value="archive"> Архив </v-btn>
                </v-btn-toggle>
              </v-col>
              <v-col class="filters__content-col" cols="3">
                <wu-select label="Задача упражнения" outlined></wu-select>
              </v-col>
              <v-col class="filters__content-col" cols="3">
                <wu-select label="Цель" outlined></wu-select>
              </v-col>
              <v-col class="filters__content-col" cols="6">
                <wu-select label="Вид подготовки" outlined></wu-select>
              </v-col>
              <v-col class="filters__content-col" cols="6">
                <wu-input label="Быстрый поиск" placeholder="Начните вводить название"></wu-input>
              </v-col>
              <v-col class="filters__content-col" cols="6">
                <wu-select label="Инвентарь" outlined></wu-select>
              </v-col>
              <v-col class="filters__content-col" cols="6">
                <wu-select label="Навыки" outlined></wu-select>
              </v-col>
              <v-col class="filters__content-col d-flex justify-end align-end" cols="12">
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
                  </div>
                  <div class="exercise-card__body">{{ ex.description }}</div>
                  <div class="exercise-card__footer">
                    <p class="exercise-card__type-preparation">
                      <wu-chip
                        color="great"
                        label
                        v-for="(type, index) in ex.typeOfPreparation"
                        :text="type.name"
                        :key="index"
                      />
                      <wu-chip color="badly" label text="Обычная" />
                      <wu-chip label text="+3" />
                    </p>

                    <div class="exercise-card__actions">
                      <button class="exercise-card__archive">
                        <svg width="14" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g fill="currentColor">
                            <path
                              d="M6.617 4.205h5.698c.82 0 .985.19.879.986L11.84 15.363c-.13.997-.783 1.627-1.78 1.638-2.291.012-4.594.024-6.885 0-1.009-.012-1.65-.617-1.78-1.626C.932 11.933.48 8.502.018 5.072c-.083-.63.118-.867.783-.867h5.816ZM11.532 2.496H1.37C2.57 1.606 3.626.786 4.73.051c.177-.119.616-.012.854.142.534.32 1.009.748 1.543 1.104.166.107.487.178.629.095 1.104-.677 2.054-.451 2.92.44.202.213.487.38.855.664Z"
                            />
                          </g>
                        </svg>
                      </button>
                      <button class="exercise-card__fav">
                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.903 15.977c-.765.011-1.14-.494-.988-1.164.318-1.376.635-2.74.964-4.115.094-.376.047-.635-.282-.905-1.058-.87-2.07-1.799-3.115-2.692-.353-.294-.6-.647-.424-1.117.177-.47.588-.564 1.047-.6 1.41-.105 2.81-.211 4.208-.364.188-.023.424-.247.506-.435C6.37 3.34 6.9 2.07 7.429.811c.189-.435.412-.822.953-.81.505.011.729.375.905.799.529 1.258 1.07 2.515 1.587 3.785.141.341.33.459.694.482 1.41.094 2.81.223 4.22.341.423.035.835.2.882.635.035.317-.106.764-.33.976a74.005 74.005 0 0 1-3.232 2.821c-.294.247-.341.459-.259.8.33 1.363.635 2.739.976 4.114.106.423.059.788-.294 1.058-.376.294-.764.212-1.14-.023-1.2-.73-2.422-1.446-3.61-2.199-.294-.176-.493-.188-.787 0-1.176.717-2.351 1.411-3.527 2.116-.212.13-.459.212-.564.27Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
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
        libraryToggle: 'all',
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
      this.$exercises.getExercises().then(response => {
        this.library = this.library.concat(response)
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
  border-bottom: 1px solid #dce5f2;
  padding-bottom: 22px;
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  &__label-btn-group {
    display: block;
    margin-bottom: 2px;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;

    color: $blue02;
  }

  &__btn-group {
    &::v-deep {
    }
  }

  &__btn-toggle {
    margin: 0px !important;
    padding: 5px 8px !important;
    &::v-deep {
      height: auto !important;
      border-width: 1px;
      border-color: #b9cbe5 !important;
      &::before {
        background-color: #fbfbfe;
        opacity: 1;
      }
      &:first-child {
        border-top-left-radius: 4px !important;
        border-bottom-left-radius: 4px !important;
      }
      &:last-child {
        border-top-right-radius: 4px !important;
        border-bottom-right-radius: 4px !important;
      }

      &.v-btn--active {
        &::before {
          background-color: $blue02;
          opacity: 1;
        }
        .v-btn__content {
          color: #fff;
        }
      }
      .v-btn__content {
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        text-transform: none;
        letter-spacing: normal;

        color: $blue01;
      }
    }
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
  min-height: 170px;

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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  &__body {
    display: -webkit-box;
    max-height: 36px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    margin-bottom: 10px;
    font-size: 14px;
    line-height: 16px;
    color: $blue02;
    &:hover {
      position: absolute;
      top: 0px;
      max-height: none;
      display: block;
      -webkit-line-clamp: none;
      overflow: visible;
      padding: 10px;
      background: #fbfbfe;
      border: 1px solid #b9cbe5;

      box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
      border-radius: 12px;
      z-index: 5;
      transition: 2.5s all linear;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  &__actions {
  }

  &__archive {
    margin-right: 10px;
    color: $terrible;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }

  &__fav {
    color: #b9cbe5;
    &:hover {
      color: #ffc700;
    }
  }
}
/* End Card */
</style>
