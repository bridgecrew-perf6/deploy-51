<template>
  <div class="wu-number__wrapper">
    <div class="wu-number__icon-wrapper">
      <slot name="icon"> </slot>
    </div>
    <p class="wu-number__label">{{ label }}</p>
    <div class="wu-number__inner">
      <button class="wu-number__minus" @click="minus()">
        <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.17775 0.728154C4.81625 0.366657 4.23015 0.366657 3.86865 0.728154L0.814092 3.78271C0.629017 3.96779 0.538694 4.21174 0.543124 4.45427C0.539503 4.69581 0.629843 4.93849 0.814143 5.12279L3.8687 8.17734C4.2302 8.53884 4.8163 8.53884 5.1778 8.17734C5.5393 7.81585 5.5393 7.22974 5.1778 6.86825L2.76228 4.45272L5.17775 2.03725C5.53925 1.67575 5.53925 1.08965 5.17775 0.728154Z"
            fill="#B9CBE5"
          />
        </svg>
      </button>
      <v-text-field
        :readonly="readonly"
        class="wu-number__input"
        type="number"
        hide-details
        v-model="inputVal"
      ></v-text-field>
      <button class="wu-number__plus" @click="plus()">
        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.271469 8.1781C0.632967 8.53959 1.21907 8.53959 1.58057 8.1781L4.63513 5.12354C4.8202 4.93846 4.91052 4.69451 4.9061 4.45198C4.90972 4.21044 4.81938 3.96776 4.63508 3.78346L1.58052 0.728905C1.21902 0.367407 0.632917 0.367407 0.271419 0.728905C-0.0900782 1.0904 -0.0900778 1.67651 0.27142 2.038L2.68694 4.45353L0.27147 6.869C-0.0900277 7.2305 -0.0900282 7.8166 0.271469 8.1781Z"
            fill="#B9CBE5"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
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
  methods: {
    minus() {
      this.inputVal -= 1
    },
    plus() {
      this.inputVal += 1
    },
  },
}
</script>

<style lang="scss" scoped>
.wu-number {
  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__inner {
    position: relative;
  }

  &__icon-wrapper {
    margin-right: 10px;
  }

  &__label {
    margin-right: 13px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: $blue02;
  }

  &__input {
    &::v-deep {
      max-width: 70px;

      margin-top: 0px;
      padding: 0px 25px;
      border: 1px solid #dce5f2;
      border-radius: 4px;
      &.v-input--is-focused {
        border-color: $blue04;
      }
      .v-input__slot {
        &::before,
        &::after {
          display: none;
        }
      }
      .v-text-field__slot {
        input {
          padding: 0px;
          font-size: 16px;
          line-height: 32px;
          text-align: center;
          color: $blue02;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type='number'] {
          -moz-appearance: textfield;
        }
      }
    }
  }

  &__minus,
  &__plus {
    padding: 0 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  &__minus {
    left: 0px;
  }

  &__plus {
    right: 0px;
  }
}
</style>
