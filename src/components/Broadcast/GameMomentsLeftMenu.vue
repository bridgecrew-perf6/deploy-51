<template>
  <div class="game-moments">
    <header-left-menu title="Игровые моменты">
      <template #icon>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M7.40673 7.83173C7.40673 7.93238 7.40673 7.9963 7.40673 8.06056C7.40673 10.9124 7.40706 13.7642 7.40542 16.6161C7.40542 16.7298 7.40509 16.8482 7.37657 16.9567C7.29429 17.2684 7.00677 17.4511 6.67533 17.4173C6.36619 17.3858 6.12818 17.1347 6.10785 16.8167C6.10359 16.7515 6.10359 16.6856 6.10359 16.62C6.10326 11.3481 6.10326 6.07585 6.10425 0.803945C6.10425 0.695432 6.10261 0.582657 6.12883 0.479061C6.20653 0.171552 6.50847 -0.0287546 6.82417 0.00337313C7.13332 0.0348452 7.37985 0.283344 7.39821 0.599704C7.41099 0.817386 7.39952 1.03671 7.40936 1.25472C7.41198 1.30979 7.44116 1.39306 7.48246 1.41273C7.88537 1.6055 8.28107 1.82482 8.70299 1.96415C9.49897 2.22707 10.3087 2.20052 11.0654 1.83203C12.0089 1.37241 12.9662 1.3134 13.9657 1.57599C14.266 1.655 14.5752 1.70057 14.8801 1.76188C15.2902 1.84449 15.5108 2.09824 15.5118 2.5159C15.5151 4.1495 15.5164 5.78277 15.5115 7.41637C15.5098 7.96024 15.12 8.25759 14.5778 8.15071C14.1228 8.06122 13.6687 7.96254 13.2107 7.89074C12.58 7.79206 11.9695 7.88943 11.3876 8.15006C10.9274 8.35627 10.4622 8.53035 9.94942 8.56247C9.30555 8.60313 8.70201 8.47101 8.12699 8.18973C7.89783 8.07826 7.66966 7.96287 7.40673 7.83173Z"
              fill="#464EA3"/>
          <path
              d="M5.28598 14.9278C5.28598 15.5107 5.27909 16.0835 5.28959 16.6559C5.29319 16.8552 5.31516 17.0614 5.3722 17.2515C5.56693 17.9013 6.23899 18.3082 6.95138 18.2272C7.60869 18.1524 8.18011 17.5774 8.20928 16.9172C8.23551 16.3228 8.22076 15.7265 8.22403 15.1311C8.22436 15.0665 8.22403 15.0016 8.22403 14.9121C8.38959 14.9272 8.53941 14.9367 8.68825 14.9551C9.92878 15.1088 11.1464 15.3498 12.2685 15.9346C12.6337 16.1251 12.9704 16.3569 13.2307 16.6844C13.6215 17.1758 13.5959 17.7653 13.1717 18.2314C12.8104 18.6285 12.3577 18.8874 11.8751 19.0996C10.9936 19.4867 10.0638 19.6969 9.11509 19.8329C8.1447 19.9719 7.16873 20.025 6.18982 19.988C4.76538 19.9339 3.36028 19.7533 2.01419 19.253C1.41753 19.0314 0.845784 18.7606 0.396323 18.2895C-0.14526 17.722 -0.13018 17.0614 0.431729 16.5126C0.854636 16.0995 1.36966 15.8399 1.91158 15.6288C2.85902 15.2593 3.84875 15.0682 4.8552 14.9531C4.97454 14.9393 5.0942 14.9288 5.21386 14.9183C5.22959 14.9164 5.24598 14.9219 5.28598 14.9278Z"
              fill="#464EA3"/>
        </svg>
      </template>
    </header-left-menu>

    <div class="game-moments__moments">
      <div class="game-moments__moment"
           :class="{'game-moments__moment_active': selectedMoment === index}"
           v-for="(gameMoment, index) in gameMoments"
           :key="index">
        <div class="game-moments__moment-left" @click="selectedMomentMtd(index)">
          <div class="game-moments__moment-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7.4721e-05 3.87376C7.4721e-05 3.00392 7.4721e-05 2.13407 7.4721e-05 1.26422C7.4721e-05 0.493895 0.49397 0.00368579 1.26799 0.00368579C3.01136 0 4.75105 0.00368579 6.49075 0C6.87407 0 7.19104 0.125317 7.46379 0.398065C10.1728 3.10712 12.8819 5.81617 15.5873 8.52522C16.1364 9.07441 16.1328 9.76365 15.5873 10.3128C13.8291 12.0746 12.0673 13.8328 10.3092 15.5909C9.76741 16.1327 9.07448 16.1327 8.53636 15.5946C5.81993 12.8855 3.10719 10.1691 0.394454 7.45635C0.129077 7.19097 -0.00361107 6.88136 7.4721e-05 6.50173C0.00376051 5.6282 7.4721e-05 4.75098 7.4721e-05 3.87376ZM5.88628 4.11702C5.88628 3.14398 5.09015 2.35522 4.1171 2.35522C3.14405 2.35522 2.35529 3.15135 2.35529 4.1244C2.35529 5.09376 3.15142 5.8862 4.12447 5.8862C5.09752 5.8862 5.88996 5.09007 5.88628 4.11702Z"
                  fill="#464EA3"/>
            </svg>
          </div>
          <div class="game-moments__moment-content">
            <div class="game-moments__moment-title">{{ gameMoment.title }}</div>
            <p class="game-moments__moment-subtitle">{{ gameMoment.time1 }} - {{ gameMoment.time2 }}</p>
          </div>
        </div>
        <button class="game-moments__moment-arrow" v-if="selectedMoment === index">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" transform="rotate(90 14 14)" fill="#C1B9E5"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.6159 9.03919C16.1225 8.54162 16.9438 8.54162 17.4504 9.03919L21.731 13.2436C21.9901 13.4981 22.1167 13.8334 22.1108 14.167C22.1162 14.4999 21.9896 14.8345 21.731 15.0885L17.4504 19.2928C16.9438 19.7904 16.1224 19.7904 15.6158 19.2928C15.1092 18.7952 15.1092 17.9885 15.6158 17.491L19.0011 14.166L15.6159 10.8411C15.1093 10.3435 15.1093 9.53677 15.6159 9.03919Z"
                  fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.28271 9.03919C8.7893 8.54162 9.61065 8.54162 10.1172 9.03919L14.3978 13.2436C14.6569 13.4981 14.7835 13.8334 14.7776 14.167C14.783 14.4999 14.6564 14.8345 14.3978 15.0885L10.1172 19.2928C9.61058 19.7904 8.78922 19.7904 8.28263 19.2928C7.77603 18.7952 7.77603 17.9885 8.28263 17.491L11.6679 14.166L8.28271 10.8411C7.77612 10.3435 7.77612 9.53677 8.28271 9.03919Z"
                  fill="white"/>
          </svg>
        </button>
        <div class="game-moments__moment-edit" v-if="selectedMoment !== index">
          <img src="@/assets/images/svg/edit.svg" alt="edit">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLeftMenu from '@/components/Broadcast/HeaderLeftMenu.vue'

