const Sequelize = require("sequelize");
const sequelize =  new Sequelize("blog", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});
module.exports = { Sequelize: Sequelize, sequelize: sequelize };
