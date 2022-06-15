<template>
  <v-menu content-class="social-media-menu" offset-y offset-x :close-on-content-click="false">
    <template v-slot:activator="{ on, attrs }">
      <button class="social-media-menu__btn" v-bind="attrs" v-on="on">
        <img
          class="social-media-menu__icon"
          :src="require(`@/assets/images/svg/profile/social-media/${name}-edit.svg`)"
          :alt="name"
        />
      </button>
    </template>

    <v-card class="social-media-menu__card">
      <img class="social-media-menu__link-icon" src="@/assets/images/svg/profile/link.svg" alt="Ссылка" />
      <wu-input class="social-media-menu__input" v-model="inputVal"></wu-input>
      <button class="social-media-menu__save-btn">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#a)" fill="currentColor">
            <path
              d="M11.653.088c.957-.233 1.628 0 2.211.696.648.773 1.666 1.35 2.03 2.22.355.848.09 1.955.092 2.948.003 2.748.003 5.495 0 8.243C15.985 15.47 15.455 16 14.17 16c-4.143.003-8.285.004-12.429 0-1.19-.001-1.738-.55-1.74-1.751-.005-4.164-.003-8.328 0-12.491C.004.564.554.024 1.755.014 2.346.009 2.936.013 3.618.013v1.405c.002.93-.006 1.86.01 2.79.01.496.206.875.777.876 2.156.007 4.312.01 6.468-.002.66-.004.77-.497.777-1.016.013-1.098.004-2.198.004-3.297l-.001-.681Zm-8.73 14.404h10.145c0-1.499.037-2.952-.014-4.403-.028-.81-.58-1.314-1.415-1.323a324.516 324.516 0 0 0-7.286 0c-.839.009-1.38.495-1.414 1.324-.059 1.45-.016 2.903-.016 4.402Z"
            />
            <path d="M8.769 3.594V.044h1.365v3.55H8.77Z" />
          </g>
          <defs>
            <clipPath id="a"><path fill="#fff" d="M0 0h16.08v16H0z" /></clipPath>
          </defs>
        </svg>
      </button>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.link
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.social-media-menu {
  box-shadow: none;
  box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  border-radius: 0px 8px 8px 8px;
  &__btn {
    width: 32px;
    height: 32px;
    margin-right: 24px;
    &:last-child {
      margin-right: 0px;
    }
  }
  &__icon {
    vertical-align: middle;
  }
  &__card {
    max-width: 280px;
    display: flex;
    align-items: center;
    padding: 6px 10px;
  }

  &__link-icon {
    margin-right: 7px;
  }

  &__input {
    margin-right: 9px;
    min-width: 210px;
  }

  &__save-btn {
    color: $blue06;
    &:hover {
      color: $blue02;
    }
  }
}
</style>
