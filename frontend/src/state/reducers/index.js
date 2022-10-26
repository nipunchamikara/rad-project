import { combineReducers } from "redux";

import users from "./users";
import notes from "./notes";
import todos from "./todos";
import medicine from "./medicine";
import reminders from "./reminders";

export const reducers = combineReducers({
  users,
  notes,
  todos,
  medicine,
  reminders,
});
