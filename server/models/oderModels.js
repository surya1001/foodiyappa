const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    transactionId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    userId: { type: String, required: true },
    orderItem: { type: Array },
    amount: { type: Number, required: true },
    shippingAddress: { type: Object },
    isDelivered: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
