/*
Using sequelize as ORM.
Docs: https://sequelize.org/docs/v6/getting-started/
usage reference: https://medium.com/@chanaka-wijerathne/node-js-with-express-sequelize-mysql-b88d19398a13
*/

const { Sequelize } = require("sequelize");
const getEnv = require("../core/environments");

const sequelize = new Sequelize(
  getEnv("SQL_DB_NAME"),
  getEnv("SQL_DB_USER"),
  getEnv("SQL_DB_PASSWORD"),
  {
    host: getEnv("SQL_DB_HOST"),
    dialect: getEnv("SQL_DB_DIALECT"),

    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to SQL database");
  })
  .catch((err) => {
    console.error("Error while connecting to SQL database:", err);
  });

  
const db = {};
db.session = sequelize;
db.Sequelize = Sequelize;


module.exports.SQLConnection = db;

/*

Example:
const { QueryTypes } = require("sequelize");
const {SQLConnection} = require("./databases/postgresql");

async function get() {
  const records = await SQLConnection.session.query("SELECT * FROM users limit 1", {
    type: QueryTypes.SELECT,
  });
  console.log("rrr ->> ", records);
  SQLConnection.sequelize.close()
}
get();

*/
