<template>
  <div class="d-flex">
    <!-- Сайдбар страницы -->
    <left-menu class="left-menu">
      <div class="group-list">
        <v-select
          class="group-list__select"
          v-model="groupSelected"
          @input="selectGroup"
          :items="groupSelectData"
          item-text="title"
          item-value="id"
          single-line
          hide-details
          flat
          :menu-props="{
            contentClass: 'group-list__menu',
            nudgeBottom: 32,
            maxWidth: 180,
          }"
        >
          <template v-slot:item="{ item }">
            <p class="group-list__select-title">{{ item.title }}</p>
          </template>
          <template v-slot:selection="{ item }">
            <p class="group-list__select-title">{{ item.title }}</p>
          </template>
        </v-select>
        <div class="group-list__header">
          <img class="group-list__header-image" :src="group.img" />
          <div class="group-list__header-wrapper">
            <p class="group-list__header-name h2">
              {{ group.name }}
            </p>
            <p v-if="group.description" class="group-list__header-desc">{{ group.description }}</p>
          </div>
        </div>
        <div class="group-list__filters">
          <v-select
            class="group-list__select"
            v-model="selectedSortSportsmas"
            :items="sortSportsmans"
            item-text="title"
            item-value="id"
            single-line
            hide-details
            flat
            :menu-props="{
              contentClass: 'group-list__menu',
              nudgeBottom: 32,
              maxWidth: 180,
            }"
          >
            <template v-slot:item="{ item }">
              <img v-if="item.icon" class="group-list__select-image" :src="item.icon" />
              <p class="group-list__select-title">{{ item.title }}</p>
            </template>
            <template v-slot:selection="{ item }">
              <img v-if="item.icon" class="group-list__select-image" :src="item.icon" />
              <p class="group-list__select-title">{{ item.title }}</p>
            </template>
          </v-select>

          <button class="group-list__alphabet-sort" @click="sortAlphabet()">
            <svg
              v-if="sortAlphabetCurrent == 0"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.23 14.782c.071-.04.13-.025.188-.025.974 0 1.952-.003 2.927.003.148 0 .184-.037.184-.18L14.523.184c0-.146.042-.177.184-.174.622.01 1.24.006 1.861 0 .123 0 .162.028.162.152-.003 2.683-.003 5.366-.003 8.053 0 2.131 0 4.263-.003 6.395 0 .12.029.151.159.151 1.006-.006 2.016-.003 3.023-.003.026 0 .052.003.094.007-.094.17-.233.29-.343.43-.285.369-.583.728-.887 1.082-.638.743-1.26 1.496-1.887 2.246-.386.462-.777.92-1.156 1.385-.084.105-.13.093-.207-.003-.34-.406-.696-.8-1.03-1.212a123.209 123.209 0 0 0-1.855-2.237c-.401-.474-.777-.966-1.204-1.422-.065-.08-.126-.161-.2-.25ZM5.397 6.711h-3.39l-.392 1.236H0L2.538 0h2.34l2.539 7.947H5.8l-.404-1.236Zm-.45-1.413L3.69 1.413 2.457 5.298h2.49ZM6.656 20H5.089v-2.705H3.23L1.858 20H.081l1.521-2.99a2.44 2.44 0 0 1-.968-.772 2.906 2.906 0 0 1-.404-.721c-.1-.26-.15-.524-.15-.79 0-.289.05-.568.146-.846.098-.276.234-.527.408-.756.169-.22.373-.416.612-.58.24-.164.496-.288.774-.368.275-.081.557-.121.842-.121h3.794V20Zm-1.57-6.535H2.87c-.155 0-.314.04-.479.121-.165.08-.304.183-.42.31-.201.214-.302.49-.302.827 0 .236.084.465.253.685.116.149.262.264.437.353.178.087.346.134.508.134h2.214v-2.43h.004Z"
                fill="currentColor"
              />
            </svg>
            <svg
              v-if="sortAlphabetCurrent == 1"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.23 14.782c.071-.04.13-.025.188-.025.974 0 1.952-.003 2.927.003.148 0 .184-.037.184-.18L14.523.184c0-.146.042-.177.184-.174.622.01 1.24.006 1.861 0 .123 0 .162.028.162.152-.003 2.683-.003 5.366-.003 8.053 0 2.131 0 4.263-.003 6.395 0 .12.029.151.159.151 1.006-.006 2.016-.003 3.023-.003.026 0 .052.003.094.007-.094.17-.233.29-.343.43-.285.369-.583.728-.887 1.082-.638.743-1.26 1.496-1.887 2.246-.386.462-.777.92-1.156 1.385-.084.105-.13.093-.207-.003-.34-.406-.696-.8-1.03-1.212a123.209 123.209 0 0 0-1.855-2.237c-.401-.474-.777-.966-1.204-1.422-.065-.08-.126-.161-.2-.25ZM5.397 18.711h-3.39l-.392 1.236H0L2.538 12h2.34l2.539 7.947H5.8l-.404-1.236Zm-.45-1.413L3.69 13.413l-1.234 3.885h2.49ZM6.656 7.944H5.089V5.24H3.23L1.858 7.944H.081l1.521-2.99a2.44 2.44 0 0 1-.968-.771A2.905 2.905 0 0 1 .23 3.46c-.1-.26-.15-.524-.15-.79 0-.288.05-.567.146-.846.098-.276.234-.527.408-.756.169-.22.373-.415.612-.58.24-.164.496-.288.774-.368C2.295.04 2.577 0 2.862 0h3.794v7.944ZM5.086 1.41H2.87c-.155 0-.314.04-.479.12-.165.081-.304.183-.42.31-.201.214-.302.49-.302.828 0 .235.084.464.253.684.116.15.262.264.437.354.178.086.346.133.508.133h2.214v-2.43h.004Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

      <v-list class="group-list__list" flat>
        <v-list-item-group v-model="selectedSportsmans" multiple>
          <v-list-item
            v-for="(sportsman, index) in filter"
            :key="index"
            @click="selectSportsman(index, sportsman)"
            class="group-list__list-item"
            :class="{ 'group-list__list-item_active': selectedSportsmanIndex === index }"
          >
            <div class="group-list__list-item-wrapper">
              <v-list-item-avatar width="56" height="56" class="group-list__sportsman-avatar-wrapper">
                <v-img
                  v-if="sportsman.avatar"
                  :alt="sportsman.full_name"
                  :src="sportsman.avatar"
                  class="group-list__sportsman-avatar"
                ></v-img>
                <v-img
                  v-else
                  :alt="sportsman.full_name"
                  :src="require(`@/assets/images/positionTypes/${sportsman.position_type}.svg`)"
                  class="group-list__sportsman-avatar group-list__sportsman-avatar--type"
                  width="56"
                  height="56"
                ></v-img>
                <span class="group-list__sportsman-number" v-if="sportsman.team_number">{{
                  sportsman.team_number
                }}</span>
              </v-list-item-avatar>
              <v-list-item-content class="group-list__sportsman-content">
                <v-list-item-title class="group-list__sportsman-name">{{ sportsman.full_name }} </v-list-item-title>
                <v-list-item-subtitle class="group-list__sportsman-subtitle"
                  >{{ sportsman.age }} лет,
                  {{ positionTypes.find(x => x.slug === sportsman.position_type).title }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </div>
            <div class="group-list__list-item-icon">
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14.5586" r="14" transform="rotate(90 14 14.5586)" fill="#95B0DA" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.6158 9.59779C16.1224 9.10022 16.9437 9.10022 17.4503 9.59779L21.7309 13.8022C21.9903 14.057 22.1169 14.3929 22.1106 14.7268C22.1157 15.0593 21.9891 15.3934 21.7308 15.6471L17.4502 19.8515C16.9436 20.349 16.1223 20.349 15.6157 19.8515C15.1091 19.3539 15.1091 18.5472 15.6157 18.0496L19.001 14.7246L15.6158 11.3997C15.1092 10.9021 15.1092 10.0954 15.6158 9.59779Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.28277 9.59779C8.78936 9.10022 9.61071 9.10022 10.1173 9.59779L14.3979 13.8022C14.6573 14.057 14.7839 14.3929 14.7776 14.7268C14.7827 15.0593 14.6561 15.3934 14.3978 15.6471L10.1172 19.8515C9.61063 20.349 8.78928 20.349 8.28268 19.8515C7.77609 19.3539 7.77609 18.5472 8.28268 18.0496L11.668 14.7246L8.28277 11.3997C7.77618 10.9021 7.77618 10.0954 8.28277 9.59779Z"
                  fill="white"
                />
              </svg>
            </div>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </left-menu>

    <div class="container">
      <!-- Хедер страницы -->
      <Header class="mb-10" />

      <div class="template">
        <!-- Хедер темплейта -->

        <bottom-header
          class="template__header"
          title="Домашнее задание игрока"
          btnText="Добавить задание"
          @btnClick="dialogHomework = true"
        >
          <template #icon>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="6" fill="#B9CBE5" />
              <rect width="33.6" height="33.6" rx="6" fill="#95B0DA" />
              <g clip-path="url(#clip0_4642_32049)">
                <path
                  d="M14.5222 9.94241C14.8544 9.1044 15.0048 9.00451 15.9048 9.00451C16.9731 9.00451 18.0424 9.01503 19.1107 9.00031C19.6606 8.9919 20.0549 9.15382 20.2463 9.7195C20.2841 9.83096 20.5312 9.9319 20.6837 9.934C22.0674 9.95082 23.4522 9.94136 24.8359 9.94452C26.064 9.94767 26.841 10.7131 26.8452 11.936C26.8515 13.7403 26.8515 15.5456 26.8452 17.3499C26.841 18.5454 26.0903 19.3487 24.8885 19.3529C19.913 19.3698 14.9375 19.3698 9.96095 19.3529C8.76649 19.3466 8.0126 18.536 8.00839 17.3447C8.00208 15.5404 8.00208 13.735 8.00839 11.9307C8.0126 10.7173 8.79909 9.94662 10.0251 9.94346C11.5297 9.93926 13.0344 9.94241 14.5222 9.94241ZM18.3474 16.5371C18.3516 16.0062 17.9604 15.6013 17.4389 15.595C16.9174 15.5898 16.5157 15.9893 16.5115 16.5172C16.5073 17.0524 16.8932 17.4519 17.42 17.4572C17.9478 17.4624 18.3431 17.0702 18.3474 16.5371Z"
                  fill="white"
                />
                <path
                  d="M26.842 20.7031C26.842 21.6463 26.8757 22.4696 26.8336 23.2897C26.7853 24.236 25.9756 24.991 25.0241 24.9931C19.9603 25.0015 14.8965 25.0015 9.83159 24.9931C8.88423 24.991 8.07146 24.2329 8.02099 23.2876C7.97788 22.4675 8.01152 21.6431 8.01152 20.741C9.34792 21.4633 10.7506 21.2068 12.1175 21.2152C16.1298 21.2404 20.1432 21.2225 24.1556 21.2257C25.0504 21.2278 25.9451 21.2583 26.842 20.7031Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4642_32049">
                  <rect width="18.8547" height="16" fill="white" transform="translate(8 9)" />
                </clipPath>
              </defs>
            </svg>
          </template>

          <template #right>
            <div class="template__header-right">
              <div class="template__header-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 5.77543C0.354291 5.27522 0.816134 5.18544 1.3792 5.33935C1.71451 5.42913 2.06248 5.46761 2.40412 5.51891C2.75208 5.57021 2.80269 5.48685 2.91025 5.1662C3.08106 4.66599 3.28352 4.1786 3.5176 3.70405C3.60617 3.52448 3.79597 3.38981 3.96046 3.26155C4.27047 3.02427 4.25782 2.77417 3.90352 2.61384C3.43535 2.40222 2.96086 2.197 2.46738 1.97896C2.95453 1.24147 3.60617 0.766914 4.39067 0.459093C5.51681 0.0230119 6.69356 -0.0603564 7.87664 0.0358378C8.72441 0.10638 9.55952 0.266704 10.401 0.38855C10.4516 0.394963 10.5022 0.427028 10.5528 0.433441C10.8944 0.491157 10.9704 0.677133 10.8944 1.01702C10.6414 2.09439 10.4199 3.17818 10.1985 4.26197C10.1479 4.50566 10.034 4.58262 9.78728 4.57621C8.9838 4.55697 8.18665 4.57621 7.38317 4.56979C6.4405 4.56338 5.74457 4.95457 5.34599 5.84597C4.8715 6.86563 4.397 7.87888 3.93516 8.89212C3.77067 9.25766 3.88454 9.44364 4.2768 9.45646C4.71966 9.46287 5.1562 9.45646 5.63702 9.45646C5.4662 10.1491 5.31436 10.8096 5.13089 11.4637C5.0866 11.624 4.92844 11.7459 4.86517 11.8293C5.10558 12.4513 5.33967 13.0541 5.56743 13.6505C5.70661 14.0161 5.92804 14.3367 6.29499 14.4457C6.71887 14.5676 7.18071 14.6958 7.61725 14.6574C8.64849 14.5612 9.21789 13.9006 9.30013 12.8425C9.31911 12.5988 9.30013 12.3551 9.30013 12.0729C9.14197 12.0729 8.99013 12.0665 8.83196 12.0729C8.52196 12.0986 8.37645 11.9639 8.33849 11.6433C8.25624 10.8673 8.15501 10.0978 8.05379 9.3282C7.99052 8.85364 7.92726 8.80875 7.44011 8.80875C6.54173 8.80875 5.64967 8.80875 4.72599 8.80875C4.74497 8.7318 4.74497 8.67408 4.77027 8.62278C5.16252 7.76344 5.5611 6.90411 5.95968 6.04477C6.22539 5.48043 6.68724 5.23033 7.28194 5.23033C9.69871 5.23033 12.1092 5.23674 14.5259 5.24315C15.3231 5.24315 15.8735 5.62793 15.981 6.32694C16.0317 6.63476 15.9684 6.96182 15.9368 7.27606C15.8925 7.65442 15.8102 8.03279 15.7659 8.41115C15.7343 8.70615 15.5951 8.80875 15.3041 8.80234C14.0261 8.79593 12.7545 8.79593 11.4765 8.79593C10.9957 8.79593 10.9261 8.86006 10.9261 9.34744C10.9261 10.0721 10.9261 10.8032 10.9261 11.5278C10.9261 11.9832 10.8438 12.0665 10.3946 12.0665C10.2681 12.0665 10.1416 12.0665 10.0087 12.0665C9.9581 12.4641 9.93912 12.8489 9.8632 13.2209C9.5785 14.7023 8.53461 15.4718 7.06051 15.3243C5.87743 15.2025 5.12456 14.651 4.82088 13.4325C4.71966 13.0285 4.4919 12.6629 4.30843 12.2333C4.087 12.3936 3.93516 12.5026 3.78965 12.618C3.6125 12.7527 3.44801 12.7527 3.27719 12.5988C2.46106 11.8741 1.63859 11.1559 0.835114 10.4184C0.727561 10.3222 0.676948 10.1298 0.645315 9.97591C0.613682 9.78994 0.632662 9.59113 0.638989 9.39875C0.651642 9.02679 0.695928 8.66126 0.272045 8.44322C0.145512 8.37909 0.0885727 8.16746 0 8.02637C0 7.27606 0 6.52574 0 5.77543Z"
                    fill="#464EA3"
                  />
                </svg>
              </div>

              <div class="template__header-name">Костюхин Глеб</div>
              <p class="template__header-descr">8 лет, защитник</p>
            </div>
          </template>
        </bottom-header>

        <!-- Контент темплейта -->
        <div class="template__main">
          <!-- // homework -->
          <div class="homework">
            <!-- // homework header -->
            <stat-header :homeTasks="homeTasks" />
            <!-- // homework main -->

            <homework-items
              :homeTasks="homeTasks"
              @removeHomework="removeHomework"
              @openEdit="openEdit"
              @changeStatus="changeStatus"
              @estimate="estimate"
            />

            <!-- // homework footer -->
            <footer class="homework__footer">
              <base-button
                class="action__btn"
                @click="dialogHomework = true"
                label="Добавить домашнее задание"
                backgroundColor="#525BBA"
              />
            </footer>
          </div>
        </div>
      </div>
    </div>

    <!-- // Попап Редактирования и создания -->
    <ModalHomework
      v-if="dialogHomework"
      :visible="dialogHomework"
      :edit="editFlag"
      :sportsmen="selectedGropSportmans[0].sportsmen"
      @close="closeModalHomework"
      @addExercise="addExercise"
      @edit="edit"
    ></ModalHomework>

    <!-- // ДЗ на доработку -->
    <ModalHomeworkRevision
      :visible="dialogHomeworkRevision"
      @close="dialogHomeworkRevision = false"
    ></ModalHomeworkRevision>
    <!-- // Оценка ДЗ -->
    <ModalHomeworkReview
      v-if="dialogHomeworkReview"
      :visible="dialogHomeworkReview"
      :points="homeTasks[dialogHomeworkReviewIndex].points"
      @evaluatePlayer="evaluatePlayer"
      @close="dialogHomeworkReview = false"
    ></ModalHomeworkReview>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue'
import BottomHeader from '@/components/BottomHeader.vue'
import StatHeader from '@/components/Homework/StatHeader.vue'
import HomeworkItems from '@/components/Homework/HomeworkItems.vue'

import ModalHomework from '@/components/modals/ModalHomework.vue'
import ModalHomeworkRevision from '@/components/modals/ModalHomeworkRevision.vue'
import ModalHomeworkReview from '@/components/modals/ModalHomeworkReview.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Training',
  components: {
    LeftMenu,
    Header,
    BottomHeader,
    StatHeader,
    HomeworkItems,
    ModalHomework,
    ModalHomeworkRevision,
    ModalHomeworkReview,
  },
  data: () => ({
    dialogHomework: false,
    dialogHomeworkRevision: false,
    dialogHomeworkReview: false,
    dialogHomeworkReviewIndex: 0,
    groupSelectData: [],
    groupSelected: 1,
    group: {
      img: require('@/assets/images/groups/img-group02.png'),
      slug: 'np2',
      name: 'НП-2',
      description: '8-9 лет (2 год подготовки) ',
      sportsmans: [],
    },
    positionTypes: [
      { slug: 'goalie', title: 'вратарь' },
      { slug: 'defender', title: 'защитник' },
      { slug: 'forward', title: 'нападающий' },
    ],
    sortAlphabetSettings: ['az', 'za'],
    sortAlphabetCurrent: 0,
    selectedSortSportsmas: 'all',
    selectedSportsmans: [],
    selectedSportsmanIndex: null,
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
    homeTasks: [],
    homeTasksActiveIndex: null,
    editFlag: false,
    groups: [],
  }),
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
    selectedGropSportmans() {
      return this.groups.filter(item => {
        return item.id === this.groupSelected
      })
    },
  },
  mounted() {
    this.getGroups()
  },
  methods: {
    sortAlphabet() {
      this.sortAlphabetCurrent =
        this.sortAlphabetCurrent < this.sortAlphabetSettings.length - 1
          ? ++this.sortAlphabetCurrent
          : (this.sortAlphabetCurrent = 0)
    },
    async removeHomework(index, id) {
      this.homeTasks.splice(index, 1)

      try {
        const response = await this.$homework.removeHomework(id)
      } catch (error) {
        console.log(error)
      }
    },
    selectSportsman(index, sportsman) {
      if (this.selectedSportsmanIndex === index) {
        this.selectedSportsmanIndex = null
        this.getHomeworkGroups()
      } else {
        this.selectedSportsmanIndex = index
        this.getHomeworkSportsman(sportsman.id)
      }
    },
    estimate(index) {
      this.dialogHomeworkReviewIndex = index
      this.dialogHomeworkReview = true
    },
    evaluatePlayer(num) {
      this.homeTasks[this.dialogHomeworkReviewIndex].points = num
    },
    async addExercise(data) {
      let task = {
        exercise: data.exercise,
        dateFrom: 'от 18 июля 2021',
        dateTo: data.dateStart,
        status: 'received',
        icon: 'physical',
        points: 0,
        contentType: data.contentType,
      }

      const body = {
        homeworkType: 'FE',
        status: 'IW',
        description: 'test descr',
        commentForRework: 'test commentForRework',
        dateToDo: Date.parse(data.dateStart),
        sportsman: 3,
      }

      this.dialogHomework = false
    },
    openEdit(index) {
      this.homeTasksActiveIndex = index
      this.dialogHomework = true
      this.editFlag = true
    },
    edit(data) {
      const task = {
        exercise: data.exercise,
        dateFrom: 'от 18 июля 2021',
        dateTo: data.dateStart,
        status: 'received',
        icon: 'physical',
        points: 0,
        contentType: data.contentType,
      }

      this.homeTasks[this.homeTasksActiveIndex] = task
      this.dialogHomework = false
      this.editFlag = false
    },
    changeStatus(index, status) {
      if (status === 'IW') this.homeTasks[index].status = 'GA'
      if (status === 'GA') this.homeTasks[index].status = 'UR'
      if (status === 'UR') this.homeTasks[index].status = 'RC'
      if (status === 'RC') this.homeTasks[index].status = 'BF'
      if (status === 'BF') this.homeTasks[index].status = 'ST'
      if (status === 'ST') this.homeTasks[index].status = 'OV'
      if (status === 'OV') this.homeTasks[index].status = 'IW'
    },
    async getGroups() {
      try {
        const response = await this.$groups.getGroups()
        this.groups = response
        this.createGroupsObject()
      } catch (error) {
        console.log(error)
      }
    },
    createGroupsObject() {
      this.groups.forEach(item => {
        this.groupSelectData.push({
          id: item.id,
          title: item.name,
        })
      })

      this.selectGroup()
    },
    selectGroup() {
      this.group.sportsmans = []
      this.selectedGropSportmans.forEach(item => {
        item.sportsmen.forEach(s => {
          this.group.sportsmans.push({
            id: s.id,
            full_name: `${s.user.firstName} ${s.user.lastName}`,
            age: 3,
            position_type: 'defender',
            avatar: s.user.avatar,
            team_number: s.teamNumber,
          })
        })
      })

      this.getHomeworkGroups()
    },
    async getHomeworkGroups() {
      try {
        const response = await this.$homework.getHomeworkGroups(this.groupSelected)
        this.homeTasks = []

        response.forEach(item => {
          this.homeTasks.push({
            exercise: {
              id: item.id,
              image: '',
              title: item.description,
              description: item.description,
              time: 10,
              level: 1,
            },
            sportsman: item.sportsman,
            dateFrom: item.dateCreated,
            dateTo: item.dateToDo,
            status: item.status,
            type: item.homeworkType,
            points: 0,
            contentType: item.homeworkType,
          })
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getHomeworkSportsman(id) {
      try {
        const response = await this.$homework.getHomeworkSportsman(id)

        this.homeTasks = []
        response.forEach(item => {
          this.homeTasks.push({
            exercise: {
              id: item.id,
              image: '',
              title: item.commentForRework,
              description: item.description,
              time: 10,
              level: 1,
            },
            sportsman: item.sportsman,
            dateFrom: item.dateCreated,
            dateTo: item.dateToDo,
            status: item.status,
            type: item.homeworkType,
            points: 0,
            contentType: item.homeworkType,
          })
        })
      } catch (error) {
        console.log(error)
      }
    },
    closeModalHomework() {
      this.dialogHomework = false
      this.getGroups()
    },
  },
}
</script>

<style lang="sass" scoped>
.left-menu
  min-width: 384px

.template
  .template__header
    margin-bottom: 40px

    .template__header-right
      margin-left: 21px
      display: flex
      align-items: center

    .template__header-icon
      margin-bottom: -5px

    .template__header-name
      margin-left: 8px
      color: $blue02
      font-size: 16px
      font-weight: 500

    .template__header-descr
      margin-left: 14px
      color: $blue02
      font-size: 16px
      font-weight: 400


  // Стилизация Домашнего задания
  .homework
    border-radius: 1.75rem
    box-shadow: 0 6px 8px rgba(137, 155, 201, 0.15)
    padding: 2.25rem 2.25rem .5rem 2.25rem
    margin-bottom: 1.5rem
    color: #ffffff
    background-color: #464EA3

.homework__footer
  display: flex
  justify-content: center


.training-container
  overflow: hidden

/* TODO: Remove and create component */
/* Select position types */




.group-list__select
  width: 100%
  max-width: 180px

  &::v-deep
    .v-select__selections
      padding-left: 13px

    &.v-select--is-menu-active
      border-bottom-left-radius: 0
      border-bottom-right-radius: 0
      background-color: #fff


.group-list__menu
  .v-select-list
    padding: 0px
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15)
    background-color: #fff

    &::v-deep
      .v-list-item
        padding: 10px 13px
        min-height: auto
        position: relative

        &.v-list-item--active
          &::before
            background-color: transparent

          .v-list-item__title
            color: $blue02

        &::after
          display: none

        &:hover
          &::before
            background-color: #ECF6FF !important
            opacity: 1


      .v-list-item__content
        padding: 4px 0

      .v-list-item__title
        line-height: 19px
        color: $blue04

.group-list__select-image
  margin-right: 8px
  position: relative
  z-index: 2

.group-list__select-title
  font-weight: 500
  font-size: 14px
  line-height: 19px
  color: $blue02
  position: relative
  z-index: 2
/* End Select position types */

/* Alphabet sort */




.group-list__alphabet-sort
  padding: 6px
  color: $blue05
/* End Alphabet sort */





.group-list
  max-width: 320px
  margin: 0 auto
  padding-top: 32px

.group-list__header
  display: flex
  margin-bottom: 32px

.group-list__header-image
  display: inline-block
  max-width: 48px
  max-width: 48px
  width: 100%
  height: auto
  margin-right: 28px
  z-index: 1

.group-list__header-wrapper
  color: $blue02
  z-index: 1

.group-list__header-name
  font-weight: 500

.group-list__header-desc
  font-size: 14px !important
  line-height: 19px
  font-weight: normal


.group-list__filters
  display: flex
  justify-content: space-between
  align-items: center
  padding: 9px 5px
  border-top: 1px solid #ECF6FF
  border-bottom: 1px solid #ECF6FF


.group-list__list
  &::v-deep
    padding: 15px 0

    .v-list-item
      min-height: auto
      margin-bottom: 15px
      padding: 0 18px

      &:last-child
        margin-bottom: 0px

      &::after
        display: none

.group-list__list-item
  display: flex
  align-items: center

.group-list__list-item-icon
  display: none

.group-list__list-item_active
  padding: 9px 16px !important
  border-radius: 12px
  background-color: #ECF6FF

.group-list__list-item_active .group-list__list-item-icon
  display: block

.group-list__list-item-wrapper
  display: flex
  align-items: center

.group-list__sportsman-avatar-wrapper
  margin-top: 0px !important
  margin-bottom: 0px !important
  overflow: visible
  position: relative

.group-list__sportsman-avatar
  &::v-deep
    .v-responsive__content
      border: 2px solid rgba(255, 255, 255, 0.5)
      border-radius: 50%


.group-list__sportsman-avatar--type
  &::v-deep
    .v-image__image.v-image__image--cover
      background-size: auto
      background-color: $blue02

.group-list__sportsman-number
  position: absolute
  bottom: -1px
  left: -5px

  width: 24px

  font-weight: 700
  font-size: 14px
  line-height: 16px
  text-align: center
  color: #fff
  background-color: #464EA3
  border: 1px solid rgba(255, 255, 255, 0.5)
  border-radius: 4px


.group-list__sportsman-content
  padding: 0px

.group-list__sportsman-name
  font-weight: 600
  font-size: 14px
  line-height: 19px
  color: $blue02

.group-list__sportsman-subtitle
  font-size: 12px
  line-height: 20px
  color: $blue02 !important

.training-info__list
  display: flex

.training-info__item,
.training-date
  position: relative
  font-size: 16px
  line-height: 22px
  color: $blue02

.training-info__item
  padding-right: 16px

  &::after
    content: '•'
    position: absolute
    text-align: center
    width: 16px

  &:last-of-type
    &::after
      display: none

.training-date
  padding-left: 22px
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.017 4.304h13.938c.01.201.026.392.026.583.002 2.095.004 4.19 0 6.286-.003 1.787-.982 2.802-2.765 2.814-2.855.019-5.709.015-8.563 0-1.525-.007-2.58-.933-2.62-2.437C-.03 9.153.017 6.752.017 4.304Zm3.623 1.93c-.485.013-.916.46-.912.95.003.53.494 1.01 1.007.982a.956.956 0 0 0 .898-.957c-.005-.566-.436-.99-.993-.975Zm7.593.995a.96.96 0 0 0-.913-.996c-.511-.024-.967.408-.982.93-.015.524.408.98.921.993a.94.94 0 0 0 .974-.927Zm-8.504 3.417a.954.954 0 0 0 .91 1.004c.503.03.98-.408 1-.92a.962.962 0 0 0-.907-1.008c-.501-.023-.976.415-1.003.924Zm5.215-3.44c.013-.496-.404-.94-.905-.964a.977.977 0 0 0-1.014.968c0 .487.438.926.938.938a.973.973 0 0 0 .981-.942Zm-.99 4.446c.483.028.987-.444 1-.938.015-.484-.4-.933-.903-.977-.512-.045-.974.367-1.014.904-.037.502.398.98.916 1.011ZM13.93 3.089H.066C-.23 1.544.773.129 2.294.057 3.896-.02 5.504.014 7.11.007c1.408-.004 2.816-.015 4.224.004 1.74.024 2.82 1.293 2.597 3.078Z' fill='%23525BBA'/%3E%3C/svg%3E")
  background-repeat: no-repeat
  background-position: left center

  span
    margin-right: 12px

    &:last-of-type
      margin-right: 0px
</style>
