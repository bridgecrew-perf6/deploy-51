import api from "./api";

const achievements = {
    getGroupAchievements(id) {
        return api.get(`/achievements/groups/${id}/`);
    }
};

export default achievements;
