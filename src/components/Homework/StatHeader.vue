<template>
  <header class="homework-header header">
    <!-- // header__progress -->
    <div class="header__progress progress">
      <div class="progress__value value">
        <span class="value__current">{{ completedTasks }}</span>
        <span class="value__max">{{ homeTasks.length }}</span>
      </div>
      <div class="progress__title">
        <span class="progress__text">заданий</span>
      </div>

      <vue-ellipse-progress
        :progress="progressCalculate"
        class="header__progress-ellipse"
        :size="128"
        :thickness="8"
        :empty-thickness="1"
        color="#2ABAF3"
        empty-color="#36427D"
        :legend="false"
      />
    </div>
    <!-- // header__statistics -->
    <div class="header__statistics statistics">
      <div class="statistics__list">
        <div class="statistics__item">
          <div class="statistics__value value" style="background: #2abaf3">
            <div class="value__main" style="background: #2abaf3">
              <span class="value__current">{{ homeTasks.length }}</span>
              <span class="value__max">{{ homeTasks.length }}</span>
            </div>
          </div>
          <div class="statistics__title">
            <span class="statistics__text">Полученно</span>
          </div>
        </div>
        <div class="statistics__item">
          <div class="statistics__value value" style="background: #64c048">
            <div class="value__main" style="background: #64c048">
              <span class="value__current">{{ inWork }}</span>
            </div>
          </div>
          <div class="statistics__title">
            <span class="statistics__text">В работе</span>
          </div>
        </div>
        <div class="statistics__item">
          <div class="statistics__value value" style="background: #95b0da">
            <div class="value__main" style="background: #95b0da">
              <span class="value__current">{{ underReview }}</span>
            </div>
          </div>
          <div class="statistics__title">
            <span class="statistics__text">На проверке</span>
          </div>
        </div>
        <div class="statistics__item">
          <div class="statistics__value value" style="background: #ffa217">
            <div class="value__main" style="background: #ffa217">
              <span class="value__current">{{ onCompletion }}</span>
            </div>
          </div>
          <div class="statistics__title">
            <span class="statistics__text">На доработке</span>
          </div>
        </div>
        <div class="statistics__item">
          <div class="statistics__value value" style="background: #ff4b6b">
            <div class="value__main" style="background: #ff4b6b">
              <span class="value__current">{{ overdue }}</span>
            </div>
          </div>
          <div class="statistics__title">
            <span class="statistics__text">Просроченно</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'StatHeader',
  props: {
    homeTasks: Array,
  },
  computed: {
    completedTasks() {
      const arr = []
      this.homeTasks.forEach(item => {
        if (item.status === 'ST') arr.push(item)
      })

      return arr.length
    },
    inWork() {
      const arr = []
      this.homeTasks.forEach(item => {
        if (item.status === 'IW') arr.push(item)
      })

      return arr.length
    },
    underReview() {
      const arr = []
      this.homeTasks.forEach(item => {
        if (item.status === 'UR') arr.push(item)
      })

      return arr.length
    },
    onCompletion() {
      const arr = []
      this.homeTasks.forEach(item => {
        if (item.status === 'BF') arr.push(item)
      })

      return arr.length
    },
    overdue() {
      const arr = []
      this.homeTasks.forEach(item => {
        if (item.status === 'OV') arr.push(item)
      })

      return arr.length
    },
    progressCalculate() {
      return this.completedTasks ? (this.completedTasks / this.homeTasks.length) * 100 : 0
    },
  },
}
</script>

<style lang="sass" scoped>
// Стилизация Шапки
.homework-header
  padding: 1rem 2.5rem .75rem 3.75rem
  background-color: #525BBA
  margin-bottom: 2rem
  margin-left: 3.5rem
  border-radius: 1rem
  position: relative
  // Стилизация прогресса
  .header__progress
    width: 105px
    height: 105px
    border-radius: 50%
    background-color: #36427D
    position: absolute
    top: 50%
    left: 0
    transform: translate(-50%, -50%)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    .progress__value
      min-width: 6.25rem
      display: flex
      justify-content: center
      align-items: flex-end

      .value__current
        font-size: 3rem
        line-height: 2.75rem
        font-weight: 700
        font-family: 'FolksBold', serif

      .value__max
        font-size: 1rem
        line-height: 1.25rem
        font-weight: 700
        opacity: .75

        &:before
          content: "/"

    .progress__title
      font-size: .875rem
      line-height: 1.25rem

      .progress__text
        text-align: center

        font-weight: 500
        font-family: $Manrope, sans-serif

  .header__progress-ellipse
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 9

  // Стилизация статистики
  .header__statistics
    .statistics__list
      display: flex
      align-items: center

      .statistics__item
        padding: 0 2.25rem
        width: 25%
        display: flex
        flex-direction: column
        align-items: center
        position: relative

        @media (max-width: 1600px)
          padding: 0

        &:not(:last-child)
          &:before
            content: ""
            background-color: #464EA3
            border-radius: .25rem
            width: .25rem
            height: calc(100% + .5rem)
            position: absolute
            top: -.25rem
            left: calc(100% - .125rem)

      .statistics__value
        background-color: #64C048
        border-radius: .75rem
        min-width: 100px
        padding: .25rem
        position: relative

        &:not(:last-child)
          margin-bottom: .25rem

        &:before
          content: ""
          width: 100%
          height: 100%
          position: absolute
          top: 0
          left: 0
          border-radius: .75rem
          background: -moz-linear-gradient(left, rgba(255, 255, 255, .5) 0%, rgba(255, 255, 255, .1) 100%)
          background: -webkit-linear-gradient(left, rgba(255, 255, 255, .5) 0%, rgba(255, 255, 255, .1) 100%)
          background: linear-gradient(to right, rgba(255, 255, 255, .5) 0%, rgba(255, 255, 255, .1) 100%)
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#00ffffff', GradientType=1)

        .value__main
          font-size: 1rem
          line-height: 1.25rem
          font-family: 'FolksBold', serif
          padding: .2rem
          border-radius: .5rem
          background-color: #64C048
          width: 100%
          position: relative
          display: flex
          justify-content: center
          align-items: flex-end
          z-index: 2

        .value__current
          font-size: 3rem
          line-height: 2.5rem
          font-weight: 700

        .value__max
          color: #464EA3

          &:before
            content: "/"

      .statistics__title
        .title__text
          text-align: center
          font-size: .875rem
          line-height: 1.25rem
          font-weight: 500
          font-family: $Manrope, sans-serif
</style>
