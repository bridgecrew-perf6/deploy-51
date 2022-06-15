import api from "./api";

const groups = {
    getGroups(data) {
        return api.get("/groups/", { params: data });
    },
    getGroup(id) {
        return api.get(`/groups/${id}/`);
    },
};

export default groups;
