<template>
  <div :class="classObjectDay" @click.self="openModalEvents(events, 'day')">
    <div class="day-header">
      <span :class="classObject">
        {{ day.format('D') }}
      </span>

      <div class="day-header__info">
        <svg
          style="margin-right: 20px"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9667 3.52618C13.9667 3.65825 13.9667 3.78879 13.9667 3.92085C13.95 4.0605 13.9394 4.20167 13.9181 4.34132C13.7982 5.0927 13.4673 5.74087 12.9345 6.28277C12.3379 6.88995 11.7323 7.48954 11.1296 8.09216C10.4708 8.75247 9.81053 9.41277 9.15022 10.0731C8.66296 10.5603 8.17418 11.0476 7.6854 11.5349C7.33323 11.887 6.9841 12.2422 6.63042 12.5913C6.4088 12.8084 6.1887 13.0316 5.95038 13.2274C5.48437 13.6084 4.95005 13.8512 4.35197 13.9408C4.19259 13.9651 4.03168 13.9803 3.8723 14C3.76604 14 3.65979 14 3.55353 14C3.5171 13.9954 3.47915 13.9879 3.4412 13.9863C3.12395 13.9696 2.8158 13.9104 2.51525 13.8103C1.987 13.6311 1.5301 13.3382 1.13239 12.9496C0.57075 12.4016 0.194298 11.7534 0.0607181 10.9732C0.0349129 10.8199 0.0197334 10.6636 0 10.5087C0 10.3569 0 10.2051 0 10.0533C0.0151795 9.93646 0.0273232 9.81806 0.0440206 9.70118C0.144206 8.98168 0.447796 8.35628 0.938095 7.82348C1.19159 7.54722 1.46331 7.28917 1.72591 7.02353C1.75324 6.99469 1.78056 6.96585 1.82003 6.92334C1.82762 7.29372 1.88074 7.63526 1.99307 7.96617C2.1054 8.2986 2.27693 8.59915 2.48793 8.87997C2.47275 8.89515 2.46364 8.9073 2.45301 8.91792C2.1054 9.24276 1.9111 9.64198 1.87315 10.1156C1.84583 10.4556 1.88682 10.7865 2.04317 11.0886C2.3589 11.7049 2.85982 12.0646 3.5596 12.1193C4.12732 12.1633 4.62065 11.9978 5.02746 11.5895C6.18111 10.4328 7.33323 9.27616 8.48688 8.11797C9.39158 7.21024 10.2978 6.3025 11.2025 5.39326C11.3437 5.25209 11.4879 5.11395 11.623 4.96671C11.9675 4.59482 12.1118 4.14854 12.0951 3.64762C12.0814 3.21956 11.9463 2.83552 11.6594 2.51068C11.3315 2.13878 10.9202 1.92627 10.4223 1.88073C10.0367 1.84582 9.67392 1.91261 9.33389 2.10084C9.10924 2.22531 8.93467 2.40898 8.75707 2.58658C7.87059 3.47457 6.9841 4.36105 6.0961 5.24753C5.64679 5.69684 5.19899 6.14616 4.74968 6.59395C4.60851 6.73512 4.55993 6.90361 4.62217 7.09335C4.73298 7.43034 5.15497 7.52141 5.40999 7.2664C6.47255 6.20384 7.53512 5.14128 8.59769 4.07872C8.62046 4.05595 8.63715 4.02559 8.66296 3.98916C8.74948 4.09541 8.82842 4.1789 8.89217 4.2715C9.40524 5.00618 9.32479 5.94275 8.69028 6.58788C8.03453 7.25426 7.37877 7.92215 6.71543 8.58246C6.06422 9.23062 5.27185 9.40366 4.40814 9.15776C3.45638 8.88756 2.61392 7.91912 2.76875 6.65163C2.82947 6.15678 3.01466 5.71961 3.36075 5.36138C3.71443 4.99707 4.07722 4.64036 4.43698 4.2806C4.8787 3.83888 5.31891 3.39716 5.76063 2.95392C6.20388 2.51068 6.6456 2.0644 7.09188 1.6242C7.37725 1.34186 7.65807 1.05042 7.9647 0.792367C8.46259 0.373414 9.04397 0.127507 9.69213 0.0425024C9.81964 0.0258051 9.94715 0.0136615 10.0747 0C10.1855 0 10.2978 0 10.4086 0C10.4405 0.00455383 10.4724 0.0121436 10.5058 0.0136615C10.8018 0.027323 11.0917 0.080451 11.3755 0.168492C12.0419 0.37645 12.5899 0.765044 13.0483 1.28266C13.5022 1.79573 13.7997 2.38469 13.9045 3.06473C13.9333 3.22108 13.9485 3.37439 13.9667 3.52618Z"
            fill="#95B0DA"
          />
        </svg>

        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.14485 5.08337C4.96395 5.08337 5.78548 5.08106 6.60458 5.08567C6.71606 5.08567 6.77422 5.06261 6.81299 4.9519C7.18377 3.84709 7.56182 2.7469 7.93744 1.6444C8.07073 1.2546 8.19917 0.862496 8.3373 0.4727C8.46089 0.115194 8.75655 -0.055486 9.10794 0.0160151C9.36724 0.0690643 9.51749 0.237438 9.59746 0.46578C10.1112 1.965 10.625 3.46421 11.1315 4.96574C11.1654 5.06722 11.2211 5.08337 11.3156 5.08337C12.9514 5.08106 14.5872 5.08106 16.223 5.08106C16.4435 5.08106 16.6447 5.12488 16.8046 5.28865C17.0179 5.50546 17.0227 5.88372 16.807 6.09592C16.7367 6.16511 16.6592 6.22508 16.5768 6.28274C15.2682 7.18919 13.9571 8.09564 12.6461 8.99978C12.5637 9.05745 12.5467 9.10357 12.5782 9.19814C13.092 10.6927 13.6033 12.1897 14.1122 13.6866C14.2576 14.111 14.0032 14.5008 13.5597 14.54C13.3755 14.5561 13.2204 14.4869 13.0774 14.3854C11.953 13.6081 10.8285 12.8309 9.70409 12.0536C9.49568 11.9083 9.28242 11.7699 9.07886 11.6176C8.99161 11.5531 8.93345 11.56 8.84863 11.62C7.53031 12.5356 6.20957 13.4467 4.89125 14.3601C4.73373 14.4685 4.56894 14.5538 4.3678 14.5354C3.93886 14.4961 3.67713 14.1133 3.81284 13.7142C4.09638 12.8747 4.38476 12.0351 4.67315 11.1956C4.90337 10.5198 5.13359 9.84396 5.36866 9.17046C5.40258 9.0759 5.34927 9.03899 5.28384 8.99286C4.16908 8.2225 3.05433 7.45213 1.94199 6.68176C1.71904 6.52723 1.49609 6.375 1.27556 6.22047C1.06957 6.08208 0.943558 5.89756 0.970216 5.64615C1.00657 5.30018 1.27314 5.08567 1.67057 5.08337C2.49695 5.08106 3.3209 5.08337 4.14485 5.08337Z"
            fill="#B9CBE5"
          />
        </svg>
      </div>
    </div>

    <div class="day-events">
      <template v-if="events.length > 6">
        <calendar-event-icon
          @click="openModalEvents([event], 'event')"
          v-for="(event, index) in events.slice(0, 5)"
          :key="index"
          :event="event"
        />
        <calendar-event-icon class="event-type--over" />
      </template>
      <template v-else>
        <calendar-event-icon
          @click="openModalEvents([event], 'event')"
          v-for="(event, index) in events"
          :key="index"
          :event="event"
        />
      </template>

      <modal-calendar-events
        :visible="showModal"
        :date="day.format('D MMMM')"
        :weekday="day.format('dddd')"
        @close="showModal = false"
        v-if="openEvents"
        :events="openEvents"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import CalendarEventIcon from './CalendarEventIcon.vue'
