import {
  GET_REMINDERS,
  CREATE_REMINDER,
  UPDATE_REMINDER,
  DELETE_REMINDER,
} from "../constants/actionTypes";

const medicinesReducer = (medicines = [], action) => {
  switch (action.type) {
    case GET_REMINDERS:
      return action.payload;
    case CREATE_REMINDER:
      return [action.payload, ...medicines];
    case UPDATE_REMINDER:
      return medicines.map((medicine) =>
        medicine._id === action.payload._id ? action.payload : medicine
      );
    case DELETE_REMINDER:
      return medicines.filter((medicine) => medicine._id !== action.payload);
    default:
      return medicines;
  }
};

export default medicinesReducer;
