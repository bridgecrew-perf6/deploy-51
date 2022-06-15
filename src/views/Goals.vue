<template>
  <div class="d-flex goals">
    <left-menu>
      <div class="goals__all-team"
           :class="{'goals__all-team_active': selectedPlayerId === 'all'}"
           @click="selectedPlayerId = 'all'">
        <div class="goals__all-team-content">
          <div class="goals__all-team-icon">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="27" fill="#464EA3" stroke="#B9CBE5" stroke-width="2"/>
              <circle cx="24.222" cy="21.6107" r="4.61067" fill="white"/>
              <circle cx="34.5967" cy="22.7637" r="3.458" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M29.4098 30.7692C29.4096 30.7695 29.4094 30.7698 29.4092 30.77C29.4299 30.7904 29.4506 30.811 29.4713 30.8317C31.2002 32.5605 32.9289 35.4417 32.9294 37.7469C32.9297 37.7469 32.9301 37.7469 32.9305 37.7469C32.9302 35.4416 31.2014 32.5603 29.4725 30.8314C29.4516 30.8105 29.4307 30.7898 29.4098 30.7692ZM31.1383 29.237C32.154 30.2605 33.1409 31.5849 33.8873 32.9946C34.6264 34.3908 35.2357 36.0709 35.2358 37.7468C39.531 37.7362 41.001 37.6036 41.001 35.9032C41.001 34.059 39.7043 31.7537 38.4075 30.3706C37.1107 28.9874 35.814 28.5264 34.0851 28.5264C32.9569 28.5264 32.0183 28.7165 31.1383 29.237Z"
                    fill="white"/>
              <path
                  d="M29.9847 30.8317C28.2557 29.1027 26.5267 28.5264 24.2215 28.5264C21.9163 28.5264 20.2048 29.0846 18.458 30.8317C16.7112 32.5788 15 35.4424 15 37.7477C15 40.053 17.3056 40.0538 24.2215 40.0534H24.2219C31.1374 40.0531 33.4427 40.053 33.4427 37.7477C33.4427 35.4424 31.7137 32.5607 29.9847 30.8317Z"
                  fill="white"/>
            </svg>
          </div>
          <p class="goals__all-team-title">Вся команда</p>
        </div>
        <div class="goals__all-team-icon" v-if="selectedPlayerId === null">
          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14.5576" r="14" transform="rotate(90 14 14.5576)" fill="#B9CBE5"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14.6163 9.59779C15.1229 9.10022 15.9442 9.10022 16.4508 9.59779L20.7314 13.8022C20.9907 14.0569 21.1173 14.3927 21.1111 14.7265C21.1163 15.0591 20.9897 15.3933 20.7313 15.6471L16.4507 19.8515C15.9441 20.349 15.1228 20.349 14.6162 19.8515C14.1096 19.3539 14.1096 18.5472 14.6162 18.0496L18.0015 14.7246L14.6163 11.3997C14.1097 10.9021 14.1097 10.0954 14.6163 9.59779Z"
                  fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.28229 9.59779C7.78889 9.10022 8.61023 9.10022 9.11683 9.59779L13.3974 13.8022C13.6567 14.0569 13.7833 14.3927 13.7771 14.7265C13.7823 15.0591 13.6557 15.3933 13.3973 15.6471L9.11674 19.8515C8.61015 20.349 7.7888 20.349 7.2822 19.8515C6.77561 19.3539 6.77561 18.5472 7.2822 18.0496L10.6675 14.7246L7.28229 11.3997C6.7757 10.9021 6.7757 10.0954 7.28229 9.59779Z"
                  fill="white"/>
          </svg>
        </div>
      </div>
      <menu-filtering
          class="goals__filter"
          @filter="sortAlphabetCurrent = $event">
        <template #left>
          <filter-select :sortSportsmans="sortSportsmans" @selectedSortSportsmas="selectedSortSportsmas = $event"/>
        </template>
      </menu-filtering>
      <persons :items="filter"
               :selectedPlayerId="selectedPlayerId"
               @selectPlayer="selectPlayer"
               type="sportsman"
               playerChoice/>
    </left-menu>

    <div class="container">
      <Header/>
      <div class="goals__top">
        <div class="goals__top-icon">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="6" fill="#B9CBE5"/>
            <rect width="33.6" height="33.6" rx="6" fill="#95B0DA"/>
          </svg>
        </div>
        <h2 class="goals__top-title">Цели команды</h2>
      </div>
      <Progress class="goals__progress"/>
      <team-goals/>
      <Achievements class="goals__achievements"/>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue';
import Persons from '@/components/Persons.vue';
import FilterSelect from "@/components/library/FilterSelect";
import MenuFiltering from '@/components/MenuFiltering.vue';
import Header from '@/components/Header.vue';
import Progress from "@/components/Goals/Progress";
import Achievements from "@/components/Goals/Achievements";
import TeamGoals from "@/components/Goals/TeamGoals";

