import axios from "axios";

const API = axios.create({
    baseURL: "https://fir-log-in-f2be5-default-rtdb.firebaseio.com"
})

export default API;