import Notification from './notification.vue'
import notify from './instance'

export default (Vue) => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.notify = notify
}

/* 
Вызов плагина

this.notify({
  title: 'Событие успешно добавлено',     - Заголовок (required)
  text: 'НП-1 Практиеческое занятие',     - Текст под заголовком
  bg: '#64C048',                          - Фон уведомления
  autoClose: 4000                         - Время через сколько уведомление закроется
})
*/