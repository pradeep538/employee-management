var express = require("express");
var router = express.Router();
var EmployeeService = require("../service/EmployeeService");
router.post("/", EmployeeService.createEmployee);
router.get("/", EmployeeService.getEmployee);
router.get("/:empId", EmployeeService.getEmployeeById);
module.exports = router;
