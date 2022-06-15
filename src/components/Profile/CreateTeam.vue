<template>
  <v-card class="teams__card">
    <div class="teams__avatar-wrapper">
      <v-img
        :src="require('@/assets/images/svg/profile/avatar-team.svg')"
        width="100"
        height="100"
        class="teams__avatar teams__avatar--empty"
      ></v-img>
      <v-file-input class="teams__select-image" hide-details accept="image/*"> </v-file-input>
    </div>
    <div class="teams__content">
      <div class="teams__row">
        <wu-input class="teams__input teams__input--name" label="Название команды"></wu-input>
        <wu-input class="teams__input" label="Сокращенное название"></wu-input>
      </div>
      <div class="teams__row">
        <wu-select
          :items="utils.ageGroups"
          itemText="title"
          itemValue="id"
          class="teams__select"
          label="Возрастная группа"
          outlined
        ></wu-select>
        <wu-select
          :items="utils.preparationPeriods"
          itemText="title"
          itemValue="id"
          class="teams__select"
          label="Год подготовки"
          outlined
        ></wu-select>
        <wu-input class="teams__input" label="Город"></wu-input>
      </div>

      <base-button class="teams__create-team" dark label="Создать команду"></base-button>
    </div>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('events', ['getUtils']),
    utils() {
      return this.getUtils
    },
  },
  methods: {
    ...mapActions('events', ['loadUtils']),
  },
  mounted() {
    this.loadUtils()
  },
}
</script>

<style lang="scss" scoped>
.teams {
  &::v-deep {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #ffffff;
  }

  &__card {
    &::v-deep {
      display: flex;
      align-items: flex-start;
      padding: 20px 23px;
      background-color: #ffffff;
      border-radius: 28px;
      border: 1px solid #dce5f2;
      box-shadow: none !important;
    }
  }

  &__avatar-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 110px;
    height: 110px;
    margin-right: 25px;
    border-radius: 50% !important;
    border: 2px solid $blue06;
  }

  &__avatar {
    max-width: 100px;
    min-height: 100px;
    border-radius: 50%;
    &--empty {
      background-color: #ecf6ff;
    }
  }

  &__select-image {
    position: absolute;
    bottom: 0px;
    right: 0px;
    &::v-deep {
      margin: 0px;
      padding: 0px;
      .v-input__slot {
        margin: 0px;
        cursor: pointer;
        &::after,
        &::before {
          display: none;
        }
      }
      .v-input__prepend-outer {
        display: none;
      }

      .v-text-field__slot {
        width: 36px;
        height: 36px;
        background-color: #ffffff;
        border-radius: 50%;
        box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
        background-image: url('~@/assets/images/svg/profile/photo.svg');
        background-position: center;
        background-repeat: no-repeat;
      }
      .v-input__append-inner {
        display: none;
      }
    }
  }

  &__content {
    width: 100%;
    padding-top: 20px;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  &__input {
    flex: 0 0 calc((100% / 3) - 25px);
    &--name {
      flex: 0 0 calc(((100% / 3) * 2) - 12.5px);
    }
  }
  &__select {
    flex: 0 0 calc((100% / 3) - 25px);
  }
  &__create-team {
    display: block;
    margin-top: 20px;
    margin-left: auto;
  }
}
</style>
