<template>
  <div class="homework">
    <h3 class="homework__title title-blue-20">Домашнее задание</h3>
    <div class="homework__wrapper">
      <vue-custom-scrollbar
          class="homework__scroll custom-scroll"
          :settings="scrollSettings">
        <div class="homework__list">
          <div class="homework__item">
            <div class="homework__item-wrapper">
              <div class="homework__item-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="11.9996" width="48" height="60" rx="12" fill="#899BC9"/>
                  <rect x="5.99982" width="48" height="60" rx="12" fill="#B9CBE5"/>
                  <rect width="48" height="60" rx="12" fill="white"/>
                  <rect x="10.5004" y="16.5" width="27" height="3.75" rx="1.875" fill="#B9CBE5"/>
                  <rect x="10.5004" y="39.75" width="27" height="3.75" rx="1.875" fill="#B9CBE5"/>
                  <rect x="10.5004" y="24.75" width="27" height="3" rx="1.5" fill="#B9CBE5"/>
                  <rect x="10.5004" y="48" width="27" height="3" rx="1.5" fill="#B9CBE5"/>
                  <rect x="10.5004" y="9" width="27" height="3" rx="1.5" fill="#B9CBE5"/>
                  <rect x="10.5004" y="32.25" width="27" height="3" rx="1.5" fill="#B9CBE5"/>
                </svg>
              </div>
              <div class="homework__item-content">
                <div class="homework__item-top">
                  <div class="homework__item-title">Приседания 20 по 3 ежедневно</div>
                  <button class="homework__item-edit">
                    <img src="@/assets/images/svg/edit.svg" alt="edit">
                  </button>
                </div>
                <div class="homework__item-progress">
                  <div class="homework__item-row">
                    <div class="homework__item-progress-num">
                      <span>49</span> из 100%
                    </div>
                    <div class="homework__item-date">до 24.10.2021</div>
                  </div>
                  <div class="homework__item-progress-bar">
                    <span style="width: 50%"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="homework__item">
            <div class="homework__item-wrapper">
              <div class="homework__item-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="11.9996" width="48" height="60" rx="12" fill="#899BC9"/>
                  <rect x="5.99982" width="48" height="60" rx="12" fill="#B9CBE5"/>
                  <rect width="48" height="60" rx="12" fill="white"/>
                  <rect x="10.5004" y="16.5" width="27" height="3.75" rx="1.875" fill="#B9CBE5"/>
                  <rect x="10.5004" y="39.75" width="27" height="3.75" rx="1.875" fill="#B9CBE5"/>
                  <rect x="10.5004" y="24.75" width="27" height="3" rx="1.5" fill="#B9CBE5"/>
                  <rect x="10.5004" y="48" width="27" height="3" rx="1.5" fill="#B9CBE5"/>
                  <rect x="10.5004" y="9" width="27" height="3" rx="1.5" fill="#B9CBE5"/>
                  <rect x="10.5004" y="32.25" width="27" height="3" rx="1.5" fill="#B9CBE5"/>
                </svg>
              </div>
              <div class="homework__item-content">
                <div class="homework__item-top">
                  <div class="homework__item-title">Посмотреть видео матча</div>
                  <button class="homework__item-edit">
                    <img src="@/assets/images/svg/edit.svg" alt="edit">
                  </button>
                </div>
                <div class="homework__item-row">
                  <div class="homework__item-link">
                    <div class="homework__item-link-icon">
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00014 14.315C6.015 14.315 4.02986 14.3172 2.04472 14.3139C0.59956 14.3128 0.00501933 13.737 0.00279259 12.3147C-0.00277426 8.83887 -0.00166089 5.36412 0.00279259 1.88827C0.00501933 0.623513 0.621827 0.00555878 1.8766 0.00444935C5.92036 0.00112105 9.96524 0.00112105 14.009 0.00444935C15.4029 0.00555878 15.993 0.599106 15.9953 2.00365C16.0008 5.4795 15.9997 8.95425 15.9953 12.4301C15.993 13.7193 15.3784 14.3139 14.0669 14.3161C12.0439 14.3172 10.022 14.315 8.00014 14.315ZM6.23099 4.00174C5.70659 4.02947 5.6075 4.36009 5.6075 4.76392C5.60639 6.35041 5.60194 7.93579 5.60862 9.52228C5.61196 10.27 5.97937 10.5075 6.62958 10.138C8.03465 9.34033 9.42525 8.51824 10.8092 7.68617C11.3325 7.37109 11.3247 6.92399 10.8159 6.62222C9.41969 5.79236 8.01906 4.97249 6.61733 4.15484C6.49375 4.08273 6.34789 4.04723 6.23099 4.00174Z" fill="#ECF6FF"/>
                        <path d="M6.23121 4.00195C6.34812 4.04744 6.49397 4.08294 6.61755 4.15505C8.01928 4.97271 9.4199 5.79258 10.8161 6.62133C11.3249 6.92309 11.3327 7.37019 10.8094 7.68527C9.42547 8.51846 8.03487 9.34055 6.6298 10.1371C5.97959 10.5066 5.61107 10.2691 5.60884 9.52138C5.60327 7.93489 5.60661 6.34951 5.60773 4.76302C5.60773 4.3603 5.7057 4.02969 6.23121 4.00195Z" fill="#464EA3"/>
                      </svg>
                    </div>
                    <p>Домашний матч от 12.05.2021.mp4</p>
                  </div>
                  <div class="homework__item-date">до 24.10.2021</div>
                </div>
              </div>
            </div>
          </div>
          <div class="homework__item">
            <div class="homework__item-wrapper">
              <div class="homework__item-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="11.9996" width="48" height="60" rx="12" fill="#899BC9"/>
                  <rect x="5.99982" width="48" height="60" rx="12" fill="#B9CBE5"/>
                  <rect width="48" height="60" rx="12" fill="white"/>
                  <rect x="10.5004" y="16.5" width="27" height="3.75" rx="1.875" fill="#B9CBE5"/>
                  <rect x="10.5004" y="39.75" width="27" height="3.75" rx="1.875" fill="#B9CBE5"/>
                  <rect x="10.5004" y="24.75" width="27" height="3" rx="1.5" fill="#B9CBE5"/>
                  <rect x="10.5004" y="48" width="27" height="3" rx="1.5" fill="#B9CBE5"/>
                  <rect x="10.5004" y="9" width="27" height="3" rx="1.5" fill="#B9CBE5"/>
                  <rect x="10.5004" y="32.25" width="27" height="3" rx="1.5" fill="#B9CBE5"/>
                </svg>
              </div>
              <div class="homework__item-content">
                <div class="homework__item-top">
                  <div class="homework__item-title">Прочитать статью </div>
                  <button class="homework__item-edit">
                    <img src="@/assets/images/svg/edit.svg" alt="edit">
                  </button>
                </div>
                <div class="homework__item-row">
                  <div class="homework__item-link">
                    <div class="homework__item-link-icon">
                      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.00030586 8.78038C0.00030586 6.45585 -0.000917581 4.13009 0.0015293 1.80555C0.00275274 0.53317 0.505587 0.0119837 1.75961 0.00831338C4.00218 -0.000250708 6.24475 -0.0100382 8.48732 0.0229947C8.81397 0.0278884 9.21526 0.189383 9.45016 0.415719C10.8596 1.77374 12.2433 3.15867 13.5989 4.5693C13.824 4.80298 13.9769 5.20794 13.9806 5.53582C14.0075 8.98225 14.0001 12.4287 13.9952 15.8751C13.994 17.0472 13.4924 17.5549 12.3216 17.5561C8.8152 17.5622 5.30882 17.5622 1.80366 17.5561C0.476224 17.5537 0.00275274 17.0692 0.0015293 15.754C0.00030586 13.4307 0.00030586 11.1061 0.00030586 8.78038ZM5.55228 8.70453C5.55228 10.1922 5.54861 11.6971 5.55962 13.2007C5.56084 13.3169 5.64037 13.4906 5.73335 13.5383C6.5604 13.9568 8.06523 13.4662 8.45184 12.6085C8.88738 11.6457 8.91797 10.6217 8.53748 9.63924C8.14353 8.62501 6.96168 8.27388 5.55228 8.70453ZM12.3938 5.6129C11.0822 4.29892 9.74624 2.95803 8.42614 1.63549C8.42614 2.69254 8.39311 3.83034 8.45428 4.96325C8.46652 5.18959 8.83233 5.57252 9.05254 5.58353C10.2014 5.64715 11.3551 5.6129 12.3938 5.6129ZM2.94023 11.9087C3.27913 11.8671 3.60946 11.9161 3.82356 11.7815C4.19181 11.549 4.64204 11.2615 4.78885 10.8908C5.33451 9.50588 4.5931 8.55282 3.06625 8.55894C2.04957 8.56261 2.04223 8.56995 2.04223 9.5536C2.04223 10.2045 2.04223 10.8553 2.04223 11.5062C2.04223 12.1705 2.04223 12.8349 2.04223 13.5151C2.37745 13.5151 2.62703 13.5151 2.94023 13.5151C2.94023 12.9535 2.94023 12.4336 2.94023 11.9087ZM10.3959 9.40434C10.9391 9.40434 11.415 9.40434 11.8775 9.40434C11.8775 9.11683 11.8775 8.9015 11.8775 8.67272C11.0639 8.67272 10.2894 8.67272 9.51623 8.67272C9.51623 10.3219 9.51623 11.9161 9.51623 13.5041C10.3604 13.6056 10.3616 13.6056 10.3641 12.8459C10.3653 12.4238 10.3641 12.0029 10.3641 11.5087C10.8779 11.5087 11.3135 11.5087 11.7563 11.5087C11.7563 11.2224 11.7563 11.0095 11.7563 10.7293C11.289 10.7293 10.8522 10.7293 10.3947 10.7293C10.3959 10.2828 10.3959 9.90473 10.3959 9.40434Z" fill="#ECF6FF"/>
                        <path d="M5.55211 8.70389C6.96152 8.27324 8.14336 8.62437 8.53731 9.63983C8.91903 10.6222 8.88722 11.6463 8.45167 12.6091C8.06507 13.4668 6.56023 13.9574 5.73318 13.5389C5.6402 13.4912 5.56068 13.3175 5.55945 13.2013C5.54722 11.6964 5.55211 10.1916 5.55211 8.70389ZM6.49784 9.44407C6.47826 9.53583 6.45501 9.59334 6.45379 9.65206C6.45012 10.5232 6.444 11.3955 6.4489 12.2666C6.45134 12.8061 6.68502 12.9676 7.16216 12.7094C7.37382 12.5957 7.62463 12.3571 7.65521 12.1454C7.74575 11.5178 7.82282 10.8633 7.74208 10.2405C7.6442 9.48934 7.34813 9.35232 6.49784 9.44407Z" fill="#464EA3"/>
                        <path d="M12.3938 5.61217C11.355 5.61217 10.2013 5.64521 9.05253 5.58281C8.83354 5.57058 8.46773 5.18886 8.45427 4.96253C8.39187 3.82962 8.42613 2.69182 8.42613 1.63477C9.74622 2.95853 11.0822 4.2982 12.3938 5.61217Z" fill="#464EA3"/>
                        <path d="M2.94012 11.9096C2.94012 12.4345 2.94012 12.9545 2.94012 13.5148C2.62692 13.5148 2.37734 13.5148 2.04211 13.5148C2.04211 12.8346 2.04211 12.1702 2.04211 11.5059C2.04211 10.855 2.04211 10.2042 2.04211 9.55328C2.04211 8.56963 2.04945 8.56229 3.06613 8.55862C4.59299 8.55251 5.33439 9.50679 4.78874 10.8905C4.64193 11.2612 4.19292 11.5487 3.82344 11.7812C3.60934 11.917 3.27901 11.868 2.94012 11.9096ZM2.97315 11.2551C3.37322 11.0288 3.78185 10.9345 3.8577 10.7229C3.97393 10.3975 3.95313 9.94968 3.81121 9.63525C3.72557 9.4444 3.29981 9.40769 2.97438 9.28168C2.97315 9.97292 2.97315 10.4953 2.97315 11.2551Z" fill="#464EA3"/>
                        <path d="M10.3959 9.40422C10.3959 9.90339 10.3959 10.2827 10.3959 10.7304C10.8535 10.7304 11.289 10.7304 11.7576 10.7304C11.7576 11.0106 11.7576 11.2235 11.7576 11.5098C11.3135 11.5098 10.8791 11.5098 10.3653 11.5098C10.3653 12.0028 10.3665 12.4249 10.3653 12.847C10.3629 13.6067 10.3629 13.6067 9.51746 13.5052C9.51746 11.9172 9.51746 10.323 9.51746 8.67383C10.2907 8.67383 11.0663 8.67383 11.8787 8.67383C11.8787 8.90139 11.8787 9.11794 11.8787 9.40544C11.415 9.40422 10.9391 9.40422 10.3959 9.40422Z" fill="#464EA3"/>
                        <path d="M6.4979 9.44358C7.34819 9.3506 7.64427 9.48763 7.74214 10.2413C7.82289 10.864 7.74581 11.5185 7.65528 12.1462C7.62469 12.3578 7.37266 12.5964 7.16223 12.7102C6.68631 12.9671 6.45264 12.8056 6.44896 12.2673C6.44407 11.3962 6.45019 10.5251 6.45386 9.65279C6.45508 9.59406 6.47833 9.53534 6.4979 9.44358Z" fill="#ECF6FF"/>
                        <path d="M2.97314 11.2547C2.97314 10.4949 2.97314 9.97249 2.97314 9.28125C3.29858 9.40726 3.72434 9.44397 3.80998 9.63482C3.9519 9.94925 3.9727 10.3983 3.85647 10.7225C3.78184 10.9341 3.37321 11.0271 2.97314 11.2547Z" fill="#ECF6FF"/>
                      </svg>
                    </div>
                    <p>Спортивный вестник-10.21.pdf</p>
                  </div>
                  <div class="homework__item-date">до 24.10.2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vue-custom-scrollbar>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

