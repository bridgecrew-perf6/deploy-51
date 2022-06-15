<template>
  <div class="d-flex">
    <left-menu>
      <sidebar />
    </left-menu>

    <div class="container">
      <Header />

      <h1 class="h1 profile-title">Мой профиль</h1>

      <v-card class="profile">
        <section class="profile__header section">
          <div class="profile__avatar-wrapper">
            <v-img
              v-if="trainer.user.avatar"
              :src="trainer.user.avatar"
              width="140"
              height="140"
              class="profile__avatar"
            ></v-img>
            <v-img
              v-else
              :src="require('@/assets/images/svg/profile/avatar.svg')"
              width="140"
              height="140"
              class="profile__avatar profile__avatar--empty"
            ></v-img>
            <v-file-input
              @change="changeAvatar"
              v-model="avatar"
              class="profile__select-image"
              hide-details
              accept="image/*"
            >
            </v-file-input>
          </div>

          <div class="profile__information">
            <v-row>
              <v-col cols="4" class="profile__information-wrapper">
                <wu-input v-model="trainer.user.lastName" class="profile__information-input" label="Фамилия"></wu-input>
              </v-col>
              <v-col cols="4" class="profile__information-wrapper">
                <wu-input v-model="trainer.user.firstName" class="profile__information-input" label="Имя"></wu-input>
              </v-col>
              <v-col cols="4" class="profile__information-wrapper">
                <wu-input
                  v-model="trainer.user.patronymic"
                  class="profile__information-input"
                  label="Отчество"
                ></wu-input>
              </v-col>
              <v-col cols="4" class="profile__information-wrapper">
                <wu-input
                  class="profile__information-input profile__information-input--bday"
                  label="Дата рождения"
                  v-model="bday"
                  v-mask="'##.##.####'"
                  :rules="[rules.date]"
                ></wu-input>
              </v-col>
              <v-col cols="4" class="profile__information-wrapper">
                <wu-select
                  class="profile__information-input"
                  label="Специлизация"
                  outlined
                  :items="sportTypes"
                  itemValue="id"
                  itemText="title"
                  v-model="trainer.sportType"
                ></wu-select>
              </v-col>
              <v-col cols="4" class="profile__information-wrapper">
                <wu-select
                  class="profile__information-input"
                  label="Спортивное звание"
                  :items="sportTitles"
                  itemValue="id"
                  itemText="title"
                  outlined
                  v-model="trainer.sportTitle"
                ></wu-select>
              </v-col>
              <v-col offset="4" cols="4" class="profile__information-wrapper">
                <wu-select
                  class="profile__information-input"
                  label="Категория"
                  :items="coachCategories"
                  itemValue="id"
                  itemText="title"
                  outlined
                  v-model="trainer.coachingCategories"
                ></wu-select>
              </v-col>
            </v-row>
          </div>
        </section>

        <section class="profile__contacts section contacts">
          <h3 class="section-title">Контакты</h3>
          <div class="contacts__inner">
            <div class="contacts__phone">
              <wu-input
                v-model="phone"
                v-mask="'+# (###) ###-##-##'"
                class="contacts__phone-input"
                label="Телефон"
              ></wu-input>

              <edit-social-media :link="trainer.user.whatsapp" class="contacts__sm-input" name="whatsapp" />

              <edit-social-media :link="trainer.user.telegram" class="contacts__sm-input" name="telegram" />
            </div>

            <div class="contacts__email">
              <wu-input v-model="trainer.user.email" class="contacts__email-input" label="Почта"></wu-input>
            </div>

            <div class="contacts__sm">
              <edit-social-media :link="trainer.user.vk" class="contacts__sm-input" name="vk" />
            </div>
          </div>
        </section>

        <section class="profile__education section education">
          <h3 class="section-title">Образование и опыт</h3>

          <draggable class="education__list" :list="edu" handle=".education__handle">
            <div class="education__item" v-for="ed in edu" :key="ed.id">
              <svg
                class="education__handle"
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.135 4.443c1.03 0 1.865-.815 1.865-1.821S9.165.801 8.135.801 6.27 1.616 6.27 2.622s.835 1.821 1.865 1.821ZM8.135 10.618c1.03 0 1.865-.815 1.865-1.821s-.835-1.821-1.865-1.821-1.865.815-1.865 1.82c0 1.007.835 1.822 1.865 1.822ZM8.135 16.802c1.03 0 1.865-.816 1.865-1.822 0-1.005-.835-1.82-1.865-1.82s-1.865.815-1.865 1.82c0 1.006.835 1.822 1.865 1.822ZM1.865 4.443c1.03 0 1.866-.815 1.866-1.821S2.896.801 1.865.801C.835.8 0 1.616 0 2.622s.835 1.821 1.865 1.821ZM1.865 10.618c1.03 0 1.866-.815 1.866-1.821s-.835-1.821-1.866-1.821C.835 6.976 0 7.79 0 8.796c0 1.007.835 1.822 1.865 1.822ZM1.865 16.802c1.03 0 1.866-.816 1.866-1.822 0-1.005-.835-1.82-1.866-1.82-1.03 0-1.865.815-1.865 1.82 0 1.006.835 1.822 1.865 1.822Z"
                  fill="#B9CBE5"
                />
              </svg>
              <div class="education__item-content">
                <div class="education__item-row">
                  <wu-input
                    v-if="ed.type == 'edu'"
                    v-model="ed.name"
                    class="education__input education__input--title"
                    label="Наименование места работы / учебы"
                  ></wu-input>
                  <wu-input
                    v-else
                    v-model="ed.workName"
                    class="education__input education__input--title"
                    label="Наименование места работы / учебы"
                  ></wu-input>
                  <wu-select
                    class="education__select education__select--type"
                    itemValue="id"
                    itemText="label"
                    :items="select.educationsType"
                    label="Работа/обучение"
                    outlined
                    v-model="ed.type"
                  ></wu-select>
                  <wu-input
                    v-model="ed.startDate"
                    class="education__input education__input--date-start"
                    label="Дата начала"
                  ></wu-input>
                  <wu-input
                    v-model="ed.endDate"
                    class="education__input education__input--date-end"
                    label="Дата окончания"
                  ></wu-input>
                </div>

                <template v-if="ed.type == 'edu'">
                  <div class="education__item-row">
                    <wu-input
                      v-model="ed.faculty"
                      class="education__input education__input--studies"
                      label="Факультет"
                    ></wu-input>
                    <wu-select
                      class="education__select education__select--studies"
                      label="Образование"
                      :items="educationTypes"
                      itemValue="id"
                      itemText="title"
                      v-model="ed.educationType"
                      outlined
                    ></wu-select>
                  </div>
                  <div class="education__item-row">
                    <wu-input
                      v-model="ed.speciality"
                      class="education__input education__input--studies"
                      label="Специальность"
                    ></wu-input>
                    <wu-select
                      :items="educationFormats"
                      itemValue="id"
                      itemText="title"
                      v-model="ed.educationFormat"
                      class="education__select education__select--studies"
                      label="Форма образования"
                      outlined
                    ></wu-select>
                  </div>
                </template>

                <template v-else-if="ed.type === 'work'">
                  <div class="education__item-row">
                    <wu-input
                      v-model="ed.jobTitle"
                      class="education__input education__input--job"
                      label="Должность"
                    ></wu-input>
                  </div>
                </template>
              </div>
              <button class="education__remove" @click="removeEd(ed)">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m7.453 6.309 4.523 4.523a.803.803 0 0 1-1.133 1.133L6.33 7.455l-4.529 4.529a.803.803 0 0 1-1.134 0l-.005-.006a.803.803 0 0 1 0-1.134l4.511-4.511-4.529-4.53a.803.803 0 0 1 0-1.133L.651.663a.803.803 0 0 1 1.134 0l4.511 4.512 4.53-4.529a.803.803 0 0 1 1.133 0l.012.012a.803.803 0 0 1 0 1.133L7.453 6.31Z"
                    fill="#B9CBE5"
                  />
                </svg>
              </button>
            </div>
          </draggable>

          <button class="education__add-btn" @click="pushEd">+ Добавить место работы / учебы</button>
        </section>

        <section class="profile__awards section awards">
          <h3 class="section-title">Достижения</h3>

          <draggable class="awards__list" :list="trainerAwards" handle=".awards__handle">
            <div class="awards__item" v-for="award in trainerAwards" :key="award.id">
              <svg
                class="awards__handle"
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.135 4.443c1.03 0 1.865-.815 1.865-1.821S9.165.801 8.135.801 6.27 1.616 6.27 2.622s.835 1.821 1.865 1.821ZM8.135 10.618c1.03 0 1.865-.815 1.865-1.821s-.835-1.821-1.865-1.821-1.865.815-1.865 1.82c0 1.007.835 1.822 1.865 1.822ZM8.135 16.802c1.03 0 1.865-.816 1.865-1.822 0-1.005-.835-1.82-1.865-1.82s-1.865.815-1.865 1.82c0 1.006.835 1.822 1.865 1.822ZM1.865 4.443c1.03 0 1.866-.815 1.866-1.821S2.896.801 1.865.801C.835.8 0 1.616 0 2.622s.835 1.821 1.865 1.821ZM1.865 10.618c1.03 0 1.866-.815 1.866-1.821s-.835-1.821-1.866-1.821C.835 6.976 0 7.79 0 8.796c0 1.007.835 1.822 1.865 1.822ZM1.865 16.802c1.03 0 1.866-.816 1.866-1.822 0-1.005-.835-1.82-1.866-1.82-1.03 0-1.865.815-1.865 1.82 0 1.006.835 1.822 1.865 1.822Z"
                  fill="#B9CBE5"
                />
              </svg>

              <wu-input v-model="award.name" class="awards__input" label="Введите название достижения"></wu-input>

              <wu-select
                :items="awardTypes"
                v-model="award.type"
                itemValue="id"
                itemText="title"
                class="awards__select"
                outlined
                label="Тип  достижения"
              ></wu-select>

              <wu-input
                v-model="award.year"
                class="awards__input awards__input--year"
                label="Год  достижения"
              ></wu-input>

              <button class="awards__remove" @click="removeAward(award)">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m7.453 6.309 4.523 4.523a.803.803 0 0 1-1.133 1.133L6.33 7.455l-4.529 4.529a.803.803 0 0 1-1.134 0l-.005-.006a.803.803 0 0 1 0-1.134l4.511-4.511-4.529-4.53a.803.803 0 0 1 0-1.133L.651.663a.803.803 0 0 1 1.134 0l4.511 4.512 4.53-4.529a.803.803 0 0 1 1.133 0l.012.012a.803.803 0 0 1 0 1.133L7.453 6.31Z"
                    fill="#B9CBE5"
                  />
                </svg>
              </button>
            </div>
          </draggable>

          <button class="awards__add-btn" @click="pushAward()">+ Добавить достижение</button>
        </section>

        <base-button @click="saveProfile()" class="profile__save-btn" label="Сохранить" />
      </v-card>
    </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import draggable from 'vuedraggable'
