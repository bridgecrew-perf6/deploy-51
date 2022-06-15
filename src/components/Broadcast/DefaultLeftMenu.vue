<template>
  <div>
    <drop-down title="Последние видеофайлы">
      <template #icon>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M7.98255 16.0005C5.88993 16.0005 3.79615 16.0028 1.70353 15.9994C0.497274 15.9982 0.00407124 15.5108 0.00174482 14.3185C-0.000581606 11.8955 -0.000581606 9.47373 0.00174482 7.05076C0.00290803 5.84567 0.519375 5.32106 1.72679 5.3199C5.89342 5.31524 10.06 5.31524 14.2267 5.3199C15.526 5.32106 16.0134 5.81542 16.0134 7.10543C16.0145 9.48885 16.0157 11.8723 16.0134 14.2569C16.0122 15.5469 15.5539 15.9994 14.2604 16.0005C12.169 16.0005 10.0763 16.0005 7.98255 16.0005ZM6.01556 10.6742C6.01556 11.3325 5.99462 11.9921 6.02253 12.6493C6.04464 13.1751 6.52272 13.5043 6.94496 13.2611C8.09887 12.5958 9.24231 11.9072 10.359 11.1813C10.8313 10.8742 10.7661 10.3717 10.2601 10.0646C9.20741 9.42371 8.15005 8.79092 7.08338 8.17326C6.49713 7.8336 6.04813 8.08136 6.02137 8.75719C5.99578 9.39579 6.01556 10.0356 6.01556 10.6742Z"
              fill="#464EA3"/>
          <path
              d="M8.07093 2.68101C10.1822 2.68101 12.2934 2.67519 14.4046 2.68799C14.6431 2.68915 14.9304 2.73451 15.1026 2.87294C15.2468 2.98926 15.3445 3.29402 15.3015 3.47781C15.2596 3.66159 15.0421 3.84654 14.856 3.94542C14.7012 4.02801 14.4802 3.99776 14.2883 3.99776C10.124 4.00009 5.9597 3.99893 1.79424 3.99893C1.69769 3.99893 1.59998 3.99776 1.50343 3.99893C1.0335 4.00242 0.681042 3.82328 0.691511 3.30914C0.70198 2.81594 1.07421 2.68333 1.50227 2.68217C3.6926 2.67984 5.88177 2.68101 8.07093 2.68101Z"
              fill="#464EA3"/>
          <path
              d="M8.04885 1.34419C6.15281 1.34419 4.25561 1.34768 2.35957 1.33954C2.13391 1.33837 1.85822 1.33488 1.69654 1.21275C1.52787 1.08479 1.37084 0.802132 1.39178 0.605549C1.41271 0.408966 1.62442 0.17167 1.81519 0.0704709C2.0013 -0.0284022 2.26767 0.00882059 2.49915 0.00882059C6.21446 0.00649417 9.93092 0.00649417 13.6462 0.00765738C13.7812 0.00765738 13.9196 -0.00397475 14.0522 0.0157999C14.4558 0.0751238 14.7373 0.347316 14.6501 0.717218C14.5931 0.959166 14.2616 1.28836 14.0278 1.31046C13.2217 1.38607 12.4051 1.34419 11.592 1.34535C10.409 1.34419 9.22951 1.34419 8.04885 1.34419Z"
              fill="#464EA3"/>
        </svg>
      </template>
      <template #content>
        <div class="dropdown">
          <div class="dropdown__item" v-for="i in 5" :key="i">
            <div class="dropdown__item-left">
              <div class="dropdown__item-icon">
                <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.4 1H4.2C2.44 1 1 2.44 1 4.2V29.8C1 31.56 2.44 33 4.2 33H23.4C25.16 33 26.6 31.56 26.6 29.8V12.2L15.4 1Z"
                      stroke="#464EA3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.3998 1V12.2H26.5998" stroke="#464EA3" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path
                      d="M10.005 19.4212C10.005 18.238 9.99293 17.0548 10.0084 15.8733C10.0204 14.9984 10.3952 14.7767 11.1446 15.2271C13.2572 16.4969 15.3612 17.7806 17.4583 19.0747C18.1923 19.5269 18.182 20.0033 17.4257 20.4052C15.3268 21.5209 13.2194 22.6209 11.1051 23.7071C10.3659 24.0865 10.0204 23.8752 10.0084 23.0558C9.99121 21.8448 10.005 20.6322 10.005 19.4212ZM11.2254 22.316C12.9375 21.4187 14.5103 20.5923 16.2069 19.7019C14.4708 18.6451 12.898 17.6871 11.2254 16.6667C11.2254 18.6105 11.2254 20.3862 11.2254 22.316Z"
                      fill="#464EA3"/>
                </svg>
              </div>
              <div class="dropdown__item-text">
                <div class="dropdown__item-title">Домашний матч.mp4</div>
                <div class="dropdown__item-bottom">
                  <p class="dropdown__item-min">01:20:54 • MP4 • 31 МБ</p>
                  <p class="dropdown__item-min">10.11.2021</p>
                </div>
              </div>
            </div>
            <div class="dropdown__item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22.6 15.4004V20.2004C22.6 21.5204 21.52 22.6004 20.2 22.6004H3.4C2.08 22.6004 1 21.5204 1 20.2004V15.4004"
                    stroke="#464EA3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.7998 9.40039L11.7998 15.4004L17.7998 9.40039" stroke="#464EA3" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M11.7998 15.4V1" stroke="#464EA3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </template>
    </drop-down>
    <drop-down title="Записи матчей">
      <template #content>
        <div class="dropdown">
          <div class="dropdown__item" v-for="i in 5" :key="i">
            <div class="dropdown__item-left">
              <div class="dropdown__item-icon">
                <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.4 1H4.2C2.44 1 1 2.44 1 4.2V29.8C1 31.56 2.44 33 4.2 33H23.4C25.16 33 26.6 31.56 26.6 29.8V12.2L15.4 1Z"
                      stroke="#464EA3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.3998 1V12.2H26.5998" stroke="#464EA3" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path
                      d="M10.005 19.4212C10.005 18.238 9.99293 17.0548 10.0084 15.8733C10.0204 14.9984 10.3952 14.7767 11.1446 15.2271C13.2572 16.4969 15.3612 17.7806 17.4583 19.0747C18.1923 19.5269 18.182 20.0033 17.4257 20.4052C15.3268 21.5209 13.2194 22.6209 11.1051 23.7071C10.3659 24.0865 10.0204 23.8752 10.0084 23.0558C9.99121 21.8448 10.005 20.6322 10.005 19.4212ZM11.2254 22.316C12.9375 21.4187 14.5103 20.5923 16.2069 19.7019C14.4708 18.6451 12.898 17.6871 11.2254 16.6667C11.2254 18.6105 11.2254 20.3862 11.2254 22.316Z"
                      fill="#464EA3"/>
                </svg>
              </div>
              <div class="dropdown__item-text">
                <div class="dropdown__item-title">Домашний матч.mp4</div>
                <div class="dropdown__item-bottom">
                  <p class="dropdown__item-min">01:20:54 • MP4 • 31 МБ</p>
                  <p class="dropdown__item-min">10.11.2021</p>
                </div>
              </div>
            </div>
            <div class="dropdown__item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22.6 15.4004V20.2004C22.6 21.5204 21.52 22.6004 20.2 22.6004H3.4C2.08 22.6004 1 21.5204 1 20.2004V15.4004"
                    stroke="#464EA3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.7998 9.40039L11.7998 15.4004L17.7998 9.40039" stroke="#464EA3" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M11.7998 15.4V1" stroke="#464EA3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </template>
    </drop-down>
    <drop-down title="Записи тренировок">
      <template #content>
        <div class="dropdown">
          <div class="dropdown__item" v-for="i in 5" :key="i">
            <div class="dropdown__item-left">
              <div class="dropdown__item-icon">
                <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.4 1H4.2C2.44 1 1 2.44 1 4.2V29.8C1 31.56 2.44 33 4.2 33H23.4C25.16 33 26.6 31.56 26.6 29.8V12.2L15.4 1Z"
                      stroke="#464EA3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.3998 1V12.2H26.5998" stroke="#464EA3" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path
                      d="M10.005 19.4212C10.005 18.238 9.99293 17.0548 10.0084 15.8733C10.0204 14.9984 10.3952 14.7767 11.1446 15.2271C13.2572 16.4969 15.3612 17.7806 17.4583 19.0747C18.1923 19.5269 18.182 20.0033 17.4257 20.4052C15.3268 21.5209 13.2194 22.6209 11.1051 23.7071C10.3659 24.0865 10.0204 23.8752 10.0084 23.0558C9.99121 21.8448 10.005 20.6322 10.005 19.4212ZM11.2254 22.316C12.9375 21.4187 14.5103 20.5923 16.2069 19.7019C14.4708 18.6451 12.898 17.6871 11.2254 16.6667C11.2254 18.6105 11.2254 20.3862 11.2254 22.316Z"
                      fill="#464EA3"/>
                </svg>
              </div>
              <div class="dropdown__item-text">
                <div class="dropdown__item-title">Домашний матч.mp4</div>
                <div class="dropdown__item-bottom">
                  <p class="dropdown__item-min">01:20:54 • MP4 • 31 МБ</p>
                  <p class="dropdown__item-min">10.11.2021</p>
                </div>
              </div>
            </div>
            <div class="dropdown__item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22.6 15.4004V20.2004C22.6 21.5204 21.52 22.6004 20.2 22.6004H3.4C2.08 22.6004 1 21.5204 1 20.2004V15.4004"
                    stroke="#464EA3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.7998 9.40039L11.7998 15.4004L17.7998 9.40039" stroke="#464EA3" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M11.7998 15.4V1" stroke="#464EA3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </template>
    </drop-down>
    <drop-down title="Домашняя работа">
      <template #content>
        <div class="dropdown">
          <div class="dropdown__item" v-for="i in 5" :key="i">
            <div class="dropdown__item-left">
              <div class="dropdown__item-icon">
                <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.4 1H4.2C2.44 1 1 2.44 1 4.2V29.8C1 31.56 2.44 33 4.2 33H23.4C25.16 33 26.6 31.56 26.6 29.8V12.2L15.4 1Z"
                      stroke="#464EA3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.3998 1V12.2H26.5998" stroke="#464EA3" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path
                      d="M10.005 19.4212C10.005 18.238 9.99293 17.0548 10.0084 15.8733C10.0204 14.9984 10.3952 14.7767 11.1446 15.2271C13.2572 16.4969 15.3612 17.7806 17.4583 19.0747C18.1923 19.5269 18.182 20.0033 17.4257 20.4052C15.3268 21.5209 13.2194 22.6209 11.1051 23.7071C10.3659 24.0865 10.0204 23.8752 10.0084 23.0558C9.99121 21.8448 10.005 20.6322 10.005 19.4212ZM11.2254 22.316C12.9375 21.4187 14.5103 20.5923 16.2069 19.7019C14.4708 18.6451 12.898 17.6871 11.2254 16.6667C11.2254 18.6105 11.2254 20.3862 11.2254 22.316Z"
                      fill="#464EA3"/>
                </svg>
              </div>
              <div class="dropdown__item-text">
                <div class="dropdown__item-title">Домашний матч.mp4</div>
                <div class="dropdown__item-bottom">
                  <p class="dropdown__item-min">01:20:54 • MP4 • 31 МБ</p>
                  <p class="dropdown__item-min">10.11.2021</p>
                </div>
              </div>
            </div>
            <div class="dropdown__item-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22.6 15.4004V20.2004C22.6 21.5204 21.52 22.6004 20.2 22.6004H3.4C2.08 22.6004 1 21.5204 1 20.2004V15.4004"
                    stroke="#464EA3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.7998 9.40039L11.7998 15.4004L17.7998 9.40039" stroke="#464EA3" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M11.7998 15.4V1" stroke="#464EA3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </template>
    </drop-down>
  </div>
</template>

<script>
import DropDown from '@/components/VideoEditor/DropDown.vue';
export default {
  name: 'DefaultLeftMenu',
  components: {
    DropDown
  }
}
</script>

<style scoped lang="scss">
.dropdown {
  &__items {
    display: flex;
    flex-direction: column;
  }

  &__item {
    width: 100%;
    height: 64px;
    padding: 16px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid #DEDBF5;
    transition: .3s;
    cursor: pointer;

    &:hover {
      border: 1px solid #6E65AE;
    }

    &:not(:first-child) {
      margin-top: 12px;
    }
  }

  &__item-left {
    display: flex;
  }

  &__item-text {
    margin-left: 13px;
  }

  &__item-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__item-title {
    font-size: 14px;
    color: $blue02;
  }

  &__item-bottom {
    margin-top: 5px;
    font-size: 10px;
    color: $blue02;
  }

  &__item-min {
    &:not(:first-child) {
      margin-left: 47px;
    }
  }
}
</style>
