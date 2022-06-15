<template>
  <div class="add-routes">
    <div class="add-routes__top">
      <v-text-field
        class="custom-inp add-routes__top-inp"
        v-model="form.lacation"
        return-masked-value
        flat
        hide-details
      >
        <template slot="prepend">
          <div class="add-routes__top-inp-text">{{ name }}</div>
        </template>
        <template slot="append">
          <div class="custom-inp__icon-inside">
            <img src="@/assets/images/svg/map.svg" alt="map" />
          </div>
        </template>
      </v-text-field>
    </div>

    <div class="add-routes__routes">
      <route-steps class="add-routes__step" :steps="form.routes.length" :active="active" />
      <div class="add-routes__route-wrapper">
        <div
          class="add-routes__route"
          :class="{ 'add-routes__route_active': index + 1 !== active && index + 1 === form.routes.length }"
          v-for="(route, index) in form.routes"
          :key="index"
        >
          <div class="add-routes__routes-form" v-if="index + 1 === active">
            <div class="add-routes__routes-group">
              <wu-input-time v-model="route.timeStart" class="add-routes__min-inp" />

              <v-text-field
                class="custom-inp add-routes__max-inp"
                return-masked-value
                flat
                hide-details
                placeholder="Введите заголовок ..."
                v-model="route.title"
              >
              </v-text-field>
            </div>
            <div class="add-routes__routes-group">
              <div class="custom-inp add-routes__inp-min-text">
                <p>Длительность</p>

                <wu-input-time v-model="route.duration" all-hours class="add-routes__min-inp" />
              </div>
              <v-text-field
                class="custom-inp add-routes__max-inp"
                return-masked-value
                flat
                hide-details
                placeholder="Введите данные маршрута через запятую ..."
                v-model="route.routeData"
              >
              </v-text-field>
            </div>
            <div class="add-routes__routes-group add-routes__routes-group_bottom">
              <v-text-field
                class="custom-inp add-routes__max-inp"
                return-masked-value
                flat
                hide-details
                placeholder="Введите комментарий"
                v-model="route.comments"
              >
              </v-text-field>
              <div class="add-routes__routes-icon" @click="save(index)">
                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.732 0.278316C21.2417 -0.145415 20.4819 -0.0706388 20.0406 0.402943L7.66195 12.9903L2.1467 7.35712C1.68097 6.88354 0.945599 6.80877 0.455355 7.2325C-0.108427 7.70608 -0.157451 8.57847 0.357306 9.1019L6.755 15.6074C7.26976 16.1309 8.12769 16.1309 8.64244 15.6074L21.83 2.14772C22.3203 1.62429 22.2958 0.776824 21.732 0.278316Z"
                    fill="#95B0DA"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="add-routes__routes-info" v-else>
            <div class="add-routes__routes-info-content">
              <h3 class="add-routes__routes-time">{{ route.timeStart }}</h3>
              <p class="add-routes__routes-descr">
                {{ route.title }}: <br />
                {{ route.routeData }}
              </p>
            </div>
            <button class="add-routes__routes-info-edit" @click="edit(index + 1)">
              <img src="@/assets/images/svg/edit.svg" alt="edit" />
            </button>
          </div>
        </div>
        <button class="add-routes__routes-add" @click="addRoute">
          <div class="add-routes__routes-plus">
            <img src="@/assets/images/svg/plus.svg" alt="plus" />
          </div>
          <p>Добавить пункт маршрута</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import RouteSteps from './RouteSteps.vue'

export default {
  props: {
    name: String,
    route: Object,
  },
  components: {
    RouteSteps,
  },
  data() {
    return {
      form: {
        lacation: '',
        routes: [
          {
            timeStart: '',
            title: '',
            duration: '',
            routeData: '',
            comments: '',
          },
        ],
      },
      active: 1,
    }
  },
  validations: {
    form: {
      routes: {
        $each: {
          timeStart: {
            required,
          },
          title: {
            required,
          },
          duration: {
            required
          },
          routeData: {
            required,
          },
        },
      },
    },
  },
  watch: {
    form: {
      handler() {
        this.$emit('changeForm', this.form)
      },
      deep: true,
    },
    route: {
      handler() {
        if (this.route.routes.length) {
          this.form = this.route
        }
      },
      deep: true,
    },
  },
  methods: {
    addRoute() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      this.form.routes.push({
        timeStart: '',
        title: '',
        duration: '',
        routeData: '',
        comments: '',
      })
      this.active = this.form.routes.length
    },
    edit(index) {
      this.active = index

      const lastObj = this.form.routes.length - 1
      if (!this.form.routes[lastObj].title) {
        this.form.routes.splice(lastObj, 1)
      }
    },
    save() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      this.active = 0
    },
  },
}
</script>

<style scoped lang="scss">
.add-routes {
  .custom-inp {
    &_err {
      &::v-deep {
        input {
          border: 1px solid #ff4b6b;
        }
      }
    }
  }

  &__top-inp-text {
    color: $blue02;
    font-size: 20px;
  }

  &__top-inp {
    &::v-deep .v-input__slot {
      .v-text-field__slot input {
        padding-left: 17px;
      }
    }
  }

  &__route-wrapper {
    width: calc(100% - 45px);
    margin-left: 11px;
  }

  &__routes {
    margin-top: 22px;
    display: flex;
  }

  &__route {
    &:not(:first-child) {
      margin-top: 35px;
    }
  }

  &__route_active {
    padding-bottom: 22px;
  }

  &__routes-form {
    width: 100%;
    margin-top: -10px;
  }

  &__routes-info {
    height: 70px;
  }

  &__routes-info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
  }

  &__routes-info-content {
    display: flex;
  }

  &__routes-info-edit {
    display: none;
    margin-top: -6px;
    margin-right: -3px;
    padding: 3px;
  }

  &__routes-info:hover &__routes-info-edit {
    display: block;
  }

  &__routes-time {
    margin-top: -15px;
    color: #464ea3;
    font-size: 36px;
    font-weight: 400;
  }

  &__routes-descr {
    max-width: 200px;
    margin-top: -7px;
    margin-left: 17px;
    color: $blue02;
    font-size: 14px;
  }

  &__routes-group {
    width: calc(100% - 35px);
    display: flex;
    justify-content: space-between;

    &:not(:first-child) {
      margin-top: 16px;
    }
  }

  &__routes-group_bottom {
    margin-left: 22%;
    align-items: center;
    justify-content: flex-start;
  }

  &__routes-icon {
    margin-left: 15px;
    cursor: pointer;
  }

  &__routes-group-bottom &__max-inp {
    width: 100%;
  }

  &__inp-min-text {
    text-align: left;
    margin-top: -10px;
    width: 22%;
    display: flex;
    flex-direction: column;

    p {
      color: $blue02;
      text-align: left;
      font-size: 10px;
      line-height: 10px;
    }
  }

  &__inp-min-text &__min-inp {
    width: 100%;
  }

  &__min-inp {
    width: 22%;

    &::v-deep .v-input__slot {
      .v-text-field__slot input {
        text-align: center;

        &::placeholder {
          font-size: 14px;
        }
      }
    }
  }

  &__max-inp {
    width: 76%;

    &::v-deep .v-input__slot {
      .v-text-field__slot input {
        padding-left: 11px;
      }
    }
  }

  &__routes-add {
    margin-left: -35px;
    margin-top: 19px;
    display: flex;
    cursor: pointer;
    user-select: none;

    p {
      margin-left: 19px;
      color: #464ea3;
    }
  }

  &__routes-plus {
    width: 23px;
    height: 23px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #95b0da;
  }
}
</style>
