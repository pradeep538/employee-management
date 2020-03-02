import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";
const AddressForm = props => {
  const {
    addressFormHandeler,
    addressList,
    addressFormError,
    deleteAddress
  } = props;

  return (
    addressList &&
    addressList.map((address, index) => {
      return (
        <div className="address-container" key={index}>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label for="name">Address Line 1</Label>
                <Input
                  invalid={
                    addressFormError[index] &&
                    !!addressFormError[index]["addressLine1"]
                  }
                  type="text"
                  name="addressLine1"
                  id="addressLine1"
                  placeholder="Address Line 1"
                  onChange={event => {
                    addressFormHandeler(
                      index,
                      "addressLine1",
                      event.target.value
                    );
                  }}
                  value={address["addressLine1"]}
                />
                <FormFeedback invalid="true">
                  &nbsp;
                  {addressFormError[index] &&
                    addressFormError[index]["addressLine1"]}
                </FormFeedback>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="name">City</Label>
                <Input
                  invalid={
                    addressFormError[index] && !!addressFormError[index]["city"]
                  }
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter City"
                  value={address["city"]}
                  onChange={event => {
                    addressFormHandeler(index, "city", event.target.value);
                  }}
                />
                <FormFeedback invalid="true">
                  &nbsp;
                  {addressFormError[index] && addressFormError[index]["city"]}
                </FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label for="name">Pincode</Label>
                <Input
                  invalid={
                    addressFormError[index] &&
                    !!addressFormError[index]["pincode"]
                  }
                  type="text"
                  name="pincode"
                  id="pincode"
                  value={address["pincode"]}
                  placeholder="Enter Pincode"
                  onChange={event => {
                    addressFormHandeler(index, "pincode", event.target.value);
                  }}
                />
                <FormFeedback invalid="true">
                  &nbsp;
                  {addressFormError[index] &&
                    addressFormError[index]["pincode"]}
                </FormFeedback>
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label for="name">State</Label>
                <Input
                  invalid={
                    addressFormError[index] &&
                    !!addressFormError[index]["state"]
                  }
                  type="text"
                  name="state"
                  id="state"
                  value={address["state"]}
                  placeholder="Entar State"
                  onChange={event => {
                    addressFormHandeler(index, "state", event.target.value);
                  }}
                />
                <FormFeedback invalid="true">
                  &nbsp;
                  {addressFormError[index] && addressFormError[index]["state"]}
                </FormFeedback>
              </FormGroup>
            </Col>
            <Col md="4" className="action-container">
              {addressList && addressList.length > 1 && (
                <Button
                  color="danger"
                  onClick={() => {
                    deleteAddress(index);
                  }}
                >
                  Delete
                </Button>
              )}
            </Col>
          </Row>
        </div>
      );
    })
  );
};
export default AddressForm;
