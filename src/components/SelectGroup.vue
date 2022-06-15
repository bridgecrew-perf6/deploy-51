<template>
  <div>
    <p v-if="label" class="select-group__label">{{ label }}</p>
    <v-select
      v-if="items.length"
      :items="items"
      item-text="name"
      item-value="slug"
      flat
      single-line
      hide-details
      class="select-group"
      :menu-props="menuSettings"
      :value="value"
      v-model="inputVal"
    >
      <template v-slot:item="{ item }">
        <img class="select-group__image" :src="item.img" />
        <div class="select-group__wrapper">
          <p class="select-group__name h2" :class="{ 'select-group__name--all': item.slug === 'all' }">
            {{ item.name }}
          </p>
          <p v-if="item.description" class="select-group__desc">{{ item.description }}</p>
        </div>
      </template>
      <template v-slot:selection="{ item }">
        <img class="select-group__image" :src="item.img" />
        <div class="select-group__wrapper">
          <p class="select-group__name h2" :class="{ 'select-group__name--all': item.slug === 'all' }">
            {{ item.name }}
          </p>
          <p v-if="item.description" class="select-group__desc">{{ item.description }}</p>
        </div>
      </template>
    </v-select>
    <router-link to="#" v-else class="select-group--empty"> Создать группу </router-link>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Array, Object],
    },
    label: {
      type: String,
    },
    items: {
      type: Array
    },
  },
  data() {
    return {
      // items: [
      //   {
      //     img: require('@/assets/images/groups/img-group-all.png'),
      //     slug: 'all',
      //     name: 'Все группы',
      //     description: '',
      //   },
      //   {
      //     img: require('@/assets/images/groups/img-group01.png'),
      //     slug: 'np2',
      //     name: 'НП-2',
      //     description: '8-9 лет (2 год подготовки) ',
      //   },
      //   {
      //     img: require('@/assets/images/groups/img-group02.png'),
      //     slug: 'ss2',
      //     name: 'CC-1',
      //     description: '10-11 лет (4 год подготовки) ',
      //   },
      // ],
      menuSettings: {
        contentClass: 'select-group__menu',
        nudgeBottom: 62,
        nudgeLeft: 18,
        maxWidth: 320,
      },
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.select-group__label {
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: $blue02;
}

.select-group {
  margin: 0px;
  padding: 16px;
  margin-bottom: 10px;
  border: 2px solid #ecf6ff;
  border-radius: 12px;
  box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);

  &::v-deep {
    .v-input__slot {
      &::before,
      &::after {
        display: none;
      }
    }

    .v-input__append-inner {
      margin: 0;
      padding: 0;
      align-self: center;
    }

    .v-input__icon.v-input__icon--append {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #ecf6ff;

      i {
        width: 14px;
        height: 9px;
        background-image: url("data:image/svg+xml,%3Csvg width='14' height='9' viewBox='0 0 14 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.525.88c.633.634.633 1.66 0 2.294L8.174 8.525c-.324.324-.75.482-1.175.475a1.617 1.617 0 0 1-1.173-.475L.475 3.174A1.622 1.622 0 0 1 2.768.88L7 5.112 11.232.88a1.622 1.622 0 0 1 2.293 0Z' fill='%23B9CBE5'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    &.v-select--is-menu-active {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
    }
  }
}

.select-group__image {
  display: inline-block;
  max-width: 48px;
  max-width: 48px;
  width: 100%;
  height: auto;
  margin-right: 18px;
  z-index: 1;
}

.select-group--empty {
  display: inline-block;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 80px;
  font-weight: 500;
  text-align: center;
  color: $blue05 !important;
  background-color: #ffffff;
  border: 2px dashed $blue06;
  border-radius: 12px;
}

.select-group__wrapper {
  color: $blue02;
  z-index: 1;
}

.select-group__name {
  font-weight: 500;

  &.select-group__name--all {
    font-size: 16px;
    line-height: 22px;
  }
}

.select-group__desc {
  font-size: 14px !important;
  line-height: 19px;
  font-weight: normal;
}
</style>
