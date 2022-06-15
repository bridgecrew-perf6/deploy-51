<template>
  <div class="d-flex">
    <left-menu>
      <training-sidebar-sportsman
        v-if="this.$route.query.objectType === 'individual' || newEvent.sportsman"
        :idSportsman="this.$route.query.sportsman || newEvent.sportsman"
      />
      <training-sidebar-group
        edit
        @changeGroup="changeGroup"
        v-else-if="this.$route.query.objectType === 'group' || newEvent.group"
        :idGroup="this.$route.query.group || newEvent.group"
      />
    </left-menu>

    <div class="container create-gt__container">
      <Header hideSearch />

      <div class="create-gt__header d-flex justify-space-between align-center">
        <div class="create__title-wrapper">
          <wu-icon class="create__icon" icon="timer" color="#FF4B6B"></wu-icon>
          <h1 class="create__title h1">Норматив</h1>
        </div>

        <wu-button label="Создать событие" @click="createEvent()" :disabled="$v.$invalid" />
      </div>

      <training-workload standard :event="newEvent" v-model="newEvent" createMenu />

      <div class="create-gt__subheader d-flex justify-space-between align-center">
        <h2 class="h2">Программа тренировки</h2>

        <router-link :to="{ name: 'ExerciseLibrary' }"> Библиотека упражнений</router-link>
      </div>

      <training-plan-part
        @added="addStandardExercise"
        @removed="removeStandardExercise"
        type="preparation"
        :exercises="exercises"
      />
      <training-plan-part
        @added="addStandardExercise"
        @removed="removeStandardExercise"
        type="testing"
        :exercises="exercises"
      />
      <training-plan-part
        @added="addStandardExercise"
        @removed="removeStandardExercise"
        type="final"
        :exercises="exercises"
      />
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import _ from 'lodash'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'

import TrainingPlanPart from '@/components/Training/TrainingPlanPart.vue'
import TrainingSidebarGroup from '@/components/Training/TrainingSidebarGroup.vue'
import TrainingSidebarSportsman from '@/components/Training/TrainingSidebarSportsman.vue'

import TrainingWorkload from '@/components/Training/TrainingWorkload.vue'

import SmallSelect from '@/components/elements/SmallSelect.vue'

