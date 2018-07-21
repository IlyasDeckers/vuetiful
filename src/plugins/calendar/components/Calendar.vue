<template>
  <div class="calendar table-wrapper">
    <div class="calendar-header text-center " layout="row center-justify">
        <button class="btn btn-default mr-32" @click="previous">Previous</button>
        {{ calendar.startDate | date("MMMM YYYY") }}
        <button class="ml-32 btn btn-default text-right" @click="next">Next</button>
    </div>
    <table>
      <thead>
        <tr>
          <td class="pt-4 pr-4" v-for="weekday in calendar.weekdays" :key="weekday">{{ weekday }}</td>
        </tr>
      </thead>
      <tbody>
        <tr class="calendar-week" v-for="(week, index) in calendar.weeks" :key="index">
          <template v-if="index == 0">
            <td class="calendar-day bg-grey border p-4" v-for="spacer in calendar.paddingStart" :key="spacer">{{ spacer }}</td>
          </template>
          <td class="calendar-day text-grey w-32 h-32 p-4 bg-grey-lighter border" v-for="day in week" :key="day">
            <div>{{ day.getDate() }}</div>
          </td>
          <template v-if="(index + 1) == calendar.weeks.length">
            <td class="calendar-day bg-grey border p-4" v-for="spacer in calendar.paddingEnd" :key="spacer">{{ spacer }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */

import CalendarMonth from '@/plugins/calendar/calendar'
import format from 'date-fns/format'

export default {
  data () {
    return {
      calendar: new CalendarMonth()
    }
  },
  methods: {
    previous () {
      this.calendar.previousMonth()
    },
    next () {
      this.calendar.nextMonth()
    }
  },
  filters: {
    date (value, pattern) {
      return format(value, pattern)
    }
  }
}
</script>
