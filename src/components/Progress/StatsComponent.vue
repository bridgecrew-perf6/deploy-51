<template>
  <div>
    <v-menu v-if="!small" nudge-bottom="85" nudge-right="85">
      <template v-slot:activator="{ on, attrs }">
        <div class="graph">
          <div class="graph-legend" :style="`background-color: ${statsData.color}`" v-bind="attrs" v-on="on">
            <div class="graph-header">
              <p v-if="statsData.percent < 100" class="graph-text">
                {{ statsData.percent }}<span class="graph-text__percent">%</span>
              </p>
              <div v-else class="graph-done-icon">
                <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.016 19.811c.118-.172.169-.282.247-.362 5.914-6.077 11.84-12.141 17.747-18.223C30.73.489 31.532-.006 32.571 0c1.466.006 2.522.696 3.134 2.06.567 1.272.303 2.75-.68 3.78-1.224 1.284-2.47 2.538-3.706 3.81-5.6 5.736-11.199 11.467-16.792 17.204-1.483 1.52-3.538 1.53-5.016.018-2.836-2.906-5.672-5.806-8.497-8.712-1.87-1.922-1.033-5.127 1.522-5.794 1.224-.323 2.325-.006 3.224.909 1.982 2.025 3.948 4.062 5.92 6.093.1.11.185.242.336.443Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <p class="graph-title">{{ statsData.title }}</p>
              <span v-if="demoElement === statsData.id" class="graph-alarm"></span>
              <div class="graph-header-progress" :style="`height: ${statsData.percent}%`"></div>
            </div>
          </div>
        </div>
      </template>

      <v-card class="graph__menu">
        <v-card-title class="graph__menu-title">{{ statsData.title }}</v-card-title>
        <div class="graph__menu-body">
          <p class="graph__menu-progress" :style="`width: ${statsData.percent}%`"></p>
          <p class="graph__menu-progress-text">Выполнено {{ statsData.percent }}%</p>
        </div>
      </v-card>
    </v-menu>
    <div v-else class="graph">
      <div class="graph-legend graph-legend--small" :style="`background-color: ${statsData.color}`">
        <div class="graph-header graph-header--small">
          <span class="graph-progress-top"
            ><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.34 3.578 3.21.708a1 1 0 0 1 1.414 0l2.87 2.87c.63.63.184 1.707-.707 1.707h-5.74C.156 5.285-.29 4.208.34 3.578Z"
                fill="#fff"
                fill-opacity=".8"
              /></svg
          ></span>
          <p v-if="statsData.percent < 100" class="graph-text graph-text--small">
            {{ statsData.percent }}<span class="graph-text__percent">%</span>
          </p>
          <div v-else class="graph-done-icon graph-done-icon--small">
            <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.016 19.811c.118-.172.169-.282.247-.362 5.914-6.077 11.84-12.141 17.747-18.223C30.73.489 31.532-.006 32.571 0c1.466.006 2.522.696 3.134 2.06.567 1.272.303 2.75-.68 3.78-1.224 1.284-2.47 2.538-3.706 3.81-5.6 5.736-11.199 11.467-16.792 17.204-1.483 1.52-3.538 1.53-5.016.018-2.836-2.906-5.672-5.806-8.497-8.712-1.87-1.922-1.033-5.127 1.522-5.794 1.224-.323 2.325-.006 3.224.909 1.982 2.025 3.948 4.062 5.92 6.093.1.11.185.242.336.443Z"
                fill="#fff"
              />
            </svg>
          </div>
          <p class="graph-title">{{ statsData.title }}</p>
          <span v-if="demoElement === statsData.id" class="graph-alarm"></span>
          <div class="graph-header-progress" :style="`height: ${statsData.percent}%`"></div>
          <span class="graph-progress-bottom">
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m7.494 1.707-2.87 2.87a1 1 0 0 1-1.414 0L.34 1.707C-.29 1.077.156 0 1.047 0h5.74c.891 0 1.337 1.077.707 1.707Z"
                fill="#fff"
                fill-opacity=".8"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    statsData: {
      type: Object,
      reqired: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  name: 'StatsComponent',
  data() {
    return {
      plusActive: false,
      demoElement: 0,
    }
  },
}
</script>

<style scoped lang="scss">
.graph-legend {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
}

.graph-header {
  width: 135px;
  height: 135px;
  text-align: center;

  padding: 15px 10px 15px 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.graph-header--small {
  width: 90px;
  height: 90px;
  padding: 13px 10px 15px 10px;
}

.graph-text {
  width: 100%;
  font-family: 'FolksBold', serif;
  font-weight: bold;
  font-size: 64px;
  line-height: 79px;
  text-align: center;
  color: #ffffff;
}

.graph-text--small {
  font-size: 40px;
  line-height: 49px;
}

.graph-text__percent {
  font-family: $Manrope, sans-serif !important;
  font-size: 20px;
  line-height: 27px;
  font-weight: normal;
}

.graph-header-progress {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: #fff;
  opacity: 0.3;
  z-index: 0;
}

.graph-title {
  position: relative;
  width: 100%;
  text-align: center;

  font-family: $Manrope;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  z-index: 3;
}

.graph-done-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border: 12px solid rgba(#fff, 0.2);
  border-radius: 50%;
  z-index: 3;
}

.graph-done-icon--small {
  width: 50px;
  height: 50px;
}

.graph__menu {
  width: 230px;
  text-align: center;
}

.graph__menu-title {
  display: block;
  width: 100%;
  padding: 7px 6px 10px;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  background-color: $blue02;
}

.graph__menu-body {
  position: relative;
  padding: 5px 10px;
}

.graph__menu-progress {
  position: absolute;
  top: -1.5px;
  left: 0px;
  height: 3px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: $terrible;
}

.graph__menu-progress-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: $blue02;
}

.graph-alarm {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: $terrible;
  transform-style: preserve-3d;
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.5;
    transform: translate(-50%, -50%) translateZ(-1px);
  }
}

.graph-alarm {
  &::after {
    animation: pulse 2s ease-out infinite;
  }
  &::before {
    animation: pulse 2s 0.7s ease-out infinite;
  }
}

@keyframes pulse {
  100% {
    width: 80px;
    height: 80px;
    opacity: 0.1;
  }
}

.graph-progress-top,
.graph-progress-bottom {
  position: absolute;
  left: 50%;
  line-height: 6px;
  transform: translateX(-50%);
}

.graph-progress-top {
  top: 5px;
}
.graph-progress-bottom {
  bottom: 5px;
}
</style>
