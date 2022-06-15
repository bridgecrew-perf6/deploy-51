<template>
  <div class="d-flex">
    <left-menu>
      <div class="training-plan-targets__menu-inner">
        <p class="training-plan-targets__group-select-label">Данные группы</p>
        <select-group class="mb-5" :value="group.name" />

        <div class="training-plan-year__info-season-dates">
          <div class="training-plan-year__info-season-start">
            <label class="training-plan-year__info-label">Начало сезона</label>
            <v-text-field
              v-model="group.startSeason"
              class="training-plan-year__info-input"
              height="auto"
              flat
              hide-details
              return-masked-value
              v-mask="'##.##.####'"
              placeholder="__ . __ . ____"
            >
            </v-text-field>
          </div>
          <span class="training-plan-year__info-season-separator"></span>
          <div class="training-plan-year__info-season-end">
            <label class="training-plan-year__info-label">Окончание сезона</label>
            <v-text-field
              v-model="group.endSeason"
              class="training-plan-year__info-input"
              height="auto"
              flat
              hide-details
              return-masked-value
              v-mask="'##.##.####'"
              placeholder="__ . __ . ____"
            >
            </v-text-field>
          </div>
        </div>

        <span class="training-plan-year__prev-step" @click="prevStep($event)">
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.635.271a.926.926 0 0 0-1.31 0L.272 3.326a.923.923 0 0 0-.27.671.923.923 0 0 0 .27.669L3.326 7.72a.926.926 0 1 0 1.309-1.309L2.219 3.996 4.635 1.58a.926.926 0 0 0 0-1.309Z"
              fill="#464EA3"
            />
          </svg>
          Вернуться назад</span
        >
      </div>
    </left-menu>

    <div class="container container--targets">
      <Header />

      <div class="section-title--create d-flex align-center justify-space-between mb-8">
        <div class="d-flex align-center">
          <wu-icon icon="education" class="mr-3" />
          <h2 class="h2">Создание годового учебно-тренировочного плана</h2>
        </div>

        <div>
          <base-button class="mr-5" label="Ручное создание УТП" outlined @click="nextStep($event)" />
          <base-button label="Создать УТП" @click="nextStep($event)" />
        </div>
      </div>

      <section class="targets">
        <div class="targets__section-header">
          <h2 class="targets__section-title">Главная цель - Развитие игроков</h2>

          <wu-alert type="error"> Рекомендуем задать цели перед созданием УТП </wu-alert>
        </div>

        <div class="targets__tabs-wrapper">
          <v-tabs class="targets__tabs" fixed-tabs v-model="tab">
            <v-tab class="targets__tab">
              <p class="targets__tab-level targets__tab-level--body">Уровень</p>

              <p class="targets__tab-dates-text">Сроки прохождения уровня</p>
              <p class="targets__tab-dates">12 июля 2021 - 18 ноября 2021</p>
            </v-tab>
            <v-tab class="targets__tab">
              <p class="targets__tab-level targets__tab-level--intelligence">Уровень</p>

              <p class="targets__tab-dates-text">Сроки прохождения уровня</p>
              <p class="targets__tab-dates">12 июля 2021 - 18 ноября 2021</p>
            </v-tab>
            <v-tab class="targets__tab">
              <p class="targets__tab-level targets__tab-level--spirit">Уровень</p>

              <p class="targets__tab-dates-text">Сроки прохождения уровня</p>
              <p class="targets__tab-dates">12 июля 2021 - 18 ноября 2021</p>
            </v-tab>
          </v-tabs>

          <v-tabs-items class="targets__content" v-model="tab">
            <v-tab-item class="targets__tab-content">
              <div class="targets__card">
                <div class="targets__card-header">
                  <img class="targets__card-icon" src="@/assets/images/svg/targets/target-body.svg" alt="Вектор Тела" />
                  <div>
                    <p class="targets__card-status">Задайте цели на сезон</p>
                    <h3 class="targets__card-title">Вектор Тела</h3>
                  </div>
                </div>

                <v-expansion-panels class="targets__panels">
                  <v-expansion-panel class="targets__panel">
                    <v-expansion-panel-header class="targets__panel-header" disable-icon-rotate>
                      <p>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.38 1.422c-.145.586-.229 1.065-.384 1.52-.108.298-.348.55-.54.813-.155.203-.323.406-.467.574C9.19 2.69 6.22 3.3 4.35 6.027c-1.677 2.464-1.33 5.777.815 7.87 2.097 2.045 5.393 2.32 7.813.67 2.241-1.531 3.75-4.964 1.654-8.576.311-.275.623-.574.958-.86.096-.085.252-.18.36-.168.587.06 1.103-.048 1.438-.61 2.397 3.492 2.157 8.946-1.774 12.331-3.702 3.181-9.346 2.978-12.834-.502-3.487-3.469-3.726-9.078-.527-12.81C5.583-.54 11.048-.85 14.38 1.422Z"
                            fill="#464EA3"
                          />
                          <path
                            d="M12.725 7.857c.874 1.495.419 3.457-.971 4.545a3.685 3.685 0 0 1-4.865-.287C5.547 10.8 5.39 8.755 6.505 7.271c1.079-1.423 3.068-1.914 4.518-1.076-.755.753-1.51 1.483-2.241 2.236-.216.227-.42.503-.491.79-.144.55.06 1.04.575 1.315.527.287 1.042.228 1.486-.191.659-.634 1.306-1.292 1.953-1.938.144-.155.264-.347.42-.55Z"
                            fill="#464EA3"
                          />
                          <path
                            d="M16.919.585v1.483h1.486c.024.048.048.096.072.132-.623.598-1.246 1.208-1.881 1.806-.084.083-.264.12-.384.107-.635-.107-1.03.228-1.438.646-1.558 1.591-3.152 3.158-4.733 4.737-.132.131-.252.287-.408.347a.524.524 0 0 1-.455-.096c-.084-.072-.108-.3-.06-.407.06-.155.216-.275.347-.406 1.666-1.663 3.344-3.314 4.986-5 .215-.227.359-.598.383-.921.024-.383.132-.67.407-.933.528-.514 1.007-1.052 1.51-1.59.048.023.108.06.168.095Z"
                            fill="#464EA3"
                          />
                        </svg>
                        Развить скорость
                      </p>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="targets__panel-content">
                      <div class="targets__target-actions">
                        <button>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 15.896c.011-.028.026-.055.034-.084l1.36-4.755c.015-.05.044-.1.079-.134 2.6-2.608 5.201-5.217 7.805-7.824.19-.19.435-.254.688-.278.573-.053 1.094.126 1.574.432.682.434 1.208 1.022 1.51 1.805.171.445.214.9.044 1.357-.06.165-.147.306-.271.43-2.588 2.572-5.174 5.15-7.762 7.724a.336.336 0 0 1-.134.074L.155 15.964c-.03.009-.06.022-.09.034H0v-.102Zm2.431-1.462c.013-.003.03-.005.046-.01.596-.183 1.193-.366 1.79-.552a.194.194 0 0 0 .089-.067c.178-.222.209-.482.157-.755-.144-.75-.836-1.44-1.563-1.561-.261-.043-.51-.02-.728.155a.319.319 0 0 0-.096.14c-.139.437-.275.876-.41 1.313l-.144.469c.444.125.676.463.859.868Z"
                              fill="currentColor"
                            />
                            <path
                              d="M15.998 2.682c-.03.16-.047.325-.088.484-.127.496-.372.92-.723 1.275-.379.385-.761.766-1.141 1.149-.01.01-.02.017-.035.029.038-.123.084-.24.108-.36.096-.459.008-.891-.19-1.305a3.46 3.46 0 0 0-.605-.863c-.323-.346-.665-.665-1.082-.88-.592-.307-1.202-.399-1.842-.185l-.033.001.549-.55c.225-.227.447-.458.677-.679a2.724 2.724 0 0 1 1.715-.784c.02-.002.042-.009.063-.014h.278l.062.015c.163.031.33.043.486.093.851.273 1.444.832 1.713 1.735.046.15.06.31.088.465v.374Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                        <button>
                          <svg
                            width="13"
                            height="17"
                            viewBox="0 0 13 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.225 3.956h5.359c.77 0 .927.178.826.926l-1.273 9.57c-.123.937-.737 1.529-1.674 1.54-2.155.011-4.321.022-6.476 0-.95-.011-1.552-.58-1.675-1.53C.876 11.224.452 7.998.017 4.771c-.079-.592.111-.815.737-.815h5.47ZM10.847 2.348H1.289C2.417 1.51 3.411.74 4.45.048c.168-.112.58-.011.804.134.502.301.95.703 1.452 1.038.156.1.457.168.591.09 1.039-.637 1.932-.425 2.747.413.19.2.458.357.804.625Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      </div>
                      <div class="targets__target-inner">
                        <p class="targets__target-text">Целевое значение</p>
                        <wu-input class="targets__target-value" value="65" readonly></wu-input>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>

                <div class="targets__new-target">
                  <div class="targets__new-inner">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.3792 1.42233C14.2354 2.0084 14.1515 2.48682 13.9957 2.94132C13.8879 3.24033 13.6482 3.4915 13.4565 3.75463C13.3007 3.95796 13.1329 4.16129 12.9891 4.32874C9.19043 2.69015 6.21858 3.30013 4.34918 6.02713C2.67153 8.491 3.01904 11.8041 5.16405 13.8972C7.26112 15.9424 10.5565 16.2175 12.9771 14.5669C15.218 13.036 16.7279 9.60333 14.6308 5.99125C14.9424 5.71616 15.254 5.41715 15.5895 5.1301C15.6854 5.04637 15.8411 4.95069 15.949 4.96265C16.5362 5.02245 17.0515 4.91481 17.387 4.35266C19.7836 7.84513 19.544 13.2991 15.6135 16.684C11.9106 19.8655 6.26651 19.6621 2.77938 16.1816C-0.707759 12.7131 -0.947425 7.10358 2.25211 3.3719C5.58346 -0.539194 11.0478 -0.850168 14.3792 1.42233Z"
                        fill="#464EA3"
                      />
                      <path
                        d="M12.7245 7.85712C13.5993 9.35218 13.144 11.3137 11.7539 12.4021C10.2919 13.5503 8.21883 13.4188 6.88868 12.1151C5.54655 10.7994 5.39077 8.75416 6.50521 7.27105C7.58371 5.84775 9.57294 5.35737 11.0229 6.1946C10.268 6.94812 9.51302 7.67771 8.78204 8.43122C8.56634 8.65847 8.36262 8.93357 8.29072 9.22062C8.14693 9.7708 8.35064 10.2612 8.86592 10.5363C9.39319 10.8233 9.90847 10.7635 10.3519 10.3449C11.0109 9.711 11.658 9.05317 12.3051 8.4073C12.4489 8.25182 12.5688 8.06045 12.7245 7.85712Z"
                        fill="#464EA3"
                      />
                      <path
                        d="M16.919 0.585064C16.919 1.05153 16.919 1.52995 16.919 2.06817C17.4343 2.06817 17.9256 2.06817 18.405 2.06817C18.4289 2.11601 18.4529 2.16385 18.4769 2.19974C17.8537 2.79776 17.2306 3.40775 16.5955 4.00578C16.5116 4.0895 16.3319 4.12538 16.212 4.11342C15.5769 4.00578 15.1815 4.34067 14.774 4.75929C13.2162 6.35004 11.6224 7.91687 10.0406 9.49566C9.90883 9.62723 9.789 9.78272 9.63322 9.84252C9.5014 9.89036 9.2857 9.84252 9.17785 9.74684C9.09397 9.67507 9.07 9.44782 9.11794 9.34018C9.17785 9.18469 9.33364 9.06508 9.46545 8.93352C11.1311 7.271 12.8088 5.62045 14.4505 3.93401C14.6662 3.70676 14.81 3.33599 14.834 3.01305C14.8579 2.63032 14.9658 2.34326 15.2414 2.08013C15.7687 1.56583 16.248 1.0276 16.7513 0.48938C16.7992 0.513301 16.8591 0.549183 16.919 0.585064Z"
                        fill="#464EA3"
                      />
                    </svg>

                    <wu-input class="targets__new-input" label="Ввести название цели"></wu-input>
                  </div>

                  <div class="targets__new-inner">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1852_17189)">
                        <path
                          d="M8.44795 1.10634e-05C8.77933 0.0113615 9.05101 0.198891 9.20276 0.555197C9.82012 2.00633 10.4363 3.45796 11.0489 4.91082C11.0847 4.99595 11.1291 5.02803 11.218 5.03518C11.9308 5.09193 12.6432 5.15239 13.3558 5.21284C14.2402 5.28785 15.1252 5.3562 16.0086 5.44257C16.3684 5.4776 16.6134 5.69203 16.7244 6.03624C16.8389 6.39082 16.7548 6.7074 16.4752 6.95415C15.9358 7.42989 15.3883 7.89674 14.844 8.36704C14.1814 8.9395 13.5199 9.51295 12.8554 10.0832C12.7868 10.1422 12.7688 10.1967 12.7895 10.2843C13.1461 11.7946 13.4992 13.3057 13.8545 14.8163C13.9598 15.2639 13.8533 15.6116 13.5285 15.8337C13.2152 16.0481 12.8894 16.0533 12.566 15.8601C11.8395 15.4258 11.1158 14.9866 10.3911 14.5496C9.7577 14.1676 9.1233 13.7874 8.49162 13.4025C8.41365 13.3548 8.35813 13.358 8.28139 13.4042C6.93858 14.2172 5.59379 15.0271 4.24975 15.8379C3.82311 16.0952 3.36367 16.0298 3.06386 15.6647C2.85758 15.4132 2.84574 15.128 2.9173 14.825C3.27212 13.3183 3.623 11.8107 3.98005 10.3043C4.00596 10.1955 3.98054 10.1343 3.89862 10.0639C2.69942 9.03129 1.50169 7.99692 0.306928 6.95909C0.0167502 6.70691 -0.0691188 6.38391 0.05549 6.02144C0.178371 5.66464 0.440667 5.46847 0.818441 5.43615C1.89945 5.34362 2.98046 5.25331 4.06148 5.16152C4.55695 5.11957 5.05218 5.07417 5.5479 5.03543C5.64067 5.02827 5.68904 4.99792 5.72728 4.90687C6.3412 3.45006 6.95955 1.99498 7.57791 0.539899C7.72324 0.198891 8.02749 -0.00171618 8.44795 1.10634e-05Z"
                          fill="#464EA3"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1852_17189">
                          <rect width="16.7741" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <wu-select class="targets__new-select" outlined label="Выберите качество"></wu-select>
                  </div>

                  <div class="targets__new-inner">
                    <div class="d-flex align-center">
                      <svg
                        class="mb-0"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5762 9.40843C1.5762 10.9238 1.57946 12.3532 1.57185 13.7826C1.57076 13.9957 1.59033 14.2718 1.47184 14.4066C1.28922 14.6142 0.977246 14.8664 0.753317 14.8382C0.498952 14.8066 0.241325 14.5175 0.0630523 14.2805C-0.0369546 14.1479 0.0119618 13.8957 0.0119618 13.6979C0.0108748 9.80302 0.0108748 5.90928 0.0119618 2.01445C0.0119618 1.02416 0.198931 0.845888 1.19139 0.846975C3.29262 0.850236 5.39494 0.860019 7.49508 0.840453C8.05599 0.835018 8.45167 1.0122 8.63321 1.55137C8.86801 2.24816 9.34739 2.46013 10.0583 2.42534C11.0519 2.37643 12.0497 2.40904 13.0466 2.41447C13.7705 2.41773 14.0271 2.66449 14.0292 3.39606C14.0368 5.606 14.0368 7.81593 14.0281 10.0259C14.0249 10.7085 13.7499 10.9759 13.0585 10.9803C11.628 10.9901 10.1964 10.9781 8.76582 10.9857C8.29405 10.9879 7.94403 10.8064 7.7951 10.3574C7.53422 9.56714 6.99288 9.36386 6.2026 9.39213C4.68728 9.44539 3.16761 9.40843 1.5762 9.40843Z"
                          fill="#464EA3"
                        />
                      </svg>

                      <p class="targets__new-label">Целевое значение</p>
                      <wu-input class="targets__new-input targets__new-input--small"></wu-input>
                    </div>

                    <base-button label="Задать цель"></base-button>
                  </div>
                </div>

                <button class="targets__add-target" @click="addTarget('body')">+ Добавить цель</button>
              </div>

              <div class="targets__card">
                <div class="targets__card-header">
                  <img
                    class="targets__card-icon"
                    src="@/assets/images/svg/targets/target-intelligence.svg"
                    alt="Вектор Интеллекта"
                  />
                  <div>
                    <p class="targets__card-status">Задайте цели на сезон</p>
                    <h3 class="targets__card-title">Вектор Интеллекта</h3>
                  </div>
                </div>

                <button class="targets__add-target" @click="addTarget('intelligence')">+ Добавить цель</button>
              </div>
              <div class="targets__card">
                <div class="targets__card-header">
                  <img
                    class="targets__card-icon"
                    src="@/assets/images/svg/targets/target-spirit.svg"
                    alt="Вектор Духа"
                  />
                  <div>
                    <p class="targets__card-status">Задайте цели на сезон</p>
                    <h3 class="targets__card-title">Вектор Духа</h3>
                  </div>
                </div>

                <button class="targets__add-target" @click="addTarget('spirit')">+ Добавить цель</button>
              </div>
            </v-tab-item>

            <v-tab-item class="targets__tab-content"> </v-tab-item>

            <v-tab-item class="targets__tab-content"> </v-tab-item>
          </v-tabs-items>
        </div>
      </section>

      <section class="timeline mt-10 mb-10">
        <v-slide-group v-model="slideActive" :show-arrows="false" center-active class="timeline__slide-group">
          <div class="timeline__months">
            <span class="timeline__month" v-for="(w, index) in months" :key="index">{{ w }}</span>
          </div>
          <v-slide-item v-for="week in weeks" :key="week.week" v-slot="{ active, toggle }">
            <v-btn
              class="timeline__week-num"
              :input-value="active"
              active-class="timeline__week-num--active"
              @click="toggle"
            >
              {{ week.week }}

              <span v-if="active" class="timeline__week-range">
                {{ dateWithoutYear(week.startWeek) }} - {{ dateWithoutYear(week.endWeek) }}</span
              >
            </v-btn>
          </v-slide-item>
        </v-slide-group>

        <div class="timeline__train-line" v-if="slideActive !== null">
          <div class="timeline__train timeline__train--active">
            <p class="timeline__train-type">Занятия в зале</p>
            <p class="timeline__train-dates">
              {{ dateFull(weeks[slideActive].startWeek) }} - {{ dateFull(weeks[slideActive].endWeek) }}
            </p>
          </div>
          <div class="timeline__train">
            <p class="timeline__train-type">Занятия в зале</p>
            <p class="timeline__train-dates">
              {{ dateFull(weeks[slideActive + 1].startWeek) }} - {{ dateFull(weeks[slideActive + 1].endWeek) }}
            </p>
          </div>
          <div class="timeline__train">
            <p class="timeline__train-type">Занятия в зале</p>
            <p class="timeline__train-dates">
              {{ dateFull(weeks[slideActive + 2].startWeek) }} - {{ dateFull(weeks[slideActive + 2].endWeek) }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import LeftMenu from '@/components/LeftMenu.vue'
import SelectGroup from '@/components/SelectGroup.vue'
import Header from '@/components/Header.vue'

export default {
  props: {
    group: {
      type: Object,
    },
  },
  data() {
    return {
      slideActive: null,
      tab: 0,
    }
  },
  components: { LeftMenu, Header, SelectGroup },
  computed: {
    months() {
      let start = moment(this.group.startSeason, 'DD.MM.YYYY'),
        end = moment(this.group.endSeason, 'DD.MM.YYYY'),
        months = []

      for (let i = 0; i <= this.countWeeks; i++) {
        if (end > start || start.format('M') === end.format('M')) {
          months.push(start.format('MMMM'))
          start.add(1, 'month')
        }
      }

      return months
    },
    countWeeks() {
      if (this.group.endSeason) {
        return moment(this.group.endSeason, 'DD.MM.YYYY')
          .add(1, 'days')
          .diff(moment(this.group.startSeason, 'DD.MM.YYYY'), 'week')
      } else return 52
    },
    weeks() {
      moment.locale('ru')
      let weeks = []

      for (let index = 0; index < this.countWeeks; index++) {
        let start = moment(this.group.startSeason, 'DD.MM.YYYY').add(index, 'week').startOf('week'),
          end = moment(this.group.startSeason, 'DD.MM.YYYY').add(index, 'week').endOf('week')

        weeks.push({ week: index + 1, startWeek: start, endWeek: end })
      }
      return weeks
    },
  },

  methods: {
    nextStep() {
      this.$emit('nextStep')
    },
    prevStep() {
      this.$emit('prevStep')
    },
    dateWithoutYear(date) {
      return moment(date).format('DD MMMM')
    },
    dateFull(date) {
      return moment(date).format('DD MMMM YYYY')
    },
  },
}
</script>

<style lang="scss" scoped>
.container--targets {
  width: calc(100% - 384px);
}

.section-title--create {
  h2 {
    font-weight: normal;
    color: $blue02;
  }
}

.training-plan-targets {
  &__group-select-label {
    margin-bottom: 12px;
    font-size: 20px;
    line-height: 27px;
    color: $blue02;
  }
}

.training-plan-year {
  &__info {
    margin-bottom: 60px;
  }

  &__info-title {
    margin-bottom: 10px;
    padding-left: 25px;
    font-size: 20px;
    line-height: 27px;

    color: $blue02;
  }

  &__info-form {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    padding: 20px 23px;
    background-color: #ffffff;

    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    border-radius: 12px;
    > div {
      padding: 0 10px;
      &:first-child {
        padding-left: 0px;
      }
      &:last-child {
        padding-right: 0px;
      }
    }
  }

  &__info-label {
    margin-bottom: 2px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;

    color: $blue02;
  }

  &__info-input {
    &::v-deep {
      margin-top: 0px;
      padding-top: 0px;
      background-color: #ffffff;
      border: 1px solid #ecf6ff;
      border-radius: 4px;
      .v-input__slot {
        &::before,
        &::after {
          display: none;
        }
        input {
          padding: 0px 10px;
          font-size: 14px;
          line-height: 32px;
          color: $blue02;
        }
      }
      &.v-input--is-focused {
        border-color: $blue02;
      }
    }
  }

  &__info-season-dates {
    display: flex;
    align-items: flex-end;
  }

  &__info-season-separator {
    position: relative;
    bottom: 15px;
    display: inline-block;
    margin: 0 4px;
    width: 16px;
    height: 1px;
    background-color: #dce5f2;
  }

  &__info-select {
    padding: 0;
    margin-top: 0px;
    &::v-deep {
      &.v-input--is-focused.v-select--is-menu-active {
        .v-select__slot {
          label {
            display: flex;
            align-items: center;
          }
        }
      }
      .v-input__slot {
        padding: 0 12px;
        border-bottom: 1px solid #ecf6ff;
      }
      .v-select__slot {
        label {
          display: flex;
          align-items: center;
        }
      }
      .v-select__selection {
        margin: 0px;
        font-size: 20px;
        line-height: 27px;
        color: $blue02;
      }
      .v-input__slot {
        &::before,
        &::after {
          display: none;
        }
      }

      .v-input__icon.v-input__icon--append {
        i {
          width: 10px;
          height: 6px;
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.707 1.707 3.586 3.586a1 1 0 0 0 1.414 0l3.586-3.586C9.923 1.077 9.477 0 8.586 0H1.414C.524 0 .077 1.077.707 1.707Z' fill='%23B9CBE5'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }
  }

  &__info-select--border {
    align-items: center;
    &::v-deep {
      .v-input__control {
        border: 1px solid #ecf6ff;
        border-radius: 4px;
      }
      .v-select__selection {
        font-size: 14px;
        line-height: 19px;
      }
      .v-select__slot label {
        font-weight: 300;
        font-size: 14px;
        line-height: 19px;
        color: $blue06;
      }
    }
  }

  &__info-group {
  }

  &__prev-step {
    svg {
      margin-right: 6px;
    }
    position: absolute;
    bottom: 28px;
    left: 50%;

    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: $blue02;

    cursor: pointer;

    transform: translateX(-50%);
  }
}

.targets {
  &__section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  &__section-title {
    margin-left: 11px;
    font-size: 20px;
    line-height: 27px;
    font-weight: normal;
    color: $blue02;
  }

  &__tabs {
    font-family: $Manrope;
    &::v-deep {
      .v-item-group {
        height: auto;
      }
      .v-tabs-slider-wrapper {
        height: 0px !important;
      }
      .v-tabs-slider {
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;

        border-bottom: 18px solid #fff;

        position: relative;
        top: -18px;
        left: 41px;
        background-color: transparent;
      }
      .v-slide-group__prev,
      .v-slide-group__next {
        display: none;
      }
      .v-slide-group__content {
        width: 100%;
      }
    }
  }
  &__tabs-wrapper {
    background-color: $blue01;
    overflow: hidden;
    border-radius: 28px;
    box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15);
  }
  &__tab {
    position: relative;
    font-family: $Manrope;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 90px;
    padding-right: 45px;
    padding-top: 50px;
    padding-bottom: 16px;
    margin: 0px;
    background-color: $blue01;
    &::after {
      content: '';
      position: absolute;
      right: 0px;
      top: 22px;
      bottom: 22px;
      width: 1px;
      background-color: #525bba;
    }
  }

  &__tab-level {
    position: relative;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;

    color: #ffffff;
    &::after {
      content: '';
      position: absolute;
      top: -30px;
      left: -65px;
      width: 53px;
      height: 63px;

      background-repeat: no-repeat;
      background-position: center;
    }
    &--body {
      &::after {
        background-image: url('~@/assets/images/svg/targets/target-lvl-1.svg');
      }
    }
    &--intelligence {
      &::after {
        background-image: url('~@/assets/images/svg/targets/target-lvl-2.svg');
      }
    }
    &--spirit {
      &::after {
        background-image: url('~@/assets/images/svg/targets/target-lvl-3.svg');
      }
    }
  }

  &__panels {
    margin-bottom: 15px;
  }

  &__panel {
    &::v-deep {
      &::before {
        display: none;
      }
    }
  }

  &__panel-header {
    &::v-deep {
      min-height: auto;
      padding: 12px;
      font-size: 16px;
      line-height: 22px;
      color: $blue01;
      svg {
        margin-right: 15px;
        vertical-align: middle;
      }
      .v-expansion-panel-header__icon {
        display: none;
      }
    }
  }

  &__panel-content {
    border-bottom: 1px solid #ecf6ff;
    &::v-deep {
      .v-expansion-panel-content__wrap {
        padding: 0px;
        padding-bottom: 35px;
      }
    }
  }

  &__target-actions {
    position: absolute;
    top: 12px;
    right: 32px;
    button {
      &:first-child {
        margin-right: 25px;
      }
      color: #b9cbe5;
      &:hover {
        color: $blue02;
      }
    }
  }

  &__target-inner {
    display: flex;
    align-items: center;
    padding-left: 50px;
  }

  &__target-text {
    margin-right: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: $blue02;
  }

  &__target-value {
    max-width: 70px;
  }

  &__tab-dates-text {
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
  }

  &__tab-dates {
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
  }

  &__content {
    &::v-deep {
      padding: 30px 25px !important;
    }
  }

  &__tab-content {
    display: flex;
    justify-content: space-between;
  }

  &__add-target {
    margin-left: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    color: $blue05;
  }

  &__new-target {
    padding: 16px 12px 0;
    border-top: 1px solid #ecf6ff;
  }

  &__new-inner {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 10px;
    svg {
      margin-bottom: 10px;
      margin-right: 13px;
    }
    p {
      margin-right: 10px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: $blue02;
    }
  }

  &__new-input {
    width: 100%;
    &--small {
      max-width: 70px;
    }
  }

  &__new-select {
    width: 100%;
  }

  &__card {
    width: calc((100% - 40px) / 3);
  }

  &__card-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    min-height: 88px;
  }

  &__card-icon {
    margin-right: 13px;
  }

  &__card-title {
    font-size: 20px;
    line-height: 27px;
    font-weight: normal;
    color: $blue02;
  }
  &__card-status {
    font-size: 14px;
    line-height: 19px;
    color: $blue02;
  }
}

.timeline {
  padding: 20px 20px 25px;
  background-color: #ffffff;

  box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  border-radius: 28px;
  &__slide-group {
    &::v-deep {
      .v-slide-group__content {
        padding-top: 45px;
        padding-bottom: 50px;
      }
      .v-slide-group__prev,
      .v-slide-group__next {
        display: none;
      }
    }
  }
  &__week-num {
    min-width: auto !important;
    width: 36px;
    height: 36px;
    margin-right: 16px;
    padding: 0px !important;
    text-align: center;

    font-size: 16px;
    line-height: 22px;

    color: $blue02;

    border-radius: 50%;
    background-color: #ecf6ff !important;
    box-shadow: none !important;
    &:last-child {
      margin-right: 0px;
    }
    &--active {
      color: #fff;
      background-color: $blue02 !important;
      &::before {
        display: none;
      }
    }
  }
  &__week-range {
    position: absolute;
    bottom: -54px;
    left: 50%;
    padding: 6px 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    text-transform: lowercase;
    color: #ffffff;

    background-color: $blue02;
    border-radius: 21px;
    transform: translateX(-50%);
    &::after {
      content: '';
      position: absolute;
      top: -11px;
      left: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: $blue02;
      transform: translateX(-50%);
    }
  }
  &__months {
    position: absolute;
    top: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__month {
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    text-transform: capitalize;
    color: $blue02;
  }

  &__train-line {
    margin-top: 10px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    border-top: 1px dashed #dce5f2;
  }

  &__train {
    position: relative;
    width: calc(100% - 28px);
    padding: 7px 32px;
    margin-right: 14px;
    background-color: #ecf6ff;
    border-radius: 12px;
    &::after {
      content: '';
      position: absolute;
      top: 7px;
      bottom: 7px;
      left: 13px;
      width: 5px;
      background-color: $blue02;
      border-radius: 12px;
    }
    &:last-child {
      margin-right: 0;
    }
    &--active {
      background-color: rgba($good, 0.2);
      &::after {
        background-color: $good;
      }
    }
  }

  &__train-type {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: $blue02;
  }

  &__train-dates {
    font-size: 14px;
    line-height: 32px;
    color: $blue02;
  }
}
</style>
