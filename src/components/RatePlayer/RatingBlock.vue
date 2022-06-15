<template>
  <div class="rating">
    <div class="rating__title">{{title}}</div>
    <div class="rating__rating">
      <div
          class="rating__rating-btn"
          v-for="(item, index) in items"
          :key="index"
          :class="{'rating__rating-btn_active': activeIndex === index}"
          @click="select(item, index)">{{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RatingBlock',
  props: {
    title: {
      type: String
    },
    items: {
      type: Array,
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    select(item, index) {
      this.activeIndex = index
      this.$emit('input', item)
    }
  }
}
</script>

<style scoped lang="scss">
.rating {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  &__title {
    margin-left: 13px;
    font-size: 16px;
    font-weight: 400;
  }

  &__rating {
    margin-top: 10px;
    border-radius: 30px;
    display: flex;
    justify-content: flex-start;
    background-color: $blue02;
    user-select: none;
  }

  &__rating-btn {
    padding: 6px 17px;
    border-radius: 30px;
    font-size: 12px;
    cursor: pointer;

    &_active {
      background-color: $blue05;
    }

    @media(min-width: 1470px) {
      font-size: 13px;
    }

    @media(min-width: 1530px) {
      font-size: 14px;
    }
  }
}
</style>
