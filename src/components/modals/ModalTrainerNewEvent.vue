<template>
  <div>
    <v-dialog v-model="show" content-class="modal-create-event" max-width="668">
      <div class="v-application v-application--is-ltr">
        <div class="modal-close" @click.stop="show = false"></div>
        <div class="modal-header">
          <div class="modal-header__title h2">Добавить событие</div>
        </div>
        <v-form @submit.prevent="" ref="createEventform">
          <div class="modal-body">
            <v-row class="modal-body__title-wrap">
              <v-col cols="7" v-if="event.eventType != 'standard'">
                <v-text-field
                  v-if="event.eventType != 'match' && event.eventType != 'training'"
                  class="modal-create__input modal-create__input--title"
                  flat
                  hide-details
                  placeholder="Название/Тема"
                  v-model="event.name"
                ></v-text-field>
                <v-select
                  v-if="event.eventType == 'match' || event.eventType == 'training'"
                  :items="event.eventType == 'training' ? lessonTypes : matchTypes"
                  item-value="id"
                  item-text="name"
                  flat
                  single-line
                  hide-details
                  class="modal-create__select-event-subtype"
                  :menu-props="menuSettingsSubcategory"
                  label="Выберите подкатегорию"
                  v-model="event.title"
                >
                  <template v-slot:item="{ item }">
                    <p class="modal-create__select-event-type-name">{{ item.name }}</p>
                  </template>
                  <template v-slot:selection="{ item }">
                    <p class="modal-create__select-event-type-name modal-create__select-event-type-name--big">
                      {{ item.name }}
                    </p>
                  </template>
                </v-select>
              </v-col>
              <v-col :cols="event.eventType != 'standard' ? 5 : 12">
                <v-select
                  :items="eventTypes"
                  item-value="id"
                  item-text="label"
                  flat
                  single-line
                  hide-details
                  hide-selected
                  class="modal-create__select-event-type"
                  v-model="event.eventType"
                  :menu-props="menuSettings"
                  @input="changeCategory()"
                >
                  <template v-slot:item="{ item }">
                    <span
                      class="modal-create__select-event-type-color"
                      :style="`background-color: ${item.color}`"
                    ></span>
                    <p class="modal-create__select-event-type-name">{{ item.label }}</p>
                  </template>
                  <template v-slot:selection="{ item }">
                    <span
                      class="modal-create__select-event-type-color"
                      :style="`background-color: ${item.color}`"
                    ></span>
                    <p class="modal-create__select-event-type-name">{{ item.label }}</p>
                  </template>
                </v-select>
              </v-col>
            </v-row>

            <template v-if="event.eventType == 'training' || event.eventType == 'standard'">
              <v-radio-group v-model="event.objectType" @change="getSportsmen" row>
                <wu-radio darkColor label="Групповое" value="group" />
                <wu-radio darkColor label="Индивидуальное" value="individual" />
              </v-radio-group>
            </template>

            <v-row class="mb-1 justify-space-between">
              <v-col cols="3" class="modal-create__date">
                <wu-input-date v-model="event.date" icon />
              </v-col>

              <v-col cols="5" class="d-flex align-center modal-create__time">
                <wu-input-time v-model="event.timeStart" @input="event.timeEnd = ''" icon class="modal-create__time-inp" />
                <span></span>
                <wu-input-time v-model="event.timeEnd" :minTime="startTime" class="modal-create__time-inp" />
              </v-col>
              <v-col cols="2" class="d-flex align-center justify-end">
                <button @click="showReminders = true" class="ml-8">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.822 13.493c-3.407-3.331-2.477-7.947.009-10.128 2.756-2.426 6.771-2.359 9.375.211 2.503 2.477 2.934 6.78-.253 9.96.304.261.617.515.921.777.135.118.262.262.372.397.296.355.279.786-.017 1.065-.321.296-.718.296-1.057-.025a37.97 37.97 0 0 1-1.166-1.167c-.17-.177-.305-.203-.541-.084-2.03.98-4.067.997-6.096.008-.228-.11-.372-.101-.55.085-.354.38-.726.744-1.107 1.107-.397.38-.837.398-1.158.068-.304-.313-.262-.778.119-1.158.372-.38.752-.736 1.15-1.116Zm5.385-5.816a2.423 2.423 0 0 1-.025-.305c0-.65.017-1.293-.008-1.944-.017-.507-.347-.812-.795-.795-.448.017-.693.305-.702.829 0 .972-.008 1.944 0 2.916 0 .448.229.753.668.77.803.033 1.606.033 2.41-.009.43-.017.701-.38.684-.77-.025-.422-.321-.692-.786-.7-.473.008-.938.008-1.446.008ZM4.718.786c-.152.253-.228.482-.388.625a83.53 83.53 0 0 1-2.283 1.936c-.38.313-.812.262-1.082-.076s-.237-.77.135-1.082C1.844 1.547 2.588.896 3.366.304c.194-.144.575-.186.803-.11.22.068.355.372.55.592ZM12.86 0c.27.127.473.178.617.296.76.625 1.513 1.26 2.257 1.894.347.295.38.769.11 1.09-.27.321-.702.372-1.057.076a101.462 101.462 0 0 1-2.325-1.953c-.262-.22-.363-.54-.194-.837.127-.22.389-.38.592-.566Z"
                      fill="#95B0DA"
                    />
                  </svg>
                </button>
              </v-col>
            </v-row>

            <v-row v-if="event.eventType == 'training' || event.eventType == 'standard'">
              <v-col>
                <v-select
                  :items="groups"
                  item-value="id"
                  item-text="name"
                  flat
                  single-line
                  hide-details
                  class="modal-create__select-event-subtype modal-create__select--border"
                  :menu-props="menuSettingsBordered"
                  label="Выберите группу"
                  @change="getSportsmen"
                  v-model="event.group"
                >
                  <template slot="prepend">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.675" cy="2.837" r="2.837" fill="#95B0DA" />
                      <circle cx="12.059" cy="3.547" r="2.128" fill="#95B0DA" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="m8.867 8.474.04.038c1.064 1.064 2.127 2.837 2.128 4.256 0-1.419-1.064-3.192-2.128-4.256a6.823 6.823 0 0 0-.04-.038Zm1.064-.943c.626.63 1.233 1.445 1.693 2.313.454.859.83 1.893.83 2.924C15.095 12.761 16 12.68 16 11.633c0-1.134-.798-2.553-1.596-3.404-.798-.852-1.596-1.135-2.66-1.135-.694 0-1.271.117-1.813.437Z"
                        fill="#95B0DA"
                      />
                      <path
                        d="M9.222 8.512C8.158 7.448 7.094 7.094 5.675 7.094s-2.472.343-3.547 1.418C1.053 9.588 0 11.35 0 12.77c0 1.418 1.419 1.419 5.675 1.418 4.256 0 5.675 0 5.675-1.418 0-1.42-1.064-3.193-2.128-4.257Z"
                        fill="#95B0DA"
                      />
                    </svg>
                  </template>
                </v-select>
              </v-col>
              <v-col>
                <v-select
                  v-if="event.objectType === 'individual' && event.group"
                  :items="sportsmen"
                  no-data-text="В выбранной команде нет спортсменов"
                  item-value="id"
                  flat
                  single-line
                  hide-details
                  class="modal-create__select-event-subtype modal-create__select--border"
                  :menu-props="menuSettingsBordered"
                  label="Выберите спортсмена"
                  v-model="event.sportsman"
                >
                  <template slot="prepend">
                    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.675" cy="2.837" r="2.837" fill="#95B0DA" />
                      <path
                        d="M9.222 8.512C8.158 7.448 7.094 7.094 5.675 7.094s-2.472.343-3.547 1.418C1.053 9.588 0 11.35 0 12.77c0 1.418 1.419 1.419 5.675 1.418 4.256 0 5.675 0 5.675-1.418 0-1.42-1.064-3.193-2.128-4.257Z"
                        fill="#95B0DA"
                      />
                    </svg>
                  </template>
                  <template v-slot:item="{ item }">
                    <p class="modal-create__select-event-type-name">
                      {{ item.user.firstName }} {{ item.user.lastName }}
                    </p>
                  </template>
                  <template v-slot:selection="{ item }">
                    <p class="modal-create__select-event-type-name">
                      {{ item.user.firstName }} {{ item.user.lastName }}
                    </p>
                  </template>
                </v-select>
              </v-col>
            </v-row>

            <v-row v-if="event.eventType == 'training' || event.eventType == 'standard'">
              <v-col>
                <v-select
                  :items="exercisePlaygrounds"
                  item-value="id"
                  item-text="name"
                  flat
                  single-line
                  hide-details
                  class="modal-create__select-event-subtype modal-create__select--border"
                  :menu-props="menuSettingsBordered"
                  label="Выберите тип зала"
                  v-model="event.placeType"
                >
                  <template slot="prepend">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.483 12.417V2.006C1.483.566 2.05 0 3.491 0h6.949c1.441 0 2.003.56 2.005 2.014.004 3.224.002 6.45.002 9.673v.758c.279 0 .531-.014.781.003.405.028.688.224.734.652.047.446-.165.74-.598.84-.213.05-.44.053-.66.053-3.867.002-7.734.002-11.6 0-.2 0-.462.035-.583-.072-.23-.203-.535-.507-.52-.752.014-.247.34-.543.602-.686.22-.12.54-.05.88-.067Zm8.588-4.657c.401.013.806-.346.78-.737-.03-.444-.244-.766-.74-.765-.471.001-.761.262-.775.727-.015.469.27.725.735.775Z"
                        fill="#95B0DA"
                      />
                    </svg>
                  </template>
                </v-select>
              </v-col>
            </v-row>

            <v-row v-if="event.eventType == 'match'">
              <v-col cols="12">
                <v-text-field
                  class="modal-create__input modal-create__input--small"
                  height="auto"
                  flat
                  hide-details
                  placeholder="Место проведения"
                  v-model="event.location"
                >
                  <template slot="prepend">
                    <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.352 0c3.774.086 6.252 3.68 5.035 7.341-.695 2.084-1.879 3.902-3.148 5.67a37.52 37.52 0 0 1-1.218 1.603c-.377.48-.917.523-1.278.068-1.792-2.247-3.481-4.57-4.416-7.332C-.677 4.357.696 1.398 3.56.377 4.135.18 4.752.12 5.352 0ZM3.44 5.412c0 1.106.823 1.946 1.904 1.946 1.055 0 1.93-.857 1.93-1.886 0-1.072-.858-1.947-1.922-1.947A1.903 1.903 0 0 0 3.44 5.412Z"
                        fill="#95B0DA"
                      />
                    </svg>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </div>
          <div class="modal-footer">
            <wu-button
              :disabled="event.eventType === 'none' || $v.$invalid"
              label="Перейти к событию"
              :to="{ name: nameRoute, query: event }"
              type="submit"
            ></wu-button>
          </div>
        </v-form>
      </div>
    </v-dialog>

    <modal-reminders :visible="showReminders" @close="showReminders = false" @getData="getRemindersData($event)" />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

