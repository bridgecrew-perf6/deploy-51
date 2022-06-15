<template>
  <div class="documentation-block">
    <div class="documentation-block__header">
      <div class="documentation-block__header-icon">
        <svg width="81" height="85" viewBox="0 0 81 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16.9312" y="0.103516" width="63.8743" height="84.4142" rx="12" fill="#899BC9"/>
          <rect x="8.94702" y="0.103516" width="63.8743" height="84.4142" rx="12" fill="#B9CBE5"/>
          <rect x="0.962646" y="0.103516" width="63.8743" height="84.4142" rx="12" fill="white"/>
          <rect x="14.9351" y="23.3164" width="35.9293" height="5.27589" rx="2.63794" fill="#B9CBE5"/>
          <rect x="14.9351" y="56.0273" width="35.9293" height="5.27589" rx="2.63794" fill="#B9CBE5"/>
          <rect x="14.9351" y="34.9238" width="35.9293" height="4.22071" rx="2.11035" fill="#B9CBE5"/>
          <rect x="14.9351" y="67.6348" width="35.9293" height="4.22071" rx="2.11035" fill="#B9CBE5"/>
          <rect x="14.9351" y="12.7656" width="35.9293" height="4.22071" rx="2.11035" fill="#B9CBE5"/>
          <rect x="14.9351" y="45.4766" width="35.9293" height="4.22071" rx="2.11035" fill="#B9CBE5"/>
        </svg>
      </div>
      <div class="documentation-block__header-content">
        <div class="documentation-block__header-num">{{ num }}</div>
        <p class="documentation-block__header-text">{{ text }}</p>
      </div>
    </div>
    <div class="documentation-block__footer">
      <div class="documentation-block__footer-text">
        <div class="documentation-block__footer-title">Полученно разрешений на выезд</div>
        <div class="documentation-block__footer-num">
          <span>{{ numStart }}</span> / {{ numEnd }}
        </div>
      </div>
      <v-progress-linear
          :value="percent"
          background-color="#ECF6FF"
          rounded
          :color="color"
          class="documentation-block__footer-progress">
      </v-progress-linear>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    numStart: {
      type: Number,
      required: true
    },
    numEnd: {
      type: Number,
      required: true
    },
  },
  computed: {
    percent() {
      return this.numStart / this.numEnd * 100
    },
    color() {
      if (this.percent < 60 && this.percent > 40) {
        return '#FFA217'
      } else if (this.percent < 40) {
        return '#FF4B6B'
      } else {
        return '#64C048'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.documentation-block {
  width: 100%;
  height: 200px;
  border-radius: 28px;
  background-color: $blue02;
  box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  overflow: hidden;

  &__header {
    width: 100%;
    height: 129px;
    padding: 21px 19px 23px 19px;
    display: flex;
    align-items: center;
    color: #fff;
  }

  &__header-content {
    margin-left: 15px;
    display: flex;
    align-items: center;
  }

  &__header-num {
    font-size: 52px;
    font-weight: 700;
    color: #DCE5F2;
  }

  &__header-text {
    max-width: 83%;
    margin-left: 8px;
    font-size: 15px;
    font-weight: 500;
    color: #DCE5F2;
  }

  &__footer {
    width: 100%;
    height: 71px;
    padding: 16px 21px 24px 19px;
    background-color: #fff;
  }

  &__footer-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__footer-title {
    color: $blue05;
  }

  &__footer-num {
    color: $blue05;
    font-size: 14px;
    font-weight: 600;

    span {
      color: $blue02;
      font-size: 18px;
      font-weight: 700;
    }
  }

  &__footer-progress {
    margin-top: 5px;

    &::v-deep {
      .v-progress-linear__determinate {
        border-radius: 10px;
      }
    }
  }
}
</style>
