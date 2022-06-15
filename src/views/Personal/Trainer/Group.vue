<template>
  <div class="d-flex">
    <left-menu>
      <sidebar />
    </left-menu>

    <div class="container">
      <Header />

      <h1 class="h1 profile-title">Мои команды</h1>

      <v-card class="team">
        <div class="team__head">
          <div class="team__avatar-wrapper">
            <v-img
              src="https://source.unsplash.com/140x140/?portraits"
              width="100"
              height="100"
              class="team__avatar"
            ></v-img>
          </div>
          <div class="team__content">
            <div class="team__header">
              <h2 class="team__name">{{ group.name }} (НП-2)</h2>

              <button class="team__edit-btn">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#a)" fill="#95B0DA">
                    <path
                      d="M11.653.088c.957-.233 1.628 0 2.211.696.648.773 1.666 1.35 2.03 2.22.355.848.09 1.955.092 2.948.003 2.748.003 5.495 0 8.243C15.985 15.47 15.455 16 14.17 16c-4.143.003-8.285.004-12.429 0-1.19-.001-1.738-.55-1.74-1.751-.005-4.164-.003-8.328 0-12.491C.004.564.554.024 1.755.014 2.346.009 2.936.013 3.618.013v1.405c.002.93-.006 1.86.01 2.79.01.496.206.875.777.876 2.156.007 4.312.01 6.468-.002.66-.004.77-.497.777-1.016.013-1.098.004-2.198.004-3.297l-.001-.681Zm-8.73 14.404h10.145c0-1.499.037-2.952-.014-4.403-.028-.81-.58-1.314-1.415-1.323a324.516 324.516 0 0 0-7.286 0c-.839.009-1.38.495-1.414 1.324-.059 1.45-.016 2.903-.016 4.402Z"
                    />
                    <path d="M8.769 3.594V.044h1.365v3.55H8.77Z" />
                  </g>
                  <defs>
                    <clipPath id="a"><path fill="#fff" d="M0 0h16.08v16H0z" /></clipPath>
                  </defs>
                </svg>
              </button>
            </div>

            <ul class="team__info-list">
              <li class="team__info-item">
                <img src="@/assets/images/svg/profile/team.svg" alt="" class="team__info-icon" />
                {{ group.sportsmans.length }} спортсмена
              </li>
              <li class="team__info-item">
                <img src="@/assets/images/svg/profile/calendar.svg" alt="" class="team__info-icon" />
                Возраст 8-9 лет
              </li>
              <li class="team__info-item">
                <img src="@/assets/images/svg/profile/training.svg" alt="" class="team__info-icon" />
                2 год подготовки
              </li>
              <li class="team__info-item">
                <img src="@/assets/images/svg/profile/place.svg" alt="Местоположение" class="team__info-icon" />
                г. Иркутск
              </li>
            </ul>
          </div>
        </div>

        <div class="team__body">
          <div class="team__aside">
            <vue-custom-scrollbar class="team__scroll custom-scroll" :settings="scrollSettings">
              <persons class="team__team-list" :items="sportsmans" @selectPlayer="selectSportsman" type="sportsman" />
            </vue-custom-scrollbar>
            <button class="team__add-sportsman">+ Добавить спортсмена</button>
          </div>

          <sportsman v-if="selectedSportsman" :sportsman="selectedSportsman" />
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import moment from 'moment'

import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'

import Sidebar from '@/components/Profile/Sidebar.vue'
import Sportsman from '@/components/Profile/Sportsman.vue'

import Persons from '@/components/Persons.vue'

