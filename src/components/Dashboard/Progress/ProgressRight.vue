<template>
  <div class="progress">
    <div class="progress__card progress__card_1"
         :style="`background: linear-gradient(180deg, rgba(70, 78, 163, 0.3) 0%, ${colors(achievementGoals.progress).grad} 100%);`">
      <div class="progress__title">Достижение целей</div>
      <div class="progress__progress">
        <vue-ellipse-progress :progress="achievementGoals.progress"
                              class="progress__progress-ellipse"
                              :size="110"
                              :thickness="8"
                              :empty-thickness="1"
                              :color="colors(achievementGoals.progress).color"
                              empty-color="#525BBA"
                              :legend="false"/>
        <div class="progress__progress-content">
          <div class="progress__progress-num">{{ achievementGoals.progress }} <span>%</span></div>
          <div class="progress__progress-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M22.3165 5.92486C24.9669 10.1502 24.774 16.9451 19.6662 21.2418C14.9012 25.253 7.62885 24.8462 3.33542 20.2997C-1.07945 15.6318 -1.11517 8.40869 3.2497 3.79791C7.73601 -0.941349 14.2869 -0.748638 18.0374 1.67095C17.5587 2.14916 17.0801 2.62737 16.6015 3.10558C15.1298 2.37756 13.5725 1.99214 11.9223 1.99927C6.82874 2.02069 2.48531 6.01765 2.04954 11.0924C1.59233 16.424 5.33569 21.1704 10.5935 21.9056C15.9085 22.655 20.8235 19.1363 21.8379 13.8331C22.2451 11.7062 21.9736 9.63633 21.0235 7.68067C20.9092 7.44514 20.9378 7.30953 21.1235 7.13823C21.5164 6.75281 21.9022 6.34597 22.3165 5.92486Z"
                  fill="white"/>
              <path
                  d="M15.5085 5.97482C15.037 6.43876 14.5941 6.88842 14.1297 7.31666C14.0583 7.3809 13.8654 7.36662 13.7511 7.3238C10.8364 6.28173 7.7646 7.94476 7.12166 10.9782C6.70732 12.9267 7.31454 14.5968 8.84332 15.8602C10.415 17.1592 12.2223 17.3804 14.0726 16.5382C15.88 15.7174 16.8515 14.2471 16.9873 12.2558C17.0373 11.5563 16.923 10.8854 16.6801 10.2216C16.6444 10.1145 16.6515 9.92182 16.7158 9.85045C17.1301 9.39365 17.573 8.96541 18.016 8.51575C19.3876 10.5142 19.559 14.3042 17.0158 16.888C14.3941 19.5502 10.1363 19.7215 7.40741 17.2877C4.57132 14.761 4.1927 10.5571 6.54301 7.63071C8.89332 4.70436 12.8367 4.34035 15.5085 5.97482Z"
                  fill="white"/>
              <path
                  d="M21.2094 0.394099C21.2094 1.17922 21.2094 1.9572 21.2094 2.79228C22.0309 2.79228 22.831 2.79228 23.7454 2.79228C23.5883 2.96358 23.5168 3.04209 23.4382 3.1206C22.2809 4.284 21.1236 5.4474 19.9449 6.59653C19.8092 6.725 19.5663 6.84634 19.3948 6.82493C18.4161 6.68932 17.7018 7.03191 17.0445 7.78134C16.0873 8.86624 15.0085 9.8512 13.9798 10.8719C13.8512 11.0003 13.787 11.1074 13.8655 11.3001C14.2013 12.1138 13.9513 12.9988 13.2512 13.5627C12.6011 14.0837 11.6367 14.1408 10.9437 13.6911C10.065 13.1273 9.75785 12.0638 10.2008 11.1359C10.6437 10.2009 11.6867 9.77269 12.6939 10.1296C12.8797 10.1938 12.9868 10.1724 13.1226 10.0296C14.4013 8.73776 15.6943 7.45302 16.9731 6.16115C17.0731 6.05409 17.1017 5.87565 17.1588 5.72576C17.166 5.71863 17.1588 5.70435 17.1588 5.69008C16.9659 4.66229 17.3803 3.92713 18.159 3.26335C19.0519 2.49964 19.8378 1.6146 20.6664 0.772383C20.8165 0.622497 20.9236 0.436923 21.0522 0.265625C21.1094 0.315587 21.1594 0.358412 21.2094 0.394099Z"
                  fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="progress__goal">
        <div class="progress__goal-title">Цель сезона</div>
        <div class="progress__goal-num">
          {{ achievementGoals.num1 }} <span> /{{ achievementGoals.num2 }}</span>
        </div>
      </div>
    </div>
    <div class="progress__card progress__card_2"
         :style="`background: linear-gradient(180deg, rgba(70, 78, 163, 0.3) 0%, ${colors(developmentPlayers.progress).grad} 100%);`">
      <div class="progress__title">Развитие игроков</div>
      <div class="progress__progress">
        <vue-ellipse-progress :progress="developmentPlayers.progress"
                              class="progress__progress-ellipse"
                              :size="110"
                              :thickness="8"
                              :empty-thickness="1"
                              :color="colors(developmentPlayers.progress).color"
                              empty-color="#525BBA"
                              :legend="false"/>
        <div class="progress__progress-content">
          <div class="progress__progress-num">{{ developmentPlayers.progress }} <span>%</span></div>
          <div class="progress__progress-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M13.0177 17.0284C13.2353 17.3305 13.4195 17.6663 13.6706 17.9348C13.9217 18.2034 14.29 18.3545 14.4909 18.6398C15.261 19.7309 16.3157 19.2105 17.2699 19.177C17.4206 19.177 17.5713 18.942 17.6885 18.8077C18.04 18.3713 18.3414 17.9013 18.7264 17.4816C19.1784 16.978 19.3793 16.508 19.2454 15.7695C19.011 14.4602 20.1494 13.2516 21.4887 13.1845C22.8112 13.1174 23.9831 14.242 23.9998 15.5681C24.0166 16.9277 22.7945 18.1363 21.4552 17.9684C20.819 17.8845 20.5344 18.1027 20.2498 18.5391C20.0322 18.858 19.7811 19.177 19.53 19.4623C19.0947 19.9659 18.8603 20.3855 19.1114 21.1577C19.53 22.4502 18.4753 23.793 17.0858 23.9776C15.713 24.1623 14.4407 23.1384 14.4407 21.7284C14.4407 21.0737 14.2063 20.7045 13.7208 20.3687C13.4362 20.1841 13.1851 19.9659 12.934 19.7477C12.3815 19.2441 11.8626 18.9084 11.0088 19.1434C10.5735 19.2609 9.90387 19.0762 9.53556 18.7909C8.99985 18.3713 8.56458 18.4048 8.01213 18.6063C7.5099 18.7741 7.00766 18.9252 6.48869 19.0595C5.58468 19.2945 4.79785 19.5295 4.31236 20.5702C3.7599 21.7452 2.0858 21.9466 1.01437 21.1912C-0.0570583 20.4359 -0.324915 18.9084 0.428432 17.8509C1.21526 16.743 2.7387 16.4745 3.81012 17.3305C4.22865 17.6663 4.56347 17.683 5.01548 17.532C5.61816 17.3305 6.23758 17.1627 6.857 17.0116C7.67731 16.7934 8.39717 16.6088 8.76547 15.6016C9.13378 14.5777 10.3894 14.2084 11.4775 14.5273C12.5322 14.7959 13.1851 15.7359 13.0177 17.0284Z"
                  fill="white"/>
              <path
                  d="M16.852 10.7681C15.6968 10.7849 14.7593 9.99598 14.4413 8.83777C14.3408 8.50206 14.0395 8.14956 13.7381 7.94814C13.3196 7.646 12.7839 7.47814 12.3319 7.22636C11.679 6.85707 11.093 6.5885 10.2727 7.02493C9.83747 7.25993 9.10086 7.10886 8.59863 6.90743C8.12988 6.72279 7.79506 6.72279 7.37653 6.95779C6.97475 7.19279 6.53948 7.411 6.10421 7.59564C5.36761 7.93135 4.78167 8.25028 4.58078 9.22384C4.31292 10.4995 2.78949 11.087 1.53391 10.617C0.31181 10.1638 -0.32435 8.66992 0.194623 7.44457C0.696854 6.23601 2.13658 5.59815 3.3252 6.18565C3.89439 6.471 4.29618 6.40386 4.78167 6.11851C5.13323 5.90029 5.51828 5.73244 5.90332 5.56458C6.62319 5.21208 7.25935 4.90994 7.42676 3.91959C7.59417 2.89567 8.73256 2.34174 9.83747 2.40889C10.8754 2.47603 11.7962 3.24817 11.9468 4.33923C12.0305 4.87637 12.2649 5.11137 12.7002 5.29601C13.1187 5.46387 13.5205 5.64851 13.9055 5.88351C14.6422 6.31993 15.3453 6.23601 16.1991 6.18565C17.8899 6.06815 18.3754 4.77566 19.2292 3.80209C19.3631 3.65102 19.3464 3.28174 19.2962 3.04674C18.9781 1.53604 19.8151 0.226758 21.2716 0.0253306C22.6444 -0.176097 23.8832 0.847825 23.9837 2.24103C24.0841 3.65102 22.9792 4.75887 21.506 4.82601C21.1544 4.8428 20.7861 5.09458 20.4848 5.3128C20.2002 5.53101 20.0328 5.86672 19.7984 6.15208C19.2962 6.73957 18.9111 7.25993 19.1455 8.19992C19.4636 9.49241 18.2247 10.7513 16.852 10.7681Z"
                  fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="progress__goal">
        <div class="progress__goal-title">Цель сезона</div>
        <div class="progress__goal-num">
          {{ developmentPlayers.num1 }} <span> /{{ developmentPlayers.num2 }}</span>
        </div>
      </div>
    </div>
    <div class="progress__card progress__card_3"
         :style="`background: linear-gradient(180deg, rgba(70, 78, 163, 0.3) 0%, ${colors(conditionPlayers.progress).grad} 100%);`">
      <div class="progress__title">Состояние игроков</div>
      <div class="progress__progress">
        <vue-ellipse-progress :progress="conditionPlayers.progress"
                              class="progress__progress-ellipse"
                              :size="110"
                              :thickness="8"
                              :empty-thickness="1"
                              :color="colors(conditionPlayers.progress).color"
                              empty-color="#525BBA"
                              :legend="false"/>
        <div class="progress__progress-content">
          <div class="progress__progress-num">{{ conditionPlayers.progress }} <span>%</span></div>
          <div class="progress__progress-icon">
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M0.773587 10.0951C1.82205 9.90288 2.64335 10.0427 3.39475 10.8465C5.03735 12.6114 5.36936 12.524 6.4353 10.3922C6.85469 9.55339 7.29155 8.69714 7.81578 7.66615C8.44486 9.53592 9.00404 11.196 9.56322 12.8735C9.72049 13.3453 9.80787 13.8521 10.07 14.2715C10.2797 14.6035 10.6816 14.9879 11.0136 15.0054C11.3456 15.0054 11.8174 14.6384 11.9747 14.3064C12.4815 13.258 12.8834 12.1571 13.2853 11.0737C13.5474 10.3397 14.0017 9.99025 14.7881 10.0427C15.557 10.0776 16.2559 9.99025 16.9374 10.6718C17.6714 11.4057 18.912 11.161 19.5761 10.3397C20.2401 9.53592 20.1877 8.36513 19.4538 7.6312C18.7024 6.89728 17.6015 6.89728 16.7452 7.54383C16.3957 7.80595 15.889 8.06806 15.4696 8.03312C13.3552 7.87585 11.8873 8.60977 11.2757 10.7242C11.2582 10.7941 11.1709 10.8465 11.0486 10.9688C10.367 8.99421 9.72049 7.0895 9.09141 5.16731C8.91667 4.60813 8.70698 3.99652 8.04295 4.10137C7.62356 4.17127 7.16923 4.60813 6.94206 5.01004C6.17319 6.40799 5.49168 7.8409 4.70533 9.39612C3.4996 7.771 1.7871 8.06806 0.196931 8.03312C-0.502046 5.34205 0.703689 2.45877 3.11516 0.990923C5.99844 -0.75652 8.51476 -0.232287 11.9922 2.87816C12.5164 2.38888 13.0232 1.86464 13.5823 1.42778C15.8715 -0.319659 18.6325 -0.424506 21.009 1.07829C23.3855 2.59857 24.4514 5.30711 23.8224 8.33018C23.2632 11.0387 21.8827 13.3453 20.0129 15.285C17.9335 17.4693 15.6443 19.4614 13.4076 21.4884C12.5339 22.2748 11.6252 22.3097 10.769 21.6457C7.29155 18.9197 4.00636 16.0189 1.71721 12.1746C1.40267 11.6503 1.15802 11.0911 0.878434 10.5494C0.82601 10.4096 0.808536 10.2698 0.773587 10.0951Z"
                  fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="progress__goal">
        <div class="progress__goal-title">Цель сезона</div>
        <div class="progress__goal-num">
          {{ conditionPlayers.num1 }} <span> /{{ conditionPlayers.num2 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressRight',
  data() {
    return {
      achievementGoals: {
        progress: 70,
        num1: 2075,
        num2: 2500,
      },
      developmentPlayers: {
        progress: 83,
        num1: 2075,
        num2: 2500,
      },
      conditionPlayers: {
        progress: 63,
        num1: 1575,
        num2: 2500,
      },
    }
  },
  computed: {
    colors() {
      return (color) => {
        if (color > 0 && color < 70) return {color: '#FFA217', grad: 'rgba(255, 162, 23, 0.3)'}
        if (color >= 70 && color < 80) return {color: '#64C048', grad: 'rgba(100, 192, 72, 0.3)'}
        if (color >= 80) return {color: '#2ABAF3', grad: 'rgba(42, 186, 243, 0.3)'}
      }
    }
  }
}
</script>

<style scoped lang="scss">
.progress {
  height: 283px;
  border-radius: 28px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: $blue02;
  box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15);

  &__card {
    width: 31%;
    height: 100%;
    padding: 15px 21px 20px 21px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.51);

    &_1 {
      //background: linear-gradient(180deg, rgba(70, 78, 163, 0.3) 0%, rgba(100, 192, 72, 0.3) 100%);
    }

    &_2 {
      background: linear-gradient(180deg, rgba(70, 78, 163, 0.3) 0%, rgba(42, 186, 243, 0.3) 100%);
    }

    &_3 {
      background: linear-gradient(180deg, rgba(70, 78, 163, 0.3) 0%, rgba(255, 162, 23, 0.3) 100%);
    }
  }

  &__title {
    font-size: 16px;
    text-align: center;
    font-weight: 600;
    line-height: 1.2;
  }

  &__progress {
    position: relative;
    min-width: 100px;
    min-height: 100px;
    width: 100px;
    height: 100px;
    margin-top: 21px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $blue02;
  }

  &__progress-content {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__progress-num {
    font-size: 36px;
    font-weight: 600;
    font-family: 'FolksBold', serif;

    span {
      margin-left: -8px;
      font-size: 20px;
      font-weight: 400;
      font-family: $Manrope, Arial, -apple-system, system-ui, 'Segoe UI', 'Helvetica Neue', sans-serif !important;
    }
  }

  &__progress-ellipse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
  }

  &__goal {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__goal-title {
    font-size: 12px;
  }

  &__goal-num {
    display: flex;
    align-items: center;
    font-size: 19px;
    font-weight: 700;
    font-family: 'FolksBold', serif;

    span {
      font-size: 15px;
      font-weight: 600;
    }
  }
}
</style>
