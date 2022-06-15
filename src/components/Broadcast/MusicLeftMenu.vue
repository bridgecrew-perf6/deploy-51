<template>
  <div class="music">
    <header-left-menu title="Музыка">
      <template #icon>
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M4.01133 12.1446C4.01133 11.9311 4.01133 11.7411 4.01133 11.551C4.01133 8.45495 4.01026 5.35886 4.01239 2.26277C4.01345 0.797545 4.80658 0.00228777 6.27393 0.00122601C9.65245 -0.000897504 13.032 0.000164255 16.4105 0.00122601C16.5836 0.00122601 16.7567 0.0150289 16.968 0.0245847C16.9786 0.225257 16.9945 0.397262 16.9945 0.568205C16.9956 5.32701 16.9988 10.0858 16.9935 14.8446C16.9913 16.5466 15.989 17.7591 14.3614 17.9704C13.1488 18.1276 12.1603 17.6508 11.4999 16.6305C10.813 15.5698 10.8119 14.4433 11.4978 13.3815C12.1571 12.359 13.1393 11.9173 14.3592 12.032C14.5344 12.049 14.7085 12.084 14.8827 12.1095C14.8975 12.1116 14.9145 12.1021 14.9687 12.0883C14.9687 10.0932 14.9687 8.08758 14.9687 6.05006C12.0032 6.05006 9.05468 6.05006 6.01699 6.05006C6.01699 6.24224 6.01699 6.44504 6.01699 6.64783C6.01699 9.39036 6.02336 12.1318 6.0138 14.8743C6.00849 16.5232 4.9839 17.7496 3.3902 17.9683C2.17661 18.1339 1.20403 17.6572 0.513892 16.6549C-0.170943 15.6622 -0.170943 14.353 0.511768 13.3581C1.20085 12.3548 2.16811 11.9067 3.38807 12.0384C3.57919 12.0586 3.76924 12.1021 4.01133 12.1446Z"
              fill="#464EA3"/>
        </svg>
      </template>
    </header-left-menu>

    <div class="music__wrapper">
      <div class="music__music-wrapper"
           v-for="(item, index) in music"
           :key="index">
        <div class="music__music" v-show="musicActive !== index">
          <div class="music__music-content">
            <div class="music__music-name">{{ item.name }}</div>
            <p class="music__time">{{ item.time1 }} - {{ item.time2 }}</p>
          </div>
          <button class="music__music-edit-btn" @click="edit(index)">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M0 15.8969C0.0114286 15.8696 0.0261225 15.8422 0.0342858 15.8131C0.488165 14.2285 0.940412 12.6422 1.39429 11.0576C1.40898 11.008 1.43837 10.9585 1.47266 10.9243C4.07348 8.31573 6.67431 5.70719 9.2784 3.10035C9.46779 2.91061 9.71269 2.84565 9.96575 2.82172C10.5388 2.76873 11.0596 2.94822 11.5396 3.2542C12.2221 3.68839 12.7478 4.27642 13.0498 5.05932C13.2213 5.50377 13.2637 5.95847 13.0939 6.41659C13.0335 6.58069 12.947 6.72257 12.8229 6.84564C10.2351 9.41829 7.64901 11.9961 5.06124 14.5704C5.02532 14.6046 4.97471 14.6302 4.92737 14.6439C3.33716 15.0849 1.74695 15.5243 0.155103 15.9653C0.124082 15.9738 0.0946942 15.9875 0.0653064 15.9995C0.0440818 15.9995 0.0212246 15.9995 0 15.9995C0 15.9653 0 15.9311 0 15.8969ZM2.43103 14.4354C2.44409 14.432 2.46042 14.4302 2.47674 14.4251C3.07266 14.2422 3.67022 14.0593 4.26614 13.873C4.30042 13.8627 4.33308 13.8354 4.35593 13.8063C4.53389 13.5841 4.56491 13.3243 4.51267 13.0508C4.369 12.3003 3.67675 11.6114 2.95022 11.4901C2.68899 11.4473 2.43919 11.4696 2.22205 11.6456C2.1796 11.6798 2.14368 11.7328 2.12572 11.7858C1.98695 12.2217 1.85144 12.661 1.71592 13.0986C1.66694 13.2576 1.61797 13.4166 1.57225 13.567C2.01633 13.6918 2.24817 14.0302 2.43103 14.4354Z"
                  fill="#D8D4EE"/>
              <path
                  d="M15.9992 2.68205C15.9698 2.84274 15.9519 3.00684 15.911 3.16581C15.7837 3.66154 15.5388 4.08547 15.1878 4.44103C14.809 4.82564 14.427 5.20684 14.0465 5.58975C14.0367 5.6 14.027 5.60684 14.0123 5.6188C14.0498 5.49573 14.0955 5.37949 14.12 5.25983C14.2163 4.8 14.1282 4.36752 13.9306 3.95385C13.7755 3.63077 13.5649 3.34701 13.3249 3.0906C13.0016 2.7453 12.6604 2.42564 12.2425 2.21026C11.6514 1.90427 11.0408 1.81197 10.4008 2.02564C10.3943 2.02735 10.3861 2.02735 10.3682 2.02735C10.5559 1.83932 10.7355 1.65812 10.9167 1.47692C11.142 1.24957 11.3641 1.0188 11.5943 0.798291C12.0792 0.331624 12.649 0.0666667 13.3086 0.0136752C13.3298 0.0119658 13.351 0.00512821 13.3723 0C13.4653 0 13.5567 0 13.6498 0C13.671 0.00512821 13.6906 0.0102564 13.7118 0.0153846C13.8751 0.0461539 14.0416 0.0581197 14.1984 0.107692C15.049 0.381197 15.6417 0.940171 15.911 1.84274C15.9568 1.99316 15.9714 2.15214 15.9992 2.30769C15.9992 2.43077 15.9992 2.55727 15.9992 2.68205Z"
                  fill="#D8D4EE"/>
            </svg>
          </button>
        </div>

        <div v-show="musicActive === index">
          <div class="music__music">
            <div class="music__music-content">
              <div class="music__music-name">{{ item.name }}</div>
              <p class="music__time">{{ item.duration }}</p>
            </div>
            <button class="music__music-edit-btn">
              <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.2227 3.95312C8.00863 3.95312 9.79455 3.95312 11.5805 3.95312C12.3507 3.95312 12.5069 4.13172 12.4065 4.87957C11.9823 8.07191 11.5582 11.2531 11.134 14.4454C11.0112 15.383 10.3973 15.9746 9.45969 15.9858C7.30542 15.997 5.13998 16.0081 2.98571 15.9858C2.03693 15.9746 1.43418 15.4054 1.3114 14.4566C0.876082 11.2196 0.451925 7.99378 0.0166052 4.76795C-0.0615291 4.17637 0.128226 3.95312 0.7533 3.95312C2.58387 3.95312 4.40329 3.95312 6.2227 3.95312Z"
                    fill="#D8D4EE"/>
                <path
                    d="M10.8443 2.3471C7.60727 2.3471 4.52654 2.3471 1.28955 2.3471C2.41692 1.50995 3.41034 0.739766 4.44841 0.0477192C4.61584 -0.0639012 5.02883 0.0365571 5.25208 0.181664C5.75437 0.483039 6.20085 0.884872 6.70314 1.21973C6.85941 1.32019 7.16079 1.38716 7.29473 1.30903C8.3328 0.672794 9.22576 0.884872 10.0406 1.72203C10.2303 1.92294 10.4982 2.07921 10.8443 2.3471Z"
                    fill="#D8D4EE"/>
              </svg>
            </button>
          </div>
          <div class="music__form">
            <div class="music__form-title">Выберите промежуток</div>
            <div class="music__form-wrapper">
              <input type="text"
                     class="music__form-inp"
                     v-model="item.time1"
                     v-mask="'##:##:##'">
              <span class="music__form-line"></span>
              <input type="text"
                     class="music__form-inp"
                     v-model="item.time2"
                     v-mask="'##:##:##'">

              <div class="music__form-save" @click="musicActive = null">
                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M17.6383 0.191343C17.2404 -0.0999728 16.6237 -0.0485642 16.2656 0.277024L6.21867 8.9308L1.74233 5.05802C1.36432 4.73244 0.767477 4.68103 0.369579 4.97234C-0.0880024 5.29793 -0.127792 5.8977 0.29 6.25756L5.48256 10.7301C5.90035 11.09 6.59667 11.09 7.01446 10.7301L17.7179 1.47656C18.1158 1.1167 18.0959 0.534067 17.6383 0.191343Z"
                      fill="#464EA3"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="music__file">
            <p class="music__form-file-title">+ Добавить аудио</p>
            <input type="file" class="music__file-inp">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLeftMenu from '@/components/Broadcast/HeaderLeftMenu.vue'