export default {
  name: 'GameMomentsLeftMenu',
  components: {
    HeaderLeftMenu
  },
  data() {
    return {
      selectedMoment: null,
      gameMoments: [
        {
          title: 'Бросок из угла',
          time1: '00:17:04',
          time2: '00:17:54'
        },
        {
          title: 'Бросок из угла',
          time1: '00:17:04',
          time2: '00:17:54'
        },
        {
          title: 'Бросок из угла',
          time1: '00:17:04',
          time2: '00:17:54'
        },
        {
          title: 'Бросок из угла',
          time1: '00:17:04',
          time2: '00:17:54'
        },
      ]
    }
  },
  methods: {
    selectedMomentMtd(index) {
      if(this.selectedMoment === index) {
        this.selectedMoment = null
        return
      }
      this.selectedMoment = index
    }
  }
}
</script>

<style scoped lang="scss">
.game-moments {
  &__moments {
    margin-top: 19px;
    padding-top: 17px;
    border-top: 1px solid #DEDBF5;
  }

  &__moment {
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;

    &:not(:first-child) {
      margin-top: 12px;
    }

    &_active {
      align-items: center;
    }
  }

  &__moment-left {
    width: 80%;
    display: flex;
  }

  &__moment-content {
    margin-top: -2px;
    margin-left: 14px;
  }

  &__moment-title {
    color: $blue02;
    font-size: 16px;
    font-weight: 400;
  }

  &__moment-subtitle {
    font-size: 12px;
    color: $blue02;
  }

  &__moment-edit {
    display: none;
    cursor: pointer;
  }

  &__moment-arrow {
    width: 28px;
    height: 28px;
  }

  &__moment:hover &__moment-edit {
    display: block;
  }
}
</style>
