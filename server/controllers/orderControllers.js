const { response } = require("express");
const { v4: uuidv4 } = require("uuid");
const Order = require("../models/oderModels");

const stripe = require("stripe")(
  "sk_test_51JPKkDSBDo7eXbH7vjfZMhPO7zdVP7HWWNVOs04vrECJI9perOVwTNtnxbWZcnmcov2Wu5aqxn566WsB6cV074H800GeqXhWe2"
);

const placeOreder = async (req, res) => {
  const { token, amount, currentUser, cartItems } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: amount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      const order = new Order({
        transactionId: payment.source.id,
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        shippingAddress: {
          address: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          zipcode: token.card.address_zip,
        },
        amount: amount,
      });

      order.save();
      res.send("Yeh! Payment successful");
    } else {
      res.send("Oops! Payment Failed");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

const getOrders = async (req, res) => {
  const { userId } = req.body;
  try {
    const orders = await Order.find({ userId: userId }).sort({ _id: -1 });
    res.send(orders);
  } catch (error) {
    return res.send(err);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    res.send({ message: error });
  }
};

const deliverOrder = async (req, res) => {
  const _id = req.body._id;
  try {
    const order = await Order.findOne({ _id: _id });
    order.isDelivered = true;
    await order.save();
    return res.send("Order Delivered");
  } catch (error) {
    return res.json({ message: error });
  }
};

module.exports = { placeOreder, getOrders, getAllOrders, deliverOrder };
