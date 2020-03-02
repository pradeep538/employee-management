import {
  GET_EMPLOYEE_LIST,
  HIDE_SUCCESS_TOAST,
  HIDE_ERROR_TOAST,
  SHOW_SUCCESS_TOAST,
  GET_EMPLOYEE_BY_ID,
  SET_FORM_MODE
} from "./types";
import axios from "axios";
export const readEmployeeList = () => {
  return dispatch => {
    axios.get("/employee").then(res => {
      dispatch({
        type: GET_EMPLOYEE_LIST,
        payload: res.data
      });
    });
  };
};
export const saveEmployeeData = employeeData => dispatch => {
  axios.post("/employee", employeeData).then(res => {
    dispatch({
      type: SHOW_SUCCESS_TOAST,
      payload: "Employee Created Cucessfully"
    });
    //readEmployeeList();
  });
};
export const hideSuccessToast = () => ({ type: HIDE_SUCCESS_TOAST });

export const hideErrorToast = () => ({ type: HIDE_ERROR_TOAST });

export const getEmployeeByID = employeeId => ({
  type: GET_EMPLOYEE_BY_ID,
  payload: employeeId
});

export const setFormMode = formState => ({
  type: SET_FORM_MODE,
  payload: formState
});
