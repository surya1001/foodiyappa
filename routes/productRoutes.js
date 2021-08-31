const express = require("express");
const router = express.Router();

const {
  getProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers.js");

router.get("/getProducts", getProducts);

router.post("/getProductById", getProductById);
router.post("/updateProduct", updateProduct);
router.post("/addProduct", addProduct);
router.post("/deleteProduct", deleteProduct);

module.exports = router;
