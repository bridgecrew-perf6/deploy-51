import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import VueDraggable from 'vue-draggable'
import Vuelidate from 'vuelidate'
import { VueMaskDirective } from 'v-mask'
import VueDatePicker from '@mathieustan/vue-datepicker'
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css'
import { extend, ValidationProvider, ValidationObserver, setInteractionMode } from 'vee-validate'
import { required, email, alpha, confirmed, min, max } from 'vee-validate/dist/rules'
import VTooltip from 'v-tooltip'
import VueEllipseProgress from 'vue-ellipse-progress';
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
import Notification from './components/notification'

Vue.use(VueEllipseProgress);
Vue.use(LottieVuePlayer);
Vue.use(Notification)

import ApiPlugin from "./plugins/api";

Vue.use(VueDatePicker, {
  lang: 'ru',
})

Vue.directive('mask', VueMaskDirective)

Vue.use(VueDraggable)

Vue.use(Vuelidate)

Vue.use(ApiPlugin);

function initValidate() {
  extend('required', { ...required, message: 'Заполните это поле' })
  extend('email', { ...email, message: 'Неверный формат email' })
  extend('alpha', { ...alpha, message: 'Поле должно содержать только цифры' })
  extend('confirmed', { ...confirmed, message: 'Пароли не совпадают' })
  extend('min', { ...min, message: 'Минимум {length} символов' })
  extend('max', { ...max, message: 'Максимум {length} символов' })

  extend('tel', {
    validate: value => {
      // eslint-disable-next-line no-useless-escape
      const reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
      return value.match(reg)
    },
    message: 'Введите номер телефона',
  })

  Vue.component('ValidationProvider', ValidationProvider)
  Vue.component('ValidationObserver', ValidationObserver)

  setInteractionMode('passive')
}

import VCalendar from 'v-calendar';
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

initValidate()
Vue.use(VTooltip)

Vue.config.productionTip = false

Vue.component('base-button', () => import('./components/library/BaseButton'))
Vue.component('base-checkbox', () => import('./components/library/BaseCheckbox'))

Vue.component('wu-alert', () => import('./components/library/WUAlert'))
Vue.component('wu-button', () => import('./components/library/WUButton'))
Vue.component('wu-checkbox', () => import('./components/library/WUCheckbox'))
Vue.component('wu-chip', () => import('./components/library/WUChip'))
Vue.component('wu-editor', () => import('./components/library/WUEditor'))
Vue.component('wu-icon', () => import('./components/library/WUIcon'))
Vue.component('wu-input', () => import('./components/library/WUInput'))
Vue.component('wu-number', () => import('./components/library/WUNumber'))
Vue.component('wu-radio', () => import('./components/library/WURadio'))
Vue.component('wu-select', () => import('./components/library/WUSelect'))
Vue.component('wu-slider', () => import('./components/library/WUSlider'))
Vue.component('wu-select-period', () => import('./components/library/WUSelectPeriod'))
Vue.component('wu-input-date', () => import('./components/library/WUInputDate'))
Vue.component('wu-input-time', () => import('./components/library/WUInputTime'))

import moment from 'moment'
moment.locale('ru')
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  vuetify,
  VueDraggable,
  VueDatePicker,
  VueMaskDirective,
  render: h => h(App),
}).$mount('#app')
