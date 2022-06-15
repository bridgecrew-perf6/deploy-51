<template>
  <div class="d-flex create-event">
    <left-menu>
      <menu-filtering @filter="sortAlphabetCurrent = $event">
        <template #left>
          <div class="create-event__filter-title">Ответственные лица</div>
        </template>
      </menu-filtering>
      <persons :items="filter" type="person"/>
      <button class="create-event__add-person">+ Добавить ответственное лицо</button>
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
      </bottom-header>

      <team-selection/>
      <travel-itinerary/>

      <div class="create-event__lists">
        <div class="create-event__list">
          <list type="stages"/>
        </div>
        <div class="create-event__list">
          <list type="doc"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue';
import MenuFiltering from '@/components/MenuFiltering.vue';
import Persons from '@/components/Persons.vue';
import Header from '@/components/Header.vue';
import BottomHeader from '@/components/BottomHeader.vue';

import TeamSelection from '@/components/AddEvent/TeamSelection.vue';
import List from '@/components/AddEvent/List.vue';
import TravelItinerary from '@/components/AddEvent/TravelItinerary.vue';

export default {
  components: {
    LeftMenu,
    Persons,
    MenuFiltering,
    Header,
    BottomHeader,
    TeamSelection,
    List,
    TravelItinerary
  },
  data() {
    return {
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
      matchForm: {
        date: '',
        timeStart: '',
        timeEnd: '',
        location: '',
        checkbox: true,
      },
    };
  },
  computed: {
    filter() {
      return this.persons
          .concat()
          .sort((a, b) =>
              this.sortAlphabetCurrent == 0
                  ? a.full_name.localeCompare(b.full_name)
                  : b.full_name.localeCompare(a.full_name)
          );
    },
  },
};
</script>

<style scoped lang="scss">
.create-event {
  position: relative;

  &__filter-title {
    color: $blue02;
    font-size: 20px;
  }

  &__add-person {
    margin-top: 10px;
    color: $blue02;
    font-size: 16px;
  }

  &__bottom-header {
    margin: 50px 0 45px;
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
}
</style>
