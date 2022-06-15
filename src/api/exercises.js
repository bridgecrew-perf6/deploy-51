import api from "./api";

const exercises = {
    getExercises(data) {
        return api.get("/exercises/", { params: data });
    },
    postExercises(payload) {
        return api.post("/exercises/", payload);
    },
    getExercise(id) {
        return api.get(`/exercises/${id}/`);
    },
    putExercise(id) {
        return api.put(`/exercises/${id}/`);
    },
};

export default exercises;
