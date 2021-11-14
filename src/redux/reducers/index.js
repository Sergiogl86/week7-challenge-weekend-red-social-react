import { combineReducers } from "redux";
import userReducer from "./userReducer";
import membersReducer from "./membersReducer";

const rootReducer = combineReducers({
  user: userReducer,
  members: membersReducer,
});

export default rootReducer;
