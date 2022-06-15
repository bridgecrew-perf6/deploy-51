<template>
  <div class="drop-down">
    <div class="drop-down__block" @click="open = !open">
      <div class="drop-down__block-content">
        <div class="drop-down__block-logo">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" rx="6" fill="#95B0DA"/>
            <rect width="31.7333" height="31.7333" rx="6" fill="#B9CBE5"/>
          </svg>
        </div>
        <div class="drop-down__block-title">{{title}}</div>
      </div>
      <div class="drop-down__block-content">
        <div class="drop-down__block-score-wrapper">
          <div class="drop-down__block-score-title">Средний балл</div>
          <div class="drop-down__block-score">9</div>
        </div>
        <div
            class="drop-down__block-arrow"
            :class="{'drop-down__block-arrow_active': open}">
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.4455 1.26991C16.151 1.97154 16.151 3.1091 15.4455 3.81073L9.48407 9.73932C9.12415 10.0973 8.65013 10.2726 8.17844 10.2653C7.70512 10.2739 7.22907 10.0986 6.86789 9.7394L0.906504 3.8108C0.200993 3.10916 0.200993 1.9716 0.906504 1.26996C1.61201 0.568334 2.75588 0.568335 3.46139 1.26997L8.17594 5.9586L12.8906 1.26991C13.5961 0.568278 14.74 0.568278 15.4455 1.26991Z"
                  fill="#36427D"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="drop-down__open" v-if="open">
      <slot name="open-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSelectPlayer',
  props: {
    title: String
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
  width: 100%;
  border-bottom: 2px solid #36427D;
  user-select: none;

  &__block {
    width: 100%;
    height: 101px;
    padding-left: 22px;
    padding-right: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #464EA3;
    cursor: pointer;
  }

  &__block-content {
    display: flex;
    align-items: center;
  }

  &__block-title {
    margin-left: 13px;
    margin-bottom: 3px;
    font-size: 20px;
    font-weight: 400;
  }

  &__block-score-wrapper {
    display: flex;
    align-items: center;
  }

  &__block-score-title {
    font-size: 14px;
    font-weight: 400;
  }

  &__block-score {
    width: 64px;
    height: 36px;
    margin-left: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(263.56deg, #333876 -4.31%, #464EA3 100%);
    font-size: 24px;
    font-weight: 700;
    border: 1px solid #333876;
  }

  &__block-arrow {
    width: 36px;
    height: 36px;
    margin-left: 63px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $blue03;
    transition: .3s;

    &_active {
      transform: rotate(-180deg);
    }
  }

  &__open {
    width: calc(100% - 40px);
    margin: 0 auto;
    border-top: 1px solid rgba(51, 56, 118, 0.5);
    padding: 16px 20px 19px 20px;
  }
}
</style>
