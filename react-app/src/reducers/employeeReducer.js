import {
  GET_EMPLOYEE_LIST,
  GET_EMPLOYEE_BY_ID,
  SET_FORM_MODE
} from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_LIST:
      return { ...state, employeeList: action.payload };
    case GET_EMPLOYEE_BY_ID:
      let employee = state.employeeList.filter(
        emp => action.payload === emp.empId
      );
      return { ...state, currentEmp: employee[0] };
    case SET_FORM_MODE:
      return { ...state, formMode: action.payload };
    default:
      return state;
  }
};
