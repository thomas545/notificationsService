require("dotenv").config({override: true });

function getEnv(name) {
  try {
    return process.env[name];
  } catch (error) {
    return null;
  }
}

module.exports = getEnv;
