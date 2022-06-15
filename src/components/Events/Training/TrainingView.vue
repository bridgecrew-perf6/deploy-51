<template>
  <div class="d-flex">
    <left-menu>
      <training-sidebar-group v-if="event.group" :idGroup="event.group" />
      <training-sidebar-sportsman v-if="event.sportsman" :idSportsman="event.sportsman" />
    </left-menu>

    <div class="container training-container">
      <Header hideSearch />

      <div class="mt-16 mb-2 d-flex justify-space-between align-center">
        <h1 class="page-title page-title--event h1">{{ pageTitle }}</h1>

        <training-dropdown :idEvent="event.id" @deleteEvent="deleteEvent" />
      </div>
      <div class="mb-10 d-flex justify-space-between align-center">
        <ul class="training-info__list">
          <li class="training-info__item">{{ trainingType }}</li>
          <li class="training-info__item">{{ trainingObjective }}</li>
          <li class="training-info__item">{{ place }}</li>
        </ul>

        <p class="training-date">
          <span>{{ date }}</span>
          <span>{{ weekdayName }}</span>
          <span>{{ startTime }} - {{ endTime }}</span>
        </p>
      </div>
      <v-row class="mb-10">
        <v-col cols="6" class="pt-0">
          <h2 class="h2 section-title">Прогноз роста показателей</h2>
          <training-forecast-progress />
        </v-col>
        <v-col cols="6" class="pt-0">
          <h2 class="h2 section-title">Инвентарь</h2>
          <inventory :inventory="inventory" />
        </v-col>
      </v-row>

      <div class="mb-4 d-flex justify-space-between align-center">
        <h2 class="h2 section-title">Программа тренировки</h2>
      </div>

      <training-plan :trainingPlan="trainingPlan" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'

import Inventory from '@/components/Training/Inventory.vue'
import TrainingForecastProgress from '@/components/Training/TrainingForecastProgress.vue'
import TrainingPlan from '@/components/Training/TrainingPlan.vue'
import TrainingSidebarGroup from '@/components/Training/TrainingSidebarGroup.vue'
import TrainingSidebarSportsman from '@/components/Training/TrainingSidebarSportsman.vue'
import TrainingDropdown from '@/components/Training/TrainingDropdown.vue'

