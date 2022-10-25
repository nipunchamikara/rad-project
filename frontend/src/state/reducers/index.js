import { combineReducers } from "redux";

import users from "./users";
import notes from "./notes";
import todos from "./todos";

export const reducers = combineReducers({ users, notes, todos });
