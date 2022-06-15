<template>
  <div>
    <v-dialog v-model="show" content-class="modal-player" max-width="508">
      <div class="modal-player__header">
        <div class="modal-player__header-content">
          <img
              src="@/assets/images/modal-player.png"
              class="team-score__header-logo"
              alt="logo">
          <div class="modal-player__header-count">
            <span>17</span>
          </div>
          <div class="modal-player__header-text">
            <div class="modal-player__header-title">Иванов Кирилл</div>
            <p class="modal-player__header-subtitle">Амплуа - Полевой игрок • Защитник</p>
          </div>
        </div>
        <button class="modal-player__header-close" @click.stop="show = false">
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.5481 12.2421C14.5481 12.3311 14.5481 12.4202 14.5481 12.5093C14.5377 12.5657 14.5288 12.6206 14.5184 12.677C14.3952 13.3925 13.745 13.9566 13.0206 13.9818C12.5337 13.9981 12.1225 13.8289 11.7782 13.486C10.3917 12.1011 9.00233 10.7191 7.61589 9.33559C7.50011 9.22129 7.3873 9.10402 7.26409 8.97933C7.23886 9.0105 7.22104 9.03573 7.20026 9.05652C5.71883 10.5394 4.23739 12.0268 2.75595 13.5113C2.3611 13.9061 1.88461 14.0605 1.33389 13.9788C0.609504 13.872 0.0216801 13.2069 0.00089841 12.4751C-0.0139456 11.9882 0.155277 11.5771 0.499658 11.2327C1.97961 9.74974 3.45956 8.26532 4.93951 6.78091C4.95733 6.76309 4.97514 6.74231 5.00334 6.71114C4.97366 6.68739 4.94694 6.66957 4.92318 6.64731C3.63175 5.36032 2.34032 4.07333 1.04889 2.78486C0.637708 2.37664 0.478877 1.8853 0.579816 1.31528C0.704506 0.608701 1.34132 0.0550135 2.0568 0.0208719C2.55556 -0.00287877 2.97416 0.170798 3.32597 0.522605C4.61443 1.80959 5.90438 3.0951 7.19284 4.38209C7.21511 4.40436 7.2255 4.4385 7.23589 4.45779C7.70496 3.99317 8.15177 3.55378 8.59412 3.11143C9.48328 2.22226 10.3665 1.32864 11.2586 0.443931C11.8108 -0.102335 12.7104 -0.146867 13.3264 0.323693C14.1102 0.921913 14.1874 2.04116 13.4837 2.74923C12.1908 4.05255 10.892 5.34993 9.59609 6.65028C9.57531 6.67106 9.55601 6.69184 9.53523 6.71262C9.55008 6.72895 9.56046 6.73934 9.57086 6.74973C10.1216 7.29897 10.6708 7.84672 11.2215 8.39595C12.17 9.34152 13.1171 10.2856 14.0656 11.2312C14.2764 11.442 14.4234 11.6899 14.4961 11.9808C14.5184 12.0669 14.5317 12.1545 14.5481 12.2421Z"
                fill="#B9CBE5"/>
          </svg>
        </button>
      </div>
      <div class="modal-player__games">
        <div class="modal-player__games-title">Количество игр</div>
        <div class="modal-player__games-content">
          <div class="modal-player__games-left">
            <div class="modal-player__games-count">35<span>/48</span></div>
            <div class="modal-player__games-progress">
              <span style="width: 70%; background-color: #2ABAF3;"></span>
              <span style="width: 30%; background-color: #FFFFFF;"></span>
              <span style="width: 15%; background-color: #FF4B6B;"></span>
            </div>
          </div>
          <div class="modal-player__games-tags">
            <div class="modal-player__games-tag">
              <div class="modal-player__games-tag-num" style="background-color: #2ABAF3">23</div>
              <div class="modal-player__games-tag-title">Победа</div>
            </div>
            <div class="modal-player__games-tag">
              <div class="modal-player__games-tag-num">5</div>
              <div class="modal-player__games-tag-title">Ничья</div>
            </div>
            <div class="modal-player__games-tag">
              <div class="modal-player__games-tag-num" style="background-color: #FF4B6B">7</div>
              <div class="modal-player__games-tag-title">Поражение</div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-player__row">
        <div class="modal-player__games-block-50">
          <div class="modal-player__games-block-50-header">+/-</div>
          <div class="modal-player__games-block-50-content" style="background-color: #2ABAF3;">+13</div>
        </div>
        <div class="modal-player__games-block-50">
          <div class="modal-player__games-block-50-header">+/-</div>
          <div class="modal-player__games-block-50-content" style="background-color: #64C048;">+13</div>
        </div>
      </div>
      <div class="modal-player__row">
        <div class="modal-player__games-70">
          <div class="modal-player__games-70-count">
            <div class="modal-player__games-70-title">Передачи</div>
            <div class="modal-player__games-70-count-wrapper" style="background-color: #2ABAF3;">47</div>
          </div>
          <div class="modal-player__games-70-count">
            <div class="modal-player__games-70-title">Голы</div>
            <div class="modal-player__games-70-count-wrapper" style="background-color: #FFA217;">32</div>
          </div>
        </div>
        <div class="modal-player__games-block-30">
          <div class="modal-player__games-block-30-header">+/-</div>
          <div class="modal-player__games-block-30-content" style="background-color: #64C048;">+13</div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      },
    }
  },
}
</script>

