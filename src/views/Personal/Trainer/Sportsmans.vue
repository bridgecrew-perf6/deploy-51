<template>
  <div class="d-flex">
    <left-menu>
      <sidebar />
    </left-menu>

    <div class="container">
      <Header />

      <h1 class="h1 profile-title">Мои спортсмены</h1>

      <v-card class="team">
        <div class="team__body">
          <div class="team__aside">
            <vue-custom-scrollbar class="team__scroll custom-scroll" :settings="scrollSettings">
              <persons class="team__team-list" :items="sportsmans" type="sportsman" />
            </vue-custom-scrollbar>
            <button @click="createSportsman" class="team__add-sportsman">+ Добавить спортсмена</button>
          </div>
          <sportsman v-if="!addSportsman" />
          <create-sportsman v-else />
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'

import Sidebar from '@/components/Profile/Sidebar.vue'

import Sportsman from '@/components/Profile/Sportsman.vue'
import CreateSportsman from '@/components/Profile/CreateSportsman.vue'

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
    CreateSportsman,
  },
  data() {
    return {
      sportsmans: [
        {
          id: 1,
          full_name: 'Ярасимов Юрий',
          age: 8,
          position_type: 'defender',
          avatar: null,
          team_number: 37,
          points: 3,
        },
        {
          id: 2,
          full_name: 'Двилянский Егор',
          age: 9,
          position_type: 'forward',
          avatar: null,
          team_number: 9,
          points: 5,
        },
        {
          id: 3,
          full_name: 'Докукин Никита',
          age: 8,
          position_type: 'goalie',
          avatar: null,
          team_number: 54,
          points: 2,
        },
        {
          id: 4,
          full_name: 'Иванов Кирилл',
          age: 8,
          position_type: 'defender',
          avatar: 'https://source.unsplash.com/120x120/?avatar',
          team_number: 18,
          points: 10,
        },
        {
          id: 5,
          full_name: 'Ярасимов Юрий',
          age: 8,
          position_type: 'defender',
          avatar: null,
          team_number: 37,
          points: 8,
        },
        {
          id: 6,
          full_name: 'Двилянский Егор',
          age: 9,
          position_type: 'forward',
          avatar: null,
          team_number: 9,
          points: 8,
        },
        {
          id: 7,
          full_name: 'Докукин Никита',
          age: 8,
          position_type: 'goalie',
          avatar: null,
          team_number: 54,
          points: 4,
        },
        {
          id: 8,
          full_name: 'Иванов Кирилл',
          age: 8,
          position_type: 'defender',
          avatar: 'https://source.unsplash.com/120x120/?avatar',
          team_number: 18,
          points: 4,
        },
        {
          id: 9,
          full_name: 'Ярасимов Юрий',
          age: 8,
          position_type: 'defender',
          avatar: null,
          team_number: 37,
          points: 9,
        },
        {
          id: 10,
          full_name: 'Двилянский Егор',
          age: 9,
          position_type: 'forward',
          avatar: null,
          team_number: 9,
          points: 7,
        },
        {
          id: 11,
          full_name: 'Докукин Никита',
          age: 8,
          position_type: 'goalie',
          avatar: null,
          team_number: 54,
          points: 2,
        },
        {
          id: 11,
          full_name: 'Иванов Кирилл',
          age: 8,
          position_type: 'defender',
          avatar: 'https://source.unsplash.com/120x120/?avatar',
          team_number: 18,
          points: 3,
        },
        {
          id: 13,
          full_name: 'Докукин Никита',
          age: 8,
          position_type: 'goalie',
          avatar: null,
          team_number: 54,
          points: 4,
        },
        {
          id: 14,
          full_name: 'Иванов Кирилл',
          age: 8,
          position_type: 'defender',
          avatar: 'https://source.unsplash.com/120x120/?avatar',
          team_number: 18,
          points: 5,
        },
        {
          id: 15,
          full_name: 'Ярасимов Юрий',
          age: 8,
          position_type: 'defender',
          avatar: null,
          team_number: 37,
          points: 6,
        },
        {
          id: 16,
          full_name: 'Двилянский Егор',
          age: 9,
          position_type: 'forward',
          avatar: null,
          team_number: 9,
          points: 7,
        },
        {
          id: 17,
          full_name: 'Докукин Никита',
          age: 8,
          position_type: 'goalie',
          avatar: null,
          team_number: 54,
          points: 8,
        },
        {
          id: 18,
          full_name: 'Иванов Кирилл',
          age: 8,
          position_type: 'defender',
          avatar: 'https://source.unsplash.com/120x120/?avatar',
          team_number: 18,
          points: 9,
        },
        {
          id: 19,
          full_name: 'Докукин Никита A',
          age: 8,
          position_type: 'goalie',
          avatar: null,
          team_number: 54,
          points: 10,
        },
      ],
      scrollSettings: {
        useBothWheelAxes: true,
        suppressScrollX: false,
        wheelPropagation: false,
      },
      addSportsman: false,
    }
  },
  methods: {
    createSportsman() {
      this.addSportsman = !this.addSportsman
    },
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

  &__body {
    display: flex;
    padding: 0;
  }

  &__aside {
    flex-shrink: 0;
    max-width: 295px;
    margin-right: 60px;
  }

  &__scroll {
    padding-left: 5px;
    padding-right: 5px;
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
