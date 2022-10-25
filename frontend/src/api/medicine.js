import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:3030/medicine" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchMedicine = () => API.get("/all");
export const createMedicine = (formData) => API.post("/add", formData);
export const updateMedicine = (id, formData) =>
  API.patch(`/change/${id}`, formData);
export const deleteMedicine = (id) => API.delete(`/delete/${id}`);
