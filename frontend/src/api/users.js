import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:3030/users" });

export const registerUser = (formData) => API.post("/register", formData);
export const loginUser = (formData) => API.post(`/login`, formData);
