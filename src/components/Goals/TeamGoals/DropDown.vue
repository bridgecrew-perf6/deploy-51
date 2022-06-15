<template>
  <div class="dropdown">
    <div class="dropdown__header">
      <div class="dropdown__header-left">
        <div class="dropdown__header-top">
          <div class="dropdown__header-toggle" @click="isOpen = !isOpen">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                 v-if="!isOpen">
              <path
                  d="M6.96112 0C7.1353 0.0504505 7.31882 0.0914414 7.47123 0.17973C7.97823 0.46982 8.2084 0.936487 8.2084 1.52613C8.20529 3.06802 8.2084 3.9509 8.20529 5.49279C8.20529 5.54955 8.20529 5.60631 8.20529 5.68198C8.27683 5.68198 8.33593 5.68198 8.39813 5.68198C9.78227 5.68198 11.1664 5.68198 12.5505 5.68198C13.3064 5.68198 13.944 6.27477 13.9969 7.02838C14.0529 7.81036 13.5086 8.52613 12.7434 8.6018C12.2364 8.65225 11.7201 8.62072 11.2068 8.62072C10.2426 8.62072 9.28149 8.62072 8.31726 8.61757C8.28616 8.61757 8.25817 8.62387 8.21773 8.62703C8.21462 8.67748 8.2084 8.72477 8.2084 8.76892C8.2084 10.0081 8.2084 11.2473 8.2084 12.4896C8.20529 13.3788 7.54899 14.0284 6.67496 14.0032C5.96268 13.9842 5.31882 13.3221 5.31882 12.6C5.31882 11.345 5.31882 10.0901 5.31882 8.83198C5.31882 8.76892 5.31882 8.70586 5.31882 8.62703C5.26594 8.62387 5.2224 8.61441 5.17885 8.61441C3.95334 8.61441 2.72473 8.61441 1.49922 8.61441C0.730949 8.61441 0.177294 8.14775 0.0248834 7.37838C0.0217729 7.35946 0.00933126 7.34054 0 7.32162V6.97477C0.00933126 6.95586 0.0217729 6.93694 0.0248834 6.91802C0.174184 6.1518 0.73717 5.68198 1.49922 5.68198C2.70607 5.68198 3.91291 5.68198 5.11975 5.68198C5.17885 5.68198 5.24106 5.68198 5.3126 5.68198C5.3126 5.59369 5.3126 5.52432 5.3126 5.45811C5.3126 3.87838 5.30949 2.95766 5.31882 1.37793C5.32193 0.857658 5.57387 0.450901 6.01866 0.195495C6.17729 0.104054 6.36081 0.0599099 6.5381 0.00315315C6.68118 0 6.81493 0 6.96112 0Z"
                  fill="#DCE5F2"/>
            </svg>
            <svg width="15" height="5" viewBox="0 0 15 5" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="isOpen">
              <path
                  d="M14.9992 2.68924C14.9775 2.76649 14.9588 2.84375 14.937 2.921C14.7815 3.51328 14.2372 3.96714 13.6431 3.99611C13.5747 3.99933 13.5093 4.00255 13.4409 4.00255C9.80484 4.00255 6.16566 4.00255 2.52958 4.00255C1.72087 4.00255 1.16411 3.52293 1.01792 2.70534C0.874839 1.90705 1.52492 1.05405 2.30874 1.0122C2.3865 1.00898 2.46426 1.00576 2.54202 1.00576C6.1781 1.00576 9.81728 1.01542 13.4534 0.996107C14.2527 0.992889 14.8904 1.55941 14.9775 2.27722C14.9775 2.28688 14.9899 2.29332 14.9961 2.29976C14.9992 2.43173 14.9992 2.56049 14.9992 2.68924Z"
                  fill="#DCE5F2"/>
            </svg>
          </div>
          <div class="dropdown__header-row">
            <div class="dropdown__title">Показать положительную динамику в гибкости</div>
            <div class="dropdown__percent">40 <span>%</span></div>
          </div>
        </div>
        <div class="dropdown__header-progress">
          <span class="dropdown__header-progress-line"></span>
        </div>
        <div class="dropdown__header-descr">
          <div class="dropdown__header-descr-icon">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M18.108 9.63069C12.7222 7.33749 7.34535 12.6181 9.59776 18.0294C7.50379 18.5522 3.97244 17.2996 1.98114 14.7476C-0.685753 11.3312 -0.654065 6.78164 2.03945 3.32852C4.36284 0.350027 8.95639 -0.823857 12.4155 0.607647C16.4374 2.27139 18.4718 6.25117 18.108 9.63069ZM9.97675 7.11794C9.97675 6.03924 9.99196 5.23719 9.97168 4.43641C9.95901 3.92625 9.60917 3.6737 9.14905 3.63944C8.67499 3.60391 8.34417 3.86279 8.23136 4.33615C8.18319 4.53794 8.18446 4.75495 8.18319 4.96434C8.17812 5.97705 8.15657 6.99103 8.19206 8.00375C8.20981 8.5063 8.07798 8.87433 7.70153 9.22205C6.95748 9.90861 6.25654 10.6421 5.54672 11.3642C5.10308 11.8147 5.07519 12.3198 5.44912 12.7031C5.82304 13.0863 6.33386 13.0775 6.79144 12.646C7.26676 12.198 7.67998 11.6739 8.18953 11.2716C9.64212 10.1282 10.4749 8.76011 9.97675 7.11794Z"
                  fill="#464EA3"/>
              <path
                  d="M20.0021 15.4546C20.0186 17.8975 17.969 19.9661 15.4986 19.9991C13.0396 20.0321 10.9241 17.9508 10.9025 15.4787C10.881 13.0078 12.9686 10.9062 15.4416 10.9062C17.9411 10.9075 19.9857 12.9469 20.0021 15.4546ZM14.9599 15.7388C14.733 15.4457 14.6075 15.2452 14.4453 15.0815C13.9116 14.5447 13.3476 14.4761 12.9585 14.881C12.5833 15.2706 12.6555 15.8112 13.16 16.3264C13.5136 16.6881 13.8723 17.046 14.2336 17.4C14.7926 17.9496 15.1918 17.9559 15.7394 17.414C16.429 16.7313 17.1147 16.0447 17.7966 15.3556C18.2948 14.8518 18.3518 14.3644 17.9716 13.9736C17.5786 13.57 17.0247 13.6055 16.5215 14.1018C16.0259 14.5891 15.5607 15.1056 14.9599 15.7388Z"
                  fill="#464EA3"/>
            </svg>
          </div>
          <p class="dropdown__header-descr-text">Наклон вперед из положения стоя на гимнастической скамье</p>
        </div>
      </div>
      <div class="dropdown__header-calendar">
        <div class="dropdown__header-calendar-icon">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.017813 4.61133C5.02246 4.61133 9.9551 4.61133 14.9516 4.61133C14.9621 4.82736 14.9795 5.03177 14.9795 5.23618C14.9818 7.48125 14.9841 9.72631 14.9795 11.9714C14.976 13.8854 13.9272 14.9737 12.0167 14.9865C8.95858 15.0062 5.90051 15.0027 2.84244 14.9865C1.20829 14.9783 0.0782079 13.9865 0.0352346 12.3756C-0.0321289 9.80645 0.017813 7.23502 0.017813 4.61133ZM3.90051 6.67985C3.38018 6.69379 2.91909 7.1723 2.92257 7.69727C2.92606 8.26522 3.45219 8.77858 4.00155 8.74954C4.5393 8.72166 4.96903 8.26406 4.96439 7.72399C4.95858 7.11772 4.49633 6.66359 3.90051 6.67985ZM12.0352 7.74606C12.055 7.18043 11.6194 6.70424 11.0573 6.67869C10.5091 6.65314 10.0213 7.11539 10.005 7.67405C9.98878 8.23618 10.4417 8.72515 10.9923 8.73909C11.5614 8.75418 12.0155 8.32213 12.0352 7.74606ZM2.92374 11.4069C2.8947 11.9749 3.32327 12.4476 3.89818 12.4824C4.43825 12.5149 4.94813 12.0457 4.97019 11.4963C4.99342 10.9249 4.55672 10.4406 3.99807 10.4162C3.46148 10.3918 2.95277 10.861 2.92374 11.4069ZM8.51143 7.7205C8.52536 7.18973 8.07821 6.71353 7.54162 6.68798C6.95742 6.66011 6.45568 7.13978 6.45568 7.72515C6.45568 8.24664 6.9249 8.71702 7.46032 8.7298C8.01665 8.74373 8.49633 8.2838 8.51143 7.7205ZM7.44987 12.4847C7.96787 12.5149 8.50794 12.0085 8.52304 11.4789C8.53814 10.9609 8.09331 10.4801 7.5544 10.4325C7.0062 10.3848 6.51143 10.8262 6.46845 11.4011C6.42896 11.9389 6.8947 12.4522 7.44987 12.4847Z"
                fill="#464EA3"/>
            <path
                d="M14.9241 3.30931C9.95316 3.30931 5.00891 3.30931 0.070465 3.30931C-0.24777 1.65425 0.827724 0.138574 2.45722 0.0607574C4.17383 -0.0205434 5.89625 0.0154613 7.61634 0.00849263C9.12505 0.00268543 10.6326 -0.00892897 12.1413 0.011977C14.0054 0.0375286 15.1634 1.39758 14.9241 3.30931Z"
                fill="#464EA3"/>
          </svg>
        </div>
        <div class="dropdown__header-calendar-title">2 августа 2021</div>
      </div>
    </div>
    <div class="dropdown__content" v-if="isOpen">
      <steps class="dropdown__steps" :length="7" :completed="1"/>
      <div class="dropdown__content-header">
        <div class="dropdown__content-header-row">
          <div class="dropdown__content-header-icon">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7.99871 17.7695C6.03619 17.7695 4.07491 17.7719 2.11239 17.7695C0.6851 17.767 0.00986439 17.1215 0.00614749 15.7016C-0.00376423 11.7159 -0.00252527 7.73012 0.00490852 3.74437C0.00738645 2.51284 0.670233 1.82521 1.90672 1.78928C2.93878 1.75831 3.97208 1.77442 5.00413 1.78557C5.31759 1.78928 5.49972 1.71495 5.67565 1.40397C6.72134 -0.443331 9.1906 -0.471828 10.2735 1.35069C10.4742 1.68893 10.6798 1.79672 11.0503 1.78805C12.0415 1.76574 13.0326 1.77318 14.0238 1.78309C15.2578 1.79548 15.9739 2.44717 15.9801 3.68242C16.0037 7.77101 16.0012 11.8608 15.9826 15.9494C15.9777 17.1153 15.2293 17.7583 13.9445 17.767C11.9646 17.7794 9.98106 17.7695 7.99871 17.7695ZM7.07321 11.1992C6.41284 10.5277 5.79831 9.88964 5.16768 9.26892C4.72165 8.83032 4.22111 8.79192 3.85933 9.13387C3.4641 9.5068 3.45791 10.0383 3.90393 10.5029C4.7043 11.3355 5.51954 12.1545 6.35337 12.9524C6.87497 13.4517 7.35073 13.4256 7.86243 12.9214C8.55253 12.2412 9.23396 11.5511 9.91911 10.8659C10.6625 10.1226 11.4183 9.3891 12.1455 8.63085C12.5346 8.22447 12.5247 7.73012 12.1468 7.36711C11.7763 7.01152 11.3637 7.05736 10.9772 7.34357C10.7641 7.50215 10.5758 7.69667 10.3862 7.88499C9.29343 8.97528 8.20314 10.0681 7.07321 11.1992ZM8.87218 2.71107C8.8982 2.25885 8.50421 1.8215 8.05323 1.80167C7.57003 1.77937 7.1587 2.13743 7.13268 2.59957C7.10666 3.07409 7.461 3.49906 7.91818 3.54366C8.40262 3.59198 8.84369 3.20666 8.87218 2.71107Z"
                  fill="#464EA3"/>
            </svg>
          </div>
          <p class="dropdown__content-header-text">Домашнее задание</p>
        </div>
        <button class="dropdown__content-header-btn" @click="dialogCreateGoal = true">+ добавить задание</button>
      </div>
      <div class="dropdown__content-main">
        <div class="dropdown__content-main-row">
          <div class="dropdown__content-main-left">
            <div class="dropdown__content-main-text"><span></span> Изучить видео с техникой бега</div>
            <div class="dropdown__content-main-text">до 23 сентября 2021</div>
          </div>
          <base-button class="dropdown__content-main-btn" backgroundColor="#64C048" label="Выполненно"/>
        </div>
        <div class="dropdown__content-main-row">
          <div class="dropdown__content-main-left">
            <div class="dropdown__content-main-text"><span></span>Приседания 4 по 20</div>
            <div class="dropdown__content-main-text">до 10 августа 2021</div>
          </div>
          <base-button class="dropdown__content-main-btn" backgroundColor="#FF4B6B" label="Просроченно"/>
        </div>
      </div>
    </div>
    <modal-create-goal :visible="dialogCreateGoal"
                       @close="dialogCreateGoal = false"
                       v-if="dialogCreateGoal" />
  </div>
