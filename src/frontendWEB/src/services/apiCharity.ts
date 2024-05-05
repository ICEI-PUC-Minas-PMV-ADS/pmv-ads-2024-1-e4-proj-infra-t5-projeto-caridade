import axios from "axios";

export const apiCharity = axios.create({
    baseURL: "https://api.globalgiving.org/api/public/projectservice"
})