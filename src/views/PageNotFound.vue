<template>
  <div class="page-not-found">
    <div class="page-not-found__wrapper container">
      <div class="page-not-found__content">
        <div class="page-not-found__404">
          <img src="@/assets/images/svg/404.svg" alt="404" />
        </div>

        <div class="page-not-found__title">Почему-то такой страницы нет</div>

        <div class="page-not-found__regulations">
          <div class="page-not-found__regulation">
            <div class="page-not-found__regulations-title-big">Вы в этом не виноваты. Вернитесь на главную:</div>
            <base-button
              label="На главную"
              backgroundColor="#525BBA"
              class="page-not-found__btn"
              @click="$router.push({ name: 'Dashboard' })"
            />
            <div class="page-not-found__regulations-descr">
              <span></span>
              <p>
                Нам очень жаль, что при работе с сервисом вы столкнулись с ошибкой. Мы как можно скорее внесём
                исправления, чтобы это не повторилось!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="page-not-found__lens">
        <lottie-vue-player
          :src="JSON.stringify(require('@/animations/404.json'))"
          :theme="options.theme"
          :player-size="options.playerSize"
          :player-controls="false"
          :autoplay="true"
          :loop="true"
          style="width: 100%; height: 900px"
        >
        </lottie-vue-player>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  data() {
    return {
      options: {
        minimizable: false,
        playerSize: 'standard',
        backgroundColor: '#fff',
        backgroundStyle: 'color',
        theme: {
          controlsView: 'standard',
          active: 'light',
          light: {
            color: '#3D4852',
            backgroundColor: '#fff',
            opacity: '0.7',
          },
          dark: {
            color: '#fff',
            backgroundColor: '#202020',
            opacity: '0.7',
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.page-not-found {
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #fff;
  overflow: hidden;

  &__wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  &__content {
    height: 600px;
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin-top: 35px;
    color: $blue01;
    font-size: 24px;
    font-weight: 400;
  }

  &__regulations {
    margin-top: 40px;
  }

  &__regulation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__regulations-title-big {
    font-size: 20px;
    color: $blue03;
  }

  &__regulations-paragraph {
    margin-top: 20px;
    display: flex;
    align-items: center;

    span {
      width: 25px;
      height: 25px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $blue03;
      color: #fff;
      font-size: 14px;
    }

    p {
      margin-left: 10px;
      color: $blue03;
      font-size: 16px;
    }
  }

  &__regulations-textarea {
    margin-top: 20px;
    width: 450px;
    height: 112px;
    padding-top: 6px;
    padding-left: 7px;
    border-radius: 4px;
    border: 1px solid $blue06;
    resize: none;

    &::placeholder {
      color: $blue05;
      font-size: 14px;
      font-weight: 400;
    }
  }

  &__btn {
    margin-top: 20px;
  }

  &__regulations-descr {
    margin-top: 21px;
    display: flex;

    span {
      display: block;
      width: 5px;
      height: 70px;
      border-radius: 10px;
      background-color: #2abaf3;
    }

    p {
      margin-left: 24px;
      max-width: 425px;
      color: $blue02;
      font-size: 14px;
    }
  }

  &__lens {
    position: absolute;
    right: -200px;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
