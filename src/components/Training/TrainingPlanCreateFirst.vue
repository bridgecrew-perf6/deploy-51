<template>
  <div class="training-plan training-plan--first">
    <div class="training-plan__title-wrapper">
      <span class="training-plan__title-icon"></span>
      <p class="training-plan__title">Часть I - подготовительная</p>
    </div>
    <div class="training-plan__content">
      <div class="training-plan__content-header">
        <div class="header-library">
          <div v-if="search" class="header-library__search-wrapper">
            <input v-model="filter.search" class="header-library__search-input" placeholder="Поиск упражнения ..." />
          </div>
          <div class="header-library__filters">
            <small-select
              v-model="filter.type_of_preparation"
              :items="utils.exerciseCategories"
              label="Направление"
              itemValue="id"
              text="name"
            />

            <small-select
              v-model="filter.load_intensity"
              :items="intensityList"
              itemValue="id"
              text="name"
              label="Интенсивность"
            />
          </div>

          <div class="d-flex align-center">
            <v-switch class="header-library__favorites" flat hide-details :ripple="false" v-model="favorites">
              <template v-slot:label>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.903 15.977c-.765.011-1.14-.494-.988-1.164.318-1.376.635-2.74.964-4.115.094-.376.047-.635-.282-.905-1.058-.87-2.07-1.799-3.115-2.692-.353-.294-.6-.647-.424-1.117.177-.47.588-.564 1.047-.6 1.41-.105 2.81-.211 4.208-.364.188-.023.424-.247.506-.435C6.37 3.34 6.9 2.07 7.429.811c.189-.435.412-.822.953-.81.505.011.729.375.905.799.529 1.258 1.07 2.515 1.587 3.785.141.341.33.459.694.482 1.41.094 2.81.223 4.22.341.423.035.835.2.882.635.035.317-.106.764-.33.976a74.005 74.005 0 0 1-3.232 2.821c-.294.247-.341.459-.259.8.33 1.363.635 2.739.976 4.114.106.423.059.788-.294 1.058-.376.294-.764.212-1.14-.023-1.2-.73-2.422-1.446-3.61-2.199-.294-.176-.493-.188-.787 0-1.176.717-2.351 1.411-3.527 2.116-.212.13-.459.212-.564.27Z"
                    :fill="favorites ? '#464EA3' : '#B9CBE5'"
                  />
                </svg>
              </template>
            </v-switch>

            <button
              class="header-library__search"
              :class="{ 'header-library__search--active': search }"
              @click="search = !search"
            >
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.297 7.81a6.81 6.81 0 1 1-13.621 0 6.81 6.81 0 0 1 13.62 0Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <rect
                  x=".707"
                  width="2.905"
                  height="6.81"
                  rx="1.453"
                  transform="rotate(-45 24.379 -7.72)"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="header__plan">
          <p class="header__plan-text">План-конспект</p>
          <div class="header__plan-time-wrapper">
            Общее время
            <p class="header__plan-time">
              <span class="header__plan-time-minutes">{{ timeSelectedExercises }}</span
              >мин
            </p>
          </div>
        </div>
      </div>
      <div class="training-plan__content-body">
        <div
          class="training-plan__library-wrapper"
          :class="{ 'training-plan__library-wrapper--empty': !library.length }"
        >
          <template v-if="!library.length">
            <svg width="80" height="72" viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.92 50.68C4.436 47.952-.311 42.793.018 35.565c.205-4.618 1.774-8.949 5.81-11.27 3.58-2.056 7.81-2.967 11.723-4.377 0-2.726-.61-6.293.135-9.548C19.044 4.436 24.72.147 30.807.094c14.89-.141 29.78-.077 44.674-.041 2.827.006 4.56 1.757 4.525 4.254-.041 2.409-1.845 4.025-4.754 4.03-13.914.03-27.822 0-41.736.042-1.445.006-2.98.123-4.313.61-2.674.976-3.907 3.174-3.878 5.953.03 2.703 2.015 5.095 4.677 5.694 1.228.276 2.52.335 3.784.335 13.127.023 26.254.012 39.38.017.782 0 1.57-.04 2.35.024 2.939.253 4.525 1.863 4.402 4.424-.118 2.392-1.751 3.902-4.554 3.955-3.896.076-7.797.018-11.893.018v12.544c3.203 0 6.393-.029 9.59.012 1.263.018 2.59-.012 3.778.347 1.904.576 3.26 1.816 3.079 4.066-.165 2.063-1.052 3.637-3.29 3.825-2.615.223-5.248.276-7.874.353-1.657.047-3.32.012-5.3.012v8.443c-3.332-1.633-6.346-2.803-9.02-4.5-2.767-1.764-5.088-1.61-7.791.058-2.556 1.575-5.377 2.726-8.485 4.26v-7.974c-4.46 0-8.632-.27-12.75.1-2.486.224-4.337 3.332-4.325 5.953.011 2.603 2.185 5.388 4.794 5.91 1.328.265 2.727.277 4.09.277 14.502.017 28.997.006 43.499.017 1.075 0 2.156.024 3.214.189 2.198.329 3.19 1.868 3.29 3.901.1 2.115-1.063 3.567-3.108 4.031-1.316.3-2.72.294-4.084.294-14.501.017-28.997.023-43.499.006-12.48 0-19.014-8.773-15.36-20.854Zm23.92-20.93c-.405-.136-.675-.294-.94-.294-7.333-.012-14.666-.106-21.999.029-3.743.07-6.164 2.55-6.358 5.952-.182 3.226 1.945 6.246 5.177 6.34 7.98.224 15.97.077 24.115.077.006-4.19.006-8.144.006-12.105Z"
                fill="#DCE5F2"
              />
            </svg>
            <p class="training-plan__library-empty-text">Библиотека упражнений пуста</p>
          </template>
          <template v-else>
            <vue-custom-scrollbar
              class="training-plan__ibrary-list-scroll"
              :settings="scrollSettings"
              style="height: 100%"
            >
              <draggable
                class="library__exercise-list"
                :group="{ name: 'exercises', pull: 'clone', put: false }"
                :list="library"
              >
                <transition-group>
                  <v-card class="library__exercise" v-for="element in library" :key="element.id">
                    <button class="library__exercise-add" @click="addExercise(element)">+</button>
                    <div class="library__exercise-cover" :style="`background-image: url(${element.image})`"></div>

                    <v-card-title class="library__exercise-title">
                      {{ element.title }}
                    </v-card-title>
                  </v-card>
                </transition-group>
              </draggable>
            </vue-custom-scrollbar>
          </template>
        </div>

        <div class="training-plan__exercises-wrapper">
          <vue-custom-scrollbar class="library__exercise-list-scroll" :settings="scrollSettings" style="height: 100%">
            <v-expansion-panels>
              <draggable
                class="training-plan__exercises"
                group="exercises"
                :list="selectedExercises"
                @choose="choose"
                @unchoose="unchoose"
              >
                <v-expansion-panel
                  class="training-plan__exercises-collapse"
                  v-for="(element, index) in selectedExercises"
                  :key="index"
                >
                  <v-expansion-panel-header class="training-plan__exercises-collapse-header">
                    <span class="training-plan__exercises-collapse-title">{{ element.title }}</span>
                    <p class="training-plan__exercises-collapse-time-wrap">
                      <span class="training-plan__exercises-collapse-time">{{ element.duration }}</span>
                      мин
                    </p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="training-plan__exercises-collapse-body">
                    <div class="training-plan__exercises-collapse-inner">
                      <p class="training-plan__exercises-collapse-desc">
                        {{ element.description }}
                      </p>

                      <div class="training-plan__exercises-collapse-footer">
                        <div>
                          <span class="training-plan__exercises-collapse-intensity">
                            <img v-if="element.loadIntensity.load === 1" src="@/assets/images/svg/workload/low.svg" />
                            <img
                              v-if="element.loadIntensity.load === 2"
                              src="@/assets/images/svg/workload/medium.svg"
                            />
                            <img v-if="element.loadIntensity.load === 3" src="@/assets/images/svg/workload/hight.svg" />
                            <img
                              v-if="element.loadIntensity.load === 4"
                              src="@/assets/images/svg/workload/submaximum.svg"
                            />
                            <img
                              v-if="element.loadIntensity.load === 5"
                              src="@/assets/images/svg/workload/maximum.svg"
                            />
                            {{ element.loadIntensity.name }}
                          </span>
                          <p class="training-plan__exercises-collapse-type">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 7.907c-.019.498-.255.75-.636.797-.285.036-.657-.027-.834.13-.168.15-.113.535-.192.805-.784 2.654-2.53 4.274-5.248 4.805-.324.064-.404.181-.378.469.014.147.006.298-.01.446-.044.398-.31.638-.699.641-.39.002-.66-.236-.71-.63-.035-.285.03-.657-.127-.834-.15-.169-.534-.114-.804-.194-2.672-.787-4.289-2.548-4.817-5.286-.055-.281-.156-.363-.418-.342a2.479 2.479 0 0 1-.526-.017C.23 8.65.002 8.38 0 8.006c-.002-.376.236-.737.586-.688.817.114.921-.348 1.102-.99.747-2.669 2.537-4.258 5.255-4.784.28-.054.365-.154.343-.416A2.536 2.536 0 0 1 7.3.602c.047-.371.318-.6.693-.602.375-.002.643.223.702.593.01.066.015.135.018.202.032.681.032.681.688.822 2.623.561 4.627 2.65 5.041 5.293.052.33.184.369.467.385.297.016.612.077.873.208.14.07.181.331.217.404Zm-2.922.082c-.005-2.852-2.25-5.081-5.11-5.073-2.824.008-5.055 2.256-5.052 5.093.002 2.848 2.252 5.08 5.112 5.073 2.826-.008 5.055-2.255 5.05-5.093Z"
                                fill="#464EA3"
                              />
                              <path
                                d="M10.164 7.994c.002 1.234-.945 2.177-2.18 2.174-1.213-.004-2.15-.946-2.151-2.162 0-1.239.938-2.174 2.18-2.171 1.213.002 2.15.943 2.151 2.159Z"
                                fill="#464EA3"
                              />
                            </svg>
                            <span v-for="(type, index) in element.typeOfPreparation" :key="index">
                              {{ type.name }}
                              <template v-if="index < element.typeOfPreparation.length - 1">/</template>
                            </span>
                          </p>
                        </div>
                        <div class="training-plan__exercises-collapse-favorite" v-if="element.favorite">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.903 15.977c-.765.011-1.14-.494-.988-1.164.318-1.376.635-2.74.964-4.115.094-.376.047-.635-.282-.905-1.058-.87-2.07-1.799-3.115-2.692-.353-.294-.6-.647-.424-1.117.177-.47.588-.564 1.047-.6 1.41-.105 2.81-.211 4.208-.364.188-.023.424-.247.506-.435C6.37 3.34 6.9 2.07 7.429.811c.189-.435.412-.822.953-.81.505.011.729.375.905.799.529 1.258 1.07 2.515 1.587 3.785.141.341.33.459.694.482 1.41.094 2.81.223 4.22.341.423.035.835.2.882.635.035.317-.106.764-.33.976a74.005 74.005 0 0 1-3.232 2.821c-.294.247-.341.459-.259.8.33 1.363.635 2.739.976 4.114.106.423.059.788-.294 1.058-.376.294-.764.212-1.14-.023-1.2-.73-2.422-1.446-3.61-2.199-.294-.176-.493-.188-.787 0-1.176.717-2.351 1.411-3.527 2.116-.212.13-.459.212-.564.27Z"
                              fill="#464EA3"
                            />
                          </svg>
                          В избранном
                        </div>
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </draggable>
            </v-expansion-panels>
          </vue-custom-scrollbar>
          <draggable v-if="trash" class="training-plan__trash" group="exercises">
            <span>
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.612 4.214h5.697c.82 0 .986.19.879.985l-1.354 10.173c-.13.997-.783 1.626-1.78 1.638a442.58 442.58 0 0 1-6.885 0c-1.009-.012-1.65-.617-1.78-1.626C1.926 11.94 1.475 8.51 1.012 5.08c-.083-.629.119-.866.783-.866h5.817ZM12.526 2.505H2.365C3.564 1.615 4.62.795 5.725.06c.177-.12.617-.012.854.142.534.32 1.009.748 1.543 1.104.166.107.487.178.63.095 1.103-.677 2.053-.451 2.92.44.201.213.486.379.854.664Z"
                  fill="#B9CBE5"
                />
              </svg>
              Удалить
            </span>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import draggable from 'vuedraggable'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'
