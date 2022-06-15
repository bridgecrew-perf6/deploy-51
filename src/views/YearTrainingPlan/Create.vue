<template>
  <div class="d-flex">
    <left-menu>
      <div class="groul-list__wrapper">
        <p class="groul-list__title h3">Показывать расписание для</p>

        <select-group value="np2" />
      </div>
    </left-menu>

    <div class="container">
      <Header />

      <div class="section-title--create d-flex align-center mb-8">
        <wu-icon icon="education" class="mr-3" />
        <h2 class="h2">Календарь</h2>
      </div>

      <v-card class="training-plan-year__card mb-10"> </v-card>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue'

import Header from '@/components/Header.vue'

import SelectGroup from '@/components/SelectGroup.vue'
import SmallSelect from '@/components/elements/SmallSelect.vue'

export default {
  name: 'Schedule',
  data() {
    return {
      groups: [
        {
          img: require('@/assets/images/groups/img-group01.png'),
          slug: 'np2',
          name: 'НП-2',
          description: '8-9 лет (2 год подготовки) ',
          utp: false,
        },
        {
          img: require('@/assets/images/groups/img-group02.png'),
          slug: 'ss2',
          name: 'CC-1',
          description: '10-11 лет (4 год подготовки) ',
          utp: true,
        },
      ],
    }
  },
  components: { LeftMenu, Header, SelectGroup, SmallSelect },
  computed: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.groul-list__wrapper {
  padding-top: 32px;
}

.groul-list__title {
  margin-bottom: 20px;
  color: $blue02;
}

.groul-list {
  padding: 0px;
}

.groul-list__item {
  margin-bottom: 20px;
  padding: 17px 12px 13px;
  background-color: #ffffff;
  border: 2px solid #ecf6ff;
  border-radius: 12px;
  &:last-child {
    margin-bottom: 0px;
  }
  &:hover {
    border-color: $blue06;
  }
  &::v-deep {
    .v-list-item__avatar {
      margin: 0;
      margin-right: 15px;
    }
    .v-list-item__content {
      padding: 0px;
    }
    .v-list-item__title {
      margin: 0px;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: $blue02;
    }
    .v-list-item__subtitle {
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 19px;
      color: $blue02 !important;
    }
  }
}

.groul-list__item-chip {
  &::v-deep {
    flex: 0 0 auto;
    height: auto;
    border-style: solid;
    border-width: 2px;
    border-color: transparent;
    .v-chip__content {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #ffffff;
    }
  }
}
.groul-list__item-chip--badly {
  &::v-deep {
    background-color: $badly !important;
    border-color: rgba(255, 255, 255, 0.5);
  }
}
.groul-list__item-chip--great {
  &::v-deep {
    background-color: $great !important;
    border-color: rgba(255, 255, 255, 0.5);
  }
}

.section-title--create {
  h2 {
    font-weight: normal;
    color: $blue02;
  }
}

.training-plan-year__card {
  min-height: 795px;
  box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  border-radius: 28px;
}

.training-plan-year__card--empty {
  display: flex;
  justify-content: center;
  align-items: center;
}

.training-plan-year__empty-text {
  max-width: 395px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: $blue05;
}
</style>
