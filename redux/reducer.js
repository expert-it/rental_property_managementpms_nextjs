import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./states/auth/slice";

const rootReducer = combineReducers({
  auth: authReducer,
});
export default rootReducer;
