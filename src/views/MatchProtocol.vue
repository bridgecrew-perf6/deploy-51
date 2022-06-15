<template>
  <div class="d-flex match-score">
    <left-menu class="match-score__left-menu">
      <div class="match-score__left-menu-wrapper" ref="leftMenu">
        <div class="match-score__all-btn">
          <div class="match-score__all-btn-content">
            <p class="match-score__all-btn-title">Учавствовашие спортсмены</p>
          </div>

        </div>
        <menu-filtering
            class="match-score__filter"
            @filter="sortAlphabetCurrent = $event">
          <template #left>
            <div style="display: flex; align-items: center">
              <filter-select
                  :sortSportsmans="sortSportsmans"
                  @selectedSortSportsmas="selectedSortSportsmas = $event"/>
            </div>
          </template>
        </menu-filtering>
        <persons
            :items="filter"
            type="sportsman"
            matchProtocol
            @togglePlayer="togglePlayer"
        />
      </div>
    </left-menu>
    <div class="container match-score__container">
      <Header hideSearch/>
      <bottom-header
          class="create-event__bottom-header"
          title="Анализ матча">
        <template #icon>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" rx="6" fill="#B9CBE5"/>
            <rect width="31.7333" height="31.7333" rx="6" fill="#95B0DA"/>
          </svg>
        </template>
        <template #btns>
          <div class="create-event__header-btns">
            <base-button class="create-event__header-btn" label="Сохранить"/>
          </div>
        </template>
      </bottom-header>
      <div class="match-score__text">
        <p>Дать подробную оценку</p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M0 5.77543C0.354291 5.27522 0.816134 5.18544 1.3792 5.33935C1.71451 5.42913 2.06248 5.46761 2.40412 5.51891C2.75208 5.57021 2.80269 5.48685 2.91025 5.1662C3.08106 4.66599 3.28352 4.1786 3.5176 3.70405C3.60617 3.52448 3.79597 3.38981 3.96046 3.26155C4.27047 3.02427 4.25782 2.77417 3.90352 2.61384C3.43535 2.40222 2.96086 2.197 2.46738 1.97896C2.95453 1.24147 3.60617 0.766914 4.39067 0.459093C5.51681 0.0230119 6.69356 -0.0603564 7.87664 0.0358378C8.72441 0.10638 9.55952 0.266704 10.401 0.38855C10.4516 0.394963 10.5022 0.427028 10.5528 0.433441C10.8944 0.491157 10.9704 0.677133 10.8944 1.01702C10.6414 2.09439 10.4199 3.17818 10.1985 4.26197C10.1479 4.50566 10.034 4.58262 9.78728 4.57621C8.9838 4.55697 8.18665 4.57621 7.38317 4.56979C6.4405 4.56338 5.74457 4.95457 5.34599 5.84597C4.8715 6.86563 4.397 7.87888 3.93516 8.89212C3.77067 9.25766 3.88454 9.44364 4.2768 9.45646C4.71966 9.46287 5.1562 9.45646 5.63702 9.45646C5.4662 10.1491 5.31436 10.8096 5.13089 11.4637C5.0866 11.624 4.92844 11.7459 4.86517 11.8293C5.10558 12.4513 5.33967 13.0541 5.56743 13.6505C5.70661 14.0161 5.92804 14.3367 6.29499 14.4457C6.71887 14.5676 7.18071 14.6958 7.61725 14.6574C8.64849 14.5612 9.21789 13.9006 9.30013 12.8425C9.31911 12.5988 9.30013 12.3551 9.30013 12.0729C9.14197 12.0729 8.99013 12.0665 8.83196 12.0729C8.52196 12.0986 8.37645 11.9639 8.33849 11.6433C8.25624 10.8673 8.15501 10.0978 8.05379 9.3282C7.99052 8.85364 7.92726 8.80875 7.44011 8.80875C6.54173 8.80875 5.64967 8.80875 4.72599 8.80875C4.74497 8.7318 4.74497 8.67408 4.77027 8.62278C5.16252 7.76344 5.5611 6.90411 5.95968 6.04477C6.22539 5.48043 6.68724 5.23033 7.28194 5.23033C9.69871 5.23033 12.1092 5.23674 14.5259 5.24315C15.3231 5.24315 15.8735 5.62793 15.981 6.32694C16.0317 6.63476 15.9684 6.96182 15.9368 7.27606C15.8925 7.65442 15.8102 8.03279 15.7659 8.41115C15.7343 8.70615 15.5951 8.80875 15.3041 8.80234C14.0261 8.79593 12.7545 8.79593 11.4765 8.79593C10.9957 8.79593 10.9261 8.86006 10.9261 9.34744C10.9261 10.0721 10.9261 10.8032 10.9261 11.5278C10.9261 11.9832 10.8438 12.0665 10.3946 12.0665C10.2681 12.0665 10.1416 12.0665 10.0087 12.0665C9.9581 12.4641 9.93912 12.8489 9.8632 13.2209C9.5785 14.7023 8.53461 15.4718 7.06051 15.3243C5.87743 15.2025 5.12456 14.651 4.82088 13.4325C4.71966 13.0285 4.4919 12.6629 4.30843 12.2333C4.087 12.3936 3.93516 12.5026 3.78965 12.618C3.6125 12.7527 3.44801 12.7527 3.27719 12.5988C2.46106 11.8741 1.63859 11.1559 0.835114 10.4184C0.727561 10.3222 0.676948 10.1298 0.645315 9.97591C0.613682 9.78994 0.632662 9.59113 0.638989 9.39875C0.651642 9.02679 0.695928 8.66126 0.272045 8.44322C0.145512 8.37909 0.0885727 8.16746 0 8.02637C0 7.27606 0 6.52574 0 5.77543Z"
              fill="#464EA3"/>
          <path
              d="M10.8425 4.54967C11.1082 3.48512 11.3676 2.4334 11.6396 1.34961C12.5127 1.7408 13.468 2.04862 14.2272 2.72839C14.3601 2.85024 14.4676 3.03621 14.5119 3.20936C14.6195 3.63903 14.6891 4.08152 14.7776 4.54967C13.4237 4.54967 12.1268 4.54967 10.8425 4.54967Z"
              fill="#464EA3"/>
          <path
              d="M0.688599 4.5812C0.789825 3.70904 1.11248 3.01645 1.83372 2.5483C1.89066 2.50982 1.99821 2.50341 2.0678 2.52906C2.4474 2.68297 2.82067 2.84971 3.14333 2.99721C2.83965 3.60002 2.54862 4.17719 2.21964 4.83131C1.77678 4.76077 1.25799 4.6774 0.688599 4.5812Z"
              fill="#464EA3"/>
        </svg>
        <p>Иванов Кирилл, 8 лет, защитник</p>
      </div>
      <match-broadcast class="match-score__match-broadcast"/>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue';
