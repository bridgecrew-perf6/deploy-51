import api from "./api";

const homework = {
    postHomework(body) {
        return api.post("/homework/", body);
    },
    getHomeworkGroups(id) {
        return api.get(`/homework/group/${id}/`);
    },
    getHomeworkSportsman(id) {
        return api.get(`/homework/sportsman/${id}/`);
    },
    removeHomework(id) {
        return api.delete(`/homework/${id}/`);
    }
};

export default homework;
