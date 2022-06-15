<template>
  <div class="color-rating">
    <div class="color-rating__btns">
      <button
          class="color-rating__btn"
          :class="active === index ? `color-rating__btn_${index + 1}` : ''"
          @click="select(index)"
          v-for="(button, index) in buttons" :key="index">{{ button.label }}
      </button>
    </div>
    <div class="color-rating__arrow">
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.51424 0.315163C6.94207 -0.105053 7.63572 -0.105054 8.06356 0.315162L11.6786 3.86588C11.9008 4.08411 12.0076 4.37276 11.999 4.65869C12.0002 4.93559 11.8933 5.21285 11.6782 5.42412L8.06308 8.97483C7.63524 9.39504 6.94159 9.39504 6.51375 8.97483C6.08592 8.55461 6.08592 7.87331 6.51375 7.4531L9.373 4.64477L6.51424 1.8369C6.0864 1.41668 6.0864 0.735379 6.51424 0.315163Z"
              fill="#899BC9"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.320876 0.315163C0.748709 -0.105053 1.44236 -0.105054 1.8702 0.315162L5.48528 3.86588C5.70747 4.08411 5.81427 4.37277 5.80567 4.65869C5.80686 4.93559 5.6999 5.21285 5.48481 5.42412L1.86972 8.97483C1.44188 9.39504 0.748227 9.39504 0.320393 8.97483C-0.107441 8.55461 -0.107441 7.87331 0.320393 7.4531L3.17964 4.64477L0.320876 1.8369C-0.106957 1.41668 -0.106957 0.735379 0.320876 0.315163Z"
              fill="#899BC9"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          label: 'Отлично',
          id: 1
        },
        {
          label: 'Хорошо',
          id: 2
        },
        {
          label: 'Удовлетворительно',
          id: 3
        },
        {
          label: 'Неудовлетворительно',
          id: 4
        },
      ],
      active: 0
    }
  },
  methods: {
    select(index) {
      this.active = index
    }
  }
}
</script>

<style scoped lang="scss">
.color-rating {
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 28px;
  background-color: $blue02;
  border: 2px solid rgba(255, 255, 255, 0.2);

  &__btns {
    display: flex;
  }

  &__btn {
    height: 32px;
    padding: 0 17px;
    border-radius: 30px;
    font-size: 14px;

    &_1 {
      background-color: #2ABAF3;
      margin-left: -2px;
    }

    &_2 {
      background-color: #64C048;
    }

    &_3 {
      background-color: #FFA217;
    }

    &_4 {
      background-color: #FF4B6B;
    }
  }

  &__arrow {
    margin-left: 10px;
    margin-right: 12px;
  }
}
</style>
