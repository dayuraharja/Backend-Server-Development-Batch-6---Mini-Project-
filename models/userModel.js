import { DataTypes } from "sequelize";
import db from "../config/db.js";
import productTable from "./productModel.js";

const userTable = db.define(
  "users",
  {
    nama: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    alamat: DataTypes.STRING,
    telp: DataTypes.STRING,
  },
  {
    timestamps: true,
    updatedAt: false,
  }
);

userTable.hasMany(productTable, { foreignKey: "id_user", as: "product" });

export default userTable;
