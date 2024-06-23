import axios from "axios";

export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });
export const organization = axios.create({ baseURL: import.meta.env.VITE_ORG_URL });
