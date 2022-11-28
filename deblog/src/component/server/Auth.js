import axios from "axios"


const api = axios.create({
    baseURL: "http://13.124.18.146:3000/",
    timeout: 6000
});

export default api;