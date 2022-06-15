<template>
  <div class="menu">
    <div class="assistant">
      <p class="assistant-text">
        Всё идёт по плану,
        <span class="assistant-text-username">Виталий Александрович!</span>
        Я приглядываю...
      </p>

      <img src="@/assets/images/assistant-good.png" alt="Всё идёт по плану" class="assistant-eye" />
    </div>
    <div class="menu__content-inner">
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped lang="sass">
.menu
    position: relative
    max-width: 384px
    width: 100%
    min-height: 100vh
    background-color: #fff

.assistant
    display: flex
    justify-content: space-between
    align-items: center
    flex-wrap: wrap
    width: 100%
    padding: 50px 32px 42px
    background-color: #464EA3

.assistant-text
    max-width: 140px
    margin-right: 10px
    font-size: 14px
    line-height: 20px
    color: #fff

.assistant-text-username
    font-size: 16px
    font-weight: 700

.menu__content-inner
    max-width: 320px
    margin: 0 auto
    padding-top: 32px
</style>
