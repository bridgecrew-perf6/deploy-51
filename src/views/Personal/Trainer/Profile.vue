<template>
  <div class="d-flex">
    <left-menu>
      <sidebar />
    </left-menu>

    <div class="container">
      <Header />

      <h1 class="h1 profile-title">Мой профиль</h1>

      <v-card v-if="trainer" class="profile">
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
          </div>

          <div class="profile__information">
            <div class="profile__information-head">
              <h2 class="profile__full-name">{{ fullName }}</h2>

              <div class="d-flex align-center">
                <p class="profile__about">Работа в споршколе • Частная практика</p>
                <router-link :to="{ name: 'PersonalTrainerProfileEdit' }" class="profile__edit-page">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 15.896c.011-.027.026-.055.034-.084l1.36-4.755c.015-.05.044-.1.079-.134 2.6-2.608 5.201-5.217 7.805-7.824.19-.19.435-.254.688-.278.573-.053 1.094.126 1.574.432.682.434 1.208 1.022 1.51 1.805.171.445.214.9.044 1.358-.06.164-.147.306-.271.429-2.588 2.572-5.174 5.15-7.762 7.724a.334.334 0 0 1-.134.074L.155 15.964c-.03.009-.06.022-.09.034H0v-.102Zm2.431-1.462c.013-.003.03-.005.046-.01.596-.183 1.193-.366 1.79-.552a.194.194 0 0 0 .089-.067c.178-.222.209-.482.157-.755-.144-.75-.836-1.44-1.563-1.56-.261-.044-.51-.021-.728.155a.318.318 0 0 0-.096.14c-.139.436-.275.875-.41 1.313-.05.159-.098.318-.144.468.444.125.676.463.859.868Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16 2.682c-.03.16-.048.325-.089.484-.127.496-.372.92-.723 1.275-.379.385-.761.766-1.142 1.149-.01.01-.019.017-.034.029.038-.123.083-.24.108-.36.096-.459.008-.891-.19-1.305a3.46 3.46 0 0 0-.605-.863c-.323-.346-.665-.665-1.082-.88-.592-.307-1.202-.399-1.842-.185l-.033.001.549-.55c.225-.227.447-.458.677-.679A2.724 2.724 0 0 1 13.31.014c.02-.002.042-.009.063-.014h.278l.062.015c.163.031.33.043.486.093.851.273 1.444.832 1.713 1.735.046.15.06.31.088.465v.374Z"
                      fill="currentColor"
                    />
                  </svg>
                </router-link>
              </div>
            </div>

            <ul class="profile__info-list">
              <li class="profile__info-item">
                <img src="@/assets/images/svg/profile/bday.svg" alt="" class="profile__info-icon" />
                {{ bday }}
              </li>

              <li class="profile__info-item">
                <img src="@/assets/images/svg/profile/book.svg" alt="" class="profile__info-icon" />
                {{ sportType }}
              </li>
              <li class="profile__info-item">
                <img src="@/assets/images/svg/profile/position.svg" alt="" class="profile__info-icon" />
                {{ coachCategory }}
              </li>
              <li class="profile__info-item">
                <img src="@/assets/images/svg/profile/experience.svg" alt="" class="profile__info-icon" />
                Стаж работы {{ workExperience }} лет
              </li>

              <li class="profile__info-item">
                <img src="@/assets/images/svg/profile/award.svg" alt="" class="profile__info-icon" />
                {{ sportTitle }}
              </li>
              <li class="profile__info-item">
                <img src="@/assets/images/svg/profile/star.svg" alt="" class="profile__info-icon" />
                Мастер первой категории
              </li>
            </ul>
          </div>
        </section>

        <section class="profile__contacts section contacts">
          <h3 class="section-title">Контакты</h3>

          <div class="contacts__inner">
            <div class="contacts__phone">
              <a href="tel:" class="contacts__phone-link"
                ><img
                  src="@/assets/images/svg/profile/social-media/phone.svg"
                  alt="Телефон"
                  class="contacts__phone-icon"
                />{{ phone }}</a
              >
              <a
                v-if="trainer.user.whatsapp"
                :href="`https://wa.me/${trainer.user.whatsapp}`"
                class="contacts__phone-link"
                ><img
                  src="@/assets/images/svg/profile/social-media/whatsapp.svg"
                  alt="WhatsApp"
                  class="contacts__sm-icon"
              /></a>
              <a
                v-if="trainer.user.telegram"
                :href="`https://t.me/${trainer.user.telegram}`"
                class="contacts__phone-link"
                ><img
                  src="@/assets/images/svg/profile/social-media/telegram.svg"
                  alt="Telegram"
                  class="contacts__sm-icon"
              /></a>
            </div>

            <div class="contacts__email">
              <a :href="`mailto:${trainer.user.email}`" class="contacts__email-link"
                ><img
                  src="@/assets/images/svg/profile/social-media/email.svg"
                  alt="Email"
                  class="contacts__email-icon"
                />{{ trainer.user.email }}</a
              >
            </div>

            <div class="contacts__sm">
              <a
                v-if="trainer.user.vk"
                :href="trainer.user.vk"
                target="_blank"
                rel="nofollow noopener"
                class="contacts__sm-link"
                ><img src="@/assets/images/svg/profile/social-media/vk.svg" alt="VK" class="contacts__sm-icon"
              /></a>
            </div>
          </div>
        </section>

        <section v-if="trainerWork.length || trainerEducations.length" class="profile__education section education">
          <h3 class="section-title">Образование и опыт</h3>

          <div class="timeline">
            <div v-for="(work, index) in trainerWork" :key="`work-${index}`" class="timeline__item">
              <div class="timeline__dates">
                <span class="timeline__years">{{ getYear(work.startDate) }} — {{ getYear(work.endDate) }} </span>
              </div>
              <div class="timeline__icon-wrapper">
                <div class="timeline__icon">
                  <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.99169 7.31415C4.45065 7.31415 2.9096 7.31582 1.36772 7.31332C0.483429 7.31165 0.0133636 6.84575 0.00752944 5.95563C0.000861847 4.90048 0.0216981 3.84534 0.000861846 2.79019C-0.0166406 1.86506 0.582609 1.30582 1.43439 1.35833C2.22284 1.40667 3.01711 1.36166 3.80806 1.37249C4.03642 1.37583 4.16477 1.31915 4.29646 1.10579C4.39897 0.939934 4.65401 0.784912 4.8482 0.774911C5.59581 0.736572 6.34674 0.750741 7.09685 0.763242C7.38272 0.768243 7.62692 0.857422 7.76361 1.1658C7.80945 1.26831 8.00781 1.35749 8.13866 1.35999C8.98545 1.37749 9.83223 1.36499 10.6798 1.36999C11.4683 1.37499 11.9617 1.83506 11.975 2.621C11.9934 3.74532 11.995 4.87048 11.9742 5.9948C11.9584 6.87326 11.4833 7.31332 10.6165 7.31332C9.07462 7.31415 7.53274 7.31415 5.99169 7.31415ZM6.0092 4.95549C5.68665 4.95049 5.42328 5.19552 5.40995 5.51224C5.39578 5.84895 5.65832 6.12232 5.99586 6.12399C6.29924 6.12482 6.57261 5.85312 6.58011 5.54224C6.58761 5.23636 6.31924 4.96049 6.0092 4.95549Z"
                      fill="white"
                    />
                    <path
                      d="M0.00740729 8.37606C0.79585 8.43107 1.54595 8.52441 2.29689 8.52942C4.93476 8.54775 7.57346 8.54775 10.2122 8.52775C10.7831 8.52358 11.3523 8.40523 11.9999 8.33105C11.9724 8.86196 11.9882 9.48038 11.8924 10.0805C11.8157 10.5597 11.3098 10.8956 10.8139 10.8964C7.62013 10.9006 4.42635 10.9022 1.23258 10.8956C0.522479 10.8939 0.0490797 10.4255 0.0115745 9.69791C-0.011762 9.22618 0.00740729 8.75361 0.00740729 8.37606Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div class="timeline__about">
                <p class="timeline__title">{{ work.workName }}</p>
                <p class="timeline__text">{{ work.jobTitle }}</p>
              </div>
            </div>
            <div class="timeline__item" v-for="(edu, index) in trainerEducations" :key="`edu-${index}`">
              <div class="timeline__dates">
                <span class="timeline__years">{{ getYear(edu.startDate) }} - {{ getYear(edu.endDate) }}</span>
                <div class="timeline__dates-desc">Высшее образование</div>
                <div class="timeline__dates-desc">Дневная/Очная</div>
              </div>
              <div class="timeline__icon-wrapper">
                <div class="timeline__icon">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.87628 8.74926C11.4006 8.07156 12.925 7.39385 14.4595 6.71183C14.4655 6.74463 14.4733 6.7675 14.4733 6.79015C14.4742 7.22513 14.4815 7.66032 14.4718 8.09529C14.4631 8.48215 14.2897 8.78594 13.9535 8.98466C12.3675 9.92214 10.7788 10.8551 9.19448 11.7952C8.86954 11.9881 8.53576 12.0763 8.1804 11.9197C7.96485 11.8245 7.76592 11.6905 7.56181 11.5703C6.15354 10.7416 4.7444 9.91373 3.33936 9.0796C3.17517 8.98207 3.01529 8.86405 2.88519 8.72575C2.72941 8.56026 2.65842 8.3432 2.65713 8.11212C2.65454 7.66981 2.65605 7.22772 2.65648 6.7854C2.65648 6.76534 2.66166 6.74527 2.66662 6.70924C4.23067 7.40917 5.78459 8.10435 7.3385 8.79975C7.3413 8.79414 7.34432 8.78853 7.34713 8.78292C7.08325 8.62563 6.82002 8.4677 6.5555 8.31149C5.74812 7.83508 4.94074 7.35911 4.13293 6.88379C3.15489 6.30814 2.1762 5.73335 1.19772 5.15813C0.866309 4.9633 0.535331 4.76825 0.204138 4.57299C0.179541 4.55832 0.154944 4.54278 0.132505 4.52509C-0.0547754 4.376 -0.0431243 4.18289 0.164869 4.06357C0.289364 3.99216 0.419683 3.9311 0.548061 3.8668C3.02565 2.62704 5.50388 1.38878 7.98039 0.147506C8.37609 -0.050779 8.76058 -0.0484056 9.15564 0.150095C10.9221 1.03709 12.6907 1.91934 14.4584 2.80374C15.2677 3.20873 16.0766 3.61479 16.8857 4.02042C17.0042 4.07976 17.1222 4.14815 17.1278 4.29724C17.1332 4.44267 17.0201 4.51646 16.9103 4.58119C15.6201 5.34153 14.3289 6.10036 13.0385 6.86049C11.9866 7.48016 10.9352 8.1009 9.88383 8.72122C9.87801 8.72467 9.87304 8.72985 9.86765 8.73438C9.87046 8.73956 9.87348 8.7443 9.87628 8.74926Z"
                      fill="white"
                    />
                    <path
                      d="M15.945 10.7841C15.797 10.6287 15.649 10.4734 15.4924 10.309C15.3279 10.4781 15.1752 10.6357 15.0224 10.7929C15.0129 10.7871 15.0034 10.7813 14.9939 10.7757C14.9939 10.7414 14.9939 10.7071 14.9939 10.6728C14.9937 9.31109 14.9937 7.94942 14.9933 6.58775C14.9933 6.52648 14.987 6.47211 15.0638 6.43974C15.3482 6.31978 15.6294 6.19269 15.9118 6.06863C15.9273 6.06173 15.9444 6.05828 15.9701 6.05029C15.9701 7.62945 15.9701 9.20019 15.9701 10.7709C15.9619 10.7753 15.9534 10.7798 15.945 10.7841Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div class="timeline__about">
                <p class="timeline__title">{{ edu.name }}</p>
                <p class="timeline__text">{{ edu.faculty }}</p>
                <p class="timeline__text">{{ edu.speciality }}</p>
              </div>
            </div>
          </div>
        </section>

        <section v-if="trainerAwards.length" class="profile__awards section awards">
          <h3 class="section-title">Достижения</h3>

          <ul class="awards__list">
            <li v-for="(award, index) in trainerAwards" :key="index" class="awards__item">
              <img
                v-if="award.type == 'DP'"
                src="@/assets/images/svg/profile/awards/cup.svg"
                alt=""
                class="awards__icon"
              />
              <img
                v-else-if="award.type == 'RW'"
                src="@/assets/images/svg/profile/awards/award.svg"
                alt=""
                class="awards__icon"
              />
              <img
                v-else-if="award.type == 'GR'"
                src="@/assets/images/svg/profile/awards/rank.svg"
                alt=""
                class="awards__icon"
              />

              <img
                v-else-if="award.type == 'DL'"
                src="@/assets/images/svg/profile/awards/participation.svg"
                alt=""
                class="awards__icon"
              />

              <p class="awards__text">
                <span class="awards__year">{{ award.year }}</span>
                • {{ award.name }}
              </p>
            </li>
          </ul>
        </section>
      </v-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