import _ from 'lodash'

import SmallSelect from '@/components/elements/SmallSelect.vue'

export default {
  data() {
    return {
      trash: false,
      addItem: false,
      search: false,
      favorites: false,
      selectedExercises: [],
      filter: {},
      scrollSettings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false,
      },
    }
  },
  components: {
    draggable,
    vueCustomScrollbar,
    SmallSelect,
  },
  computed: {
    ...mapGetters('events', ['getUtils', 'getFirstExercises']),
    utils() {
      return this.getUtils
    },
    library() {
      return this.getFirstExercises
    },
    timeSelectedExercises() {
      return this.selectedExercises.reduce((sum, current) => sum + current.duration, 0)
    },

    intensityList() {
      if (this.utils.loadIntensities.length) {
        let intensityList = this.utils.loadIntensities
        intensityList.forEach(intensity => {
          if (intensity.load === 1) intensity.image = require('@/assets/images/svg/workload/low.svg')
          else if (intensity.load === 2) intensity.image = require('@/assets/images/svg/workload/medium.svg')
          else if (intensity.load === 3) intensity.image = require('@/assets/images/svg/workload/hight.svg')
          else if (intensity.load === 4) intensity.image = require('@/assets/images/svg/workload/submaximum.svg')
          else if (intensity.load === 5) intensity.image = require('@/assets/images/svg/workload/maximum.svg')
        })
        return intensityList
      } else {
        return []
      }
    },
  },
  watch: {
    filter: {
      handler: _.debounce(function (newValue) {
        this.loadFirstExercises(newValue)
      }, 500),
      deep: true,
    },
    selectedExercises: {
      handler: function (newValue) {
        this.handleChange(newValue)
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions('events', ['loadUtils', 'loadFirstExercises']),
    choose(evt) {
      this.trash = true
    },
    unchoose(evt) {
      this.trash = false
    },
    addExercise(el) {
      this.selectedExercises.push(el)
    },
    handleChange(event) {
      this.$emit('input', this.selectedExercises)
    },
  },
  mounted() {
    this.loadUtils()
    this.loadFirstExercises()
  },
}
</script>

<style lang="scss" scoped>
/* Card  */
.library__exercise-list {
  span {
    display: flex;
    flex-wrap: wrap;
  }
}

.library__exercise-list-scroll,
.training-plan__ibrary-list-scroll {
  padding-right: 10px;
}

.library__exercise {
  margin-right: 15px;
  margin-bottom: 15px;
  width: calc((100% - 30px) / 3);
  background-color: #ffffff;
  border: 2px solid rgba(185, 203, 229, 0.5);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  &::v-deep {
    box-shadow: none !important;
  }

  &:nth-child(3n) {
    margin-right: 0px;
  }

  &:nth-last-child(-n + 3) {
    margin-bottom: 5px;
  }
}

.library__exercise-cover {
  width: 100%;
  height: 100px;
  max-height: 100px;
  background-size: cover;
  background-position: center;
}

.library__exercise-title {
  max-height: 40px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: $blue02;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.library__exercise-add {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px !important;
}

/* End card */

/* Collapse */
.training-plan__exercises-collapse {
  border: 2px solid rgba(185, 203, 229, 0.5);
  border-radius: 12px;
  margin-bottom: 12px;

  &::after {
    display: none;
  }

  &:last-child {
    margin-bottom: 0px;
  }

  &.v-expansion-panel--active {
    margin-top: 0px;
  }
}

.training-plan__exercises-collapse-header {
  justify-content: space-between;
  padding: 12px 15px;
  color: $blue02;

  &::v-deep {
    .v-expansion-panel-header__icon {
      display: none;
    }
  }
}

.training-plan__exercises-collapse-title {
  font-size: 16px;
  line-height: 20px;
}

.training-plan__exercises-collapse-time-wrap {
  font-size: 12px;
  line-height: 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 0 0 auto;
}

.training-plan__exercises-collapse-time {
  font-size: 24px;
  line-height: 20px;
  font-weight: 700;
  color: $blue05;
}

.training-plan__exercises-collapse-body {
  &::v-deep {
    .v-expansion-panel-content__wrap {
      padding: 0px 15px 10px 15px;
    }

    .training-plan__exercises-collapse-inner {
      padding-top: 10px;
      border-top: 2px solid rgba(185, 203, 229, 0.5);
    }

    .training-plan__exercises-collapse-desc {
      margin-bottom: 12px;
      font-size: 14px;
      line-height: 16px;
      color: $blue02;
    }

    .training-plan__exercises-collapse-footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      line-height: 20px;
      color: $blue02;
    }

    .training-plan__exercises-collapse-intensity {
      img {
        vertical-align: bottom;
        margin-right: 5px;
      }
    }

    .training-plan__exercises-collapse-type {
      display: inline-block;
      margin-left: 35px;
      svg {
        vertical-align: middle;
      }
    }

    .training-plan__exercises-collapse-favorite {
      svg {
        margin-right: 5px;
        vertical-align: sub;
      }
    }
  }
}

/* EndCollapse */

/* Trash */
.training-plan__trash {
  position: absolute;
  bottom: 0;
  left: 20px;
  width: calc(100% - 20px);
  height: 60px;
  border: 2px dashed rgba(185, 203, 229, 0.5);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 22px;
  color: $blue06;

  .v-expansion-panel {
    display: none;
  }

  svg {
    vertical-align: text-top;
  }
}

/* End Trash */

.training-plan {
  position: relative;
  height: 410px;
  box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15);
  border-radius: 28px;
  padding-left: 62px;
  overflow: hidden;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0px;
  }
}

