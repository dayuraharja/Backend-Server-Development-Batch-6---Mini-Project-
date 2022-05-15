import userTable from "../models/userModel.js";
import productTable from "../models/productModel.js";
import { Op } from "sequelize";

class User {
  static async getUser(req, res) {
    try {
      const getUser = await userTable.findAll();
      res.json(getUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async getProductByUser(req, res) {
    try {
      const getUser = await userTable.findAll({
        include: { model: productTable, required: true, as: "product" },
      });
      res.status(200).json(getUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async getProductByUserId(req, res) {
    try {
      const getUser = await userTable.findAll({
        include: {
          model: productTable,
          as: "product",
          where: { id_user: { [Op.eq]: req.params.id } },
        },
      });
      res.status(200).json(getUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async createUser(req, res) {
    try {
      await userTable.create(req.body);
      res.status(200).json({ message: "create user success" });
    } catch (error) {
      if (error.message == "Validation error") {
        return res.status(400).json({ message: "nama user sudah terbuat" });
      }
      return res.status(400).json({ message: error.message });
    }
  }
  static async deleteUser(req, res) {
    try {
      await userTable.destroy({ where: { id: req.params.id } });
      res.json({ message: "delete user success" });
    } catch (error) {
      res.status(400).json({ messsage: error.message });
    }
  }
  static async login(req, res) {
    let basic = req.headers.authorization;
    basic = basic.split(" ");
    let encode = new Buffer(basic[1], "base64");
    encode = encode.toString();
    encode = encode.split(":");

    try {
      const fetch = await userTable.findOne({
        where: { nama: encode[0] },
      });

      if (!fetch) return res.status(401).json({ message: "username wrong" });
      const password = await fetch.password;
      if ((await password) !== encode[1])
        return res.status(401).json({ message: "password wrong" });
      res.status(200).json({ message: "success login" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default User;
