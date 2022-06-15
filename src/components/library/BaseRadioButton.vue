<template>
  <v-radio
    :label="label"
    :value="value"
    v-bind="$attrs"
    v-model="radio"
    :class="{
      'v-radio--dark-color': darkColor,
    }"
  />
</template>

<script>
export default {
  name: 'BaseRadioButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
    },
    darkColor: {
      type: Boolean,
    },
  },
  computed: {
    radio: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    handleChange(val) {
      this.$emit('change', val)
    },
  },
}
</script>

<style scoped lang="scss">
.v-radio.v-item--active {
  &::v-deep {
    .v-input--selection-controls__ripple {
      border-color: #b9cbe5;
      position: relative;
      &::after {
        width: 12px;
        height: 12px;
      }
    }
  }
}

.v-radio {
  &::v-deep {
    .v-input--selection-controls__input:hover {
      .v-input--selection-controls__ripple {
        border-color: #b9cbe5;
        &::before {
          background: transparent;
          opacity: 1;
        }
      }
    }

    .v-input--selection-controls__ripple {
      position: absolute !important;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      @include width-flex(20px);
      height: 20px;
      border: 1px solid #ecf6ff;
      margin: 0;
      background-color: #fbfbfe;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0px;
        height: 0px;
        background-color: $blue03;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.2s ease-in;
      }
    }

    .v-label {
      color: #fff;
    }
    &.v-radio--dark-color {
      .v-label {
        color: $blue02 !important;
      }
    }
  }
}
</style>
