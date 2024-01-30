import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://dummyjson.com/'
})

export default axiosClient
