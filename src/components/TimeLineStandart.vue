<template>
  <div class="timeline">
    <div class="timeline__timeline" v-for="i in num" :key="i">
      <div class="timeline__dot">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.6554" cy="12.3078" r="8.65545" fill="white" stroke="#B9CBE5" stroke-width="6"/>
        </svg>
      </div>
      <div class="timeline__tine"></div>
      <div class="timeline__dot timeline__dot_last">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.6554" cy="12.3078" r="8.65545" fill="white" stroke="#B9CBE5" stroke-width="6"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.timeline {
  display: flex;
  flex-direction: column;

  &__timeline {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__timeline &__dot_last {
    display: none;
  }

  &__timeline:last-child &__dot_last {
    display: block;
  }

  &__tine {
    width: 2.2px;
    height: 71px;
    background-color: $blue04;
  }
}
</style>
