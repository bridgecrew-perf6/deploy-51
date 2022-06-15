<template>
  <div class="video">
    <div class="video__media">
      <video class="video__video" ref="video" @timeupdate="currentTime">
        <source :src="src" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
      </video>
    </div>
    <div class="video__main">
      <div class="video__progress" @click="rewindVideo">
        <div class="progress__line" :style="`width: ${progress}%`">
          <div class="progress__dot"></div>
        </div>
      </div>
      <div class="video__settings settings">
        <v-row>
          <v-col cols="4">
            <div class="settings__list">
              <div class="settings__item">
                <div class="settings__preview">
                  <button
                      v-if="!play"
                      class="settings__btn"
                      :class="{'settings__btn_active': play}"
                      @click="toggleVideo">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M0.494141 11.7361V2.78485C0.494141 1.24833 2.1548 0.285699 3.48812 1.04933L11.3027 5.52497C12.6441 6.2932 12.6441 8.22776 11.3027 8.99599L3.48812 13.4716C2.1548 14.2353 0.494141 13.2726 0.494141 11.7361Z"
                          fill="#ffffff"/>
                    </svg>
                  </button>

                  <button
                      v-if="play"
                      class="settings__btn"
                      :class="{'settings__btn_active': play}"
                      @click="toggleVideo">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="4" height="16" rx="1" fill="white"/>
                      <rect x="10" width="4" height="16" rx="1" fill="white"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="settings__item">
                <div class="settings__preview">
                  <button
                      class="settings__btn"
                      @click="toggleVolume=!toggleVolume">
                    <svg width="28" height="21" viewBox="0 0 28 21" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M12.2119 19.2779L4.84344 13.8521C4.67163 13.7255 4.46385 13.6573 4.25049 13.6573H1.625C1.07272 13.6573 0.625 13.2096 0.625 12.6573V7.86369C0.625 7.3114 1.07271 6.86369 1.625 6.86369H4.25049C4.46385 6.86369 4.67163 6.79544 4.84344 6.66892L12.2119 1.24306C12.8722 0.75684 13.8048 1.2283 13.8048 2.0483V18.4727C13.8048 19.2927 12.8722 19.7641 12.2119 19.2779Z"
                          fill="#ECF6FF"/>
                      <rect x="16.4414" y="6.86395" width="3.95395" height="6.79362" rx="1.97697"
                            fill="#ECF6FF"/>
                      <path
                          d="M21.061 0.990932C20.3189 0.622826 19.4189 0.926051 19.0507 1.6682C18.6826 2.41035 18.9859 3.3104 19.728 3.6785L21.061 0.990932ZM24.2539 5.65023L23.0089 6.48691L23.0089 6.48691L24.2539 5.65023ZM24.2539 14.7084L23.0089 13.8717L23.0089 13.8717L24.2539 14.7084ZM19.728 16.6801C18.9859 17.0482 18.6826 17.9483 19.0507 18.6904C19.4189 19.4326 20.3189 19.7358 21.061 19.3677L19.728 16.6801ZM19.728 3.6785C21.1162 4.36702 22.2403 5.34321 23.0089 6.48691L25.4988 4.81355C24.4166 3.20323 22.8786 1.89245 21.061 0.990932L19.728 3.6785ZM23.0089 6.48691C23.7757 7.62792 24.1665 8.90071 24.1665 10.1793L27.1665 10.1793C27.1665 8.27784 26.5829 6.42657 25.4988 4.81355L23.0089 6.48691ZM24.1665 10.1793C24.1665 11.4579 23.7757 12.7307 23.0089 13.8717L25.4988 15.5451C26.5829 13.9321 27.1665 12.0808 27.1665 10.1793L24.1665 10.1793ZM23.0089 13.8717C22.2403 15.0154 21.1162 15.9916 19.728 16.6801L21.061 19.3677C22.8786 18.4662 24.4166 17.1554 25.4988 15.5451L23.0089 13.8717Z"
                          fill="#ECF6FF"/>
                    </svg>
                  </button>
                </div>
                <div class="settings__content" v-if="toggleVolume">
                  <input
                      type="range"
                      min="0" max="100"
                      step="1"
                      v-model="volume"
                      @input="videoVolume"
                      class="setting__volume">
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="settings__time justify-center">
              <p>{{ timer }}</p>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="settings__list justify-end">
              <div class="settings__item" @click="pictureInPicture">
                <div class="settings__preview">
                  <button class="settings__btn">
                    <svg width="25" height="22" viewBox="0 0 25 22" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <rect x="1.65234" y="2.2019" width="21.0877" height="18.1163" rx="2"
                            stroke="#ECF6FF" stroke-width="3"/>
                      <rect x="12.1953" y="11.2604" width="10.5439" height="9.05816" rx="2"
                            fill="#ECF6FF"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="settings__item">
                <div class="settings__preview">
                  <button
                      class="settings__btn"
                      @click="fullScreen">
                    <svg width="25" height="22" viewBox="0 0 25 22" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M12.915 18.8179C13.7434 18.8179 14.415 19.4894 14.415 20.3179C14.415 21.1463 13.7434 21.8179 12.915 21.8179V18.8179ZM0.871094 11.2597C0.871094 10.4313 1.54267 9.75972 2.37109 9.75972C3.19952 9.75972 3.87109 10.4313 3.87109 11.2597H0.871094ZM4.37109 18.8179H9.40033V21.8179H4.37109V18.8179ZM9.40033 18.8179H12.915V21.8179H9.40033V18.8179ZM3.87109 14.2791V18.3179H0.871094V14.2791H3.87109ZM3.87109 11.2597V14.2791H0.871094V11.2597H3.87109ZM4.37109 21.8179C2.4381 21.8179 0.871094 20.2509 0.871094 18.3179H3.87109C3.87109 18.594 4.09495 18.8179 4.37109 18.8179V21.8179Z"
                          fill="#ECF6FF"/>
                      <path
                          d="M12.9132 3.7019C12.0847 3.7019 11.4132 3.03033 11.4132 2.2019C11.4132 1.37348 12.0847 0.701904 12.9132 0.701904V3.7019ZM24.957 11.2601C24.957 12.0885 24.2855 12.7601 23.457 12.7601C22.6286 12.7601 21.957 12.0885 21.957 11.2601H24.957ZM21.457 3.7019H16.4278V0.701904H21.457V3.7019ZM16.4278 3.7019H12.9132V0.701904H16.4278V3.7019ZM21.957 8.24067V4.2019H24.957V8.24067H21.957ZM21.957 11.2601V8.24067H24.957V11.2601H21.957ZM21.457 0.701904C23.39 0.701904 24.957 2.26891 24.957 4.2019H21.957C21.957 3.92576 21.7332 3.7019 21.457 3.7019V0.701904Z"
                          fill="#ECF6FF"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchVideo',
  props: {
    src: {
      type: String,
      default: require('@/assets/test-video-2.mp4')
    }
  },
  data() {
    return {
      play: false,
      toggleVolume: false,
      volume: 0,
      progress: 0,
      timer: '00:00 / 00:00',
    }
  },
  mounted() {
    this.videoVolume()
  },
  methods: {
    toggleVideo() {
      this.play = !this.play;
      if (this.play === false) {
        this.$refs.video.pause()
      } else if (this.play === true) {
        this.$refs.video.play()
      }
    },
    currentTime() {
      if (this.$refs.video.currentTime === this.$refs.video.duration) this.toggleVideo()
      this.progress = this.$refs.video.currentTime / this.$refs.video.duration * 100
      let curmins = Math.floor(this.$refs.video.currentTime / 60);
      let cursecs = Math.floor(this.$refs.video.currentTime - curmins * 60);
      let durmins = Math.floor(this.$refs.video.duration / 60);
      let dursecs = Math.floor(this.$refs.video.duration - durmins * 60);
      if (cursecs < 10) {
        cursecs = "0" + cursecs;
      }
      if (dursecs < 10) {
        dursecs = "0" + dursecs;
      }
      if (curmins < 10) {
        curmins = "0" + curmins;
      }
      if (durmins < 10) {
        durmins = "0" + durmins;
      }
      this.timer = `${curmins} : ${cursecs} / ${durmins} : ${dursecs}`
    },
    rewindVideo(e) {
      this.progress = e.offsetX / e.target.offsetWidth * 100
      this.$refs.video.pause()
      this.$refs.video.currentTime = e.offsetX / e.target.offsetWidth * this.$refs.video.duration
      this.$refs.video.play()
      this.play = true
    },
    videoVolume() {
      this.$refs.video.volume = this.volume / 100
    },
    fullScreen() {
      this.$refs.video.requestFullscreen();
    },
    pictureInPicture() {
      console.log('pictureInPicture')

      if (document.pictureInPictureElement) {
        document.exitPictureInPicture()
            .then(() => { /**/ })
            .catch(() => { /**/ });
      } else {
        this.$refs.video.requestPictureInPicture()
            .then(() => { /**/ })
            .catch(() => { /**/ });
      }
    }
  }
}
</script>

