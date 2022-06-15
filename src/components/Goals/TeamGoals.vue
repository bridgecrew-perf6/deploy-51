<template>
  <div class="team-goals">
    <div class="team-goals__header">
      <h2 class="team-goals__title" v-if="!player">Цели команды</h2>
      <h2 class="team-goals__title" v-if="player">Цели игрока</h2>
      <div class="team-goals__header-content">
        <div class="team-goals__header-icon">
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.78128 9.02402C4.59545 9.42047 4.35893 9.74934 3.85323 9.67163C3.3205 9.59054 3.20337 9.19859 3.13692 8.73794C2.97811 7.64208 2.27757 6.81088 1.69303 5.93126C0.918152 4.76782 0.284057 3.55481 0.0430341 2.16048C-0.179969 0.861884 0.473272 0.0137969 1.78088 0.00929179C5.92671 -0.00309726 10.0725 -0.00309726 14.2184 0.00929179C15.5125 0.0137969 16.1961 0.910314 15.9506 2.174C15.6927 3.50075 15.1171 4.67997 14.3839 5.80174C13.7127 6.8289 12.9108 7.78511 12.7767 9.09497C12.7542 9.31347 12.3026 9.65136 12.0593 9.64235C11.7439 9.63108 11.4387 9.32699 11.12 9.1434C10.8756 9.53985 10.5444 10.0771 10.2122 10.6143C9.91824 11.0907 9.54431 11.3701 8.92936 11.3171C8.2964 11.2619 7.65104 11.2653 7.01807 11.3171C6.47408 11.3622 6.12043 11.1335 5.84787 10.7191C5.49084 10.1739 5.15296 9.61644 4.78128 9.02402ZM12.6866 1.65028C12.5053 3.19328 12.3296 4.68672 12.146 6.24549C13.1079 4.79034 14.1677 3.44894 14.3805 1.65028C13.8005 1.65028 13.2453 1.65028 12.6866 1.65028ZM3.30811 1.65366C2.74272 1.65366 2.19085 1.65366 1.6187 1.65366C1.78989 3.44444 2.88351 4.73515 3.82845 6.24437C3.646 4.63491 3.47931 3.164 3.30811 1.65366Z"
              fill="#95B0DA"
            />
            <path
              d="M8.02992 12.9207C9.02443 12.9207 10.0201 12.9161 11.0146 12.9218C11.634 12.9252 12.0237 13.2461 12.0237 13.7372C12.0237 14.1945 11.6419 14.529 11.063 14.5312C9.03569 14.5391 7.00839 14.5414 4.98222 14.5301C4.28054 14.5267 3.87283 14.146 3.97983 13.6144C4.08119 13.111 4.44949 12.9218 4.93379 12.9218C5.96433 12.9195 6.99713 12.9207 8.02992 12.9207Z"
              fill="#95B0DA"
            />
          </svg>
        </div>
        <div class="team-goals__header-num"><span>1</span> из 3</div>
      </div>
    </div>
    <div class="team-goals__block">
      <div class="team-goals__block-header">
        <div
          class="team-goals__block-header-btn"
          :class="{ 'team-goals__block-header-btn_active': activeTab === index }"
          @click="activeTab = index"
          v-for="(tab, index) in tabs"
          :key="index"
        >
          <span class="team-goals__block-header-square"></span>
          <p class="team-goals__block-header-label">{{ tab.label }}</p>

          <div class="team-goals__block-header-btn-triangle">
            <svg width="39" height="8" viewBox="0 0 39 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8L20 0L39 8H0Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      <div class="team-goals__block-content">
        <div class="team-goals__block-left">
          <div class="team-goals__block-left-img">
            <img src="@/assets/images/team-goals.svg" alt="goal" />
            <div class="team-goals__block-left-row">
              <div class="team-goals__block-left-icon">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.4063 1.80251C18.2222 2.54522 18.1148 3.15152 17.9154 3.7275C17.7773 4.10644 17.4706 4.42475 17.2251 4.75821C17.0257 5.01589 16.811 5.27356 16.6269 5.48577C11.7643 3.4092 7.96016 4.18223 5.56723 7.63813C3.41972 10.7606 3.86456 14.9592 6.6103 17.6117C9.29468 20.2037 13.513 20.5523 16.6116 18.4605C19.48 16.5204 21.4128 12.1702 18.7284 7.59265C19.1272 7.24403 19.526 6.8651 19.9555 6.50132C20.0782 6.39521 20.2777 6.27395 20.4157 6.28911C21.1673 6.3649 21.8269 6.22848 22.2564 5.51608C25.3243 9.94206 25.0175 16.8539 19.9862 21.1434C15.2463 25.1753 8.02152 24.9176 3.55777 20.5068C-0.905975 16.1111 -1.21276 9.0023 2.88284 4.27317C7.14718 -0.683315 14.1419 -1.07741 18.4063 1.80251Z"
                    fill="#464EA3"
                  />
                  <path
                    d="M16.2885 9.95668C17.4083 11.8514 16.8254 14.3372 15.046 15.7165C13.1746 17.1716 10.5209 17.0049 8.81823 15.3527C7.10022 13.6854 6.90081 11.0935 8.32737 9.21396C9.70791 7.41022 12.2542 6.78877 14.1103 7.84979C13.1439 8.80471 12.1775 9.72931 11.2418 10.6842C10.9657 10.9722 10.705 11.3208 10.6129 11.6846C10.4289 12.3819 10.6896 13.0033 11.3492 13.3519C12.0242 13.7157 12.6837 13.6399 13.2513 13.1094C14.095 12.3061 14.9233 11.4724 15.7516 10.6539C15.9357 10.4569 16.0891 10.2144 16.2885 9.95668Z"
                    fill="#464EA3"
                  />
                  <path
                    d="M21.6573 0.742354C21.6573 1.33349 21.6573 1.93979 21.6573 2.62188C22.3169 2.62188 22.9458 2.62188 23.5594 2.62188C23.5901 2.68251 23.6208 2.74314 23.6514 2.78861C22.8538 3.54648 22.0561 4.31952 21.2432 5.07739C21.1358 5.18349 20.9057 5.22896 20.7523 5.21381C19.9393 5.07739 19.4331 5.5018 18.9116 6.03231C16.9175 8.04825 14.8773 10.0339 12.8525 12.0347C12.6838 12.2014 12.5304 12.3984 12.331 12.4742C12.1623 12.5349 11.8862 12.4742 11.7481 12.353C11.6407 12.262 11.6101 11.974 11.6714 11.8376C11.7481 11.6406 11.9475 11.489 12.1162 11.3223C14.2484 9.21538 16.3959 7.12365 18.4974 4.98644C18.7735 4.69845 18.9576 4.22857 18.9883 3.81932C19.019 3.33428 19.157 2.9705 19.5098 2.63704C20.1847 1.98527 20.7983 1.30318 21.4426 0.621094C21.5039 0.651409 21.5806 0.696881 21.6573 0.742354Z"
                    fill="#464EA3"
                  />
                </svg>
              </div>
              <div class="team-goals__block-left-title">Цель сезона</div>
            </div>
            <div class="team-goals__block-left-subtitle">по ОФП</div>
            <div class="team-goals__block-left-progress">
              <span class="team-goals__block-left-progress-line" :style="{ width: 70 + '%' }"></span>
              <div class="team-goals__block-left-progress-num">1750 / 2500</div>
            </div>
          </div>
        </div>
        <div class="team-goals__block-content-wrapper">
          <drop-down v-for="goal in filter" :key="goal.id" :goal="goal" class="team-goals__block-dropdown" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from './TeamGoals/DropDown'

