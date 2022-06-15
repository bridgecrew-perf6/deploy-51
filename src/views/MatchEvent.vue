<template>
  <div class="d-flex create-event">
    <left-menu>
      <div class="create-event__edit">
        <button class="create-event__edit-btn">
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 13.9108C0.010001 13.8869 0.0228593 13.863 0.0300029 13.8375C0.427184 12.4509 0.822936 11.0627 1.22012 9.67606C1.23298 9.63268 1.25869 9.5893 1.28869 9.55939C3.56463 7.2767 5.84056 4.99402 8.11935 2.71283C8.28508 2.54679 8.49938 2.48995 8.72083 2.46901C9.22231 2.42264 9.67807 2.5797 10.0981 2.84746C10.6953 3.22741 11.1554 3.74199 11.4197 4.42709C11.5697 4.81601 11.6068 5.21391 11.4582 5.6148C11.4054 5.7584 11.3297 5.88256 11.2211 5.99026C8.95657 8.24153 6.6935 10.4973 4.42899 12.7501C4.39756 12.78 4.35327 12.8024 4.31184 12.8144C2.92028 13.2003 1.52872 13.5847 0.135727 13.9707C0.108582 13.9782 0.0828651 13.9901 0.0571483 14.0006C0.0385751 14.0006 0.0185732 14.0006 0 14.0006C0 13.9707 0 13.9408 0 13.9108ZM2.12735 12.6319C2.13878 12.6289 2.15306 12.6274 2.16735 12.6229C2.68883 12.4629 3.21174 12.3028 3.73321 12.1397C3.76322 12.1308 3.79179 12.1068 3.81179 12.0814C3.96752 11.8869 3.99467 11.6596 3.94895 11.4202C3.82322 10.7636 3.21745 10.1607 2.58168 10.0545C2.35308 10.0171 2.13449 10.0366 1.94447 10.1906C1.90733 10.2206 1.87589 10.2669 1.86018 10.3133C1.73874 10.6947 1.62015 11.0792 1.50157 11.4621C1.45871 11.6012 1.41585 11.7404 1.37585 11.872C1.76445 11.9812 1.96733 12.2774 2.12735 12.6319Z"
                fill="#899BC9"/>
            <path
                d="M14.0013 2.34701C13.9756 2.48762 13.9599 2.63123 13.9242 2.77034C13.8128 3.20414 13.5984 3.57512 13.2913 3.88626C12.9598 4.22282 12.6255 4.5564 12.2926 4.89148C12.284 4.90045 12.2755 4.90643 12.2626 4.91691C12.2955 4.8092 12.3355 4.70748 12.3569 4.60277C12.4412 4.20039 12.364 3.82193 12.1912 3.45993C12.0554 3.17722 11.8711 2.9289 11.6611 2.70452C11.3782 2.40236 11.0796 2.12263 10.7139 1.93415C10.1967 1.66639 9.66236 1.58562 9.1023 1.7726C9.09659 1.77409 9.08945 1.77409 9.07373 1.77409C9.23803 1.60955 9.39519 1.45099 9.55378 1.29243C9.75094 1.09348 9.94524 0.891535 10.1467 0.698569C10.571 0.290198 11.0696 0.0583387 11.6468 0.0119669C11.6654 0.010471 11.684 0.00448759 11.7026 0C11.784 0 11.864 0 11.9454 0C11.964 0.00448759 11.9812 0.00897518 11.9997 0.0134628C12.1426 0.0403883 12.2883 0.0508594 12.4255 0.0942395C13.1698 0.333578 13.6885 0.822725 13.9242 1.61254C13.9642 1.74418 13.9771 1.88329 14.0013 2.01942C14.0013 2.12712 14.0013 2.23781 14.0013 2.34701Z"
                fill="#899BC9"/>
          </svg>
          <p>Редактировать состав</p>
        </button>
        <h3 class="create-event__edit-title">Заявленные спорсмены</h3>
      </div>
      <menu-filtering
          class="create-event__filter"
          @filter="sortAlphabetCurrent = $event">
        <template #left>
          <filter-select :sortSportsmans="sortSportsmans" @selectedSortSportsmas="selectedSortSportsmas = $event"/>
        </template>
      </menu-filtering>
      <persons :items="filter" type="sportsman"/>
      <div class="create-event__all-btn">
        <base-button label="Список ответственных лиц"/>
      </div>
    </left-menu>

    <div class="container">
      <Header hideSearch/>
      <bottom-header
          class="create-event__bottom-header"
          btnText="Добавить событие"
          title="Выездной матч">
        <template #icon>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" rx="6" fill="#FF4B6B"/>
            <rect width="31.7333" height="31.7333" rx="6" fill="#FF4B6B"/>
            <path
                d="M12.0997 7.33726C12.0997 7.13941 12.0997 6.97961 12.0997 6.80459C13.5218 6.80459 14.9517 6.80459 16.401 6.80459C16.401 7.79003 16.401 8.77547 16.401 9.76471C16.4165 9.76852 16.4281 9.77613 16.4436 9.77993C16.6839 9.49838 16.9241 9.21682 17.1838 8.91624C17.4356 9.20921 17.6798 9.49457 17.9549 9.81798C17.9549 8.78308 17.9549 7.79764 17.9549 6.80078C18.5788 6.80078 19.1755 6.80078 19.7839 6.80078C19.7839 6.96819 19.7839 7.1356 19.7839 7.32584C19.8653 7.32965 19.9389 7.34106 20.0125 7.34106C20.741 7.34106 21.4695 7.34106 22.1981 7.34106C22.5623 7.34106 22.6437 7.42477 22.6359 7.77861C22.5739 10.3278 20.8302 12.7401 18.3463 13.6951C18.1564 13.7673 18.0208 13.8701 17.9045 14.0337C17.579 14.4865 17.1876 14.8783 16.6606 15.118C16.6064 15.1409 16.5599 15.2398 16.5599 15.3083C16.5521 15.9018 16.556 16.4992 16.556 17.0927C16.556 17.1688 16.556 17.2449 16.556 17.3362C16.153 17.3362 15.7539 17.3362 15.3315 17.3362C15.3315 17.2754 15.3315 17.2069 15.3315 17.1422C15.3315 16.5334 15.3276 15.9285 15.3354 15.3197C15.3354 15.2018 15.3005 15.1447 15.1881 15.0914C14.6533 14.8441 14.2736 14.4256 13.9287 13.969C13.8551 13.8701 13.7388 13.7826 13.6226 13.7369C11.2046 12.721 9.73979 10.967 9.30579 8.41021C9.26704 8.18192 9.26316 7.94602 9.25541 7.71013C9.24379 7.4476 9.34841 7.34106 9.62354 7.33726C10.1079 7.33345 10.5923 7.33726 11.0728 7.33345C11.4099 7.33726 11.7509 7.33726 12.0997 7.33726ZM9.91804 7.93841C9.82892 9.70003 11.7548 12.5156 13.3048 12.9037C13.301 12.8846 13.301 12.8656 13.2932 12.8504C12.6073 11.3285 12.2934 9.72286 12.1617 8.07539C12.1501 7.93841 12.0881 7.927 11.9757 7.927C11.3363 7.9308 10.7008 7.927 10.0614 7.927C10.0149 7.927 9.9723 7.93461 9.91804 7.93841ZM18.633 12.8999C20.2838 12.3139 22.1593 9.54403 21.9617 7.94222C21.9346 7.93841 21.9036 7.927 21.8726 7.927C21.2099 7.927 20.5434 7.927 19.8808 7.92319C19.7374 7.92319 19.7413 8.00309 19.7258 8.10582C19.594 8.96571 19.501 9.837 19.3111 10.6855C19.1406 11.4388 18.8616 12.1693 18.633 12.8999Z"
                fill="white"
            />
            <path
                d="M12.5605 19.3535C14.8158 19.3535 17.0672 19.3535 19.3302 19.3535C19.3302 20.6548 19.3302 21.9484 19.3302 23.2572C17.0788 23.2572 14.8274 23.2572 12.5605 23.2572C12.5605 21.9636 12.5605 20.6624 12.5605 19.3535ZM13.7851 22.0625C15.2266 22.0625 16.6642 22.0625 18.1057 22.0625C18.1057 21.5527 18.1057 21.0543 18.1057 20.5482C16.6603 20.5482 15.2305 20.5482 13.7851 20.5482C13.7851 21.0581 13.7851 21.5527 13.7851 22.0625Z"
                fill="white"
            />
            <path
                d="M19.9465 24.9355C17.2727 24.9355 14.6105 24.9355 11.9406 24.9355C11.9406 24.5437 11.9406 24.1594 11.9406 23.7637C14.6066 23.7637 17.2765 23.7637 19.9465 23.7637C19.9465 24.1594 19.9465 24.5475 19.9465 24.9355Z"
                fill="white"
            />
            <path
                d="M18.0941 17.8379C18.0941 18.1765 18.0941 18.5075 18.0941 18.8538C16.6603 18.8538 15.2343 18.8538 13.7966 18.8538C13.7966 18.5189 13.7966 18.1879 13.7966 17.8379C15.2265 17.8379 16.6564 17.8379 18.0941 17.8379Z"
                fill="white"
            />
          </svg>
        </template>
        <template #btns>
          <div class="create-event__header-btns">
            <base-button class="create-event__header-btn" label="Тактический экран"/>
            <base-button class="create-event__header-btn" label="Напомнить о событии">
              <template #icon-left>
                <img
                    src="@/assets/images/svg/icon-bell.svg"
                    alt="bell"
                    class="create-event__header-btn-icon">
              </template>
            </base-button>
          </div>
        </template>
      </bottom-header>

      <div class="create-event__date-address">
        <div class="create-event__date-address-elem">
          <img src="@/assets/images/svg/blue-calendar.svg" alt="calendar">
          <p>08/08/2021</p>
        </div>
        <div class="create-event__date-address-elem">
          <p>15:00 - 18:00</p>
        </div>
        <div class="create-event__date-address-elem">
          <img src="@/assets/images/svg/mark.svg" alt="calendar">
          <p>г. Вологда, спорткомплекс “Спартак”</p>
        </div>
      </div>
      <div class="create-event__teams-score">
        <team-score :sportsmans="group.sportsmans" class="create-event__team-score"/>
        <team-score :sportsmans="group.sportsmans" class="create-event__team-score"/>
      </div>
      <div class="create-event__route-block">
        <route-block/>
      </div>

      <div class="create-event__group">
        <stages-preparation style="width: 49%"/>
        <div class="create-event__column">
          <h3 class="create-event__column-title title-blue-20">Документы</h3>
          <div class="create-event__documentation-blocks">
            <documentation-block
                class="create-event__documentation-block"
                num="14"
                text="разрешений на выезд полученно от родителей спортсменов"
                :numStart="14"
                :numEnd="26"/>
            <documentation-block
                class="create-event__documentation-block"
                num="7"
                text="медицинских справок от спортсменовне хватает для поездки"
                :numStart="22"
                :numEnd="26"/>
          </div>
        </div>
      </div>
    </div>

    <modal-player
        :visible="modalPlayer"
        @close="modalPlayer = false"/>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue';
