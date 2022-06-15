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
              <v-col cols="7">
                <v-text-field
                  v-if="typeOfPreparation != 'matches-and-competitions' && typeOfPreparation != 'training'"
                  class="modal-create__input modal-create__input--title"
                  flat
                  hide-details
                  placeholder="Название/Тема"
                ></v-text-field>
                <v-select
                  v-if="typeOfPreparation == 'matches-and-competitions' || typeOfPreparation == 'training'"
                  :items="typePreparationList2"
                  item-value="title"
                  flat
                  single-line
                  hide-details
                  class="modal-create__select-event-subtype"
                  v-model="title"
                  :menu-props="menuSettingsSubcategory"
                  label="Выберите подкатегорию"
                >
                  <template v-slot:item="{ item }">
                    <p class="modal-create__select-event-type-name">{{ item.title }}</p>
                  </template>
                  <template v-slot:selection="{ item }">
                    <p class="modal-create__select-event-type-name modal-create__select-event-type-name--big">
                      {{ item.title }}
                    </p>
                  </template>
                </v-select>
              </v-col>
              <v-col cols="5">
                <v-select
                  :items="typePreparationList"
                  item-value="slug"
                  flat
                  single-line
                  hide-details
                  hide-selected
                  class="modal-create__select-event-type"
                  v-model="typeOfPreparation"
                  :menu-props="menuSettings"
                  @input="setSubCategory()"
                >
                  <template v-slot:item="{ item }">
                    <span
                      class="modal-create__select-event-type-color"
                      :style="`background-color: ${item.color}`"
                    ></span>
                    <p class="modal-create__select-event-type-name">{{ item.title }}</p>
                  </template>
                  <template v-slot:selection="{ item }">
                    <span
                      class="modal-create__select-event-type-color"
                      :style="`background-color: ${item.color}`"
                    ></span>
                    <p class="modal-create__select-event-type-name">{{ item.title }}</p>
                  </template>
                </v-select>
              </v-col>
            </v-row>

            <template v-if="typeOfPreparation == 'training'">
              <v-radio-group v-model="typeTraining" row>
                <base-radio-button darkColor label="Групповое" value="group" />
                <base-radio-button darkColor label="Индивидуальное" value="person" />
              </v-radio-group>
            </template>

            <v-row class="mb-1 justify-space-between">
              <v-col cols="3">
                <v-text-field
                  @click="showTime = true"
                  v-model="dateStart"
                  class="modal-create__input modal-create__input--small"
                  readonly
                  height="auto"
                  flat
                  hide-details
                  placeholder="__ / __ /__"
                >
                  <template slot="prepend">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M.017 4.304h13.938c.01.201.026.392.026.583.002 2.095.004 4.19 0 6.286-.003 1.787-.982 2.802-2.765 2.814-2.855.019-5.709.015-8.563 0-1.525-.007-2.58-.933-2.62-2.437C-.03 9.153.017 6.752.017 4.304Zm3.623 1.93c-.485.013-.916.46-.912.95.003.53.494 1.01 1.007.982a.956.956 0 0 0 .898-.957c-.005-.566-.436-.99-.993-.975Zm7.593.995a.96.96 0 0 0-.913-.996c-.511-.024-.967.408-.982.93-.015.524.408.98.921.993a.94.94 0 0 0 .974-.927Zm-8.504 3.417a.954.954 0 0 0 .91 1.004c.503.03.98-.408 1-.92a.962.962 0 0 0-.907-1.008c-.501-.023-.976.415-1.003.924Zm5.215-3.44c.013-.496-.404-.94-.905-.964a.977.977 0 0 0-1.014.968c0 .487.438.926.938.938a.973.973 0 0 0 .981-.942Zm-.99 4.446c.483.028.987-.444 1-.938.015-.484-.4-.933-.903-.977-.512-.045-.974.367-1.014.904-.037.502.398.98.916 1.011ZM13.93 3.089H.066C-.23 1.544.773.129 2.294.057 3.896-.02 5.504.014 7.11.007c1.408-.004 2.816-.015 4.224.004 1.74.024 2.82 1.293 2.597 3.078Z"
                        fill="#95B0DA"
                      />
                    </svg>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="5" class="d-flex align-center">
                <v-text-field
                  @click="showTime = true"
                  v-model="timeStart"
                  class="modal-create__input modal-create__input--small"
                  readonly
                  height="auto"
                  flat
                  hide-details
                  placeholder="___:___"
                >
                  <template slot="prepend">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7" cy="7" r="7" fill="#95B0DA" />
                      <path
                        d="M7.273 7.478c.631-.393 1.245-.772 1.857-1.164a.88.88 0 0 1 1.349.555.916.916 0 0 1-.395.962L6.87 9.848c-.301.188-.612.206-.916.03-.308-.174-.45-.46-.451-.817V4.23c0-.433-.003-.864 0-1.297.002-.486.306-.855.755-.924.533-.08 1.004.335 1.006.893.005.763 0 1.523 0 2.286v2.226l.01.063Z"
                        fill="#fff"
                      />
                    </svg>
                  </template>
                </v-text-field>
                <span>-</span>
                <v-text-field
                  @click="showTime = true"
                  v-model="timeEnd"
                  class="modal-create__input modal-create__input--small"
                  readonly
                  height="auto"
                  flat
                  hide-details
                  placeholder="___:___"
                >
                </v-text-field>
              </v-col>
              <v-col cols="2" class="d-flex align-center justify-end">
                <button @click="showRepeat = true">
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.3 8.687H.111L.005 6.24c-.074-1.752.654-3.09 2.112-4.037.779-.506 1.661-.638 2.567-.661 1.271-.034 2.542-.06 3.813-.092.086-.002.172-.018.292-.03V0l3.395 2.421L8.81 4.83V3.308H5.477c-.492 0-.987-.027-1.478.004-1.423.092-2.454 1.264-2.551 2.609-.057.774-.072 1.553-.11 2.33-.005.131-.022.263-.039.436ZM3.964 12.535V14L.592 11.594 3.946 9.2v1.51h3.326c.493 0 .987.023 1.479-.005 1.468-.079 2.513-1.319 2.584-2.675.038-.747.066-1.495.102-2.242.007-.146.027-.29.042-.452h1.2c-.048 1.42.37 2.837-.173 4.223-.636 1.626-1.812 2.637-3.55 2.825-1.306.14-2.63.11-3.945.15-.328.011-.657.002-1.047.002Z"
                      fill="#95B0DA"
                    />
                  </svg>
                </button>
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

            <v-row v-if="typeOfPreparation == 'training'">
              <v-col>
                <v-select
                  :items="[{ title: 'СС-1' }]"
                  item-value="title"
                  item-text="title"
                  flat
                  single-line
                  hide-details
                  class="modal-create__select-event-subtype modal-create__select--border"
                  :menu-props="menuSettingsBordered"
                  label="Выберите группу"
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
              <v-col> </v-col>
            </v-row>

            <v-row v-if="typeOfPreparation == 'training'">
              <v-col>
                <v-text-field
                  class="modal-create__input modal-create__input--small"
                  height="auto"
                  flat
                  hide-details
                  placeholder="Комментарий ..."
                >
                  <template slot="prepend">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.754 1.752c-.777.77-1.487 1.415-2.119 2.128-.341.385-.597.87-.803 1.346-.203.472-.302.991-.436 1.493-.287 1.07.466 1.855 1.534 1.586.61-.153 1.228-.3 1.814-.521.366-.14.728-.366 1.01-.638 1.062-1.023 2.09-2.082 3.19-3.187.03.179.06.277.06.374.003 1.77.013 3.54 0 5.308-.013 1.695-.908 2.576-2.588 2.58-1.104.002-2.208-.014-3.311.011-.24.006-.514.097-.708.237-.958.692-1.895 1.415-2.84 2.125a3.761 3.761 0 0 1-.361.248c-.67.39-1.342.03-1.368-.75-.02-.597-.004-1.197-.004-1.828-.15-.016-.271-.037-.394-.041C.982 12.183.052 11.305.024 9.85a154.36 154.36 0 0 1 0-5.697c.028-1.499.98-2.396 2.48-2.4 2.37-.008 4.738-.002 7.25-.002Z"
                        fill="#95B0DA"
                      />
                      <path
                        d="M12.916 0c.799.04 1.27.296 1.561.815.292.518.292 1.054-.022 1.57-.092.15-.212.286-.338.412-1.316 1.322-2.625 2.653-3.966 3.948-.251.241-.633.367-.975.49-.439.16-.897.266-1.348.392-.565.157-.901-.15-.758-.719.154-.612.328-1.22.524-1.821.063-.191.197-.374.34-.52C9.27 3.22 10.601 1.866 11.967.55c.294-.285.729-.426.949-.549Z"
                        fill="#95B0DA"
                      />
                    </svg>
                  </template>
                </v-text-field>
              </v-col>
              <v-col>
                <v-select
                  :items="[{ title: 'Лед' }]"
                  item-value="title"
                  item-text="title"
                  flat
                  single-line
                  hide-details
                  class="modal-create__select-event-subtype modal-create__select--border"
                  :menu-props="menuSettingsBordered"
                  label="Выберите тип зала"
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

            <template v-if="typeOfPreparation != 'training'">
              <v-text-field
                class="modal-create__input modal-create__input--small"
                height="auto"
                flat
                hide-details
                placeholder="Место проведения"
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

              <v-text-field
                class="modal-create__input modal-create__input--small"
                height="auto"
                flat
                hide-details
                placeholder="Комментарий ..."
              >
                <template slot="prepend">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.754 1.752c-.777.77-1.487 1.415-2.119 2.128-.341.385-.597.87-.803 1.346-.203.472-.302.991-.436 1.493-.287 1.07.466 1.855 1.534 1.586.61-.153 1.228-.3 1.814-.521.366-.14.728-.366 1.01-.638 1.062-1.023 2.09-2.082 3.19-3.187.03.179.06.277.06.374.003 1.77.013 3.54 0 5.308-.013 1.695-.908 2.576-2.588 2.58-1.104.002-2.208-.014-3.311.011-.24.006-.514.097-.708.237-.958.692-1.895 1.415-2.84 2.125a3.761 3.761 0 0 1-.361.248c-.67.39-1.342.03-1.368-.75-.02-.597-.004-1.197-.004-1.828-.15-.016-.271-.037-.394-.041C.982 12.183.052 11.305.024 9.85a154.36 154.36 0 0 1 0-5.697c.028-1.499.98-2.396 2.48-2.4 2.37-.008 4.738-.002 7.25-.002Z"
                      fill="#95B0DA"
                    />
                    <path
                      d="M12.916 0c.799.04 1.27.296 1.561.815.292.518.292 1.054-.022 1.57-.092.15-.212.286-.338.412-1.316 1.322-2.625 2.653-3.966 3.948-.251.241-.633.367-.975.49-.439.16-.897.266-1.348.392-.565.157-.901-.15-.758-.719.154-.612.328-1.22.524-1.821.063-.191.197-.374.34-.52C9.27 3.22 10.601 1.866 11.967.55c.294-.285.729-.426.949-.549Z"
                      fill="#95B0DA"
                    />
                  </svg>
                </template>
              </v-text-field>
            </template>

            <!-- <base-input label="Название/Тема" classAttr="input-default input-big w-100 mb-6" v-model="title" :rules="rules.required"></base-input> -->

            <!-- <base-select-simple classAttr="select-default select-bg-white mb-6" label="Категория события" :items="typePreparationList" :value="typeOfPreparation" v-model="typeOfPreparation" :rules="rules.required"></base-select-simple> -->

            <!-- <base-select-simple classAttr="select-default select-bg-white mb-6" label="Позиция" :items="positionList" v-model="positionType" :rules="rules.required"></base-select-simple>
                  <base-select-simple classAttr="select-default select-bg-white mb-6" label="Выбрать спортсмена" :items="sportsmanList" v-model="sportsman" :rules="rules.required"></base-select-simple> -->
            <!-- <v-row class="mb-6">
                      <v-col md="5">
                          <DataPicker placeholder="Начало" v-model="dateStart"></DataPicker>
                      </v-col>
                  </v-row>
                  <base-select-simple classAttr="select-default select-bg-white mb-6" label="Место проведения" :items="locationList" v-model="location" @change="clearPlayground" :rules="rules.required"></base-select-simple>
                  <base-select-simple classAttr="select-default select-bg-white mb-6" label="Площадка" :items="playgroundList" v-model="playground" :rules="rules.required"></base-select-simple> -->
            <!-- <v-row class="mb-1">
                      <v-col md="5">
                          <base-select-simple classAttr="select-default select-bg-white" label="Время с" :items="timeStartList" v-model="timeStart" @change="calcPeriod" :rules="rules.required"></base-select-simple>
                      </v-col>
                      <v-col md="5">
                          <base-select-simple classAttr="select-default select-bg-white" label="Время по" :items="timeEndList" v-model="timeEnd" @change="calcPeriod" :rules="rules.required"></base-select-simple>
                      </v-col>
                  </v-row> -->
            <!-- <div class="d-flex align-center mb-6" v-if="timePeriodLabel.length"><svg class="icon-16" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8.75 4.75C8.75 4.33579 8.41421 4 8 4C7.58579 4 7.25 4.33579 7.25 4.75V8.25C7.25 8.66421 7.58579 9 8 9C8.41421 9 8.75 8.66421 8.75 8.25V4.75ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z" fill="#808080"></path>
                      </svg>
                      <div class="text-gray text-small ml-2">{{ timePeriodLabel }}</div>
                  </div> -->
            <!-- <v-row>
                      <v-col md="7">
                          <base-select-simple classAttr="select-default select-bg-white" label="Напомнить" :items="reminderList" v-model="reminder" :rules="rules.required"></base-select-simple>
                      </v-col>
                  </v-row> -->
          </div>
          <div class="modal-footer">
            <wu-button label="+ Добавить событие" :to="{ name: 'CreateGroupTraining' }" type="submit"></wu-button>
          </div>
        </v-form>
      </div>
    </v-dialog>

    <modal-date-time :visible="showTime" @close="showTime = false" @getData="getData($event)" />
    <modal-reminders :visible="showReminders" @close="showReminders = false" @getData="getRemindersData($event)" />
    <modal-repeat :visible="showRepeat" @close="showRepeat = false" @getData="getRepeatData($event)" />
  </div>
