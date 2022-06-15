<template>
  <div class="recommendations">
    <h3 class="recommendations__title title-blue-20">Рекомендации</h3>
    <div class="recommendations__wrapper">
      <div class="recommendations__content">
        <vue-custom-scrollbar
            class="recommendations__scroll custom-scroll"
            :settings="scrollSettings"
        >
          <div class="recommendations__list">
            <div class="recommendations__item">
              <div class="recommendations__item-content">
                <div class="recommendations__item-title">Хорошее движение, скорость перемещения.</div>
                <div class="recommendations__item-tags">
                  <div class="recommendations__item-tag">I период</div>
                  <div class="recommendations__item-tag">00:05:23</div>
                </div>
              </div>
              <button class="recommendations__item-edit">
                <img src="@/assets/images/svg/edit.svg" alt="edit">
              </button>
            </div>
            <div class="recommendations__item">
              <div class="recommendations__item-content">
                <div class="recommendations__item-title">Понравилась твоя выдержка в моментах, когда у соперника было время думать, выход 2:1 например.</div>
                <div class="recommendations__item-tags">
                  <div class="recommendations__item-tag">I период</div>
                  <div class="recommendations__item-tag">00:05:23</div>
                </div>
              </div>
              <button class="recommendations__item-edit">
                <img src="@/assets/images/svg/edit.svg" alt="edit">
              </button>
            </div>
            <div class="recommendations__item">
              <div class="recommendations__item-content">
                <div class="recommendations__item-title">Дожимать надо такие игры, тем более в конце соперник был очень активен.</div>
                <div class="recommendations__item-tags">
                  <div class="recommendations__item-tag">I период</div>
                  <div class="recommendations__item-tag">00:05:23</div>
                </div>
              </div>
              <button class="recommendations__item-edit">
                <img src="@/assets/images/svg/edit.svg" alt="edit">
              </button>
            </div>
          </div>
        </vue-custom-scrollbar>
      </div>
      <div class="recommendations__footer">
        <button class="recommendations__add">+  Добавить рекомендацию</button>
      </div>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

export default {
  name: 'RecommendationsBlock',
  components: {
    vueCustomScrollbar,
  },
  data() {
    return {
      scrollSettings: {
        useBothWheelAxes: true,
        suppressScrollX: false,
        wheelPropagation: false,
      },
    }
  }
}
</script>

<style scoped lang="scss">
.recommendations {
  &__title {
    margin-left: 30px;
  }

  &__wrapper {
    width: 100%;
    height: 320px;
    margin-top: 12px;
    border-radius: 28px;
    background-color: $blue02;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    overflow: hidden;
  }

  &__content {
    width: 100%;
    height: 276px;
    padding: 18px 5px 3px 0;
    background-color: #fff;
  }

  &__scroll {
    width: 100%;
    height: 100%;
    padding: 0 23px 0 27px;
  }

  &__list {}

  &__item {
    width: 100%;
    padding-bottom: 13px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid #DCE5F2;
    cursor: pointer;

    &:not(:first-child) {
      margin-top: 12px;
    }
  }

  &__item-content {
    display: flex;
    flex-direction: column;
  }

  &__item-title {
    padding-right: 15px;
    color: $blue02;
    font-size: 16px;
    font-weight: 400;
  }

  &__item-tags {
    margin-top: 7px;
    display: flex;
    flex-wrap: wrap;
  }

  &__item-tag {
    width: 67px;
    height: 20px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #899BC9;
    color: #fff;
    font-size: 12px;

    &:not(:first-child) {
      margin-left: 15px;
    }
  }

  &__item-edit {
    display: none;
  }

  &__item:hover &__item-edit {
    display: block;
  }

  &__footer {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__add {
    width: 218px;
    height: 32px;
    border-radius: 32px;
    background-color: $blue03;
    border: 2px solid rgba(255, 255, 255, 0.5);
    color: #ECF6FF;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