export default {
  name: 'HomeworkBlock',
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
.homework {
  width: 100%;

  &__title {
    margin-left: 30px;
  }

  &__wrapper {
    width: 100%;
    height: 320px;
    padding-left: 24px;
    padding-right: 10px;
    margin-top: 12px;
    border-radius: 28px;
    background-color: $blue03;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    overflow: hidden;
  }

  &__scroll {
    padding-right: 14px;
    height: 100%;
  }

  &__list {
  }

  &__item {
    width: 100%;
    height: 85px;
    padding: 12px 20px 13px 15px;
    margin-top: 22px;
    border-radius: 12px;
    background-color: $blue02;
    cursor: pointer;

    &:not(:first-child) {
      margin-top: 11px;
    }
  }

  &__item-wrapper {
    display: flex;
    align-items: center;
  }

  &__item-content {
    width: 100%;
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    color: #fff;
  }

  &__item-top {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__item-title {
    font-size: 16px;
    font-weight: 500;
  }

  &__item-edit {
    display: none;
  }

  &__item:hover &__item-edit {
    display: block;
  }

  &__item-progress {
  }

  &__item-row {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }

  &__item-link {
    max-width: 70%;
    display: flex;
    align-items: center;

    p {
      margin-left: 9px;
      margin-bottom: 3px;
      font-size: 14px;
      line-height: 1.2;
    }
  }

  &__item-progress-num {
    font-size: 12px;
    font-weight: 400;

    span {
      margin-right: 3px;
      font-size: 18px;
      font-weight: 700;
      color: #2ABAF3;
    }
  }

  &__item-date {
    font-size: 14px;
    font-weight: 400;
  }

  &__item-progress-bar {
    width: 100%;
    height: 4px;
    margin-top: 5px;
    border-radius: 10px;
    background-color: $blue01;

    span {
      display: block;
      height: 4px;
      border-radius: 10px;
      background-color: #2ABAF3;
    }
  }

  &__item-edit {
  }
}
</style>
