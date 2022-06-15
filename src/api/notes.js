import api from "./api";

const notes = {
    postNotes(body) {
        return api.post("/notes/", body);
    },
    postImage(file, id) {
        const formData = new FormData();
        
        formData.append('image', file)
        formData.append('note', id)

        return api.post(`/notes/${id}/note_images/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    getImage(id) {
        return api.get(`/notes/${id}/note_images/`)
    },
    postTodo(body) {
        return api.post('/notes/tasks/', body)
    },
    putTodo(id, body) {
        return api.put(`/notes/${id}/`, body)
    },
    getNotes(id, date) {
        return api.get(`/notes/?user=${id}&date=${date}`);
    }
};

export default notes;
