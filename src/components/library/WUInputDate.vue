<template>
  <div class="wu-input-date">
    <p v-if="label" class="wu-input-date__label" :class="{ 'wu-input-date__label_margin': icon }">{{ label }}</p>
    <v-text-field
      class="wu-input-date__input"
      height="auto"
      flat
      v-model="inputVal"
      v-mask="'##/##/####'"
      hide-details
      placeholder="__ / __ /__"
      @focus="isOpen = true"
      readonly
    >
      <template slot="prepend" v-if="icon">
        <div @click="isOpen = !isOpen">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.017 4.304h13.938c.01.201.026.392.026.583.002 2.095.004 4.19 0 6.286-.003 1.787-.982 2.802-2.765 2.814-2.855.019-5.709.015-8.563 0-1.525-.007-2.58-.933-2.62-2.437C-.03 9.153.017 6.752.017 4.304Zm3.623 1.93c-.485.013-.916.46-.912.95.003.53.494 1.01 1.007.982a.956.956 0 0 0 .898-.957c-.005-.566-.436-.99-.993-.975Zm7.593.995a.96.96 0 0 0-.913-.996c-.511-.024-.967.408-.982.93-.015.524.408.98.921.993a.94.94 0 0 0 .974-.927Zm-8.504 3.417a.954.954 0 0 0 .91 1.004c.503.03.98-.408 1-.92a.962.962 0 0 0-.907-1.008c-.501-.023-.976.415-1.003.924Zm5.215-3.44c.013-.496-.404-.94-.905-.964a.977.977 0 0 0-1.014.968c0 .487.438.926.938.938a.973.973 0 0 0 .981-.942Zm-.99 4.446c.483.028.987-.444 1-.938.015-.484-.4-.933-.903-.977-.512-.045-.974.367-1.014.904-.037.502.398.98.916 1.011ZM13.93 3.089H.066C-.23 1.544.773.129 2.294.057 3.896-.02 5.504.014 7.11.007c1.408-.004 2.816-.015 4.224.004 1.74.024 2.82 1.293 2.597 3.078Z"
              fill="#95B0DA"
            />
          </svg>
        </div>
      </template>
    </v-text-field>
    <div class="wu-input-date__picker" v-if="isOpen">
      <vc-date-picker
        v-model="inputVal"
        @dayclick="isOpen = false"
        :model-config="modelConfig"
        :masks="masks"
        :min-date="minDate"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WUInputDate',
  props: {
    value: [String, Number, Date],
    icon: {
      type: Boolean,
      default: false,
    },
    label: String,
    minDate: {
      type: Date,
      default: () => new Date(new Date().getFullYear(), 0, 1),
    }
  },
  data() {
    return {
      isOpen: false,
      date: '',
      masks: {
        title: 'MMMM, YYYY',
        weekdays: 'WW',
      },
      modelConfig: {
        type: 'string',
        mask: 'DD/MM/YYYY',
      },
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
  },
  methods: {
    close(e) {
      if (!e.target.closest('.wu-input-date__picker') && !e.target.closest('.wu-input-date__input')) {
        this.isOpen = false
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
}
</script>

<style scoped lang="scss">
.wu-input-date {
  position: relative;

  &__label {
    color: $blue02;
    font-size: 10px;
    font-weight: 500;

    &_margin {
      margin-left: 27px;
    }
  }

  &__input {
    width: 100%;
    position: relative;
    &::v-deep {
      padding: 0;

      margin: 0 0 10px;

      .v-input__slot {
        padding: 0 !important;

        &::before,
        &::after {
          display: none;
        }
      }
      &.v-input--is-focused {
        .v-input__control {
          border: 1px solid $blue03;
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

  &__picker {
    position: absolute;
    z-index: 9;
    .vc-container {
      &::v-deep {
        border: 1px solid $blue03;
        .vc-title {
          font-weight: 500;
          color: $blue01;
          text-transform: capitalize;
        }
        .vc-weeks {
        }
        .vc-weekday {
          font-weight: 500;
          font-size: 12px;
          line-height: 20px;
          text-transform: uppercase;
          text-align: center;

          color: #95b0da;
          &:nth-child(6),
          &:nth-child(7) {
            color: $terrible;
          }
        }
        .vc-day {
          span {
            font-weight: normal;
            color: $blue01;
            text-align: center;
            cursor: pointer;
          }
          &.is-today {
            span {
              font-weight: 700;
              color: #fff;
              background-color: $blue01;
              border-radius: 50%;
            }
          }
        }
        .weekday-position-6,
        .weekday-position-7 {
          span {
            color: $terrible !important;
          }
        }
        .is-not-in-month {
          span {
            color: $blue06 !important;
            opacity: 1;
          }
        }

        .vc-highlights {
          .vc-highlight {
            background-color: #ecf6ff !important;
          }
          & + span {
            font-weight: normal !important;
            color: $blue01 !important;
            background-color: transparent !important;
          }
        }

        .vc-arrow {
          width: 30px;
          height: 30px;
          background-position: center;
          background-repeat: no-repeat;
          svg {
            display: none;
          }
          &.is-left {
            background-image: url("data:image/svg+xml,%3Csvg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.197.915a1.031 1.031 0 0 0-1.458 0L.337 4.317a1.028 1.028 0 0 0-.302.739c-.006.272.095.546.302.753L3.74 9.211a1.031 1.031 0 1 0 1.458-1.458l-2.69-2.69 2.69-2.69a1.031 1.031 0 0 0 0-1.458Z' fill='%2395B0DA'/%3E%3C/svg%3E");
          }
          &.is-right {
            background-image: url("data:image/svg+xml,%3Csvg width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.801.913a1.031 1.031 0 0 1 1.459 0l3.403 3.403c.204.205.305.474.302.742.005.27-.095.544-.302.75L2.26 9.213A1.031 1.031 0 0 1 .8 7.753l2.691-2.69-2.69-2.691a1.031 1.031 0 0 1 0-1.459Z' fill='%2395B0DA'/%3E%3C/svg%3E");
          }
        }
      }
    }
  }
}
</style>
