import {SET_ACCESS, SET_REFRESH, RESET, REMOVE_ACCESS, SET_PROFILE, SET_ROLE} from '../mutation-types'
import {AuthApi, ProfileResource, HistoryResource} from '@/store/api'

import { TIME_ACCESS} from '@/config/api'
import auth from '@/api/auth'
import router from '@/router'
import coach from '@/api/coach'

import notify from "@/components/notification/instance";

/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
    access: localStorage.getItem('access') || '',
    profile: null,
    role: localStorage.getItem('role') || '',
    refresh: localStorage.getItem('refresh') || '',
    sportTypes: [
        { id: 'FB', title: 'Футбол' },
        { id: 'HC', title: 'Хоккей' },
        { id: 'BB', title: 'Баскетбол' },
        { id: 'VB', title: 'Волейбол' },
        { id: 'TN', title: 'Теннис' },
    ],
    coachCategories: [
        { id: '1Q', title: 'Тренер первой квалификационной категории' },
        { id: '2Q', title: 'Тренер второй квалификационной категории' },
        { id: 'HQ', title: 'Тренер высшей квалификационной категории' },
        { id: 'HC', title: 'Заслуженный тренер России' },
    ],
    sportRanks: [
        { id: 'third_junior', title: 'III юношеский разряд' },
        { id: 'second_junior', title: 'II юношеский разряд' },
        { id: 'first_junior', title: 'I юношеский разряд' },
        { id: 'third_adult', title: 'III разряд' },
        { id: 'second_adult', title: 'II разряд' },
        { id: 'first_adult', title: 'I разряд' },
        { id: 'candidate_to_mos', title: 'Кандидат в Мастера спорта' },
        { id: 'mos', title: 'Мастер спорта' },
        { id: 'international_mos', title: 'Мастер спорта международного класса' },
        { id: 'honored_mos', title: 'Заслуженный Мастер спорта' },
    ],
    awardTypes: [
        { id: 'RW', title: 'Награда' },
        { id: 'DP', title: 'Диплом' },
        { id: 'GR', title: 'Благодарность' },
        { id: 'DL', title: 'Грамота' },
    ],
    educationTypes: [
        { id: 'SVE', title: 'Средне-профессиональное образование' },
        { id: 'HEB', title: 'Высшее образование (бакалавриат)' },
        { id: 'HES', title: 'Высшее образование (специалитет)' },
        { id: 'HEM', title: 'Высшее образование (магистратура)' },
        { id: 'HSC', title: 'Профессиональное образование - Высшая школа тренеров' },
        { id: 'PRD', title: 'Повышение квалификации' },
        { id: 'PRT', title: 'Профессиональная переподготовка' },
    ],
    educationFormats: [
        { id: 'FT', title: 'Очная форма' },
        { id: 'EM', title: 'Заочная форма' },
        { id: 'PF', title: 'Очно-заочная форма' },
        { id: 'DF', title: 'Дистанционная форма' },
    ],
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
    [SET_ACCESS](state, payload) {
        state.access = payload
    },
    [SET_REFRESH](state, payload) {
        state.refresh = payload
    },
    [SET_ROLE](state, payload) {
        state.role = payload
    },
    [SET_PROFILE](state, payload) {
        state.profile = payload
    },
    [REMOVE_ACCESS](state) {
        state.access = ''
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
    profile: state => state.profile,
    profileUserId: state => state.profile.id,
    fullName: state => state.profile ? `${state.profile.user.firstName} ${state.profile.user.patronymic}` : '',
    getSportTypes(state) {
        return state.sportTypes;
    },
    getCoachCategories(state) {
        return state.coachCategories;
    },
    getSportRanks(state) {
        return state.sportRanks;
    },
    getAwardTypes(state) {
        return state.awardTypes;
    },
    getEducationTypes(state) {
        return state.educationTypes;
    },
    getEducationFormats(state) {
        return state.educationFormats;
    },
}

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
const actions = {
    login({commit}, payload) {
        auth.login(payload)
        .then(response => {
            let tokenInfo = JSON.parse(atob(response.access.split('.')[1]))

            if(tokenInfo.user_role !== 'Coach') {
                notify({
                    title: 'Ошибка авторизации',
                    text: 'Этот аккаунт не является тренером',
                    bg: '#FF4B6B',
                    autoClose: 4000
                  })
                return
            }
          
            this.dispatch('auth/loadProfile', tokenInfo.user_role_id)

            localStorage.setItem('access', response.access)
            localStorage.setItem('refresh', response.refresh)
            localStorage.setItem('role', tokenInfo.user_role)
            localStorage.setItem('trainerID', tokenInfo.user_role_id)
            localStorage.setItem('userID', tokenInfo.user_id)
            document.cookie = 'access=' + response.access + '; max-age=' + process.env.VUE_APP_TIME

            router.push({ name: 'Dashboard' })
        })
    },
    logout({commit}) {
        commit(RESET)
        document.cookie = 'access=' + localStorage.getItem('access') + '; max-age=-1'
        localStorage.clear()
    },
    async refreshToken({commit, state}) {
        const [err, data] = await AuthApi.refresh(state.refresh)

        if (err) throw err

        commit(SET_ACCESS, data.access)
        commit(SET_REFRESH, data.refresh)
        localStorage.setItem('access', data.access)
        localStorage.setItem('refresh', data.refresh)

        document.cookie = 'access=' + data.access + '; max-age=' + TIME_ACCESS

        return data
    },

    loadProfile({commit}, coachID) {
        coach.getCoach(coachID).then((response) => {
            commit(SET_PROFILE, response)
        })
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
