import api from "./api";

const auth = {
    login(payload) {
        return api.post("/users/login/", payload);
    },
    refresh(payload) {
        return api.post("/users/refresh/", payload);
    },
};

export default auth;
