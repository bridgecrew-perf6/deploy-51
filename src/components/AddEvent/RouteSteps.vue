<template>
  <div class="route-steps">
    <div class="route-steps__step"
         :class="{'route-steps__step_active': step === active}" v-for="step in steps"
         :key="step">
      <div class="route-steps__completed" v-if="step === active">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.655" cy="11.655" r="11.655" fill="#464EA3"/>
          <path
              d="M12.1091 12.4515C13.1599 11.796 14.1828 11.1648 15.2018 10.5133C16.0854 9.9514 17.2078 10.4034 17.4466 11.4376C17.5859 12.0362 17.3153 12.7081 16.7899 13.0379C15.0067 14.1577 13.2196 15.2774 11.4364 16.3972C10.9349 16.7107 10.4175 16.7392 9.91197 16.4461C9.39851 16.157 9.16368 15.6806 9.1597 15.0861C9.1597 12.4027 9.1597 9.72338 9.1597 7.04407C9.1597 6.32335 9.15572 5.60669 9.1597 4.88597C9.16368 4.07566 9.66917 3.46081 10.4175 3.34679C11.3051 3.21242 12.0892 3.90464 12.0932 4.83303C12.1011 6.10346 12.0932 7.36982 12.0932 8.64025C12.0932 9.87404 12.0932 11.1119 12.0932 12.3457C12.0971 12.3701 12.1011 12.3945 12.1091 12.4515Z"
              fill="white"/>
        </svg>
      </div>
      <div class="route-steps__completed" v-else>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.2961" cy="12.5793" r="8.65545" fill="white" stroke="#95B0DA" stroke-width="6"/>
        </svg>
      </div>
      <span class="route-steps__line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouteSteps',
  props: {
    steps: {
      type: Number,
      default: 1
    },
    active: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped lang="scss">
.route-steps {
  width: 24px;

  &__step {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__step_active &__line {
    height: 110px;
  }

  &__line {
    display: block;
    width: 2.22px;
    height: 75px;
    background-color: #DCE5F2;
    border-radius: 2px;
  }
}
</style>