import ModalReminders from './ModalReminders.vue'
import ModalRepeat from './ModalRepeat.vue'

export default {
  name: 'ModalTrainerNewEvent',
  components: { ModalReminders, ModalRepeat },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      event: {
        eventType: 'none',
        title: '',
        location: '',
        date: '',
        timeStart: '',
        timeEnd: '',
        placeType: '',
        objectType: 'group',
      },

      individual: 'false',

      groups: [],
      sportsmen: [],
      typeOfPreparation: 'none',
      typePreparationList: [{ id: 'none', label: 'Категория события', color: '#95B0DA' }],
      exercisePlaygrounds: [],

      menuSettings: {
        contentClass: 'modal-create__select-menu',
        nudgeBottom: 32,
        nudgeLeft: 0,
        maxWidth: 236,
      },
      menuSettingsSubcategory: {
        contentClass: 'modal-create__select-menu',
      },
      menuSettingsBordered: {
        contentClass: 'modal-create__select-menu',
        nudgeBottom: 32,
        nudgeLeft: 12,
      },
      showReminders: false,
    }
  },
  validations: {
    event: {
      location: {
        required(value) {
          if (this.event.eventType == 'match') {
            if (!value) return false
            return true
          } else {
            return true
          }
        },
      },
      title: {
        required(value) {
          if (this.event.eventType == 'match' || this.event.eventType == 'training') {
            if (!value) return false
            return true
          } else {
            return true
          }
        },
      },
      group: {
        required(value) {
          if (this.event.eventType == 'training' || this.event.eventType == 'standard') {
            if (!value) return false
            return true
          } else {
            return true
          }
        },
      },
      placeType: {
        required(value) {
          if (this.event.eventType == 'training' || this.event.eventType == 'standard') {
            if (!value) return false
            return true
          } else {
            return true
          }
        },
      },
      date: {
        required,
      },
      timeStart: {
        required,
      },
      timeEnd: {
        required,
      },
    },
  },
  computed: {
    ...mapGetters('events', ['getEventTypes', 'getLessonTypes', 'getMatchTypes']),
    nameRoute() {
      if (this.event.eventType === 'match') return 'CreateEvent'
      else if (this.event.eventType === 'training') {
        return 'TrainingCreateView'
      } else if (this.event.eventType === 'standard') return 'StandardCreateView'
      else return ''
    },
    eventTypes() {
      return this.typePreparationList.concat(this.getEventTypes)
    },
    lessonTypes() {
      return this.getLessonTypes
    },
    matchTypes() {
      return this.getMatchTypes
    },
    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      },
    },
    startTime() {
      const time = new Date(this.$moment(this.event.timeStart, 'hh:mm').format('YYYY/MM/DD HH:mm:ss'))
      return time.getTime()
    },
    endTime() {
      const time = new Date(this.$moment(this.event.timeEnd, 'hh:mm').format('YYYY/MM/DD HH:mm:ss'))
      return time.getTime()
    },
  },
  methods: {
    changeCategory() {
      if (this.event.eventType === 'standard') {
        delete this.event.title
      } else {
        this.event.title = ''
      }

      if (this.event.eventType === 'training' || this.event.eventType === 'standard') this.getGroups()
    },
    getGroups() {
      this.$groups
        .getGroups({ coaches__id__contains: localStorage.getItem('trainerID') })
        .then(response => {
          this.groups = response
        })
        .catch(error => {
          console.log(error)
        })
    },
    getPlaceTypes() {
      this.$events
        .getTrainingPlaceTypes()
        .then(response => {
          this.exercisePlaygrounds = response
        })
        .catch(error => {
          console.log(error)
        })
    },
    async getSportsmen() {
      if (this.event.objectType !== 'individual' || !this.event.group) return

      const response = await this.$sportsmen.getSportsmen({
        group__in: this.event.group,
      })
      this.sportsmen = response
    },
  },
  mounted() {
    this.getPlaceTypes()
  },
}
</script>

