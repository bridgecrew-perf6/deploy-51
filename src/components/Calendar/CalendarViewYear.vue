<template>
  <div class="calendar-wrap">
    <div class="calendar calendar-year">
      <vc-calendar
        :attributes="sortEvents"
        transition="slide-v"
        :rows="3"
        :columns="4"
        is-expanded
        is-range
        title-position="left"
        :masks="masksCalendar"
        :from-date="fromDate"
        ref="calendar"
      >
        <template slot="header-title" slot-scope="props"> {{ props.monthLabel }}, {{ props.shortYearLabel }} </template>
      </vc-calendar>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
  name: 'CalendarViewYear',
  components: {},
  props: {
    initDay: {
      type: Date,
    },
    events: {
      type: [Array, Object],
    },
  },
  data: function () {
    return {
      masksCalendar: {
        weekdays: 'WW',
      },
    }
  },
  computed: {
    ...mapGetters('events', ['getEventsTypeCategory']),
    fromDate: function () {
      return moment(this.initDay).startOf('year').toDate()
    },
    sortEvents() {
      let attributes = []

      /* this.events.forEach(event => {
        let eventType = this.getEventsTypeCategory.find(cat => cat.eventTypes.some(subcat => subcat.id === event.eventType.id));

        let attr = {
          highlight: {
            style: {
              background: eventType ? eventType.color : 'purple'
            },
            fillMode: 'solid',
          },
          dates: moment(event.date, 'YYYY-MM-DD').toDate(),
        }

        attributes.push(attr)
      }); */

      return attributes
    },
    eventType: function () {
      return this.getEventsTypeCategory.find(cat =>
        cat.eventTypes.some(subcat => subcat.id === this.event.eventType.id)
      )
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.calendar-year {
  margin-bottom: 20px;
  .vc-container {
    &::v-deep {
      padding: 21px 21px 6px;
      box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
      border-radius: 28px;
      .vc-arrows-container,
      .vc-popover-content-wrapper {
        display: none;
      }
      .vc-pane-layout {
        gap: 20px;
      }
      .vc-header {
        padding: 0px;
        padding-left: 10px;
      }
      .vc-title {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: $blue02;
        text-transform: capitalize;
      }
      .vc-pane {
        min-width: auto;
        max-width: 315px;
        margin-bottom: 15px;
      }
      .vc-weeks {
        min-width: auto;
        padding: 0px;
      }
      .vc-weekday {
        max-width: 40px;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;

        color: $blue01;
        &:nth-child(6),
        &:nth-child(7) {
          color: $terrible;
        }
      }
      .vc-day {
        max-width: 40px;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;

        color: $blue01;
        &.weekday-position-6,
        &.weekday-position-7 {
          color: $terrible;
        }
        &.is-not-in-month {
          .vc-day-layer {
            display: none;
          }
          span {
            opacity: 1;
            color: $blue06 !important;
          }
        }
      }
    }
  }
}
</style>
