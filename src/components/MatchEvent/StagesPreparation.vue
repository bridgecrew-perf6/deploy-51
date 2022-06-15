<template>
  <div class="stages-preparation">
    <h3 class="stages-preparation__title title-blue-20">Этапы подготовки</h3>
    <div class="stages-preparation__wrapper">
      <div class="stages-preparation__header">
        <div class="stages-preparation__header-content">
          <div class="stages-preparation__header-title">
            Подготовка к мероприятию
            идёт согласно плану
          </div>
          <p class="stages-preparation__header-subtitle">
            Но Вам ещё нужно собрать документы
          </p>
        </div>

        <div class="stages-preparation__header-progress">
          <div class="stages-preparation__header-progress-text">83 <span>%</span></div>
          <svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="44.5" cy="43.5" r="40.5" fill="#464EA3" stroke="#36427D" stroke-width="2"/>
            <path
                d="M44.5 -1.77031e-06C42.2909 -1.67375e-06 40.5 1.79086 40.5 4C40.5 6.20914 42.2909 8 44.5 8L44.5 -1.77031e-06ZM8 44.5C8 42.2909 6.20914 40.5 4 40.5C1.79086 40.5 -1.86688e-06 42.2909 -1.77031e-06 44.5L8 44.5ZM44.5 8C64.6551 8 81 24.3449 81 44.5L89 44.5C89 19.9266 69.0734 -2.84445e-06 44.5 -1.77031e-06L44.5 8ZM81 44.5C81 64.6551 64.6551 81 44.5 81L44.5 89C69.0734 89 89 69.0734 89 44.5L81 44.5ZM44.5 81C24.3449 81 8 64.6551 8 44.5L-1.77031e-06 44.5C-6.96175e-07 69.0734 19.9266 89 44.5 89L44.5 81Z"
                fill="#2ABAF3"/>
          </svg>
        </div>
      </div>
      <div class="stages-preparation__wrapper-content">
        <vue-custom-scrollbar
            class="stages-preparation__scroll custom-scroll"
            :settings="scrollSettings"
        >
          <div class="stages-preparation__list">
            <div class="stages-preparation__item" v-for="(stage, index) in stages" :key="index">
              <div class="stages-preparation__item-left">
                <div class="stages-preparation__item-icon" v-if="!stage.completed">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="8" fill="#B9CBE5"/>
                    <circle cx="10" cy="10" r="9" stroke="white" stroke-opacity="0.5" stroke-width="2"/>
                    <circle cx="10" cy="10.0008" r="3.2" fill="white"/>
                  </svg>
                </div>
                <div class="stages-preparation__item-icon" v-if="stage.completed">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#2ABAF3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2908 5.83392C11.9783 5.5215 11.4718 5.5215 11.1594 5.83392L7.06132 9.932L5.36485 8.23346C5.05262 7.92085 4.5464 7.92085 4.23417 8.23346C3.92194 8.54607 3.92194 9.05291 4.23417 9.36552L6.49553 11.6296C6.80776 11.9422 7.31398 11.9422 7.62621 11.6296C7.6495 11.6063 7.67105 11.5819 7.69087 11.5566C7.71668 11.5365 7.74154 11.5145 7.76528 11.4908L12.2908 6.96529C12.6032 6.65288 12.6032 6.14634 12.2908 5.83392Z" fill="white"/>
                  </svg>
                </div>
                <div class="stages-preparation__item-line" :class="{'stages-preparation__item-line_active': stage.completed}"></div>
              </div>
              <div class="stages-preparation__item-title">{{stage.title}}</div>
            </div>
          </div>
        </vue-custom-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

export default {
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
      stages: [
        {
          title: 'Соглосование с ГИБДД',
          completed: true
        },
        {
          title: 'Маршрутный лист',
          completed: true
        },
        {
          title: 'Требования к безопасности при перевозке детей',
          completed: true
        },
        {
          title: 'Список детей',
          completed: false
        },
        {
          title: 'Согласие родителей не поездку (14/26)',
          completed: false
        },
        {
          title: 'Договор с транспортной компанией',
          completed: false
        },
        {
          title: 'Согласие родителей не поездку (14/26)',
          completed: false
        },
        {
          title: 'Договор с транспортной компанией',
          completed: false
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.stages-preparation {
  &__title {
    margin-left: 20px;
  }

  &__wrapper {
    margin-top: 16px;
    width: 100%;
    height: 408px;
    border-radius: 28px;
    background-color: #FFFFFF;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    overflow: hidden;
  }

  &__header {
    width: 100%;
    height: 125px;
    padding: 25px 20px 15px 37px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $blue02;
    color: #fff;
  }

  &__header-title {
    max-width: 221px;
    font-size: 16px;
    font-weight: 700;
  }

  &__header-subtitle {
    margin-top: 9px;
    font-size: 14px;
    font-weight: 400;
  }

  &__header-progress {
    width: 90px;
    height: 90px;
    position: relative;
  }

  &__header-progress-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: flex-end;
    font-size: 30px;
    font-weight: 700;

    span {
      margin-bottom: 5px;
      margin-left: 5px;
      font-size: 15px;
      font-weight: 400;
    }
  }

  &__wrapper-content {
    padding: 12px 14px 26px 32px;
  }

  &__scroll {
    height: 235px;
  }

  &__list {}

  &__item {
    display: flex;
  }

  &__item:last-child &__item-line {
    display: none;
  }

  &__item-left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__item-icon {
    width: 20px;
    height: 16px;
    display: flex;
    justify-content: center;
  }

  &__item-title {
    max-width: 95%;
    margin-left: 11px;
    color: $blue02;
    font-size: 15px;
  }

  &__item-line {
    margin-top: 5px;
    height: 18px;
    width: 2px;
    border-radius: 10px;
    background-color: $blue06;

    &_active {
      background-color: #2ABAF3;
    }
  }

}
</style>
