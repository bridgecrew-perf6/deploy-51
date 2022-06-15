import api from "./api";

const experience = {
    getExperiences() {
        return api.get("/experience/");
    },
    getFavourite() {
        return api.get("/favourite_exercises/");
    },
    postExperience() {
        return api.post("/experience/");
    },
    getExperienceUtils() {
        return api.get("/experience/utils/");
    },
    putExperience(id) {
        return api.put(`/experience/${id}/`);
    },
    deleteExperience(id) {
        return api.delete(`/experience/${id}/`);
    },
};

export default experience;
