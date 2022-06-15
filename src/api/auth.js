import api from "./api";

const auth = {
    login(payload) {
        return api.post("/auth/users/login/", payload);
    },
    sendSms(payload) {
        return api.post("/auth/users/", payload);
    },
    activateCode(payload) {
        return api.post("/auth/users/activate_code/", payload);
    },
    password(payload) {
        return api.post("/auth/users/password/", payload);
    },
    refresh(payload) {
        return api.post("/auth/users/refresh/", payload);
    },
    requestCode(payload) {
        return api.post("/auth/users/request_code/", payload);
    },
    verify(payload) {
        return api.post("/auth/users/verify/", payload);
    }
};

export default auth;
