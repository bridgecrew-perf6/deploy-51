<template>
  <section class="inventory">
    <ul class="inventory__list">
      <li v-for="(item, index) in inventory" :key="index" class="inventory__item">
        <div class="inventory__inner">
          <base-checkbox v-if="checkbox" class="inventory__checkbox" />
          <img :src="item.img" :alt="item.title" class="inventory__img" />
          <div class="inventory__info">
            <p class="inventory__title">{{ item.title }}</p>
            <p class="inventory__count">Кол-во - {{ item.count }}</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    inventory: {
      type: [Object, Array],
      required: true,
    },
    checkbox: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="sass" scoped>
.inventory
    padding: 22px 22px 12px
    background-color: $blue03
    box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15)
    border-radius: 28px

.inventory__list
    display: flex
    flex-wrap: wrap
    margin: 0 -12.5px

.inventory__item
    flex: 0 0 50%

    margin-bottom: 10px
    padding: 0 12.5px

.inventory__inner
    display: flex
    align-items: center
    padding: 16px 19px
    background-color: #464EA3
    border-radius: 12px

.inventory__checkbox
  &::v-deep
    .v-input--selection-controls__input
      margin-right: 20px

.inventory__img
    max-width: 48px
    width: 100%
    height: auto
    margin-right: 12px
    border-radius: 12px
    border: 2px solid #DEDBF5

.inventory__info
    font-size: 14px
    line-height: 19px
    color: #fff

.inventory__title
    font-weight: 500

.inventory__count
</style>
