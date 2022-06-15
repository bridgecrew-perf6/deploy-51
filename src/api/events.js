import api from "./api";

const events = {
    getEvents(query) {
        return api.get("/events/", { params: query});
    },
    getEvent(id) {
        return api.get(`/events/${id}/`);
    },
    postEvents(payload) {
        return api.post("/events/", payload);
    },
    putEvents(id, payload) {
        return api.put(`/events/${id}/`, payload);
    },
    postMatches(id, payload) {
        return api.post(`/events/${id}/matches/`, payload);
    },
    putMatches(id, matchesId, payload) {
        return api.put(`/events/${id}/matches/${matchesId}`, payload);
    },
    getMatches(id, matchesId) {
        return api.get(`/events/${id}/matches/${matchesId}`);
    },
    getAllMatches(id) {
        return api.get(`/events/${id}/matches/`);
    },
    postPreparationStages(eventId, matchId, payload) {
        return api.post(`/events/${eventId}/matches/${matchId}/preparation_stages/`, payload);
    },
    putPreparationStages(eventId, matchId, preparationStagesid, payload) {
        return api.put(`/events/${eventId}/matches/${matchId}/preparation_stages/${preparationStagesid}`, payload);
    },
    deletePreparationStages(eventId, matchId, preparationStagesid) {
        return api.delete(`/events/${eventId}/matches/${matchId}/preparation_stages/${preparationStagesid}`);
    },
    getPreparationStages(eventId, matchId) {
        return api.get(`/events/${eventId}/matches/${matchId}/preparation_stages/`);
    },
    postDocuments(eventId, matchId, payload) {
        return api.post(`/events/${eventId}/matches/${matchId}/documents/`, payload);
    },
    deleteDocuments(eventId, matchId, documentID) {
        return api.delete(`/events/${eventId}/matches/${matchId}/documents/${documentID}`);
    },
    getCoaches(query) {
        return api.get("/events/coach/", { params: query});
    },
    getSportsman(id) {
        return api.get(`/events/coach/sportsman/${id}/`);
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
    getTrainingPlaceTypes() {
        return api.get('/training_place_types/')
    },

    getTraining(idEvent) {
        return api.get(`/events/${idEvent}/trainings/`)
    },
    updateTraining(idEvent, idTraining, data) {
        return api.put(`/events/${idEvent}/trainings/${idTraining}/`, data)
    },
    getTrainingExercises(idEvent, idTraining) {
        return api.get(`/events/${idEvent}/trainings/${idTraining}/training_exercises/`)
    },

    createTraining(idEvent, payload) {
        return api.post(`/events/${idEvent}/trainings/`, payload)
    },
    createTrainingExercises(idEvent, idTraining, payload) {
        return api.post(`/events/${idEvent}/trainings/${idTraining}/training_exercises/`, payload)
    },
    deleteTrainingExercises(idEvent, idTraining, idExercise) {
        return api.delete(`/events/${idEvent}/trainings/${idTraining}/training_exercises/${idExercise}`)
    },

    getStandard(idEvent) {
        return api.get(`/events/${idEvent}/standards/`)
    },
    updateStandard(idEvent, idStandard, data) {
        return api.put(`/events/${idEvent}/standards/${idStandard}/`, data)
    },
    getStandardExercises(idEvent, idStandard) {
        return api.get(`/events/${idEvent}/standards/${idStandard}/standard_exercises/`)
    },
    deleteStandardExercises(idEvent, idStandard, idExercise) {
        return api.delete(`/events/${idEvent}/standards/${idStandard}/standard_exercises/${idExercise}`)
    },

    createStandard(idEvent, payload) {
        return api.post(`/events/${idEvent}/standards/`, payload)
    },
    createStandardExercises(idEvent, idStandard, payload) {
        return api.post(`/events/${idEvent}/standards/${idStandard}/standard_exercises/`, payload)
    },

    updateEvent(idEvent, data) {
        return api.put(`/events/${idEvent}/`, data)
    },
    deleteEvent(idEvent) {
        return api.delete(`/events/${idEvent}/`)
    },

};

export default events;
