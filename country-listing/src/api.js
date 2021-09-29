import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.countrylayer.com/v2/',
    params: {
        access_key:'30f1113fdff7b30211994e77b3c6744d'
    }
})

export default api;