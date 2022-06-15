import api from "./api";

const exercises = {
    postExercisesEvent(payload) {
        return api.post("/exercises_event/", payload);
    },
    getExerciseEvent(id) {
        return api.get(`/exercises_event/${id}/`);
    },
    putExerciseEvent(id) {
        return api.put(`/exercises_event/${id}/`);
    },
    deleteExerciseEvent(id) {
        return api.delete(`/exercises_event/${id}/`);
    }
};

export default exercises;
