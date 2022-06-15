<template>
  <section class="profile__awards section awards">
    <h3 class="section-title">Достижения</h3>

    <div class="awards__item" v-for="award in awards" :key="award.id">
      <wu-input
        v-model="award.name"
        class="awards__input"
        label="Введите название достижения"
        @change="changeAwardData($event, award)"
      ></wu-input>

      <wu-select
        :items="getAwardTypes"
        v-model="award.type"
        itemValue="id"
        itemText="title"
        class="awards__select"
        outlined
        label="Тип  достижения"
        @input="changeAwardData($event, award)"
      ></wu-select>

      <wu-input
        type="number"
        v-model="award.year"
        class="awards__input awards__input--year"
        label="Год  достижения"
        @change="changeAwardData($event, award)"
        v-mask="'####'"
      ></wu-input>

      <button class="awards__remove" @click="deleteAward(award.id)">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m7.453 6.309 4.523 4.523a.803.803 0 0 1-1.133 1.133L6.33 7.455l-4.529 4.529a.803.803 0 0 1-1.134 0l-.005-.006a.803.803 0 0 1 0-1.134l4.511-4.511-4.529-4.53a.803.803 0 0 1 0-1.133L.651.663a.803.803 0 0 1 1.134 0l4.511 4.512 4.53-4.529a.803.803 0 0 1 1.133 0l.012.012a.803.803 0 0 1 0 1.133L7.453 6.31Z"
            fill="#B9CBE5"
          />
        </svg>
      </button>
    </div>

    <div v-if="showFormNewAward" class="awards__item">
      <wu-input
        v-model="newAward.name"
        class="awards__input"
        label="Введите название достижения"
        @change="checkNewAward"
      ></wu-input>

      <wu-select
        :items="getAwardTypes"
        v-model="newAward.type"
        itemValue="id"
        itemText="title"
        class="awards__select"
        outlined
        label="Тип  достижения"
        @input="checkNewAward"
      ></wu-select>

      <wu-input
        type="number"
        v-model="newAward.year"
        class="awards__input awards__input--year"
        label="Год  достижения"
        @change="checkNewAward"
        v-mask="'####'"
      ></wu-input>

      <button class="awards__remove" @click="resetNewAward()">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m7.453 6.309 4.523 4.523a.803.803 0 0 1-1.133 1.133L6.33 7.455l-4.529 4.529a.803.803 0 0 1-1.134 0l-.005-.006a.803.803 0 0 1 0-1.134l4.511-4.511-4.529-4.53a.803.803 0 0 1 0-1.133L.651.663a.803.803 0 0 1 1.134 0l4.511 4.512 4.53-4.529a.803.803 0 0 1 1.133 0l.012.012a.803.803 0 0 1 0 1.133L7.453 6.31Z"
            fill="#B9CBE5"
          />
        </svg>
      </button>
    </div>

    <button class="awards__add-btn" @click="showFormNewAward = true">+ Добавить достижение</button>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      awards: [],
      newAward: {},
      showFormNewAward: false,
    }
  },
  computed: {
    ...mapGetters('auth', ['getAwardTypes']),
  },
  methods: {
    checkNewAward() {
      if (!this.$v.$invalid) {
        this.createAward()
      }
    },
    createAward() {
      this.$coach.createAward(localStorage.getItem('trainerID'), this.newAward).then(response => {
        this.awards.push(response)

        this.resetNewAward()

        this.notify({
          title: 'Успешно',
          text: `Достижение добавлено`,
          bg: '#64C048',
          autoClose: 4000,
        })
      })
    },
    deleteAward(idAward) {
      this.$coach.deleteAward(idAward).then(() => {
        let idx = this.awards.findIndex(item => item.id === idAward)
        this.awards.splice(idx, 1)

        this.notify({
          title: 'Успешно',
          text: `Достижение удалено`,
          bg: '#64C048',
          autoClose: 4000,
        })
      })
    },
    resetNewAward() {
      this.showFormNewAward = false
      this.newAward = {}
    },
    changeAwardData(val, award) {
      let key = Object.keys(award).find(key => award[key] === val)
      this.updateAward(award.coach, award.id, /* { [key]: val } */ award)
    },
    updateAward(idCoach, idAward, payload) {
      this.$coach.updateAward(idCoach, idAward, payload).then(response => {
        this.notify({
          title: 'Успешно',
          text: `Достижение обновлено`,
          bg: '#64C048',
          autoClose: 4000,
        })
      })
    },
    getAwards() {
      this.$coach.getCoachAwards(localStorage.getItem('trainerID')).then(response => {
        this.awards = response
      })
    },
  },
  validations: {
    newAward: {
      name: {
        required,
      },
      type: {
        required,
      },
      year: {
        required,
      },
    },
  },
  mounted() {
    this.getAwards()
  },
}
</script>

<style lang="scss" scoped>
.awards {
  padding: 32px 21px 0;
  border-bottom: none !important;
  &__list {
    margin-bottom: 30px;
  }
  &__item {
    margin-bottom: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  &__handle {
    cursor: pointer;
    margin-right: 12px;
    margin-bottom: 10px;
  }

  &__input {
    flex-shrink: 0;
    flex-grow: 1;
    &--year {
      max-width: 100px;
      margin-right: 10px;
    }
  }

  &__select {
    max-width: 160px;
    margin: 0 21px;
  }
  &__remove {
    margin-bottom: 5px;
  }
  &__add-btn {
    margin-left: 30px;
    font-size: 16px;
    line-height: 22px;
    color: $blue02;
  }
}
</style>
