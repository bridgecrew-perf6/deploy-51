<template>
  <div>
    <v-menu content-class="event-actions" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="event-actions__dropdown-btn" :ripple="false" dark v-bind="attrs" v-on="on">
          Действия

          <img src="@/assets/images/trainingDropdownActions.svg" />
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          ><router-link
            class="event-actions__link"
            :to="{ name: standard ? 'StandardEditView' : 'TrainingEditView', params: { id: idEvent } }"
          >
            Редактировать
            <img src="@/assets/images/trainingDropdownEdit.svg" />
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link
            class="event-actions__link"
            :to="{ name: standard ? 'StandardCopyView' : 'TrainingCopyView', params: { id: idEvent } }"
          >
            Копировать

            <img src="@/assets/images/trainingDropdownCopy.svg" />
          </router-link>
        </v-list-item>
        <v-list-item>
          <button class="event-actions__link event-actions__link--delete" @click="dialogDelete = true">
            Удалить

            <img src="@/assets/images/trainingDropdownDelete.svg" />
          </button>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-dialog content-class="delete-dialog" v-model="dialogDelete" max-width="440">
      <v-card class="delete-dialog__card">
        <v-card-text class="delete-dialog__text"> Вы действительно хотите удалить событие? </v-card-text>

        <v-card-actions class="delete-dialog__actions">
          <wu-button class="delete-dialog__delete-btn" label="Удалить" @click="deleteEvent"> </wu-button>

          <wu-button class="delete-dialog__cancel-btn" label="Отменить" @click="dialogDelete = false"> </wu-button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    idEvent: {
      type: [String, Number],
      required: true,
    },
    standard: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogDelete: false,
    }
  },
  methods: {
    deleteEvent() {
      this.$emit('deleteEvent')
    },
  },
}
</script>

<style scoped lang="scss">
.event-actions {
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top-width: 0px;

  background-color: $blue03;
  &::v-deep {
    .v-list {
      padding: 0px !important;
      background-color: transparent !important;
    }
    .v-list-item {
      display: block;
      padding: 0px !important;
      min-height: auto;
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
    .event-actions__link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;
      font-weight: 500;
      font-size: 14px;
      line-height: 31px;

      color: #ffffff;
      &:hover {
        background-color: $blue02;
      }
      &--delete {
        width: 100%;
        background-color: $terrible;
      }
    }
  }
  &__dropdown-btn {
    &::v-deep {
      min-width: 170px !important;
      height: 32px !important;
      padding: 0 12px !important;
      background-color: $blue03 !important;
      box-shadow: none;
      border: 2px solid rgba(#ffffff, 0.5);
      border-radius: 32px;
      &[aria-expanded='true'] {
        background-color: $blue02 !important;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        border-bottom-width: 0px;
      }
      &::before {
        display: none;
      }
      .v-btn__content {
        justify-content: space-between;
        font-weight: 500;
        font-size: 14px;
        line-height: 30px;
        font-weight: normal;

        color: #ffffff;
        text-transform: none;
      }
    }
  }
}

.delete-dialog {
  &__card {
    padding: 25px 0;
  }

  &__text {
    margin-bottom: 17px;
    padding-bottom: 0px !important;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: $blue02 !important;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px !important;
  }

  &__delete-btn {
    margin-right: 15px;
    &.v-btn.v-btn--has-bg {
      background-color: $terrible !important;
      border-color: transparent !important;
    }
  }

  &__cancel-btn {
    &.v-btn.v-btn--has-bg {
      background-color: $blue05 !important;
      border-color: transparent !important;
    }
  }
}
</style>

<style lang="scss">
.delete-dialog {
  background: #ffffff;
  border-radius: 28px !important;
}
</style>
