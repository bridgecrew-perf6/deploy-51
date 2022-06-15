<template>
  <div class="list">
    <h3 class="list__title title-blue-20" v-if="type === 'stages'">Этапы подготовки</h3>
    <h3 class="list__title title-blue-20" v-if="type === 'doc'">Список документов</h3>
    <div class="list__wrapper"
         :class="{'list__wrapper_active-stages': showForm && type === 'stages', 'list__wrapper_active-doc': showForm && type === 'doc'}">
      <vue-custom-scrollbar
          class="list__scroll custom-scroll"
          :settings="scrollSettings"
      >
        <div class="list__list">
          <div class="list__list-empty" v-if="!form.items.length">
            <div class="list__list-empty-icon" v-if="type === 'stages'">
              <svg width="93" height="120" viewBox="0 0 93 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M92.0408 10.4917C92.0408 3.704 88.3577 0.0144625 81.5121 0.0144625C57.8451 -0.00482083 34.1845 -0.00482083 10.5174 0.0144625C3.67186 0.0208902 0.0144625 3.704 0.00803471 10.5046C-0.00482083 26.9982 0.00160694 43.4855 0.00160694 59.9791C0.00160694 76.4728 -0.00482083 92.96 0.00803471 109.447C0.0144625 116.248 3.69115 119.95 10.511 119.963C27.1075 119.989 43.704 120.059 60.3005 119.854C62.3895 119.828 64.9413 118.735 66.4583 117.283C74.358 109.749 81.9685 101.907 89.7397 94.2327C91.4687 92.5293 92.0922 90.6524 92.0858 88.2291C92.0215 62.3188 92.0537 36.4085 92.0408 10.4917ZM60.4098 18.6164C65.1278 18.6228 69.0744 22.5695 69.1065 27.3132C69.1387 32.0762 65.0249 36.1514 60.3005 36.0421C55.5247 35.9328 51.6359 31.9862 51.668 27.2811C51.7066 22.5888 55.7175 18.61 60.4098 18.6164ZM46.7701 67.8981C44.6617 70.0707 42.5599 72.2561 40.323 74.2873C39.7766 74.7822 38.5232 75.0908 37.9383 74.7951C37.2634 74.4609 36.7234 73.4067 36.5692 72.584C36.3442 71.3691 36.5113 70.0771 36.5113 68.7402C35.0201 68.573 33.5546 68.573 32.1726 68.2324C27.5189 67.0754 24.3564 63.5722 23.8358 58.7964C23.5144 55.8589 23.5208 52.8764 23.4822 49.9196C23.4308 45.6837 23.4372 41.4414 23.4887 37.2055C23.5015 36.1578 23.2251 35.6436 22.1903 35.2193C18.1215 33.5288 16.0903 29.0744 17.3309 24.8514C18.5007 20.879 22.6723 18.1022 26.619 18.6807C31.1763 19.3492 34.5316 23.0709 34.3516 27.4932C34.2038 31.1184 32.4168 33.8117 29.0294 35.2515C28.0588 35.6629 27.8017 36.1707 27.8081 37.1605C27.8531 43.1641 27.8017 49.1676 27.8531 55.1711C27.866 56.4695 28.0138 57.7937 28.3352 59.0471C29.3122 62.878 32.3397 64.7356 36.5113 64.0607C36.5113 62.7945 36.3442 61.4703 36.5692 60.2105C36.717 59.3942 37.2762 58.3529 37.9511 58.0251C38.5425 57.7358 39.7831 58.0443 40.3294 58.5393C42.5663 60.5705 44.6682 62.7559 46.7765 64.9221C47.6892 65.8669 47.6828 66.9597 46.7701 67.8981ZM51.7066 65.0699C51.2823 61.8881 53.1271 58.1022 56.2831 56.7202C58.1086 55.9232 58.475 54.8626 58.2629 53.1785C58.1922 52.5936 58.25 51.9958 58.25 51.2502C56.8809 51.2502 55.6854 51.2502 54.4898 51.2502C53.3585 51.2566 52.4201 50.9738 51.9058 49.8168C51.398 48.6662 51.983 47.8756 52.7157 47.1429C54.7019 45.1374 56.6945 43.1384 58.7128 41.165C59.8955 40.008 60.9433 40.0209 62.1324 41.1907C64.1507 43.1641 66.1369 45.1695 68.1359 47.1621C68.8944 47.9206 69.3636 48.7626 68.888 49.8682C68.4188 50.9545 67.506 51.2502 66.4326 51.2566C65.2242 51.2566 64.0222 51.2566 62.5952 51.2566C62.5952 52.6772 62.4988 54.027 62.6595 55.3511C62.7045 55.7432 63.4437 56.1353 63.9386 56.3667C69.0294 58.745 70.6685 64.8256 67.4096 69.3379C65.3013 72.2561 61.7339 73.5288 58.1793 72.6354C54.7341 71.7612 52.2079 68.8109 51.7066 65.0699ZM59.8634 109.974C59.8634 107.654 59.8634 105.076 59.8634 102.499C59.8634 99.1821 59.8506 95.8589 59.8763 92.5422C59.8891 90.1253 60.9433 88.0427 63.4051 87.9399C69.6465 87.6892 75.9007 87.8563 82.1742 87.8563C74.6794 95.2804 67.3582 102.537 59.8634 109.974Z"
                    fill="#ECF6FF"/>
              </svg>
            </div>
            <div class="list__list-empty-icon" v-if="type === 'doc'">
              <svg width="93" height="120" viewBox="0 0 93 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.00160703 59.9825C0.00160703 43.4943 -0.0048211 26.9998 0.00803516 10.5116C0.0144633 3.70421 3.67207 0.0208914 10.518 0.0144633C34.1864 -0.0048211 57.8484 -0.0048211 81.5167 0.0144633C88.3627 0.0208914 92.046 3.70421 92.046 10.4923C92.0589 36.4041 92.0267 62.3223 92.091 88.2341C92.0974 90.6575 91.4675 92.5346 89.7448 94.238C81.9731 101.913 74.3622 109.749 66.4621 117.289C64.9386 118.742 62.3931 119.835 60.3039 119.861C43.7065 120.066 27.109 119.989 10.5116 119.97C3.69136 119.957 0.00803516 116.254 0.00803516 109.453C-0.0048211 92.9652 0.00160703 76.4707 0.00160703 59.9825ZM55.335 27.694C61.2231 27.694 67.1177 27.7326 73.0059 27.6747C76.1943 27.6426 78.1613 25.9005 78.232 23.2522C78.3091 20.4816 76.2328 18.5082 72.9545 18.4953C61.1717 18.4503 49.3889 18.4568 37.6126 18.4889C34.315 18.5018 32.1873 20.4238 32.2065 23.1429C32.2258 25.9263 34.225 27.649 37.664 27.6811C43.5522 27.7326 49.4468 27.694 55.335 27.694ZM55.0071 50.6681C60.9981 50.6681 66.9892 50.7003 72.9802 50.6553C76.2007 50.6296 78.142 48.9454 78.2255 46.2906C78.3091 43.5072 76.2778 41.6623 72.9416 41.6559C61.1717 41.6302 49.4082 41.6302 37.6383 41.6559C34.2635 41.6623 32.2001 43.4301 32.2065 46.1684C32.213 48.9004 34.27 50.636 37.6769 50.6617C43.4493 50.7003 49.2282 50.6681 55.0071 50.6681ZM55.1871 73.8287C60.9724 73.8287 66.7513 73.848 72.5366 73.8223C76.1235 73.803 78.2448 72.0417 78.2255 69.1683C78.2063 66.4106 76.1878 64.6365 72.7681 64.63C61.0946 64.5915 49.4211 64.5915 37.7476 64.63C34.27 64.6429 32.2708 66.3464 32.2001 69.0976C32.1294 71.9388 34.3021 73.803 37.8376 73.8223C43.6229 73.848 49.4082 73.8287 55.1871 73.8287ZM82.1724 87.8613C75.8986 87.8613 69.644 87.6942 63.4023 87.9449C60.9403 88.0413 59.8925 90.1304 59.8732 92.5474C59.8539 95.8643 59.8668 99.1877 59.8604 102.505C59.8604 105.082 59.8604 107.66 59.8604 109.981C67.362 102.543 74.6836 95.2858 82.1724 87.8613ZM50.4432 87.752C45.7699 87.752 41.2959 87.7199 36.8284 87.7649C34.0193 87.7906 32.3672 89.3719 32.258 92.0974C32.1487 94.868 33.8779 96.6228 36.5455 96.7514C41.1031 96.97 45.6799 96.8093 50.4432 96.8093C50.4432 93.7045 50.4432 90.8825 50.4432 87.752ZM18.3861 27.6554C20.8416 27.649 22.9115 25.6691 22.9886 23.2586C23.0722 20.7709 20.8545 18.4825 18.3732 18.4889C15.8791 18.4953 13.7064 20.7709 13.7964 23.2779C13.8799 25.727 15.9177 27.6619 18.3861 27.6554ZM22.9822 69.104C22.9308 66.687 20.8802 64.6815 18.4311 64.6558C15.8405 64.6236 13.7321 66.7513 13.8028 69.3161C13.8671 71.7267 15.9369 73.7773 18.3282 73.803C20.8288 73.8416 23.0336 71.611 22.9822 69.104ZM18.4953 41.6623C15.8727 41.6045 13.7771 43.6293 13.8028 46.1942C13.8285 48.6561 15.7698 50.591 18.2704 50.6424C20.9252 50.6939 23.0015 48.6947 22.9693 46.1042C22.9372 43.6486 20.9895 41.7138 18.4953 41.6623ZM18.2639 87.7777C15.7377 87.8227 13.8092 89.7255 13.7899 92.1939C13.7707 94.7008 15.9884 96.8864 18.4889 96.8157C20.9123 96.745 22.9243 94.7137 22.9693 92.2903C23.0143 89.719 20.9445 87.7327 18.2639 87.7777Z" fill="#ECF6FF"/>
              </svg>
            </div>
            <div class="list__list-empty-title" v-if="type === 'stages'">Добавьте этапы подготовки</div>
            <div class="list__list-empty-title" v-if="type === 'doc'">Добавьте документы</div>
          </div>
          <div
              class="list__item"
              v-show="form.items.length"
              v-for="(item, index) in form.items"
              :key="index">
            <div class="list__item-content">
              <div class="list__item-icon"
                   :style="{backgroundImage: `url(${require('@/assets/images/svg/dots.svg')})`}"></div>
              <div class="list__item-text">
                <div class="list__item-title">{{ item.title }} {{ type === 'doc' ? `(${item.num})` : '' }}</div>
                <p class="list__item-subtitle" v-if="type === 'doc'">до {{ item.date }}</p>
              </div>
            </div>
            <button class="list__item-delete" @click="deleteItem(index)">
              <img src="@/assets/images/svg/x.svg" alt="delete">
            </button>
          </div>
        </div>
      </vue-custom-scrollbar>
      <div class="list__form" v-if="showForm">
        <div class="list__form-wrapper">
          <div class="list__form-title-inp">
            <div class="list__item-icon"
                 :style="{backgroundImage: `url(${require('@/assets/images/svg/dots.svg')})`}"></div>
            <input type="text"
                   placeholder="Введите название"
                   v-if="type === 'stages'"
                   v-model="form.form.title">
            <input type="text"
                   placeholder="Введите название документа..."
                   v-if="type === 'doc'"
                   v-model="form.form.title">
          </div>
          <button class="list__form-save list__form-save_stages"
                  @click="addItem"
                  v-if="type === 'stages'">
            <img src="@/assets/images/svg/check.svg" alt="save">
          </button>
        </div>
        <div class="list__form-wrapper" v-if="type === 'doc'">
          <div class="list__form-inps">
            <div class="inp-wrapper list__form-max-inp">
              <p>Срок исполнения </p>
              <input type="text"
                     class="inp"
                     placeholder="__  / __  / __"
                     v-mask="'##/##/####'"
                     v-model="form.form.date">
            </div>
            <div class="inp-wrapper list__form-min-inp">
              <p>Кол-во</p>
              <input type="text" class="inp" placeholder="1" v-model="form.form.num">
            </div>
          </div>
          <button class="list__form-save" @click="addItem">
            <img src="@/assets/images/svg/check.svg" alt="save">
          </button>
        </div>
      </div>
      <div class="list__footer">
        <button class="list__add" @click="showForm = true">
          <img src="@/assets/images/svg/plus-blue.svg" alt="plus">
          <p v-if="type === 'stages'">Добавить этап подготовки</p>
          <p v-if="type === 'doc'">Добавить документ</p>
        </button>
        <div class="list__number">Всего - {{ form.items.length }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'

export default {
  components: {
    vueCustomScrollbar,
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      scrollSettings: {
        useBothWheelAxes: true,
        suppressScrollX: false,
        wheelPropagation: false,
      },
      showForm: false,
      form: {
        form: {
          title: '',
          date: '',
          num: ''
        },
        items: []
      }
    }
  },
  methods: {
    addItem() {
      this.form.items.push({
        title: this.form.form.title,
        date: this.form.form.date,
        num: this.form.form.num
      })
      this.form.form = {
        title: '',
        date: '',
        num: ''
      }
      this.showForm = false
    },
    deleteItem(index) {
      this.form.items.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
.list {
  &__wrapper {
    position: relative;
    width: 100%;
    height: 408px;
    padding: 24px 14px 30px 31px;
    margin-top: 16px;
    border-radius: 28px;
    background-color: #fff;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  }

  &__scroll {
    height: 310px;
  }

  &__wrapper_active-stages &__scroll {
    padding-bottom: 43px;
  }

  &__wrapper_active-doc &__scroll {
    padding-bottom: 110px;
  }

  &__list-empty {
    width: 100%;
    height: 314px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__list-empty-title {
    margin-top: 20px;
    color: $blue06;
    font-size: 20px;
  }

  &__item {
    width: 100%;
    padding-right: 16px;
    display: flex;
    justify-content: space-between;

    &:not(:first-child) {
      margin-top: 23px;
    }
  }

  &__item-content {
    display: flex;
  }

  &__item-icon {
    width: 10px;
    height: 16px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 2px;
    cursor: pointer;
  }

  &__item-text {
    margin-left: 13px;
  }

  &__item-title {
    color: $blue02;
    font-size: 16px;
  }

  &__item-subtitle {
    margin-bottom: 0 !important;
    color: $blue03;
    font-size: 12px;
  }

  &__item-delete {
    display: none;
    height: 16px;
  }

  &__item:hover &__item-delete {
    display: block;
  }

  &__form {
    position: absolute;
    left: 0;
    bottom: 70px;
    width: calc(100% - 25px);
    padding-top: 10px;
    padding-left: 53px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  &__form-title-inp {
    height: 20px;
    margin-left: -22px;
    display: flex;

    input {
      width: 240px;
      height: 20px;
      margin-left: 13px;
      font-size: 16px;
      color: $blue02;

      &::placeholder {
        color: $blue04;
      }
    }
  }

  &__form-wrapper {
    margin-top: 13px;
    display: flex;
  }

  &__form-inps {
    display: flex;
  }

  &__inp-wrapper {
    p {
      margin: 0;
      font-size: 12px;
    }
  }

  &__form-max-inp {
    input {
      width: 115px;
    }
  }

  &__form-min-inp {
    margin-left: 25px;

    input {
      width: 65px;
      padding-left: 0 !important;
      text-align: center;
    }
  }

  &__form-save {
    margin-top: 16px;
    margin-left: 19px;

    &_stages {
      margin-top: 0;
    }
  }

  &__footer {
    padding-top: 20px;
    padding-right: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__add {
    display: flex;
    align-items: center;

    p {
      margin-bottom: 0;
      margin-left: 11px;
      color: $blue02;
      font-size: 16px;
    }
  }

  &__number {
    color: $blue05;
    font-size: 16px;
  }
}
</style>
