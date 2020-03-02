import React, { Fragment, useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Form,
  FormFeedback,
  FormText
} from "reactstrap";
import AddressForm from "./AddressForm";
const EmployeeForm = props => {
  const { employeeFormSubmitHandeler } = props;
  const Address = {
    addressLine1: "",
    city: "",
    pincode: "",
    state: ""
  };
  const Employee = {
    name: "",
    age: "",
    sex: ""
  };
  const [errorObject, setError] = useState(Employee);
  const [addressList, setAddressList] = useState(() => [Address]);
  const [employeeForm, setEmployeeForm] = useState(Employee);
  const addressFormHandeler = (indexData, inputName, inputData) => {
    //event.preventDefault();
    const address = addressList[indexData];
    address[inputName] = inputData;
    addressList[indexData] = address;
    setAddressList([...addressList]);
  };
  //Form input change handler
  const employeeFormHandeler = event => {
    setEmployeeForm({
      ...employeeForm,
      [event.target.name]: event.target.value
    });
  };
  //Radio button change handler for sex type
  const employeeSexTypeHandeler = sexType => {
    setEmployeeForm({
      ...employeeForm,
      sex: sexType
    });
  };
  //delete address component handler
  const deleteAddress = addressIndex => {
    const tempAddressList =
      addressList.length > 0 && addressList.splice(addressIndex, 1);
    setAddressList(tempAddressList);
  };
  //add address componenthandler
  const addAddress = () => {
    addressList.push(Address);
    setAddressList([...addressList]);
  };
  useEffect(() => {}, [addressList, employeeForm]);

  const validateAddress = () => {
    for (let index = 0; index < addressList.length; index++) {
      let address = addressList[index];
      if (!address.addressLine1) {
        setError({ [index]: { addressLine1: "Address Line 1 required" } });
        return false;
      } else if (!address.city) {
        setError({ [index]: { city: "City is required" } });
        return false;
      } else if (!address.pincode) {
        setError({ [index]: { pincode: "Pincode is required" } });
        return false;
      } else if (!address.state) {
        setError({ [index]: { state: "State is required" } });
        return false;
      }
    }
    return true;
  };
  //Form validator
  const employeeFormValidator = () => {
    if (!employeeForm.name) {
      setError({ name: "Employee Name is Required" });
    } else if (!employeeForm.age) {
      setError({ age: "Employee Age is Required" });
    } else if (!employeeForm.sex) {
      setError({ sex: "Employee Sex Type is Required" });
    } else {
      const isAddressValid = validateAddress();
      if (isAddressValid) {
        setError({});
        employeeForm.addressList = addressList;
        
      }
    }
  };
  return (
    <Form>
      <Row>
        <Col md="6">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              invalid={!!errorObject["name"]}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={employeeForm["name"]}
              onChange={event => {
                employeeFormHandeler(event);
              }}
            />
            <FormFeedback invalid={errorObject["name"]}>
              &nbsp;{errorObject["name"]}
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              invalid={!!errorObject["age"]}
              type="number"
              min="0"
              max="100"
              name="age"
              id="age"
              value={employeeForm["age"]}
              onChange={event => {
                employeeFormHandeler(event);
              }}
              placeholder="Age"
            />
            <FormFeedback invalid={errorObject["age"]}>
              &nbsp;{errorObject["age"]}
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <Label>Sex</Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <FormGroup check>
                <Label check>
                  <Input
                    invalid
                    type="radio"
                    name="sex"
                    onChange={event => {
                      employeeSexTypeHandeler("male");
                    }}
                    value={employeeForm["sex"] === "male"}
                  />{" "}
                  Male
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="sex"
                    onChange={event => {
                      employeeSexTypeHandeler("female");
                    }}
                    value={employeeForm["sex"] === "female"}
                  />{" "}
                  Female
                </Label>
              </FormGroup>
            </div>
            <FormText className="sex-type-error">
              &nbsp;{errorObject["sex"]}
            </FormText>
          </FormGroup>
        </Col>
      </Row>
      <AddressForm
        addressList={addressList}
        deleteAddress={deleteAddress}
        addressFormHandeler={addressFormHandeler}
        addressFormError={errorObject}
      />
      <Row>
        <Col md="6"></Col>
        <Col md="2">
          <Button color="success" onClick={addAddress}>
            + Address
          </Button>
        </Col>
        <Col md="2">
          <Button color="danger">Clear</Button>
        </Col>
        <Col md="2">
          <Button
            color="success"
            onClick={event => {
              employeeFormValidator(event);
            }}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EmployeeForm;
