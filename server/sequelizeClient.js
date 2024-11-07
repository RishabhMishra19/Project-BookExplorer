const { Sequelize } = require("@sequelize/core");
const { production } = require("./config/config");

const sequelizeClient = new Sequelize({
  dialect: "postgres",
  url: production.url,
  clientMinMessages: "notice",
  ssl: true,
  logging: false,
});

module.exports = { sequelizeClient };
