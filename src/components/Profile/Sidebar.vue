<template>
  <div class="profile-sidebar">
    <ul class="profile-sidebar__list">
      <li class="profile-sidebar__item">
        <router-link :to="{ name: 'PersonalTrainerProfile' }" class="profile-sidebar__link">
          <img class="profile-sidebar__icon" src="@/assets/images/svg/profile/profile.svg" alt="Мой профиль" />
          Мой профиль</router-link
        >
      </li>
      <li class="profile-sidebar__item">
        <router-link :to="{ name: 'PersonalTrainerGroups' }" class="profile-sidebar__link">
          <img class="profile-sidebar__icon" src="@/assets/images/svg/profile/my-groups.svg" alt="Мои команды" /> Мои
          команды</router-link
        >
      </li>
      <!-- <li class="profile-sidebar__item">
        <router-link :to="{ name: 'PersonalTrainerSportsmans' }" class="profile-sidebar__link">
          <img class="profile-sidebar__icon" src="@/assets/images/svg/profile/my-sportsmans.svg" alt="Мои спортсмены" />
          Мои спортсмены</router-link
        >
      </li> -->
    </ul>

    <button class="profile-sidebar__logout">
      <img class="profile-sidebar__icon" src="@/assets/images/svg/profile/logout.svg" alt="Выйти из профиля" />
      Выйти из профиля
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.profile-sidebar {
  &__item {
    margin-bottom: 8px;
  }

  &__link {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 28px 20px 28px 28px;
    font-size: 16px;
    line-height: 22px;
    color: $blue01 !important;
    border-radius: 12px;
    &.router-link-exact-active {
      background-color: #ecf6ff;
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
    &:hover {
      background-color: #fbfbfe;
    }
  }
  &__icon {
    vertical-align: middle;
    margin-right: 10px;
  }
  &__logout {
    width: 100%;
    padding: 26px 0;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: $blue03;
    border-top: 1px solid #b9cbe5;
  }
}
</style>
