import { Sequelize } from "sequelize";

const db = new Sequelize("dibimbing", "dpa", "arsya.123", {
  host: "127.0.0.1",
  dialect: "mysql",
});

export default db;
