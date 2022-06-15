<template>
  <div class="sportsman-form">
    <div class="sportsman-form__header">
      <div class="sportsman-form__avatar-wrapper">
        <!-- <v-img
              src="https://source.unsplash.com/140x140/?portraits"
              width="140"
              height="140"
              class="sportsman-form__avatar"
            ></v-img> -->
        <v-img
          :src="require('@/assets/images/svg/profile/avatar.svg')"
          width="140"
          height="140"
          class="sportsman-form__avatar sportsman-form__avatar--empty"
        ></v-img>

        <wu-input class="sportsman-form__number"></wu-input>

        <v-file-input class="sportsman-form__select-image" hide-details accept="image/*"> </v-file-input>
      </div>

      <div class="sportsman-form__header-content">
        <wu-input class="sportsman-form__input sportsman-form__input--fname" label="Фамилия"></wu-input>
        <wu-input class="sportsman-form__input sportsman-form__input--sname" label="Имя"></wu-input>
        <wu-input class="sportsman-form__input sportsman-form__input--bday" label="Дата рождения"></wu-input>
        <wu-select class="sportsman-form__select" outlined label="Амплуа"></wu-select>
        <wu-select class="sportsman-form__select" outlined label="Спортивный звание"></wu-select>
      </div>
    </div>

    <div class="sportsman-form__contacts">
      <h3 class="sportsman-form__contacts-title">Контакты спортсмена</h3>

      <div class="sportsman-form__contacts-row">
        <wu-input class="sportsman-form__contacts-input" label="Телефон"></wu-input>
        <div class="sportsman-form__family-messengers">
          <edit-social-media class="sportsman-form__sm-input" name="whatsapp" />

          <edit-social-media class="sportsman-form__sm-input" name="telegram" />
        </div>
        <wu-input class="sportsman-form__contacts-input" label="Адрес"></wu-input>
      </div>

      <div class="sportsman-form__contacts-row">
        <wu-input class="sportsman-form__contacts-input" label="Почта"></wu-input>

        <div class="sportsman-form__contacts-sm">
          <edit-social-media class="sportsman-form__sm-input" name="twitter" />

          <edit-social-media class="sportsman-form__sm-input" name="instagram" />

          <edit-social-media class="sportsman-form__sm-input" name="facebook" />

          <edit-social-media class="sportsman-form__sm-input" name="skype" />
        </div>
      </div>
    </div>

    <div class="sportsman-form__family">
      <h3 class="sportsman-form__family-title">Контакты родителей</h3>

      <div class="sportsman-form__family-member">
        <h4 class="sportsman-form__member-title">Мать спортсмена</h4>
        <div class="sportsman-form__family-row">
          <wu-input class="sportsman-form__family-input" label="Фамиия"></wu-input>
          <wu-input class="sportsman-form__family-input" label="Имя"></wu-input>
          <wu-input class="sportsman-form__family-input" label="Отчество"></wu-input>
        </div>
        <div class="sportsman-form__family-row">
          <wu-input class="sportsman-form__family-input" label="Телефон"></wu-input>
          <div class="sportsman-form__family-messengers">
            <edit-social-media class="sportsman-form__sm-input" name="whatsapp" />

            <edit-social-media class="sportsman-form__sm-input" name="telegram" />
          </div>
          <wu-input class="sportsman-form__family-input" label="Почта"></wu-input>
        </div>
      </div>

      <div class="sportsman-form__family-member">
        <h4 class="sportsman-form__member-title">Отец спортсмена</h4>
        <div class="sportsman-form__family-row">
          <wu-input class="sportsman-form__family-input" label="Фамиия"></wu-input>
          <wu-input class="sportsman-form__family-input" label="Имя"></wu-input>
          <wu-input class="sportsman-form__family-input" label="Отчество"></wu-input>
        </div>
        <div class="sportsman-form__family-row">
          <wu-input class="sportsman-form__family-input" label="Телефон"></wu-input>
          <div class="sportsman-form__family-messengers">
            <edit-social-media class="sportsman-form__sm-input" name="whatsapp" />

            <edit-social-media class="sportsman-form__sm-input" name="telegram" />
          </div>
          <wu-input class="sportsman-form__family-input" label="Почта"></wu-input>
        </div>
      </div>
    </div>

    <div class="sportsman-form__footer">
      <button class="sportsman-form__save-btn">
        <img src="@/assets/images/svg/profile/save.svg" alt="Сохранить" class="sportsman-form__save-icon" />
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
import EditSocialMedia from '@/components/Profile/EditSocialMedia.vue'

export default {
  data() {
    return {}
  },
  components: {
    EditSocialMedia,
  },
}
</script>

<style lang="scss" scoped>
.sportsman-form {
  width: 100%;
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    padding-bottom: 30px;
    border-bottom: 1px solid #dce5f2;
  }

  &__avatar-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 152px;
    height: 152px;
    margin-right: 25px;
    border-radius: 50%;
    border: 2px solid $blue06;
  }

  &__avatar {
    max-width: 140px;
    min-height: 140px;
    border-radius: 50%;
    &--empty {
      background-color: $blue06;
    }
  }

  &__select-image {
    position: absolute;
    bottom: 0px;
    right: 4px;
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
        width: 42px;
        height: 42px;
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

  &__number {
    position: absolute;
    max-width: 41px;
    bottom: 0px;
    left: 0px;
    &::v-deep {
      .wu-input {
        text-align: center;
        border-radius: 12px;
        border: none;
        box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
      }
    }
  }

  &__header-content {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__input {
    &--fname,
    &--sname {
      flex: 0 0 calc((100% - 16px) / 2);
    }
    &--bday {
      max-width: 110px;
    }
  }

  &__contacts {
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid #dce5f2;
  }
  &__family {
    padding-bottom: 32px;
  }

  &__contacts-title,
  &__family-title {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 22px;
    color: $blue02;
  }

  &__contacts-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  &__contacts-input {
    flex: 0 0 calc((100% - (16px * 2)) / 3);
  }

  &__contacts-sm {
    display: inline-flex;
    align-items: center;
  }

  &__family-member {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  &__family-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  &__member-title {
    margin-bottom: 12px;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: $blue02;
  }

  &__family-input,
  &__family-messengers {
    flex: 0 0 calc((100% - (16px * 2)) / 3);
  }

  &__family-messengers {
    display: inline-flex;
    align-items: flex-end;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }

  &__save-btn {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: $blue05;
  }

  &__save-icon {
    margin-right: 10px;
    vertical-align: middle;
  }
}
</style>
