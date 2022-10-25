import {
  GET_MEDICINE,
  CREATE_MEDICINE,
  UPDATE_MEDICINE,
  DELETE_MEDICINE,
} from "../constants/actionTypes";

const medicineReducer = (medicine = [], action) => {
  switch (action.type) {
    case GET_MEDICINE:
      return action.payload;
    case CREATE_MEDICINE:
      return [action.payload, ...medicine];
    case UPDATE_MEDICINE:
      return medicine.map((med) =>
        med._id === action.payload._id ? action.payload : med
      );
    case DELETE_MEDICINE:
      return medicine.filter((med) => med._id !== action.payload);
    default:
      return medicine;
  }
};

export default medicineReducer;
