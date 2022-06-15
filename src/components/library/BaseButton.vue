<template>
  <v-btn
    :class="{
      'v-btn--dark': dark,
      'v-btn--outlined': outlined,
      'no-border': noborder,
      'light-border': lightborder,
    }"
    elevation="0"
    @click="handleOnClick($event)"
    :disabled="disabled"
    :ripple="false"
    :style="{ background: backgroundColor }"
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
    backgroundColor: {
      type: String,
      default: '#2ABAF3',
    },
    noborder: {
      type: Boolean,
      default: false,
    },
    lightborder: {
      type: Boolean,
      default: false,
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
  position: relative;
  border: 0!important;
  &:before{
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 22px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
  &.no-border{
    &:before{
      opacity: 0;
    }
  }
  &.light-border{
    &:before{
      border-width: 1px;
    }
  }
  .v-btn__content{
    position: relative;
    z-index: 2;
  }
  &::v-deep {
    border-radius: 32px;
    &.v-size--default {
      height: auto;
    }
    .v-btn__content {
      font-weight: 500;
      line-height: 2rem;
      color: #fff;
      letter-spacing: normal;
      text-transform: none;
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
  }
}
</style>
