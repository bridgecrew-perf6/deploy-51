<template>
  <div class="match-broadcast">
    <div class="match-broadcast__header">
      <div class="match-broadcast__header-content">
        <v-avatar size="88" class="match-broadcast__header-logo">
          <img
              src="@/assets/images/team.png"
              alt="John"
          >
        </v-avatar>
        <div class="match-broadcast__header-text match-broadcast__header-text_left">
          <div class="match-broadcast__header-title">Иркутские орлы</div>
          <p class="match-broadcast__header-subtitle">г. Иркутск</p>
        </div>
      </div>
      <div class="match-broadcast__score">
        <div class="match-broadcast__num">
          <div class="match-broadcast__num-number">2</div>
          <p class="match-broadcast__num-subtitle">ХОЗЯЕВА</p>
        </div>
        <div class="match-broadcast__timer">
          <div class="match-broadcast__timer-title">Игровое время</div>
          <div class="match-broadcast__timer-time">
            <p>01:20:00</p>
          </div>
        </div>
        <div class="match-broadcast__num">
          <div class="match-broadcast__num-number">4</div>
          <p class="match-broadcast__num-subtitle">ГОСТИ</p>
        </div>
      </div>
      <div class="match-broadcast__header-content">
        <div class="match-broadcast__header-text match-broadcast__header-text_right">
          <div class="match-broadcast__header-title">Иркутские орлы</div>
          <p class="match-broadcast__header-subtitle">г. Иркутск</p>
        </div>
        <v-avatar size="88" class="match-broadcast__header-logo">
          <img
              src="@/assets/images/team.png"
              alt="John"
          >
        </v-avatar>
      </div>
    </div>
    <match-video class="match-broadcast__video"/>
  </div>
</template>

<script>
import MatchVideo from "@/components/Broadcast/MatchVideo";

export default {
  name: 'MatchBroadcast',
  components: {
    MatchVideo
  }
}
</script>

<style scoped lang="scss">
.match-broadcast {
  width: 100%;
  border-radius: 28px;
  background-color: $blue02;
  overflow: hidden;

  &__header {
    width: 100%;
    height: 124px;
    padding: 18px 41px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
  }

  &__header-content {
    display: flex;
    align-items: center;
  }

  &__header-text {
    text-align: center;

    &_left {
      margin-left: 32px;
    }

    &_right {
      margin-right: 32px;
    }
  }

  &__header-title {
    font-size: 20px;
    font-weight: 600;
  }

  &__header-subtitle {
    margin-top: 3px;
    font-size: 16px;
    font-weight: 400;
  }

  &__score {
    width: 330px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__num {
    text-align: center;
  }

  &__num-number {
    font-family: 'FolksBold', serif;
    font-size: 56px;
    font-weight: 700;
    line-height: 1;
  }

  &__num-subtitle {
    margin-top: 2px;
    font-size: 14px;
    font-weight: 500;
  }

  &__timer-title {
    font-size: 14px;
    font-weight: 500;
  }

  &__timer-time {
    margin-top: 7px;
    width: 112px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $blue01;

    p {
      font-size: 20px;
      font-weight: 500;
    }
  }

  &__video {}
}
</style>