export default {
  props: {
    event: {
      type: Object,
    },
  },
  data() {
    return {
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
        {
          img: 'https://source.unsplash.com/560x560/?sport',
          title: 'Шина',
          count: 4,
        },
      ],
      newEvent: {
        recurencess: '',
        eventType: this.$route.query.eventType || '',
        date: this.$route.query.date || '',
        timeStart: this.$route.query.timeStart || '',
        timeEnd: this.$route.query.timeEnd || '',
        coach: parseInt(localStorage.getItem('trainerID')),

        standard: {
          taskType: '',
          placeType: parseInt(this.$route.query.placeType),
        },
      },

      exercises: [],
    }
  },
  components: {
    LeftMenu,
    Header,
    TrainingWorkload,
    SmallSelect,
    TrainingPlanPart,
    TrainingSidebarGroup,
    TrainingSidebarSportsman,
  },
  methods: {
    changeGroup(idGroup) {
      this.event.group = idGroup
    },
    createEvent() {
      let dateStart = this.$moment(`${this.newEvent.date} ${this.newEvent.timeStart}`, 'DD.MM.YYYY hh:mm'),
        dateEnd = this.$moment(`${this.newEvent.date} ${this.newEvent.timeEnd}`, 'DD.MM.YYYY hh:mm')

      let dateStartRFC = dateStart.utc().format('YYYYMMDDTHHmmss')

      let duration = this.$moment(dateEnd).diff(dateStart, 'minutes')

      let payload = {
        eventType: this.newEvent.eventType,
        recurrences: `DTSTART:${dateStartRFC}`,
        duration,
        coach: this.newEvent.coach,
      }

      if (this.$route.query.objectType === 'group') payload.group = this.$route.query?.group
      else if (this.$route.query.objectType === 'individual') payload.sportsman = this.$route.query?.sportsman

      if (this.$route.name === 'StandardCopyView') {
        if (this.event.group) payload.group = this.event.group
        else if (this.event.sportsman) payload.group = this.event.sportsman
      }

      this.$events
        .postEvents(payload)
        .then(response => {
          this.createStandard(response.id)
          this.notify({
            title: 'Событие успешно добавлено',
            text: `Событие #${response.id} создано`,
            bg: '#64C048',
            autoClose: 4000,
          })
        })
        .catch(error => {
          this.notify({
            title: 'Ошибка',
            text: error,
            bg: '#FF4B6B',
            autoClose: 4000,
          })
        })
    },
    createStandard(idEvent) {
      this.$events
        .createStandard(idEvent, this.newEvent.standard)
        .then(response => {
          this.notify({
            title: 'Норматив успешно создан',
            text: `Норматив #${response.id} создан`,
            bg: '#64C048',
            autoClose: 4000,
          })

          let idStandard = response.id

          this.addExercises(idEvent, idStandard)
        })
        .catch(error => {
          this.notify({
            title: 'Ошибка',
            text: error,
            bg: '#FF4B6B',
            autoClose: 4000,
          })
        })
    },
    addExercises(idEvent, idStandard) {
      let promises = []

      this.exercises.forEach(exercise => {
        promises.push(
          this.addExercise(idEvent, idStandard, {
            standardStage: exercise.standardStage,
            exercise: exercise.exercise.id,
          })
        )
      })

      Promise.all(promises)
        .then(response => {
          this.notify({
            title: 'Упражнения успешно добавлены',
            text: `Норматив полностью создан`,
            bg: '#64C048',
            autoClose: 4000,
          })
          this.$router.push({ name: 'CalendarMonth' })
        })
        .catch(error => {
          this.notify({
            title: 'Ошибка',
            text: `Ошибка при добавлении упражнений ${error}`,
            bg: '#FF4B6B',
            autoClose: 4000,
          })
        })
    },
    addExercise(idEvent, idStandard, payload) {
      return this.$events.createStandardExercises(idEvent, idStandard, payload)
    },
    addStandardExercise(ex, stage) {
      this.exercises.push({
        standardStage: stage,
        exercise: ex,
      })
    },
    removeStandardExercise(ex) {
      this.exercises = _.reject(
        this.exercises,
        this.exercises.find(e => e === ex.element && e.standardStage === ex.element.standardStage)
      )
    },
    copyInfo() {
      let dateTime = {
        date: '',
        timeStart: '',
        timeEnd: '',
      }
      this.newEvent = { ...this.event, ...dateTime }
      this.getExercisesForCopy(this.event.id, this.event.standard.id)
    },
    getExercisesForCopy(idEvent, idTraining) {
      this.$events.getStandardExercises(idEvent, idTraining).then(response => {
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

            this.exercises = response
          })
        }
      })
    },
  },
  validations: {
    newEvent: {
      eventType: { required },

      date: { required },
      timeStart: { required },
      timeEnd: { required },

      coach: { required },

      standard: {
        taskType: { required },
        placeType: { required },
      },
    },
    exercises: {
      preparationRequired() {
        return this.exercises.filter(ex => ex.standardStage === 'preparation').length > 0 ? true : false
      },
      mainRequired() {
        return this.exercises.filter(ex => ex.standardStage === 'testing').length > 0 ? true : false
      },
      finalRequired() {
        return this.exercises.filter(ex => ex.standardStage === 'final').length > 0 ? true : false
      },
    },
  },
  mounted() {
    if (this.$route.name === 'StandardCopyView') this.copyInfo()
  },
}
</script>

<style lang="sass" scoped>
/* Select position types */
.group-list__select
  width: 100%
  max-width: 180px

  &::v-deep
    .v-select__selections
      padding-left: 13px

    &.v-select--is-menu-active
      border-bottom-left-radius: 0
      border-bottom-right-radius: 0
      background-color: #fff


.group-list__menu
  .v-select-list
    padding: 0px
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15)
    background-color: #fff

    &::v-deep
      .v-list-item
        padding: 10px 13px
        min-height: auto
        position: relative

        &.v-list-item--active
          &::before
            background-color: transparent

          .v-list-item__title
            color: $blue02

        &::after
          display: none

        &:hover
          &::before
            background-color: #ECF6FF !important
            opacity: 1


      .v-list-item__content
        padding: 4px 0

      .v-list-item__title
        line-height: 19px
        color: $blue04

.group-list__select-image
  margin-right: 8px
  position: relative
  z-index: 2

.group-list__select-title
  font-weight: 500
  font-size: 14px
  line-height: 19px
  color: $blue02
  position: relative
  z-index: 2
/* End Select position types */

/* Alphabet sort */
.group-list__alphabet-sort
  padding: 6px
  color: $blue05
/* End Alphabet sort */


.group-list
  max-width: 320px
  margin: 0 auto
  padding-top: 32px

.group-list__header
  display: flex
  margin-bottom: 32px

.group-list__header-image
  display: inline-block
  max-width: 48px
  max-width: 48px
  width: 100%
  height: auto
  margin-right: 28px
  z-index: 1