export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  components: {
    vueCustomScrollbar,
    LeftMenu,
    Header,
    Inventory,
    TrainingForecastProgress,
    TrainingPlan,
    TrainingSidebarGroup,
    TrainingSidebarSportsman,
    TrainingDropdown,
  },
  data: () => ({
    dialogDelete: false,
    inventory: [
      {
        img: 'https://source.unsplash.com/560x560/?sport',
        title: 'Ворота',
        count: 1,
      },
      {
        img: 'https://source.unsplash.com/560x560/?sport',
        title: 'Шайба',
        count: 2,
      },
      {
        img: 'https://source.unsplash.com/560x560/?sport',
        title: 'Фишки',
        count: 8,
      },
    ],
    trainingPlan: [],
  }),

  methods: {
    ...mapActions('events', ['loadTrainingPlaceTypes']),
    getTrainingExercises() {
      this.$events.getTrainingExercises(this.event.id, this.event.training?.id).then(response => {
        let exercisesListID = response
          .map(exercise => exercise.exercise)
          .filter((item, pos, self) => self.indexOf(item) == pos)
          .join(',')
        if (exercisesListID) {
          this.$exercises.getExercises({ id__in: exercisesListID }).then(exercisesList => {
            let exercises = exercisesList

            response.forEach(exercise => {
              exercise.exercise = exercises.find(ex => ex.id === exercise.exercise)
            })

            this.trainingPlan = response
          })
        }
      })
    },
    deleteEvent() {
      this.$events.deleteEvent(this.event.id).then(() => {
        this.notify({
          title: 'Событие успешно удалено',
          text: `Событие #${this.event.id} удалено`,
          bg: '#64C048',
          autoClose: 4000,
        })
        this.$router.push({ name: 'CalendarMonth' })
      })
    },
  },
  computed: {
    ...mapGetters('events', ['getTrainingObjective', 'getTrainingPlaceTypes']),
    trainingObjective() {
      return this.getTrainingObjective.find(obj => obj.id == this.event.training?.objectiveType)?.name
    },
    trainingType() {
      if (this.event.training?.trainingType === 'physical') return 'Физическое'
      else if (this.event.training?.trainingType === 'technical') return 'Техническое'
      else if (this.event.training?.trainingType === 'game') return 'Игровое'
      else if (this.event.training?.trainingType === 'tactical') return 'Тактическое'
      else if (this.event.training?.trainingType === 'theoretic') return 'Теоретическое'
      else if (this.event.training?.trainingType === 'psychological') return 'Психологическое'
      else return ''
    },
    place() {
      return this.getTrainingPlaceTypes.find(place => place.id === this.event.training?.placeType)?.name || ''
    },
    dateTime() {
      return this.$moment(this.event?.recurrences.match(/(\d{8}T\d{6}Z)/g)[0])
    },
    date() {
      return this.dateTime.format('DD.MM.YYYY')
    },
    weekdayName() {
      return this.$moment(this.dateTime).format('dddd')
    },
    startTime() {
      return this.dateTime.format('HH:mm')
    },
    endTime() {
      return this.dateTime.add(this.event.duration, 'minutes').format('HH:mm')
    },
    pageTitle() {
      let title = this.event.training?.objectType === 'group' ? 'Групповое ' : 'Индивидуальное'

      if (this.event.training?.trainingType === 'physical') title += ' физическое занятие'
      else if (this.event.training?.trainingType === 'technical') title += ' техническое занятие'
      else if (this.event.training?.trainingType === 'game') title += ' игровое занятие'
      else if (this.event.training?.trainingType === 'tactical') title += ' тактическое занятие'
      else if (this.event.training?.trainingType === 'theoretic') title += ' теоретическое занятие'
      else if (this.event.training?.trainingType === 'psychological') title += ' психологическое занятие'

      return title
    },
  },
  mounted() {
    this.loadTrainingPlaceTypes()
    if (this.event.training) this.getTrainingExercises()
  },
}
</script>

<style lang="scss" scoped>
.training-container {
  overflow: hidden;
}

.training-info__list {
  display: flex;
}

.training-info__item,
.training-date {
  position: relative;
  font-size: 16px;
  line-height: 22px;
  color: $blue02;
}

.training-info__item {
  padding-right: 16px;

  &::after {
    content: '•';
    position: absolute;
    text-align: center;
    width: 16px;
  }

  &:last-of-type {
    &::after {
      display: none;
    }
  }
}

.training-date {
  padding-left: 22px;
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.017 4.304h13.938c.01.201.026.392.026.583.002 2.095.004 4.19 0 6.286-.003 1.787-.982 2.802-2.765 2.814-2.855.019-5.709.015-8.563 0-1.525-.007-2.58-.933-2.62-2.437C-.03 9.153.017 6.752.017 4.304Zm3.623 1.93c-.485.013-.916.46-.912.95.003.53.494 1.01 1.007.982a.956.956 0 0 0 .898-.957c-.005-.566-.436-.99-.993-.975Zm7.593.995a.96.96 0 0 0-.913-.996c-.511-.024-.967.408-.982.93-.015.524.408.98.921.993a.94.94 0 0 0 .974-.927Zm-8.504 3.417a.954.954 0 0 0 .91 1.004c.503.03.98-.408 1-.92a.962.962 0 0 0-.907-1.008c-.501-.023-.976.415-1.003.924Zm5.215-3.44c.013-.496-.404-.94-.905-.964a.977.977 0 0 0-1.014.968c0 .487.438.926.938.938a.973.973 0 0 0 .981-.942Zm-.99 4.446c.483.028.987-.444 1-.938.015-.484-.4-.933-.903-.977-.512-.045-.974.367-1.014.904-.037.502.398.98.916 1.011ZM13.93 3.089H.066C-.23 1.544.773.129 2.294.057 3.896-.02 5.504.014 7.11.007c1.408-.004 2.816-.015 4.224.004 1.74.024 2.82 1.293 2.597 3.078Z' fill='%23525BBA'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left center;

  span {
    margin-right: 12px;

    &:last-of-type {
      margin-right: 0px;
    }
  }
}
</style>
