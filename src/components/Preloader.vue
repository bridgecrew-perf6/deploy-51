<template>
  <div class="preloader" :class="{ 'preloader--fullpage': fullPage }">
    <lottie-vue-player
      :src="JSON.stringify(require('@/animations/preloader.json'))"
      :theme="options.theme"
      :player-size="options.playerSize"
      :player-controls="false"
      :autoplay="true"
      :loop="true"
      style="width: 100%; height: 100%"
    >
    </lottie-vue-player>
  </div>
</template>

<script>
export default {
  name: 'Preloader',
  props: {
    fullPage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      options: {
        minimizable: false,
        playerSize: 'standard',
        backgroundColor: '#fff',
        backgroundStyle: 'color',
        theme: {
          controlsView: 'standard',
          active: 'light',
          light: {
            color: '#3D4852',
            backgroundColor: '#fff',
            opacity: '0.7',
          },
          dark: {
            color: '#fff',
            backgroundColor: '#202020',
            opacity: '0.7',
          },
        },
      },
    }
  },
}
</script>

<style scoped lang="scss">
.preloader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &--fullpage {
    height: 100vh;
  }
}
</style>