</template>

<script>
import SportsmanSelect from '@/components/elements/SportsmanSelect'
import SelectUser from '@/components/elements/UserSelect'
import DataPicker from '@/components/elements/DataPicker'
import { mapState } from 'vuex'
import axios from 'axios'
import { API_URL_GRAF } from '@/config/api'
import moment from 'moment'

import ModalDateTime from './ModalDateTime.vue'
import ModalReminders from './ModalReminders.vue'
import ModalRepeat from './ModalRepeat.vue'

export default {
  name: 'ModalTrainerNewEvent',
  components: { DataPicker, SelectUser, SportsmanSelect, ModalDateTime, ModalReminders, ModalRepeat },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    inDate: {
      type: String,
      default: null,
    },
    inTimeStart: {
      type: String,
      default: '',
    },
    inTimeEnd: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showTime: false,

      title: '',
      typeOfPreparation: 'none',
      positionType: '',
      sportsman: '',
      dateStart: '',
      location: '',
      playground: null,
      timeStart: '',
      timeEnd: '',
      reminder: '',
      typeTraining: 'group',
      typePreparationList: [{ color: '#95B0DA', title: 'Категория события', slug: 'none' }],
      typePreparationList2: [],
      positionList: [],
      reminderList: [],
      timeStartList: [
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
      ],
      timeEndList: [
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
      ],

      locations: [],

      timePeriodLabel: '',
      rules: {
        required: [value => !!value || 'Поле обязательно'],
      },
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
      showRepeat: false,
    }
  },

  computed: {
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
    sportsmanList: function () {
      let list = []
      if (this.profile.sportsmans) {
        this.profile.sportsmans.map(item => {
          list.push({ text: item.user.firstName + ' ' + item.user.lastName, value: item.id })
        })
      }

      return list
    },

    locationList: function () {
      let list = []
      if (this.locations) {
        this.locations.map(item => {
          list.push({ text: item.name, value: item.id })
        })
      }

      return list
    },

    playgroundList: function () {
      let locs = this.locations.filter(item => {
        return item.id == this.location
      })
      let loc = locs[0]
      let list = []
      if (loc) {
        loc.playgrounds.map(item => {
          list.push({ text: item.name, value: item.id })
        })
      }
      return list
    },
    ...mapState('auth', ['profile']),
    ...mapState('events', ['event']),
  },
  methods: {
    calcPeriod() {
      this.timePeriodLabel = ''
      if (this.timeStart.length && this.timeEnd.length) {
        let start = moment().hours(this.timeStart.slice(0, 2))
        let end = moment().hours(this.timeEnd.slice(0, 2))
        let diff = end.diff(start, 'hours')
        if (diff > 0) this.timePeriodLabel = 'Время тренировки ' + diff + ' часа'
      }
    },
    createList(list, name) {
      let listNormal = []
      if (list) {
        list.map(item => {
          listNormal.push({ text: item[name], value: item.id })
        })
      }

      return listNormal
    },
    clearPlayground() {
      this.playground = null
    },
    setSubCategory() {
      if (this.typeOfPreparation == 'matches-and-competitions' || this.typeOfPreparation == 'training') {
        this.title = ''
        this.typePreparationList2 = this.typePreparationList.find(x => x.slug === this.typeOfPreparation).eventTypes
      }
    },
    getData(result) {
      this.dateStart = result.date
      this.timeStart = result.timeStart
      this.timeEnd = result.timeEnd
    },
    getRemindersData(result) {
      console.log(result)
    },
    getRepeatData(result) {
      console.log(result)
    },
    submitForm() {
      console.log(this.reminder)
      if (this.$refs.createEventform.validate()) {
        let timestart = moment(this.dateStart)
          .set('hour', parseInt(this.timeStart.slice(0, 2)))
          .set('minute', 0)
          .set('second', 0)
          .toDate()
        let timeend = moment(this.dateStart)
          .set('hour', parseInt(this.timeEnd.slice(0, 2)))
          .set('minute', 0)
          .set('second', 0)
          .toDate()
        let requestData = {
          title: this.title,
          description: '-',
          date: moment(this.dateStart).format('YYYY-MM-DD'),
          timeFrom: this.timeStart,
          timeTo: this.timeEnd,
          purposeLesson: '-',
          typeOfPreparation: this.typeOfPreparation,
          location: this.location,
          playground: this.playground,
          reminder: this.reminder.value,
          typeLesson: 1,
          positionType: this.positionType,
          group: 1,
          coach: this.profile.id,
          attenders: [this.sportsman],
          reminders: [this.reminder],
        }
        this.$store.dispatch('events/createEvent', requestData).then(response => {
          //this.$router.push({ name: 'Plan', params: { id: response.id } } )
          window.location.reload()
        })
      }
    },
  },
  mounted() {
    if (this.inTimeStart.length) {
      this.timeStart = [this.inTimeStart]
    }

    if (this.inTimeEnd.length) {
      this.timeEnd = [this.inTimeEnd]
    }

    if (this.inDate) {
      this.dateStart = new Date(moment(this.inDate, 'DD-MM-YYYY').format('YYYY-MM-DD'))
    }

    let self = this

    axios
      .get(API_URL_GRAF + '/events/utils/', {
        headers: {
          Authorization: localStorage.getItem('access') ? 'Bearer ' + localStorage.getItem('access') : '',
          'Content-Type': 'application/json; charset=utf-8',
        },
      })
      .then(function (response) {
        self.reminderList = self.createList(response.data.reminders, 'title')
        self.locations = response.data.locations

        let preparation = response.data.eventTypes.filter(event => event.eventType === null)

        self.typePreparationList = self.typePreparationList.concat(preparation)

        self.positionList = self.createList(response.data.positionTypes, 'title')
      })
      .catch(function (error) {
        console.log(error)
      })
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

.modal-create__input--title {
  //position: absolute;
}

.modal-create__select-event-type {
  //position: absolute;
  //top: 0;
  //right: 0;
  //max-width: 236px;
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
</style>
