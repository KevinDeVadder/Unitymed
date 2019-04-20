import axios from 'axios'
export default () =>{
    return axios.create({
        baseURL: 'http://localhost:4000/api/',
        timeout: 5000,
        headers: {
            'x-access-token': localStorage.getItem('jwt')
        }
    })
}