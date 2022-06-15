<template>
  <div class="progress">
    <div class="progress__items">
      <div class="progress__item">
        <div class="progress__item-top">
          <div class="progress__item-title">Дух</div>
          <div class="progress__item-stat">
            <div class="progress__item-arrow">
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.7954 4.24502L6.56371 0.569558C6.18758 0.242865 5.62835 0.242865 5.25222 0.569557L1.02056 4.24502C0.322072 4.8517 0.751137 6 1.67631 6H10.1396C11.0648 6 11.4939 4.8517 10.7954 4.24502Z"
                    fill="white"/>
              </svg>
            </div>
            <div class="progress__item-num">{{ spirit }} <span>%</span></div>
          </div>
        </div>
        <div class="progress__item-bottom">
          <div class="progress__item-progress">
            <span class="progress__item-progress-line"
                  :style="{width: spirit + '%', backgroundColor: colors(spirit)}"></span>
          </div>
        </div>
      </div>
      <div class="progress__item">
        <div class="progress__item-top">
          <div class="progress__item-title">Тело</div>
          <div class="progress__item-stat">
            <div class="progress__item-arrow">
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.7954 4.24502L6.56371 0.569558C6.18758 0.242865 5.62835 0.242865 5.25222 0.569557L1.02056 4.24502C0.322072 4.8517 0.751137 6 1.67631 6H10.1396C11.0648 6 11.4939 4.8517 10.7954 4.24502Z"
                    fill="white"/>
              </svg>
            </div>
            <div class="progress__item-num">{{ body }} <span>%</span></div>
          </div>
        </div>
        <div class="progress__item-bottom">
          <div class="progress__item-progress">
            <span class="progress__item-progress-line"
                  :style="{width: body + '%', backgroundColor: colors(body)}"></span>
          </div>
        </div>
      </div>
      <div class="progress__item">
        <div class="progress__item-top">
          <div class="progress__item-title">Интеллект</div>
          <div class="progress__item-stat">
            <div class="progress__item-arrow">
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.7954 4.24502L6.56371 0.569558C6.18758 0.242865 5.62835 0.242865 5.25222 0.569557L1.02056 4.24502C0.322072 4.8517 0.751137 6 1.67631 6H10.1396C11.0648 6 11.4939 4.8517 10.7954 4.24502Z"
                    fill="white"/>
              </svg>
            </div>
            <div class="progress__item-num">{{ intelligence }} <span>%</span></div>
          </div>
        </div>
        <div class="progress__item-bottom">
          <div class="progress__item-progress">
            <span class="progress__item-progress-line"
                  :style="{width: intelligence + '%', backgroundColor: colors(intelligence)}"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="progress__adviсe">
      <div class="progress__adviсe-wrapper">
        <img src="@/assets/images/advice.png" class="progress__adviсe-img" alt="advice">
        <div class="progress__adviсe-content">
          <svg width="68" height="61" viewBox="0 0 68 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_4642_33746)">
              <path
                  d="M34.4954 21.1868C34.4954 18.422 34.4954 15.7683 34.4954 13.2623C35.2715 12.9768 36.0105 12.8022 36.6342 12.4305C36.8894 12.2785 36.8936 11.7033 37.0129 11.3213C36.6218 11.2535 36.1463 11.0111 35.8561 11.1529C35.2365 11.4507 34.7445 11.5226 34.127 11.1549C33.8697 11.0009 33.3715 11.0173 33.0998 11.1672C32.4802 11.5103 31.9841 11.4795 31.3728 11.1323C31.1196 10.9885 30.6564 11.2104 30.29 11.2658C30.3785 11.652 30.3394 12.2374 30.5761 12.3853C31.2122 12.7838 31.9656 12.9933 32.7787 13.3199C32.7787 15.7621 32.7787 18.3871 32.7787 21.1806C31.7495 21.1806 30.7408 21.1909 29.7301 21.1703C29.5922 21.1683 29.4316 21.0389 29.3246 20.9259C28.6082 20.1639 27.9557 19.332 27.1838 18.6316C23.9273 15.6799 23.0916 10.7154 25.2571 6.89694C27.4925 2.95323 32.157 1.09639 36.4778 2.4274C40.6997 3.72965 43.5321 7.89725 43.1678 12.2641C42.931 15.1192 41.6548 17.395 39.4172 19.182C38.8717 19.6175 38.4745 20.2357 37.9887 20.7513C37.824 20.9259 37.6037 21.1559 37.3979 21.1662C36.451 21.2114 35.5 21.1868 34.4954 21.1868Z"
                  fill="white"/>
              <path
                  d="M32.7695 46.3755C30.6061 45.4204 28.5867 44.416 26.4871 43.6314C23.5311 42.5283 20.4619 42.0292 17.3084 42.6803C16.5447 42.8385 15.8263 43.2041 15.0667 43.3869C14.7126 43.4711 14.2166 43.4711 13.9572 43.276C13.7699 43.1363 13.7616 42.5817 13.8604 42.2695C15.3672 37.5165 16.8884 32.7676 18.4611 28.0352C18.5805 27.6757 19.091 27.2177 19.4451 27.1951C23.1894 26.9486 26.9132 27.0328 30.5155 28.2755C30.6452 28.3207 30.7687 28.3803 30.8942 28.4337C32.7736 29.2327 32.7716 29.2327 32.7716 31.2805C32.7695 36.3108 32.7695 41.3391 32.7695 46.3755ZM23.2635 33.429C25.6863 33.5584 28.1462 33.5543 30.0153 35.5221C30.18 35.6946 30.8119 35.6761 31.0013 35.5015C31.1927 35.327 31.2051 34.8093 31.1022 34.5095C31.0033 34.2198 30.6843 33.9754 30.4146 33.7762C27.7304 31.7961 24.6345 31.7139 21.4953 31.9193C21.2503 31.9358 20.8057 32.4698 20.8572 32.6424C20.9519 32.9546 21.3141 33.3222 21.6312 33.3982C22.1478 33.5194 22.716 33.429 23.2635 33.429ZM22.8209 36.356C22.7983 36.43 22.7757 36.5039 22.753 36.5779C22.0696 36.6128 21.3738 36.582 20.709 36.7155C20.4372 36.7709 20.042 37.19 20.0544 37.4282C20.0667 37.6911 20.4475 37.9869 20.7316 38.1656C20.9025 38.2745 21.1968 38.1841 21.4356 38.1903C24.2042 38.2519 27.0223 38.0978 29.2248 40.31C29.3977 40.4846 30.0235 40.3942 30.2973 40.2135C30.4476 40.1149 30.4414 39.4206 30.2623 39.2501C29.6509 38.6709 29.0025 37.991 28.2409 37.7404C26.4768 37.155 24.6345 36.8017 22.8209 36.356Z"
                  fill="white"/>
              <path
                  d="M34.44 46.6339C34.44 40.9731 34.4276 35.497 34.4688 30.021C34.4708 29.6842 34.8249 29.2302 35.1398 29.033C36.8937 27.9341 38.8883 27.5028 40.9036 27.3303C43.0505 27.1454 45.2181 27.1865 47.3754 27.129C48.2029 27.1064 48.6537 27.4514 48.9192 28.2936C50.354 32.8576 51.8649 37.3991 53.3079 41.961C53.4437 42.3883 53.2935 42.9079 53.2749 43.3824C52.8241 43.3496 52.3301 43.4276 51.9328 43.2695C48.6372 41.9528 45.3066 42.1808 42.0625 43.2592C39.7385 44.0315 37.54 45.1838 35.2901 46.1718C35.0472 46.2765 34.8249 46.4224 34.44 46.6339ZM45.0267 38.0646C45.0308 38.1098 45.037 38.1529 45.0411 38.1981C45.3498 38.1981 45.6586 38.1858 45.9674 38.2001C46.5314 38.2289 47.151 38.2987 47.2292 37.5285C47.3157 36.674 46.6055 36.5939 46.0435 36.6144C44.405 36.6781 42.7541 36.7253 41.1382 36.9739C39.6376 37.2039 38.2502 37.8263 37.1695 38.9745C36.7722 39.3956 36.5375 39.9317 37.0583 40.2911C37.3115 40.4657 37.9208 40.2685 38.2975 40.0898C39.2424 39.6421 40.0946 38.9314 41.0785 38.652C42.3465 38.2905 43.7051 38.2453 45.0267 38.0646ZM43.9377 33.291C43.9439 33.3403 43.9501 33.3896 43.9583 33.4389C44.4379 33.4389 44.9423 33.5313 45.389 33.4122C45.778 33.3075 46.34 33.0199 46.41 32.718C46.5623 32.0648 45.9715 31.8799 45.4239 31.8512C43.1864 31.7341 40.9509 31.8203 38.8533 32.6604C37.9291 33.0302 37.0954 33.6833 36.3173 34.3242C36.0991 34.5029 36.2205 35.0945 36.1855 35.495C36.6075 35.456 37.0851 35.5258 37.4433 35.3533C38.3222 34.9301 39.0962 34.2194 40.0081 33.9483C41.272 33.5724 42.6244 33.4944 43.9377 33.291Z"
                  fill="white"/>
              <path
                  d="M29.8289 47.0006C29.5324 47.0006 29.234 47.0006 28.9375 47.0006C22.4575 47.0006 15.9754 47.0006 9.49532 46.9986C7.95765 46.9986 7.71063 46.6432 8.28083 45.2219C10.0593 40.7811 11.8461 36.3444 13.6308 31.9056C14.2174 30.4473 14.2154 30.4452 15.9363 30.6013C15.8272 30.9608 15.7325 31.3018 15.6234 31.6386C14.5509 34.9538 13.4867 38.2711 12.3936 41.5801C12.0334 42.6687 12.0087 43.667 12.9 44.5132C13.7708 45.3389 14.7238 45.2239 15.7613 44.8131C19.5509 43.3096 23.2335 44.0428 26.8626 45.4437C27.8815 45.8381 28.8675 46.3187 29.868 46.7603C29.8536 46.8404 29.8412 46.9205 29.8289 47.0006Z"
                  fill="white"/>
              <path
                  d="M51.4254 30.631C53.0557 30.3887 53.1257 30.4256 53.6918 31.8552C55.4662 36.3289 57.2406 40.8046 59.0109 45.2803C59.5564 46.6565 59.3197 46.9975 57.8417 46.9975C51.094 46.9995 44.3464 46.9975 37.325 46.9975C37.7366 46.7387 37.924 46.5867 38.138 46.4881C41.5201 44.9229 44.9742 43.6206 48.803 44.1033C49.7046 44.2163 50.6021 44.5162 51.4501 44.8551C52.4897 45.27 53.4468 45.3522 54.3238 44.5717C55.2027 43.7911 55.2665 42.8134 54.9289 41.7535C53.8524 38.3706 52.784 34.9856 51.7136 31.6005C51.6107 31.2842 51.5222 30.9597 51.4254 30.631Z"
                  fill="white"/>
              <path
                  d="M33.6141 26.3918C32.9986 26.3939 32.3831 26.3815 31.7676 26.3959C30.654 26.4206 29.7153 26.2213 29.4724 24.8924C29.4416 24.7219 29.0505 24.6418 28.8961 24.461C28.6923 24.2228 28.4103 23.9126 28.4329 23.6558C28.4535 23.4114 28.7829 23.0889 29.0463 22.9945C29.5095 22.826 30.0262 22.7398 30.5202 22.7336C32.6384 22.7069 34.7586 22.711 36.8767 22.7315C37.272 22.7356 37.694 22.7993 38.0542 22.9534C38.3897 23.0972 38.859 23.3683 38.9002 23.6394C38.9393 23.8982 38.5029 24.2289 38.2703 24.5247C38.1201 24.7178 37.8792 24.8821 37.8195 25.0978C37.5705 26.0015 36.9426 26.361 36.0739 26.3856C35.2547 26.4082 34.4334 26.3897 33.6141 26.3918Z"
                  fill="white"/>
            </g>
            <defs>
              <filter id="filter0_d_4642_33746" x="0" y="0" width="67.2793" height="61.001" filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset dy="6"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.219608 0 0 0 0 0.462745 0 0 0 0.3 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4642_33746"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4642_33746" result="shape"/>
              </filter>
            </defs>
          </svg>
          <p>прокачай интеллект</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressLeft',
  props: {
    spirit: Number,
    body: Number,
    intelligence: Number,
  },
  computed: {
    colors() {
      return (color) => {
        if(color < 45) return '#FF4B6B'
        if(color > 45 && color < 90) return '#64C048'
        if(color > 90) return '#2ABAF3'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.progress {
  height: 283px;
  border-radius: 28px;
  padding: 18px 16px 0 16px;
  display: flex;
  justify-content: space-between;
  background-color: $blue02;
  box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15);

  &__items {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  &__item {
    width: 100%;
    height: 76px;
    padding: 12px 16px 14px 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    transition: .3s;
    cursor: pointer;

    &:not(:first-child) {
      margin-top: 8px;
    }

    &:hover {
      box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
    }
  }

  &__item-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item-title {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }

  &__item-stat {
    display: flex;
    align-items: center;
  }

  &__item-num {
    margin-left: 5.5px;
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    font-family: 'FolksBold', serif;

    span {
      margin-left: -6px;
      font-size: 18px;
      font-weight: 400;
      font-family: $Manrope, Arial, -apple-system, system-ui, 'Segoe UI', 'Helvetica Neue', sans-serif !important;
    }
  }

  &__item-bottom {
    margin-top: 10px;
  }

  &__item-progress {
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: $blue01;
    overflow: hidden;
  }

  &__item-progress-line {
    display: block;
    height: 4px;
    border-radius: 4px;
    background-color: #2ABAF3;
  }

  &__adviсe {
    margin-top: 10px;
    width: 50%;
    display: flex;
    justify-content: center;
  }

  &__adviсe-wrapper {
    width: 220px;
    position: relative;
  }

  &__adviсe-img {
    width: 100%;
  }

  &__adviсe-content {
    position: absolute;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -43%);
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      max-width: 117px;
      margin-top: -5px;
      color: #fff;
      font-size: 14px;
      line-height: 1.1;
      font-weight: 500;
      text-align: center;
    }
  }

}
</style>
