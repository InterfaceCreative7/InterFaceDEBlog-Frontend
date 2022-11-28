import axios from "axios"


const api = axios.create({
    baseURL: "http://172.16.35.138:3000/",
    timeout: 6000
});

export default api;