<template>
  <v-data-table
    class="db-tab-statistics"
    :item-class="itemClass"
    :headers="headers"
    disable-pagination
    hide-default-footer
    :items="sportsmen"
    height="410"
    fixed-header
  >
    <template v-slot:header.name>
      <div class="sort">
        <button class="sort__number">
          <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.23 14.782c.071-.04.13-.025.188-.025.974 0 1.952-.003 2.926.003.15 0 .185-.037.185-.18-.003-4.799-.003-9.598-.007-14.397 0-.146.042-.177.185-.174.621.01 1.24.006 1.861 0 .123 0 .162.028.162.152-.003 2.683-.003 5.366-.003 8.053 0 2.131 0 4.263-.003 6.395 0 .12.029.151.158.151 1.007-.006 2.017-.003 3.024-.003.026 0 .052.003.094.007-.094.17-.233.29-.343.43-.285.369-.583.728-.887 1.082-.638.743-1.26 1.496-1.888 2.246-.385.462-.777.92-1.155 1.385-.085.105-.13.093-.208-.003-.34-.406-.696-.8-1.03-1.212a123.203 123.203 0 0 0-1.854-2.237c-.402-.474-.777-.966-1.204-1.422-.065-.08-.127-.161-.201-.25ZM.98 14V3.92h1.708l4.676 7.105V3.92h1.708V14H7.364L2.688 6.895V14H.98Zm11.641-5.25c-.462 0-.884-.112-1.267-.336a2.634 2.634 0 0 1-.917-.91 2.475 2.475 0 0 1-.336-1.274c0-.457.117-.877.35-1.26.233-.383.541-.688.924-.917a2.386 2.386 0 0 1 1.246-.343c.462 0 .882.114 1.26.343.383.224.688.527.917.91.229.378.343.8.343 1.267 0 .467-.114.891-.343 1.274a2.634 2.634 0 0 1-.917.91 2.425 2.425 0 0 1-1.26.336Zm0-1.442c.196 0 .376-.049.539-.147.163-.098.294-.229.392-.392.098-.163.147-.343.147-.539s-.049-.376-.147-.539a1.126 1.126 0 0 0-.392-.392 1.028 1.028 0 0 0-.539-.147c-.196 0-.376.049-.539.147a1.126 1.126 0 0 0-.392.392 1.028 1.028 0 0 0-.147.539c0 .196.049.376.147.539.098.163.229.294.392.392.163.098.343.147.539.147Zm-2.1 3.381V9.366h4.2v1.323h-4.2Z"
              fill="#B9CBE5"
            />
          </svg>
        </button>
        <button class="sort__alphabet">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.23 14.782c.071-.04.13-.025.188-.025.974 0 1.952-.003 2.927.003.148 0 .184-.037.184-.18L14.523.184c0-.146.042-.177.184-.174.622.01 1.24.006 1.861 0 .123 0 .162.028.162.152-.003 2.683-.003 5.366-.003 8.053 0 2.131 0 4.263-.003 6.395 0 .12.029.151.159.151 1.006-.006 2.016-.003 3.023-.003.026 0 .052.003.094.007-.094.17-.233.29-.343.43-.285.369-.583.728-.887 1.082-.638.743-1.26 1.496-1.887 2.246-.386.462-.777.92-1.156 1.385-.084.105-.13.093-.207-.003-.34-.406-.696-.8-1.03-1.212a123.209 123.209 0 0 0-1.855-2.237c-.401-.474-.777-.966-1.204-1.422-.065-.08-.126-.161-.2-.25ZM5.397 6.711h-3.39l-.392 1.236H0L2.538 0h2.34l2.539 7.947H5.8l-.404-1.236Zm-.45-1.413L3.69 1.413 2.457 5.298h2.49ZM6.656 20H5.089v-2.705H3.23L1.858 20H.081l1.521-2.99a2.44 2.44 0 0 1-.968-.772 2.906 2.906 0 0 1-.404-.721c-.1-.26-.15-.524-.15-.79 0-.289.05-.568.146-.846.098-.276.234-.527.408-.756.169-.22.373-.416.612-.58.24-.164.496-.288.774-.368.275-.081.557-.121.842-.121h3.794V20Zm-1.57-6.535H2.87c-.155 0-.314.04-.479.121-.165.08-.304.183-.42.31-.201.214-.302.49-.302.827 0 .236.084.465.253.685.116.149.262.264.437.353.178.087.346.134.508.134h2.214v-2.43h.004Z"
              fill="#B9CBE5"
            />
          </svg>
        </button>
        <v-radio-group v-model="amplua" row hide-details class="sort__amplua">
          <v-radio class="sort__amplua-radio" value="non-goalies">
            <template v-slot:label>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 5.273c.323-.457.745-.538 1.26-.398.305.082.623.117.935.164.318.047.364-.03.462-.322.156-.457.341-.902.555-1.335.08-.164.254-.287.404-.404.283-.217.272-.445-.052-.591-.427-.194-.86-.381-1.311-.58C2.698 1.134 3.293.7 4.009.419 5.037.021 6.112-.055 7.192.033c.774.064 1.536.21 2.305.322.046.006.092.035.138.04.312.053.381.223.312.534-.231.983-.433 1.973-.635 2.962-.047.223-.15.293-.376.287-.733-.017-1.461 0-2.195-.006-.86-.005-1.496.352-1.86 1.166-.433.93-.866 1.856-1.288 2.78-.15.335-.046.504.312.516.404.006.803 0 1.242 0-.156.633-.295 1.236-.462 1.833-.04.146-.185.258-.243.334.22.568.433 1.118.641 1.662.127.334.33.627.665.727.387.11.808.228 1.207.193.941-.088 1.461-.691 1.536-1.657.018-.223 0-.445 0-.703-.144 0-.283-.006-.427 0-.283.024-.416-.1-.45-.392-.076-.709-.168-1.411-.26-2.114-.058-.433-.116-.474-.56-.474H4.314c.017-.07.017-.123.04-.17.359-.785.723-1.57 1.086-2.354.243-.515.665-.743 1.208-.743 2.206 0 4.407.005 6.614.011.728 0 1.23.352 1.328.99.047.28-.011.58-.04.866-.04.346-.116.691-.156 1.037-.029.27-.156.363-.422.357-1.167-.006-2.328-.006-3.495-.006-.438 0-.502.059-.502.504v1.99c0 .416-.075.492-.485.492h-.353c-.046.363-.063.715-.132 1.054-.26 1.353-1.214 2.055-2.56 1.92-1.08-.11-1.767-.614-2.044-1.727-.093-.368-.3-.702-.468-1.095-.202.147-.341.246-.474.352-.162.123-.312.123-.468-.018-.745-.661-1.496-1.317-2.23-1.99-.098-.088-.144-.264-.173-.405-.029-.17-.011-.35-.006-.527.012-.34.052-.673-.335-.872C.133 7.65.081 7.457 0 7.329V5.272Z"
                  fill="#fff"
                />
                <path
                  d="M9.9 4.154c.243-.972.48-1.932.729-2.922.797.358 1.67.639 2.362 1.26.122.11.22.28.26.438.098.393.162.797.243 1.224H9.9ZM.63 4.184c.092-.797.387-1.43 1.045-1.856a.27.27 0 0 1 .214-.018c.347.14.687.293.982.427l-.843 1.675c-.405-.064-.878-.14-1.398-.228Z"
                  fill="#fff"
                />
              </svg>
              Полевые игроки
            </template>
          </v-radio>
          <v-radio class="sort__amplua-radio" value="goalies">
            <template v-slot:label>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.934 1.468c-.388 1.028-.573 2.046.257 2.907.879.907 1.978.757 3.078.433 1.04 1.989 1.111 3.937-.711 5.55-2.175 1.924-4.757 3.155-7.547 3.993-.383.116-.753.047-1.106-.092C2.495 13.692 1.3 12.866.47 11.6c-.49-.751-.616-1.514-.287-2.381.95-2.497 2.205-4.804 4.045-6.786C4.94 1.676 5.77 1.109 6.84.93c1.094-.185 2.11.052 3.095.538ZM4.82 4.595c-.192.283-.377.612-.61.901-.233.29-.227.538-.06.856.4.751.831 1.48 1.446 2.121.443-.45.873-.89 1.267-1.295-.669-.838-1.35-1.705-2.043-2.583Zm5.204 4.93c-.902-.63-1.78-1.249-2.689-1.884-.4.41-.824.855-1.267 1.312.723.676 1.608 1.173 2.66 1.37.06.011.137-.018.185-.052.376-.249.753-.503 1.111-.746ZM7.407 6.779c.496-.508.968-.994 1.452-1.497-.657-.6-1.386-1.179-2.324-1.422-.425-.11-.86-.12-1.267.15.573 1.018 1.284 1.914 2.139 2.77Zm3.22 2.312c.246-.237.335-.456.3-.763-.138-1.08-.867-1.814-1.596-2.6-.502.52-.968 1-1.452 1.496a12.494 12.494 0 0 0 2.749 1.867ZM3.524 6.59c-.532.647-.615.86-.442 1.433.203.682.603 1.254 1.063 1.792l.92-.89c-.52-.786-1.027-1.56-1.541-2.335Zm1.07 3.682c.531.427 1.093.768 1.744.942.652.179 1.25.092 1.763-.422-.98-.29-1.804-.798-2.54-1.463-.334.318-.639.619-.967.943Z"
                  fill="#fff"
                />
                <path
                  d="M12.988 4.242c-.824.37-1.882.254-2.348-.243-.49-.514-.556-1.497-.138-2.214 1.016.636 1.847 1.434 2.486 2.457Z"
                  fill="#fff"
                />
              </svg>
              Вратари
            </template>
          </v-radio>
        </v-radio-group>
      </div>
    </template>

    <template v-slot:item.name="{ item }">
      <div class="player">
        <span class="player__number">{{ item.teamNumber }}</span>
        <v-img
          :src="require(`@/assets/images/positionTypes/${item.amplua}.svg`)"
          width="48"
          max-width="48"
          height="48"
          class="player__avatar"
        ></v-img>
        <div class="player__about">
          <p class="player__full-name">
            {{ item.firstName }} {{ item.lastName }} <span class="player__amplua">защитник</span>
          </p>
        </div>
      </div>
    </template>

    <template v-slot:item.week.mon="{ item }">
      <img :src="item.week.mon" alt="" />
    </template>

    <template v-slot:item.week.tues="{ item }">
      <img :src="item.week.tues" alt="" />
    </template>

    <template v-slot:item.week.wed="{ item }">
      <img :src="item.week.wed" alt="" />
    </template>

    <template v-slot:item.week.thurs="{ item }">
      <img :src="item.week.thurs" alt="" />
    </template>

    <template v-slot:item.week.fri="{ item }">
      <img :src="item.week.fri" alt="" />
    </template>

    <template v-slot:item.week.sat="{ item }">
      <img :src="item.week.sat" alt="" />
    </template>

    <template v-slot:item.week.sun="{ item }">
      <img :src="item.week.sun" alt="" />
    </template>

    <template v-slot:item.total="{ item }">
      <v-chip class="db-tab-chip" :color="getColor(item.total)" dark>
        {{ item.total }}
        <span class="db-tab-chip__percent">%</span>
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      amplua: 'non-goalies',
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'name',
          width: '36.4%',
        },
        { text: '13/10 СР', value: 'week.mon', align: 'center', width: '7.95%' },
        { text: '14/10 ЧТ', value: 'week.tues', align: 'center', width: '7.95%' },
        { text: '15/10 ПТ', value: 'week.wed', align: 'center', width: '7.95%' },
        { text: '16/10 СБ', value: 'week.thurs', align: 'center', width: '7.95%' },
        { text: '17/10 ВС', value: 'week.fri', align: 'center', width: '7.95%' },
        { text: '18/10 ПН', value: 'week.sat', align: 'center', width: '7.95%' },
        { text: '19/10 ВТ', value: 'week.sun', align: 'center', width: '7.95%' },
        { text: 'Посещаемость за сезон', value: 'total', align: 'center', width: '108px' },
      ],
      attendanceStatus: [
        { id: 0, img: require('@/assets/images/svg/attendance/presence.svg') },
        { id: 1, img: require('@/assets/images/svg/attendance/late.svg') },
        { id: 2, img: require('@/assets/images/svg/attendance/absent.svg') },
      ],
    }
  },
  computed: {
    sportsmen() {
      let arr = []

      for (let index = 0; index < 20; index++) {
        let element = {
          firstName: 'Герасимов',
          lastName: 'Юрий',
          amplua: 'defender',
          teamNumber: Math.floor(Math.random() * (100 - 0 + 1) + 0),
          avatar: null,
          total: Math.floor(Math.random() * (100 - 0 + 1) + 0),
          week: {
            mon: this.attendanceStatus.find(x => x.id === 0).img,
            tues: this.attendanceStatus.find(x => x.id === 1).img,
            wed: this.attendanceStatus.find(x => x.id === 2).img,
            thurs: this.attendanceStatus.find(x => x.id === 0).img,
            fri: this.attendanceStatus.find(x => x.id === 1).img,
            sat: this.attendanceStatus.find(x => x.id === 2).img,
            sun: this.attendanceStatus.find(x => x.id === 0).img,
          },
        }
        arr.push(element)
      }

      return arr
    },
  },
  methods: {
    getColor(percent) {
      if (percent <= 30) return 'terrible'
      else if (percent >= 31 && percent <= 60) return 'badly'
      else if (percent >= 61 && percent <= 70) return 'good'
      else return 'great'
    },
    getHexColor(percent) {
      if (percent <= 30) return '#ff4b6b'
      else if (percent >= 31 && percent <= 50) return '#ffa217'
      else if (percent >= 51 && percent <= 70) return '#64c048'
      else return '#2abaf3'
    },
    itemClass(item) {
      return 'db-tab-statistics__row'
    },
  },
}
</script>

