<template>
  <div class="stages-preparation">
    <h3 class="stages-preparation__title title-blue-20">Этапы подготовки</h3>
    <div class="stages-preparation__wrapper">
      <div class="stages-preparation__header">
        <div class="stages-preparation__header-content">
          <div class="stages-preparation__header-title">Подготовка к мероприятию идёт согласно плану</div>
          <p class="stages-preparation__header-subtitle">Но Вам ещё нужно собрать документы</p>
        </div>

        <div class="stages-preparation__header-progress">
          <div class="stages-preparation__header-progress-text">{{ percent }} <span>%</span></div>

          <vue-ellipse-progress
            :progress="percent"
            class="stages-preparation__progress-ellipse"
            :size="90"
            :thickness="8"
            :empty-thickness="1"
            color="#2ABAF3"
            empty-color="#36427D"
            :legend="false"
          />
        </div>
      </div>
      <div class="stages-preparation__wrapper-content">
        <vue-custom-scrollbar class="stages-preparation__scroll custom-scroll" :settings="scrollSettings">
          <div class="stages-preparation__list">
            <div class="stages-preparation__item" v-for="(stage, index) in items" :key="index">
              <div class="stages-preparation__item-left">
                <wu-checkbox v-model="stage.isDone" @input="changeCheckbox(stage)" white />
              </div>
              <div class="stages-preparation__item-title">{{ stage.title }}</div>
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
import WUCheckbox from '../library/WUCheckbox.vue'

export default {
  components: {
    vueCustomScrollbar,
    WUCheckbox,
  },
  props: {
    items: Array,
  },
  data() {
    return {
      scrollSettings: {
        useBothWheelAxes: true,
        suppressScrollX: false,
        wheelPropagation: false,
      },
      check: false,
      eventId: null,
      matchesId: null,
      completedLength: 0,
    }
  },
  computed: {
    percent() {
      return Math.floor(this.completedLength / this.items.length * 100)
    },
  },
  mounted() {
    this.eventId = this.$route.params.id
    this.matchesId = this.$route.query.matchesId
    this.calculate()
  },
  methods: {
    changeCheckbox(item) {
      this.calculate()
      this.$events.putPreparationStages(this.eventId, this.matchesId, item.id, {
        isDone: item.isDone,
      })
    },
    calculate() {
      this.completedLength = 0
      this.items.forEach(item => {
        if (item.isDone) {
          this.completedLength++
        }
      })
    },
  },
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
    background-color: #ffffff;
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
      margin-left: 3px;
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

  &__item {
    display: flex;

    &:not(:first-child) {
      margin-top: 25px;
    }
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
      background-color: #2abaf3;
    }
  }
}
</style>
