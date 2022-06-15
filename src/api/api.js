import axios from "axios";
import store from "../store";

const api = axios.create({
    baseURL: process.env.VUE_APP_URL,
});

// api.headers = { Authorization: `Bearer ${store.state.auth.access}`, 'Content-Type': 'application/json; charset=utf-8' }

api.interceptors.request.use(
    async (config) => {
        if (store.state.auth.access) {
            config.headers = {
                Authorization: `Bearer ${store.state.auth.access}`,
                'Content-Type': 'application/json; charset=utf-8'
            }
        }

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