import ModalCalendarEvents from '@/components/modals/ModalCalendarEvents.vue'

export default {
  props: {
    day: {
      type: [Object, Array, Number],
    },
    series: {
      type: Array,
    },
    events: {
      type: Array,
    },
    selectedMonth: {
      type: String,
    },
  },
  name: 'CalendarDay',
  components: {
    CalendarEventIcon,
    ModalCalendarEvents,
  },
  data: () => ({
    todayDay: moment().format('D'),
    todayMonth: moment().format('M'),
    isHover: false,
    showModal: false,
    openEvents: null,
  }),
  computed: {
    sortEvents: function () {
      return this.events.slice().sort((a, b) => {
        if (moment(a.start_time).isBefore(b.start_time)) {
          return -1
        } else {
          return 1
        }
      })
    },
    isToday: function () {
      return moment().format('DD-MM-YYYY') == this.day.format('DD-MM-YYYY') && this.day.format('D') !== 1
    },
    isWeekend: function () {
      return this.day.day() == 0 || this.day.day() == 6
    },
    isMatch: function () {
      return this.day.format('DD-MM-YYYY') == '18-12-2021' || this.day.format('DD-MM-YYYY') == '25-12-2021'
    },
    classObject: function () {
      return {
        'day-header__number': true,
        'day-header__number--weekend': this.isWeekend,
      }
    },
    isCurrentMonth: function () {
      return moment(this.day).format('MMMM') === this.selectedMonth
    },
    classObjectDay: function () {
      return {
        day: true,
        hide: !this.isCurrentMonth,
        dark: this.isHover,
        'day-today': this.isToday,
        'day-match': this.isMatch,
      }
    },
  },
  methods: {
    openModalEvents(events, type) {
      if (events.length) {
        this.openEvents = events
        this.showModal = true
      }
    },
    locationEvent(event) {
      this.$router.push({ name: 'Event', params: { id: event.id, sportsman: event.attenders.id } })
    },
    getTimeFormat(time) {
      return moment(time).format('HH:mm')
    },
    backlightDay: function () {
      if (this.series.includes(this.day.format('DD MM YYYY'))) {
        this.isHover = true
      }
    },
    notBacklightDay: function () {
      this.isHover = false
    },
  },
  mounted() {
    if (this.events.length > 0) {
      let test = this.events.sort((a, b) => {
        if (moment(a.start_time).isBefore(b.start_time)) {
          return -1
        } else {
          return 1
        }
      })
    }
  },
}
</script>

