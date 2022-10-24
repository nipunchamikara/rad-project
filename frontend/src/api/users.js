import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:3030/users" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const registerUser = (formData) => API.post("/register", formData);
export const loginUser = (formData) => API.post(`/login`, formData);