<style scoped lang="scss">
.video {
  position: relative;
  width: 100%;
  max-height: 780px;
  border-radius: .75rem;
  background-color: $blue01;
  overflow: hidden;
  user-select: none;
  // Стилизация видео
  &__video {
    display: block;
    width: 100%;
    //height: 380px;
    max-height: 780px;
  }

  // Стилизация контроля видео
  .video__main {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    // Стилизация бегунка видео
    .video__progress {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 2px;
      height: .25rem;
      width: 90%;
      margin: 0 auto 14px auto;

      .progress__line {
        background: #464EA3;
        border-radius: 2px;
        height: .25rem;
        display: flex;
        justify-content: flex-end;
        transition: .2s;

        &:hover {
          .progress__dot {
            opacity: 1;
          }
        }
      }

      .progress__dot {
        background: #464EA3;
        min-width: 1rem;
        min-height: 1rem;
        border-radius: 100%;
        margin-top: -.35rem;
        cursor: pointer;
        opacity: 0;
        transition: .2s;
      }
    }

    // Стилизация настроек видео
    .video__settings {
      background: #333876;
      padding: .5rem 1.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 6px 8px rgba(137, 155, 201, 0.15);
      border-radius: 0 0 12px 12px;
    }

    .settings__time {
      color: #fff;
      font-size: .875rem;
      line-height: 1rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
    }

    .settings__list {
      display: flex;
      align-items: center;
    }

    .settings__item {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      .settings__preview {
        .settings__btn {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: .5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #464EA3;
          cursor: pointer;

          &:hover,
          &.settings__btn_active {
            background-color: #95B0DA;
          }
        }

        &:not(:last-child) {
          margin-right: 1rem;
        }
      }

      .settings__content {
        height: 2.5rem;
        display: flex;
        align-items: center;

        .setting__volume {
          max-width: 100px;
        }
      }

    }
  }
}
</style>