export default {
  name: 'TeamGoals',
  components: {
    DropDown,
  },
  props: {
    goals: Array,
    dashboard: {
      type: Boolean,
      default: false,
    },
    player: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tabs: [
        {
          id: 'physical',
          label: 'ОФП',
        },
        {
          id: 'theoretic',
          label: 'Теория',
        },
        {
          id: 'tactical',
          label: 'Тактика',
        },
        {
          id: 'technical',
          label: 'Техника',
        },
        {
          id: 'game',
          label: 'Игра',
        },
        {
          id: 'psychological',
          label: 'Психология',
        },
      ],
      activeTab: 0,
    }
  },
  computed: {
    filter() {
      return this.goals.filter(item => item.goal.trainingType[0] === this.tabs[this.activeTab].id)
    },
  },
}
</script>

<style scoped lang="scss">
.team-goals {
  &__header {
    margin-left: 20px;
    margin-top: 40px;
    display: flex;
    align-items: center;
  }

  &__title {
    color: $blue02;
    font-size: 20px;
    font-weight: 400;
  }

  &__header-content {
    margin-top: 8px;
    margin-left: 16px;
    display: flex;
    align-items: center;
  }

  &__header-num {
    margin-left: 9px;
    display: flex;
    align-items: center;
    color: $blue05;
    font-size: 16px;
    font-weight: 400;

    span {
      margin-right: 3px;
      font-weight: 700;
    }
  }

  &__block {
    margin-top: 12px;
    width: 100%;
    border-radius: 28px;
    background-color: $blue02;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    overflow: hidden;
  }

  &__block-header {
    padding-top: 10px;
    padding-right: 7px;
    display: flex;
  }

  &__block-header-btn {
    position: relative;
    width: 16.6%;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;

    &:not(:last-child) {
      border-right: 1px solid #525bba;
    }
  }

  &__block-header-square {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: $blue05;
  }

  &__block-header-label {
    margin-left: 6px;
    color: $blue06;
  }

  &__block-header-btn_active &__block-header-square {
    background-color: #fff;
  }

  &__block-header-btn_active &__block-header-label {
    color: #fff;
  }

  &__block-content {
    padding: 20px 21px 20px 24px;
    margin-top: 7px;
    border-radius: 28px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
  }

  &__block-header-btn-triangle {
    opacity: 0;
    position: absolute;
    left: 50%;
    bottom: -14px;
    transform: translate(-50%);
    transition: 0.3s;
  }

  &__block-header-btn_active &__block-header-btn-triangle {
    opacity: 1;
  }

  &__block-left {
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
  }

  &__block-left-row {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__block-left-title {
    margin-left: 7px;
    margin-bottom: 3px;
    color: $blue02;
    font-size: 16px;
  }

  &__block-left-subtitle {
    color: $blue02;
    text-align: center;
    font-size: 16px;
  }

  &__block-left-progress {
    position: relative;
    margin-top: 14px;
    width: 100%;
    height: 20px;
    border-radius: 50px;
    background-color: $blue06;
    border: 2px solid $blue05;
    overflow: hidden;
  }

  &__block-left-progress-line {
    display: block;
    height: 100%;
    border-radius: 50px;
    background-color: $blue03;
    transition: 0.3s;
  }

  &__block-left-progress-num {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    z-index: 2;
  }

  &__block-content-wrapper {
    width: calc(100% - 203px);
  }

  &__block-dropdown {
    &:not(:first-child) {
      margin-top: 25px;
    }

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
