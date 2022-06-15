<template>
  <div class="wu-input-time">
    <v-text-field
      v-model="inputVal"
      class="wu-input-time__input"
      height="auto"
      flat
      hide-details
      placeholder="___:___"
      v-mask="'##:##'"
      @focus="isOpne = true"
      readonly
    >
      <template slot="prepend">
        <div v-if="icon" @click="isOpne = !isOpne">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="7" fill="#95B0DA" />
            <path
              d="M7.273 7.478c.631-.393 1.245-.772 1.857-1.164a.88.88 0 0 1 1.349.555.916.916 0 0 1-.395.962L6.87 9.848c-.301.188-.612.206-.916.03-.308-.174-.45-.46-.451-.817V4.23c0-.433-.003-.864 0-1.297.002-.486.306-.855.755-.924.533-.08 1.004.335 1.006.893.005.763 0 1.523 0 2.286v2.226l.01.063Z"
              fill="#fff"
            />
          </svg>
        </div>
      </template>
    </v-text-field>

    <div class="wu-input-time__time-picker" v-if="isOpne">
      <div class="wu-input-time__time-numbers" v-if="!allHours">
        <button
          class="wu-input-time__time-number"
          :class="{
            'wu-input-time__time-number_active': item === timePicker.h,
            'wu-input-time__time-number_disabled': disabled(
              `${item}:${!timePicker.m ? minutes[minutes.length - 1] : timePicker.m}`
            ),
          }"
          :disabled="disabled(`${item}:${!timePicker.m ? minutes[minutes.length - 1] : timePicker.m}`)"
          v-for="(item, index) in hours"
          :key="index"
          @click="changeH(item)"
        >
          <p>{{ item }}</p>
        </button>
      </div>

      <div class="wu-input-time__time-numbers" v-if="allHours">
        <button
          class="wu-input-time__time-number"
          :class="{
            'wu-input-time__time-number_active': index == timePicker.h,
          }"
          v-for="(item, index) in 24"
          :key="index"
          @click="changeH(index < 11 ? '0' + index : index)"
        >
          <p v-if="item < 11">0{{ index }}</p>
          <p v-else>{{ index }}</p>
        </button>
      </div>

      <div class="wu-input-time__time-numbers" v-if="!allHours">
        <button
          class="wu-input-time__time-number"
          :class="{
            'wu-input-time__time-number_active': item === timePicker.m,
            'wu-input-time__time-number_disabled': disabled(`${timePicker.h}:${item}`) || !timePicker.h,
          }"
          :disabled="disabled(`${timePicker.h}:${item}`) || !timePicker.h"
          v-for="(item, index) in minutes"
          :key="index"
          @click="changeM(item)"
        >
          <p>{{ item }}</p>
        </button>
      </div>

      <div class="wu-input-time__time-numbers" v-if="allHours">
        <button
          class="wu-input-time__time-number"
          :class="{
            'wu-input-time__time-number_active': item == timePicker.m,
          }"
          v-for="(item, index) in 60"
          :key="index"
          @click="changeM(index < 10 ? '0' + index : index)"
        >
          <p v-if="item < 10">0{{ index }}</p>
          <p v-else>{{ index }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
  name: 'WUInputTime',
  components: {
    DatePicker,
  },
  props: {
    value: [String, Number],
    icon: {
      type: Boolean,
      default: false,
    },
    minTime: [Date, Number],
    allHours: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      time: '',
      timePicker: {
        h: null,
        m: null,
      },
      isOpne: false,
      hours: ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      minutes: ['00', '15', '30', '45'],
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    disabled() {
      return time => {
        const date = new Date(this.$moment(time, 'hh:mm').format('YYYY/MM/DD HH:mm:ss')).getTime()
        if (this.minTime + 1 > date) {
          return true
        } else {
          return false
        }
      }
    },
  },
  watch: {
    timePicker: {
      handler() {
        if (this.timePicker.h !== null && this.timePicker.m !== null) {
          setTimeout(() => {
            this.inputVal = `${this.timePicker.h}:${this.timePicker.m}`
            this.isOpne = false
          }, 0)
        }
      },
      deep: true,
    },
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  methods: {
    changeH(value) {
      this.timePicker.h = value
    },
    changeM(value) {
      this.timePicker.m = value
    },
    close(e) {
      if (!e.target.closest('.wu-input-time__time-picker') && !e.target.closest('.wu-input-time__input')) {
        this.isOpne = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wu-input-time {
  position: relative;

  &__input {
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

  &__time-picker {
    position: absolute;
    z-index: 9;
    width: 130px;
    border-radius: 8px;
    display: flex;
    background-color: #fff;
    border: 1px solid $blue05;
    overflow: hidden;
    user-select: none;
  }

  &__time-numbers {
    width: 50%;
    height: 103px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0;
    }

    &:first-child {
      border-right: 1px solid $blue05;
    }
  }

  &__time-number {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $blue02;
    font-size: 18px;
    border-bottom: 1px solid #ecf6ff;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: rgb(230, 230, 230);
    }

    &_active {
      background-color: $blue04;
      color: #fff;

      &:hover {
        background-color: $blue04;
      }
    }

    &_disabled {
      background-color: #fff;
      color: rgba(0, 0, 0, 0.123);

      &:hover {
        background-color: #fff;
      }
    }
  }
}
</style>
