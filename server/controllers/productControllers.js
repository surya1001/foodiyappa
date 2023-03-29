const { response } = require("express");
const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

// const createProduct = async (req, res) => {
//   try {
//     const { name, image, description, category, price } = req.body;
//     const product = await Product.create({
//       name,
//       image,
//       description,
//       category,
//       price,
//     });
//     if (product) {
//       res.status(201).json({
//         name: product.name,
//         image: product.image,
//         description: product.description,
//         category: product.category,
//         price: product.price,
//       });
//     } else {
//       res.status(400).json({ message: "Unable to save product" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

const addProduct = async (req, res) => {
  const product = req.body.product;
  try {
    const newProduct = new Product({
      name: product.name,
      image: product.image,
      description: product.description,
      price: product.price,
      category: product.category,
    });
    await newProduct.save();
    res.send("New Product Added Successfully");
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" + err });
  }
};

const getProductById = async (req, res) => {
  const id = req.body.id;
  try {
    const product = await Product.findById({ _id: id });
    res.send(product);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong", error });
  }
};

const updateProduct = async (req, res) => {
  const updatedproduct = req.body.updatedproduct;

  try {
    const product = await Product.findOne({ _id: updatedproduct._id });

    product.description = updatedproduct.description;
    product.price = updatedproduct.price;
    product.name = updatedproduct.name;
    product.category = updatedproduct.category;
    product.image = updatedproduct.image;

    await product.save();
    response.json({ message: "Product details updated" });
  } catch (error) {
    res.json({ error });
  }
};

const deleteProduct = async (req, res) => {
  const _id = req.body._id;
  try {
    await Product.findOneAndDelete({ _id: _id });
    res.send("Product Deleted Successfully");
  } catch (error) {
    return res.send("Something went wron while deleteing" + error);
  }
};

module.exports = {
  getProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