<style scoped lang="scss">
.events {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: -17px;
  padding-right: 5px;
  &-wrap {
    height: 100%;
    overflow: hidden;
  }
}
events::-webkit-scrollbar {
  width: 5px;
}
.day {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: calc((100% - (6 * 10px)) / 7);
  height: 120px;

  margin-bottom: 12px;
  padding: 11px;

  background-color: #ffffff;
  box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15);
  border-radius: 12px;
  transition: all 0.4s;

  border: 2px solid transparent;
  cursor: pointer;
  &.hide {
    visibility: hidden;
  }

  &.day-today {
    border: 2px solid #95b0da;
  }
  &.day-match {
    border: 2px solid #f8a3b3;
  }
}

.day-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.day-header__info {
  font-size: 0px;
}

.day-header__number {
  font-weight: 500;
  font-size: 19px;
  line-height: 20px;
  color: #b9cbe5;
  &--weekend {
    color: $terrible;
  }
}

.day-events {
  display: flex;
  flex-wrap: wrap;

  flex-direction: row-reverse;
  justify-content: flex-end;

  width: 100%;
}

/* .day-events__event {
  width: calc((100% - (5px * 2)) / 3);
  height: 30px;
  background-color: rgba($terrible, 0.2);
  margin-left: 5px;
  border-radius: 6px;
  &:nth-child(3n) {
    margin-left: 0px;
  }
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    margin-top: 5px;
  }
} */

