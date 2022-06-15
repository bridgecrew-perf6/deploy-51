import api from "./api";

const groups = {
    getGroups(data) {
        return api.get("/groups/", { params: data });
    },
    getGroup(id) {
        return api.get(`/groups/${id}/`);
    },
    getGroupProgress(id) {
        return api.get(`/groups/${id}/progress/`);
    },
    getGroupGoals(id) {
        return api.get(`/groups/${id}/goals/`)
    },
};

export default groups;
