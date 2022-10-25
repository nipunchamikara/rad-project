import { todosAPI as api } from "../../api";
import {
  GET_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from "../constants/actionTypes";

export const getTodos = (setIsWarning) => async (dispatch) => {
  api
    .fetchTodos()
    .then(({ data }) => {
      dispatch({ type: GET_TODOS, payload: data });
    })
    .catch((err) => {
      setIsWarning(err.response.data.error);
      setTimeout(() => setIsWarning(false), 2000);
    });
};

export const createTodo = (formData, setIsWarning) => async (dispatch) => {
  api
    .createTodo(formData)
    .then(({ data }) => {
      dispatch({ type: CREATE_TODO, payload: data });
    })
    .catch((err) => {
      setIsWarning(err.response.data.error);
      setTimeout(() => setIsWarning(false), 2000);
    });
};

export const updateTodo = (id, formData, setIsWarning) => async (dispatch) => {
  api
    .updateTodo(id, formData)
    .then(({ data }) => {
      dispatch({ type: UPDATE_TODO, payload: data });
    })
    .catch((err) => {
      setIsWarning(err.response.data.error);
      setTimeout(() => setIsWarning(false), 2000);
    });
};

export const deleteTodo = (id, setIsWarning) => async (dispatch) => {
  api
    .deleteTodo(id)
    .then(() => {
      dispatch({ type: DELETE_TODO, payload: id });
    })
    .catch((err) => {
      setIsWarning(err.response.data.error);
      setTimeout(() => setIsWarning(false), 2000);
    });
};
