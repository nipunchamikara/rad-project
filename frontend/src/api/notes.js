import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:3030/notes" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchNotes = () => API.get("/");
export const createNote = (formData) => API.post("/", formData);
export const updateNote = (id, formData) => API.patch(`/${id}`, formData);
export const deleteNote = (id) => API.delete(`/${id}`);