<style lang="scss" scoped>
.db-tab-statistics {
  margin-bottom: 32px;

  &::v-deep {
    background-color: transparent;

    .v-data-table__wrapper {
      &::-webkit-scrollbar {
        width: 3px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background: #aaa;
        border-radius: 6px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #999;
      }
    }
    .v-data-table-header {
      th {
        height: auto !important;
        padding: 8px;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        color: #fff !important;
        border-bottom: 2px solid transparent !important;
        background-color: $blue02 !important;
        &:not(:first-child) {
          max-width: 101px !important;
          border-color: $blue01 !important;
        }
        &:first-child {
          padding: 8px 19px;
        }
        &.active {
          border-bottom-color: #fff !important;
        }
      }
      .v-data-table-header__icon {
        display: none;
      }
    }

    .db-tab-statistics__row {
      &:hover {
        background-color: transparent !important;
      }
      td {
        padding: 6px 4px !important;
        border-bottom: 1px solid $blue01;
        &:first-child {
          padding-left: 19px !important;
          padding-right: 19px !important;
          border-bottom: none !important;
        }
      }
      &:last-child {
        td {
          border-bottom: none !important;
        }
      }
    }
  }
}

.db-tab-chip {
  &::v-deep {
    width: 100%;
    height: auto;
    border-radius: 12px;
    .v-chip__content {
      width: 100%;
      align-items: flex-end;
      justify-content: center;
      padding: 12px;
      font-family: 'Folks', sans-serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 25px;
      letter-spacing: 0.05em;
      color: $blue01;
    }
    &.terrible {
      background-color: $terrible;
    }
    &.badly {
      background-color: $badly;
    }
    &.good {
      background-color: $good;
    }
    &.great {
      background-color: $great;
    }
  }
  &__percent {
    font-size: 11px;
    line-height: 20px;
  }
}

.player {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &__number {
    min-width: 23px;
    margin-right: 15px;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }

  &__about {
    flex-grow: 1;
    color: #ffffff;
  }

  &__full-name {
    margin-bottom: 3px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
  }

  &__about-amplua {
    font-weight: 400;
  }

  &__avatar {
    margin-right: 15px;
    &::v-deep {
      .v-responsive__content {
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 50%;
      }
      .v-image__image.v-image__image--cover {
        background-size: auto;
        background-color: $blue02;
      }
    }
  }
}

.sort {
  display: flex;
  align-items: center;

  &__number {
    margin-right: 25px;
  }

  &__alphabet {
    margin-right: 25px;
  }

  &__amplua {
    &::v-deep {
      margin-top: 0px;
      padding-top: 0px;
    }
  }

  &__amplua-radio {
    &::v-deep {
      margin-right: 0px !important;
      padding: 7px 15px;
      border-radius: 14px;
      &.v-item--active {
        background-color: $blue01;
      }
      .v-input--selection-controls__input {
        display: none;
      }
      .v-label {
        svg {
          margin-right: 5px;
        }
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;

        color: #ffffff;
      }
    }
  }
}
</style>
