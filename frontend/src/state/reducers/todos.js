import {
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  GET_TODOS,
} from "../constants/actionTypes";

const todosReducer = (todos = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.payload;
    case CREATE_TODO:
      return [action.payload, ...todos];
    case UPDATE_TODO:
      return todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
    case DELETE_TODO:
      return todos.filter((todo) => todo._id !== action.payload);
    default:
      return todos;
  }
};

export default todosReducer;
