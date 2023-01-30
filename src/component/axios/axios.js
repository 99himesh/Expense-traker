import axios from "axios";

const API = axios.create({
    baseURL: "https://api-calls-fa398-default-rtdb.firebaseio.com"
})

export default API;