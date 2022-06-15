<template>
  <v-dialog v-model="show" content-class="modal-show-events" max-width="395">
    <div class="modal-close" @click.stop="show = false"></div>
    <v-card class="modal-events" :class="{ 'modal-events--dark-footer': compareDate }">
      <div class="modal-events__inner" :class="{ 'modal-events__inner--dark-footer': compareDate }">
        <div class="modal-events__body">
          <p class="modal-events__title">
            {{ date }}
            <span>{{ weekday }}</span>
          </p>
          <ul class="modal-event__list">
            <li class="modal-event__item" v-for="(event, index) in events" :key="index">
              <router-link
                class="modal-event__link"
                :to="{
                  name: event.eventType.slug === 'practical-lesson' ? 'Training' : 'MatchEvent',
                  params: { id: 1 },
                }"
              >
                <p class="modal-event__info-time">
                  {{ replaceSeconds(event.timeFrom) }} - {{ replaceSeconds(event.timeTo) }}
                </p>
                <div class="modal-event__info-about">
                  <calendar-event-icon :event="event" />
                  <span class="modal-event__group-name">{{ event.group.name }}</span>
                  <span class="modal-event__title">{{ event.title }}</span>
                </div>
                <div class="modal-event__info-more">
                  <p>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.483 12.417V2.006C1.483.566 2.05 0 3.491 0h6.949c1.441 0 2.003.56 2.005 2.014.004 3.224.002 6.45.002 9.673v.758c.279 0 .531-.014.781.003.405.028.688.224.734.652.047.446-.165.74-.598.84-.213.05-.44.053-.66.053-3.867.002-7.734.002-11.6 0-.2 0-.462.035-.583-.072-.23-.203-.535-.507-.52-.752.014-.247.34-.543.602-.686.22-.12.54-.05.88-.067Zm8.588-4.657c.401.013.806-.346.78-.737-.03-.444-.244-.766-.74-.765-.471.001-.761.262-.775.727-.015.469.27.725.735.775Z"
                        fill="#464EA3"
                      />
                    </svg>
                    Лёд-1
                  </p>
                  <p>
                    Интенсивность
                    <img src="@/assets/images/svg/workload/maximum.svg" />
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="modal-event__footer" :class="{ 'modal-event__footer--dark': compareDate }">
        <template>
          <a class="modal-event__footer-edit" href="">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 11.923c.009-.02.02-.041.026-.063l1.02-3.567a.246.246 0 0 1 .059-.1C3.055 6.236 5.006 4.28 6.96 2.325c.142-.143.325-.191.515-.21.43-.04.82.095 1.18.325.513.326.907.767 1.133 1.354.129.333.16.674.033 1.018a.86.86 0 0 1-.203.322c-1.94 1.93-3.88 3.863-5.822 5.794a.251.251 0 0 1-.1.055l-3.58.991c-.023.007-.045.017-.067.026H0v-.077Zm1.823-1.096c.01-.003.022-.004.035-.008.447-.137.895-.274 1.342-.414a.145.145 0 0 0 .067-.05c.134-.167.157-.362.118-.567-.108-.563-.627-1.08-1.172-1.17-.196-.033-.383-.016-.546.116a.239.239 0 0 0-.073.105c-.104.327-.205.657-.307.985l-.108.351c.333.094.507.348.644.652Z"
              />
              <path
                d="M12 2.012c-.021.12-.035.243-.066.363-.095.371-.279.69-.542.956-.284.289-.57.575-.856.862l-.026.022c.028-.093.063-.18.081-.27.072-.345.006-.669-.142-.98a2.595 2.595 0 0 0-.454-.647c-.243-.259-.499-.499-.812-.66-.444-.23-.902-.299-1.382-.139-.005.002-.01.002-.024.002l.411-.413c.17-.17.336-.344.509-.51.363-.35.79-.548 1.285-.588.016-.001.032-.006.048-.01h.208l.047.012c.122.023.247.032.365.069.638.205 1.082.624 1.284 1.301.035.113.046.232.067.349v.28Z"
              />
            </svg>
            редактировать
          </a>
          <a class="modal-event__footer-delete" href="">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.667 2.966h4.018c.578 0 .695.134.62.695l-.954 7.174c-.093.704-.553 1.147-1.256 1.156-1.616.008-3.24.016-4.856 0-.711-.009-1.163-.436-1.255-1.147C.657 8.416.339 5.997.012 3.577c-.058-.444.084-.61.553-.61h4.102ZM8.133 1.76H.967C1.812 1.132 2.557.555 3.336.036c.126-.084.435-.009.603.1.376.226.711.528 1.088.779.117.075.343.125.444.067.778-.477 1.448-.318 2.06.31.141.15.342.267.602.468Z"
              />
            </svg>
            удалить
          </a>
        </template>
      </div> -->
    </v-card>
  </v-dialog>
