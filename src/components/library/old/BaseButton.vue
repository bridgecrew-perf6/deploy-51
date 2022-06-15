<template lang="pug">
  v-btn(
    :class='classAttr'
    elevation='0'
    :tag="tag"
    @click="handleOnClick($event)"
    :disabled='disabled'
  )
    slot(name='icon-left')
    | {{label}}
    slot(name='icon-right')

</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'button',
    },
    classAttr: {
      type: String,
      default: 'button-default',
    },
    disabled: {
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
.button-default {
  ::v-deep .v-btn__content {
    font-family: $FiraSansMedium;
    text-transform: none;
    letter-spacing: normal;
  }
}

.button-big {
  height: rem(40px) !important;
  border-radius: rem(8px);
  padding: 0 rem(18px) !important;

  ::v-deep .v-btn__content {
    font-size: rem(16px);
  }
}

.button-small {
  height: rem(24px) !important;
  border-radius: rem(4px);
  padding: 0 rem(10px) !important;

  ::v-deep .v-btn__content {
    font-size: rem(12px);
  }
}

.button-big-icon {
  height: rem(40px) !important;
  @include width-flex(rem(40px) !important) padding: 0 !important;
  border-radius: rem(8px);
}

.button-big-round {
  height: rem(60px) !important;
  @include width-flex(rem(60px) !important) border-radius: 50%;
  padding: 0 !important;
}

.button-middle-round {
  height: rem(40px) !important;
  @include width-flex(rem(40px) !important) border-radius: 50%;
  padding: 0 !important;
}

.button-small-round {
  height: rem(24px) !important;
  @include width-flex(rem(24px) !important) border-radius: 50%;
  padding: 0 !important;
}

.button-small-icon {
  height: rem(24px) !important;
  @include width-flex(rem(24px) !important) padding: 0 !important;
  border-radius: 4px;
}

.button-nav-left {
  height: rem(40px) !important;
  border-radius: 0px 8px 8px 0px;
  padding: 0 rem(18px) !important;
  background: #f1f3f9 !important;
  min-width: rem(115px) !important;

  ::v-deep .v-btn__content {
    margin-left: rem(-15px);
    color: #000;
    position: static !important;

    .arrow-buttom {
      position: absolute;
      left: rem(-16px);
      top: 0;
      fill: #f1f3f9;
      width: rem(16px);
      height: rem(40px);
    }
  }
  ::v-deep .v-ripple__container {
    display: none;
  }
  &:before {
    display: none;
  }

  &:hover {
    background: #d9dbe0 !important;
    &:before {
      background: #d9dbe0 !important;
    }
    ::v-deep .v-btn__content {
      .arrow-buttom {
        fill: #d9dbe0;
      }
    }
  }
}

.button-nav-right {
  height: rem(40px) !important;
  border-radius: rem(8px) 0px 0px rem(8px);
  padding: 0 rem(18px) !important;
  background: $blue !important;
  min-width: rem(115px) !important;

  ::v-deep .v-btn__content {
    margin-right: rem(-15px);
    color: #ffffff;
    position: static !important;
    .arrow-buttom {
      position: absolute;
      right: rem(-16px);
      top: 0;
      fill: $blue;
      width: rem(16px);
      height: rem(40px);
      transform: rotate(180deg);
    }
  }
  ::v-deep .v-ripple__container {
    display: none;
  }
  &:before {
    display: none;
  }

  &:hover {
    background: #1751e5 !important;
    &:before {
      background: #1751e5 !important;
    }
    ::v-deep .v-btn__content {
      .arrow-buttom {
        fill: #1751e5;
      }
    }
  }
}

.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: #f1f3f9 !important;

  ::v-deep .v-btn__content {
    color: rgba(0, 0, 0, 0.4);
    .arrow-buttom {
      fill: #f1f3f9;
    }
    svg {
      fill: rgba(0, 0, 0, 0.4);
    }
  }
}

.button-blue {
  background-color: $blue !important;

  ::v-deep .v-btn__content {
    color: #ffffff;

    svg {
      fill: #ffffff;
    }
  }

  &:hover {
    background: #1751e5 !important;
  }

  &:focus {
    background: #326bff !important;
    box-shadow: 0px 0px 0px 4px rgba(50, 107, 255, 0.4) !important;
  }

  &:active {
    background: #123fb2 !important;
    box-shadow: 0px 0px 0px 4px rgba(50, 107, 255, 0.4) !important;
  }
}

.button-gray {
  background-color: #f1f3f9 !important;

  ::v-deep .v-btn__content {
    color: #000000;

    svg {
      fill: #000000;
    }
  }

  &:hover {
    background: #d9dbe0 !important;
  }

  &:focus {
    background: #c0c2c7 !important;
    box-shadow: 0px 0px 0px 4px rgba(50, 107, 255, 0.4) !important;
  }

  &:active {
    background: #f1f3f9 !important;
    box-shadow: 0px 0px 0px 4px rgba(50, 107, 255, 0.4) !important;
  }
}

.button-white {
  background-color: #ffffff !important;

  ::v-deep .v-btn__content {
    color: $blue;

    svg {
      fill: $blue;
    }
  }

  &:hover {
    background: #d9dbe0 !important;
  }

  &:focus {
    background: #c0c2c7 !important;
    box-shadow: 0px 0px 0px 4px rgba(50, 107, 255, 0.4) !important;
  }

  &:active {
    background: #f1f3f9 !important;
    box-shadow: 0px 0px 0px 4px rgba(50, 107, 255, 0.4) !important;
  }
}

.v-btn.v-btn--disabled.button-white.v-btn--has-bg {
  background-color: #ffffff !important;
}

.button-default.cpt-button {
  ::v-deep .v-btn__content {
    text-transform: capitalize;
  }
}
</style>
