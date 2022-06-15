<template>
  <v-btn
    :class="{
      'v-btn--dark': dark,
      'v-btn--outlined': outlined,
    }"
    elevation="0"
    @click="handleOnClick($event)"
    :disabled="disabled"
    :ripple="false"
    :to="to"
  >
    <slot name="icon-left"></slot>
    {{ label }}
    <slot name="icon-right"></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
    },
  },
  methods: {
    handleOnClick: function () {
      this.$emit('click')
    },
  },
}
</script>

<style scoped lang="scss">
.v-btn {
  &::v-deep {
    border-radius: 32px;
    &.v-size--default {
      height: auto;
    }
    .v-btn__content {
      font-weight: 500;
      line-height: 28px;
      color: #fff;
      letter-spacing: normal;
      text-transform: none;
    }
    &.v-btn--has-bg {
      background-color: $great !important;
      border: 2px solid #ffffff80;
      &:hover {
        background: linear-gradient(0deg, rgba(51, 56, 118, 0.1), rgba(51, 56, 118, 0.1)), $great;
        border-color: transparent;
      }
      &:active {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), $great;
        border-color: $great;
      }
    }
    &.v-btn--dark {
      background-color: $blue03 !important;
      border: 1px solid rgba(#fff, 0.5);
      &:hover {
        background: linear-gradient(0deg, rgba(51, 56, 118, 0.1), rgba(51, 56, 118, 0.1)), $blue03;
        border-color: transparent;
      }
      &:active {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), $blue03;
        border: 1px solid rgba(#fff, 0.5);
      }
    }
    &.v-btn--outlined {
      background-color: transparent !important;
      border: 2px solid $great;
      .v-btn__content {
        color: $great;
      }
      &:hover {
        .v-btn__content {
          color: #fff;
        }
        background-color: $great !important;
      }
      &:active {
        background-color: #2296c5 !important;
      }
    }
    &::before {
      display: none;
    }
  }
}
</style>
