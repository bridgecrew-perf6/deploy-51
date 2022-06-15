<template>
  <v-dialog v-model="show" content-class="modal-show-events" max-width="395">
    <div class="modal-close" @click.stop="show = false"></div>
    <v-card class="modal-events">
      <div class="modal-events__inner">
        <div class="modal-events__body">
          <p class="modal-events__title">
            {{ date }}
            <span>{{ weekday }}</span>
          </p>
          <ul class="modal-event__list">
            <li class="modal-event__item" v-for="(event, index) in prepareData" :key="index">
              <router-link
                class="modal-event__link"
                :to="{
                  name: nameRoute(event),
                  params: { id: event.id },
                }"
              >
                <div class="modal-event__head">
                  <p class="modal-event__info-time">{{ time(event.recurrences, event.duration) }}</p>
                  <div class="modal-event__info-about">
                    <calendar-event-icon
                      :idEventType="event.eventType"
                      :shortName="event.group ? event.group.shortName : ''"
                    />
                    <span class="modal-event__group-name">{{ event.group ? event.group.shortName : '' }}</span>
                    <span class="modal-event__title">{{ event.title }}</span>
                  </div>
                </div>
                <div v-if="event.eventType === 'training'" class="modal-event__info-more">
                  <p>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.483 12.417V2.006C1.483.566 2.05 0 3.491 0h6.949c1.441 0 2.003.56 2.005 2.014.004 3.224.002 6.45.002 9.673v.758c.279 0 .531-.014.781.003.405.028.688.224.734.652.047.446-.165.74-.598.84-.213.05-.44.053-.66.053-3.867.002-7.734.002-11.6 0-.2 0-.462.035-.583-.072-.23-.203-.535-.507-.52-.752.014-.247.34-.543.602-.686.22-.12.54-.05.88-.067Zm8.588-4.657c.401.013.806-.346.78-.737-.03-.444-.244-.766-.74-.765-.471.001-.761.262-.775.727-.015.469.27.725.735.775Z"
                        fill="#464EA3"
                      />
                    </svg>
                    Лёд
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
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
  components: {
    CalendarEventIcon,
  },
  methods: {
    time(date, duration) {
      let utc = this.$moment(date.match(/(\d{8}T\d{6}Z)/g)[0]),
        startTime = utc.format('HH:mm'),
        endTime = utc.add(duration, 'minutes').format('HH:mm')

      return `${startTime} - ${endTime}`
    },
    nameRoute(event) {
      if (event.eventType === 'match') return 'MatchEvent'
      else if (event.eventType === 'training') return 'TrainingView'
      else if (event.eventType === 'standard') return 'StandardView'
      else return ''
    },
  },
  computed: {
    ...mapGetters('events', ['getLessonTypes', 'getMatchTypes']),
    lessonTypes() {
      return this.getLessonTypes
    },
    matchTypes() {
      return this.getMatchTypes
    },
    prepareData() {
      let events = []
      this.events.forEach(event => {
        let e = { ...event }
        if (event.eventType === 'training') e.title = this.lessonTypes.find(type => type.id === event.title).name
        else if (event.eventType === 'match') e.title = this.matchTypes.find(type => type.id === event.title).name
        else if (event.eventType === 'standard') e.title = 'Норматив'
        else if (event.eventType === 'personal_event') e.title = 'Персональное событие'
        events.push(e)
      })
      return events
    },
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

.modal-event__head
  display: flex

.modal-event__info-time
    flex-shrink: 0
    max-width: 110px
    width: 100%
    margin-right: 7px
    font-weight: 500
    font-size: 16px
    line-height: 40px
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
