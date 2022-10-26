import { remindersAPI as api } from "../../api";

import {
  GET_REMINDERS,
  CREATE_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
} from "../constants/actionTypes";

export const getReminders = (date) => async (dispatch) => {
  if (date) {
    api
      .fetchRemindersByDate(date)
      .then(({ data }) => {
        dispatch({ type: GET_REMINDERS, payload: data });
      })
      .catch((err) => console.log(err));
  } else {
    api
      .fetchReminders()
      .then(({ data }) => {
        dispatch({ type: GET_REMINDERS, payload: data });
      })
      .catch((err) => console.log(err));
  }
};

export const createReminder = (formData) => async (dispatch) => {
  api
    .createReminder(formData)
    .then(({ data }) => {
      dispatch({ type: CREATE_REMINDER, payload: data });
    })
    .catch((err) => console.log(err));
};

export const updateReminder = (id, formData) => async (dispatch) => {
  api
    .updateReminder(id, formData)
    .then(({ data }) => {
      dispatch({ type: UPDATE_REMINDER, payload: data });
    })
    .catch((err) => console.log(err));
};

export const deleteReminder = (id) => async (dispatch) => {
  api
    .deleteReminder(id)
    .then(() => {
      dispatch({ type: DELETE_REMINDER, payload: id });
    })
    .catch((err) => console.log(err));
};