import MenuFiltering from '@/components/MenuFiltering.vue';
import Persons from '@/components/Persons.vue';
import Header from '@/components/Header.vue';
import BottomHeader from '@/components/BottomHeader.vue';

import TeamSelection from '@/components/AddEvent/TeamSelection.vue';
import TravelItinerary from '@/components/AddEvent/TravelItinerary.vue';
import List from '@/components/AddEvent/List.vue';
import TeamScore from '@/components/TeamScore.vue';
import RouteBlock from '@/components/MatchEvent/RouteBlock.vue';
import StagesPreparation from '@/components/MatchEvent/StagesPreparation.vue';
import DocumentationBlock from '@/components/MatchEvent/DocumentationBlock.vue';
import ModalPlayer from '@/components/modals/ModalPlayer.vue';

import FilterSelect from "@/components/library/FilterSelect";

export default {
  components: {
    FilterSelect,
    LeftMenu,
    Persons,
    MenuFiltering,
    Header,
    BottomHeader,
    TeamSelection,
    TravelItinerary,
    List,
    TeamScore,
    RouteBlock,
    StagesPreparation,
    DocumentationBlock,
    ModalPlayer
  },
  data() {
    return {
      modalPlayer: false,
      sortAlphabetCurrent: 0,
      matchForm: {
        date: '',
        timeStart: '',
        timeEnd: '',
        location: '',
        checkbox: true,
      },
      group: {
        img: require('@/assets/images/groups/img-group02.png'),
        slug: 'np2',
        name: 'НП-2',
        description: '8-9 лет (2 год подготовки) ',
        sportsmans: [
          {
            full_name: 'Ярасимов Юрий',
            age: 8,
            position_type: 'defender',
            avatar: null,
            team_number: 37,
          },
          {
            full_name: 'Двилянский Егор',
            age: 9,
            position_type: 'forward',
            avatar: null,
            team_number: 9,
          },
          {
            full_name: 'Докукин Никита',
            age: 8,
            position_type: 'goalie',
            avatar: null,
            team_number: 54,
          },
          {
            full_name: 'Иванов Кирилл',
            age: 8,
            position_type: 'defender',
            avatar: 'https://source.unsplash.com/120/?avatar',
            team_number: 18,
          },
          {
            full_name: 'Ярасимов Юрий',
            age: 8,
            position_type: 'defender',
            avatar: null,
            team_number: 37,
          },
          {
            full_name: 'Двилянский Егор',
            age: 9,
            position_type: 'forward',
            avatar: null,
            team_number: 9,
          },
          {
            full_name: 'Докукин Никита',
            age: 8,
            position_type: 'goalie',
            avatar: null,
            team_number: 54,
          },
          {
            full_name: 'Иванов Кирилл',
            age: 8,
            position_type: 'defender',
            avatar: 'https://source.unsplash.com/120/?avatar',
            team_number: 18,
          },
          {
            full_name: 'Ярасимов Юрий',
            age: 8,
            position_type: 'defender',
            avatar: null,
            team_number: 37,
          },
          {
            full_name: 'Двилянский Егор',
            age: 9,
            position_type: 'forward',
            avatar: null,
            team_number: 9,
          },
          {
            full_name: 'Докукин Никита',
            age: 8,
            position_type: 'goalie',
            avatar: null,
            team_number: 54,
          },
          {
            full_name: 'Иванов Кирилл',
            age: 8,
            position_type: 'defender',
            avatar: 'https://source.unsplash.com/120/?avatar',
            team_number: 18,
          },
          {
            full_name: 'Докукин Никита',
            age: 8,
            position_type: 'goalie',
            avatar: null,
            team_number: 54,
          },
          {
            full_name: 'Иванов Кирилл',
            age: 8,
            position_type: 'defender',
            avatar: 'https://source.unsplash.com/120/?avatar',
            team_number: 18,
          },
          {
            full_name: 'Ярасимов Юрий',
            age: 8,
            position_type: 'defender',
            avatar: null,
            team_number: 37,
          },
          {
            full_name: 'Двилянский Егор',
            age: 9,
            position_type: 'forward',
            avatar: null,
            team_number: 9,
          },
          {
            full_name: 'Докукин Никита',
            age: 8,
            position_type: 'goalie',
            avatar: null,
            team_number: 54,
          },
          {
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
    };
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
  }
};
</script>

<style scoped lang="scss">
.create-event {
  position: relative;

  &__edit {
    margin-top: 28px;
    padding-bottom: 28px;
    border-bottom: 1px solid #dce5f2;
  }

  &__edit-btn {
    display: flex;
    align-items: center;

    p {
      margin-left: 5px;
      color: $blue03;
    }
  }

  &__edit-title {
    margin-top: 5px;
    font-size: 20px;
    font-weight: 400;
    color: $blue02;
  }

  &__filter-title {
    color: $blue02;
    font-size: 20px;
  }

  &__filter {
    padding: 10px 0;
    border-top: 1px solid #DCE5F2;
  }

  &__all-btn {
    margin-top: 35px;
    padding-top: 32px;
    display: flex;
    justify-content: center;
    border-top: 1px solid #DCE5F2;
  }

  &__add-person {
    margin-top: 10px;
    color: $blue02;
    font-size: 16px;
  }

  &__bottom-header {
    margin: 50px 0 45px;
  }

  &__header-btn {
    &:not(:first-child) {
      margin-left: 19px;
    }
  }

  &__header-btn-icon {
    margin-right: 6px;
  }

  &__date-address {
    margin-top: -20px;
    display: flex;
  }

  &__date-address-elem {
    display: flex;

    p {
      margin-left: 10px;
      color: $blue02;
      font-size: 16px;
    }

    &:not(:first-child) {
      margin-left: 20px;
    }
  }

  &__lists {
    width: 100%;
    margin-top: 40px;
    padding-bottom: 60px;
    display: flex;
    justify-content: space-between;
  }

  &__list {
    width: 49%;
  }

  &__teams-score {
    margin-top: 42px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__team-score {
    max-width: 49%;
  }

  &__route-block {
    margin-top: 40px;
  }

  &__group {
    margin-top: 40px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
  }

  &__column {
    width: 49%;
  }

  &__documentation-block {
    &:first-child {
      margin-top: 16px;
    }

    &:not(:first-child) {
      margin-top: 9px;
    }
  }
}
</style>
