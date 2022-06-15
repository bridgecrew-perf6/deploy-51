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
  utils: [],
  trainingPlaceTypes: [],
  eventTypes: [
    { id: 'match', label: 'Матч', color: '#EE1A40'},
    { id: 'training', label: 'Тренировка', color: '#2ABAF3'},
    { id: 'standard', label: 'Норматив', color: '#FF4E78'},
    //{ id: 'team_event', label: '', color: ''},
    //{ id: 'sports_school_event', label: '', color: ''},
    //{ id: 'personal_event', label: '', color: ''},
  ],
  lessonTypes: [
    { id: 'practical_lesson', name: 'Практическое занятие'},
    { id: 'restorative_lesson', name: 'Восстановительное занятие'},
    { id: 'theoretical_lesson', name: 'Теоритическое занятие'},
    
  ],
  matchTypes: [
    { id: 'anteriority', name: 'Первенство'},
    { id: 'championship', name: 'Чемпионат'},
    { id: 'olympics', name: 'Спартакиада'},
    { id: 'tournament', name: 'Турнир'},
    { id: 'mass_competitions', name: 'Массовые состязания'},
    { id: 'away_match', name: 'Выездной матч'},
    { id: 'home_match', name: 'Домашний матч'},
    { id: 'friendly_match', name: 'Товарищеский матч'},
  ],
  intensityList: [
    { id: 1, name: "Малая", load: 1, image: require('@/assets/images/svg/workload/low.svg') },
    { id: 2, name: "Средняя", load: 2, image: require('@/assets/images/svg/workload/medium.svg') },
    { id: 3, name: "Большая", load: 3, image: require('@/assets/images/svg/workload/hight.svg') },
    { id: 4, name: "Субмаксимальная", load: 4, image: require('@/assets/images/svg/workload/submaximum.svg') },
    { id: 5, name: "Максимальная", load: 5, image: require('@/assets/images/svg/workload/maximum.svg') },
  ],
  trainingStage: [
    { id: 'preparation', name: 'Подготовительная', romanNum: 'I' },
    { id: 'main', name: 'Основная', romanNum: 'II' },
    { id: 'testing', name: 'Тестирование', romanNum: 'II' }, 
    { id: 'final', name: 'Заключительная', romanNum: 'III' },
  ],
  trainingType: [
    { id: 'physical', name: 'Физическая' },
    { id: 'technical', name: 'Техническая' },
    { id: 'game', name: 'Игровая' },
    { id: 'tactical', name: 'Тактическая' },
    { id: 'theoretic', name: 'Теоретическая' },
    { id: 'psychological', name: 'Психологическая' },
  ],
  trainingObjectType: [
    { id: 'group', name: 'Групповая' },
    { id: 'individual', name: 'Индивидуальная' },
  ],
  trainingObjective: [
    { id: 'learning', name: 'Обучение' },
    { id: 'development', name: 'Развитие' },
    { id: 'strengthening', name: 'Закрепление' },
    { id: 'improvement', name: 'Совершенствование' },
  ],
  standardTaskType: [
    { id: 'primary_assessment', name: "Первичное оценивание"},
    { id: 'development_control', name: "Контроль развития" },
  ]
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
  SET_TRAINING_PLACE_TYPES(state, payload) {
    state.trainingPlaceTypes = payload
  }
}
/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
  events(state) {
    return state.eventList
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
  getEventsTypeCategory(state) {
    return state.utils.eventTypes.filter(type => type.eventType === null)
  },
  getEventTypes(state) {
    return state.eventTypes;
  },
  getLessonTypes(state) {
    return state.lessonTypes;
  },
  getMatchTypes(state) {
    return state.matchTypes;
  },
  getIntensityList(state) {
    return state.intensityList;
  },
  getTrainingStage(state) {
    return state.trainingStage;
  },
  getTrainingType(state) { 
    return state.trainingType
  },
  getTrainingObjectType(state) {
    return state.trainingObjectType
  },
  getTrainingObjective(state) {
    return state.trainingObjective
  },
  getTrainingPlaceTypes(state) {
    return state.trainingPlaceTypes
  },
  getStandardTaskType(state) {
    return state.standardTaskType
  }
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

  loadTrainingPlaceTypes({ commit }) {
    events.getTrainingPlaceTypes()
      .then(response => {
        commit('SET_TRAINING_PLACE_TYPES', response)
      })
      .catch(err => {
        throw err
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
