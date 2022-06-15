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
                <wu-input
                  v-model="trainer.user.lastName"
                  class="profile__information-input"
                  :class="{
                    'profile__information-input_error':
                      $v.trainer.user.lastName.$dirty && !$v.trainer.user.lastName.required,
                  }"
                  label="Фамилия"
                  @change="changeUserData"
                ></wu-input>
              </v-col>
              <v-col cols="4" class="profile__information-wrapper">
                <wu-input
                  v-model="trainer.user.firstName"
                  class="profile__information-input"
                  :class="{
                    'profile__information-input_error':
                      $v.trainer.user.firstName.$dirty && !$v.trainer.user.firstName.required,
                  }"
                  label="Имя"
                  @change="changeUserData"
                ></wu-input>
              </v-col>
              <v-col cols="4" class="profile__information-wrapper">
                <wu-input
                  v-model="trainer.user.patronymic"
                  class="profile__information-input"
                  :class="{
                    'profile__information-input_error':
                      $v.trainer.user.patronymic.$dirty && !$v.trainer.user.patronymic.required,
                  }"
                  label="Отчество"
                  @change="changeUserData"
                ></wu-input>
              </v-col>
              <v-col cols="4" class="profile__information-wrapper">
                <wu-input
                  class="profile__information-input profile__information-input--bday"
                  :class="{
                    'profile__information-input_error':
                      $v.trainer.user.birthDate.$dirty &&
                      (!$v.trainer.user.birthDate.required || !$v.trainer.user.birthDate.minLength),
                  }"
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
                  :items="getSportTypes"
                  itemValue="id"
                  itemText="title"
                  v-model="trainer.sportType"
                  @input="changeCoachData"
                ></wu-select>
              </v-col>
              <v-col cols="4" class="profile__information-wrapper">
                <wu-select
                  class="profile__information-input"
                  label="Спортивное звание"
                  :items="getSportRanks"
                  itemValue="id"
                  itemText="title"
                  outlined
                  v-model="trainer.user.sportRank"
                  @input="changeUserData"
                ></wu-select>
              </v-col>
              <v-col offset="4" cols="4" class="profile__information-wrapper">
                <wu-select
                  class="profile__information-input"
                  label="Категория"
                  :items="getCoachCategories"
                  itemValue="id"
                  itemText="title"
                  outlined
                  v-model="trainer.coachingCategories"
                  @input="changeCoachData"
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
                @change="changeUserData"
                readonly
              ></wu-input>

              <edit-social-media
                @click="changeUserData"
                v-model="trainer.user.whatsapp"
                :link="trainer.user.whatsapp"
                class="contacts__sm-input"
                name="whatsapp"
              />

              <edit-social-media
                @click="changeUserData"
                v-model="trainer.user.telegram"
                :link="trainer.user.telegram"
                class="contacts__sm-input"
                name="telegram"
              />
            </div>

            <div class="contacts__email">
              <wu-input
                v-model="trainer.user.email"
                class="contacts__email-input"
                :class="{
                  'profile__information-input_error':
                    $v.trainer.user.email.$dirty && (!$v.trainer.user.email.email || !$v.trainer.user.email.required),
                }"
                label="Почта"
                @change="changeUserData"
              ></wu-input>
            </div>

            <div class="contacts__sm">
              <edit-social-media
                @click="changeUserData"
                :link="trainer.user.vk"
                v-model="trainer.user.vk"
                class="contacts__sm-input"
                name="vk"
              />
            </div>
          </div>
        </section>

        <trainer-edit-educations />

        <trainer-edit-works />

        <trainer-edit-awards />

        <!-- <base-button @click="saveProfile()" class="profile__save-btn" label="Сохранить" /> -->
      </v-card>
    </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import { required, email, minLength } from 'vuelidate/lib/validators'

import moment from 'moment'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Profile/Sidebar.vue'
import EditSocialMedia from '@/components/Profile/EditSocialMedia.vue'

import TrainerEditEducations from '@/components/Profile/TrainerEditEducations.vue'
import TrainerEditWorks from '@/components/Profile/TrainerEditWorks.vue'
import TrainerEditAwards from '@/components/Profile/TrainerEditAwards.vue'

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ProfileEdit',
  directives: { mask },
  components: {
    LeftMenu,
    Header,
    Sidebar,
    EditSocialMedia,
    TrainerEditEducations,
    TrainerEditWorks,
    TrainerEditAwards,
  },
  data: () => ({
    avatar: null,
    trainerID: localStorage.getItem('trainerID'),
    trainer: null,
    trainerWork: [],
    trainerAwards: [],
    trainerEducations: [],
    text: '',

    rules: {
      date: value => moment(value, 'YYYY-MM-DD').isValid() || 'Неверный формат',

      email: value => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    },
  }),
  validations: {
    trainer: {
      user: {
        firstName: {
          required,
        },
        lastName: {
          required,
        },
        patronymic: {
          required,
        },
        email: {
          email,
          required,
        },
        birthDate: {
          required,
          minLength: minLength(10),
        },
      },
    },
    bday: {
      required,
      minLength: minLength(10),
    },
  },
  computed: {
    ...mapGetters('auth', ['getSportTypes', 'getCoachCategories', 'getSportRanks', 'profile']),
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
        //this.trainer.user.phone = val.replace(/([\(\)\-\ ])/g, '')
      },
    },
    edu() {
      return this.trainerEducations.concat(this.trainerWork)
    },
  },
  methods: {
    ...mapMutations('auth', ['SET_PROFILE']),
    changeUserData(val) {
      let key = Object.keys(this.trainer.user).find(key => this.trainer.user[key] === val)

      if (!this.$v.$invalid) {
        this.updateUser({ [key]: val })
      } else {
        this.trainer.user[key] = this.profile.user[key]
        this.notify({
          title: 'Ошибка',
          text: 'Обязательное поле или неверный формат',
          bg: '#FF4B6B',
          autoClose: 4000,
        })
      }
    },
    changeCoachData(val) {
      let key = Object.keys(this.trainer).find(key => this.trainer[key] === val)
      this.updateCoach({ [key]: val })
    },
    changeAvatar(avatar) {
      this.$users
        .updateUser(this.trainer.user.id, { avatar: avatar })
        .then(response => {
          this.trainer.user.avatar = response.avatar
        })
        .catch(error => {
          console.log(error)
        })
    },
    getProfile() {
      if (this.trainerID) {
        this.$coach
          .getCoach(this.trainerID)
          .then(response => {
            this.trainer = response
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    updateUser(payload) {
      this.$users.updateUser(this.trainer.user.id, payload).then(response => {
        this.SET_PROFILE({ user: response })
        this.notify({
          title: 'Успешно',
          text: `Данные успешно обновлены`,
          bg: '#64C048',
          autoClose: 4000,
        })
      })
    },
    updateCoach(payload) {
      this.$coach.updateCoach(this.trainer.id, payload).then(response => {})
    },
    saveProfile() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

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
          this.$router.push('/account/')
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

    &_error {
      &::v-deep {
        input {
          border: 1px solid #ff4949 !important;
        }
      }
    }
  }
}

.contacts {
  padding: 32px 21px;
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
</style>
