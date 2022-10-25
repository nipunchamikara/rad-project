import { medicineAPI as api } from "../../api";
import {
  GET_MEDICINE,
  CREATE_MEDICINE,
  UPDATE_MEDICINE,
  DELETE_MEDICINE,
} from "../constants/actionTypes";

export const getMedicine = () => async (dispatch) => {
  api
    .fetchMedicine()
    .then(({ data }) => {
      dispatch({ type: GET_MEDICINE, payload: data });
    })
    .catch((err) => console.log(err));
};

export const createMedicine = (formData) => async (dispatch) => {
  api
    .createMedicine(formData)
    .then(({ data }) => {
      dispatch({ type: CREATE_MEDICINE, payload: data });
    })
    .catch((err) => console.log(err));
};

export const updateMedicine = (id, formData) => async (dispatch) => {
  api
    .updateMedicine(id, formData)
    .then(({ data }) => {
      dispatch({ type: UPDATE_MEDICINE, payload: data });
    })
    .catch((err) => console.log(err));
};

export const deleteMedicine = (id) => async (dispatch) => {
  api
    .deleteMedicine(id)
    .then(() => {
      dispatch({ type: DELETE_MEDICINE, payload: id });
    })
    .catch((err) => console.log(err));
};