<style lang="scss">
.modal-player {
  max-width: 456px !important;
  min-height: 590px !important;
  padding: 20px 22px;
  border-radius: 28px;
  background-color: #fff;
  color: #fff;
  box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__header-content {
    display: flex;
    align-items: center;
  }

  &__header-logo {
    width: 43px;
  }

  &__header-count {
    margin-left: 12px;
    width: 43px;
    height: 43px;
    border-radius: 6px;
    background-color: #F8728A;

    span {
      width: 40px;
      height: 40px;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #EE1A40;
      font-size: 19px;
      font-weight: 600;
    }
  }

  &__header-text {
    margin-left: 12px;
    max-width: 240px;
    color: $blue02;
  }

  &__header-title {
    font-size: 18px;
    font-weight: 500;
  }

  &__header-subtitle {
    font-size: 14px;
    font-weight: 400;
  }

  &__games {
    margin-top: 18px;
  }

  &__games-count {
    font-size: 48px;
    font-weight: 700;

    span {
      color: #d0d0d0;
      font-size: 24px;
    }
  }

  &__games-progress {
    position: relative;
    width: 223px;
    height: 8px;
    margin-top: 3px;
    border-radius: 8px;
    background-color: #36427D;

    span {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 8px;
      border-radius: 10px;
    }
  }

  &__games {
    width: 100%;
    height: 160px;
    padding: 13px 29px 21px 19px;
    border-radius: 12px;
    background-color: #525BBA;
  }

  &__games-title {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
  }

  &__games-content {
    margin-top: 15px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__games-tag {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-top: 4px;
    }
  }

  &__games-tag-num {
    width: 32px;
    height: 28px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: $blue03;
    font-size: 16px;
    font-weight: 700;
  }

  &__games-tag-title {
    margin-left: 12px;
    font-size: 14px;
    font-weight: 400;
  }

  &__row {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  &__games-block-50, &__games-block-30 {
    width: 48%;
    height: 151px;
    border-radius: 12px;
    background-color: $blue03;
    overflow: hidden;
  }

  &__games-block-50-header, &__games-block-30-header {
    width: 100%;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
  }

  &__games-block-50-content, &__games-block-30-content {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: 700;
  }

  &__games-block-30-content {
    height: 90px;
  }

  &__games-block-30 {
    width: 30%;
    height: 137px;
  }

  &__games-70 {
    width: 65%;
    height: 137px;
    padding: 13px 20px 20px 20px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    background-color: $blue03;
  }

  &__games-70-count {
    width: 45%;
    text-align: center;
  }

  &__games-70-title {
    font-size: 14px;
    font-weight: 600;
  }

  &__games-70-count-wrapper {
    margin-top: 15px;
    width: 100%;
    height: 70px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: 700;
  }
}
</style>
