import api from "./api";

const awards = {
    getAwards() {
        return api.get("/awards/");
    },
    postAwards(payload) {
        return api.post("/awards/", payload);
    },
    awardsTypes(payload) {
        return api.get("/awards/types/");
    },
    getAward(id) {
        return api.post(`/awards/${id}/`);
    },
    putAward(id, payload) {
        return api.put(`/awards/${id}/`, payload);
    },
    deleteAward(id) {
        return api.delete(`/awards/${id}/`);
    },
};

export default awards;
