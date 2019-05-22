import Api from '@/services/Api'

export default {
    createSession(payload){
        return Api().post('sessions', payload)
    },
    getOneSession(id){
        return Api().get(`session/${id}`)
    }
}