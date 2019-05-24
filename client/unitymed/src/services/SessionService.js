import Api from '@/services/Api'

export default {
    createSession(payload){
        return Api().post('sessions', payload)
    },
    getOneSession(id){
        return Api().get(`session/${id}`)
    },
    getAllSessions(query){
        return Api().get('/sessions', {params: query})
    },
    acceptSession(id){
        return Api().put(`/session/${id}/accept`)
    },
    deleteSession(id){
        return Api().delete(`/session/${id}`)
    }
}