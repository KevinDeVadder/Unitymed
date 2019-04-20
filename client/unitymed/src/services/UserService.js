import Api from '@/services/Api'

export default {
    getAllUsers(query){
        return Api().get('users', {params:query})
    },
    //on create group open pop up witb "add teacher by email" or "select from a list"
    addSpecial(payload){
        return Api().post('users', payload)
    },
}