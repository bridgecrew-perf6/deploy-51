<template>
  <v-stepper v-model="step" class="training-plan__stepper">
    <v-stepper-items>
      <v-stepper-content step="1">
        <season-training-plan-calendar :group="group" @nextStep="nextStep($event)" @changeGroup="changeGroup($event)" />
      </v-stepper-content>

      <v-stepper-content step="2">
        <season-training-plan-targets :group="group" @nextStep="nextStep($event)" @prevStep="prevStep($event)" />
      </v-stepper-content>

      <v-stepper-content step="3">
        <season-training-plan-constructor :group="group" @nextStep="nextStep($event)" @prevStep="prevStep($event)" />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import SeasonTrainingPlanCalendar from '@/components/SeasonTrainingPlan/SeasonTrainingPlanCalendar.vue'
import SeasonTrainingPlanTargets from '@/components/SeasonTrainingPlan/SeasonTrainingPlanTargets.vue'
import SeasonTrainingPlanConstructor from '@/components/SeasonTrainingPlan/SeasonTrainingPlanConstructor.vue'

export default {
  data() {
    return {
      step: 1,
      group: {},
    }
  },
  components: {
    SeasonTrainingPlanCalendar,
    SeasonTrainingPlanTargets,
    SeasonTrainingPlanConstructor,
  },
  computed: {},
  methods: {
    nextStep() {
      this.step += 1
    },
    prevStep() {
      this.step -= 1
    },
    changeGroup(group) {
      this.group = group
    },
  },
}
</script>

<style lang="scss" scoped>
.training-plan__stepper {
  &::v-deep {
    border-radius: 0px;
    background-color: transparent;
    box-shadow: none;
    .v-stepper__content {
      padding: 0px;
    }
  }
}
</style>
