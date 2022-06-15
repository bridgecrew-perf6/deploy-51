<template>
  <div class="search">
    <input v-model="inputVal" class="search__input" :placeholder="placeholder" />
    <button class="search__btn">
      <svg
        class="search__icon"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.621 8.56A6.81 6.81 0 1 1 1 8.56a6.81 6.81 0 0 1 13.621 0Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <rect width="3.905" height="7.81" rx="1.953" transform="rotate(-45 24.237 -6.53)" fill="currentColor" />
      </svg>
    </button>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set: _.debounce(function (val) {
        this.$emit('input', val)
      }, 500),
    },
  },
}
</script>

<style lang="sass" scoped>
.search
    position: relative

.search__input
  width: 100%;

  padding: 12px 50px 12px 18px;
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: $blue02

  background-color: #fff;
  box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15);
  border-radius: 28px;
  &::placeholder
    font-size: 14px
    line-height: 19px
    color: $blue05
  &:-ms-input-placeholder
    font-size: 14px
    line-height: 19px
    color: $blue05
  &::-ms-input-placeholder
    font-size: 14px
    line-height: 19px
    color: $blue05

.search__btn
    position: absolute
    top: 50%
    right: 15px
    color: #B9CBE5
    transform: translateY(-50%)
    &:hover
        color: $blue03
    &:active
        color: $blue02
</style>
