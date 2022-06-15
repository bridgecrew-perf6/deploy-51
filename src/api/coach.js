import api from "./api";

const coach = {
    getCoach(id) {
        return api.get(`/coach/${id}`)
    },
    updateCoach(id, data) {
        return api.put(`/coach/${id}`, data)
    },
    updateAvatar(avatar) {
        let formData = new FormData();
        formData.append('avatar', avatar)

        return api.put(`/users/me/`, formData, {headers: {
            'Content-Type': 'multipart/form-data'
          }})
    },
    getCoachEducations(id) {
        return api.get(`/coach/${id}/educations/`)
    },
    getCoachRewards(id) {
        return api.get(`/coach/${id}/rewards/`)
    },
    getCoachWork(id) {
        return api.get(`/coach/${id}/work_experiencies/`)
    },

    //TODO: Remove later
    //Educations
    creatEdu(payload) {
        return api.post(`/educations/`, payload)
    },
    deleteEdu(id) {
        return api.delete(`/education/${id}/`)
    },

    createWork(data) {
        return api.post(`/work_experience/`, data)
    },
    deleteWork(id) {
        return api.delete(`/work_experience/${id}/`)
    },


    createAward(data) {
        return api.post(`/reward/`, data) 
    },
    deleteAward(id) {
        return api.delete(`/reward/${id}/`)
    }
};

export default coach;
