import api from "./api";

const events = {
    getEvents() {
        return api.get("/events/");
    },
    postEvents(payload) {
        return api.post("/events/", payload);
    },
    getCoaches(query) {
        return api.get("/events/coach/", { params: query});
    },
    getSportsman(id) {
        return api.get(`/events/coach/sportsman/${id}/`);
    },
    getEvent(id) {
        return api.get(`/events/coach/${id}/`);
    },
    putCoach(id, payload) {
        return api.put(`/events/coach/${id}/`, payload);
    },
    getSportsmanPk(id, sportsmanPk) {
        return api.get(`/events/coach/${id}/sportsman/${sportsmanPk}/`);
    },
    getGames() {
        return api.get(`/events/days/games/`);
    },
    deleteExercisesEvent(id) {
        return api.delete(`/events/exercises_event/${id}/`);
    },
    getGeneral() {
        return api.get(`/events/general/`);
    },
    getLoad() {
        return api.get(`/events/load/`);
    },
    getUtils() {
        return api.get(`/events/utils/`);
    },
};

export default events;
