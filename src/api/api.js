import Vue from "vue";
import axios from "axios";
import store from "../store";
import notify from "../components/notification/instance";

const api = axios.create({
    baseURL: "http://111.111.111.111:8000/api/",
});

// api.headers = { Authorization: `Bearer ${store.state.auth.access}`, 'Content-Type': 'application/json; charset=utf-8' }

api.interceptors.request.use(
    async (config) => {
        let access = localStorage.getItem('access')
        if (access) {
            config.headers = {
                Authorization: `Bearer ${access}`,
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
        let errors = error
  
        if(error.response.data && typeof error.response.data === 'object') {
           errors = ''
           for(let err in error.response.data) {
            errors += error.response.data[err] + '<br>'
           }
        }
        if(error.response.status === 401 || error.response.status === 400) {
            notify({
             title: 'Ошибка авторизации',
             text: 'Неверные данные пользователя',
             bg: '#FF4B6B',
             autoClose: 4000
           })
        } else {
            notify({
             title: 'Ошибка',
             text: errors,
             bg: '#FF4B6B',
             autoClose: 4000
            })
        }

        return Promise.reject(error);
    }
);

export default api;