/*
.event {
  display: flex;
  align-items: center;
  margin-bottom: rem(15px);
  cursor: pointer;
}
.event-name {
  max-width: 80%;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: rem(12px);
  overflow: hidden;
}

.event-time {
  width: 20%;
  font-size: rem(12px);
  color: rgba(0, 0, 0, 0.4);
  margin-left: auto;
} */

.event-training {
  /* <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.066 2.709a.574.574 0 0 1-.178.294c-.094.095-.19.19-.287.282a.5.5 0 0 1-.313.125.242.242 0 0 1-.195-.066c-.159-.15-.321-.298-.476-.453-.538-.538-1.074-1.08-1.611-1.62-.045-.046-.084-.096-.128-.142a.241.241 0 0 1-.066-.2.439.439 0 0 1 .112-.29c.117-.123.233-.247.355-.364a.386.386 0 0 1 .526-.031c.402.388.802.776 1.2 1.17.292.289.578.586.867.878.083.084.167.168.194.29v.127ZM.667 9.558c.052-.076.098-.16.158-.228.11-.124.23-.24.34-.354l.943.941c-.097.095-.198.197-.302.297l-.098.09a.33.33 0 0 1-.374.063.822.822 0 0 1-.21-.13 3.695 3.695 0 0 1-.266-.25.68.68 0 0 1-.191-.324v-.105ZM11.067.884a.596.596 0 0 1-.159.233l-.326.327L9.647.51c.006-.008.016-.02.027-.03.138-.132.273-.27.415-.394.12-.105.249-.114.381-.027.216.141.394.323.535.538.029.044.041.1.062.15v.137ZM2.232 5.164a.475.475 0 0 1 .345.128c.27.264.548.522.815.79.82.823 1.636 1.649 2.454 2.474l.11.115c.132.143.15.422.016.564-.222.238-.455.465-.688.692-.076.074-.176.074-.274.05a.493.493 0 0 1-.229-.118c-.235-.224-.474-.446-.704-.676-.856-.856-1.708-1.717-2.56-2.576a4.074 4.074 0 0 1-.204-.224c-.112-.13-.119-.364 0-.487.212-.22.432-.432.65-.646.075-.073.169-.086.27-.086ZM9.666 5.391a.485.485 0 0 1-.37-.14c-.672-.669-1.35-1.33-2.022-1.998-.43-.427-.85-.865-1.277-1.295-.131-.132-.195-.285-.16-.47a.395.395 0 0 1 .072-.171c.203-.245.428-.47.669-.68.118-.101.351-.095.472.016.22.203.438.406.65.616.87.868 1.739 1.737 2.606 2.606.08.08.156.165.23.25.087.106.14.226.117.366a.254.254 0 0 1-.054.123 6.583 6.583 0 0 1-.705.703.304.304 0 0 1-.228.074ZM6.822 3.347l.92.92-2.804 2.8-.92-.919 2.804-2.801ZM4.077 9.57c-.009.15-.038.266-.126.357-.123.126-.246.253-.379.37a.375.375 0 0 1-.534-.02c-.55-.541-1.098-1.085-1.644-1.63a17.037 17.037 0 0 1-.488-.51c-.102-.11-.118-.24-.062-.378a.336.336 0 0 1 .04-.074c.131-.182.285-.341.47-.468.095-.065.201-.09.314-.065.044.01.093.028.125.06.415.401.83.803 1.24 1.21.303.3.598.608.895.912.034.035.065.074.097.112.037.043.056.092.052.124Z" fill="#fff"/></svg> */
}
</style>