import MenuFiltering from '@/components/MenuFiltering.vue';
import Persons from '@/components/Persons.vue';
import Header from '@/components/Header.vue';
import BottomHeader from '@/components/BottomHeader.vue';
import FilterSelect from "@/components/library/FilterSelect";

import MatchBroadcast from "@/components/Broadcast/MatchBroadcast";

export default {
  name: 'StrikerScore',
  components: {
    LeftMenu,
    Persons,
    MenuFiltering,
    Header,
    BottomHeader,
    FilterSelect,
    MatchBroadcast,
  },
  data() {
    return {
      fixdeMenu: true,
      sortAlphabetCurrent: 0,
      persons: [
        {
          full_name: 'Ярасимов Юрий',
          avatar:
              'https://s.yimg.com/ny/api/res/1.2/pzyiXW2xAxhKY1q.qzjR2w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ3MQ--/https://s.yimg.com/os/creatr-uploaded-images/2021-08/08aa7ac0-01c8-11ec-b6ef-342b9cde3039',
          position_type: '',
          position: 'Директор',
        },
        {
          full_name: 'Двилянский Егор',
          avatar: null,
          position_type: 'trainer',
          position: 'Заместитель директора по спортивно-массовой работе',
        },
        {
          full_name: 'Докукин Никита',
          avatar: 'https://img.gazeta.ru/files3/177/13126177/78797-pic905-895x505-94350.jpg',
          position_type: '',
          position: 'Заместитель директора по безопасности ',
        },
        {
          full_name: 'Иванов Кирилл',
          avatar: null,
          position_type: 'person',
          position: 'Инструктор-методист',
        },
      ],
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
            avatar: 'https://source.unsplash.com/120/?avatar',
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
            avatar: 'https://source.unsplash.com/120/?avatar',
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
            avatar: 'https://source.unsplash.com/120/?avatar',
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
            avatar: 'https://source.unsplash.com/120/?avatar',
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
            avatar: 'https://source.unsplash.com/120/?avatar',
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
      playersSelected: [],
      markAs: 1,
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
    togglePlayer(player, checked) {
      const search = this.playersSelected.findIndex(p => p.id === player.id)
      if (search < 0 && checked) {
        this.playersSelected.push(player)
      } else {
        this.playersSelected.splice(search, 1)
      }
    },
    changeAllChecked(status) {
      this.allChecked = status
      this.playersSelected = []
      if (status) this.playersSelected.push(...this.group.sportsmans)
    },
  }
}
</script>

<style scoped lang="scss">
.match-score {
  &__left-menu {
    position: relative;

    &::v-deep {
      .menu__content-inner {
        max-width: 100%;
      }
    }
  }

  &__left-menu-wrapper {
    max-width: 320px;
    margin: 0 auto;
  }

  &__menu-title {
    color: $blue02;
    font-size: 16px;
    font-weight: 600;
  }

  &__radio {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:first-child) {
      margin-top: 13px;
    }
  }

  &__radio-btn {
    width: 100%;
    display: flex;
    flex-direction: row-reverse !important;
  }

  &__radio-text {
    display: flex;
    align-items: center;
  }

  &__radio-icon {
    margin-top: 4px;
    margin-right: 5px;

    svg {

    }
  }

  &__menu-btn {
    width: 91px;
    height: 33px;
    margin-left: 50%;
    transform: translate(-50%);
    border-radius: 32px;
    background-color: #2ABAF3;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }

  &__container {
    padding-bottom: 80px;
  }

  &__all-btn {
    margin-top: 18px;
    width: 100%;
    height: 75px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
  }

  &__all-btn-content {
    display: flex;
    align-items: center;
  }

  &__all-btn-title {
    margin-left: 10px;
    font-size: 16px;
    color: $blue02;
  }

  &__all-btn-logo {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $blue02;
    border: 2px solid #B9CBE5;
  }

  &__filter {
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid #DCE5F2;
  }

  &__text {
    margin-top: 10px;
    display: flex;
    align-items: center;

    p {
      color: $blue02;
      font-size: 16px;
    }

    svg {
      margin: 0 9px;
    }
  }

  &__match-broadcast {
    margin-top: 32px;
  }
}
</style>
