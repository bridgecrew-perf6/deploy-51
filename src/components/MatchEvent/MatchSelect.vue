<template>
  <div class="match-select">
    <div class="match-select__item match-select__item_active" @click="toggle">
      <div class="match-select__item-content">
        <div class="match-select__title">{{ options[selected].title }}</div>
        <div class="match-select__subtitle">
          <p v-for="(sportsman, index) in options[selected].sportsmans" :key="index">{{sportsman.full_name}} / </p>
        </div>
      </div>
      <button class="match-select__btn" :class="{'match-select__btn_active': isOpen}">
        <img src="@/assets/images/arrow-down-bold_blue.svg" alt="arrow">
      </button>
    </div>
    <div class="match-select__list" v-if="isOpen">
      <div
          class="match-select__item"
          v-for="(option, index) in options"
          :key="option.value"
          @click="select(option, index)">
        <div class="match-select__item-content">
          <div class="match-select__title">{{ option.title }}</div>
          <div class="match-select__subtitle">
            <p v-for="(sportsman, index) in option.sportsmans" :key="index">{{sportsman.full_name}} / </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchSelect',
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
      selected: 0
    }
  },
  mounted() {
    this.$emit('input', this.options[0])
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    select(option, index) {
      this.selected = index
      this.isOpen = false

      this.$emit('input', option)
    }
  }
}
</script>

<style lang="scss">
.match-select {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 12px #413A70;

  &__item {
    width: 100%;
    height: 75px;
    padding: 18px 23px 11px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $blue02;
    border-top: 2px solid $blue01;
    cursor: pointer;
    user-select: none;

    &_active {
      background-color: $blue03;
      border: none;
    }
  }

  &__item-content {
    max-width: 80%;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
  }

  &__subtitle {
    margin-top: 6px;
    width: 300px;
    font-size: 11px;
    font-weight: 400;
    display: flex;
    overflow: hidden;

    p {
      white-space: nowrap;
      font-size: 10px;
    }
  }

  &__btn {
    min-width: 36px;
    min-height: 36px;
    margin-bottom: 13px;
    border-radius: 50%;
    background-color: #ECF6FF;
    transition: .3s;

    &_active {
      transform: rotate(-180deg);
    }
  }
}
</style>
