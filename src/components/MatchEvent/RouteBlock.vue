<template>
  <div class="route-block">
    <h3 class="list__title title-blue-20">Маршрут поездки</h3>

    <div class="route-block__wrapper">
      <div class="route-block__content">
        <h3 class="list__title title-blue-20">Туда</h3>
        <div class="route-block__routes-wrapper">
          <time-line :num="2" class="route-block__timeline" />
          <div class="route-block__routes">
            <div class="route-block__route">
              <div class="route-block__route-time">12:30</div>
              <div class="route-block__route-descr">
                <p>Встреча с детьми:</p>
                <p>
                  г. Иркутск• Автовокзал
                  Встречаемся у памятника Ленину
                </p>
                <span>1 ч 24 мин в пути</span>
              </div>
            </div>
            <div class="route-block__route">
              <div class="route-block__route-time">13:00</div>
              <div class="route-block__route-descr">
                <p>Отправление:</p>
                <p>Автобус №354</p>
                <span>1 ч 24 мин в пути</span>
              </div>
            </div>
            <div class="route-block__route">
              <div class="route-block__route-time">14:30</div>
              <div class="route-block__route-descr">
                <p>Прибытие: </p>
                <p>г. Вологда • Автовокзал</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="route-block__content">
        <h3 class="list__title title-blue-20">Обратно</h3>
        <div class="route-block__routes-wrapper">
          <time-line :num="2" class="route-block__timeline" />
          <div class="route-block__routes">
            <div class="route-block__route">
              <div class="route-block__route-time">12:30</div>
              <div class="route-block__route-descr">
                <p>Встреча с детьми:</p>
                <p>
                  г. Иркутск• Автовокзал
                  Встречаемся у памятника Ленину
                </p>
                <span>1 ч 24 мин в пути</span>
              </div>
            </div>
            <div class="route-block__route">
              <div class="route-block__route-time">13:00</div>
              <div class="route-block__route-descr">
                <p>Отправление:</p>
                <p>Автобус №354</p>
                <span>1 ч 24 мин в пути</span>
              </div>
            </div>
            <div class="route-block__route">
              <div class="route-block__route-time">14:30</div>
              <div class="route-block__route-descr">
                <p>Прибытие: </p>
                <p>г. Вологда • Автовокзал</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeLine from '@/components/TimeLineStandart.vue'
export default {
  components: {
    TimeLine
  }
}
</script>

<style scoped lang="scss">
.route-block {
  width: 100%;

  &__wrapper {
    width: 100%;
    padding: 28px 29px 24px 26px;
    margin-top: 16px;
    border-radius: 28px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  }

  &__content {
    width: 48%;
  }

  &__timeline {
    margin-top: 15px;
  }

  &__routes-wrapper {
    margin-top: 20px;
    display: flex;
  }

  &__routes {
    margin-left: 19px;
    display: flex;
    flex-direction: column;
  }

  &__route {
    max-height: 60px;
    display: flex;

    &:not(:first-child) {
      margin-top: 40px;
    }
  }

  &__route-time {
    color: #574F92;
    font-size: 36px;
    font-weight: 400;
  }

  &__route-descr {
    max-width: 230px;
    margin-top: 7px;
    margin-left: 19px;
    display: flex;
    flex-direction: column;

    p {
      font-size: 14px;
      color: #36427D;
    }

    span {
      margin-top: 3px;
      color: $blue04;
      font-size: 12px;
    }
  }
}
</style>
