import axios from "axios";

export const api = axios.create({
    baseURL: "http://[::1]:4200"
})