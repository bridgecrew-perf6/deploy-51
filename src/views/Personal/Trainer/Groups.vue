<template>
  <div class="d-flex">
    <left-menu>
      <sidebar />
    </left-menu>

    <div class="container">
      <Header />

      <h1 class="h1 profile-title">Мои команды</h1>

      <v-card class="teams">
        <div class="teams-empty" v-if="!groups.length">
          <h2 class="teams-empty__title">
            <svg width="30" height="27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="10.639" cy="5.7" rx="5.32" ry="5.2" fill="#95B0DA" />
              <ellipse cx="22.61" cy="7" rx="3.99" ry="3.9" fill="#95B0DA" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m16.626 16.029.074.071c1.994 1.95 3.99 5.2 3.99 7.799 0-2.6-1.995-5.85-3.99-7.8l-.074-.07Zm1.995-1.728a18.404 18.404 0 0 1 3.173 4.239c.852 1.574 1.555 3.469 1.556 5.359 4.954-.012 6.65-.162 6.65-2.08 0-2.08-1.497-4.68-2.993-6.24-1.496-1.559-2.992-2.079-4.987-2.079-1.302 0-2.384.214-3.4.8Z"
                fill="#95B0DA"
              />
              <path
                d="M17.29 16.1c-1.995-1.95-3.99-2.6-6.65-2.6s-4.634.63-6.65 2.6C1.974 18.07 0 21.3 0 23.9c0 2.6 2.66 2.6 10.64 2.6s10.64 0 10.64-2.6-1.995-5.85-3.99-7.8Z"
                fill="#95B0DA"
              />
            </svg>
            Здесь пока что ничего нет
          </h2>
          <p class="teams-empty__text">Добавьте свою первую команду через форму ниже</p>
        </div>
        <ul class="teams__list">
          <li v-for="(group, index) in groups" :key="index" class="teams__item">
            <v-card class="teams__card">
              <div class="teams__avatar-wrapper">
                <v-img
                  src="https://source.unsplash.com/140x140/?portraits"
                  width="100"
                  height="100"
                  class="teams__avatar"
                ></v-img>
              </div>
              <div class="teams__content">
                <div class="teams__header">
                  <h2 class="teams__name">
                    {{ group.name }}
                    <router-link :to="{ name: 'PersonalTrainerGroup', params: { id: group.id } }" class="teams__link"
                      >редактировать состав</router-link
                    >
                  </h2>

                  <button class="teams__edit-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 15.896c.011-.027.026-.055.034-.084l1.36-4.755c.015-.05.044-.1.079-.134 2.6-2.608 5.201-5.217 7.805-7.824.19-.19.435-.254.688-.278.573-.053 1.094.126 1.574.432.682.434 1.208 1.022 1.51 1.805.171.445.214.9.044 1.358-.06.164-.147.306-.271.429-2.588 2.572-5.174 5.15-7.762 7.724a.334.334 0 0 1-.134.074L.155 15.964c-.03.009-.06.022-.09.034H0v-.102Zm2.431-1.462c.013-.003.03-.005.046-.01.596-.183 1.193-.366 1.79-.552a.194.194 0 0 0 .089-.067c.178-.222.209-.482.157-.755-.144-.75-.836-1.44-1.563-1.56-.261-.044-.51-.021-.728.155a.318.318 0 0 0-.096.14c-.139.436-.275.875-.41 1.313-.05.159-.098.318-.144.468.444.125.676.463.859.868Z"
                        fill="#95B0DA"
                      />
                      <path
                        d="M16 2.682c-.03.16-.048.325-.089.484-.127.496-.372.92-.723 1.275-.379.385-.761.766-1.142 1.149-.01.01-.019.017-.034.029.038-.123.083-.24.108-.36.096-.459.008-.891-.19-1.305a3.46 3.46 0 0 0-.605-.863c-.323-.346-.665-.665-1.082-.88-.592-.307-1.202-.399-1.842-.185l-.033.001.549-.55c.225-.227.447-.458.677-.679A2.724 2.724 0 0 1 13.31.014c.02-.002.042-.009.063-.014h.278l.062.015c.163.031.33.043.486.093.851.273 1.444.832 1.713 1.735.046.15.06.31.088.465v.374Z"
                        fill="#95B0DA"
                      />
                    </svg>
                  </button>
                </div>

                <ul class="teams__info-list">
                  <li class="teams__info-item">
                    <img src="@/assets/images/svg/profile/team.svg" alt="" class="teams__info-icon" />
                    {{ group.sportsmans.length }} спортсмена
                  </li>
                  <li class="teams__info-item">
                    <img src="@/assets/images/svg/profile/calendar.svg" alt="" class="teams__info-icon" />
                    Возраст 8-9 лет
                  </li>
                  <li class="teams__info-item">
                    <img src="@/assets/images/svg/profile/training.svg" alt="" class="teams__info-icon" />
                    2 год подготовки
                  </li>
                  <li class="teams__info-item">
                    <img src="@/assets/images/svg/profile/place.svg" alt="Местоположение" class="teams__info-icon" />
                    {{ group.city }}
                  </li>
                </ul>
              </div>
            </v-card>
          </li>
          <li class="teams__item">
            <create-team v-show="addNewGroup" />
          </li>
        </ul>

        <button class="teams__add-btn" @click="addNewGroup = !addNewGroup">+ Добавить команду</button>
      </v-card>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'

import Sidebar from '@/components/Profile/Sidebar.vue'
import CreateTeam from '@/components/Profile/CreateTeam.vue'

export default {
  data() {
    return {
      trainerID: localStorage.getItem('trainerID'),
      addNewGroup: false,
      groups: [],
    }
  },
  components: {
    LeftMenu,
    Header,
    Sidebar,
    CreateTeam,
  },
  methods: {
    getGroups() {
      if (this.trainerID) {
        this.$groups
          .getGroups({ coach: this.trainerID })
          .then(response => {
            this.groups = response
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
  },
  mounted() {
    this.getGroups()
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

.teams {
  &::v-deep {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15) !important;
    border-radius: 28px;
  }
  &-empty {
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__title {
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 24px;
      line-height: 33px;

      color: $blue05;
      svg {
        vertical-align: sub;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: $blue05;
    }
  }

  &__list {
  }

  &__item {
    margin-bottom: 20px;
  }

  &__card {
    &::v-deep {
      display: flex;
      align-items: flex-start;
      padding: 20px 23px;
      background-color: #ffffff;
      border-radius: 28px;
    }
  }

  &__avatar-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 110px;
    height: 110px;
    margin-right: 25px;
    border-radius: 50% !important;
    border: 2px solid $blue06;
  }

  &__avatar {
    max-width: 100px;
    min-height: 100px;
    border-radius: 50%;
  }

  &__content {
    width: 100%;
    padding-top: 20px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  &__name {
    font-size: 20px;
    line-height: 27px;
    color: $blue02;
  }

  &__link {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;

    color: $blue05 !important;
  }

  &__info-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__info-item {
    font-size: 16px;
    line-height: 22px;
    color: $blue02;
  }

  &__info-icon {
    margin-right: 7px;
  }

  &__add-btn {
    margin-left: 35px;
    font-size: 16px;
    line-height: 22px;
    color: $blue02;
  }
}
</style>
