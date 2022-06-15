<template>
  <transition name="slide-fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div class="notification" :style="style" v-show="visible" @mouseenter="clearTimer" @mouseleave="createTimer">
      <div class="notification__body" :style="{ backgroundColor: bg }">
        <div class="notification__header">
          <div class="notification__title">{{ title }}</div>
          <button class="notification__close" @click.stop.prevent="handleClose">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.07129 1L8.14236 8.07107M8.14236 8.07107L15.2134 15.1421M8.14236 8.07107L1.07129 15.1421M8.14236 8.07107L15.2134 1"
                stroke="#ECF6FF"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>

        <p class="notification__text" v-html="text"></p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: String,
    bg: {
      type: String,
      default: '#2ABAF3',
    },
  },
  data() {
    return {
      visible: true,
    }
  },
  computed: {
    style() {
      return {}
    },
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    afterLeave() {
      this.$emit('closed')
    },
    afterEnter() {},
    clearTimer() {},
    createTimer() {},
  },
}
</script>

<style lang="scss" scoped>
.notification {
  z-index: 999;
  
  &__body {
    width: 318px;
    min-height: 121px;
    padding: 33px 28px 25px 34px;
    border-radius: 12px;
    color: #fff;
    box-shadow: 0px 6px 8px rgba(110, 101, 174, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    max-width: 187px;
    font-size: 14px;
    font-weight: 500;
  }

  &__text {
    margin-top: 9px;
    font-size: 12px;
    font-weight: 300;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
