import Vue from 'vue'
import VueRouter from 'vue-router'
import TrainerChildren from './route-account-trainer'
import Vuex from 'vuex'
import store from '@/store'
import auth from "@/api/auth";

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
    {
        path: '*',
        name: 'PageNotFound',
        component: () => import('@/views/PageNotFound'),
        meta: {layout: 'main'},
    },
    {
        path: '/',
        redirect: () => {
            const role = localStorage.getItem('role')
            if (role == 'Coach') {
                return '/dashboard'
            }
        },
    },
    {
        path: '/homework',
        name: 'Homework',
        component: () => import('@/components/Homework/Homework'),
        meta: {layout: 'main'},
    },
    
    // Календарь
    {
        path: '/schedule',
        name: 'Schedule',
        meta: {layout: 'main'},
        component: () => import('../views/Schedule'),
        redirect: () => {
            return { name: 'CalendarMonth' }
        },
        children: [
            {
                path: 'year',
                component: () => import('@/components/Calendar/CalendarViewYear'),
                meta: {layout: 'main', userSettings: true},
                name: 'CalendarYear',
            },
            {
                path: 'month',
                component: () => import('@/components/Calendar/CalendarViewMonth'),
                meta: {layout: 'main', userSettings: true},
                name: 'CalendarMonth',
            },
            {
                path: 'week',
                component: () => import('@/components/Calendar/CalendarViewWeek'),
                meta: {layout: 'main', userSettings: true},
                name: 'CalendarWeek',
            },
            {
                path: 'day',
                component: () => import('@/components/Calendar/CalendarViewDay'),
                meta: {layout: 'main', userSettings: true},
                name: 'CalendarDay',
            },
        ],
    },

    // Кабинет тренера
    {
        path: '/account',
        component: () => import('../views/AccountTrainer'),
        children: TrainerChildren,
    },

    // Медиа
    {
        path: '/media',
        name: 'Media',
        meta: {layout: 'main', requiresAuth: true},
        component: () => import('../views/Media'),
    },

    // Тренировки
    {
        path: '/training',
        name: 'Training',
        meta: {layout: 'main'},
        component: () => import('../views/Training'),
        children: [
            {
                path: 'new',
                component: () => import('@/components/Events/Training/TrainingCreateView'),
                meta: {layout: 'main', requiresAuth: true},
                name: 'TrainingCreateView',
            },
            {
                path: ':id',
                component: () => import('@/components/Events/Training/TrainingView'),
                meta: {layout: 'main', requiresAuth: true},
                name: 'TrainingView',
            },
            {
                path: ':id/edit',
                component: () => import('@/components/Events/Training/TrainingEditView'),
                meta: {layout: 'main', requiresAuth: true},
                name: 'TrainingEditView',
            },
            {
                path: 'copy/:id',
                component: () => import('@/components/Events/Training/TrainingCreateView'),
                meta: {layout: 'main', requiresAuth: true},
                name: 'TrainingCopyView',
            },
            
        ],
    },
    //Тестирование
    {
        path: '/standard',
        name: 'Standard',
        meta: {layout: 'main'},
        component: () => import('../views/Standard'),
        children: [
            {
                path: 'new',
                component: () => import('@/components/Events/Standard/StandardCreateView'),
                meta: {layout: 'main', requiresAuth: true},
                name: 'StandardCreateView',
            },
            {
                path: ':id',
                component: () => import('@/components/Events/Standard/StandardView'),
                meta: {layout: 'main', requiresAuth: true},
                name: 'StandardView',
            },
            {
                path: ':id/edit',
                component: () => import('@/components/Events/Standard/StandardEditView'),
                meta: {layout: 'main', requiresAuth: true},
                name: 'StandardEditView',
            },
            {
                path: 'copy/:id',
                component: () => import('@/components/Events/Standard/StandardCreateView'),
                meta: {layout: 'main', requiresAuth: true},
                name: 'StandardCopyView',
            },
            
        ],
    },
    
    //Дашборд
    {
        path: "/dashboard",
        name: "Dashboard",
        meta: {layout: "main", requiresAuth: true},
        component: () => import("../views/Dashboard"),
    },
    {
        path: "/dashboard/player",
        name: "DashboardPlayer",
        meta: {layout: "main", requiresAuth: true},
        component: () => import("../views/DashboardPlayer"),
    },

    //Создание УТП
    {
        path: '/training-plan/create',
        name: 'SeasonTrainingPlanCreate',
        meta: {layout: 'main'},
        component: () => import('../views/SeasonTrainingPlanCreate.vue'),
    },

    // Регистрация
    {
        path: '/registration',
        name: 'Registration',
        meta: {layout: 'empty'},
        component: () => import('../views/Registration'),
    },

    // Авторизация
    {
        path: '/login',
        name: 'Login',
        meta: {layout: 'empty'},
        component: () => import('../views/Login'),
    },

    // Создание события матч
    {
        path: '/create-event',
        name: 'CreateEvent',
        meta: {layout: 'main'},
        component: () => import('../views/CreateEvent'),
    },

    // Страница матча
    {
        path: '/match-event/:id',
        name: 'MatchEvent',
        meta: {layout: 'main'},
        component: () => import('../views/MatchEvent'),
    },

    // Страница оценка матча
    {
        path: '/match-score',
        name: 'MatchScore',
        meta: {layout: 'main'},
        component: () => import('../views/MatchScore'),
    },

    // Страница оценки защитника
    {
        path: '/defender-score',
        name: 'DefenderScore',
        meta: {layout: 'main'},
        component: () => import('../views/DefenderScore')
    },

    // Страница оценки нападающего
    {
        path: '/striker-score',
        name: 'StrikerScore',
        meta: {layout: 'main'},
        component: () => import('../views/StrikerScore')
    },

    // Страница оценка вратаря
    {
        path: '/goalkeeper-score',
        name: 'GoalkeeperScore',
        meta: {layout: 'main'},
        component: () => import('../views/GoalkeeperScore')
    },

    // Протокол матча
    {
        path: '/match-protocol',
        name: 'MatchProtocol',
        meta: {layout: 'main'},
        component: () => import('../views/MatchProtocol')
    },

    // Видеоредактор
    {
        path: '/video-editor',
        name: 'VideoEditor',
        meta: {layout: 'main'},
        component: () => import('../views/VideoEditor')
    },

    //Библиотека упражнений
    {
        path: '/exercise-library',
        name: 'ExerciseLibrary',
        meta: {layout: 'main'},
        component: () => import('../views/ExerciseLibrary/Library.vue'),
    },
    {
        path: '/exercise-library/new',
        name: 'ExerciseNew',
        meta: {layout: 'main'},
        component: () => import('../views/ExerciseLibrary/ExerciseNew.vue'),
    },
    {
        path: '/exercise-library/:id',
        name: 'Exercise',
        meta: {layout: 'main'},
        component: () => import('../views/ExerciseLibrary/Exercise.vue'),
    },

    // Цели
    {
        path: '/goals',
        name: 'Goals',
        meta: {layout: 'main'},
        component: () => import('../views/Goals')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    if (match) return match[2]
    return ''
}

// Провека авторизации пользователя
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/registration']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('access')

    const sportsmanPage = '/account-sportsman'
    const trainerPage = '/account-trainer'
    const role = localStorage.getItem('role')
    const isPrivateSportsman = to.path.includes(sportsmanPage)
    const isPrivateTrainer = to.path.includes(trainerPage)

    if (authRequired) {
        let accessCookie = getCookie('access')
        if (!accessCookie) {
            const $refreshToken = async () => {
                const refresh = localStorage.getItem('refresh')

                if (refresh) {
                    try {
                        const response = await auth.refresh({refresh: refresh})
                        localStorage.setItem('access', response.access)
                        localStorage.setItem('refresh', response.refresh)
                        document.cookie = 'access=' + response.access + '; max-age=' + process.env.VUE_APP_TIME
                    } catch (error) {
                        document.cookie = 'access=' + localStorage.getItem('access') + '; max-age=-1'
                        localStorage.removeItem('access')
                        localStorage.removeItem('refresh')
                        localStorage.removeItem('role')
                    }
                }
            }
            $refreshToken()
        }
    }

    if (authRequired && !loggedIn) {
        next('/login')
    } else {
        next()
    }
    if (!authRequired && loggedIn) {
        next('/')
    }
})

export default router