.training-plan--first {
  .training-plan__title-icon {
    &::after {
      background-image: url("data:image/svg+xml,%3Csvg width='9' height='20' viewBox='0 0 9 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)' fill='%2395B0DA'%3E%3Cpath d='M2.345 9.955c0-1.777-.007-3.554.004-5.33.006-.866.533-1.512 1.326-1.683.728-.156 1.503.208 1.81.897.114.257.172.56.173.842.012 3.554.013 7.107.006 10.66-.002 1.008-.692 1.724-1.633 1.737-.953.015-1.673-.713-1.68-1.744-.015-1.792-.006-3.586-.006-5.379ZM4.06 19.999c-.887 0-1.775.003-2.662-.001-.79-.004-1.239-.304-1.36-.898-.134-.66.284-1.28.957-1.294a238.88 238.88 0 0 1 5.955-.037c.638.004 1.082.529 1.066 1.144-.016.6-.48 1.06-1.147 1.074-.936.021-1.873.005-2.81.005a.019.019 0 0 1 .001.007ZM4.021.01c.935 0 1.87-.015 2.804.004.75.016 1.178.44 1.18 1.112.001.655-.456 1.096-1.2 1.1-1.87.01-3.74.01-5.609-.002C.478 2.22-.004 1.748 0 1.105.005.473.5.013 1.217.005 2.15-.004 3.086.004 4.02.004V.01Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h8.017v20H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    }
  }
}

.training-plan--second {
  .training-plan__title-icon {
    &::after {
      background-image: url("data:image/svg+xml,%3Csvg width='13' height='20' viewBox='0 0 13 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)' fill='%23B9CBE5'%3E%3Cpath d='M2.304 10.008c0-1.793-.007-3.584.004-5.377.004-.701.297-1.257.955-1.56.63-.29 1.23-.203 1.77.233.404.327.584.771.585 1.278.006 3.602.012 7.204 0 10.806-.005.981-.71 1.68-1.63 1.692-.946.012-1.668-.69-1.678-1.694-.02-1.792-.007-3.585-.006-5.378ZM10.051 10.024c0 1.743-.046 3.487.019 5.227.036.97-.917 1.868-1.677 1.84-.978-.04-1.651-.742-1.653-1.826-.006-3.52-.005-7.04 0-10.558.002-1.07.695-1.8 1.677-1.796.953.005 1.63.738 1.632 1.786.006 1.776.002 3.551.002 5.327ZM6.183 19.998c-1.63 0-3.26.005-4.89-.002-.76-.003-1.244-.4-1.29-1.032-.049-.656.415-1.177 1.108-1.196.758-.021 1.518-.008 2.276-.008 1.937 0 3.874-.004 5.811.001.74.002 1.482.02 2.223.039.432.011.833.395.919.86.09.492-.194 1.066-.653 1.227a2.192 2.192 0 0 1-.71.105c-1.598.01-3.196.006-4.794.006ZM6.228.002c1.631 0 3.262-.004 4.893.002.743.002 1.216.423 1.237 1.076.021.667-.432 1.134-1.162 1.146-1.033.017-2.067.006-3.1.006L1.605 2.23c-.193 0-.389 0-.58-.024C.368 2.122-.016 1.693.001 1.08.017.465.474.015 1.143.008 2.532-.006 3.92.003 5.308.003l.92-.001Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h12.358v20H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    }
  }
}

.training-plan--third {
  .training-plan__title-icon {
    &::after {
      background-image: url("data:image/svg+xml,%3Csvg width='17' height='20' viewBox='0 0 17 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)' fill='%23B9CBE5'%3E%3Cpath d='M10.126 9.997c0 1.777.013 3.554-.004 5.331-.012 1.337-1.212 2.14-2.363 1.592-.687-.328-.956-.92-.955-1.66.002-2.57 0-5.138 0-7.706 0-1.002-.019-2.004.01-3.005.022-.84.573-1.459 1.354-1.601.764-.139 1.497.214 1.788.923.12.288.16.626.162.942.016 1.727.008 3.456.008 5.184ZM14.55 9.997c0 1.793.01 3.586-.003 5.377-.01 1.294-1.228 2.09-2.354 1.548-.67-.323-.94-.894-.94-1.617V9.2c0-1.518-.011-3.035.002-4.554.01-1.076.781-1.81 1.782-1.726.896.074 1.504.741 1.51 1.698.01 1.793.002 3.586.003 5.378ZM2.429 10.016c0-1.79-.006-3.58.002-5.371.005-.984.64-1.691 1.528-1.733.881-.04 1.606.615 1.695 1.582.049.529.032 1.064.033 1.597.003 3.1.006 6.2.001 9.298 0 .752-.409 1.34-1.06 1.582-.67.25-1.43.104-1.83-.477a2.325 2.325 0 0 1-.39-1.2c-.041-1.759-.017-3.518-.017-5.278h.038ZM8.486.001c2.391 0 4.782-.004 7.174.002.922.002 1.47.694 1.196 1.488-.139.403-.43.64-.842.715-.204.037-.418.034-.627.034L4.48 2.243c-1.048 0-2.096 0-3.144-.004-.456-.002-.869-.12-1.14-.519A1.008 1.008 0 0 1 .136.618C.366.195.742.003 1.216.002c1.034-.002 2.068 0 3.102 0h4.169ZM8.46 19.996c-2.326-.001-4.653 0-6.979-.002-.192 0-.39.002-.577-.036a1.121 1.121 0 0 1-.896-1.112c.015-.527.419-.979.958-1.06.142-.021.29-.02.435-.02h14.15c.528 0 1.02.097 1.26.63.36.806-.16 1.58-1.082 1.593-1.244.018-2.488.006-3.732.007H8.46Z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h16.927v20H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    }
  }
}

.training-plan__title-wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 150px;
  background-color: $blue02;
}

.training-plan__title-icon {
  position: relative;
  display: block;
  width: 100%;
  height: 56px;
  background-color: $blue01;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    width: 62px;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
}

.training-plan__title {
  position: absolute;
  right: 100%;
  top: 56px;
  width: calc(410px - 56px);
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
  color: #f0eff8;
  transform: rotate(-90deg) translateY(20px);
  transform-origin: top right;
}

.training-plan__content {
  position: relative;
  height: 100%;
  background-color: #ffffff;
  border-radius: 28px;
  z-index: 2;
}

.training-plan__content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  border-bottom: 2px solid rgba($blue06, 0.5);
}

.header-library {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 50%;
  padding-left: 20px;
  padding-right: 10px;
}

.header-library__filters {
  display: flex;
}

.header-library__favorites {
  &::v-deep {
    margin-top: 0px;
    padding-top: 0px;
    margin-right: 50px;

    .v-input--selection-controls__input {
      display: none;
    }
  }
}

.header-library__search {
  color: #b9cbe5;
}

.header-library__search--active {
  color: $blue01;
}

.header-library__search-wrapper {
  position: absolute;
  width: 85%;
  z-index: 8;
}

.header-library__search-input {
  width: 100%;
  padding: 6px 50px 6px 18px;
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: $blue02;
  border: 1px solid #dce5f2;
  background-color: #fff;
  border-radius: 28px;

  &::placeholder {
    font-size: 14px;
    line-height: 19px;
    color: $blue05;
  }

  &:-ms-input-placeholder {
    font-size: 14px;
    line-height: 19px;
    color: $blue05;
  }

  &::-ms-input-placeholder {
    font-size: 14px;
    line-height: 19px;
    color: $blue05;
  }
}

.header__plan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 50%;
  padding-left: 10px;
  padding-right: 20px;
}

.header__plan-text {
  font-size: 16px;
  line-height: 22px;
  color: $blue02;
}

.header__plan-time-wrapper {
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 14px;
  line-height: 19px;
  color: $blue02;
}

.header__plan-time {
  margin-left: 15px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
}

.header__plan-time-minutes {
  display: block;
  font-family: 'FolksBold', sans-serif;
  font-size: 24px;
  line-height: 20px;
  font-weight: 700;
  color: $blue05;
}

.training-plan__content-body {
  height: calc(100% - 60px);
  display: flex;
  padding: 20px;
}

.training-plan__library-wrapper,
.training-plan__exercises-wrapper {
  position: relative;
  flex: 0 0 auto;
  max-width: 50%;
  width: 100%;
}

.training-plan__library-wrapper {
  padding-right: 10px;
  border-right: 2px dashed rgba(185, 203, 229, 0.5);
}

.training-plan__library-wrapper--empty {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.training-plan__library-empty-text {
  margin-top: 13px;
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  color: $blue06;
}

.training-plan__exercises-wrapper {
  padding-left: 20px;
  padding-bottom: 70px;
}

.training-plan__exercises {
  width: 100%;
  height: 100%;
}
</style>
