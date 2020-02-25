const Database = require("./Database");
const connectingString =
  "mongodb://employee:tempman1@ds219839.mlab.com:19839/employee-service";
let dbPrimary = null;
const connectPrimary = async () => {
  if (!dbPrimary) {
    try {
      let DB = new Database(connectingString);
      let connection = await DB.connect();
      dbPrimary = connection.db("employee-service");
    } catch (error) {
      console.log("Db Connection Error : ", error);
    }
  }
};
const dbInstance = () => {
  return dbPrimary;
};
module.exports = { connectPrimary, dbInstance };
