<template>
  <v-checkbox
    :label="label"
    v-model="inputVal"
    :error-messages="errors"
    :readonly="readonly"
    :class="{
      'v-checkbox--white': white,
      'v-checkbox--small': small,
      'v-checkbox--color-dark': textDark,
      'v-checkbox--reverse': reverse,
    }"
    hide-details
  >
  </v-checkbox>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    white: {
      type: Boolean,
    },
    small: {
      type: Boolean,
    },
    label: {
      type: String,
      default: '',
    },
    textDark: {
      type: Boolean,
    },
    reverse: {
      type: Boolean,
    },
    value: {
      type: Boolean,
    },
    errors: {
      type: Array,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
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
}
</script>

<style scoped lang="scss">
.v-input--checkbox {
  ::v-deep {
    .v-input__slot {
      align-items: center;
    }
    .v-label {
      display: inline;
      font-size: 16px;
      color: #fff;
      line-height: 32px;
    }
    .v-input--selection-controls__input {
      width: 20px;
      height: 20px;
    }
    .mdi {
      border-radius: 4px;
      width: 20px;
      height: 20px;
      border-width: 1px;
      border-style: solid;
      background-color: $blue02;
    }
    .mdi-checkbox-blank-outline {
      border-color: #8085bb;
    }
    .mdi-checkbox-marked {
      background-color: #ffffff;
      background-image: url("data:image/svg+xml,%3Csvg width='14' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.673 7.783c.046-.068.065-.11.096-.142 2.3-2.388 4.604-4.77 6.902-7.16.28-.289.591-.483.996-.481.57.002.98.274 1.218.81.22.499.118 1.08-.264 1.484-.476.505-.961.997-1.441 1.497-2.178 2.254-4.355 4.505-6.53 6.759-.577.597-1.377.601-1.951.007C2.596 9.415 1.493 8.276.394 7.134-.333 6.38-.007 5.12.986 4.858c.476-.127.904-.002 1.254.357.77.796 1.535 1.596 2.302 2.394.04.043.072.095.131.174Z' fill='%23525BBA'/%3E%3C/svg%3E");
      background-position: center;
      background-repeat: no-repeat;
    }
    .v-input--selection-controls__ripple {
      display: none;
    }
    .v-icon.v-icon {
      transition: none;
    }
    &:hover {
      .mdi-checkbox-blank-outline {
        border-color: #95b0da;
        background-color: $blue03;
      }
    }
  }
  &.v-input--selection-controls {
    margin-top: 0px;
    padding-top: 0px;
  }
  &.v-checkbox--white {
    ::v-deep {
      .mdi {
        border-color: #dce5f2;
        background-color: #fff;
      }
      .mdi-checkbox-marked {
        background-color: $blue02;
        background-image: url("data:image/svg+xml,%3Csvg width='14' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.673 7.783c.046-.068.065-.11.096-.142 2.3-2.388 4.604-4.77 6.902-7.16.28-.289.591-.483.996-.481.57.002.98.274 1.218.81.22.499.118 1.08-.264 1.484-.476.505-.961.997-1.441 1.497-2.178 2.254-4.355 4.505-6.53 6.759-.577.597-1.377.601-1.951.007C2.596 9.415 1.493 8.276.394 7.134-.333 6.38-.007 5.12.986 4.858c.476-.127.904-.002 1.254.357.77.796 1.535 1.596 2.302 2.394.04.043.072.095.131.174Z' fill='%23fff'/%3E%3C/svg%3E");
        border: none;
      }
      &:hover {
        .mdi-checkbox-blank-outline {
          border-color: #b9cbe5;
        }
      }
    }
  }
  &.v-checkbox--small {
    ::v-deep {
      .v-input--selection-controls__input,
      .mdi {
        width: 16px;
        height: 16px;
      }
      .mdi-checkbox-marked {
        background-size: 10px 8px;
      }
    }
  }
  &.v-checkbox--color-dark {
    ::v-deep {
      .v-label {
        color: #574f92;
      }
    }
  }
  &.v-checkbox--reverse {
    ::v-deep {
      .v-input__slot {
        flex-direction: row-reverse;
      }
      .v-input--selection-controls__input {
        margin-right: 0;
      }
    }
  }
}
</style>
