import express from "express";
import User from "../controller/userControler.js";
import Product from "../controller/productController.js";

const route = express.Router();

// User
route.get("/user", User.getUser);
route.get("/user/login", User.login);
route.get("/user/product", User.getProductByUser);
route.get("/user/product/:id", User.getProductByUserId);
route.post("/user", User.createUser);
route.delete("/user/:id", User.deleteUser);

// produk
route.get("/product", Product.getProduct);
route.post("/product", Product.createProduct);
route.delete("/product/:id", Product.deleteProduct);
export default route;
