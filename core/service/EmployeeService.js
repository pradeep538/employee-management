const EmployeeService = {};
const Employee = require("../model/Employee");
const EmployeeHelper = require("../utils/helper");
EmployeeService.createEmployee = async function(req, res, next) {
  let emp = new Employee({
    ...req.body,
    empId: EmployeeHelper.generateEmpId()
  });
  try {
    let dbRes = await emp.save();
    res.send(dbRes);
  } catch (error) {
    res.status = 400;
    res.send("Something Went wrong");
  }
};
EmployeeService.getEmployee = async function(req, res, next) {
  let emp = new Employee({});
  try {
    let dbRes = await emp.readAll();
    res.send(dbRes);
  } catch (error) {
    res.status = 400;
    res.send("Something Went wrong");
  }
};
EmployeeService.getEmployeeById = async function(req, res, next) {
  console.log("PARAMS===>", req.params);
  let empId = req.params.empId;
  let emp = new Employee({});
  try {
    let dbRes = await emp.readById(empId);
    res.send(dbRes);
  } catch (error) {
    res.status = 400;
    res.send("Something Went wrong");
  }
};

module.exports = EmployeeService;
