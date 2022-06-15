<template>
  <section class="sidebar-sp-profile">
    <div class="sidebar-sp-profile__header">
      <div class="sidebar-sp-profile__avatar-wrapper">
        <v-img v-if="sportsman.user.avatar" class="sidebar-sp-profile__avatar" :src="sportsman.user.avatar"></v-img>
        <v-img
          v-else
          :alt="sportsman.full_name"
          :src="require(`@/assets/images/positionTypes/${positionType}.svg`)"
          class="sidebar-sp-profile__avatar sidebar-sp-profile__avatar--type"
        ></v-img>
        <span class="sidebar-sp-profile__sp-number">{{ sportsman.squadNumber }}</span>
      </div>

      <div class="sidebar-sp-profile__about">
        <p class="sidebar-sp-profile__fullname">
          {{ sportsman.user.firstName }} {{ sportsman.user.lastName }}, {{ age }} лет
        </p>
        <span class="sidebar-sp-profile__position">{{ sportsman.amplua.title }}, Разряд II</span>
      </div>
    </div>

    <div class="sidebar-sp-profile__progress-block">
      <p class="sidebar-sp-profile__title-block">Развитие</p>

      <div class="sidebar-sp-profile__progress-wrapper">
        <div v-for="(stats, index) in statistic" :key="index" class="sidebar-sp-profile__progress-item">
          <stats-component small :statsData="stats" />
        </div>
      </div>
    </div>

    <div class="sidebar-sp-profile__statistics-block">
      <p class="sidebar-sp-profile__title-block">Статистика</p>

      <div class="sidebar-sp-profile__statistics-wrapper">
        <div class="sidebar-sp-profile__statistics-games statistics-games__header">
          <p class="statistics-games__header-title">Количество игр</p>

          <div class="statistics-games__header-inner">
            <div class="statistics-games__header-progress">
              <p class="statistics-games__header-progress-games">
                <span class="statistics-games__header-progress-games-played">35</span>/48
              </p>
              <div class="statistics-games__header-progress-bar">
                <span
                  class="statistics-games__header-progress-line statistics-games__header-progress-line--lose"
                  :style="`width: ${(7 / 48) * 100}%`"
                ></span>
                <span
                  class="statistics-games__header-progress-line statistics-games__header-progress-line--draw"
                  :style="`width: ${(5 / 48) * 100}%`"
                ></span>
                <span
                  class="statistics-games__header-progress-line statistics-games__header-progress-line--wins"
                  :style="`width: ${(23 / 48) * 100}%`"
                ></span>
              </div>
            </div>
            <div class="statistics-games__header-legend">
              <ul class="statistics-games__header-legend-list">
                <li class="statistics-games__header-legend-item">
                  <span class="statistics-games__header-legend-number statistics-games__header-legend-number--wins"
                    >23</span
                  >
                  Победа
                </li>
                <li class="statistics-games__header-legend-item">
                  <span class="statistics-games__header-legend-number statistics-games__header-legend-number--draw"
                    >5</span
                  >
                  Ничья
                </li>
                <li class="statistics-games__header-legend-item">
                  <span class="statistics-games__header-legend-number statistics-games__header-legend-number--lose"
                    >7</span
                  >
                  поражение
                </li>
              </ul>
            </div>
          </div>
        </div>

        <v-row v-if="sportsman.position_type !== 'goalie'">
          <v-col>
            <div class="sidebar-sp-profile__block sidebar-sp-profile__block--header">
              <div class="sidebar-sp-profile__block__header">+ / -</div>
              <div class="sidebar-sp-profile__block-body sidebar-sp-profile__block-body--great">
                <div class="sidebar-sp-profile__block__content">
                  <span class="sidebar-sp-profile__block-body-number">+12</span>
                </div>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="sidebar-sp-profile__block sidebar-sp-profile__block--header">
              <div class="sidebar-sp-profile__block__header">Штрафное время</div>
              <div class="sidebar-sp-profile__block-body sidebar-sp-profile__block-body--good">
                <div class="sidebar-sp-profile__block__content">
                  <span class="sidebar-sp-profile__block-body-number">12</span> мин
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row v-if="sportsman.position_type !== 'goalie'">
          <v-col cols="8">
            <div class="sidebar-sp-profile__block sidebar-sp-profile__block--wtht-header">
              <div class="sidebar-sp-profile__block-body sidebar-sp-profile__block-body--space-between">
                <div class="sidebar-sp-profile__block__content">
                  <p class="sidebar-sp-profile__block-body-title">Передачи</p>
                  <span
                    class="
                      sidebar-sp-profile__block-body-number
                      sidebar-sp-profile__block-body-number--bg
                      sidebar-sp-profile__block-body-number--great
                    "
                    >47</span
                  >
                </div>
                <div class="sidebar-sp-profile__block__content">
                  <p class="sidebar-sp-profile__block-body-title">Голы</p>
                  <span
                    class="
                      sidebar-sp-profile__block-body-number
                      sidebar-sp-profile__block-body-number--bg
                      sidebar-sp-profile__block-body-number--orange
                    "
                    >32</span
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="sidebar-sp-profile__block sidebar-sp-profile__block--header">
              <div class="sidebar-sp-profile__block__header">Очки</div>
              <div class="sidebar-sp-profile__block-body sidebar-sp-profile__block-body--good">
                <div class="sidebar-sp-profile__block__content">
                  <span class="sidebar-sp-profile__block-body-number">79</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row v-if="sportsman.position_type === 'goalie'">
          <v-col cols="6">
            <div
              class="sidebar-sp-profile__block sidebar-sp-profile__block--wtht-header sidebar-sp-profile__block--column"
            >
              <div class="sidebar-sp-profile__block-body sidebar-sp-profile__block-body--column">
                <div class="sidebar-sp-profile__block__content">
                  <p class="sidebar-sp-profile__block-body-title">Броски в створ</p>
                  <span
                    class="
                      sidebar-sp-profile__block-body-number
                      sidebar-sp-profile__block-body-number--bg
                      sidebar-sp-profile__block-body-number--dark-blue
                    "
                    >407</span
                  >
                </div>
                <div class="sidebar-sp-profile__block__content">
                  <p class="sidebar-sp-profile__block-body-title">Отбито бросков</p>
                  <span
                    class="
                      sidebar-sp-profile__block-body-number
                      sidebar-sp-profile__block-body-number--bg
                      sidebar-sp-profile__block-body-number--orange
                    "
                    >78%</span
                  >
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="sidebar-sp-profile__block sidebar-sp-profile__block--header">
              <div class="sidebar-sp-profile__block__header">Время на площадке</div>
              <div class="sidebar-sp-profile__block-body sidebar-sp-profile__block-body--great">
                <div class="sidebar-sp-profile__block__content sidebar-sp-profile__block__content--time">
                  <p class="sidebar-sp-profile__block-body-number sidebar-sp-profile__block-body-number--time">
                    102:
                    <span>мин</span>
                  </p>
                  <p class="sidebar-sp-profile__block-body-number sidebar-sp-profile__block-body-number--time">
                    34
                    <span>сек</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="sidebar-sp-profile__block sidebar-sp-profile__block--header">
              <div class="sidebar-sp-profile__block__header">КНН</div>
              <div class="sidebar-sp-profile__block-body sidebar-sp-profile__block-body--terrible">
                <div class="sidebar-sp-profile__block__content">
                  <span class="sidebar-sp-profile__block-body-number">3.4</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="sidebar-sp-profile__block sidebar-sp-profile__block--header">
              <div class="sidebar-sp-profile__block__header">Посещаемость</div>
              <div class="sidebar-sp-profile__block-body sidebar-sp-profile__block-body--good">
                <div class="sidebar-sp-profile__block__content">
                  <span class="sidebar-sp-profile__block-body-number">84%</span>
                </div>
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="sidebar-sp-profile__block sidebar-sp-profile__block--header">
              <div class="sidebar-sp-profile__block__header">Кол-во занятий</div>
              <div class="sidebar-sp-profile__block-body sidebar-sp-profile__block-body--great">
                <div class="sidebar-sp-profile__block__content">
                  <span class="sidebar-sp-profile__block-body-number">4</span> в неделю
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script>
import StatsComponent from '@/components/Progress/StatsComponent.vue'
export default {
  props: {
    idSportsman: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      sportsman: {},
      positionTypes: [
        { slug: 'goalie', title: 'Вратарь' },
        { slug: 'defender', title: 'Защитник' },
        { slug: 'forward', title: 'Нападающий' },
      ],
      statistic: [
        {
          title: 'Теория',
          percent: 18,
          color: '#FF4E78',
          id: 0,
        },
        {
          title: 'ОФП',
          percent: 42,
          color: '#FFA217',
          id: 1,
        },
        {
          title: 'Психология',
          percent: 53,
          color: '#64C048',
          id: 2,
        },
        {
          title: 'Техника',
          percent: 74,
          color: '#79C54C',
          id: 3,
        },
        {
          title: 'Тактика',
          percent: 96,
          color: '#2ABAF3',
          id: 4,
        },

        {
          title: 'Игра',
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
  computed: {
    age() {
      return this.$moment().diff(this.sportsman.user.birthDate, 'years')
    },
    positionType() {
      return this.positionTypes.find(type => type.title.toLowerCase() == this.sportsman.amplua.title.toLowerCase()).slug
    },
  },
  methods: {
    getSportsman() {
      this.$sportsmen.getSportsman(this.idSportsman).then(response => {
        this.sportsman = response
      })
    },
  },
  mounted() {
    this.getSportsman()
  },
}
</script>

<style lang="sass" scoped>
.row
    margin: -6px
    .col
        padding: 12px 6px
.sidebar-sp-profile
    padding-top: 30px

.sidebar-sp-profile__header
    margin-bottom: 35px

.sidebar-sp-profile__avatar-wrapper
    position: relative
    margin-bottom: 35px


.sidebar-sp-profile__avatar
    width: 180px
    height: 180px
    margin: 0 auto
    border: 3px solid #95B0DA
    border-radius: 50%

.sidebar-sp-profile__avatar--type
    background-color: $blue02
    &::v-deep
        .v-image__image
            background-size: 90px

.sidebar-sp-profile__sp-number
    position: absolute
    left: 50%
    bottom: -17px

    display: inline-block
    min-width: 45px
    font-weight: bold
    font-size: 20px
    line-height: 35px
    text-align: center
    color: #FFFFFF
    background-color: $blue03
    border: 2px solid $blue05
    border-radius: 12px
    transform: translateX(-50%)

.sidebar-sp-profile__about
    text-align: center

.sidebar-sp-profile__fullname
    font-weight: 500
    font-size: 20px
    line-height: 28px
    color: $blue02

.sidebar-sp-profile__position
    font-size: 14px
    line-height: 28px
    text-align: center
    color: #413A70

.sidebar-sp-profile__progress-block
    margin-bottom: 30px

.sidebar-sp-profile__title-block
    margin-bottom: 10px
    font-size: 20px
    line-height: 27px
    color: $blue02

.sidebar-sp-profile__progress-wrapper,
.sidebar-sp-profile__statistics-wrapper
    padding: 20px
    background-color: $blue03
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15)
    border-radius: 28px

.sidebar-sp-profile__progress-wrapper
    display: flex
    flex-wrap: wrap
    justify-content: space-between

.sidebar-sp-profile__progress-item
    margin-right: 1px
    margin-left: 1px
    margin-bottom: 5px


.sidebar-sp-profile__statistics-block

.sidebar-sp-profile__statistics-wrapper


.sidebar-sp-profile__statistics-games
    background-color: $blue02
    border-radius: 12px

.statistics-games__header
    margin-bottom: 12px
    padding: 10px 13px

.statistics-games__header-title
    margin-bottom: 10px
    font-weight: 600
    font-size: 12px
    line-height: 16px
    text-align: center
    letter-spacing: 0.05em
    color: #fff

.statistics-games__header-inner
    display: flex
    justify-content: space-between

.statistics-games__header-progress
    padding-top: 5px

.statistics-games__header-progress-games
    margin-bottom: 7px
    font-family: 'FolksBold', serif
    font-weight: bold
    font-size: 24px
    line-height: 31px
    color: $blue05


.statistics-games__header-progress-games-played
    font-size: 40px
    line-height: 49px
    color: #FFFFFF


.statistics-games__header-progress-bar
    position: relative
    display: flex
    width: 150px
    height: 6px
    background-color: #525BBA
    border-radius: 4px
    overflow: hidden

.statistics-games__header-progress-line
    height: 100%
    //border-radius: 4px
    border-top-left-radius: 0px
    border-bottom-left-radius: 0px

.statistics-games__header-progress-line--wins
    background-color: $great
.statistics-games__header-progress-line--draw
    background-color: #fff
.statistics-games__header-progress-line--lose
    background-color: $terrible

.statistics-games__header-legend-item
    margin-bottom: 6px
    font-size: 12px
    line-height: 16px
    letter-spacing: 0.01em
    color: #FFFFFF
    &:last-child
        margin-bottom: 0px

.statistics-games__header-legend-number
    display: inline-block
    min-width: 23px
    margin-right: 5px
    line-height: 19px
    text-align: center
    border-radius: 4px

.statistics-games__header-legend-number--wins
    background-color: $great
    color: #fff

.statistics-games__header-legend-number--draw
    background-color: #fff
    color: $blue02

.statistics-games__header-legend-number--lose
    background-color: $terrible
    color: #fff


.sidebar-sp-profile__block
    border-radius: 12px
    overflow: hidden

.sidebar-sp-profile__block--header
    margin-bottom: 12px
    &:last-child
        margin-bottom: 0px

.sidebar-sp-profile__block--wtht-header
    height: 100%
    margin-bottom: 0px
    padding: 8px 13px 13px 13px
    border-radius: 12px
    background-color: $blue02

.sidebar-sp-profile__block__header
    min-height: 32px

    font-weight: 600
    font-size: 12px
    line-height: 32px
    text-align: center
    letter-spacing: 0.05em
    color: #FFFFFF
    background-color: $blue02

.sidebar-sp-profile__block-body
    min-height: 68px
    display: flex
    align-items: center
    justify-content: center

.sidebar-sp-profile__block-body--space-between
    justify-content: space-between

.sidebar-sp-profile__block-body--column
    flex-direction: column
    justify-content: space-between
    height: 100%


.sidebar-sp-profile__block-body-title
    margin-bottom: 7px
    font-weight: 600
    font-size: 12px
    line-height: 16px
    text-align: center
    letter-spacing: 0.05em
    color: #FFFFFF

.sidebar-sp-profile__block__content
    font-weight: 500
    font-size: 12px
    line-height: 16px
    text-align: center
    color: #fff

.sidebar-sp-profile__block__content--time
    display: flex

.sidebar-sp-profile__block-body--good
    background-color: $good
.sidebar-sp-profile__block-body--great
    background-color: $great
.sidebar-sp-profile__block-body--orange
    background-color: $badly
.sidebar-sp-profile__block-body--terrible
    background-color: $terrible

.sidebar-sp-profile__block-body-number
    font-family: 'FolksBold', serif !important
    font-weight: bold
    font-size: 40px
    line-height: 49px

.sidebar-sp-profile__block-body-number--bg
    padding: 0 13px
    line-height: 47px
    border-radius: 12px

.sidebar-sp-profile__block-body-number--time
    display: flex
    flex-direction: column
    line-height: 40px
    margin-bottom: 7px
    span
        font-family: $Manrope
        font-weight: 500
        font-size: 12px
        line-height: 12px

.sidebar-sp-profile__block-body-number--great
    background-color: $great
.sidebar-sp-profile__block-body-number--orange
    background-color: $badly

.sidebar-sp-profile__block-body-number--dark-blue
    background-color: $blue01
    color: #fff
</style>