<style scoped lang="scss">
.modal-create-event {
  border-radius: 28px;
}

.modal-header {
  padding: 31px 31px 34px 41px;
}

.modal-header__title {
  color: $blue02;
}

.modal-body {
  padding: 0 31px 16px 51px;
}

.modal-footer {
  padding: 0 30px 30px;
  display: flex;
  justify-content: center;
}

.modal-body__title-wrap {
  position: relative;
  margin-bottom: 15px;
  padding-bottom: 0px;
  border-bottom: 1px solid #ecf6ff;

  .col {
    padding-bottom: 0px;
  }
}

.modal-create__input {
  &::v-deep {
    padding: 0;
    margin-bottom: 10px;

    .v-input__slot {
      padding: 0 !important;

      &::before,
      &::after {
        display: none;
      }
    }

    .v-text-field__slot input {
      max-height: none;
      font-size: 16px;
      line-height: 22px;

      padding: 8px 10px 0px;

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

.modal-create__input--small {
  &::v-deep {
    .v-text-field__slot input {
      font-size: 14px;
      line-height: 19px;
    }

    .v-input__slot {
      input {
        padding: 6px 8px;
      }
    }

    .v-input__control {
      border: 1px solid #ecf6ff;
      border-radius: 4px;
    }
  }
}

.modal-create__time {
  span {
    width: 25px;
    height: 1px;
    margin: 0 6px;
    background-color: #ecf6ff;
  }
}

.modal-create__time-inp {
  &::v-deep {
    .wu-input-time__input .v-input__control {
      width: 80px;
    }
  }
}

.modal-create__select-event-type,
.modal-create__select-event-subtype {
  padding: 0;

  &::v-deep {
    &.v-input--is-focused.v-select--is-menu-active {
      .v-select__slot {
        label {
          display: flex;
          align-items: center;
        }
      }
    }

    .v-select__slot {
      label {
        display: flex;
        align-items: center;
      }
    }

    .v-select__selections {
      padding-left: 9px;
    }

    .v-input__slot {
      &::before,
      &::after {
        display: none;
      }
    }

    .v-input__icon.v-input__icon--append {
      i {
        width: 10px;
        height: 6px;
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.707 1.707 3.586 3.586a1 1 0 0 0 1.414 0l3.586-3.586C9.923 1.077 9.477 0 8.586 0H1.414C.524 0 .077 1.077.707 1.707Z' fill='%23B9CBE5'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
}

.modal-create__select--border {
  align-items: center;

  &::v-deep {
    .v-input__control {
      padding: 0 12px;
      border: 1px solid #ecf6ff;
      border-radius: 4px;
    }

    .v-select__slot label {
      font-weight: 300;
      font-size: 14px;
      line-height: 19px;
      color: $blue06;
    }
  }
}

.modal-create__select-event-type-color {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  border-radius: 4px;
}

.modal-create__select-event-type-name {
  display: inline-block;
  font-size: 14px;
  line-height: 19px;
  color: $blue02;
}

.modal-create__select-event-type-name--big {
  font-size: 20px;
  line-height: 27px;
}

.modal-create__input {
  position: relative;
}

.modal-create__date-picker {
  position: absolute;
  padding: 0.5px;
  border-radius: 10px;
  border: 1px solid #ecf6ff;
  z-index: 9;
  overflow: hidden;
}
</style>

<style>
.modal-create-event {
  overflow: visible !important;
}
</style>