import moment from 'moment'
import _ from 'lodash'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Profile/Sidebar.vue'
import EditSocialMedia from '@/components/Profile/EditSocialMedia.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProfileEdit',
  directives: { mask },
  components: {
    LeftMenu,
    Header,
    Sidebar,
    draggable,
    EditSocialMedia,
  },
  data: () => ({
    avatar: null,
    trainerID: localStorage.getItem('trainerID'),
    trainer: null,
    trainerWork: [],
    trainerAwards: [],
    trainerEducations: [],

    educations: [],

    select: {
      educationsType: [
        { id: 'edu', label: 'Место обучения' },
        { id: 'work', label: 'Место работы' },
      ],
    },
    sportTypes: [
      { id: 'FB', title: 'Футбол' },
      { id: 'HC', title: 'Хоккей' },
      { id: 'BB', title: 'Баскетбол' },
      { id: 'VB', title: 'Волейбол' },
      { id: 'TN', title: 'Теннис' },
    ],
    coachCategories: [
      { id: '1Q', title: 'Тренер первой квалификационной категории' },
      { id: '2Q', title: 'Тренер второй квалификационной категории' },
      { id: 'HQ', title: 'Тренер высшей квалификационной категории' },
      { id: 'HC', title: 'Заслуженный тренер России' },
    ],
    sportTitles: [
      { id: '3JR', title: 'III юношеский разряд' },
      { id: '2JR', title: 'II юношеский разряд' },
      { id: '2JR', title: 'I юношеский разряд' },
      { id: '3AR', title: 'III разряд' },
      { id: '2AR', title: 'II разряд' },
      { id: '2AR', title: 'I разряд' },
      { id: 'CTM', title: 'Кандидат в Мастера спорта' },
      { id: 'MOS', title: 'Мастер спорта' },
      { id: 'IMS', title: 'Мастер спорта международного класса' },
      { id: 'HMS', title: 'Заслуженный Мастер спорта' },
    ],
    awardTypes: [
      { id: 'RW', title: 'Награда' },
      { id: 'DP', title: 'Диплом' },
      { id: 'GR', title: 'Благодарность' },
      { id: 'DL', title: 'Грамота' },
    ],
    educationTypes: [
      { id: 'SVE', title: 'Средне-профессиональное образование' },
      { id: 'HEB', title: 'Высшее образование (бакалавриат)' },
      { id: 'HES', title: 'Высшее образование (специалитет)' },
      { id: 'HEM', title: 'Высшее образование (магистратура)' },
      { id: 'HSC', title: 'Профессиональное образование - Высшая школа тренеров' },
      { id: 'PRD', title: 'Повышение квалификации' },
      { id: 'PRT', title: 'Профессиональная переподготовка' },
    ],
    educationFormats: [
      { id: 'FT', title: 'Очная форма' },
      { id: 'EM', title: 'Заочная форма' },
      { id: 'PF', title: 'Очно-заочная форма' },
      { id: 'DF', title: 'Дистанционная форма' },
    ],
    rules: {
      date: value => moment(value, 'YYYY-MM-DD').isValid() || 'Неверный формат',

      email: value => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    },
  }),
  computed: {
    bday: {
      get() {
        return moment(this.trainer.user.birthDate).format('DD.MM.YYYY')
      },
      set(val) {
        if (moment(val, 'DD.MM.YYYY', true).isValid()) {
          this.trainer.user.birthDate = moment(val, 'DD.MM.YYYY').format('YYYY-MM-DD')
        }
      },
    },
    phone: {
      get() {
        return this.trainer.user.phone
      },
      set(val) {
        // eslint-disable-next-line
        this.trainer.user.phone = val.replace(/([\(\)\-\ ])/g, '')
      },
    },
    edu() {
      return this.trainerEducations.concat(this.trainerWork)
    },
  },
  methods: {
    changeAvatar(avatar) {
      this.$coach
        .updateAvatar(avatar)
        .then(response => {
          this.trainer.user.avatar = response.avatar
        })
        .catch(error => {
          console.log(error)
        })
    },
    pushAward() {
      this.trainerAwards.push({
        id: this.trainerAwards.length + 1,
        name: '',
        year: '',
        type: '',
        coach: this.trainerID,
        status: 'new',
      })
    },
    removeAward(award) {
      if (award.status !== 'new') {
        this.$coach
          .deleteAward(award.id)
          .then(response => {
            let idx = this.trainerAwards.findIndex(item => item.id === award.id)
            if (idx !== -1) this.trainerAwards.splice(idx, 1)
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        let idx = this.trainerAwards.findIndex(item => item.id === award.id)
        if (idx !== -1) this.trainerAwards.splice(idx, 1)
      }
    },
    createAward() {
      let newList = this.trainerAwards.filter(work => work.status === 'new')
      newList.forEach(item => {
        this.$coach
          .createAward(item)
          .then(response => {})
          .catch(error => {
            console.log(error)
          })
      })
    },
    pushEd() {
      this.trainerWork.push({
        id: this.edu.length + 1,
        type: 'work',
        status: 'new',
        coach: this.trainerID,
      })
    },
    createEd() {
      let newList = this.trainerWork.filter(work => work.status === 'new')
      newList.forEach(item => {
        if (item.type === 'work') {
          this.$coach
            .createWork(item)
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          this.$coach
            .creatEdu(item)
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
        }
      })
    },
    removeEd(ed) {
      if (ed.type === 'work' && ed.status != 'new') {
        this.$coach
          .deleteWork(ed.id)
          .then(response => {
            let idx = this.trainerWork.findIndex(item => item.id === ed.id)
            this.trainerWork.splice(idx, 1)
          })
          .catch(error => {
            console.log(error)
          })
      } else if (ed.type === 'edu' && ed.status != 'new') {
        this.$coach
          .deleteEdu(ed.id)
          .then(response => {
            let idx = this.trainerEducations.findIndex(item => item.id === ed.id)
            this.trainerEducations.splice(idx, 1)
          })
          .catch(error => {
            console.log(error)
          })
      } else if (ed.status == 'new') {
        let idx = this.trainerWork.findIndex(item => item.id === ed.id && item.workName == ed.workName)
        this.trainerWork.splice(idx, 1)
      }
    },

    getProfile() {
      if (this.trainerID) {
        this.$coach
          .getCoach(this.trainerID)
          .then(response => {
            this.trainer = response

            this.getWork()
            this.getAwards()
            this.getEducations()
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    getWork() {
      if (this.trainerID) {
        this.$coach
          .getCoachWork(this.trainerID)
          .then(response => {
            response.forEach(work => {
              work.type = 'work'
            })
            this.trainerWork = response
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    getAwards() {
      if (this.trainerID) {
        this.$coach
          .getCoachRewards(this.trainerID)
          .then(response => {
            this.trainerAwards = response
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    getEducations() {
      if (this.trainerID) {
        this.$coach
          .getCoachEducations(this.trainerID)
          .then(response => {
            response.forEach(edu => {
              edu.type = 'edu'
            })
            this.trainerEducations = response
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    saveProfile() {
      let payload = {
        user: {
          //phone: this.trainer.user.phone,
          firstName: this.trainer.user.firstName,
          lastName: this.trainer.user.lastName,
          patronymic: this.trainer.user.patronymic,
          birthDate: this.trainer.user.birthDate,
          email: this.trainer.user.email,
          vk: this.trainer.user.vk,
          telegram: this.trainer.user.telegram,
          whatsapp: this.trainer.user.whatsapp,
        },
        sportType: this.trainer.sportType,
        sportTitle: this.trainer.sportTitle,
        coachingCategories: this.trainer.coachingCategories,
      }
      this.$coach
        .updateCoach(this.trainer.id, payload)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })

      this.createEd()
      this.createAward()
    },
  },
  mounted() {
    this.getProfile()
  },
}
</script>

<style lang="scss" scoped>
.profile-title {
  margin-top: 10px;
  margin-bottom: 35px;
  padding-left: 22px;
  font-size: 20px;
  line-height: 27px;
  font-weight: normal;
  color: $blue02;
}

.section {
  border-bottom: 1px solid rgba(185, 203, 229, 0.5);
}

.profile {
  &::v-deep {
    margin-bottom: 40px;
    padding: 25px 20px 30px;
    background-color: #ffffff;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15) !important;
    border-radius: 28px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 7px;
  }

  &__avatar-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 152px;
    height: 152px;
    margin-right: 25px;
    border-radius: 50%;
    border: 2px solid $blue06;
  }

  &__avatar {
    max-width: 140px;
    min-height: 140px;
    border-radius: 50%;
    &--empty {
      background-color: $blue06;
    }
  }

  &__select-image {
    position: absolute;
    bottom: 0px;
    right: 4px;
    &::v-deep {
      margin: 0px;
      padding: 0px;
      .v-file-input__text {
        display: none;
      }
      .v-input__slot {
        margin: 0px;
        cursor: pointer;
        &::after,
        &::before {
          display: none;
        }
      }
      .v-input__prepend-outer {
        display: none;
      }

      .v-text-field__slot {
        width: 42px;
        height: 42px;
        background-color: #ffffff;
        border-radius: 50%;
        box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
        background-image: url('~@/assets/images/svg/profile/photo.svg');
        background-position: center;
        background-repeat: no-repeat;
      }
      .v-input__append-inner {
        display: none;
      }
    }
  }

  &__information {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 45px;
    padding-top: 25px;
  }

  &__information-wrapper {
  }

  &__information-input {
    &--bday {
      max-width: 110px;
    }
  }

  &__save-btn {
    display: block;
    margin-left: auto;
  }
}

.contacts,
.education {
  padding: 32px 21px;
}

.contacts {
  &__inner {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__phone {
    display: flex;
    align-items: flex-end;
  }

  &__phone-input {
    flex: 0 0 220px;
    margin-right: 20px;
  }

  &__email {
    flex: 0 0 245px;
  }
}

.education {
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

.awards {
  padding: 32px 21px 0;
  border: none;
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