export default {
  props: ['profile'],
  components: {
    vueCustomScrollbar,
    LeftMenu,
    Header,
    Sidebar,
    Persons,
    Sportsman,
  },
  data() {
    return {
      group: null,
      sportsmans: [],
      selectedSportsman: null,
      scrollSettings: {
        useBothWheelAxes: true,
        suppressScrollX: false,
        wheelPropagation: false,
      },
    }
  },
  computed: {
    ...mapGetters('events', ['getUtils']),
    utils() {
      return this.getUtils
    },
  },
  methods: {
    ...mapActions('events', ['loadUtils']),
    getGroup() {
      this.$groups
        .getGroup(this.$route.params.id)
        .then(response => {
          this.group = response
          this.group.sportsmans.forEach(sportsman => {
            let data = {
              id: sportsman.id,
              full_name: `${sportsman.user.lastName} ${sportsman.user.firstName}`,
              age: this.sportsmanAge(sportsman.user.birthDate),
              position_type: this.utils.positionTypes.find(type => type.id === sportsman.positionType).slug,
              avatar: sportsman.user.avatar,
              team_number: sportsman.teamNumber,
            }

            this.sportsmans.push(data)
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    selectSportsman(player) {
      let sportsman = this.group.sportsmans.find(sportsman => sportsman.id === player.id)

      sportsman.positionType = this.utils.positionTypes.find(type => type.id === sportsman.positionType)

      this.selectedSportsman = sportsman
    },
    sportsmanAge(bday) {
      return moment().diff(bday, 'years')
    },
  },
  mounted() {
    this.loadUtils()
    this.getGroup()
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

.team {
  &::v-deep {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15) !important;
    border-radius: 28px;
  }

  &__head {
    display: flex;
    align-items: flex-start;
    padding: 0 30px 18px;
    margin-bottom: 32px;
    border-bottom: 1px solid #dce5f2;
    border-radius: 0px !important;
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

  &__body {
    display: flex;
    padding: 0 30px;
  }

  &__aside {
    flex-shrink: 0;
    max-width: 295px;
    margin-right: 60px;
  }

  &__scroll {
    padding-left: 5px;
    padding-right: 5px;
    min-height: 500px;
    max-height: 545px;

    margin-bottom: 25px;
  }

  &__team-list {
    &::v-deep {
      .persons__list {
        padding: 0px;
      }
      .v-list-item {
        position: relative;
        padding: 7px 12px;
        border: 2px solid transparent;
        border-radius: 12px;
        &:last-child {
          margin-bottom: 0px;
        }
        &--active {
          border-color: #ecf6ff;
          &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 20px;
            width: 28px;
            height: 28px;
            background-image: url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='14' cy='14' r='14' transform='rotate(90 14 14)' fill='%2395B0DA'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.6163 9.04017C16.1229 8.5426 16.9442 8.5426 17.4508 9.04017L21.7314 13.2445C21.9908 13.4994 22.1174 13.8352 22.1111 14.1692C22.1162 14.5017 21.9896 14.8358 21.7313 15.0895L17.4507 19.2938C16.9441 19.7914 16.1228 19.7914 15.6162 19.2938C15.1096 18.7963 15.1096 17.9895 15.6162 17.492L19.0015 14.167L15.6163 10.842C15.1097 10.3445 15.1097 9.53775 15.6163 9.04017Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.28228 9.04017C8.78888 8.5426 9.61022 8.5426 10.1168 9.04017L14.3974 13.2445C14.6568 13.4994 14.7834 13.8352 14.7771 14.1692C14.7822 14.5017 14.6556 14.8358 14.3973 15.0895L10.1167 19.2938C9.61014 19.7914 8.78879 19.7914 8.28219 19.2938C7.7756 18.7963 7.7756 17.9895 8.28219 17.492L11.6675 14.167L8.28228 10.842C7.77569 10.3445 7.77569 9.53775 8.28228 9.04017Z' fill='white'/%3E%3C/svg%3E%0A");
            background-repeat: no-repeat;
            background-position: center;
            transform: translateY(-50%);
          }
        }
      }
      .v-ripple__container {
        display: none;
      }
    }
  }

  &__add-sportsman {
    font-size: 16px;
    line-height: 22px;

    color: $blue02;
  }
}
</style>
