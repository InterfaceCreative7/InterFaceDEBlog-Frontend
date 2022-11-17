import axios from "axios"


const api = axios.create({
    baseURL: "http://34.132.35.80:3000/",
    timeout: 6000
});

export default api;