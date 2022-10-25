import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:3030/todo" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchTodos = () => API.get("/all");
export const createTodo = (formData) => API.post("/", formData);
export const updateTodo = (id, formData) => API.patch(`/${id}`, formData);
export const deleteTodo = (id) => API.delete(`/${id}`);
