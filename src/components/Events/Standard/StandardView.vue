<template>
  <div class="d-flex">
    <left-menu>
      <training-sidebar-group v-if="event.group" :idGroup="event.group" />
      <training-sidebar-sportsman v-if="event.sportsman" :idSportsman="event.sportsman" />
    </left-menu>

    <div class="container training-container">
      <Header hideSearch />

      <div class="mt-16 mb-2 d-flex justify-space-between align-center">
        <div class="evaluate__wrapper">
          <wu-icon class="evaluate__title-icon" icon="timer" color="#FF4B6B"></wu-icon>
          <h1 class="evaluate__title">Норматив</h1>
        </div>

        <training-dropdown standard :idEvent="event.id" @deleteEvent="deleteEvent" />
      </div>
      <div class="mb-10 d-flex justify-space-between align-center">
        <ul class="training-info__list">
          <li class="training-info__item">{{ taskType }}</li>
          <li class="training-info__item">{{ place }}</li>
        </ul>

        <p class="training-date">
          <span>{{ date }}</span>
          <span>{{ weekdayName }}</span>
          <span>{{ startTime }} - {{ endTime }}</span>
        </p>
      </div>

      <div class="mb-4 d-flex justify-space-between align-center">
        <h2 class="h2 section-title">Программа тренировки</h2>
      </div>

      <training-plan :trainingPlan="trainingPlan" />

      <evaluation-form v-if="isStarted" class="evaluation" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'

import TrainingPlan from '@/components/Training/TrainingPlan.vue'
import TrainingSidebarGroup from '@/components/Training/TrainingSidebarGroup.vue'
import TrainingSidebarSportsman from '@/components/Training/TrainingSidebarSportsman.vue'
import TrainingDropdown from '@/components/Training/TrainingDropdown.vue'

import EvaluationForm from '@/components/Training/EvaluationForm.vue'

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
    TrainingPlan,
    TrainingSidebarGroup,
    TrainingSidebarSportsman,
    TrainingDropdown,
    EvaluationForm,
  },
  data: () => ({
    dialogDelete: false,
    trainingPlan: [],
  }),

  methods: {
    ...mapActions('events', ['loadTrainingPlaceTypes']),
    getStandardExercises() {
      this.$events.getStandardExercises(this.event.id, this.event.standard?.id).then(response => {
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
    ...mapGetters('events', ['getStandardTaskType', 'getTrainingPlaceTypes']),
    taskType() {
      return this.getStandardTaskType.find(obj => obj.id == this.event.standard?.taskType)?.name
    },
    place() {
      return this.getTrainingPlaceTypes.find(place => place.id === this.event.standard?.placeType)?.name || ''
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
    isStarted() {
      return this.$moment().diff(this.dateTime, 'hours') >= 0
    },
  },
  mounted() {
    this.loadTrainingPlaceTypes()
    if (this.event.standard) this.getStandardExercises()
  },
}
</script>

<style lang="sass" scoped>
.evaluate
    &__wrapper
        display: flex
        align-items: center

    &__title-icon
        margin-right: 10px

    &__title
        font-weight: normal
        font-size: 24px;
        line-height: 33px;
        color: $blue02;

.training-container
  overflow: hidden


.training-info__list
  display: flex

.training-info__item,
.training-date
  position: relative
  font-size: 16px
  line-height: 22px
  color: $blue02

.training-info__item
  padding-right: 16px
  &::after
    content: '•'
    position: absolute
    text-align: center
    width: 16px
  &:last-of-type
    &::after
      display: none

.training-date
  padding-left: 22px
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.017 4.304h13.938c.01.201.026.392.026.583.002 2.095.004 4.19 0 6.286-.003 1.787-.982 2.802-2.765 2.814-2.855.019-5.709.015-8.563 0-1.525-.007-2.58-.933-2.62-2.437C-.03 9.153.017 6.752.017 4.304Zm3.623 1.93c-.485.013-.916.46-.912.95.003.53.494 1.01 1.007.982a.956.956 0 0 0 .898-.957c-.005-.566-.436-.99-.993-.975Zm7.593.995a.96.96 0 0 0-.913-.996c-.511-.024-.967.408-.982.93-.015.524.408.98.921.993a.94.94 0 0 0 .974-.927Zm-8.504 3.417a.954.954 0 0 0 .91 1.004c.503.03.98-.408 1-.92a.962.962 0 0 0-.907-1.008c-.501-.023-.976.415-1.003.924Zm5.215-3.44c.013-.496-.404-.94-.905-.964a.977.977 0 0 0-1.014.968c0 .487.438.926.938.938a.973.973 0 0 0 .981-.942Zm-.99 4.446c.483.028.987-.444 1-.938.015-.484-.4-.933-.903-.977-.512-.045-.974.367-1.014.904-.037.502.398.98.916 1.011ZM13.93 3.089H.066C-.23 1.544.773.129 2.294.057 3.896-.02 5.504.014 7.11.007c1.408-.004 2.816-.015 4.224.004 1.74.024 2.82 1.293 2.597 3.078Z' fill='%23525BBA'/%3E%3C/svg%3E")
  background-repeat: no-repeat
  background-position: left center
  span
    margin-right: 12px
    &:last-of-type
      margin-right: 0px

.evaluation
    margin-bottom: 40px
</style>
