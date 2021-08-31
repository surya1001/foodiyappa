import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Order = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getOrders);
  const { orders, error, loading } = orderState;

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <div>
      <div className="container">
        <h4 className="text-center mt-4">My Orders</h4>

        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div className="row m-3 p-3 shadow" key={order._id}>
                <h5>Order INfo</h5>
                <div className="col-md-7 col-sm-7">
                  <p>
                    <strong style={{ fontWeight: "bold" }}>
                      Order Amount:
                    </strong>{" "}
                    {order.amount}
                  </p>
                  <p>
                    <strong style={{ fontWeight: "bold" }}>Date:</strong>{" "}
                    {order.createdAt.substring(0, 10)}
                  </p>
                  <p>
                    <strong style={{ fontWeight: "bold" }}>Date:</strong>{" "}
                    {order.createdAt.substring(11, 19)}
                  </p>
                  <p>
                    <strong style={{ fontWeight: "bold" }}>
                      Transaction Id:{" "}
                    </strong>
                    {order.transactionId}
                  </p>
                  <p>
                    <strong style={{ fontWeight: "bold" }}>Order Id: </strong>
                    {order._id}
                  </p>
                </div>

                <div className="col-md-5 col-sm-5">
                  <p>
                    <span style={{ fontWeight: "bold" }}>Street: </span>
                    {order.shippingAddress.address}
                  </p>
                  <p>
                    <strong style={{ fontWeight: "bold" }}>City: </strong>
                    {order.shippingAddress.city}
                  </p>
                  <p>
                    <strong style={{ fontWeight: "bold" }}>Country: </strong>
                    {order.shippingAddress.country}
                  </p>
                  <p>
                    <strong style={{ fontWeight: "bold" }}>Zipcode: </strong>
                    {order.shippingAddress.zipcode}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Order;