</template>

<script>
import Steps from "./Steps";
import ModalCreateGoal from "@/components/modals/ModalCreateGoal";

export default {
  name: 'DropDown',
  components: {
    Steps,
    ModalCreateGoal
  },
  data() {
    return {
      isOpen: false,
      dialogCreateGoal: false
    }
  }
}
</script>

<style scoped lang="scss">
.dropdown {
  padding-bottom: 25px;
  border-bottom: 1px solid #DCE5F2;

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__header-left {
  }

  &__header-top {
    display: flex;
    align-items: center;
  }

  &__header-toggle {
    height: 24px;
    margin-top: 3px;
    cursor: pointer;
  }

  &__header-row {
    margin-left: 14px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    color: $blue02;
    font-size: 16px;
    font-weight: 500;
  }

  &__percent {
    color: $blue03;
    font-size: 24px;
    font-weight: 600;
    font-family: 'FolksBold';

    span {
      margin-left: -3px;
      font-size: 12px;
      font-weight: 400;
      font-family: $Manrope, Arial, -apple-system, system-ui, 'Segoe UI', 'Helvetica Neue', sans-serif;
    }
  }

  &__header-progress {
    width: 500px;
    height: 4px;
    margin-top: 2px;
    margin-left: 25px;
    border-radius: 10px;
    background-color: #DCE5F2;
    overflow: hidden;
  }

  &__header-progress-line {
    display: block;
    width: 40%;
    height: 100%;
    border-radius: 10px;
    background-color: $blue03;
  }

  &__header-calendar {
    margin-top: 7px;
    display: flex;
    align-items: center;
  }

  &__header-calendar-title {
    margin-left: 7px;
    color: $blue02;
    font-size: 16px;
    font-weight: 500;
  }

  &__header-descr {
    margin-top: 21px;
    margin-left: 25px;
    display: flex;
    align-items: center;
  }

  &__header-descr-text {
    margin-left: 10px;
    margin-bottom: 8px;
    color: $blue02;
    font-size: 14px;
    font-weight: 500;
  }

  &__content {
    padding-top: 14px;
    padding-left: 25px;
  }

  &__steps {
    margin-left: 30px;
  }

  &__content-header {
    margin-top: 19px;
    display: flex;
    justify-content: space-between;
  }

  &__content-header-row {
    display: flex;
    align-items: center;
  }

  &__content-header-text {
    margin-left: 11px;
    margin-bottom: 3px;
    color: $blue02;
    font-size: 16px;
    font-weight: 500;
  }

  &__content-header-btn {
    color: $blue02;
    font-size: 14px;
  }

  &__content-main {
    width: 100%;
    padding-left: 30px;
    margin-top: 18px;
  }

  &__content-main-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:first-child) {
      margin-top: 13px;
    }
  }

  &__content-main-left {
    width: 470px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__content-main-text {
    display: flex;
    align-items: center;
    color: $blue02;
    font-size: 14px;
    font-weight: 400;

    span {
      display: block;
      width: 3px;
      height: 3px;
      margin-right: 10px;
      border-radius: 10px;
      background-color: $blue02;
    }
  }

  &__content-main-btn {
    width: 111px;
  }
}
</style>
