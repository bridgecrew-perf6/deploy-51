<template>
  <div class="progress">
    <div class="progress__header">
      <h2 class="h2 progress__title">Цели команды</h2>
      <wu-select-period/>
    </div>

    <div class="progress__body d-flex flex-wrap">
      <div v-for="(stats, index) in statistic" :key="index" class="stats-component-block">
        <stats-component :statsData="stats" />
      </div>
    </div>
  </div>
</template>

<script>
import StatsComponent from './StatsComponent.vue'

export default {
  data() {
    return {
      statistic: [
        {
          title: 'Увеличить показатели силовой выносливости на 20 %',
          percent: 18,
          color: '#FF4E78',
          id: 0,
        },
        {
          title: 'Улучшить меткость минимум на 10%',
          percent: 42,
          color: '#FFA217',
          id: 1,
        },
        {
          title: 'Положителная динамика не мен...',
          percent: 53,
          color: '#64C048',
          id: 2,
        },
        {
          title: 'Войти в топ-10 команд',
          percent: 74,
          color: '#79C54C',
          id: 3,
        },
        {
          title: 'Выиграть не менее 14 матчей',
          percent: 96,
          color: '#2ABAF3',
          id: 4,
        },

        {
          title: 'Улучшить скорость на льду на 25 %',
          percent: 100,
          color: '#2ABAF3',
          id: 5,
        },
      ],
    }
  },
  components: {
    StatsComponent,
  },
}
</script>

<style lang="sass" scoped>
.progress
    padding-top: 55px
    margin-bottom: 55px

.progress__select
  width: 100%
  display: inline-block
  max-width: 102px
  &.v-select--is-menu-active
    background-color: #FBFBFE
    border-radius: 4px 4px 0 0
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15)


.progress__title
    position: relative
    display: inline-block
    margin-right: 3px
    margin-bottom: 15px
    padding-left: 38px
    font-weight: 500
    color: $blue02
    &::after
        content: ''
        position: absolute
        top: 50%
        left: 11px
        width: 20px
        height: 20px
        transform: translateY(-50%)
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.185 1.502c-.151.619-.24 1.124-.405 1.604-.113.316-.366.581-.569.86-.165.214-.342.429-.494.605-4.011-1.73-7.15-1.086-9.124 1.794-1.772 2.602-1.405 6.101.86 8.311 2.215 2.16 5.696 2.45 8.252.708 2.366-1.617 3.96-5.242 1.746-9.057.33-.29.658-.606 1.013-.91.1-.088.265-.189.38-.176.62.063 1.164-.05 1.518-.644 2.531 3.688 2.278 9.448-1.873 13.022-3.91 3.36-9.871 3.146-13.554-.53C-.747 13.426-1 7.502 2.378 3.561c3.519-4.13 9.29-4.459 12.807-2.059Z' fill='%23525BBA'/%3E%3Cpath d='M13.438 8.298c.924 1.579.444 3.65-1.024 4.8-1.544 1.212-3.734 1.073-5.139-.304-1.417-1.39-1.581-3.549-.405-5.115 1.14-1.503 3.24-2.021 4.772-1.137-.798.796-1.595 1.566-2.367 2.362-.228.24-.443.53-.519.834-.152.58.063 1.098.608 1.389.556.303 1.1.24 1.569-.202.696-.67 1.38-1.364 2.063-2.046.152-.165.278-.367.442-.581Z' fill='%23525BBA'/%3E%3Cpath d='M17.869.618v1.566h1.569c.025.05.05.101.076.14-.658.63-1.316 1.275-1.987 1.906-.089.089-.278.127-.405.114-.67-.114-1.088.24-1.519.682-1.645 1.68-3.328 3.335-4.998 5.002-.14.14-.266.303-.43.367-.14.05-.368 0-.482-.102-.088-.075-.114-.315-.063-.429.063-.164.228-.29.367-.43 1.76-1.755 3.53-3.498 5.265-5.28.227-.24.38-.63.405-.972.025-.404.139-.707.43-.985.557-.543 1.063-1.112 1.595-1.68.05.025.113.063.177.1Z' fill='%23525BBA'/%3E%3C/svg%3E")
        background-repeat: no-repeat
        background-position: center

.stats-component-block
  margin-right: 15px
  margin-bottom: 15px
  &:last-child
    margin-right: 0px
</style>
