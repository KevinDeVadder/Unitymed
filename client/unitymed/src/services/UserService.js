import Api from '@/services/Api'

export default {
    getAllUsers(query){
        return Api().get('users', {params:query})
    },
    //on create group open pop up witb "add teacher by email" or "select from a list"
    addSpecial(payload){
        return Api().post('users', payload)
    },
    confirmMedic(medicId, status){
        if (status.confirmed == true) return Api().put(`/medic/${medicId}/confirm`, status)
        else return Api().delete(`/medic/${medicId}`)
    },
    getAllMedics(query){
        return Api().get('medics', {params:query})
    },
    rateMedic(id, payload){
        return Api().post(`/medic/${id}/ratings`, payload)
    }
}