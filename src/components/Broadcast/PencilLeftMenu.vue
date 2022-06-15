<template>
  <div class="pencil">
    <header-left-menu title="Карандаш">
      <template #icon>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M11.0079 3.52344C12.124 4.63824 13.3499 5.8628 14.5176 7.02785C11.5963 9.9504 8.64866 12.8994 5.68644 15.8629C5.58064 14.8843 5.01068 14.2165 3.78877 14.2218C3.72529 13.1097 3.25054 12.3598 2.18335 12.3493C5.08738 9.44523 8.04431 6.48698 11.0079 3.52344Z"
              fill="#464EA3"/>
          <path
              d="M16.1772 5.64464C14.8759 4.34205 13.6368 3.10162 12.3342 1.79772C12.8196 1.33091 13.3327 0.825742 13.8603 0.336447C14.3126 -0.0827594 14.8164 -0.127722 15.2687 0.300742C16.0978 1.08626 16.9138 1.88632 17.6966 2.7168C18.1172 3.16246 18.0788 3.67555 17.649 4.1265C17.1677 4.63695 16.6731 5.1355 16.1772 5.64464Z"
              fill="#464EA3"/>
          <path
              d="M0.57922 14.416C1.60013 15.4369 2.58401 16.4234 3.56524 17.4047C2.46367 17.5885 1.29994 17.7829 0 17.9998C0.20233 16.7501 0.394081 15.5586 0.57922 14.416Z"
              fill="#464EA3"/>
        </svg>
      </template>
    </header-left-menu>

    <div class="pencil__items">
      <div class="pencil__item">
        <div class="pencil__content">
          <input type="text"
                 placeholder="Карандаш-1"
                 value="Карандаш-1"
                 class="pencil__title">
          <input type="text"
                 value="00:24:25 - 00:27:36 • красный • 0,25 пт"
                 class="pencil__subtitle"
                 placeholder="00:24:25 - 00:27:36 • красный • 0,25 пт">
        </div>
        <div class="pencil__delete">
          <img src="@/assets/images/svg/delete-icon.svg" alt="delete">
        </div>
      </div>
      <div class="pencil__item">
        <div class="pencil__content">
          <input type="text"
                 placeholder="Карандаш-1"
                 value="Карандаш-1"
                 class="pencil__title">
          <input type="text"
                 value="00:24:25 - 00:27:36 • красный • 0,25 пт"
                 class="pencil__subtitle"
                 placeholder="00:24:25 - 00:27:36 • красный • 0,25 пт">
        </div>
        <div class="pencil__delete">
          <img src="@/assets/images/svg/delete-icon.svg" alt="delete">
        </div>
      </div>
      <div class="pencil__item">
        <div class="pencil__content">
          <input type="text"
                 placeholder="Карандаш-1"
                 value="Карандаш-1"
                 class="pencil__title">
          <input type="text"
                 value="00:24:25 - 00:27:36 • красный • 0,25 пт"
                 class="pencil__subtitle"
                 placeholder="00:24:25 - 00:27:36 • красный • 0,25 пт">
        </div>
        <div class="pencil__delete">
          <img src="@/assets/images/svg/delete-icon.svg" alt="delete">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLeftMenu from '@/components/Broadcast/HeaderLeftMenu.vue'

export default {
  name: 'PencilLeftMenu',
  components: {
    HeaderLeftMenu
  }
}
</script>

<style scoped lang="scss">
.pencil {
  &__items {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
  }

  &__item {
    width: 100%;
    height: 64px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #DEDBF5;
    overflow: hidden;

    &:not(:first-child) {
      margin-top: 14px;
    }
  }

  &__content {
    padding: 8px 9px 11px 15px;
  }

  &__title {
    width: 100%;
    color: $blue02;
    font-size: 16px;

    &::placeholder {
      color: #D8D4EE;
    }
  }

  &__subtitle {
    width: 100%;
    color: $blue02;
    font-size: 12px;

    &::placeholder {
      color: #D8D4EE;
    }
  }

  &__delete {
    min-width: 58px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D8D4EE;
    user-select: none;
    cursor: pointer;
  }
}
</style>
