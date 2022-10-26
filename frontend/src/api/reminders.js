import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:3030/events" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchReminders = () => API.get("/");
export const fetchRemindersByDate = (date) => API.get(`?date=${date}`);
export const createReminder = (formData) => API.post("/add", formData);
export const updateReminder = (id, formData) => API.patch(`/${id}`, formData);
export const deleteReminder = (id) => API.delete(`/${id}`);
