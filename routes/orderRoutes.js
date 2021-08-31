const express = require("express");
const router = express.Router();

const {
  placeOreder,
  getOrders,
  getAllOrders,
  deliverOrder,
} = require("../controllers/orderControllers");

router.post("/placeOrder", placeOreder);

router.post("/getOrders", getOrders);
router.get("/getAllOrders", getAllOrders);
router.post("/deliver", deliverOrder);

module.exports = router;
