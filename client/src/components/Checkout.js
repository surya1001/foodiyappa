import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";

import Loading from "./Loading";
import Error from "./Error";
import Message from "./Message";

const Checkout = ({ amount }) => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getOrders);
  const { loading, error, success } = orderState;

  const tokenGeneration = (token) => {
    console.log(token);
    dispatch(placeOrder(token, amount));
  };

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Message message="Order Placed Successfully" />}

      <StripeCheckout
        stripeKey="pk_test_51JPKkDSBDo7eXbH7RGNV9XZm6iitKEA01qyb4rBzYiyf56iS5ouMrj6FjhOya8fqrt8heC0Cn3KRfz0jW65jKT5700xMjUHaLl"
        shippingAddress
        amount={amount * 100}
        currency="INR"
        token={tokenGeneration}
      >
        <button className="btn btn-primary w-100 rounded">Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
