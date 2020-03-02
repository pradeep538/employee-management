import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import toastReducer from "./toastReducer";
export default combineReducers({ employeeReducer, toastReducer });
