const MongoClient = require("mongodb").MongoClient;
class Database {
  constructor(uri) {
    this.uri = uri;
    this.db = {};
  }
  connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.uri, (error, dbConnection) => {
        if (error) reject(error);
        this.dbConnection = dbConnection;
        resolve(dbConnection);
      });
    });
  }
  static getDbPrimary(){
      return this.db;
  }
}

module.exports = Database;
