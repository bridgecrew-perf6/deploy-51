import {SET_ACCESS, SET_REFRESH, RESET, REMOVE_ACCESS, SET_PROFILE, SET_ROLE} from '../mutation-types'
import {AuthApi, ProfileResource, HistoryResource} from '@/store/api'

import moment from 'moment'
import {TRAINER_ROLE, SPORTSMAN_ROLE, TIME_ACCESS} from '@/config/api'
import {obj2FormData, ImageDataConverter} from '@/utils'
/*
|--------------------------------------------------------------------------
| Начальное состояние - используется для сброса store
|--------------------------------------------------------------------------
*/
const initialState = () => ({
    access: localStorage.getItem('access') || '',
    profile: {},
    role: localStorage.getItem('role') || '',
    refresh: localStorage.getItem('refresh') || '',
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
}

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
const actions = {
    login({commit}, data) {
        commit(SET_ACCESS, data.access)
        commit(SET_REFRESH, data.refresh)
        commit(SET_ROLE, data.role)
        localStorage.setItem('access', data.access)
        localStorage.setItem('refresh', data.refresh)
        localStorage.setItem('role', data.role)
        localStorage.setItem('trainerID', data.trainerID)
        document.cookie = 'access=' + data.access + '; max-age=' + process.env.VUE_APP_TIME
    },

    logout({commit}) {
        commit(RESET)
        document.cookie = 'access=' + localStorage.getItem('access') + '; max-age=-1'
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        localStorage.removeItem('role')
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

    async loadProfile({commit, state}) {
        if (state.role == TRAINER_ROLE) {
            await ProfileResource.getTrainer()
                .then(response => {
                    commit(SET_PROFILE, response.data)
                })
                .catch(err => {
                    throw err.response
                })
        }

        if (state.role == SPORTSMAN_ROLE) {
            await ProfileResource.getSportsman()
                .then(response => {
                    commit(SET_PROFILE, response.data)
                })
                .catch(err => {
                    console.log(err)
                    throw err.response
                })
        }
    },

    async editProfile({commit, dispatch}, {profile, personal, passport, workplaces, educations}) {
        const {
            avatarSource,
            lastName,
            firstName,
            nickname,
            dateBirth,
            email,
            phone,
            isMarried,
            // group,
            // rhesus,
        } = personal

        const {passportSeries, passportNumber, docIssuer, docIssuerName, registration, docDate} = passport

        // default patch (PUT) required fields
        let patchObject = {
            user: {},
            sportsmans: profile.sportsmans.map(x => x.id),
        }

        let formDataObj = new FormData()

        const addToPatch = (field, name, val, type) => {
            const clear = val => {
                if (type === 'string') {
                    return val.trim()
                } else if (type === 'date') {
                    // todo..
                } else if (type === 'bool') {
                    // console.log('boolean', val)
                    return val
                }

                return val
            }

            let curField = profile[name]
            let clearValue = clear(val)

            let targetField = clearValue

            if (field !== 'root') {
                curField = profile[field][name]
            }

            // setter
            // console.log(curField, targetField)
            const hasChanged = curField !== targetField
            // console.log(`${name} has changed`, hasChanged);

            if (hasChanged) {
                if (field !== 'root') {
                    patchObject[field][name] = clearValue
                } else {
                    patchObject[name] = clearValue
                }
            }
        }

        addToPatch('user', 'lastName', lastName, 'string')
        addToPatch('user', 'firstName', firstName, 'string')
        addToPatch('user', 'dateBirth', moment(dateBirth).format('YYYY-MM-DD'), 'date')
        addToPatch('user', 'nickname', nickname, 'string')
        addToPatch('user', 'email', email, 'string')
        addToPatch('user', 'phone', phone, 'string')

        addToPatch('root', 'isMarried', isMarried, 'bool')
        addToPatch('root', 'passportSeries', passportSeries, 'string')
        addToPatch('root', 'passportNumber', passportNumber, 'string')
        addToPatch('root', 'address', registration, 'string')
        addToPatch('root', 'unitCode', docIssuer, 'string')
        addToPatch('root', 'unitName', docIssuerName, 'string')
        addToPatch('root', 'dateIssue', moment(docDate).format('YYYY-MM-DD'), 'date')

        if (avatarSource && avatarSource.dataURL) {
            formDataObj = obj2FormData(patchObject, formDataObj)

            // apend avatar blob
            const avatarBlob = new ImageDataConverter(avatarSource.dataURL).dataURItoBlob()
            formDataObj.append('user[avatar]', avatarBlob)

            // fix for sportsmans
            formDataObj.delete('sportsmans[0]')
            formDataObj.append(
                'sportsmans',
                profile.sportsmans.map(x => x.id)
            )
        } else {
            formDataObj = null
        }

        console.log(formDataObj)

        // batch workplaces & educations
        if (workplaces && workplaces.length)
            await dispatch('batchWorkplaces', {workplaces, profileWorkplaces: profile.workplaces})
        if (educations && educations.length)
            await dispatch('batchEducations', {educations, profileEducations: profile.educations})

        const [err, data] = await ProfileResource.edit(formDataObj || patchObject)

        if (err) throw err

        commit(SET_PROFILE, data)

        return data
    },
    async batchWorkplaces({commit, getters}, {workplaces, profileWorkplaces}) {
        let res = []

        if (!workplaces) return null
        // console.log(profileWorkplaces, workplaces)

        const removedWorkplaces = profileWorkplaces
            ? profileWorkplaces.map(x => x.id).filter(id => !workplaces.map(x => x.id).includes(id))
            : null

        res = await Promise.all(
            workplaces.map(async x => {
                const patchObject = {
                    coach: getters['profileUserId'],
                    dateEnd: moment(x.dateEnd).format('YYYY-MM-DD'),
                    dateStart: moment(x.dateStart).format('YYYY-MM-DD'),
                    employer: x.employer,
                    id: x.id,
                    position: x.position,
                    responsibilities: x.duties,
                }

                let [err, data] = [null, null]

                if (patchObject.id) {
                    [err, data] = await HistoryResource.editWorkplace(patchObject)
                } else {
                    [err, data] = await HistoryResource.addWorkplace(patchObject)
                }

                if (err) throw err

                // commit(SET_PROFILE, data)
                return data
            })
        )

        if (removedWorkplaces && removedWorkplaces.length) {
            console.log('removing workplaces ids', removedWorkplaces)

            res = [
                ...res,
                await Promise.all(
                    removedWorkplaces.map(async id => {
                        const [err, data] = await HistoryResource.deleteWorkplace(id)

                        if (err) throw err

                        return data
                    })
                ),
            ]
        }

        return res
    },
    async batchEducations({commit, getters}, {educations, profileEducations}) {
        let res = []

        if (!educations) return null
        // console.log(profileEducations, educations)
        const removedEducations = profileEducations
            ? profileEducations.map(x => x.id).filter(id => !educations.map(x => x.id).includes(id))
            : null

        res = await Promise.all(
            educations.map(async x => {
                const patchObject = {
                    coach: getters['profileUserId'],
                    dateEnd: moment(x.dateEnd).format('YYYY-MM-DD'),
                    dateStart: moment(x.dateStart).format('YYYY-MM-DD'),
                    employer: x.employer,
                    id: x.id,
                    refresherCourses: x.courses,
                    title: x.title,
                }

                let [err, data] = [null, null]

                if (patchObject.id) {
                    [err, data] = await HistoryResource.editEducation(patchObject)
                } else {
                    [err, data] = await HistoryResource.addEducation(patchObject)
                }

                if (err) throw err

                // commit(SET_PROFILE, data)
                return data
            })
        )

        if (removedEducations && removedEducations.length) {
            console.log('removing educations ids', removedEducations)

            res = [
                ...res,
                await Promise.all(
                    removedEducations.map(async id => {
                        const [err, data] = await HistoryResource.deleteEducation(id)

                        if (err) throw err

                        return data
                    })
                ),
            ]
        }

        return res
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
