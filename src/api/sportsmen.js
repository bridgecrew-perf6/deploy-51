import api from "./api";

const sportsmen = {
    getSportsmen(query) {
        return api.get(`/sportsmen/`, { params: query})
    },
    getSportsman(idSportsman) {
        return api.get(`/sportsmen/${idSportsman}/`)
    },
    getSportsmenGoals(id) {
        return api.get(`/sportsmen/${id}/goals`)
    },
    getSportsmenProgress(id) {
        return api.get(`/sportsmen/${id}/progress/`)
    },

};

export default sportsmen;
