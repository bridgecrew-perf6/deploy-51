<template>
  <div class="steps">
    <div class="steps__step" v-for="(i, index) in length" :key="index">
      <div class="steps__cricle"
           :class="{'steps__cricle_completed': index < completed, 'steps__cricle_inwork': index === completed}">
        <div class="steps__cricle-num">{{ i }}</div>
        <div class="steps__cricle-completed">
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.1313 1.15715C10.7212 0.747097 10.0564 0.747097 9.64637 1.15715L4.26781 6.5357L2.04137 4.30654C1.63157 3.89624 0.96715 3.89624 0.55735 4.30654C0.14755 4.71684 0.14755 5.38206 0.55735 5.79236L3.52538 8.76401C3.93518 9.17431 4.5996 9.17431 5.0094 8.76401C5.04018 8.73319 5.06864 8.70094 5.0948 8.66746C5.12837 8.64122 5.1607 8.61266 5.19159 8.58177L11.1313 2.64207C11.5413 2.23202 11.5413 1.5672 11.1313 1.15715Z"
                  fill="white"/>
          </svg>
        </div>
      </div>
      <div class="steps__line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  props: {
    length: {
      type: Number
    },
    completed: {
      type: Number
    }
  }
}
</script>

<style scoped lang="scss">
.steps {
  margin-left: -8px;
  display: flex;
  align-items: center;

  &__step {
    display: flex;
    align-items: center;
  }

  &__cricle {
    position: relative;
    width: 21px;
    height: 21px;
    margin: 0 8px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $blue05;

    &_completed {
      background-color: $blue02;
    }

    &_inwork {
      background-color: $blue02;
      &:before {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 28px;
        height: 28px;
        border-radius: 50px;
        border: 1px solid #464EA3;
      }
    }
  }

  &__cricle-num {
    color: #fff;
    font-size: 14px;
  }

  &__cricle_completed &__cricle-num {
    display: none;
  }

  &__cricle-completed {
    display: none;
  }

  &__cricle_completed &__cricle-completed {
    display: block;
  }

  &__line {
    width: 48px;
    height: 2px;
    border-radius: 10px;
    background-color: #DCE5F2;
  }

  &__step:last-child &__line {
    display: none;
  }
}
</style>
