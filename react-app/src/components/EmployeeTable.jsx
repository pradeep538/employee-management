import React from "react";
import { Button, Table } from "reactstrap";
const EmployeeTable = props => {
  const { employeeData,viewClickHandler } = props;

  const getAddressLines = addressList => {
    return addressList.map((address, index) => {
      return (
        <div key={index}>
          {" "}
          {address.addressLine1 + "..."} <br />
        </div>
      );
    });
  };
  return (
    <Table>
      <thead>
        <tr>
          <th>Emp Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Address Count</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employeeData &&
          employeeData.length > 0 &&
          employeeData.map(employee => {
            return (
              <tr key={employee.empId}>
                <th scope="row">
                  {employee && employee.empId && employee.empId}
                </th>
                <td>{employee && employee.name}</td>
                <td>{employee && employee.age}</td>
                <td>{employee && employee.sex}</td>
                {
                  <td>
                    {employee &&
                      employee.addressList &&
                      employee.addressList.length > 0 &&
                      getAddressLines(employee.addressList)}
                  </td>
                }

                <td className="table-actions-container">
                  <Button
                    color="info"
                    onClick={() => {
                      viewClickHandler(employee.empId);
                    }}
                  >
                    View
                  </Button>
                  <Button color="info">Edit</Button>
                  <Button color="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};
export default EmployeeTable;