import LeftMenu from '@/components/LeftMenu.vue'
import Header from '@/components/Header.vue'

import Sidebar from '@/components/Profile/Sidebar.vue'

export default {
  name: 'Profile',
  props: ['profile'],
  data() {
    return {
      trainerID: localStorage.getItem('trainerID'),
      trainer: null,
      trainerWork: [],
      trainerAwards: [],
      trainerEducations: [],
      sportTypes: [
        { id: 'FB', title: 'Футбол' },
        { id: 'HC', title: 'Хоккей' },
        { id: 'BB', title: 'Баскетбол' },
        { id: 'VB', title: 'Волейбол' },
        { id: 'TN', title: 'Теннис' },
      ],
      coachCategories: [
        { id: '2Q', title: 'Тренер второй квалификационной категории' },
        { id: '1Q', title: 'Тренер первой квалификационной категории' },
        { id: 'HQ', title: 'Тренер высшей квалификационной категории' },
        { id: 'HC', title: 'Заслуженный тренер России' },
      ],
      sportTitles: [
        { id: '3JR', title: 'III юношеский разряд' },
        { id: '2JR', title: 'II юношеский разряд' },
        { id: '2JR', title: 'I юношеский разряд' },
        { id: '3AR', title: 'III разряд' },
        { id: '2AR', title: 'II разряд' },
        { id: '2AR', title: 'I разряд' },
        { id: 'CTM', title: 'Кандидат в Мастера спорта' },
        { id: 'MOS', title: 'Мастер спорта' },
        { id: 'IMS', title: 'Мастер спорта международного класса' },
        { id: 'HMS', title: 'Заслуженный Мастер спорта' },
      ],
      awardsTypes: [{ id: 'DP', title: 'Диплом' }],
    }
  },
  components: {
    LeftMenu,
    Header,
    Sidebar,
  },
  computed: {
    fullName() {
      return `${this.trainer.user.lastName} ${this.trainer.user.firstName} ${this.trainer.user.patronymic}`
    },
    bday() {
      return moment(this.trainer.user.birthDate).locale('ru').format('DD MMMM YYYY')
    },
    sportType() {
      return this.sportTypes.find(type => type.id === this.trainer.sportType).title
    },
    coachCategory() {
      return this.coachCategories.find(category => category.id === this.trainer.coachingCategories).title
    },
    sportTitle() {
      return this.sportTitles.find(title => title.id === this.trainer.sportTitle).title
    },
    phone() {
      return this.trainer.user.phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3 - $4 - $5')
    },
    workExperience() {
      return this.trainerWork.reduce(
        (sum, current) => sum + moment(current.endDate).diff(current.startDate, 'years'),
        0
      )
    },
  },
  methods: {
    getProfile() {
      if (this.trainerID) {
        this.$coach
          .getCoach(this.trainerID)
          .then(response => {
            this.trainer = response

            this.getWork()
            this.getAwards()
            this.getEducations()
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    getWork() {
      if (this.trainerID) {
        this.$coach
          .getCoachWork(this.trainerID)
          .then(response => {
            this.trainerWork = response
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    getAwards() {
      if (this.trainerID) {
        this.$coach
          .getCoachRewards(this.trainerID)
          .then(response => {
            this.trainerAwards = response
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    getEducations() {
      if (this.trainerID) {
        this.$coach
          .getCoachEducations(this.trainerID)
          .then(response => {
            this.trainerEducations = response
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    getYear(date) {
      return moment(date).format('YYYY')
    },
  },
  mounted() {
    this.getProfile()
  },
}
</script>

<style scoped lang="scss">
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
  &:last-child {
    border-bottom: none;
  }
}

.profile {
  &::v-deep {
    margin-bottom: 40px;
    padding: 25px 20px 30px;
    background-color: #ffffff;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15) !important;
    border-radius: 28px !important;
    section:last-child {
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
  }

  &__about {
    margin-right: 32px;
    font-size: 14px;
    line-height: 19px;
    color: $blue06;
  }

  &__avatar-wrapper {
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
  }

  &__information {
    flex-grow: 1;
    padding-top: 25px;
  }

  &__information-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__full-name {
    font-size: 20px;
    line-height: 27px;
    font-weight: normal;
    color: $blue02;
  }

  &__edit-page {
    color: $blue06 !important;
    &:hover {
      color: $blue02 !important;
    }
  }

  &__info-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__info-item {
    flex: 0 0 33.3333%;
    margin-bottom: 13px;
    font-size: 16px;
    line-height: 22px;
    color: $blue02;
  }

  &__info-icon {
    margin-right: 10px;
  }
}

.contacts,
.education {
  padding: 32px 21px;
}

.awards {
  padding: 32px 21px 0;
  border: none;
}

.contacts {
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__phone-link,
  &__email-link {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: $blue02 !important;
  }

  &__phone {
    display: flex;
    align-items: center;
  }

  &__phone-link {
    margin-right: 20px;
    &:last-child {
      margin-right: 0px;
    }
  }

  &__phone-icon {
    margin-right: 10px;
  }

  &__email-icon {
    margin-right: 10px;
  }

  &__sm-link {
    margin-right: 24px;
    &:last-child {
      margin-right: 0px;
    }
  }
}

.timeline {
  &__item {
    display: flex;
    min-height: 100px;
    margin-bottom: 5px;
    &:last-child {
      .timeline__icon-wrapper {
        &::after {
          display: none;
        }
      }
    }
  }

  &__dates {
    max-width: 155px;
    width: 100%;
    padding-right: 25px;
    color: $blue02;
  }

  &__years {
    font-size: 16px;
    line-height: 22px;
  }

  &__dates-desc {
    font-size: 12px;
    line-height: 16px;
  }

  &__icon-wrapper {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      right: 50%;
      width: 2px;
      height: calc(100% - 30px);
      background-color: $blue06;
      transform: translateX(50%);
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    text-align: center;
    border-radius: 50%;
    background-color: $blue03;
  }

  &__about {
    padding-left: 45px;
    color: $blue02;
  }

  &__title {
    font-size: 16px;
    line-height: 22px;
  }

  &__text {
    font-size: 12px;
    line-height: 16px;
  }
}

.awards {
  &__item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  &__icon {
    margin-right: 16px;
  }

  &__text {
    font-size: 14px;
    line-height: 19px;
    color: $blue02;
  }
}
</style>
