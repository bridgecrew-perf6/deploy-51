<template>
  <v-select
      class="select-period"
      v-model="per"
      :items="items"
      item-text="name"
      item-value="id"
      single-line
      hide-details
      :menu-props="menuProps"
      @change="$emit('change', $event)"
  ></v-select>
</template>

<script>
export default {
  props: {
    period: String
  },
  data() {
    return {
      per: 'month',
      menuProps: {
        contentClass: 'select-period__menu v-menu__content--shadow',
        nudgeBottom: 32,
        maxWidth: 102,
      },
      items: [
        {id: 'year', name: 'на год'},
        {id: 'month', name: 'на месяц'},
        {id: 'week', name: 'на неделю'},
        {id: 'day', name: 'на день'},
      ],
    }
  },
  watch: {
    period() {
      this.per = this.period
    }
  },
  mounted() {
    if(this.period) {
      this.per = this.period
    }
  }
}
</script>

<style scoped lang="scss">
.select-period {
  width: 100%;
  display: inline-block;
  max-width: 102px;

  &.v-select--is-menu-active {
    background-color: #fbfbfe;
    border-radius: 4px 4px 0 0;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  }
}

.select-period__menu {
  .v-select-list {
    padding: 0px;
    box-shadow: none;
    background-color: transparent;
    &::v-deep {
      .v-list-item {
        padding: 0 10px;
        min-height: auto;
        &.v-list-item--active {
          &::before {
            background-color: transparent;
          }
          .v-list-item__title {
            color: $blue02;
          }
        }
        &:hover {
          &::before {
            background-color: #ecf6ff !important;
            opacity: 1;
          }
        }
      }
      .v-list-item__content {
        padding: 4px 0;
      }
      .v-list-item__title {
        line-height: 19px;
        color: $blue04;
      }
    }
  }
}

.select-period {
  margin-top: 0;
  padding-top: 0;
  color: $blue05;
  font-size: 14px;
  line-height: 19px;
  border-radius: 4px;
  &::v-deep {
    .v-input__slot {
      &::after,
      &::before {
        display: none;
      }
    }
    .v-select__selections {
      .v-select__selection {
        width: 100%;
        margin: 0;
        padding: 5px 0 5px 10px;
        color: $blue04;
      }
      input {
        max-width: 0px;
        width: 0px !important;
      }
    }
    .v-input__append-inner {
      position: absolute;
      top: 50%;
      right: 15px;
      margin: 0px;
      padding: 0px;

      max-width: 10px;
      transform: translateY(-50%);
    }
    .v-input__icon.v-input__icon--append {
      max-width: 10px !important;
      height: 10px !important;
      i {
        max-width: 10px;
        width: 100%;
        height: 100%;
        background-image: url("data:image/svg+xml,%3Csvg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.271.271a.926.926 0 0 0 0 1.31l3.055 3.054a.923.923 0 0 0 .671.271.923.923 0 0 0 .669-.27L7.72 1.58A.926.926 0 0 0 6.411.27L3.996 2.687 1.58.27a.926.926 0 0 0-1.309 0Z' fill='%23899BC9'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
}
</style>
