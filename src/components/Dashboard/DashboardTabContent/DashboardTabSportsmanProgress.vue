<template>
  <v-row class="tab-sportsman-progress">
    <v-col class="tab-sportsman-progress__progress-wrapper">
      <div v-for="(stats, index) in statistic" :key="index" class="tab-sportsman-progress__progress-inner">
        <div class="tab-sportsman-progress__progress-item">
          <stats-component :statsData="stats" />
        </div>
      </div>
    </v-col>
    <v-col>
      <col-chart inTab />
    </v-col>
  </v-row>
</template>

<script>
import StatsComponent from '@/components/Progress/StatsComponent.vue'
import ColChart from '@/components/Dashboard/ColChart.vue'

export default {
  data() {
    return {
      statistic: [
        {
          title: 'Теория',
          percent: 18,
          color: '#FF4E78',
          id: 0,
        },
        {
          title: 'ОФП',
          percent: 42,
          color: '#FFA217',
          id: 1,
        },
        {
          title: 'Психология',
          percent: 53,
          color: '#64C048',
          id: 2,
        },
        {
          title: 'Техника',
          percent: 74,
          color: '#79C54C',
          id: 3,
        },
        {
          title: 'Тактика',
          percent: 96,
          color: '#2ABAF3',
          id: 4,
        },

        {
          title: 'Игра',
          percent: 100,
          color: '#2ABAF3',
          id: 5,
        },
      ],
    }
  },
  components: {
    StatsComponent,
    ColChart,
  },
}
</script>

<style lang="scss">
.tab-sportsman-progress {
  padding: 40px 20px 46px;
  &__progress-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;
  }

  &__progress-inner {
    flex: 0 0 33%;
    padding: 0 12px;
  }

  &__progress-item {
    max-width: 135px;
    margin: 0 auto;
  }
}
</style>
