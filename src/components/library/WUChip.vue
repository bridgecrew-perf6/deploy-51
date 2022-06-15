<template>
  <v-chip class="wu-chip" :close="close" :color="color" :label="label" :outlined="outlined">
    <slot name="icon-left"></slot>
    <slot name="label">{{ text }}</slot>
    <slot name="icon-right"></slot>
  </v-chip>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    label: {
      type: Boolean,
    },
    outlined: {
      type: Boolean,
    },
    close: {
      type: Boolean,
    },
    color: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.wu-chip {
  &::v-deep {
    padding: 2px;
    height: auto !important;
    background-color: $blue02 !important;
    margin-right: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(#fff, 0.2);
    &:last-child {
      margin-right: 0px;
    }
    &:hover {
      box-shadow: 0px 6px 8px 0px rgba($blue02, 0.5);
      cursor: pointer;

      border-color: transparent !important;
    }
    .v-chip__content {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #ffffff;
    }

    &.terrible {
      background-color: $terrible !important;
      &:hover {
        box-shadow: 0px 4px 10px 0px rgba($terrible, 0.5);
      }
    }
    &.great {
      background-color: $great !important;
      &:hover {
        box-shadow: 0px 4px 10px 0px rgba($great, 0.5);
      }
    }
    &.good {
      background-color: $good !important;
      &:hover {
        box-shadow: 0px 4px 10px 0px rgba($good, 0.5);
      }
    }
    &.badly {
      background-color: $badly !important;
      &:hover {
        box-shadow: 0px 4px 10px 0px rgba($badly, 0.5);
      }
    }
  }
}
</style>
