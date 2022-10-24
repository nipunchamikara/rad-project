import { usersAPI as api } from "../../api";
import { AUTH_USER } from "../constants/actionTypes";

export const register = (user, navigate) => async (dispatch) => {
  api
    .registerUser(user)
    .then(({ data }) => dispatch({ type: AUTH_USER, payload: data }))
    .then(() => navigate("/"))
    .catch((err) => console.log(err));
};

export const login = (user, navigate) => async (dispatch) => {
  api
    .loginUser(user)
    .then(({ data }) => dispatch({ type: AUTH_USER, payload: data }))
    .then(() => navigate("/"))
    .catch((err) => console.log(err));
};
