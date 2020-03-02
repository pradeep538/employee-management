import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  readEmployeeList,
  hideSuccessToast,
  hideErrorToast
} from "./actions/employeeAction";
import TableContainer from "./container/TableContainer";
import EmployeeFormContainer from "./container/EmployeeFormContainer";
import { Container, Row, Col, Form, UncontrolledAlert } from "reactstrap";

const App = () => {
  const [toastSuccessState, successMessage] = useSelector(state => {
    return [state.toastReducer.showSuccessToast, state.toastReducer.message];
  });
  const [toastErrorState, errorMessage] = useSelector(state => {
    return [state.toastReducer.showErrorToast, state.toastReducer.message];
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readEmployeeList());
    setTimeout(() => {
      dispatch(hideSuccessToast());
      dispatch(hideErrorToast());
    }, 3000);
  }, [dispatch, toastErrorState, toastSuccessState]);
  const onDismiss = () => {};
  return (
    <Container fluid>
      {(toastSuccessState || toastErrorState) && (
        <UncontrolledAlert
          color={
            toastSuccessState === true
              ? "success"
              : "" || toastErrorState === true
              ? "danger"
              : ""
          }
        >
          {successMessage || errorMessage}
        </UncontrolledAlert>
      )}
      <Row>
        <Col md="3"></Col>
        <Col md="6" style={{ textAlign: "center" }}>
          <h3>Employee Database</h3>
        </Col>
        <Col md="3"></Col>
      </Row>

      <Row>
        <Col md="2"></Col>
        <Col className="my-container">
          <EmployeeFormContainer />
        </Col>
        <Col md="2"></Col>
      </Row>
      <Row>
        <Col md="1"></Col>
        <Col className="data-table">
          <TableContainer />
        </Col>
        <Col md="1"></Col>
      </Row>
    </Container>
  );
};

export default App;
