import { AUTH_USER, LOGOUT } from "../constants/actionTypes";

const userReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH_USER:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        authData: action?.payload,
        loading: false,
        errors: null,
      };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default userReducer;
