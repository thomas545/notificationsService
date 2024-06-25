const mongoose = require("mongoose");
const getEnv = require("../core/environments");

DATABASE_URL = getEnv("MONGO_DATABASE_URL");

const databaseConnection = async () => {
  await mongoose.connect(DATABASE_URL).then(() => {
    console.log(`Database connected successfully`);
  });
};

module.exports.initializeMongoConnection = databaseConnection;
