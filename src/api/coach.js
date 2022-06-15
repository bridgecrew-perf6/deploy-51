import api from "./api";

const coach = {
    getCoach(idCoach) {
        return api.get(`/coach/${idCoach}/`)
    },
    updateCoach(idCoach, data) {
        return api.put(`/coach/${idCoach}/`, data)
    },

    getCoachEducations(idCoach) {
        return api.get(`/coach/${idCoach}/educations/`)
    },
    createEducation(idCoach, payload) {
        return api.post(`/coach/${idCoach}/educations/`, payload)
    },
    updateEducation(idCoach, idEducation, payload) {
        return api.put(`/coach/${idCoach}/educations/${idEducation}/`, payload)
    },
    deleteEducation(idEducation) {
        //return api.delete(`coach/${idCoach}/educations/${idEducation}/`)
        return api.delete(`/education/${idEducation}/`)
    },

    getCoachWork(idCoach) {
        return api.get(`/coach/${idCoach}/work_experiencies/`)
    },
    createWork(idCoach, payload) {
        return api.post(`/coach/${idCoach}/work_experiencies/`, payload)
    },
    updateWork(idCoach, idWork, payload) {
        return api.put(`/coach/${idCoach}/work_experiencies/${idWork}/`, payload)
    },
    deleteWork(idWork) {
        //return api.delete(`coach/${idCoach}/work_experience/${idWork}/`)
        return api.delete(`/work_experience/${idWork}/`)
    },

    getCoachAwards(idCoach) {
        return api.get(`/coach/${idCoach}/rewards/`)
    },
    createAward(idCoach, payload) {
        return api.post(`/coach/${idCoach}/rewards/`, payload)
    },
    updateAward(idCoach, idAward, payload) {
        return api.put(`/coach/${idCoach}/rewards/${idAward}/`, payload)
    },
    deleteAward(idAward) {
        //return api.delete(`coach/${idCoach}/rewards/${idAward}/`)
        return api.delete(`/reward/${idAward}/`)
    }
};

export default coach;
