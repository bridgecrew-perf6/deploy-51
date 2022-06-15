<template>
  <div>
    <p v-if="label" class="wu-input-label">{{ label }}</p>
    <v-text-field
      class="wu-input"
      :class="{ 'wu-input--center': center }"
      v-model="inputVal"
      v-mask="mask"
      hide-details="auto"
      :placeholder="placeholder"
      :readonly="readonly"
      :rules="rules"
      @blur="handleOnBlur($event)"
      @change="handleOnChange($event)"
    >
    </v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    label: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: String,
      default: '',
    },
    center: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    rules: {
      type: [String, Array, Object],
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
  methods: {
    handleOnBlur: function () {
      this.$emit('blur', this.value)
    },
    handleOnChange: function () {
      this.$emit('change', this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.wu-input {
  &::v-deep {
    margin-top: 0px;
    padding-top: 0px;

    .v-input__slot {
      margin-bottom: 0px;
      &::before,
      &::after {
        display: none;
      }
      input {
        padding: 0px 10px;
        font-size: 14px;
        line-height: 32px;
        color: $blue02;

        background-color: #ffffff;
        border: 1px solid #ecf6ff;
        border-radius: 4px;

        &::placeholder {
          color: $blue05;
        }
      }
    }
    &.v-input--is-focused {
      input {
        border-color: $blue02;
      }
    }
    &.error--text {
      input {
        color: $terrible;
        border-color: $terrible;
      }
    }

    .v-text-field__details {
      .error--text {
        color: $terrible !important;
        caret-color: $terrible !important;
      }
      .v-messages__message {
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
      }
    }
  }
  &--center {
    &::v-deep {
      .v-text-field__slot input {
        text-align: center;
      }
    }
  }
}

.wu-input-label {
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: $blue02;
}
</style>
