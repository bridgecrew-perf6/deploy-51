<template>
  <v-slider
    class="wu-slider"
    hide-details
    :max="max"
    :min="min"
    :step="step"
    :readonly="readonly"
    v-model="inputVal"
  ></v-slider>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    step: {
      type: Number,
    },
    readonly: {
      type: Boolean,
    },
    value: {
      type: [Number, String],
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', parseInt(val))
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.wu-slider {
  &::v-deep {
    .v-slider {
      min-height: 16px;
    }
    .v-slider__track-container {
      height: 4px;
      .v-slider__track-background {
        background-color: #ecf6ff !important;
        border-radius: 4px;
      }
      .v-slider__track-fill {
        background-color: $blue03 !important;
        border-radius: 4px;
      }
    }
    .v-slider__thumb-container {
      .v-slider__thumb {
        width: 16px;
        height: 16px;
        background-color: #ffffff !important;

        border: 4px solid $blue02 !important;
        cursor: pointer;
        &::before,
        &::after {
          display: none;
        }
      }
      &--active {
        .v-slider__thumb {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>
