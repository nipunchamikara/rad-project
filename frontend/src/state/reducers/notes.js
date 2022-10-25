import {
  CREATE_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  GET_NOTES,
} from "../constants/actionTypes";

const notesReducer = (notes = [], action) => {
  switch (action.type) {
    case GET_NOTES:
      return action.payload;
    case CREATE_NOTE:
      return [action.payload, ...notes];
    case UPDATE_NOTE:
      return notes.map((note) =>
        note._id === action.payload._id ? action.payload : note
      );
    case DELETE_NOTE:
      return notes.filter((note) => note._id !== action.payload);
    default:
      return notes;
  }
};

export default notesReducer;
