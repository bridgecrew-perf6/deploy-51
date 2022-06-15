<template>
  <div class="route-block">
    <h3 class="list__title title-blue-20">Маршрут поездки</h3>

    <div class="route-block__wrapper">
      <div class="route-block__content">
        <h3 class="list__title title-blue-20">Туда</h3>
        <div class="route-block__routes-wrapper">
          <time-line :num="from.length - 1" class="route-block__timeline" v-if="from.length" />
          <div class="route-block__routes">
            <div class="route-block__route" v-for="route in from" :key="route.id">
              <div class="route-block__route-time">
                {{ getTime(route.time) }}
              </div>
              <div class="route-block__route-descr">
                <p>{{ route.description }}:</p>
                <p>
                  {{ route.comment }}
                </p>
                <span>{{ route.duration }} в пути</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="route-block__content">
        <h3 class="list__title title-blue-20">Обратно</h3>
        <div class="route-block__routes-wrapper">
          <time-line :num="to.length - 1" class="route-block__timeline" v-if="to.length" />
          <div class="route-block__routes">
            <div class="route-block__route" v-for="route in to" :key="route.id">
              <div class="route-block__route-time">
                {{ getTime(route.time) }}
              </div>
              <div class="route-block__route-descr">
                <p>{{ route.description }}:</p>
                <p>
                  {{ route.comment }}
                </p>
                <span>{{ route.duration }} в пути</span>
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
    TimeLine,
  },
  props: {
    routes: Array,
  },
  data() {
    return {
      from: [],
      to: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.routes.forEach(item => {
        if (item.direction === 'from') this.from.push(item)
        if (item.direction === 'to') this.to.push(item)
      })
    },
    getTime(d) {
      const date = new Date(d)

      const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

      return `${hours}:${minutes}`
    },
  },
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
    width: 95px;
    color: #574f92;
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
      color: #36427d;
    }

    span {
      margin-top: 3px;
      color: $blue04;
      font-size: 12px;
    }
  }
}
</style>
