import { notesAPI as api } from "../../api";
import {
  GET_NOTES,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from "../constants/actionTypes";

export const getNotes = () => async (dispatch) => {
  api
    .fetchNotes()
    .then(({ data }) => {
      dispatch({ type: GET_NOTES, payload: data });
    })
    .catch((err) => console.log(err));
};

export const createNote = (formData) => async (dispatch) => {
  api
    .createNote(formData)
    .then(({ data }) => {
      dispatch({ type: CREATE_NOTE, payload: data });
    })
    .catch((err) => console.log(err));
};

export const updateNote = (id, formData) => async (dispatch) => {
  api
    .updateNote(id, formData)
    .then(({ data }) => {
      dispatch({ type: UPDATE_NOTE, payload: data });
    })
    .catch((err) => console.log(err));
};

export const deleteNote = (id) => async (dispatch) => {
  api
    .deleteNote(id)
    .then(() => {
      dispatch({ type: DELETE_NOTE, payload: id });
    })
    .catch((err) => console.log(err));
};