export default {
  name: 'MusicLeftMenu',
  components: {
    HeaderLeftMenu
  },
  data() {
    return {
      musicActive: null,
      music: [
        {
          name: 'Winter mood.mp3',
          time1: '00:20:25',
          time2: '00:24:36',
          duration: '3:36'
        },
        {
          name: 'Winter mood2.mp3',
          time1: '00:20:25',
          time2: '00:24:36',
          duration: '2:46'
        },
        {
          name: 'Winter mood3.mp3',
          time1: '00:20:25',
          time2: '00:24:36',
          duration: '10:23'
        },
      ]
    }
  },
  methods: {
    edit(index) {
      this.musicActive = index
    }
  }
}
</script>

<style scoped lang="scss">
.music {
  &__wrapper {
    margin-top: 16px;
  }

  &__music-wrapper {
    padding-top: 16px;
    border-top: 1px solid #DEDBF5;

    &:not(:first-child) {
      margin-top: 17px;
    }
  }

  &__music {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__music-name {
    color: $blue02;
    font-size: 16px;
  }

  &__time {
    color: $blue02;
    font-size: 12px;
  }

  &__form {
    margin-top: 14px;
  }

  &__form-title {
    color: $blue02;
    font-size: 12px;
  }

  &__form-wrapper {
    margin-top: 5px;
    display: flex;
    align-items: center;
  }

  &__form-inp {
    width: 96px;
    padding: 0 10px;
    border-radius: 4px;
    color: $blue02;
    font-size: 16px;
    border: 1px solid #DEDBF5;
  }

  &__form-line {
    width: 24px;
    height: 1px;
    margin: 0 8px;
    background-color: #DEDBF5;
  }

  &__form-save {
    margin-left: 58px;
    cursor: pointer;
  }

  &__file {
    position: relative;
    margin-top: 22px;
    width: 100%;
    height: 80px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed #DEDBF5;
  }

  &__form-file-title {
    color: #ACA3DD;
    font-size: 17px;
    font-weight: 500;
  }

  &__file-inp {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
}
</style>
