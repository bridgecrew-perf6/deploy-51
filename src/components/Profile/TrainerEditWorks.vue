<template>
  <section class="profile__work section work">
    <h3 class="section-title">Опыт</h3>

    <div class="work__item" v-for="work in works" :key="work.id">
      <div class="work__item-content">
        <div class="work__item-row">
          <wu-input
            v-model="work.workName"
            class="work__input work__input--title"
            label="Наименование места работы"
            @change="changeWorkData($event, work)"
          ></wu-input>
          <wu-input
            v-model="work.startDate"
            class="work__input work__input--date-start"
            label="Дата начала"
            @change="changeWorkData($event, work)"
            type="number"
            v-mask="'####-##-##'"
          ></wu-input>
          <wu-input
            v-model="work.endDate"
            class="work__input work__input--date-end"
            label="Дата окончания"
            @change="changeWorkData($event, work)"
            type="number"
            v-mask="'####-##-##'"
          ></wu-input>
        </div>

        <div class="work__item-row">
          <wu-input
            v-model="work.jobTitle"
            class="work__input work__input--job"
            label="Должность"
            @change="changeWorkData($event, work)"
          ></wu-input>
        </div>
      </div>
      <button class="work__remove" @click="deleteWork(work.id)">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m7.453 6.309 4.523 4.523a.803.803 0 0 1-1.133 1.133L6.33 7.455l-4.529 4.529a.803.803 0 0 1-1.134 0l-.005-.006a.803.803 0 0 1 0-1.134l4.511-4.511-4.529-4.53a.803.803 0 0 1 0-1.133L.651.663a.803.803 0 0 1 1.134 0l4.511 4.512 4.53-4.529a.803.803 0 0 1 1.133 0l.012.012a.803.803 0 0 1 0 1.133L7.453 6.31Z"
            fill="#B9CBE5"
          />
        </svg>
      </button>
    </div>

    <div v-if="showFormNewWork" class="work__item">
      <div class="work__item-content">
        <div class="work__item-row">
          <wu-input
            v-model="newWork.workName"
            class="work__input work__input--title"
            label="Наименование места работы"
            @change="checkNewWork"
          ></wu-input>
          <wu-input
            v-model="newWork.startDate"
            class="work__input work__input--date-start"
            label="Дата начала"
            @change="checkNewWork"
            type="number"
            v-mask="'####-##-##'"
          ></wu-input>
          <wu-input
            v-model="newWork.endDate"
            class="work__input work__input--date-end"
            label="Дата окончания"
            @change="checkNewWork"
            type="number"
            v-mask="'####-##-##'"
          ></wu-input>
        </div>

        <div class="work__item-row">
          <wu-input
            v-model="newWork.jobTitle"
            class="work__input work__input--job"
            label="Должность"
            @change="checkNewWork"
          ></wu-input>
        </div>
      </div>
      <button class="work__remove" @click="resetNewWork()">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m7.453 6.309 4.523 4.523a.803.803 0 0 1-1.133 1.133L6.33 7.455l-4.529 4.529a.803.803 0 0 1-1.134 0l-.005-.006a.803.803 0 0 1 0-1.134l4.511-4.511-4.529-4.53a.803.803 0 0 1 0-1.133L.651.663a.803.803 0 0 1 1.134 0l4.511 4.512 4.53-4.529a.803.803 0 0 1 1.133 0l.012.012a.803.803 0 0 1 0 1.133L7.453 6.31Z"
            fill="#B9CBE5"
          />
        </svg>
      </button>
    </div>

    <button class="work__add-btn" @click="showFormNewWork = true">+ Добавить место работы</button>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      works: [],
      newWork: {},
      showFormNewWork: false,
    }
  },
  methods: {
    checkNewWork() {
      if (!this.$v.$invalid) {
        this.createWork()
      }
    },
    createWork() {
      this.$coach.createWork(localStorage.getItem('trainerID'), this.newWork).then(response => {
        this.works.push(response)

        this.resetNewWork()

        this.notify({
          title: 'Успешно',
          text: `Место работы добавлено`,
          bg: '#64C048',
          autoClose: 4000,
        })
      })
    },
    deleteWork(idWork) {
      this.$coach.deleteWork(idWork).then(() => {
        let idx = this.works.findIndex(item => item.id === idWork)
        this.works.splice(idx, 1)

        this.notify({
          title: 'Успешно',
          text: `Место работы удалено`,
          bg: '#64C048',
          autoClose: 4000,
        })
      })
    },
    resetNewWork() {
      this.showFormNewWork = false
      this.newWork = {}
    },
    changeWorkData(val, work) {
      let key = Object.keys(work).find(key => work[key] === val)
      this.updateWork(work.coach, work.id, /* { [key]: val } */ work)
    },
    updateWork(idCoach, idWork, payload) {
      this.$coach.updateWork(idCoach, idWork, payload).then(response => {
        this.notify({
          title: 'Успешно',
          text: `Место работы обновлено`,
          bg: '#64C048',
          autoClose: 4000,
        })
      })
    },
    getWorks() {
      this.$coach.getCoachWork(localStorage.getItem('trainerID')).then(response => {
        this.works = response
      })
    },
  },
  validations: {
    newWork: {
      workName: {
        required,
      },
      startDate: {
        required,
      },
      endDate: {
        required,
      },
      jobTitle: {
        required,
      },
    },
  },
  mounted() {
    this.getWorks()
  },
}
</script>

<style lang="scss" scoped>
.work {
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
