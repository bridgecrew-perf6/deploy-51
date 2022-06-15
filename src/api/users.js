import api from "./api";

const users = {
    updateUser(idUser, data) {
        let formData = new FormData();
        Object.keys(data).forEach(key => formData.append(key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`), data[key]))

        let headers = {
            'Content-Type': 'multipart/form-data; charset=utf-8'
            }
        return api.put(`/users/${idUser}/`, formData, {
            headers: headers
        })
    },
};

export default users;
