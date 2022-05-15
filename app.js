import express from "express";
import route from "./route/index.js";
import db from "./config/db.js";
import userTable from "./models/userModel.js";
import productTable from "./models/productModel.js";

const runDb = async () => {
  try {
    await db.authenticate();
    console.log("database connected");
    await userTable.sync({ alter: true });
    await productTable.sync({ alter: true });
  } catch (error) {
    console.error(error);
  }
};

const app = express();
const port = 5000;

app.use(express.json());
app.use("/", route);

app.listen(port, () => {
  console.log(`listen port ${port}`);
  runDb();
});