.group-list__header-wrapper
  color: $blue02
  z-index: 1

.group-list__header-name
  font-weight: 500

.group-list__header-desc
  font-size: 14px !important
  line-height: 19px
  font-weight: normal


.group-list__filters
  display: flex
  justify-content: space-between
  align-items: center
  padding: 9px 5px
  border-top: 1px solid #ECF6FF
  border-bottom: 1px solid #ECF6FF


.group-list__list
  &::v-deep
    padding: 15px 0

    .v-list-item
      min-height: auto
      margin-bottom: 15px

      &:last-child
        margin-bottom: 0px

      &::after
        display: none

.group-list__sportsman-avatar-wrapper
  margin-top: 0px !important
  margin-bottom: 0px !important
  overflow: visible
  position: relative

.group-list__sportsman-avatar
  &::v-deep
    .v-responsive__content
      border: 2px solid rgba(255, 255, 255, 0.5)
      border-radius: 50%


.group-list__sportsman-avatar--type
  &::v-deep
    .v-image__image.v-image__image--cover
      background-size: auto
      background-color: $blue02

.group-list__sportsman-number
  position: absolute
  bottom: -1px
  left: -5px

  width: 24px

  font-weight: 700
  font-size: 14px
  line-height: 16px
  text-align: center
  color: #fff
  background-color: #464EA3
  border: 1px solid rgba(255, 255, 255, 0.5)
  border-radius: 4px


.group-list__sportsman-content
  padding: 0px

.group-list__sportsman-name
  font-weight: 600
  font-size: 14px
  line-height: 19px
  color: $blue02

.group-list__sportsman-subtitle
  font-size: 12px
  line-height: 20px
  color: $blue02 !important


.create-gt__header
  margin: 50px 0 45px

.create__title-wrapper
  display: flex
  align-items: center


.create__title
  position: relative
  line-height: 36px
  color: $blue02

.create__icon
  margin-right: 10px


.create-gt__subheader
  margin-bottom: 15px

  h2
    color: $blue02
    font-weight: normal

  a
    position: relative
    padding-left: 25px
    font-weight: 500
    color: $blue05

    &::after
      content: ''
      position: absolute
      top: 50%
      left: 0px
      width: 16px
      height: 15px
      transform: translateY(-50%)
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='15' viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.784 10.135C.887 9.59-.062 8.558.004 7.113c.04-.924.354-1.79 1.162-2.254.715-.411 1.562-.594 2.344-.876 0-.545-.122-1.258.027-1.91C3.81.888 4.944.03 6.161.019 9.14-.01 12.117.003 15.096.01c.566.001.912.352.905.851-.008.482-.369.805-.95.806-2.783.006-5.565 0-8.348.008-.289.002-.596.025-.862.123-.535.195-.782.634-.776 1.19A1.2 1.2 0 0 0 6 4.127c.246.055.505.067.757.067 2.626.004 5.25.002 7.876.003.157 0 .314-.008.47.005.588.05.905.373.88.885-.023.478-.35.78-.91.79-.78.016-1.56.004-2.379.004v2.51c.64 0 1.279-.007 1.918.002.253.003.518-.003.756.069.38.115.652.363.615.813-.032.413-.21.728-.658.765-.522.045-1.049.056-1.574.07-.332.01-.664.003-1.06.003v1.689c-.667-.327-1.27-.56-1.804-.9-.554-.353-1.018-.322-1.558.011-.512.315-1.076.546-1.697.852v-1.594c-.892 0-1.727-.054-2.55.02-.498.044-.868.666-.865 1.19.002.52.437 1.078.958 1.182.266.053.546.056.818.056 2.9.003 5.8 0 8.7.003.215 0 .431.005.643.038.44.066.638.373.658.78.02.423-.213.713-.622.806-.263.06-.544.059-.816.059-2.9.004-5.8.005-8.7.001-2.496 0-3.803-1.754-3.072-4.17ZM7.568 5.95c-.081-.027-.135-.058-.188-.058-1.467-.003-2.933-.021-4.4.006-.748.014-1.233.51-1.271 1.19-.037.645.389 1.25 1.035 1.268 1.596.045 3.194.015 4.823.015l.001-2.42Z' fill='%2395B0DA'/%3E%3C/svg%3E")
      background-repeat: no-repeat
      background-position: center

/* All */
.section-title
  font-weight: normal
  color: $blue02
  margin-bottom: 16px

.create-gt__container
  padding-bottom: 56px
  overflow: hidden
/* End All */
</style>
