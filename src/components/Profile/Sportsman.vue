<template>
  <div class="sportsman">
    <div class="sportsman__header">
      <div class="sportsman__avatar-wrapper">
        <v-img
          v-if="sportsman.user.avatar"
          :src="sportsman.user.avatar"
          width="120"
          height="120"
          class="sportsman__avatar"
        ></v-img>
        <v-img
          v-else
          :src="require('@/assets/images/svg/profile/avatar.svg')"
          width="120"
          height="120"
          class="sportsman__avatar--empty"
        ></v-img>
        <span class="sportsman__number">{{ sportsman.teamNumber }}</span>
      </div>

      <div class="sportsman__header-content">
        <h2 class="sportsman__title">{{ fullName }}, {{ sportsmanAge }} лет</h2>
        <p class="sportsman__position">Нападающий, Разряд II</p>
        <p class="sportsman__bday">
          <img src="@/assets/images/svg/profile/bday.svg" alt="День рождения" class="sportsman__bday-icon" />
          {{ bdayDate }}
        </p>
      </div>
    </div>

    <div class="sportsman__body">
      <h2 class="sportsman__contacts-title">Контактная информация</h2>

      <ul class="sportsman__contacts">
        <li class="sportsman__contact">
          <a href="tel:" class="sportsman__contact-link"
            ><img
              src="@/assets/images/svg/profile/social-media/phone.svg"
              alt="Телефон"
              class="sportsman__contact-icon"
            />{{ formatPhone(sportsman.user.phone) }}</a
          >
        </li>
        <li class="sportsman__contact">
          <a :href="`mailto:${sportsman.user.email}`" class="sportsman__contact-link"
            ><img
              src="@/assets/images/svg/profile/social-media/email.svg"
              alt="Email"
              class="sportsman__contact-icon"
            />{{ sportsman.user.email }}</a
          >
        </li>
        <li class="sportsman__contact">
          <img src="@/assets/images/svg/profile/marker.svg" alt="Адрес" class="sportsman__contact-icon" />
          {{ sportsman.address }}
        </li>
        <li class="sportsman__contact">
          <a
            v-if="sportsman.user.vk"
            :href="sportsman.user.vk"
            class="sportsman__sm"
            rel="nofollow noopener"
            target="_blank"
          >
            <img src="@/assets/images/svg/profile/social-media/vk.svg" alt="VK" class="sportsman__sm-icon" />
          </a>
        </li>
      </ul>

      <div class="sportsman__family">
        <div class="sportsman__family-member">
          <h3 class="sportsman__family-name">Мать - Иванова Марина Николаевна</h3>
          <a href="tel:" class="sportsman__family-contact-link"
            ><img
              src="@/assets/images/svg/profile/social-media/phone.svg"
              alt="Телефон"
              class="sportsman__family-contact-icon"
            />+7 (999) 888 - 77 -66</a
          >

          <a href="mailto:" class="sportsman__family-contact-link"
            ><img
              src="@/assets/images/svg/profile/social-media/email.svg"
              alt="Email"
              class="sportsman__family-contact-icon"
            />example-player@mail.com</a
          >
        </div>
        <div class="sportsman__family-member">
          <h3 class="sportsman__family-name">Отец - Иванов Олег Викторович</h3>
          <a href="tel:" class="sportsman__family-contact-link"
            ><img
              src="@/assets/images/svg/profile/social-media/phone.svg"
              alt="Телефон"
              class="sportsman__family-contact-icon"
            />+7 (999) 888 - 77 -66</a
          >

          <a href="mailto:" class="sportsman__family-contact-link"
            ><img
              src="@/assets/images/svg/profile/social-media/email.svg"
              alt="Email"
              class="sportsman__family-contact-icon"
            />example-player@mail.com</a
          >
        </div>
      </div>
    </div>

    <div class="sportsman__footer">
      <button class="sportsman__delete">
        <svg
          class="sportsman__delete-icon"
          width="13"
          height="17"
          viewBox="0 0 13 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#a)" fill="#B9CBE5">
            <path
              d="M6.219 4.764h5.36c.77 0 .926.178.825.926l-1.272 9.57c-.123.937-.737 1.529-1.675 1.54-2.155.011-4.321.022-6.476 0-.95-.011-1.552-.58-1.675-1.53C.87 12.032.446 8.806.01 5.58c-.078-.592.111-.815.737-.815h5.47ZM10.84 3.156H1.284c1.128-.838 2.122-1.608 3.16-2.3.167-.112.58-.011.804.134.502.301.949.703 1.451 1.038.157.1.458.168.592.09 1.039-.637 1.932-.425 2.747.413.19.2.458.357.804.625Z"
            />
          </g>
          <defs>
            <clipPath id="a"><path fill="#fff" transform="translate(0 .8)" d="M0 0h12.438v16H0z" /></clipPath>
          </defs>
        </svg>
        удалить
      </button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    sportsman: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fullName() {
      return `${this.sportsman.user.lastName} ${this.sportsman.user.firstName}`
    },
    sportsmanAge() {
      return moment().diff(this.sportsman.user.birthDate, 'years')
    },
    bdayDate() {
      return moment(this.sportsman.user.birthDate).format('DD.MM.YYYY')
    },
  },
  methods: {
    formatPhone(phone) {
      return phone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3 - $4 - $5')
    },
  },
}
</script>

<style lang="scss" scoped>
.sportsman {
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  &__header {
    display: flex;
    align-items: flex-start;
  }

  &__avatar-wrapper {
    position: relative;
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    margin-right: 30px;
  }

  &__avatar {
    &::v-deep {
      .v-image__image {
        max-width: 120px;
        min-height: 120px;
        border-radius: 50%;
        border: 2px solid $blue06;
      }
    }
    &--empty {
      border-radius: 50%;
      overflow: hidden;
      &::v-deep {
        .v-image__image {
          background-color: $blue06;
        }
      }
    }
  }

  &__number {
    position: absolute;
    left: -13px;
    bottom: 0px;
    display: inline-block;
    min-width: 45px;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;

    background-color: $blue02;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 12px;
  }

  &__header-content {
    margin-bottom: 55px;
    padding-top: 16px;
    color: $blue02;
  }

  &__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }

  &__position {
    font-size: 14px;
    line-height: 28px;
  }

  &__bday {
    font-size: 14px;
    line-height: 28px;
  }

  &__bday-icon {
  }

  &__body {
  }

  &__contacts-title {
    margin-bottom: 13px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: $blue02;
  }

  &__contacts {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  &__contact {
    flex: 0 0 50%;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 24px;
    color: $blue02;

    display: flex;
    align-items: center;
  }

  &__contact-link {
    display: flex;
    align-items: center;
  }

  &__contact-icon {
    margin-right: 10px;
  }

  &__sm {
    margin-right: 24px;
    &:last-child {
      margin-right: 0px;
    }
  }

  &__family {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__family-member {
    flex: 0 0 50%;
  }

  &__family-name {
    margin-bottom: 17px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    color: $blue02;
  }

  &__family-contact-link {
    display: inline-flex;
    align-items: center;
    width: 100%;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 24px;
    color: $blue02 !important;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  &__family-contact-icon {
    margin-right: 10px;
  }

  &__footer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background-color: #fff;
  }

  &__delete {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: $blue06;
  }

  &__delete-icon {
    margin-right: 8px;
    vertical-align: middle;
  }
}
</style>
