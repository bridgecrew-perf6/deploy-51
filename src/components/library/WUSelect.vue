<template>
  <div>
    <p v-if="label" class="wu-select-label">{{ label }}</p>
    <v-select
      :placeholder="placeholder"
      v-model="inputVal"
      :items="items"
      :item-value="itemValue"
      :item-text="itemText"
      flat
      single-line
      hide-details
      class="wu-select"
      :class="{ 'wu-select--border': outlined }"
      :menu-props="menuSettingsBordered"
      :value="value"
      :multiple="multiple"
    >
      <template v-if="multiple" v-slot:item="{ item, attrs, on }">
        <v-list-item v-on="on" v-bind="attrs" #default="{ active }">
          <v-list-item-action>
            <wu-checkbox white small :value="active"></wu-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <template v-if="multiple" v-slot:selection="{ item, index }">
        <div v-if="index < 3" class="v-select__selection">
          <template v-if="index !== 0">,</template> {{ item[itemText] }}
        </div>
        <span v-if="index === 3" class="v-select__selection ml-1">(+{{ inputVal.length - 3 }})</span>
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: [Array, Object],
    },
    itemValue: {
      type: String,
    },
    itemText: {
      type: String,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    multiple: {
      type: Boolean,
    },
    placeholder: {
      type: String,
    },
    value: [Number, String, Array, Object],
  },
  data() {
    return {
      menuSettingsBordered: {
        contentClass: 'menu-select',
        nudgeBottom: 32,
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
.wu-select {
  padding: 0;
  margin-top: 0px;

  &::v-deep {
    input {
      &::placeholder {
        color: $blue05;
      }
    }

    &.v-input--is-focused.v-select--is-menu-active {
      .v-select__slot {
        label {
          display: flex;
          align-items: center;
        }
      }
    }

    .v-input__slot {
      padding: 0 12px;
      border-bottom: 1px solid #ecf6ff;
    }

    .v-select__slot {
      label {
        display: flex;
        align-items: center;
      }
    }

    .v-select__selection {
      margin: 0px;
      font-size: 20px;
      line-height: 27px;
      color: $blue02;
    }

    .v-input__slot {
      &::before,
      &::after {
        display: none;
      }
    }

    .v-input__icon.v-input__icon--append {
      i {
        width: 10px;
        height: 6px;
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.707 1.707 3.586 3.586a1 1 0 0 0 1.414 0l3.586-3.586C9.923 1.077 9.477 0 8.586 0H1.414C.524 0 .077 1.077.707 1.707Z' fill='%23B9CBE5'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }

  &--border {
    align-items: center;

    &::v-deep {
      .v-input__control {
        border: 1px solid #ecf6ff;
        border-radius: 4px;
      }

      .v-select__selection {
        font-size: 14px;
        line-height: 19px;
      }

      .v-select__slot label {
        font-weight: 300;
        font-size: 14px;
        line-height: 19px;
        color: $blue06;
      }
    }
  }
}

.wu-select-label {
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: $blue02;
}

.menu-select {
  .v-select-list {
    padding: 0px;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
    background-color: #fff;

    &::v-deep {
      .v-ripple__container {
        display: none;
      }
      .v-list-item__action {
        margin: 0px;
      }
      .v-list-item--link {
        padding: 10px 13px;
        min-height: auto;
        position: relative;

        &::before {
          background-color: transparent;
          opacity: 1;
        }

        &.v-list-item--active {
          .v-list-item__title {
            color: $blue02;
          }
        }

        &::after {
          display: none;
        }

        &:hover {
          &::before {
            background-color: #ecf6ff;
            transition: none;
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
</style>