export default {
  name: 'Goals',
  components: {
    LeftMenu,
    Persons,
    FilterSelect,
    MenuFiltering,
    Header,
    Progress,
    Achievements,
    TeamGoals
  },
  data() {
    return {
      sortAlphabetCurrent: 0,
      group: {
        img: require('@/assets/images/groups/img-group02.png'),
        slug: 'np2',
        name: 'НП-2',
        description: '8-9 лет (2 год подготовки) ',
        sportsmans: [
          {
            id: 1,
            full_name: 'Ярасимов Юрий',
            age: 8,
            position_type: 'defender',
            avatar: null,
            team_number: 37,
          },
          {
            id: 2,
            full_name: 'Двилянский Егор',
            age: 9,
            position_type: 'forward',
            avatar: null,
            team_number: 9,
          },
          {
            id: 3,
            full_name: 'Докукин Никита',
            age: 8,
            position_type: 'goalie',
            avatar: null,
            team_number: 54,
          },
          {
            id: 4,
            full_name: 'Иванов Кирилл',
            age: 8,
            position_type: 'defender',
            avatar: 'https://source.unsplash.com/120/?avatar',
            team_number: 18,
          },
          {
            id: 5,
            full_name: 'Ярасимов Юрий',
            age: 8,
            position_type: 'defender',
            avatar: null,
            team_number: 37,
          },
          {
            id: 6,
            full_name: 'Двилянский Егор',
            age: 9,
            position_type: 'forward',
            avatar: null,
            team_number: 9,
          },
          {
            id: 7,
            full_name: 'Докукин Никита',
            age: 8,
            position_type: 'goalie',
            avatar: null,
            team_number: 54,
          },
          {
            id: 8,
            full_name: 'Иванов Кирилл',
            age: 8,
            position_type: 'defender',
            avatar: 'https://source.unsplash.com/120/?avatar',
            team_number: 18,
          },
          {
            id: 9,
            full_name: 'Ярасимов Юрий',
            age: 8,
            position_type: 'defender',
            avatar: null,
            team_number: 37,
          },
          {
            id: 10,
            full_name: 'Двилянский Егор',
            age: 9,
            position_type: 'forward',
            avatar: null,
            team_number: 9,
          },
          {
            id: 11,
            full_name: 'Докукин Никита',
            age: 8,
            position_type: 'goalie',
            avatar: null,
            team_number: 54,
          },
          {
            id: 12,
            full_name: 'Иванов Кирилл',
            age: 8,
            position_type: 'defender',
            avatar: 'https://source.unsplash.com/120/?avatar',
            team_number: 18,
          },
          {
            id: 13,
            full_name: 'Докукин Никита',
            age: 8,
            position_type: 'goalie',
            avatar: null,
            team_number: 54,
          },
          {
            id: 14,
            full_name: 'Иванов Кирилл',
            age: 8,
            position_type: 'defender',
            avatar: 'https://source.unsplash.com/120/?avatar',
            team_number: 18,
          },
          {
            id: 15,
            full_name: 'Ярасимов Юрий',
            age: 8,
            position_type: 'defender',
            avatar: null,
            team_number: 37,
          },
          {
            id: 16,
            full_name: 'Двилянский Егор',
            age: 9,
            position_type: 'forward',
            avatar: null,
            team_number: 9,
          },
          {
            id: 17,
            full_name: 'Докукин Никита',
            age: 8,
            position_type: 'goalie',
            avatar: null,
            team_number: 54,
          },
          {
            id: 18,
            full_name: 'Иванов Кирилл',
            age: 8,
            position_type: 'defender',
            avatar: 'https://source.unsplash.com/120/?avatar',
            team_number: 18,
          },
        ],
      },
      sortSportsmans: [
        {
          id: 'all',
          icon: require('@/assets/images/svg/positionTypes/all-select.svg'),
          title: 'Все игроки',
        },
        {
          id: 'non-goalies',
          icon: require('@/assets/images/svg/positionTypes/non-goalies-select.svg'),
          title: 'Полевые игроки',
        },
        {
          id: 'goalies',
          icon: require('@/assets/images/svg/positionTypes/goalies-select.svg'),
          title: 'Вратари',
        },
      ],
      selectedSortSportsmas: 'all',
      selectedPlayerId: 'all'
    }
  },
  computed: {
    filter() {
      if (this.selectedSortSportsmas === 'non-goalies')
        return this.group.sportsmans
            .filter(x => x.position_type === 'forward' || x.position_type === 'defender')
            .concat()
            .sort((a, b) =>
                this.sortAlphabetCurrent == 0
                    ? a.full_name.localeCompare(b.full_name)
                    : b.full_name.localeCompare(a.full_name)
            )
      else if (this.selectedSortSportsmas === 'goalies')
        return this.group.sportsmans
            .filter(x => x.position_type === 'goalie')
            .concat()
            .sort((a, b) =>
                this.sortAlphabetCurrent == 0
                    ? a.full_name.localeCompare(b.full_name)
                    : b.full_name.localeCompare(a.full_name)
            )
      else
        return this.group.sportsmans
            .concat()
            .sort((a, b) =>
                this.sortAlphabetCurrent == 0
                    ? a.full_name.localeCompare(b.full_name)
                    : b.full_name.localeCompare(a.full_name)
            )
    },
  },
  methods: {
    sortAlphabet() {
      this.sortAlphabetCurrent =
          this.sortAlphabetCurrent < this.sortAlphabetSettings.length - 1
              ? ++this.sortAlphabetCurrent
              : (this.sortAlphabetCurrent = 0)
    },
    selectPlayer(id) {
      this.selectedPlayerId = id
      console.log(id)
    }
  }
}
</script>

<style scoped lang="scss">
.goals {
  &__top {
    margin-top: 40px;
    display: flex;
    align-items: center;
  }

  &__top-icon {
    width: 36px;
    height: 36px;
  }

  &__top-title {
    margin-left: 10px;
    color: $blue02;
    font-size: 24px;
    font-weight: 400;
  }

  &__progress {
    margin-top: 36px;
  }

  &__achievements {
    margin-top: 40px;
  }

  &__all-team {
    width: 100%;
    height: 75px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &_active {
      padding: 5px 20px 0 27px;
      background-color: #ECF6FF;
    }
  }

  &__all-team-content {
    display: flex;
    align-items: center;
  }

  &__all-team-title {
    margin-left: 10px;
    color: $blue02;
    font-size: 16px;
    font-weight: 500;
  }

  &__filter {
    margin-top: 19px;
    border-top: 1px solid #DCE5F2;
  }
}
</style>
