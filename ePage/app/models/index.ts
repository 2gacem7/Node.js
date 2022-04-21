const dbConfig = require("../../config/db.config.ts");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  users: "",
};
db.users = require("./user.model.ts")(sequelize, Sequelize);
module.exports = db;
