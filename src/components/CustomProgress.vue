<template>
  <div class="custom-progress">
    <button
        class="custom-progress__btn custom-progress__btn_minus"
        @click="dec">
      <svg width="9" height="4" viewBox="0 0 9 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.46472 0.144H2.34472C2.20072 0.144 2.01672 0.176 1.79272 0.24C1.58472 0.288 1.38472 0.368 1.19272 0.48C1.00072 0.576 0.824719 0.712 0.664719 0.887999C0.520719 1.048 0.432719 1.24 0.400719 1.464C0.368719 1.672 0.376719 1.88 0.424719 2.088C0.488719 2.296 0.568719 2.488 0.664719 2.664C0.776719 2.824 0.904719 2.96 1.04872 3.072C1.20872 3.184 1.36072 3.24 1.50472 3.24H8.48872L8.46472 0.144Z"
            fill="#899BC9"/>
      </svg>
    </button>
    <div class="custom-progress__progress">
      <div class="custom-progress__progress-bg">
        <svg height="22" viewBox="0 0 374 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0633 1H351.714L371.607 9.98129L351.714 20.9584H24.0633L3 9.98129L24.0633 1Z"
                fill="url(#paint0_linear_2406_16111)" stroke="url(#paint1_linear_2406_16111)" stroke-width="2"/>
          <path d="M6.74219 11.6445L24.2058 21H51.6486" stroke="url(#paint2_linear_2406_16111)" stroke-width="2"/>
          <path d="M369.112 11.3125L351.649 20.9799H322.958" stroke="url(#paint3_linear_2406_16111)" stroke-width="2"/>
          <defs>
            <linearGradient id="paint0_linear_2406_16111" x1="187.304" y1="1" x2="187.304" y2="20.9584"
                            gradientUnits="userSpaceOnUse">
              <stop offset="0.463542" stop-color="#464EA3"/>
              <stop offset="1" stop-color="#333876"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2406_16111" x1="187.304" y1="1" x2="187.304" y2="20.9584"
                            gradientUnits="userSpaceOnUse">
              <stop offset="0.510417" stop-color="#464EA3"/>
              <stop offset="1" stop-color="#95B0DA"/>
            </linearGradient>
            <linearGradient id="paint2_linear_2406_16111" x1="6.74219" y1="11.3327" x2="51.6486" y2="20.6882"
                            gradientUnits="userSpaceOnUse">
              <stop :stop-color="itemColor" stop-opacity=".1"/>
              <stop offset="0.427621" :stop-color="itemColor"/>
              <stop offset="1" :stop-color="itemColor" stop-opacity=".2"/>
            </linearGradient>
            <linearGradient id="paint3_linear_2406_16111" x1="369.112" y1="11.3125" x2="322.958" y2="20.668"
                            gradientUnits="userSpaceOnUse">
              <stop :stop-color="itemColor"/>
              <stop offset="0.0001" :stop-color="itemColor" stop-opacity=".1"/>
              <stop offset="0.401042" :stop-color="itemColor"/>
              <stop offset="1" :stop-color="itemColor" stop-opacity=".2"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="custom-progress__progress-items-wrapper">
        <div class="custom-progress__progress-items">
          <div
              class="custom-progress__progress-item"
              v-for="item in max"
              :key="item">
            <svg height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M2.95184 2.85387C3.54579 1.30872 5.03013 0.289062 6.68551 0.289062H28.0525C30.8592 0.289062 32.7932 3.10436 31.7861 5.72425L29.1074 12.6931C28.5134 14.2382 27.0291 15.2579 25.3737 15.2579H4.00675C1.19996 15.2579 -0.733985 12.4426 0.273084 9.82269L2.95184 2.85387Z"
                  :fill="item <= value ? itemColor : '#36427D'"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <button
        class="custom-progress__btn"
        @click="inc">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.568 0.551999C6.152 0.551999 5.8 0.695999 5.512 0.983999C5.224 1.272 5.08 1.624 5.08 2.04V5.184H0.928V8.136H5.08V11.352C5.08 11.56 5.12 11.752 5.2 11.928C5.28 12.104 5.384 12.256 5.512 12.384C5.8 12.672 6.152 12.816 6.568 12.816C6.968 12.816 7.304 12.68 7.576 12.408C7.88 12.136 8.032 11.784 8.032 11.352V8.16C8.176 8.16 8.432 8.16 8.8 8.16C9.184 8.16 9.584 8.16 10 8.16C10.432 8.144 10.824 8.112 11.176 8.064C11.544 8.016 11.792 7.944 11.92 7.848C12.112 7.704 12.28 7.544 12.424 7.368C12.568 7.176 12.64 6.952 12.64 6.696C12.64 6.456 12.568 6.24 12.424 6.048C12.28 5.856 12.112 5.688 11.92 5.544C11.792 5.448 11.544 5.376 11.176 5.328C10.824 5.28 10.432 5.256 10 5.256C9.584 5.24 9.184 5.232 8.8 5.232C8.432 5.232 8.176 5.232 8.032 5.232V2.04C8.032 1.64 7.888 1.296 7.6 1.008C7.312 0.703999 6.968 0.551999 6.568 0.551999Z"
            fill="#899BC9"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CustomProgress',
  props: {
    progressValue: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    }
  },
  computed: {
    value: {
      get() {
        return this.progressValue
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    itemColor() {
      if (this.value < 4) return '#FF4B6B'
      if (this.value < 7) return '#FFA217'
      if (this.value < 7) return '#FFA217'
      if (this.value < 10) return '#64C048'
      return '#2ABAF3'
    }
  },
  methods: {
    dec() {
      this.value = this.value > 0 ? this.value - 1 : 0
    },
    inc() {
      this.value = this.value < this.max ? this.value + 1 : this.max
    }
  }
}
</script>

<style scoped lang="scss">
.custom-progress {
  display: flex;
  align-items: center;

  &__btn {
    &_minus {
      padding-bottom: 8px;
    }
  }

  &__progress {
    position: relative;
    width: 100%;
    max-width: 368px;
    height: 30px;
    margin: 0 9px;
  }

  &__progress-bg {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;

    svg {
      width: 100%;
    }
  }

  &__progress-items-wrapper {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 6px;
    display: flex;
    justify-content: center;
    z-index: 2;
  }

  &__progress-items {
    width: calc(100% - 13%);
    display: flex;
  }

  &__progress-item {
    width: 10%;

    svg {
      width: 100%;
    }
  }
}
</style>
