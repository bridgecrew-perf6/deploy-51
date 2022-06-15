<template>
  <section class="profile__education section education">
    <h3 class="section-title">Образование</h3>

    <div class="education__item" v-for="education in educations" :key="education.id">
      <div class="education__item-content">
        <div class="education__item-row">
          <wu-input
            v-model="education.name"
            class="education__input education__input--title"
            label="Наименование места учебы"
            @change="changeEducationData($event, education)"
          ></wu-input>
          <wu-input
            v-model="education.startDate"
            class="education__input education__input--date-start"
            label="Дата начала"
            @change="changeEducationData($event, education)"
            type="number"
            v-mask="'####-##-##'"
          ></wu-input>
          <wu-input
            v-model="education.endDate"
            class="education__input education__input--date-end"
            label="Дата окончания"
            @change="changeEducationData($event, education)"
            type="number"
            v-mask="'####-##-##'"
          ></wu-input>
        </div>

        <div class="education__item-row">
          <wu-input
            v-model="education.faculty"
            class="education__input education__input--studies"
            label="Факультет"
            @change="changeEducationData($event, education)"
          ></wu-input>
          <wu-select
            class="education__select education__select--studies"
            label="Образование"
            :items="getEducationTypes"
            itemValue="id"
            itemText="title"
            v-model="education.educationType"
            outlined
            @input="changeEducationData($event, education)"
          ></wu-select>
        </div>
        <div class="education__item-row">
          <wu-input
            v-model="education.speciality"
            class="education__input education__input--studies"
            label="Специальность"
            @change="changeEducationData($event, education)"
          ></wu-input>
          <wu-select
            :items="getEducationFormats"
            itemValue="id"
            itemText="title"
            v-model="education.educationFormat"
            class="education__select education__select--studies"
            label="Форма образования"
            outlined
            @input="changeEducationData($event, education)"
          ></wu-select>
        </div>
      </div>
      <button class="education__remove" @click="deleteEducation(education.id)">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m7.453 6.309 4.523 4.523a.803.803 0 0 1-1.133 1.133L6.33 7.455l-4.529 4.529a.803.803 0 0 1-1.134 0l-.005-.006a.803.803 0 0 1 0-1.134l4.511-4.511-4.529-4.53a.803.803 0 0 1 0-1.133L.651.663a.803.803 0 0 1 1.134 0l4.511 4.512 4.53-4.529a.803.803 0 0 1 1.133 0l.012.012a.803.803 0 0 1 0 1.133L7.453 6.31Z"
            fill="#B9CBE5"
          />
        </svg>
      </button>
    </div>

    <div v-if="showFormNewEducation" class="education__item">
      <div class="education__item-content">
        <div class="education__item-row">
          <wu-input
            v-model="newEducation.name"
            class="education__input education__input--title"
            label="Наименование места учебы"
            @change="checkNewEducation"
          ></wu-input>
          <wu-input
            v-model="newEducation.startDate"
            class="education__input education__input--date-start"
            label="Дата начала"
            @change="checkNewEducation"
            type="number"
            v-mask="'####-##-##'"
          ></wu-input>
          <wu-input
            v-model="newEducation.endDate"
            class="education__input education__input--date-end"
            label="Дата окончания"
            @change="checkNewEducation"
            type="number"
            v-mask="'####-##-##'"
          ></wu-input>
        </div>

        <div class="education__item-row">
          <wu-input
            v-model="newEducation.faculty"
            class="education__input education__input--studies"
            label="Факультет"
            @change="checkNewEducation"
          ></wu-input>
          <wu-select
            class="education__select education__select--studies"
            label="Образование"
            :items="getEducationTypes"
            itemValue="id"
            itemText="title"
            v-model="newEducation.educationType"
            outlined
            @input="checkNewEducation"
          ></wu-select>
        </div>
        <div class="education__item-row">
          <wu-input
            v-model="newEducation.speciality"
            class="education__input education__input--studies"
            label="Специальность"
            @change="checkNewEducation"
          ></wu-input>
          <wu-select
            :items="getEducationFormats"
            itemValue="id"
            itemText="title"
            v-model="newEducation.educationFormat"
            class="education__select education__select--studies"
            label="Форма образования"
            outlined
            @input="checkNewEducation"
          ></wu-select>
        </div>
      </div>
      <button class="education__remove" @click="resetNewEducation()">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m7.453 6.309 4.523 4.523a.803.803 0 0 1-1.133 1.133L6.33 7.455l-4.529 4.529a.803.803 0 0 1-1.134 0l-.005-.006a.803.803 0 0 1 0-1.134l4.511-4.511-4.529-4.53a.803.803 0 0 1 0-1.133L.651.663a.803.803 0 0 1 1.134 0l4.511 4.512 4.53-4.529a.803.803 0 0 1 1.133 0l.012.012a.803.803 0 0 1 0 1.133L7.453 6.31Z"
            fill="#B9CBE5"
          />
        </svg>
      </button>
    </div>

    <button class="education__add-btn" @click="showFormNewEducation = true">+ Добавить место учебы</button>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      educations: [],
      newEducation: {},
      showFormNewEducation: false,
    }
  },
  computed: {
    ...mapGetters('auth', ['getEducationTypes', 'getEducationFormats']),
  },
  methods: {
    checkNewEducation() {
      if (!this.$v.$invalid) {
        this.createEducation()
      }
    },
    createEducation() {
      this.$coach.createEducation(localStorage.getItem('trainerID'), this.newEducation).then(response => {
        this.educations.push(response)

        this.resetNewEducation()

        this.notify({
          title: 'Успешно',
          text: `Образование добавлено`,
          bg: '#64C048',
          autoClose: 4000,
        })
      })
    },
    deleteEducation(idEducation) {
      this.$coach.deleteEducation(idEducation).then(() => {
        let idx = this.educations.findIndex(item => item.id === idEducation)
        this.educations.splice(idx, 1)

        this.notify({
          title: 'Успешно',
          text: `Образование удалено`,
          bg: '#64C048',
          autoClose: 4000,
        })
      })
    },
    resetNewEducation() {
      this.showFormNewEducation = false
      this.newEducation = {}
    },
    changeEducationData(val, education) {
      let key = Object.keys(education).find(key => education[key] === val)
      this.updateEducation(education.coach, education.id, /* { [key]: val } */ education)
    },
    updateEducation(idCoach, idEducation, payload) {
      this.$coach.updateEducation(idCoach, idEducation, payload).then(response => {
        this.notify({
          title: 'Успешно',
          text: `Образование обновлено`,
          bg: '#64C048',
          autoClose: 4000,
        })
      })
    },
    getEducations() {
      this.$coach.getCoachEducations(localStorage.getItem('trainerID')).then(response => {
        this.educations = response
      })
    },
  },
  validations: {
    newEducation: {
      name: {
        required,
      },
      startDate: {
        required,
      },
      endDate: {
        required,
      },
      faculty: {
        required,
      },
      educationType: {
        required,
      },
      speciality: {
        required,
      },
      educationFormat: {
        required,
      },
    },
  },
  mounted() {
    this.getEducations()
  },
}
</script>

<style lang="scss" scoped>
.education {
  padding: 32px 21px;
  &__list {
    margin-bottom: 30px;
  }

  &__item {
    margin-bottom: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  &__item-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  &__item-row {
    width: 100%;
    flex: 0 0 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__handle {
    margin-top: 25px;
    margin-right: 15px;
  }

  &__input {
    &--title {
      flex-grow: 1;
      margin-right: 21px;
    }
    &--date-start,
    &--date-end {
      max-width: 95px;
    }
    &--date-start {
      margin-right: 21px;
    }
    &--studies {
      flex-grow: 1;
      margin-right: 21px;
    }
    &--job {
      flex-grow: 1;
    }
  }

  &__select {
    &--type {
      max-width: 185px;
      margin-right: 21px;
    }
    &--studies {
      max-width: 245px;
    }
  }

  &__remove {
    margin-top: 25px;
    margin-left: 10px;
  }

  &__add-btn {
    margin-left: 30px;
    font-size: 16px;
    line-height: 22px;
    color: $blue02;
  }
}
</style>
