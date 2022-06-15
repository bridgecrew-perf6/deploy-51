import api from "../api/api";
import auth from "../api/auth";
import awards from "../api/awards";
import coach from "../api/coach";
import events from "../api/events";
import exercises from "../api/exercises";
import exercisesEvent from "../api/exercisesEvent";
import experience from "../api/experience";
import groups from "../api/groups";
import homework from "../api/homework";
import goals from "../api/goals";
import achievements from "../api/achievements";
import sportsmen from "../api/sportsmen";
import notes from "../api/notes";
import users from "../api/users";

export default {
    install(Vue) {
        Vue.prototype.$api = api;
        Vue.prototype.$auth = auth;
        Vue.prototype.$awards = awards;
        Vue.prototype.$coach = coach;
        Vue.prototype.$events = events;
        Vue.prototype.$exercises = exercises;
        Vue.prototype.$exercisesEvent = exercisesEvent;
        Vue.prototype.$experience = experience;
        Vue.prototype.$groups = groups;
        Vue.prototype.$homework = homework;
        Vue.prototype.$goals = goals;
        Vue.prototype.$achievements = achievements;
        Vue.prototype.$sportsmen = sportsmen;
        Vue.prototype.$notes = notes;
        Vue.prototype.$users = users;
    },
};
