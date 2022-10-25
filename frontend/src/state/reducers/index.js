import { combineReducers } from "redux";

import users from "./users";
import notes from "./notes";

export const reducers = combineReducers({ users, notes });
