const Address = require("./Address");
const db = require("../utils/db");
class Employee {
  constructor(emp) {
    const { empId, name, age, sex, addressList } = emp;
    this.empId = empId;
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.addressList = [];
    addressList &&
      addressList.map(address => {
        this.addressList.push(new Address(address));
      });
  }
  save() {
    return new Promise(async (resolve, reject) => {
      let dbInstance = db.dbInstance();
      if (dbInstance) {
        let result = await dbInstance.collection("employee").insert(this);
        resolve(result.ops[0]);
      } else {
        console.log("No DB Connection");
        let ConnectionError = new Error("Db Connection Error");
        reject(ConnectionError);
      }
    });
  }
  readAll() {
    return new Promise(async (resolve, reject) => {
      let dbInstance = db.dbInstance();
      let employeeList = [];
      if (dbInstance) {
        await dbInstance
          .collection("employee")
          .find({})
          .sort({ _id: -1 })
          .limit(10)
          .forEach(element => {
            employeeList.push(new Employee({ empId: element._id, ...element }));
          });
        resolve(employeeList);
      } else {
        console.log("No DB Connection");
        let ConnectionError = new Error("Db Connection Error");
        reject(ConnectionError);
      }
    });
  }
  readById(empId) {
    return new Promise(async (resolve, reject) => {
      let dbInstance = db.dbInstance();

      if (dbInstance) {
        console.log("1582437210062=====>", empId);
        try {
          let employee = await dbInstance
            .collection("employee")
            .findOne({ empId: empId });
          console.log("EMPLOUYEE===>", employee);
          if (employee)
            resolve(new Employee({ empId: employee._id, ...employee }));
        } catch (error) {
          console.log("ERROR====>", error);
          reject(error);
        }
      } else {
        console.log("No DB Connection");
        let ConnectionError = new Error("Db Connection Error");
        reject(ConnectionError);
      }
    });
  }
}

module.exports = Employee;
