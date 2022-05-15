import { DataTypes } from "sequelize";
import db from "../config/db.js";

const productTable = db.define(
  "products",
  {
    id_product: {
      type: DataTypes.STRING(5),
      primaryKey: true,
      allowNull: false,
    },
    id_user: DataTypes.INTEGER,
    name: { type: DataTypes.STRING, unique: true },
    qty: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
  },
  {
    timestamps: true,
    updatedAt: false,
  }
);

productTable.removeAttribute("id");

export default productTable;
