import { RESET, SET_EVENT, ADD_EX, SET_EVENT_LIST, SET_UTILS, SET_EXERCISE_LIST, SET_FIRST_EXERCISE_LIST, SET_SECOND_EXERCISE_LIST, SET_THIRD_EXERCISE_LIST } from '../mutation-types'

import events from '@/api/events'
import exercises from '@/api/exercises'

import { EventResource, ExerciseResource } from '../api.js'
import moment from 'moment-timezone'
/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
  event: {},
  eventList: [],
  exersiceList: [],
  exersiceFirstList: [],
  exersiceSecondList: [],
  exersiceThirdList: [],
  utils: [],
})

/*
|--------------------------------------------------------------------------
| State
|--------------------------------------------------------------------------
*/
const state = initialState
/*
|--------------------------------------------------------------------------
| Mutations
|--------------------------------------------------------------------------
*/
const mutations = {
  [SET_EVENT](state, payload) {
    state.event = payload
  },
  [ADD_EX](state, payload) {
    state.exersiceList.push(payload)
  },
  [SET_EVENT_LIST](state, payload) {
    state.eventList = payload
  },
  [SET_UTILS](state, payload) {
    state.utils = payload
  },
  [SET_EXERCISE_LIST](state, payload) {
    state.exersiceList = payload
  },
  [SET_FIRST_EXERCISE_LIST](state, payload) {
    state.exersiceFirstList = payload
  },
  [SET_SECOND_EXERCISE_LIST](state, payload) {
    state.exersiceSecondList = payload
  },
  [SET_THIRD_EXERCISE_LIST](state, payload) {
    state.exersiceThirdList = payload
  },
  [RESET](state) {
    const newState = initialState()
    Object.keys(newState).forEach(key => {
      state[key] = newState[key]
    })
  },
}
/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
  events(state) {
    let events = []
    state.eventList.map(item => {
      let diffMin = moment(item.date + ' ' + item.timeTo).diff(moment(item.date + ' ' + item.timeFrom), 'minutes')
      item.diffMin = diffMin
      item.start_time = item.date + ' ' + item.timeFrom
      item.duration = parseFloat((diffMin / 60).toFixed(1))

      /* let dataEvent = {
        id: item.id,
        start_time: item.date + " " + item.timeFrom,
        duration: parseFloat((diffMin / 60).toFixed(1)),
        name: item.title,
        type_of_preparation: item.typeOfPreparation,
        rating: "5 / 10",
        attenders: item.attenders[0],
        diffmin: diffMin,
      }; */
      events.push(item)
    })
    return events
  },
  groupSchedule: (state, getters) => date => {
    let groupSchedule = []
    for (let i = 1; i <= 7; i++) {
      groupSchedule[i] = []
    }

    getters.events.map(item => {
      if (
        moment(item.start_time).isBetween(date.startOf('week').toDate(), date.endOf('week').toDate(), undefined, '[]')
      ) {
        let day = moment(item.start_time).isoWeekday()
        groupSchedule[day].push(item)
      }
    })

    return groupSchedule
  },
  getUtils(state) {
    return state.utils;
  },
  getExercises(state) {
    return state.exersiceList;
  },
  getFirstExercises(state) {
    return state.exersiceFirstList;
  },
  getSecondExercises(state) {
    return state.exersiceSecondList;
  },
  getThirdExercises(state) {
    return state.exersiceThirdList;
  },
  getEventsTypeCategory(state) {
    return state.utils.eventTypes.filter(type => type.eventType === null)
  },
}

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
const actions = {
  async createEvent({ commit }, data) {
    return await EventResource.create(data)
      .then(response => {
        commit(SET_EVENT, response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
        throw err.response
      })
  },

  async loadEvents(store) {
    await store.dispatch('loadUtils').then(() => {
      EventResource.list()
        .then(response => {
          store.commit(SET_EVENT_LIST, response.data)
        })
        .catch(err => {
          console.log(err)
          throw err.response
        })
    })
  },

  async loadEventsSportsman(store) {
    await store.dispatch('loadUtils').then(() => {
      EventResource.sportsman()
        .then(response => {
          store.commit(SET_EVENT_LIST, response.data)
        })
        .catch(err => {
          console.log(err)
          throw err.response
        })
    })
  },

  async loadExercises({ commit }, filter) {
    await exercises.getExercises(filter || {})
      .then(response => {
        commit(SET_EXERCISE_LIST, response)
      })
      .catch(err => {
        throw err.response
      })
  },

  async loadFirstExercises({ commit }, filter) {
    await exercises.getExercises(filter || {})
      .then(response => {
        commit(SET_FIRST_EXERCISE_LIST, response)
      })
      .catch(err => {
        throw err.response
      })
  },

  async loadSecondExercises({ commit }, filter) {
    await exercises.getExercises(filter || {})
      .then(response => {
        commit(SET_SECOND_EXERCISE_LIST, response)
      })
      .catch(err => {
        throw err.response
      })
  },

  async loadThirdExercises({ commit }, filter) {
    await exercises.getExercises(filter || {})
      .then(response => {
        commit(SET_THIRD_EXERCISE_LIST, response)
      })
      .catch(err => {
        throw err.response
      })
  },

  async loadUtils({ commit }) {
    await events.getUtils()
      .then(response => {
        commit(SET_UTILS, response)
      })
      .catch(err => {
        throw err.response
      })
  },

  async updateEvent(store, data) {
    await EventResource.update(data.id, data.data).catch(err => {
      console.log(err)
      throw err.response
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
