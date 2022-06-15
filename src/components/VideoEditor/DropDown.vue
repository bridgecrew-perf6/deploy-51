<template>
  <div class="drop-down">
    <div class="drop-down__button" @click="open = !open">
      <div class="drop-down__left">
        <div class="drop-down__icon">
          <slot name="icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="20" rx="4" fill="#ACA3DD"/>
            </svg>
          </slot>
        </div>
        <div class="drop-down__title">{{ title }}</div>
      </div>
      <button
          class="drop-down__arrow"
          :class="{'drop-down__arrow_active': open}">
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.778 0.525321C13.3409 1.09842 13.3409 2.02761 12.778 2.60071L8.02163 7.44328C7.73369 7.73645 7.35423 7.87965 6.97688 7.87288C6.60031 7.87901 6.22183 7.7358 5.93449 7.44324L1.17816 2.60064C0.615264 2.02754 0.615264 1.09835 1.17816 0.525248C1.74106 -0.0478574 2.65369 -0.0478583 3.21659 0.525247L6.97809 4.35497L10.7395 0.525321C11.3024 -0.0477825 12.2151 -0.0477825 12.778 0.525321Z"
              fill="#ACA3DD"/>
        </svg>
      </button>
    </div>

    <div class="drop-down__content" v-if="open">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  }
}
</script>

<style scoped lang="scss">
.drop-down {
  border-bottom: 1px solid #DEDBF5;
  user-select: none;

  &:not(:first-child) &__button  {
    padding-top: 32px;
  }

  &:last-child {
    border-bottom: none;
  }

  &__button {
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  &__left {
    display: flex;
    align-items: center;
  }

  &__icon {
    margin-top: 3px;
  }

  &__title {
    margin-left: 10px;
    color: #413A70;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
  }

  &__arrow {
    width: 28px;
    height: 28px;
    padding-bottom: 3px;
    border-radius: 100%;
    background-color: #fff;
    border: 1px solid #F0EFF8;
    transition: .3s;

    &_active {
      transform: rotate(-180deg);
      background-color: #F0EFF8;
      border: none;

      svg {
        path {
          fill: $blue02 !important;
        }
      }
    }
  }

  &__content {
    padding-bottom: 32px;
  }
}
</style>
