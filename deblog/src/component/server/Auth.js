import axios from "axios"


const api = axios.create({
    baseURL: "http://34.168.52.103:3000/",
    timeout: 6000
});

export default api;