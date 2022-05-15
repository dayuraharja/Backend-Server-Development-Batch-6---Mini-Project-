import productTable from "../models/productModel.js";

class Product {
  static async getProduct(req, res) {
    try {
      const getProduct = await productTable.findAll();
      res.status(200).json(getProduct);
    } catch (error) {
      res.status(400).json({ mesage: error.message });
    }
  }
  static async createProduct(req, res) {
    try {
      console.log(req.body);
      await productTable.create(req.body);
      res.status(200).json({ message: "create prodcut success" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async deleteProduct(req, res) {
    try {
      await productTable.destroy({ where: { id_product: req.params.id } });
      res.status(200).json({ message: "delete product success" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default Product;