</template>

<script>
import moment from 'moment'
import CalendarEventIcon from '@/components/Calendar/CalendarEventIcon.vue'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    events: {
      type: Array,
    },
    date: {
      type: String,
    },
    weekday: {
      type: String,
    },
  },
  data() {
    return {}
  },
  components: {
    CalendarEventIcon,
  },
  methods: {
    replaceSeconds(time) {
      return time.replace(/(:\d{2})$/, '')
    },
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      },
    },
    compareDate: function () {
      return moment().isBefore(moment(this.events[0].start_time).toDate(), 'hour')
    },
  },
}
</script>

<style lang="sass" scoped>
.card-date-time
    padding: 22px

.modal-close
    background-image: url("data:image/svg+xml,%3Csvg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.761 5.961 2.888 4.154C2.046 3.34 1.2 2.53.358 1.716A.972.972 0 0 1 .314.341C.693-.072 1.35-.123 1.762.26c.545.502 1.072 1.022 1.605 1.536.927.892 1.851 1.788 2.778 2.68.026.026.054.048.092.083l.697-.66 3.7-3.52c.415-.393.87-.478 1.317-.245.587.309.726 1.075.253 1.545-.571.568-1.16 1.11-1.744 1.665-.896.852-1.788 1.703-2.684 2.552-.022.022-.044.044-.013.022.3.328.584.672.902.98 1.164 1.14 2.347 2.262 3.51 3.397a.973.973 0 0 1-.369 1.634c-.413.142-.791.063-1.106-.243-1.404-1.35-2.807-2.706-4.21-4.059l-.269-.258L4.985 8.54c-1.063 1.009-2.123 2.021-3.189 3.027-.57.54-1.447.373-1.725-.321-.151-.376-.06-.78.256-1.079.75-.706 1.504-1.416 2.252-2.132C3.3 7.35 4.023 6.661 4.76 5.961Z' fill='%23B9CBE5'/%3E%3C/svg%3E");
    background-size: auto
    z-index: 100

.modal-events
    position: relative

.modal-events--dark-footer
    padding-bottom: 40px

.modal-events__inner
    padding: 15px 20px 5px


.modal-events__inner--dark-footer
    position: relative
    border-bottom-left-radius: 28px
    border-bottom-right-radius: 28px
    z-index: 3
    background-color: #fff

.modal-events__body


.modal-events__title
    margin-bottom: 15px
    font-weight: 500
    font-size: 16px
    line-height: 22px
    color: $blue02
    span
        font-size: 12px
        line-height: 16px
        color: $blue04

.modal-event__list
    margin-bottom: 15px

.modal-event__item
    margin-bottom: 12px
    &:last-child
        margin-bottom: 0px

.modal-event__link
  display: flex
  flex-wrap: wrap
  align-items: center

.modal-event__info-time
    max-width: 100px
    width: 100%
    margin-right: 7px
    font-weight: 500
    font-size: 16px
    line-height: 40px
    text-align: right
    color: $blue02

.modal-event__info-about
    display: inline-flex
    align-items: center

    font-size: 14px
    color: $blue02

.modal-event__group-name
    display: inline-block
    margin: 0 12px
    font-weight: 500
    line-height: 19px

.modal-event__title
    line-height: 16px

.modal-event__info-more
  display: flex
  justify-content: space-between
  width: 100%
  margin-top: 8px
  font-size: 14px
  line-height: 16px
  color: $blue02
  img
    vertical-align: middle

.modal-event__footer
    border-top: 1px solid #DCE5F2
    display: flex
    justify-content: space-between
    padding: 10px 27px 15px

.modal-event__footer--dark
    position: absolute
    bottom: 0px
    left: 0px
    right: 0px
    border: none
    padding-top: 40px
    padding-bottom: 10px
    padding-left: 30px
    padding-right: 30px
    background-color: $blue02
    z-index: 0
    .modal-event__footer-edit,
    .modal-event__footer-delete
        color: #DCE5F2
        &:hover
            color: #fff



.modal-event__footer-edit,
.modal-event__footer-delete
    color: $blue05
    &:hover
        color: $blue03

.modal-event__footer-edit

.modal-event__footer-delete
</style>
