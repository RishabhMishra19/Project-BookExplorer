const { config } = require("dotenv");
config();

const ServerConfig = {
  PORT: process.env.PORT || 4001,
  ENV: process.env.ENV || "dev",
  isEnvDev: () => ServerConfig.ENV === "dev",
};

module.exports = { ServerConfig };
