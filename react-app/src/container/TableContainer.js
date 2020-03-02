import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EmployeeTable from "../components/EmployeeTable";
import { setFormMode, getEmployeeByID } from "../actions/employeeAction";
const TableContainer = () => {
  const employeeData = useSelector(
    state => state.employeeReducer && state.employeeReducer.employeeList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    
  }, [dispatch, employeeData]);
  const viewClickHandler = empId => {
    dispatch(setFormMode("view"));
    dispatch(getEmployeeByID(empId));
  };
  if (employeeData) {
    return (
      <EmployeeTable
        employeeData={employeeData}
        viewClickHandler={viewClickHandler}
      />
    );
  } else {
    return <div></div>;
  }
};
export default TableContainer;
